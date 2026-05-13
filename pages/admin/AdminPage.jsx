import { useEffect, useState } from 'react';
import { requestJson } from '../../js/services/api.js';

const emptyUserForm = {
  nombre: '',
  dni: '',
  email: '',
  password: '',
  rol: 'usuario',
};

const emptyProductForm = {
  nombre: '',
  descripcion: '',
  precio: '',
  stock: '0',
  imagen1: '',
  imagen2: '',
  id_categoria: '1',
};

const emptyRouteForm = {
  nombre: '',
  descripcion: '',
  distancia: '',
  dificultad: '',
  desnivel: '',
  duracion: '',
  ubicacion: '',
  imagen: '',
};

const emptyActivityForm = {
  id_ruta: '',
  fecha: '',
  hora: '',
  nivel: '',
  plazas_max: '',
  descripcion: '',
  estado: 'activa',
};

function toNumberOrNull(value) {
  if (value === '' || value === null || value === undefined) {
    return null;
  }

  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function formatPrice(value) {
  const number = Number(value || 0);
  return `${Number.isFinite(number) ? number.toFixed(2) : '0.00'} EUR`;
}

function readColumn(row, column) {
  if (typeof column.render === 'function') {
    return column.render(row);
  }

  return row[column.key] ?? '';
}

function getRowKey(row, index) {
  return (
    row.id_usuario
    || row.id_articulo
    || row.id_actividad
    || row.id_ruta
    || row.id_pedido
    || row.id_reporte
    || index
  );
}

function AdminTable({ rows, columns, emptyText = 'No hay datos disponibles.', onEdit, onDelete, deleteLabel = 'este registro' }) {
  if (!rows.length) {
    return <p>{emptyText}</p>;
  }

  const hasActions = Boolean(onEdit || onDelete);

  return (
    <div className="tabla-responsive">
      <table className="table table-bordered align-middle">
        <thead>
          <tr>
            {columns.map((column) => <th key={column.key}>{column.label}</th>)}
            {hasActions ? <th>Acciones</th> : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={getRowKey(row, index)}>
              {columns.map((column) => <td key={column.key}>{readColumn(row, column)}</td>)}
              {hasActions ? (
                <td>
                  <div className="admin-actions">
                    {onEdit ? (
                      <button type="button" className="boton" onClick={() => onEdit(row)}>
                        Editar
                      </button>
                    ) : null}
                    {onDelete ? (
                      <button type="button" className="boton boton--peligro" onClick={() => onDelete(row)}>
                        Borrar {deleteLabel}
                      </button>
                    ) : null}
                  </div>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdminPage({ session, products, activities, routes }) {
  const [usuarios, setUsuarios] = useState([]);
  const [reportes, setReportes] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [notice, setNotice] = useState({ type: '', text: '' });
  const [isSaving, setIsSaving] = useState(false);

  const [showUserForm, setShowUserForm] = useState(false);
  const [userForm, setUserForm] = useState(emptyUserForm);
  const [editingUserId, setEditingUserId] = useState(null);

  const [showProductForm, setShowProductForm] = useState(false);
  const [productForm, setProductForm] = useState(emptyProductForm);
  const [editingProductId, setEditingProductId] = useState(null);

  const [showRouteForm, setShowRouteForm] = useState(false);
  const [routeForm, setRouteForm] = useState(emptyRouteForm);
  const [editingRouteId, setEditingRouteId] = useState(null);

  const [showActivityForm, setShowActivityForm] = useState(false);
  const [activityForm, setActivityForm] = useState(emptyActivityForm);
  const [editingActivityId, setEditingActivityId] = useState(null);

  const isAdmin = session.user?.rol === 'admin';

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
    } catch (error) {
      setNotice({ type: 'error', text: error.message || 'No se pudieron cargar los datos de administración.' });
    }
  }

  useEffect(() => {
    loadAdminData();
  }, [isAdmin]);

  function clearNotice() {
    setNotice({ type: '', text: '' });
  }

  function showOk(text) {
    setNotice({ type: 'ok', text });
  }

  function showError(error, fallback) {
    setNotice({ type: 'error', text: error?.message || fallback });
  }

  function updateUserField(field, value) {
    clearNotice();
    setUserForm((current) => ({ ...current, [field]: value }));
  }

  function updateProductField(field, value) {
    clearNotice();
    setProductForm((current) => ({ ...current, [field]: value }));
  }

  function updateRouteField(field, value) {
    clearNotice();
    setRouteForm((current) => ({ ...current, [field]: value }));
  }

  function updateActivityField(field, value) {
    clearNotice();
    setActivityForm((current) => ({ ...current, [field]: value }));
  }

  function openCreateUser() {
    clearNotice();
    setEditingUserId(null);
    setUserForm(emptyUserForm);
    setShowUserForm(true);
  }

  function editUser(user) {
    clearNotice();
    setEditingUserId(user.id_usuario);
    setUserForm({
      nombre: user.nombre || '',
      dni: user.dni || '',
      email: user.email || '',
      password: '',
      rol: user.rol || 'usuario',
    });
    setShowUserForm(true);
  }

  function closeUserForm() {
    setShowUserForm(false);
    setEditingUserId(null);
    setUserForm(emptyUserForm);
  }

  async function saveUser(event) {
    event.preventDefault();
    setIsSaving(true);

    const payload = editingUserId
      ? {
          nombre: userForm.nombre,
          email: userForm.email,
          rol: userForm.rol,
        }
      : userForm;

    try {
      if (editingUserId) {
        await requestJson(`/usuarios/${editingUserId}`, {
          method: 'PUT',
          body: JSON.stringify(payload),
        });
        showOk('Usuario actualizado.');
      } else {
        await requestJson('/usuario', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        showOk('Usuario creado.');
      }

      closeUserForm();
      await loadAdminData();
    } catch (error) {
      showError(error, 'No se pudo guardar el usuario.');
    } finally {
      setIsSaving(false);
    }
  }

  async function deleteUser(user) {
    if (!window.confirm(`Borrar usuario "${user.nombre}"?`)) {
      return;
    }

    try {
      await requestJson(`/usuarios/${user.id_usuario}`, { method: 'DELETE' });
      if (editingUserId === user.id_usuario) {
        closeUserForm();
      }
      showOk('Usuario borrado.');
      await loadAdminData();
    } catch (error) {
      showError(error, 'No se pudo borrar el usuario.');
    }
  }

  function openCreateProduct() {
    clearNotice();
    setEditingProductId(null);
    setProductForm(emptyProductForm);
    setShowProductForm(true);
  }

  function editProduct(product) {
    clearNotice();
    setEditingProductId(product.id_articulo);
    setProductForm({
      nombre: product.nombre || '',
      descripcion: product.descripcion || '',
      precio: product.precio ?? '',
      stock: product.stock ?? '0',
      imagen1: product.imagen1 || '',
      imagen2: product.imagen2 || '',
      id_categoria: product.id_categoria ?? '1',
    });
    setShowProductForm(true);
  }

  function closeProductForm() {
    setShowProductForm(false);
    setEditingProductId(null);
    setProductForm(emptyProductForm);
  }

  async function saveProduct(event) {
    event.preventDefault();
    setIsSaving(true);

    const payload = {
      ...productForm,
      precio: Number(productForm.precio),
      stock: Number(productForm.stock),
      id_categoria: Number(productForm.id_categoria),
    };

    try {
      if (editingProductId) {
        await requestJson(`/productos/${editingProductId}`, {
          method: 'PUT',
          body: JSON.stringify(payload),
        });
        showOk('Producto actualizado.');
      } else {
        await requestJson('/productos', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        showOk('Producto creado.');
      }

      closeProductForm();
      await products.reload();
    } catch (error) {
      showError(error, 'No se pudo guardar el producto.');
    } finally {
      setIsSaving(false);
    }
  }

  async function deleteProduct(product) {
    if (!window.confirm(`Borrar producto "${product.nombre}"?`)) {
      return;
    }

    try {
      await requestJson(`/productos/${product.id_articulo}`, { method: 'DELETE' });
      if (editingProductId === product.id_articulo) {
        closeProductForm();
      }
      showOk('Producto borrado.');
      await products.reload();
    } catch (error) {
      showError(error, 'No se pudo borrar el producto.');
    }
  }

  function openCreateRoute() {
    clearNotice();
    setEditingRouteId(null);
    setRouteForm(emptyRouteForm);
    setShowRouteForm(true);
  }

  function editRoute(route) {
    clearNotice();
    setEditingRouteId(route.id_ruta);
    setRouteForm({
      nombre: route.nombre || '',
      descripcion: route.descripcion || '',
      distancia: route.distancia ?? '',
      dificultad: route.dificultad || '',
      desnivel: route.desnivel ?? '',
      duracion: route.duracion || '',
      ubicacion: route.ubicacion || '',
      imagen: route.imagen || '',
    });
    setShowRouteForm(true);
  }

  function closeRouteForm() {
    setShowRouteForm(false);
    setEditingRouteId(null);
    setRouteForm(emptyRouteForm);
  }

  async function saveRoute(event) {
    event.preventDefault();
    setIsSaving(true);

    const payload = {
      ...routeForm,
      distancia: toNumberOrNull(routeForm.distancia),
      desnivel: toNumberOrNull(routeForm.desnivel),
    };

    try {
      if (editingRouteId) {
        await requestJson(`/rutas/${editingRouteId}`, {
          method: 'PUT',
          body: JSON.stringify(payload),
        });
        showOk('Ruta actualizada.');
      } else {
        await requestJson('/ruta', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        showOk('Ruta creada.');
      }

      closeRouteForm();
      await routes.reload();
    } catch (error) {
      showError(error, 'No se pudo guardar la ruta.');
    } finally {
      setIsSaving(false);
    }
  }

  async function deleteRoute(route) {
    if (!window.confirm(`Borrar ruta "${route.nombre}"?`)) {
      return;
    }

    try {
      await requestJson(`/rutas/${route.id_ruta}`, { method: 'DELETE' });
      if (editingRouteId === route.id_ruta) {
        closeRouteForm();
      }
      showOk('Ruta borrada.');
      await routes.reload();
      await activities.reload();
    } catch (error) {
      showError(error, 'No se pudo borrar la ruta. Puede tener actividades asociadas.');
    }
  }

  function openCreateActivity() {
    clearNotice();
    setEditingActivityId(null);
    setActivityForm(emptyActivityForm);
    setShowActivityForm(true);
  }

  function editActivity(activity) {
    clearNotice();
    setEditingActivityId(activity.id_actividad);
    setActivityForm({
      id_ruta: activity.id_ruta ?? '',
      fecha: activity.fecha || '',
      hora: activity.hora || '',
      nivel: activity.nivel || '',
      plazas_max: activity.plazas_max ?? '',
      descripcion: activity.descripcion || '',
      estado: activity.estado || 'activa',
    });
    setShowActivityForm(true);
  }

  function closeActivityForm() {
    setShowActivityForm(false);
    setEditingActivityId(null);
    setActivityForm(emptyActivityForm);
  }

  async function saveActivity(event) {
    event.preventDefault();
    setIsSaving(true);

    const payload = {
      ...activityForm,
      id_ruta: Number(activityForm.id_ruta),
      plazas_max: toNumberOrNull(activityForm.plazas_max),
    };

    try {
      if (editingActivityId) {
        await requestJson(`/actividades/${editingActivityId}`, {
          method: 'PUT',
          body: JSON.stringify(payload),
        });
        showOk('Actividad actualizada.');
      } else {
        await requestJson('/actividad', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        showOk('Actividad creada.');
      }

      closeActivityForm();
      await activities.reload();
    } catch (error) {
      showError(error, 'No se pudo guardar la actividad.');
    } finally {
      setIsSaving(false);
    }
  }

  async function deleteActivity(activity) {
    if (!window.confirm(`Borrar actividad "${activity.descripcion || activity.ruta_nombre || activity.id_actividad}"?`)) {
      return;
    }

    try {
      await requestJson(`/actividades/${activity.id_actividad}`, { method: 'DELETE' });
      if (editingActivityId === activity.id_actividad) {
        closeActivityForm();
      }
      showOk('Actividad borrada.');
      await activities.reload();
    } catch (error) {
      showError(error, 'No se pudo borrar la actividad.');
    }
  }

  if (!isAdmin) {
    return (
      <main>
        <section className="encabezado-pagina contenedor">
          <h1>Panel de administración</h1>
          <p>Acceso reservado a administradores.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Panel de administración</h1>
        <p>Control operativo del sistema para administradores.</p>
      </section>

      {notice.text ? (
        <p className={`contenedor fw-bold ${notice.type === 'ok' ? 'text-success' : 'text-danger'}`}>
          {notice.text}
        </p>
      ) : null}

      <section className="seccion-pagina">
        <div className="contenedor">
          <div className="admin-section-header">
            <h2>Usuarios registrados</h2>
            <button type="button" className="boton boton--primario" onClick={openCreateUser}>
              Crear usuario
            </button>
          </div>

          {showUserForm ? (
            <form className="admin-form-grid mb-4" onSubmit={saveUser}>
              <label>
                Nombre
                <input type="text" value={userForm.nombre} onChange={(event) => updateUserField('nombre', event.target.value)} required />
              </label>
              <label>
                DNI
                <input type="text" value={userForm.dni} onChange={(event) => updateUserField('dni', event.target.value)} disabled={Boolean(editingUserId)} required={!editingUserId} />
              </label>
              <label>
                Email
                <input type="email" value={userForm.email} onChange={(event) => updateUserField('email', event.target.value)} required />
              </label>
              {!editingUserId ? (
                <label>
                  Contraseña
                  <input type="password" value={userForm.password} onChange={(event) => updateUserField('password', event.target.value)} required />
                </label>
              ) : null}
              <label>
                Rol
                <select value={userForm.rol} onChange={(event) => updateUserField('rol', event.target.value)}>
                  <option value="usuario">usuario</option>
                  <option value="admin">admin</option>
                </select>
              </label>
              <div className="admin-form-grid__actions">
                <button type="submit" className="boton boton--primario" disabled={isSaving}>
                  {editingUserId ? 'Guardar usuario' : 'Crear usuario'}
                </button>
                <button type="button" className="boton" onClick={closeUserForm}>
                  Cancelar
                </button>
              </div>
            </form>
          ) : null}

          <div id="admin-usuarios" aria-live="polite">
            <AdminTable
              rows={usuarios}
              columns={[
                { key: 'id_usuario', label: 'ID' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'dni', label: 'DNI' },
                { key: 'email', label: 'Email' },
                { key: 'rol', label: 'Rol' },
              ]}
              onEdit={editUser}
              onDelete={deleteUser}
              deleteLabel="usuario"
            />
          </div>
        </div>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <div className="admin-section-header">
            <h2>Productos</h2>
            <button type="button" className="boton boton--primario" onClick={openCreateProduct}>
              Crear producto
            </button>
          </div>

          {showProductForm ? (
            <form className="admin-form-grid mb-4" onSubmit={saveProduct}>
              <label>
                Nombre
                <input type="text" value={productForm.nombre} onChange={(event) => updateProductField('nombre', event.target.value)} required />
              </label>
              <label>
                Precio
                <input type="number" min="0" step="0.01" value={productForm.precio} onChange={(event) => updateProductField('precio', event.target.value)} required />
              </label>
              <label>
                Stock
                <input type="number" min="0" step="1" value={productForm.stock} onChange={(event) => updateProductField('stock', event.target.value)} required />
              </label>
              <label>
                Categoría
                <input type="number" min="1" step="1" value={productForm.id_categoria} onChange={(event) => updateProductField('id_categoria', event.target.value)} required />
              </label>
              <label className="admin-form-grid__full">
                Descripción
                <textarea rows="3" value={productForm.descripcion} onChange={(event) => updateProductField('descripcion', event.target.value)} />
              </label>
              <label>
                Imagen 1
                <input type="text" value={productForm.imagen1} onChange={(event) => updateProductField('imagen1', event.target.value)} placeholder="img/productos/archivo.webp" />
              </label>
              <label>
                Imagen 2
                <input type="text" value={productForm.imagen2} onChange={(event) => updateProductField('imagen2', event.target.value)} placeholder="img/productos/archivo.webp" />
              </label>
              <div className="admin-form-grid__actions">
                <button type="submit" className="boton boton--primario" disabled={isSaving}>
                  {editingProductId ? 'Guardar producto' : 'Crear producto'}
                </button>
                <button type="button" className="boton" onClick={closeProductForm}>
                  Cancelar
                </button>
              </div>
            </form>
          ) : null}

          <div id="admin-productos" aria-live="polite">
            <AdminTable
              rows={products.items}
              emptyText="No hay productos disponibles."
              columns={[
                { key: 'id_articulo', label: 'ID' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'precio', label: 'Precio', render: (product) => formatPrice(product.precio) },
                { key: 'stock', label: 'Stock' },
                { key: 'id_categoria', label: 'Categoría' },
                { key: 'imagen1', label: 'Imagen' },
              ]}
              onEdit={editProduct}
              onDelete={deleteProduct}
              deleteLabel="producto"
            />
          </div>
        </div>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <div className="admin-section-header">
            <h2>Actividades</h2>
            <button type="button" className="boton boton--primario" onClick={openCreateActivity}>
              Crear actividad
            </button>
          </div>

          {showActivityForm ? (
            <form className="admin-form-grid mb-4" onSubmit={saveActivity}>
              <label>
                Ruta
                <select value={activityForm.id_ruta} onChange={(event) => updateActivityField('id_ruta', event.target.value)} required>
                  <option value="">Seleccionar ruta</option>
                  {routes.items.map((route) => (
                    <option key={route.id_ruta} value={route.id_ruta}>
                      {route.nombre}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Fecha
                <input type="date" value={activityForm.fecha} onChange={(event) => updateActivityField('fecha', event.target.value)} />
              </label>
              <label>
                Hora
                <input type="time" value={activityForm.hora} onChange={(event) => updateActivityField('hora', event.target.value)} />
              </label>
              <label>
                Nivel
                <input type="text" value={activityForm.nivel} onChange={(event) => updateActivityField('nivel', event.target.value)} />
              </label>
              <label>
                Plazas máx.
                <input type="number" min="0" step="1" value={activityForm.plazas_max} onChange={(event) => updateActivityField('plazas_max', event.target.value)} />
              </label>
              <label>
                Estado
                <select value={activityForm.estado} onChange={(event) => updateActivityField('estado', event.target.value)}>
                  <option value="activa">activa</option>
                  <option value="cancelada">cancelada</option>
                  <option value="finalizada">finalizada</option>
                </select>
              </label>
              <label className="admin-form-grid__full">
                Descripción
                <textarea rows="3" value={activityForm.descripcion} onChange={(event) => updateActivityField('descripcion', event.target.value)} />
              </label>
              <div className="admin-form-grid__actions">
                <button type="submit" className="boton boton--primario" disabled={isSaving}>
                  {editingActivityId ? 'Guardar actividad' : 'Crear actividad'}
                </button>
                <button type="button" className="boton" onClick={closeActivityForm}>
                  Cancelar
                </button>
              </div>
            </form>
          ) : null}

          <div id="admin-actividades" aria-live="polite">
            <AdminTable
              rows={activities.items}
              emptyText="No hay actividades disponibles."
              columns={[
                { key: 'id_actividad', label: 'ID' },
                { key: 'ruta_nombre', label: 'Ruta', render: (activity) => activity.ruta_nombre || activity.nombre || '' },
                { key: 'fecha', label: 'Fecha' },
                { key: 'nivel', label: 'Nivel' },
                { key: 'estado', label: 'Estado' },
              ]}
              onEdit={editActivity}
              onDelete={deleteActivity}
              deleteLabel="actividad"
            />
          </div>
        </div>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <div className="admin-section-header">
            <h2>Rutas</h2>
            <button type="button" className="boton boton--primario" onClick={openCreateRoute}>
              Crear ruta
            </button>
          </div>

          {showRouteForm ? (
            <form className="admin-form-grid mb-4" onSubmit={saveRoute}>
              <label>
                Nombre
                <input type="text" value={routeForm.nombre} onChange={(event) => updateRouteField('nombre', event.target.value)} required />
              </label>
              <label>
                Ubicación
                <input type="text" value={routeForm.ubicacion} onChange={(event) => updateRouteField('ubicacion', event.target.value)} />
              </label>
              <label>
                Dificultad
                <input type="text" value={routeForm.dificultad} onChange={(event) => updateRouteField('dificultad', event.target.value)} />
              </label>
              <label>
                Distancia
                <input type="number" min="0" step="0.01" value={routeForm.distancia} onChange={(event) => updateRouteField('distancia', event.target.value)} />
              </label>
              <label>
                Desnivel
                <input type="number" step="1" value={routeForm.desnivel} onChange={(event) => updateRouteField('desnivel', event.target.value)} />
              </label>
              <label>
                Duración
                <input type="text" value={routeForm.duracion} onChange={(event) => updateRouteField('duracion', event.target.value)} />
              </label>
              <label className="admin-form-grid__full">
                Imagen
                <input type="text" value={routeForm.imagen} onChange={(event) => updateRouteField('imagen', event.target.value)} placeholder="img/rutas/archivo.webp" />
              </label>
              <label className="admin-form-grid__full">
                Descripción
                <textarea rows="3" value={routeForm.descripcion} onChange={(event) => updateRouteField('descripcion', event.target.value)} />
              </label>
              <div className="admin-form-grid__actions">
                <button type="submit" className="boton boton--primario" disabled={isSaving}>
                  {editingRouteId ? 'Guardar ruta' : 'Crear ruta'}
                </button>
                <button type="button" className="boton" onClick={closeRouteForm}>
                  Cancelar
                </button>
              </div>
            </form>
          ) : null}

          <div id="admin-rutas" aria-live="polite">
            <AdminTable
              rows={routes.items}
              emptyText="No hay rutas disponibles."
              columns={[
                { key: 'id_ruta', label: 'ID' },
                { key: 'nombre', label: 'Ruta' },
                { key: 'ubicacion', label: 'Ubicación' },
                { key: 'dificultad', label: 'Dificultad' },
                { key: 'imagen', label: 'Imagen' },
              ]}
              onEdit={editRoute}
              onDelete={deleteRoute}
              deleteLabel="ruta"
            />
          </div>
        </div>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <h2>Reportes</h2>
          <div id="admin-reportes" aria-live="polite">
            <AdminTable
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
          <h2>Pedidos</h2>
          <div id="admin-pedidos" aria-live="polite">
            <AdminTable
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
