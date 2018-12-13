FROM node:8.11.3-alpine

ENV COUCHBASE_HOST 35.188.191.131
ENV COUCHBASE_USER swap-jonajo
ENV COUCHBASE_PASS %gXxZBZyct42
ENV TOKEN_SECRET 12345678
ENV HOST 0.0.0.0
ENV API_URL http://35.192.139.25
ENV PORT 80

EXPOSE 3000
EXPOSE 80

COPY . .
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps
RUN yarn build

CMD ["yarn", "start"]
