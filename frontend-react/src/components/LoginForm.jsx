import { useState } from 'react';

function limpiarTexto(value) {
  return (value ?? '').toString().trim();
}

function validarEmail(value) {
  const email = limpiarTexto(value);

  if (!email) {
    return 'El correo electrónico es obligatorio.';
  }

  if (email.length > 100) {
    return 'El correo no puede superar los 100 caracteres.';
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return 'Introduce un correo electrónico válido.';
  }

  return '';
}

function LoginForm({ session, onNavigate }) {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [localMessage, setLocalMessage] = useState('');

  function setField(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setLocalMessage('');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {
      email: validarEmail(values.email),
      password: limpiarTexto(values.password) ? '' : 'La contraseña es obligatoria.',
    };

    setErrors(nextErrors);

    if (nextErrors.email || nextErrors.password) {
      setLocalMessage('Revisa los errores del formulario.');
      return;
    }

    setLocalMessage('Verificando credenciales...');
    const ok = await session.login({
      email: limpiarTexto(values.email),
      password: values.password,
    });

    if (ok) {
      onNavigate('perfil');
    }
  }

  function handleRegister(event) {
    event.preventDefault();
    onNavigate('registro');
  }

  return (
    <section className="tarjeta-formulario" aria-labelledby="tituloLogin">
      <h1 id="tituloLogin">Iniciar sesión</h1>

      <form id="formLogin" onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          placeholder="ejemplo@email.com"
          value={values.email}
          onBlur={() => setErrors((current) => ({ ...current, email: validarEmail(values.email) }))}
          onChange={(event) => setField('email', event.target.value)}
          className={errors.email ? 'campo-invalido' : limpiarTexto(values.email) ? 'campo-valido' : ''}
        />
        <div className="mensaje-error" id="error-email" aria-live="polite">{errors.email || ''}</div>

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          autoComplete="current-password"
          placeholder="Introduce tu contraseña"
          value={values.password}
          onBlur={() => setErrors((current) => ({ ...current, password: limpiarTexto(values.password) ? '' : 'La contraseña es obligatoria.' }))}
          onChange={(event) => setField('password', event.target.value)}
          className={errors.password ? 'campo-invalido' : limpiarTexto(values.password) ? 'campo-valido' : ''}
        />
        <div className="mensaje-error" id="error-password" aria-live="polite">{errors.password || ''}</div>

        <button type="submit" className="boton boton--primario">
          Iniciar sesión
        </button>

        <div
          id="mensajeLogin"
          className={(localMessage || session.message) ? `mensaje-formulario mensaje-formulario--${errors.email || errors.password || session.message.includes('incorrect') || session.message.includes('No se') ? 'error' : 'ok'}` : 'mensaje-resultado'}
          aria-live="polite"
        >
          {localMessage || session.message}
        </div>
      </form>

      <p className="enlace-alterno">
        ¿No tienes cuenta? <a href="#registro" onClick={handleRegister}>Crear cuenta</a>
      </p>

      <div className="credenciales-prueba">
        <br />
        <p>Para probar la aplicación, puedes usar las siguientes credenciales:</p>
        <ul>
          <li>Usuario: admin@pacepal.com</li>
          <li>Contraseña: Admin1234*</li>
        </ul>
      </div>
    </section>
  );
}

export default LoginForm;
