# 03 - Integración con DIW

En este proyecto nos hemos asegurado de que todo lo que hacemos en la parte de cliente (DWEC) encaje perfecto con el diseño y la maquetación de DIW. No queríamos que lo generado por JavaScript pareciera un parche o algo fuera de sitio, así que hemos seguido las mismas reglas visuales y de estructura que en la parte de DIW.

## ¿Cómo lo hemos hecho?

- **Variables CSS y estilos:** Usamos las variables de `css/comun/variables.css` para colores, fuentes y espaciados. Así, si hay que cambiar algo global, lo hacemos en un solo sitio y se aplica a todo, tanto a lo estático como a lo dinámico.

- **Clases y BEM:** Todas las clases que generamos desde JS siguen la convención BEM, igual que en DIW. Esto nos ha evitado líos y hace que los estilos sean predecibles y fáciles de mantener.

- **Clases CSS clave:** Desde los scripts JS usamos clases como `tarjeta`, `tarjeta-actividad`, `tarjeta-producto`, `boton`, `campo-valido`, `campo-invalido`, y las de mensajes de error o éxito. Así todo lo que sale por código tiene el mismo aspecto que lo que está en las vistas HTML.

- **Bootstrap:** Usamos Bootstrap 5.3.3 y Bootstrap Icons por CDN, pero no dejamos que lo haga todo. Desde JS tiramos de utilidades (`mt-3`, `mb-3`, `d-flex`, etc.), tablas y clases de formularios, pero siempre adaptando a nuestro diseño.

- **HTML dinámico:** Todo lo que generamos dinámicamente lo hacemos con `createElement` y `appendChild`, siguiendo la estructura de los wireframes y la guía de estilos de DIW. No usamos `innerHTML` para evitar problemas de seguridad y tener el control total del DOM.

## ¿El resultado?

Lo comprobamos a mano: todo lo que sale por JS se ve igual que lo que está en las vistas HTML y la guía de estilos. Así no hay cortes raros ni diferencias entre lo estático y lo dinámico. El usuario no nota si algo está generado por código o está puesto a mano, y ese era justo el objetivo.
