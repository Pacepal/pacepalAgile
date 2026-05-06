import { useState } from 'react';
import { buildPublicAssetUrl } from '../services/api.js';

function formatPrice(value) {
  const number = Number(value);
  return Number.isFinite(number) ? `${number.toFixed(2)} EUR` : 'Precio no disponible';
}

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const image = buildPublicAssetUrl(product.imagen1 || 'img/productos/zapatillaPacepal1.webp');

  return (
    <article className="product-card">
      <img src={image} alt={product.nombre || 'Producto PacePal'} loading="lazy" />
      <div className="product-card__body">
        <h3>{product.nombre || 'Producto sin nombre'}</h3>
        <p>{product.descripcion || 'Producto del catalogo PacePal.'}</p>
        <strong>{formatPrice(product.precio)}</strong>
        <label className="quantity-field">
          Cantidad
          <input
            type="number"
            min="1"
            max={product.stock || 99}
            value={quantity}
            onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
          />
        </label>
        <button
          type="button"
          className="primary-button"
          onClick={() => onAddToCart(product, quantity)}
        >
          Anadir al carrito
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
