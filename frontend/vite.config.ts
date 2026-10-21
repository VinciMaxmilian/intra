import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Quando o backend FastAPI existir, as chamadas /api/* serão enviadas a ele em dev.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
})
