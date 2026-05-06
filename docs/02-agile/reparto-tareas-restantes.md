# Reparto de tareas restantes · PacePal

## 0. Objetivo del documento

Este documento convierte el backlog maestro de docs/tareas-restantes-pacepal.md en un reparto operativo entre Pablo Sevillano Aparicio y Alejandro Pacheco para trabajar de forma ordenada y trasladar despues cada tarea al tablero de GitHub Projects.

No sustituye al backlog maestro, no cambia prioridades, no altera porcentajes y no cierra tareas. Su funcion es organizar responsables, revisiones, evidencias y orden de ejecucion para que el seguimiento sea visual, defendible y verificable.

## 1. Fuente de trabajo

| Fuente | Ruta | Uso |
|---|---|---|
| Backlog maestro | docs/tareas-restantes-pacepal.md | Fuente principal para IDs, prioridades, estados, criterios de aceptacion, riesgos y evidencias esperadas. |
| Requisitos normalizados | docs/requisitos-normalizados/ | Confirmar alcance oficial de Sprint 3, cliente React, multimedia, despliegue y trazabilidad por modulo. |
| Documentacion Agile | docs/02-agile/ | Mantener coherencia con reglas de evidencias, orden de trabajo, roadmap y traslado posterior al tablero. |
| README del proyecto | README.md | Contexto complementario para las tareas documentales criticas y deteccion de incoherencias que despues deben alinearse. |

## 2. Criterios de reparto

- Se prioriza todo P0 antes de abrir P1 y P2.
- Cada tarea tiene responsable principal y, cuando es critica, revisor distinto.
- No se trabaja en paralelo sobre el mismo archivo critico; si dos tareas comparten rutas sensibles, se ejecutan en secuencia.
- Pablo mantiene la revision final de integracion, coherencia documental, validacion global y control de calidad.
- Alejandro asume tareas tecnicas concretas y acotadas, especialmente bloques React/JSX, pruebas funcionales y evidencias verificables.
- Ninguna tarea se considera defendible si no deja evidencia local concreta: capturas, pruebas, README, documentacion o validacion tecnica.
- Las tareas documentales deben quedar asociadas a rutas, pruebas o evidencias reales, no a descripciones genericas.
- Si una tarea puede romper sesion, API, carrito, despliegue o trazabilidad global, la revision de Pablo es obligatoria antes de moverla a cierre.
- Cada tarea debe poder copiarse al tablero como unidad clara, con responsable visible, criterio de cierre y evidencia asociada.

## 3. Resumen de roles

| Persona | Rol operativo | Responsabilidades principales |
|---|---|---|
| Pablo Sevillano Aparicio | Coordinacion tecnica, revision final e integracion | Revision de coherencia, documentacion critica, API, validacion final, actualizacion de backlog y control de calidad. |
| Alejandro Pacheco | Desarrollo de tareas asignadas y apoyo en React/JSX | Implementacion de componentes, pruebas funcionales, evidencias y tareas concretas asignadas. |

## 4. Reparto P0

