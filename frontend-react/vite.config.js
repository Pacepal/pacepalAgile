import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { cpSync, existsSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = dirname(fileURLToPath(import.meta.url));
const legacyImageDir = resolve(__dirname, '../img');
const buildImageDir = resolve(__dirname, 'dist/img');

function copyLegacyImages() {
  return {
    name: 'copy-legacy-images',
    closeBundle() {
      if (existsSync(legacyImageDir)) {
        cpSync(legacyImageDir, buildImageDir, { recursive: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyLegacyImages()],
  base: './',
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'pacepal-react.html'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    fs: {
      allow: ['..'],
    },
    proxy: {
      '/src/api': {
        target: 'http://localhost/pacepalAgile',
        changeOrigin: true,
        secure: false,
      },
      '/pacepalAgile/img': {
        target: 'http://localhost/pacepalAgile',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/pacepalAgile/, ''),
      },
      '/img': {
        target: 'http://localhost/pacepalAgile',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
  },
});
