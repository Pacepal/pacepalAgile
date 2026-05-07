import { useEffect, useState } from 'react';
import { requestJson } from '../services/api.js';

function DataTable({ rows, columns, emptyText = 'No hay datos disponibles.' }) {
  if (!rows.length) {
    return <p>{emptyText}</p>;
  }

  return (
    <div className="tabla-responsive">
      <table className="table table-bordered">
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
  );
}

function AdminPage({ session, activities, routes }) {
  const [usuarios, setUsuarios] = useState([]);
  const [reportes, setReportes] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [message, setMessage] = useState('');
  const isAdmin = session.user?.rol === 'admin';

  useEffect(() => {
    async function loadAdminData() {
      if (!isAdmin) {
        setUsuarios([]);
        setReportes([]);
        setPedidos([]);
        return;
      }

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
        setMessage(error.message || 'No se pudieron cargar los datos de administracion.');
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

      {message ? <p className="contenedor text-danger fw-bold">{message}</p> : null}

      <section className="seccion-pagina">
        <div className="contenedor">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="mb-0" style={{ whiteSpace: 'nowrap' }}>Usuarios registrados</h2>
            <button type="button" id="btn-admin-crear-usuario" className="boton boton--primario" style={{ width: 'auto', minWidth: '300px', fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>Crear usuario</button>
          </div>
          <div id="admin-form-usuario" style={{ display: 'none' }} className="mb-4"></div>
          <div id="admin-usuarios" aria-live="polite">
            <DataTable
              rows={usuarios}
              columns={[
                { key: 'id_usuario', label: 'ID' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'dni', label: 'DNI' },
                { key: 'email', label: 'Email' },
                { key: 'rol', label: 'Rol' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <h2>Reportes</h2>
          <div id="admin-reportes" aria-live="polite">
            <DataTable
              rows={reportes}
              columns={[
                { key: 'id_reporte', label: 'ID' },
                { key: 'motivo', label: 'Motivo' },
                { key: 'estado', label: 'Estado' },
                { key: 'fecha', label: 'Fecha' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="mb-0">Actividades</h2>
            <button type="button" id="btn-admin-crear-actividad" className="boton boton--primario" style={{ width: 'auto', minWidth: '300px', fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>Crear actividad</button>
          </div>
          <div id="admin-form-actividad" style={{ display: 'none' }} className="mb-4"></div>
          <div id="admin-actividades" aria-live="polite">
            <DataTable
              rows={activities.items}
              columns={[
                { key: 'id_actividad', label: 'ID' },
                { key: 'descripcion', label: 'Actividad' },
                { key: 'fecha', label: 'Fecha' },
                { key: 'nivel', label: 'Nivel' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="mb-0">Rutas</h2>
            <button type="button" id="btn-admin-crear-ruta" className="boton boton--primario" style={{ width: 'auto', minWidth: '300px', fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>Crear ruta</button>
          </div>
          <div id="admin-form-ruta" style={{ display: 'none' }} className="mb-4"></div>
          <div id="admin-rutas" aria-live="polite">
            <DataTable
              rows={routes.items}
              columns={[
                { key: 'id_ruta', label: 'ID' },
                { key: 'nombre', label: 'Ruta' },
                { key: 'ubicacion', label: 'Ubicacion' },
                { key: 'dificultad', label: 'Dificultad' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <h2>Pedidos</h2>
          <div id="admin-pedidos" aria-live="polite">
            <DataTable
              rows={pedidos}
              columns={[
                { key: 'id_pedido', label: 'ID' },
                { key: 'fecha', label: 'Fecha' },
                { key: 'total', label: 'Total' },
                { key: 'estado', label: 'Estado' },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AdminPage;
