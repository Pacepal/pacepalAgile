function CookiesPage() {
  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Politica de Cookies</h1>
        <p>Informacion sobre el uso de cookies en PacePal.</p>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <article className="legal-contenido tarjeta-pagina">
            <h2>1. Que es una cookie?</h2>
            <p>Una cookie es un pequeno archivo de texto que un sitio web almacena en tu navegador cuando lo visitas. Permite recordar informacion sobre tu visita y mejorar la experiencia de uso.</p>

            <h2>2. Que cookies utiliza PacePal?</h2>
            <p>PacePal utiliza cookies tecnicas necesarias para el correcto funcionamiento de la plataforma.</p>

            <h3>2.1 Cookie de sesion</h3>
            <div className="tabla-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Finalidad</th>
                    <th>Duracion</th>
                    <th>Terceros</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PHPSESSID</td>
                    <td>Tecnica / Necesaria</td>
                    <td>Mantener la sesion del usuario, carrito, perfil y panel de administracion.</td>
                    <td>Hasta cerrar el navegador o hacer logout</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2.2 Cookie de consentimiento</h3>
            <p>La cookie de consentimiento recuerda la eleccion del usuario para no volver a mostrar el aviso en cada visita.</p>

            <h2>3. Cookies analiticas y publicitarias</h2>
            <p>PacePal no utiliza actualmente cookies analiticas ni cookies publicitarias o de marketing.</p>

            <h2>4. Como puedo gestionar mis preferencias?</h2>
            <p>Desde el aviso de cookies puedes aceptar, mantener solo las tecnicas o configurar tus preferencias. Tambien puedes borrar los datos del sitio desde tu navegador.</p>

            <h2>5. Contacto</h2>
            <p>Si tienes dudas sobre esta politica de cookies, puedes contactar con el equipo de PacePal a traves de la seccion de contacto del sitio web.</p>

            <p className="legal-actualizacion"><em>Ultima actualizacion: marzo 2026</em></p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default CookiesPage;