| ID | Tarea | Responsable principal | Revisor | Prioridad | Archivos implicados | Evidencia esperada | Estado |
|---|---|---|---|---|---|---|---|
| P0-01C | Migrar galeria y carga desde API | Alejandro Pacheco | Pablo Sevillano Aparicio | P0 | frontend-react/src/components/; frontend-react/src/services/; frontend-react/src/App.jsx; src/api/index.php como referencia de contrato | Capturas de la galeria React, consumo de API real documentado y prueba funcional de carga inicial. | pendiente |
| P0-01D | Migrar buscador por nombre y descripcion | Alejandro Pacheco | Pablo Sevillano Aparicio | P0 | frontend-react/src/components/; frontend-react/src/hooks/ o estado equivalente; frontend-react/src/services/; tests/funcionales/ | Busqueda operativa en React con escenarios con y sin resultados, mas evidencia local de paridad funcional. | pendiente |
| P0-01E | Migrar carrito | Alejandro Pacheco | Pablo Sevillano Aparicio | P0 | frontend-react/src/components/; frontend-react/src/hooks/ o estado equivalente; frontend-react/src/services/; tests/funcionales/ | Evidencia de alta, contador, cantidades, borrado y total en React, con validacion fuerte antes de integrar. | pendiente |
| P0-01F | Migrar formulario de registro/login | Alejandro Pacheco | Pablo Sevillano Aparicio | P0 | frontend-react/src/components/; frontend-react/src/services/; frontend-react/src/App.jsx; src/api/index.php y controladores como referencia funcional | Formularios React con validaciones visibles, conexion con flujo real y prueba local de no regresion de sesion. | pendiente |
| P0-01G | Documentar arquitectura y evidencias | Pablo Sevillano Aparicio | Alejandro Pacheco | P0 | frontend-react/README.md; docs/04-dwec/; docs/evidencias/dwec/ | README tecnico, explicacion de componentes y estado, relacion con API y evidencias actualizadas del Sprint 3. | pendiente |
| P0-02 | Integrar multimedia DIW Sprint 3 con trazabilidad real | Alejandro Pacheco | Pablo Sevillano Aparicio | P0 | docs/03-diw/README.md; pages/ o frontend-react/ segun integracion real; img/landing/; docs/evidencias/diw/sprint-3/ | Capturas o grabacion local, recurso multimedia integrado y trazabilidad clara del recurso utilizado. | pendiente |
| P0-03 | Documentar y evidenciar despliegue local | Pablo Sevillano Aparicio | Alejandro Pacheco | P0 | docs/06-daw/sprint-3/; docs/evidencias/despliegue/; README.md; db/ | Guia reproducible, capturas de XAMPP y phpMyAdmin, validacion localhost y evidencia de conexion con BBDD. | pendiente |
| P0-04 | Alinear documentacion critica y rubrica con el codigo real | Pablo Sevillano Aparicio | Alejandro Pacheco | P0 | README.md; docs/05-dwes/sprint-2/endpoints-api.md; docs/05-dwes/sprint-2/modelo-relacional.md; docs/evidencias/dwes/README.md | Documentacion alineada con codigo y evidencias, mas trazabilidad clara entre requisito, implementacion y soporte local. | pendiente |
| P0-05 | Consolidar pruebas y evidencias minimas para defensa | Alejandro Pacheco | Pablo Sevillano Aparicio | P0 | tests/tests.md; tests/postman/; tests/funcionales/; docs/evidencias/dwec/; docs/evidencias/dwes/; docs/evidencias/diw/ | Ejecuciones coherentes, capturas finales, casos de prueba actualizados y validacion de que la evidencia refleja el estado real. | parcial |

### Observaciones P0

- P0-01C, P0-01D, P0-01E y P0-01F deben ejecutarse en secuencia sobre frontend-react/ para no abrir dos tareas a la vez sobre los mismos archivos criticos.
- P0-01G depende de tener una version verificable de P0-01C a P0-01F; no debe cerrarse solo con una descripcion teorica.
- P0-01E y P0-01F requieren revision fuerte de Pablo porque afectan estado, carrito, autenticacion y contrato con API/sesion.
- P0-02 puede preparar inventario y decision de recurso antes, pero la integracion final debe coordinarse con la arquitectura ya documentada en P0-01G.
- P0-03 y P0-04 no deben editar README.md al mismo tiempo; primero conviene cerrar la guia de despliegue base y despues alinear el README global.
- P0-05 debe ejecutarse sobre una version ya estabilizada del trabajo P0 y no debe darse por cerrada sin validacion final de Pablo.

## 5. Reparto P1

