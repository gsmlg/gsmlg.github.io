#!/bin/sh

set -e

PORT=${PORT:-80}
NAME=${NAME:-gsmlg_org}
SERVER_NAME=${SERVER_NAME:-"gsmlg.org www.gsmlg.org"}
NODE_NAME="me@${NODE_NAME:-gsmlg@gsmlg.org}"
ERLCOOKIE=${ERLCOOKIE:-erlang_cookie_is_very_important}
ERL_EPMD_PORT=${ERL_EPMD_PORT:-4369}

#HOST=$(echo $NODE_NAME | sed 's/^.*@//')
#cat /etc/hosts > /tmp/_hosts
#cat /tmp/_hosts |grep -v "$HOST" > /etc/hosts
#rm /tmp/_hosts
#cat <<EOF >> /etc/hosts
#127.0.0.1     $HOST
#::1           $HOST
#EOF

cat <<EOF > /app/vm.args
## Name of the node
-name $NODE_NAME

## Listening ports
-kernel inet_dist_listen_min $(($ERL_EPMD_PORT + 1)) inet_dist_listen_max $(($ERL_EPMD_PORT + 1))

## Cookie for distributed erlang
-setcookie $ERLCOOKIE

## Heartbeat management; auto-restarts VM if it dies or becomes unresponsive
## (Disabled by default..use with caution!)
##-heart

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

/app/bin/gsmlg foreground
