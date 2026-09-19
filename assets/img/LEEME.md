# Fotografías

Las imágenes de esta carpeta son recortes ya preparados para web. Los originales
(en resolución completa) están en josefinaurraca.com y en el archivo de
CreArtBox / Festival ADAR; conviene guardarlos aparte antes de recortar.

| Archivo | Dónde sale | Medidas |
|---|---|---|
| `portada.jpg` | Carrusel de apertura (1.ª) y banda de Agenda | 2000 × 1125 (16:9) |
| `creartbox.jpg` | Carrusel (2.ª), tarjeta y banda de CreArtBox | 1500 × 1000 (3:2) |
| `adar.jpg` | Carrusel (3.ª), tarjeta y banda de ADAR | 1500 × 1000 (3:2) |
| `duo.jpg` | Carrusel (4.ª), tarjeta del estudio y banda de Prensa | 1500 × 1000 (3:2) |
| `retrato.jpg` | Banda de Trayectoria | 1100 × 1375 (4:5) |
| `og.jpg` | Vista previa al compartir el enlace | 1200 × 628 |

**Hacen falta más.** Con este diseño las fotografías mandan: el carrusel las
pone a sangre a casi toda la pantalla y las mismas cuatro se repiten en las
tarjetas y en las bandas. Lo suyo sería una apaisada buena por proyecto y dos o
tres más para el carrusel, todas horizontales y de al menos 2000 px de ancho.
El retrato vertical sólo funciona en la banda de Trayectoria, donde se recorta.

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
