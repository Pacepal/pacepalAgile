import { buildPublicAssetUrl } from '../../js/services/api.js';

function RoutesPage({ routes, onNavigate }) {
  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Rutas</h1>
        <p>Listado de rutas disponibles para actividades deportivas.</p>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <h2>Rutas disponibles</h2>
          {routes.isDemo ? (
            <div className="alert alert-warning" role="alert">
              {routes.message || 'API PHP no disponible. Mostrando JSON temporal.'}
            </div>
          ) : null}
          {routes.status === 'error' ? <p className="mensaje-error">{routes.message}</p> : null}
          <div id="lista-rutas" className="rejilla rejilla--productos" aria-live="polite">
            {routes.items.map((route) => (
              <article className="tarjeta tarjeta-producto" key={route.id_ruta}>
                <img src={buildPublicAssetUrl(route.imagen || 'img/rutas/jarosa.webp')} alt={route.nombre || 'Ruta PacePal'} loading="lazy" />
                <div className="tarjeta-producto__cuerpo">
                  <h3>{route.nombre || 'Ruta sin nombre'}</h3>
                  <p><i className="bi bi-geo-alt-fill" aria-hidden="true"></i> {route.ubicacion || 'No disponible'}</p>
                  <p><i className="bi bi-signpost-2-fill" aria-hidden="true"></i> {route.distancia ? `${route.distancia} km` : 'No disponible'}</p>
                  <button type="button" className="boton boton--primario" onClick={() => onNavigate('ruta', route.id_ruta)}>
                    Ver detalle
                  </button>
                </div>
              </article>
            ))}
          </div>
          {routes.items.length === 0 && routes.status === 'ok' ? <p>No hay rutas disponibles.</p> : null}
        </div>
      </section>
    </main>
  );
}

export default RoutesPage;
