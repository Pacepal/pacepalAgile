// Detalle de una actividad — info completa, lista de participantes, unirse/abandonar y eliminar

document.addEventListener('DOMContentLoaded', function () {
    var apiBase = '../../src/api/index.php/api';
    var contenedor = document.getElementById('detalle-actividad');

    if (!contenedor) {
        return;
    }

    var params = new URLSearchParams(window.location.search);
    var idActividad = params.get('id');

    if (!idActividad) {
        contenedor.textContent = 'No se ha indicado una actividad.';
        return;
    }

    function renderDetalle(actividad) {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }

        var tarjeta = crearElemento('article', null, 'tarjeta-pagina');

        tarjeta.appendChild(crearElemento('h2', 'Actividad #' + actividad.id_actividad));

        if (actividad.ruta_imagen) {
            var img = document.createElement('img');
            img.src = '../../' + actividad.ruta_imagen;
            img.alt = actividad.ruta_nombre || 'Ruta';
            img.className = 'img-fluid rounded mb-3';
            img.loading = 'lazy';
            tarjeta.appendChild(img);
        }

        tarjeta.appendChild(crearElemento('p', 'Ruta: ' + (actividad.ruta_nombre || 'No disponible')));
        tarjeta.appendChild(crearElemento('p', 'Ubicación: ' + (actividad.ruta_ubicacion || 'No disponible')));
        tarjeta.appendChild(crearElemento('p', 'Distancia: ' + (actividad.ruta_distancia ? actividad.ruta_distancia + ' km' : 'No disponible')));
        tarjeta.appendChild(crearElemento('p', 'Dificultad ruta: ' + (actividad.ruta_dificultad || 'No disponible')));
        tarjeta.appendChild(crearElemento('p', 'Organizador: ' + (actividad.creador_nombre || 'No disponible')));
        tarjeta.appendChild(crearElemento('p', 'Fecha: ' + (actividad.fecha || 'No disponible')));
        tarjeta.appendChild(crearElemento('p', 'Hora: ' + (actividad.hora || 'No disponible')));
        tarjeta.appendChild(crearElemento('p', 'Nivel: ' + (actividad.nivel || 'No disponible')));

        var plazasTexto = actividad.plazas_max ? actividad.num_participantes + ' / ' + actividad.plazas_max : 'Sin limite';
        tarjeta.appendChild(crearElemento('p', 'Participantes: ' + plazasTexto));
        tarjeta.appendChild(crearElemento('p', 'Estado: ' + (actividad.estado || 'No disponible')));
        tarjeta.appendChild(crearElemento('p', 'Descripción: ' + (actividad.descripcion || 'Sin descripción')));

        if (actividad.participantes && actividad.participantes.length > 0) {
            tarjeta.appendChild(crearElemento('h3', 'Lista de participantes'));
            var lista = document.createElement('ul');
            lista.className = 'list-unstyled';
            for (var i = 0; i < actividad.participantes.length; i++) {
                var li = document.createElement('li');
                li.textContent = actividad.participantes[i].nombre;
                lista.appendChild(li);
            }
            tarjeta.appendChild(lista);
        }

        var acciones = crearElemento('div', null, 'mt-3');

        if (actividad.usuario_participa) {
            var btnLeave = crearElemento('button', 'Abandonar actividad', 'boton boton--primario me-2');
            btnLeave.type = 'button';
            btnLeave.addEventListener('click', function () {
                accionParticipacion('leave');
            });
            acciones.appendChild(btnLeave);
        } else if (!actividad.es_creador) {
            var btnJoin = crearElemento('button', 'Unirse a la actividad', 'boton boton--primario me-2');
            btnJoin.type = 'button';
            btnJoin.addEventListener('click', function () {
                accionParticipacion('join');
            });
            acciones.appendChild(btnJoin);
        }

        if (actividad.es_creador) {
            var btnDelete = crearElemento('button', 'Eliminar actividad', 'boton me-2');
            btnDelete.type = 'button';
            btnDelete.addEventListener('click', function () {
                eliminarActividad();
            });
            acciones.appendChild(btnDelete);
        }

        var btnVolver = crearElemento('a', 'Volver a actividades', 'boton');
        btnVolver.href = 'actividades.php';
        acciones.appendChild(btnVolver);

        tarjeta.appendChild(acciones);
        contenedor.appendChild(tarjeta);
    }

    async function cargarDetalle() {
        try {
            var response = await fetch(apiBase + '/actividades/' + encodeURIComponent(idActividad), {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            if (!response.ok) {
                contenedor.textContent = 'No se pudo cargar la actividad.';
                return;
            }

            var data = await response.json();
            if (data.status === 'ok' && data.data) {
                renderDetalle(data.data);
            } else {
                contenedor.textContent = 'Actividad no encontrada.';
            }
        } catch (_error) {
            contenedor.textContent = 'Error al cargar la actividad.';
        }
    }

    async function accionParticipacion(accion) {
        try {
            var response = await fetch(apiBase + '/actividades/' + encodeURIComponent(idActividad) + '/' + accion, {
                method: 'POST',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            var data = await response.json();
            if (data.status === 'ok') {
                cargarDetalle();
            } else {
                alert(data.message || 'No se pudo realizar la acción.');
            }
        } catch (_error) {
            alert('Error de conexión.');
        }
    }

    async function eliminarActividad() {
        if (!confirm('¿Seguro que quieres eliminar esta actividad?')) {
            return;
        }

        try {
            var response = await fetch(apiBase + '/actividades/' + encodeURIComponent(idActividad), {
                method: 'DELETE',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            var data = await response.json();
            if (data.status === 'ok') {
                window.location.href = 'actividades.php';
            } else {
                alert(data.message || 'No se pudo eliminar.');
            }
        } catch (_error) {
            alert('Error de conexión.');
        }
    }

    cargarDetalle();
});
