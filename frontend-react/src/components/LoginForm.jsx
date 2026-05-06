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
    <section className="panel-card" aria-labelledby="login-form-title">
      <div className="panel-card__header">
        <h2 id="login-form-title">Login</h2>
        <span className={`status-pill status-pill--${session.status === 'error' ? 'error' : 'ok'}`}>
          {session.status}
        </span>
      </div>
      <p>{session.message}</p>
      <form className="form-shell" onSubmit={handleSubmit} noValidate>
        <label>
          Email
          <input
            className="text-input"
            type="email"
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
          {errors.email ? <span className="field-error">{errors.email}</span> : null}
        </label>
        <label>
          Contrasena
          <input
            className="text-input"
            type="password"
            value={values.password}
            onChange={(event) => updateField('password', event.target.value)}
          />
          {errors.password ? <span className="field-error">{errors.password}</span> : null}
        </label>
        <button type="submit" className="primary-button">
          Iniciar sesion
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
