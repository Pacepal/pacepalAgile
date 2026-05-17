import { useEffect, useState } from 'react';
import { apiConfig, requestJson } from '../services/api.js';

const defaultConsent = { preferences: false, analytics: false };
const COOKIE_CONSENT_KEY = 'pacepal_cookie_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function resolveCookiePath() {
  if (window.location.hostname.endsWith('github.io')) {
    return '/pacepalAgile';
  }

  return '/';
}

function getCookieValue(name) {
  const cookies = document.cookie ? document.cookie.split('; ') : [];
  const target = `${name}=`;
  const match = cookies.find((cookie) => cookie.startsWith(target));

  if (!match) {
    return null;
  }

  return decodeURIComponent(match.slice(target.length));
}

function setCookieValue(name, value, options = {}) {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  const path = options.path || resolveCookiePath();
  const maxAge = Number.isFinite(options.maxAge) ? `; Max-Age=${Math.max(0, Math.trunc(options.maxAge))}` : '';

  deleteCookieValue(name);
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=${path}; SameSite=Lax${maxAge}${secure}`;
}

function deleteCookieValue(name) {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  const paths = new Set(['/', resolveCookiePath()]);

  paths.forEach((path) => {
    document.cookie = `${name}=; Path=${path}; Max-Age=0; SameSite=Lax${secure}`;
  });
}

function clearStoredConsent() {
  try {
    window.localStorage.removeItem(COOKIE_CONSENT_KEY);
  } catch (_error) {
    // Si el almacenamiento falla, el banner debe seguir tratándose como pendiente.
  }
}

function isValidConsentPayload(parsed) {
  return !!parsed
    && typeof parsed === 'object'
    && !Array.isArray(parsed)
    && parsed.preferences
    && typeof parsed.preferences === 'object'
    && !Array.isArray(parsed.preferences)
    && parsed.preferences.necessary === true
    && typeof parsed.preferences.analytics === 'boolean'
    && typeof parsed.preferences.preferences === 'boolean'
    && typeof parsed.preferences.marketing === 'boolean'
    && typeof parsed.analytics === 'boolean';
}

function mapStatusToConsent(payload) {
  return {
    preferences: !!payload?.cookies?.preferences,
    analytics: !!payload?.cookies?.analytics,
  };
}

function mapConsentPayloadToState(payload) {
  return {
    preferences: !!payload?.preferences?.preferences,
    analytics: !!payload?.analytics,
  };
}

function buildConsentPayload(consent) {
  return {
    preferences: {
      necessary: true,
      analytics: !!consent.analytics,
      preferences: !!consent.preferences,
      marketing: false,
    },
    analytics: !!consent.analytics,
    updatedAt: new Date().toISOString(),
  };
}

function readStoredConsentPayload() {
  try {
    const rawValue = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (typeof rawValue !== 'string' || rawValue.trim() === '') {
      clearStoredConsent();
      return null;
    }

    const parsed = JSON.parse(rawValue);
    if (!isValidConsentPayload(parsed)) {
      clearStoredConsent();
      return null;
    }

    return parsed;
  } catch (_error) {
    clearStoredConsent();
    return null;
  }
}

function readConsentCookiePayload() {
  const rawValue = getCookieValue(COOKIE_CONSENT_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue);

    if (!isValidConsentPayload(parsed)) {
      deleteCookieValue(COOKIE_CONSENT_KEY);
      clearStoredConsent();
      return null;
    }

    return parsed;
  } catch (_error) {
    deleteCookieValue(COOKIE_CONSENT_KEY);
    clearStoredConsent();
    return null;
  }
}

function cookiesAreWritable() {
  const probeName = `${COOKIE_CONSENT_KEY}_probe`;
  const probeValue = String(Date.now());

  setCookieValue(probeName, probeValue, { maxAge: 60 });
  const writable = getCookieValue(probeName) === probeValue;
  deleteCookieValue(probeName);
  return writable;
}

function saveStoredConsent(payload) {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(payload));
  } catch (_error) {
    // El consentimiento no debe bloquear la navegación si el almacenamiento está limitado.
  }
}

function saveLocalConsent(consent) {
  const payload = buildConsentPayload(consent);
  const serializedPayload = JSON.stringify(payload);

  setCookieValue(COOKIE_CONSENT_KEY, serializedPayload, { maxAge: COOKIE_MAX_AGE });

  if (getCookieValue(COOKIE_CONSENT_KEY) === serializedPayload) {
    saveStoredConsent(payload);
    return payload;
  }

  if (!cookiesAreWritable()) {
    saveStoredConsent(payload);
    return readStoredConsentPayload();
  }

  return null;
}

function buildLocalFallbackStatus() {
  const cookieConsent = readConsentCookiePayload();

  if (cookieConsent) {
    return {
      hasConsent: true,
      shouldShowBanner: false,
      cookies: {
        technical: true,
        ...mapConsentPayloadToState(cookieConsent),
      },
    };
  }

  if (cookiesAreWritable()) {
    clearStoredConsent();
    return {
      hasConsent: false,
      shouldShowBanner: true,
      cookies: {
        technical: true,
        ...defaultConsent,
      },
    };
  }

  const storedConsent = readStoredConsentPayload();
  const consentState = storedConsent ? mapConsentPayloadToState(storedConsent) : defaultConsent;

  return {
    hasConsent: storedConsent !== null,
    shouldShowBanner: storedConsent === null,
    cookies: {
      technical: true,
      ...consentState,
    },
  };
}

function consentFromEndpoint(endpoint, body) {
  if (endpoint.endsWith('/accept-all')) {
    return { preferences: true, analytics: true };
  }

  if (endpoint.endsWith('/reject')) {
    return defaultConsent;
  }

  return {
    preferences: !!body?.preferences,
    analytics: !!body?.analytics,
  };
}

async function requestCookieStatusWithFallback() {
  try {
    return await requestJson('/cookies/status');
  } catch (error) {
    if (apiConfig.allowStaticFallback) {
      return buildLocalFallbackStatus();
    }

    throw error;
  }
}

function PreferenceGroup({ title, description, checked, disabled, onChange }) {
  return (
    <div className="cookie-pref">
      <div className="cookie-pref__fila">
        <label className="cookie-pref__label">
          <input type="checkbox" checked={checked} disabled={disabled} onChange={(event) => onChange(event.target.checked)} />
          <span>{title}</span>
        </label>
      </div>
      <p className="cookie-pref__desc">{description}</p>
    </div>
  );
}

function PrivacyNotice({ onNavigate }) {
  const [view, setView] = useState(null);
  const [preferences, setPreferences] = useState(defaultConsent);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadCookieStatus() {
      try {
        const payload = await requestCookieStatusWithFallback();
        if (!active) return;

        setPreferences(mapStatusToConsent(payload));
        setView(payload.hasConsent ? null : 'banner');
      } catch (_error) {
        if (active) {
          setPreferences(defaultConsent);
          setView('banner');
        }
      }
    }

    async function openPreferences() {
      try {
        const payload = await requestCookieStatusWithFallback();
        setPreferences(payload.hasConsent ? mapStatusToConsent(payload) : defaultConsent);
      } catch (_error) {
        setPreferences(defaultConsent);
      }
      setView('panel');
    }

    loadCookieStatus();
    window.addEventListener('pacepal:open-cookie-preferences', openPreferences);
    return () => {
      active = false;
      window.removeEventListener('pacepal:open-cookie-preferences', openPreferences);
    };
  }, []);

  async function saveDecision(endpoint, body = null) {
    setIsSaving(true);

    try {
      const payload = await requestJson(endpoint, {
        method: 'POST',
        ...(body ? { body: JSON.stringify(body) } : {}),
      });

      if (payload.success) {
        setPreferences(mapStatusToConsent(payload));
        setView(null);
      }
    } catch (_error) {
      if (apiConfig.allowStaticFallback) {
        const nextConsent = consentFromEndpoint(endpoint, body);
        const savedConsent = saveLocalConsent(nextConsent);

        if (savedConsent) {
          setPreferences(mapConsentPayloadToState(savedConsent));
          setView(null);
        }
      }
    } finally {
      setIsSaving(false);
    }
  }

  if (!view) {
    return null;
  }

  if (view === 'panel') {
    return (
      <div id="cookie-overlay" className="cookie-overlay">
        <div className="cookie-panel" role="dialog" aria-modal="true" aria-label="Preferencias de cookies">
          <h3 className="cookie-panel__titulo">Preferencias de cookies</h3>
          <p className="cookie-panel__texto">
            Configura qué tipos de cookies deseas permitir. Las cookies técnicas son necesarias y no se pueden desactivar.
          </p>

          <PreferenceGroup
            title="Cookies técnicas (necesarias)"
            description="Necesarias para el funcionamiento del sitio: sesión de usuario, carrito de compra. No se pueden desactivar."
            checked
            disabled
            onChange={() => {}}
          />
          <PreferenceGroup
            title="Cookies analíticas"
            description="Permiten analizar el uso del sitio para mejorarlo. Actualmente PacePal no utiliza cookies analíticas."
            checked={preferences.analytics}
            disabled={false}
            onChange={(checked) => setPreferences((current) => ({ ...current, analytics: checked }))}
          />
          <PreferenceGroup
            title="Cookies de preferencias"
            description="Permiten guardar preferencias opcionales de experiencia."
            checked={preferences.preferences}
            disabled={false}
            onChange={(checked) => setPreferences((current) => ({ ...current, preferences: checked }))}
          />

          <div className="cookie-banner__botones">
            <button
              type="button"
              className="boton boton--primario cookie-btn"
              disabled={isSaving}
              onClick={() => saveDecision('/cookies/preferences', preferences)}
            >
              Guardar preferencias
            </button>
            <button
              type="button"
              className="boton cookie-btn cookie-btn--secundario"
              disabled={isSaving}
              onClick={() => saveDecision('/cookies/accept-all')}
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="cookie-overlay" className="cookie-overlay">
      <div id="cookie-banner" className="cookie-banner" role="dialog" aria-modal="true" aria-label="Aviso de cookies">
        <h3 className="cookie-banner__titulo">Este sitio utiliza cookies</h3>
        <p className="cookie-banner__texto">
          PacePal utiliza cookies técnicas necesarias para el funcionamiento del sitio (inicio de sesión, carrito de compra). También podemos utilizar cookies opcionales para mejorar tu experiencia. Puedes aceptarlas, rechazarlas o configurar tus preferencias.
        </p>
        <a
          href="#cookies"
          className="cookie-banner__enlace"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('cookies');
          }}
        >
          Leer política de cookies
        </a>
        <div className="cookie-banner__botones">
          <button type="button" className="boton boton--primario cookie-btn" disabled={isSaving} onClick={() => saveDecision('/cookies/accept-all')}>
            Aceptar todas
          </button>
          <button type="button" className="boton cookie-btn cookie-btn--secundario" disabled={isSaving} onClick={() => saveDecision('/cookies/reject')}>
            Solo técnicas
          </button>
          <button type="button" className="boton cookie-btn cookie-btn--secundario" onClick={() => setView('panel')}>
            Configurar
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyNotice;
