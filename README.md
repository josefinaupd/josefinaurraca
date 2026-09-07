# Josefina Urraca — web personal

Sitio estático (HTML + CSS + un JS de veinte líneas, sin build ni dependencias)
para la pianista **Josefina Urraca**: intérprete, co-fundadora de **CreArtBox**
(Nueva York, 2013) y co-directora del **Festival ADAR** (Asturias, 2021).
Bilingüe ES / EN.

```
index.html                 la página entera
assets/css/main.css        la hoja de estilo, comentada
assets/js/main.js          idioma y año. Nada más
assets/img/                las fotografías (ver assets/img/LEEME.md)
assets/logo/favicon.svg    el icono de la pestaña
```

## El diseño

Modelo: la web de un artista plástico —**diegoarribas.com**, escultor— donde la
obra se ve antes de leerse nada: fotografía a sangre, láminas grandes con el
rótulo encima de la imagen, menú horizontal sobrio y ningún adorno que compita
con lo que se muestra. De **creartbox.nyc** viene la voz tipográfica (EB
Garamond, la misma serif) y de **festivaladar.com**, la fotografía documental:
conciertos, público, piedra y paisaje.

El orden de la página imita cómo se presenta un intérprete en persona: primero
se la ve tocando (portada a sangre), luego dice en una frase cómo trabaja
(declaración), después de dónde viene (biografía), qué hace (los tres
proyectos), qué ha estudiado y dónde ha tocado (trayectoria), cuándo se la puede
oír (agenda), qué han escrito de ella (prensa) y cómo escribirle (contacto).

Lo que **no** hay, a propósito: revelados al hacer scroll, tarjetas con sombra,
iconos, secciones numeradas, degradados decorativos, monoespaciada de programa
de mano, etiquetas de catálogo ni un solo texto de relleno.

**Color.** Papel cálido y una sola tinta con carga, el rojo de brasa que sale de
las propias fotografías, reservado a los enlaces y al foco.

| Token | Valor | Uso |
|---|---|---|
| `--paper` | `#faf8f4` | fondo |
| `--paper-hondo` | `#f2eee7` | fondo de la declaración |
| `--tinta` | `#1b1815` | texto |
| `--tinta-media` | `#605850` | rótulos, pies, datos secundarios |
| `--filete` | `#ddd6ca` | líneas de un pixel |
| `--brasa` | `#8c3b1f` | enlaces y foco |

**Tipografía.** Dos voces, con papeles claros:

- **EB Garamond** para todo lo que se lee —texto, citas, títulos, la portada—
  con sus italiques de verdad, que aquí hacen el trabajo que en otros sitios
  hace la negrita.
- La **sans del sistema**, pequeña y en versalitas espaciadas, sólo para lo que
  es señalización: menú, rótulos de sección, pies de foto, cabeceras de tabla.

**Retícula.** Caja de 82 rem para las imágenes y los tres bloques de
trayectoria; medida de lectura de 38 rem para el texto corrido, que nunca se
estira a todo el ancho. La biografía es retrato más columna de texto; los
proyectos, láminas a todo el ancho de la caja con el texto debajo a medida de
lectura. Por debajo de 56 rem todo se apila y las tres columnas de trayectoria
pasan a una.

## Bilingüe

Cada texto lleva sus dos versiones en el propio HTML:

```html
<span data-es="Trayectoria" data-en="Background">Trayectoria</span>
```

`assets/js/main.js` cambia el `textContent` al pulsar **Es · En**, actualiza
`<html lang>` y guarda la preferencia en `localStorage`. Sin JavaScript se lee
en español, que es el texto escrito en el HTML.

Dos reglas al añadir contenido: **siempre los dos atributos**, y el elemento que
los lleva **no puede tener hijos** (se le reescribe el texto completo). Si hace
falta una parte fija —el nombre de un premio, una ciudad— va en un `<span>`
hermano, como en las listas de trayectoria.

## Qué queda por confirmar

1. **Correo** → `hola@josefinaurraca.com` viene del borrador anterior; hay que
   confirmar la dirección pública real antes de difundir el enlace. Está
   marcado con un comentario `REVISAR` en la sección de contacto.
2. **Agenda** → la fila de ADAR 2027 está anunciada como VII edición en
   preparación; las dos de la temporada de Nueva York dicen «temporada 2026—27»
   porque las fechas concretas aún no están cerradas. Sustituir por día, sala y
   enlace de entradas en cuanto se cierren.
3. **Fotografías** → las siete imágenes son recortes de las que ya estaban en
   josefinaurraca.com y en el archivo de ADAR. Falta acreditar a los fotógrafos:
   cuando se sepa, el crédito va en el pie de cada foto.
4. **Instagram** → apunta a `@creartboxnyc`; si hay cuenta personal, cambiarla.

## Ver y publicar

```bash
python3 -m http.server 8000     # http://localhost:8000
```

No hay compilación: los archivos se publican tal cual.

**GitHub Pages** está en marcha. `.github/workflows/pages.yml` copia
`index.html`, `assets/` y `.nojekyll` a `_site/` y lo despliega; `README.md`
queda fuera, que no es el sitio.

    https://josefinaupd.github.io/josefinaurraca/

Para usar el dominio propio: en Settings → Pages, escribir `josefinaurraca.com`
en *Custom domain* (GitHub añade el archivo `CNAME` al repositorio), y en el DNS
del dominio apuntar los registros `A` de la raíz a las IP de GitHub Pages
—`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`— y
un `CNAME` de `www` a `josefinaupd.github.io`. Después, activar *Enforce HTTPS*.
El `<link rel="canonical">` y la imagen de `og:image` ya apuntan a
`josefinaurraca.com`.

## Detalles técnicos

- Sin framework ni dependencias. EB Garamond viene de Google Fonts y, si no
  carga, la reserva (Garamond / Palatino / Georgia) mantiene el diseño en pie.
- Imágenes con `width`/`height` declarados y `loading="lazy"` salvo la portada,
  para que no salte la página al cargar.
- Accesibilidad: enlaces reales, `caption` y `th scope` en la tabla de agenda,
  `alt` descriptivo en cada foto, foco visible, texto de la portada sobre un
  velo oscuro para que contraste sobre la fotografía, `prefers-reduced-motion`
  respetado.
- Comprobado en Chromium a 1440 y 390 px: sin desbordamiento horizontal, sin
  imágenes rotas y sin errores de consola.
