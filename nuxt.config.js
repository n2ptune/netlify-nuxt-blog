const generateRoutes = () => {
  const fs = require('fs')ㄴ
  const routeObj = fs.readdirSync('./posts/').map(file => {
    return {
      // .json 확장자 명을 지우고 파일 이름 전체 출력
      route: `/posts/${file.slice(0, -5)}/`,
      payload: require(`./posts/${file}`)
    }
  })

  return routeObj
}

const generateTagRoutes = () => {
  const fs = require('fs')
  const tags = []
  fs.readdirSync('./posts/').map(file => {
    // 파일을 읽고 태그만 반환
    const readFile = fs.readFileSync(`./posts/${file}`)
    const { tags: fileTags } = JSON.parse(readFile)
    fileTags.forEach(elem => {
      tags.push(`/tags/${elem}/`)
    })
  })
  // 중복 제거
  // @SEE https://medium.com/@Dongmin_Jang/javascript-array-%EC%A4%91%EB%B3%B5-%EC%A0%9C%EA%B1%B0%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-es6-b5b9075361f9
  const fillterTags = Array.from(new Set(tags))

  return fillterTags
}

const integratedRoutes = () => {
  const result = []

  const tagsRoutes = generateTagRoutes()
  const postsRoutes = generateRoutes()

  for (const item of tagsRoutes) result.push(item)
  for (const item of postsRoutes) result.push(item)

  return result
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
        content: '웹 프론트엔드 영역 기술/개발 학습블로그'
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'All'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'web, front-end, HTML5, CSS3, 웹, javascript, react, vue, nuxt, firebase, node.js'
      },
      {
        'http-equiv': 'Content-Type',
        content: 'text/html; charset=utf-8'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        'http-equiv': 'Subject',
        content: '웹 프론트엔드 영역 기술/개발 학습블로그'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'n2ptune Web Tech-Dev'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '웹 프론트엔드 영역 기술/개발 학습블로그'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'fb:app_id',
        content: '2538174759743749'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://firebasestorage.googleapis.com/v0/b/n2ptune-github-io.appspot.com/o/images%2F44240708.png?alt=media&token=849d8e9b-ed2e-4da6-8e9e-9379f8d2707f'
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '700'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://n2ptune.xyz/'
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
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#8388f5',
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
  plugins: [
    { src: '@/plugins/day', mode: 'client' },
    { src: '@/plugins/ga', mode: 'client' }
  ],
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
    '@nuxtjs/sitemap',
    '@nuxtjs/google-adsense'
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
    routes: integratedRoutes,
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
    routes: integratedRoutes
  },
  'google-adsense': {
    id: 'ca-pub-3441377677018772',
    analyticsUacct: 'UA-153631680-1',
    analyticsDomainName: 'n2ptune.xyz'
  }
}
