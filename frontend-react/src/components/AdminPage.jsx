import { useEffect, useState } from 'react';
import { requestJson } from '../services/api.js';

function AdminTable({ title, rows, columns }) {
  return (
    <section className="seccion-pagina">
      <div className="contenedor">
        <h2>{title}</h2>
        {rows.length === 0 ? <p>No hay datos disponibles.</p> : null}
        {rows.length > 0 ? (
          <div className="tabla-responsive">
            <table>
              <thead>
                <tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.id_usuario || row.id_actividad || row.id_ruta || row.id_pedido || row.id_reporte || index}>
                    {columns.map((column) => <td key={column.key}>{String(row[column.key] ?? '')}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function AdminPage({ session, activities, routes }) {
  const [usuarios, setUsuarios] = useState([]);
  const [reportes, setReportes] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [message, setMessage] = useState('');
  const isAdmin = session.user?.rol === 'admin';

  useEffect(() => {
    if (!isAdmin) {
      setUsuarios([]);
      setReportes([]);
      setPedidos([]);
      return;
    }

    async function loadAdminData() {
      try {
        const [usersPayload, reportsPayload, ordersPayload] = await Promise.all([
          requestJson('/usuarios'),
          requestJson('/reportes'),
          requestJson('/pedidos/admin'),
        ]);
        setUsuarios(Array.isArray(usersPayload.data) ? usersPayload.data : []);
        setReportes(Array.isArray(reportsPayload.data) ? reportsPayload.data : []);
        setPedidos(Array.isArray(ordersPayload.data) ? ordersPayload.data : []);
        setMessage('');
      } catch (error) {
        setMessage('No se pudieron cargar los datos de administracion.');
      }
    }

    loadAdminData();
  }, [isAdmin]);

  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Panel de administracion</h1>
        <p>Control operativo del sistema para administradores.</p>
      </section>

      {!isAdmin ? (
        <section className="seccion-pagina">
          <div className="contenedor">
            <article className="tarjeta-pagina">
              <p>Acceso restringido a administradores.</p>
            </article>
          </div>
        </section>
      ) : (
        <>
          {message ? <p className="contenedor mensaje-error">{message}</p> : null}
          <AdminTable
            title="Usuarios registrados"
            rows={usuarios}
            columns={[
              { key: 'id_usuario', label: 'ID' },
              { key: 'nombre', label: 'Nombre' },
              { key: 'dni', label: 'DNI' },
              { key: 'email', label: 'Email' },
              { key: 'rol', label: 'Rol' },
            ]}
          />
          <AdminTable
            title="Reportes"
            rows={reportes}
            columns={[
              { key: 'id_reporte', label: 'ID' },
              { key: 'motivo', label: 'Motivo' },
              { key: 'estado', label: 'Estado' },
              { key: 'fecha', label: 'Fecha' },
            ]}
          />
          <AdminTable
            title="Actividades"
            rows={activities.items}
            columns={[
              { key: 'id_actividad', label: 'ID' },
              { key: 'nombre', label: 'Actividad' },
              { key: 'fecha', label: 'Fecha' },
              { key: 'nivel', label: 'Nivel' },
            ]}
          />
          <AdminTable
            title="Rutas"
            rows={routes.items}
            columns={[
              { key: 'id_ruta', label: 'ID' },
              { key: 'nombre', label: 'Ruta' },
              { key: 'ubicacion', label: 'Ubicacion' },
              { key: 'dificultad', label: 'Dificultad' },
            ]}
          />
          <AdminTable
            title="Pedidos"
            rows={pedidos}
            columns={[
              { key: 'id_pedido', label: 'ID' },
              { key: 'fecha', label: 'Fecha' },
              { key: 'total', label: 'Total' },
              { key: 'estado', label: 'Estado' },
            ]}
          />
        </>
      )}
    </main>
  );
}

export default AdminPage;
