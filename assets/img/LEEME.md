# Fotografías

Las imágenes de esta carpeta son recortes ya preparados para web. Los originales
(en resolución completa) están en josefinaurraca.com y en el archivo de
CreArtBox / Festival ADAR; conviene guardarlos aparte antes de recortar.

| Archivo | Dónde sale | Medidas |
|---|---|---|
| `portada.jpg` | Apertura, a sangre | 2000 × 1125 (16:9) |
| `retrato.jpg` | Biografía, saliéndose por el borde derecho | 1100 × 1375 (4:5) |
| `duo.jpg` | A sangre, entre Biografía y Proyectos | 1500 × 1000 (3:2) |
| `creartbox.jpg` | Bloque de CreArtBox | 1500 × 1000 (3:2) |
| `adar.jpg` | Bloque del Festival ADAR | 1500 × 1000 (3:2) |
| `og.jpg` | Vista previa al compartir el enlace | 1200 × 628 |

Se muestran a sangre dentro de su hueco (`object-fit: cover`) y sin filtros ni
duotonos. La página es monocroma a propósito —negro de sala y marfil— así que
**el único color que existe en el sitio es el de estas fotografías**. Conviene
que sean buenas y que se lleven bien entre ellas.

Las tres a sangre (`portada`, `duo` y las de los proyectos en móvil) están
hechas con luz de concierto y por eso el fondo negro las deja respirar. Una
fotografía de estudio sobre fondo blanco abriría un agujero en la página: si
hay que meter una, va recortada contra negro o no va.

## Cambiar una foto

Basta sobreescribir el archivo con el mismo nombre y proporción. Si la nueva
imagen tiene el motivo descentrado, se ajusta con `object-position` en la regla
correspondiente de `assets/css/main.css` (la de apertura ya lo usa: `48% 34%`,
para que la cara no se recorte al recortarse en vertical).

Al cambiar una foto hay que revisar dos textos: el `alt` de la `<img>`, que
describe lo que se ve, y el pie (`figcaption` o `p.pie`), que dice dónde se hizo.

## Añadir un proyecto

Hay tres repartos, y se alternan a propósito: `--a` deja la fotografía a la
izquierda y el texto a la derecha, `--b` los cambia de lado, `--c` va sin
fotografía. El nombre se justifica al ancho de la página (ver el README).

```html
<article class="proyecto proyecto--a">
  <div class="pagina rejilla">
    <h2 class="proyecto__nombre">
      <span class="oculto">Nombre del proyecto</span>
      <svg class="justificado" viewBox="0 0 ANCHO 730" aria-hidden="true">
        <text x="0" y="730" font-size="1000" letter-spacing="-30"
              textLength="ANCHO" lengthAdjust="spacingAndGlyphs">NOMBRE</text>
      </svg>
    </h2>
    <figure class="proyecto__marco">
      <img src="assets/img/nombre.jpg" width="1500" height="1000" loading="lazy"
           alt="Descripción real de la imagen">
    </figure>
    <div class="proyecto__cuerpo">
      <p class="proyecto__donde" data-es="Lugar, años. Papel." data-en="Place, years. Role.">Lugar, años. Papel.</p>
      <p data-es="Texto en español." data-en="Text in English.">Texto en español.</p>
      <p class="proyecto__sitio"><a href="https://..." rel="noopener">dominio.com</a></p>
    </div>
  </div>
</article>
```

Para una fotografía a todo el ancho, fuera de cualquier sección:

```html
<figure class="sangre sangre--media">
  <img src="assets/img/nombre.jpg" width="1500" height="1000" loading="lazy" alt="...">
</figure>
```

`--alta` la pone a 76 vh (la de apertura) y `--media` a 62 vh. No llevan pie:
los créditos fotográficos van juntos, una sola vez, en el pie de página.

## Vídeo

En lugar de la `<img>`, un `iframe` en un hueco con proporción fija:

```html
<div class="proyecto__marco" style="aspect-ratio:16/9">
  <iframe src="https://www.youtube.com/embed/ID" title="Recital"
          style="width:100%;height:100%;border:0" allowfullscreen loading="lazy"></iframe>
</div>
```
