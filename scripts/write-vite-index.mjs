import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptsDir, '..');

fs.copyFileSync(
  path.join(scriptsDir, 'vite-index.template.html'),
  path.join(projectRoot, 'index.html')
);
