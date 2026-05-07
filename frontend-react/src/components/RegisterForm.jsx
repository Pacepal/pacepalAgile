import { useMemo, useState } from 'react';

const initialValues = {
  nombreApellidos: '',
  email: '',
  dni: '',
  password: '',
  confirmPassword: '',
  sexo: '',
  fechaNacimiento: '',
  direccion: '',
  pais: '',
  tarjetaCredito: '',
  notificaciones: false,
  revistaDigital: false,
};

function limpiarTexto(value) {
  return (value ?? '').toString().trim();
}

function validarNombre(value) {
  const nombre = limpiarTexto(value);
  if (!nombre) return 'El nombre y apellidos es obligatorio.';
  if (nombre.length < 2) return 'El nombre debe tener al menos 2 caracteres.';
  if (nombre.length > 50) return 'El nombre no puede superar los 50 caracteres.';
  if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(nombre)) return 'El nombre solo puede contener letras y espacios.';
  return '';
}

function validarEmail(value) {
  const email = limpiarTexto(value);
  if (!email) return 'El correo electrónico es obligatorio.';
  if (email.length > 100) return 'El correo no puede superar los 100 caracteres.';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return 'Introduce un correo electrónico válido.';
  return '';
}

function normalizarDni(value) {
  return limpiarTexto(value).toUpperCase();
}

function validarDNI(value) {
  const dni = normalizarDni(value);
  if (!dni) return 'El DNI es obligatorio.';
  if (!/^\d{8}[A-Z]$/.test(dni)) return 'El DNI debe tener 8 números y una letra.';
  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  const numero = parseInt(dni.slice(0, 8), 10);
  if (dni.slice(8) !== letras[numero % 23]) return 'La letra del DNI no es correcta.';
  return '';
}

function validarPassword(value) {
  const password = (value ?? '').toString();
  if (password.length < 8 || password.length > 32) return 'La contraseña debe tener entre 8 y 32 caracteres.';
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
    return 'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.';
  }
  return '';
}

function validarConfirmarPassword(password, confirmPassword) {
  if (!confirmPassword) return 'Debes confirmar la contraseña.';
  if (password !== confirmPassword) return 'Las contraseñas no coinciden.';
  return '';
}

function validarFechaNacimiento(value) {
  const fechaTexto = limpiarTexto(value);
  if (!fechaTexto) return '';
  const fecha = new Date(fechaTexto);
  if (Number.isNaN(fecha.getTime())) return 'La fecha de nacimiento no es válida.';
  const hoy = new Date();
  let edad = hoy.getFullYear() - fecha.getFullYear();
  const mes = hoy.getMonth() - fecha.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) edad -= 1;
  return edad < 16 ? 'Debes tener al menos 16 años para registrarte.' : '';
}

function validarTarjetaCredito(value) {
  const tarjeta = limpiarTexto(value).replace(/\s+/g, '');
  if (!tarjeta || !/^\d{13,19}$/.test(tarjeta)) return 'Introduce un número de tarjeta válido.';
  return '';
}

function fieldClass(value, error) {
  if (error) return 'campo-invalido';
  return limpiarTexto(value) ? 'campo-valido' : '';
}

