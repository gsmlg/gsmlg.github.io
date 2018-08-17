#!/bin/sh

set -e

PORT=${PORT:-80}
NAME=${NAME:-gsmlg_org}
SERVER_NAME=${SERVER_NAME:-"gsmlg.org www.gsmlg.org"}
NODE_NAME=${NODE_NAME:-gsmlg@localhost}
ERLCOOKIE=${ERLCOOKIE:-erlang_cookie_is_very_important}

cat <<EOF > /usr/vm.args
## Name of the node
-name $NODE_NAME

## Cookie for distributed erlang
-setcookie $ERLCOOKIE

## Heartbeat management; auto-restarts VM if it dies or becomes unresponsive
## (Disabled by default..use with caution!)
-heart

## Enable kernel poll and a few async threads
##+K true
##+A 5

## Increase number of concurrent ports/sockets
##-env ERL_MAX_PORTS 4096

## Tweak GC to run more often
##-env ERL_FULLSWEEP_AFTER 10

# Enable SMP automatically based on availability
-smp auto
EOF

cat <<EOF > /sites/gsmlg_org
upstream @gsmlg {
  server ${NAME}:${PORT};
}

server {
  listen [::]:443 default_server ipv6only=on ssl http2;
  listen 443 default_server ssl http2;
  server_name ${SERVER_NAME};

  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

  access_log /var/log/nginx/gsmlg_org.access.log;
  error_log /var/log/nginx/gsmlg_org.error.log;

  include /etc/nginx/ssl.conf;

  location /socket {
    proxy_pass http://@gsmlg;
    proxy_http_version 1.1;
    proxy_set_header Upgrade \$http_upgrade;
    proxy_set_header Connection "upgrade";
  }

  location / {
    proxy_connect_timeout 600s;
    proxy_read_timeout 600s;
    proxy_send_timeout 600s;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_set_header Host \$http_host;
    proxy_cache_bypass \$http_pragma;
    proxy_cache_revalidate on;
    proxy_redirect off;
    proxy_pass http://@gsmlg;
  }
}
EOF

/app/bin/gsmlg foreground
