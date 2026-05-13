import { useEffect, useState } from 'react';
import { apiConfig, requestJson } from '../services/api.js';

const defaultConsent = { preferences: false, analytics: false };
const COOKIE_CONSENT_KEY = 'pacepal_cookie_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function mapStatusToConsent(payload) {
  return {
    preferences: !!payload?.cookies?.preferences,
    analytics: !!payload?.cookies?.analytics,
  };
}

function readStoredConsent() {
  try {
    const rawValue = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!rawValue) return null;

    const parsed = JSON.parse(rawValue);
    return {
      preferences: !!parsed.preferences,
      analytics: !!parsed.analytics,
    };
  } catch (_error) {
    return null;
  }
}

function writeConsentCookie(consent) {
  if (typeof document === 'undefined') return;

  const value = encodeURIComponent(JSON.stringify(consent));
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE_CONSENT_KEY}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
}

function saveStoredConsent(consent) {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  } catch (_error) {
    // El consentimiento no debe bloquear la navegación si el almacenamiento está limitado.
  }

  writeConsentCookie(consent);
}

function buildLocalStatus() {
  const storedConsent = readStoredConsent();

  return {
    hasConsent: !!storedConsent,
    cookies: {
      technical: true,
      ...(storedConsent || defaultConsent),
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
      if (apiConfig.useStaticDataOnly) {
        const payload = buildLocalStatus();
        if (!active) return;

        setPreferences(mapStatusToConsent(payload));
        setView(payload.hasConsent ? null : 'banner');
        return;
      }

      try {
        const payload = await requestJson('/cookies/status');
        if (!active) return;

        setPreferences(mapStatusToConsent(payload));
        setView(payload.hasConsent ? null : 'banner');
      } catch (_error) {
        if (active) {
          setView('banner');
        }
      }
    }

    async function openPreferences() {
      if (apiConfig.useStaticDataOnly) {
        const payload = buildLocalStatus();
        setPreferences(payload.hasConsent ? mapStatusToConsent(payload) : defaultConsent);
        setView('panel');
        return;
      }

      try {
        const payload = await requestJson('/cookies/status');
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
      if (apiConfig.useStaticDataOnly) {
        const nextConsent = consentFromEndpoint(endpoint, body);
        saveStoredConsent(nextConsent);
        setPreferences(nextConsent);
        setView(null);
        return;
      }

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
        saveStoredConsent(nextConsent);
        setPreferences(nextConsent);
        setView(null);
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
