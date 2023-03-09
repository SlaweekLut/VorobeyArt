import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from './Task-3b8bd6fe.mjs';
import { G as GalleryCardTemplate } from './GalleryCard-afd6fc45.mjs';
import { resolveComponent, useSSRContext } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/server-renderer/index.mjs';
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
  name: "HonePage",
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
        icon: "hone/PC/hone-page-icon.svg",
        logo: "hone/PC/hone-page-logo.svg",
        img: ["hone", "hone-page-intro"],
        title: "H ONE",
        description: " \u2014  \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u044E\u0434\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 (\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432) \u043F\u0440\u043E\u0434\u0432\u0438\u0433\u0430\u044E\u0442 \u0443\u0441\u043B\u0443\u0433\u0438 \u0438 \u0442\u043E\u0432\u0430\u0440\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043F\u0443\u0442\u0451\u043C \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043A \u043D\u0435\u043C\u0443 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430.",
        tags: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F / \u0424\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C / \u0411\u0440\u0435\u043D\u0434\u0431\u0443\u043A"
      },
      tasks: [
        {
          titles: {
            title: {
              title: "\u0417\u0430\u0434\u0430\u0447\u0430",
              fontSize: "simple"
            },
            text: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0431\u0440\u0435\u043D\u0434\u0430. \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043E\u0431\u0440\u0430\u0442\u0438\u043B\u0441\u044F \u043A \u043D\u0430\u043C, \u0438\u043C\u0435\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F: \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E \u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u043E. \u0412\u0430\u0436\u043D\u043E, \u0447\u0442\u043E\u0431\u044B \u0432 \u043D\u0435\u043C \u0447\u0438\u0442\u0430\u043B\u0430\u0441\u044C \u0431\u0443\u043A\u0432\u0430 \u201CH\u201D.",
            padding: "task"
          },
          title: "H one"
        },
        {
          titles: {
            title: {
              title: "\u0411\u0440\u0435\u043D\u0434\u0431\u0443\u043A",
              fontSize: "simple"
            },
            text: "\u0414\u0430\u043B\u0435\u0435 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443 \u0431\u044B\u043B\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C \u0438 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0431\u0440\u0435\u043D\u0434\u0431\u0443\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B \u0441\u043C\u043E\u0433\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438.<br><br>\u0418\u0437 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0439: \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0442\u0440\u0435\u043D\u0434\u043E\u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0433\u043E\u0434\u0430, \u043E\u0442\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0437\u043C\u0430. \u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0443\u043F\u043E\u0440 \u043D\u0430 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F.",
            padding: "task"
          },
          title: ""
        }
      ],
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-01"] }]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["hone", "/hone-page-img-02"] },
            { url: ["hone", "/hone-page-img-03"] }
          ]
        },
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-04"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-05"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-06"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-07"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["hone", "/hone-page-img-08"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["hone", "/hone-page-img-09"] },
            { url: ["hone", "/hone-page-img-10"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["hone", "/hone-page-img-11"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-12"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-13"] }]
        },
        {
          type: "FourImage",
          images: [
            { url: ["hone", "/hone-page-img-14"] },
            { url: ["hone", "/hone-page-img-15"] },
            { url: ["hone", "/hone-page-img-16"] },
            { url: ["hone", "/hone-page-img-17"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["hone", "/hone-page-img-18"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["hone", "/hone-page-img-19"] },
            { url: ["hone", "/hone-page-img-20"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["hone", "/hone-page-img-21"] }]
        }
      ],
      titles: [
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 1 <span class="title__title-defis">-</span> \u0411\u0440\u0438\u0444',
            fontSize: "simple"
          },
          text: "\u041C\u044B \u0432\u044B\u044F\u0441\u043D\u0438\u043B\u0438, \u043A\u0430\u043A\u043E\u0432\u0430 \u0446\u0435\u043B\u0435\u0432\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F \u0431\u0440\u0435\u043D\u0434\u0430, \u0433\u0434\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043B\u043E\u0433\u043E\u0442\u0438\u043F, \u043A\u0430\u043A\u0438\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0438\u043C\u0435\u0435\u0442 \u0431\u0440\u0435\u043D\u0434 \u043F\u0435\u0440\u0435\u0434 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0430\u043C\u0438. \u0414\u0430\u043D\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0438\u043C\u0435\u0442\u044C \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u043B\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0435 \u0438 \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 2 <span class="title__title-defis">-</span> \u041C\u0443\u0434\u0431\u043E\u0440\u0434',
            fontSize: "simple"
          },
          text: "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u043C\u0443\u0434\u0431\u043E\u0440\u0434 \u2013 \u0446\u0432\u0435\u0442\u043E\u0432\u0443\u044E \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u0438 \u043E\u0431\u0440\u0430\u0437\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C. \u0418\u0441\u043A\u0430\u043B\u0438 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0437\u0430\u0446\u0435\u043F\u0438\u0442 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u0438 \u043E\u0442 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043C\u044B \u0431\u0443\u0434\u0435\u043C \u043E\u0442\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u0442\u044C\u0441\u044F. ",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 3 <span class="title__title-defis">-</span> \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u0430\u0431\u0440\u043E\u0441\u043A\u043E\u0432',
            fontSize: "simple"
          },
          text: "\u041F\u043E\u0441\u043B\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u0443\u0434\u0431\u043E\u0440\u0434\u0430 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u043B\u0438 \u043A \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E \u043D\u0430\u0431\u0440\u043E\u0441\u043A\u043E\u0432. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u0440\u0430\u0437\u043D\u044B\u0435 \u043E\u0431\u0440\u0430\u0437\u044B, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0447\u0438\u0442\u0430\u043B\u0430\u0441\u044C \u0431\u0443\u043A\u0432\u0430 \u201C\u041D\u201D. \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u043D\u0430\u0431\u0440\u043E\u0441\u043A\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043B\u0438 \u0438\u0445 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F\u043C\u0438.",
          padding: "simple"
        },
        {
          title: {
            title: "\u041E\u0442\u0431\u043E\u0440 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",
            fontSize: "simple"
          },
          text: "\u041F\u043E\u0441\u043B\u0435 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u043D\u0430\u0431\u0440\u043E\u0441\u043A\u043E\u0432 \u043D\u0430\u0448 \u043A\u043B\u0438\u0435\u043D\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0441\u044F \u043D\u0430 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0435 \u0441 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0435\u0439 \u0431\u0443\u043A\u0432\u044B \u201C\u041D\u201D \u0432 \u0441\u043B\u043E\u0432\u043E \u201CONE\u201D.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 4 <span class="title__title-defis">-</span> \u041F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430',
            fontSize: "simple"
          },
          text: "\u041C\u044B \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u043B\u0438 \u043A \u0437\u0430\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C\u0443 \u044D\u0442\u0430\u043F\u0443 \u2013 \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0433\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430. \u0421\u043E\u0437\u0434\u0430\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0437\u0430\u0440\u0438\u0441\u043E\u0432\u043E\u043A \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0438\u0442\u043E\u0433\u043E\u0432\u043E\u0433\u043E \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430.",
          padding: "simple"
        },
        {
          title: {
            title: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
            fontSize: "simple"
          },
          text: "\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0431\u044B\u043B \u0441\u043E\u0437\u0434\u0430\u043D \u043B\u043E\u0433\u043E\u0442\u0438\u043F, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043C\u0435\u0440\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u043B \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u043C \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430: \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D \u0432 \u0441\u0442\u0440\u043E\u0433\u043E\u043C \u0441\u0442\u0438\u043B\u0435 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0437\u043C\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0431\u0443\u043A\u0432\u0430 \u201CH\u201D \u0438\u0437 \u0447\u0430\u0441\u0442\u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0431\u0440\u0435\u043D\u0434\u0430 - \u201CONE\u201D. \u0422\u0430\u043A\u0436\u0435 \u0431\u044B\u043B\u043E \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0441 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0446\u0432\u0435\u0442\u0430\u043C\u0438.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 1 <span class="title__title-defis">-</span> \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F',
            fontSize: "simple"
          },
          text: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0435\u0439 \u0441\u0443\u0432\u0435\u043D\u0438\u0440\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043F\u0440\u0435\u043C\u0438\u0443\u043C \u043A\u043B\u0430\u0441\u0441\u0430 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0439 \u0441\u0444\u0435\u0440\u044B \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F \u0440\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043E\u0432 \u0432\u044B\u044F\u0441\u043D\u0438\u043B\u0438, \u0447\u0442\u043E \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0445\u043E\u0440\u043E\u0448\u043E \u0441\u043E\u0447\u0435\u0442\u0430\u0435\u0442\u0441\u044F \u0441 3D \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438. \u041E\u0442 \u044D\u0442\u043E\u0433\u043E \u0438 \u043E\u0442\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u043B\u0438\u0441\u044C. ",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 2 <span class="title__title-defis">-</span> \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0442\u0438\u043B\u044F',
            fontSize: "simple"
          },
          text: "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0438\u043C\u0435\u044E\u0449\u0435\u0433\u043E\u0441\u044F \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0438 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u0442\u0438\u043B\u044F \u0438 3D \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B. \u041F\u043E\u0434\u043E\u0431\u0440\u0430\u043B\u0438 \u0448\u0440\u0438\u0444\u0442\u044B \u0434\u043B\u044F \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u0430 \u0438 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u0432. \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043B\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 3 <span class="title__title-defis">-</span> \u0412\u0435\u0440\u0441\u0442\u043A\u0430',
            fontSize: "simple"
          },
          text: "\u0421\u043E\u0431\u0440\u0430\u043B\u0438 \u0431\u0440\u0435\u043D\u0434\u0431\u0443\u043A \u043F\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u0441 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0438\u043B\u044F.<br><br>\u041E\u0444\u043E\u0440\u043C\u0438\u043B\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u044B \u043E\u0431 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430, \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0448\u0440\u0438\u0444\u0442\u043E\u0432, \u0446\u0432\u0435\u0442\u043E\u0432, \u043F\u0430\u0442\u0442\u0435\u0440\u043D\u043E\u0432 \u0438 3D \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432.  \u0412 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u0447 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 3D \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E \u043D\u0430 \u0440\u044B\u043D\u043A\u0435.",
          padding: "simple"
        },
        {
          title: {
            title: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
            fontSize: "simple"
          },
          text: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u043D\u0430 \u0435\u0433\u043E \u043E\u0441\u043D\u043E\u0432\u0435 \u043E\u0444\u043E\u0440\u043C\u0438\u043B\u0438 \u0431\u0440\u0435\u043D\u0434\u0431\u0443\u043A. \u041D\u0430\u0448\u043B\u0438 \u0443\u0434\u0430\u0447\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u043B\u043E \u0432\u0441\u0435\u043C \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u043C \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430.",
          padding: "simple"
        }
      ],
      footer: {
        title: "aladdin",
        next: "aladdin",
        background: ["aladdin", "aladdin-page-intro"]
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
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, {
    task: $data.tasks[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(`<div class="content" style="${ssrRenderStyle({ "margin-top": "0", "padding-top": "0", "padding-bottom": "0" })}"><div class="content__wrapper">`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[0]
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[3]
  }, null, _parent));
  _push(`<div class="content" style="${ssrRenderStyle({ "margin-top": "0", "padding-top": "0", "padding-bottom": "0" })}"><div class="content__wrapper">`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[3]
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[4]
  }, null, _parent));
  _push(`<div class="content" style="${ssrRenderStyle({ "margin-top": "0", "padding-top": "0" })}"><div class="content__wrapper">`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[4]
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[5]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[5]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[6]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[7]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[8]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, {
    task: $data.tasks[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[6]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[9]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[7]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[10]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[8]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[11]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[9]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[12]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[13]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[14]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { hone as default };
//# sourceMappingURL=hone-7f2f649a.mjs.map
