import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import ProductGallery from './components/ProductGallery.jsx';
import Cart from './components/Cart.jsx';
import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import { DEMO_NOTICE } from './services/api.js';
import { useProducts } from './hooks/useProducts.js';
import { useCart } from './hooks/useCart.js';
import { useSession } from './hooks/useSession.js';

function App() {
  const products = useProducts();
  const cart = useCart();
  const session = useSession();
  const isDemo = products.isDemo || cart.isDemo || session.isDemo;

  return (
    <div className="pagina-interna pagina-tienda app-shell">
      <Header cartCount={cart.count} session={session} />

      <main>
        <section className="seccion-pagina">
          <div className="contenedor">
            {isDemo ? <p className="demo-notice">{DEMO_NOTICE}</p> : null}

            <div className="tienda-toolbar">
              <h2>Productos disponibles</h2>
              <SearchBar query={products.query} onQueryChange={products.setQuery} />
            </div>

            <ProductGallery
              status={products.status}
              message={products.message}
              products={products.filteredItems}
              onAddToCart={cart.addItem}
            />

            <div className="react-sprint-grid">
              <Cart cart={cart} />
              <LoginForm session={session} />
              <RegisterForm onRegister={session.register} sessionMessage={session.message} />
            </div>
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="contenedor pie__legal">
          <span>PacePal</span>
          <span>Cliente React Sprint 3</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
