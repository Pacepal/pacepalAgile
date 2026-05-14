import { useEffect, useMemo, useState } from 'react';
import { buildPublicAssetUrl, requestJson } from '../../js/services/api.js';

function ActivityDetailPage({ activityId, activities, session, onNavigate }) {
  const fallbackActivity = useMemo(
    () => activities.items.find((item) => Number(item.id_actividad) === Number(activityId)),
    [activityId, activities.items]
  );
  const [activity, setActivity] = useState(fallbackActivity || null);

  useEffect(() => {
    let active = true;

    async function loadDetail() {
      try {
        const payload = await requestJson(`/actividades/${activityId}`);
        if (active && payload.status === 'ok') {
          setActivity(payload.data || null);
        }
      } catch (_error) {
        if (active) {
          setActivity(fallbackActivity || null);
        }
      }
    }

    if (activityId) {
      loadDetail();
    }

    return () => {
      active = false;
    };
  }, [activityId, fallbackActivity]);

  async function updateParticipation(action) {
    try {
      const payload = await requestJson(`/actividades/${activityId}/${action}`, { method: 'POST' });
      if (payload.status === 'ok') {
        // Tras unirse/salir, se vuelve a leer el detalle para refrescar plazas y participantes.
        const nextPayload = await requestJson(`/actividades/${activityId}`);
        setActivity(nextPayload.data || activity);
      } else {
        alert(payload.message || 'No se pudo realizar la acción.');
      }
    } catch (error) {
      alert(error.message || 'Error de conexión.');
    }
  }

  async function deleteActivity() {
    if (!window.confirm('¿Seguro que quieres eliminar esta actividad?')) {
      return;
    }

    try {
      await requestJson(`/actividades/${activityId}`, { method: 'DELETE' });
      onNavigate('actividades');
    } catch (error) {
      alert(error.message || 'No se pudo eliminar.');
    }
  }

  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Detalle de actividad</h1>
        <p>Organiza y revisa toda la información de esta salida en un solo bloque claro.</p>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <div id="detalle-actividad" aria-live="polite">
            {!activity ? (
              'Actividad no encontrada.'
            ) : (
              <article className="tarjeta-pagina actividad-detalle">
                <h2>Actividad #{activity.id_actividad}</h2>
                {activity.ruta_imagen || activity.imagen ? (
                  <img
                    src={buildPublicAssetUrl(activity.ruta_imagen || activity.imagen)}
                    alt={activity.ruta_nombre || activity.nombre || 'Ruta'}
                    className="actividad-detalle__imagen"
                    loading="lazy"
                  />
                ) : null}

                <p className="actividad-detalle__intro">
                  {activity.descripcion || 'Actividad publicada para compartir ruta, ritmo y buen ambiente.'}
                </p>

                <div className="detalle-ficha">
                  <p><span>Ruta</span><strong>{activity.ruta_nombre || activity.nombre || 'No disponible'}</strong></p>
                  <p><span>Ubicación</span><strong>{activity.ruta_ubicacion || activity.ubicacion || 'No disponible'}</strong></p>
                  <p><span>Distancia</span><strong>{activity.ruta_distancia ? `${activity.ruta_distancia} km` : 'No disponible'}</strong></p>
                  <p><span>Dificultad</span><strong>{activity.ruta_dificultad || activity.dificultad || 'No disponible'}</strong></p>
                  <p><span>Organizador</span><strong>{activity.creador_nombre || 'No disponible'}</strong></p>
                  <p><span>Fecha</span><strong>{activity.fecha || 'No disponible'}</strong></p>
                  <p><span>Hora</span><strong>{activity.hora || 'No disponible'}</strong></p>
                  <p><span>Nivel</span><strong>{activity.nivel || 'No disponible'}</strong></p>
                  <p><span>Participantes</span><strong>{activity.plazas_max ? `${activity.num_participantes || 0} / ${activity.plazas_max}` : 'Sin límite'}</strong></p>
                  <p><span>Estado</span><strong>{activity.estado || 'No disponible'}</strong></p>
                </div>

                {Array.isArray(activity.participantes) && activity.participantes.length > 0 ? (
                  <>
                    <h3>Lista de participantes</h3>
                    <ul className="list-unstyled actividad-detalle__participantes">
                      {activity.participantes.map((participant) => (
                        <li key={participant.id_usuario || participant.nombre}>{participant.nombre}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <div className="acciones-pagina">
                  <button type="button" className="boton boton--volver" onClick={() => onNavigate('actividades')}>
                    ← Volver a actividades
                  </button>
                  {activity.usuario_participa ? (
                    <button type="button" className="boton boton--primario boton--accion" onClick={() => updateParticipation('leave')}>
                      Abandonar actividad
                    </button>
                  ) : !activity.es_creador ? (
                    session.user ? (
                      <button type="button" className="boton boton--primario boton--accion" onClick={() => updateParticipation('join')}>
                        Unirse a la actividad
                      </button>
                    ) : (
                      <button type="button" className="boton boton--primario boton--accion" onClick={() => onNavigate('login')}>
                        Iniciar sesión para unirte
                      </button>
                    )
                  ) : null}
                  {activity.es_creador ? (
                    <button type="button" className="boton boton--primario boton--accion" onClick={deleteActivity}>
                      Eliminar actividad y volver a actividades
                    </button>
                  ) : null}
                </div>
              </article>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ActivityDetailPage;
