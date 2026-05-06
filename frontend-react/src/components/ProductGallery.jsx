import ProductCard from './ProductCard.jsx';

function ProductGallery({ status, message, products, onAddToCart }) {
  return (
    <section className="panel-card" aria-labelledby="product-gallery-title">
      <div className="panel-card__header">
        <h2 id="product-gallery-title">Galeria de productos</h2>
        <span className={`status-pill status-pill--${status === 'error' ? 'error' : 'ok'}`}>
          {status}
        </span>
      </div>
      <p>{message}</p>
      <div className="card-grid">
        {products.map((product) => (
          <ProductCard key={product.id_articulo} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
      {products.length === 0 && status === 'ok' ? <p>No hay resultados para la busqueda.</p> : null}
    </section>
  );
}

export default ProductGallery;
