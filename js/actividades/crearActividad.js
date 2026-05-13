// Formulario para crear actividad — carga las rutas en el select y envia los datos a la API
// si vienes desde una ruta concreta, la preselecciona con el parámetro ?ruta=

document.addEventListener('DOMContentLoaded', function () {
    var apiBase = '../../src/api/index.php/api';
    var formCrear = document.getElementById('form-crear-actividad');
    var selectRuta = document.getElementById('crear-id-ruta');
    var msgDiv = document.getElementById('crear-actividad-msg');

    if (!formCrear || !selectRuta) {
        return;
    }

    var params = new URLSearchParams(window.location.search);
    var rutaIdParam = params.get('ruta');

    async function cargarRutas() {
        try {
            var response = await fetch(apiBase + '/rutas', {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });
            var data = await response.json();
            var rutas = (data && data.status === 'ok' && Array.isArray(data.data)) ? data.data : [];

            for (var i = 0; i < rutas.length; i++) {
                var opt = document.createElement('option');
                opt.value = String(rutas[i].id_ruta);
                opt.textContent = rutas[i].nombre || ('Ruta #' + rutas[i].id_ruta);
                if (rutaIdParam && String(rutas[i].id_ruta) === rutaIdParam) {
                    opt.selected = true;
                }
                selectRuta.appendChild(opt);
            }
        } catch (_e) {
            // select queda con la opcion por defecto
        }
    }

    function limpiarMensaje() {
        while (msgDiv && msgDiv.firstChild) {
            msgDiv.removeChild(msgDiv.firstChild);
        }
    }

    formCrear.addEventListener('submit', async function (e) {
        e.preventDefault();
        limpiarMensaje();

        var idRuta = parseInt(selectRuta.value, 10);
        var fecha = document.getElementById('crear-fecha').value;
        var hora = document.getElementById('crear-hora').value;
        var nivel = document.getElementById('crear-nivel').value;
        var plazas = parseInt(document.getElementById('crear-plazas').value, 10) || null;
        var descripcion = document.getElementById('crear-descripcion').value;

        if (!idRuta || !fecha || !hora || !nivel) {
            var aviso = document.createElement('p');
            aviso.className = 'text-danger';
            aviso.textContent = 'Por favor completa los campos obligatorios (ruta, fecha, hora, nivel).';
            if (msgDiv) msgDiv.appendChild(aviso);
            return;
        }

        var body = {
            id_ruta: idRuta,
            fecha: fecha,
            hora: hora,
            nivel: nivel,
            plazas_max: plazas,
            descripcion: descripcion,
        };

        try {
            var response = await fetch(apiBase + '/actividad', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body),
            });

            var data = await response.json();

            if (data.status === 'ok') {
                window.location.href = 'actividadDetalle.php?id=' + data.data.id_actividad;
            } else {
                var err = document.createElement('p');
                err.className = 'text-danger';
                err.textContent = data.message || 'No se pudo crear la actividad.';
                if (msgDiv) msgDiv.appendChild(err);
            }
        } catch (_err) {
            var errP = document.createElement('p');
            errP.className = 'text-danger';
            errP.textContent = 'Error de conexión.';
            if (msgDiv) msgDiv.appendChild(errP);
        }
    });

    cargarRutas();
});
