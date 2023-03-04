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
import XimtexpPage from './pages/Cases/Ximtexp.vue';
import MobdebutPage from './pages/Cases/Mobdebut.vue';
import PrimetravelPage from './pages/Cases/Primetravel.vue';
import TomiaiPage from './pages/Cases/Tomiai.vue';
import ProzapchastPage from './pages/Cases/Prozapchast.vue';
import OwnwifiPage from './pages/Cases/Ownwifi.vue';
import KvanttelekomBrendPage from './pages/Cases/KvanttelekomBrend.vue';
import HonePage from './pages/Cases/Hone.vue';
import AladdinPage from './pages/Cases/Aladdin.vue';
import UnidancePage from './pages/Cases/Unidance.vue';
import FlipknifePage from './pages/Cases/Flipknife.vue';
import GoupPage from './pages/Cases/Goup.vue';
import PawpawPage from './pages/Cases/Pawpaw.vue';
import XplanePage from './pages/Cases/Xplane.vue';
import IzenbotPage from './pages/Cases/Izenbot.vue';
import PolicyPage from './pages/Policy.vue';

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
    { path: '/energotek', component: EnergotekPage },
    { path: '/motorika', component: MotorikaPage },
    { path: '/spicynote', component: SpicynotePage },
    { path: '/genezis', component: GenezisPage },
    { path: '/zolotoaltaya', component: ZolotoaltayaPage },
    { path: '/ukigassen', component: UkigassenPage },
    { path: '/marusya', component: MarusyaPage },
    { path: '/oceanview', component: Oceanview },
    { path: '/wballiance', component: WBAlliancePage },
    { path: '/energotekAR', component: EnergotekARPage },
    { path: '/ximtexp', component: XimtexpPage },
    { path: '/mobdebut', component: MobdebutPage },
    { path: '/primetravel', component: PrimetravelPage },
    { path: '/tomiai', component: TomiaiPage },
    { path: '/prozapchast', component: ProzapchastPage },
    { path: '/ownwifi', component: OwnwifiPage },
    { path: '/hone', component: HonePage },
    { path: '/aladdin', component: AladdinPage },
    { path: '/unidance', component: UnidancePage },
    { path: '/flipknife', component: FlipknifePage },
    { path: '/goup', component: GoupPage },
    { path: '/pawpaw', component: PawpawPage },
    { path: '/xplane', component: XplanePage },
    { path: '/izenbot', component: IzenbotPage },
    { path: '/kvanttelekomBrend', component: KvanttelekomBrendPage },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: ErrorPage },
  ],
});
