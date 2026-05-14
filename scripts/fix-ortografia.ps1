$f = "c:\xampp\htdocs\treecore Trabajos\pacepal\docs\documentacion-final\09_plan_figuras_finales_y_prompts.md"
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

function R($old, $new) {
    # Only replace outside backtick code spans and file paths
    # Simple approach: replace the pattern globally, then we'll protect known paths
    $script:c = $script:c -creplace $old, $new
}

# --- Protect file paths: we store them, replace with placeholders, fix text, restore ---
# Actually simpler: use word-boundary-like replacements carefully

# Tildes en sufijos comunes sin afectar nombres de archivo (que usan guiones o son camelCase)
# Pattern: word boundary where word contains only letters (no - _ . / `)

function Rw($bare, $accented) {
    # Replace word with leading/trailing non-word chars that are not `/`, `-`, `_`, `.`, backtick
    $script:c = [regex]::Replace($script:c, "(?<=[^a-zA-Z`'/\-_\.])$bare(?=[^a-zA-Z])", $accented)
    $script:c = [regex]::Replace($script:c, "(?<=\n)$bare(?=[^a-zA-Z])", $accented)
    $script:c = [regex]::Replace($script:c, "^$bare(?=[^a-zA-Z])", $accented, [System.Text.RegularExpressions.RegexOptions]::Multiline)
}

# Pairs: bare (no accent), accented
$pairs = @(
    ('tecnico', 'técnico'), ('tecnica', 'técnica'), ('tecnicos', 'técnicos'), ('tecnicas', 'técnicas'),
    ('imagenes', 'imágenes'),
    ('documentacion', 'documentación'),
    ('sesion', 'sesión'),
    ('analisis', 'análisis'),
    ('diseno', 'diseño'),
    ('busqueda', 'búsqueda'), ('Busqueda', 'Búsqueda'),
    ('catalogo', 'catálogo'), ('Catalogo', 'Catálogo'),
    ('seleccion', 'selección'), ('Seleccion', 'Selección'),
    ('revision', 'revisión'), ('Revision', 'Revisión'),
    ('paginas', 'páginas'), ('pagina', 'página'),
    ('galeria', 'galería'), ('Galeria', 'Galería'),
    ('navegacion', 'navegación'), ('Navegacion', 'Navegación'),
    ('administracion', 'administración'), ('Administracion', 'Administración'),
    ('migracion', 'migración'), ('Migracion', 'Migración'),
    ('planificacion', 'planificación'), ('Planificacion', 'Planificación'),
    ('implementacion', 'implementación'),
    ('validacion', 'validación'),
    ('generacion', 'generación'),
    ('publicacion', 'publicación'), ('Publicacion', 'Publicación'),
    ('exportacion', 'exportación'), ('Exportacion', 'Exportación'),
    ('configuracion', 'configuración'),
    ('relacion', 'relación'),
    ('maquetacion', 'maquetación'),
    ('produccion', 'producción'),
    ('aplicacion', 'aplicación'), ('Aplicacion', 'Aplicación'),
    ('tipografia', 'tipografía'),
    ('ortografia', 'ortografía'),
    ('autenticacion', 'autenticación'),
    ('bifurcacion', 'bifurcación'),
    ('decoracion', 'decoración'),
    ('diferenciacion', 'diferenciación'),
    ('composicion', 'composición'), ('Composicion', 'Composición'),
    ('agrupacion', 'agrupación'),
    ('version', 'versión'), ('Version', 'Versión'),
    ('decision', 'decisión'), ('Decision', 'Decisión'),
    ('presentacion', 'presentación'),
    ('descripcion', 'descripción'), ('Descripcion', 'Descripción'),
    ('seccion', 'sección'),
    ('informacion', 'información'),
    ('modulo', 'módulo'), ('modulos', 'módulos'), ('Modulo', 'Módulo'), ('Modulos', 'Módulos'),
    ('eliminacion', 'eliminación'),
    ('moderacion', 'moderación'),
    ('recalculo', 'recálculo'), ('Recalculo', 'Recálculo'),
    ('aclaracion', 'aclaración'),
    ('observacion', 'observación'), ('Observacion', 'Observación'),
    ('justificacion', 'justificación'), ('Justificacion', 'Justificación'),
    ('creacion', 'creación'),
    ('tamano', 'tamaño'), ('tamanos', 'tamaños'), ('Tamano', 'Tamaño'), ('Tamanos', 'Tamaños'),
    ('linea', 'línea'), ('lineas', 'líneas'),
    ('minimo', 'mínimo'), ('minima', 'mínima'), ('minimos', 'mínimos'), ('Minimo', 'Mínimo'),
    ('maximo', 'máximo'), ('maxima', 'máxima'), ('maximos', 'máximos'), ('Maximo', 'Máximo'),
    ('critico', 'crítico'), ('critica', 'crítica'), ('criticos', 'críticos'), ('criticas', 'críticas'),
    ('tipico', 'típico'), ('tipica', 'típica'),
    ('logica', 'lógica'), ('logico', 'lógico'),
    ('historica', 'histórica'), ('historico', 'histórico'),
    ('especifico', 'específico'), ('especifica', 'específica'), ('especificos', 'específicos'), ('especificas', 'específicas'),
    ('Especificacion', 'Especificación'), ('especificacion', 'especificación'),
    ('pequena', 'pequeña'), ('pequenas', 'pequeñas'), ('pequeno', 'pequeño'), ('pequenos', 'pequeños'),
    ('rubrica', 'rúbrica'), ('rubricas', 'rúbricas'), ('Rubrica', 'Rúbrica'),
    ('rotulo', 'rótulo'), ('rotulos', 'rótulos'),
    ('valido', 'válido'), ('valida', 'válida'),
    ('caotico', 'caótico'), ('caotica', 'caótica'),
    ('vacio', 'vacío'), ('vacia', 'vacía'),
    ('movil', 'móvil'),
    ('estetico', 'estético'), ('estetica', 'estética'),
    ('practico', 'práctico'), ('practica', 'práctica'), ('practicos', 'prácticos'), ('practicas', 'prácticas'),
    ('util', 'útil'), ('utiles', 'útiles'),
    ('unico', 'único'), ('unica', 'única'), ('Unico', 'Único'), ('Unica', 'Única'), ('unicamente', 'únicamente'),
    ('peticion', 'petición'), ('peticiones', 'peticiones'),
    ('tambien', 'también'), ('Tambien', 'También'),
    ('todavia', 'todavía'),
    ('despues', 'después'), ('Despues', 'Después'),
    ('aun ', 'aún '),
    ('anadir', 'añadir'), ('Anadir', 'Añadir'),
    ('redisenar', 'rediseñar'), ('Redisenar', 'Rediseñar'), ('redisenarse', 'rediseñarse'),
    ('categorias', 'categorías'), ('categoria', 'categoría'), ('Categorias', 'Categorías'), ('Categoria', 'Categoría'),
    ('Definicion', 'Definición'),
    ('opcion', 'opción'), ('opciones', 'opciones'),
    ('explicita', 'explícita'), ('explicito', 'explícito'),
    ('arbol', 'árbol'), ('arboles', 'árboles'),
    ('lamina', 'lámina'),
    ('facil', 'fácil'),
    ('deberia', 'debería'),
    ('titulos', 'títulos'), ('titulo', 'título'), ('Titulo', 'Título'), ('Titulos', 'Títulos'),
    ('subtitulo', 'subtítulo'), ('subtitulos', 'subtítulos'),
    ('caracteres', 'caracteres'),
    ('nucleo', 'núcleo'),
    ('simbolo', 'símbolo'), ('simbolos', 'símbolos'),
    ('informacion', 'información'),
    ('seran', 'serán'), ('sera', 'será'),
    ('estan', 'están'), ('esta ', 'está '),
    ('tambien', 'también')
)

