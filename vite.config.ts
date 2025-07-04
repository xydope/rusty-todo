import path from 'path';
import { defineConfig } from 'vite';



import react from '@vitejs/plugin-react';





const DEV_SERVER_PORT = 5173

// https://vite.dev/config/
export default defineConfig(() => ({
  root: path.resolve(__dirname, 'src'),
  server: {
    port: DEV_SERVER_PORT,
    // В dev-режиме пробрасываем запросы к /mockServiceWorker.js в папку src/mocks
    proxy: {
      '/mockServiceWorker.js': {
        target: `http://localhost:${DEV_SERVER_PORT}`,
        rewrite: () =>
          path.resolve(__dirname, 'src/mocks/mockServiceWorker.js'),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}))