/* ============================================================
   Wisper — nav state, scroll reveal, lang toggle, stats ticker
   ============================================================ */
(function () {
  // ── Nav scrolled state ──────────────────────────────────
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 6);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Reveal on scroll ────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add('in'));
  }

  // ── Language toggle ─────────────────────────────────────
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn && window.I18N) {
    langBtn.addEventListener('click', () => I18N.toggle());
  }

  // ── Stats ticker (gentle, realistic) ────────────────────
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const out = document.querySelector('[data-rate="out"]');
  const inn = document.querySelector('[data-rate="in"]');
  const conns = document.querySelector('[data-rate="conns"]');

  function fmtRate(bps) {
    if (bps >= 1e6) return (bps / 1e6).toFixed(2) + ' MB/s';
    if (bps >= 1e3) return (bps / 1e3).toFixed(0) + ' KB/s';
    return bps + ' B/s';
  }
  const rnd = (min, max) => Math.floor(min + Math.random() * (max - min));

  if (!reduce && (out || inn || conns)) {
    setInterval(() => {
      if (out) out.textContent = fmtRate(rnd(900000, 1750000));
      if (inn) inn.textContent = fmtRate(rnd(500000, 1150000));
      if (conns) conns.textContent = String(rnd(7, 24));
    }, 1700);
  }

  // ── Smooth-scroll offset for sticky nav (Safari fallback) ─
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
    });
  });
})();
