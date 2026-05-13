import { useEffect, useMemo, useState } from 'react';
import { buildPublicAssetUrl } from '../../js/services/api.js';

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
  const images = product ? [product.imagen1, product.imagen2].filter(Boolean) : [];
  const stock = Number(product?.stock);
  const isOutOfStock = product && Number.isFinite(stock) && stock <= 0;

  useEffect(() => {
    setMessage('');
    setQuantity(1);
  }, [productId]);

  async function handleAdd() {
    if (!product || isOutOfStock) {
      setMessage('Sin stock');
      return;
    }

    const ok = await cart.addItem(product, quantity);
    setMessage(ok ? '¡Añadido al carrito!' : 'No se pudo añadir al carrito.');
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
              <article className="tarjeta-pagina producto-detalle">
                <h2>Producto no encontrado</h2>
                <a href="#tienda" className="boton boton--volver mt-3 d-inline-block" onClick={handleBack}>
                  ← Volver
                </a>
              </article>
            ) : (
              <article className="tarjeta-pagina producto-detalle">

                <h2 className="producto-detalle__titulo">{product.nombre || 'Producto'}</h2>

                <div className="producto-detalle__galeria">
                  {images.map((image, index) => (
                    <div key={image} className="producto-detalle__imagen-card">
                      <img
                        src={buildPublicAssetUrl(image)}
                        alt={`${product.nombre || 'Producto'} — vista ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                <div className="producto-detalle__info">
                  <div className="producto-detalle__descripcion">
                    <h3 className="producto-detalle__subtitulo">Descripción</h3>
                    <p>{product.descripcion || 'Sin descripción'}</p>
                  </div>

                  <div className="producto-detalle__compra">
                    <p className="producto-detalle__precio">{formatPrice(product.precio)}</p>
                    <p className={`producto-detalle__stock${isOutOfStock ? ' producto-detalle__stock--agotado' : ''}`}>
                      {isOutOfStock
                        ? 'Sin stock'
                        : Number.isFinite(stock)
                        ? `${product.stock} unidades disponibles`
                        : 'Stock no disponible'}
                    </p>
                    <div className="producto-detalle__cantidad">
                      <label htmlFor="cantidadProducto">Cantidad:</label>
                      <input
                        type="number"
                        id="cantidadProducto"
                        min="1"
                        max={String(Number(product.stock) > 0 ? product.stock : 1)}
                        value={quantity}
                        disabled={isOutOfStock}
                        onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
                      />
                    </div>
                  </div>
                </div>

                <div className="acciones-pagina">
                  <a href="#tienda" className="boton boton--volver" onClick={handleBack}>
                    ← Volver
                  </a>
                  <button type="button" className="boton boton--primario boton--accion" disabled={isOutOfStock} onClick={handleAdd}>
                    {isOutOfStock ? 'Sin stock' : 'Añadir al carrito'}
                  </button>
                </div>
                <span id="msgCarrito" className="producto-detalle__msg">{message}</span>

              </article>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetailPage;
