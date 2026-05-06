function ProfilePage({ session }) {
  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Perfil</h1>
        <p>Gestion basica del perfil de usuario.</p>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <article className="tarjeta-pagina">
            <h2>Datos personales</h2>
            {session.user ? (
              <>
                <p>Usuario: {session.user.id || 'Cuenta activa'}</p>
                <p>Rol: {session.user.rol || 'usuario'}</p>
                <button type="button" className="boton boton--primario" onClick={session.logout}>
                  Cerrar sesion
                </button>
              </>
            ) : (
              <p>Inicia sesion para ver tu perfil.</p>
            )}
          </article>
        </div>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <h2>Historial de pedidos</h2>
          <article className="tarjeta-pagina">
            <p>El historial se mostrara al acceder con una cuenta activa.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;
