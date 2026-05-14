// Panel de administración — CRUD completo de usuarios, actividades, rutas, reportes y pedidos
// todo se pinta con JS vanilla (createElement), sin innerHTML, para evitar XSS

document.addEventListener('DOMContentLoaded', function () {
    var apiBase = '../../src/api/index.php/api';
    var usuariosContenedor = document.getElementById('admin-usuarios');
    var reportesContenedor = document.getElementById('admin-reportes');
    var actividadesContenedor = document.getElementById('admin-actividades');
    var pedidosContenedor = document.getElementById('admin-pedidos');
    var rutasContenedor = document.getElementById('admin-rutas');

    async function verificarAdmin() {
        try {
            var response = await fetch(apiBase + '/session', {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            var data = await response.json();
            if (!data.logged || data.rol !== 'admin') {
                if (usuariosContenedor) {
                    usuariosContenedor.textContent = 'Acceso restringido a administradores.';
                }
                return false;
            }
            return true;
        } catch (_error) {
            return false;
        }
    }

    function renderUsuarios(usuarios) {
        if (!usuariosContenedor) {
            return;
        }

        limpiar(usuariosContenedor);

        if (usuarios.length === 0) {
            usuariosContenedor.appendChild(crearElemento('p', 'No hay usuarios registrados.'));
            return;
        }

        var tabla = document.createElement('table');
        tabla.className = 'table table-striped';

        var thead = document.createElement('thead');
        var trHead = document.createElement('tr');
        var columnas = ['ID', 'Nombre', 'DNI', 'Email', 'Rol', 'Registro', 'Acciones'];
        for (var c = 0; c < columnas.length; c++) {
            var th = document.createElement('th');
            th.textContent = columnas[c];
            trHead.appendChild(th);
        }
        thead.appendChild(trHead);
        tabla.appendChild(thead);

        var tbody = document.createElement('tbody');
        for (var i = 0; i < usuarios.length; i++) {
            var u = usuarios[i];
            var tr = document.createElement('tr');

            var vals = [u.id_usuario, u.nombre, u.dni, u.email, u.rol, u.fecha_registro || ''];
            for (var v = 0; v < vals.length; v++) {
                var td = document.createElement('td');
                td.textContent = String(vals[v]);
                tr.appendChild(td);
            }

            var tdAcciones = document.createElement('td');

            var btnEditar = crearElemento('button', 'Editar', 'boton boton--primario me-1');
            btnEditar.type = 'button';

            (function (usr) {
                btnEditar.addEventListener('click', function () {
                    mostrarFormularioEditarUsuario(usr);
                });
            })(u);

            var btnEliminar = crearElemento('button', 'Eliminar', 'boton');
            btnEliminar.type = 'button';

            (function (idUsr) {
                btnEliminar.addEventListener('click', function () {
                    eliminarUsuario(idUsr);
                });
            })(u.id_usuario);

            tdAcciones.appendChild(btnEditar);
            tdAcciones.appendChild(btnEliminar);
            tr.appendChild(tdAcciones);

            tbody.appendChild(tr);
        }
        tabla.appendChild(tbody);

        usuariosContenedor.appendChild(tabla);
    }

    // ===== CRUD USUARIOS =====
    var formUsuarioContenedor = document.getElementById('admin-form-usuario');
    var btnCrearUsuario = document.getElementById('btn-admin-crear-usuario');

    function construirFormularioUsuario(usuario) {
        var esEdicion = !!usuario;
        var form = document.createElement('form');
        form.className = 'formulario p-3 border rounded';

        form.appendChild(crearElemento('h4', esEdicion ? 'Editar usuario #' + usuario.id_usuario : 'Nuevo usuario'));

        var campos = [
            { id: 'admin-usr-nombre', label: 'Nombre', type: 'text', val: esEdicion ? (usuario.nombre || '') : '', required: true },
            { id: 'admin-usr-email', label: 'Email', type: 'email', val: esEdicion ? (usuario.email || '') : '', required: true },
        ];

        if (!esEdicion) {
            campos.push({ id: 'admin-usr-dni', label: 'DNI', type: 'text', val: '', required: true });
            campos.push({ id: 'admin-usr-password', label: 'Contraseña', type: 'password', val: '', required: true });
        }

        for (var f = 0; f < campos.length; f++) {
            var g = crearElemento('div', null, 'formulario__grupo mb-2');
            var lbl = crearElemento('label', campos[f].label, 'formulario__label');
            lbl.htmlFor = campos[f].id;
            g.appendChild(lbl);
            var inp = document.createElement('input');
            inp.type = campos[f].type;
            inp.id = campos[f].id;
            inp.className = 'formulario__input';
            inp.required = campos[f].required;
            inp.value = campos[f].val;
            g.appendChild(inp);
            form.appendChild(g);
        }

        // Rol select
        var grupoRol = crearElemento('div', null, 'formulario__grupo mb-2');
        grupoRol.appendChild(crearElemento('label', 'Rol', 'formulario__label'));
        var selectRol = document.createElement('select');
        selectRol.id = 'admin-usr-rol';
        selectRol.className = 'formulario__input';
        var roles = ['usuario', 'admin'];
        for (var r = 0; r < roles.length; r++) {
            var optR = document.createElement('option');
            optR.value = roles[r];
            optR.textContent = roles[r];
            if (esEdicion && roles[r] === usuario.rol) {
                optR.selected = true;
            }
            selectRol.appendChild(optR);
        }
        grupoRol.appendChild(selectRol);
        form.appendChild(grupoRol);

        var msgDiv = crearElemento('div', null, '');
        msgDiv.id = 'admin-usr-msg';
        form.appendChild(msgDiv);

        var btnGroup = crearElemento('div', null, 'd-flex gap-2 mt-2');
        btnGroup.appendChild(crearElemento('button', esEdicion ? 'Guardar cambios' : 'Crear usuario', 'boton boton--primario'));
        btnGroup.lastChild.type = 'submit';

        var btnCancelar = crearElemento('button', 'Cancelar', 'boton');
        btnCancelar.type = 'button';
        btnCancelar.addEventListener('click', function () { ocultarFormularioUsuario(); });
        btnGroup.appendChild(btnCancelar);

        form.appendChild(btnGroup);
        return form;
    }

    function ocultarFormularioUsuario() {
        if (formUsuarioContenedor) {
            limpiar(formUsuarioContenedor);
            formUsuarioContenedor.style.display = 'none';
        }
    }

    function mostrarFormularioCrearUsuario() {
        if (!formUsuarioContenedor) return;
        limpiar(formUsuarioContenedor);

        var form = construirFormularioUsuario(null);

        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            var msgDiv = document.getElementById('admin-usr-msg');
            if (msgDiv) limpiar(msgDiv);

            var nombre = document.getElementById('admin-usr-nombre').value.trim();
            var email = document.getElementById('admin-usr-email').value.trim();
            var dni = document.getElementById('admin-usr-dni').value.trim();
            var password = document.getElementById('admin-usr-password').value;
            var rol = document.getElementById('admin-usr-rol').value;

            if (!nombre || !email || !dni || !password) {
                if (msgDiv) msgDiv.appendChild(crearElemento('p', 'Completa todos los campos obligatorios.', 'text-danger'));
                return;
            }

            try {
                var response = await fetch(apiBase + '/usuario', {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({ nombre: nombre, email: email, dni: dni, password: password, rol: rol }),
                });
                var data = await response.json();
                if (data.status === 'ok') {
                    ocultarFormularioUsuario();
                    cargarUsuarios();
                } else {
                    if (msgDiv) msgDiv.appendChild(crearElemento('p', data.message || 'Error al crear.', 'text-danger'));
                }
            } catch (_e) {
                if (msgDiv) msgDiv.appendChild(crearElemento('p', 'Error de conexión.', 'text-danger'));
            }
        });

        formUsuarioContenedor.appendChild(form);
        formUsuarioContenedor.style.display = '';
    }

    function mostrarFormularioEditarUsuario(usuario) {
        if (!formUsuarioContenedor) return;
        limpiar(formUsuarioContenedor);

        var form = construirFormularioUsuario(usuario);

        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            var msgDiv = document.getElementById('admin-usr-msg');
            if (msgDiv) limpiar(msgDiv);

            var nombre = document.getElementById('admin-usr-nombre').value.trim();
            var email = document.getElementById('admin-usr-email').value.trim();
            var rol = document.getElementById('admin-usr-rol').value;

            if (!nombre || !email) {
                if (msgDiv) msgDiv.appendChild(crearElemento('p', 'Nombre y email son obligatorios.', 'text-danger'));
                return;
            }

            try {
                var response = await fetch(apiBase + '/usuarios/' + usuario.id_usuario, {
                    method: 'PUT',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({ nombre: nombre, email: email, rol: rol }),
                });
                var data = await response.json();
                if (data.status === 'ok') {
                    ocultarFormularioUsuario();
                    cargarUsuarios();
                } else {
                    if (msgDiv) msgDiv.appendChild(crearElemento('p', data.message || 'Error al actualizar.', 'text-danger'));
                }
            } catch (_e) {
                if (msgDiv) msgDiv.appendChild(crearElemento('p', 'Error de conexión.', 'text-danger'));
            }
        });

        formUsuarioContenedor.appendChild(form);
        formUsuarioContenedor.style.display = '';
    }

    async function eliminarUsuario(idUsuario) {
        if (!confirm('¿Seguro que quieres eliminar el usuario #' + idUsuario + '?')) {
            return;
        }

        try {
            var response = await fetch(apiBase + '/usuarios/' + idUsuario, {
                method: 'DELETE',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });
            var data = await response.json();
            if (data.status === 'ok') {
                cargarUsuarios();
            } else {
                alert(data.message || 'No se pudo eliminar el usuario.');
            }
        } catch (_error) {
            alert('Error de conexión.');
        }
    }

    if (btnCrearUsuario) {
        btnCrearUsuario.addEventListener('click', function () {
            mostrarFormularioCrearUsuario();
        });
    }

    // ===== REPORTES =====

    function renderReportes(reportes) {
        if (!reportesContenedor) {
            return;
        }

        limpiar(reportesContenedor);

        if (reportes.length === 0) {
            reportesContenedor.appendChild(crearElemento('p', 'No hay reportes.'));
            return;
        }

        var fragment = document.createDocumentFragment();

        for (var i = 0; i < reportes.length; i++) {
            var r = reportes[i];
            var tarjeta = crearElemento('article', null, 'tarjeta-pagina mb-3');

            tarjeta.appendChild(crearElemento('h3', 'Reporte #' + r.id_reporte));
            tarjeta.appendChild(crearElemento('p', 'Reportado por: ' + (r.nombre_reporta || 'ID ' + r.id_usuario_reporta)));
            if (r.id_usuario_reportado) {
                tarjeta.appendChild(crearElemento('p', 'Usuario reportado: ' + (r.nombre_reportado || 'ID ' + r.id_usuario_reportado)));
            }
            if (r.id_actividad) {
                tarjeta.appendChild(crearElemento('p', 'Actividad: #' + r.id_actividad));
            }
            tarjeta.appendChild(crearElemento('p', 'Motivo: ' + (r.motivo || '')));
            tarjeta.appendChild(crearElemento('p', 'Fecha: ' + (r.fecha || '')));
            tarjeta.appendChild(crearElemento('p', 'Estado: ' + (r.estado || 'pendiente')));

            var selectEstado = document.createElement('select');
            selectEstado.className = 'form-select d-inline-block me-2';
            selectEstado.style.width = '160px';

            var estados = ['pendiente', 'revisado', 'resuelto', 'descartado'];
            for (var e = 0; e < estados.length; e++) {
                var opt = document.createElement('option');
                opt.value = estados[e];
                opt.textContent = estados[e];
                if (estados[e] === r.estado) {
                    opt.selected = true;
                }
                selectEstado.appendChild(opt);
            }

            var btnActualizar = crearElemento('button', 'Actualizar', 'boton boton--primario');
            btnActualizar.type = 'button';

            (function (idReporte, sel) {
                btnActualizar.addEventListener('click', function () {
                    actualizarReporte(idReporte, sel.value);
                });
            })(r.id_reporte, selectEstado);

            var accionesDiv = crearElemento('div', null, 'mt-2');
            accionesDiv.appendChild(selectEstado);
            accionesDiv.appendChild(btnActualizar);
            tarjeta.appendChild(accionesDiv);

            fragment.appendChild(tarjeta);
        }

        reportesContenedor.appendChild(fragment);
    }

    // ===== ACTIVIDADES =====

    function renderActividades(actividades) {
        if (!actividadesContenedor) {
            return;
        }

        limpiar(actividadesContenedor);

        if (actividades.length === 0) {
            actividadesContenedor.appendChild(crearElemento('p', 'No hay actividades.'));
            return;
        }

        var tabla = document.createElement('table');
        tabla.className = 'table table-striped';

        var thead = document.createElement('thead');
        var trHead = document.createElement('tr');
        var columnas = ['ID', 'Ruta', 'Creador', 'Fecha', 'Hora', 'Nivel', 'Plazas', 'Estado', 'Acciones'];
        for (var c = 0; c < columnas.length; c++) {
            var th = document.createElement('th');
            th.textContent = columnas[c];
            trHead.appendChild(th);
        }
        thead.appendChild(trHead);
        tabla.appendChild(thead);

        var tbody = document.createElement('tbody');
        for (var i = 0; i < actividades.length; i++) {
            var a = actividades[i];
            var tr = document.createElement('tr');
            tr.setAttribute('data-id', String(a.id_actividad));

            var vals = [a.id_actividad, a.id_ruta, a.id_usuario_creador, a.fecha || '', a.hora || '', a.nivel || '', a.plazas_max || '', a.estado || ''];
            for (var v = 0; v < vals.length; v++) {
                var td = document.createElement('td');
                td.textContent = String(vals[v]);
                tr.appendChild(td);
            }

            var tdAcciones = document.createElement('td');

            var btnEditar = crearElemento('button', 'Editar', 'boton boton--primario me-1');
            btnEditar.type = 'button';

            (function (act) {
                btnEditar.addEventListener('click', function () {
                    mostrarFormularioEditar(act);
                });
            })(a);

            var btnEliminar = crearElemento('button', 'Eliminar', 'boton');
            btnEliminar.type = 'button';

            (function (idAct) {
                btnEliminar.addEventListener('click', function () {
                    eliminarActividad(idAct);
                });
            })(a.id_actividad);

            tdAcciones.appendChild(btnEditar);
            tdAcciones.appendChild(btnEliminar);
            tr.appendChild(tdAcciones);

            tbody.appendChild(tr);
        }
        tabla.appendChild(tbody);

        actividadesContenedor.appendChild(tabla);
    }

    // ===== FORMULARIO ACTIVIDAD =====
    var formContenedor = document.getElementById('admin-form-actividad');
    var btnCrearActividad = document.getElementById('btn-admin-crear-actividad');

    function construirFormulario(actividad) {
        var esEdicion = !!actividad;
        var form = document.createElement('form');
        form.className = 'formulario p-3 border rounded';

        var titulo = crearElemento('h4', esEdicion ? 'Editar actividad #' + actividad.id_actividad : 'Nueva actividad');
        form.appendChild(titulo);

        // Ruta (solo en creacion)
        if (!esEdicion) {
            var grupoRuta = crearElemento('div', null, 'formulario__grupo mb-2');
            grupoRuta.appendChild(crearElemento('label', 'Ruta', 'formulario__label'));
            var selectRuta = document.createElement('select');
            selectRuta.id = 'admin-act-ruta';
            selectRuta.className = 'formulario__input';
            selectRuta.required = true;
            var optDefault = document.createElement('option');
            optDefault.value = '';
            optDefault.textContent = 'Selecciona una ruta';
            selectRuta.appendChild(optDefault);
            grupoRuta.appendChild(selectRuta);
            form.appendChild(grupoRuta);
        }

        var campos = [
            { id: 'admin-act-fecha', label: 'Fecha', type: 'date', name: 'fecha', val: esEdicion ? (actividad.fecha || '') : '' },
            { id: 'admin-act-hora', label: 'Hora', type: 'time', name: 'hora', val: esEdicion ? (actividad.hora || '') : '' },
        ];

        for (var f = 0; f < campos.length; f++) {
            var g = crearElemento('div', null, 'formulario__grupo mb-2');
            g.appendChild(crearElemento('label', campos[f].label, 'formulario__label'));
            var inp = document.createElement('input');
            inp.type = campos[f].type;
            inp.id = campos[f].id;
            inp.className = 'formulario__input';
            inp.required = true;
            inp.value = campos[f].val;
            g.appendChild(inp);
            form.appendChild(g);
        }

        // Nivel select
        var grupoNivel = crearElemento('div', null, 'formulario__grupo mb-2');
        grupoNivel.appendChild(crearElemento('label', 'Nivel', 'formulario__label'));
        var selectNivel = document.createElement('select');
        selectNivel.id = 'admin-act-nivel';
        selectNivel.className = 'formulario__input';
        selectNivel.required = true;
        var niveles = ['', 'principiante', 'intermedio', 'avanzado'];
        var nivelesTexto = ['Selecciona nivel', 'Principiante', 'Intermedio', 'Avanzado'];
        for (var n = 0; n < niveles.length; n++) {
            var optN = document.createElement('option');
            optN.value = niveles[n];
            optN.textContent = nivelesTexto[n];
            if (esEdicion && niveles[n] === actividad.nivel) {
                optN.selected = true;
            }
            selectNivel.appendChild(optN);
        }
        grupoNivel.appendChild(selectNivel);
        form.appendChild(grupoNivel);

        // Plazas
        var grupoPlazas = crearElemento('div', null, 'formulario__grupo mb-2');
        grupoPlazas.appendChild(crearElemento('label', 'Plazas máximas', 'formulario__label'));
        var inpPlazas = document.createElement('input');
        inpPlazas.type = 'number';
        inpPlazas.id = 'admin-act-plazas';
        inpPlazas.className = 'formulario__input';
        inpPlazas.min = '1';
        inpPlazas.value = esEdicion ? String(actividad.plazas_max || '') : '';
        grupoPlazas.appendChild(inpPlazas);
        form.appendChild(grupoPlazas);

        // Descripción
        var grupoDesc = crearElemento('div', null, 'formulario__grupo mb-2');
        grupoDesc.appendChild(crearElemento('label', 'Descripción', 'formulario__label'));
        var texDesc = document.createElement('textarea');
        texDesc.id = 'admin-act-descripcion';
        texDesc.className = 'formulario__input';
        texDesc.rows = 3;
        texDesc.value = esEdicion ? (actividad.descripcion || '') : '';
        grupoDesc.appendChild(texDesc);
        form.appendChild(grupoDesc);

        // Estado (solo en edicion)
        if (esEdicion) {
            var grupoEstado = crearElemento('div', null, 'formulario__grupo mb-2');
            grupoEstado.appendChild(crearElemento('label', 'Estado', 'formulario__label'));
            var selectEstado = document.createElement('select');
            selectEstado.id = 'admin-act-estado';
            selectEstado.className = 'formulario__input';
            var estadosAct = ['activa', 'cancelada', 'completada'];
            for (var es = 0; es < estadosAct.length; es++) {
                var optE = document.createElement('option');
                optE.value = estadosAct[es];
                optE.textContent = estadosAct[es];
                if (estadosAct[es] === actividad.estado) {
                    optE.selected = true;
                }
                selectEstado.appendChild(optE);
            }
            grupoEstado.appendChild(selectEstado);
            form.appendChild(grupoEstado);
        }

        var msgDiv = crearElemento('div', null, '');
        msgDiv.id = 'admin-act-msg';
        form.appendChild(msgDiv);

        var btnGroup = crearElemento('div', null, 'd-flex gap-2 mt-2');

        var btnGuardar = crearElemento('button', esEdicion ? 'Guardar cambios' : 'Crear actividad', 'boton boton--primario');
        btnGuardar.type = 'submit';
        btnGroup.appendChild(btnGuardar);

        var btnCancelar = crearElemento('button', 'Cancelar', 'boton');
        btnCancelar.type = 'button';
        btnCancelar.addEventListener('click', function () {
            ocultarFormulario();
        });
        btnGroup.appendChild(btnCancelar);

        form.appendChild(btnGroup);

        return form;
    }

    function ocultarFormulario() {
        if (formContenedor) {
            limpiar(formContenedor);
            formContenedor.style.display = 'none';
        }
    }

    function mostrarFormularioCrear() {
        if (!formContenedor) return;
        limpiar(formContenedor);

        var form = construirFormulario(null);

        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            var msgDiv = document.getElementById('admin-act-msg');
            if (msgDiv) limpiar(msgDiv);

            var selectRuta = document.getElementById('admin-act-ruta');
            var idRuta = selectRuta ? parseInt(selectRuta.value, 10) : 0;
            var fecha = document.getElementById('admin-act-fecha').value;
            var hora = document.getElementById('admin-act-hora').value;
            var nivel = document.getElementById('admin-act-nivel').value;
            var plazas = parseInt(document.getElementById('admin-act-plazas').value, 10) || null;
            var descripcion = document.getElementById('admin-act-descripcion').value;

            if (!idRuta || !fecha || !hora || !nivel) {
                if (msgDiv) {
                    msgDiv.appendChild(crearElemento('p', 'Completa los campos obligatorios (ruta, fecha, hora, nivel).', 'text-danger'));
                }
                return;
            }

            try {
                var response = await fetch(apiBase + '/actividad', {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({ id_ruta: idRuta, fecha: fecha, hora: hora, nivel: nivel, plazas_max: plazas, descripcion: descripcion }),
                });
                var data = await response.json();
                if (data.status === 'ok') {
                    ocultarFormulario();
                    cargarActividades();
                } else {
                    if (msgDiv) msgDiv.appendChild(crearElemento('p', data.message || 'Error al crear.', 'text-danger'));
                }
            } catch (_e) {
                if (msgDiv) msgDiv.appendChild(crearElemento('p', 'Error de conexión.', 'text-danger'));
            }
        });

        formContenedor.appendChild(form);
        formContenedor.style.display = '';

        // Cargar rutas en el select
        cargarRutasEnSelect();
    }

    function mostrarFormularioEditar(actividad) {
        if (!formContenedor) return;
        limpiar(formContenedor);

        var form = construirFormulario(actividad);

        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            var msgDiv = document.getElementById('admin-act-msg');
            if (msgDiv) limpiar(msgDiv);

            var fecha = document.getElementById('admin-act-fecha').value;
            var hora = document.getElementById('admin-act-hora').value;
            var nivel = document.getElementById('admin-act-nivel').value;
            var plazas = parseInt(document.getElementById('admin-act-plazas').value, 10) || null;
            var descripcion = document.getElementById('admin-act-descripcion').value;
            var estado = document.getElementById('admin-act-estado') ? document.getElementById('admin-act-estado').value : actividad.estado;

            if (!fecha || !hora || !nivel) {
                if (msgDiv) {
                    msgDiv.appendChild(crearElemento('p', 'Completa los campos obligatorios (fecha, hora, nivel).', 'text-danger'));
                }
                return;
            }

            try {
                var response = await fetch(apiBase + '/actividades/' + actividad.id_actividad, {
                    method: 'PUT',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({ fecha: fecha, hora: hora, nivel: nivel, plazas_max: plazas, descripcion: descripcion, estado: estado }),
                });
                var data = await response.json();
                if (data.status === 'ok') {
                    ocultarFormulario();
                    cargarActividades();
                } else {
                    if (msgDiv) msgDiv.appendChild(crearElemento('p', data.message || 'Error al actualizar.', 'text-danger'));
                }
            } catch (_e) {
                if (msgDiv) msgDiv.appendChild(crearElemento('p', 'Error de conexión.', 'text-danger'));
            }
        });

        formContenedor.appendChild(form);
        formContenedor.style.display = '';
    }

    async function cargarRutasEnSelect() {
        var selectRuta = document.getElementById('admin-act-ruta');
        if (!selectRuta) return;

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
                selectRuta.appendChild(opt);
            }
        } catch (_e) {
            // select queda con la opcion por defecto
        }
    }

    if (btnCrearActividad) {
        btnCrearActividad.addEventListener('click', function () {
            mostrarFormularioCrear();
        });
    }

    // ===== PEDIDOS =====

    function renderPedidos(pedidos) {
        if (!pedidosContenedor) {
            return;
        }

        limpiar(pedidosContenedor);

        if (pedidos.length === 0) {
            pedidosContenedor.appendChild(crearElemento('p', 'No hay pedidos registrados.'));
            return;
        }

        var tabla = document.createElement('table');
        tabla.className = 'table table-striped';

        var thead = document.createElement('thead');
        var trHead = document.createElement('tr');
        var columnas = ['ID', 'Usuario', 'Email', 'Fecha', 'Total', 'Estado'];
        for (var c = 0; c < columnas.length; c++) {
            var th = document.createElement('th');
            th.textContent = columnas[c];
            trHead.appendChild(th);
        }
        thead.appendChild(trHead);
        tabla.appendChild(thead);

        var tbody = document.createElement('tbody');
        for (var i = 0; i < pedidos.length; i++) {
            var p = pedidos[i];
            var tr = document.createElement('tr');

            var vals = [
                p.id_pedido,
                p.nombre_usuario || 'ID ' + p.id_usuario,
                p.email_usuario || '',
                p.fecha || '',
                Number(p.total).toFixed(2) + ' EUR',
                p.estado || ''
            ];
            for (var v = 0; v < vals.length; v++) {
                var td = document.createElement('td');
                td.textContent = String(vals[v]);
                tr.appendChild(td);
            }

            tbody.appendChild(tr);
        }
        tabla.appendChild(tbody);

        pedidosContenedor.appendChild(tabla);
    }

    async function cargarPedidos() {
        try {
            var response = await fetch(apiBase + '/pedidos/admin', {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            var data = await response.json();
            if (data.status === 'ok' && Array.isArray(data.data)) {
                renderPedidos(data.data);
            }
        } catch (_error) {
            if (pedidosContenedor) {
                pedidosContenedor.textContent = 'Error al cargar pedidos.';
            }
        }
    }

    async function cargarUsuarios() {
        try {
            var response = await fetch(apiBase + '/usuarios', {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            var data = await response.json();
            if (data.status === 'ok' && Array.isArray(data.data)) {
                renderUsuarios(data.data);
            }
        } catch (_error) {
            if (usuariosContenedor) {
                usuariosContenedor.textContent = 'Error al cargar usuarios.';
            }
        }
    }

    async function cargarReportes() {
        try {
            var response = await fetch(apiBase + '/reportes', {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            var data = await response.json();
            if (data.status === 'ok' && Array.isArray(data.data)) {
                renderReportes(data.data);
            }
        } catch (_error) {
            if (reportesContenedor) {
                reportesContenedor.textContent = 'Error al cargar reportes.';
            }
        }
    }

    async function cargarActividades() {
        try {
            var response = await fetch(apiBase + '/actividades', {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            var data = await response.json();
            if (data.status === 'ok' && Array.isArray(data.data)) {
                renderActividades(data.data);
            }
        } catch (_error) {
            if (actividadesContenedor) {
                actividadesContenedor.textContent = 'Error al cargar actividades.';
            }
        }
    }

    async function actualizarReporte(idReporte, estado) {
        try {
            var response = await fetch(apiBase + '/reportes/' + idReporte, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({ estado: estado }),
            });

            var data = await response.json();
            if (data.status === 'ok') {
                cargarReportes();
            } else {
                alert(data.message || 'No se pudo actualizar el reporte.');
            }
        } catch (_error) {
            alert('Error de conexión.');
        }
    }

    async function eliminarActividad(idActividad) {
        if (!confirm('¿Seguro que quieres eliminar la actividad #' + idActividad + '?')) {
            return;
        }

        try {
            var response = await fetch(apiBase + '/actividades/' + idActividad, {
                method: 'DELETE',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            var data = await response.json();
            if (data.status === 'ok') {
                cargarActividades();
            } else {
                alert(data.message || 'No se pudo eliminar la actividad.');
            }
        } catch (_error) {
            alert('Error de conexión.');
        }
    }

    // ===== ARRANQUE =====

    async function iniciar() {
        var esAdmin = await verificarAdmin();
        if (!esAdmin) {
            return;
        }

        // cargo todas las secciones en paralelo
        cargarUsuarios();
        cargarReportes();
        cargarActividades();
        cargarRutas();
        cargarPedidos();
    }

    // ===== CRUD RUTAS =====
    var formRutaContenedor = document.getElementById('admin-form-ruta');
    var btnCrearRuta = document.getElementById('btn-admin-crear-ruta');

    function renderRutas(rutas) {
        if (!rutasContenedor) return;
        limpiar(rutasContenedor);

        if (rutas.length === 0) {
            rutasContenedor.appendChild(crearElemento('p', 'No hay rutas.'));
            return;
        }

        var tabla = document.createElement('table');
        tabla.className = 'table table-striped';

        var thead = document.createElement('thead');
        var trHead = document.createElement('tr');
        var columnas = ['ID', 'Nombre', 'Distancia', 'Dificultad', 'Desnivel', 'Duración', 'Ubicación', 'Acciones'];
        for (var c = 0; c < columnas.length; c++) {
            var th = document.createElement('th');
            th.textContent = columnas[c];
            trHead.appendChild(th);
        }
        thead.appendChild(trHead);
        tabla.appendChild(thead);

        var tbody = document.createElement('tbody');
        for (var i = 0; i < rutas.length; i++) {
            var rt = rutas[i];
            var tr = document.createElement('tr');

            var vals = [rt.id_ruta, rt.nombre || '', rt.distancia ? rt.distancia + ' km' : '', rt.dificultad || '', rt.desnivel ? rt.desnivel + ' m' : '', rt.duracion || '', rt.ubicacion || ''];
            for (var v = 0; v < vals.length; v++) {
                var td = document.createElement('td');
                td.textContent = String(vals[v]);
                tr.appendChild(td);
            }

            var tdAcciones = document.createElement('td');

            var btnEditar = crearElemento('button', 'Editar', 'boton boton--primario me-1');
            btnEditar.type = 'button';

            (function (ruta) {
                btnEditar.addEventListener('click', function () {
                    mostrarFormularioEditarRuta(ruta);
                });
            })(rt);

            var btnEliminar = crearElemento('button', 'Eliminar', 'boton');
            btnEliminar.type = 'button';

            (function (idRuta) {
                btnEliminar.addEventListener('click', function () {
                    eliminarRuta(idRuta);
                });
            })(rt.id_ruta);

            tdAcciones.appendChild(btnEditar);
            tdAcciones.appendChild(btnEliminar);
            tr.appendChild(tdAcciones);

            tbody.appendChild(tr);
        }
        tabla.appendChild(tbody);

        rutasContenedor.appendChild(tabla);
    }

    function construirFormularioRuta(ruta) {
        var esEdicion = !!ruta;
        var form = document.createElement('form');
        form.className = 'formulario p-3 border rounded';

        form.appendChild(crearElemento('h4', esEdicion ? 'Editar ruta #' + ruta.id_ruta : 'Nueva ruta'));

        var campos = [
            { id: 'admin-ruta-nombre', label: 'Nombre', type: 'text', val: esEdicion ? (ruta.nombre || '') : '', required: true },
            { id: 'admin-ruta-distancia', label: 'Distancia (km)', type: 'number', val: esEdicion ? (ruta.distancia || '') : '', required: false },
            { id: 'admin-ruta-desnivel', label: 'Desnivel (m)', type: 'number', val: esEdicion ? (ruta.desnivel || '') : '', required: false },
            { id: 'admin-ruta-duracion', label: 'Duración', type: 'text', val: esEdicion ? (ruta.duracion || '') : '', required: false },
            { id: 'admin-ruta-ubicacion', label: 'Ubicación', type: 'text', val: esEdicion ? (ruta.ubicacion || '') : '', required: false },
            { id: 'admin-ruta-imagen', label: 'Imagen (ruta relativa)', type: 'text', val: esEdicion ? (ruta.imagen || '') : '', required: false },
        ];

        for (var f = 0; f < campos.length; f++) {
            var g = crearElemento('div', null, 'formulario__grupo mb-2');
            var lbl = crearElemento('label', campos[f].label, 'formulario__label');
            lbl.htmlFor = campos[f].id;
            g.appendChild(lbl);
            var inp = document.createElement('input');
            inp.type = campos[f].type;
            inp.id = campos[f].id;
            inp.className = 'formulario__input';
            inp.required = campos[f].required;
            inp.value = String(campos[f].val);
            if (campos[f].type === 'number') {
                inp.step = 'any';
                inp.min = '0';
            }
            g.appendChild(inp);
            form.appendChild(g);
        }

        // Dificultad select
        var grupoDif = crearElemento('div', null, 'formulario__grupo mb-2');
        grupoDif.appendChild(crearElemento('label', 'Dificultad', 'formulario__label'));
        var selectDif = document.createElement('select');
        selectDif.id = 'admin-ruta-dificultad';
        selectDif.className = 'formulario__input';
        var difs = ['', 'facil', 'moderada', 'dificil', 'muy dificil'];
        var difsTexto = ['Selecciona dificultad', 'Fácil', 'Moderada', 'Difícil', 'Muy difícil'];
        for (var d = 0; d < difs.length; d++) {
            var optD = document.createElement('option');
            optD.value = difs[d];
            optD.textContent = difsTexto[d];
            if (esEdicion && difs[d] === ruta.dificultad) {
                optD.selected = true;
            }
            selectDif.appendChild(optD);
        }
        grupoDif.appendChild(selectDif);
        form.appendChild(grupoDif);

        // Descripción
        var grupoDesc = crearElemento('div', null, 'formulario__grupo mb-2');
        grupoDesc.appendChild(crearElemento('label', 'Descripción', 'formulario__label'));
        var texDesc = document.createElement('textarea');
        texDesc.id = 'admin-ruta-descripcion';
        texDesc.className = 'formulario__input';
        texDesc.rows = 3;
        texDesc.value = esEdicion ? (ruta.descripcion || '') : '';
        grupoDesc.appendChild(texDesc);
        form.appendChild(grupoDesc);

        var msgDiv = crearElemento('div', null, '');
        msgDiv.id = 'admin-ruta-msg';
        form.appendChild(msgDiv);

        var btnGroup = crearElemento('div', null, 'd-flex gap-2 mt-2');
        var btnGuardar = crearElemento('button', esEdicion ? 'Guardar cambios' : 'Crear ruta', 'boton boton--primario');
        btnGuardar.type = 'submit';
        btnGroup.appendChild(btnGuardar);

        var btnCancelar = crearElemento('button', 'Cancelar', 'boton');
        btnCancelar.type = 'button';
        btnCancelar.addEventListener('click', function () { ocultarFormularioRuta(); });
        btnGroup.appendChild(btnCancelar);

        form.appendChild(btnGroup);
        return form;
    }

    function ocultarFormularioRuta() {
        if (formRutaContenedor) {
            limpiar(formRutaContenedor);
            formRutaContenedor.style.display = 'none';
        }
    }

    function obtenerDatosFormRuta() {
        return {
            nombre: document.getElementById('admin-ruta-nombre').value.trim(),
            descripcion: document.getElementById('admin-ruta-descripcion').value,
            distancia: parseFloat(document.getElementById('admin-ruta-distancia').value) || null,
            dificultad: document.getElementById('admin-ruta-dificultad').value || null,
            desnivel: parseInt(document.getElementById('admin-ruta-desnivel').value, 10) || null,
            duracion: document.getElementById('admin-ruta-duracion').value.trim() || null,
            ubicacion: document.getElementById('admin-ruta-ubicacion').value.trim() || null,
            imagen: document.getElementById('admin-ruta-imagen').value.trim() || null,
        };
    }

    function mostrarFormularioCrearRuta() {
        if (!formRutaContenedor) return;
        limpiar(formRutaContenedor);

        var form = construirFormularioRuta(null);

        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            var msgDiv = document.getElementById('admin-ruta-msg');
            if (msgDiv) limpiar(msgDiv);

            var datos = obtenerDatosFormRuta();
            if (!datos.nombre) {
                if (msgDiv) msgDiv.appendChild(crearElemento('p', 'El nombre es obligatorio.', 'text-danger'));
                return;
            }

            try {
                var response = await fetch(apiBase + '/ruta', {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify(datos),
                });
                var data = await response.json();
                if (data.status === 'ok') {
                    ocultarFormularioRuta();
                    cargarRutas();
                } else {
                    if (msgDiv) msgDiv.appendChild(crearElemento('p', data.message || 'Error al crear.', 'text-danger'));
                }
            } catch (_e) {
                if (msgDiv) msgDiv.appendChild(crearElemento('p', 'Error de conexión.', 'text-danger'));
            }
        });

        formRutaContenedor.appendChild(form);
        formRutaContenedor.style.display = '';
    }

    function mostrarFormularioEditarRuta(ruta) {
        if (!formRutaContenedor) return;
        limpiar(formRutaContenedor);

        var form = construirFormularioRuta(ruta);

        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            var msgDiv = document.getElementById('admin-ruta-msg');
            if (msgDiv) limpiar(msgDiv);

            var datos = obtenerDatosFormRuta();
            if (!datos.nombre) {
                if (msgDiv) msgDiv.appendChild(crearElemento('p', 'El nombre es obligatorio.', 'text-danger'));
                return;
            }

            try {
                var response = await fetch(apiBase + '/rutas/' + ruta.id_ruta, {
                    method: 'PUT',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify(datos),
                });
                var data = await response.json();
                if (data.status === 'ok') {
                    ocultarFormularioRuta();
                    cargarRutas();
                } else {
                    if (msgDiv) msgDiv.appendChild(crearElemento('p', data.message || 'Error al actualizar.', 'text-danger'));
                }
            } catch (_e) {
                if (msgDiv) msgDiv.appendChild(crearElemento('p', 'Error de conexión.', 'text-danger'));
            }
        });

        formRutaContenedor.appendChild(form);
        formRutaContenedor.style.display = '';
    }

    async function eliminarRuta(idRuta) {
        if (!confirm('¿Seguro que quieres eliminar la ruta #' + idRuta + '?')) {
            return;
        }

        try {
            var response = await fetch(apiBase + '/rutas/' + idRuta, {
                method: 'DELETE',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });
            var data = await response.json();
            if (data.status === 'ok') {
                cargarRutas();
            } else {
                alert(data.message || 'No se pudo eliminar la ruta.');
            }
        } catch (_error) {
            alert('Error de conexión.');
        }
    }

    async function cargarRutas() {
        try {
            var response = await fetch(apiBase + '/rutas', {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });
            var data = await response.json();
            if (data.status === 'ok' && Array.isArray(data.data)) {
                renderRutas(data.data);
            }
        } catch (_error) {
            if (rutasContenedor) {
                rutasContenedor.textContent = 'Error al cargar rutas.';
            }
        }
    }

    if (btnCrearRuta) {
        btnCrearRuta.addEventListener('click', function () {
            mostrarFormularioCrearRuta();
        });
    }

    iniciar();
});
