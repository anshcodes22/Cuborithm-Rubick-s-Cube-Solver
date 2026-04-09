<script setup lang="ts">
/**
 * PlaygroundView.vue
 * Glues together the independent PlaygroundCube and PlaygroundControls components.
 */
import { ref, nextTick } from 'vue';
import PlaygroundCube from '@/components/playground/PlaygroundCube.vue';
import PlaygroundControls from '@/components/playground/PlaygroundControls.vue';
import { parseSolutionString, formatMoves } from '@/solvers/3x3/kociemba-solver';
import { Configuration } from '@/configuration';
import type { FaceRotation } from '@/engine/face-rotation';

// To access the imperative methods on the cube implementation
const cubeRef = ref<InstanceType<typeof PlaygroundCube> | null>(null);

const moveHistory = ref<string[]>([]);

const handleScramble = () => {
    moveHistory.value = [];
    cubeRef.value?.scramble();
};

const handleReset = () => {
    moveHistory.value = [];
    cubeRef.value?.reset();
};

const handleStringExecution = (notation: string, speedFactor: number) => {
    try {
        const moves = parseSolutionString(notation);
        if (moves.length === 0) return;
        const duration = Math.round(Configuration.renderers.rotationDuration / speedFactor);
        cubeRef.value?.executeMoves(moves, duration);
    } catch (e) {
        console.error("Failed to parse notation:", e);
    }
};

const onMoveCompleted = (rotation: FaceRotation) => {
    const stringNotation = formatMoves([rotation])[0];
    if (stringNotation) {
        moveHistory.value.push(stringNotation);
        // Autoscroll history
        nextTick(() => {
            const histEl = document.getElementById('pg-history');
            if (histEl) histEl.scrollLeft = histEl.scrollWidth;
        });
    }
};
</script>

<template>
    <div class="playground-layout">
        
        <!-- Left/Center: The actual WebGL Cube -->
        <div class="stage glass-panel">
            <PlaygroundCube ref="cubeRef" @move-completed="onMoveCompleted" />
            <div class="stage-footer">
                <span>Free Exploration Mode · Type or Keyboard shortcuts to rotate</span>
            </div>
        </div>

        <!-- Right: Control Panel containing Scramble, input, settings -->
        <PlaygroundControls 
            @scramble="handleScramble" 
            @reset="handleReset" 
            @execute-string="handleStringExecution" 
        />

        <!-- Bottom ABSOLUTE overlay: simple Move History logger for Playground -->
        <div v-if="moveHistory.length > 0" class="history-strip glass-panel">
            <span class="hist-lbl">Playground History</span>
            <div id="pg-history" class="hist-track">
                <span v-for="(mv, i) in moveHistory" :key="i" class="hist-chip">{{ mv }}</span>
            </div>
            <button class="clear-hist" @click="moveHistory = []">✕</button>
        </div>

    </div>
</template>

<style scoped>
.playground-layout {
    display: flex; width: 100%; height: 100%; overflow: hidden; gap: 24px; position: relative;
}

/* ── Stage ───────────────────────────────────────────────── */
.stage { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.stage-footer { padding: 10px 16px; border-top: 1px solid var(--border); background: transparent; text-align: center; }
.stage-footer span { font-size: 0.75rem; color: rgba(238,238,238,0.5); letter-spacing: 0.05em; font-weight: 500; }

/* ── History Strip ───────────────────────────────────────── */
.history-strip {
    position: absolute; bottom: 16px; left: 16px; right: 320px; /* leaves space for right panel */
    padding: 12px 16px; display: flex; align-items: center; gap: 16px; border-radius: var(--r-md);
    z-index: 10;
}
.hist-lbl { font-size: 0.7rem; font-weight: 700; color: #FFFFFF; text-transform: uppercase; letter-spacing: 0.1em; flex-shrink: 0; }
.hist-track {
    flex: 1; display: flex; gap: 6px; overflow-x: auto; scroll-behavior: smooth;
    padding-bottom: 4px; mask-image: linear-gradient(90deg, #000 90%, transparent);
    scrollbar-width: none; /* hide native scrollbar for cleanliness */
}
.hist-track::-webkit-scrollbar { display: none; }
.hist-chip {
    padding: 4px 8px; border-radius: 4px; background: rgba(0,0,0,0.2); 
    color: var(--text-secondary); font-family: var(--mono); font-size: 0.8rem; font-weight: 700;
}
.clear-hist {
    background: transparent; border: 1px solid var(--border); color: #fff; width: 24px; height: 24px;
    border-radius: 50%; font-size: 0.7rem; cursor: pointer; flex-shrink: 0; transition: 0.2s;
}
.clear-hist:hover { background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.4); color: #f87171; }
</style>
