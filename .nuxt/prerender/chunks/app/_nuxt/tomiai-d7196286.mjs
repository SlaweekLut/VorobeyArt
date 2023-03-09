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
  name: "TomiaiPage",
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
        icon: "tomiai/PC/tomiai-page-icon.svg",
        logo: "tomiai/PC/tomiai-page-logo.svg",
        img: ["tomiai", "tomiai-page-intro"],
        title: "Tomi.ai",
        description: " \u2014 \u0441\u0435\u0440\u0432\u0438\u0441, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0449\u0438\u0439 \u0440\u043E\u0441\u0442 \u043E\u0442\u0434\u0430\u0447\u0438 \u043E\u0442 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0439 \u0437\u0430 \u0441\u0447\u0451\u0442 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 digital-\u0440\u0435\u043A\u043B\u0430\u043C\u044B \u043F\u043E\u0434 \u0431\u0438\u0437\u043D\u0435\u0441-\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u2014 \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0451\u043D\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u044B, \u043F\u0440\u043E\u0434\u0430\u0436\u0438, LTV (\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u044B).",
        tags: "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F / \u0418\u043D\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430"
      },
      task: {
        titles: {
          title: {
            title: "\u0417\u0430\u0434\u0430\u0447\u0430",
            fontSize: "simple"
          },
          text: "\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443 \u0431\u044B\u043B\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u044C \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u0432 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442 \u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043B\u0430\u0441\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043D\u0430 \u0434\u0432\u0443\u0445 \u044F\u0437\u044B\u043A\u0430\u0445.<br><br>\u0418\u0437 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0439: \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u0442\u0438\u043B\u0438\u0441\u0442\u0438\u043A\u0435 \u0438 \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u043F\u0430\u043B\u0438\u0442\u0440\u0435 \u0441\u0430\u0439\u0442\u0430, \u043B\u0430\u043A\u043E\u043D\u0438\u0447\u043D\u043E\u0441\u0442\u044C \u0438 \u043D\u0435 \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439.",
          padding: "task"
        },
        title: "TOMI.AI"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["tomiai", "/tomiai-page-img-01"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["tomiai", "/tomiai-page-img-02"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["tomiai", "/tomiai-page-img-03"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["tomiai", "/tomiai-page-img-04"] },
            { url: ["tomiai", "/tomiai-page-img-05"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["tomiai", "/tomiai-page-img-06"] }]
        }
      ],
      titles: [
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 1 <span class="title__title-defis">-</span> \u0421\u0431\u043E\u0440 \u0434\u0430\u043D\u043D\u044B\u0445',
            fontSize: "simple"
          },
          text: "\u0414\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u044B \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u043B\u0438 \u0443 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0442\u0435\u0437\u0438\u0441\u044B \u0438 \u0442\u0435\u043A\u0441\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0441\u043B\u0430\u0439\u0434\u0430\u0445. \u041E\u0431\u0441\u0443\u0434\u0438\u043B\u0438 \u0434\u0435\u0442\u0430\u043B\u0438: \u0446\u0432\u0435\u0442\u0430, \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0434\u0438\u0437\u0430\u0439\u043D\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0438.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 2 <span class="title__title-defis">-</span> \u041F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B',
            fontSize: "simple"
          },
          text: "\u0420\u0430\u0431\u043E\u0442\u0430 \u043D\u0430\u0434 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0435\u0439 \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u0441 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0435\u0435 \u201C\u0441\u043A\u0435\u043B\u0435\u0442\u0430\u201D. \u0421 \u0443\u0447\u0435\u0442\u043E\u043C \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043E \u043B\u0430\u043A\u043E\u043D\u0438\u0447\u043D\u043E\u0441\u0442\u0438, \u043C\u044B \u0440\u0430\u0437\u043B\u043E\u0436\u0438\u043B\u0438 \u0442\u0435\u043A\u0441\u0442\u044B \u043D\u0430 \u0441\u043B\u0430\u0439\u0434\u044B \u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0432\u043E\u0441\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0430\u0441\u044C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 3 <span class="title__title-defis">-</span> \u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C',
            fontSize: "simple"
          },
          text: "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438. \u041F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u043B\u0438\u0441\u044C \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430 \u043D\u0430\u0433\u043B\u044F\u0434\u043D\u043E\u0441\u0442\u0438 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u0442\u0435 \u043E\u0431\u0440\u0430\u0437\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u043D\u0442\u0443\u0438\u0442\u0438\u0432\u043D\u043E \u0432\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043B\u0438\u0441\u044C \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430. \u0414\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0438\u043D\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0443.",
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
        title: "\u041A\u0432\u0430\u043D\u0442\u0442\u0435\u043B\u0435\u043A\u043E\u043C",
        next: "kvanttelekomBrend",
        background: ["kvanttelekomBrend", "kvanttelekomBrend-page-intro"]
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
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[3]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tomiai.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tomiai = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { tomiai as default };
//# sourceMappingURL=tomiai-d7196286.mjs.map
