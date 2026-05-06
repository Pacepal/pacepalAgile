# Requisitos DWEC Cliente

Estos Markdown son una version de consulta. La fuente oficial y vinculante sigue siendo el PDF original ubicado en `docs/00-material`.

## 1. Fuente original

- `DWEC1_IMPLEMENTACIÓNDELFORMULARIO.pdf`  
  Ruta exacta: `docs/00-material/dwec/sprint-1/DWEC1_IMPLEMENTACIÓNDELFORMULARIO.pdf`  
  Tipo de documento: requisito oficial.
- `DWEC2_IMPLEMENTACIÓNDELCARRITO.pdf`  
  Ruta exacta: `docs/00-material/dwec/sprint-2/DWEC2_IMPLEMENTACIÓNDELCARRITO.pdf`  
  Tipo de documento: requisito oficial.
- `DWEC2_BuscadorDeProducotosAjax.pdf`  
  Ruta exacta: `docs/00-material/dwec/sprint-2/DWEC2_BuscadorDeProducotosAjax.pdf`  
  Tipo de documento: requisito oficial.
- `CLISprint3.pdf`  
  Ruta exacta: `docs/00-material/dwec/sprint-3/CLISprint3.pdf`  
  Tipo de documento: requisito oficial.

## 2. Resumen ejecutivo

DWEC construye la capa cliente por sprints. Primero exige formularios de registro y login con validaciones avanzadas e integración visual con DIW. Después añade carrito y buscador AJAX usando JavaScript Vanilla y tests funcionales. En Sprint 3 reestructura el escaparate completo en React, manteniendo el comportamiento ya implementado y documentando arquitectura, componentes y gestión de estado.

## 3. Requisitos obligatorios

| ID | Requisito | Área | Obligatorio | Evidencia esperada |
|---|---|---|---|---|
| DWEC-01 | El formulario de registro debe incluir nombre y apellidos, email, contraseña con complejidad mínima, confirmación y los campos opcionales definidos en el PDF. | Sprint 1 | Sí | Formulario implementado con campos y reglas visibles. |
| DWEC-02 | El formulario de login debe incluir email y contraseña. | Sprint 1 | Sí | Formulario de acceso funcional. |
| DWEC-03 | Los campos obligatorios deben diferenciarse visualmente de los opcionales. | Sprint 1 | Sí | Interfaz con marcadores claros. |
| DWEC-04 | Las validaciones personalizadas deben implementarse en JavaScript y en módulos separados; los errores y mensajes deben mostrarse sin recargar la página. | Sprint 1 | Sí | Código modular y comportamiento dinámico. |
| DWEC-05 | No se permite usar frameworks JavaScript en los sprints de formularios, carrito y buscador. | Restricción técnica | Sí | Código Vanilla y estructura coherente. |
| DWEC-06 | El formulario debe integrarse dentro del diseño DIW y dejar el código preparado para futura integración con backend. | Integración | Sí | UI coherente y módulos reutilizables. |
| DWEC-07 | El carrito debe permitir añadir productos o servicios, seleccionar cantidades, ver contador, ver contenido, eliminar y calcular total. | Sprint 2.1 | Sí | Carrito funcional en la interfaz. |
| DWEC-08 | El carrito debe implementarse con JavaScript Vanilla, DOM nativo, arrays de objetos y sin `innerHTML` para crear o modificar elementos. | Sprint 2.1 | Sí | Código modular y manipulaciones del DOM trazables. |
| DWEC-09 | El buscador debe cargar destacados, consultar un API por AJAX, filtrar por nombre y descripción, actualizar sin recarga y paginar si es necesario. | Sprint 2.2 | Sí | Galería dinámica con peticiones y estados de búsqueda. |
| DWEC-10 | El buscador debe gestionar sin errores búsquedas sin resultados, búsquedas consecutivas y vuelta a destacados. | Sprint 2.2 | Sí | Escenarios funcionales validados. |
| DWEC-11 | Las historias de usuario y criterios de aceptación de cliente deben documentarse en el repositorio en todos los sprints. | Documentación | Sí | Documentación actualizada del módulo Cliente. |
| DWEC-12 | Cada sprint de cliente exige tests funcionales y una carpeta específica para almacenarlos. | Testing | Sí | Scripts, grabaciones o exportaciones de pruebas. |
| DWEC-13 | Sprint 3 debe migrar la aplicación a React, organizando la interfaz por componentes y manteniendo formularios, buscador, carrito y carga desde API. | Sprint 3 | Sí | Proyecto React funcional con estructura de componentes. |
| DWEC-14 | En React se debe gestionar estado para productos, búsqueda y carrito, y consumir el API con `fetch` o `axios`. | Sprint 3 | Sí | Código React con gestión de estado y servicios/API. |
| DWEC-15 | La migración a React no debe introducir nuevas funcionalidades; debe conservar el comportamiento existente y el diseño definido por los demás módulos. | Sprint 3 | Sí | Paridad funcional frente a sprints anteriores. |

