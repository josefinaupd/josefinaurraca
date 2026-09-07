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

**El material manda.** Todas las fotografías que existen de ella están hechas
con luz de concierto: negro cálido, ámbar, una proyección sobre la tapa del
piano. Sobre papel crema esas fotos se apagan y pelean con el fondo. Así que el
sitio es negro de sala, y de ahí sale todo lo demás.

**No hay color de acento.** Ninguno. El único color de la página lo traen las
fotografías; el resto es negro y marfil de tecla. Los enlaces se distinguen por
el subrayado, y los grandes —el correo— invirtiéndose al pasar por encima. Un
azul o un terracota de acento habría sido más fácil y peor: le quitaría el
protagonismo a lo único que tiene color de verdad.

**La tipografía, al revés de lo previsible.** Lo esperable en una pianista
clásica es una serif de gala para los títulos y una sans para los datos. Aquí
está cambiado: la grotesca (**Archivo**, en su peso más gordo) hace de cartel, y
la serif (**Newsreader**) es la que se lee. Da un sitio de música de hoy tocada
por alguien con formación clásica, que es exactamente lo que ella hace.

**Los nombres propios se justifican al ancho de la página.** Es la regla del
sitio: `JOSEFINA`, `URRACA`, `CREARTBOX` y `FESTIVAL ADAR` llegan exactamente a
los dos márgenes. No con un cuerpo en `vw` a ojo —eso no encaja nunca y se
descuadra si la fuente tarda en cargar— sino con `<svg>` y `textLength`, que
fuerza el ancho del renglón. Consecuencia buscada: como todos miden lo mismo de
ancho, el que tiene menos letras sale más alto. `URRACA` es más grande que
`JOSEFINA` porque tiene dos letras menos, y eso compone la apertura.

El tercer proyecto, el estudio de piano, va pequeño y sin fotografía. No es un
descuido: de las tres cosas que hace, es la más callada, y la jerarquía
tipográfica lo dice en vez de disimularlo.

**Retícula de doce columnas, y se sale de ella.** Los bloques cuelgan de la
retícula con alineaciones duras, y dos cosas la rompen a propósito: el retrato
de la biografía se sale por el borde derecho de la página, y las fotografías de
apertura y de transición van a sangre de lado a lado. Los dos proyectos con
foto se reparten en espejo —foto a la izquierda, foto a la derecha— para que la
página tenga ritmo sin repetir tres tarjetas iguales.

**El ritmo es contraste de escala**, no una línea de un pixel entre secciones.
Cartel enorme → fotografía a sangre → una frase sola muy grande → texto denso y
pequeño → fotografía → bloques alternos → las fechas en cifras grandes →
citas grandes → el currículo diminuto sobre otro plano → el correo de nuevo a
tamaño de cartel. Los filetes sólo aparecen en la agenda, la prensa y el
currículo, donde de verdad separan filas de datos.

Lo que **no** hay, a propósito: color de acento, versalitas espaciadas haciendo
de etiqueta, puntos medios separando datos, filete entre cada sección,
tarjetas, esquinas redondeadas, sombras, iconos, secciones numeradas, revelados
al hacer scroll ni un solo texto de relleno.

| Token | Valor | Uso |
|---|---|---|
| `--noche` | `#0a0a0a` | fondo: negro de sala, no negro puro |
| `--noche-2` | `#171514` | fondo del bloque de trayectoria |
| `--luz` | `#f3f1ee` | texto: marfil de tecla |
| `--luz-2` | `#8d8884` | señalización, pies, datos secundarios |
| `--linea` | `#2a2827` | filetes de las tablas y las listas |

Referencias: de [diegoarribas.com](https://diegoarribas.com/) viene la idea de
que la obra se vea antes de leerse nada; de
[festivaladar.com](https://festivaladar.com), la fotografía documental —
conciertos, público, piedra, paisaje; de [creartbox.nyc](https://creartbox.nyc),
qué se cuenta y en qué orden.

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

Los nombres justificados en `<svg>` no se traducen porque no cambian: se llaman
igual en los dos idiomas. Por eso el estudio de piano, que sí cambia de nombre,
va en texto normal.

## Qué queda por confirmar

1. **Correo** → `hola@josefinaurraca.com` viene del borrador anterior; hay que
   confirmar la dirección pública real antes de difundir el enlace. Está
   marcado con un comentario `REVISAR` en la sección de contacto.
2. **Agenda** → la fila de ADAR 2027 está anunciada como VII edición en
   preparación; las dos de la temporada de Nueva York dicen «temporada 2026—27»
   porque las fechas concretas aún no están cerradas. Sustituir por día, sala y
   enlace de entradas en cuanto se cierren.
3. **Fotografías** → las cinco imágenes son recortes de las que ya estaban en
   josefinaurraca.com y en el archivo de ADAR. Falta acreditar a los
   fotógrafos: el pie de página ya dice «crédito por acreditar» y ahí van los
   nombres en cuanto se sepan.
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

- Sin framework ni dependencias. Archivo y Newsreader vienen de Google Fonts;
  si no cargan, la reserva (Helvetica / Palatino) mantiene el diseño en pie, y
  los nombres a tamaño de cartel siguen llegando al borde exacto porque el
  ancho lo fija el `textLength` del SVG, no la fuente.
- Imágenes con `width`/`height` declarados y `loading="lazy"` salvo la portada,
  para que no salte la página al cargar.
- Accesibilidad: enlaces reales, `caption` en la tabla de agenda, `alt`
  descriptivo en cada foto, los nombres en SVG duplicados como texto oculto
  para el lector de pantalla, foco visible sobre el negro,
  `prefers-reduced-motion` respetado. Marfil sobre negro de sala da un
  contraste de 16:1.
- Comprobado en Chromium a 1440 y 390 px: sin desbordamiento horizontal, sin
  imágenes rotas y sin errores de consola.
