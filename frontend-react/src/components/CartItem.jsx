import { buildPublicAssetUrl } from '../services/api.js';

function formatPrice(value) {
  const number = Number(value);
  return Number.isFinite(number) ? `${number.toFixed(2)} EUR` : '0.00 EUR';
}

function CartItem({ item, onUpdate, onRemove }) {
  return (
    <div className="d-flex align-items-center justify-content-between border-bottom py-3 flex-wrap gap-2">
      <div className="d-flex align-items-center gap-3">
        <img
          src={buildPublicAssetUrl(item.imagen1 || 'img/productos/zapatillaPacepal1.webp')}
          alt={item.nombre || 'Producto'}
          className="rounded"
          style={{ width: '70px', height: '70px', objectFit: 'cover' }}
        />
        <div>
          <strong>{item.nombre || 'Producto'}</strong>
          <p className="mb-0 text-muted">{formatPrice(item.precio_unitario)} x {item.cantidad}</p>
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        <input
          type="number"
          min="1"
          max="99"
          value={item.cantidad}
          className="form-control"
          style={{ width: '70px' }}
          onChange={(event) => onUpdate(item.id_articulo, Math.max(1, Number(event.target.value) || 1))}
          aria-label={`Cantidad de ${item.nombre || 'Producto'}`}
        />
        <button type="button" className="btn btn-outline-danger btn-sm" title="Eliminar del carrito" onClick={() => onRemove(item.id_articulo)}>
          <i className="bi bi-trash" aria-hidden="true"></i>
        </button>
        <span className="fw-bold" style={{ minWidth: '80px', textAlign: 'right' }}>
          {formatPrice(item.subtotal)}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
