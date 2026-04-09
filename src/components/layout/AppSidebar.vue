<script setup lang="ts">
/** AppSidebar.vue — GreenGreyCold Sidebar */

type NavSection = 'solver' | 'algorithms' | 'playground';

defineProps<{ activeSection: NavSection; collapsed: boolean }>();
const emit = defineEmits<{ (e: 'navigate', section: NavSection): void; (e: 'toggle'): void; }>();

const navItems: { id: NavSection; label: string; icon: string }[] = [
    {
        id: 'solver', label: 'Solver',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
    },
    {
        id: 'algorithms', label: 'Algorithms',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    },
    {
        id: 'playground', label: 'Playground',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`,
    },
];
</script>

<template>
    <aside class="sidebar glass-panel" :class="{ collapsed }">
        <div class="logo-area">
            <div class="brand-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="8" height="8" rx="2" fill="#2FA084" />
                    <rect x="14" y="2" width="8" height="8" rx="2" fill="#6FCF97" opacity="0.8"/>
                    <rect x="2" y="14" width="8" height="8" rx="2" fill="#6FCF97" opacity="0.8"/>
                    <rect x="14" y="14" width="8" height="8" rx="2" fill="#2FA084" />
                </svg>
            </div>
            <Transition name="fade">
                <span v-show="!collapsed" class="brand-text">Cuborithm</span>
            </Transition>
        </div>

        <nav class="nav-menu">
            <button
                v-for="item in navItems" :key="item.id"
                class="nav-item" :class="{ active: activeSection === item.id }"
                :title="collapsed ? item.label : undefined"
                @click="emit('navigate', item.id)"
            >
                <div class="icon-wrap" v-html="item.icon"></div>
                <Transition name="fade">
                    <span v-show="!collapsed" class="nav-label">{{ item.label }}</span>
                </Transition>
            </button>
        </nav>

        <div style="flex:1"></div>

        <button class="collapse-btn" @click="emit('toggle')" :title="collapsed ? 'Expand' : 'Collapse'">
            <div class="icon-wrap" :class="{ 'rot-180': collapsed }">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </div>
            <Transition name="fade">
                <span v-show="!collapsed">Collapse</span>
            </Transition>
        </button>
    </aside>
</template>

<style scoped>
.sidebar {
    width: 250px; height: calc(100% - 32px);
    margin: 16px 0 16px 16px;
    border-radius: var(--r-xl); flex-shrink: 0;
    display: flex; flex-direction: column; padding: 24px 16px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative; z-index: 20;
    background: var(--bg-sidebar); /* Darker tone of palette */
    border: 1px solid var(--border);
    box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
}
.sidebar.collapsed { width: 80px; }

.logo-area { display: flex; align-items: center; gap: 12px; padding: 4px 8px 36px; white-space: nowrap; }
.brand-icon { width: 28px; height: 28px; flex-shrink: 0; }
.brand-text {
    font-size: 1.25rem; font-weight: 800; letter-spacing: -0.02em;
    color: #EEEEEE;
}

.nav-menu { display: flex; flex-direction: column; gap: 6px; }

.nav-item {
    display: flex; align-items: center; gap: 14px; padding: 12px 14px;
    border: 1px solid transparent; background: transparent;
    border-radius: var(--r-md); color: rgba(238, 238, 238, 0.65);
    font-size: 0.95rem; font-weight: 500; font-family: var(--font);
    cursor: pointer; white-space: nowrap; text-align: left;
    transition: all 0.2s ease;
}
.nav-item:hover { background: rgba(255, 255, 255, 0.05); color: #EEEEEE; }
.nav-item.active {
    background: rgba(47, 160, 132, 0.15); /* Subtle #2FA084 highlight */
    color: #EEEEEE;
    border-color: rgba(47, 160, 132, 0.3);
}

.icon-wrap { width: 20px; height: 20px; display: flex; align-items: center; flex-shrink: 0; transition: transform 0.3s; }
.icon-wrap :deep(svg) { width: 100%; height: 100%; color: inherit; }
.nav-item.active .icon-wrap { color: var(--accent-mint); /* #6FCF97 for active icon */ }
.rot-180 { transform: rotate(180deg); }
.nav-label { overflow: hidden; }

.collapse-btn {
    display: flex; align-items: center; gap: 14px; padding: 12px 14px; border: none; background: transparent;
    border-radius: var(--r-md); color: rgba(238, 238, 238, 0.4); font-size: 0.9rem; font-weight: 500;
    cursor: pointer; white-space: nowrap; transition: all 0.2s;
}
.collapse-btn:hover { background: rgba(255,255,255,0.05); color: rgba(238, 238, 238, 0.65); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
