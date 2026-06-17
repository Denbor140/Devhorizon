import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/Devhorizon/' : '/',
    root: 'src',
    build: {
      sourcemap: true,
      outDir: '../dist',
      emptyOutDir: true,
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html']), tailwindcss()],
  };
});
