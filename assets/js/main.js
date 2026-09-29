/* Josefina Urraca — sólo dos cosas: idioma y año. */
(() => {
  'use strict';
  const textos = [...document.querySelectorAll('[data-es][data-en]')];
  const botones = [...document.querySelectorAll('[data-setlang]')];

  function idioma(lang) {
    document.documentElement.lang = lang;
    textos.forEach(el => { el.textContent = el.dataset[lang]; });
    botones.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.setlang === lang)));
    try { localStorage.setItem('ju:lang', lang); } catch (_) {}
  }

  let inicial = 'es';
  try {
    const guardado = localStorage.getItem('ju:lang');
    if (guardado === 'es' || guardado === 'en') inicial = guardado;
    else if (!(navigator.language || '').toLowerCase().startsWith('es')) inicial = 'en';
  } catch (_) {}
  idioma(inicial);
  botones.forEach(b => b.addEventListener('click', () => idioma(b.dataset.setlang)));

  /* --- El menú en pantalla estrecha -----------------------------------
     Debajo de 62rem el menú vive en un panel que ocupa la ventana por
     debajo de la cabecera. Sin JavaScript no se esconde: el CSS que lo
     oculta cuelga de la clase .js, que se pone en el <head>. ---------- */
  const cabecera = document.querySelector('.cabecera');
  const abrir = document.querySelector('.abrir');
  const panel = document.getElementById('menu');

  if (cabecera && abrir && panel) {
    const medir = () => document.documentElement.style.setProperty(
      '--cabecera', cabecera.offsetHeight + 'px');
    medir();
    addEventListener('resize', medir);

    const mostrar = abierto => {
      abrir.setAttribute('aria-expanded', String(abierto));
      panel.classList.toggle('abierto', abierto);
      document.body.classList.toggle('menu-abierto', abierto);
      document.body.style.overflow = abierto ? 'hidden' : '';
      pinta();
    };
    abrir.addEventListener('click', () => {
      const abierto = abrir.getAttribute('aria-expanded') !== 'true';
      medir();
      mostrar(abierto);
      if (abierto) panel.querySelector('a').focus();
    });
    /* Al seguir un enlace, al pulsar Escape o al ensanchar la ventana, se
       cierra: si no, la clase se queda puesta y bloquea el scroll. */
    panel.addEventListener('click', e => { if (e.target.closest('a')) mostrar(false); });
    addEventListener('keydown', e => {
      if (e.key === 'Escape' && abrir.getAttribute('aria-expanded') === 'true') {
        mostrar(false); abrir.focus();
      }
    });
    matchMedia('(min-width:62.5625rem)').addEventListener('change', e => {
      if (e.matches) mostrar(false);
    });
  }

  /* --- La cabecera sobre la fotografía ---------------------------------
     Va transparente y en blanco mientras se ve la foto de cabecera, y se
     vuelve sólida en cuanto la foto pasa por encima del menú. --------- */
  const foto = document.querySelector('.apertura, .banda');
  let sobre = !!foto;

  function pinta() {
    document.body.classList.toggle('sobrefoto',
      sobre && !document.body.classList.contains('menu-abierto'));
  }
  pinta();

  if (foto && cabecera && 'IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { sobre = e.isIntersecting; pinta(); },
      { rootMargin: '-' + cabecera.offsetHeight + 'px 0px 0px 0px' }).observe(foto);
  }

  const anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();

  /* --- Vídeos: la carátula no carga nada; el reproductor entra al pulsar.
     Así la página de vídeos pesa lo que pesan las imágenes y YouTube no ve
     a quien sólo pasa por delante. ------------------------------------- */
  document.querySelectorAll('.video__marco[data-video]').forEach(boton => {
    boton.addEventListener('click', () => {
      const id = boton.dataset.video;
      const marco = document.createElement('iframe');
      marco.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      marco.title = boton.getAttribute('aria-label') || 'Vídeo';
      marco.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
      marco.allowFullscreen = true;
      boton.replaceChildren(marco);
      boton.removeAttribute('data-video');
      boton.style.cursor = 'default';
      marco.focus();
    }, { once: true });
  });
})();
