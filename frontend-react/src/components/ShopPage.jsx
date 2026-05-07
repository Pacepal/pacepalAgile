import ProductGallery from './ProductGallery.jsx';
import SearchBar from './SearchBar.jsx';
import { buildPublicAssetUrl } from '../services/api.js';

const shopVideoSrc = buildPublicAssetUrl('img/landing/pacepalTienda.mp4');
const shopVideoPoster = buildPublicAssetUrl('img/productos/kitPpAaPAcepal1.webp');

function ShopPage({ products, cart, onNavigate }) {
  return (
    <main>
      <section className="seccion-pagina">
        <div className="contenedor">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <h2 className="mb-0">Productos disponibles</h2>
            <SearchBar query={products.query} onQueryChange={products.setQuery} />
          </div>
          {products.isDemo ? (
            <div className="alert alert-warning" role="alert">
              {products.message || 'API PHP no disponible. Mostrando JSON temporal.'}
            </div>
          ) : null}

          <section className="tarjeta tienda-video" aria-labelledby="tienda-video-titulo">
            <div className="tienda-video__contenido">
              <div className="tienda-video__texto">
                <p className="kicker">Experiencia de compra</p>
                <h3 id="tienda-video-titulo">Equipate para tu proxima ruta</h3>
                <p id="tienda-video-descripcion">
                  En PacePal, la aventura empieza antes de llegar al camino. La usuaria ya tiene la app, la ruta y las
                  ganas de salir, pero todavia le falta ese equipamiento que hace que el plan sea mas comodo, seguro y
                  completo.
                </p>
                <p>
                  El video muestra ese momento de forma cercana: entra en la tienda, encuentra lo que necesita, lo
                  compra y se prepara para salir. Asi, PacePal conecta la inspiracion con la accion: descubrir una
                  ruta, equiparte y dar el paso.
                </p>
              </div>

              <div className="tienda-video__media">
                <video
                  className="tienda-video__player"
                  controls
                  preload="metadata"
                  poster={shopVideoPoster}
                  aria-describedby="tienda-video-descripcion"
                >
                  <source src={shopVideoSrc} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          </section>

          <ProductGallery
            status={products.status}
            message={products.message}
            products={products.pagedItems}
            hasActiveQuery={products.hasActiveQuery}
            query={products.normalizedQuery}
            onAddToCart={cart.addItem}
            onViewProduct={(id) => onNavigate('producto', id)}
            page={products.page}
            totalPages={products.totalPages}
            onPageChange={products.setPage}
          />
        </div>
      </section>
    </main>
  );
}

export default ShopPage;
