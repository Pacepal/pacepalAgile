// =========================================================
// VALIDACIONES DEL FORMULARIO DE PACEPAL (DWEC - Sprint 1)
// =========================================================
// He intentado dejarlo sencillo y modular para poder explicarlo fácil.
// Todas las funciones devuelven true / false.

// Función pequeña para normalizar cualquier texto:
// quito null/undefined y también espacios al inicio y al final.
function limpiarTexto(valor) {
    return (valor ?? '').toString().trim();
}

// Busco el contenedor de error que corresponde a un input.
// Prioridad: id "error-<idInput>" y si no existe uso el siguiente .mensaje-error.
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

// Muestro o limpio el mensaje debajo del campo.
function mostrarErrorCampo(input, mensaje) {
    const contenedor = obtenerContenedorError(input);
    if (contenedor) {
        contenedor.textContent = mensaje || '';
    }

    // También marco el campo en verde o rojo para feedback visual.
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

// ---------- 1) NOMBRE Y APELLIDOS ----------
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

    // Solo permito letras (incluyendo acentos/ñ) y espacios.
    if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(nombre)) {
        mostrarErrorCampo(input, 'El nombre solo puede contener letras y espacios.');
        return false;
    }

    mostrarErrorCampo(input, '');
    return true;
}

// ---------- 2) EMAIL ----------
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

    // Formato básico: texto@dominio.algo
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        mostrarErrorCampo(input, 'Introduce un correo electrónico válido.');
        return false;
    }

    mostrarErrorCampo(input, '');
    return true;
}

// ---------- 3) DNI ----------
function normalizarDni(dni) {
    return limpiarTexto(dni).toUpperCase();
}

function validarDNI(valor, input) {
    const dni = normalizarDni(valor);

    if (!dni) {
        mostrarErrorCampo(input, 'El DNI es obligatorio.');
        return false;
    }

    // Debe ser 8 números + 1 letra
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

// ---------- 4) CONTRASEÑA ----------
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

// ---------- 5) CONFIRMAR CONTRASEÑA ----------
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

// ---------- 6) FECHA DE NACIMIENTO (opcional) ----------
function validarFechaNacimiento(valor, input) {
    const fechaTexto = limpiarTexto(valor);

    // Si está vacío, es válido porque es opcional
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

// ---------- 7) TARJETA DE CRÉDITO (condicional) ----------
function validarTarjetaCredito(valor, input) {
    const texto = limpiarTexto(valor);

    // Solo quito espacios internos para validar número real
    const tarjetaSinEspacios = texto.replace(/\s+/g, '');

    // Si llega vacío aquí, la decisión de si es obligatorio o no
    // la toma la lógica del formulario según visibilidad.
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

// ---------- Utilidad para limpiar todos los errores del formulario ----------
function limpiarErroresFormulario(formulario) {
    if (!formulario) {
        return;
    }

    const contenedores = formulario.querySelectorAll('.mensaje-error');
    contenedores.forEach(function (contenedor) {
        contenedor.textContent = '';
    });
}

// Objeto global opcional para usarlo de forma modular.
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
