import { useEffect, useState } from 'react';
import { requestJson } from '../services/api.js';

function emptyEditValues(usuario = {}) {
  return {
    nombre: usuario.nombre || '',
    sexo: usuario.sexo || '',
    fecha_nacimiento: usuario.fecha_nacimiento || '',
    direccion: usuario.direccion || '',
    pais: usuario.pais || '',
    tarjeta: usuario.tarjeta || '',
    notificaciones: !!usuario.notificaciones,
    revista: !!usuario.revista,
  };
}

function ProfilePage({ session }) {
  const [perfil, setPerfil] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editValues, setEditValues] = useState(emptyEditValues());
  const [message, setMessage] = useState('');

  async function loadProfile() {
    if (!session.user) {
      setPerfil(null);
      setPedidos([]);
      return;
    }

    try {
      const profilePayload = await requestJson('/perfil');
      setPerfil(profilePayload.data || null);
      setEditValues(emptyEditValues(profilePayload.data || {}));
      setMessage('');
    } catch (_error) {
      setPerfil(null);
    }

    try {
      const ordersPayload = await requestJson('/pedidos');
      setPedidos(Array.isArray(ordersPayload.data) ? ordersPayload.data : []);
    } catch (_error) {
      setPedidos([]);
    }
  }

  useEffect(() => {
    loadProfile();
  }, [session.user]);

  function updateField(field, value) {
    setEditValues((current) => ({ ...current, [field]: value }));
    setMessage('');
  }

  async function saveProfile(event) {
    event.preventDefault();

    try {
      const payload = await requestJson('/perfil', {
        method: 'PUT',
        body: JSON.stringify(editValues),
      });

      if (payload.status === 'ok') {
        setEditing(false);
        await loadProfile();
      } else {
        setMessage(payload.message || 'Error al guardar.');
      }
    } catch (error) {
      setMessage(error.message || 'Error de conexion.');
    }
  }

  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Perfil</h1>
        <p>Gestion basica del perfil de usuario.</p>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <div id="perfil-usuario" aria-live="polite">
            {!session.user ? (
              'Inicia sesion para ver tu perfil.'
            ) : editing ? (
              <article className="tarjeta-pagina">
                <h2>Editar perfil</h2>
                <form id="formEditarPerfil" onSubmit={saveProfile}>
                  {[
                    ['editNombre', 'Nombre', 'text', 'nombre', true],
                    ['editSexo', 'Sexo', 'text', 'sexo', false],
                    ['editFechaNacimiento', 'Fecha nacimiento', 'date', 'fecha_nacimiento', false],
                    ['editDireccion', 'Direccion', 'text', 'direccion', false],
                    ['editPais', 'Pais', 'text', 'pais', false],
                    ['editTarjeta', 'Tarjeta', 'text', 'tarjeta', false],
                  ].map(([id, label, type, field, required]) => (
                    <div className="mb-3" key={id}>
                      <label className="form-label" htmlFor={id}>{label}</label>
                      <input
                        type={type}
                        id={id}
                        className="form-control"
                        value={editValues[field]}
                        required={required}
                        onChange={(event) => updateField(field, event.target.value)}
                      />
                    </div>
                  ))}

                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      id="editNotificaciones"
                      className="form-check-input"
                      checked={editValues.notificaciones}
                      onChange={(event) => updateField('notificaciones', event.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="editNotificaciones">Notificaciones</label>
                  </div>

                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      id="editRevista"
                      className="form-check-input"
                      checked={editValues.revista}
                      onChange={(event) => updateField('revista', event.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="editRevista">Suscripcion a revista</label>
                  </div>

                  <button type="submit" className="boton boton--primario me-2">Guardar cambios</button>
                  <button type="button" className="boton" onClick={() => setEditing(false)}>Cancelar</button>
                  <p id="msgPerfil" className="mt-2">{message}</p>
                </form>
              </article>
            ) : perfil ? (
              <article className="tarjeta-pagina">
                <h2>Datos personales</h2>
                <p>Nombre: {perfil.nombre || ''}</p>
                <p>Email: {perfil.email || ''}</p>
                <p>DNI: {perfil.dni || ''}</p>
                <p>Rol: {perfil.rol || 'usuario'}</p>
                <p>Sexo: {perfil.sexo || 'No indicado'}</p>
                <p>Fecha nacimiento: {perfil.fecha_nacimiento || 'No indicada'}</p>
                <p>Direccion: {perfil.direccion || 'No indicada'}</p>
                <p>Pais: {perfil.pais || 'No indicado'}</p>
                <p>Registrado: {perfil.fecha_registro || ''}</p>
                <button type="button" className="boton boton--primario mt-3" onClick={() => setEditing(true)}>
                  Editar perfil
                </button>
              </article>
            ) : (
              'No se pudo cargar el perfil.'
            )}
          </div>
        </div>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <h2>Historial de pedidos</h2>
          <div id="historial-pedidos" aria-live="polite">
            {pedidos.length === 0 ? <p>No tienes pedidos.</p> : null}
            {pedidos.map((pedido) => (
              <article className="tarjeta-pagina mb-3" key={pedido.id_pedido}>
                <h3>Pedido #{pedido.id_pedido}</h3>
                <p>Fecha: {pedido.fecha || 'No disponible'}</p>
                <p>Total: {Number(pedido.total || 0).toFixed(2)} EUR</p>
                <p>Estado: {pedido.estado || 'No disponible'}</p>
                {Array.isArray(pedido.lineas) && pedido.lineas.length > 0 ? (
                  <ul className="list-unstyled">
                    {pedido.lineas.map((linea) => (
                      <li key={`${pedido.id_pedido}-${linea.id_articulo}`}>
                        Articulo #{linea.id_articulo} x{linea.cantidad} - {Number(linea.precio_unitario || 0).toFixed(2)} EUR/ud
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;
