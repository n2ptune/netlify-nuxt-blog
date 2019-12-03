const generateRoutes = () => {
  const fs = require('fs')
  const routeObj = fs.readdirSync('./posts/').map(file => {
    return {
      // .json 확장자 명을 지우고 파일 이름 전체 출력
      route: `/posts/${file.slice(0, -5)}`,
      payload: require(`./posts/${file}`)
    }
  })

  return routeObj
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | n2ptune Web Tech-Dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon-precomposed', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.materialdesignicons.com/4.5.95/css/materialdesignicons.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#803efb',
    failedColor: '#e71db5',
    height: '3px',
    duration: 5000
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/utils/_utils.scss', '@/assets/variables.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/day'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-buefy',
    '@nuxtjs/sitemap'
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
    injected: true,
    use: ['markdown-it-highlightjs']
  },
  generate: {
    routes: generateRoutes,
    fallback: true
  },
  buefy: {
    /* buefy options */
    materialDesignIcons: false,
    css: false
  },
  sitemap: {
    hostname: 'https://n2ptune.xyz',
    gzip: true,
    exclude: ['/admin/**'],
    routes: generateRoutes
  }
}
