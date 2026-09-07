# Josefina Urraca — web personal

Sitio estático (HTML + CSS + un JS de veinte líneas, sin build ni dependencias)
para la pianista **Josefina Urraca**: intérprete, co-fundadora de **CreArtBox**
(Nueva York, 2013) y co-directora del **Festival ADAR** (Asturias, 2021).
Bilingüe ES / EN.

```
index.html                 la página, en secciones
assets/css/main.css        el sistema visual entero, comentado
assets/js/main.js          idioma y año. Nada más
assets/logo/               sello tipográfico y favicon
assets/img/                fotografías (ver assets/img/LEEME.md)
tools/artefacto.py         genera dist/ficha.html en un solo archivo
```

## El diseño: «FICHA»

Modelo: la web de un escultor, o mejor, **el catálogo de su obra**. No una
landing. La página se comporta como un documento impreso: columna de margen con
las etiquetas mecanografiadas, texto a una medida de lectura fija, filetes de un
pixel donde el papel los tendría y cartelas técnicas bajo cada plancha
fotográfica. Se abre con un **registro** —nombre, oficio, origen, residencia,
proyectos, título— porque así empieza una ficha de catálogo, no con un titular
gigante.

Lo que **no** hay, deliberadamente: barra flotante, animaciones, revelados al
hacer scroll, degradados, sombras, esquinas redondeadas, marquesinas,
secciones numeradas, iconos, tarjetas.

**Color.** Gris frío de sala de exposición, no crema cálida.

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--paper` | `#e9eae6` | `#14181a` | fondo |
| `--paper-2` | `#dfe1dc` | `#1b2023` | fondo de plancha |
| `--ink` | `#191c1a` | `#dfe2dd` | texto |
| `--ink-2` | `#4a504c` | `#9aa19b` | etiquetas y cartelas |
| `--rule` | `#b9bdb6` | `#333a3b` | filetes |
| `--link` | `#274a72` | `#9dbfe4` | enlaces, y nada más |

Un solo color con carga —el azul de tinta— y sólo para lo que se puede pulsar.
El resto es monocromo: el color lo traerán las fotografías.

**Tipografía.** Dos voces, ninguna de moda:

- **Spectral** (serif holandesa pensada para pantalla) en 300/400/600 para el
  texto y los títulos, en tamaños moderados: la voz del cuerpo del catálogo.
- **Courier Prime** para todo lo que es dato: etiquetas de margen, fechas,
  cartelas, nombres de archivo, navegación. La voz del programa de mano
  mecanografiado.

**Retícula.** Página de 55 rem centrada; cada sección es una fila de dos
columnas —margen de 9,5 rem alineado a la derecha contra el eje, y el bloque de
contenido— separadas por un filete. En pantalla estrecha las etiquetas pasan
arriba, la tabla de agenda se apila y las listas con puntos guía se convierten
en pares nombre / lugar.

## El logo

En una web así el logotipo **es** el nombre compuesto en Spectral: no hace falta
un símbolo, y meterlo sería el adorno que sobra. Para los usos en que sí se
necesita una marca cerrada (firma de correo, cartel, redes) está
`assets/logo/sello.svg`: un sello de inventario —filete, nombre en serif,
`PIANISTA` mecanografiado y `NY / AST` al otro extremo—. El favicon
(`assets/logo/favicon.svg`) es un `ju` en la misma serif sobre tinta.

## Contenido bilingüe

Cada texto lleva los dos idiomas en el propio elemento:

```html
<span data-es="Escenarios" data-en="Venues">Escenarios</span>
```

`assets/js/main.js` cambia el `textContent` al pulsar **Es · En**, actualiza
`<html lang>` y guarda la preferencia en `localStorage`. Sin JavaScript se lee
en español, que es el texto escrito en el HTML. Al añadir contenido nuevo hay
que poner **siempre los dos atributos**.

## Qué queda por rellenar

Huecos deliberados; en pantalla se ven como planchas vacías con el nombre del
archivo que falta.

1. **Fotografías** → `retrato.jpg`, `escena.jpg`, `adar.jpg` en `assets/img/`
   (medidas y detalles en `assets/img/LEEME.md`).
2. **Correo** → `hola@josefinaurraca.com` es un ejemplo; cambiar el `mailto:`
   de la sección Contacto.
3. **Agenda** → las tres filas dicen «por confirmar». Sustituir por las fechas
   cerradas y, si hay venta, enlazar la sala.
4. **Compartir** → añadir `assets/img/og.jpg` y su `<meta property="og:image">`.

## Ver, publicar, previsualizar

```bash
python3 -m http.server 8000     # http://localhost:8000
python3 tools/artefacto.py      # dist/ficha.html, todo en un archivo
```

No hay compilación: los archivos se publican tal cual.

- **GitHub Pages** → Settings → Pages → Deploy from branch, carpeta raíz.
  El repositorio incluye `.nojekyll` para que `assets/` se sirva sin filtrar.
- **Netlify / Vercel** → arrastrar la carpeta; sin comando de build.
- Dominio propio: apuntar `josefinaurraca.com` al hosting y revisar
  `<link rel="canonical">`.

`dist/ficha.html` es sólo la vista previa de un archivo; el sitio que se publica
es `index.html` con sus carpetas.

## Detalles técnicos

- Sin framework ni dependencias. Las fuentes vienen de Google Fonts y, si no
  cargan, la reserva (Georgia / Courier New) mantiene el diseño en pie.
- Tema claro y oscuro según el sistema del visitante, resuelto con tokens.
- Accesibilidad: navegación por enlaces reales, `caption` y `th scope` en la
  tabla, foco visible, contraste alto en ambos temas, `prefers-reduced-motion`
  respetado (aunque no haya nada que animar).
- Comprobado en Chromium a 1280 y 390 px: sin desbordamiento horizontal ni
  errores de consola.
