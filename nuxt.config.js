export default {
  head: {
    title: 'imirr',
    htmlAttrs: {
      lang: 'pl',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'x',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  svgLoader: {
    svgoConfig: {
      plugins: [{ prefixIds: false }],
    },
  },
  css: [],
  styleResources: {
    scss: ['./assets/styles/main.scss'],
  },
  components: true,
  env: {
    baseUrl: process.env.BASE_URL || 'https://localhost:3000/',
  },
  plugins: [],
  buildModules: [
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/style-resources',
      {
        scss: ['./assets/styles/main.scss'],
      },
    ],
  ],
  modules: [
    ['@nuxt/content', {}],
    ['@nuxtjs/axios', {}],
    ['@nuxtjs/pwa', {}],
    // [
    //   '@nuxtjs/sitemap',
    //   {
    //     hostname: process.env.baseUrl,
    //     gzip: true,
    //   },
    // ],
    ['nuxt-imagemin', {}],
    [
      'nuxt-webfontloader',
      {
        google: {
          families: ['Anton:400', 'Roboto:400,700'],
        },
      },
    ],
    // [
    //   '@nuxtjs/google-analytics',
    //   {
    //     id: 'G-44PSMTH9MR',
    //   },
    // ],
    ['nuxt-purgecss', {}],
    [
      'nuxt-social-meta',
      {
        url: process.env.baseUrl,
        title: 'Title',
        site_name: 'Site name',
        description: 'Site description',
        img: 'Link to image in static folder',
        locale: 'pl_PL',
        twitter_card: 'summary',
        themeColor: '#theme-color',
      },
    ],
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: '',
      },
    ],
  ],
  server: {
    port: 3000,
    host: '0.0.0.0', // adjust to PC IP
  },
}
