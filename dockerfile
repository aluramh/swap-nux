FROM node:8.11.3-alpine
ENV HOST 0.0.0.0
EXPOSE 3000

COPY . .
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

CMD ["yarn", "start"]
