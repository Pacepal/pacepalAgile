import { useRef, useState } from 'react';
import { buildPublicAssetUrl } from '../utils/paths.js';

/**
 * Botón flotante de accesibilidad.
 * Reproduce la locución local definida para Sprint 3.
 */
export default function AccessibilityButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function playAccessibilityAudio() {
    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = 0;
    setIsPlaying(true);

    audio.play().catch(() => {
      setIsPlaying(false);
    });
  }

  return (
    <>
      <button
        type="button"
        className={`btn-accesibilidad${isPlaying ? ' btn-accesibilidad--activo' : ''}`}
        onClick={playAccessibilityAudio}
        aria-label="Reproducir audio de accesibilidad"
        title="Reproducir audio de accesibilidad"
      >
        <i className="bi bi-universal-access" aria-hidden="true"></i>
      </button>

      <audio
        ref={audioRef}
        preload="none"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
        aria-hidden="true"
      >
        <source src={buildPublicAssetUrl('audio/voz.mp3')} type="audio/mpeg" />
        <source src={buildPublicAssetUrl('audio/voz.ogg')} type="audio/ogg" />
      </audio>
    </>
  );
}
