import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import PrivacyNotice from './components/PrivacyNotice.jsx';
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
import ContactPage from './components/ContactPage.jsx';
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
  'contacto',
]);

function readRouteFromHash() {
  const hash = window.location.hash.replace(/^#/, '');

  if (validPages.has(hash)) {
    return { page: hash, id: null };
  }

  for (const page of ['producto', 'ruta', 'actividad']) {
    const prefix = `${page}-`;
    if (hash.startsWith(prefix)) {
      return { page, id: hash.slice(prefix.length) || null };
    }
  }

  if (hash.startsWith('crear-actividad-')) {
    return { page: 'crear-actividad', id: hash.slice('crear-actividad-'.length) || null };
  }

  return { page: 'inicio', id: null };
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

  useEffect(() => {
    if (session.status === 'cargando') {
      return;
    }

    if (session.user && (currentPage === 'login' || currentPage === 'registro')) {
      navigate('perfil');
    }

    if (!session.user && currentPage === 'crear-actividad') {
      navigate('login');
    }
  }, [currentPage, session.status, session.user]);

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
    if (currentPage === 'rutas' || currentPage === 'ruta') return 'pagina-interna pagina-rutas';
    if (currentPage === 'actividades' || currentPage === 'crear-actividad' || currentPage === 'actividad') return 'pagina-interna pagina-actividades';
    if (currentPage === 'perfil') return 'pagina-interna pagina-usuario';
    if (currentPage === 'admin') return 'pagina-interna pagina-admin';
    if (currentPage === 'contacto') return 'pagina-interna pagina-contacto';
    if (currentPage === 'cookies') return 'pagina-interna';
    return 'pagina-interna pagina-tienda';
  }, [currentPage]);

  useEffect(() => {
    document.body.className = bodyClass;

    return () => {
      document.body.className = '';
    };
  }, [bodyClass]);

  return (
    <div className={`${bodyClass} app-shell`}>
      <Header cartCount={cart.count} session={session} currentPage={currentPage} onNavigate={navigate} />

      {currentPage === 'inicio' ? <HomePage session={session} products={products} activities={activities} onNavigate={navigate} /> : null}
      {currentPage === 'actividades' ? <ActivitiesPage activities={activities} session={session} onNavigate={navigate} /> : null}
      {currentPage === 'tienda' ? <ShopPage products={products} cart={cart} onNavigate={navigate} /> : null}
      {currentPage === 'rutas' ? <RoutesPage routes={routes} onNavigate={navigate} /> : null}
      {currentPage === 'about' ? <AboutPage /> : null}
      {currentPage === 'carrito' ? <CartPage cart={cart} onNavigate={navigate} /> : null}
      {currentPage === 'login' ? <LoginPage session={session} onNavigate={navigate} /> : null}
      {currentPage === 'registro' ? <RegisterPage session={session} onNavigate={navigate} /> : null}
      {currentPage === 'perfil' ? <ProfilePage session={session} /> : null}
      {currentPage === 'crear-actividad' ? <CreateActivityPage selectedRouteId={currentId} routes={routes} session={session} onNavigate={navigate} /> : null}
      {currentPage === 'producto' ? <ProductDetailPage productId={currentId} products={products} cart={cart} onNavigate={navigate} /> : null}
      {currentPage === 'ruta' ? <RouteDetailPage routeId={currentId} routes={routes} onNavigate={navigate} /> : null}
      {currentPage === 'actividad' ? <ActivityDetailPage activityId={currentId} activities={activities} session={session} onNavigate={navigate} /> : null}
      {currentPage === 'cookies' ? <CookiesPage /> : null}
      {currentPage === 'admin' ? <AdminPage session={session} products={products} activities={activities} routes={routes} /> : null}
      {currentPage === 'contacto' ? <ContactPage onNavigate={navigate} /> : null}

      <Footer onNavigate={navigate} />
      <PrivacyNotice onNavigate={navigate} />
    </div>
  );
}

export default App;
