# Cumplimiento de rubrica final (PDF despliegue)

Fecha de revision: 2026-05-11

Fuente evaluada:

- `docs/requisitos-normalizados/06_despliegue_requisitos.md`
- `docs/rubrica.md`

## Resultado por criterio de despliegue

| ID | Criterio | Estado | Evidencia local | Accion aplicada |
|---|---|---|---|---|
| DEP-01 | Arranque de Apache | Cumple | `docs/evidencias/despliegue/sprint-3/01-xampp-dashboard-localhost.png`, `docs/evidencias/despliegue/sprint-3/07-procesos-servicios.txt` | Captura de dashboard XAMPP y procesos `httpd.exe` activos |
| DEP-02 | Importacion/gestion BD en phpMyAdmin | Cumple | `docs/evidencias/despliegue/sprint-3/02-phpmyadmin-home.png`, `docs/evidencias/despliegue/sprint-3/03-phpmyadmin-bd-pacepal.png` | Capturas de phpMyAdmin y estructura de BD `pacepal` |
| DEP-03 | Conexion app-BD y respuesta tecnica | Cumple | `docs/evidencias/despliegue/sprint-3/04-app-localhost-home.png`, `docs/evidencias/despliegue/sprint-3/05-api-session-localhost.png` | Validada carga local y endpoint `/api/session` con JSON |
| DEP-04 | Acceso desde localhost | Cumple | `docs/evidencias/despliegue/sprint-3/01-xampp-dashboard-localhost.png`, `docs/evidencias/despliegue/sprint-3/04-app-localhost-home.png` | Capturas de acceso operativo en `localhost` |
| DEP-05 | Puertos, servicios y configuracion tecnica | Cumple | `docs/evidencias/despliegue/sprint-3/06-netstat-puertos.txt`, `docs/evidencias/despliegue/sprint-3/07-procesos-servicios.txt`, `docs/despliegue/INSTALACION_LOCAL_XAMPP.md` | Generados logs de puertos/procesos y guia reproducible |
| DEP-06 | BD importada + permisos/ruta de proyecto | Cumple parcial | `docs/evidencias/despliegue/sprint-3/03-phpmyadmin-bd-pacepal.png`, `docs/despliegue/INSTALACION_LOCAL_XAMPP.md` | Documentada ruta en `htdocs` e importacion; no se adjunto captura especifica de permisos del sistema de archivos |
| DEP-07 | Publicacion del proyecto y validacion de entorno final | Cumple parcial | `docs/evidencias/despliegue/sprint-3/08-github-pages-publicacion-https.png`, `docs/evidencias/despliegue/sprint-3/09-https-headers-github-pages.txt` | Se anadio evidencia de publicacion publica por HTTPS y cabeceras de respuesta |
| DEP-08 | Dominio/SSL/seguridad/monitorizacion del entorno final | No cumple completo | `docs/evidencias/despliegue/sprint-3/09-https-headers-github-pages.txt` | Se cubrio SSL basico (HTTPS + HSTS). Falta evidencia de dominio propio y monitorizacion formal |

## Cierre de no conformidades ejecutables

Se han aplicado en esta revision las acciones que eran ejecutables en local sin infraestructura externa adicional:

1. Evidencias tecnicas de XAMPP/phpMyAdmin/API/localhost.
2. Evidencias de puertos y procesos (`netstat` y `tasklist`).
3. Evidencia de publicacion en GitHub Pages por HTTPS.
4. Evidencia de seguridad de transporte (`Strict-Transport-Security`).

## Pendiente no automatizable en este entorno

- DEP-08 completo: requiere infraestructura externa y evidencia de monitorizacion (por ejemplo, panel de observabilidad, alertas y registros operativos continuos), ademas de dominio propio si lo exige el tribunal.
