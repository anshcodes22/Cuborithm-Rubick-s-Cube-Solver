import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js',
    }
  },
  // cubejs is CommonJS — pre-bundle it with esbuild so Vite can serve it as ESM
  optimizeDeps: {
    include: ['cubejs'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
        }
      }
    },
    outDir: 'docs',
    assetsDir: '.',
    chunkSizeWarningLimit: 800,
  },
})
