function detectApiBaseUrl() {
    const explicit = (import.meta.env.VITE_API_BASE_URL || '').trim();
    if (explicit) {
        return explicit;
    }

    if (import.meta.env.DEV) {
        return '/src/api/index.php/api';
    }

    return '../../src/api/index.php/api';
}

export class ApiError extends Error {
    constructor(message, options = {}) {
        super(message);
        this.name = 'ApiError';
        this.status = Number.isFinite(options.status) ? options.status : 0;
        this.payload = options.payload || null;
        this.isNetworkError = !!options.isNetworkError;
    }
}

const configuredBaseUrl = detectApiBaseUrl();
const publicBaseUrl = import.meta.env.BASE_URL;

function normalizePublicPath(path) {
    const rawPath = String(path || '').trim();

    if (!rawPath) {
        return '';
    }

    if (/^(?:[a-z]+:)?\/\//i.test(rawPath) || rawPath.startsWith('data:')) {
        return rawPath;
    }

    const baseSegment = publicBaseUrl.replace(/^\/+|\/+$/g, '');
    let normalizedPath = rawPath.replace(/\\/g, '/').replace(/^\.\/?/, '').replace(/^\/+/, '');

    while (baseSegment && (normalizedPath === baseSegment || normalizedPath.startsWith(`${baseSegment}/`))) {
        normalizedPath = normalizedPath.slice(baseSegment.length).replace(/^\/+/, '');
    }

    return normalizedPath ? `${publicBaseUrl}${normalizedPath}` : publicBaseUrl;
}

export function buildPublicAssetUrl(path) {
    return normalizePublicPath(path);
}

export const apiConfig = {
    baseUrl: configuredBaseUrl,
    staticData: {
        productos: buildPublicAssetUrl('data/productos.json'),
        rutas: buildPublicAssetUrl('data/rutas.json'),
        actividades: buildPublicAssetUrl('data/actividades.json'),
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
    let response;

    try {
        response = await fetch(buildApiUrl(path), {
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                ...(options.body ? { 'Content-Type': 'application/json' } : {}),
                ...(options.headers || {}),
            },
            ...options,
        });
    } catch (_error) {
        throw new ApiError('No se pudo contactar con la API.', {
            isNetworkError: true,
        });
    }

    const payload = await response.json().catch(() => ({}));

    if (!response.ok || payload.status === 'error') {
        throw new ApiError(payload.message || 'No se pudo completar la petición.', {
            status: response.status,
            payload,
        });
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
