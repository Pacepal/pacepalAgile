const configuredBaseUrl = (import.meta.env.VITE_API_BASE_URL || '../../src/api/index.php/api').trim();
const staticProductsUrl = `${import.meta.env.BASE_URL}data/productos.json`;

export const DEMO_NOTICE =
    'Modo demo estático: GitHub Pages no ejecuta PHP. La integración real con PHP y base de datos se valida en local con XAMPP.';

export const apiConfig = {
    baseUrl: configuredBaseUrl,
    staticProductsUrl,
    note: 'Cliente React preparado para API PHP local y demo estatica.',
};

export function buildApiUrl(path) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    if (!configuredBaseUrl) {
        return normalizedPath;
    }

    return `${configuredBaseUrl.replace(/\/$/, '')}${normalizedPath}`;
}

export async function requestJson(path, options = {}) {
    const response = await fetch(buildApiUrl(path), {
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            ...(options.body ? { 'Content-Type': 'application/json' } : {}),
            ...(options.headers || {}),
        },
        ...options,
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok || payload.status === 'error') {
        throw new Error(payload.message || 'No se pudo completar la peticion.');
    }

    return payload;
}

export async function loadStaticProducts() {
    const response = await fetch(staticProductsUrl, {
        headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
        throw new Error('No se pudo cargar el catalogo estatico.');
    }

    const payload = await response.json();
    return Array.isArray(payload.data) ? payload.data : [];
}

export function buildPublicAssetUrl(path) {
    if (!path) {
        return '';
    }

    return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`;
}
