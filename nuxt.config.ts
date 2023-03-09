// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // hooks: {
  //   'pages:extend'(routes) {
  //     routes.push({
  //       name: 'Home',
  //       path: '/',
  //       file: '~/components/Home.vue',
  //     });
  //   },
  // },
  nitro: {
    serveStatic: true,
  },
  experimental: {
    payloadExtraction: false,
  },
  sourcemap: {
    server: true,
    client: true,
  },
  modules: [
    ['nuxt-delay-hydration', { mode: 'mount', replayClick: true }],
    '@nuxtjs/robots',
    // TODO заменить на свой хост
    ['nuxt-simple-sitemap', { hostname: 'https://zhigulskiy.ru' }],
  ],
  app: {
    rootId: 'app',
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Vorobey Art',
      meta: [
        {
          name: 'description',
          content:
            'Vorobey Art – быстроразвивающаяся креативная студия веб-дизайна, специализирующаяся на разработке кооперативных стилей, веб-сайтов, брендинга и 3Д моделирования.',
        },
      ],
    },
  },
});
