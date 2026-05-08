import { buildPublicAssetUrl } from '../utils/paths.js';
import productosData from '../data/productos.json';
import rutasData from '../data/rutas.json';
import actividadesData from '../data/actividades.json';

const viteLocalPorts = new Set(['4173', '4174', '4175', '5173', '5174', '5175']);
const shownWarnings = new Set();

function readEnvValue(...names) {
    for (const name of names) {
        const value = import.meta.env?.[name];
        if (typeof value === 'string' && value.trim() !== '') {
            return value.trim();
        }
    }

    return '';
}

function readBooleanEnv(value, fallback = false) {
    const normalized = String(value || '').trim().toLowerCase();

    if (normalized === 'true' || normalized === '1' || normalized === 'yes') {
        return true;
    }

    if (normalized === 'false' || normalized === '0' || normalized === 'no') {
        return false;
    }

    return fallback;
}

function warnOnce(key, message, detail) {
    if (shownWarnings.has(key) || typeof console === 'undefined') {
        return;
    }

    shownWarnings.add(key);
    if (detail) {
        console.warn(`[PacePal] ${message}`, detail);
        return;
    }

    console.warn(`[PacePal] ${message}`);
}

function isStaticHostWithoutPhp() {
    if (typeof window === 'undefined') {
        return false;
    }

    const hostname = window.location.hostname.toLowerCase();
    return hostname.endsWith('.github.io') || hostname === 'github.io' || window.location.protocol === 'file:';
}

function isLocalHttpHost() {
    if (typeof window === 'undefined') {
        return false;
    }

    const hostname = window.location.hostname.toLowerCase();
    return (hostname === 'localhost' || hostname === '127.0.0.1') && /^https?:$/.test(window.location.protocol);
}

function isViteLocalRuntime() {
    if (typeof window === 'undefined') {
        return false;
    }

    return isLocalHttpHost() && (import.meta.env.DEV || viteLocalPorts.has(window.location.port));
}

function normalizeConfiguredApiBaseUrl(rawUrl) {
    const value = String(rawUrl || '').trim();

    if (!value) {
        return '';
    }

    try {
        return new URL(value, typeof window !== 'undefined' ? window.location.href : undefined).toString().replace(/\/+$/, '');
    } catch (_error) {
        return value.replace(/\/+$/, '');
    }
}

function detectProjectApiBaseUrl() {
    if (typeof window === 'undefined') {
        return '../src/api/index.php/api';
    }

    const pathname = window.location.pathname.replace(/\\/g, '/');

    if (pathname.includes('/dist/')) {
        return new URL('../src/api/index.php/api', window.location.href).href;
    }

    return new URL('./src/api/index.php/api', window.location.href).href;
}

function detectApiBaseUrl() {
    const explicit = readEnvValue('VITE_PACEPAL_API_BASE_URL', 'VITE_API_BASE_URL');
    if (explicit) {
        return normalizeConfiguredApiBaseUrl(explicit);
    }

    if (isStaticHostWithoutPhp()) {
        return '';
    }

    if (isViteLocalRuntime()) {
        return '';
    }

    return detectProjectApiBaseUrl().replace(/\/+$/, '');
}

function buildApiWarning(baseUrl) {
    if (baseUrl) {
        return '';
    }

    if (isViteLocalRuntime()) {
        return 'React esta ejecutandose desde Vite, pero falta VITE_PACEPAL_API_BASE_URL en .env.local de la raiz.';
    }

    if (isStaticHostWithoutPhp()) {
        return 'La app se esta ejecutando en un host estatico que no puede ejecutar PHP. Configura VITE_PACEPAL_API_BASE_URL o habilita un fallback explicito.';
    }

    return 'No se pudo resolver la API PHP real de PacePal.';
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
const apiWarning = buildApiWarning(configuredBaseUrl);
const allowStaticFallback = readBooleanEnv(readEnvValue('VITE_PACEPAL_ENABLE_STATIC_FALLBACK'), false);
const runtime = isViteLocalRuntime() ? 'vite' : isStaticHostWithoutPhp() ? 'static' : 'apache';

if (apiWarning) {
    warnOnce('api-base-url', apiWarning);
}

export const apiConfig = {
    baseUrl: configuredBaseUrl,
    enabled: Boolean(configuredBaseUrl),
    runtime,
    warning: apiWarning,
    requiresRealApi: runtime !== 'static' && !allowStaticFallback,
    allowStaticFallback,
    staticData: {
        productos: Array.isArray(productosData?.data) ? productosData.data : [],
        rutas: Array.isArray(rutasData?.data) ? rutasData.data : [],
        actividades: Array.isArray(actividadesData?.data) ? actividadesData.data : [],
    },
};

export function buildApiUrl(path) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    if (!configuredBaseUrl) {
        return '';
    }

    return `${configuredBaseUrl.replace(/\/$/, '')}${normalizedPath}`;
}

export function getApiUnavailableMessage(fallbackMessage = 'No se pudo contactar con la API PHP real.') {
    return apiConfig.warning || fallbackMessage;
}

export function warnAboutFallback(scope, error) {
    if (!apiConfig.allowStaticFallback) {
        return;
    }

    const detail = error && typeof error.message === 'string' && error.message.trim() !== ''
        ? `Motivo: ${error.message}`
        : '';

    warnOnce(`fallback:${scope}`, `Usando fallback explicito para ${scope}.`, detail);
}

export async function requestJson(path, options = {}) {
    if (!configuredBaseUrl) {
        throw new ApiError(getApiUnavailableMessage('La API PHP real no esta disponible en este entorno.'), {
            isNetworkError: true,
        });
    }

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
    } catch (error) {
        if (error?.name === 'AbortError') {
            throw new ApiError('La API PHP no respondio a tiempo.', {
                isNetworkError: true,
            });
        }

        throw new ApiError(`No se pudo contactar con la API PHP real (${configuredBaseUrl}).`, {
            isNetworkError: true,
        });
    }

    let payload;

    try {
        payload = await response.json();
    } catch (_error) {
        throw new ApiError('La API devolvio una respuesta que no es JSON valido.', {
            status: response.status,
        });
    }

    if (!response.ok || payload.status === 'error' || payload.ok === false) {
        throw new ApiError(payload.error || payload.message || 'No se pudo completar la peticion.', {
            status: response.status,
            payload,
        });
    }

    return payload;
}

export async function loadStaticData(type) {
    const payload = apiConfig.staticData[type];

    if (!payload) {
        throw new Error('No se encontro el recurso solicitado.');
    }

    return Array.isArray(payload) ? payload : [];
}

export { buildPublicAssetUrl };