## 4. Recomendaciones

- En Sprint 1 se recomienda seguir directrices WCAG 2.0 para formularios: etiquetas asociadas, mensajes accesibles, contraste y navegación por teclado.
- En Sprint 1 y Sprint 2 se recomienda usar Selenium, Katalon Recorder u otra herramienta similar para pruebas funcionales.
- En el carrito se recomienda el uso de selectores CSS para acceder a elementos del DOM.
- En React no es necesario usar Redux, Zustand u otras librerías avanzadas; se recomienda `useState` y `useEffect`.

## 5. Entregables

| Entregable | Descripción | Ubicación esperada | Estado verificable |
|---|---|---|---|
| Formularios interactivos | Registro y login con validaciones, errores y éxito sin recarga. | Repositorio del proyecto | Verificable por uso real y código JS modular. |
| Carrito interactivo | Funcionalidad completa de carrito con cantidades y total. | Nueva rama del repositorio | Verificable por comportamiento y README. |
| Buscador AJAX | Galería dinámica, peticiones AJAX, paginación y filtrado. | Nueva rama del repositorio | Verificable por uso en navegador y documentación. |
| Proyecto React | Migración del escaparate a componentes React. | Nueva rama del repositorio | Verificable por estructura `src/` y ejecución. |
| README por sprint | Explicación funcional, decisiones técnicas, API usada, JSON, estado o arquitectura. | `README.md` del repositorio | Verificable por presencia y detalle. |
| Publicación web | Página publicada en GitHub Pages. | Entorno publicado | Verificable por enlace funcional. |
| Historias actualizadas | Historias y criterios de aceptación integrados en la documentación. | Documentación del proyecto | Verificable por trazabilidad con el sprint. |

## 6. Tests o validaciones exigidas

| Prueba | Qué debe comprobar | Evidencia |
|---|---|---|
| Formularios | Validación de campos, errores visibles, éxito sin recarga y coherencia visual. | Scripts o grabaciones de test funcional. |
| Carrito | Añadir, contar, visualizar, eliminar y calcular total. | Scripts o grabaciones de test funcional. |
| Buscador AJAX | Carga inicial, búsqueda con y sin resultados, paginación y peticiones AJAX. | Scripts, grabaciones o exportaciones. |
| React | Carga de productos, buscador, carrito y formulario ya migrados. | Tests funcionales almacenados en carpeta propia. |

## 7. Documentación exigida

- README: funcionamiento del carrito, buscador, API usado, JSON recibido, arquitectura React, componentes principales y ejecución del proyecto.
- Memoria: historias de usuario del módulo cliente, explicación del formulario, validaciones implementadas e integración con servidor.
- Anexos: capturas, grabaciones y exportaciones de pruebas funcionales.
- Pruebas: guía de ejecución de tests y carpeta propia de pruebas en el repositorio.
- Vídeo: los sprints 2 indican “vídeo actualizado” como parte del repositorio final agregado.
- Evidencias: ramas nuevas, GitHub Pages y documentación actualizada por sprint.

## 8. Relación con otros sprints

Sprint 1 crea la base interactiva sobre la landing de DIW. Sprint 2 la convierte en escaparate usable con carrito y buscador AJAX. Sprint 3 cambia la arquitectura a React, pero explícitamente conserva las funcionalidades previas; por tanto, no invalida los requisitos anteriores, sino que los arrastra al nuevo stack.

## 9. Riesgos de interpretación

- La prohibición de usar IAs aparece en los PDFs de Sprint 2 como regla de ejecución académica del sprint; no debe confundirse con un requisito funcional del producto final.
- El sprint React exige `npm install` y `npm run dev` en el README; esto es requisito documental del sprint, no una instrucción para la normalización.
- GitHub Pages aparece como publicación exigida en varios sprints, pero puede entrar en tensión con otros requisitos globales de despliegue en fases posteriores.
- La migración a React puede hacer que la estructura histórica `index.html/css/js/img` conviva con una nueva estructura `src/`; conviene revisión manual para armonizar ambas exigencias si se evalúa el proyecto completo.

## 10. Checklist de cumplimiento

- [ ] Requisito obligatorio localizado
- [ ] Entregables identificados
- [ ] Tests identificados
- [ ] Documentación necesaria identificada
- [ ] Riesgos anotados