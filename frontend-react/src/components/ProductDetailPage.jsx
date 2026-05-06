import { useMemo, useState } from 'react';
import { buildPublicAssetUrl } from '../services/api.js';

function formatPrice(value) {
  const number = Number(value);
  return Number.isFinite(number) ? `${number.toFixed(2)} EUR` : 'No disponible';
}

function ProductDetailPage({ productId, products, cart, onNavigate }) {
  const [quantity, setQuantity] = useState(1);
  const product = useMemo(
    () => products.items.find((item) => Number(item.id_articulo) === Number(productId)),
    [productId, products.items]
  );

  return (
    <main>
      <section className="seccion-pagina">
        <div className="contenedor">
          {!product ? (
            <article className="tarjeta-pagina">
              <h2>Producto no encontrado</h2>
              <button type="button" className="boton boton--primario" onClick={() => onNavigate('tienda')}>
                Volver a la tienda
              </button>
            </article>
          ) : (
            <article className="tarjeta-pagina detalle-pagina">
              <h2>{product.nombre || 'Producto'}</h2>
              <div className="rejilla-pagina detalle-imagenes">
                {product.imagen1 ? <img src={buildPublicAssetUrl(product.imagen1)} alt={product.nombre || 'Producto'} loading="lazy" /> : null}
                {product.imagen2 ? <img src={buildPublicAssetUrl(product.imagen2)} alt={`${product.nombre || 'Producto'} vista 2`} loading="lazy" /> : null}
              </div>
              <p>Descripcion: {product.descripcion || 'Sin descripcion'}</p>
              <p className="fw-bold">Precio: {formatPrice(product.precio)}</p>
              <p>Stock: {Number.isFinite(Number(product.stock)) ? `${product.stock} unidades` : 'No disponible'}</p>
              <div className="detalle-acciones">
                <label htmlFor="cantidadProducto" className="formulario__label">Cantidad:</label>
                <input
                  id="cantidadProducto"
                  className="formulario__input cantidad-corta"
                  type="number"
                  min="1"
                  max={product.stock || 99}
                  value={quantity}
                  onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
                />
                <button type="button" className="boton boton--primario" onClick={() => cart.addItem(product, quantity)}>
                  Anadir al carrito
                </button>
                <button type="button" className="boton" onClick={() => onNavigate('tienda')}>
                  Volver a la tienda
                </button>
              </div>
            </article>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProductDetailPage;
