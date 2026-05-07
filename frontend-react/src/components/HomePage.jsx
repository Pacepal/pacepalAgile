import { buildPublicAssetUrl } from '../services/api.js';

function HomePage({ session, products, activities, onNavigate }) {
  const featuredActivities = activities.items.slice(0, 3);
  const featuredProducts = products.items.slice(0, 6);

  function handleNavigate(page) {
    return (event) => {
      event.preventDefault();
      onNavigate(page);
    };
  }

  function handleActivitiesScroll(event) {
    event.preventDefault();
    document.getElementById('actividades')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <section className="hero">
        <div className="hero__fondo"></div>
        <div className="hero__contenido contenedor">
          <h1>Muévete mejor acompañado</h1>
          <p>
            Actividades organizadas por nivel y ritmo para empezar, retomar o
            mantener una rutina activa junto a otras personas.
          </p>
          <a href="#actividades" id="botonActividades" className="boton boton--primario" onClick={handleActivitiesScroll}>
            Ver actividades
          </a>
          <small>Rutas reales · Actividades por nivel · Comunidad segura</small>
        </div>
      </section>

      <main>
      <section className="seccion" id="actividades">
        <div className="contenedor">
          <h2>Actividades que mueve la comunidad</h2>
          <p className="subtitulo">Descubre dónde se están organizando más quedadas esta semana.</p>
          <div className="chips" aria-label="Filtros de actividades">
            <span className="chip">Running</span>
            <span className="chip">Walking</span>
            <span className="chip">Principiante</span>
            <span className="chip">After-work</span>
            <span className="chip">Fin de semana</span>
          </div>
          {activities.isDemo ? (
            <div className="alert alert-warning" role="alert">
              {activities.message || 'API PHP no disponible. Mostrando JSON temporal.'}
            </div>
          ) : null}
          {activities.status === 'error' ? <p className="mensaje-error">{activities.message}</p> : null}
          <div className="rejilla rejilla--actividades">
            {featuredActivities.map((activity) => {
              const title = activity.ruta_nombre || activity.nombre || activity.descripcion || 'Actividad';
              const location = activity.ruta_ubicacion || activity.ubicacion || 'Ubicacion no disponible';

              return (
                <article className="tarjeta tarjeta-actividad" key={activity.id_actividad}>
                  <h3><i className="bi bi-geo-alt-fill" aria-hidden="true"></i> {title}</h3>
                  <p className="linea">{location} · nivel {activity.nivel || 'General'}</p>
                  <p><i className="bi bi-calendar3" aria-hidden="true"></i> {activity.fecha || 'Sin fecha'}{activity.hora ? ` · ${activity.hora}` : ''}</p>
                  <p><i className="bi bi-people-fill" aria-hidden="true"></i> {activity.plazas_max ? `${activity.num_participantes || 0} / ${activity.plazas_max} plazas` : 'Plazas no disponibles'}</p>
                  <a href="#actividades-page" className="boton boton--primario" onClick={handleNavigate('actividades')}>
                    Ver actividad
                  </a>
                </article>
              );
            })}
          </div>
          {activities.status === 'ok' && featuredActivities.length === 0 ? <p>No hay actividades disponibles.</p> : null}
        </div>
      </section>

      <section className="seccion seccion--suave">
        <div className="contenedor">
          <h2>Tienda sostenible</h2>
          <p className="subtitulo">Equipamiento deportivo fabricado con materiales reciclados.</p>
          {products.isDemo ? (
            <div className="alert alert-warning" role="alert">
              {products.message || 'API PHP no disponible. Mostrando JSON temporal.'}
            </div>
          ) : null}
          {products.status === 'error' ? <p className="mensaje-error">{products.message}</p> : null}
          <div className="rejilla rejilla--productos">
            {featuredProducts.map((product) => (
              <article className="tarjeta tarjeta-producto" key={product.id_articulo}>
                <img src={buildPublicAssetUrl(product.imagen1 || 'img/productos/zapatillaPacepal1.webp')} alt={product.nombre || 'Producto PacePal'} loading="lazy" />
                <div className="tarjeta-producto__cuerpo">
                  <h3>{product.nombre || 'Producto PacePal'}</h3>
                  <p><i className="bi bi-leaf-fill" aria-hidden="true"></i> {product.precio ? `${Number(product.precio).toFixed(2)} EUR` : 'Precio no disponible'}</p>
                  <p><i className="bi bi-leaf-fill" aria-hidden="true"></i> Producción responsable</p>
                  <a href="#tienda" className="boton boton--primario" onClick={handleNavigate('tienda')}>
                    Ver producto
                  </a>
                </div>
              </article>
            ))}
          </div>
          {products.status === 'ok' && featuredProducts.length === 0 ? <p>No hay productos disponibles.</p> : null}
        </div>
      </section>

      <section className="seccion beneficios">
        <div className="contenedor rejilla rejilla--beneficios">
          <article className="beneficio">
            <p className="beneficio__icono"><i className="bi bi-shield-check" aria-hidden="true"></i></p>
            <h3>Registro verificado</h3>
            <p>Las cuentas se validan para evitar perfiles falsos.</p>
          </article>
          <article className="beneficio">
            <p className="beneficio__icono"><i className="bi bi-card-checklist" aria-hidden="true"></i></p>
            <h3>Actividades claras</h3>
            <p>Nivel, ritmo y plazas visibles antes de apuntarte.</p>
          </article>
          <article className="beneficio">
            <p className="beneficio__icono"><i className="bi bi-flag" aria-hidden="true"></i></p>
            <h3>Comunidad responsable</h3>
            <p>Los usuarios pueden reportar comportamientos inapropiados.</p>
          </article>
        </div>
      </section>

      <section className="seccion cta-final">
        <div className="contenedor cta-final__contenido">
          <h2>Empieza hoy con PacePal</h2>
          <p>Únete a la comunidad y encuentra personas con las que mantener una rutina activa.</p>
          <a href={session.user ? '#perfil' : '#registro'} className="boton boton--primario" onClick={handleNavigate(session.user ? 'perfil' : 'registro')}>
            {session.user ? 'Mi perfil' : 'Crear cuenta'}
          </a>
        </div>
      </section>
    </main>
    </>
  );
}

export default HomePage;
