// Detalle de una ruta — muestra toda la info y enlaza a crear actividad en esa ruta

document.addEventListener('DOMContentLoaded', function () {
    var apiBase = '../../src/api/index.php/api';
    var contenedor = document.getElementById('detalle-ruta');

    if (!contenedor) {
        return;
    }

    var params = new URLSearchParams(window.location.search);
    var idRuta = params.get('id');

    if (!idRuta) {
        contenedor.textContent = 'No se ha indicado una ruta.';
        return;
    }

    function renderDetalle(ruta) {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }

        var tarjeta = crearElemento('article', null, 'tarjeta-pagina');

        tarjeta.appendChild(crearElemento('h2', ruta.nombre || 'Ruta'));

        if (ruta.imagen) {
            var img = document.createElement('img');
            img.src = '../../' + ruta.imagen;
            img.alt = ruta.nombre || 'Ruta';
            img.className = 'img-fluid rounded mb-3';
            img.loading = 'lazy';
            tarjeta.appendChild(img);
        }

        tarjeta.appendChild(crearElemento('p', 'Descripción: ' + (ruta.descripcion || 'Sin descripción')));
        tarjeta.appendChild(crearElemento('p', 'Ubicación: ' + (ruta.ubicacion || 'No disponible')));
        tarjeta.appendChild(crearElemento('p', 'Distancia: ' + (ruta.distancia ? ruta.distancia + ' km' : 'No disponible')));
        tarjeta.appendChild(crearElemento('p', 'Dificultad: ' + (ruta.dificultad || 'No disponible')));
        tarjeta.appendChild(crearElemento('p', 'Desnivel: ' + (ruta.desnivel ? ruta.desnivel + ' m' : 'No disponible')));
        tarjeta.appendChild(crearElemento('p', 'Duración: ' + (ruta.duracion || 'No disponible')));

        var acciones = crearElemento('div', null, 'mt-3');

        var btnCrear = crearElemento('a', 'Crear actividad en esta ruta', 'boton boton--primario me-2');
        btnCrear.href = '../actividades/crearActividad.php?ruta=' + encodeURIComponent(String(ruta.id_ruta));
        acciones.appendChild(btnCrear);

        var btnVolver = crearElemento('a', 'Volver a rutas', 'boton');
        btnVolver.href = 'rutas.php';
        acciones.appendChild(btnVolver);

        tarjeta.appendChild(acciones);
        contenedor.appendChild(tarjeta);
    }

    async function cargarDetalle() {
        try {
            var response = await fetch(apiBase + '/rutas/' + encodeURIComponent(idRuta), {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            if (!response.ok) {
                contenedor.textContent = 'No se pudo cargar la ruta.';
                return;
            }

            var data = await response.json();
            if (data.status === 'ok' && data.data) {
                renderDetalle(data.data);
            } else {
                contenedor.textContent = 'Ruta no encontrada.';
            }
        } catch (_error) {
            contenedor.textContent = 'Error al cargar la ruta.';
        }
    }

    cargarDetalle();
});
