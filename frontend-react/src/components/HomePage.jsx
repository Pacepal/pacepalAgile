import { buildPublicAssetUrl } from '../services/api.js';

function HomePage({ session, onNavigate }) {
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
          <div className="rejilla rejilla--actividades">
            {[
              ['Casa de Campo', 'Running suave · nivel principiante', 'Sábado · 10:00', '12 plazas disponibles'],
              ['Retiro', 'Walking relajado · nivel básico', 'Domingo · 9:30', '8 plazas disponibles'],
              ['Madrid Río', 'Running moderado · nivel intermedio', 'Sábado · 18:00', '15 plazas disponibles'],
            ].map((activity) => (
              <article className="tarjeta tarjeta-actividad" key={activity[0]}>
                <h3><i className="bi bi-geo-alt-fill" aria-hidden="true"></i> {activity[0]}</h3>
                <p className="linea">{activity[1]}</p>
                <p><i className="bi bi-calendar3" aria-hidden="true"></i> {activity[2]}</p>
                <p><i className="bi bi-people-fill" aria-hidden="true"></i> {activity[3]}</p>
                <a href="#actividades-page" className="boton boton--primario" onClick={handleNavigate('actividades')}>
                  Ver actividad
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion seccion--suave">
        <div className="contenedor">
          <h2>Tienda sostenible</h2>
          <p className="subtitulo">Equipamiento deportivo fabricado con materiales reciclados.</p>
          <div className="rejilla rejilla--productos">
            {[
              ['Zapatillas running recicladas', 'img/productos/zapatillaPacepal1.webp'],
              ['Botella deportiva sostenible', 'img/productos/botellaPacepal1.webp'],
              ['Mochila eco-friendly', 'img/productos/chalecoHidratacionPacepal1.webp'],
            ].map((product) => (
              <article className="tarjeta tarjeta-producto" key={product[0]}>
                <img src={buildPublicAssetUrl(product[1])} alt={product[0]} loading="lazy" />
                <div className="tarjeta-producto__cuerpo">
                  <h3>{product[0]}</h3>
                  <p><i className="bi bi-leaf-fill" aria-hidden="true"></i> Material reutilizado</p>
                  <p><i className="bi bi-leaf-fill" aria-hidden="true"></i> Producción responsable</p>
                  <a href="#tienda" className="boton boton--primario" onClick={handleNavigate('tienda')}>
                    Ver producto
                  </a>
                </div>
              </article>
            ))}
          </div>
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
