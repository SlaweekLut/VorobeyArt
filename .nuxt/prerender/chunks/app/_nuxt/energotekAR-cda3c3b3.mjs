import { p as publicAssetsURL } from '../../renderer.mjs';
import { G as GalleryTemplate, L as LikeTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, T as TitleTemplate } from './Task-3b8bd6fe.mjs';
import { G as GalleryCardTemplate } from './GalleryCard-afd6fc45.mjs';
import { resolveComponent, useSSRContext } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/h3/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/destr/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/hookable/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/scule/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/ohash/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/ufo/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/defu/dist/defu.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/pathe/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/axios/index.js';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/nanoid/index.js';
import './Title-f65f35b3.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unctx/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + publicAssetsURL("img/energotekAR/Mobile/energotekAR-page-img-06.webp");
const _imports_1 = "" + publicAssetsURL("img/energotekAR/PC/energotekAR-page-img-06.webp");
const _imports_2 = "" + publicAssetsURL("img/energotekAR/JPG/energotekAR-page-img-06.png");
const _imports_3 = "" + publicAssetsURL("img/energotekAR/Mobile/energotekAR-page-img-07.webp");
const _imports_4 = "" + publicAssetsURL("img/energotekAR/PC/energotekAR-page-img-07.webp");
const _imports_5 = "" + publicAssetsURL("img/energotekAR/JPG/energotekAR-page-img-07.png");
const _imports_6 = "" + publicAssetsURL("img/energotekAR/Mobile/energotekAR-page-img-08.webp");
const _imports_7 = "" + publicAssetsURL("img/energotekAR/PC/energotekAR-page-img-08.webp");
const _imports_8 = "" + publicAssetsURL("img/energotekAR/JPG/energotekAR-page-img-08.png");
const _sfc_main = {
  name: "EnergotekARPage",
  components: {
    GalleryCardTemplate,
    GalleryTemplate,
    LikeTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate,
    TitleTemplate
  },
  data() {
    return {
      task: {
        titles: {
          title: {
            title: "\u0417\u0430\u0434\u0430\u0447\u0430",
            fontSize: "simple"
          },
          text: '\u041D\u0430\u0448 \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u0440\u0435\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043B \u0434\u0432\u0435 \u0433\u043B\u0430\u0432\u043D\u044B\u0435 \u0446\u0435\u043B\u0438:<br/><br/><span class="title__text--defis">- \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u0432 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438</span><br/><span class="title__text--defis">- \u0432\u043D\u0435\u0441\u0442\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \xAB\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F\xBB \u0432 \u044D\u0442\u043E\u0442 \u0441\u0430\u043C\u044B\u0439 \u043A\u0430\u0442\u0430\u043B\u043E\u0433</span><br/><br/>\u0421 \u043F\u0435\u0440\u0432\u043E\u0439 \u0446\u0435\u043B\u044C\u044E \u0432\u0441\u0435 \u043F\u043E\u043D\u044F\u0442\u043D\u043E \u2013 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B 100500 \u0440\u0430\u0437 \u043F\u043E\u0441\u0435\u0449\u0430\u0442\u044C \u0441\u0430\u0439\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0438 \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0441\u043A\u0430\u0447\u0430\u044E\u0442 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u0442\u0430\u043C. \u0410 \u0443 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0441\u0435\u0442\u044F\u0442 \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0443 \u0438 \u0443\u0439\u0434\u0443\u0442 \u043E\u0442\u0442\u0443\u0434\u0430 \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C, \u0431\u0443\u0434\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044E \u043D\u0430\u0448\u0435\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430. \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043D\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0442\u0441\u044F \u0438 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0432 \u043C\u0430\u043A\u0443\u043B\u0430\u0442\u0443\u0440\u0443 \u2013 \u0432 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043E\u0442 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u043E\u0432 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432.<br/><br/>\u0410 \u0447\u0442\u043E \u043A\u0430\u0441\u0430\u0435\u0442\u0441\u044F \u0432\u0442\u043E\u0440\u043E\u0439 \u0446\u0435\u043B\u0438 \u2013 \u044D\u0442\u043E \u043A\u0430\u043A \u0440\u0430\u0437 \u043F\u0440\u043E \u0442\u043E, \u043A\u0430\u043A \u043E\u0442\u043B\u0438\u0447\u0438\u0442\u044C\u0441\u044F \u043E\u0442 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432. \u041F\u0440\u043E \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u0444\u0438\u0448\u043A\u0443, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u044B\u0437\u043E\u0432\u0435\u0442 \u0438\u043D\u0442\u0435\u0440\u0435\u0441 \u0438 \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u0442 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435. \u041D\u0443 \u0438 \u0437\u0430\u043E\u0434\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0435\u0437\u043D\u0430 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439.',
          padding: "task"
        },
        title: "\u042D\u043D\u0435\u0440\u0433\u043E\u0442\u044D\u043A"
      },
      intro: {
        icon: "energotekAR/PC/energotekAR-page-icon.svg",
        logo: "energotekAR/PC/energotekAR-page-logo.svg",
        img: ["energotekAR", "energotekAR-page-intro"],
        title: "\u042D\u043D\u0435\u0440\u0433\u043E\u0442\u0435\u043A",
        description: "\u2014 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u0434\u043B\u044F \u043F\u0440\u043E\u043A\u043B\u0430\u0434\u043A\u0438 \u0438 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0445 \u043B\u0438\u043D\u0438\u0439. \u041D\u0430\u0448\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u043E\u0432\u044B\u0448\u0430\u044E\u0442 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u043B\u0438\u043D\u0438\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u044E\u0449\u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044E\u0442 \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438. ",
        tags: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435/ 3D \u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 / \u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F"
      },
      titles: [
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 1 <span class="title__title-defis">-</span> \u0421\u043A\u0435\u043B\u0435\u0442',
            fontSize: "simple"
          },
          text: "\u041F\u0435\u0440\u0432\u044B\u043C \u044D\u0442\u0430\u043F\u043E\u043C \u043D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0430 \u0441\u043B\u0435\u043A\u0435\u0442 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0431\u0443\u0434\u0435\u0442 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0438 \u043E\u0431\u0441\u0443\u0436\u0434\u0430\u0442\u044C\u0441\u044F.<br><br>\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0431\u044B\u043B\u043E \u043F\u0440\u043E\u0434\u0443\u043C\u0430\u0442\u044C, \u043A\u0430\u043A \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u0438 \u0441 \u043A\u0430\u043C\u0435\u0440\u044B (\u0442\u0440\u0435\u043A\u0438\u043D\u0433) \u0438 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0434\u043B\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430. ",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 2 <span class="title__title-defis">-</span> \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 3D \u043C\u043E\u0434\u0435\u043B\u0435\u0439',
            fontSize: "simple"
          },
          text: "\u0414\u043B\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0431\u044B\u043B\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043E 44 \u043C\u043E\u0434\u0435\u043B\u0438, \u043F\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0441 \u0441\u0435\u0442\u043A\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0435\u0439 \u0438 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u0430\u043C\u0438. \u0414\u043B\u044F \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432\u0441\u0435 \u043C\u043E\u0434\u0435\u043B\u0438 \u0432\u044B\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u043B\u0438 \u0432 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u0445 \u0434\u043E 100.000 \u0442\u0440\u0438\u0441\u043E\u0432. \u041F\u043E\u043A\u0430\u0436\u0435\u043C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0437 \u043D\u0438\u0445:",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 3 <span class="title__title-defis">-</span> \u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C',
            fontSize: "simple"
          },
          text: "\u0422\u0440\u0435\u043A\u0438\u043D\u0433 \u043F\u043E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442 \u0446\u0432\u0435\u0442\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0432 \u0447\u0435\u0440\u043D\u043E-\u0431\u0435\u043B\u043E\u0435. \u0410 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0448\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u043E\u0442\u043B\u0438\u0447\u0430\u043B\u0438\u0441\u044C \u0434\u0440\u0443\u0433 \u043E\u0442 \u0434\u0440\u0443\u0433\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0432\u0435\u0442\u043E\u043C \u0438\u043B\u0438 \u043F\u043E\u043B\u043E\u0441\u043A\u0430\u043C\u0438. \u041A\u0430\u043A \u0438\u0442\u043E\u0433, \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u0435 \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u043B\u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u043C\u0443\u0444\u0442\u044B \u0438\u043B\u0438 \u0443\u043F\u043B\u043E\u0442\u043D\u0438\u0442\u0435\u043B\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u043D\u0435 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435.<br><br>\u0422\u0430\u043A \u043C\u044B \u043F\u043E\u043D\u044F\u043B\u0438, \u0447\u0442\u043E \u0442\u0440\u0435\u043A\u0438\u043D\u0433 \u043F\u043E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0435 \u043D\u0430\u043C \u043D\u0435 \u043F\u043E\u0434\u043E\u0439\u0434\u0435\u0442.<br>\u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0440\u0435\u0448\u0438\u043B\u0438 \u2013 \u0431\u0443\u0434\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0430\u0440\u043A\u0438.",
          padding: "simple"
        },
        {
          title: {
            title: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
            fontSize: "simple"
          },
          text: "\u0412\u0441\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0446\u0435\u043B\u0438 \u0434\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u044B, \u0438 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043A\u0440\u0443\u0442\u044B\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C \u043D\u0430\u0448 \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u043B:<br><br>\xB7 \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0441\u0432\u043E\u044E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0443\u044E \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0438 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0432\u043E\u0435\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u0438\u0433\u0440\u043E\u0432\u044B\u0435 \u043C\u0435\u0445\u0430\u043D\u0438\u043A\u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E\u0439 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438<br>\xB7 \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u044F\u0442\u044C\u0441\u044F \u043D\u0430 \u0444\u043E\u043D\u0435 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0430\u0445<br>\xB7 \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430\u043C \u0441\u0432\u043E\u044E \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044E \u0432 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435.<br><br>\u0412 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0435 \u0432\u0441\u0435 \u044D\u0442\u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F \u0432 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436.",
          padding: "simple"
        }
      ],
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["energotekAR", "/energotekAR-page-img-01"] }]
        },
        {
          type: "OneImage",
          shadow: false,
          images: [{ url: ["energotekAR", "/energotekAR-page-img-02"] }]
        },
        {
          type: "TwoImage",
          padding: "24px 36px",
          gap: "24px 73",
          images: [
            { url: ["energotekAR", "/energotekAR-page-img-03"] },
            { url: ["energotekAR", "/energotekAR-page-img-04"] }
          ]
        },
        {
          type: "OneImage",
          shadow: false,
          images: [{ url: ["energotekAR", "/energotekAR-page-img-05"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["energotekAR", "/energotekAR-page-img-09"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["energotekAR", "/energotekAR-page-img-10"] },
            { url: ["energotekAR", "/energotekAR-page-img-11"] }
          ]
        }
      ],
      footer: {
        title: "WB Alliance",
        next: "wballiance",
        background: ["wballiance", "wballiance-page-intro"]
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IntroTemplate = resolveComponent("IntroTemplate");
  const _component_TaskTemplate = resolveComponent("TaskTemplate");
  const _component_TitleTemplate = resolveComponent("TitleTemplate");
  const _component_GalleryTemplate = resolveComponent("GalleryTemplate");
  const _component_GalleryCardTemplate = resolveComponent("GalleryCardTemplate");
  const _component_LikeTemplate = resolveComponent("LikeTemplate");
  const _component_FooterTemplate = resolveComponent("FooterTemplate");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-defd560e>`);
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, { task: $data.task }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[0]
  }, null, _parent));
  _push(`<div class="energotekar__img" data-v-defd560e>`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[0]
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[3]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[3]
  }, null, _parent));
  _push(`<div class="apps" data-v-defd560e><div class="apps__wrapper" data-v-defd560e><picture data-v-defd560e><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_0)} type="image/webp" data-v-defd560e><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_1)} type="image/webp" data-v-defd560e><source${ssrRenderAttr("srcset", _imports_2)} type="image/png" data-v-defd560e><img${ssrRenderAttr("srcset", _imports_1)} alt="" type="image/webp" data-v-defd560e></picture><div class="apps__row" data-v-defd560e><a href="https://play.google.com/store/apps/details?id=com.CYBERTi.EnergotekAR&amp;hl=ru&amp;gl=US" data-v-defd560e><picture data-v-defd560e><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_3)} type="image/webp" data-v-defd560e><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_4)} type="image/webp" data-v-defd560e><source${ssrRenderAttr("srcset", _imports_5)} type="image/png" data-v-defd560e><img${ssrRenderAttr("srcset", _imports_4)} alt="GooglePlay" type="image/webp" data-v-defd560e></picture></a><a href="https://apps.apple.com/ru/app/energotear/id1614880039" data-v-defd560e><picture data-v-defd560e><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_6)} type="image/webp" data-v-defd560e><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_7)} type="image/webp" data-v-defd560e><source${ssrRenderAttr("srcset", _imports_8)} type="image/png" data-v-defd560e><img${ssrRenderAttr("srcset", _imports_7)} alt="GooglePlay" type="image/webp" data-v-defd560e></picture></a></div></div></div>`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[4]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[5]
  }, null, _parent));
  _push(ssrRenderComponent(_component_LikeTemplate, {
    title: $data.intro.img[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_FooterTemplate, { settings: $data.footer }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/energotekAR.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const energotekAR = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-defd560e"]]);

export { energotekAR as default };
//# sourceMappingURL=energotekAR-cda3c3b3.mjs.map
