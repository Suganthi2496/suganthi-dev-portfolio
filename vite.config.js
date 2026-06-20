import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: true,
    // Allow tunneled hosts (e.g. ngrok) to reach the dev server.
    allowedHosts: ['.ngrok-free.app', '.ngrok.io', '.ngrok.app'],
  },
})
