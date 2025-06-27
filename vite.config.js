import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'build', // ✅ This tells Vite to use build/ instead of dist/
  }
})
