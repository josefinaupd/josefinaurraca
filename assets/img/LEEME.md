# Fotografías

Las imágenes de esta carpeta son recortes ya preparados para web. Los originales
(en resolución completa) están en josefinaurraca.com y en el archivo de
CreArtBox / Festival ADAR; conviene guardarlos aparte antes de recortar.

| Archivo | Dónde sale | Medidas |
|---|---|---|
| `portada.jpg` | `index.html`, debajo del texto | 2000 × 1125 (16:9) |
| `retrato.jpg` | `trayectoria.html`, al final | 1100 × 1375 (4:5) |
| `creartbox.jpg` | `creartbox.html`, al final | 1500 × 1000 (3:2) |
| `adar.jpg` | `adar.html`, al final | 1500 × 1000 (3:2) |
| `duo.jpg` | `estudio.html`, al final | 1500 × 1000 (3:2) |
| `og.jpg` | Vista previa al compartir el enlace | 1200 × 628 |

**Una fotografía por página como máximo, y siempre al final, debajo del
texto.** Es la regla del sitio: primero se cuenta y después se ve. Se muestran
al ancho de la columna, sin filtros y sin recorte forzado.

## Cambiar una foto

Basta sobreescribir el archivo con el mismo nombre y proporción. Si la nueva
imagen tiene el motivo descentrado, se ajusta con `object-position` en la regla
correspondiente de `assets/css/main.css` (la de apertura ya lo usa: `48% 34%`,
para que la cara no se recorte al recortarse en vertical).

Al cambiar una foto hay que revisar dos textos: el `alt` de la `<img>`, que
describe lo que se ve, y el pie (`figcaption` o `p.pie`), que dice dónde se hizo.

## Añadir o cambiar una fotografía

Sobreescribir el archivo con el mismo nombre. Si el motivo queda descentrado,
se ajusta con `object-position` en la regla que corresponda de
`assets/css/main.css`.

Para meter una fotografía nueva en una página, al final de `<main>`:

```html
<figure class="lamina">
  <img src="assets/img/nombre.jpg" width="1500" height="1000" loading="lazy"
       alt="Descripción real de lo que se ve">
  <figcaption data-es="Pie en español." data-en="Caption in English.">Pie en español.</figcaption>
</figure>
```

Al cambiar una foto hay que revisar dos textos: el `alt`, que describe lo que
se ve para quien no la puede ver, y el pie, que dice dónde se hizo.

## Vídeo

En lugar de la `<img>`, un `iframe` en un hueco con proporción fija:

```html
<div class="lamina" style="aspect-ratio:16/9">
  <iframe src="https://www.youtube.com/embed/ID" title="Recital"
          style="width:100%;height:100%;border:0" allowfullscreen loading="lazy"></iframe>
</div>
```
