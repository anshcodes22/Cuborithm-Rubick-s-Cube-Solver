<script lang="ts">
/**
 * App.vue — Root orchestrator.
 *
 * Owns all Three.js, solver, and animation state.
 * Delegates layout to MainLayout / SolverView.
 * The Three.js renderer mounts to #scene-container inside SolverView.
 */

import { defineComponent, ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { Raycaster, Vector2, Vector3 } from 'three';

import { World } from './world';
import { CubeRenderer } from './renderers/cube-renderer';
import { RubiksCube } from './engine/rubiks-cube';
import { CubeScrambler } from './engine/cube-scrambler';
import { Colors, mapStringInitialToColor, mapColorsToHex } from './constants/colors';
import { Configuration } from './configuration';
import {
    initKociembaSolver,
    solveCube,
    validateCubeConfig,
    formatMoves,
} from './solvers/3x3/kociemba-solver';
import type { FaceRotation } from './engine/face-rotation';

// Layout + view components
import MainLayout from './components/layout/MainLayout.vue';
import SolverView from './views/SolverView.vue';
import AlgorithmsView from './views/AlgorithmsView.vue';
import PlaygroundView from './views/PlaygroundView.vue';

// ── Types ────────────────────────────────────────────────────────────────────
type NavSection = 'solver' | 'algorithms' | 'playground';
type AppMode    = 'edit' | 'solve';

// ── Constants ────────────────────────────────────────────────────────────────
const EMPTY_CONFIG = '-'.repeat(54);

function charToColor(ch: string): Colors | null {
    if (ch === '-') return null;
    return mapStringInitialToColor(ch) ?? null;
}

export default defineComponent({
    name: 'App',
    components: { MainLayout, SolverView, AlgorithmsView, PlaygroundView },

    setup() {
        // ── Navigation ───────────────────────────────────────────────────────
        const activeSection = ref<NavSection>('solver');

        // ── Solver / Editor state ────────────────────────────────────────────
        const appMode          = ref<AppMode>('edit');
        const selectedColor    = ref<Colors | null>(Colors.WHITE);
        const editorConfig     = ref<string>(EMPTY_CONFIG);
        const solutionMoves    = ref<string[]>([]);
        const solutionRotations = ref<FaceRotation[]>([]);
        const currentMoveIndex = ref<number>(-1);
        const isPlaying        = ref(false);
        const animSpeedFactor  = ref(3);
        const isSolving        = ref(false);
        const isSolved         = ref(false);
        const isShuffling      = ref(false);
        const solveError       = ref('');

        // ── Non-reactive Three.js objects ────────────────────────────────────
        let world: World;
        let cubeRenderer: CubeRenderer;
        let engineCube: RubiksCube;
        let raycaster: Raycaster;

        // ── Computed ─────────────────────────────────────────────────────────
        const validationResult  = computed(() => validateCubeConfig(editorConfig.value));
        const canSolve          = computed(() => validationResult.value.valid);
        const validationMessage = computed(() =>
            validationResult.value.valid ? '' : (validationResult.value as any).reason
        );

        // ── Scene bootstrap ──────────────────────────────────────────────────
        function initScene() {
            const container = document.getElementById('scene-container');
            if (!container) return;

            world = new World(container);
            world.start();

            engineCube    = new RubiksCube({ dimension: 3 });
            cubeRenderer  = new CubeRenderer({
                parent:   world.getScene(),
                cube:     engineCube,
                position: new Vector3(0, 0, 0),
                size:     4.8,
            });

            resetEditorVisuals();

            raycaster = new Raycaster();
            const canvas = world.getRendererDomElement();
            canvas.addEventListener('click', onCanvasClick);
        }

        // ── Editor helpers ────────────────────────────────────────────────────
        function resetEditorVisuals() {
            for (let i = 0; i < 54; i++) {
                cubeRenderer.updateStickerColor(i, null);
            }
        }

        function applyConfigVisuals(config: string) {
            for (let i = 0; i < 54; i++) {
                cubeRenderer.updateStickerColor(i, charToColor(config[i]));
            }
        }

        function setSticker(stickerIndex: number, color: Colors | null) {
            const chars = editorConfig.value.split('');
            if (color === null) {
                chars[stickerIndex] = '-';
            } else {
                const colorMap: Record<Colors, string> = {
                    [Colors.YELLOW]: 'y',
                    [Colors.ORANGE]: 'o',
                    [Colors.BLUE]:   'b',
                    [Colors.RED]:    'r',
                    [Colors.GREEN]:  'g',
                    [Colors.WHITE]:  'w',
                };
                chars[stickerIndex] = colorMap[color];
            }
            editorConfig.value = chars.join('');
            cubeRenderer.updateStickerColor(stickerIndex, color);
        }

        // ── Raycasting ────────────────────────────────────────────────────────
        function onCanvasClick(event: MouseEvent) {
            if (appMode.value !== 'edit' || !world) return;

            const canvas = world.getRendererDomElement();
            const rect   = canvas.getBoundingClientRect();
            const ndc    = new Vector2(
                ((event.clientX - rect.left) / rect.width)  *  2 - 1,
                -((event.clientY - rect.top)  / rect.height) *  2 + 1
            );

            raycaster.setFromCamera(ndc, world.getCamera());
            const targets       = cubeRenderer.getRaycasterTargets();
            const intersections = raycaster.intersectObjects(targets, false);

            for (const intersection of intersections) {
                const hit = cubeRenderer.getClickedSticker(intersection);
                if (hit) {
                    setSticker(hit.sticker.stickerIndex, selectedColor.value);
                    return;
                }
            }
        }

        // ── Reset actions ─────────────────────────────────────────────────────
        function clearCube() {
            editorConfig.value = EMPTY_CONFIG;
            resetEditorVisuals();
            solveError.value       = '';
            solutionMoves.value    = [];
            solutionRotations.value = [];
            currentMoveIndex.value = -1;
            isSolved.value         = false;
        }

        async function shuffleCube() {
            if (isShuffling.value || isPlaying.value) return;
            isShuffling.value = true;
            solveError.value  = '';
            solutionMoves.value    = [];
            solutionRotations.value = [];
            currentMoveIndex.value = -1;
            isSolved.value         = false;

            if (appMode.value === 'solve') appMode.value = 'edit';

            engineCube = new RubiksCube({ dimension: 3 });
            const scrambler = new CubeScrambler(Configuration.world.scrambleMoves());
            const rotations = scrambler.scramble(engineCube);

            for (const r of rotations) {
                await cubeRenderer.rotateFace({
                    ...r,
                    duration: Configuration.world.scrambleRotationDuration,
                });
                engineCube = engineCube.rotateFace(r);
            }

            editorConfig.value = engineCube.getConfiguration();
            applyConfigVisuals(editorConfig.value);
            isShuffling.value = false;
        }

        // ── Solver ────────────────────────────────────────────────────────────
        async function runSolver() {
            if (!canSolve.value) {
                solveError.value = validationMessage.value;
                return;
            }
            isSolving.value        = true;
            solveError.value       = '';
            solutionMoves.value    = [];
            solutionRotations.value = [];
            currentMoveIndex.value = -1;
            isSolved.value         = false;

            try {
                const rotations         = solveCube(editorConfig.value);
                solutionRotations.value = rotations;
                solutionMoves.value     = formatMoves(rotations);
                appMode.value           = 'solve';
                engineCube              = new RubiksCube({ clone: editorConfig.value });
            } catch (e: any) {
                solveError.value = e?.message ?? 'Solver failed';
            } finally {
                isSolving.value = false;
            }
        }

        // ── Animation ─────────────────────────────────────────────────────────
        function playAnimation() {
            if (isPlaying.value) return;
            if (currentMoveIndex.value >= solutionRotations.value.length - 1) {
                currentMoveIndex.value = -1;
                engineCube = new RubiksCube({ clone: editorConfig.value });
                applyConfigVisuals(editorConfig.value);
            }
            isPlaying.value = true;
            stepAnimation();
        }

        async function stepAnimation() {
            if (!isPlaying.value) return;
            const idx = currentMoveIndex.value + 1;
            if (idx >= solutionRotations.value.length) {
                isPlaying.value        = false;
                isSolved.value         = true;
                currentMoveIndex.value = solutionRotations.value.length;
                return;
            }
            currentMoveIndex.value = idx;
            const rotation = solutionRotations.value[idx];
            const duration = Math.round(
                Configuration.renderers.rotationDuration / animSpeedFactor.value
            );
            await cubeRenderer.rotateFace({ ...rotation, duration });
            engineCube = engineCube.rotateFace(rotation);
            stepAnimation();
        }

        function pauseAnimation()  { isPlaying.value = false; }
        function onSpeedChange(s: number) { animSpeedFactor.value = s; }

        function resetAnimation() {
            isPlaying.value        = false;
            currentMoveIndex.value = -1;
            isSolved.value         = false;
            engineCube             = new RubiksCube({ clone: editorConfig.value });
            applyConfigVisuals(editorConfig.value);
        }

        function clearHistory() {
            solutionMoves.value    = [];
            solutionRotations.value = [];
            currentMoveIndex.value = -1;
            isPlaying.value        = false;
            isSolved.value         = false;
        }

        function goToEditMode() {
            isPlaying.value        = false;
            isSolved.value         = false;
            appMode.value          = 'edit';
            currentMoveIndex.value = -1;
            solutionMoves.value    = [];
            solutionRotations.value = [];
            solveError.value       = '';
            applyConfigVisuals(editorConfig.value);
        }

        // ── Section navigation ────────────────────────────────────────────────
        function navigate(section: NavSection) {
            activeSection.value = section;
            
            if (section === 'solver') {
                world?.start();
            } else {
                world?.stop();
            }
        }

        // ── Lifecycle ─────────────────────────────────────────────────────────
        onMounted(async () => {
            await nextTick();
            initScene();
            initKociembaSolver();
        });

        onUnmounted(() => {
            world?.stop();
            world?.getRendererDomElement()?.removeEventListener('click', onCanvasClick);
        });

        return {
            // Navigation
            activeSection,
            navigate,
            // Solver state
            appMode,
            selectedColor,
            editorConfig,
            solutionMoves,
            currentMoveIndex,
            isPlaying,
            isSolving,
            isSolved,
            isShuffling,
            solveError,
            canSolve,
            validationMessage,
            // Actions
            clearCube,
            shuffleCube,
            runSolver,
            playAnimation,
            pauseAnimation,
            resetAnimation,
            clearHistory,
            onSpeedChange,
            goToEditMode,
        };
    },
});
</script>

<template>
    <MainLayout
        :section="activeSection"
        @navigate="navigate"
    >
        <!-- ── Section views (use v-show so Three.js canvas stays mounted) ── -->
        <SolverView
            v-show="activeSection === 'solver'"
            :app-mode="appMode"
            :selected-color="selectedColor"
            :solution-moves="solutionMoves"
            :current-move-index="currentMoveIndex"
            :is-playing="isPlaying"
            :is-solving="isSolving"
            :is-solved="isSolved"
            :is-shuffling="isShuffling"
            :can-solve="canSolve"
            :validation-message="validationMessage"
            :solve-error="solveError"
            @update:selected-color="selectedColor = $event"
            @solve="runSolver"
            @shuffle="shuffleCube"
            @clear="clearCube"
            @play="playAnimation"
            @pause="pauseAnimation"
            @reset="resetAnimation"
            @back-to-edit="goToEditMode"
            @clear-moves="clearHistory"
            @speed-change="onSpeedChange"
        />

        <AlgorithmsView v-if="activeSection === 'algorithms'" />
        <PlaygroundView v-if="activeSection === 'playground'" />
    </MainLayout>
</template>
