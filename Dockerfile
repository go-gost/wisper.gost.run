# Wisper landing page — static site served by nginx.
# No build step: HTML/CSS/JS are copied verbatim into the image.
# Self-contained: the nginx vhost is embedded below (no external config file).
#
#   build:  docker build -t wisper-landing .
#   run:    docker run --rm -p 8080:80 wisper-landing
FROM nginx:stable-alpine

# Overwrite the default vhost with an embedded one: gzip + asset caching +
# index.html fallback so deep links never 404.
COPY <<'EOF' /etc/nginx/conf.d/default.conf
server {
    listen      80;
    listen      [::]:80;
    server_name _;

    root  /usr/share/nginx/html;
    index index.html;

    gzip            on;
    gzip_vary       on;
    gzip_min_length 1024;
    gzip_proxied    any;
    gzip_comp_level 5;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/json
        application/xml
        image/svg+xml;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(?:css|js|png|jpe?g|gif|ico|svg|woff2?|ttf)$ {
        expires 7d;
        add_header Cache-Control "public, must-revalidate";
    }

    location = /index.html {
        add_header Cache-Control "no-cache";
    }
}
EOF

# Ship only the site content — CNAME/.nojekyll/README are GitHub Pages-only.
COPY index.html /usr/share/nginx/html/
COPY css/       /usr/share/nginx/html/css/
COPY js/        /usr/share/nginx/html/js/
COPY assets/    /usr/share/nginx/html/assets/

EXPOSE 80
