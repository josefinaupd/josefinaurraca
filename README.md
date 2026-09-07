# Josefina Urraca — web personal

Sitio estático de nueve páginas (HTML + CSS + un JS de veinte líneas, sin build
ni dependencias) para la pianista **Josefina Urraca**: intérprete,
co-fundadora de **CreArtBox** (Nueva York, 2013) y co-directora del **Festival
ADAR** (Asturias, 2021). Bilingüe ES / EN.

```
index.html         Inicio            agenda.html      Agenda
trayectoria.html   Trayectoria       prensa.html      Prensa
proyectos.html     Proyectos         contacto.html    Contacto
  creartbox.html     CreArtBox
  adar.html          Festival ADAR
  estudio.html       Estudio de piano

assets/css/main.css        la hoja de estilo, comentada
assets/js/main.js          idioma y año. Nada más
assets/img/                las fotografías (ver assets/img/LEEME.md)
assets/logo/favicon.svg    el icono de la pestaña
```

## El diseño

Encargo, en palabras de ella: una web **sobria, que no parezca «diseñada»**, y
en la que **el texto vaya antes que la fotografía**. Modelo:
[diegoarribas.com](https://diegoarribas.com/), la web del escultor Diego
Arribas.

Lo que se ha copiado de ese modelo, que es lo que lo hace funcionar:

- **Columna centrada y estrecha** (42 rem), fondo claro, texto oscuro, sin
  fotografía de portada. Arriba, el nombre y un menú. Nada más.
- **Menú con páginas de verdad**, no una página larga con secciones: cada cosa
  tiene su URL, se puede enlazar sola y se lee en un minuto. «Proyectos» abre un
  submenú con las tres.
- **Cada página tiene el mismo ritmo**: título, una línea de contexto (dónde,
  desde cuándo, qué papel), el texto, y **la fotografía al final, debajo**, con
  su pie. Primero se cuenta y después se ve.
- Sin efectos: ni revelados al hacer scroll, ni animaciones, ni tarjetas, ni
  sombras, ni esquinas redondeadas, ni iconos.

**El color no es inventado.** La hoja de estilo de creartbox.nyc declara
`--ink: #131820`, `--paper: #fafaf7` y `--accent: #9c8516` sobre un amarillo
`--yellow: #fbda41`; festivaladar.com usa un oro `#c8a84b`. Los dos proyectos de
Josefina ya comparten ese oro, así que el sitio personal lo hereda y no añade
ningún color más. Aparece en tres sitios y en ninguno más: una banda de tres
pixeles arriba, el subrayado de la página en la que estás, y el subrayado de
los enlaces.

| Token | Valor | Uso |
|---|---|---|
| `--papel` | `#fafaf7` | fondo (el de CreArtBox) |
| `--tinta` | `#131820` | texto (el de CreArtBox) |
| `--tinta-suave` | `#5b6169` | contexto, pies de foto, datos secundarios |
| `--filete` | `#dcdad4` | líneas de un pixel entre filas |
| `--oro` | `#9c8516` | enlaces al pasar por encima |
| `--oro-vivo` | `#fbda41` | la banda de arriba y la página actual |
| `--oro-filete` | `#c9b04a` | subrayado de los enlaces |

**Tipografía: la sans del sistema.** No hay fuente web. Carga al instante, no
depende de que Google responda y es la que menos se hace notar — que era
justamente el encargo. Si algún día se quiere unificar con CreArtBox (que usa
Inter y Fraunces), se cambia la variable `--sans` y ya.

## Bilingüe

Cada texto lleva sus dos versiones en el propio HTML:

```html
<span data-es="Trayectoria" data-en="Background">Trayectoria</span>
```

`assets/js/main.js` cambia el `textContent` al pulsar **Es · En**, actualiza
`<html lang>` y guarda la preferencia en `localStorage`, así que el idioma se
mantiene al cambiar de página. Sin JavaScript se lee en español, que es el
texto escrito en el HTML.

Dos reglas al añadir contenido: **siempre los dos atributos**, y el elemento que
los lleva **no puede tener hijos** (se le reescribe el texto completo). Si hace
falta una parte fija —el nombre de un premio, una ciudad— va en un elemento
hermano, como en las listas de trayectoria.

## Editar

Las nueve páginas son HTML normal y se editan una a una con cualquier editor.
Lo único que está repetido en las nueve es la cabecera con el menú y el pie: si
se cambia el menú, hay que cambiarlo en las nueve (buscar `<ul class="menu">`).

Para añadir una página: copiar la más parecida, cambiar el `<title>`, la
`<meta name="description">`, el `<link rel="canonical">`, el `og:url` y el
contenido de `<main>`; y si tiene que salir en el menú, añadirla en las nueve.

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
4. **Instagram** → apunta a `@creartboxnyc`; si hay cuenta personal, cambiarla.
5. **Textos en primera persona** → las páginas de proyectos y el estudio están
   escritas en primera persona («toco», «doy clase»). Si se prefiere tercera
   persona, hay que cambiar los dos atributos `data-es` y `data-en` de cada
   párrafo.

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

- Sin framework, sin dependencias y sin fuente web: nada que se pueda caer.
- Imágenes con `width`/`height` declarados y `loading="lazy"` salvo la primera
  de cada página, para que no salte el texto al cargar.
- El submenú de Proyectos funciona con `:hover` y `:focus-within`, sin
  JavaScript. En pantalla estrecha, donde no hay hover, se queda abierto y
  sangrado; y la página «Proyectos» lista las tres de todas formas, así que
  nunca hace falta el submenú para llegar.
- Accesibilidad: enlaces reales, `aria-current="page"` en la página actual,
  `alt` descriptivo en cada foto, foco visible. Tinta sobre papel da un
  contraste de 15:1; el gris de los datos secundarios, 6:1.
- Comprobado en Chromium a 1440 y 390 px, las nueve páginas: sin desbordamiento
  horizontal, sin imágenes rotas, sin errores de consola y sin nodos bilingües
  mal formados.
