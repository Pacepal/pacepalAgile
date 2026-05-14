# Requisitos de despliegue

Estos Markdown son una version de consulta. La fuente oficial y vinculante sigue siendo el PDF original ubicado en `docs/00-material`.

## 1. Fuente original

- `Programación del Proyecto Agile Intermodular 25-26.pdf`  
  Ruta exacta: `docs/00-material/agile/Programación del Proyecto Agile Intermodular 25-26.pdf`  
  Tipo de documento: requisito oficial.
- `despliegue Sprint 3.pdf`  
  Ruta exacta: `docs/00-material/daw/sprint-3/despliegue Sprint 3.pdf`  
  Tipo de documento: requisito oficial.

## 2. Resumen ejecutivo

Los requisitos de despliegue aparecen en dos niveles. El documento global exige que el módulo de despliegue publique el proyecto y documente la validación del entorno final. El PDF específico de Sprint 3 concreta el trabajo inmediato como despliegue local en XAMPP, con verificación de Apache, base de datos, puertos, ubicación en `htdocs`, conexión a la BBDD y acceso desde `localhost`, además de una rúbrica basada en evidencias técnicas concretas.

## 3. Requisitos obligatorios

| ID | Requisito | Área | Obligatorio | Evidencia esperada |
|---|---|---|---|---|
| DEP-01 | El sistema debe permitir iniciar y detener Apache. | Entorno local | Sí | Panel XAMPP operativo y logs sin conflicto. |
| DEP-02 | El sistema debe permitir crear e importar la base de datos desde phpMyAdmin. | BBDD | Sí | Base importada y visible en phpMyAdmin. |
| DEP-03 | La aplicación debe conectarse correctamente a la base de datos configurada y mostrar errores claros si falla la conexión. | Conectividad | Sí | Captura o prueba de conexión correcta y mensajes de error. |
| DEP-04 | La aplicación debe ser accesible desde `localhost`. | Ejecución | Sí | Navegación exitosa desde navegador local. |
| DEP-05 | Se exige instalación correcta de XAMPP, control de conflictos con Apache2, configuración de host/usuario/contraseña/BD, puertos 80/3306 y proyecto en `htdocs`. | Configuración técnica | Sí | Configuración documentada y validada. |
| DEP-06 | Se requiere base de datos previamente exportada/importada y permisos adecuados en el sistema de archivos. | Configuración técnica | Sí | Capturas, rutas y prueba operativa. |
| DEP-07 | El documento global exige publicación del proyecto, documentación del proceso y validación del entorno final. | Despliegue final | Sí | Evidencias del entorno publicado y documentación del proceso. |
| DEP-08 | El documento global añade como mínimo configuración de dominio, SSL, seguridad básica y monitorización del entorno. | Despliegue final | Sí | Documentación y validación del entorno final. |

## 4. Recomendaciones

- El PDF específico de despliegue cita Windows o Linux y navegadores como Chrome o Firefox como entorno habitual, pero eso no limita de forma exclusiva el stack si se respetan los requisitos.
- La rúbrica recomienda documentar con capturas, logs y comandos de verificación; tratarlos como evidencia muy aconsejable incluso cuando el criterio permita distintas formas de prueba.

## 5. Entregables

| Entregable | Descripción | Ubicación esperada | Estado verificable |
|---|---|---|---|
| Entorno local operativo | Proyecto desplegado en XAMPP con BBDD importada y conexión válida. | Equipo local / documentación del sprint | Verificable por capturas y acceso desde `localhost`. |
| Evidencias técnicas | Panel XAMPP, logs, phpMyAdmin, puertos, configuración y prueba de conexión. | Anexos o documentación de despliegue | Verificable por capturas y salidas técnicas. |
| Documentación del proceso | Pasos de instalación, configuración y validación del entorno. | `docs/` o equivalente | Verificable por trazabilidad paso a paso. |
| Validación del entorno final | Publicación y documentación del entorno final según el documento global. | Entorno publicado y documentación final | Verificable por URL, SSL, dominio y monitorización si aplica. |

## 6. Tests o validaciones exigidas

| Prueba | Qué debe comprobar | Evidencia |
|---|---|---|
| Arranque de Apache | Inicio sin conflictos ni errores críticos. | Panel XAMPP y log de Apache. |
| Importación de BBDD | Base creada e importada correctamente. | phpMyAdmin y número de tablas/filas. |
| Conexión app-BD | Lectura y, como mínimo, validación de conexión efectiva. | Pantalla, log o consulta satisfactoria. |
| Acceso por navegador | Carga correcta en `http://localhost/...` sin errores 404/500. | Captura del navegador. |
| Puertos y servicios | Ausencia o resolución de conflictos con puertos/Apache2/IIS. | `netstat`, logs o captura equivalente. |

## 7. Documentación exigida

- README: si se usa, debe explicar instalación, arranque y validación del entorno.
- Memoria: debe recoger decisiones de despliegue, configuración del entorno y problemas resueltos.
- Anexos: capturas del panel XAMPP, phpMyAdmin, logs, salidas de `netstat` y pruebas de conexión.
- Pruebas: validaciones del arranque, puertos, acceso local y conectividad con la base de datos.
- Vídeo: no aparece como obligación en el PDF específico de despliegue, aunque el proyecto global puede apoyarse en defensa o vídeo final.
- Evidencias: la rúbrica de despliegue exige pruebas visuales y técnicas muy concretas.

## 8. Relación con otros sprints

El despliegue de Sprint 3 llega cuando la aplicación ya tiene frontend y backend definidos. El PDF específico se centra en el entorno local para pruebas internas, mientras que el documento global describe un objetivo final de publicación y validación del entorno desplegado. Lo razonable es interpretarlos como fases sucesivas, no como requisitos excluyentes.

## 9. Riesgos de interpretación

- Hay tensión aparente entre el despliegue local en XAMPP y la publicación en AWS con dominio, SSL y CloudWatch citada en el documento global.
- La rúbrica de despliegue pide evidencias muy detalladas; conviene revisión manual si se va a usar como checklist cerrado porque algunos criterios aceptan distintas pruebas equivalentes.
- El PDF específico habla de entorno local y pruebas internas antes de producción; no debería entenderse como sustitución automática del despliegue final del documento global.

## 10. Checklist de cumplimiento

- [ ] Requisito obligatorio localizado
- [ ] Entregables identificados
- [ ] Tests identificados
- [ ] Documentación necesaria identificada
- [ ] Riesgos anotados