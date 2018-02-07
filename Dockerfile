FROM node:9-alpine

MAINTAINER David Bingham <dev@davidjbingham.co.uk>

RUN npm -g config set user root # Node modules are writable only by root

RUN apk update && \
	apk upgrade && \
	apk add ca-certificates python make git
RUN npm install -g oauthd

RUN oauthd init --default
ADD ./config.js /default-oauthd-instance/config.js
WORKDIR /default-oauthd-instance

ENTRYPOINT ["oauthd", "start"]
