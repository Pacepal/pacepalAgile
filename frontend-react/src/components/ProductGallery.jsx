import ProductCard from './ProductCard.jsx';

function ProductGallery({ status, message, products, onAddToCart }) {
  return (
    <section id="productos" aria-labelledby="product-gallery-title">
      <h3 id="product-gallery-title" className="visually-hidden">Galeria de productos</h3>
      {status === 'error' ? <p className="mensaje-formulario mensaje-formulario--error">{message}</p> : null}
      <div id="lista-productos" className="rejilla rejilla--productos" aria-live="polite">
        {products.map((product) => (
          <ProductCard key={product.id_articulo} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
      {products.length === 0 && status === 'ok' ? <p>No hay productos disponibles.</p> : null}
    </section>
  );
}

export default ProductGallery;