foreach ($pair in $pairs) {
    $bare = $pair[0]
    $acc = $pair[1]
    # Replace in normal text but not inside backtick code spans or after / - _ .
    # Strategy: split on backtick inline code, process non-code parts
    # Simpler: replace globally except when preceded by ` / - _ . (path chars)
    $c = [regex]::Replace($c, "(?<![``'/\-_\.a-zA-Z])$([regex]::Escape($bare))(?![a-zA-Z])", $acc)
}

# Fix specific phrases
$c = $c -replace 'Por que debe ser real', 'Por qué debe ser real'
$c = $c -replace 'esta disponible', 'está disponible'
$c = $c -replace 'esta implementado', 'está implementado'
$c = $c -replace 'esta claro', 'está claro'
$c = $c -replace 'esta revisado', 'está revisado'
$c = $c -replace 'esta integrado', 'está integrado'
$c = $c -replace 'La figura esta ', 'La figura está '
$c = $c -replace 'defensa tecnica', 'defensa técnica'
$c = $c -replace 'defensa tecnico', 'defensa técnico'
$c = $c -replace 'pero mas ', 'pero más '
$c = $c -replace ' mas ', ' más '
$c = $c -replace ' mas,', ' más,'
$c = $c -replace ' mas\.', ' más.'
$c = $c -replace 'Analisis inicial', 'Análisis inicial'
$c = $c -replace 'Diseno DIW', 'Diseño DIW'
$c = $c -replace 'Migracion React', 'Migración React'
$c = $c -replace 'Documentacion final', 'Documentación final'
$c = $c -replace 'Cuenta y sesion', 'Cuenta y sesión'
$c = $c -replace 'Validar sesion', 'Validar sesión'
$c = $c -replace 'Flujo login / sesion', 'Flujo login / sesión'
$c = $c -replace '"Anadir al carrito"', '"Añadir al carrito"'
$c = $c -replace '`Anadir al carrito`', '`Añadir al carrito`'

[System.IO.File]::WriteAllText($f, $c, [System.Text.UTF8Encoding]::new($false))
Write-Host "Done. Length: $($c.Length)"

# Verify
$checks = @('tecnico', 'imagenes', 'documentacion', 'sesion', 'analisis', 'diseno', 'pagina', 'galeria', 'seleccion', 'revision', 'modulo', 'tamano', 'linea', 'critico')
foreach ($w in $checks) {
    $m = [regex]::Matches($c, "(?<![``'/\-_\.a-zA-Z])$([regex]::Escape($w))(?![a-zA-Z])")
    if ($m.Count -gt 0) { Write-Host "REMAINING '$w': $($m.Count)" }
}
Write-Host "Check complete"
