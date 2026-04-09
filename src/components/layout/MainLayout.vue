<script setup lang="ts">
/** MainLayout.vue — Floating glass layout */

import { ref } from 'vue';
import BackgroundGlow from './BackgroundGlow.vue';
import AppSidebar from './AppSidebar.vue';

type NavSection = 'solver' | 'algorithms' | 'playground';

defineProps<{ section: NavSection }>();
const emit = defineEmits<{ (e: 'navigate', section: NavSection): void }>();
const collapsed = ref(false);

const META: Record<NavSection, { title: string; sub: string }> = {
    solver:     { title: 'Cube Solver',  sub: 'Paint your cube state then calculate the optimal path.' },
    algorithms: { title: 'Algorithms',   sub: 'Study common CFOP solver sequences.' },
    playground: { title: 'Playground',   sub: 'Unrestricted 3D cube environment sandbox.' },
};
</script>

<template>
    <div class="app-shell">
        <BackgroundGlow />

        <AppSidebar
            :active-section="section"
            :collapsed="collapsed"
            @navigate="emit('navigate', $event)"
            @toggle="collapsed = !collapsed"
        />

        <div class="content-view">
            <header class="header">
                <div class="h-text">
                    <h1 class="title">{{ META[section].title }}</h1>
                    <p class="sub">{{ META[section].sub }}</p>
                </div>
                <div class="h-actions"><slot name="header-actions"/></div>
            </header>
            <main class="main-stage"><slot /></main>
        </div>
    </div>
</template>

<style scoped>
.app-shell {
    position: fixed; inset: 0; display: flex; background: transparent;
    font-family: var(--font); overflow: hidden;
}
.content-view {
    flex: 1; min-width: 0; display: flex; flex-direction: column;
    position: relative; z-index: 5; padding: 16px 16px 16px 24px;
}
.header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 12px 16px 24px; background: transparent; flex-shrink: 0;
}
.h-text { display: flex; flex-direction: column; gap: 6px; }
.title { font-size: 1.6rem; font-weight: 800; color: var(--accent-dark); letter-spacing: -0.02em; margin: 0; }
.sub { font-size: 0.9rem; color: var(--accent-teal); margin: 0; }
.h-actions { display: flex; align-items: center; gap: 12px; }
.main-stage { flex: 1; overflow: hidden; display: flex; position: relative; gap: 24px; }
</style>
