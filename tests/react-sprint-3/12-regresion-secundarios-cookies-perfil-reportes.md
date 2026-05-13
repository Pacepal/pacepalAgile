# Caso 12 - Regresión secundaria (cookies, perfil, reportes)

## Objetivo

Ampliar la regresión documentada para flujos secundarios ya existentes con baja evidencia formal: cookies, perfil y reportes de administración.

## Entorno de ejecución

- Fecha de validación: 2026-05-07.
- Cliente React local en Vite: `http://127.0.0.1:5173/pacepalAgile/pacepal-react.html`.
- Sesión de prueba usada: `admin@pacepal.com / Admin1234*`.

---

## Escenario A - Cookies (preferencias)

### Pasos

1. Abrir la home React.
2. Pulsar `Configurar cookies` en el footer.
3. Verificar apertura del panel de preferencias.
4. Pulsar `Guardar preferencias`.

### Resultado esperado

- El panel de preferencias se muestra correctamente.
- Se mantiene consentimiento técnico y se persiste estado de consentimiento.

### Resultado observado

- Flujo validado en UI.
- Se confirma `localStorage.pacepal_cookie_consent = accepted`.

### Flujo real relacionado

- Ruta: `#inicio` + overlay de privacidad.
- Componente: `frontend-react/src/components/PrivacyNotice.jsx`.
- Persistencia: `persistCookieConsent()` en `frontend-react/src/services/demo.js`.

### Evidencia

- `docs/evidencias/dwec/sprint-3/Regresion_cookies_preferencias.png`.

---

## Escenario B - Perfil (login + carga de datos)

### Pasos

1. Ir a `#login`.
2. Iniciar sesión con `admin@pacepal.com / Admin1234*`.
3. Validar redirección a `#perfil`.
4. Comprobar bloque de datos personales e historial de pedidos.

### Resultado esperado

- Login correcto.
- Carga de vista de perfil sin recarga de SPA.

### Resultado observado

- Flujo validado en UI.
- Perfil cargado con datos del usuario admin y bloque de historial visible.

### Flujo real relacionado

- Rutas: `#login` -> `#perfil`.
- Componentes: `LoginForm.jsx`, `ProfilePage.jsx`.
- API real (cuando disponible): `GET /perfil`, `GET /pedidos`.
- Fallback demo (cuando API no disponible): perfil generado desde `session.user`.

### Evidencia

- `docs/evidencias/dwec/sprint-3/Perfil_usuario_admin.png` (perfil con datos reales de BD: nombre, email, DNI, rol, historial de pedidos).
- `docs/evidencias/dwec/sprint-3/Perfil-React.png` (vista general del perfil React).

---

## Escenario C - Reportes (panel admin)

### Pasos

1. Con sesión admin activa, navegar a `#admin`.
2. Revisar bloque `Reportes`.
3. Verificar comportamiento del panel ante respuesta de API.

### Resultado esperado

- El panel admin se muestra solo para rol admin.
- Se intenta la carga de reportes y se muestra tabla o mensaje controlado.

### Resultado observado

- Flujo validado en UI.
- Se muestra panel admin y bloque de reportes.
- En esta ejecución local, `requestJson('/reportes')` no devolvió datos y la UI mostró un estado controlado (`No se pudo completar la petición.` / `No hay datos disponibles`).

### Flujo real relacionado

- Ruta: `#admin`.
- Componente: `frontend-react/src/components/AdminPage.jsx`.
- API real: `GET /reportes` (junto a `GET /usuarios` y `GET /pedidos/admin`).

### Evidencia

- `docs/evidencias/dwec/sprint-3/Nuevos-usuarios.png` (panel admin con tabla de usuarios registrados, reportes y actividades).

---

## Cierre de regresión secundaria

- [x] Escenarios definidos: cookies, perfil y reportes.
- [x] Validación manual ejecutada en local.
- [x] Evidencia local guardada.
- [x] Cada caso vinculado a su flujo real (ruta/componente/API-fallback).
