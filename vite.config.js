import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: './', // Use a relative base path for local resolution
  resolve: {
    alias: {
      '@': '/src', // Optional: Add an alias for cleaner imports
    },
  },
  build: {
    assetsDir: 'assets', // Ensure assets are placed in the correct directory
    rollupOptions: {
      input: './index.html', // Use a relative path for the input
    },
  },
});
