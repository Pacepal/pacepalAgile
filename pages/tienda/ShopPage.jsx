import ProductGallery from '../../js/components/ProductGallery.jsx';
import SearchBar from '../../js/components/SearchBar.jsx';
import { buildPublicAssetUrl } from '../../js/services/api.js';

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
                  Encuentra en PacePal el material que necesitas para salir con mas comodidad, seguridad y confianza.
                </p>
                <p>
                  Desde accesorios basicos hasta productos pensados para actividades al aire libre, nuestra tienda te
                  ayuda a preparar cada plan sin complicarte. Elige lo que necesitas, anadelo a tu seleccion y tenlo
                  todo listo antes de empezar tu proxima aventura.
                </p>
                <p>Descubre, preparate y sal a moverte.</p>
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
