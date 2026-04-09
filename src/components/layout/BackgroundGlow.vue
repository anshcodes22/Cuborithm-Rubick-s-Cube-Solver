<script setup lang="ts">
/**
 * BackgroundGlow.vue — GreenGreyCold orbs
 */
</script>

<template>
    <div class="glow-container" aria-hidden="true">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <!-- Noise overlay -->
        <div class="noise-overlay"></div>
    </div>
</template>

<style scoped>
.glow-container {
    position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden;
}
.orb { position: absolute; border-radius: 50%; filter: blur(120px); }

/* Deep green-grey (#1F6F5F) */
.orb-1 {
    width: 700px; height: 700px;
    top: -15%; left: -10%;
    background: var(--accent-dark);
    opacity: 0.15;
    animation: float1 28s ease-in-out infinite;
}

/* Muted teal (#2FA084) */
.orb-2 {
    width: 600px; height: 600px;
    bottom: -15%; right: -5%;
    background: var(--accent-teal);
    opacity: 0.12;
    animation: float2 32s ease-in-out infinite reverse;
}

@keyframes float1 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(40px, 40px); }
}
@keyframes float2 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-30px, -50px); }
}

.noise-overlay {
    position: absolute; inset: 0; opacity: 0.025; pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
</style>
