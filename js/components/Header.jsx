import { useState } from 'react';
import { buildPublicAssetUrl } from '../services/api.js';

const pacepalLogo = buildPublicAssetUrl('img/logo/logo.webp');

const navItems = [
  { page: 'actividades', label: 'Actividades' },
  { page: 'tienda', label: 'Tienda' },
  { page: 'rutas', label: 'Rutas' },
  { page: 'about', label: 'Sobre nosotros' },
  { page: 'contacto', label: 'Contacto' },
];

function Header({ cartCount, session, currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isReady = session.status !== 'cargando';

  function handleNavigate(page) {
    return (event) => {
      event.preventDefault();
      onNavigate(page);
      setMenuOpen(false);
    };
  }

  async function handleLogout() {
    await session.logout();
    onNavigate('login');
    setMenuOpen(false);
  }

  return (
    <header className="cabecera">
      <div className="contenedor cabecera__fila">
        <a className="logo" href="#inicio" aria-label="Ir al inicio de PacePal" onClick={handleNavigate('inicio')}>
          <img src={pacepalLogo} alt="Logo PacePal" className="logo__img" />
          <span className="logo__texto">PacePal</span>
        </a>

        <button
          type="button"
          className="hamburguesa"
          id="botonMenu"
          aria-label="Abrir menú principal"
          aria-controls="menuPrincipal"
          aria-expanded={menuOpen ? 'true' : 'false'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`menu${menuOpen ? ' menu--abierto' : ''}`} id="menuPrincipal" aria-label="Menú principal">
          {navItems.map((item) => (
            <a
              key={item.page}
              href={`#${item.page}`}
              aria-current={currentPage === item.page ? 'page' : undefined}
              onClick={handleNavigate(item.page)}
            >
              {item.label}
            </a>
          ))}

          {/* Acciones de autenticación — solo visibles en el menú móvil */}
          {isReady && (
            <div className="menu__login">
              {session.user ? (
                <>
                  <a href="#carrito" onClick={handleNavigate('carrito')}>
                    Carrito{cartCount > 0 ? ` (${cartCount})` : ''}
                  </a>
                  {session.user.rol === 'admin' ? (
                    <a href="#admin" aria-current={currentPage === 'admin' ? 'page' : undefined} onClick={handleNavigate('admin')}>
                      Admin
                    </a>
                  ) : null}
                  <a href="#perfil" aria-current={currentPage === 'perfil' ? 'page' : undefined} onClick={handleNavigate('perfil')}>
                    Mi perfil
                  </a>
                  <button type="button" className="menu__login-btn" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <a href="#login" aria-current={currentPage === 'login' ? 'page' : undefined} onClick={handleNavigate('login')}>
                    Iniciar sesión
                  </a>
                  <a href="#registro" aria-current={currentPage === 'registro' ? 'page' : undefined} onClick={handleNavigate('registro')}>
                    Registrarse
                  </a>
                </>
              )}
            </div>
          )}
        </nav>

        {isReady && session.user ? (
          <>
            <a className="boton cabecera__carrito" href="#carrito" title="Mi carrito" id="enlaceCarritoNav" onClick={handleNavigate('carrito')}>
              <i className="bi bi-cart3" aria-hidden="true"></i> Carrito{' '}
              <span id="contadorCarritoNav" className="badge bg-danger" style={{ display: cartCount > 0 ? undefined : 'none' }}>
                {cartCount > 0 ? cartCount : ''}
              </span>
            </a>
            {session.user.rol === 'admin' ? (
              <a className="boton cabecera__admin" href="#admin" aria-current={currentPage === 'admin' ? 'page' : undefined} onClick={handleNavigate('admin')}>
                Admin
              </a>
            ) : null}
            <a className="boton boton--primario cabecera__login" href="#perfil" aria-current={currentPage === 'perfil' ? 'page' : undefined} onClick={handleNavigate('perfil')}>
              Perfil
            </a>
            <button type="button" className="boton cabecera__registro" id="botonLogout" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        ) : isReady ? (
          <>
            <a className="boton boton--primario cabecera__login" href="#login" aria-current={currentPage === 'login' ? 'page' : undefined} onClick={handleNavigate('login')}>
              Iniciar sesión
            </a>
            <a className="boton cabecera__registro" href="#registro" aria-current={currentPage === 'registro' ? 'page' : undefined} onClick={handleNavigate('registro')}>
              Registrarse
            </a>
          </>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
