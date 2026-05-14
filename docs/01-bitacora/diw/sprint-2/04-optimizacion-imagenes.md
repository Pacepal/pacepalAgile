# 04 - Optimización de imágenes

## Qué se realizó

Durante este sprint se aplicó una optimización de recursos gráficos para reducir el peso total de la web y mejorar los tiempos de carga.

La mejora principal fue la migración de imágenes rasterizadas en formato `.png` a `.webp` en los bloques de contenido visual, especialmente en:

- `img/about/`
- `img/landing/`
- `img/productos/`
- Parte de `img/logo/`

Además, se revisó que las rutas de las imágenes en el front apunten a las nuevas versiones optimizadas.

## Cómo se hizo

1. Se inventariaron todas las imágenes del proyecto para detectar recursos pesados y repetidos.
2. Se convirtieron los `.png` a `.webp` manteniendo calidad visual adecuada para web.
3. Se sustituyeron referencias en HTML/CSS/JS para cargar las versiones `.webp`.
4. Se validó visualmente que no hubiera pérdida perceptible de calidad ni roturas de maquetación.

## Criterios aplicados

- Se priorizó `WebP` por su mejor compresión frente a `PNG` para fotografía e imagen de producto.
- Se mantuvieron algunos archivos en formatos tradicionales por compatibilidad o requisitos técnicos:
  - Favicons (`.ico` y algunos `.png`) para compatibilidad de navegadores/dispositivos.
  - Algunos logos en `.png` como respaldo cuando conviene conservar transparencia exacta y fallback.

## Impacto en rendimiento

Con este cambio se consigue:

- Menor peso total descargado por página.
- Reducción del tiempo de carga inicial, especialmente en móvil y redes lentas.
- Mejora de métricas percibidas y técnicas (por ejemplo, carga de imágenes y experiencia de usuario).

Como referencia general, una conversión correcta de `PNG` a `WebP` suele reducir entre un 25% y un 70% el tamaño del archivo, según el tipo de imagen y el nivel de calidad aplicado.

## Buenas prácticas añadidas

- Mantener dimensiones acordes al espacio real de renderizado (evitar imágenes sobredimensionadas).
- Usar nombres consistentes y descriptivos para facilitar mantenimiento.
- Revisar periódicamente nuevos assets para que entren ya optimizados al repositorio.
