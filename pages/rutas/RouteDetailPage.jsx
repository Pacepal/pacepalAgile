import { useMemo } from 'react';
import { buildPublicAssetUrl } from '../../js/services/api.js';

function RouteDetailPage({ routeId, routes, onNavigate }) {
  const route = useMemo(
    () => routes.items.find((item) => Number(item.id_ruta) === Number(routeId)),
    [routeId, routes.items]
  );

  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Detalle de ruta</h1>
        <p>Conoce de un vistazo todos los datos clave de esta ruta.</p>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <div id="detalle-ruta" aria-live="polite">
            {!route ? (
              <article className="tarjeta-pagina">
                <h2>Ruta no encontrada</h2>
                <button type="button" className="boton boton--volver" onClick={() => onNavigate('rutas')}>← Volver</button>
              </article>
            ) : (
              <article className="tarjeta-pagina ruta-detalle">
                <h2>{route.nombre || 'Ruta'}</h2>
                {route.imagen ? <img src={buildPublicAssetUrl(route.imagen)} alt={route.nombre || 'Ruta'} className="ruta-detalle__imagen" loading="lazy" /> : null}

                <p className="ruta-detalle__intro">
                  {route.descripcion || 'Ruta lista para salir a moverte con seguridad y buen ritmo.'}
                </p>

                <div className="detalle-ficha">
                  <p><span>Ubicación</span><strong>{route.ubicacion || 'No disponible'}</strong></p>
                  <p><span>Distancia</span><strong>{route.distancia ? `${route.distancia} km` : 'No disponible'}</strong></p>
                  <p><span>Dificultad</span><strong>{route.dificultad || 'No disponible'}</strong></p>
                  <p><span>Desnivel</span><strong>{route.desnivel ? `${route.desnivel} m` : 'No disponible'}</strong></p>
                  <p><span>Duración</span><strong>{route.duracion || 'No disponible'}</strong></p>
                </div>

                <div className="acciones-pagina">
                  <button type="button" className="boton boton--volver" onClick={() => onNavigate('rutas')}>
                    ← Volver
                  </button>
                  <button type="button" className="boton boton--primario boton--accion" onClick={() => onNavigate('crear-actividad', route.id_ruta)}>
                    Crear actividad en esta ruta
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
