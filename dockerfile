FROM node:8.11.3-alpine

ENV HOST 0.0.0.0

EXPOSE 3000
EXPOSE 80

COPY . .

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

RUN yarn build

CMD ["yarn", "serve"]
# CMD ["yarn", "start"]
