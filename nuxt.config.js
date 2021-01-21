export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'The rm -rf chronicles | Crazy dev stories',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Get crazy dev stories in your inbox twice a month.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.rm-rf.io' },
      {
        property: 'og:title',
        content: 'The rm -rf chronicles | Crazy dev stories',
      },
      {
        property: 'og:description',
        content: 'Get crazy dev stories in your inbox twice a month.',
      },
      {
        property: 'og:image',
        content: 'https://www.rm-rf.io/social.png',
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://www.rm-rf.io' },
      {
        property: 'twitter:title',
        content: 'The rm -rf chronicles | Crazy dev stories',
      },
      {
        property: 'twitter:description',
        content: 'Get crazy dev stories in your inbox twice a month.',
      },
      {
        property: 'twitter:image',
        content: 'https://www.rm-rf.io/social.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon.png',
      },
    ],
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/toast'],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  auth: {
    redirect: {
      callback: '/callback',
      home: '/dashboard',
    },
    strategies: {
      github: {
        clientId: 'fc61fdf44b6ecad93cbc',
        clientSecret: '81af49e67d344ba9a76f0ea1703a49f881cb2c07',
        scope: ['openid', 'profile', 'email', 'read:org'],
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
