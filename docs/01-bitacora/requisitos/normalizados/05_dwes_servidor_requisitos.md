# Requisitos DWES Servidor

Estos Markdown son una version de consulta. La fuente oficial y vinculante sigue siendo el PDF original ubicado en `docs/00-material`.

## 1. Fuente original

- `2do Sprint DWES.pdf`  
  Ruta exacta: `docs/00-material/dwes/sprint-2/2do Sprint DWES.pdf`  
  Tipo de documento: requisito oficial.

## 2. Resumen ejecutivo

El sprint de servidor define el backend de una aplicación de comercio electrónico con gestión de usuarios, carrito y pedidos. Exige actualización de la base de datos al registrar usuarios o gestionar compras, sesiones con roles diferenciados, diseño del modelo relacional, API REST en PHP con JSON y una entrega documentada en GitHub con código, script SQL, diagrama/modelo y ejemplos de llamadas. El mismo PDF incorpora una rúbrica específica para evaluar calidad técnica y documentación.

## 3. Requisitos obligatorios

| ID | Requisito | Área | Obligatorio | Evidencia esperada |
|---|---|---|---|---|
| DWES-01 | El registro e inicio de sesión deben validar credenciales y actualizar la base de datos al registrarse. | Usuarios | Sí | Flujo funcional y persistencia en BBDD. |
| DWES-02 | Debe existir gestión de sesiones para mantener el estado del usuario. | Sesiones | Sí | Inicio de sesión persistente y controlado. |
| DWES-03 | Deben existir roles diferenciados para cliente y administrador con permisos distintos. | Autorización | Sí | Lógica de acceso y restricciones por rol. |
| DWES-04 | El carrito y los pedidos deben validar stock, duplicados y totales, actualizando la BBDD. | Carrito / Pedidos | Sí | Operaciones persistidas y consistentes. |
| DWES-05 | Se debe diseñar un modelo relacional con entidades, campos, relaciones y restricciones que mantengan la integridad de los datos. | BBDD | Sí | Script SQL y diagrama/modelo relacional. |
| DWES-06 | Debe existir una API REST en PHP que devuelva JSON para productos, categorías y pedidos. | API | Sí | Endpoints operativos con respuestas JSON. |
| DWES-07 | La API debe manejar errores y devolver respuestas claras. | API | Sí | Casos de error documentados y demostrables. |
| DWES-08 | La implementación debe usar XAMPP, PHP con PDO, JSON y sesiones PHP para autenticación y roles. | Tecnología | Sí | Stack técnico visible en código y README. |
| DWES-09 | La entrega en GitHub debe incluir `/src`, `/db`, `/docs`, `README.md` y ejemplos de llamadas a la API en JSON. | Entrega | Sí | Estructura de carpetas y documentación completa. |

## 4. Recomendaciones

- El propio PDF indica que el modelo relacional depende de cada proyecto y presenta tablas ejemplo; esos ejemplos no son una lista cerrada obligatoria.
- Puede ser necesario añadir más entidades o campos según el dominio concreto del proyecto, siempre respetando integridad y relaciones.

## 5. Entregables

| Entregable | Descripción | Ubicación esperada | Estado verificable |
|---|---|---|---|
| Código PHP del backend | API REST, controladores y modelos. | `src/` | Verificable por estructura y ejecución. |
| Script SQL | Creación de base de datos, tablas y relaciones. | `db/` | Verificable por importación y consistencia. |
| Documentación técnica | Modelo relacional, endpoints, roles, pruebas y capturas. | `docs/` | Verificable por apartados técnicos. |
| README | Instrucciones de instalación, uso y stack empleado. | Raíz del repositorio | Verificable por presencia y contenido. |
| Ejemplos JSON | Llamadas de ejemplo GET y POST. | Repositorio / documentación técnica | Verificable por payloads y respuestas. |

## 6. Tests o validaciones exigidas

| Prueba | Qué debe comprobar | Evidencia |
|---|---|---|
| Registro y login | Validación, sesiones y mensajes de error. | Capturas, pruebas manuales o Postman. |
| API REST | Endpoints, formato JSON y manejo de errores. | Documentación de endpoints y ejemplos. |
| BBDD | Integridad de datos, relaciones y actualización por operaciones. | Script SQL, diagrama y capturas de estado. |
| Roles y carrito | Permisos diferenciados, stock, duplicados y totales. | Casos de prueba y evidencia de persistencia. |

## 7. Documentación exigida

- README: instrucciones de instalación y uso.
- Memoria: explicación de modelo, endpoints, roles y decisiones técnicas.
- Anexos: diagrama entidad-relación, capturas de la base de datos y salidas de pruebas.
- Pruebas: programas o herramientas usados en las pruebas y evidencia de respuestas correctas o fallidas.
- Vídeo: no se exige explícitamente en este PDF, aunque otros sprints sí piden vídeo actualizado en el repositorio final conjunto.
- Evidencias: capturas de pantalla de API, base de datos y comportamiento de la aplicación en el momento de las pruebas.

## 8. Relación con otros sprints

Este sprint de servidor toma como base formularios, carrito y catálogo ya planteados en cliente, y les añade persistencia, sesiones y modelo de datos. No sustituye los requisitos de interfaz o cliente, sino que les da soporte backend y trazabilidad técnica.

## 9. Riesgos de interpretación

- El PDF mezcla historias de usuario, requisitos, ejemplos de tablas y rúbrica en un solo documento; conviene no confundir tabla ejemplo con diseño obligatorio cerrado.
- El documento menciona “carrito de la compra - BBDD” y pedidos con correo de confirmación, pero no detalla exhaustivamente todos los endpoints necesarios; revisión manual recomendable si se quiere una especificación API completa.
- La sección de rúbrica es útil para evaluación, pero no reemplaza los requisitos funcionales y técnicos ya descritos.

## 10. Checklist de cumplimiento

- [ ] Requisito obligatorio localizado
- [ ] Entregables identificados
- [ ] Tests identificados
- [ ] Documentación necesaria identificada
- [ ] Riesgos anotados