const pkg = require('./package')
module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#26c9cf',
    height: '5px',
    duration: 5000
  },

  /*
   ** Global CSS
   */
  css: [
    '~assets/styles/transition.css'
  ],

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/vue-search-select.js',
      ssr: false
    },
    '~plugins/directives.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: 'http://0.0.0.0:80/api'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
