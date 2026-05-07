# Tests · PacePal

## Sprint 1 DWEC — Formularios

Pruebas del formulario de registro y login.

### Funcionales (manuales)

- [Caso 01 · Registro incorrecto](funcionales/01-registro-incorrecto.md)
- [Caso 02 · Registro correcto](funcionales/02-registro-correcto.md)
- [Caso 03 · Login incorrecto](funcionales/03-login-incorrecto.md)
- [Caso 04 · Login correcto](funcionales/04-login-correcto.md)
- [Caso 05 · Tarjeta aparece/desaparece](funcionales/05-tarjeta-aparece-desaparece.md)

### Automatizada (Selenium)

- Script: [tests/selenium/test-registro.js](selenium/test-registro.js)
- Comando: `node tests/selenium/test-registro.js`

---

## Sprint 2 y 3 DWEC — Tienda, Carrito, Actividades, Perfil, Admin

Pruebas de todos los flujos dinámicos con AJAX/API.

### Funcionales (manuales)

- [Caso 06 · Buscador dinámico de productos](funcionales/06-buscador-productos.md)
- [Caso 07 · Carrito](funcionales/07-carrito.md)
- [Caso 08 · Actividades](funcionales/08-actividades.md)
- [Caso 09 · Perfil de usuario](funcionales/09-perfil.md)
- [Caso 10 · Panel de administración](funcionales/10-admin.md)

### Automatizada (Selenium)

- Script: [tests/selenium/test-buscador.js](selenium/test-buscador.js)
- Comando: `node tests/selenium/test-buscador.js`
- Cubre: TC-01 (destacados), TC-02 (búsqueda nombre), TC-04 (sin resultados), TC-07 (retorno a destacados)
- Requisito: XAMPP activo, `chromedriver` en PATH

### API (Postman)

- Colección: [tests/postman/pacepal.postman_collection.json](postman/pacepal.postman_collection.json)
- Entorno: [tests/postman/pacepal-local.postman_environment.json](postman/pacepal-local.postman_environment.json)
- Documentación extendida: [docs/dwes/pruebas-postman.md](../docs/dwes/pruebas-postman.md)

---

## Evidencias gráficas

- Carpeta: [docs/evidencias/](../docs/evidencias/)
