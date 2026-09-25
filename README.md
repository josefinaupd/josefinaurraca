# Josefina Urraca — web personal

Sitio estático de nueve páginas (HTML + CSS + un JS de ochenta líneas, sin build
ni dependencias) para la pianista **Josefina Urraca**: intérprete,
co-fundadora de **CreArtBox** (Nueva York, 2013) y co-directora del **Festival
ADAR** (Asturias, 2021). Bilingüe ES / EN.

```
index.html         Inicio           agenda.html        Agenda
proyectos.html     Proyectos        trayectoria.html   Trayectoria
  creartbox.html     CreArtBox      prensa.html        Prensa
  adar.html          Festival ADAR  contacto.html      Contacto
  estudio.html       Estudio de piano

assets/css/main.css        la hoja de estilo, comentada
assets/js/main.js          idioma, año, carrusel y cajón de móvil
assets/img/                las fotografías (ver assets/img/LEEME.md)
assets/logo/favicon.svg    el icono de la pestaña
```

## El diseño

**La estructura** viene de la plantilla
[Wildhaven](https://lovable.dev/templates/websites/services/wildhaven-template)
de Lovable: carrusel de apertura a sangre con barritas de progreso, tarjetas,
páginas de detalle con panel pegado, cierre con llamada y cajón de móvil. No se
ha copiado su código —es React con Framer Motion y sólo se remezcla dentro de
Lovable—, sino rehecho en HTML, CSS y JS normales.

**La piel** viene de sus dos webs, para que las tres se reconozcan como de la
misma casa. No es una impresión: son los valores leídos de sus hojas de estilo.

| | creartbox.nyc | festivaladar.com | Aquí |
|---|---|---|---|
| Tipografía | Archivo + Literata | Chivo + Alegreya | **Archivo + Literata** |
| Tinta | `#131820` | `#0a0907` | `#131820` |
| Papel | `#fafaf7` | crema | `#fafaf7` |
| Acento | `#fbda41` / `#9c8516` | `#c8a84b` | `#fbda41` / `#9c8516` |
| Esquinas | `999px` y `50%`; el resto rectas | rectas | igual |
| Sombra | `6px 0 0 #131820`, bloque duro | — | igual |

Tres gestos son literalmente suyos:

- **El subrayado de rotulador** de CreArtBox,
  `linear-gradient(transparent 58%, var(--amarillo) 58%)`, sobre el correo, la
  página actual del cajón y el «ver más» de las tarjetas al pasar por encima.
- **La sombra de bloque** `6px 0 0` en vez de sombras desenfocadas: las tarjetas
  no flotan, se desplazan.
- **Las secciones numeradas `§ 01 ·`** del Festival ADAR. En su web es el
  sistema de la casa, no un adorno, así que aquí numera las secciones de verdad.

Lo que se ha quitado de Wildhaven por no ser de esta casa: el verde salvia, las
esquinas de 8 px y las sombras desenfocadas.

**Única desviación deliberada**: el amarillo `#fbda41` con texto blanco encima
daría 1,9:1. Los botones amarillos llevan la tinta oscura, 11:1.

### Lo que no se ha traído de la plantilla, y por qué

Wildhaven es una web **de reservas**. Se ha quitado en vez de fingirlo: el
catálogo ordenable por precio y valoración, la lista de *amenities* y el
formulario de reserva en tres pasos. La página de contacto es un correo directo
y una lista de qué conviene contar según el encargo.

| Wildhaven | Aquí |
|---|---|
| `/` carrusel + destacados + «why» + llamada | `index.html`, misma secuencia |
| `/locations` catálogo | `proyectos.html` |
| `/location/:id` con panel de reserva pegado | `creartbox.html`, `adar.html`, `estudio.html`, con el panel «En breve» |
| `/about` | `trayectoria.html` |
| `/contact` con formulario de tres pasos | `contacto.html`, correo directo |
| — | `agenda.html` y `prensa.html`, que ella ya tenía |

## Movimiento

Poco y medido, todo en `assets/js/main.js`:

- El carrusel pasa de diapositiva cada **6 segundos**, con una barrita de
  progreso por diapositiva.
- **Se para** cuando la pestaña no se está viendo, y **no arranca** si el
  sistema pide `prefers-reduced-motion`. La hoja de estilo apaga además todas
  las transiciones en ese caso.
- El cajón de móvil se cierra con `Esc` y al pulsar cualquier enlace, y devuelve
  el foco al botón que lo abrió.

## Bilingüe

Cada texto lleva sus dos versiones en el propio HTML:

```html
<span data-es="Trayectoria" data-en="About">Trayectoria</span>
```

`assets/js/main.js` cambia el `textContent` al pulsar **Es · En**, actualiza
`<html lang>` y guarda la preferencia en `localStorage`, así que el idioma se
mantiene al cambiar de página. Sin JavaScript se lee en español, que es el
texto escrito en el HTML.

Dos reglas al añadir contenido: **siempre los dos atributos**, y el elemento que
los lleva **no puede tener hijos** (se le reescribe el texto completo). Si hace
falta una parte fija, va en un elemento hermano.

## Editar

Las nueve páginas son HTML normal. Lo único repetido en las nueve es la
cabecera, el cajón de móvil y el pie: si se cambia el menú, hay que cambiarlo en
las nueve (buscar `<nav class="navegacion"`).

## Qué queda por confirmar

1. **Correo** → `hola@josefinaurraca.com` viene del primer borrador; hay que
   confirmar la dirección pública real antes de difundir el enlace. Está
   marcado con un comentario `REVISAR` en `contacto.html`.
2. **Agenda** → ADAR 2027 figura como VII edición en preparación, y las dos
   fechas de Nueva York como «temporada 2026–27» porque las concretas no están
   cerradas. Sustituir por día, sala y enlace de entradas en cuanto se cierren.
3. **Fotografías** → las cinco imágenes son recortes de las que ya estaban en
   josefinaurraca.com y en el archivo de ADAR. El pie de página dice «crédito
   por acreditar»: ahí van los nombres de los fotógrafos en cuanto se sepan.
   Con este diseño hacen falta más y mejores: el carrusel pide cuatro buenas y
   apaisadas.
4. **Instagram** → apunta a `@creartboxnyc`; si hay cuenta personal, cambiarla.
5. **Textos en primera persona** → las páginas de proyectos y el estudio están
   escritas en primera persona («toco», «doy clase»).
6. **«Contratar»** → es el equivalente del «Book Now» de la plantilla. Si suena
   demasiado comercial, cambiar por «Escribir» en la cabecera y el cajón.

## Ver y publicar

```bash
python3 -m http.server 8000     # http://localhost:8000
```

No hay compilación: los archivos se publican tal cual.

**GitHub Pages** está en marcha. `.github/workflows/pages.yml` copia las nueve
páginas, `assets/` y `.nojekyll` a `_site/` y lo despliega; `README.md` queda
fuera, que no es el sitio.

    https://josefinaupd.github.io/josefinaurraca/

Para usar el dominio propio: en Settings → Pages, escribir `josefinaurraca.com`
en *Custom domain* (GitHub añade el archivo `CNAME` al repositorio), y en el DNS
del dominio apuntar los registros `A` de la raíz a las IP de GitHub Pages
—`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`— y
un `CNAME` de `www` a `josefinaupd.github.io`. Después, activar *Enforce HTTPS*.
Los `<link rel="canonical">` y el `og:image` ya apuntan a `josefinaurraca.com`.

## Detalles técnicos

- Sin framework ni dependencias. DM Sans viene de Google Fonts (licencia SIL
  Open Font, libre); si no carga, la reserva del sistema mantiene el diseño.
- Imágenes con `width`/`height` declarados y `loading="lazy"` salvo la primera
  de cada página, para que no salte el texto al cargar.
- Accesibilidad: `aria-current="page"` en la página actual, `aria-expanded` en
  el botón del cajón, foco visible, `alt` descriptivo en cada foto, y el
  movimiento apagado con `prefers-reduced-motion`. Tinta sobre fondo da 11:1;
  el gris de los datos secundarios, 3,9:1, reservado a texto de apoyo.
- Comprobado en Chromium a 1440 y 390 px, las nueve páginas: sin desbordamiento
  horizontal, sin imágenes rotas, sin errores de consola y sin nodos bilingües
  mal formados.
