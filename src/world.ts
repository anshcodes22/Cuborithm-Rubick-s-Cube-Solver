import {
    AmbientLight,
    Clock,
    Color,
    DirectionalLight,
    PCFSoftShadowMap,
    PerspectiveCamera,
    PointLight,
    Scene,
    Vector3,
    WebGLRenderer,
} from 'three';
import * as Tween from '@tweenjs/tween.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CAMERA_CLOSE = 14;
const CAMERA_FAR = 60;

export type AnimationFunction = (delta: number) => void;

export class World {
    private readonly scene: Scene;
    private readonly camera: PerspectiveCamera;
    private readonly renderer: WebGLRenderer;
    private readonly clock: Clock;
    private readonly controls: OrbitControls;
    private readonly animations: AnimationFunction[] = [];

    public constructor(container: HTMLElement) {
        this.clock = new Clock();

        // ── Scene ──────────────────────────────────────────────────────────
        this.scene = new Scene();
        this.scene.background = new Color('#1F6F5F');

        // ── Lighting ───────────────────────────────────────────────────────
        // Soft ambient fill
        const ambient = new AmbientLight(0xffffff, 0.6);
        this.scene.add(ambient);

        // Main key light with shadows
        const keyLight = new DirectionalLight(0xffffff, 2.8);
        keyLight.position.set(12, 18, 14);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.width = 2048;
        keyLight.shadow.mapSize.height = 2048;
        keyLight.shadow.camera.near = 0.5;
        keyLight.shadow.camera.far = 80;
        keyLight.shadow.camera.left = -20;
        keyLight.shadow.camera.right = 20;
        keyLight.shadow.camera.top = 20;
        keyLight.shadow.camera.bottom = -20;
        keyLight.shadow.bias = -0.001;
        this.scene.add(keyLight);

        // Cool accent fill from below-left
        const fillLight = new DirectionalLight(0x2FA084, 0.8);
        fillLight.position.set(-10, -8, 6);
        this.scene.add(fillLight);

        // Subtle warm rim light
        const rimLight = new PointLight(0x6FCF97, 0.4, 40);
        rimLight.position.set(0, -10, -8);
        this.scene.add(rimLight);

        // ── Camera ─────────────────────────────────────────────────────────
        this.camera = this.buildCamera(container);

        // ── Renderer ───────────────────────────────────────────────────────
        this.renderer = new WebGLRenderer({ antialias: true, alpha: false });
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // ── Controls ───────────────────────────────────────────────────────
        this.controls = this.buildControls(container);

        this.adjustSize(container);
        container.appendChild(this.renderer.domElement);
        window.addEventListener('resize', () => this.adjustSize(container));
    }

    // ── Public API ───────────────────────────────────────────────────────────

    public start(): void {
        this.renderer.setAnimationLoop(() => {
            Tween.update();
            this.controls.update();
            const delta = this.clock.getDelta();
            this.animations.forEach(fn => fn(delta));
            this.renderer.render(this.scene, this.camera);
        });
    }

    public stop(): void {
        this.renderer.setAnimationLoop(null);
    }

    public getScene(): Scene {
        return this.scene;
    }

    /** Expose camera so App can pass it to THREE.Raycaster */
    public getCamera(): PerspectiveCamera {
        return this.camera;
    }

    /** Expose renderer's DOM element for mouse-event binding */
    public getRendererDomElement(): HTMLCanvasElement {
        return this.renderer.domElement;
    }

    public addAnimationLoop(fn: AnimationFunction): void {
        this.animations.push(fn);
    }

    /** Disable / enable orbit-controls (disable while painting stickers) */
    public setControlsEnabled(enabled: boolean): void {
        this.controls.enabled = enabled;
    }

    public bringCameraToCenter(): Promise<void> {
        return this.tweenCamera(CAMERA_CLOSE, 5, 5);
    }

    public sendCameraAway(): Promise<void> {
        return this.tweenCamera(CAMERA_FAR, 0, -5);
    }

    // ── Private helpers ──────────────────────────────────────────────────────

    private tweenCamera(length: number, x: number, y: number): Promise<void> {
        return new Promise(resolve => {
            const from = {
                length: Math.round(this.camera.position.length()),
                x: this.camera.position.x,
                y: this.camera.position.y,
            };
            const to = { length, x, y };
            new Tween.Tween(from)
                .to(to, 500)
                .easing(Tween.Easing.Quadratic.InOut)
                .onUpdate(v => {
                    this.camera.position.setLength(v.length);
                    this.camera.position.x = v.x;
                    this.camera.position.y = v.y;
                    this.camera.lookAt(new Vector3(0, 0, 0));
                })
                .onComplete(v => {
                    this.camera.position.setLength(v.length);
                    this.camera.position.x = v.x;
                    this.camera.position.y = v.y;
                    this.camera.lookAt(new Vector3(0, 0, 0));
                    resolve();
                })
                .start();
        });
    }

    private buildCamera(container: HTMLElement): PerspectiveCamera {
        const camera = new PerspectiveCamera(
            38,
            container.clientWidth / container.clientHeight,
            0.1,
            200
        );
        camera.position.set(5, 6, CAMERA_CLOSE);
        return camera;
    }

    private buildControls(container: HTMLElement): OrbitControls {
        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.06;
        controls.minDistance = 8;
        controls.maxDistance = 50;
        controls.enablePan = false;
        return controls;
    }

    private adjustSize(container: HTMLElement): void {
        this.camera.aspect = container.clientWidth / container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
}