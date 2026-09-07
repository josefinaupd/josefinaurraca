# Imágenes / Images

Los huecos de imagen se muestran como marcos rayados con la ruta esperada.
En cuanto exista el archivo con ese nombre, la foto aparece sola.

| Archivo | Uso | Proporción | Tamaño recomendado |
|---|---|---|---|
| `retrato.jpg` | Retrato principal del hero | 4:5 vertical | 1200 × 1500 px |
| `escena-01.jpg` | Sección *Escucha* — CreArtBox en escena | 4:5 vertical | 1200 × 1500 px |
| `adar-01.jpg` | Sección *Escucha* — Festival ADAR | 4:5 vertical | 1200 × 1500 px |
| `og.jpg` | Vista previa al compartir en redes | 1.91:1 | 1200 × 630 px |

## Cómo colocarlas

1. Copia el archivo en esta carpeta con el nombre exacto de la tabla.
2. Para los huecos de *Escucha*, sustituye en `index.html` el bloque

```html
<div class="frame frame--ink" data-empty="1">
  <span class="frame__slot" aria-hidden="true">foto · 4:5</span>
</div>
```

por

```html
<div class="frame frame--ink">
  <img src="assets/img/escena-01.jpg" alt="CreArtBox en escena" width="1200" height="1500">
</div>
```

3. Para insertar un vídeo, cambia el hueco 16:9 por el `iframe` de YouTube/Vimeo:

```html
<div class="frame frame--ink">
  <iframe src="https://www.youtube.com/embed/ID_DEL_VIDEO"
          title="Recital de Josefina Urraca"
          allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
          allowfullscreen loading="lazy"></iframe>
</div>
```

4. Cuando exista `og.jpg`, añade en el `<head>`:

```html
<meta property="og:image" content="https://josefinaurraca.com/assets/img/og.jpg">
```

Las fotos se muestran con un ligero desaturado (`grayscale(.28) contrast(1.06)`)
para que convivan con la paleta de tinta y papel. Si prefieres color pleno,
edita `.frame img` en `assets/css/main.css`.
