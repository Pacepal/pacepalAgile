import { buildPublicAssetUrl } from '../services/api.js';

const pacepalLogo = buildPublicAssetUrl('img/logo/logo.webp');
const treecoreLogo = buildPublicAssetUrl('img/logo/logotipoTrecore.webp');

function Footer({ onNavigate }) {
  function handleNavigate(page) {
    return (event) => {
      event.preventDefault();
      onNavigate(page);
    };
  }

  function openCookiePreferences() {
    window.dispatchEvent(new CustomEvent('pacepal:open-cookie-preferences'));
  }

  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="row row-cols-1 row-cols-md-4 g-4 pie__rejilla">
          <section className="col pie__col">
            <h3 className="logo pie__logo">
              <img src={pacepalLogo} alt="Logo PacePal" className="logo__img" />
              <span className="logo__texto">PacePal</span>
            </h3>
            <p>Conectando personas para actividades deportivas.</p>
          </section>

          <section className="col pie__col">
            <h4>Explora</h4>
            <a href="#actividades" onClick={handleNavigate('actividades')}>Actividades</a>
            <a href="#rutas" onClick={handleNavigate('rutas')}>Rutas</a>
            <a href="#about" onClick={handleNavigate('about')}>Sobre nosotros</a>
          </section>

          <section className="col pie__col">
            <h4>Tienda</h4>
            <a href="#tienda" onClick={handleNavigate('tienda')}>Productos</a>
            <a href="#contacto" onClick={handleNavigate('contacto')}>Contacto</a>
            <a href="#registro" onClick={handleNavigate('registro')}>Crear cuenta</a>
          </section>

          <section className="col pie__col">
            <h4>Legal</h4>
            <a href="#cookies" onClick={handleNavigate('cookies')}>Política de cookies</a>
            <button type="button" className="pie__btn-cookies" id="btnConfigurarCookies" onClick={openCookiePreferences}>
              Configurar cookies
            </button>
          </section>
        </div>

        <div className="pie__inferior">
          <p>© 2026 PacePal. Todos los derechos reservados.</p>
          <a
            className="credito-treecore"
            href="https://treecorestudio.es/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Web de Treecore Studio"
          >
            Creado por el equipo de Treecore Studio
            <img src={treecoreLogo} alt="Logo Treecore Studio" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
