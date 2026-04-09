<script setup lang="ts">
/** AlgorithmsView — Glassmorphic placeholder */
</script>

<template>
    <div class="view glass-panel">
        <div class="ghost-grid">
            <div v-for="i in 6" :key="i" class="ghost-card">
                <div class="ghost-icon"></div>
                <div class="ghost-body">
                    <div class="ghost-bar long"></div>
                    <div class="ghost-bar short"></div>
                </div>
            </div>
        </div>

        <div class="overlay">
            <span class="badge">Coming Soon</span>
            <h2 class="title">Algorithm Library</h2>
            <p class="desc">
                Browse, study, and practice OLL, PLL, F2L and full CFOP algorithms
                in one interactive reference.
            </p>
            <div class="pills">
                <span v-for="p in ['OLL','PLL','F2L','CFOP','Fridrich']" :key="p" class="pill">{{ p }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.view { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: var(--r-xl); }
.ghost-grid { position: absolute; inset: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 48px; filter: blur(5px); opacity: 0.15; pointer-events: none; }
.ghost-card { background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: var(--r-xl); padding: 24px; display: flex; flex-direction: column; gap: 16px; }
.ghost-icon { width: 48px; height: 48px; border-radius: var(--r-md); background: rgba(47, 160, 132, 0.2); border: 1px solid rgba(47, 160, 132, 0.4); }
.ghost-body { display: flex; flex-direction: column; gap: 10px; }
.ghost-bar { height: 8px; border-radius: 4px; background: rgba(255,255,255,0.1); }
.ghost-bar.long { width: 75%; }
.ghost-bar.short { width: 45%; }
.overlay { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center; padding: 40px; }
.badge { padding: 4px 16px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; background: rgba(47, 160, 132, 0.15); border: 1px solid rgba(47, 160, 132, 0.4); color: #6FCF97; box-shadow: 0 0 15px rgba(47, 160, 132, 0.3); }
.title { font-size: 2.2rem; font-weight: 800; letter-spacing: -0.03em; color: var(--text-primary); margin: 0; }
.desc { font-size: 0.95rem; color: var(--text-secondary); max-width: 450px; line-height: 1.6; margin: 0; }
.pills { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 8px; }
.pill { padding: 4px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: var(--text-primary); transition: all 0.2s; }
.pill:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); transform: translateY(-2px); }
</style>
