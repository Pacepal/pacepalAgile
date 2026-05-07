import { useEffect, useMemo, useState } from 'react';
import { buildPublicAssetUrl, requestJson } from '../services/api.js';

function ActivityDetailPage({ activityId, activities, onNavigate }) {
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
        const nextPayload = await requestJson(`/actividades/${activityId}`);
        setActivity(nextPayload.data || activity);
      } else {
        alert(payload.message || 'No se pudo realizar la accion.');
      }
    } catch (error) {
      alert(error.message || 'Error de conexion.');
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
        <p>Vista completa de una actividad publicada.</p>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <div id="detalle-actividad" aria-live="polite">
            {!activity ? (
              'Actividad no encontrada.'
            ) : (
              <article className="tarjeta-pagina">
                <h2>Actividad #{activity.id_actividad}</h2>
                {activity.ruta_imagen || activity.imagen ? (
                  <img
                    src={buildPublicAssetUrl(activity.ruta_imagen || activity.imagen)}
                    alt={activity.ruta_nombre || activity.nombre || 'Ruta'}
                    className="img-fluid rounded mb-3"
                    loading="lazy"
                  />
                ) : null}
                <p>Ruta: {activity.ruta_nombre || activity.nombre || 'No disponible'}</p>
                <p>Ubicacion: {activity.ruta_ubicacion || activity.ubicacion || 'No disponible'}</p>
                <p>Distancia: {activity.ruta_distancia ? `${activity.ruta_distancia} km` : 'No disponible'}</p>
                <p>Dificultad ruta: {activity.ruta_dificultad || activity.dificultad || 'No disponible'}</p>
                <p>Organizador: {activity.creador_nombre || 'No disponible'}</p>
                <p>Fecha: {activity.fecha || 'No disponible'}</p>
                <p>Hora: {activity.hora || 'No disponible'}</p>
                <p>Nivel: {activity.nivel || 'No disponible'}</p>
                <p>Participantes: {activity.plazas_max ? `${activity.num_participantes || 0} / ${activity.plazas_max}` : 'Sin limite'}</p>
                <p>Estado: {activity.estado || 'No disponible'}</p>
                <p>Descripcion: {activity.descripcion || 'Sin descripcion'}</p>

                {Array.isArray(activity.participantes) && activity.participantes.length > 0 ? (
                  <>
                    <h3>Lista de participantes</h3>
                    <ul className="list-unstyled">
                      {activity.participantes.map((participant) => (
                        <li key={participant.id_usuario || participant.nombre}>{participant.nombre}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <div className="mt-3">
                  {activity.usuario_participa ? (
                    <button type="button" className="boton boton--primario me-2" onClick={() => updateParticipation('leave')}>
                      Abandonar actividad
                    </button>
                  ) : !activity.es_creador ? (
                    <button type="button" className="boton boton--primario me-2" onClick={() => updateParticipation('join')}>
                      Unirse a la actividad
                    </button>
                  ) : null}
                  {activity.es_creador ? (
                    <button type="button" className="boton me-2" onClick={deleteActivity}>
                      Eliminar actividad
                    </button>
                  ) : null}
                  <button type="button" className="boton" onClick={() => onNavigate('actividades')}>
                    Volver a actividades
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

export default ActivityDetailPage;
