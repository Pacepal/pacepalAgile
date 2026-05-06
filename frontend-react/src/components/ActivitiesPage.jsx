function ActivitiesPage({ activities, session, onNavigate }) {
  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Actividades</h1>
        <p>Actividades deportivas creadas por la comunidad.</p>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <div className="tienda-toolbar">
            <h2>Actividades disponibles</h2>
            {session.user ? (
              <button type="button" className="boton boton--primario" onClick={() => onNavigate('crear-actividad')}>
                Crear actividad
              </button>
            ) : null}
          </div>
          {activities.status === 'error' ? <p className="mensaje-error">{activities.message}</p> : null}
          <div className="rejilla rejilla--actividades" aria-live="polite">
            {activities.items.map((activity) => (
              <article className="tarjeta tarjeta-actividad" key={activity.id_actividad}>
                <h3><i className="bi bi-geo-alt-fill" aria-hidden="true"></i> {activity.nombre || activity.descripcion || 'Actividad'}</h3>
                <p className="linea">{activity.tipo || 'Actividad'} · nivel {activity.nivel || 'General'}</p>
                <p><i className="bi bi-calendar3" aria-hidden="true"></i> {activity.fecha || 'Sin fecha'}{activity.hora ? ` · ${activity.hora}` : ''}</p>
                <p><i className="bi bi-people-fill" aria-hidden="true"></i> {activity.plazas_max ? `${activity.plazas_max} plazas disponibles` : 'Plazas no disponibles'}</p>
                <button type="button" className="boton boton--primario">Ver actividad</button>
              </article>
            ))}
          </div>
          {activities.items.length === 0 && activities.status === 'ok' ? <p>No hay actividades disponibles.</p> : null}
        </div>
      </section>
    </main>
  );
}

export default ActivitiesPage;
