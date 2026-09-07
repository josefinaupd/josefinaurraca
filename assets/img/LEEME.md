# Fotografías

Mientras el archivo no exista, la plancha se muestra vacía con el nombre que
espera. En cuanto se copia la foto con ese nombre exacto, aparece sola.

| Archivo | Dónde sale | Proporción | Tamaño |
|---|---|---|---|
| `retrato.jpg` | Biografía | 4:5 vertical | 1200 × 1500 px |
| `escena.jpg` | Trabajo — CreArtBox en escena | 4:5 vertical | 1200 × 1500 px |
| `adar.jpg` | Trabajo — Festival ADAR | 4:5 vertical | 1200 × 1500 px |
| `og.jpg` | Vista previa al compartir enlace | 1.91:1 | 1200 × 630 px |

Las fotos se muestran a sangre dentro de la plancha (`object-fit: cover`), sin
filtros: el color de la fotografía es el único color de la página, así que
conviene que sean buenas y coherentes entre sí.

## Añadir una plancha nueva

```html
<figure class="plate">
  <div class="plate__img" data-file="assets/img/nombre.jpg">
    <img src="assets/img/nombre.jpg" alt="Descripción real de la imagen"
         width="1200" height="1500"
         onerror="this.parentNode.setAttribute('data-empty','')">
  </div>
  <figcaption data-es="Pie en español." data-en="Caption in English.">Pie en español.</figcaption>
</figure>
```

Dos planchas se ponen una al lado de otra envolviéndolas en `<div class="plates">`.
Para una imagen ancha, añadir la clase `plate--wide` a la `<figure>` (pasa a 16:9
y ocupa toda la medida).

## Vídeo

En lugar de la `<img>`, un `iframe` dentro de la misma plancha:

```html
<div class="plate__img" style="aspect-ratio:16/9">
  <iframe src="https://www.youtube.com/embed/ID" title="Recital"
          style="width:100%;height:100%;border:0" allowfullscreen loading="lazy"></iframe>
</div>
```

## Al compartir el enlace

Cuando exista `og.jpg`, añadir en el `<head>` de `index.html`:

```html
<meta property="og:image" content="https://josefinaurraca.com/assets/img/og.jpg">
```