| ID | Tarea | Responsable principal | Revisor | Motivo | Evidencia esperada | Estado |
|---|---|---|---|---|---|---|
| P1-01 | Resolver la duplicidad controlada entre requisitos previos y requisitos normalizados | Pablo Sevillano Aparicio | Alejandro Pacheco | Afecta a la fuente principal de verdad y a la trazabilidad futura del proyecto. | Decision documentada, referencia unica recomendada y trazabilidad del contenido que se conserve. | pendiente |
| P1-02 | Ampliar cobertura de pruebas automatizadas y manuales fuera de Sprint 1 | Alejandro Pacheco | Pablo Sevillano Aparicio | Es una tarea tecnica acotable y verificable por bloques funcionales. | Nuevos casos en tests/selenium/ o tests/funcionales/, resultados guardados y evidencia local asociada. | pendiente |
| P1-03 | Consolidar la trazabilidad de video, anuncio y material multimedia | Alejandro Pacheco | Pablo Sevillano Aparicio | Continua el trabajo multimedia y evita confundir recurso base, entrega final y material externo. | Inventario claro de recursos, ubicacion, uso y relacion con sprint o entregable. | pendiente |
| P1-04 | Revisar permisos y alcance admin frente a la documentacion existente | Pablo Sevillano Aparicio | Alejandro Pacheco | Impacta backend, roles, rutas y defensa tecnica del alcance real del panel admin. | Documentacion de roles alineada con el backend real y carencias convertidas en tareas explicitas si procede. | pendiente |

## 6. Reparto P2

| ID | Tarea | Responsable sugerido | Motivo | Se lleva a GitHub Projects |
|---|---|---|---|---|
| P2-01 | Limpiar README vacios o minimos de evidencias | Pablo Sevillano Aparicio | Mejora documental transversal una vez existan evidencias reales cerradas. | Si |
| P2-02 | Normalizar nomenclatura y rutas historicas desfasadas en documentacion | Pablo Sevillano Aparicio | Reduce confusion y deja una documentacion mas consistente para defensa y mantenimiento. | Si |
| P2-03 | Completar glosario, bibliografia y anexos globales | Pablo Sevillano Aparicio | Cierra huecos de rubrica sin tocar funcionalidad critica. | Si |
| P2-04 | Anadir regresion de cookies, perfil y reportes | Alejandro Pacheco | Amplia cobertura sobre flujos aislables y verificables sin bloquear P0. | Si |
| P2-05 | Preparar verificacion posterior de publicacion publica una vez cerrado el entorno local | Pablo Sevillano Aparicio | Solo tiene sentido cuando despliegue local, evidencias y documentacion esten ya consolidados. | Si |

## 7. Orden recomendado de trabajo

Se mantiene el orden del backlog P0 porque refleja bien la dependencia tecnica: primero React por bloques pequenos, despues documentacion de arquitectura, luego multimedia, despliegue, alineacion documental y por ultimo consolidacion final de pruebas y evidencias.

1. P0-01C - Migrar galeria y carga desde API.
2. P0-01D - Migrar buscador por nombre y descripcion.
3. P0-01E - Migrar carrito.
4. P0-01F - Migrar formulario de registro/login.
5. P0-01G - Documentar arquitectura y evidencias.
6. P0-02 - Integrar multimedia DIW Sprint 3 con trazabilidad real.
7. P0-03 - Documentar y evidenciar despliegue local.
8. P0-04 - Alinear documentacion critica y rubrica con el codigo real.
9. P0-05 - Consolidar pruebas y evidencias minimas para defensa.

Regla operativa asociada:

- Alejandro no debe abrir la siguiente subtarea React hasta que Pablo revise la anterior.
- Pablo no deberia abrir P0-04 mientras P0-03 este tocando README.md.
- P1 y P2 solo se abren cuando el bloque P0 ya no tenga tareas en revision critica.

## 8. Tareas listas para pasar a GitHub Projects

