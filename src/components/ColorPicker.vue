<script setup lang="ts">
/** ColorPicker.vue — Mint accent */
import { Colors } from '@/constants/colors';
const props = defineProps<{ modelValue: Colors | null }>();
const emit  = defineEmits<{ (e: 'update:modelValue', v: Colors | null): void }>();
type Entry = { color: Colors | null; hex: string; label: string };
const PALETTE: Entry[] = [
    { color: Colors.WHITE,  hex: '#f3f4f6', label: 'White'  },
    { color: Colors.YELLOW, hex: '#fcd34d', label: 'Yellow' },
    { color: Colors.RED,    hex: '#ef4444', label: 'Red'    },
    { color: Colors.ORANGE, hex: '#fb923c', label: 'Orange' },
    { color: Colors.BLUE,   hex: '#3b82f6', label: 'Blue'   },
    { color: Colors.GREEN,  hex: '#22c55e', label: 'Green'  },
    { color: null,          hex: 'rgba(255,255,255,0.08)', label: 'Erase'  },
];
</script>

<template>
    <div class="picker">
        <p class="picker-lbl">Sticker Palette</p>
        <div class="swatch-grid">
            <button v-for="entry in PALETTE" :key="String(entry.color)" class="swatch" :class="{ active: modelValue === entry.color }" :style="{ background: entry.hex }" :title="entry.label" :aria-label="entry.label" @click="emit('update:modelValue', entry.color)">
                <svg v-if="entry.color === null" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="2" y1="2" x2="14" y2="14"/><line x1="14" y1="2" x2="2" y2="14"/></svg>
            </button>
        </div>
    </div>
</template>

<style scoped>
.picker { display: flex; flex-direction: column; gap: 12px; }
.picker-lbl { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted); margin: 0; }
.swatch-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.swatch {
    width: 100%; aspect-ratio: 1; border-radius: var(--r-md);
    border: 1px solid rgba(255,255,255,0.1); cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex; align-items: center; justify-content: center;
    outline: none; color: rgba(255,255,255,0.5);
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.swatch svg { width: 40%; height: 40%; pointer-events: none; }
.swatch:hover { transform: scale(1.1) translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.4); border-color: rgba(255,255,255,0.3); }
.swatch.active { border: 2px solid var(--accent-mint); box-shadow: 0 0 15px rgba(111, 207, 151, 0.4); transform: scale(1.12); }
</style>
