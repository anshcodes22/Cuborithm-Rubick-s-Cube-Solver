<script setup lang="ts">
import { computed, ref, watch } from 'vue';

/**
 * SolutionPanel — displays the full list of solution moves,
 * highlights the current move during animation, and shows
 * the total move count.
 */

const props = defineProps<{
    /** Human-readable move strings: ["R", "U'", "F2", …] */
    moves: string[];
    /** Index of the move currently being animated (-1 = not playing) */
    currentMoveIndex: number;
    /** Whether the animation is actively running */
    isPlaying: boolean;
}>();

const emit = defineEmits<{
    (e: 'play'): void;
    (e: 'pause'): void;
    (e: 'reset'): void;
    (e: 'speedChange', speed: number): void;
}>();

const speed = ref(3); // 1 = slow, 10 = fast

const moveCount = computed(() => props.moves.length);

const progressPct = computed(() => {
    if (moveCount.value === 0) return 0;
    return Math.round(((props.currentMoveIndex + 1) / moveCount.value) * 100);
});

watch(speed, v => emit('speedChange', v));
</script>

<template>
    <div class="solution-panel">
        <!-- Header -->
        <div class="panel-header">
            <span class="panel-title">Solution</span>
            <span class="move-count">{{ moveCount }} moves</span>
        </div>

        <!-- Move list -->
        <div class="move-list-wrapper">
            <div class="move-list">
                <span
                    v-for="(move, i) in moves"
                    :key="i"
                    class="move-chip"
                    :class="{
                        done:    i < currentMoveIndex,
                        current: i === currentMoveIndex,
                        pending: i > currentMoveIndex,
                    }"
                >{{ move }}</span>
                <span v-if="moves.length === 0" class="empty-hint">
                    No moves — cube is already solved!
                </span>
            </div>
        </div>

        <!-- Progress bar -->
        <div v-if="moves.length > 0" class="progress-bar">
            <div class="progress-fill" :style="{ width: progressPct + '%' }"></div>
        </div>

        <!-- Controls -->
        <div class="controls-row">
            <button class="ctrl-btn reset-btn" @click="emit('reset')" title="Restart">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 8a5 5 0 1 1 .9 2.9" />
                    <polyline points="1,6 3,8 5,6" />
                </svg>
            </button>
            <button class="ctrl-btn play-btn" @click="isPlaying ? emit('pause') : emit('play')">
                <!-- Play icon -->
                <svg v-if="!isPlaying" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4 2l10 6-10 6z"/>
                </svg>
                <!-- Pause icon -->
                <svg v-else viewBox="0 0 16 16" fill="currentColor">
                    <rect x="3" y="2" width="4" height="12" rx="1"/>
                    <rect x="9" y="2" width="4" height="12" rx="1"/>
                </svg>
                {{ isPlaying ? 'Pause' : 'Play' }}
            </button>
        </div>

        <!-- Speed slider -->
        <div class="speed-row">
            <span class="speed-label">Speed</span>
            <input
                id="speed-slider"
                type="range"
                min="1"
                max="10"
                v-model.number="speed"
                class="speed-slider"
            />
            <span class="speed-value">{{ speed }}×</span>
        </div>
    </div>
</template>

<style scoped>
.solution-panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* ── Header ─────────────────────────────────────────── */
.panel-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
.panel-title {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.45);
}
.move-count {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.55);
    font-variant-numeric: tabular-nums;
}

/* ── Move list ──────────────────────────────────────── */
.move-list-wrapper {
    max-height: 130px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.15) transparent;
}
.move-list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 2px 0;
}
.empty-hint {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.35);
    font-style: italic;
}
.move-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    padding: 3px 7px;
    border-radius: 6px;
    font-size: 0.78rem;
    font-family: 'Courier New', monospace;
    font-weight: 700;
    letter-spacing: 0.02em;
    transition: background 0.2s, transform 0.15s;
}
.move-chip.done {
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.3);
}
.move-chip.current {
    background: #7c6aff;
    color: #fff;
    transform: scale(1.12);
    box-shadow: 0 2px 10px rgba(124,106,255,0.55);
}
.move-chip.pending {
    background: rgba(255,255,255,0.04);
    color: rgba(255,255,255,0.6);
}

/* ── Progress bar ───────────────────────────────────── */
.progress-bar {
    height: 4px;
    background: rgba(255,255,255,0.08);
    border-radius: 4px;
    overflow: hidden;
}
.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #7c6aff, #38c8ff);
    border-radius: 4px;
    transition: width 0.3s ease;
}

/* ── Controls row ───────────────────────────────────── */
.controls-row {
    display: flex;
    gap: 8px;
    align-items: center;
}
.ctrl-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.82rem;
    font-weight: 600;
    transition: opacity 0.15s, transform 0.1s;
    padding: 6px 12px;
    outline: none;
}
.ctrl-btn:hover { opacity: 0.85; transform: scale(1.03); }
.ctrl-btn:active { transform: scale(0.97); }
.ctrl-btn svg { width: 14px; height: 14px; flex-shrink: 0; }

.reset-btn {
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.7);
    padding: 6px 10px;
}
.play-btn {
    flex: 1;
    justify-content: center;
    background: linear-gradient(135deg, #7c6aff, #38c8ff);
    color: #fff;
}

/* ── Speed slider ───────────────────────────────────── */
.speed-row {
    display: flex;
    align-items: center;
    gap: 8px;
}
.speed-label {
    font-size: 0.68rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255,255,255,0.35);
    white-space: nowrap;
}
.speed-value {
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(255,255,255,0.55);
    min-width: 22px;
    text-align: right;
    font-variant-numeric: tabular-nums;
}
.speed-slider {
    flex: 1;
    -webkit-appearance: none;
    height: 4px;
    background: rgba(255,255,255,0.15);
    border-radius: 4px;
    outline: none;
    cursor: pointer;
}
.speed-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #7c6aff;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(124,106,255,0.6);
}
</style>
