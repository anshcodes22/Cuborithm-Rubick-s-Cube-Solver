<script setup lang="ts">
/** SolverView.vue — GreenGreyCold color theme */

import MoveHistory from '@/components/solver/MoveHistory.vue';
import ColorPicker from '@/components/ColorPicker.vue';
import { Colors } from '@/constants/colors';

const props = defineProps<{
    appMode: 'edit' | 'solve';
    selectedColor: Colors | null;
    solutionMoves: string[];
    currentMoveIndex: number;
    isPlaying: boolean;
    isSolving: boolean;
    isSolved: boolean;
    isShuffling: boolean;
    canSolve: boolean;
    validationMessage: string;
    solveError: string;
}>();

const emit = defineEmits<{
    (e: 'update:selectedColor', v: Colors | null): void;
    (e: 'solve'): void;
    (e: 'shuffle'): void;
    (e: 'clear'): void;
    (e: 'play'): void;
    (e: 'pause'): void;
    (e: 'reset'): void;
    (e: 'backToEdit'): void;
    (e: 'clearMoves'): void;
    (e: 'speedChange', speed: number): void;
}>();
</script>

<template>
    <div class="solver-view">

        <!-- LEFT TOOLBAR -->
        <div class="toolbar glass-panel">

            <div class="mode-chip" :class="appMode === 'edit' ? 'chip-edit' : 'chip-solve'">
                {{ appMode === 'edit' ? 'Edit Mode' : 'Solve Mode' }}
            </div>

            <!-- EDIT mode -->
            <template v-if="appMode === 'edit'">
                <div class="t-section">
                    <ColorPicker
                        :model-value="selectedColor"
                        @update:model-value="emit('update:selectedColor', $event)"
                    />
                </div>

                <div class="t-section">
                    <p class="hint">Select a color then click any sticker on the cube</p>
                </div>

                <div class="t-section">
                    <div class="status-chip" :class="validationMessage ? 'status-err' : 'status-ok'">
                        {{ validationMessage || '✓ Cube state is valid' }}
                    </div>
                </div>

                <div class="t-section">
                    <button
                        id="btn-solve"
                        class="btn-primary"
                        :disabled="!canSolve || isSolving"
                        @click="emit('solve')"
                    >
                        <span v-if="isSolving" class="spinner"></span>
                        {{ isSolving ? 'Solving…' : 'Find Solution →' }}
                    </button>
                </div>

                <div v-if="solveError" class="t-section">
                    <div class="status-chip status-err">{{ solveError }}</div>
                </div>
            </template>

            <!-- SOLVE mode -->
            <template v-else>
                <div class="t-section">
                    <div v-if="isSolved" class="solved-label">🎉 Solved!</div>
                </div>
                <div class="t-section">
                    <button class="btn-ghost" @click="emit('backToEdit')">
                        ← Back to Editor
                    </button>
                </div>
            </template>

            <div style="flex:1"></div>

            <div class="t-section bottom-row">
                <button
                    id="btn-shuffle"
                    class="btn-secondary"
                    :disabled="isShuffling || isPlaying"
                    @click="emit('shuffle')"
                >
                    <span v-if="isShuffling" class="spinner sm"></span>
                    Shuffle
                </button>
                <button
                    id="btn-clear"
                    class="btn-secondary"
                    :disabled="isPlaying"
                    @click="emit('clear')"
                >
                    Clear
                </button>
            </div>
        </div>

        <!-- CENTER CUBE -->
        <div class="stage glass-panel">
            <div id="scene-container" class="canvas-area"></div>
            <div class="stage-footer">
                <span>Drag to rotate · Scroll to zoom · Click to paint</span>
            </div>
        </div>

        <!-- RIGHT PANEL -->
        <MoveHistory
            :moves="solutionMoves"
            :current-move-index="currentMoveIndex"
            :is-playing="isPlaying"
            :is-solving="isSolving"
            @play="emit('play')"
            @pause="emit('pause')"
            @reset="emit('reset')"
            @clear="emit('clearMoves')"
            @speed-change="emit('speedChange', $event)"
        />

    </div>
</template>

<style scoped>
.solver-view { display: flex; width: 100%; height: 100%; overflow: hidden; gap: 24px; }

