'use strict';

/**
 * Sistema de consentimiento de cookies — PacePal
 *
 * Cookies actuales:
 *   - PHPSESSID (técnica, necesaria): sesión PHP para login, carrito, perfil.
 *   - pacepal_cookies (técnica): almacena el consentimiento del usuario (PHP cookie).
 *
 * Cookies opcionales (preparado para futuro):
 *   - analiticas: no activas actualmente.
 *   - marketing: no activas actualmente.
 *
 * El consentimiento se gestiona mediante una cookie PHP a través de la API
 * del servidor (POST/GET /api/cookies). Todo el almacenamiento es server-side.
 */

(function () {

    function getBasePath() {
        var mount = document.getElementById('footerCompartido') || document.getElementById('navbarCompartida');
        if (mount && mount.dataset.base !== undefined) {
            return mount.dataset.base;
        }
        return '';
    }

    function getApiUrl() {
        return getBasePath() + 'src/api/index.php/api/cookies';
    }

    /**
     * Consulta el consentimiento actual desde el servidor (GET /api/cookies).
     * Devuelve null si no hay consentimiento guardado.
     */
    async function getConsentimiento() {
        try {
            var resp = await fetch(getApiUrl(), {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });
            var json = await resp.json();
            if (json && json.status === 'ok') {
                return json.consentimiento; // null o { tecnicas, analiticas, marketing }
            }
            return null;
        } catch (_e) {
            return null;
        }
    }

    /**
     * Envía las preferencias de cookies al servidor (POST /api/cookies).
     * El servidor establece la cookie HTTP pacepal_cookies.
     */
    async function guardarConsentimiento(opciones) {
        try {
            await fetch(getApiUrl(), {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(opciones),
            });
        } catch (_e) {
            // error de red — silencioso
        }
    }

    // --- Crear banner ---
    function crearBanner() {
        var overlay = document.createElement('div');
        overlay.id = 'cookie-overlay';
        overlay.className = 'cookie-overlay';

        var banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.className = 'cookie-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Aviso de cookies');

        var titulo = document.createElement('h3');
        titulo.className = 'cookie-banner__titulo';
        titulo.textContent = 'Este sitio utiliza cookies';

        var texto = document.createElement('p');
        texto.className = 'cookie-banner__texto';
        texto.textContent = 'PacePal utiliza cookies técnicas necesarias para el funcionamiento del sitio (inicio de sesión, carrito de compra). '
            + 'También podemos utilizar cookies opcionales para mejorar tu experiencia. '
            + 'Puedes aceptarlas, rechazarlas o configurar tus preferencias.';

        var base = getBasePath();

        var enlace = document.createElement('a');
        enlace.href = base + 'pages/legal/cookies.php';
        enlace.className = 'cookie-banner__enlace';
        enlace.textContent = 'Leer política de cookies';

        var botones = document.createElement('div');
        botones.className = 'cookie-banner__botones';

        var btnAceptar = document.createElement('button');
        btnAceptar.type = 'button';
        btnAceptar.className = 'boton boton--primario cookie-btn';
        btnAceptar.textContent = 'Aceptar todas';

        var btnRechazar = document.createElement('button');
        btnRechazar.type = 'button';
        btnRechazar.className = 'boton cookie-btn cookie-btn--secundario';
        btnRechazar.textContent = 'Solo técnicas';

        var btnConfigurar = document.createElement('button');
        btnConfigurar.type = 'button';
        btnConfigurar.className = 'boton cookie-btn cookie-btn--secundario';
        btnConfigurar.textContent = 'Configurar';

        botones.appendChild(btnAceptar);
        botones.appendChild(btnRechazar);
        botones.appendChild(btnConfigurar);

        banner.appendChild(titulo);
        banner.appendChild(texto);
        banner.appendChild(enlace);
        banner.appendChild(botones);

        overlay.appendChild(banner);
        document.body.appendChild(overlay);

        btnAceptar.addEventListener('click', function () {
            guardarConsentimiento({ tecnicas: true, analiticas: true, marketing: true });
            cerrarBanner(overlay);
        });

        btnRechazar.addEventListener('click', function () {
            guardarConsentimiento({ tecnicas: true, analiticas: false, marketing: false });
            cerrarBanner(overlay);
        });

        btnConfigurar.addEventListener('click', function () {
            cerrarBanner(overlay);
            crearPanelPreferencias(null);
        });
    }

    function cerrarBanner(overlay) {
        if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
    }

    // --- Panel de preferencias ---
    function crearPanelPreferencias(consentimientoActual) {
        var consentimiento = consentimientoActual || { tecnicas: true, analiticas: false, marketing: false };

        var overlay = document.createElement('div');
        overlay.id = 'cookie-overlay';
        overlay.className = 'cookie-overlay';

        var panel = document.createElement('div');
        panel.className = 'cookie-panel';
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-label', 'Preferencias de cookies');

        var titulo = document.createElement('h3');
        titulo.className = 'cookie-panel__titulo';
        titulo.textContent = 'Preferencias de cookies';

        var descripcion = document.createElement('p');
        descripcion.className = 'cookie-panel__texto';
        descripcion.textContent = 'Configura qué tipos de cookies deseas permitir. Las cookies técnicas son necesarias y no se pueden desactivar.';

        // --- Categoría técnicas (siempre activa) ---
        var grupTecnicas = crearGrupoPreferencia(
            'Cookies técnicas (necesarias)',
            'Necesarias para el funcionamiento del sitio: sesión de usuario, carrito de compra. No se pueden desactivar.',
            true,
            true
        );

        // --- Categoría analíticas ---
        var grupAnaliticas = crearGrupoPreferencia(
            'Cookies analíticas',
            'Permiten analizar el uso del sitio para mejorarlo. Actualmente PacePal no utiliza cookies analíticas.',
            consentimiento.analiticas,
            false
        );

        // --- Categoría marketing ---
        var grupMarketing = crearGrupoPreferencia(
            'Cookies de marketing',
            'Permiten mostrar publicidad personalizada. Actualmente PacePal no utiliza cookies de marketing.',
            consentimiento.marketing,
            false
        );

        // --- Botones ---
        var botones = document.createElement('div');
        botones.className = 'cookie-banner__botones';

        var btnGuardar = document.createElement('button');
        btnGuardar.type = 'button';
        btnGuardar.className = 'boton boton--primario cookie-btn';
        btnGuardar.textContent = 'Guardar preferencias';

        var btnAceptarTodas = document.createElement('button');
        btnAceptarTodas.type = 'button';
        btnAceptarTodas.className = 'boton cookie-btn cookie-btn--secundario';
        btnAceptarTodas.textContent = 'Aceptar todas';

        botones.appendChild(btnGuardar);
        botones.appendChild(btnAceptarTodas);

        panel.appendChild(titulo);
        panel.appendChild(descripcion);
        panel.appendChild(grupTecnicas.contenedor);
        panel.appendChild(grupAnaliticas.contenedor);
        panel.appendChild(grupMarketing.contenedor);
        panel.appendChild(botones);

        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        btnGuardar.addEventListener('click', function () {
            guardarConsentimiento({
                tecnicas: true,
                analiticas: grupAnaliticas.checkbox.checked,
                marketing: grupMarketing.checkbox.checked,
            });
            cerrarBanner(overlay);
        });

        btnAceptarTodas.addEventListener('click', function () {
            guardarConsentimiento({ tecnicas: true, analiticas: true, marketing: true });
            cerrarBanner(overlay);
        });
    }

    function crearGrupoPreferencia(titulo, descripcion, checked, deshabilitado) {
        var contenedor = document.createElement('div');
        contenedor.className = 'cookie-pref';

        var fila = document.createElement('div');
        fila.className = 'cookie-pref__fila';

        var label = document.createElement('label');
        label.className = 'cookie-pref__label';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = checked;
        if (deshabilitado) {
            checkbox.disabled = true;
        }

        var span = document.createElement('span');
        span.textContent = titulo;

        label.appendChild(checkbox);
        label.appendChild(span);

        fila.appendChild(label);

        var desc = document.createElement('p');
        desc.className = 'cookie-pref__desc';
        desc.textContent = descripcion;

        contenedor.appendChild(fila);
        contenedor.appendChild(desc);

        return { contenedor: contenedor, checkbox: checkbox };
    }

    // Exponer función para abrir preferencias desde el footer
    window.abrirPreferenciasCookies = async function () {
        var consentimiento = await getConsentimiento();
        crearPanelPreferencias(consentimiento);
    };

    // --- Inicializar ---
    async function init() {
        var consentimiento = await getConsentimiento();
        if (!consentimiento) {
            crearBanner();
        }

        // Botón "Configurar cookies" en el footer
        var btnFooter = document.getElementById('btnConfigurarCookies');
        if (btnFooter) {
            btnFooter.addEventListener('click', async function () {
                var actual = await getConsentimiento();
                crearPanelPreferencias(actual);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
