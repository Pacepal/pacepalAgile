import { useMemo, useState } from 'react';
import { buildPublicAssetUrl, requestJson } from '../services/api.js';

function ActivityDetailPage({ activityId, activities, session, onNavigate }) {
  const [message, setMessage] = useState('');
  const activity = useMemo(
    () => activities.items.find((item) => Number(item.id_actividad) === Number(activityId)),
    [activityId, activities.items]
  );

  async function updateParticipation(action) {
    if (!session.user || activities.isDemo) {
      setMessage('Accede con una cuenta activa para gestionar tu participacion.');
      return;
    }

    try {
      await requestJson(`/actividades/${activityId}/${action}`, { method: 'POST' });
      setMessage(action === 'join' ? 'Te has unido a la actividad.' : 'Has abandonado la actividad.');
      activities.reload();
    } catch (error) {
      setMessage(error.message || 'No se pudo actualizar la participacion.');
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
          {!activity ? (
            <article className="tarjeta-pagina">
              <h2>Actividad no encontrada</h2>
              <button type="button" className="boton boton--primario" onClick={() => onNavigate('actividades')}>
                Volver a actividades
              </button>
            </article>
          ) : (
            <article className="tarjeta-pagina detalle-pagina">
              <h2>Actividad #{activity.id_actividad}</h2>
              {activity.ruta_imagen || activity.imagen ? (
                <img src={buildPublicAssetUrl(activity.ruta_imagen || activity.imagen)} alt={activity.ruta_nombre || activity.nombre || 'Ruta'} loading="lazy" />
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
              <div className="detalle-acciones">
                <button type="button" className="boton boton--primario" onClick={() => updateParticipation('join')}>
                  Unirse a la actividad
                </button>
                <button type="button" className="boton" onClick={() => updateParticipation('leave')}>
                  Abandonar actividad
                </button>
                <button type="button" className="boton" onClick={() => onNavigate('actividades')}>
                  Volver a actividades
                </button>
              </div>
              {message ? <p className="mensaje-resultado">{message}</p> : null}
            </article>
          )}
        </div>
      </section>
    </main>
  );
}

export default ActivityDetailPage;
