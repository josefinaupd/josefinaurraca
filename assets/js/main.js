/* ============================================================
   Josefina Urraca — interacción
   1 Idioma (ES/EN)  2 Nombre por letras  3 Revelados
   4 Teclado  5 Progreso + nav activa  6 Varios
   ============================================================ */
(() => {
  'use strict';
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1 · Idioma ─────────────────────────────────────────── */
  const traducibles = $$('[data-es][data-en]');
  const botones = $$('[data-setlang]');

  function idioma(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    traducibles.forEach(el => { el.textContent = el.dataset[lang]; });
    botones.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.setlang === lang)));
    try { localStorage.setItem('ju:lang', lang); } catch (_) {}
  }

  // Preferencia guardada > idioma del navegador > español
  let inicial = 'es';
  try {
    const guardado = localStorage.getItem('ju:lang');
    if (guardado === 'es' || guardado === 'en') inicial = guardado;
    else if (!(navigator.language || '').toLowerCase().startsWith('es')) inicial = 'en';
  } catch (_) {}
  idioma(inicial);
  botones.forEach(b => b.addEventListener('click', () => idioma(b.dataset.setlang)));

  /* ── 2 · El nombre entra letra a letra ──────────────────── */
  let n = 0;
  $$('[data-split]').forEach(el => {
    const texto = el.textContent.trim();
    el.textContent = '';
    [...texto].forEach(car => {
      const s = document.createElement('span');
      s.className = 'ch';
      s.style.setProperty('--i', n++);
      s.textContent = car;
      el.appendChild(s);
    });
  });

  /* ── 3 · Revelados al entrar en pantalla ────────────────── */
  if ('IntersectionObserver' in window && !calmo) {
    const ojo = new IntersectionObserver((entradas) => {
      entradas.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); ojo.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
    $$('[data-reveal]').forEach(el => ojo.observe(el));
  } else {
    $$('[data-reveal]').forEach(el => el.classList.add('in'));
  }

  /* ── 4 · Teclado: motivo del hero ───────────────────────── */
  const teclado = $('.keys');
  if (teclado) {
    const OCTAVAS = 3;
    const BLANCAS = OCTAVAS * 7;
    const ANCHO = 100 / BLANCAS;            // % por tecla blanca
    const CON_NEGRA = [0, 1, 3, 4, 5];      // do, re, fa, sol, la

    for (let i = 0; i < BLANCAS; i++) {
      const b = document.createElement('span');
      b.className = 'w';
      teclado.appendChild(b);
    }
    for (let o = 0; o < OCTAVAS; o++) {
      CON_NEGRA.forEach(j => {
        const i = o * 7 + j;
        if (i + 1 >= BLANCAS) return;
        const n = document.createElement('span');
        n.className = 'b';
        n.style.width = `${ANCHO * 0.6}%`;
        n.style.left = `${(i + 1) * ANCHO - ANCHO * 0.3}%`;
        teclado.appendChild(n);
      });
    }

    const blancas = $$('.w', teclado);

    // Arpegio de bienvenida
    if (!calmo) {
      [0, 2, 4, 7, 9, 11, 14, 16, 18].forEach((k, j) => {
        setTimeout(() => {
          blancas[k]?.classList.add('on');
          setTimeout(() => blancas[k]?.classList.remove('on'), 430);
        }, 950 + j * 105);
      });
    }

    // El puntero "toca" el teclado
    teclado.addEventListener('pointermove', (e) => {
      const { left, width } = teclado.getBoundingClientRect();
      const idx = Math.floor(((e.clientX - left) / width) * BLANCAS);
      blancas.forEach((t, i) => t.classList.toggle('on', i === idx));
    });
    teclado.addEventListener('pointerleave', () => blancas.forEach(t => t.classList.remove('on')));
  }

  /* ── 5 · Progreso de lectura y nav activa ───────────────── */
  const barra = $('#progress');
  const topbar = $('#topbar');
  let pendiente = false;

  function alScroll() {
    const y = scrollY;
    const alto = document.documentElement.scrollHeight - innerHeight;
    if (barra) barra.style.width = `${Math.min(100, (y / Math.max(alto, 1)) * 100)}%`;
    topbar?.classList.toggle('compact', y > 120);
    pendiente = false;
  }
  addEventListener('scroll', () => {
    if (!pendiente) { pendiente = true; requestAnimationFrame(alScroll); }
  }, { passive: true });
  alScroll();

  const enlaces = $$('.nav a');
  const secciones = enlaces
    .map(a => ({ a, sec: $(a.getAttribute('href')) }))
    .filter(x => x.sec);

  if ('IntersectionObserver' in window && secciones.length) {
    const espia = new IntersectionObserver((entradas) => {
      entradas.forEach(e => {
        if (!e.isIntersecting) return;
        enlaces.forEach(a => a.removeAttribute('aria-current'));
        secciones.find(x => x.sec === e.target)?.a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    secciones.forEach(x => espia.observe(x.sec));
  }

  /* ── 6 · Varios ─────────────────────────────────────────── */
  const anio = $('#year');
  if (anio) anio.textContent = new Date().getFullYear();
})();
