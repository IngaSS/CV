import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  optimizeDeps: {
    exclude: ['framer-motion'],
  },
  server: {
    open: true,
    host: '0.0.0.0',
    port: 3000,
  },
  base: ''
})
