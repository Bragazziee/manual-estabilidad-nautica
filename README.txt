MANUAL DE ESTABILIDAD NÁUTICA — CAPÍTULO 1
Proyecto de estudio · Edgar Espinoza Bragazzi

CÓMO ABRIR
Abre index.html en un navegador. Para publicarlo con GitHub Pages, sube
el contenido de esta carpeta a la raíz de un repositorio y activa Pages
desde Settings > Pages, usando la rama main y la carpeta /(root).

ESTRUCTURA DEL PROYECTO
- index.html: estructura HTML y contenido del capítulo, ejercicios y pie de página.
- css/estilos.css: colores, tipografías, distribución, figuras y adaptación a pantallas.
- js/manual.js: comportamiento del menú lateral y actualización de la ruta superior.
- imagenes/: figuras originales extraídas del PDF fuente.

CÓMO SE ORGANIZA EL CÓDIGO
HTML
Los comentarios <!-- ... --> identifican los bloques principales de la página.
Los atributos id permiten enlazar directamente a secciones desde los menús.
Las clases class permiten aplicar estilos comunes desde CSS.

CSS
Las variables de color están al comienzo en :root. Las reglas de diseño se agrupan
por componentes: menú, cabecera, contenido, títulos, fórmulas, figuras y ejercicios.
Las reglas @media adaptan la página a pantallas más pequeñas.

JAVASCRIPT
- getElementById obtiene los controles del menú y la ruta superior.
- onclick define qué ocurre al pulsar los botones de cerrar y abrir.
- classList.add/remove activa o desactiva clases CSS.
- IntersectionObserver detecta la sección que se está leyendo.
- querySelector y querySelectorAll localizan encabezados y secciones del HTML.

NOTA
Los comentarios explican la estructura y las decisiones importantes del código.
No se comenta cada etiqueta o cada propiedad CSS porque muchas son reglas
estándar cuyo significado se entiende mejor agrupado por componente.
