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

Modelo: la plantilla **[Wildhaven](https://lovable.dev/templates/websites/services/wildhaven-template)**
de Lovable (reservas para glamping y retiros off-grid), con demo en
[tranquil-treks-reserve.lovable.app](https://tranquil-treks-reserve.lovable.app).

**No se ha copiado su código.** La plantilla es React con Framer Motion y sólo
se puede remezclar dentro de Lovable. Lo que sí está publicado es su hoja de
estilo, y de ahí salen los valores de diseño, tomados literalmente:

```
--background 0 0% 99%   --foreground 0 0% 20%   --primary 150 15% 70%
--accent 150 20% 95%    --muted-foreground 0 0% 50%   --border 0 0% 92%
--radius .5rem          --soft-shadow  0 2px 8px hsl(0 0% 0% / .04)
                        --hover-shadow 0 4px 16px hsl(0 0% 0% / .08)
--overlay-gradient linear-gradient(180deg, transparent, hsl(0 0% 0% / .4))
--transition-smooth all .3s cubic-bezier(.4, 0, .2, 1)
tipografía DM Sans 300 / 400 / 500 con cursivas
```

Sobre eso se ha rehecho su lenguaje visual en HTML, CSS y JS normales: carrusel
de apertura a sangre con las barritas de progreso, cabecera transparente en
blanco sobre la fotografía, píldoras, tarjetas redondeadas con sombra suave que
se levantan al pasar por encima, sección de motivos sobre verde salvia pálido,
bloque de cierre con llamada, y cajón de móvil que se abre con un `clip-path`
circular.

| Token | Valor | De la plantilla |
|---|---|---|
| `--fondo` | `#fcfcfc` | `0 0% 99%` |
| `--tinta` | `#333333` | `0 0% 20%` |
| `--tinta-2` | `#808080` | `0 0% 50%` |
| `--borde` | `#ebebeb` | `0 0% 92%` |
| `--salvia` | `#a7beb3` | `150 15% 70%` |
| `--salvia-clara` | `#f0f5f2` | `150 20% 95%` |
| `--salvia-texto` | `#4b6c5c` | la misma familia, oscurecida |

**La única desviación deliberada**: la plantilla pone texto blanco sobre el
verde salvia, y eso da un contraste de 1,9:1, que no se lee. Aquí el botón
mantiene exactamente el mismo verde pero con la tinta oscura encima, 6,4:1.

### Lo que no se ha traído, y por qué

Wildhaven es una web **de reservas**. Buena parte de su mobiliario no tiene
equivalente en la web de una pianista, así que se ha quitado en vez de fingirlo:

- El catálogo de alojamientos **ordenable por precio y valoración**: no hay
  precios ni estrellas que ordenar.
- La lista de **amenities** de cada alojamiento.
- El **formulario de reserva en tres pasos**. La página de contacto es un correo
  directo y una lista de qué conviene contar según el encargo; un formulario
  falso que no reserva nada sería peor que no tenerlo.

Lo que sí traslada, y cómo:

| Wildhaven | Aquí |
|---|---|
| `/` carrusel + alojamientos destacados + «why» + llamada | `index.html`, con la misma secuencia |
| `/locations` catálogo | `proyectos.html`, las tres fichas |
| `/location/:id` con banda, galería y panel de reserva pegado | `creartbox.html`, `adar.html`, `estudio.html`: banda, texto y panel «En breve» pegado con los datos y el botón de escribir |
| `/about` | `trayectoria.html` |
| `/contact` con formulario de tres pasos | `contacto.html`, correo directo |
| — | `agenda.html` y `prensa.html`, que ella ya tenía |

### Nota de encargo

Esta dirección es lo contrario de la anterior, que se pidió **sobria, que no
pareciera diseñada, y con el texto antes que la fotografía**. Wildhaven es
fotografía primero y con movimiento. Se ha seguido la plantilla porque es la
referencia más concreta que se ha dado; queda dicho por si conviene recuperar
algo de la versión sobria, que está en el historial de git.

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
