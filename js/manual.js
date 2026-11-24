/*
 * MANUAL DE ESTABILIDAD NÁUTICA — COMPORTAMIENTO DE LA INTERFAZ
 *
 * Este archivo añade interacción a la página:
 * 1. Permite contraer y volver a abrir la barra lateral.
 * 2. Ajusta el ancho del contenido cuando la barra se oculta.
 * 3. Actualiza la ruta superior según la sección que el lector está viendo.
 *
 * El contenido del capítulo y su diseño están en index.html y css/estilos.css.
 */

// Recupera los elementos HTML que se van a controlar.
// getElementById busca un elemento por el valor de su atributo id.
const side = document.getElementById('side');
const main = document.getElementById('main');
const open = document.getElementById('open');
const close = document.getElementById('close');

// Al pulsar la X, se contrae la barra lateral.
// classList.add aplica la clase CSS "closed", que desplaza el menú fuera de pantalla.
// También se expande el área principal y se muestra el botón ☰ para reabrir el menú.
close.onclick = () => {
  side.classList.add('closed');
  main.classList.add('expanded');
  open.style.display = 'block';
};

// Al pulsar ☰ se quitan las clases anteriores.
// La barra lateral vuelve a su posición y el contenido recupera su margen original.
open.onclick = () => {
  side.classList.remove('closed');
  main.classList.remove('expanded');
  open.style.display = 'none';
};

// Elemento de la cabecera que muestra el apartado actual.
const crumb = document.getElementById('crumb');

// IntersectionObserver detecta qué sección está visible durante el desplazamiento.
// Así se actualiza el texto de la ruta superior sin tener que escuchar cada píxel
// del evento scroll, lo que resulta más eficiente.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Solo actuamos cuando una sección entra en la zona de observación.
      if (entry.isIntersecting) {
        // Busca el encabezado h2 dentro de esa sección.
        const heading = entry.target.querySelector('h2');

        // Si existe, utiliza su texto como nombre del apartado actual.
        if (heading) {
          crumb.textContent = heading.textContent;
        }
      }
    });
  },
  {
    // Define una franja central de la pantalla para decidir qué sección está activa.
    // Los márgenes negativos reducen la zona observada desde arriba y abajo.
    rootMargin: '-20% 0px -70% 0px'
  }
);

// Registra las secciones principales del artículo.
// Cada sección con id puede ser observada y reflejada en la ruta superior.
document.querySelectorAll('article section[id]').forEach((section) => {
  observer.observe(section);
});
