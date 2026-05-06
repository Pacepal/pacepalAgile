import { buildPublicAssetUrl } from '../services/api.js';

function AboutPage() {
  return (
    <main>
      <section className="hero-about">
        <div className="contenedor hero-about__contenido">
          <img src={buildPublicAssetUrl('img/logo/logo.png')} alt="Logo PacePal" className="hero-about__logo" />
          <h1>Sobre PacePal</h1>
          <p>Una plataforma disenada para conectar personas a traves de actividades deportivas en grupo realizadas en rutas reales.</p>
          <p>Nuestro objetivo es sencillo: hacer que correr o caminar acompanado sea mas facil, mas seguro y mas sostenible.</p>
        </div>
      </section>

      <section className="seccion-about seccion-about--treecore">
        <div className="contenedor about-grid">
          <div className="about-grid__texto">
            <h2>
              El origen del proyecto
              <img src={buildPublicAssetUrl('img/logo/logotipoTrecore.png')} alt="Treecore Studio" className="about-treecore__logo" />
            </h2>
            <p>
              PacePal nace dentro del estudio <strong>Treecore Studio</strong>, un espacio dedicado al diseno y desarrollo de aplicaciones web centradas en la experiencia de usuario.
            </p>
            <p>
              El proyecto aplica accesibilidad, diseno responsive, organizacion modular del codigo y construccion de interfaces claras y comprensibles.
            </p>
          </div>
          <div className="about-grid__imagen">
            <img src={buildPublicAssetUrl('img/about/desarrollo-proyecto-pacepal.webp')} alt="Equipo trabajando en PacePal" />
          </div>
        </div>
      </section>

      <section className="seccion-about seccion-about--proyecto">
        <div className="contenedor about-grid">
          <div className="about-grid__imagen">
            <img src={buildPublicAssetUrl('img/about/comunidad-running-urbano.webp')} alt="Grupo de personas corriendo juntas" />
          </div>
          <div className="about-grid__texto">
            <h2>Que es PacePal</h2>
            <p>Muchas personas quieren hacer deporte al aire libre, pero no siempre encuentran compania, motivacion o rutas adecuadas para su nivel.</p>
            <p>La plataforma permite descubrir rutas, crear actividades deportivas y unirse a eventos organizados por otros usuarios.</p>
          </div>
        </div>
      </section>

      <section className="seccion-about seccion-about--comunidad">
        <div className="contenedor about-grid">
          <div className="about-grid__texto">
            <h2>Comunidad deportiva</h2>
            <p>En PacePal el deporte se vive como una experiencia compartida. Cada actividad esta pensada para que personas con intereses y ritmos similares puedan entrenar juntas con confianza.</p>
            <p>Mas alla del rendimiento, el objetivo es fomentar constancia, motivacion y habitos saludables dentro de un entorno inclusivo.</p>
          </div>
          <div className="about-grid__imagen">
            <img src={buildPublicAssetUrl('img/about/comunidad-entrenamiento.webp')} alt="Grupo entrenando en una actividad deportiva" />
          </div>
        </div>
      </section>

      <section className="seccion-about seccion-about--actividad">
        <div className="contenedor">
          <div className="bloque-texto">
            <h2>Como nace una actividad en PacePal</h2>
            <p>Cada actividad comienza con una persona que decide salir a correr o caminar y compartir ese momento con otros.</p>
          </div>
          <div className="about-card-grid">
            {[
              ['Explorar una ruta', 'img/about/ruta-parque-ciudad.webp', 'El primer paso es elegir una ruta disponible en la plataforma.'],
              ['Crear la actividad', 'img/about/organizar-actividad-running.webp', 'El usuario indica fecha, hora, nivel del grupo y ritmo aproximado.'],
              ['Compartir la experiencia', 'img/about/grupo-run-fin-actividad.webp', 'Otros usuarios pueden descubrir la actividad y unirse.'],
            ].map((item) => (
              <article className="tarjeta tarjeta-actividad-info" key={item[0]}>
                <img src={buildPublicAssetUrl(item[1])} alt={item[0]} />
                <div className="tarjeta-actividad-info__cuerpo">
                  <h3>{item[0]}</h3>
                  <p>{item[2]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