/* ── Toolbar ─────────────────────────────────────────────── */
.toolbar { width: 260px; flex-shrink: 0; height: 100%; display: flex; flex-direction: column; padding: 24px 20px; gap: 0; overflow-y: auto; }
.t-section { padding: 12px 0; border-bottom: 1px solid var(--border); }
.t-section:last-child { border-bottom: none; padding-bottom: 0; }
.t-section:first-child { padding-top: 0; }

.mode-chip { display: flex; align-items: center; justify-content: center; width: 100%; font-size: 0.75rem; font-weight: 700; padding: 6px 12px; border-radius: 20px; margin-bottom: 16px; border: 1px solid var(--border); }
.chip-edit { background: rgba(111, 207, 151, 0.15); color: #FFFFFF; border-color: rgba(111, 207, 151, 0.4); } /* Mint */
.chip-solve { background: rgba(47, 160, 132, 0.15); color: #FFFFFF; border-color: rgba(47, 160, 132, 0.4); } /* Teal */

.hint { font-size: 0.8rem; color: var(--text-muted); line-height: 1.6; margin: 0; }

.status-chip { font-size: 0.75rem; font-weight: 600; padding: 6px 10px; border-radius: var(--r-sm); line-height: 1.4; border: 1px solid; }
.status-ok { background: var(--success); border-color: var(--success-border); color: var(--success-text); }
.status-err { background: var(--danger); border-color: var(--danger-border); color: var(--danger-text); }
.solved-label { font-size: 1.1rem; font-weight: 800; color: var(--text-primary); text-align: center; padding: 4px 0; }

/* ── Buttons ─────────────────────────────────────────────── */
.btn-primary {
    width: 100%; padding: 12px; border: none; border-radius: var(--r-md);
    background: var(--accent-teal); color: #EEEEEE; 
    font-size: 0.9rem; font-weight: 800; font-family: var(--font); cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    transition: all 0.2s ease; box-shadow: 0 4px 15px rgba(47, 160, 132, 0.3);
}
.btn-primary:hover:not(:disabled) { transform: scale(1.02) translateY(-1px); background: #35b394; box-shadow: 0 6px 20px rgba(47, 160, 132, 0.4); }
.btn-primary:active:not(:disabled) { transform: scale(0.98); }
.btn-primary:disabled { opacity: 0.5; filter: grayscale(1); box-shadow: none; cursor: not-allowed; }

.btn-secondary {
    width: 100%; padding: 10px; border-radius: var(--r-md);
    background: rgba(111, 207, 151, 0.15); border: 1px solid rgba(111, 207, 151, 0.4);
    color: #FFFFFF; font-size: 0.85rem; font-weight: 700; cursor: pointer;
    transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 8px;
    box-shadow: 0 0 12px rgba(111, 207, 151, 0.1);
}
.btn-ghost {
    width: 100%; padding: 10px; border-radius: var(--r-md);
    background: transparent; border: 1px solid var(--border);
    color: var(--text-secondary); font-size: 0.85rem; font-weight: 600; cursor: pointer;
    transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 8px;
}
.btn-secondary:hover:not(:disabled) {
    background: rgba(111, 207, 151, 0.25); border-color: #6FCF97;
    box-shadow: 0 0 16px rgba(111, 207, 151, 0.3); color: #fff;
}
.btn-ghost:hover {
    background: rgba(255,255,255,0.05); color: var(--text-primary); border-color: var(--border-hl);
}
.btn-secondary:disabled { opacity: 0.4; cursor: not-allowed; }
.bottom-row { display: flex; flex-direction: column; gap: 8px; }

.spinner {
    display: inline-block; width: 16px; height: 16px;
    border: 2px solid rgba(0,0,0,0.2); border-top-color: #000;
    border-radius: 50%; animation: spin 0.6s linear infinite; flex-shrink: 0;
}
.spinner.sm { width: 14px; height: 14px; border-color: rgba(255,255,255,0.2); border-top-color: #fff; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ── Stage ───────────────────────────────────────────────── */
.stage { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.canvas-area { flex: 1; width: 100%; position: relative; overflow: hidden; }
.canvas-area :deep(canvas) { display: block; width: 100% !important; height: 100% !important; background: transparent !important; }
.stage-footer { padding: 10px 16px; border-top: 1px solid var(--border); background: transparent; text-align: center; }
.stage-footer span { font-size: 0.75rem; color: var(--text-muted); letter-spacing: 0.05em; font-weight: 500; }
</style>
