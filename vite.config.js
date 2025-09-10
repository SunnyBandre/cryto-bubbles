import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/ws": {
        target: "ws://localhost:8080", // Your WebSocket server
        ws: true, // This option is for enabling WebSocket proxying
        changeOrigin: true, // Change origin for CORS
      },
      "/api/yahoo": {
        target: "https://query1.finance.yahoo.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/yahoo/, "/v8/finance/chart"),
      },
    },
    open: true,
    port: 5173,
  },
});
