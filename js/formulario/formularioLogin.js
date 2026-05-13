// ===================================================================
// FORMULARIO DE LOGIN — usa funciones de validaciones.js
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

const formLogin = document.getElementById('formLogin');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const mensajeLogin = document.getElementById('mensajeLogin');

// fallback para entornos sin reescritura de URL
async function loginApi(payload) {
    const primaryResponse = await fetch('../../src/api/index.php/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(payload),
    });

    if (primaryResponse.status !== 404) {
        return primaryResponse;
    }

    // Fallback para entornos sin reescritura de URL.
    return fetch('../../api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(payload),
    });
}

function mostrarMensajeLogin(texto, tipo) {
    if (!mensajeLogin) {
        return;
    }

    mensajeLogin.textContent = texto;
    mensajeLogin.className = tipo ? `mensaje-formulario mensaje-formulario--${tipo}` : 'mensaje-resultado';
}

if (inputEmail) {
    inputEmail.addEventListener('blur', function () {
        validarEmail(inputEmail.value, inputEmail);
    });

    inputEmail.addEventListener('input', function () {
        if (limpiarTexto(inputEmail.value) === '') {
            mostrarErrorCampo(inputEmail, '');
            return;
        }
        validarEmail(inputEmail.value, inputEmail);
    });
}

if (inputPassword) {
    inputPassword.addEventListener('blur', function () {
        if (!limpiarTexto(inputPassword.value)) {
            mostrarErrorCampo(inputPassword, 'La contraseña es obligatoria.');
            return;
        }
        mostrarErrorCampo(inputPassword, '');
    });

    inputPassword.addEventListener('input', function () {
        if (!limpiarTexto(inputPassword.value)) {
            mostrarErrorCampo(inputPassword, '');
            return;
        }
        // En login solo pedimos que no esté vacía.
        mostrarErrorCampo(inputPassword, '');
    });
}

if (formLogin) {
    formLogin.addEventListener('submit', async function (evento) {
        evento.preventDefault();

        limpiarErroresFormulario(formLogin);
        mostrarMensajeLogin('', '');

        let formularioValido = true;

        formularioValido = validarEmail(inputEmail?.value || '', inputEmail) && formularioValido;

        if (!limpiarTexto(inputPassword?.value || '')) {
            mostrarErrorCampo(inputPassword, 'La contraseña es obligatoria.');
            formularioValido = false;
        }

        if (!formularioValido) {
            mostrarMensajeLogin('Revisa los errores del formulario.', 'error');
            return;
        }

        try {
            mostrarMensajeLogin('Verificando credenciales...', 'ok');

            const response = await loginApi({
                email: limpiarTexto(inputEmail?.value || ''),
                password: inputPassword?.value || '',
            });

            const result = await response.json().catch(function () {
                return {};
            });

            if (!response.ok || result.status !== 'ok') {
                const message = result.message || 'No se pudo iniciar sesión.';
                mostrarMensajeLogin(message, 'error');
                return;
            }

            mostrarMensajeLogin('Login correcto. Redirigiendo...', 'ok');
            window.location.href = '../usuario/perfil.php';
        } catch (_error) {
            mostrarMensajeLogin('Error de conexión con el servidor.', 'error');
        }
    });
}