| Issue sugerida | Descripcion corta | Responsable | Prioridad | Labels sugeridas | Criterio de cierre |
|---|---|---|---|---|---|
| P0-01C · Galeria React con carga desde API | Migrar el escaparate a React consumiendo la API real sin romper la referencia funcional actual. | Alejandro Pacheco | P0 | P0, react, dwec, review, evidence | La galeria React carga datos reales, hay evidencia local y Pablo valida la paridad funcional. |
| P0-01D · Buscador React por nombre y descripcion | Reimplementar el buscador en React manteniendo escenarios con y sin resultados. | Alejandro Pacheco | P0 | P0, react, dwec, tests, review | La busqueda funciona en React, se prueba localmente y queda documentada como comportamiento real. |
| P0-01E · Carrito React | Migrar carrito con contador, cantidades, borrado y total, con foco en no introducir regresiones. | Alejandro Pacheco | P0 | P0, react, dwec, tests, review | El carrito React cubre el flujo completo y Pablo valida la integracion antes de cierre. |
| P0-01F · Formularios React de registro y login | Llevar autenticacion y validaciones al nuevo cliente React sin romper sesion ni contrato con API. | Alejandro Pacheco | P0 | P0, react, dwec, tests, review | Formularios operativos, validacion visible, evidencia local y revision fuerte de Pablo. |
| P0-01G · Documentar arquitectura React y evidencias | Explicar componentes, gestion de estado, consumo de API y soporte visual del Sprint 3. | Pablo Sevillano Aparicio | P0 | P0, react, docs, evidence, review | README y documentacion tecnica actualizados con evidencias reales y referencia clara a la arquitectura. |
| P0-02 · Multimedia DIW Sprint 3 | Integrar el recurso multimedia oficial y dejar trazabilidad clara de uso y evidencia responsive. | Alejandro Pacheco | P0 | P0, diw, evidence, review | El recurso queda integrado, documentado y validado visualmente con revision de Pablo. |
| P0-03 · Despliegue local XAMPP | Documentar instalacion, validacion tecnica y evidencias del entorno local con BBDD. | Pablo Sevillano Aparicio | P0 | P0, deploy, docs, evidence, review | Existe guia reproducible, capturas tecnicas y prueba local de funcionamiento en localhost. |
| P0-04 · Alinear documentacion critica | Corregir endpoints, modelo de datos, README y evidencias para que coincidan con el codigo real. | Pablo Sevillano Aparicio | P0 | P0, docs, dwes, review | La documentacion critica deja de contradecir al codigo y queda trazabilidad defendible. |
| P0-05 · Consolidar pruebas y evidencias minimas | Reunir pruebas funcionales, Postman y capturas finales coherentes con el estado real del proyecto. | Alejandro Pacheco | P0 | P0, tests, evidence, review | Las pruebas quedan actualizadas, las evidencias son locales y Pablo valida el cierre global. |
| P1-01 · Resolver duplicidad documental | Decidir y documentar como conviviran el documento historico y la fuente normalizada principal. | Pablo Sevillano Aparicio | P1 | P1, docs, review | La decision queda registrada y no quedan dos fuentes principales de requisitos. |
| P1-02 · Ampliar pruebas Sprint 2 y 3 | Crear mas cobertura manual o automatizada para carrito, actividad, perfil y otros flujos pendientes. | Alejandro Pacheco | P1 | P1, tests, evidence, review | Hay nuevos casos de prueba guardados localmente y enlazados con documentacion o evidencias. |
| P1-03 · Trazabilidad multimedia completa | Inventariar recursos multimedia locales y externos, indicando cual es base, cual es entrega y cual es apoyo. | Alejandro Pacheco | P1 | P1, diw, docs, evidence | El inventario distingue cada recurso y su relacion con sprint o entregable. |
| P1-04 · Revisar roles y alcance admin | Ajustar documentacion de permisos y panel admin al comportamiento real del backend. | Pablo Sevillano Aparicio | P1 | P1, dwes, docs, review | La documentacion refleja el alcance real y las carencias quedan explicitadas sin sobrepromesas. |
| P2-01 · Limpiar README de evidencias | Mejorar README minimos o vacios cuando ya existan evidencias reales suficientes. | Pablo Sevillano Aparicio | P2 | P2, docs | Los README aportan trazabilidad real y dejan de ser placeholders. |
| P2-02 · Normalizar nomenclatura documental | Corregir rutas antiguas y nombres inconsistentes en la documentacion. | Pablo Sevillano Aparicio | P2 | P2, docs | La nomenclatura queda alineada con la estructura real del repositorio. |
| P2-03 · Completar glosario y anexos | Cerrar anexos documentales pendientes de la rubrica global. | Pablo Sevillano Aparicio | P2 | P2, docs | El bloque documental complementario queda completo y util para defensa. |
| P2-04 · Regresion de cookies, perfil y reportes | Anadir verificaciones a flujos secundarios que ya existen pero tienen poca evidencia formal. | Alejandro Pacheco | P2 | P2, tests | Existen casos de regresion o validaciones manuales documentadas para esos flujos. |
| P2-05 · Verificar publicacion publica despues del entorno local | Preparar la comprobacion posterior de publicacion solo cuando el entorno local este cerrado. | Pablo Sevillano Aparicio | P2 | P2, deploy, docs | La verificacion publica queda planificada y documentada con criterio realista de cierre. |

