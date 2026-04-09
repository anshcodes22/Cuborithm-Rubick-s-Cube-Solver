import {
    Mesh, Material, Vector3, MeshStandardMaterial
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import { Sides } from '@/constants/sides';
import { mapColorsToHex } from '@/constants/colors';
import type { Cubelet } from '@/engine/rubiks-cube';

/** Maps Three.js geometry face index  →  Rubik's Cube side */
const FACE_INDEX_TO_SIDE: Record<number, Sides> = {
    0: Sides.RIGHT,
    1: Sides.LEFT,
    2: Sides.UP,
    3: Sides.DOWN,
    4: Sides.FRONT,
    5: Sides.BACK,
};

/** Dark plastic color for the stickerless body */
const STICKERLESS_COLOR = 0x0a0b0c;
/** Gray placeholder used in edit-mode for unset stickers */
export const EMPTY_STICKER_COLOR = 0x444444;

export type StickerFaceData = {
    /** Index into the 54-char engine config string (side*9 + y*3 + x) */
    stickerIndex: number;
    /** Which logical side this face belongs to */
    side: Sides;
};

type Config = {
    sideSize: number;
    cubelet: Cubelet;
    cubeDimension: number;
};

export class CubeletRenderer {
    private readonly cubeletMesh: Mesh;

    public constructor(config: Config) {
        // Slightly smaller than grid cell + rounding for a premium look
        const gap = config.cubeDimension * 0.018;
        const size = config.sideSize - gap;
        const geometry = new RoundedBoxGeometry(size, size, size, 4, 0.05);

        const position: Vector3 = this.getPositionFromCubelet(config);
        position.subScalar((config.cubeDimension - 1) * 0.5);
        position.multiplyScalar(config.sideSize);

        const materials = this.createMaterials(config.cubelet);

        this.cubeletMesh = new Mesh(geometry, materials);
        this.cubeletMesh.castShadow = true;
        this.cubeletMesh.receiveShadow = true;
        this.cubeletMesh.position.set(position.x, position.y, position.z);

        // ── userData for raycasting ──────────────────────────────────────────
        // We store the sticker info for each Three.js geometry face index (0-5).
        // In the raycaster callback, intersection.face.materialIndex gives us
        // this index so we can immediately find the sticker to update.
        const stickersByFace: Record<number, StickerFaceData | null> = {};
        for (let faceIndex = 0; faceIndex <= 5; faceIndex++) {
            const side = FACE_INDEX_TO_SIDE[faceIndex];
            const sticker = config.cubelet.stickers.find(s => s.side === side);
            stickersByFace[faceIndex] = sticker
                ? { stickerIndex: sticker.id, side }
                : null;
        }
        this.cubeletMesh.userData['stickersByFace'] = stickersByFace;
    }

    public getMesh(): Mesh {
        return this.cubeletMesh;
    }

    /**
     * Update the visual color of a single face on this cubelet.
     * Pass `null` for the "empty / unset" gray placeholder.
     *
     * @param faceIndex  Three.js material index (0-5)
     * @param hexColor   0xRRGGBB, or null for the EMPTY placeholder
     */
    public updateFaceColor(faceIndex: number, hexColor: number | null): void {
        const materials = this.cubeletMesh.material as MeshStandardMaterial[];
        const mat = materials[faceIndex];
        if (!mat) return;
        mat.color.setHex(hexColor ?? EMPTY_STICKER_COLOR);
        mat.needsUpdate = true;
    }

    // ── Private helpers ──────────────────────────────────────────────────────

    private createMaterials(cubelet: Cubelet): Material[] {
        return Array.from({ length: 6 }).map((_, faceIndex) => {
            const side = FACE_INDEX_TO_SIDE[faceIndex];
            const sticker = cubelet.stickers.find(s => s.side === side);

            const color = sticker
                ? mapColorsToHex(sticker.color)
                : STICKERLESS_COLOR;

            return new MeshStandardMaterial({
                color,
                roughness: 0.45,
                metalness: 0.05,
                transparent: false,
            });
        });
    }

    private getPositionFromCubelet(config: Config): Vector3 {
        let x = 0;
        let y = 0;
        let z = 0;
        const sticker = config.cubelet.stickers[0];
        const d = config.cubeDimension;

        switch (sticker.side) {
            case Sides.UP:
                y = d - 1;
                x = sticker.x;
                z = sticker.y;
                break;
            case Sides.DOWN:
                y = 0;
                x = sticker.x;
                z = d - 1 - sticker.y;
                break;
            case Sides.RIGHT:
                x = d - 1;
                y = d - 1 - sticker.y;
                z = d - 1 - sticker.x;
                break;
            case Sides.LEFT:
                x = 0;
                y = d - 1 - sticker.y;
                z = sticker.x;
                break;
            case Sides.FRONT:
                z = d - 1;
                x = sticker.x;
                y = d - 1 - sticker.y;
                break;
            case Sides.BACK:
                z = 0;
                x = d - 1 - sticker.x;
                y = d - 1 - sticker.y;
                break;
        }
        return new Vector3(x, y, z);
    }
}
