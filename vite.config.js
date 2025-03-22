import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: './index.html',
    },
  },
});
