// ===================================================================
// FORMULARIO DE REGISTRO — coordina los campos y manda al API
// Toda la lógica de validación vive en validaciones.js
// ===================================================================

// Si ya hay sesion activa, redirigir a perfil.
(async function () {
    try {
        var res = await fetch('../../src/api/index.php/api/session', {
            method: 'GET',
            credentials: 'include',
            headers: { Accept: 'application/json' },
        });
        var data = await res.json();
        if (data && data.logged === true) {
            window.location.href = '../usuario/perfil.php';
            return;
        }
    } catch (_e) {
        // Si falla, seguimos mostrando el formulario.
    }
})();

const formRegistro = document.getElementById('formRegistro');
const inputNombre = document.getElementById('nombreApellidos');
const inputEmail = document.getElementById('email');
const inputDNI = document.getElementById('dni');
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirmPassword');
const inputFechaNacimiento = document.getElementById('fechaNacimiento');
const inputDireccion = document.getElementById('direccion');
const inputPais = document.getElementById('pais');
const inputTarjeta = document.getElementById('tarjetaCredito');
const contenedorTarjeta = document.getElementById('contenedor-tarjeta');
const mensajeRegistro = document.getElementById('mensajeRegistro');

function mostrarMensajeRegistro(texto, tipo) {
    if (!mensajeRegistro) {
        return;
    }

    mensajeRegistro.textContent = texto;
    mensajeRegistro.className = tipo ? `mensaje-formulario mensaje-formulario--${tipo}` : 'mensaje-resultado';
}

// La tarjeta solo se muestra si dirección y país tienen contenido.
function actualizarVisibilidadTarjeta() {
    if (!contenedorTarjeta || !inputDireccion || !inputPais) {
        return;
    }

    const direccionCompleta = limpiarTexto(inputDireccion.value) !== '';
    const paisCompleto = limpiarTexto(inputPais.value) !== '';
    contenedorTarjeta.style.display = direccionCompleta && paisCompleto ? 'block' : 'none';

    if (contenedorTarjeta.style.display === 'none' && inputTarjeta) {
        inputTarjeta.value = '';
        mostrarErrorCampo(inputTarjeta, '');
    }
}

function validarRelacionDireccionPais() {
    const direccion = limpiarTexto(inputDireccion?.value || '');
    const pais = limpiarTexto(inputPais?.value || '');

    if (direccion && !pais) {
        mostrarErrorCampo(inputPais, 'Si indicas dirección, debes seleccionar un país.');
        return false;
    }

    if (!direccion && pais) {
        mostrarErrorCampo(inputDireccion, 'Si seleccionas país, debes indicar una dirección.');
        return false;
    }

    if (inputDireccion) {
        mostrarErrorCampo(inputDireccion, '');
    }

    if (inputPais) {
        mostrarErrorCampo(inputPais, '');
    }

    return true;
}

function validarCampoEnTiempoReal(input) {
    if (!input) {
        return;
    }

    function ejecutarValidacionSegunCampo() {
        switch (input.id) {
            case 'nombreApellidos':
                validarNombre(input.value, input);
                break;
            case 'email':
                validarEmail(input.value, input);
                break;
            case 'dni':
                validarDNI(input.value, input);
                break;
            case 'password':
                validarPassword(input.value, input);
                if (inputConfirmPassword && limpiarTexto(inputConfirmPassword.value)) {
                    validarConfirmarPassword(input.value, inputConfirmPassword.value, inputConfirmPassword);
                }
                break;
            case 'confirmPassword':
                validarConfirmarPassword(inputPassword?.value || '', input.value, input);
                break;
            case 'fechaNacimiento':
                validarFechaNacimiento(input.value, input);
                break;
            case 'tarjetaCredito':
                if (contenedorTarjeta && contenedorTarjeta.style.display !== 'none') {
                    validarTarjetaCredito(input.value, input);
                } else {
                    mostrarErrorCampo(input, '');
                }
                break;
            default:
                break;
        }
    }

    // Al salir del campo (blur) muestro error si lo hay.
    input.addEventListener('blur', function () {
        ejecutarValidacionSegunCampo();
    });

    // Mientras escribe, valido también para ir pintando en verde/rojo al momento.
    input.addEventListener('input', function () {
        if (limpiarTexto(input.value) === '') {
            mostrarErrorCampo(input, '');
            return;
        }
        ejecutarValidacionSegunCampo();
    });
}

[inputNombre, inputEmail, inputDNI, inputPassword, inputConfirmPassword, inputFechaNacimiento, inputTarjeta]
    .forEach(validarCampoEnTiempoReal);

