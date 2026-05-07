export const DEMO_USER_STORAGE_KEY = 'pacepal_demo_user';
export const DEMO_USERS_STORAGE_KEY = 'pacepal_demo_users';
export const DEMO_SESSION_STORAGE_KEY = 'pacepal_demo_session';
export const DEMO_SESSION_COOKIE = 'pacepal_session_demo';
export const DEMO_CART_STORAGE_KEY = 'pacepal_demo_cart';
export const COOKIE_CONSENT_STORAGE_KEY = 'pacepal_cookie_consent';
export const COOKIE_CONSENT_COOKIE = 'pacepal_cookie_consent';
export const LEGACY_COOKIE_CONSENT_STORAGE_KEY = 'pacepal_cookies';

const demoCookiePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/';
const cookieSecureSuffix = typeof window !== 'undefined' && window.location.protocol === 'https:' ? '; Secure' : '';
const defaultAdminUser = {
    id: 1,
    nombre: 'Administrador PacePal',
    email: 'admin@pacepal.com',
    password: 'Admin1234*',
    rol: 'admin',
    demo: true,
};

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
    if (typeof document === 'undefined') {
        return;
    }

    document.cookie = `${name}=${encodeURIComponent(value)}; path=${demoCookiePath}; max-age=${maxAge}; SameSite=Lax${cookieSecureSuffix}`;
}

export function deleteCookie(name) {
    if (typeof document === 'undefined') {
        return;
    }

    document.cookie = `${name}=; path=${demoCookiePath}; max-age=0; SameSite=Lax${cookieSecureSuffix}`;
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
    persistDemoSession({ ...user, demo: true });
}

export function setDemoCookie() {
    writeCookie(DEMO_SESSION_COOKIE, 'active', 86400);
}

export function clearDemoCookie() {
    deleteCookie(DEMO_SESSION_COOKIE);
}

export function persistDemoSession(user) {
    const localStorageRef = getStorage(globalThis.localStorage);
    const sessionStorageRef = getStorage(globalThis.sessionStorage);

    writeStorageValue(localStorageRef, DEMO_USER_STORAGE_KEY, JSON.stringify(user));
    writeStorageValue(
        sessionStorageRef,
        DEMO_SESSION_STORAGE_KEY,
        JSON.stringify({ active: true, email: user?.email || '', startedAt: Date.now() })
    );
    setDemoCookie();
}

export function readDemoSessionUser() {
    const localStorageRef = getStorage(globalThis.localStorage);
    const sessionStorageRef = getStorage(globalThis.sessionStorage);
    const storedUser = parseJson(readStorageValue(localStorageRef, DEMO_USER_STORAGE_KEY), null);
    const storedSession = parseJson(readStorageValue(sessionStorageRef, DEMO_SESSION_STORAGE_KEY), null);
    const hasCookie = readCookie(DEMO_SESSION_COOKIE) === 'active';

    if (!storedUser || typeof storedUser !== 'object') {
        return null;
    }

    if (storedSession?.active || hasCookie) {
        if (!storedSession?.active) {
            writeStorageValue(
                sessionStorageRef,
                DEMO_SESSION_STORAGE_KEY,
                JSON.stringify({ active: true, email: storedUser.email || '', startedAt: Date.now() })
            );
        }

        return storedUser;
    }

    return null;
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

    if (storedConsent === 'accepted' || readCookie(COOKIE_CONSENT_COOKIE) === 'accepted') {
        return true;
    }

    return !!legacyConsent;
}

export function persistCookieConsent() {
    const localStorageRef = getStorage(globalThis.localStorage);

    writeStorageValue(localStorageRef, COOKIE_CONSENT_STORAGE_KEY, 'accepted');
    writeCookie(COOKIE_CONSENT_COOKIE, 'accepted', 31536000);
}

export function clearCookieConsent() {
    const localStorageRef = getStorage(globalThis.localStorage);

    removeStorageValue(localStorageRef, COOKIE_CONSENT_STORAGE_KEY);
    deleteCookie(COOKIE_CONSENT_COOKIE);
}