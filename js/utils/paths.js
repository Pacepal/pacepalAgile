const publicBaseUrl = normalizeBaseUrl(import.meta.env.BASE_URL || './');
const publicPathPattern = /(^|\/)(assets|data|img)\//i;
const viteLocalPorts = new Set(['4173', '4174', '4175', '5173', '5174', '5175']);
const explicitApiBaseUrl = normalizeConfiguredApiBaseUrl(readEnvValue('VITE_PACEPAL_API_BASE_URL') || readEnvValue('VITE_API_BASE_URL'));
const localApacheProjectBaseUrl = deriveProjectBaseUrlFromApiBase(explicitApiBaseUrl);

function readEnvValue(name) {
  const value = import.meta.env?.[name];
  return typeof value === 'string' ? value.trim() : '';
}

function normalizeBaseUrl(baseUrl) {
  const rawBaseUrl = String(baseUrl || './').trim();

  if (!rawBaseUrl) {
    return './';
  }

  return rawBaseUrl.endsWith('/') ? rawBaseUrl : `${rawBaseUrl}/`;
}

function isExternalUrl(path) {
  return /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(path) || /^(data|blob):/i.test(path);
}

function isLocalHostname(hostname) {
  return /^(localhost|127\.0\.0\.1)$/i.test(String(hostname || '').trim());
}

function isViteLikeLocalRuntime() {
  if (typeof window === 'undefined') {
    return false;
  }

  return isLocalHostname(window.location.hostname) && (import.meta.env.DEV || viteLocalPorts.has(window.location.port));
}

function normalizeConfiguredApiBaseUrl(rawUrl) {
  const normalizedUrl = String(rawUrl || '').trim();

  if (!normalizedUrl || typeof window === 'undefined') {
    return normalizedUrl;
  }

  try {
    return new URL(normalizedUrl, window.location.href).toString();
  } catch (_error) {
    return normalizedUrl;
  }
}

function deriveProjectBaseUrlFromApiBase(apiBaseUrl) {
  if (!apiBaseUrl) {
    return '';
  }

  try {
    const url = new URL(apiBaseUrl, typeof window !== 'undefined' ? window.location.href : undefined);
    const nextPathname = url.pathname.replace(/\/src\/api\/index\.php\/api(?:\/.*)?$/i, '/');

    if (nextPathname === url.pathname) {
      return '';
    }

    url.pathname = nextPathname;
    url.search = '';
    url.hash = '';

    return url.toString().replace(/\/?$/, '/');
  } catch (_error) {
    return '';
  }
}

function stripLocalOrigin(path) {
  if (!isExternalUrl(path)) {
    return path;
  }

  try {
    const url = new URL(path, typeof window !== 'undefined' ? window.location.href : undefined);
    const isLocalhost = isLocalHostname(url.hostname);
    const isSameOrigin = typeof window !== 'undefined' && url.origin === window.location.origin;

    return isLocalhost || isSameOrigin ? url.pathname : path;
  } catch (_error) {
    return path;
  }
}

function stripToPublicPath(path) {
  const match = publicPathPattern.exec(path);

  if (!match) {
    return path;
  }

  return path.slice(match.index + match[1].length);
}

export function normalizePublicAssetPath(path) {
  const rawPath = String(path || '').trim();

  if (!rawPath) {
    return '';
  }

  const localPath = stripLocalOrigin(rawPath);

  if (isExternalUrl(localPath)) {
    return localPath;
  }

  const baseSegment = publicBaseUrl.replace(/^\.?\//, '').replace(/^\/+|\/+$/g, '');
  let normalizedPath = localPath
    .replace(/\\/g, '/')
    .replace(/^file:\/\/\/?/i, '')
    .replace(/^[a-z]:\//i, '')
    .replace(/^\.\/+/, '')
    .replace(/^\/+/, '');

  normalizedPath = stripToPublicPath(normalizedPath);

  while (baseSegment && (normalizedPath === baseSegment || normalizedPath.startsWith(`${baseSegment}/`))) {
    normalizedPath = normalizedPath.slice(baseSegment.length).replace(/^\/+/, '');
  }

  return normalizedPath;
}

export function buildPublicAssetUrl(path, fallbackPath = '') {
  const normalizedPath = normalizePublicAssetPath(path) || normalizePublicAssetPath(fallbackPath);

  if (!normalizedPath) {
    return '';
  }

  if (isExternalUrl(normalizedPath)) {
    return normalizedPath;
  }

  if (localApacheProjectBaseUrl && isViteLikeLocalRuntime() && /^img\//i.test(normalizedPath)) {
    return `${localApacheProjectBaseUrl.replace(/\/$/, '')}/${normalizedPath}`;
  }

  return `${publicBaseUrl}${normalizedPath}`;
}

export function getPublicBaseUrl() {
  return publicBaseUrl;
}

export function getLocalApacheProjectBaseUrl() {
  return localApacheProjectBaseUrl;
}
