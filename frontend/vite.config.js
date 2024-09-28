import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // This will open the visualizer after build
  ],
  server: {
    proxy: {
      "/api/": "http://localhost:5000",
      "/uploads/": "http://localhost:5000",
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
