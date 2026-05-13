# 5. PRUEBAS

## 5.1. Pruebas funcionales

La validación funcional del proyecto se ha realizado mediante pruebas manuales estructuradas, revisión de formularios, comprobación de flujos principales, pruebas de la API REST con Postman, verificación del cliente React en local con Vite y la API real, y comprobación del comportamiento del fallback demo en GitHub Pages.

| Caso                           | Qué se comprobó                                                 | Resultado esperado                                          | Resultado obtenido                       | Estado |
| ------------------------------ | --------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------- | ------ |
| Registro incorrecto            | Email inválido y contraseña débil                               | El sistema bloquea y muestra errores                        | Correcto                                 | ✅     |
| Registro correcto              | Datos válidos completos                                         | Cuenta creada; acceso o redirección                         | Correcto                                 | ✅     |
| Login incorrecto               | Credenciales erróneas                                           | Mensaje de error sin acceso                                 | Correcto                                 | ✅     |
| Login correcto                 | Credenciales válidas                                            | Acceso correcto y cambio de estado                          | Correcto                                 | ✅     |
| Logout                         | Cierre de sesión                                                | Estado invitado; sesión limpia en servidor                  | Correcto                                 | ✅     |
| Buscador dinámico de productos | Búsqueda, campo vacío, sin resultados                           | Galería actualizada sin recargar la página                  | Correcto                                 | ✅     |
| Carrito                        | Añadir, modificar cantidad, eliminar y finalizar pedido         | Contador, subtotal y total recalculados en tiempo real      | Correcto                                 | ✅     |
| Crear actividad                | Formulario de nueva actividad sobre ruta existente              | Actividad visible en el listado; API responde correctamente | Correcto                                 | ✅     |
| Unirse a actividad             | Usuario autenticado se une a actividad con plazas               | Plazas descontadas; confirmación visible                    | Correcto                                 | ✅     |
| Abandonar actividad            | Usuario autenticado abandona actividad                          | Estado actualizado; plazas recuperadas                      | Correcto                                 | ✅     |
| Perfil de usuario              | Consulta de datos y pedidos del usuario                         | Datos visibles; historial de pedidos correcto               | Correcto                                 | ✅     |
| Panel de administración        | Acceso al panel con rol admin                                   | Bloques de gestión cargados; acceso denegado sin rol        | Correcto                                 | ✅     |
| API REST con Postman           | Colección de endpoints en entorno local                         | Respuestas JSON correctas y códigos HTTP esperados          | Correcto, con evidencias complementarias | ✅     |
| Despliegue local con XAMPP     | Apertura de XAMPP, phpMyAdmin y aplicación en localhost         | Entorno operativo y accesible                               | Correcto                                 | ✅     |
| GitHub Pages con fallback demo | Cliente publicado; prueba de cookies, login demo y carrito demo | Cliente navega con fallback demo controlado                 | Correcto                                 | ✅     |

> Las pruebas detalladas, los pasos completos y las capturas de evidencia se recogen en el **Anexo 9.2 — Pruebas realizadas**.

---

## 5.2. Inspección de accesibilidad

La evidencia formal de accesibilidad más sólida del proyecto corresponde a la auditoría de la landing realizada durante el Sprint 2. Su alcance es la pantalla de inicio de PacePal y verifica el cumplimiento del nivel objetivo WCAG 2.1 A mediante revisión manual y herramientas automáticas.

Los resultados de esa auditoría son:

- **Lighthouse:** puntuación 100 en accesibilidad.
- **WAVE:** 0 errores en el alcance auditado.
- **WCAG Contrast Checker:** ratios de contraste correctos para los elementos revisados.

> **[INSERTAR FIGURA F1 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/diw/sprint-2/lighthouse-accesibilidad-100.png`
> _Figura F1. Resultado Lighthouse — Accesibilidad 100._

> **[INSERTAR FIGURA F2 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/diw/sprint-2/wave-analisis.png`
> _Figura F2. Análisis WAVE — Revisión de accesibilidad de la landing._

> **[INSERTAR FIGURA F3 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/diw/sprint-2/wcag-contraste.png`
> _Figura F3. Comprobación de contraste WCAG._

Los aspectos revisados y su resultado son los siguientes:

| Aspecto revisado         | Observación                                                                    | Resultado                       |
| ------------------------ | ------------------------------------------------------------------------------ | ------------------------------- |
| HTML semántico           | Uso correcto de encabezados, landmarks y elementos semánticos en la landing    | Correcto en el alcance auditado |
| Idioma de la página      | Atributo `lang="es"` presente en el documento                                  | Correcto                        |
| Etiquetas en formularios | Labels asociados a todos los campos en formularios de contacto y autenticación | Correcto                        |
| Mensajes de error        | Mensajes visibles bajo el campo correspondiente con texto descriptivo          | Correcto                        |
| Navegación por teclado   | Foco visible documentado; revisión con tecla Tab                               | Correcto en el alcance revisado |
| Contraste de colores     | Ratios registrados con WCAG Contrast Checker                                   | Correcto en el alcance revisado |
| Textos alternativos      | Presentes en imágenes de la landing y recursos de producto                     | Parcialmente verificado         |
| Atributos ARIA           | Formularios React con `aria-invalid` y `aria-describedby`                      | Parcialmente verificado         |

Es importante señalar que la auditoría formal completa se realizó sobre la landing. No existe en el repositorio una auditoría equivalente para la totalidad de las pantallas de la SPA React. La documentación lo recoge de forma honesta.

---

## 5.3. Inspección de usabilidad

La inspección de usabilidad se realizó con dos técnicas complementarias: revisión heurística interna del equipo y prueba de navegación con un usuario externo que no conocía el producto. El objetivo fue comprobar si la estructura y el flujo general resultaban comprensibles sin instrucciones adicionales.

| Aspecto revisado                         | Observación                                                                     | Resultado | Mejora aplicada                                                                            |
| ---------------------------------------- | ------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------ |
| Claridad del menú                        | El usuario identificó el menú principal y se movió entre secciones sin ayuda    | Positivo  | Sin cambios necesarios                                                                     |
| Coherencia visual                        | Las páginas mantienen identidad común: tipografía, paleta, tarjetas y espaciado | Positivo  | Sin cambios necesarios                                                                     |
| Comprensión de la landing                | La pantalla de inicio explica la propuesta del producto con claridad            | Positivo  | Sin cambios necesarios                                                                     |
| Localización del registro                | El usuario encontró el acceso a registro sin instrucciones                      | Positivo  | Sin cambios necesarios                                                                     |
| Diferenciación entre Rutas y Actividades | Duda inicial al interpretar ambos conceptos como sinónimos                      | Mejorable | Se añadió texto explicativo en la pantalla de actividades para diferenciar ambos conceptos |
| Responsive en móvil                      | El diseño se adapta correctamente a pantallas pequeñas                          | Positivo  | Sin cambios necesarios                                                                     |
| Formularios y errores                    | Los mensajes de error son comprensibles y aparecen cerca del campo              | Positivo  | Sin cambios necesarios                                                                     |

La observación más relevante para la defensa técnica es la duda entre Rutas y Actividades. Es un hallazgo honesto que acredita que se realizó una inspección real: el usuario externo confundió ambos conceptos porque en otras plataformas las rutas y las actividades son la misma cosa. La solución fue añadir un texto de apoyo en la pantalla de actividades que explica de forma breve la diferencia.

Las pruebas realizadas en esta sección sirvieron para validar el producto antes de la entrega, detectar mejoras aplicadas durante el desarrollo y documentar mejoras futuras razonables que quedan fuera del alcance de este proyecto.
