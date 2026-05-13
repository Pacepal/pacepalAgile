// Listado de rutas — las pide a la API y las renderiza como tarjetas con ubicacion y distancia

document.addEventListener('DOMContentLoaded', function () {
    const endpointRutas = '../../src/api/index.php/api/rutas';
    const listaRutas = document.getElementById('lista-rutas');

    if (!listaRutas) {
        return;
    }

    function limpiarContenedor() {
        while (listaRutas.firstChild) {
            listaRutas.removeChild(listaRutas.firstChild);
        }
    }

    function mostrarErrorCarga() {
        limpiarContenedor();

        const mensaje = document.createElement('p');
        mensaje.textContent = 'No se pudieron cargar las rutas.';
        listaRutas.appendChild(mensaje);
    }

    function crearTarjetaRuta(ruta) {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'tarjeta tarjeta-producto';

        // <img src="..." alt="..." loading="lazy" />
        const imagen = document.createElement('img');
        imagen.loading = 'lazy';
        imagen.alt = ruta.nombre || 'Ruta PacePal';
        imagen.src = '../../' + (ruta.imagen || 'img/rutas/jarosa.webp');

        // <div class="tarjeta-producto__cuerpo">
        const cuerpo = document.createElement('div');
        cuerpo.className = 'tarjeta-producto__cuerpo';

        // <h3>Nombre</h3>
        const nombre = document.createElement('h3');
        nombre.textContent = ruta.nombre || 'Ruta sin nombre';

        // <p><i class="bi bi-geo-alt-fill"></i> Ubicación</p>
        const ubicacionP = document.createElement('p');
        const iconoUbi = document.createElement('i');
        iconoUbi.className = 'bi bi-geo-alt-fill';
        iconoUbi.setAttribute('aria-hidden', 'true');
        ubicacionP.appendChild(iconoUbi);
        ubicacionP.appendChild(document.createTextNode(' ' + (ruta.ubicacion || 'No disponible')));

        // <p><i class="bi bi-signpost-2-fill"></i> Distancia</p>
        const distanciaP = document.createElement('p');
        const iconoDist = document.createElement('i');
        iconoDist.className = 'bi bi-signpost-2-fill';
        iconoDist.setAttribute('aria-hidden', 'true');
        distanciaP.appendChild(iconoDist);
        const distanciaTexto = ruta.distancia !== null && ruta.distancia !== undefined
            ? String(ruta.distancia) + ' km'
            : 'No disponible';
        distanciaP.appendChild(document.createTextNode(' ' + distanciaTexto));

        // <a class="boton boton--primario">Ver detalle</a>
        const enlaceDetalle = document.createElement('a');
        enlaceDetalle.className = 'boton boton--primario';
        enlaceDetalle.textContent = 'Ver detalle';
        enlaceDetalle.href = 'rutaDetalle.php?id=' + encodeURIComponent(String(ruta.id_ruta || ''));

        cuerpo.appendChild(nombre);
        cuerpo.appendChild(ubicacionP);
        cuerpo.appendChild(distanciaP);
        cuerpo.appendChild(enlaceDetalle);

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(cuerpo);

        return tarjeta;
    }

    async function cargarRutas() {
        try {
            const response = await fetch(endpointRutas, {
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
            const rutas = Array.isArray(data && data.data) ? data.data : [];

            limpiarContenedor();

            if (rutas.length === 0) {
                const vacio = document.createElement('p');
                vacio.textContent = 'No hay rutas disponibles.';
                listaRutas.appendChild(vacio);
                return;
            }

            const fragment = document.createDocumentFragment();
            for (let i = 0; i < rutas.length; i += 1) {
                const tarjeta = crearTarjetaRuta(rutas[i]);
                fragment.appendChild(tarjeta);
            }

            listaRutas.appendChild(fragment);
        } catch (_error) {
            mostrarErrorCarga();
        }
    }

    cargarRutas();
});
