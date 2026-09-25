# Josefina Urraca — web personal

Sitio estático de nueve páginas (HTML + CSS + un JS de ochenta líneas, sin build
ni dependencias) para la pianista **Josefina Urraca**: intérprete,
co-fundadora de **CreArtBox** (Nueva York, 2013) y co-directora del **Festival
ADAR** (Asturias, 2021). Bilingüe ES / EN.

```
index.html         Inicio           agenda.html        Agenda
proyectos.html     Proyectos        pasados.html       Archivo
  creartbox.html     CreArtBox      trayectoria.html   Trayectoria
  adar.html          Festival ADAR  prensa.html        Prensa
  estudio.html       Estudio de piano  contacto.html   Contacto

assets/css/main.css        la hoja de estilo, comentada
assets/js/main.js          idioma, año, carrusel y cajón de móvil
assets/img/                las fotografías (ver assets/img/LEEME.md)
assets/logo/favicon.svg    el icono de la pestaña
```

## El diseño

Modelo: **[diegoarribas.com](https://diegoarribas.com/)**, esta vez leído de su
hoja de estilo (`wp-content/themes/yootheme/css/theme.1.css`) y no de una
descripción de segunda mano, que en los intentos anteriores estaba equivocada:

```
html    { font-family:'Playfair Display'; font-size:15px; line-height:1.5;
          background:#fff; color:#000 }
h1..h6  { font-family:Antonio; font-weight:lighter;
          text-transform:uppercase; letter-spacing:8px }
grises  #838383, #f2f2f2, #eaeaea, #bfbfbf.  Ningún color de acento.
```

Es decir, al revés de lo previsible: los **titulares** van en una condensada
ligera (**Antonio**), en mayúsculas y muy espaciados; el **texto** va en una
serif (**Playfair Display**); y el color es negro sobre blanco, con grises.
Nada más.

Su portada tampoco es un carrusel: una fotografía fija con su firma encima, un
dato suelto debajo (`Madrid (1957)`) y después una entrada por sección que
lleva a su página. Aquí igual: la foto con el nombre encima,
`Pianista · Nueva York y Asturias`, y cuatro entradas —Proyectos, Agenda,
Trayectoria, Prensa— a dos columnas, cada una con una frase y su enlace.

**La portada no la describe.** Bajo su nombre no hay una frase de presentación:
el primer bloque abre con la cita que tenía en su web anterior —«Ser meticulosa,
y libre…», suya— y después va el texto.

**El archivo** (`pasados.html`) son 108 conciertos y proyectos de 2013 a 2026,
agrupados por año. Sale de dos sitios: de **2021 a 2026**, de la página *Events*
de josefinaurraca.com, que es la única que trae el **repertorio** de cada
concierto; de **2013 a 2020**, del archivo de creartbox.nyc, que es lo que
llega más atrás. Las fechas van en numérico (`17.10`, `03–16.08`) bajo el año,
que se lee igual en los dos idiomas y evita traducir 108 fechas.

Se intentó también recuperar la versión antigua de su web por el Wayback
Machine, pero `web.archive.org` está bloqueado por la política de salida de
este entorno. No hizo falta: la página *Events* actual, leída por la API REST
de WordPress (`/wp-json/wp/v2/pages`), ya tenía el archivo completo.

**La agenda sale de creartbox.nyc**, de la página de conciertos del colectivo:
doce fechas reales de la temporada 2026-27, con sala y ciudad. Ojo, es el
calendario del colectivo entero; si en alguna de esas fechas no toca ella, hay
que quitarla a mano en `agenda.html`.

**La portada abre con la obra, no con un retrato**, igual que él abre con una
escultura y no con su cara: la iglesia románica iluminada de azul de un
concierto de ADAR. Las fotografías de ella están dentro, en Proyectos,
Trayectoria y Prensa.

**Densidad.** El texto va a 15 px como el suyo, el `letter-spacing` de los
titulares se ha recortado de `.2em` a `.14em`, el aire entre bloques ha bajado
a la mitad y hay bandas de gris `#f2f2f2` —un color de su propio tema— para que
la página no sea un blanco continuo.

**Deliberadamente distinto de sus dos proyectos.** Es su web personal, no la
del colectivo ni la del festival, así que no comparte nada con ellas:

| | creartbox.nyc | festivaladar.com | Aquí |
|---|---|---|---|
| Tipografía | Archivo + Literata | Chivo + Alegreya | Antonio + Playfair Display |
| Acento | amarillo `#fbda41` | oro `#c8a84b` | **ninguno** |
| Secciones | — | numeradas `§ 01 ·` | sin numerar |

Fuera, por lo mismo: el amarillo, el oro, las secciones numeradas, el subrayado
de rotulador de CreArtBox y la sombra de bloque. Y fuera también la retórica de
los «tres frentes»: los proyectos se listan y ya está.

| Token | Valor | De su tema |
|---|---|---|
| `--blanco` | `#fff` | `background:#fff` |
| `--negro` | `#000` | `color:#000` |
| `--gris` | `#838383` | texto secundario |
| `--gris-claro` | `#f2f2f2` | fondo del pie |
| `--linea` | `#eaeaea` | filetes |
| `--track` | `.2em` | sus `letter-spacing: 8px` |

### Lo que queda de la plantilla Wildhaven

La estructura de nueve páginas y el panel de datos de las páginas de proyecto.
Se han retirado el carrusel, las tarjetas con sombra, las píldoras y el cajón
de móvil: nada de eso está en el modelo. El menú es normal y el JavaScript ha
vuelto a ser el de veinte líneas —idioma y año— porque ya no hay nada que
animar.

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

1. **Fotografías** → son recortes de las que ya estaban en
   josefinaurraca.com y en el archivo de ADAR. El pie de página dice «crédito
   por acreditar»: ahí van los nombres de los fotógrafos en cuanto se sepan.
   Con este diseño hacen falta más y mejores: el carrusel pide cuatro buenas y
   apaisadas.
2. **Instagram** → apunta a `@creartboxnyc`; si hay cuenta personal, cambiarla.
3. **Textos en primera persona** → las páginas de proyectos y el estudio están
   escritas en primera persona («toco», «doy clase»).


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
