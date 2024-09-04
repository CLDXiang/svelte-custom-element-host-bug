import { defineConfig } from 'vite';

import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    plugins: [
      svelte(),
    ],
    build: {
      lib: {
        entry: 'src/main.ts',
        name: 'components',
        fileName: 'components',
        formats: ['iife'],
      },
      minify: false,
    },
  };
});
