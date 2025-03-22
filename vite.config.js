import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/helen-manente-yoga/', // Set this to your repository name
  resolve: {
    alias: {
      '@': '/src', // Optional: Add an alias for cleaner imports
    },
  },
});
