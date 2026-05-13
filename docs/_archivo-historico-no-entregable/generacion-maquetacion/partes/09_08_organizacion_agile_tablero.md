# Anexo 9.8 — Organización Agile y evolución del tablero

Este anexo documenta el modelo de trabajo Agile adoptado en PacePal, la evolución del
tablero de seguimiento a lo largo de los sprints y las decisiones de proceso más relevantes.
Como fuente de trabajo se utilizaron los documentos internos `docs/02-agile/01-scrum-base.md`,
`docs/02-agile/02-historias-usuario-v1.md` y `docs/02-agile/04-retro-sprint2-feedback.md`.

---

## Modelo de trabajo: Scrum educativo

PacePal adoptó un marco Scrum adaptado al contexto educativo del Proyecto Agile Intermodular
de 2.º DAW. No se replica un Scrum empresarial completo, pero sí se trabaja con los
elementos esenciales:

- **Backlog** priorizado con historias de usuario y criterios de validación.
- **Sprints** con duración fija, objetivos definidos y revisión al final.
- **Roles** asumidos por los dos integrantes del equipo.
- **Evidencias** documentadas desde el inicio para trazabilidad en la defensa.
- **Retrospectiva** al final de cada sprint para detectar mejoras.

El modelo no pretende simular un equipo empresarial, sino aplicar el pensamiento Agile
con sentido real en un proyecto académico.

---

## Roles del equipo

| Rol                      | Responsabilidades                                                                                                         | Cómo se aplicó en PacePal                                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Product Owner**        | Priorizar el backlog, decidir el alcance de cada sprint, aceptar funcionalidades según criterios de validación            | El PO decidió el orden de funcionalidades; cuando algo se complicaba, recortaba alcance sin arrastrar deuda técnica sin documentar |
| **Scrum Master**         | Mantener el tablero organizado, quitar bloqueos, cuidar que el Scrum tuviera sentido, asegurar evidencias desde el inicio | El SM mantuvo el tablero limpio y actualizado; verificó que cada historia cerrada tenía evidencia asociada                         |
| **Equipo de desarrollo** | Construir el producto, dividir el trabajo en tareas, mantener el código ordenado e integrar todos los módulos             | Ambos integrantes asumieron desarrollo full-stack; el trabajo se dividió por módulo y sprint, no por especialidad                  |

Los dos integrantes del equipo son Pablo Sevillano Aparicio y Alejandro Pacheco. Los roles
se asumieron de forma compartida y rotatoria según la carga de cada sprint.

---

## Sprints y objetivos

| Sprint       | Período                 | Materias                    | Objetivo principal                                                                                       |
| ------------ | ----------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Sprint 0** | Inicio del proyecto     | Agile, transversal          | Definir el producto, el equipo, el backlog inicial y las reglas de evidencias                            |
| **Sprint 1** | Primer ciclo de trabajo | DIW, DWEC                   | Landing page, formularios, diseño visual, wireframes, guía de estilos, accesibilidad básica              |
| **Sprint 2** | Segundo ciclo           | DIW, DWEC, DWES             | Accesibilidad formal, tienda dinámica, buscador AJAX, carrito, API REST, base de datos, sesiones y roles |
| **Sprint 3** | Tercer ciclo            | DIW, DWEC, DWES, Despliegue | Migración a React con Vite, vídeo, fallback demo, despliegue local y publicación en GitHub Pages         |
| **Cierre**   | Fase final              | Transversal, documentación  | Consolidación documental, revisión de calidad, elaboración de la memoria final                           |

---

## Tablero de trabajo

El seguimiento del trabajo se realizó con un tablero de tareas con columnas estándar:

| Columna           | Contenido                                       |
| ----------------- | ----------------------------------------------- |
| **Backlog**       | Historias pendientes de planificar              |
| **Sprint activo** | Historias seleccionadas para el sprint en curso |
| **En progreso**   | Tareas en desarrollo activo                     |
| **Revisión**      | Tareas terminadas pendientes de verificar       |
| **Hecho**         | Tareas cerradas con evidencia asociada          |

El tablero evolucionó a lo largo de los sprints: en Sprint 0 se llenó con las historias
iniciales priorizadas; en Sprint 1 y 2 se fue refinando el backlog con tareas más pequeñas;
en Sprint 3 y el cierre se centró en completar las funcionalidades pendientes y en la
documentación final.

---

## Política de evidencias

Desde el Sprint 0 se estableció que cada historia cerrada debía tener evidencia asociada.
Los tipos de evidencia aceptados fueron:

- Capturas de pantalla de la funcionalidad funcionando.
- Archivos de prueba en `tests/funcionales/` o `tests/react-sprint-3/`.
- Commits en la rama del sprint correspondiente.
- Documentos técnicos en `docs/04-dwec/`, `docs/05-dwes/`, `docs/03-diw/`, etc.
- Archivos de texto con respuestas de la API o del entorno.

Esta política permitió que la memoria final tuviera trazabilidad real entre requisitos,
implementación y prueba, sin depender de reconstrucciones a posteriori.

---

## Retrospectiva Sprint 2 — aprendizajes clave

Tras el Sprint 2, la revisión externa detectó los siguientes aspectos de mejora:

- **Prototipado poco visible:** los wireframes y bocetos existían en el repositorio pero
  no quedaban integrados de forma clara en la narrativa de entrega.
- **Defendibilidad del backend:** durante la corrección surgieron dudas sobre sesiones,
  cookies y estabilidad del servidor. La solución adoptada fue añadir evidencias técnicas
  concretas (capturas de sesión, healthcheck, puertos) y documentarlas en el Sprint 3.
- **Justificación del proceso de diseño:** el resultado visual era correcto, pero faltaba
  explicar el recorrido desde el análisis de competencia hasta las decisiones concretas.

Estos tres aprendizajes condicionaron directamente la organización del Sprint 3 y la
estructura de esta memoria final.

---

## Definición de "hecho"

A lo largo del proyecto se mantuvo una definición de "hecho" consistente:

- La funcionalidad cumple los criterios de validación de la historia de usuario.
- Existe al menos una evidencia (captura, test o documento) que lo demuestra.
- El código está integrado en la rama del sprint correspondiente.
- Si hay documentación técnica asociada, está en la carpeta `docs/` correcta.

Esta definición aseguró que el proyecto fuera defendible en cada punto de revisión,
no solo en la entrega final.
