// Listado de actividades — pide las actividades a la API y las pinta como tarjetas
// si el usuario esta logueado, muestra el boton para crear una nueva

document.addEventListener('DOMContentLoaded', function () {
    const endpointActividades = '../../src/api/index.php/api/actividades';
    const listaActividades = document.getElementById('lista-actividades');

    if (!listaActividades) {
        return;
    }

    function limpiarContenedor() {
        while (listaActividades.firstChild) {
            listaActividades.removeChild(listaActividades.firstChild);
        }
    }

    function mostrarErrorCarga() {
        limpiarContenedor();

        const mensaje = document.createElement('p');
        mensaje.textContent = 'No se pudieron cargar las actividades.';
        listaActividades.appendChild(mensaje);
    }

    function crearTarjetaActividad(actividad) {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'tarjeta tarjeta-actividad';

        // <h3><i class="bi bi-geo-alt-fill"></i> Nombre</h3>
        const titulo = document.createElement('h3');
        const iconoUbicacion = document.createElement('i');
        iconoUbicacion.className = 'bi bi-geo-alt-fill';
        iconoUbicacion.setAttribute('aria-hidden', 'true');
        titulo.appendChild(iconoUbicacion);
        titulo.appendChild(document.createTextNode(' ' + (actividad.nombre || actividad.descripcion || 'Actividad')));

        // <p class="linea">Tipo · nivel</p>
        const linea = document.createElement('p');
        linea.className = 'linea';
        const tipo = actividad.tipo || 'Actividad';
        const nivel = actividad.nivel || 'General';
        linea.textContent = tipo + ' · nivel ' + nivel;

        // <p><i class="bi bi-calendar3"></i> Fecha · Hora</p>
        const fechaP = document.createElement('p');
        const iconoCalendario = document.createElement('i');
        iconoCalendario.className = 'bi bi-calendar3';
        iconoCalendario.setAttribute('aria-hidden', 'true');
        fechaP.appendChild(iconoCalendario);
        const fechaTexto = actividad.fecha || 'Sin fecha';
        const horaTexto = actividad.hora || '';
        fechaP.appendChild(document.createTextNode(' ' + fechaTexto + (horaTexto ? ' · ' + horaTexto : '')));

        // <p><i class="bi bi-people-fill"></i> X plazas disponibles</p>
        const plazasP = document.createElement('p');
        const iconoPlazas = document.createElement('i');
        iconoPlazas.className = 'bi bi-people-fill';
        iconoPlazas.setAttribute('aria-hidden', 'true');
        plazasP.appendChild(iconoPlazas);
        const plazasValor = actividad.plazas_max !== null && actividad.plazas_max !== undefined
            ? String(actividad.plazas_max) + ' plazas disponibles'
            : 'Plazas no disponibles';
        plazasP.appendChild(document.createTextNode(' ' + plazasValor));

        // <a class="boton boton--primario">Ver actividad</a>
        const enlaceDetalle = document.createElement('a');
        enlaceDetalle.className = 'boton boton--primario';
        enlaceDetalle.textContent = 'Ver actividad';
        enlaceDetalle.href = 'actividadDetalle.php?id=' + encodeURIComponent(String(actividad.id_actividad || ''));

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(linea);
        tarjeta.appendChild(fechaP);
        tarjeta.appendChild(plazasP);
        tarjeta.appendChild(enlaceDetalle);

        return tarjeta;
    }

    async function cargarActividades() {
        try {
            const response = await fetch(endpointActividades, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }

            const data = await response.json();
            const actividades = Array.isArray(data && data.data) ? data.data : [];

            limpiarContenedor();

            if (actividades.length === 0) {
                const vacio = document.createElement('p');
                vacio.textContent = 'No hay actividades disponibles.';
                listaActividades.appendChild(vacio);
                return;
            }

            const fragment = document.createDocumentFragment();
            for (let i = 0; i < actividades.length; i += 1) {
                fragment.appendChild(crearTarjetaActividad(actividades[i]));
            }

            listaActividades.appendChild(fragment);
        } catch (_error) {
            mostrarErrorCarga();
        }
    }

    cargarActividades();

    // --- Mostrar boton "Crear actividad" si el usuario esta logueado ---
    var botonCrearContenedor = document.getElementById('boton-crear-actividad');

    async function mostrarBotonCrear() {
        if (!botonCrearContenedor) {
            return;
        }
        try {
            var sesResp = await fetch(endpointActividades.replace('/actividades', '/session'), {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });
            var sesData = await sesResp.json();

            if (sesData && sesData.logged === true) {
                var btnCrear = document.createElement('a');
                btnCrear.href = 'crearActividad.php';
                btnCrear.className = 'boton boton--primario';
                btnCrear.textContent = 'Crear actividad';
                botonCrearContenedor.appendChild(btnCrear);
            }
        } catch (_e) {
            // no mostrar boton si falla la sesion
        }
    }

    mostrarBotonCrear();
});
