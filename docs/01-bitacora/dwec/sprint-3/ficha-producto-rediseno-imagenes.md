# Bitácora — Rediseño ficha de producto y optimización de imágenes

Fecha: 2026-05-08
Área: DWEC / DIW — Sprint 3
Archivo principal: `pages/tienda/ProductDetailPage.jsx`
Estilos: `css/react.css`

---

## Contexto

La vista de detalle de producto (`ProductDetailPage`) presentaba un espacio vacío enorme a la derecha del producto, layout desequilibrado y las imágenes se mostraban con zoom excesivo cortando el contenido visible.

---

## Cambios realizados

### 1. Rediseño completo del layout (JSX + CSS)

**Antes:** imagen principal grande con miniaturas debajo en columna izquierda, información en columna derecha desproporcionada.

**Después:** nueva estructura en tres bloques verticales:

```
[ Título centrado ]
[ Galería: 2 columnas iguales — imagen frontal | imagen lateral ]
[ Info: columna descripción | columna precio + stock + cantidad ]
[ Botones: Volver | Añadir al carrito ]
```

Clases BEM nuevas introducidas:
- `.producto-detalle__titulo` — título centrado con tamaño `clamp`
- `.producto-detalle__galeria` — grid `1fr 1fr`
- `.producto-detalle__imagen-card` — card con borde lima, border-radius, sombra
- `.producto-detalle__info` — grid `1fr + 38%` en desktop, apilado en móvil
- `.producto-detalle__descripcion` — card blanca izquierda
- `.producto-detalle__compra` — card blanca derecha (precio, stock, cantidad)
- `.producto-detalle__precio` — precio grande en verde oscuro
- `.producto-detalle__subtitulo` — etiqueta de sección en mayúscula

---

### 2. Optimización del ajuste de imágenes

**Problema detectado:** las imágenes de productos tienen proporciones distintas (algunas cuadradas, otras rectangulares). Con `aspect-ratio` fijo y `object-fit: cover` se perdía contenido del producto por recorte. Con `height: auto` sin altura fija, la card más baja dejaba espacio blanco respecto a su pareja.

**Iteraciones:**

| Iteración | CSS aplicado | Resultado |
|---|---|---|
| 1 | `aspect-ratio: 1/1; object-fit: cover` | Zoom excesivo, se perdían detalles |
| 2 | `aspect-ratio: 4/3; object-fit: contain; padding: 0.75rem` | Sin recorte pero demasiado espacio vacío alrededor |
| 3 | `height: auto` sin aspect-ratio | Imágenes en tamaño natural, pero distintas alturas generaban hueco blanco en la card más baja |
| ✅ 4 | `display: flex` en la card + `height: 100%; object-fit: cover` en la imagen | Ambas cards se estiran a la misma altura (la más alta). La imagen más baja se expande con recorte mínimo y centrado. Sin huecos. |

**Solución final aplicada en `css/react.css`:**

```css
.producto-detalle__imagen-card {
  display: flex;
  border: 2px solid var(--color-lima);
  border-radius: var(--radio);
  box-shadow: 0 4px 16px rgba(19, 27, 17, 0.1);
  overflow: hidden;
  background: var(--color-blanco);
}

.producto-detalle__imagen-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

---

### 3. Responsive

- `≥ 768px`: galería en 2 columnas, info en 2 columnas
- `≤ 640px`: galería apilada en 1 columna, título y precio escalan con `clamp`

---

## Datos NO modificados

- Backend, API, SQL y estructura JSON intactos
- Campos usados: `imagen1`, `imagen2`, `nombre`, `descripcion`, `precio`, `stock`
- Carrito sin cambios (`cart.addItem`)
- Navegación sin cambios (`onNavigate`)