function RegisterForm({ onRegister, sessionMessage, onNavigate }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [localMessage, setLocalMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const showCard = useMemo(
    () => limpiarTexto(values.direccion) !== '' && limpiarTexto(values.pais) !== '',
    [values.direccion, values.pais]
  );

  function updateField(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setLocalMessage('');
    setMessageType('');
  }

  function validateField(field, value = values[field]) {
    let error = '';

    if (field === 'nombreApellidos') error = validarNombre(value);
    if (field === 'email') error = validarEmail(value);
    if (field === 'dni') error = validarDNI(value);
    if (field === 'password') error = validarPassword(value);
    if (field === 'confirmPassword') error = validarConfirmarPassword(values.password, value);
    if (field === 'fechaNacimiento') error = validarFechaNacimiento(value);
    if (field === 'tarjetaCredito' && showCard) error = validarTarjetaCredito(value);

    setErrors((current) => ({ ...current, [field]: error }));
    return error;
  }

  function validarRelacionDireccionPais(nextValues = values) {
    const direccion = limpiarTexto(nextValues.direccion);
    const pais = limpiarTexto(nextValues.pais);

    if (direccion && !pais) return { pais: 'Si indicas dirección, debes seleccionar un país.' };
    if (!direccion && pais) return { direccion: 'Si seleccionas país, debes indicar una dirección.' };
    return {};
  }

  function validateAll() {
    const nextErrors = {
      nombreApellidos: validarNombre(values.nombreApellidos),
      email: validarEmail(values.email),
      dni: validarDNI(values.dni),
      password: validarPassword(values.password),
      confirmPassword: validarConfirmarPassword(values.password, values.confirmPassword),
      fechaNacimiento: validarFechaNacimiento(values.fechaNacimiento),
      ...validarRelacionDireccionPais(),
    };

    if (showCard) {
      nextErrors.tarjetaCredito = validarTarjetaCredito(values.tarjetaCredito);
    }

    Object.keys(nextErrors).forEach((key) => {
      if (!nextErrors[key]) delete nextErrors[key];
    });

    setErrors(nextErrors);
    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const dni = normalizarDni(values.dni);
    setValues((current) => ({ ...current, dni }));

    const nextErrors = validateAll();
    if (Object.keys(nextErrors).length > 0) {
      setLocalMessage('Revisa los campos marcados para continuar.');
      setMessageType('error');
      return;
    }

    const payload = {
      nombre: limpiarTexto(values.nombreApellidos),
      email: limpiarTexto(values.email),
      dni,
      password: values.password,
    };

    if (values.sexo) payload.sexo = values.sexo;
    if (values.fechaNacimiento) payload.fecha_nacimiento = values.fechaNacimiento;
    if (limpiarTexto(values.direccion)) payload.direccion = limpiarTexto(values.direccion);
    if (values.pais) payload.pais = values.pais;
    if (showCard && limpiarTexto(values.tarjetaCredito)) payload.tarjeta = limpiarTexto(values.tarjetaCredito);
    if (values.notificaciones) payload.notificaciones = true;
    if (values.revistaDigital) payload.revista = true;

    setLocalMessage('Registrando usuario...');
    setMessageType('ok');
    const result = await onRegister(payload);
    const ok = typeof result === 'object' ? !!result.ok : !!result;
    const autoLogged = typeof result === 'object' ? !!result.autoLogged : false;

    setLocalMessage('');

    if (ok) {
      setValues(initialValues);
      setMessageType('ok');

      if (autoLogged) {
        onNavigate('perfil');
      } else {
        setLocalMessage('Registro correcto. Redirigiendo a login...');
        setTimeout(() => onNavigate('login'), 1500);
      }
    } else {
      setMessageType('error');
    }
  }

  function handleLogin(event) {
    event.preventDefault();
    onNavigate('login');
  }

  const resultMessage = localMessage || sessionMessage;

  return (
    <section className="tarjeta-formulario" aria-labelledby="tituloRegistro">
      <h1 id="tituloRegistro">Registro de usuario</h1>

      <form id="formRegistro" onSubmit={handleSubmit} noValidate>
        <label htmlFor="nombreApellidos">Nombre y apellidos</label>
        <input
          type="text"
          id="nombreApellidos"
          name="nombreApellidos"
          required
          autoComplete="name"
          placeholder="Ejemplo: Pablo Sevillano"
          value={values.nombreApellidos}
          onBlur={() => validateField('nombreApellidos')}
          onChange={(event) => updateField('nombreApellidos', event.target.value)}
          className={fieldClass(values.nombreApellidos, errors.nombreApellidos)}
        />
        <div className="mensaje-error" id="error-nombreApellidos" aria-live="polite">{errors.nombreApellidos || ''}</div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          placeholder="ejemplo@email.com"
          value={values.email}
          onBlur={() => validateField('email')}
          onChange={(event) => updateField('email', event.target.value)}
          className={fieldClass(values.email, errors.email)}
        />
        <div className="mensaje-error" id="error-email" aria-live="polite">{errors.email || ''}</div>

        <label htmlFor="dni">DNI</label>
        <input
          type="text"
          id="dni"
          name="dni"
          required
          aria-required="true"
          minLength="9"
          maxLength="9"
          pattern="^[0-9]{8}[A-Za-z]$"
          title="Introduce un DNI válido (8 números y una letra)."
          autoComplete="off"
          placeholder="12345678Z"
          value={values.dni}
          onBlur={() => validateField('dni')}
          onChange={(event) => updateField('dni', event.target.value.toUpperCase().replace(/\s/g, ''))}
          className={fieldClass(values.dni, errors.dni)}
        />
        <div className="mensaje-error" id="error-dni" aria-live="polite">{errors.dni || ''}</div>

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          autoComplete="new-password"
          placeholder="Ejemplo: PacePal#2026"
          value={values.password}
          onBlur={() => validateField('password')}
          onChange={(event) => updateField('password', event.target.value)}
          className={fieldClass(values.password, errors.password)}
        />
        <div className="mensaje-error" id="error-password" aria-live="polite">{errors.password || ''}</div>

        <label htmlFor="confirmPassword">Confirmar contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          autoComplete="new-password"
          placeholder="Repite la contraseña"
          value={values.confirmPassword}
          onBlur={() => validateField('confirmPassword')}
          onChange={(event) => updateField('confirmPassword', event.target.value)}
          className={fieldClass(values.confirmPassword, errors.confirmPassword)}
        />
        <div className="mensaje-error" id="error-confirmPassword" aria-live="polite">{errors.confirmPassword || ''}</div>

        <label htmlFor="sexo">Sexo</label>
        <select id="sexo" name="sexo" value={values.sexo} onChange={(event) => updateField('sexo', event.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="mujer">Mujer</option>
          <option value="hombre">Hombre</option>
        </select>
        <div className="mensaje-error" id="error-sexo" aria-live="polite"></div>

        <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
        <input
          type="date"
          id="fechaNacimiento"
          name="fechaNacimiento"
          value={values.fechaNacimiento}
          onBlur={() => validateField('fechaNacimiento')}
          onChange={(event) => updateField('fechaNacimiento', event.target.value)}
          className={fieldClass(values.fechaNacimiento, errors.fechaNacimiento)}
        />
        <div className="mensaje-error" id="error-fechaNacimiento" aria-live="polite">{errors.fechaNacimiento || ''}</div>

        <label htmlFor="direccion">Dirección</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          autoComplete="street-address"
          placeholder="Ejemplo: Calle Mayor 15"
          value={values.direccion}
          onBlur={() => setErrors((current) => ({ ...current, ...validarRelacionDireccionPais() }))}
          onChange={(event) => updateField('direccion', event.target.value)}
          className={fieldClass(values.direccion, errors.direccion)}
        />
        <div className="mensaje-error" id="error-direccion" aria-live="polite">{errors.direccion || ''}</div>

        <label htmlFor="pais">País</label>
        <select
          id="pais"
          name="pais"
          value={values.pais}
          onBlur={() => setErrors((current) => ({ ...current, ...validarRelacionDireccionPais() }))}
          onChange={(event) => updateField('pais', event.target.value)}
          className={fieldClass(values.pais, errors.pais)}
        >
          <option value="">Selecciona un país</option>
          <option value="es">España</option>
          <option value="pt">Portugal</option>
          <option value="fr">Francia</option>
          <option value="it">Italia</option>
          <option value="otro">Otro</option>
        </select>
        <div className="mensaje-error" id="error-pais" aria-live="polite">{errors.pais || ''}</div>

        <div id="contenedor-tarjeta" style={{ display: showCard ? 'block' : 'none' }}>
          <label htmlFor="tarjetaCredito">Tarjeta de crédito</label>
          <input
            type="text"
            id="tarjetaCredito"
            name="tarjetaCredito"
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="1234 5678 9012 3456"
            value={values.tarjetaCredito}
            onBlur={() => validateField('tarjetaCredito')}
            onChange={(event) => {
              const onlyDigits = event.target.value.replace(/\D/g, '').slice(0, 19);
              updateField('tarjetaCredito', onlyDigits.replace(/(.{4})/g, '$1 ').trim());
            }}
            className={fieldClass(values.tarjetaCredito, errors.tarjetaCredito)}
          />
          <div className="mensaje-error" id="error-tarjetaCredito" aria-live="polite">{errors.tarjetaCredito || ''}</div>
        </div>

        <div className="contenedor-checkbox">
          <input type="checkbox" id="notificaciones" name="notificaciones" checked={values.notificaciones} onChange={(event) => updateField('notificaciones', event.target.checked)} />
          <label htmlFor="notificaciones">Recibir notificaciones</label>
        </div>
        <div className="mensaje-error" id="error-notificaciones" aria-live="polite"></div>

        <div className="contenedor-checkbox">
          <input type="checkbox" id="revistaDigital" name="revistaDigital" checked={values.revistaDigital} onChange={(event) => updateField('revistaDigital', event.target.checked)} />
          <label htmlFor="revistaDigital">Recibir revista digital</label>
        </div>
        <div className="mensaje-error" id="error-revistaDigital" aria-live="polite"></div>

        <button type="submit" className="boton boton--primario">
          Registrarse
        </button>
        <div
          id="mensajeRegistro"
          className={resultMessage ? `mensaje-formulario mensaje-formulario--${messageType || 'error'}` : 'mensaje-resultado'}
          aria-live="polite"
        >
          {resultMessage}
        </div>
      </form>

      <p className="enlace-alterno">
        ¿Ya tienes cuenta? <a href="#login" onClick={handleLogin}>Iniciar sesión</a>
      </p>
    </section>
  );
}

export default RegisterForm;
