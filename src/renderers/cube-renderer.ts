import {
    Group, Mesh, MeshStandardMaterial, Object3D, Vector3
} from 'three';
import type { Intersection } from 'three';
import * as Tween from '@tweenjs/tween.js';
import { Sides } from '@/constants/sides';
import { mapColorsToHex, Colors } from '@/constants/colors';
import { CubeletRenderer, type StickerFaceData } from './cubelet-renderer';
import { Axis, getAxisFromSide } from '@/constants/axis';
import type { FaceRotation } from '@/engine/face-rotation';
import type { RubiksCube } from '@/engine/rubiks-cube';

type RotationTween = { rotation: number };

type FaceRotationAnimation = FaceRotation & {
    duration?: number;
    easing?: (amount: number) => number;
};

/** Result of a successful raycast click */
export type ClickedSticker = {
    mesh: Mesh;
    /** Three.js face material index (0-5) */
    faceIndex: number;
    /** Logical sticker data (index into config string + side) */
    sticker: StickerFaceData;
};

export class CubeRenderer {
    private static readonly DEFAULT_ANIM_DURATION = 280;

    private readonly parent: Object3D;
    private readonly dimension: number;

    /**
     * The main Three.js group containing all cubelet meshes.
     * Kept flat (all children are cubelet meshes) at rest; during a rotation
     * animation, face children are temporarily reparented to a rotationGroup.
     */
    private rubiksCubeGroup: Group;

    /** Flat list of CubeletRenderer instances — maintained for sticker updates */
    private readonly cubeletRenderers: CubeletRenderer[] = [];

    public constructor(config: {
        cube: RubiksCube;
        parent: Object3D;
        position: Vector3;
        size: number;
    }) {
        this.rubiksCubeGroup = new Group();
        this.parent = config.parent;
        this.dimension = config.cube.getDimension();

        const sideSize = config.size / this.dimension;

        config.cube.getAllCubelets().forEach(cubelet => {
            const renderer = new CubeletRenderer({
                sideSize,
                cubelet,
                cubeDimension: this.dimension,
            });
            const mesh = renderer.getMesh();
            mesh.parent = this.rubiksCubeGroup;
            this.rubiksCubeGroup.add(mesh);
            this.cubeletRenderers.push(renderer);
        });

        this.rubiksCubeGroup.position.copy(config.position);
        this.parent.add(this.rubiksCubeGroup);
    }

    // ── Public API ───────────────────────────────────────────────────────────

    public getMesh(): Object3D {
        return this.rubiksCubeGroup;
    }

    /**
     * Returns all cubelet Meshes that should be tested during raycasting.
     * Use this to build the objects array for THREE.Raycaster.
     */
    public getRaycasterTargets(): Mesh[] {
        return this.rubiksCubeGroup.children.filter(
            (c): c is Mesh => c instanceof Mesh
        );
    }

    /**
     * Given a raw Intersection from THREE.Raycaster, extract the full
     * ClickedSticker payload or null if the hit face carries no sticker data.
     */
    public getClickedSticker(intersection: Intersection): ClickedSticker | null {
        const mesh = intersection.object as Mesh;
        const faceIndex = intersection.face?.materialIndex;
        if (faceIndex === undefined || faceIndex === null) return null;

        const stickersByFace = mesh.userData['stickersByFace'] as
            | Record<number, StickerFaceData | null>
            | undefined;
        if (!stickersByFace) return null;

        const sticker = stickersByFace[faceIndex];
        if (!sticker) return null; // stickerless face (inner body)

        return { mesh, faceIndex, sticker };
    }

    /**
     * Update the visual color of a specific sticker (by config-string index).
     * Call this after updating the engine state so visuals stay in sync.
     *
     * @param stickerIndex  index into the 54-char config string
     * @param color         Colors enum value, or null for "unset/empty"
     */
    public updateStickerColor(stickerIndex: number, color: Colors | null): void {
        const hex = color !== null ? mapColorsToHex(color) : null;

        for (const mesh of this.rubiksCubeGroup.children) {
            if (!(mesh instanceof Mesh)) continue;
            const stickersByFace = mesh.userData['stickersByFace'] as
                Record<number, StickerFaceData | null> | undefined;
            if (!stickersByFace) continue;

            for (const [faceStr, data] of Object.entries(stickersByFace)) {
                if (data && data.stickerIndex === stickerIndex) {
                    const materials = mesh.material as MeshStandardMaterial[];
                    const mat = materials[Number(faceStr)];
                    if (mat) {
                        mat.color.setHex(hex ?? 0x444444);
                        mat.needsUpdate = true;
                    }
                }
            }
        }
    }

