import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset paths — works on Vercel, GitHub Pages (subfolder), any host.
  base: './',
  server: {
    open: false,
    // Listen on localhost (IPv4 + IPv6) and the local network so that
    // http://localhost:5173 works regardless of how the OS resolves it.
    host: true,
    port: 5173,
  },
  build: {
    target: 'es2018',
  },
})
