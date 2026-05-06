import { useState } from 'react';

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function LoginForm({ session }) {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  function updateField(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    if (!validateEmail(values.email)) {
      nextErrors.email = 'Introduce un email valido.';
    }
    if (!values.password.trim()) {
      nextErrors.password = 'La contrasena es obligatoria.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    await session.login({
      email: values.email.trim(),
      password: values.password,
    });
  }

  return (
    <section className="tarjeta-formulario" aria-labelledby="login-form-title">
      <h1 id="login-form-title">Iniciar sesion</h1>
      <form id="formLogin" onSubmit={handleSubmit} noValidate>
        <label htmlFor="login-email">
          Email
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="ejemplo@email.com"
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
        </label>
        <div className="mensaje-error" aria-live="polite">{errors.email || ''}</div>
        <label htmlFor="login-password">
          Contrasena
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Introduce tu contrasena"
            value={values.password}
            onChange={(event) => updateField('password', event.target.value)}
          />
        </label>
        <div className="mensaje-error" aria-live="polite">{errors.password || ''}</div>
        <button type="submit" className="boton boton--primario">
          Iniciar sesion
        </button>
        <div className="mensaje-resultado" aria-live="polite">{session.message}</div>
      </form>
      <div className="credenciales-prueba">
        <p>Para probar la aplicacion, puedes usar estas credenciales:</p>
        <ul>
          <li>Usuario: admin@pacepal.com</li>
          <li>Contrasena: Admin1234*</li>
        </ul>
      </div>
    </section>
  );
}

export default LoginForm;
