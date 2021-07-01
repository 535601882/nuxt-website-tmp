module.exports = {
  head: {
    titleTemplate: '%s - Nuxt.js',
    htmlAttrs: {
      lang: 'en',
      class: ['wide', 'wow-animation']
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Meta description' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1'},
    ],
    link:[
      { rel: 'favicon', href: '/favicon.ico' }
    ],
    script:[
      { src: '/js/core.min.js'},
      { src: '/js/script.js' , defer: true,async:true}
    ]
  },
  css: [
    `~/assets/css/bootstrap.css`,
    '~/assets/css/fonts.css',
    '~/assets/css/style.css',
    '~/assets/css/comm.css'
  ],
  plugins: [
    '~/plugins/axios'
  ],
  components:true,
  loading: '~/components/loading.vue',
  globalName:"App",
  build: {
    extractCSS: {
      allChunks: true
    }
  },
  router: {
    linkExactActiveClass: 'exact-active-link'
  },
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // proxyHeaders: false
  }
}