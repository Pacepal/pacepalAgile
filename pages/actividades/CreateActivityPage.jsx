import { useEffect, useState } from 'react';
import { requestJson } from '../../js/services/api.js';

const initialValues = {
  id_ruta: '',
  fecha: '',
  hora: '',
  nivel: '',
  plazas_max: '',
  descripcion: '',
};

function CreateActivityPage({ selectedRouteId, routes, session, onNavigate }) {
  const [values, setValues] = useState({ ...initialValues, id_ruta: selectedRouteId || '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (selectedRouteId) {
      setValues((current) => ({ ...current, id_ruta: selectedRouteId }));
    }
  }, [selectedRouteId]);

  function updateField(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setMessage('');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!values.id_ruta || !values.fecha || !values.hora || !values.nivel) {
      setMessage('Por favor completa los campos obligatorios.');
      return;
    }

    if (!session.user) {
      onNavigate('login');
      return;
    }

    try {
      const payload = await requestJson('/actividad', {
        method: 'POST',
        body: JSON.stringify({
          id_ruta: Number(values.id_ruta),
          fecha: values.fecha,
          hora: values.hora,
          nivel: values.nivel,
          plazas_max: values.plazas_max ? Number(values.plazas_max) : null,
          descripcion: values.descripcion,
        }),
      });
      setValues(initialValues);
      routes.reload();
      if (payload.data?.id_actividad) {
        onNavigate('actividad', payload.data.id_actividad);
      } else {
        onNavigate('actividades');
      }
    } catch (error) {
      setMessage(error.message || 'No se pudo crear la actividad.');
    }
  }

  return (
    <main>
      <section className="encabezado-pagina contenedor">
        <h1>Crear actividad</h1>
        <p>Organiza una nueva actividad deportiva para la comunidad.</p>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor">
          <form id="form-crear-actividad" className="formulario formulario-actividad" onSubmit={handleSubmit} noValidate>
            <div className="formulario-actividad__grid">
            <div className="formulario__grupo">
              <label htmlFor="crear-id-ruta" className="formulario__label">Ruta</label>
              <select id="crear-id-ruta" name="id_ruta" className="formulario__input" value={values.id_ruta} onChange={(event) => updateField('id_ruta', event.target.value)} required>
                <option value="">Selecciona una ruta</option>
                {routes.items.map((route) => (
                  <option key={route.id_ruta} value={route.id_ruta}>{route.nombre || `Ruta #${route.id_ruta}`}</option>
                ))}
              </select>
            </div>
            <div className="formulario__grupo">
              <label htmlFor="crear-fecha" className="formulario__label">Fecha</label>
              <input id="crear-fecha" name="fecha" type="date" className="formulario__input" value={values.fecha} onChange={(event) => updateField('fecha', event.target.value)} required />
            </div>
            <div className="formulario__grupo">
              <label htmlFor="crear-hora" className="formulario__label">Hora</label>
              <input id="crear-hora" name="hora" type="time" className="formulario__input" value={values.hora} onChange={(event) => updateField('hora', event.target.value)} required />
            </div>
            <div className="formulario__grupo">
              <label htmlFor="crear-nivel" className="formulario__label">Nivel</label>
              <select id="crear-nivel" name="nivel" className="formulario__input" value={values.nivel} onChange={(event) => updateField('nivel', event.target.value)} required>
                <option value="">Selecciona nivel</option>
                <option value="principiante">Principiante</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
              </select>
            </div>
            <div className="formulario__grupo">
              <label htmlFor="crear-plazas" className="formulario__label">Plazas máximas</label>
              <input id="crear-plazas" name="plazas_max" type="number" min="1" className="formulario__input" value={values.plazas_max} onChange={(event) => updateField('plazas_max', event.target.value)} />
            </div>
            <div className="formulario__grupo formulario-actividad__full">
              <label htmlFor="crear-descripcion" className="formulario__label">Descripción</label>
              <textarea id="crear-descripcion" name="descripcion" className="formulario__input" rows="3" value={values.descripcion} onChange={(event) => updateField('descripcion', event.target.value)}></textarea>
            </div>
            </div>
            <div id="crear-actividad-msg" role={message ? 'alert' : undefined}>{message ? <p className="mensaje-formulario mensaje-formulario--error">{message}</p> : null}</div>
            <div className="acciones-pagina">
              <button type="button" className="boton boton--volver" onClick={() => onNavigate('actividades')}>← Volver</button>
              <button type="submit" className="boton boton--primario boton--accion">Crear actividad</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default CreateActivityPage;
