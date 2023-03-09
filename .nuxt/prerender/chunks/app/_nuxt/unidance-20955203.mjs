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
  name: "UnidancePage",
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
        icon: "unidance/PC/unidance-page-icon.svg",
        logo: "unidance/PC/unidance-page-logo.svg",
        img: ["unidance", "unidance-page-intro"],
        title: "Unidance",
        description: " \u2014 \u0441\u0442\u0443\u0434\u0438\u044F, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 10 \u0442\u0430\u043D\u0446\u0435\u0432\u0430\u043B\u044C\u043D\u044B\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 (\u0441\u0440\u0435\u0434\u0438 \u043D\u0438\u0445 Vogue, Jazz-funk, Dancehall, Hip-hop, Breakdance). \u041E\u043F\u044B\u0442\u043D\u044B\u0435 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043E\u0442\u0442\u0430\u0447\u0438\u0432\u0430\u044E\u0442 \u0441\u0432\u043E\u0438 \u043D\u0430\u0432\u044B\u043A\u0438 \u043D\u0430 \u043C\u0430\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441\u0441\u0430\u0445 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0430\u043D\u0446\u0435\u0432\u0430\u043B\u044C\u043D\u044B\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445.",
        tags: "\u0410\u0444\u0438\u0448\u0438 / \u0411\u0438\u043B\u0435\u0442\u044B"
      },
      task: {
        titles: {
          title: {
            title: "\u0417\u0430\u0434\u0430\u0447\u0430",
            fontSize: "simple"
          },
          text: "\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043E\u0431\u0440\u0430\u0442\u0438\u043B\u0441\u044F \u043A \u043D\u0430\u043C \u0441 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0430\u0444\u0438\u0448\u0438 \u0434\u043B\u044F \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439 \u043D\u0430 \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u044F\u0449\u0438\u0435 \u0442\u0430\u043D\u0446\u0435\u0432\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u0430\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441\u0441\u044B. \u0422\u0430\u043A\u0436\u0435 \u0431\u044B\u043B\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044C \u0431\u0438\u043B\u0435\u0442\u044B \u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0430.",
          padding: "task"
        },
        title: "UNIDANCE"
      },
      gallery: [
        {
          type: "SixThreeImage",
          images: [
            { url: ["unidance", "/unidance-page-img-01"] },
            { url: ["unidance", "/unidance-page-img-02"] },
            { url: ["unidance", "/unidance-page-img-03"] },
            { url: ["unidance", "/unidance-page-img-04"] },
            { url: ["unidance", "/unidance-page-img-05"] },
            { url: ["unidance", "/unidance-page-img-06"] }
          ],
          background: "#fff"
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["unidance", "/unidance-page-img-07"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["unidance", "/unidance-page-img-08"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["unidance", "/unidance-page-img-09"] }]
        }
      ],
      titles: [
        {
          title: {
            title: "\u0410\u0444\u0438\u0448\u0438",
            fontSize: "simple"
          },
          text: "\u041C\u043E\u0449\u043D\u044B\u0439 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442. \u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0438 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0430\u0444\u0438\u0448\u0438 \u043C\u043E\u0436\u0435\u0442 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u043E \u043F\u043E\u0434\u0430\u0442\u044C \u043D\u0443\u0436\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E.<br><br>\u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u043C\u044B \u043E\u0442\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u043B\u0438\u0441\u044C \u043E\u0442 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432 \u044F\u0440\u043A\u043E\u0441\u0442\u0438 \u0438 \u043B\u0430\u043A\u043E\u043D\u0438\u0447\u043D\u043E\u0441\u0442\u0438. \u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0442\u0430\u043D\u0446\u0435\u0432\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043C\u0430\u043B\u0438 \u0441\u0432\u043E\u0439 \u0434\u0438\u0437\u0430\u0439\u043D, \u043E\u0442\u0440\u0430\u0436\u0430\u044E\u0449\u0438\u0439 \u0435\u0433\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0443 \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u044C.",
          padding: "simple"
        },
        {
          title: {
            title: "\u0411\u0438\u043B\u0435\u0442\u044B",
            fontSize: "simple"
          },
          text: "\u0411\u0438\u043B\u0435\u0442\u044B \u043D\u0430 \u043C\u0430\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441\u0441\u044B \u043E\u0444\u043E\u0440\u043C\u0438\u043B\u0438 \u0432 \u0441\u0442\u0438\u043B\u0435 \u0430\u0444\u0438\u0448. \u041F\u0440\u043E\u0434\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0432\u0441\u044E \u0432\u0430\u0436\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0442\u0430\u043D\u0446\u0435\u0432\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F.",
          padding: "simple"
        }
      ],
      footer: {
        title: "izenbot",
        next: "izenbot",
        background: ["izenbot", "izenbot-page-intro"]
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
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/unidance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unidance = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { unidance as default };
//# sourceMappingURL=unidance-20955203.mjs.map
