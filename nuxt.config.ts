// https://nuxt.com/docs/api/configuration/nuxt-config

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
	experimental: {
		payloadExtraction: true,
    componentIslands: true,
    sharedPrerenderData: true,
	},
	sourcemap: {
		server: true,
		client: false,
	},

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

	modules: [
		[
			'yandex-metrika-module-nuxt3',
			{
				id: '90766833',
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
				webvisor: true,
				ecommerce: 'dataLayer',
			},
		],
		'@nuxtjs/robots',
    'nuxt-delay-hydration',
    'nuxt-beastcss',
		'@nuxtjs/sitemap',
	],

  delayHydration: {
    mode: 'init',
  },

  beastcss: {
    config: {
      minifyCss: true,
      autoRemoveStyleTags: true,
      preloadExternalStylesheets: true,
      pruneSource: true,
    },
  },

	site: {
    url: 'https://vorobeyart.ru',
  },

	sitemap: {
    enabled: true,
    autoLastmod: true,
    credits: false,
    xslColumns: [
      { label: 'URL', width: '75%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
    ],
  },

	app: {
		rootId: 'app',
		pageTransition: { name: 'page' },
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
				{ property: 'og:image', content: 'favicon/apple-touch-icon.png' },
				{ property: 'og:image:type', content: 'image/png' },
				{ property: 'og:image:width', content: '180' },
				{ property: 'og:image:height', content: '180' },
				{ property: 'og:image:alt', content: 'The Vorobey Art Logo' },
				{ name: 'msapplication-TileColor', content: '#ffffff' },
				{ name: 'theme-color', content: '#ffffff' },
				{ name: 'yandex-verification', content: '317433ee872bb5f0' },
			],
			link: [
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
				{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
				{ rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
				{ rel: 'manifest', href: '/favicon/site.webmanifest' },
				{ rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
			],
		},
	},
});
