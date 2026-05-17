import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

try {
  const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
  const projectRoot = path.resolve(scriptsDir, '..');
  const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  const rootIndex = path.join(projectRoot, 'index.html');
  const templateIndex = path.join(scriptsDir, 'vite-index.template.html');
  const distIndex = path.join(projectRoot, 'dist', 'index.html');
  const distAssets = path.join(projectRoot, 'dist', 'assets');
  const rootAssets = path.join(projectRoot, 'assets');

  console.log('Preparing Vite entry index...');
  fs.copyFileSync(templateIndex, rootIndex);

  console.log('Running vite build...');
  const build = spawnSync(npxCommand, ['vite', 'build'], {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: true
  });

  if (build.status !== 0) {
    console.error('Vite build failed with status:', build.status, 'signal:', build.signal, 'error:', build.error);
    process.exit(build.status ?? 1);
  }

  console.log('Checking dist files...');
  if (!fs.existsSync(distIndex)) {
    throw new Error('No se genero dist/index.html.');
  }

  if (!fs.existsSync(distAssets)) {
    throw new Error('No se genero dist/assets.');
  }

  const distIndexHtml = fs.readFileSync(distIndex, 'utf8');
  if (!distIndexHtml.includes('./assets/')) {
    throw new Error('dist/index.html no contiene referencias a ./assets/.');
  }

  const apacheIndexHtml = distIndexHtml.replaceAll('./assets/', './dist/assets/');
  fs.writeFileSync(rootIndex, apacheIndexHtml, 'utf8');

  if (fs.existsSync(rootAssets)) {
    fs.rmSync(rootAssets, { recursive: true, force: true });
  }

  console.log('Build completed successfully.');
} catch (err) {
  console.error('Caught error:', err);
  process.exit(1);
}
