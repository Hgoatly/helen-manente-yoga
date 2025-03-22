import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/helen-manente-yoga/', // Ensure this matches your deployment path
  resolve: {
    alias: {
      '@': '/src', // Optional: Add an alias for cleaner imports
    },
  },
  build: {
    assetsDir: 'assets', // Ensure assets are placed in the correct directory
    rollupOptions: {
      input: '/index.html', // Ensure the correct entry point
    },
  },
});
