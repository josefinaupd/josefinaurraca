# Josefina Urraca — web personal

Sitio estático (HTML + CSS + JS, sin build ni dependencias) para la pianista
**Josefina Urraca**: intérprete, co-fundadora de **CreArtBox** (Nueva York, 2013)
y co-directora del **Festival ADAR** (Asturias). Bilingüe ES / EN.

```
index.html                 una sola página, seis secciones numeradas
assets/css/main.css        sistema visual completo (comentado por bloques)
assets/js/main.js          idioma, teclado, revelados, progreso de lectura
assets/logo/               monograma, favicon y logotipo compuesto
assets/img/                fotos (ver assets/img/LEEME.md)
```

## El diseño: «PROGRAMA»

La idea no es una web minimalista más, sino **un programa de concierto impreso
llevado a la pantalla**: papel crudo con grano, tinta, pentagrama, numeración
romana, filetes gruesos y una retícula deliberadamente asimétrica.
De ahí salen los tres mundos que ya existen en la marca de Josefina —el recital
clásico, la escena multimedia de CreArtBox y el paisaje rural de ADAR— sin
recurrir al blanco aséptico.

**Paleta**

| Token | Valor | Papel de la paleta |
|---|---|---|
| `--ink` | `#14100e` | tinta / secciones oscuras |
| `--paper` | `#efe6d7` | papel de programa |
| `--paper-2` | `#e4d7c1` | papel a media luz (sección prensa) |
| `--hueso` | `#f8f3ea` | texto sobre tinta, teclas blancas |
| `--tinto` | `#8b2331` | acento principal, filetes, citas |
| `--azafran` | `#e0a132` | acento sobre tinta, apellido del hero |
| `--musgo` | `#3d5140` | acento del bloque ADAR |

Cada sección declara su tema con `data-shade="ink | paper2 | tinto"`, y los
tokens `--bg / --fg / --accent` se recalculan solos: no hay colores sueltos.

**Tipografía**

- **Bodoni Moda** (didona de alto contraste) para el gran despliegue: nombre,
  títulos de sección, citas en cursiva. Es la voz «recital».
- **Archivo** para textos, navegación y versalitas con tracking abierto.
  Es la voz «producción».
- **DM Mono** para números: índices de sección, fechas, años.

**Recursos gráficos recurrentes**

- **Teclado** al pie del hero: teclas blancas y negras reales, que se iluminan
  al pasar el ratón y toca un arpegio al cargar.
- **Pentagrama**: cinco líneas de fondo cruzando el hero, y el mismo motivo
  dentro del monograma.
- **Marquesina** en tinto con las salas donde ha tocado; otra, enorme y en
  cursiva, cierra el pie de página.
- **Passe-partout**: cada foto lleva un segundo filete al aire en color acento;
  si la foto aún no existe, el hueco muestra el monograma fantasma y la ruta
  del archivo que hay que copiar.
- **Grano** de papel sobre todo el documento (`feTurbulence` en SVG, sin imagen).

## El logo

Monograma **JU** construido con dos trazos geométricos —el gancho de la J y la
U— que *recortan* un pentagrama de cinco líneas, encerrado entre dos escuadras
que citan la «caja» de CreArtBox. Funciona en un solo color y aguanta 32 px.

- `assets/logo/monograma.svg` — marca completa (papel, pentagrama tinto, tinta).
- `assets/logo/favicon.svg` — versión negativa para la pestaña del navegador.
- `assets/logo/logo-lockup.svg` — logotipo horizontal: marca + «Josefina Urraca».
- En la web, la marca va **en línea** dentro del HTML (cabecera y pie) para que
  herede el color de su sección.

## Contenido bilingüe

Cada texto traducible lleva los dos idiomas en el propio elemento:

```html
<span data-es="Agenda" data-en="Calendar">Agenda</span>
```

`assets/js/main.js` cambia el `textContent` al pulsar **ES / EN**, actualiza
`<html lang>` y guarda la preferencia en `localStorage`. Sin JS se ve el
español (el texto que está escrito en el HTML). El idioma inicial sale de la
preferencia guardada, y si no hay ninguna, del idioma del navegador.

Para añadir un texto nuevo hay que escribir **siempre los dos atributos**.

## Qué queda por rellenar

Son huecos deliberados, marcados en pantalla y en el HTML:

1. **Fotografías** → `assets/img/LEEME.md` (nombres, proporciones, cómo
   sustituir un hueco por un `iframe` de vídeo).
2. **Correo de contacto** → `hola@josefinaurraca.com` es un ejemplo; cambiar el
   `mailto:` de la sección 06.
3. **Fechas de la temporada** → la tabla de la sección 03 tiene tres filas
   plantilla con `00.00 / por confirmar`. Sustituir fecha, ciudad, sala,
   programa y cambiar el `<span class="pill">` por un enlace a la venta de
   entradas.
4. **Imagen de compartir** → añadir `assets/img/og.jpg` y su `<meta
   property="og:image">`.
5. **Enlaces sociales** → revisar Instagram / LinkedIn de la sección 06 y
   añadir YouTube o Spotify si procede.

## Ver y publicar

```bash
python3 -m http.server 8000     # http://localhost:8000
```

No hay compilación: los archivos se publican tal cual.

- **GitHub Pages** → Settings → Pages → Deploy from branch, carpeta raíz.
  El repositorio ya incluye `.nojekyll` para que se sirva `assets/` sin filtrar.
- **Netlify / Vercel** → arrastrar la carpeta; sin comando de build.
- Dominio propio: apuntar `josefinaurraca.com` al hosting y revisar la etiqueta
  `<link rel="canonical">`.

## Detalles técnicos

- Sin dependencias ni framework. Las fuentes se cargan desde Google Fonts;
  si no cargan, la cascada de reserva (Didot / Helvetica / mono del sistema)
  mantiene el diseño en pie.
- Accesibilidad: enlace de salto, `aria-current` en la navegación activa,
  foco visible, tabla de agenda con `<th scope>` y versión apilada en móvil,
  contraste alto en ambos temas.
- `prefers-reduced-motion` desactiva marquesinas, arpegio, revelados y el
  desplazamiento suave.
- Probado en Chromium a 1440 y 390 px de ancho: sin desbordamiento horizontal
  ni errores de consola.
