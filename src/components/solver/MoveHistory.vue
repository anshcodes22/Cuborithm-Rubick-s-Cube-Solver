<script setup lang="ts">
/** MoveHistory.vue — GreenGreyCold color theme */
const props = defineProps<{
    moves: string[]; currentMoveIndex: number;
    isPlaying: boolean; isSolving: boolean;
}>();
const emit = defineEmits<{
    (e:'play'):void; (e:'pause'):void; (e:'reset'):void; (e:'clear'):void; (e:'speedChange', speed:number):void;
}>();
import { ref, computed, watch } from 'vue';
const speed = ref(3);
watch(speed, v => emit('speedChange', v));
const totalMoves = computed(() => props.moves.length);
const progressPct = computed(() => totalMoves.value===0?0:Math.round(((Math.max(0,props.currentMoveIndex+1))/totalMoves.value)*100));
</script>

<template>
    <aside class="panel glass-panel">
        <div class="panel-head">
            <div class="head-left">
                <span class="panel-title">Solve History</span>
                <span v-if="totalMoves > 0" class="badge">{{ totalMoves }}</span>
            </div>
            <button v-if="totalMoves > 0" class="clear-btn" @click="emit('clear')">Clear</button>
        </div>

        <div v-if="totalMoves > 0" class="progress-track">
            <div class="progress-fill" :style="{ width: progressPct + '%' }"></div>
        </div>

        <div v-if="totalMoves === 0 && !isSolving" class="empty">
            <div class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></div>
            <p class="empty-title">No moves yet</p>
            <p class="empty-sub">Paint your cube and press <strong>Find Solution</strong></p>
        </div>

        <div v-if="isSolving" class="solving">
            <div class="dot-spin"></div><span>Computing solution…</span>
        </div>

        <div v-if="totalMoves > 0" class="chips-wrap">
            <span v-for="(move, i) in moves" :key="i" class="chip" :class="{done: i<currentMoveIndex, current: i===currentMoveIndex, pending: i>currentMoveIndex}">{{ move }}</span>
        </div>

        <div v-if="totalMoves > 0" class="controls">
            <button class="ctrl reset" @click="emit('reset')" title="Restart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 1 .9 3.9"/><polyline points="1 10 3 12 5 10"/></svg></button>
            <button class="ctrl play" @click="isPlaying ? emit('pause') : emit('play')">
                <svg v-if="!isPlaying" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9z"/></svg>
                <svg v-else viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
                {{ isPlaying ? 'Pause' : 'Play Sequence' }}
            </button>
        </div>

        <div v-if="totalMoves > 0" class="speed-row">
            <span class="speed-lbl">Speed</span>
            <input id="speed-slider" v-model.number="speed" type="range" min="1" max="10" class="speed-sl"/>
            <span class="speed-val">{{ speed }}×</span>
        </div>
    </aside>
</template>

<style scoped>
.panel { width: 300px; flex-shrink: 0; height: 100%; display: flex; flex-direction: column; padding: 24px 20px; overflow: hidden; }
.panel-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.head-left { display: flex; align-items: center; gap: 10px; }
.panel-title { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #FFFFFF; }
.badge { padding: 2px 10px; background: rgba(47, 160, 132, 0.2); border: 1px solid rgba(47, 160, 132, 0.4); color: #6FCF97; font-size: 0.75rem; font-weight: 700; border-radius: 20px; }
.clear-btn { border: none; background: transparent; color: var(--text-muted); font-size: 0.8rem; font-weight: 600; cursor: pointer; padding: 4px 10px; border-radius: var(--r-sm); transition: all 0.2s; border: 1px solid var(--border); }
.clear-btn:hover { background: var(--danger); color: var(--danger-text); border-color: var(--danger-border); }

.progress-track { height: 4px; background: rgba(0,0,0,0.3); border-radius: 4px; overflow: hidden; margin-bottom: 20px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.5); }
.progress-fill { height: 100%; background: var(--accent-grad); border-radius: 4px; transition: width 0.3s ease; box-shadow: 0 0 8px var(--accent-glow); }

.empty { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; }
.empty-icon { width: 56px; height: 56px; border-radius: var(--r-lg); background: transparent; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; margin-bottom: 8px; }
.empty-icon svg { width: 28px; height: 28px; color: var(--text-muted); }
.empty-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0; }
.empty-sub { font-size: 0.85rem; color: var(--text-muted); text-align: center; margin: 0; line-height: 1.5; }
.empty-sub strong { color: var(--text-secondary); }

.solving { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; font-size: 0.9rem; color: var(--text-muted); font-weight: 500; }
.dot-spin { width: 32px; height: 32px; border: 3px solid rgba(255,255,255,0.1); border-top-color: var(--accent-mint); border-radius: 50%; animation: spin 0.8s ease-in-out infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

.chips-wrap { flex: 1; overflow-y: auto; display: flex; flex-wrap: wrap; gap: 6px; align-content: flex-start; padding: 4px 0 12px; }
.chip { display: inline-flex; align-items: center; justify-content: center; min-width: 40px; padding: 6px 10px; border-radius: var(--r-sm); font-size: 0.85rem; font-family: var(--mono); font-weight: 700; transition: all 0.2s; border: 1px solid transparent; }
.chip.done { background: rgba(0,0,0,0.2); color: var(--text-muted); border-color: rgba(255,255,255,0.05); }
.chip.current { background: rgba(111, 207, 151, 0.2); border-color: rgba(111, 207, 151, 0.5); color: #6FCF97; box-shadow: 0 0 12px rgba(111, 207, 151, 0.2); transform: scale(1.05); }
.chip.pending { background: transparent; border-color: var(--border); color: var(--text-secondary); }

.controls { display: flex; gap: 12px; margin-bottom: 16px; }
.ctrl { display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid var(--border); border-radius: var(--r-md); cursor: pointer; font-size: 0.9rem; font-weight: 800; transition: all 0.2s ease; outline: none; }
.ctrl svg { width: 16px; height: 16px; flex-shrink: 0; }
.reset { width: 44px; height: 44px; background: transparent; color: var(--text-secondary); flex-shrink: 0; }
.reset:hover { background: rgba(255,255,255,0.05); color: var(--text-primary); border-color: var(--border-hl); }
.play { flex: 1; height: 44px; padding: 0 16px; background: var(--accent-grad); border: none; color: #000; box-shadow: 0 4px 15px var(--accent-glow); }
.play:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(111, 207, 151, 0.3); filter: brightness(1.1); }

.speed-row { display: flex; align-items: center; gap: 12px; background: rgba(0,0,0,0.15); padding: 12px 16px; border-radius: var(--r-md); border: 1px solid rgba(255,255,255,0.05); }
.speed-lbl { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); flex-shrink: 0; }
.speed-val { font-size: 0.8rem; font-weight: 700; color: var(--text-secondary); min-width: 26px; text-align: right; font-variant-numeric: tabular-nums; }
.speed-sl { flex: 1; -webkit-appearance: none; height: 4px; background: rgba(255,255,255,0.1); border-radius: 4px; outline: none; cursor: pointer; }
.speed-sl::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: var(--text-primary); box-shadow: 0 0 10px rgba(255,255,255,0.5); cursor: pointer; transition: transform 0.2s; }
.speed-sl::-webkit-slider-thumb:hover { transform: scale(1.2); }
</style>
