import { useEffect, useState } from 'react';
import { COOKIE_CONSENT_COOKIE, COOKIE_CONSENT_STORAGE_KEY, LEGACY_COOKIE_CONSENT_STORAGE_KEY, hasAcceptedCookieConsent, persistCookieConsent, readCookie } from '../services/demo.js';

const defaultConsent = { tecnicas: true, analiticas: false, marketing: false };

function readLegacyConsent() {
  try {
    const raw = localStorage.getItem(LEGACY_COOKIE_CONSENT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (_error) {
    return null;
  }
}

function getConsent() {
  if (hasAcceptedCookieConsent()) {
    return { tecnicas: true, analiticas: false, marketing: false };
  }

  if (readCookie(COOKIE_CONSENT_COOKIE) === 'accepted' || localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) === 'accepted') {
    return { tecnicas: true, analiticas: false, marketing: false };
  }

  return readLegacyConsent();
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

  useEffect(() => {
    let active = true;

    const consent = getConsent();
    if (active) {
      if (consent) {
        setPreferences({ ...defaultConsent, ...consent });
        setView(null);
      } else {
        setView('banner');
      }
    }

    function openPreferences() {
      const currentConsent = getConsent();
      setPreferences({ ...defaultConsent, ...(currentConsent || {}) });
      setView('panel');
    }

    window.addEventListener('pacepal:open-cookie-preferences', openPreferences);
    return () => {
      active = false;
      window.removeEventListener('pacepal:open-cookie-preferences', openPreferences);
    };
  }, []);

  function accept(consent) {
    persistCookieConsent();
    setPreferences(consent);
    setView(null);
  }

  if (!view) {
    return null;
  }

  if (view === 'panel') {
    return (
      <div id="cookie-overlay" className="cookie-overlay">
        <div className="cookie-panel" role="dialog" aria-label="Preferencias de cookies">
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
            checked={preferences.analiticas}
            disabled={false}
            onChange={(checked) => setPreferences((current) => ({ ...current, analiticas: checked }))}
          />
          <PreferenceGroup
            title="Cookies de marketing"
            description="Permiten mostrar publicidad personalizada. Actualmente PacePal no utiliza cookies de marketing."
            checked={preferences.marketing}
            disabled={false}
            onChange={(checked) => setPreferences((current) => ({ ...current, marketing: checked }))}
          />

          <div className="cookie-banner__botones">
            <button type="button" className="boton boton--primario cookie-btn" onClick={() => accept({ ...preferences, tecnicas: true })}>
              Guardar preferencias
            </button>
            <button type="button" className="boton cookie-btn cookie-btn--secundario" onClick={() => accept({ tecnicas: true, analiticas: true, marketing: true })}>
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="cookie-overlay" className="cookie-overlay">
      <div id="cookie-banner" className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
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
          <button type="button" className="boton boton--primario cookie-btn" onClick={() => accept({ tecnicas: true, analiticas: true, marketing: true })}>
            Aceptar todas
          </button>
          <button type="button" className="boton cookie-btn cookie-btn--secundario" onClick={() => accept(defaultConsent)}>
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