# Fotografías

Las imágenes de esta carpeta son recortes ya preparados para web. Los originales
(en resolución completa) están en josefinaurraca.com y en el archivo de
CreArtBox / Festival ADAR; conviene guardarlos aparte antes de recortar.

| Archivo | Dónde sale | Medidas | Origen |
|---|---|---|---|
| `adar-josefina.jpg` | Carrusel 1.ª | 1600 × 900 | festivaladar.com |
| `portada.jpg` | Carrusel 2.ª | 2000 × 1125 | josefinaurraca.com |
| `piano-azul.jpg` | Carrusel 3.ª | 1361 × 766 | creartbox.nyc |
| `ensemble.jpg` | Carrusel 4.ª y banda de Prensa | 1600 × 1066 | creartbox.nyc |
| `grupo.jpg` | Tarjeta y banda de CreArtBox | 1600 × 1067 | creartbox.nyc |
| `adar-claustro.jpg` | Tarjeta de ADAR y banda de Agenda | 1500 × 1000 | festivaladar.com |
| `adar-iglesia.jpg` | Banda de la página de ADAR | 1500 × 1000 | festivaladar.com |
| `creartbox.jpg` | Banda de la página de CreArtBox | 1500 × 1000 | josefinaurraca.com |
| `duo.jpg` | Tarjeta y banda del Estudio | 1500 × 1000 | josefinaurraca.com |
| `retrato.jpg` | Banda de Trayectoria | 1100 × 1375 | josefinaurraca.com |
| `retrato-cb.jpg` | Sin usar. Su retrato oficial de CreArtBox | 292 × 292 | creartbox.nyc |
| `og.jpg` | Vista previa al compartir el enlace | 1200 × 628 | josefinaurraca.com |

**Sale ella en**: las cuatro del carrusel, `grupo.jpg` (la segunda por la
izquierda), `duo.jpg`, `retrato.jpg` y `retrato-cb.jpg`. Las de ADAR sin ella
—claustro e iglesia— son de sus conciertos y se usan como bandas de sección.

`retrato-cb.jpg` está en el repositorio pero no se usa en ninguna página: sólo
mide 292 px de lado, que no da ni para una tarjeta. Si aparece el original en
resolución completa, es el mejor retrato que tiene.

**Todas vienen de sus propias webs** (josefinaurraca.com, creartbox.nyc y el
archivo de festivaladar.com), recortadas y comprimidas para esta. Falta
acreditar a los fotógrafos: el pie de página dice «crédito por acreditar» y ahí
van los nombres en cuanto se sepan.

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
