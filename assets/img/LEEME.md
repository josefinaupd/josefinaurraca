# Fotografías

Las imágenes de esta carpeta son recortes ya preparados para web. Los originales
(en resolución completa) están en josefinaurraca.com y en el archivo de
CreArtBox / Festival ADAR; conviene guardarlos aparte antes de recortar.

| Archivo | Dónde sale | Medidas |
|---|---|---|
| `portada.jpg` | Portada, a sangre | 2000 × 1125 (16:9) |
| `retrato.jpg` | Biografía | 1100 × 1375 (4:5) |
| `duo.jpg` | Banda entre Biografía y Proyectos | 1500 × 1000 (3:2) |
| `creartbox.jpg` | Lámina de CreArtBox | 1500 × 1000 (3:2) |
| `adar.jpg` | Lámina del Festival ADAR | 1500 × 1000 (3:2) |
| `estudio.jpg` | Estudio de piano | 400 × 500 (4:5) |
| `og.jpg` | Vista previa al compartir el enlace | 1200 × 628 |

Se muestran a sangre dentro de su hueco (`object-fit: cover`) y sin filtros: el
color de la fotografía es el único color de la página, salvo el rojo de brasa de
los enlaces.

## Cambiar una foto

Basta sobreescribir el archivo con el mismo nombre y proporción. Si la nueva
imagen tiene el motivo descentrado, se ajusta con `object-position` en la regla
correspondiente de `assets/css/main.css` (la portada ya lo usa: `48% 38%` en
pantalla ancha, `46% 32%` en móvil, para que la cara no se recorte).

Al cambiar una foto hay que revisar dos textos: el `alt` de la `<img>`, que
describe lo que se ve, y el pie (`figcaption` o `p.pie`), que dice dónde se hizo.

## Añadir una lámina de proyecto

```html
<article class="lamina">
  <figure class="lamina__foto">
    <img src="assets/img/nombre.jpg" width="1500" height="1000" loading="lazy"
         alt="Descripción real de la imagen">
    <figcaption>
      <span class="lamina__rotulo">Nombre del proyecto</span>
      <span class="lamina__donde" data-es="Lugar · años · papel" data-en="Place · years · role">Lugar · años · papel</span>
    </figcaption>
  </figure>
  <div class="lamina__texto">
    <p data-es="Texto en español." data-en="Text in English.">Texto en español.</p>
    <a class="sitio" href="https://..." rel="noopener">dominio.com</a>
  </div>
</article>
```

Para una banda de imagen a todo el ancho, fuera de cualquier sección:

```html
<div class="banda">
  <img src="assets/img/nombre.jpg" width="1500" height="1000" loading="lazy" alt="...">
  <p class="pie" data-es="Pie en español." data-en="Caption in English.">Pie en español.</p>
</div>
```

## Vídeo

En lugar de la `<img>`, un `iframe` en un hueco con proporción fija:

```html
<div class="lamina__foto" style="aspect-ratio:16/9">
  <iframe src="https://www.youtube.com/embed/ID" title="Recital"
          style="width:100%;height:100%;border:0" allowfullscreen loading="lazy"></iframe>
</div>
```
