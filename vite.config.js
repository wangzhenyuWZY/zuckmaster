// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
  // 配置选项
  server: {
    port: '3001',
    proxy: {
      '^/api': 'http://54.254.212.236:8301',
    },
  },
})
