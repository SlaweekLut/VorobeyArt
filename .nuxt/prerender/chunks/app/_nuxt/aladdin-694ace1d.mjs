import { H as Head, T as Title, M as Meta } from './components-5e031e0a.mjs';
import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from './Task-3b8bd6fe.mjs';
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import './composables-c7a1e9e8.mjs';
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
  name: "AladdinPage",
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
        icon: "aladdin/PC/aladdin-page-icon.svg",
        logo: "aladdin/PC/aladdin-page-logo.svg",
        img: ["aladdin", "aladdin-page-intro"],
        title: "\u0410\u043B\u043B\u0430\u0434\u0438\u043D",
        description: " \u2014 \u0432\u0435\u0434\u0443\u0449\u0438\u0439 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438, \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0439<br>\u0434\u043B\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0438 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.",
        tags: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F"
      },
      task: {
        titles: {
          title: {
            title: "\u0417\u0430\u0434\u0430\u0447\u0430",
            fontSize: "simple"
          },
          text: "\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443 \u0431\u044B\u043B\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0441\u043E \u0441\u043C\u044B\u0441\u043B\u043E\u043C, \u043E\u0442\u0440\u0430\u0436\u0430\u044E\u0449\u0438\u0439 \u0441\u0444\u0435\u0440\u0443 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438.  \u041D\u0430 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u043A \u043D\u0430\u043C \u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0431\u044B\u043B \u043B\u043E\u0433\u043E\u0442\u0438\u043F, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u043B \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F.<br><br>\u0418\u0437 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0439: \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439 \u0446\u0432\u0435\u0442, \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0437\u043C\u0430.",
          padding: "task"
        },
        title: "\u0410\u041B\u041B\u0410\u0414\u0418\u041D"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["aladdin", "/aladdin-page-img-01"] }]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["aladdin", "/aladdin-page-img-02"] },
            { url: ["aladdin", "/aladdin-page-img-03"] }
          ]
        },
        {
          type: "OneImage",
          images: [{ url: ["aladdin", "/aladdin-page-img-04"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["aladdin", "/aladdin-page-img-05"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["aladdin", "/aladdin-page-img-06"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["aladdin", "/aladdin-page-img-07"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["aladdin", "/aladdin-page-img-08"] },
            { url: ["aladdin", "/aladdin-page-img-10"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["aladdin", "/aladdin-page-img-09"] }]
        }
      ],
      titles: [
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 1 <span class="title__title-defis">-</span> \u0411\u0440\u0438\u0444',
            fontSize: "simple"
          },
          text: "\u041C\u044B \u0432\u044B\u044F\u0441\u043D\u0438\u043B\u0438, \u043A\u0430\u043A\u043E\u0432\u0430 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u0433\u0434\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043B\u043E\u0433\u043E\u0442\u0438\u043F. \u0414\u0430\u043D\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0438\u043C\u0435\u0442\u044C \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u043B\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0435 \u0438 \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 2 <span class="title__title-defis">-</span> \u041C\u0443\u0434\u0431\u043E\u0440\u0434',
            fontSize: "simple"
          },
          text: "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u043C\u0443\u0434\u0431\u043E\u0440\u0434 \u2013 \u0446\u0432\u0435\u0442\u043E\u0432\u0443\u044E \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u0438 \u043E\u0431\u0440\u0430\u0437\u044B, \u0430\u0441\u0441\u043E\u0446\u0438\u0438\u0440\u0443\u044E\u0449\u0438\u0435\u0441\u044F \u0441 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439. \u0418\u0441\u043A\u0430\u043B\u0438 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0437\u0430\u0446\u0435\u043F\u0438\u0442 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u0438 \u043E\u0442 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u0442\u044C\u0441\u044F. ",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 3 <span class="title__title-defis">-</span> \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u0430\u0431\u0440\u043E\u0441\u043A\u043E\u0432',
            fontSize: "simple"
          },
          text: "\u041F\u043E\u0441\u043B\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u0443\u0434\u0431\u043E\u0440\u0434\u0430 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u043B\u0438 \u043A \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E \u043D\u0430\u0431\u0440\u043E\u0441\u043A\u043E\u0432. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u0440\u0430\u0437\u043D\u044B\u0435 \u043E\u0431\u0440\u0430\u0437\u044B \u0441 \u0443\u043F\u043E\u0440\u043E\u043C \u043D\u0430 \u0431\u0443\u043A\u0432\u0443 \u201C\u0410\u201D, \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0438 \u0435\u0449\u0435 \u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B\u0438 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0442\u044C \u0438\u0445 \u0432 \u043E\u0434\u043D\u043E \u0446\u0435\u043B\u043E\u0435.",
          padding: "simple"
        },
        {
          title: {
            title: "\u041E\u0442\u0431\u043E\u0440 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",
            fontSize: "simple"
          },
          text: "\u041F\u043E\u0441\u043B\u0435 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u043D\u0430\u0431\u0440\u043E\u0441\u043A\u043E\u0432 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u0432\u044B\u0431\u0440\u0430\u043B 7 \u0440\u0430\u0437\u043D\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u043E\u0432, \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043C\u044B \u0434\u0430\u043B\u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438. ",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 4 <span class="title__title-defis">-</span> \u041F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430',
            fontSize: "simple"
          },
          text: "\u0418\u0437 \u043E\u0442\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F, \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0432\u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C. \u042D\u0442\u043E \u0431\u0443\u043A\u0432\u0430 \u0410, \u0432 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u043F\u0438\u0441\u0430\u043D \u043B\u0430\u0431\u0438\u0440\u0438\u043D\u0442 \u043A\u0430\u043A \u0441\u0438\u043C\u0432\u043E\u043B \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0438 \u0437\u0430\u0449\u0438\u0442\u044B.",
          padding: "simple"
        },
        {
          title: {
            title: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
            fontSize: "simple"
          },
          text: "\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0441\u044F \u043B\u043E\u0433\u043E\u0442\u0438\u043F, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043C\u0435\u0440\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u043B \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u043C \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430: \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D \u0432 \u0441\u0442\u0438\u043B\u0435 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0437\u043C\u0430, \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439 \u0446\u0432\u0435\u0442. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u043C\u044B \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0441\u043E \u0441\u043C\u044B\u0441\u043B\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u0440\u0430\u0436\u0430\u0435\u0442 \u043E\u0441\u043D\u043E\u0432\u043D\u0443\u044E \u0441\u0444\u0435\u0440\u0443 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 - \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438. ",
          padding: "simple"
        }
      ],
      footer: {
        title: "unidance",
        next: "unidance",
        background: ["unidance", "unidance-page-intro"]
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_Meta = Meta;
  const _component_IntroTemplate = resolveComponent("IntroTemplate");
  const _component_TaskTemplate = resolveComponent("TaskTemplate");
  const _component_TitleTemplate = resolveComponent("TitleTemplate");
  const _component_GalleryTemplate = resolveComponent("GalleryTemplate");
  const _component_LikeTemplate = resolveComponent("LikeTemplate");
  const _component_FooterTemplate = resolveComponent("FooterTemplate");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E | Aladdin`);
            } else {
              return [
                createTextVNode("\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E | Aladdin")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "description",
          content: "\u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0410\u043B\u0430\u0434\u0434\u0438\u043D"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E | Aladdin")
            ]),
            _: 1
          }),
          createVNode(_component_Meta, {
            name: "description",
            content: "\u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0410\u043B\u0430\u0434\u0434\u0438\u043D"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, { task: $data.task }, null, _parent));
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
  _push(ssrRenderComponent(_component_LikeTemplate, {
    title: $data.intro.img[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_FooterTemplate, { settings: $data.footer }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/aladdin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aladdin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { aladdin as default };
//# sourceMappingURL=aladdin-694ace1d.mjs.map
