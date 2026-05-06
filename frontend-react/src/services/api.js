const configuredBaseUrl = (import.meta.env.VITE_API_BASE_URL || '../../src/api/index.php/api').trim();

export const apiConfig = {
    baseUrl: configuredBaseUrl,
    staticData: {
        productos: `${import.meta.env.BASE_URL}data/productos.json`,
        rutas: `${import.meta.env.BASE_URL}data/rutas.json`,
        actividades: `${import.meta.env.BASE_URL}data/actividades.json`,
    },
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

export async function loadStaticData(type) {
    const url = apiConfig.staticData[type];

    if (!url) {
        throw new Error('No se encontro el recurso solicitado.');
    }

    const response = await fetch(url, {
        headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
        throw new Error('No se pudo cargar el recurso solicitado.');
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
