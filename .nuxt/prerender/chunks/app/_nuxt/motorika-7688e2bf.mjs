import { p as publicAssetsURL } from '../../renderer.mjs';
import { G as GalleryTemplate, L as LikeTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate } from './Task-3b8bd6fe.mjs';
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

const _imports_0 = "" + publicAssetsURL("img/motorika/Mobile/motorika-page-img-01.webp");
const _imports_1 = "" + publicAssetsURL("img/motorika/PC/motorika-page-img-01.webp");
const _imports_2 = "" + publicAssetsURL("img/motorika/JPG/motorika-page-img-01.jpg");
const _imports_3 = "" + publicAssetsURL("img/motorika/Mobile/motorika-page-img-02.webp");
const _imports_4 = "" + publicAssetsURL("img/motorika/PC/motorika-page-img-02.webp");
const _imports_5 = "" + publicAssetsURL("img/motorika/JPG/motorika-page-img-02.jpg");
const _imports_6 = "" + publicAssetsURL("img/motorika/Mobile/motorika-page-img-03.webp");
const _imports_7 = "" + publicAssetsURL("img/motorika/PC/motorika-page-img-03.webp");
const _imports_8 = "" + publicAssetsURL("img/motorika/JPG/motorika-page-img-03.jpg");
const _imports_9 = "" + publicAssetsURL("img/motorika/Mobile/motorika-page-img-04.webp");
const _imports_10 = "" + publicAssetsURL("img/motorika/PC/motorika-page-img-04.webp");
const _imports_11 = "" + publicAssetsURL("img/motorika/JPG/motorika-page-img-04.jpg");
const _imports_12 = "" + publicAssetsURL("img/motorika/Mobile/motorika-page-img-05.webp");
const _imports_13 = "" + publicAssetsURL("img/motorika/PC/motorika-page-img-05.webp");
const _imports_14 = "" + publicAssetsURL("img/motorika/JPG/motorika-page-img-05.jpg");
const _imports_15 = "" + publicAssetsURL("img/motorika/Mobile/motorika-page-img-06.webp");
const _imports_16 = "" + publicAssetsURL("img/motorika/PC/motorika-page-img-06.webp");
const _imports_17 = "" + publicAssetsURL("img/motorika/JPG/motorika-page-img-06.jpg");
const _imports_18 = "" + publicAssetsURL("img/motorika/Mobile/motorika-page-img-07.webp");
const _imports_19 = "" + publicAssetsURL("img/motorika/PC/motorika-page-img-07.webp");
const _imports_20 = "" + publicAssetsURL("img/motorika/JPG/motorika-page-img-07.jpg");
const _imports_21 = "" + publicAssetsURL("img/motorika/Mobile/motorika-page-img-08.webp");
const _imports_22 = "" + publicAssetsURL("img/motorika/PC/motorika-page-img-08.webp");
const _imports_23 = "" + publicAssetsURL("img/motorika/JPG/motorika-page-img-08.jpg");
const _sfc_main = {
  name: "MotorikaPage",
  components: {
    GalleryTemplate,
    LikeTemplate,
    TitleTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate
  },
  data() {
    return {
      task: {
        titles: {
          title: {
            title: "\u0417\u0430\u0434\u0430\u0447\u0430",
            fontSize: "simple"
          },
          text: "\u0422\u0417 \u0431\u044B\u043B\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E \u0442\u0430\u043A: <br><br>\u201C\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0440\u0438\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u0440\u0430\u0436\u0430\u0435\u0442 \u044D\u0441\u0442\u0435\u0442\u0438\u043A\u0443 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043E, \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439, \u043A\u0438\u0431\u0435\u0440\u043F\u0430\u043D\u043A\u0430. \u0415\u0441\u043B\u0438 \u0432\u044B \u043F\u043E\u0439\u043C\u0430\u043B\u0438 \u043F\u043E\u0442\u043E\u043A \u0438 \u0441\u043E\u0442\u0432\u043E\u0440\u0438\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043D\u0442\u0430, \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u0430\u0439\u0442\u0435 \u043D\u0430\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0448\u0435 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u043E! \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u0434\u043E 3 \u0440\u0430\u0431\u043E\u0442\u201D",
          padding: "task"
        },
        title: "\u041C\u043E\u0442\u043E\u0440\u0438\u043A\u0430"
      },
      intro: {
        icon: "motorika/PC/motorika-page-icon.svg",
        logo: "motorika/PC/motorika-page-logo.svg",
        img: ["motorika", "motorika-page-intro"],
        title: "\u041C\u043E\u0442\u043E\u0440\u0438\u043A\u0430",
        description: " \u2014 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u043A\u0438\u0431\u0435\u0440-\u0440\u0443\u043A. \u0417\u0434\u0435\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u044E\u0442\u0441\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043E, \u0430 \u043B\u044E\u0434\u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043A\u0440\u0443\u0442\u044B\u043C\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u043A\u0438\u0431\u0435\u0440-\u0433\u0430\u0434\u0436\u0435\u0442\u0430\u043C\u0438. <br><br>\u041C\u0438\u0441\u0441\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 - \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C 100% \u043B\u044E\u0434\u0435\u0439 \u0431\u0435\u0437 \u0440\u0443\u043A \u043D\u0430 \u043F\u043B\u0430\u043D\u0435\u0442\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u043C\u0438 \u043A\u0438\u0431\u0435\u0440-\u0440\u0443\u043A\u0430\u043C\u0438.",
        tags: "\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D / \u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["motorika", "/motorika-page-img-09"] }],
          border: "simple"
        },
        {
          type: "FourImage",
          images: [
            { url: ["motorika", "/motorika-page-img-10"] },
            { url: ["motorika", "/motorika-page-img-11"] },
            { url: ["motorika", "/motorika-page-img-12"] },
            { url: ["motorika", "/motorika-page-img-13"] }
          ],
          border: "simple"
        },
        {
          type: "OneImage",
          images: [{ url: ["motorika", "/motorika-page-img-14"] }],
          border: "simple"
        },
        {
          type: "ThreeImageCollage",
          border: "simple",
          column: {
            position: "Left",
            width: "50"
          },
          columnImages: [
            { url: ["motorika", "/motorika-page-img-15"], height: "50" },
            { url: ["motorika", "/motorika-page-img-16"], height: "50" }
          ],
          images: [{ url: ["motorika", "/motorika-page-img-17"], width: "50" }]
        }
      ],
      titles: [
        {
          title: {
            title: "1 \u043C\u0435\u0441\u0442\u043E",
            fontSize: "simple"
          },
          text: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0430 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0435 \u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 FL.RU \u0438 \u0437\u0430\u043D\u044F\u043B\u0430 1-\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 86 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 1 <span class="title__title-defis">-</span> \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F',
            fontSize: "simple"
          },
          text: "\u0414\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u044B \u0438\u0437\u0443\u0447\u0438\u043B\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E: \u043A\u0430\u043A\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0432\u044B\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u0441\u044F, \u043A\u0430\u043A\u043E\u0439 \u043C\u0435\u0440\u0447 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C. \u0412\u044B\u044F\u0441\u043D\u0438\u043B\u0438, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0434\u0432\u0438\u0433\u0430\u0442\u044C\u0441\u044F \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043E, \u043A\u0438\u0431\u0435\u0440\u043F\u0430\u043D\u043A\u0430, \u043A\u0438\u0431\u0435\u0440\u043D\u0435\u0442\u0438\u043A\u0438. \u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u044D\u0442\u043E\u0433\u043E \u043D\u0430\u0447\u0430\u043B\u0438 \u043F\u0440\u043E\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u0432\u0438\u0437\u0443\u0430\u043B.<br><br>\u0414\u043B\u044F \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 - \u043A\u0438\u0431\u0435\u0440-\u0440\u0443\u043A\u0430, \u0441\u0442\u0438\u043B\u044C \u043C\u0430\u0442\u0440\u0438\u0446\u044B, \u0441\u043E\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043C\u0438\u0440\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 - \u0431\u0440\u0430\u043B\u0438 \u0437\u0430 \u043E\u0441\u043D\u043E\u0432\u0443 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 2 <span class="title__title-defis">-</span> \u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C',
            fontSize: "simple"
          },
          text: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0422\u0417. \u041D\u0430\u0448\u043B\u0438 \u0443\u0434\u0430\u0447\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043E\u0442\u0440\u0430\u0437\u0438\u043B\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443.",
          padding: "simple"
        },
        {
          title: {
            title: "\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u043D\u0442\u043E\u0432",
            fontSize: "simple"
          },
          text: "\u041F\u043E\u043C\u0438\u043C\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0437\u0430\u0434\u0430\u043D\u0438\u044E \u0440\u0435\u0448\u0438\u043B\u0438 \u043E\u0442 \u0441\u0435\u0431\u044F \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u0442\u043E\u0432 \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044F\u0445. \u041F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0440\u044E\u043A\u0437\u0430\u043A\u0435, \u0441\u0443\u043C\u043A\u0435 \u0447\u0435\u0440\u0435\u0437 \u043F\u043B\u0435\u0447\u043E, powerbank.",
          padding: "simple"
        }
      ],
      footer: {
        title: "SPICY NOTE",
        next: "spicynote",
        background: ["spisynote", "spisynote-page-intro"]
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-948687cc>`);
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, { task: $data.task }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(`<div class="examples" data-v-948687cc><div class="examples__wrapper" data-v-948687cc><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_0)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_1)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_2)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_1)} alt="\u041F\u0440\u0438\u043C\u0435\u0440" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_3)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_4)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_5)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_4)} alt="\u041F\u0440\u0438\u043C\u0435\u0440" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_6)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_7)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_8)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_7)} alt="\u041F\u0440\u0438\u043C\u0435\u0440" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_9)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_10)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_11)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_10)} alt="\u041F\u0440\u0438\u043C\u0435\u0440" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_12)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_13)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_14)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_13)} alt="\u041F\u0440\u0438\u043C\u0435\u0440" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_15)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_16)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_17)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_16)} alt="\u041F\u0440\u0438\u043C\u0435\u0440" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_18)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_19)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_20)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_19)} alt="\u041F\u0440\u0438\u043C\u0435\u0440" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_21)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_22)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_23)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_22)} alt="\u041F\u0440\u0438\u043C\u0435\u0440" type="image/webp" data-v-948687cc></picture></div></div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[0]
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
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[3]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/motorika.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const motorika = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-948687cc"]]);

export { motorika as default };
//# sourceMappingURL=motorika-7688e2bf.mjs.map
