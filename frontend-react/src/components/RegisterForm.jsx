import { useMemo, useState } from 'react';

const initialValues = {
  nombre: '',
  email: '',
  dni: '',
  password: '',
  confirmPassword: '',
  sexo: '',
  fecha_nacimiento: '',
  direccion: '',
  pais: '',
  tarjeta: '',
  notificaciones: false,
  revista: false,
};

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validateDni(value) {
  return /^[0-9]{8}[A-Z]$/.test(value.trim().toUpperCase());
}

function validatePassword(value) {
  return value.length >= 8 && /[A-Z]/.test(value) && /[a-z]/.test(value) && /[0-9]/.test(value);
}

function RegisterForm({ onRegister, sessionMessage }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [localMessage, setLocalMessage] = useState('');

  const showCard = useMemo(
    () => values.direccion.trim() !== '' && values.pais.trim() !== '',
    [values.direccion, values.pais]
  );

  function updateField(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setLocalMessage('');
  }

  function validate() {
    const nextErrors = {};

    if (values.nombre.trim().length < 3) {
      nextErrors.nombre = 'Indica nombre y apellidos.';
    }
    if (!validateEmail(values.email)) {
      nextErrors.email = 'Introduce un email valido.';
    }
    if (!validateDni(values.dni)) {
      nextErrors.dni = 'Usa 8 numeros y una letra.';
    }
    if (!validatePassword(values.password)) {
      nextErrors.password = 'Minimo 8 caracteres, mayuscula, minuscula y numero.';
    }
    if (values.confirmPassword !== values.password) {
      nextErrors.confirmPassword = 'Las contrasenas no coinciden.';
    }
    if ((values.direccion.trim() && !values.pais) || (!values.direccion.trim() && values.pais)) {
      nextErrors.direccion = 'Direccion y pais deben completarse juntos.';
    }
    if (showCard && values.tarjeta.replace(/\D/g, '').length < 12) {
      nextErrors.tarjeta = 'Introduce una tarjeta valida.';
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setLocalMessage('Revisa los campos marcados para continuar.');
      return;
    }

    const payload = {
      nombre: values.nombre.trim(),
      email: values.email.trim(),
      dni: values.dni.trim().toUpperCase(),
      password: values.password,
      notificaciones: values.notificaciones,
      revista: values.revista,
    };

    ['sexo', 'fecha_nacimiento', 'direccion', 'pais', 'tarjeta'].forEach((field) => {
      if (values[field]) {
        payload[field] = values[field].trim ? values[field].trim() : values[field];
      }
    });

    const ok = await onRegister(payload);
    if (ok) {
      setValues(initialValues);
      setLocalMessage('Registro correcto. Ya puedes iniciar sesion.');
    }
  }

  return (
    <section className="tarjeta-formulario" aria-labelledby="register-form-title">
      <h1 id="register-form-title">Registro de usuario</h1>
      <form id="formRegistro" onSubmit={handleSubmit} noValidate>
        <label htmlFor="register-nombre">
          Nombre y apellidos
          <input id="register-nombre" name="nombreApellidos" value={values.nombre} onChange={(event) => updateField('nombre', event.target.value)} placeholder="Ejemplo: Pablo Sevillano" />
        </label>
        <div className="mensaje-error" aria-live="polite">{errors.nombre || ''}</div>
        <label htmlFor="register-email">
          Email
          <input id="register-email" name="email" type="email" value={values.email} onChange={(event) => updateField('email', event.target.value)} placeholder="ejemplo@email.com" />
        </label>
        <div className="mensaje-error" aria-live="polite">{errors.email || ''}</div>
        <label htmlFor="register-dni">
          DNI
          <input id="register-dni" name="dni" value={values.dni} onChange={(event) => updateField('dni', event.target.value.toUpperCase().replace(/\s/g, ''))} placeholder="12345678Z" maxLength="9" />
        </label>
        <div className="mensaje-error" aria-live="polite">{errors.dni || ''}</div>
        <label htmlFor="register-password">
          Contrasena
          <input id="register-password" name="password" type="password" value={values.password} onChange={(event) => updateField('password', event.target.value)} placeholder="Ejemplo: PacePal#2026" />
        </label>
        <div className="mensaje-error" aria-live="polite">{errors.password || ''}</div>
        <label htmlFor="register-confirm-password">
          Confirmar contrasena
          <input id="register-confirm-password" name="confirmPassword" type="password" value={values.confirmPassword} onChange={(event) => updateField('confirmPassword', event.target.value)} placeholder="Repite la contrasena" />
        </label>
        <div className="mensaje-error" aria-live="polite">{errors.confirmPassword || ''}</div>
        <div className="form-grid">
          <label htmlFor="register-sexo">
            Sexo
            <select id="register-sexo" name="sexo" value={values.sexo} onChange={(event) => updateField('sexo', event.target.value)}>
              <option value="">Selecciona una opcion</option>
              <option value="mujer">Mujer</option>
              <option value="hombre">Hombre</option>
            </select>
          </label>
          <label htmlFor="register-fecha">
            Fecha de nacimiento
            <input id="register-fecha" name="fechaNacimiento" type="date" value={values.fecha_nacimiento} onChange={(event) => updateField('fecha_nacimiento', event.target.value)} />
          </label>
        </div>
        <div className="form-grid">
          <label htmlFor="register-direccion">
            Direccion
            <input id="register-direccion" name="direccion" value={values.direccion} onChange={(event) => updateField('direccion', event.target.value)} placeholder="Ejemplo: Calle Mayor 15" />
          </label>
          <label htmlFor="register-pais">
            Pais
            <select id="register-pais" name="pais" value={values.pais} onChange={(event) => updateField('pais', event.target.value)}>
              <option value="">Selecciona un pais</option>
              <option value="es">Espana</option>
              <option value="pt">Portugal</option>
              <option value="fr">Francia</option>
              <option value="it">Italia</option>
              <option value="otro">Otro</option>
            </select>
          </label>
        </div>
        <div className="mensaje-error" aria-live="polite">{errors.direccion || ''}</div>
        {showCard ? (
          <label htmlFor="register-tarjeta">
            Tarjeta
            <input
              id="register-tarjeta"
              name="tarjetaCredito"
              value={values.tarjeta}
              onChange={(event) => updateField('tarjeta', event.target.value.replace(/\D/g, '').slice(0, 19))}
              placeholder="1234 5678 9012 3456"
            />
            <span className="mensaje-error">{errors.tarjeta || ''}</span>
          </label>
        ) : null}
        <label className="contenedor-checkbox">
          <input
            type="checkbox"
            checked={values.notificaciones}
            onChange={(event) => updateField('notificaciones', event.target.checked)}
          />
          Notificaciones
        </label>
        <label className="contenedor-checkbox">
          <input
            type="checkbox"
            checked={values.revista}
            onChange={(event) => updateField('revista', event.target.checked)}
          />
          Revista digital
        </label>
        <button type="submit" className="boton boton--primario">
          Crear cuenta
        </button>
        <div className="mensaje-resultado" aria-live="polite">{localMessage || sessionMessage}</div>
      </form>
    </section>
  );
}

export default RegisterForm;
