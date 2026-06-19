/* ============================================================
   Wisper — theme toggle (dark default, persisted)
   ============================================================ */
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const meta = document.querySelector('meta[name="theme-color"]');
  const CHROME = { dark: '#1a1a2e', light: '#fafafb' };

  function current() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function apply(t) {
    if (t === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    try { localStorage.setItem('wisper-theme', t); } catch (e) {}
    if (meta) meta.setAttribute('content', CHROME[t]);
  }

  if (btn) btn.addEventListener('click', () => apply(current() === 'light' ? 'dark' : 'light'));
})();
