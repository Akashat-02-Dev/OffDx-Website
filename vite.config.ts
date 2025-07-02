import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase the chunk warning threshold (default is 500)
    rollupOptions: {
      output: {
        manualChunks: {
          // Customize this based on what you're using
          react: ['react', 'react-dom'],
          // You can add more groups if needed
        },
      },
    },
  },
});
