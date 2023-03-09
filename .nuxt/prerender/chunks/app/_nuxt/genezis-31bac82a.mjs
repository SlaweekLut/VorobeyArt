import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from './Task-3b8bd6fe.mjs';
import { G as GalleryCardTemplate } from './GalleryCard-afd6fc45.mjs';
import { resolveComponent, useSSRContext } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/axios/index.js';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/nanoid/index.js';
import './Title-f65f35b3.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/hookable/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unctx/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/h3/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/ufo/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/destr/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/scule/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/ohash/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  name: "GenezisPage",
  // directives: {
  // 	motion: motion(),
  // },
  components: {
    GalleryTemplate,
    GalleryCardTemplate,
    TitleTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate,
    LikeTemplate
  },
  data() {
    return {
      intro: {
        icon: "genezisproject/PC/genezisproject-page-icon.svg",
        logo: "genezisproject/PC/genezisproject-page-logo.svg",
        img: ["genezisproject", "genezisproject-page-intro"],
        title: "\u0413\u0415\u041D\u0415\u0417\u0418\u0421 \u041F\u0420\u041E\u0415\u041A\u0422",
        description: "\u2014 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u043E-\u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u0443\u044E\u0449\u0430\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u044B \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0437\u0434\u0430\u043D\u0438\u0439, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0435 \u0438 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B, \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430, \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E-\u0434\u0435\u043B\u043E\u0432\u0443\u044E \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443. ",
        tags: "\u0424\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C / \u0411\u0440\u0435\u043D\u0434\u0431\u0443\u043A"
      },
      task: {
        titles: {
          title: {
            title: "\u0417\u0430\u0434\u0430\u0447\u0430",
            fontSize: "simple"
          },
          text: "\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043E\u0431\u0440\u0430\u0442\u0438\u043B\u0441\u044F \u043A \u043D\u0430\u043C \u0441 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C \u0438 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0431\u0440\u0435\u043D\u0434\u0431\u0443\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B \u0441\u043C\u043E\u0433\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438.<br><br>\u0418\u0437 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0439: \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C 3 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F, \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0432 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0443\u044E \u043E\u0431\u0449\u043D\u043E\u0441\u0442\u044C.",
          padding: "task"
        },
        title: "\u041F\u0420\u041E\u0415\u041A\u0422 \u0413\u0415\u041D\u0415\u0417\u0418\u0421"
      },
      gallery: [
        {
          type: "ThreeImage",
          images: [
            { url: ["genezisproject", "/genezisproject-page-img-01"] },
            { url: ["genezisproject", "/genezisproject-page-img-02"] },
            { url: ["genezisproject", "/genezisproject-page-img-03"] }
          ]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["genezisproject", "/genezisproject-page-img-04"] },
            { url: ["genezisproject", "/genezisproject-page-img-05"] }
          ]
        },
        {
          type: "FourImage",
          images: [
            { url: ["genezisproject", "/genezisproject-page-img-06"] },
            { url: ["genezisproject", "/genezisproject-page-img-07"] },
            { url: ["genezisproject", "/genezisproject-page-img-08"] },
            { url: ["genezisproject", "/genezisproject-page-img-09"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["genezisproject", "/genezisproject-page-img-10"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["genezisproject", "/genezisproject-page-img-11"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["genezisproject", "/genezisproject-page-img-12"] },
            { url: ["genezisproject", "/genezisproject-page-img-13"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 1 <span class="title__title-defis">-</span> \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F',
            fontSize: "simple"
          },
          text: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C, \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u043C\u0438 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u044F\u043C\u0438, \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435\u043C \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0439 \u0441\u0442\u0440\u043E\u0439\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432. \u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u044D\u0442\u043E\u0433\u043E \u043C\u044B \u0432\u044B\u0434\u0435\u043B\u0438\u043B\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B, \u043E\u0442 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0431\u0443\u0434\u0435\u043C \u043E\u0442\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u0442\u044C\u0441\u044F: \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B, \u0440\u0438\u0441\u0443\u043D\u043A\u0438 \u0438 \u0446\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 2 <span class="title__title-defis">-</span> \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0442\u0438\u043B\u044F',
            fontSize: "simple"
          },
          text: "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0438\u043C\u0435\u044E\u0449\u0435\u0433\u043E\u0441\u044F \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0438 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u0442\u0438\u043B\u044F. \u0428\u0440\u0438\u0444\u0442\u044B \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u043B\u0438 \u0441\u0442\u0440\u043E\u0433\u0438\u0435, \u0441\u0438\u043C\u0432\u043E\u043B\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438.<br><br>\u0426\u0432\u0435\u0442\u0430 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u043B\u0438 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F:<br>\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 - \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C, \u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C - \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u0446\u0432\u0435\u0442.<br>\u041F\u043B\u0430\u0432\u0443\u0447\u0438\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438 - \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043D\u0430 \u0432\u043E\u0434\u0435 - \u0441\u0438\u043D\u0438\u0439 \u0446\u0432\u0435\u0442.<br>\u0418\u0437\u044B\u0441\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B - \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u0433\u0440\u0443\u043D\u0442\u043E\u043C - \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439 \u0446\u0432\u0435\u0442.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 3 <span class="title__title-defis">-</span> \u0412\u0435\u0440\u0441\u0442\u043A\u0430',
            fontSize: "simple"
          },
          text: "\u0421\u043E\u0431\u0440\u0430\u043B\u0438 \u0431\u0440\u0435\u043D\u0434\u0431\u0443\u043A \u043F\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u0441 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0438\u043B\u044F.<br><br><br>\u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u043B\u0438 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u0432\u0438\u0434 \u0440\u0430\u0431\u043E\u0442 \u0438 \u043E\u0442\u0440\u0430\u0436\u0430\u0435\u0442 \u0435\u0433\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0443.<br><br><br>\u0412 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430, \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u0447 \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u043F\u0438\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u044B. \u0412\u044B\u0431\u0440\u0430\u043B\u0438 \u043F\u043B\u043E\u0441\u043A\u0438\u0439 \u043A\u043E\u043D\u0442\u0443\u0440\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C, \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u044E\u0449\u0438\u0439 \u0447\u0435\u0440\u0442\u0435\u0436\u0438.",
          padding: "simple"
        },
        {
          title: {
            title: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
            fontSize: "simple"
          },
          text: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u043D\u0430 \u0435\u0433\u043E \u043E\u0441\u043D\u043E\u0432\u0435 \u043E\u0444\u043E\u0440\u043C\u0438\u043B\u0438 \u0431\u0440\u0435\u043D\u0434\u0431\u0443\u043A. \u041D\u0430\u0448\u043B\u0438 \u0443\u0434\u0430\u0447\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u043B\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u043E \u043E\u0431\u0449\u0438\u0435 \u0447\u0435\u0440\u0442\u044B, \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u0438\u0445 \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439.",
          padding: "simple"
        }
      ],
      footer: {
        title: "\u0417\u043E\u043B\u043E\u0442\u043E \u0410\u043B\u0442\u0430\u044F",
        next: "zolotoaltaya",
        background: ["zolotoaltaya", "zolotoaltaya-page-intro"]
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IntroTemplate = resolveComponent("IntroTemplate");
  const _component_TaskTemplate = resolveComponent("TaskTemplate");
  const _component_TitleTemplate = resolveComponent("TitleTemplate");
  const _component_GalleryCardTemplate = resolveComponent("GalleryCardTemplate");
  const _component_GalleryTemplate = resolveComponent("GalleryTemplate");
  const _component_LikeTemplate = resolveComponent("LikeTemplate");
  const _component_FooterTemplate = resolveComponent("FooterTemplate");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, { task: $data.task }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[3]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[3]
  }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/genezis.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const genezis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { genezis as default };
//# sourceMappingURL=genezis-31bac82a.mjs.map
