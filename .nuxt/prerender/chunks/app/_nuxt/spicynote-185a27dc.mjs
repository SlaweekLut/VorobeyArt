import { p as publicAssetsURL } from '../../renderer.mjs';
import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from './Task-3b8bd6fe.mjs';
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

const _imports_0 = "" + publicAssetsURL("img/spisynote/Mobile/spisynote-page-img-01.webp");
const _imports_1 = "" + publicAssetsURL("img/spisynote/PC/spisynote-page-img-01.webp");
const _imports_2 = "" + publicAssetsURL("img/spisynote/JPG/spisynote-page-img-01.jpg");
const _imports_3 = "" + publicAssetsURL("img/spisynote/Mobile/spisynote-page-img-04.webp");
const _imports_4 = "" + publicAssetsURL("img/spisynote/PC/spisynote-page-img-04.webp");
const _imports_5 = "" + publicAssetsURL("img/spisynote/JPG/spisynote-page-img-04.jpg");
const _imports_6 = "" + publicAssetsURL("img/spisynote/Mobile/spisynote-page-img-05.webp");
const _imports_7 = "" + publicAssetsURL("img/spisynote/PC/spisynote-page-img-05.webp");
const _imports_8 = "" + publicAssetsURL("img/spisynote/JPG/spisynote-page-img-05.jpg");
const _sfc_main = {
  name: "SpicynotePage",
  // directives: {
  // 	motion: motion(),
  // },
  components: {
    GalleryTemplate,
    TitleTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate,
    LikeTemplate
  },
  data() {
    return {
      intro: {
        icon: "spisynote/PC/spisynote-page-icon.svg",
        logo: "spisynote/PC/spisynote-page-logo.svg",
        img: ["spisynote", "spisynote-page-intro"],
        title: "SpicyNote",
        description: "\u2014 \u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0438. \u0411\u0440\u0435\u043D\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u043F\u043E \u0443\u0445\u043E\u0434\u0443 \u0434\u043B\u044F \u043B\u0438\u0446\u0430, \u0432\u043E\u043B\u043E\u0441 \u0438 \u0442\u0435\u043B\u0430. \u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u044B \u0438 \u043D\u0438\u043A\u0430\u043A\u0438\u0445 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0439 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445.",
        tags: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F / \u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
      },
      task: {
        titles: {
          title: {
            title: "\u0417\u0430\u0434\u0430\u0447\u0430",
            fontSize: "simple"
          },
          text: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0431\u0440\u0435\u043D\u0434\u0430. \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043E\u0431\u0440\u0430\u0442\u0438\u043B\u0441\u044F \u043A \u043D\u0430\u043C, \u0438\u043C\u0435\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F: \u0441\u0442\u0440\u043E\u0433\u0438\u0439 \u201C\u0434\u043E\u0440\u043E\u0433\u043E\u0439\u201D \u0441\u0442\u0438\u043B\u044C \u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u043E\u0441\u0442\u044C. \u0412\u0430\u0436\u043D\u043E, \u0447\u0442\u043E\u0431\u044B \u0431\u044B\u043B\u0430 \u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u0430 \u0433\u043B\u0430\u0432\u043D\u0430\u044F \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0438 \u2013 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C.",
          padding: "task"
        },
        title: "SPICYNOTE"
      },
      gallery: [
        {
          type: "TwoImage",
          images: [
            { url: ["spisynote", "/spisynote-page-img-02"] },
            { url: ["spisynote", "/spisynote-page-img-03"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["spisynote", "/spisynote-page-img-06"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["spisynote", "/spisynote-page-img-07"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["spisynote", "/spisynote-page-img-08"] },
            { url: ["spisynote", "/spisynote-page-img-09"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 1 <span class="title__title-defis">-</span> \u0411\u0440\u0438\u0444',
            fontSize: "simple"
          },
          text: "\u0414\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u043C\u044B \u0432\u044B\u044F\u0441\u043D\u0438\u043B\u0438, \u043A\u0430\u043A\u043E\u0432\u0430 \u0446\u0435\u043B\u0435\u0432\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F \u0431\u0440\u0435\u043D\u0434\u0430, \u043A\u0430\u043A\u0438\u0435 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u044B\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0438\u043C\u0435\u0435\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u0433\u0434\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043B\u043E\u0433\u043E\u0442\u0438\u043F. \u0422\u0430\u043A\u0436\u0435 \u0443\u0442\u043E\u0447\u043D\u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430. ",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 2 <span class="title__title-defis">-</span> \u041C\u0443\u0434\u0431\u043E\u0440\u0434',
            fontSize: "simple"
          },
          text: "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0431\u0440\u0435\u043D\u0434\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u043C\u0443\u0434\u0431\u043E\u0440\u0434 \u2013 \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u0438 \u043E\u0431\u0440\u0430\u0437\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C. \u0417\u0435\u043B\u0435\u043D\u044B\u0439 \u0446\u0432\u0435\u0442 \u0438 \u043B\u0438\u0441\u0442\u044C\u044F \u0430\u0441\u0441\u043E\u0446\u0438\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0441 \u043F\u0440\u0438\u0440\u043E\u0434\u043E\u0439 \u0438 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E. \u041D\u043E\u0442\u0430 \u0438 \u0441\u043F\u0435\u0446\u0438\u0438 \u2013 \u043E\u0442\u0441\u044B\u043B\u043A\u0438 \u043A \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 3 <span class="title__title-defis">-</span> \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u0430\u0431\u0440\u043E\u0441\u043A\u043E\u0432',
            fontSize: "simple"
          },
          text: "\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u043B\u0438 \u043A \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E \u043D\u0430\u0431\u0440\u043E\u0441\u043A\u043E\u0432. \u041F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u043E\u0431\u0440\u0430\u0437\u044B \u2013 \u043D\u043E\u0442\u044B, \u043B\u0438\u0441\u0442\u044C\u044F, \u0432\u0435\u0442\u043A\u0438 \u0438 \u043A\u0430\u043F\u043B\u0438. \u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u0445.",
          padding: "simple"
        },
        {
          title: {
            title: "\u041E\u0442\u0431\u043E\u0440 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",
            fontSize: "simple"
          },
          text: "\u041F\u043E\u0441\u043B\u0435 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u043D\u0430\u0431\u0440\u043E\u0441\u043A\u043E\u0432 \u043D\u0430\u0448 \u043A\u043B\u0438\u0435\u043D\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0441\u044F \u043D\u0430 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0435 \u0441 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0435\u0439 \u043E\u0431\u0440\u0430\u0437\u0430 \u043D\u043E\u0442\u044B - \u0438\u0437-\u0437\u0430 \u043F\u0440\u044F\u043C\u043E\u0439 \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u0438 \u0441 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C \u0431\u0440\u0435\u043D\u0434\u0430.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 4 <span class="title__title-defis">-</span> \u041F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430',
            fontSize: "simple"
          },
          text: "\u0414\u0430\u043B\u0435\u0435 \u043C\u044B \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u043B\u0438 \u043A \u0437\u0430\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C\u0443 \u044D\u0442\u0430\u043F\u0443 \u2013 \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0433\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430. \u0421\u043E\u0437\u0434\u0430\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0437\u0430\u0440\u0438\u0441\u043E\u0432\u043E\u043A \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u0445.",
          padding: "simple"
        },
        {
          title: {
            title: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
            fontSize: "simple"
          },
          text: "\u041D\u0430\u043C\u0438 \u0431\u044B\u043B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0432 \u0441\u0442\u0440\u043E\u0433\u043E\u043C \u0441\u0442\u0438\u043B\u0435 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0437\u043C\u0430, \u043E\u0442\u0440\u0430\u0436\u0430\u044E\u0449\u0438\u0439 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0431\u0440\u0435\u043D\u0434\u0430 \u0438 \u0430\u0441\u0441\u043E\u0446\u0438\u0438\u0440\u0443\u044E\u0449\u0438\u0439\u0441\u044F \u0441 \u0435\u0433\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C. \u0422\u0430\u043A\u0436\u0435 \u043C\u044B \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0441 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043E\u0442\u0442\u0435\u043D\u043A\u0430\u043C\u0438 \u2013 \u0437\u0435\u043B\u0435\u043D\u044B\u043C \u0438 \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u043C.",
          padding: "simple"
        }
      ],
      footer: {
        title: "\u0413\u0435\u043D\u0435\u0437\u0438\u0441 \u043F\u0440\u043E\u0435\u043A\u0442",
        next: "genezis",
        background: ["genezisproject", "genezisproject-page-intro"]
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IntroTemplate = resolveComponent("IntroTemplate");
  const _component_TaskTemplate = resolveComponent("TaskTemplate");
  const _component_TitleTemplate = resolveComponent("TitleTemplate");
  const _component_GalleryTemplate = resolveComponent("GalleryTemplate");
  const _component_LikeTemplate = resolveComponent("LikeTemplate");
  const _component_FooterTemplate = resolveComponent("FooterTemplate");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-1b6f70a9>`);
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, { task: $data.task }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(`<div class="moodboard" data-v-1b6f70a9><div class="moodboard__img" data-v-1b6f70a9><picture data-v-1b6f70a9><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_0)} type="image/webp" data-v-1b6f70a9><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_1)} type="image/webp" data-v-1b6f70a9><source${ssrRenderAttr("srcset", _imports_2)} type="image/jpeg" data-v-1b6f70a9><img${ssrRenderAttr("srcset", _imports_1)} alt="Moodboard" type="image/webp" data-v-1b6f70a9></picture></div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[3]
  }, null, _parent));
  _push(`<div class="sketch" data-v-1b6f70a9><div class="sketch__img" data-v-1b6f70a9><picture data-v-1b6f70a9><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_3)} type="image/webp" data-v-1b6f70a9><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_4)} type="image/webp" data-v-1b6f70a9><source${ssrRenderAttr("srcset", _imports_5)} type="image/jpeg" data-v-1b6f70a9><img${ssrRenderAttr("srcset", _imports_4)} alt="Sketch" type="image/webp" data-v-1b6f70a9></picture></div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[4]
  }, null, _parent));
  _push(`<div class="finall" data-v-1b6f70a9><div class="finall__img" data-v-1b6f70a9><picture data-v-1b6f70a9><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_6)} type="image/webp" data-v-1b6f70a9><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_7)} type="image/webp" data-v-1b6f70a9><source${ssrRenderAttr("srcset", _imports_8)} type="image/jpeg" data-v-1b6f70a9><img${ssrRenderAttr("srcset", _imports_7)} alt="finall" type="image/webp" data-v-1b6f70a9></picture></div></div>`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[5]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[3]
  }, null, _parent));
  _push(ssrRenderComponent(_component_LikeTemplate, { title: "spicynote" }, null, _parent));
  _push(ssrRenderComponent(_component_FooterTemplate, { settings: $data.footer }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/spicynote.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const spicynote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1b6f70a9"]]);

export { spicynote as default };
//# sourceMappingURL=spicynote-185a27dc.mjs.map
