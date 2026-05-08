import { useState } from 'react';

const initialValues = {
  nombre: '',
  email: '',
  motivo: '',
  mensaje: '',
  privacidad: false,
};

const fieldIds = {
  nombre: 'contacto-nombre',
  email: 'contacto-email',
  motivo: 'contacto-motivo',
  mensaje: 'contacto-mensaje',
  privacidad: 'contacto-privacidad',
};

function limpiarTexto(value) {
  return (value ?? '').toString().trim();
}

function validarNombre(value) {
  const nombre = limpiarTexto(value);
  if (!nombre) return 'El nombre es obligatorio.';
  if (nombre.length < 2) return 'El nombre debe tener al menos 2 caracteres.';
  if (nombre.length > 50) return 'El nombre no puede superar los 50 caracteres.';
  if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(nombre)) return 'El nombre solo puede contener letras y espacios.';
  return '';
}

function validarEmail(value) {
  const email = limpiarTexto(value);
  if (!email) return 'El email es obligatorio.';
  if (email.length > 100) return 'El email no puede superar los 100 caracteres.';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return 'Introduce un correo electrónico válido.';
  return '';
}

function validarMotivo(value) {
  if (!limpiarTexto(value)) return 'Selecciona el motivo del contacto.';
  return '';
}

function validarMensaje(value) {
  const mensaje = limpiarTexto(value);
  if (!mensaje) return 'El mensaje es obligatorio.';
  if (mensaje.length < 15) return 'El mensaje debe tener al menos 15 caracteres.';
  if (mensaje.length > 800) return 'El mensaje no puede superar los 800 caracteres.';
  return '';
}

function validarPrivacidad(value) {
  if (!value) return 'Debes aceptar la politica de privacidad.';
  return '';
}

function fieldClass(value, error) {
  if (error) return 'campo-invalido';
  return typeof value === 'string' && limpiarTexto(value) ? 'campo-valido' : '';
}

