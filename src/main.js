import { createApp, nextTick } from 'vue';
import App from './App.vue';
import Router from './router.js';
// import YmapPlugin from 'vue-yandex-maps';

const app = createApp(App);
// Animation
// Meta
const DEFAULT_TITLE = 'Vorobey Art';
const DEFAULT_DESCRIPTION =
  'Vorobey Art – быстроразвивающаяся креативная студия веб-дизайна, специализирующаяся на разработке кооперативных стилей, веб-сайтов, брендинга и 3Д моделирования.';
Router.afterEach((to) => {
  nextTick(() => {
    let description = document.querySelector('meta[name="description"]');
    document.title = to.meta.title || DEFAULT_TITLE;
    description.content = to.meta.description || DEFAULT_DESCRIPTION;
  });
});
// Connect
app.use(Router);
// MAPS
// const settings = {
// 	apiKey: '877bc5d6-f192-46a4-99f2-321bbe3ba79e',
// 	lang: 'ru_RU',
// 	coordorder: 'latlong',
// 	enterprise: false,
// 	version: '2.1',
// };
// app.use(YmapPlugin, settings);

app.mount('#app');
