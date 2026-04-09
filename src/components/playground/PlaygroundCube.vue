<script setup lang="ts">
/**
 * PlaygroundCube.vue
 * Encapsulates a fully independent Three.js Rubik's Cube context.
 */
import { onMounted, onUnmounted, nextTick } from 'vue';
import { Vector3 } from 'three';
import { World } from '@/world';
import { RubiksCube } from '@/engine/rubiks-cube';
import { CubeRenderer } from '@/renderers/cube-renderer';
import { CubeScrambler } from '@/engine/cube-scrambler';
import { Configuration } from '@/configuration';
import type { FaceRotation } from '@/engine/face-rotation';
import { Sides } from '@/constants/sides';
import { Colors, mapStringInitialToColor } from '@/constants/colors';

// Emit when moves finish animating so the parent can log history
const emit = defineEmits<{ (e: 'moveCompleted', rotation: FaceRotation): void }>();

let world: World | null = null;
let engineCube: RubiksCube;
let cubeRenderer: CubeRenderer;
let isAnimating = false;
let moveQueue: { rotation: FaceRotation; durationMs: number }[] = [];

// ── Startup & Teardown ────────────────────────────────────────────────────────
onMounted(async () => {
    await nextTick();
    const container = document.getElementById('playground-scene-container');
    if (!container) return;

    world = new World(container);
    world.start();

    engineCube = new RubiksCube({ dimension: 3 });
    cubeRenderer = new CubeRenderer({
        parent: world.getScene(),
        cube: engineCube,
        position: new Vector3(0, 0, 0),
        size: 4.8,
    });

    window.addEventListener('keydown', handleKeyBinding);
});

onUnmounted(() => {
    world?.stop();
    window.removeEventListener('keydown', handleKeyBinding);
});

// ── Logic ───────────────────────────────────────────────────────────────────
function charToColor(ch: string): Colors | null {
    if (ch === '-') return null;
    return mapStringInitialToColor(ch) ?? null;
}

function applyConfiguration(config: string) {
    for (let i = 0; i < 54; i++) {
        cubeRenderer.updateStickerColor(i, charToColor(config[i]));
    }
}

async function processQueue() {
    if (isAnimating || moveQueue.length === 0) return;
    isAnimating = true;

    while (moveQueue.length > 0) {
        const { rotation, durationMs } = moveQueue.shift()!;
        await cubeRenderer.rotateFace({ ...rotation, duration: durationMs });
        engineCube = engineCube.rotateFace(rotation);
        emit('moveCompleted', rotation);
    }
    isAnimating = false;
}

// ── Public API ──────────────────────────────────────────────────────────────
export interface PlaygroundCubeApi {
    executeMoves: (rotations: FaceRotation[], durationMs: number) => void;
    scramble: () => void;
    reset: () => void;
    isBusy: () => boolean;
}

const executeMoves = (rotations: FaceRotation[], durationMs: number) => {
    rotations.forEach(r => moveQueue.push({ rotation: r, durationMs }));
    processQueue();
};

const scramble = () => {
    if (isAnimating) return;
    engineCube = new RubiksCube({ dimension: 3 });
    const scrambler = new CubeScrambler(Configuration.world.scrambleMoves());
    const moves = scrambler.scramble(engineCube);
    executeMoves(moves, Configuration.world.scrambleRotationDuration);
};

const reset = () => {
    if (isAnimating) {
        moveQueue = []; // clear backlog
    }
    engineCube = new RubiksCube({ dimension: 3 });
    applyConfiguration(engineCube.getConfiguration());
    isAnimating = false;
};

const isBusy = () => isAnimating || moveQueue.length > 0;

defineExpose<PlaygroundCubeApi>({ executeMoves, scramble, reset, isBusy });

// ── Keyboard specific logic ─────────────────────────────────────────────────
const handleKeyBinding = (e: KeyboardEvent) => {
    // Only accept keys if user isn't typing in an input
    if (e.target instanceof HTMLInputElement) return;

    const key = e.key.toUpperCase();
    const keyMap: Record<string, Sides> = {
        'R': Sides.RIGHT, 'L': Sides.LEFT, 'U': Sides.UP,
        'D': Sides.DOWN,  'F': Sides.FRONT,'B': Sides.BACK
    };

    if (keyMap[key] !== undefined) {
        // Fast move duration for keyboard plays
        executeMoves([{ side: keyMap[key], counterClockwiseDirection: e.shiftKey, layer: 0 }], 150);
    }
};
</script>

<template>
    <div id="playground-scene-container" class="playground-canvas"></div>
</template>

<style scoped>
.playground-canvas {
    width: 100%; height: 100%; position: relative; overflow: hidden;
}
.playground-canvas :deep(canvas) {
    display: block; width: 100% !important; height: 100% !important; background: transparent !important;
}
</style>
