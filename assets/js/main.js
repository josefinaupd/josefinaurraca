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
