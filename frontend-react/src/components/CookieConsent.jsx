import { useEffect, useState } from 'react';
import { buildApiUrl } from '../services/api.js';

const storageKey = 'pacepal_cookies';
const defaultConsent = { tecnicas: true, analiticas: false, marketing: false };

function readLocalConsent() {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : null;
  } catch (_error) {
    return null;
  }
}

function writeLocalConsent(consent) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(consent));
  } catch (_error) {
    // El consentimiento visual no debe bloquear la navegacion.
  }
}

async function getConsent() {
  try {
    const response = await fetch(buildApiUrl('/cookies'), {
      method: 'GET',
      credentials: 'include',
      headers: { Accept: 'application/json' },
    });
    const payload = await response.json().catch(() => ({}));
    if (response.ok && payload.status === 'ok') {
      return payload.consentimiento || null;
    }
  } catch (_error) {
    // GitHub Pages no ejecuta PHP; se usa almacenamiento local sin mostrarlo.
  }

  return readLocalConsent();
}

async function saveConsent(consent) {
  writeLocalConsent(consent);

  try {
    await fetch(buildApiUrl('/cookies'), {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(consent),
    });
  } catch (_error) {
    // Silencioso para mantener la misma interfaz publicada.
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

function CookieConsent({ onNavigate }) {
  const [view, setView] = useState(null);
  const [preferences, setPreferences] = useState(defaultConsent);

  useEffect(() => {
    let active = true;

    getConsent().then((consent) => {
      if (!active) return;
      if (consent) {
        setPreferences({ ...defaultConsent, ...consent });
        setView(null);
      } else {
        setView('banner');
      }
    });

    async function openPreferences() {
      const consent = await getConsent();
      setPreferences({ ...defaultConsent, ...(consent || {}) });
      setView('panel');
    }

    window.addEventListener('pacepal:open-cookie-preferences', openPreferences);
    return () => {
      active = false;
      window.removeEventListener('pacepal:open-cookie-preferences', openPreferences);
    };
  }, []);

  async function accept(consent) {
    await saveConsent(consent);
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

export default CookieConsent;
