/* Josefina Urraca — idioma, año, carrusel de apertura y cajón de móvil.
   Sin dependencias. Todo lo que se mueve respeta prefers-reduced-motion. */
(() => {
  'use strict';
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Idioma ------------------------------------------------------------ */
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

  /* --- Año --------------------------------------------------------------- */
  const anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();

  /* --- Carrusel de apertura --------------------------------------------- */
  const apertura = document.querySelector('.apertura');
  if (apertura) {
    const diapos = [...apertura.querySelectorAll('.diapo')];
    const barras = [...apertura.querySelectorAll('.progreso li')];
    let i = 0, reloj = null;

    const mostrar = n => {
      i = (n + diapos.length) % diapos.length;
      diapos.forEach((d, k) => d.toggleAttribute('data-activa', k === i));
      barras.forEach((b, k) => {
        // Reiniciar la barrita para que la animación de anchura vuelva a empezar.
        if (k === i) { b.removeAttribute('data-activa'); void b.offsetWidth; b.setAttribute('data-activa', ''); }
        else b.removeAttribute('data-activa');
      });
    };

    const arrancar = () => { if (!quieto && diapos.length > 1) reloj = setInterval(() => mostrar(i + 1), 6000); };
    const parar = () => { if (reloj) { clearInterval(reloj); reloj = null; } };

    mostrar(0);
    arrancar();

    // Se puede ir a una diapositiva concreta desde su barrita.
    barras.forEach((b, k) => {
      const boton = b.querySelector('button');
      if (boton) boton.addEventListener('click', () => { parar(); mostrar(k); arrancar(); });
    });

    // No seguir girando si la pestaña no se está viendo.
    document.addEventListener('visibilitychange', () => document.hidden ? parar() : arrancar());
  }

  /* --- Cajón de móvil ---------------------------------------------------- */
  const cajon = document.getElementById('cajon');
  const abrir = document.querySelector('.hamburguesa');
  if (cajon && abrir) {
    const cerrar = cajon.querySelector('.cajon__cerrar');
    const foco = () => cajon.querySelector('a, button');

    const estado = a => {
      cajon.toggleAttribute('data-abierto', a);
      abrir.setAttribute('aria-expanded', String(a));
      document.body.style.overflow = a ? 'hidden' : '';
      (a ? foco() : abrir)?.focus();
    };

    abrir.addEventListener('click', () => estado(true));
    cerrar?.addEventListener('click', () => estado(false));
    cajon.addEventListener('click', e => { if (e.target.tagName === 'A') estado(false); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && cajon.hasAttribute('data-abierto')) estado(false);
    });
  }
})();
