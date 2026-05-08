import { buildPublicAssetUrl } from '../../js/services/api.js';

function ActivitiesPage({ activities, session, onNavigate }) {
  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Actividades</h1>
        <p>Actividades deportivas creadas por la comunidad.</p>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="mb-0">Actividades disponibles</h2>
            <div id="boton-crear-actividad">
              {session.user ? (
                <button type="button" className="boton boton--primario" onClick={() => onNavigate('crear-actividad')}>
                  Crear actividad
                </button>
              ) : null}
            </div>
          </div>
          {activities.isDemo ? (
            <div className="alert alert-warning" role="alert">
              {activities.message || 'API PHP no disponible. Mostrando JSON temporal.'}
            </div>
          ) : null}
          {activities.status === 'error' ? <p className="mensaje-error">{activities.message}</p> : null}
          <div id="lista-actividades" className="rejilla rejilla--actividades" aria-live="polite">
            {activities.items.map((activity) => {
              const image = buildPublicAssetUrl(activity.ruta_imagen || activity.imagen || 'img/rutas/jarosa.webp');
              const title = activity.ruta_nombre || activity.nombre || activity.descripcion || 'Actividad';
              const location = activity.ruta_ubicacion || activity.ubicacion || 'Ubicacion no disponible';

              return (
                <article className="tarjeta tarjeta-actividad" key={activity.id_actividad}>
                  <img className="tarjeta-actividad__imagen" src={image} alt={title} loading="lazy" />
                  <h3><i className="bi bi-geo-alt-fill" aria-hidden="true"></i> {title}</h3>
                  <p className="linea">{location} · nivel {activity.nivel || 'General'}</p>
                  <p><i className="bi bi-calendar3" aria-hidden="true"></i> {activity.fecha || 'Sin fecha'}{activity.hora ? ` · ${activity.hora}` : ''}</p>
                  <p><i className="bi bi-people-fill" aria-hidden="true"></i> {activity.plazas_max ? `${activity.num_participantes || 0} / ${activity.plazas_max} plazas` : 'Plazas no disponibles'}</p>
                  <button type="button" className="boton boton--primario" onClick={() => onNavigate('actividad', activity.id_actividad)}>
                    Ver actividad
                  </button>
                </article>
              );
            })}
          </div>
          {activities.items.length === 0 && activities.status === 'ok' ? <p>No hay actividades disponibles.</p> : null}
        </div>
      </section>
    </main>
  );
}

export default ActivitiesPage;
