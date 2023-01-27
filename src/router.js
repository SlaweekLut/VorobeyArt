import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/Home.vue';
import WorksPage from './pages/Works.vue';
import AboutPage from './pages/About.vue';
const ContactsPage = () => import('./pages/Contacts.vue');
import ErrorPage from './pages/Error.vue';
import EnergotekPage from './pages/Cases/Energotek.vue';
import EnergotekARPage from './pages/Cases/EnergotekAR.vue';
import WBAlliancePage from './pages/Cases/WBAlliance.vue';
import MotorikaPage from './pages/Cases/Motorika.vue';
import SpicynotePage from './pages/Cases/Spicynote.vue';
import GenezisPage from './pages/Cases/Genezisproject.vue';
import ZolotoaltayaPage from './pages/Cases/Zolotoaltaya.vue';
import UkigassenPage from './pages/Cases/Ukigassen.vue';
import MarusyaPage from './pages/Cases/Marusya.vue';
import Oceanview from './pages/Cases/Oceanview.vue';
import DEV from './pages/Cases/DEVPAGE.vue';
// import ProzapchastPage from './pages/Cases/Prozapchast.vue'
// import OwnPage from './pages/Cases/Own.vue'
// import TemplatesPage from './pages/Templates.vue'
import PolicyPage from './pages/Policy.vue';
// import AgreementPage from './pages/Agreement.vue'

export default createRouter({
	history: createWebHistory(),
	scrollBehavior() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({ top: 0 });
			}, 500);
		});
	},
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/works', component: WorksPage },
		{ path: '/about', component: AboutPage },
		{ path: '/contacts', component: ContactsPage },
		{ path: '/policy', component: PolicyPage },
		{ path: '/DEVPAGES', component: DEV },
		// { path: '/agreement', component: AgreementPage },
		// { path: '/templates', component: TemplatesPage },
		{
			path: '/energotek',
			component: EnergotekPage,
			// , meta: {
			// 	title: 'Vorobey Art | Energotek',
			// 	description: 'Energotek — разработчик и производитель полимерных систем для прокладки и защиты кабельных линий. Наши решения повышают надежность работы линий электропередачи и безопасность обслуживающего персонала, сокращают расходы в процессе эксплуатации.'
			// }
		},
		{ path: '/motorika', component: MotorikaPage },
		{ path: '/spicynote', component: SpicynotePage },
		{ path: '/genezis', component: GenezisPage },
		{ path: '/zolotoaltaya', component: ZolotoaltayaPage },
		{ path: '/ukigassen', component: UkigassenPage },
		{ path: '/marusya', component: MarusyaPage },
		{ path: '/oceanview', component: Oceanview },
		// { path: '/prozapchast', component: ProzapchastPage },
		// { path: '/own', component: OwnPage },
		{ path: '/wballiance', component: WBAlliancePage },
		{ path: '/energotekAR', component: EnergotekARPage },
		// { path: '/404', component: ErrorPage },
		{ path: '/:pathMatch(.*)*', name: 'NotFound', component: ErrorPage },
	],
});
