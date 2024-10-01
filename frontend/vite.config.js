import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    // Removed visualizer
  ],
  server: {
    proxy: {
      "/api/": "kimim-ecommerce.vercel.app",
      "/uploads/": "kimim-ecommerce.vercel.app",
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0].toString(); // Create a chunk for each module in node_modules
          }
        },
      },
    },
  },
});
