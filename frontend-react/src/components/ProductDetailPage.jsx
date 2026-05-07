import { useMemo, useState } from 'react';
import { buildPublicAssetUrl } from '../services/api.js';

function formatPrice(value) {
  const number = Number(value);
  return Number.isFinite(number) ? `${number.toFixed(2)} EUR` : 'No disponible';
}

function ProductDetailPage({ productId, products, cart, onNavigate }) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const product = useMemo(
    () => products.items.find((item) => Number(item.id_articulo) === Number(productId)),
    [productId, products.items]
  );

  async function handleAdd() {
    const ok = await cart.addItem(product, quantity);
    setMessage(ok ? 'Anadido al carrito.' : '');
  }

  function handleBack(event) {
    event.preventDefault();
    onNavigate('tienda');
  }

  return (
    <main>
      <section className="seccion-pagina">
        <div className="contenedor">
          <div id="detalle-producto" aria-live="polite">
            {!product ? (
              <article className="tarjeta-pagina">
                <h2>Producto no encontrado</h2>
                <a href="#tienda" className="boton mt-3 d-inline-block" onClick={handleBack}>
                  Volver a la tienda
                </a>
              </article>
            ) : (
              <article className="tarjeta-pagina">
                <h2>{product.nombre || 'Producto'}</h2>
                <div className="rejilla-pagina mb-3">
                  {product.imagen1 ? <img src={buildPublicAssetUrl(product.imagen1)} alt={product.nombre || 'Producto'} className="img-fluid rounded" loading="lazy" /> : null}
                  {product.imagen2 ? <img src={buildPublicAssetUrl(product.imagen2)} alt={`${product.nombre || 'Producto'} vista 2`} className="img-fluid rounded" loading="lazy" /> : null}
                </div>
                <p>Descripcion: {product.descripcion || 'Sin descripcion'}</p>
                <p className="fw-bold">Precio: {formatPrice(product.precio)}</p>
                <p>Stock: {Number.isFinite(Number(product.stock)) ? `${product.stock} unidades` : 'No disponible'}</p>

                <div className="mt-3">
                  <label htmlFor="cantidadProducto" className="form-label me-2">Cantidad:</label>
                  <input
                    type="number"
                    id="cantidadProducto"
                    className="form-control d-inline-block me-2"
                    style={{ width: '80px' }}
                    min="1"
                    max={String(Number(product.stock) > 0 ? product.stock : 1)}
                    value={quantity}
                    onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
                  />
                  <button type="button" className="boton boton--primario me-2" onClick={handleAdd}>
                    Anadir al carrito
                  </button>
                  <span id="msgCarrito" className="ms-2">{message || cart.message}</span>
                </div>

                <a href="#tienda" className="boton mt-3 d-inline-block" onClick={handleBack}>
                  Volver a la tienda
                </a>
              </article>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetailPage;
