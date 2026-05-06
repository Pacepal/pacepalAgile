function Header({ cartCount, session }) {
  return (
    <header className="cabecera app-header">
      <div className="contenedor cabecera__fila">
        <a className="logo navbar-brand" href="#top" aria-label="PacePal">
          <span className="logo__circulo">P</span>
          <span className="logo__texto">PacePal</span>
        </a>

        <nav className="menu-react" aria-label="Navegacion principal">
          <a href="#productos" aria-current="page">Tienda</a>
          <a href="#carrito">Carrito</a>
          <a href="#registro">Registro</a>
        </nav>

        <div className="cabecera__acciones" aria-label="Estado del proyecto React">
          <span className="boton cabecera__carrito">Carrito <span className="contador-react">{cartCount}</span></span>
        {session.user ? (
          <button type="button" className="boton cabecera__registro" onClick={session.logout}>
            Logout
          </button>
        ) : (
          <a className="boton boton--primario cabecera__login" href="#login">Login</a>
        )}
        </div>
      </div>
    </header>
  );
}

export default Header;
