function Header({ cartCount, session }) {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">PacePal</p>
        <h1 className="app-header__title">Cliente React Sprint 3</h1>
      </div>
      <div className="app-header__badges" aria-label="Estado del proyecto React">
        <span className="status-pill status-pill--ok">React</span>
        <span className="status-pill status-pill--ok">Carrito: {cartCount}</span>
        {session.user ? (
          <button type="button" className="header-button" onClick={session.logout}>
            Cerrar sesion
          </button>
        ) : (
          <span className="status-pill status-pill--pending">Sin sesion</span>
        )}
      </div>
    </header>
  );
}

export default Header;