    /**
     * Paint ALL stickers from a full 54-char config string.
     * Useful for resetting the cube visuals to a new logical state.
     *
     * colorMap: e.g. { 'y': Colors.YELLOW, ... }  from mapStringInitialToColor
     */
    public applyFullConfig(config: string, colorMap: (ch: string) => Colors | null): void {
        for (let i = 0; i < config.length; i++) {
            this.updateStickerColor(i, colorMap(config[i]));
        }
    }

    /**
     * Animate a single face rotation. This is the same tween-based animation
     * as before, but now with an optional configurable duration and easing.
     */
    public async rotateFace(faceRotation: FaceRotationAnimation): Promise<void> {
        const axis: Axis = getAxisFromSide(faceRotation.side);
        const axisName = Axis[axis];

        let targetAngle = (Math.PI / 2) * (faceRotation.counterClockwiseDirection ? 1 : -1);
        if (
            faceRotation.side === Sides.BACK ||
            faceRotation.side === Sides.DOWN ||
            faceRotation.side === Sides.LEFT
        ) {
            targetAngle *= -1;
        }

        const rotationGroup = this.buildRotationGroup(axisName, faceRotation);
        this.parent.add(rotationGroup);

        const start: RotationTween = { rotation: 0 };
        const end: RotationTween = { rotation: targetAngle };
        const duration =
            faceRotation.duration !== undefined
                ? faceRotation.duration
                : CubeRenderer.DEFAULT_ANIM_DURATION;

        return new Promise(resolve => {
            new Tween.Tween(start)
                .to(end, duration)
                .easing(faceRotation.easing ?? Tween.Easing.Quadratic.InOut)
                .onUpdate((item: RotationTween) => {
                    (rotationGroup.rotation as any)[axisName] = item.rotation;
                })
                .onComplete(() => {
                    (rotationGroup.rotation as any)[axisName] = targetAngle;
                    rotationGroup.updateMatrixWorld(true);

                    rotationGroup.children.forEach((cubelet: Object3D) => {
                        const worldMatrix = cubelet.matrixWorld.clone();
                        const worldPos = new Vector3().setFromMatrixPosition(worldMatrix);
                        cubelet.parent = this.rubiksCubeGroup;
                        cubelet.position.copy(
                            worldPos.clone().sub(this.rubiksCubeGroup.position)
                        );
                        cubelet.rotation.setFromRotationMatrix(worldMatrix);
                    });

                    this.parent.remove(rotationGroup);
                    resolve();
                })
                .start();
        });
    }

    // ── Private helpers ──────────────────────────────────────────────────────

    private buildRotationGroup(
        axisName: string,
        faceRotation: FaceRotationAnimation
    ): Group {
        // Sort so the "outermost" layer appears first
        let sortFn = (a: number, b: number) => b - a;
        if (
            faceRotation.side === Sides.BACK ||
            faceRotation.side === Sides.DOWN ||
            faceRotation.side === Sides.LEFT
        ) {
            sortFn = (a, b) => a - b;
        }

        let numIgnore = 0;
        let numRotate = this.dimension * this.dimension;
        if (faceRotation.layer !== undefined && faceRotation.layer > 0) {
            numRotate = 4 * (this.dimension - 1);
            numIgnore = (faceRotation.layer - 1) * numRotate + this.dimension * this.dimension;
        }

        const rotationGroup = new Group();
        this.rubiksCubeGroup.children
            .slice()
            .sort((a: Object3D, b: Object3D) =>
                sortFn(
                    (a.position as any)[axisName],
                    (b.position as any)[axisName]
                )
            )
            .filter((_, i) => i >= numIgnore && i < numIgnore + numRotate)
            .forEach(cubelet => {
                cubelet.parent = rotationGroup;
                rotationGroup.add(cubelet);
            });

        this.rubiksCubeGroup.getWorldPosition(rotationGroup.position);
        return rotationGroup;
    }
}