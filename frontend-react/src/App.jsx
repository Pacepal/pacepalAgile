import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import ActivitiesPage from './components/ActivitiesPage.jsx';
import RoutesPage from './components/RoutesPage.jsx';
import ShopPage from './components/ShopPage.jsx';
import CartPage from './components/CartPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import { LoginPage, RegisterPage } from './components/AuthPages.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import CreateActivityPage from './components/CreateActivityPage.jsx';
import ProductDetailPage from './components/ProductDetailPage.jsx';
import RouteDetailPage from './components/RouteDetailPage.jsx';
import ActivityDetailPage from './components/ActivityDetailPage.jsx';
import CookiesPage from './components/CookiesPage.jsx';
import AdminPage from './components/AdminPage.jsx';
import { buildPublicAssetUrl } from './services/api.js';
import { useProducts } from './hooks/useProducts.js';
import { useCart } from './hooks/useCart.js';
import { useSession } from './hooks/useSession.js';
import { useRoutes } from './hooks/useRoutes.js';
import { useActivities } from './hooks/useActivities.js';

const validPages = new Set([
  'inicio',
  'actividades',
  'tienda',
  'rutas',
  'about',
  'carrito',
  'login',
  'registro',
  'perfil',
  'crear-actividad',
  'producto',
  'ruta',
  'actividad',
  'cookies',
  'admin',
]);

function readRouteFromHash() {
  const hash = window.location.hash.replace(/^#/, '');
  const [page, id] = hash.split('-');
  return {
    page: validPages.has(page) ? page : 'inicio',
    id: id || null,
  };
}

function App() {
  const products = useProducts();
  const cart = useCart();
  const session = useSession();
  const routes = useRoutes();
  const activities = useActivities();
  const [route, setRoute] = useState(readRouteFromHash);
  const currentPage = route.page;
  const currentId = route.id;

  useEffect(() => {
    function handleHashChange() {
      setRoute(readRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  function navigate(page, id = null) {
    const nextPage = validPages.has(page) ? page : 'inicio';
    const nextHash = id ? `#${nextPage}-${id}` : `#${nextPage}`;

    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      setRoute({ page: nextPage, id: id ? String(id) : null });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const bodyClass = useMemo(() => {
    if (currentPage === 'inicio') return 'pagina';
    if (currentPage === 'login' || currentPage === 'registro') return 'pagina-formulario';
    if (currentPage === 'about') return 'pagina pagina-about';
    if (currentPage === 'rutas') return 'pagina-interna pagina-rutas';
    if (currentPage === 'actividades' || currentPage === 'crear-actividad') return 'pagina-interna pagina-actividades';
    if (currentPage === 'perfil') return 'pagina-interna pagina-usuario';
    if (currentPage === 'admin') return 'pagina-interna pagina-admin';
    return 'pagina-interna pagina-tienda';
  }, [currentPage]);

  return (
    <div className={`${bodyClass} app-shell`}>
      <Header cartCount={cart.count} session={session} currentPage={currentPage} onNavigate={navigate} />

      {currentPage === 'inicio' ? <HomePage onNavigate={navigate} /> : null}
      {currentPage === 'actividades' ? <ActivitiesPage activities={activities} session={session} onNavigate={navigate} /> : null}
      {currentPage === 'tienda' ? <ShopPage products={products} cart={cart} onNavigate={navigate} /> : null}
      {currentPage === 'rutas' ? <RoutesPage routes={routes} onNavigate={navigate} /> : null}
      {currentPage === 'about' ? <AboutPage /> : null}
      {currentPage === 'carrito' ? <CartPage cart={cart} onNavigate={navigate} /> : null}
      {currentPage === 'login' ? <LoginPage session={session} onNavigate={navigate} /> : null}
      {currentPage === 'registro' ? <RegisterPage session={session} onNavigate={navigate} /> : null}
      {currentPage === 'perfil' ? <ProfilePage session={session} /> : null}
      {currentPage === 'crear-actividad' ? <CreateActivityPage routes={routes} session={session} onNavigate={navigate} /> : null}
      {currentPage === 'producto' ? <ProductDetailPage productId={currentId} products={products} cart={cart} onNavigate={navigate} /> : null}
      {currentPage === 'ruta' ? <RouteDetailPage routeId={currentId} routes={routes} onNavigate={navigate} /> : null}
      {currentPage === 'actividad' ? <ActivityDetailPage activityId={currentId} activities={activities} session={session} onNavigate={navigate} /> : null}
      {currentPage === 'cookies' ? <CookiesPage /> : null}
      {currentPage === 'admin' ? <AdminPage session={session} activities={activities} routes={routes} /> : null}

      <footer className="pie">
        <div className="contenedor">
          <div className="pie__rejilla">
            <section className="pie__col">
              <h3 className="logo pie__logo">
                <img src={buildPublicAssetUrl('img/logo/logo.webp')} alt="Logo PacePal" className="logo__img" />
                <span className="logo__texto">PacePal</span>
              </h3>
              <p>Conectando personas para actividades deportivas.</p>
            </section>
            <section className="pie__col">
              <h4>Explora</h4>
              <button type="button" onClick={() => navigate('actividades')}>Actividades</button>
              <button type="button" onClick={() => navigate('rutas')}>Rutas</button>
              <button type="button" onClick={() => navigate('about')}>Sobre nosotros</button>
            </section>
            <section className="pie__col">
              <h4>Tienda</h4>
              <button type="button" onClick={() => navigate('tienda')}>Productos</button>
              <button type="button" onClick={() => navigate('registro')}>Crear cuenta</button>
            </section>
            <section className="pie__col">
              <h4>Legal</h4>
              <button type="button" onClick={() => navigate('cookies')}>Politica de cookies</button>
            </section>
          </div>
          <div className="pie__inferior">
            <p>© 2026 PacePal. Todos los derechos reservados.</p>
            <span className="credito-treecore">
              Creado por el equipo de Treecore Studio
              <img src={buildPublicAssetUrl('img/logo/logotipoTrecore.webp')} alt="Logo Treecore Studio" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
