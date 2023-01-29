import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/assets', replacement: '/src/assets' },
      { find: '@/components', replacement: '/src/components' },
      { find: '@/styles', replacement: '/src/styles' },
      { find: '@/hooks', replacement: '/src/hooks' },
      { find: '@/pages', replacement: '/src/pages' },
      { find: '@/store', replacement: '/src/store' },
      { find: '@/utils', replacement: '/src/utils' },
      { find: '@', replacement: '/src' },
    ],
  },
});
