import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/blog/', // 👈 IMPORTANT: match your repo name exactly!
})
