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
      'nav.tutorial': 'Self-Hosted',

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

      'note.tls': 'For production deployments, configure Traefik with a valid TLS certificate via Let\'s Encrypt (using the acme provider) and replace gost.local with your actual domain.',

      'tutorial.title': 'Self-Hosted Public Reverse Proxy',
      'tutorial.desc': 'Deploy your own GOST-powered public reverse proxy with Docker Compose — Traefik, GOST tunnel, ingress plugins, and Redis, all on your infrastructure.',
      'tutorial.arch.title': 'Architecture Overview',
      'tutorial.arch.desc': 'The stack consists of four Docker services working in concert. Traefik terminates TLS and routes incoming requests. The GOST tunnel service handles WebSocket tunnel connections from clients. GOST Plugins manages dynamic subdomain-to-tunnel bindings via gRPC with Redis persistence. Together they provide a full self-hosted equivalent of the relay service described in the GOST+ blog.',
      'tutorial.service': 'Services',
      'tutorial.service.traefik.name': 'Traefik',
      'tutorial.service.traefik.role': 'TLS Termination / Router',
      'tutorial.service.traefik.desc': 'Edge reverse proxy. Listens on ports 80 and 443, redirects HTTP to HTTPS, and routes traffic by host rule — wisper.gost.local to the tunnel port, *.gost.local to the ingress entrypoint.',
      'tutorial.service.gost.name': 'GOST Tunnel',
      'tutorial.service.gost.role': 'WebSocket Tunnel Handler',
      'tutorial.service.gost.desc': 'Core tunneling engine. Listens on :8080 for WebSocket tunnel connections and uses a gRPC ingress plugin to resolve which tunnel owns each subdomain.',
      'tutorial.service.plugins.name': 'GOST Plugins',
      'tutorial.service.plugins.role': 'Ingress Management',
      'tutorial.service.plugins.desc': 'Companion container running the ingress subcommand. Connects to Redis to store and retrieve tunnel-to-subdomain bindings with a 24-hour expiration.',
      'tutorial.service.redis.name': 'Redis',
      'tutorial.service.redis.role': 'State / Persistence',
      'tutorial.service.redis.desc': 'Key-value store for ingress mappings. Uses an Alpine image with persistence enabled (save every 60 seconds if at least 1 key changed).',
      'tutorial.config.title': 'Configuration',
      'tutorial.config.gost.title': 'GOST Configuration (gost.yml)',
      'tutorial.config.compose.title': 'Docker Compose',
      'tutorial.subdomain.title': 'Subdomain Allocation',
      'tutorial.subdomain.desc': 'When a tunnel client connects, the ingress plugin records the subdomain-to-tunnel binding in Redis with a 24-hour expiration. Traefik\'s HostRegexp rule captures any {subdomain}.gost.local request and forwards it to the entrypoint port :8000, where the tunnel handler looks up the owning tunnel and relays traffic through the WebSocket connection.',
      'tutorial.flow.title': 'End-to-End Flow',
      'tutorial.flow.step1': 'A tunnel client connects via WebSocket at wss://wisper.gost.local:443 (handled by Traefik then forwarded to GOST tunnel on :8080).',
      'tutorial.flow.step2': 'GOST registers the tunnel and obtains a public subdomain via the gRPC ingress plugin, persisted in Redis.',
      'tutorial.flow.step3': 'External visitors reach https://{subdomain}.gost.local, which Traefik routes to the ingress entrypoint port :8000.',
      'tutorial.flow.step4': 'The tunnel handler, consulting the ingress plugin, forwards traffic through the WebSocket tunnel back to the client\'s local service.',

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
      'nav.tutorial': '自托管',

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

      'note.tls': '生产环境中，请为 Traefik 配置有效的 TLS 证书（使用 Let\'s Encrypt 的 acme 提供商），并将 gost.local 替换为你的实际域名。',

      'tutorial.title': '自建公共反向代理',
      'tutorial.desc': '使用 Docker Compose 部署你自己的 GOST 公共反向代理服务——包含 Traefik、GOST 隧道、入口插件和 Redis，全部运行在你的基础设施上。',
      'tutorial.arch.title': '架构概览',
      'tutorial.arch.desc': '该堆栈由四个 Docker 服务协同工作。Traefik 负责 TLS 终结和请求路由。GOST 隧道服务处理来自客户端的 WebSocket 隧道连接。GOST Plugins 通过 gRPC 管理动态子域名到隧道的绑定，并由 Redis 持久化存储。它们共同提供了与 GOST+ 博客所述中继服务功能等价的自托管方案。',
      'tutorial.service': '服务组件',
      'tutorial.service.traefik.name': 'Traefik',
      'tutorial.service.traefik.role': 'TLS 终结 / 路由',
      'tutorial.service.traefik.desc': '边缘反向代理。监听 80 和 443 端口，将 HTTP 重定向到 HTTPS，并按主机规则路由流量——wisper.gost.local 到隧道端口，*.gost.local 到入口端点。',
      'tutorial.service.gost.name': 'GOST 隧道',
      'tutorial.service.gost.role': 'WebSocket 隧道处理器',
      'tutorial.service.gost.desc': '核心隧道引擎。在 :8080 上监听 WebSocket 隧道连接，并使用 gRPC 入口插件解析每个子域名所属的隧道。',
      'tutorial.service.plugins.name': 'GOST Plugins',
      'tutorial.service.plugins.role': '入口管理',
      'tutorial.service.plugins.desc': '运行入口子命令的伴生容器。连接 Redis 以存储和检索隧道到子域名的绑定，有效期为 24 小时。',
      'tutorial.service.redis.name': 'Redis',
      'tutorial.service.redis.role': '状态 / 持久化',
      'tutorial.service.redis.desc': '入口映射的键值存储。使用 Alpine 镜像并启用持久化功能（每 60 秒保存一次）。',
      'tutorial.config.title': '配置文件',
      'tutorial.config.gost.title': 'GOST 配置 (gost.yml)',
      'tutorial.config.compose.title': 'Docker Compose',
      'tutorial.subdomain.title': '子域名分配',
      'tutorial.subdomain.desc': '当隧道客户端连接时，入口插件将子域名到隧道的绑定记录在 Redis 中，有效期为 24 小时。Traefik 的 HostRegexp 规则捕获任何 {subdomain}.gost.local 请求并将其转发到入口端口 :8000，隧道处理器在此查询所属隧道并通过 WebSocket 连接中继流量。',
      'tutorial.flow.title': '端到端流程',
      'tutorial.flow.step1': '隧道客户端通过 WebSocket 连接到 wss://wisper.gost.local:443（先经 Traefik 处理，再转发到 :8080 上的 GOST 隧道）。',
      'tutorial.flow.step2': 'GOST 注册隧道并通过 gRPC 入口插件分配公共子域名，持久化到 Redis 中。',
      'tutorial.flow.step3': '外部用户访问 https://{subdomain}.gost.local，Traefik 将其路由到入口端口 :8000。',
      'tutorial.flow.step4': '隧道处理器通过入口插件查询所属隧道，经 WebSocket 连接将流量转发回客户端的本地服务。',

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

    const titleEl = document.querySelector('title[data-i18n]');
    if (dict['title'] || titleEl) {
      const key = titleEl ? titleEl.getAttribute('data-i18n') : null;
      document.title = (key && dict[key] != null) ? dict[key] : dict['title'];
    }
    document.querySelectorAll('meta[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.setAttribute('content', dict[key]);
    });

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
