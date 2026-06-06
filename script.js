/* ═══════════════════════════════════════════════════════════════
   template-legale-002-multipage — Marchetti & Partners — script.js
   law-editorial scroll · multi-page · pt-BR
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll animation — frame config ──────────────────────────
var FRAME_PATH   = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/legale-002-multipage/frames/';
var FRAME_PREFIX = 'frame_';
var FRAME_PAD    = 4;
var FRAME_EXT    = '.webp';
var FRAME_COUNT  = 151;  // law-editorial — HARD

// ── Image fallback ────────────────────────────────────────────
window.__imgFallback = function (img, label) {
  var w = img.naturalWidth  || 800;
  var h = img.naturalHeight || 600;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h
    + '" viewBox="0 0 ' + w + ' ' + h + '">'
    + '<defs><linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">'
    + '<stop offset="0%" stop-color="#0E1E33" stop-opacity="0.15"/>'
    + '<stop offset="100%" stop-color="#B08D57" stop-opacity="0.08"/>'
    + '</linearGradient></defs>'
    + '<rect width="100%" height="100%" fill="#F6F3EE"/>'
    + '<rect width="100%" height="100%" fill="url(#fg)"/>'
    + '<text x="50%" y="50%" font-family="\'Libre Baskerville\',Georgia,serif" font-size="17"'
    + ' font-style="italic" fill="#6B6F76" text-anchor="middle" dominant-baseline="middle">'
    + (label || 'imagem em breve')
    + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  img.onerror = null;
};

// ── Phosphor Light icons — SVG inline ────────────────────────
var PHOSPHOR_ICONS = {

  // Briefcase — M&A
  'briefcase': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="32" y="88" width="192" height="144" rx="8"/><path d="M168,88V72a16,16,0,0,0-16-16H104A16,16,0,0,0,88,72V88"/><line x1="32" y1="136" x2="224" y2="136"/></svg>',

  // Buildings — Societário
  'buildings': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="16" y="96" width="88" height="136" rx="2"/><rect x="104" y="40" width="136" height="192" rx="2"/><line x1="16" y1="232" x2="240" y2="232"/><line x1="136" y1="72" x2="136" y2="72" stroke-width="14"/><line x1="172" y1="72" x2="172" y2="72" stroke-width="14"/><line x1="208" y1="72" x2="208" y2="72" stroke-width="14"/><line x1="136" y1="104" x2="136" y2="104" stroke-width="14"/><line x1="172" y1="104" x2="172" y2="104" stroke-width="14"/><line x1="208" y1="104" x2="208" y2="104" stroke-width="14"/><line x1="136" y1="136" x2="136" y2="136" stroke-width="14"/><line x1="172" y1="136" x2="172" y2="136" stroke-width="14"/><line x1="208" y1="136" x2="208" y2="136" stroke-width="14"/><line x1="48" y1="128" x2="48" y2="128" stroke-width="14"/><line x1="80" y1="128" x2="80" y2="128" stroke-width="14"/><line x1="48" y1="160" x2="48" y2="160" stroke-width="14"/><line x1="80" y1="160" x2="80" y2="160" stroke-width="14"/><path d="M104,232V200a16,16,0,0,1,32,0v32"/></svg>',

  // Globe — Internacional
  'globe': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="128" cy="128" r="96"/><ellipse cx="128" cy="128" rx="40" ry="96"/><line x1="32" y1="128" x2="224" y2="128"/><path d="M59,64c18.6,13.4,43.1,22,69,22s50.4-8.6,69-22"/><path d="M59,192c18.6-13.4,43.1-22,69-22s50.4,8.6,69,22"/></svg>',

  // Arrows Clockwise — Reestruturação
  'arrows-clockwise': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="176,48 224,48 224,96"/><polyline points="80,208 32,208 32,160"/><path d="M224,48a96,96,0,0,1-4.2,134.6"/><path d="M32,208a96,96,0,0,1,4.2-134.6"/></svg>',

  // Certificate — Credenciais
  'certificate': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="128" cy="104" r="40"/><path d="M168,178.4V240l-40-16L88,240V178.4"/><path d="M40,80H24a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H56"/><path d="M40,176H24a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H56"/><path d="M216,80h16a8,8,0,0,0,8-8V40a8,8,0,0,0-8-8H200"/><path d="M216,176h16a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H200"/><line x1="8" y1="128" x2="40" y2="128"/><line x1="216" y1="128" x2="248" y2="128"/></svg>',

  // Handshake — Acesso
  'handshake': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M48,160,28.34,180a8,8,0,0,0,0,11.32L44.68,207.7a8,8,0,0,0,11.32,0L136,128"/><path d="M208,96l19.66-19.66a8,8,0,0,0,0-11.32L211.32,48.34a8,8,0,0,0-11.32,0L120,128"/><path d="M120,128,76.69,84.69a8,8,0,0,0-11.31,0l-40,40A8,8,0,0,0,25.38,136L48,160"/><path d="M136,128l43.31,43.31a8,8,0,0,0,11.31,0l40-40A8,8,0,0,0,230.62,120L208,96"/><line x1="120" y1="128" x2="136" y2="128"/></svg>',

  // Chart Line Up — Track record
  'chart-line-up': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="232,208 128,208 32,208"/><polyline points="40,168 96,104 152,136 216,56"/><polyline points="184,56 216,56 216,88"/></svg>',

  // Eye — Transparência
  'eye': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z"/><circle cx="128" cy="128" r="40"/></svg>',

  // Map Pin — Endereço
  'MapPin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M128,16a80,80,0,1,0,80,80A80.09,80.09,0,0,0,128,16Zm0,128a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,144Z"/><path d="M128,144v96"/><path d="M88,216h80"/></svg>',

  // Clock — Horários
  'Clock': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="128" cy="128" r="96"/><polyline points="128,72 128,128 168,168"/></svg>',

  // Phone — Telefone
  'Phone': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M159.38,185.79a96,96,0,0,1-89.17-89.17,8,8,0,0,1,2.19-6.4L87.6,75a8,8,0,0,1,11,.56l24,28a8,8,0,0,1-.44,11.13l-16.31,15.69a80.33,80.33,0,0,0,39.75,39.75l15.69-16.31a8,8,0,0,1,11.13-.44l28,24a8,8,0,0,1,.56,11L185.79,177.19A8,8,0,0,1,159.38,185.79Z"/></svg>',

  // Envelope — Email
  'Envelope': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="24" y="56" width="208" height="160" rx="8"/><polyline points="24,56 128,144 232,56"/></svg>',

  // WhatsApp Logo
  'WhatsappLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,81.06l11.48,22.94L101,118.37a8,8,0,0,0-.73,7.65,56.53,56.53,0,0,0,30.15,30.15,8,8,0,0,0,7.65-.73l14.37-9.08,22.94,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a88,88,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216l12.47-37.4a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Z"/></svg>',

  // LinkedIn Logo
  'LinkedinLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v96a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM216,160v48a8,8,0,0,1-16,0V160a36,36,0,0,0-72,0v48a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A52,52,0,0,1,216,160ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"/></svg>',

  // Arrow Right — link indicator
  'ArrowRight': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="40" y1="128" x2="216" y2="128"/><polyline points="144,56 216,128 144,200"/></svg>'

};

(function () {
  'use strict';

  // ── Inject Phosphor icons ──────────────────────────────────
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    var svg  = PHOSPHOR_ICONS[name];
    if (svg) el.innerHTML = svg;
  });

  // ── Footer year ────────────────────────────────────────────
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Navbar scroll class ────────────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ── Mobile nav toggle ──────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      document.body.classList.toggle('nav-mobile-open', !expanded);
    });
    // Close on same-page anchor click only
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-mobile-open');
      });
    });
  }

  // ── IntersectionObserver — Fade Up & Stagger ───────────────
  if ('IntersectionObserver' in window) {
    var animObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      animObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Counter animation (Números section) ────────────────────
  var counterDone = false;

  function animateCounters() {
    if (counterDone) return;
    var counters = document.querySelectorAll('.counter[data-target]');
    if (!counters.length) return;
    counterDone = true;

    counters.forEach(function (el) {
      var raw    = el.getAttribute('data-target') || '0';
      // Handle values like "R$ 4 bi" — only animate last standalone number
      var hasNumber = /\d+/.test(raw);
      if (!hasNumber) { el.textContent = raw; return; }

      var prefix = raw.match(/^[^0-9]*/)[0];       // e.g. "R$ "
      var suffix = raw.match(/[^0-9]*$/)[0];       // e.g. " bi"
      var digits = parseInt(raw.replace(/\D/g, ''), 10) || 0;
      var duration  = 1600;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var ease     = 1 - Math.pow(1 - progress, 3);
        var current  = Math.round(ease * digits);
        el.textContent = prefix + current + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = raw;
      }
      requestAnimationFrame(step);
    });
  }

  if ('IntersectionObserver' in window) {
    var numerosSection = document.getElementById('numeros');
    if (numerosSection) {
      var cntObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          animateCounters();
          cntObserver.disconnect();
        }
      }, { threshold: 0.3 });
      cntObserver.observe(numerosSection);
    }
  } else {
    animateCounters();
  }

  // ── Hero / page-header above-fold animations ───────────────
  setTimeout(function () {
    document.querySelectorAll('.hero .fade-up, .page-header .fade-up').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 80);

  // ── Scroll animation — canvas (cover mode) ─────────────────
  // Multi-page guard: only run on pages that have the canvas
  var section = document.getElementById('scroll-anim');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return;

  var ctx          = canvas.getContext('2d');
  var images       = [];
  var loaded       = 0;
  var currentFrame = 0;
  var pinEl        = section.querySelector('.scroll-anim-pin');
  var DPR          = Math.min(window.devicePixelRatio || 1, 2);

  function setupCanvas() {
    var w = pinEl.clientWidth;
    var h = pinEl.clientHeight;
    canvas.width  = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function renderFrame(img) {
    var cw = pinEl.clientWidth;
    var ch = pinEl.clientHeight;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    if (!iw || !ih) return;
    var scale = Math.max(cw / iw, ch / ih);
    var sw = iw * scale;
    var sh = ih * scale;
    var sx = (cw - sw) / 2;
    var sy = (ch - sh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }

  function drawFrame(index) {
    var img = images[index];
    if (img && img.complete && img.naturalWidth) {
      renderFrame(img);
      currentFrame = index;
    }
  }

  function onScroll() {
    var rect     = section.getBoundingClientRect();
    var total    = section.offsetHeight - window.innerHeight;
    var scrolled = Math.max(0, -rect.top);
    var progress = Math.min(1, total > 0 ? scrolled / total : 0);
    var frameIdx = Math.round(progress * (FRAME_COUNT - 1));
    if (frameIdx !== currentFrame) drawFrame(frameIdx);
  }

  for (var i = 0; i < FRAME_COUNT; i++) {
    (function (idx) {
      var img  = new Image();
      img.onload = function () {
        loaded++;
        if (idx === 0) {
          setupCanvas();
          renderFrame(img);
          currentFrame = 0;
        }
      };
      var num = String(idx + 1);
      while (num.length < FRAME_PAD) num = '0' + num;
      img.src = FRAME_PATH + FRAME_PREFIX + num + FRAME_EXT;
      images[idx] = img;
    })(i);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    setupCanvas();
    drawFrame(currentFrame);
  }, { passive: true });
  setupCanvas();

})();
