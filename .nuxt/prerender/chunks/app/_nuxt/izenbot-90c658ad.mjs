import { p as publicAssetsURL } from '../../renderer.mjs';
import { H as Head, T as Title, M as Meta } from './components-5e031e0a.mjs';
import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from './Task-3b8bd6fe.mjs';
import { G as GalleryCardTemplate } from './GalleryCard-afd6fc45.mjs';
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/server-renderer/index.mjs';
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
import './composables-c7a1e9e8.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/axios/index.js';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/nanoid/index.js';
import './Title-f65f35b3.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unctx/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + publicAssetsURL("img/izenbot/Video/previews/izenbot-video-1.png");
const _imports_1 = "" + publicAssetsURL("img/izenbot/Video/video-01.mp4");
const _imports_2 = "" + publicAssetsURL("img/izenbot/Video/previews/izenbot-video-2.png");
const _imports_3 = "" + publicAssetsURL("img/izenbot/Video/video-02.mp4");
const _sfc_main = {
  name: "IzenbotPage",
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
        icon: "izenbot/PC/izenbot-page-icon.svg",
        logo: "izenbot/PC/izenbot-page-logo.svg",
        img: ["izenbot", "izenbot-page-intro"],
        title: "IZENBOT",
        description: " \u2014 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0435 \u043B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0433\u0435\u0439\u043C\u043F\u043B\u0435\u044F \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0431\u0435\u0433\u043E\u0432\u044B\u0445 \u0438\u0433\u0440 \u0438 \u0441\u0442\u0438\u043B\u0438\u0441\u0442\u0438\u043A\u0438 \u043A\u0438\u0431\u0435\u0440\u043F\u0430\u043D\u043A\u0430. \u0424\u043E\u0440\u043C\u0430\u0442 \u0438\u0433\u0440\u044B: \u0441\u043E\u0441\u0442\u044F\u0437\u0430\u043D\u0438\u0435 \u0432 \u0433\u043E\u043D\u043A\u0435 \u043F\u0440\u043E\u0442\u0438\u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432, \u0438\u0437\u0431\u0435\u0433\u0430\u044F \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u0439. ",
        tags: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 / 3D \u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
      },
      task: {
        titles: {
          title: {
            title: "\u0417\u0430\u0434\u0430\u0447\u0430",
            fontSize: "simple"
          },
          text: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0443\u044E \u043E\u043D\u043B\u0430\u0439\u043D-\u0438\u0433\u0440\u0443 \u0432 \u0441\u0442\u0438\u043B\u0435 \u0440\u0430\u043D\u043D\u0435\u0440 \u0441 \u0443\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0433\u0435\u0439\u043C\u043F\u043B\u0435\u0435\u043C \u0438 \u043D\u043E\u0442\u043A\u043E\u0439 \u0445\u0430\u0440\u0434\u043A\u043E\u0440\u043D\u043E\u0441\u0442\u0438. \u041F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0442\u0438\u043B\u0438\u0441\u0442\u0438\u043A\u0438 \u043A\u0438\u0431\u0435\u0440\u043F\u0430\u043D\u043A\u0430.",
          padding: "task"
        },
        title: "IZENBOT"
      },
      gallery: [
        {
          type: "OneImage",
          gap: "clamp(32px,5vw,80px) clamp(20px,8vw,120px)",
          borderRadius: "10px",
          mod: "izenbot",
          shadow: "false",
          images: [
            { url: ["izenbot", "/izenbot-page-img-01"] },
            { url: ["izenbot", "/izenbot-page-img-02"] },
            { url: ["izenbot", "/izenbot-page-img-03"] },
            { url: ["izenbot", "/izenbot-page-img-04"] },
            { url: ["izenbot", "/izenbot-page-img-05"] },
            { url: ["izenbot", "/izenbot-page-img-06"] }
          ]
        },
        {
          type: "OneImage",
          images: [{ url: ["izenbot", "/izenbot-page-img-07"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["izenbot", "/izenbot-page-img-08"] }]
        },
        {
          type: "OneImage",
          mod: "izenbot",
          images: [
            { url: ["izenbot", "/izenbot-page-img-09"] },
            { url: ["izenbot", "/izenbot-page-img-10"] },
            { url: ["izenbot", "/izenbot-page-img-11"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["izenbot", "/izenbot-page-img-12"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["izenbot", "/izenbot-page-img-13"] },
            { url: ["izenbot", "/izenbot-page-img-14"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["izenbot", "/izenbot-page-img-15"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["izenbot", "/izenbot-page-img-16"] },
            { url: ["izenbot", "/izenbot-page-img-17"] }
          ]
        },
        {
          type: "OneImage",
          gap: "clamp(16px,4vw,55px)",
          borderRadius: "10px",
          mod: "flipknife",
          images: [
            { url: ["xplane", "/xplane-page-img-02"] },
            { url: ["xplane", "/xplane-page-img-03"] },
            { url: ["xplane", "/xplane-page-img-04"] },
            { url: ["xplane", "/xplane-page-img-05"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 1 <span class="title__title-defis">-</span> \u0418\u0434\u0435\u044F',
            fontSize: "simple"
          },
          text: "\u0418\u0434\u0435\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0438\u0433\u0440\u044B \u043F\u043E\u044F\u0432\u0438\u043B\u0430\u0441\u044C \u0443 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0442\u043E\u0433\u0434\u0430, \u043A\u043E\u0433\u0434\u0430 \u043C\u044B \u043D\u0430\u0448\u043B\u0438 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0443\u044E \u0438\u0433\u0440\u0443 \u0438 \u0437\u0430\u043C\u0435\u0442\u0438\u043B\u0438 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u044E - \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438 \u043D\u0435 \u0441\u043B\u044B\u0448\u0430\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u044E\u0442 \u0438\u0445 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438. \u0411\u044B\u043B\u043E \u0440\u0435\u0448\u0435\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0443\u0436\u0435 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0439.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 2 <span class="title__title-defis">-</span> \u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430',
            fontSize: "simple"
          },
          text: "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u043A\u0435\u043B\u0435\u0442\u0430 - \u043A\u043D\u043E\u043F\u043E\u043A, \u0431\u043B\u043E\u043A\u043E\u0432, \u044D\u043A\u0440\u0430\u043D\u043E\u0432 \u0438 \u0441\u0446\u0435\u043D - \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B\u0438 \u0430\u0442\u043B\u0430\u0441\u044B \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432. \u041F\u0440\u043E\u0434\u0443\u043C\u0430\u043B\u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u044F, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u043B\u043E \u0431\u044B \u0438\u0433\u0440\u043E\u043A\u0443 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0440\u0443\u0436\u0435\u043B\u044E\u0431\u043D\u044B\u0435 \u0438 \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B.",
          padding: "simple"
        },
        {
          title: {
            title: '\u042D\u0442\u0430\u043F 3 <span class="title__title-defis">-</span> \u041F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0435\u0439',
            fontSize: "simple"
          },
          text: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0435\u0439 \u043D\u0430\u0447\u0438\u043D\u0430\u043B\u0438 \u0441 \u043F\u043E\u0438\u0441\u043A\u0430 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439, \u0441\u043A\u0440\u0435\u0449\u0438\u0432\u0430\u043B\u0438 \u0438\u0434\u0435\u0438 \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439. \u041F\u043E\u043B\u0443\u0447\u0438\u0432 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0435\u0439, \u043F\u0440\u0438\u0434\u0443\u043C\u044B\u0432\u0430\u043B\u0438 \u0438\u043C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F, \u0438\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. \u0417\u0430\u0442\u0435\u043C \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u043B\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0443\u044E \u0446\u0432\u0435\u0442\u043E\u0432\u0443\u044E \u043F\u0430\u043B\u0438\u0442\u0440\u0443. ",
          padding: "simple"
        },
        {
          title: {
            title: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",
            fontSize: "simple"
          },
          text: "\u0412 \u0445\u043E\u0434\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u043B\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0430\u0440\u0442\u044B \u0434\u043B\u044F \u0444\u0430\u043D\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438\u0441\u044C \u0432\u0441\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B - Blender 3D, Photoshop, Substance Painter, Marmoset.",
          padding: "simple"
        }
      ],
      footer: {
        title: "Flip Knife",
        next: "flipknife",
        background: ["flipknife", "flipknife-page-intro"]
      }
    };
  },
  mounted() {
    document.querySelectorAll(".video__wrapper").forEach((videoWrapper) => {
      const video = videoWrapper.querySelector("video");
      videoWrapper.addEventListener("click", async () => {
        if (video.paused) {
          await video.play();
          video.controls = true;
          videoWrapper.classList.add("video__wrapper--active");
        }
      });
      video.addEventListener("pause", () => {
        video.controls = false;
        videoWrapper.classList.remove("video__wrapper--active");
      });
      video.addEventListener("ended", () => {
        video.pause();
        videoWrapper.classList.remove("video__wrapper--active");
      });
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_Meta = Meta;
  const _component_IntroTemplate = resolveComponent("IntroTemplate");
  const _component_TaskTemplate = resolveComponent("TaskTemplate");
  const _component_TitleTemplate = resolveComponent("TitleTemplate");
  const _component_GalleryCardTemplate = resolveComponent("GalleryCardTemplate");
  const _component_GalleryTemplate = resolveComponent("GalleryTemplate");
  const _component_LikeTemplate = resolveComponent("LikeTemplate");
  const _component_FooterTemplate = resolveComponent("FooterTemplate");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-085d80e6>`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E | izenbot`);
            } else {
              return [
                createTextVNode("\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E | izenbot")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "description",
          content: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 / 3D \u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E | izenbot")
            ]),
            _: 1
          }),
          createVNode(_component_Meta, {
            name: "description",
            content: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 / 3D \u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
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
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[0]
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
  _push(`<div class="video" data-v-085d80e6><div class="video__container" data-v-085d80e6><div class="video__wrapper" data-v-085d80e6><video class="video__player" playsinline${ssrRenderAttr("poster", _imports_0)} preload="auto" data-v-085d80e6><source${ssrRenderAttr("src", _imports_1)} type="video/mp4" data-v-085d80e6></video><div class="video__play" style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-085d80e6><svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-085d80e6><rect width="100" height="100" rx="50" fill="#0181C8" data-v-085d80e6></rect><path d="M70 50L40 67.3205L40 32.6795L70 50Z" fill="white" data-v-085d80e6></path></svg></div></div></div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[4]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[5]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[6]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[7]
  }, null, _parent));
  _push(`<div class="video video--result" data-v-085d80e6><div class="video__container" data-v-085d80e6><div class="video__wrapper" data-v-085d80e6><video class="video__player"${ssrRenderAttr("poster", _imports_2)} playsinline preload="auto" data-v-085d80e6><source${ssrRenderAttr("src", _imports_3)} type="video/mp4" data-v-085d80e6></video><div class="video__play" style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-085d80e6><svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-085d80e6><rect width="100" height="100" rx="50" fill="#0181C8" data-v-085d80e6></rect><path d="M70 50L40 67.3205L40 32.6795L70 50Z" fill="white" data-v-085d80e6></path></svg></div></div></div></div>`);
  _push(ssrRenderComponent(_component_LikeTemplate, {
    title: $data.intro.img[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_FooterTemplate, { settings: $data.footer }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/izenbot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const izenbot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-085d80e6"]]);

export { izenbot as default };
//# sourceMappingURL=izenbot-90c658ad.mjs.map
