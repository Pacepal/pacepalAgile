// ===================================================================
// UI COMPARTIDA — navbar y footer dinámicos
// Se monta en cada página usando los divs #navbarCompartida y
// #footerCompartido. Consulta la sesión del usuario para decidir
// si mostrar login/register o perfil/logout.
// ===================================================================

// Funciones DOM compartidas — usadas en detalle, perfil y admin
function crearElemento(tag, texto, clase) {
	var el = document.createElement(tag);
	if (texto) el.textContent = texto;
	if (clase) el.className = clase;
	return el;
}

function limpiar(el) {
	while (el && el.firstChild) {
		el.removeChild(el.firstChild);
	}
}

async function fetchSessionStatus(basePath) {
	const sessionUrl = `${basePath}src/api/index.php/api/session`;

	try {
		const response = await fetch(sessionUrl, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
			},
		});

		if (response.ok) {
			const payload = await response.json().catch(function () {
				return null;
			});

			if (payload && typeof payload.logged === 'boolean') {
				return payload;
			}

			return { logged: false };
		}
	} catch (_error) {
		// Se prueba fallback mas abajo.
	}

	try {
		const fallbackUrl = `${basePath}api/session`;
		const fallbackResponse = await fetch(fallbackUrl, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
			},
		});

		const fallbackPayload = await fallbackResponse.json().catch(function () {
			return null;
		});

		if (fallbackPayload && typeof fallbackPayload.logged === 'boolean') {
			return fallbackPayload;
		}

		return { logged: false };
	} catch (_error) {
		return { logged: false };
	}
}

// si la ruta principal falla (sin reescritura), probamos fallback
async function doLogout(basePath) {
	const logoutUrl = `${basePath}src/api/index.php/api/logout`;

	try {
		const response = await fetch(logoutUrl, {
			method: 'POST',
			credentials: 'include',
		});

		if (response.ok) {
			return;
		}
	} catch (_error) {
		// Se prueba fallback mas abajo.
	}

	const fallbackUrl = `${basePath}api/logout`;
	await fetch(fallbackUrl, {
		method: 'POST',
		credentials: 'include',
	}).catch(function () {
		return null;
	});
}

// monta los botones de auth según estado de sesión
function buildAuthActions(base, current, sessionData) {
	const isLogin = current === 'login';
	const isRegistro = current === 'registro';
	const isPerfil = current === 'perfil';

	if (!sessionData || sessionData.logged !== true) {
		return `
			<a href="${base}pages/formulario/login.php" class="boton boton--primario cabecera__login" ${isLogin ? 'aria-current="page"' : ''}>Login</a>
			<a href="${base}pages/formulario/register.php" class="boton cabecera__registro" ${isRegistro ? 'aria-current="page"' : ''}>Register</a>
		`;
	}

	const adminLink = sessionData.rol === 'admin'
		? `<a href="${base}pages/admin/panelAdmin.php" class="boton">Admin</a>`
		: '';

	return `
		<a href="${base}pages/tienda/carrito.php" class="boton cabecera__carrito" title="Mi carrito" id="enlaceCarritoNav"><i class="bi bi-cart3"></i> Carrito <span id="contadorCarritoNav" class="badge bg-danger" style="display:none;"></span></a>
		<a href="${base}pages/usuario/perfil.php" class="boton boton--primario cabecera__login" ${isPerfil ? 'aria-current="page"' : ''}>Perfil</a>
		${adminLink}
		<button type="button" class="boton cabecera__registro" id="botonLogout">Logout</button>
	`;
}

