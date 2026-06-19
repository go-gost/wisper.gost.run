/* ============================================================
   Wisper — i18n: data-i18n dictionary + EN/ZH switching
   ============================================================ */
(function () {
  const DICT = {
    en: {
      'nav.features': 'Features',
      'nav.directions': 'Directions',
      'nav.how': 'How it works',
      'nav.download': 'Download',

      'hero.eyebrow': 'GOST Tunnel Manager',
      'hero.title.silent': 'Silent',
      'hero.title.in': 'In',
      'hero.title.silent2': 'Silent',
      'hero.title.out': 'Out',
      'hero.tag': 'GOST tunnels, managed.',
      'hero.desc': 'Expose local files, web servers, and raw TCP/UDP services to the public internet through the GOST network — from a single binary, a desktop app, or your phone.',
      'hero.ctaPrimary': 'Download',
      'hero.ctaSecondary': 'Quickstart',

      'term.title': 'wisper',
      'term.banner': 'Wisper · GOST tunnel manager',
      'term.wait': 'creating file tunnel...',
      'term.live': 'live',

      'strip.powered': 'Powered by GOST',
      'strip.self': 'Self-hosted',
      'strip.single': 'Single binary',
      'strip.rest': 'Persists across restarts',

      'features.eyebrow': 'Four ways through',
      'features.title': 'Every protocol, one manager.',
      'features.file.name': 'File',
      'features.file.desc': 'Serve a local directory over HTTPS with a public URL.',
      'features.http.name': 'HTTP',
      'features.http.desc': 'Reverse-proxy a local web service to the public net.',
      'features.tcp.name': 'TCP',
      'features.tcp.desc': 'Relay a raw TCP service through a tunnel.',
      'features.udp.name': 'UDP',
      'features.udp.desc': 'Relay a raw UDP service through a tunnel.',

      'dir.eyebrow': 'Two directions',
      'dir.title': 'Two directions, both silent.',
      'dir.out.badge': 'OUT',
      'dir.out.name': 'Local → Public',
      'dir.out.desc': 'Expose a service on your machine to anyone on the internet.',
      'dir.out.sub': 'Tunnels · file · http · tcp · udp',
      'dir.in.badge': 'IN',
      'dir.in.name': 'Public → Local',
      'dir.in.desc': 'Reach a public GOST endpoint from a local port.',
      'dir.in.sub': 'Entrypoints · tcp · udp',

      'how.eyebrow': 'How it works',
      'how.title': 'Live in three steps.',
      'how.s1.name': 'Pick a tunnel type',
      'how.s1.desc': 'File, HTTP, TCP, or UDP.',
      'how.s2.name': 'Get a public URL',
      'how.s2.desc': 'An instant *.gost.run address.',
      'how.s3.name': "You're live",
      'how.s3.desc': 'Traffic flows. Watch it in real time.',

      'stats.eyebrow': 'Observability',
      'stats.title': 'See every byte flow.',
      'stats.panel': 'a3f9c1.gost.run',
      'stats.live': 'live',
      'stats.out': '↑ OUT',
      'stats.in': '↓ IN',
      'stats.conns': 'CONNS',
      'stats.tunnels': 'TUNNELS',

      'download.eyebrow': 'Get Wisper',
      'download.title': 'One tool, every platform.',
      'download.binary': 'binary',
      'download.comingSoon': 'coming soon',
      'download.source': 'Source',

      'footer.tag': 'Silent In · Silent Out',
      'footer.powered': 'Powered by GOST',

      'title': 'Wisper — Silent In, Silent Out.',
      'metaDesc': 'Wisper is a self-hosted GOST tunnel manager. Expose local files, web servers, and TCP/UDP services to the public internet through the GOST network.',
      'switchLabel': '中文'
    },

    zh: {
      'nav.features': '功能',
      'nav.directions': '方向',
      'nav.how': '工作原理',
      'nav.download': '下载',

      'hero.eyebrow': 'GOST 隧道管理器',
      'hero.title.silent': '静',
      'hero.title.in': '入',
      'hero.title.silent2': '静',
      'hero.title.out': '出',
      'hero.tag': 'GOST 隧道，开箱即管。',
      'hero.desc': '经 GOST 网络将本地文件、Web 服务与原始 TCP/UDP 服务暴露到公网——单二进制、桌面应用或手机皆可。',
      'hero.ctaPrimary': '下载',
      'hero.ctaSecondary': '快速上手',

      'term.title': 'wisper',
      'term.banner': 'Wisper · GOST 隧道管理器',
      'term.wait': '正在创建文件隧道...',
      'term.live': '已上线',

      'strip.powered': '基于 GOST',
      'strip.self': '自托管',
      'strip.single': '单二进制',
      'strip.rest': '重启后自动恢复',

      'features.eyebrow': '四种穿墙方式',
      'features.title': '一种协议不落，一个面板搞定。',
      'features.file.name': '文件',
      'features.file.desc': '用一条公网 URL 经 HTTPS 分享本地目录。',
      'features.http.name': 'HTTP',
      'features.http.desc': '把本地 Web 服务反向代理到公网。',
      'features.tcp.name': 'TCP',
      'features.tcp.desc': '通过隧道中继原始 TCP 服务。',
      'features.udp.name': 'UDP',
      'features.udp.desc': '通过隧道中继原始 UDP 服务。',

      'dir.eyebrow': '两个方向',
      'dir.title': '两个方向，皆无生息。',
      'dir.out.badge': '出',
      'dir.out.name': '本地 → 公网',
      'dir.out.desc': '把本机上的服务暴露给公网上的任何人。',
      'dir.out.sub': '隧道 · file · http · tcp · udp',
      'dir.in.badge': '入',
      'dir.in.name': '公网 → 本地',
      'dir.in.desc': '从本地端口接入公网 GOST 端点。',
      'dir.in.sub': '入口 · tcp · udp',

      'how.eyebrow': '工作原理',
      'how.title': '三步上线。',
      'how.s1.name': '选择隧道类型',
      'how.s1.desc': 'File、HTTP、TCP 或 UDP。',
      'how.s2.name': '拿到公网 URL',
      'how.s2.desc': '即时获得 *.gost.run 地址。',
      'how.s3.name': '已上线',
      'how.s3.desc': '流量开始流动，实时可见。',

      'stats.eyebrow': '可观测',
      'stats.title': '看清每一字节的流动。',
      'stats.panel': 'a3f9c1.gost.run',
      'stats.live': '已上线',
      'stats.out': '↑ 出',
      'stats.in': '↓ 入',
      'stats.conns': '连接',
      'stats.tunnels': '隧道',

      'download.eyebrow': '获取 WISPER',
      'download.title': '一个工具，全平台。',
      'download.binary': '二进制',
      'download.comingSoon': '敬请期待',
      'download.source': '源码',

      'footer.tag': '静入 · 静出',
      'footer.powered': '基于 GOST',

      'title': 'Wisper — 静入，静出。',
      'metaDesc': 'Wisper 是自托管的 GOST 隧道管理器。经 GOST 网络将本地文件、Web 服务与 TCP/UDP 服务安全暴露到公网。',
      'switchLabel': 'EN'
    }
  };

  const STORE_KEY = 'wisper-lang';

  function detect() {
    try {
      const url = new URL(location.href);
      const q = url.searchParams.get('lang');
      if (q === 'en' || q === 'zh') return q;
      const saved = localStorage.getItem(STORE_KEY);
      if (saved === 'en' || saved === 'zh') return saved;
    } catch (e) {}
    const nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('zh') ? 'zh' : 'en';
  }

  let current = detect();

  function apply(lang) {
    current = (lang === 'zh') ? 'zh' : 'en';
    const dict = DICT[current];
    document.documentElement.setAttribute('lang', current === 'zh' ? 'zh-CN' : 'en');
    try { localStorage.setItem(STORE_KEY, current); } catch (e) {}

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    if (dict['title']) document.title = dict['title'];
    const meta = document.querySelector('meta[name="description"]');
    if (meta && dict['metaDesc']) meta.setAttribute('content', dict['metaDesc']);

    const label = document.getElementById('lang-label');
    if (label) label.textContent = dict['switchLabel'];

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: current } }));
  }

  function toggle() { apply(current === 'zh' ? 'en' : 'zh'); }
  function t(key) { return (DICT[current] && DICT[current][key]) != null ? DICT[current][key] : key; }

  window.I18N = { get current() { return current; }, apply, toggle, t, dict: DICT };

  function init() { apply(current); }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