## 9. Reglas de cierre de tarea

Cada tarea solo se considera cerrada si cumple todo lo siguiente:

- Tiene codigo o documentacion correspondiente segun su naturaleza.
- Tiene evidencia local concreta y localizable dentro del repositorio.
- Tiene una validacion minima: prueba funcional, captura, log, README tecnico o documento de soporte.
- Tiene revision de Pablo cuando afecta integracion, API, sesion, despliegue o coherencia global.
- Tiene actualizacion posterior del backlog maestro cuando exista evidencia suficiente para justificar el cambio de estado.

## 10. Riesgos del reparto

| Riesgo | A quien afecta | Impacto | Mitigacion |
|---|---|---|---|
| Tareas React demasiado grandes | Alejandro Pacheco y Pablo Sevillano Aparicio | Alto | Mantener P0-01C, P0-01D, P0-01E y P0-01F como bloques pequenos y secuenciales, con revision entre una y otra. |
| Tocar archivos criticos a la vez | Ambos | Alto | No abrir en paralelo cambios sobre frontend-react/, README.md, docs/05-dwes/ o rutas de API sin coordinacion previa. |
| Falta de evidencias reales | Ambos | Alto | Exigir capturas, pruebas o documentacion concreta antes de pasar una tarea a revision o cierre. |
| Documentacion desalineada con el codigo | Pablo Sevillano Aparicio principalmente, con apoyo de Alejandro Pacheco | Alto | Resolver P0-04 antes del cierre global y contrastar siempre con requisitos normalizados y codigo real. |
| Pruebas incompletas o parciales | Alejandro Pacheco principalmente, con validacion de Pablo Sevillano Aparicio | Alto | Ejecutar P0-05 y P1-02 con checklist minimo por flujo y guardar resultados locales. |
| Integracion API y sesion mas fragil de lo previsto | Ambos | Alto | Marcar revision fuerte en P0-01F, P0-03 y P1-04, y no cerrar nada sin validacion local de contrato y comportamiento. |

## 11. Checklist de uso del documento

- [ ] Tareas P0 repartidas.
- [ ] Tareas P1 repartidas.
- [ ] Tareas P2 identificadas.
- [ ] Responsables definidos.
- [ ] Revisores definidos.
- [ ] Evidencias esperadas definidas.
- [ ] Tareas preparadas para GitHub Projects.
- [ ] No se ha modificado codigo.
- [ ] No se ha cerrado ninguna tarea sin evidencia.