async function renderNavbarCompartida() {
	const mount = document.getElementById('navbarCompartida');
	if (!mount) {
		return;
	}

	const base = mount.dataset.base || '';
	const sessionData = await fetchSessionStatus(base);
	const current = mount.dataset.current || '';
	const isAbout = current === 'about';
	const isActividades = current === 'actividades';
	const isTienda = current === 'tienda';
	const isRutas = current === 'rutas';
	const authActions = buildAuthActions(base, current, sessionData);

	mount.innerHTML = `
		<header class="cabecera">
			<div class="contenedor cabecera__fila">
				<a href="${base}index.html" class="logo" aria-label="Ir al inicio de PacePal">
					<img src="${base}img/logo/logo.webp" alt="Logo PacePal" class="logo__img" />
					<span class="logo__texto">PacePal</span>
				</a>

				<button
					type="button"
					class="hamburguesa"
					id="botonMenu"
					aria-label="Abrir menú principal"
					aria-controls="menuPrincipal"
					aria-expanded="false"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<nav class="menu" id="menuPrincipal" aria-label="Menú principal">
					<a href="${base}pages/actividades/actividades.php" ${isActividades ? 'aria-current="page"' : ''}>Actividades</a>
					<a href="${base}pages/tienda/tienda.php" ${isTienda ? 'aria-current="page"' : ''}>Tienda</a>
					<a href="${base}pages/rutas/rutas.php" ${isRutas ? 'aria-current="page"' : ''}>Rutas</a>
					<a href="${base}pages/about/about.html" ${isAbout ? 'aria-current="page"' : ''}>Sobre nosotros</a>
				</nav>

				${authActions}
			</div>
		</header>`;

	const botonLogout = document.getElementById('botonLogout');
	if (botonLogout) {
		botonLogout.addEventListener('click', async function () {
			await doLogout(base);
			window.location.href = `${base}pages/formulario/login.php`;
		});
	}

	// Si esta logeado, remplazar CTAs de registro en la landing.
	if (sessionData && sessionData.logged === true) {
		var ctaLinks = document.querySelectorAll('a[href*="register.php"]');
		for (var ci = 0; ci < ctaLinks.length; ci++) {
			ctaLinks[ci].href = base + 'pages/usuario/perfil.php';
			if (ctaLinks[ci].textContent.trim() === 'Crear cuenta') {
				ctaLinks[ci].textContent = 'Mi perfil';
			}
		}

		actualizarContadorCarrito();
	}
}

function renderFooterCompartido() {
	const mount = document.getElementById('footerCompartido');
	if (!mount) {
		return;
	}

	const base = mount.dataset.base || '';

	mount.innerHTML = `
		<footer class="pie">
			<div class="contenedor">
				<div class="row row-cols-1 row-cols-md-4 g-4 pie__rejilla">
					<section class="col pie__col">
					<h3 class="logo pie__logo">
						<img src="${base}img/logo/logo.webp" alt="Logo PacePal" class="logo__img" />
						<span class="logo__texto">PacePal</span>
					</h3>
					<p>Conectando personas para actividades deportivas.</p>
					</section>

					<section class="col pie__col">
						<h4>Explora</h4>
						<a href="${base}pages/actividades/actividades.php">Actividades</a>
						<a href="${base}pages/rutas/rutas.php">Rutas</a>
						<a href="${base}pages/about/about.html">Sobre nosotros</a>
					</section>

					<section class="col pie__col">
						<h4>Tienda</h4>
						<a href="${base}pages/tienda/tienda.php">Productos</a>
						<a href="${base}pages/tienda/tienda.php">Contacto</a>
						<a href="${base}pages/formulario/register.php">Crear cuenta</a>
					</section>

					<section class="col pie__col">
						<h4>Legal</h4>
						<a href="${base}pages/legal/cookies.php">Política de cookies</a>
						<button type="button" class="pie__btn-cookies" id="btnConfigurarCookies">Configurar cookies</button>
					</section>
				</div>

				<div class="pie__inferior">
					<p>© 2026 PacePal. Todos los derechos reservados.</p>
					<a
						class="credito-treecore"
						href="https://treecorestudio.es/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Web de Treecore Studio"
					>
						Creado por el equipo de Treecore Studio
						<img src="${base}img/logo/logotipoTrecore.webp" alt="Logo Treecore Studio" />
					</a>
				</div>
			</div>
		</footer>`;
}
// Iniciar
renderNavbarCompartida();
renderFooterCompartido();

// badge del carrito en el nav — cuenta total de items
function actualizarContadorCarrito() {
	var mount = document.getElementById('navbarCompartida');
	var base = mount ? (mount.dataset.base || '') : '';
	var apiUrl = base + 'src/api/index.php/api/carrito';

	fetch(apiUrl, {
		method: 'GET',
		credentials: 'include',
		headers: { Accept: 'application/json' },
	}).then(function (resp) {
		if (!resp.ok) return null;
		return resp.json();
	}).then(function (json) {
		var badge = document.getElementById('contadorCarritoNav');
		if (!badge) return;
		if (!json || json.status !== 'ok') {
			badge.style.display = 'none';
			return;
		}
		var items = json.data && json.data.items ? json.data.items : [];
		var total = 0;
		for (var i = 0; i < items.length; i++) {
			total += items[i].cantidad || 0;
		}
		if (total > 0) {
			badge.textContent = String(total);
			badge.style.display = '';
		} else {
			badge.style.display = 'none';
		}
	}).catch(function () {
		// silencioso
	});
}

