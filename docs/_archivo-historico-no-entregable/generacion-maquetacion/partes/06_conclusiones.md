# 6. CONCLUSIONES

## 6.1. Objetivos alcanzados

PacePal alcanza el objetivo principal de ser una aplicación web intermodular funcional, documentada y defendible. La memoria recoge el trabajo realizado en cada sprint con trazabilidad suficiente para explicar qué se implementó en cada fase, por qué se tomaron las decisiones técnicas principales y con qué resultado.

Por módulos:

**DIW:** guía de estilos con paleta, tipografía e iconografía definidas; wireframes desktop y mobile; diseño responsive modular; accesibilidad formal auditada con Lighthouse, WAVE y WCAG Contrast Checker; revisión de usabilidad con usuario externo; vídeo integrado en la tienda.

**DWEC:** formularios con validación en cliente, buscador dinámico sin recarga, carrito funcional, migración del cliente a React con hooks y servicios, pruebas funcionales documentadas y cobertura automatizada básica con Selenium.

**DWES:** API REST en PHP con PDO y sentencias preparadas, gestión de sesiones, diferenciación de roles, base de datos relacional con nueve entidades y pruebas de endpoints con Postman.

**Despliegue:** guía de instalación local con XAMPP, evidencias técnicas del entorno operativo, publicación del cliente React en GitHub Pages con HTTPS y fallback demo documentado y justificado.

**Sostenibilidad:** narrativa de producto con enfoque sostenible, tienda con concepto de materiales responsables y material gráfico coherente con esa propuesta.

---

## 6.2. Conclusiones del proyecto

El proyecto deja varias conclusiones técnicas claras.

La primera es que la separación entre rutas y actividades da sentido propio al producto. Una ruta es un recurso fijo del sistema; una actividad es una quedada concreta sobre esa ruta, creada por un usuario con fecha, nivel y plazas. Esa decisión, tomada desde el principio, ha condicionado positivamente el modelo de datos, las pantallas y el flujo de uso.

La segunda es que la combinación de React en el cliente y PHP/PDO en el backend es una evolución técnica con justificación clara. La migración no fue un cambio por modas, sino la oportunidad de demostrar competencia avanzada en DWEC sin abandonar la base de trabajo del backend construida en Sprint 2. Técnicamente, la separación entre cliente y servidor también mejoró la modularidad del proyecto.

La tercera conclusión tiene que ver con el despliegue. Publicar un cliente React en GitHub Pages obliga a entender de verdad la separación entre frontend y backend, a documentar los límites del entorno y a ser honesto sobre qué funciona en local y qué funciona en publicación estática. El fallback demo es una solución razonada, no un atajo.

La cuarta conclusión es sobre la documentación. Durante el proyecto se generó material técnico valioso, distribuido por sprints y módulos. La memoria final no es un volcado de esos documentos; es una reorganización con un hilo técnico único, con honestidad sobre lo que falta y claridad sobre lo que sí está cerrado y es defendible.

Desde el punto de vista del aprendizaje, el proyecto obliga a resolver problemas reales de integración: mantener paridad funcional entre cliente legacy y React, gestionar sesiones PHP con un cliente desacoplado, manejar CORS en local, instalar y documentar un entorno con XAMPP, preparar un fallback para hosting estático y mantener consistencia documental a lo largo de meses. Para un proyecto de 2.º DAW, ese conjunto de problemas es razonable y completamente defendible.

---

## 6.3. Propuestas de futuro

Las propuestas siguientes son mejoras identificadas a lo largo del desarrollo que quedan fuera del alcance de esta entrega:

1. **Despliegue del backend en servidor real.** Migrar la API PHP a un servidor con soporte de PHP y MySQL para eliminar la dependencia del fallback demo y ofrecer una experiencia completa en producción.

2. **Auditoría de accesibilidad completa de la SPA React.** La auditoría formal actual cubre la landing. Una revisión equivalente del conjunto de pantallas React aportaría mayor solidez al bloque de accesibilidad.

3. **Ampliación de pruebas automatizadas.** Extender la cobertura de Selenium y añadir pruebas de integración que verifiquen flujos completos entre el cliente React y la API.

4. **Mejoras del panel de administración.** Incorporar filtros avanzados, estadísticas de uso y exportación de datos para facilitar la gestión del contenido.

5. **Integración definitiva del audio en la página de contacto.** Los archivos de audio están preparados en el proyecto; la integración dentro de la página no quedó cerrada en la rama final de entrega.

6. **Evolución del botón de accesibilidad.** Mejorar la funcionalidad de ayuda de voz para que permita activar o desactivar la navegación asistida, configurar volumen y velocidad, mejorar la lectura de elementos al navegar con teclado, guardar las preferencias del usuario y verificar su funcionamiento con lector de pantalla real.

7. **Mejora del flujo de tienda y pedido.** Refinar la experiencia de compra, añadir confirmación de pedido por correo y mejorar la gestión del historial desde el perfil.

8. **Optimización avanzada de imágenes y rendimiento.** Adoptar formatos modernos como WebP o AVIF y revisar la estrategia de carga para mejorar los indicadores de rendimiento.

9. **Validación multi-navegador más completa.** Documentar pruebas manuales en Chrome, Edge, Firefox y Brave antes de futuras entregas o despliegues en producción.
