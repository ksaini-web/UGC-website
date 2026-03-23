import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
   build: {
    outDir: 'dist', // <- this creates a dist folder
    emptyOutDir: true // <- clears dist before building
  }
})
