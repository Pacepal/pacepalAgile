const configuredBaseUrl = (import.meta.env.VITE_API_BASE_URL || '../../src/api/index.php/api').trim();

export const apiConfig = {
    baseUrl: configuredBaseUrl,
    note: 'Cliente React conectado a la API PHP existente.',
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
