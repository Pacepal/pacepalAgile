# 1. INTRODUCCIÓN

## 1.1. Objetivos

PacePal nace como una aplicación web orientada a actividades deportivas en comunidad. La idea central es que las rutas ya existen en el sistema y que lo que los usuarios organizan sobre ellas son actividades concretas: una salida con fecha, hora, nivel y plazas. Esto permite que el producto se centre en la coordinación del grupo y en la constancia, en lugar de limitarse a un listado abierto de recorridos sin estructura.

### Objetivo general

Desarrollar una aplicación web intermodular, funcional y documentada, capaz de gestionar rutas, actividades, comunidad, sesiones de usuario y una tienda básica, integrando frontend, backend, base de datos, pruebas y despliegue dentro de una única solución defendible para un proyecto de 2.º DAW.

### Objetivos específicos

- Permitir la navegación pública por el contenido principal: inicio, actividades, rutas, tienda, contacto, política de cookies y sección About, sin necesidad de iniciar sesión.
- Implementar registro y autenticación con validaciones completas, persistencia en base de datos y control de sesiones PHP.
- Diferenciar claramente los permisos de invitado, usuario registrado y administrador, y bloquear el acceso a acciones sensibles según el rol.
- Permitir que un usuario cree actividades sobre rutas existentes y que otros usuarios se unan o abandonen esas actividades.
- Ofrecer un catálogo de productos con detalle, buscador dinámico, carrito y generación de pedidos.
- Construir una API REST en PHP con respuestas JSON y acceso a base de datos mediante PDO y consultas preparadas.
- Mantener una experiencia responsive y razonablemente accesible, con revisión documentada mediante Lighthouse, WAVE y criterios WCAG.
- Dejar el proyecto preparado para defensa técnica con pruebas funcionales, evidencias visuales y despliegue local documentado.

### Relación con el producto final

Todos los objetivos anteriores están implementados en la rama `sprint-3-react-jsx`. El cliente React cubre la navegación pública, la autenticación, el catálogo, el carrito, las actividades y el panel de administración. El backend PHP cubre la API REST, las sesiones, los roles y la persistencia en base de datos. La memoria recoge la trazabilidad de cada objetivo con evidencias reales.

## 1.2. Motivación

La motivación de PacePal surge de tres necesidades observadas al inicio del proyecto. La primera es la dificultad de mantener constancia en actividades físicas cuando la iniciativa depende exclusivamente de cada persona. La segunda es la falta de herramientas intermedias entre las aplicaciones puramente deportivas de alto rendimiento y los grupos informales de mensajería sin estructura ni seguimiento. La tercera es el interés del equipo por dar al producto un enfoque sostenible real, incorporando una línea de tienda y comunicación relacionada con hábitos responsables y materiales reciclados.

Desde el punto de vista académico, el proyecto responde también a la necesidad de construir una única aplicación donde DIW, DWEC, DWES, despliegue y sostenibilidad trabajen de forma integrada, no como entregas aisladas de cada módulo. Esa decisión es la que da sentido al enfoque intermodular y la que explica por qué la memoria debe reflejar tanto lo implementado como la coordinación por sprints.

En cuanto al problema que resuelve: PacePal permite que alguien descubra qué rutas hay disponibles cerca, que organice una salida sobre esa ruta con parámetros claros de nivel y ritmo, y que un grupo de personas se apunte o abandone esa actividad de forma ordenada. La tienda complementa la propuesta con productos relacionados con el deporte sostenible, cerrando un ecosistema de producto coherente.
