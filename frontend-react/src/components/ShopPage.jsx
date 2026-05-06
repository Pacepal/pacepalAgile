import ProductGallery from './ProductGallery.jsx';
import SearchBar from './SearchBar.jsx';

function ShopPage({ products, cart }) {
  return (
    <main>
      <section className="seccion-pagina">
        <div className="contenedor">
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
        </div>
      </section>
    </main>
  );
}

export default ShopPage;
