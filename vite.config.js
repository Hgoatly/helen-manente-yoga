import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/helen-manente-yoga/',
  build: {
    outDir: 'build', // this will set the build output folder to "build"
  },
})
