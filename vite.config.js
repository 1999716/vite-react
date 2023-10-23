import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    port: "9000",
    host: true,
    open: true,
    proxy: {
      '/api': {
        target: 'https://wangge.xcuni.com/testxclife/chDev/saber/pcApi/api/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      },
    }
  }
})
