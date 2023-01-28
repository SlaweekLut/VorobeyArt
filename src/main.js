// import { createSSRApp } from 'vue';
// import App from './App.vue';
// import createRouter from './router.js';
// // import VueYandexMetrika from 'vue-v3-yandex-metrika';
// // import YmapPlugin from 'vue-yandex-maps';
// export function createApp() {
// 	const app = createSSRApp(App);
// 	const router = createRouter();
// 	app.use(router);
// 	return { app, router };
// 	// const app = createSSRApp(App);
// 	// const DEFAULT_TITLE = 'Vorobey Art';
// 	// const DEFAULT_DESCRIPTION =
// 	// 	'Vorobey Art – быстроразвивающаяся креативная студия веб-дизайна, специализирующаяся на разработке кооперативных стилей, веб-сайтов, брендинга и 3Д моделирования.';
// 	// router.afterEach((to) => {
// 	// 	nextTick(() => {
// 	// 		let description = document.querySelector('meta[name="description"]');
// 	// 		document.title = to.meta.title || DEFAULT_TITLE;
// 	// 		description.content = to.meta.description || DEFAULT_DESCRIPTION;
// 	// 	});
// 	// });
// 	// app.use(router);
// 	// app.use(VueYandexMetrika, {
// 	// 	id: 90766833,
// 	// 	router: router,
// 	// 	env: process.env.NODE_ENV,
// 	// 	clickmap: true,
// 	// 	trackLinks: true,
// 	// 	accurateTrackBounce: true,
// 	// 	webvisor: true,
// 	// 	ecommerce: 'dataLayer',
// 	// });
// 	// return { app, router };
// }

import { createSSRApp } from 'vue';
import App from './App.vue';
import { createRouter } from './router';

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
	const app = createSSRApp(App);
	const router = createRouter();
	app.use(router);
	return { app, router };
}
