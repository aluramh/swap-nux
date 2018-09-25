module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Swap",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Global CSS
  */
  css: ["@/assets/css/main.css"],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ["axios"],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  modules: ["@nuxtjs/axios", "@nuxtjs/auth", "bootstrap-vue/nuxt"],
  auth: {
    token: {
      prefix: "_token."
    },
    localStorage: {
      prefix: "auth."
    },
    // Options
    redirect: {
      // login: User will be redirected to this path if login is required.
      login: "/login",
      // logout: User will be redirected to this path if after logout, current route is protected.
      logout: "/",
      // home: User will be redirect to this path after login. (rewriteRedirects will rewrite this path)
      home: "/profile",
      // callback: User will be redirect to this path by the identity provider after login.
      // (Should match configured Allowed Callback URLs (or similar setting) in your app/client
      // with the identity provider)
      // callback: "/login",
      user: "/"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/auth/login",
            method: "post",
            propertyName: "token"
          },
          logout: {
            url: "/api/auth/logout",
            method: "post"
          },
          user: {
            url: "/api/auth/user",
            method: "get",
            propertyName: "user"
          }
        }
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    }
  },
  // middleware: ["auth"],
  serverMiddleware: [
    // API middleware
    "~/api/index.js"
  ]
};
