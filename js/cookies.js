'use strict';

(function () {
    function getBasePath() {
        var mount = document.getElementById('footerCompartido') || document.getElementById('navbarCompartida');
        if (mount && mount.dataset.base !== undefined) {
            return mount.dataset.base;
        }
        return '';
    }

    function buildCookieApiUrl(path) {
        return getBasePath() + 'src/api/index.php/api/cookies/' + path;
    }

    async function requestCookieApi(path, options) {
        var response = await fetch(buildCookieApiUrl(path), {
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            ...(options || {}),
        });

        return response.json();
    }

    async function hasConsent() {
        try {
            var payload = await requestCookieApi('status');
            return !!payload.hasConsent;
        } catch (_error) {
            return false;
        }
    }

    function crearBoton(texto, clase) {
        var boton = document.createElement('button');
        boton.type = 'button';
        boton.className = clase;
        boton.textContent = texto;
        return boton;
    }

    function cerrarOverlay(overlay) {
        if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
    }

    async function guardarDecision(path, body, overlay) {
        var payload = await requestCookieApi(path, {
            method: 'POST',
            body: body ? JSON.stringify(body) : undefined,
        });

        if (payload.success) {
            cerrarOverlay(overlay);
        }
    }

    function crearBanner() {
        var overlay = document.createElement('div');
        overlay.id = 'cookie-overlay';
        overlay.className = 'cookie-overlay';

        var banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.className = 'cookie-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-modal', 'true');
        banner.setAttribute('aria-label', 'Aviso de cookies');

        var titulo = document.createElement('h3');
        titulo.className = 'cookie-banner__titulo';
        titulo.textContent = 'Este sitio utiliza cookies';

        var texto = document.createElement('p');
        texto.className = 'cookie-banner__texto';
        texto.textContent = 'PacePal utiliza cookies técnicas necesarias y permite configurar cookies opcionales de preferencias y analíticas.';

        var enlace = document.createElement('a');
        enlace.href = '#cookies';
        enlace.className = 'cookie-banner__enlace';
        enlace.textContent = 'Leer política de cookies';

        var botones = document.createElement('div');
        botones.className = 'cookie-banner__botones';

        var btnAceptar = crearBoton('Aceptar todas', 'boton boton--primario cookie-btn');
        var btnRechazar = crearBoton('Solo técnicas', 'boton cookie-btn cookie-btn--secundario');
        var btnConfigurar = crearBoton('Configurar', 'boton cookie-btn cookie-btn--secundario');

        botones.appendChild(btnAceptar);
        botones.appendChild(btnRechazar);
        botones.appendChild(btnConfigurar);

        banner.appendChild(titulo);
        banner.appendChild(texto);
        banner.appendChild(enlace);
        banner.appendChild(botones);
        overlay.appendChild(banner);
        document.body.appendChild(overlay);

        btnAceptar.focus();

        btnAceptar.addEventListener('click', function () {
            guardarDecision('accept-all', null, overlay);
        });

        btnRechazar.addEventListener('click', function () {
            guardarDecision('reject', null, overlay);
        });

        btnConfigurar.addEventListener('click', function () {
            cerrarOverlay(overlay);
            crearPanelPreferencias();
        });
    }

    function crearPanelPreferencias() {
        var overlay = document.createElement('div');
        overlay.id = 'cookie-overlay';
        overlay.className = 'cookie-overlay';

        var panel = document.createElement('div');
        panel.className = 'cookie-panel';
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-modal', 'true');
        panel.setAttribute('aria-label', 'Preferencias de cookies');

        var titulo = document.createElement('h3');
        titulo.className = 'cookie-panel__titulo';
        titulo.textContent = 'Preferencias de cookies';

        var descripcion = document.createElement('p');
        descripcion.className = 'cookie-panel__texto';
        descripcion.textContent = 'Las cookies técnicas son necesarias. Puedes activar o desactivar las cookies opcionales.';

        var preferencias = crearGrupoPreferencia('Cookies de preferencias', 'Guardan preferencias opcionales de experiencia.', false);
        var analiticas = crearGrupoPreferencia('Cookies analíticas', 'Ayudan a mejorar el sitio.', false);

        var botones = document.createElement('div');
        botones.className = 'cookie-banner__botones';

        var btnGuardar = crearBoton('Guardar preferencias', 'boton boton--primario cookie-btn');
        var btnAceptarTodas = crearBoton('Aceptar todas', 'boton cookie-btn cookie-btn--secundario');

        botones.appendChild(btnGuardar);
        botones.appendChild(btnAceptarTodas);

        panel.appendChild(titulo);
        panel.appendChild(descripcion);
        panel.appendChild(preferencias.contenedor);
        panel.appendChild(analiticas.contenedor);
        panel.appendChild(botones);
        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        btnGuardar.focus();

        btnGuardar.addEventListener('click', function () {
            guardarDecision('preferences', {
                preferences: preferencias.checkbox.checked,
                analytics: analiticas.checkbox.checked,
            }, overlay);
        });

        btnAceptarTodas.addEventListener('click', function () {
            guardarDecision('accept-all', null, overlay);
        });
    }

    function crearGrupoPreferencia(titulo, descripcion, checked) {
        var contenedor = document.createElement('div');
        contenedor.className = 'cookie-pref';

        var fila = document.createElement('div');
        fila.className = 'cookie-pref__fila';

        var label = document.createElement('label');
        label.className = 'cookie-pref__label';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = checked;

        var texto = document.createElement('span');
        texto.textContent = titulo;

        var desc = document.createElement('p');
        desc.className = 'cookie-pref__desc';
        desc.textContent = descripcion;

        label.appendChild(checkbox);
        label.appendChild(texto);
        fila.appendChild(label);
        contenedor.appendChild(fila);
        contenedor.appendChild(desc);

        return { contenedor: contenedor, checkbox: checkbox };
    }

    window.abrirPreferenciasCookies = function () {
        var existente = document.getElementById('cookie-overlay');
        cerrarOverlay(existente);
        crearPanelPreferencias();
    };

    document.addEventListener('DOMContentLoaded', async function () {
        var btnFooter = document.getElementById('btnConfigurarCookies');
        if (btnFooter) {
            btnFooter.addEventListener('click', window.abrirPreferenciasCookies);
        }

        if (!(await hasConsent())) {
            crearBanner();
        }
    });
})();
