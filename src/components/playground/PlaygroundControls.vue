<script setup lang="ts">
/**
 * PlaygroundControls.vue
 * Houses the input field, scramble buttons, and speed controls.
 */
import { ref } from 'vue';

const emit = defineEmits<{
    (e: 'scramble'): void;
    (e: 'reset'): void;
    (e: 'executeString', notation: string, speedFactor: number): void;
}>();

const inputNotations = ref('');
const speedFactor = ref(1);

const handleSubmit = () => {
    if (!inputNotations.value.trim()) return;
    emit('executeString', inputNotations.value, speedFactor.value);
    inputNotations.value = ''; // clear upon submit
};
</script>

<template>
    <aside class="controls-panel glass-panel">
        <h3 class="panel-title">Playground Tools</h3>

        <div class="control-section">
            <label class="lbl">Algorithms & Moves</label>
            <div class="input-row">
                <input
                    v-model="inputNotations"
                    type="text"
                    placeholder="e.g. R U R' U'"
                    class="code-input"
                    @keyup.enter="handleSubmit"
                />
                <button class="btn-primary small-btn" @click="handleSubmit">→</button>
            </div>
            <p class="hint">Type standard CFOP notation and press enter. Or use R/U/L/D keyboard shortcuts (Hold Shift for Prime').</p>
        </div>

        <div class="control-section">
            <div class="speed-row">
                <label class="lbl">Animation Speed</label>
                <span class="speed-val">{{ speedFactor }}×</span>
            </div>
            <input v-model.number="speedFactor" type="range" min="1" max="10" class="speed-sl"/>
        </div>

        <div style="flex: 1"></div>

        <div class="bottom-actions">
            <button class="btn-secondary" @click="emit('scramble')">Scramble Random</button>
            <button class="btn-secondary" @click="emit('reset')">Reset to Solved</button>
        </div>
    </aside>
</template>

<style scoped>
.controls-panel {
    width: 280px; flex-shrink: 0; padding: 24px 20px;
    display: flex; flex-direction: column; overflow: hidden;
}

.panel-title {
    font-size: 0.8rem; font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; color: #FFFFFF; margin-bottom: 24px;
}

.control-section {
    margin-bottom: 24px; display: flex; flex-direction: column; gap: 8px;
}
.lbl { font-size: 0.75rem; font-weight: 700; color: rgba(238, 238, 238, 0.7); text-transform: uppercase; letter-spacing: 0.05em; }
.hint { font-size: 0.75rem; color: rgba(238, 238, 238, 0.45); line-height: 1.4; margin: 0; }

.input-row { display: flex; gap: 8px; }
.code-input {
    flex: 1; padding: 10px 12px; background: rgba(0,0,0,0.2);
    border: 1px solid rgba(255,255,255,0.1); border-radius: var(--r-md);
    color: #FFF; font-family: var(--mono); font-size: 0.9rem;
    outline: none; transition: border-color 0.2s; min-width: 0;
}
.code-input:focus { border-color: var(--accent-mint); box-shadow: 0 0 10px rgba(111, 207, 151, 0.2); }
.code-input::placeholder { color: rgba(255,255,255,0.2); }

.small-btn { width: 40px; padding: 0; flex-shrink: 0; }

.speed-row { display: flex; justify-content: space-between; align-items: center; }
.speed-val { font-size: 0.8rem; font-weight: 700; color: #FFFFFF; font-variant-numeric: tabular-nums; }
.speed-sl { -webkit-appearance: none; width: 100%; height: 4px; background: rgba(255,255,255,0.1); border-radius: 4px; outline: none; cursor: pointer; }
.speed-sl::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: #6FCF97; box-shadow: 0 0 10px rgba(111, 207, 151, 0.5); cursor: pointer; transition: transform 0.2s; }
.speed-sl::-webkit-slider-thumb:hover { transform: scale(1.2); }

.bottom-actions { display: flex; flex-direction: column; gap: 10px; }

/* Mirror buttons from Solver */
.btn-primary {
    border: none; border-radius: var(--r-md); background: var(--accent-teal); color: #EEEEEE; 
    font-size: 0.9rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: all 0.2s ease; box-shadow: 0 4px 15px rgba(47, 160, 132, 0.3);
}
.btn-primary:hover { transform: scale(1.02) translateY(-1px); background: #35b394; box-shadow: 0 6px 20px rgba(47, 160, 132, 0.4); }

.btn-secondary {
    width: 100%; padding: 10px; border-radius: var(--r-md);
    background: rgba(111, 207, 151, 0.15); border: 1px solid rgba(111, 207, 151, 0.4);
    color: #FFFFFF; font-size: 0.85rem; font-weight: 700; cursor: pointer;
    transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 8px;
    box-shadow: 0 0 12px rgba(111, 207, 151, 0.1);
}
.btn-secondary:hover { background: rgba(111, 207, 151, 0.25); border-color: #6FCF97; box-shadow: 0 0 16px rgba(111, 207, 151, 0.3); }
</style>
