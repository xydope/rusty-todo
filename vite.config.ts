import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const DEV_SERVER_PORT = 3000;

// https://vite.dev/config/
export default defineConfig(() => ({
  server: {
    port: DEV_SERVER_PORT,
    // В dev-режиме пробрасываем запросы к /mockServiceWorker.js в папку src/mocks
    proxy: {
      "/mockServiceWorker.js": {
        target: `http://localhost:${DEV_SERVER_PORT}`,
        rewrite: () => path.resolve(__dirname, "src/mocks/mockServiceWorker.js"),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}));
