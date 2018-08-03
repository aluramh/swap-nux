# new-new-swap

## Build Setup

```bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

## Using Docker

### Building the image

`docker build -t alex/swap .`

### Running the container

```
docker run \
  -p 127.0.0.1:3000:3000 \
  alex/swap
```

You can also specify other environment variables like `API_URL_BROWSER`:

```
docker run \
  -p 80:3000 -d \
  -e API_URL_BROWSER='http://35.192.139.25' \
  -e API_URL='http://35.192.139.25' \
  alex/swap:1.1
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
