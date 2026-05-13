# Segunda limpieza documental de PacePal

**Fecha:** 13 de mayo de 2026  
**Alcance:** solo `docs/`  
**Objetivo:** dejar `docs/` como biblioteca documental limpia, sin carpetas duplicadas de modulo en la raiz y con la documentacion de trabajo centralizada en `01-bitacora/`.

## Criterio final aplicado

La raiz de `docs/` queda reservada para bloques generales:

- `00-material/`: material oficial y referencias.
- `01-bitacora/`: documentacion de trabajo por modulo y sprint.
- `09-entrega-final/`: entregable final y referencias de evaluacion.
- `evidencias/`: pruebas visuales, capturas, diagramas y resultados.
- `_archivo-historico-no-entregable/`: versiones antiguas, duplicados y material de generacion.

Ya no quedan carpetas de modulo sueltas en raiz como `03-agile/`, `04-diw/`, `05-dwec/`, `06-dwes/`, `07-despliegue/` u `08-sostenibilidad/`.

## Movimientos principales

- `02-requisitos/` -> `01-bitacora/requisitos/`.
- `03-agile/` -> `01-bitacora/agile/`.
- `04-diw/` -> `01-bitacora/diw/`.
- `05-dwec/` -> `01-bitacora/dwec/`.
- `06-dwes/` -> `01-bitacora/dwes/`.
- `07-despliegue/` -> `01-bitacora/despliegue/sprint-3/`.
- `08-sostenibilidad/` -> `01-bitacora/sostenibilidad/`.
- `documentacion-final/maquetacion-final/pacepal.odt` -> `09-entrega-final/pacepal.odt`.
- `documentacion-final/maquetacion-final/PacePal_Documentacion_Tecnica_Proyecto_Agile_Intermodular_2DAW_2025-2026.pdf` -> `09-entrega-final/`.
- Plantilla, rubrica y plantilla Markdown -> `09-entrega-final/referencias-evaluacion/`.

## Evidencias

Las evidencias reales se conservan fuera de la bitacora, en `evidencias/`, organizadas por modulo y sprint. No se eliminaron capturas, diagramas, wireframes, multimedia, Postman, Selenium, XAMPP, phpMyAdmin, accesibilidad ni responsive.

## Historico no entregable

- Material de generacion y maquetacion -> `_archivo-historico-no-entregable/generacion-maquetacion/`.
- Versiones antiguas de memoria -> `_archivo-historico-no-entregable/versiones-antiguas/`.
- Duplicados exactos -> `_archivo-historico-no-entregable/duplicados-exactos/`.

## Duplicados exactos archivados

- Copia repetida del PDF final.
- `react-post-login.png`.
- `react-logout.png`.
- `api-respuesta-get-productos.png`.
- `responsive-desktop-landing.png`.

## Eliminado

- Carpetas vacias resultantes de los movimientos.
- Estructuras visibles de `documentacion-final/`.
- Carpetas de modulo vacias en raiz tras consolidarlas dentro de `01-bitacora/`.

No se detectaron archivos `.~lock.*`, archivos de 0 bytes ni carpetas vacias al cierre de esta pasada.

## Arbol final resumido

```text
docs/
├── 00-material/
├── 01-bitacora/
│   ├── agile/
│   ├── despliegue/
│   ├── diw/
│   ├── dwec/
│   ├── dwes/
│   ├── general/
│   ├── requisitos/
│   └── sostenibilidad/
├── 09-entrega-final/
├── evidencias/
└── _archivo-historico-no-entregable/
```
