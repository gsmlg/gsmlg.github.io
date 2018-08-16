FROM alpine:3.8

MAINTAINER GSMLG <me@gsmlg.org>

ENV MIX_ENV=prod \
    PORT=80 \
    NAME=gsmlg \
    SERVER_NAME=www.gsmlg.org \
    NODE_NAME=gsmlg_org \
    ERLCOOKIE=erlang_cookie

ENV GSMLG_VERSION=0.2.2 \
    GIT_ID=0286fd0

RUN apk update \
    && apk add openssl \
    && apk add curl \
    && apk add bash \
    && curl -fsSLO https://static.gsmlg.org/gsmlg.tar.gz \
    && tar zxf gsmlg.tar.gz -C /usr \
    && rm -f gsmlg.tar.gz \
    && rm -rf /var/cache/apk/*

EXPOSE 80 4369

COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