function ContactPage() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  function updateField(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setMessage('');
    setMessageType('');
  }

  function validateField(field, value = values[field]) {
    let error = '';

    if (field === 'nombre') error = validarNombre(value);
    if (field === 'email') error = validarEmail(value);
    if (field === 'motivo') error = validarMotivo(value);
    if (field === 'mensaje') error = validarMensaje(value);
    if (field === 'privacidad') error = validarPrivacidad(value);

    setErrors((current) => ({ ...current, [field]: error }));
    return error;
  }

  function validateAll() {
    const nextErrors = {
      nombre: validarNombre(values.nombre),
      email: validarEmail(values.email),
      motivo: validarMotivo(values.motivo),
      mensaje: validarMensaje(values.mensaje),
      privacidad: validarPrivacidad(values.privacidad),
    };

    Object.keys(nextErrors).forEach((key) => {
      if (!nextErrors[key]) delete nextErrors[key];
    });

    setErrors(nextErrors);
    return nextErrors;
  }

  function focusFirstInvalid(nextErrors) {
    const firstField = ['nombre', 'email', 'motivo', 'mensaje', 'privacidad'].find((field) => nextErrors[field]);

    if (!firstField) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(fieldIds[firstField])?.focus();
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateAll();
    if (Object.keys(nextErrors).length > 0) {
      setMessage('Revisa los campos marcados para continuar.');
      setMessageType('error');
      focusFirstInvalid(nextErrors);
      return;
    }

    setValues(initialValues);
    setMessage('Mensaje preparado correctamente.');
    setMessageType('ok');
  }

  return (
    <main>
      <section className="encabezado-pagina">
        <div className="contenedor contacto-encabezado">
          <h1>Contacto</h1>
          <p>
            Escribenos si tienes dudas, sugerencias o has detectado alguna incidencia durante el uso de PacePal.
          </p>
        </div>
      </section>

      <section className="seccion-pagina">
        <div className="contenedor contacto-contenido">
          <aside className="contacto-info" aria-labelledby="contacto-info-titulo">
            <h2 id="contacto-info-titulo">Informacion basica</h2>

            <dl className="contacto-info__lista">
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:contacto@pacepal.es">contacto@pacepal.es</a></dd>
              </div>
              <div>
                <dt>Ubicacion</dt>
                <dd>Madrid, Espana</dd>
              </div>
              <div>
                <dt>Horario orientativo</dt>
                <dd>Lunes a viernes · 10:00 a 18:00</dd>
              </div>
            </dl>
          </aside>

          <section className="tarjeta-formulario contacto-formulario" id="contacto-formulario" aria-labelledby="contacto-formulario-titulo">
            <h2 id="contacto-formulario-titulo">Formulario de contacto</h2>

            <form onSubmit={handleSubmit} noValidate>
              <div className="contacto-formulario__fila">
                <div className="formulario__grupo">
                  <label htmlFor={fieldIds.nombre}>Nombre</label>
                  <input
                    id={fieldIds.nombre}
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    required
                    aria-invalid={errors.nombre ? 'true' : 'false'}
                    aria-describedby="error-contacto-nombre"
                    value={values.nombre}
                    onBlur={() => validateField('nombre')}
                    onChange={(event) => updateField('nombre', event.target.value)}
                    className={fieldClass(values.nombre, errors.nombre)}
                  />
                  <div className="mensaje-error" id="error-contacto-nombre" aria-live="polite">{errors.nombre || ''}</div>
                </div>

                <div className="formulario__grupo">
                  <label htmlFor={fieldIds.email}>Email</label>
                  <input
                    id={fieldIds.email}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="tu@email.com"
                    required
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby="error-contacto-email"
                    value={values.email}
                    onBlur={() => validateField('email')}
                    onChange={(event) => updateField('email', event.target.value)}
                    className={fieldClass(values.email, errors.email)}
                  />
                  <div className="mensaje-error" id="error-contacto-email" aria-live="polite">{errors.email || ''}</div>
                </div>

                <div className="formulario__grupo formulario__grupo--full">
                  <label htmlFor={fieldIds.motivo}>Motivo del contacto</label>
                  <select
                    id={fieldIds.motivo}
                    name="motivo"
                    required
                    aria-invalid={errors.motivo ? 'true' : 'false'}
                    aria-describedby="error-contacto-motivo"
                    value={values.motivo}
                    onBlur={() => validateField('motivo')}
                    onChange={(event) => updateField('motivo', event.target.value)}
                    className={fieldClass(values.motivo, errors.motivo)}
                  >
                    <option value="">Selecciona una opcion</option>
                    <option value="duda">Duda general</option>
                    <option value="colaboracion">Colaboracion</option>
                    <option value="incidencia">Incidencia tecnica</option>
                    <option value="sugerencia">Sugerencia de mejora</option>
                    <option value="otro">Otro motivo</option>
                  </select>
                  <div className="mensaje-error" id="error-contacto-motivo" aria-live="polite">{errors.motivo || ''}</div>
                </div>

                <div className="formulario__grupo formulario__grupo--full">
                  <label htmlFor={fieldIds.mensaje}>Mensaje</label>
                  <textarea
                    id={fieldIds.mensaje}
                    name="mensaje"
                    rows="5"
                    placeholder="Cuentanos el contexto para poder ayudarte mejor."
                    required
                    aria-invalid={errors.mensaje ? 'true' : 'false'}
                    aria-describedby="error-contacto-mensaje"
                    value={values.mensaje}
                    onBlur={() => validateField('mensaje')}
                    onChange={(event) => updateField('mensaje', event.target.value)}
                    className={fieldClass(values.mensaje, errors.mensaje)}
                  ></textarea>
                  <div className="mensaje-error" id="error-contacto-mensaje" aria-live="polite">{errors.mensaje || ''}</div>
                </div>
              </div>

              <div className="contenedor-checkbox contacto-formulario__checkbox">
                <input
                  id={fieldIds.privacidad}
                  name="privacidad"
                  type="checkbox"
                  checked={values.privacidad}
                  aria-invalid={errors.privacidad ? 'true' : 'false'}
                  aria-describedby="error-contacto-privacidad"
                  onChange={(event) => updateField('privacidad', event.target.checked)}
                  onBlur={() => validateField('privacidad')}
                />
                <label htmlFor={fieldIds.privacidad}>
                  Acepto la politica de privacidad y el tratamiento de los datos enviados en este formulario.
                </label>
              </div>
              <div className="mensaje-error" id="error-contacto-privacidad" aria-live="polite">{errors.privacidad || ''}</div>

              <p
                className={message ? `mensaje-formulario mensaje-formulario--${messageType}` : 'mensaje-resultado'}
                role={messageType === 'error' ? 'alert' : 'status'}
                aria-live={messageType === 'error' ? 'assertive' : 'polite'}
              >
                {message || ''}
              </p>

              <button type="submit" className="boton boton--primario">Enviar mensaje</button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
