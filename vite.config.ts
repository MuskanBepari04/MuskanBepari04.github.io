import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// MuskanBepari04.github.io is a GitHub Pages *user* site, served from the domain root,
// so the base path is "/". If you ever deploy to a project repo (e.g. /portfolio/),
// set VITE_BASE=/portfolio/ in the build environment.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
