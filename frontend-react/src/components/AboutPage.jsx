import { buildPublicAssetUrl } from '../services/api.js';

function AboutPage() {
  return (
    <main>
      <section className="hero-about">
        <div className="contenedor hero-about__contenido">
          <img src={buildPublicAssetUrl('img/logo/logo.png')} alt="Logo PacePal" className="hero-about__logo" />
          <h1>Sobre PacePal</h1>
          <p>
            Una plataforma diseñada para conectar personas a través de
            actividades deportivas en grupo realizadas en rutas reales.
          </p>
          <p>
            Nuestro objetivo es sencillo: hacer que correr o caminar acompañado
            sea más fácil, más seguro y más sostenible.
          </p>
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
              PacePal nace dentro del estudio <strong>Treecore Studio</strong>,
              un espacio dedicado al diseño y desarrollo de aplicaciones web
              centradas en la experiencia del usuario y la creación de productos
              digitales con impacto positivo.
            </p>
            <p>
              El proyecto se plantea como un ejercicio completo de diseño,
              arquitectura y desarrollo web, en el que se aplican principios de
              accesibilidad, diseño responsive, organización modular del código
              y construcción de interfaces claras y comprensibles.
            </p>
            <p>
              Desde Treecore Studio se busca demostrar que incluso proyectos
              pequeños pueden construirse con criterios profesionales, pensando
              en su evolución futura y en la calidad de la experiencia para el
              usuario final.
            </p>
          </div>

          <div className="about-grid__imagen">
            <img src={buildPublicAssetUrl('img/about/desarrollo-proyecto-pacepal.webp')} alt="Equipo trabajando en el desarrollo del proyecto PacePal" />
          </div>
        </div>
      </section>

      <section className="seccion-about seccion-about--proyecto">
        <div className="contenedor about-grid">
          <div className="about-grid__imagen">
            <img src={buildPublicAssetUrl('img/about/comunidad-running-urbano.webp')} alt="Grupo de personas corriendo juntas en una ruta urbana" />
          </div>

          <div className="about-grid__texto">
            <h2>Qué es PacePal</h2>
            <p>
              Muchas personas quieren hacer deporte al aire libre, pero no
              siempre encuentran compañía, motivación o rutas adecuadas para su
              nivel.
            </p>
            <p>PacePal surge para resolver ese problema.</p>
            <p>
              La plataforma permite descubrir rutas, crear actividades
              deportivas y unirse a eventos organizados por otros usuarios.
            </p>
            <p>
              De esta forma se genera una comunidad donde el deporte se
              convierte en una actividad social, accesible y abierta a personas
              con distintos niveles de experiencia.
            </p>
          </div>
        </div>
      </section>

      <section className="seccion-about seccion-about--comunidad">
        <div className="contenedor about-grid">
          <div className="about-grid__texto">
            <h2>Comunidad deportiva</h2>
            <p>
              En PacePal el deporte se vive como una experiencia compartida.
              Cada actividad está pensada para que personas con intereses y
              ritmos similares puedan entrenar juntas con confianza.
            </p>
            <p>
              La comunidad se construye desde la participación activa: usuarios
              que crean planes, se unen a propuestas locales y mantienen una
              rutina acompañada en espacios urbanos y naturales.
            </p>
            <p>
              Más allá del rendimiento, el objetivo es fomentar constancia,
              motivación y hábitos saludables dentro de un entorno inclusivo y
              abierto a todos los niveles.
            </p>
          </div>

          <div className="about-grid__imagen">
            <img src={buildPublicAssetUrl('img/about/comunidad-entrenamiento.webp')} alt="Grupo de personas entrenando juntas en una actividad deportiva" />
          </div>
        </div>
      </section>

      <section className="seccion-about seccion-about--actividad">
        <div className="contenedor">
          <div className="bloque-texto">
            <h2>Cómo nace una actividad en PacePal</h2>
            <p>
              Cada actividad que aparece en PacePal comienza con una persona que
              decide salir a correr o caminar y compartir ese momento con otros.
            </p>
            <p>
              La plataforma está diseñada para que organizar una actividad sea
              algo sencillo, claro y accesible para cualquier usuario.
            </p>
          </div>

          <div className="row g-3 g-lg-4 mt-1">
            <article className="col-12 col-lg-4">
              <div className="tarjeta tarjeta-actividad-info">
                <img src={buildPublicAssetUrl('img/about/ruta-parque-ciudad.webp')} alt="Personas caminando por una ruta urbana" />
                <div className="tarjeta-actividad-info__cuerpo">
                  <h3>Explorar una ruta</h3>
                  <p>El primer paso es elegir una ruta disponible en la plataforma.</p>
                  <p>
                    Las rutas están organizadas por zonas de la ciudad y
                    muestran información básica como distancia, dificultad o
                    tipo de recorrido.
                  </p>
                  <p>Esto permite que cada persona encuentre un recorrido adecuado a su nivel.</p>
                </div>
              </div>
            </article>

            <article className="col-12 col-lg-4">
              <div className="tarjeta tarjeta-actividad-info">
                <img src={buildPublicAssetUrl('img/about/organizar-actividad-running.webp')} alt="Persona preparándose para organizar una actividad deportiva" />
                <div className="tarjeta-actividad-info__cuerpo">
                  <h3>Crear la actividad</h3>
                  <p>
                    Una vez seleccionada la ruta, el usuario puede crear una
                    actividad indicando la fecha, la hora, el nivel del grupo y
                    el ritmo aproximado.
                  </p>
                  <p>
                    De esta forma, las personas que se unan a la actividad saben
                    exactamente qué tipo de encuentro deportivo van a encontrar.
                  </p>
                </div>
              </div>
            </article>

            <article className="col-12 col-lg-4">
              <div className="tarjeta tarjeta-actividad-info">
                <img src={buildPublicAssetUrl('img/about/grupo-run-fin-actividad.webp')} alt="Grupo de corredores compartiendo la actividad" />
                <div className="tarjeta-actividad-info__cuerpo">
                  <h3>Compartir la experiencia</h3>
                  <p>
                    Cuando la actividad aparece publicada en la plataforma,
                    otros usuarios pueden descubrirla y unirse.
                  </p>
                  <p>
                    El objetivo no es competir, sino compartir una experiencia
                    deportiva y conocer nuevas personas con intereses similares.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="seccion-about seccion-about--seguridad">
        <div className="contenedor seguridad-layout">
          <article className="seguridad-intro">
            <p className="seguridad-intro__etiqueta">COMUNIDAD</p>
            <h2>Seguridad y buena convivencia</h2>
            <p>Cada actividad es un espacio de confianza.</p>
            <p>Verificamos identidades y publicamos normas claras desde el primer día.</p>

            <div className="seguridad-intro__dni" role="note" aria-label="Registro con DNI">
              <span className="seguridad-intro__icono" aria-hidden="true">
                <i className="bi bi-person-vcard"></i>
              </span>
              <div>
                <strong>Registro con DNI</strong>
                <small>Identidad verificada ✓</small>
              </div>
            </div>

            <p className="seguridad-intro__reporte">Reportar (solo usuarios registrados)</p>
            <p className="seguridad-intro__meta">Confidencial · Revisado en menos de 24h</p>
          </article>

          <div className="seguridad-tarjetas row g-3 g-lg-4">
            <article className="col-12 col-md-6 col-xl-4">
              <div className="tarjeta-seguridad">
                <p className="tarjeta-seguridad__icono" aria-hidden="true">
                  <i className="bi bi-shield-check"></i>
                </p>
                <h3>Registro con DNI</h3>
                <p>
                  Todos los participantes verifican su identidad antes de
                  unirse. Sin anonimato en las rutas.
                </p>
              </div>
            </article>

            <article className="col-12 col-md-6 col-xl-4">
              <div className="tarjeta-seguridad">
                <p className="tarjeta-seguridad__icono" aria-hidden="true">
                  <i className="bi bi-card-checklist"></i>
                </p>
                <h3>Normas de grupo</h3>
                <p>
                  Código claro: puntualidad, respeto al ritmo acordado y cuidado
                  del entorno natural.
                </p>
              </div>
            </article>

            <article className="col-12 col-md-6 col-xl-4">
              <div className="tarjeta-seguridad">
                <p className="tarjeta-seguridad__icono" aria-hidden="true">
                  <i className="bi bi-star"></i>
                </p>
                <h3>Valoraciones reales</h3>
                <p>
                  Solo valoran quienes han asistido. Sin reseñas falsas ni
                  perfiles inflados.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="seccion-about seccion-about--sostenibilidad">
        <div className="contenedor about-grid">
          <div className="about-grid__texto">
            <h2>Deporte y sostenibilidad</h2>
            <p>
              PacePal no solo promueve la actividad física, también apuesta por
              una forma más responsable de practicar deporte.
            </p>
            <p>
              Dentro de la plataforma existe una pequeña tienda con equipamiento
              deportivo fabricado con materiales reciclados y procesos de
              producción más sostenibles.
            </p>
            <p>
              A través de colaboraciones con marcas deportivas y fabricantes
              especializados, se exploran productos inspirados en modelos de
              economía circular.
            </p>
            <p>
              Entre estas iniciativas se encuentra la posibilidad de reciclar
              zapatillas o ropa deportiva usada, dándoles una segunda vida en
              nuevos productos o materiales reutilizados.
            </p>
          </div>

          <div className="about-grid__imagen">
            <img src={buildPublicAssetUrl('img/productos/zapatillaPacepal1.webp')} alt="Zapatillas PacePal fabricadas con materiales reciclados" />
            <img src={buildPublicAssetUrl('img/productos/chalecoHidratacionPacepal1.webp')} alt="Equipamiento deportivo sostenible disponible en la tienda PacePal" />
          </div>
        </div>
      </section>

      <section className="seccion-about seccion-about--impacto">
        <div className="contenedor about-grid">
          <div className="about-grid__imagen">
            <img src={buildPublicAssetUrl('img/about/1.webp')} alt="Grupo mixto de personas realizando actividad deportiva al aire libre" />
          </div>

          <div className="about-grid__texto">
            <h2>Impacto social y ambiental</h2>
            <p>El objetivo de PacePal es construir algo más que una aplicación deportiva.</p>
            <p>
              La plataforma busca fomentar hábitos saludables, reducir la huella
              ambiental del deporte y crear espacios de encuentro entre personas
              con intereses comunes.
            </p>
            <p>
              Al promover actividades en parques, rutas urbanas y espacios
              naturales, PacePal contribuye a impulsar formas de movilidad
              activa como caminar o correr en lugar de utilizar transporte
              contaminante.
            </p>
            <p>
              Al mismo tiempo, el proyecto abre la puerta a futuras
              colaboraciones con municipios, organizaciones deportivas y
              entidades medioambientales interesadas en promover estilos de vida
              más saludables y sostenibles.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