if (inputDNI) {
    inputDNI.addEventListener('input', function () {
        inputDNI.value = inputDNI.value.toUpperCase().replace(/\s/g, '');
    });
}

if (inputTarjeta) {
    inputTarjeta.addEventListener('input', function () {
        const soloDigitos = inputTarjeta.value.replace(/\D/g, '').slice(0, 19);
        inputTarjeta.value = soloDigitos.replace(/(.{4})/g, '$1 ').trim();
    });
}

if (inputDireccion) {
    inputDireccion.addEventListener('input', function () {
        actualizarVisibilidadTarjeta();
        validarRelacionDireccionPais();
    });

    inputDireccion.addEventListener('blur', function () {
        validarRelacionDireccionPais();
    });
}

if (inputPais) {
    inputPais.addEventListener('change', function () {
        actualizarVisibilidadTarjeta();
        validarRelacionDireccionPais();
    });

    inputPais.addEventListener('blur', function () {
        validarRelacionDireccionPais();
    });
}

actualizarVisibilidadTarjeta();

if (formRegistro) {
    formRegistro.addEventListener('submit', async function (evento) {
        evento.preventDefault();

        limpiarErroresFormulario(formRegistro);
        mostrarMensajeRegistro('', '');

        let formularioValido = true;

        // Campos obligatorios
        formularioValido = validarNombre(inputNombre?.value || '', inputNombre) && formularioValido;
        formularioValido = validarEmail(inputEmail?.value || '', inputEmail) && formularioValido;
        if (inputDNI) {
            inputDNI.value = normalizarDni(inputDNI.value);
        }
        formularioValido = validarDNI(inputDNI?.value || '', inputDNI) && formularioValido;
        formularioValido = validarPassword(inputPassword?.value || '', inputPassword) && formularioValido;
        formularioValido = validarConfirmarPassword(
            inputPassword?.value || '',
            inputConfirmPassword?.value || '',
            inputConfirmPassword
        ) && formularioValido;

        // Campo opcional
        formularioValido = validarFechaNacimiento(inputFechaNacimiento?.value || '', inputFechaNacimiento) && formularioValido;

        // Regla de consistencia: dirección y país deben ir juntos.
        formularioValido = validarRelacionDireccionPais() && formularioValido;

        // Tarjeta: solo valido si el campo está visible.
        const tarjetaVisible = Boolean(contenedorTarjeta && contenedorTarjeta.style.display !== 'none');
        if (tarjetaVisible) {
            formularioValido = validarTarjetaCredito(inputTarjeta?.value || '', inputTarjeta) && formularioValido;
        }

        if (!formularioValido) {
            mostrarMensajeRegistro('Revisa los campos marcados para continuar.', 'error');
            return;
        }

        var payload = {
            nombre: limpiarTexto(inputNombre?.value || ''),
            email: limpiarTexto(inputEmail?.value || ''),
            dni: limpiarTexto(inputDNI?.value || ''),
            password: inputPassword?.value || '',
        };

        var sexoSelect = document.getElementById('sexo');
        if (sexoSelect && sexoSelect.value) {
            payload.sexo = sexoSelect.value;
        }
        if (inputFechaNacimiento && inputFechaNacimiento.value) {
            payload.fecha_nacimiento = inputFechaNacimiento.value;
        }
        if (inputDireccion && limpiarTexto(inputDireccion.value)) {
            payload.direccion = limpiarTexto(inputDireccion.value);
        }
        if (inputPais && inputPais.value) {
            payload.pais = inputPais.value;
        }
        if (tarjetaVisible && inputTarjeta && limpiarTexto(inputTarjeta.value)) {
            payload.tarjeta = limpiarTexto(inputTarjeta.value);
        }

        var notifCheckbox = document.getElementById('notificaciones');
        if (notifCheckbox && notifCheckbox.checked) {
            payload.notificaciones = true;
        }
        var revistaCheckbox = document.getElementById('revistaDigital');
        if (revistaCheckbox && revistaCheckbox.checked) {
            payload.revista = true;
        }

        try {
            mostrarMensajeRegistro('Registrando usuario...', 'ok');

            var response = await fetch('../../src/api/index.php/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(payload),
            });

            var result = await response.json().catch(function () {
                return {};
            });

            if (!response.ok || result.status !== 'ok') {
                var msg = result.message || 'No se pudo completar el registro.';
                mostrarMensajeRegistro(msg, 'error');
                return;
            }

            mostrarMensajeRegistro('Registro correcto. Redirigiendo a login...', 'ok');
            setTimeout(function () {
                window.location.href = 'login.php';
            }, 1500);
        } catch (_error) {
            mostrarMensajeRegistro('Error de conexión con el servidor.', 'error');
        }
    });
}
