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
    <section className="panel-card" aria-labelledby="register-form-title">
      <div className="panel-card__header">
        <h2 id="register-form-title">Registro</h2>
        <span className="status-pill status-pill--ok">validado</span>
      </div>
      <p>{localMessage || sessionMessage}</p>
      <form className="form-shell" onSubmit={handleSubmit} noValidate>
        <label>
          Nombre y apellidos
          <input className="text-input" value={values.nombre} onChange={(event) => updateField('nombre', event.target.value)} />
          {errors.nombre ? <span className="field-error">{errors.nombre}</span> : null}
        </label>
        <label>
          Email
          <input className="text-input" type="email" value={values.email} onChange={(event) => updateField('email', event.target.value)} />
          {errors.email ? <span className="field-error">{errors.email}</span> : null}
        </label>
        <label>
          DNI
          <input className="text-input" value={values.dni} onChange={(event) => updateField('dni', event.target.value.toUpperCase().replace(/\s/g, ''))} />
          {errors.dni ? <span className="field-error">{errors.dni}</span> : null}
        </label>
        <label>
          Contrasena
          <input className="text-input" type="password" value={values.password} onChange={(event) => updateField('password', event.target.value)} />
          {errors.password ? <span className="field-error">{errors.password}</span> : null}
        </label>
        <label>
          Confirmar contrasena
          <input className="text-input" type="password" value={values.confirmPassword} onChange={(event) => updateField('confirmPassword', event.target.value)} />
          {errors.confirmPassword ? <span className="field-error">{errors.confirmPassword}</span> : null}
        </label>
        <div className="form-grid">
          <label>
            Sexo
            <select className="text-input" value={values.sexo} onChange={(event) => updateField('sexo', event.target.value)}>
              <option value="">No indicado</option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
              <option value="otro">Otro</option>
            </select>
          </label>
          <label>
            Fecha de nacimiento
            <input className="text-input" type="date" value={values.fecha_nacimiento} onChange={(event) => updateField('fecha_nacimiento', event.target.value)} />
          </label>
        </div>
        <div className="form-grid">
          <label>
            Direccion
            <input className="text-input" value={values.direccion} onChange={(event) => updateField('direccion', event.target.value)} />
            {errors.direccion ? <span className="field-error">{errors.direccion}</span> : null}
          </label>
          <label>
            Pais
            <input className="text-input" value={values.pais} onChange={(event) => updateField('pais', event.target.value)} />
          </label>
        </div>
        {showCard ? (
          <label>
            Tarjeta
            <input
              className="text-input"
              value={values.tarjeta}
              onChange={(event) => updateField('tarjeta', event.target.value.replace(/\D/g, '').slice(0, 19))}
            />
            {errors.tarjeta ? <span className="field-error">{errors.tarjeta}</span> : null}
          </label>
        ) : null}
        <label className="check-field">
          <input
            type="checkbox"
            checked={values.notificaciones}
            onChange={(event) => updateField('notificaciones', event.target.checked)}
          />
          Notificaciones
        </label>
        <label className="check-field">
          <input
            type="checkbox"
            checked={values.revista}
            onChange={(event) => updateField('revista', event.target.checked)}
          />
          Revista digital
        </label>
        <button type="submit" className="primary-button">
          Crear cuenta
        </button>
      </form>
    </section>
  );
}

export default RegisterForm;
