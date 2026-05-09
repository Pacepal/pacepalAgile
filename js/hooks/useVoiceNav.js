import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Selectores de elementos focusables relevantes para la ayuda por voz.
 * Excluimos tabindex="-1" (no alcanzables por teclado) y elementos deshabilitados.
 */
const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
].join(', ');

const STORAGE_KEY = 'pacepal_voz_accesibilidad';

/** Selecciona la mejor voz española disponible. */
function getSpanishVoice() {
    if (!window.speechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices();
    // Preferencia: es-ES exacto
    const exactMatch = voices.find(v => v.lang === 'es-ES');
    if (exactMatch) return exactMatch;
    // Fallback: cualquier variante del español
    return voices.find(v => v.lang.startsWith('es')) ?? null;
}

/** Cancela la locución activa y pronuncia el texto en español. */
function speak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 1;
    utterance.pitch = 1;
    // Asignar voz española si está disponible; si no, el navegador usa la de lang
    const voice = getSpanishVoice();
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
}

/**
 * Construye una descripción breve y legible del elemento enfocado.
 * Prioridad: aria-label > title > placeholder > alt (img anidada) > texto visible > tipo genérico.
 */
function buildDescription(el) {
    const ariaLabel = el.getAttribute('aria-label');
    if (ariaLabel?.trim()) return ariaLabel.trim();

    const title = el.getAttribute('title');
    if (title?.trim()) return title.trim();

    const placeholder = el.getAttribute('placeholder');
    if (placeholder?.trim()) return `Campo: ${placeholder.trim()}`;

    const img = el.querySelector('img[alt]');
    if (img?.getAttribute('alt')?.trim()) return img.getAttribute('alt').trim();

    const text = el.textContent?.trim().replace(/\s+/g, ' ');
    if (text && text.length > 0 && text.length <= 80) return text;

    const tag = el.tagName.toLowerCase();
    const type = el.getAttribute('type')?.toLowerCase();

    if (tag === 'input') {
        if (type === 'submit' || type === 'button') return 'Botón';
        if (type === 'checkbox') return 'Casilla de verificación';
        if (type === 'radio') return 'Opción';
        if (type === 'search') return 'Campo de búsqueda';
        if (type === 'email') return 'Campo de correo';
        if (type === 'password') return 'Campo de contraseña';
        if (type === 'number') return 'Campo numérico';
        return 'Campo de texto';
    }
    if (tag === 'select') return 'Selector';
    if (tag === 'textarea') return 'Área de texto';
    if (tag === 'button') return 'Botón';
    if (tag === 'a') return 'Enlace';
    return 'Elemento interactivo';
}

/**
 * Hook que gestiona la ayuda por voz accesible mediante teclado.
 *
 * - Persiste el estado en localStorage.
 * - Solo habla cuando la navegación es por teclado (no por ratón).
 * - Cancela la locución anterior antes de iniciar una nueva.
 * - Prioriza voces en español de España (es-ES).
 */
export function useVoiceNav() {
    const [enabled, setEnabled] = useState(() => {
        try {
            return localStorage.getItem(STORAGE_KEY) === 'true';
        } catch {
            return false;
        }
    });

    // Refs para evitar closures obsoletas en los listeners del DOM
    const enabledRef = useRef(enabled);
    const usingKeyboard = useRef(false);

    // Mantener ref sincronizado con el estado
    useEffect(() => {
        enabledRef.current = enabled;
    }, [enabled]);

    // Detectar si el usuario navega con teclado o con ratón
    useEffect(() => {
        const onKeyDown = () => { usingKeyboard.current = true; };
        const onMouseDown = () => { usingKeyboard.current = false; };

        window.addEventListener('keydown', onKeyDown, { passive: true });
        window.addEventListener('mousedown', onMouseDown, { passive: true });

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('mousedown', onMouseDown);
        };
    }, []);

    // Escuchar el foco en elementos interactivos
    useEffect(() => {
        function onFocusIn(e) {
            if (!enabledRef.current) return;
            if (!usingKeyboard.current) return;

            const el = e.target;
            if (!el || !el.matches(FOCUSABLE_SELECTOR)) return;

            speak(buildDescription(el));
        }

        document.addEventListener('focusin', onFocusIn);
        return () => document.removeEventListener('focusin', onFocusIn);
    }, []);

    // Limpiar cualquier locución activa al desmontar
    useEffect(() => {
        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    const toggle = useCallback(() => {
        setEnabled(prev => {
            const next = !prev;
            try {
                localStorage.setItem(STORAGE_KEY, String(next));
            } catch {
                // Error de almacenamiento: continuar sin persistir
            }
            speak(next ? 'Ayuda por voz activada' : 'Ayuda por voz desactivada');
            return next;
        });
    }, []);

    return { enabled, toggle };
}
