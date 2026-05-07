import { useMemo } from 'react';
import { buildPublicAssetUrl } from '../services/api.js';

function RouteDetailPage({ routeId, routes, onNavigate }) {
  const route = useMemo(
    () => routes.items.find((item) => Number(item.id_ruta) === Number(routeId)),
    [routeId, routes.items]
  );

  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Detalle de ruta</h1>
        <p>Datos tecnicos de una ruta concreta.</p>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <div id="detalle-ruta" aria-live="polite">
          {!route ? (
            <article className="tarjeta-pagina">
              <h2>Ruta no encontrada</h2>
              <button type="button" className="boton boton--primario" onClick={() => onNavigate('rutas')}>Volver a rutas</button>
            </article>
          ) : (
            <article className="tarjeta-pagina">
              <h2>{route.nombre || 'Ruta'}</h2>
              {route.imagen ? <img src={buildPublicAssetUrl(route.imagen)} alt={route.nombre || 'Ruta'} className="img-fluid rounded mb-3" loading="lazy" /> : null}
              <p>Descripcion: {route.descripcion || 'Sin descripcion'}</p>
              <p>Ubicacion: {route.ubicacion || 'No disponible'}</p>
              <p>Distancia: {route.distancia ? `${route.distancia} km` : 'No disponible'}</p>
              <p>Dificultad: {route.dificultad || 'No disponible'}</p>
              <p>Desnivel: {route.desnivel ? `${route.desnivel} m` : 'No disponible'}</p>
              <p>Duracion: {route.duracion || 'No disponible'}</p>
              <div className="mt-3">
                <button type="button" className="boton boton--primario me-2" onClick={() => onNavigate('crear-actividad', route.id_ruta)}>
                  Crear actividad en esta ruta
                </button>
                <button type="button" className="boton" onClick={() => onNavigate('rutas')}>
                  Volver a rutas
                </button>
              </div>
            </article>
          )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default RouteDetailPage;
