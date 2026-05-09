import { useVoiceNav } from '../hooks/useVoiceNav.js';

/**
 * Botón flotante de accesibilidad.
 * Activa o desactiva la navegación asistida por voz al navegar con teclado.
 * Posición fija en la esquina inferior derecha, persistido en localStorage.
 */
export default function AccessibilityButton() {
  const { enabled, toggle } = useVoiceNav();

  return (
    <button
      type="button"
      className={`btn-accesibilidad${enabled ? ' btn-accesibilidad--activo' : ''}`}
      onClick={toggle}
      aria-label={enabled ? 'Desactivar ayuda por voz' : 'Activar ayuda por voz'}
      aria-pressed={enabled}
      title={enabled ? 'Desactivar ayuda por voz (activa)' : 'Activar ayuda por voz'}
    >
      <i className="bi bi-universal-access" aria-hidden="true"></i>
    </button>
  );
}
