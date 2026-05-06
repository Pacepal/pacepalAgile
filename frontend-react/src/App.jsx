import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import ProductGallery from './components/ProductGallery.jsx';
import Cart from './components/Cart.jsx';
import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import { DEMO_NOTICE, apiConfig } from './services/api.js';
import { useProducts } from './hooks/useProducts.js';
import { useCart } from './hooks/useCart.js';
import { useSession } from './hooks/useSession.js';

function App() {
  const products = useProducts();
  const cart = useCart();
  const session = useSession();
  const isDemo = products.isDemo || cart.isDemo || session.isDemo;

  return (
    <div className="app-shell">
      <Header cartCount={cart.count} session={session} />

      <main className="app-shell__content">
        <section className="hero-panel">
          <p className="eyebrow">Sprint 3 Cliente</p>
          <h1>PacePal React / Vite</h1>
          <p className="lead">
            Escaparate virtual migrado a componentes React, conservando la API PHP,
            las sesiones y la base de datos del proyecto.
          </p>
          <div className="status-grid">
            <article className="status-card">
              <h2>Productos</h2>
              <p>Galeria y buscador por nombre o descripcion.</p>
              <span className="status-pill status-pill--ok">{products.items.length} cargados</span>
            </article>
            <article className="status-card">
              <h2>API principal</h2>
              <p>{apiConfig.note}</p>
              <code>{apiConfig.baseUrl}</code>
            </article>
            <article className="status-card">
              <h2>Carrito</h2>
              <p>
                Estado mantenido por sesion PHP y sincronizado desde React.
              </p>
              <span className="status-pill status-pill--ok">{cart.count} items</span>
            </article>
          </div>
          {isDemo ? <p className="demo-notice">{DEMO_NOTICE}</p> : null}
        </section>

        <section className="shop-grid" aria-label="Escaparate React">
          <div className="shop-column">
            <SearchBar query={products.query} onQueryChange={products.setQuery} />
            <ProductGallery
              status={products.status}
              message={products.message}
              products={products.filteredItems}
              onAddToCart={cart.addItem}
            />
          </div>

          <div className="shop-column">
            <Cart cart={cart} />
          </div>
        </section>

        <section className="forms-grid" aria-label="Formularios de usuario">
          <LoginForm session={session} />
          <RegisterForm onRegister={session.register} sessionMessage={session.message} />
        </section>
      </main>
    </div>
  );
}

export default App;
