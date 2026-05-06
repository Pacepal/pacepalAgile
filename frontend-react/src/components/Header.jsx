import { buildPublicAssetUrl } from '../services/api.js';

const navItems = [
  { page: 'inicio', label: 'Inicio' },
  { page: 'actividades', label: 'Actividades' },
  { page: 'tienda', label: 'Tienda' },
  { page: 'rutas', label: 'Rutas' },
  { page: 'about', label: 'Sobre nosotros' },
];

function Header({ cartCount, session, currentPage, onNavigate }) {
  function handleNavigate(page) {
    return (event) => {
      event.preventDefault();
      onNavigate(page);
    };
  }

  return (
    <header className="cabecera">
      <div className="contenedor cabecera__fila">
        <a className="logo navbar-brand" href="#inicio" aria-label="Ir al inicio de PacePal" onClick={handleNavigate('inicio')}>
          <img src={buildPublicAssetUrl('img/logo/logo.webp')} alt="Logo PacePal" className="logo__img" />
          <span className="logo__texto">PacePal</span>
        </a>

        <nav className="menu menu-react" id="menuPrincipal" aria-label="Menu principal">
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
        </nav>

        <div className="cabecera__acciones">
          <a className="boton cabecera__carrito" href="#carrito" onClick={handleNavigate('carrito')}>
            <i className="bi bi-cart3" aria-hidden="true"></i>
            Carrito
            {cartCount > 0 ? <span className="contador-react">{cartCount}</span> : null}
          </a>
          {session.user ? (
            <>
              <a className="boton boton--primario cabecera__login" href="#perfil" onClick={handleNavigate('perfil')}>
                Perfil
              </a>
              <button type="button" className="boton cabecera__registro" onClick={session.logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <a className="boton boton--primario cabecera__login" href="#login" onClick={handleNavigate('login')}>
                Login
              </a>
              <a className="boton cabecera__registro" href="#registro" onClick={handleNavigate('registro')}>
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
