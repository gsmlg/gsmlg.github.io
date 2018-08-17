FROM gsmlg/phoenix:alpine

MAINTAINER GSMLG <me@gsmlg.org>

ENV MIX_ENV=prod \
    PORT=80 \
    NAME=gsmlg \
    SERVER_NAME=www.gsmlg.org \
    NODE_NAME=gsmlg_org \
    ERLCOOKIE=erlang_cookie

ADD . /build \
    && apk update \
    && apk add openssl \
    && apk add curl \
    && rm -rf /build/assets/node_modules /build/assets/_build /build/assets/deps \
    && cd /build/assets \
    && ./yarn && ./yarn run build \
    && cd /build \
    && mix do deps.get, compile, release \
    && VER=$(grep version mix.exs |awk -F'["]' '{print $2}') \
    && APP=$(grep 'app:' mix.exs |awk -F'[:,]' '{print $3}') \
    && cp /build/_build/prod/rel/${APP}/releases/${VER}/${APP}.tar.gz / \
    && mkdir /app \
    && tar zxf /${APP}.tar.gz -C /app \
    && rm -f /${APP}.tar.gz \
    && rm -rf /build \
    && rm -rf /var/cache/apk/*

EXPOSE 80 4369

COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
