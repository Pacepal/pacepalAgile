import ProductCard from './ProductCard.jsx';

function ProductGallery({ status, message, products, onAddToCart, onViewProduct, hasActiveQuery, query, page, totalPages, onPageChange }) {
  const emptyMessage = hasActiveQuery
    ? `No se encontraron productos para "${query}".`
    : 'No hay productos disponibles.';
  const isLoading = status === 'cargando';
  const isError = status === 'error';
  const hasProducts = status === 'ok' && products.length > 0;
  const isEmpty = status === 'ok' && products.length === 0;

  return (
    <section id="productos" aria-labelledby="product-gallery-title">
      <h3 id="product-gallery-title" className="visually-hidden">Galeria de productos</h3>
      {isLoading ? <p aria-live="polite">{message || 'Cargando productos.'}</p> : null}
      {isError ? <p className="mensaje-formulario mensaje-formulario--error">{message}</p> : null}
      {hasProducts ? (
        <div id="lista-productos" className="rejilla rejilla--productos" aria-live="polite">
          {products.map((product) => (
            <ProductCard
              key={product.id_articulo}
              product={product}
              onAddToCart={onAddToCart}
              onViewProduct={onViewProduct}
            />
          ))}
        </div>
      ) : null}
      {isEmpty ? <p className={hasActiveQuery ? 'tienda-sin-resultados' : 'tienda-vacia'}>{emptyMessage}</p> : null}
      {hasProducts && totalPages > 1 ? (
        <nav className="paginacion" aria-label="Paginación de productos">
          <button
            className="paginacion__btn"
            onClick={() => onPageChange(page - 1)}
            disabled={page <= 1}
            aria-label="Página anterior"
          >
            &#8592; Anterior
          </button>
          <span className="paginacion__info">Página {page} de {totalPages}</span>
          <button
            className="paginacion__btn"
            onClick={() => onPageChange(page + 1)}
            disabled={page >= totalPages}
            aria-label="Página siguiente"
          >
            Siguiente &#8594;
          </button>
        </nav>
      ) : null}
    </section>
  );
}

export default ProductGallery;
