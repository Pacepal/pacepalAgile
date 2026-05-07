import ProductGallery from './ProductGallery.jsx';
import SearchBar from './SearchBar.jsx';

function ShopPage({ products, cart, onNavigate }) {
  return (
    <main>
      <section className="seccion-pagina">
        <div className="contenedor">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <h2 className="mb-0">Productos disponibles</h2>
            <SearchBar query={products.query} onQueryChange={products.setQuery} />
          </div>
          <ProductGallery
            status={products.status}
            message={products.message}
            products={products.pagedItems}
            hasActiveQuery={products.hasActiveQuery}
            query={products.normalizedQuery}
            onAddToCart={cart.addItem}
            onViewProduct={(id) => onNavigate('producto', id)}
            page={products.page}
            totalPages={products.totalPages}
            onPageChange={products.setPage}
          />
        </div>
      </section>
    </main>
  );
}

export default ShopPage;