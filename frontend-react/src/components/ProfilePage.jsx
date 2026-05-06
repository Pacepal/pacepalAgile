import { useEffect, useState } from 'react';
import { requestJson } from '../services/api.js';

function ProfilePage({ session }) {
  const [perfil, setPerfil] = useState(null);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    if (!session.user || session.isDemo) {
      setPerfil(null);
      setPedidos([]);
      return;
    }

    async function loadProfile() {
      try {
        const [profilePayload, ordersPayload] = await Promise.all([
          requestJson('/perfil'),
          requestJson('/pedidos'),
        ]);
        setPerfil(profilePayload.data || null);
        setPedidos(Array.isArray(ordersPayload.data) ? ordersPayload.data : []);
      } catch (_error) {
        setPerfil(null);
        setPedidos([]);
      }
    }

    loadProfile();
  }, [session.user, session.isDemo]);

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
                <p>Nombre: {perfil?.nombre || 'Cuenta activa'}</p>
                <p>Email: {perfil?.email || 'No disponible'}</p>
                <p>DNI: {perfil?.dni || 'No disponible'}</p>
                <p>Rol: {perfil?.rol || session.user.rol || 'usuario'}</p>
                <p>Sexo: {perfil?.sexo || 'No indicado'}</p>
                <p>Fecha nacimiento: {perfil?.fecha_nacimiento || 'No indicada'}</p>
                <p>Direccion: {perfil?.direccion || 'No indicada'}</p>
                <p>Pais: {perfil?.pais || 'No indicado'}</p>
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
          {pedidos.length === 0 ? (
            <article className="tarjeta-pagina">
              <p>No tienes pedidos.</p>
            </article>
          ) : (
            <div className="rejilla pedido-grid">
              {pedidos.map((pedido) => (
                <article className="tarjeta-pagina" key={pedido.id_pedido}>
                  <h3>Pedido #{pedido.id_pedido}</h3>
                  <p>Fecha: {pedido.fecha || 'No disponible'}</p>
                  <p>Total: {Number(pedido.total || 0).toFixed(2)} EUR</p>
                  <p>Estado: {pedido.estado || 'No disponible'}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;
