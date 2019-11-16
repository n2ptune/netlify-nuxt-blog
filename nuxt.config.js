export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/markdownit',
    'nuxt-buefy'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  srcDir: 'src/',
  markdownit: {
    injected: true
  },
  generate: {
    routes: function() {
      const fs = require('fs')
      return fs.readdirSync('./posts/').map(file => {
        return {
          route: `/posts/${file.slice(2, -5)}`, // Remove the .json from the end of the filename
          payload: require(`./posts/${file}`)
        }
      })
    },
    fallback: true
  },
  buefy: {
    /* buefy options */
  }
}
