import { buildPublicAssetUrl } from '../services/api.js';

function formatPrice(value) {
  const number = Number(value);
  return Number.isFinite(number) ? `${number.toFixed(2)} EUR` : '0.00 EUR';
}

function CartItem({ item, onUpdate, onRemove }) {
  return (
    <article className="cart-item">
      <img src={buildPublicAssetUrl(item.imagen1 || 'img/productos/zapatillaPacepal1.webp')} alt={item.nombre || 'Producto'} />
      <div>
        <h3>{item.nombre || 'Producto'}</h3>
        <p>{formatPrice(item.precio_unitario)} x {item.cantidad}</p>
      </div>
      <input
        className="quantity-input"
        type="number"
        min="1"
        value={item.cantidad}
        onChange={(event) => onUpdate(item.id_articulo, Math.max(1, Number(event.target.value) || 1))}
        aria-label={`Cantidad de ${item.nombre}`}
      />
      <strong>{formatPrice(item.subtotal)}</strong>
      <button type="button" className="boton" onClick={() => onRemove(item.id_articulo)}>
        Eliminar
      </button>
    </article>
  );
}

export default CartItem;
