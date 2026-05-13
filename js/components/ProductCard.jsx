import { useState } from 'react';
import { buildPublicAssetUrl } from '../services/api.js';

function formatPrice(value) {
  const number = Number(value);
  return Number.isFinite(number) ? `${number.toFixed(2)} EUR` : 'Precio no disponible';
}

function ProductCard({ product, onAddToCart, onViewProduct }) {
  const stock = Number(product.stock);
  const isOutOfStock = Number.isFinite(stock) && stock <= 0;
  const [buttonText, setButtonText] = useState(isOutOfStock ? 'Sin stock' : 'Añadir al carrito');
  const [disabled, setDisabled] = useState(false);
  const image = buildPublicAssetUrl(product.imagen1 || 'img/productos/zapatillaPacepal1.webp');

  async function handleAdd() {
    if (isOutOfStock) {
      return;
    }

    setDisabled(true);
    setButtonText('Añadiendo...');
    const ok = await onAddToCart(product, 1);
    setButtonText(ok ? '¡Añadido!' : 'Error');
    setTimeout(() => {
      setButtonText('Añadir al carrito');
      setDisabled(false);
    }, 1500);
  }

  function handleView(event) {
    event.preventDefault();
    onViewProduct(product.id_articulo);
  }

  return (
    <article className="tarjeta tarjeta-producto">
      <img src={image} alt={product.nombre || 'Producto PacePal'} loading="lazy" />
      <div className="tarjeta-producto__cuerpo">
        <h3>{product.nombre || 'Producto sin nombre'}</h3>
        <p><i className="bi bi-leaf-fill" aria-hidden="true"></i> {formatPrice(product.precio)}</p>
        <p><i className="bi bi-leaf-fill" aria-hidden="true"></i> Producción responsable</p>
        <p className={isOutOfStock ? 'producto-sin-stock' : ''}>{isOutOfStock ? 'Sin stock' : `${product.stock} unidades disponibles`}</p>
        <div className="tarjeta-producto__acciones">
          <button type="button" className="boton boton--primario" disabled={disabled || isOutOfStock} onClick={handleAdd}>
            {buttonText}
          </button>
          <a className="boton boton--primario" href={`#producto-${product.id_articulo || ''}`} onClick={handleView}>
            Ver producto
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
