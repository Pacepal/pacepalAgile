import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

const apiProxyTarget = (process.env.VITE_PACEPAL_API_PROXY_TARGET || process.env.VITE_API_PROXY_TARGET || '').trim();
const apiProxyBasePath = normalizeProxyBasePath(process.env.VITE_PACEPAL_API_PROXY_BASE_PATH || process.env.VITE_API_PROXY_BASE_PATH || '');

function normalizeProxyBasePath(path) {
  const normalizedPath = String(path || '').trim().replace(/\\/g, '/').replace(/^\/+|\/+$/g, '');
  return normalizedPath ? `/${normalizedPath}` : '';
}

function buildDevProxy() {
  if (!apiProxyTarget) {
    return undefined;
  }

  return {
    '/src/api': {
      target: apiProxyTarget,
      changeOrigin: true,
      secure: false,
      rewrite: (path) => `${apiProxyBasePath}${path}`,
    },
  };
}

function copyStaticPublicDirs() {
  return {
    name: 'copy-static-public-dirs',
    closeBundle() {
      for (const dirName of ['img', 'audio']) {
        const sourceDir = path.resolve(dirName);
        const targetDir = path.resolve('dist', dirName);

        if (!fs.existsSync(sourceDir)) {
          continue;
        }

        fs.mkdirSync(path.dirname(targetDir), { recursive: true });
        fs.cpSync(sourceDir, targetDir, { recursive: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyStaticPublicDirs()],
  base: './',
  server: {
    host: '127.0.0.1',
    port: 5173,
    proxy: buildDevProxy(),
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
  },
});
