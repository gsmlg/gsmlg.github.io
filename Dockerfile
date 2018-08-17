FROM gsmlg/phoenix:alpine as builder

ENV MIX_ENV=prod \
    NAME=gsmlg

COPY . /build

RUN apk update \
    && rm -rf /build/assets/node_modules /build/assets/_build /build/assets/deps \
    && cd /build/assets \
    && ./yarn && ./yarn run build \
    && cd /build \
    && mix do deps.get, compile, release \
    && cp /build/_build/prod/rel/gsmlg/releases/$(grep version mix.exs |awk -F'["]' '{print $2}')/gsmlg.tar.gz / \
    && mkdir /app \
    && tar zxf /gsmlg.tar.gz -C /app \

FROM alpine:3.8

ENV PORT=80 \
    NAME=gsmlg \
    SERVER_NAME=www.gsmlg.org \
    NODE_NAME=gsmlg_org \
    ERLCOOKIE=erlang_cookie

RUN apk update \
    && apk add openssl \
    && apk add curl \
    && rm -rf /var/cache/apk/*

COPY --from=builder /app /

EXPOSE 80 4369

COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
