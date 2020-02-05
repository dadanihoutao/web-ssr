
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css',
    'assets/less/index.less'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/plugins/route', ssr: true},
    {src: '@/plugins/iview', ssr: true},
    {src: '@/plugins/lockr', ssr: true},
    {src: '@/plugins/axios', ssr: true}
  ],
  route: {
    extendRoutes (routes, resolve) {
        routes.push({
            name: 'article',
            path: '/',
            component: resolve(__dirname, 'pages/article/index.vue')
        })    
    }
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://192.168.0.104:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend (config, ctx) {
    // },
    extend (config, { isDev, isClient }) {
        // if (isDev && isClient) {
        //   config.module.rules.push({
        //     enforce: 'pre',
        //     test: /\.(js|vue)$/,
        //     loader: 'eslint-loader',
        //     exclude: /(node_modules)/
        //   })
        // }
    },
    // 开启webpack打包解析文件大小插件（webpack-bundle-analyze）
    // analyze: true
    vendor: ['axios'] // 为防止重复打包
  }
}
