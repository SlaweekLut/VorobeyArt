import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from './Task-3b8bd6fe.mjs';
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
  name: "MobdebutPage",
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
        icon: "mobdebut/PC/mobdebut-page-icon.svg",
        logo: "mobdebut/PC/mobdebut-page-logo.svg",
        img: ["mobdebut", "mobdebut-page-intro"],
        title: "Mobdebut",
        description: " \u2014 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0447\u0435\u0442\u0447\u0438\u043A\u043E\u0432 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438. \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043A\u043E\u043C\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u043B\u0443\u0436\u0431, \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u0442 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0432 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430\u0445.",
        tags: "3D \u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 / \u0422\u0435\u043A\u0441\u0442\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
      },
      task: {
        titles: {
          title: {
            title: "\u0417\u0430\u0434\u0430\u0447\u0430",
            fontSize: "simple"
          },
          text: "\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u0432\u044B\u0445\u043E\u0434\u0438\u043B \u043D\u0430 \u0440\u044B\u043D\u043E\u043A \u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0435\u0439. \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0431\u044B\u043B\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 3D \u043C\u043E\u0434\u0435\u043B\u0435\u0439 - \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438.",
          padding: "task"
        },
        title: "MOBDEBUT"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["mobdebut", "/mobdebut-page-img-01"] }]
        },
        {
          type: "FourImage",
          border: "simple",
          mod: "mobdebut",
          images: [
            { url: ["mobdebut", "/mobdebut-page-img-02"] },
            { url: ["mobdebut", "/mobdebut-page-img-03"] },
            { url: ["mobdebut", "/mobdebut-page-img-04"] },
            { url: ["mobdebut", "/mobdebut-page-img-05"] }
          ]
        },
        {
          type: "OneImage",
          images: [{ url: ["mobdebut", "/mobdebut-page-img-06"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["mobdebut", "/mobdebut-page-img-07"] }]
        },
        {
          type: "ThreeImageCol",
          border: "simple",
          images: [
            { url: ["mobdebut", "/mobdebut-page-img-08"] },
            { url: ["mobdebut", "/mobdebut-page-img-09"] },
            { url: ["mobdebut", "/mobdebut-page-img-10"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 1 <span class="title__title-defis">-</span> \u0421\u0431\u043E\u0440 \u0434\u0430\u043D\u043D\u044B\u0445',
            fontSize: "simple"
          },
          text: "\u0414\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438 \u043C\u043E\u0434\u0435\u043B\u0435\u0439 \u043C\u044B \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u043B\u0438 \u0443 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F. \u0412 \u0434\u0430\u043D\u043D\u043E\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043E\u0441\u043B\u043E\u0436\u043D\u044F\u043B\u043E\u0441\u044C \u043F\u043B\u043E\u0445\u0438\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E\u043C \u043D\u0430\u0440\u0430\u0431\u043E\u0442\u043E\u043A - \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043D\u0430 \u0444\u043E\u0442\u043E \u0434\u0435\u0442\u0430\u043B\u0438 \u0438 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u043B\u043E\u0441\u044C \u0443\u0442\u043E\u0447\u043D\u044F\u0442\u044C \u0443 \u043D\u0430\u0448\u0435\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 2 <span class="title__title-defis">-</span> \u0421\u0431\u043E\u0440\u043A\u0430 3D \u043C\u043E\u0434\u0435\u043B\u0435\u0439',
            fontSize: "simple"
          },
          text: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u0441 \u043F\u043E\u0434\u0431\u043E\u0440\u0430 \u0440\u0430\u043A\u0443\u0440\u0441\u043E\u0432, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0445 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0442\u043E\u0447\u043D\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F. \u0417\u0430\u0442\u0435\u043C \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u201CBlender\u201D \u0441\u043E\u0431\u0440\u0430\u043B\u0438 \u043C\u043E\u0434\u0435\u043B\u0438 \u0432 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435.<br><br>\u0422\u0430\u043A \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u043B\u0438 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u044B\u0435 \u044D\u0442\u0430\u043F\u044B \u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F:",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 3 <span class="title__title-defis">-</span> \u041F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430',
            fontSize: "simple"
          },
          text: "\u0421\u043E\u0437\u0434\u0430\u043B\u0438 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u044B \u0438 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u043D\u0430 \u043D\u0438\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u043B\u0438 \u0432 Adobe Photoshop. \u0414\u0430\u043B\u0435\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u043B\u0438 \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0440\u0435\u043D\u0434\u0435\u0440\u044B - \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438\u0441\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438.",
          padding: "simple"
        },
        {
          title: {
            title: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
            fontSize: "simple"
          },
          text: "\u0421\u043E\u0437\u0434\u0430\u043B\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432 \u0438\u0437 3D \u043C\u043E\u0434\u0435\u043B\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C. \u041D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0441 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F\u043C\u0438, \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0434\u0430\u0436\u0435 \u043C\u0435\u043B\u044C\u0447\u0430\u0439\u0448\u0438\u0435 \u0434\u0435\u0442\u0430\u043B\u0438.",
          padding: "simple"
        }
      ],
      footer: {
        title: "Prime travel",
        next: "primetravel",
        background: ["primetravel", "primetravel-page-intro"]
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
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, { task: $data.task }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[0]
  }, null, _parent));
  _push(`<div class="content" style="${ssrRenderStyle({ "margin-top": "0", "padding-top": "0", "padding-bottom": "0" })}"><div class="content__wrapper">`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[0]
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(`<div class="content" style="${ssrRenderStyle({ "padding-bottom": "0" })}"><div class="content__wrapper">`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[3]
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[3]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[4]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mobdebut.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mobdebut = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { mobdebut as default };
//# sourceMappingURL=mobdebut-70c1c687.mjs.map
