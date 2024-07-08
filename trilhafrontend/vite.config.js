import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        /^node:.*/, // Esta expressão regular corresponde a qualquer string que comece com "node:"
      ],
    },
  },
});
