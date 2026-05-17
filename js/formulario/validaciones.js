// Validaciones compartidas por los formularios clásicos de PacePal.

function limpiarTexto(valor) {
    return (valor ?? '').toString().trim();
}

// Compatibilidad con formularios que usan id de error o un mensaje contiguo al campo.
function obtenerContenedorError(input) {
    if (!input || !input.id) {
        return null;
    }

    const porId = document.getElementById(`error-${input.id}`);
    if (porId) {
        return porId;
    }

    const hermano = input.nextElementSibling;
    if (hermano && hermano.classList.contains('mensaje-error')) {
        return hermano;
    }

    return null;
}

function mostrarErrorCampo(input, mensaje) {
    const contenedor = obtenerContenedorError(input);
    if (contenedor) {
        contenedor.textContent = mensaje || '';
    }

    // El estado visual se sincroniza con el mensaje de validación.
    if (!input) {
        return;
    }

    input.classList.remove('campo-valido', 'campo-invalido');

    if (mensaje) {
        input.classList.add('campo-invalido');
        return;
    }

    const valorLimpio = limpiarTexto(input.value);
    if (valorLimpio !== '') {
        input.classList.add('campo-valido');
    }
}

// Nombre y apellidos
function validarNombre(valor, input) {
    const nombre = limpiarTexto(valor);

    if (!nombre) {
        mostrarErrorCampo(input, 'El nombre y apellidos es obligatorio.');
        return false;
    }

    if (nombre.length < 2) {
        mostrarErrorCampo(input, 'El nombre debe tener al menos 2 caracteres.');
        return false;
    }

    if (nombre.length > 50) {
        mostrarErrorCampo(input, 'El nombre no puede superar los 50 caracteres.');
        return false;
    }

    // Acepta nombres con acentos y ñ, sin números ni símbolos.
    if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(nombre)) {
        mostrarErrorCampo(input, 'El nombre solo puede contener letras y espacios.');
        return false;
    }

    mostrarErrorCampo(input, '');
    return true;
}

// Email
function validarEmail(valor, input) {
    const email = limpiarTexto(valor);

    if (!email) {
        mostrarErrorCampo(input, 'El correo electrónico es obligatorio.');
        return false;
    }

    if (email.length > 100) {
        mostrarErrorCampo(input, 'El correo no puede superar los 100 caracteres.');
        return false;
    }

    // Validación sintáctica básica; el backend comprueba unicidad.
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        mostrarErrorCampo(input, 'Introduce un correo electrónico válido.');
        return false;
    }

    mostrarErrorCampo(input, '');
    return true;
}

// DNI
function normalizarDni(dni) {
    return limpiarTexto(dni).toUpperCase();
}

function validarDNI(valor, input) {
    const dni = normalizarDni(valor);

    if (!dni) {
        mostrarErrorCampo(input, 'El DNI es obligatorio.');
        return false;
    }

    // Formato nacional: 8 dígitos y letra de control.
    if (!/^\d{8}[A-Z]$/.test(dni)) {
        mostrarErrorCampo(input, 'El DNI debe tener 8 números y una letra.');
        return false;
    }

    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const numero = parseInt(dni.slice(0, 8), 10);
    const letraEsperada = letras[numero % 23];
    const letraReal = dni.slice(8);

    if (letraReal !== letraEsperada) {
        mostrarErrorCampo(input, 'La letra del DNI no es correcta.');
        return false;
    }

    mostrarErrorCampo(input, '');
    return true;
}

// Contraseña
function validarPassword(valor, input) {
    const password = (valor ?? '').toString();

    if (password.length < 8 || password.length > 32) {
        mostrarErrorCampo(input, 'La contraseña debe tener entre 8 y 32 caracteres.');
        return false;
    }

    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneSimbolo = /[^A-Za-z0-9]/.test(password);

    if (!tieneMayuscula || !tieneMinuscula || !tieneNumero || !tieneSimbolo) {
        mostrarErrorCampo(
            input,
            'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.'
        );
        return false;
    }

    mostrarErrorCampo(input, '');
    return true;
}

// Confirmar contraseña
function validarConfirmarPassword(password, confirmarPassword, input) {
    const confirmar = (confirmarPassword ?? '').toString();

    if (!confirmar) {
        mostrarErrorCampo(input, 'Debes confirmar la contraseña.');
        return false;
    }

    if (password !== confirmar) {
        mostrarErrorCampo(input, 'Las contraseñas no coinciden.');
        return false;
    }

    mostrarErrorCampo(input, '');
    return true;
}

// Fecha de nacimiento opcional
function validarFechaNacimiento(valor, input) {
    const fechaTexto = limpiarTexto(valor);

    if (!fechaTexto) {
        mostrarErrorCampo(input, '');
        return true;
    }

    const fecha = new Date(fechaTexto);
    if (Number.isNaN(fecha.getTime())) {
        mostrarErrorCampo(input, 'La fecha de nacimiento no es válida.');
        return false;
    }

    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
        edad--;
    }

    if (edad < 16) {
        mostrarErrorCampo(input, 'Debes tener al menos 16 años para registrarte.');
        return false;
    }

    mostrarErrorCampo(input, '');
    return true;
}

// Tarjeta de crédito condicional
function validarTarjetaCredito(valor, input) {
    const texto = limpiarTexto(valor);

    // Se ignoran espacios internos para validar el número real.
    const tarjetaSinEspacios = texto.replace(/\s+/g, '');

    // La obligatoriedad depende de si el formulario muestra el campo.
    if (!tarjetaSinEspacios) {
        mostrarErrorCampo(input, 'Introduce un número de tarjeta válido.');
        return false;
    }

    if (!/^\d{13,19}$/.test(tarjetaSinEspacios)) {
        mostrarErrorCampo(input, 'Introduce un número de tarjeta válido.');
        return false;
    }

    mostrarErrorCampo(input, '');
    return true;
}

function limpiarErroresFormulario(formulario) {
    if (!formulario) {
        return;
    }

    const contenedores = formulario.querySelectorAll('.mensaje-error');
    contenedores.forEach(function (contenedor) {
        contenedor.textContent = '';
    });
}

// API global usada por los formularios clásicos sin bundler.
window.ValidacionesPacePal = {
    limpiarTexto,
    mostrarErrorCampo,
    limpiarErroresFormulario,
    validarNombre,
    validarEmail,
    normalizarDni,
    validarDNI,
    validarPassword,
    validarConfirmarPassword,
    validarFechaNacimiento,
    validarTarjetaCredito
};
