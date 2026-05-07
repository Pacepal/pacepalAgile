export const DEMO_USER_STORAGE_KEY = 'pacepal_demo_user';
export const DEMO_USERS_STORAGE_KEY = 'pacepal_demo_users';
export const DEMO_SESSION_STORAGE_KEY = 'pacepal_demo_session';
export const DEMO_SESSION_COOKIE = 'pacepal_session_demo';
export const DEMO_CART_STORAGE_KEY = 'pacepal_demo_cart';
export const COOKIE_CONSENT_STORAGE_KEY = 'pacepal_cookie_consent';
export const COOKIE_CONSENT_COOKIE = 'pacepal_cookie_consent';
export const LEGACY_COOKIE_CONSENT_STORAGE_KEY = 'pacepal_cookies';

const demoCookiePath = normalizeCookiePath((import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/');
const defaultAdminUser = {
    id: 1,
    nombre: 'Administrador PacePal',
    email: 'admin@pacepal.com',
    password: 'Admin1234*',
    rol: 'admin',
    demo: true,
};
let cookieSupportCache = null;

function normalizeCookiePath(path) {
    const rawPath = String(path || '/').trim();

    if (!rawPath || rawPath === '/') {
        return '/';
    }

    return `/${rawPath.replace(/^\/+|\/+$/g, '')}`;
}

function buildCookiePaths(path) {
    const paths = new Set(['/']);

    if (demoCookiePath !== '/') {
        paths.add(demoCookiePath);
    }

    if (path) {
        paths.add(normalizeCookiePath(path));
    }

    return [...paths];
}

function buildCookieAttributes(options = {}) {
    const sameSite = options.sameSite || 'Lax';
    const secure = options.secure ?? (typeof window !== 'undefined' && window.location.protocol === 'https:');
    const attributes = [`SameSite=${sameSite}`];

    if (Number.isFinite(options.maxAge)) {
        attributes.push(`max-age=${Math.max(0, Math.trunc(options.maxAge))}`);
    }

    if (options.expires instanceof Date) {
        attributes.push(`expires=${options.expires.toUTCString()}`);
    }

    if (secure) {
        attributes.push('Secure');
    }

    return attributes.length ? `; ${attributes.join('; ')}` : '';
}

function writeCookieVariants(name, value, options = {}) {
    if (typeof document === 'undefined') {
        return [];
    }

    const serializedValue = encodeURIComponent(String(value ?? ''));
    const suffix = buildCookieAttributes(options);
    const cookiePaths = buildCookiePaths(options.path);

    cookiePaths.forEach((path) => {
        document.cookie = `${name}=${serializedValue}; path=${path}${suffix}`;
    });

    return cookiePaths;
}

function getStorage(storage) {
    try {
        return storage;
    } catch (_error) {
        return null;
    }
}

function readStorageValue(storage, key) {
    try {
        return storage?.getItem(key) ?? null;
    } catch (_error) {
        return null;
    }
}

function writeStorageValue(storage, key, value) {
    try {
        storage?.setItem(key, value);
    } catch (_error) {
        // Los fallbacks no deben bloquear la interfaz.
    }
}

function removeStorageValue(storage, key) {
    try {
        storage?.removeItem(key);
    } catch (_error) {
        // Los fallbacks no deben bloquear la interfaz.
    }
}

function parseJson(rawValue, fallback) {
    if (!rawValue) {
        return fallback;
    }

    try {
        return JSON.parse(rawValue);
    } catch (_error) {
        return fallback;
    }
}

function normalizeNumber(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeEmail(value) {
    return String(value || '').trim().toLowerCase();
}

function buildDisplayName(email) {
    const localPart = normalizeEmail(email).split('@')[0] || 'Usuario PacePal';
    return localPart
        .split(/[._-]+/)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ') || 'Usuario PacePal';
}

function normalizeDemoCartItem(item) {
    const productId = normalizeNumber(item?.id_articulo ?? item?.producto_id, 0);

    if (!productId) {
        return null;
    }

    const quantity = Math.max(1, normalizeNumber(item?.cantidad, 1));
    const unitPrice = normalizeNumber(item?.precio_unitario ?? item?.precio, 0);

    return {
        id_articulo: productId,
        nombre: item?.nombre || 'Producto PacePal',
        imagen1: item?.imagen1 || item?.imagen || 'img/productos/zapatillaPacepal1.webp',
        precio_unitario: unitPrice,
        cantidad: quantity,
        subtotal: Number((unitPrice * quantity).toFixed(2)),
    };
}

export function readCookie(name) {
    return getCookie(name);
}

export function getCookie(name) {
    if (typeof document === 'undefined') {
        return '';
    }

    const prefix = `${name}=`;
    const match = document.cookie
        .split(';')
        .map((entry) => entry.trim())
        .find((entry) => entry.startsWith(prefix));

    return match ? decodeURIComponent(match.slice(prefix.length)) : '';
}

export function writeCookie(name, value, maxAge) {
    return setSafeCookie(name, value, { maxAge });
}

export function setSafeCookie(name, value, options = {}) {
    if (typeof document === 'undefined') {
        return false;
    }

    writeCookieVariants(name, value, options);
    const accepted = getCookie(name) === String(value ?? '');

    if (accepted) {
        cookieSupportCache = true;
    }

    return accepted;
}

export function canUseCookies() {
    if (cookieSupportCache !== null) {
        return cookieSupportCache;
    }

    if (typeof document === 'undefined') {
        cookieSupportCache = false;
        return cookieSupportCache;
    }

    if (typeof navigator !== 'undefined' && navigator.cookieEnabled === false) {
        cookieSupportCache = false;
        return cookieSupportCache;
    }

    const probeName = `__pacepal_cookie_probe_${Date.now()}`;
    const probeValue = 'ok';
    writeCookieVariants(probeName, probeValue, { maxAge: 60 });
    cookieSupportCache = getCookie(probeName) === probeValue;
    deleteCookie(probeName);
    return cookieSupportCache;
}

export function deleteCookie(name, options = {}) {
    if (typeof document === 'undefined') {
        return;
    }

    writeCookieVariants(name, '', {
        ...options,
        expires: new Date(0),
        maxAge: 0,
    });
}

export function createDemoUser(credentials = {}) {
    const email = normalizeEmail(credentials.email);
    const isAdmin = email === 'admin@pacepal.com';

    return {
        id: isAdmin ? 1 : Date.now(),
        nombre: isAdmin ? 'Administrador PacePal' : buildDisplayName(email),
        email,
        rol: isAdmin ? 'admin' : 'usuario',
        demo: true,
    };
}

function sanitizePersistedDemoUser(user = {}) {
    const email = normalizeEmail(user.email);
    const isAdmin = email === defaultAdminUser.email;

    return {
        id: normalizeNumber(user.id, isAdmin ? defaultAdminUser.id : Date.now()),
        nombre: user.nombre || buildDisplayName(email),
        email,
        password: String(user.password || ''),
        rol: user.rol || (isAdmin ? 'admin' : 'usuario'),
        dni: user.dni || '',
        sexo: user.sexo || '',
        fecha_nacimiento: user.fecha_nacimiento || '',
        direccion: user.direccion || '',
        pais: user.pais || '',
        tarjeta: user.tarjeta || '',
        notificaciones: !!user.notificaciones,
        revista: !!user.revista,
        fecha_registro: user.fecha_registro || new Date().toISOString().slice(0, 19).replace('T', ' '),
        demo: true,
    };
}

export function getDemoUsers() {
    const localStorageRef = getStorage(globalThis.localStorage);
    const storedUsers = parseJson(readStorageValue(localStorageRef, DEMO_USERS_STORAGE_KEY), []);
    const normalizedUsers = Array.isArray(storedUsers)
        ? storedUsers.map(sanitizePersistedDemoUser).filter((user) => user.email)
        : [];

    if (!normalizedUsers.some((user) => user.email === defaultAdminUser.email)) {
        normalizedUsers.unshift(defaultAdminUser);
    }

    return normalizedUsers;
}

export function saveDemoUser(user) {
    const localStorageRef = getStorage(globalThis.localStorage);
    const normalizedUser = sanitizePersistedDemoUser(user);
    const users = getDemoUsers();

    if (users.some((entry) => entry.email === normalizedUser.email)) {
        return null;
    }

    const nextUsers = [...users, normalizedUser];
    writeStorageValue(localStorageRef, DEMO_USERS_STORAGE_KEY, JSON.stringify(nextUsers));
    return normalizedUser;
}

export function findDemoUser(email, password) {
    const normalizedEmail = normalizeEmail(email);
    return getDemoUsers().find(
        (user) => user.email === normalizedEmail && String(user.password || '') === String(password || '')
    ) || null;
}

export function createDemoSession(user) {
    saveDemoSession(user);
}

export function setDemoCookie() {
    return setSafeCookie(DEMO_SESSION_COOKIE, 'active', { maxAge: 86400 });
}

export function clearDemoCookie() {
    deleteCookie(DEMO_SESSION_COOKIE);
}

export function persistDemoSession(user) {
    saveDemoSession(user);
}

export function saveDemoSession(user) {
    const localStorageRef = getStorage(globalThis.localStorage);
    const sessionStorageRef = getStorage(globalThis.sessionStorage);
    const normalizedUser = user ? { ...user, demo: true } : null;

    if (!normalizedUser) {
        clearDemoSession();
        return null;
    }

    writeStorageValue(localStorageRef, DEMO_USER_STORAGE_KEY, JSON.stringify(normalizedUser));
    writeStorageValue(
        sessionStorageRef,
        DEMO_SESSION_STORAGE_KEY,
        JSON.stringify({ active: true, email: normalizedUser.email || '', startedAt: Date.now() })
    );
    setDemoCookie();

    return normalizedUser;
}

export function readDemoSessionUser() {
    return restoreDemoSession();
}

export function restoreDemoSession() {
    const localStorageRef = getStorage(globalThis.localStorage);
    const sessionStorageRef = getStorage(globalThis.sessionStorage);
    const storedUser = parseJson(readStorageValue(localStorageRef, DEMO_USER_STORAGE_KEY), null);
    const storedSession = parseJson(readStorageValue(sessionStorageRef, DEMO_SESSION_STORAGE_KEY), null);
    const hasCookie = getCookie(DEMO_SESSION_COOKIE) === 'active';

    if (!storedUser || typeof storedUser !== 'object') {
        return null;
    }

    if (!storedSession?.active) {
        writeStorageValue(
            sessionStorageRef,
            DEMO_SESSION_STORAGE_KEY,
            JSON.stringify({ active: true, email: storedUser.email || '', startedAt: Date.now() })
        );
    }

    if (!hasCookie) {
        setDemoCookie();
    }

    return storedUser;
}

export function clearDemoSession() {
    const localStorageRef = getStorage(globalThis.localStorage);
    const sessionStorageRef = getStorage(globalThis.sessionStorage);

    removeStorageValue(localStorageRef, DEMO_USER_STORAGE_KEY);
    removeStorageValue(sessionStorageRef, DEMO_SESSION_STORAGE_KEY);
    clearDemoCookie();
}

export function readDemoCart() {
    const localStorageRef = getStorage(globalThis.localStorage);
    const storedItems = parseJson(readStorageValue(localStorageRef, DEMO_CART_STORAGE_KEY), []);

    if (!Array.isArray(storedItems)) {
        return [];
    }

    return storedItems.map(normalizeDemoCartItem).filter(Boolean);
}

export function writeDemoCart(items) {
    const localStorageRef = getStorage(globalThis.localStorage);
    const normalizedItems = Array.isArray(items) ? items.map(normalizeDemoCartItem).filter(Boolean) : [];

    writeStorageValue(localStorageRef, DEMO_CART_STORAGE_KEY, JSON.stringify(normalizedItems));
    return normalizedItems;
}

export function buildDemoCartSummary(items) {
    const normalizedItems = Array.isArray(items) ? items.map(normalizeDemoCartItem).filter(Boolean) : [];
    const total = normalizedItems.reduce((sum, item) => sum + normalizeNumber(item.subtotal), 0);

    return {
        items: normalizedItems,
        total: Number(total.toFixed(2)),
    };
}

export function buildDemoCartItem(product, quantity = 1) {
    return normalizeDemoCartItem({
        id_articulo: product?.id_articulo,
        nombre: product?.nombre,
        imagen1: product?.imagen1 || product?.imagen,
        precio_unitario: product?.precio_unitario ?? product?.precio,
        cantidad: quantity,
    });
}

export function hasAcceptedCookieConsent() {
    const localStorageRef = getStorage(globalThis.localStorage);
    const storedConsent = readStorageValue(localStorageRef, COOKIE_CONSENT_STORAGE_KEY);
    const legacyConsent = parseJson(readStorageValue(localStorageRef, LEGACY_COOKIE_CONSENT_STORAGE_KEY), null);

    if (storedConsent === 'accepted' || getCookie(COOKIE_CONSENT_COOKIE) === 'accepted') {
        return true;
    }

    return !!legacyConsent;
}

export function persistCookieConsent() {
    const localStorageRef = getStorage(globalThis.localStorage);

    writeStorageValue(localStorageRef, COOKIE_CONSENT_STORAGE_KEY, 'accepted');
    setSafeCookie(COOKIE_CONSENT_COOKIE, 'accepted', { maxAge: 31536000 });
}

export function clearCookieConsent() {
    const localStorageRef = getStorage(globalThis.localStorage);

    removeStorageValue(localStorageRef, COOKIE_CONSENT_STORAGE_KEY);
    deleteCookie(COOKIE_CONSENT_COOKIE);
}