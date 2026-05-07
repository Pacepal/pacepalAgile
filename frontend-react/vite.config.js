import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '127.0.0.1',
    port: 5173,
    fs: {
      allow: ['..'],
    },
    proxy: buildDevProxy(),
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
  },
});
