# Desarrollo Web en Entorno Servidor (DWES)

Documentación del módulo DWES del proyecto **PacePal**.

Este módulo recoge la preparación e implementación de la lógica de servidor de la aplicación web, incluyendo la organización del proyecto para trabajar con PHP, sesiones, base de datos y API.

---

# Sprint 2 — Arquitectura de servidor

Durante el Sprint 2 se ha preparado la base del backend de la aplicación, reorganizando la estructura del proyecto para poder integrar correctamente la lógica de servidor en PHP.

El objetivo de este sprint es comenzar la transición desde una aplicación principalmente estática hacia una aplicación dinámica conectada a base de datos.

---

# Preparación de arquitectura

En primer lugar se realizó una reorganización estructural del proyecto para separar mejor las vistas, la lógica de servidor y la futura API.

Los formularios de autenticación se migraron a PHP (`login.php` y `register.php`) con el objetivo de permitir posteriormente la validación en servidor y la gestión de sesiones de usuario.

También se reorganizó la arquitectura de páginas dentro de la carpeta `pages`, creando las plantillas base necesarias para la futura integración con datos dinámicos.

Páginas creadas:

- tienda.php
- producto.php
- rutas.php
- rutaDetalle.php

# DWES — Backend de PacePal

## Resumen corto: documentación del backend (API, base de datos y sesiones). Aquí solo indexamos los documentos del sprint; cada tema tiene su archivo detallado.

## Sprint 2 — Arquitectura de servidor

En este sprint nos centramos en dejar el backend listo para que la web funcione de verdad: API REST en PHP, base de datos relacional y control de sesiones. El objetivo era que cualquier acción del usuario (login, apuntarse, comprar, etc.) pase por la API y quede registrada en la base de datos.

---

- Desarrollar los endpoints de la API REST

## Documentos sprint 2

- Arquitectura detallada: [arquitectura-backend.md](sprint-2/arquitectura-backend.md)
- Modelo relacional: [modelo-relacional.md](sprint-2/modelo-relacional.md)
- Endpoints API: [endpoints-api.md](sprint-2/endpoints-api.md)
- Pruebas Postman (ejemplos): ../dwes/pruebas-postman.md

Si necesitas detalles técnicos (p. ej. validaciones de sesiones, flujo de peticiones o políticas de cookies), mira `arquitectura-backend.md` — ahí está la explicación completa.
