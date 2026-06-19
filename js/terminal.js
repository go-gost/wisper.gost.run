/* ============================================================
   Wisper — hero mock terminal animation
   Types a tunnel-creation sequence, lights a "live" badge, loops.
   Degrades to a static final state under prefers-reduced-motion.
   A generation guard ensures only the latest loop survives
   (so a language switch or re-init never races a stale loop).
   All nodes are built with DOM methods (no innerHTML).
   ============================================================ */
(function () {
  const body = document.getElementById('term-body');
  if (!body) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const t = (k) => (window.I18N ? I18N.t(k) : k);

  let gen = 0;
  const alive = (g) => g === gen;
  const el = (cls) => {
    const e = document.createElement('span');
    e.className = cls;
    return e;
  };
  async function hold(g, ms) {
    if (reduce) return alive(g);
    await sleep(ms);
    return alive(g);
  }

  async function run(g) {
    body.replaceChildren();
    if (!alive(g)) return;

    // Line 1 — prompt
    {
      const n = el('ln ln-prompt');
      n.textContent = '$ wisper';
      body.appendChild(n);
      if (!await hold(g, 420)) return;
    }

    // Line 2 — banner
    {
      const n = el('ln ln-banner');
      const mark = el('logo-mark');
      mark.textContent = '▚';
      n.appendChild(mark);
      n.appendChild(document.createTextNode(' ' + t('term.banner')));
      if (!reduce) n.style.animationDelay = '.1s';
      body.appendChild(n);
      if (!await hold(g, 320)) return;
    }

    // Line 3 — "creating file tunnel..."
    {
      const n = el('ln ln-wwait');
      n.textContent = '→ ' + t('term.wait');
      if (!reduce) n.style.animationDelay = '.2s';
      body.appendChild(n);
      if (!await hold(g, 340)) return;
    }

    // Line 4 — typed URL + live badge
    {
      const n = el('ln ln-ok');
      const ok = el('ok');
      ok.textContent = '✓';
      const urlEl = el('url');
      const live = el('term-live');
      const dot = el('live-dot');
      const liveText = el('live-text');
      liveText.textContent = t('term.live');
      live.append(dot, liveText);
      n.append(ok, urlEl, live);
      body.appendChild(n);

      if (reduce) {
        urlEl.textContent = 'https://a3f9c1.gost.run';
        live.classList.add('show');
        return;
      }
      const cur = el('cursor');
      urlEl.after(cur);
      const url = 'https://a3f9c1.gost.run';
      for (const ch of url) {
        if (!alive(g)) return;
        urlEl.textContent += ch;
        await sleep(30);
      }
      cur.remove();
      if (!await hold(g, 160)) return;
      live.classList.add('show');
    }

    if (!reduce) {
      await sleep(2800);
      if (alive(g)) run(g);
    }
  }

  function startLoop() {
    gen++;
    run(gen);
  }

  document.addEventListener('langchange', startLoop);

  function boot() {
    setTimeout(startLoop, 300);
  }
  if (document.readyState !== 'loading') boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
