import { H as Head, T as Title, M as Meta } from "./components-5e031e0a.js";
import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from "./Task-3b8bd6fe.js";
import { G as GalleryCardTemplate } from "./GalleryCard-afd6fc45.js";
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./composables-c7a1e9e8.js";
import "axios";
import "nanoid";
import "./Title-f65f35b3.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
const _imports_0 = "" + __publicAssetsURL("img/izenbot/Video/previews/izenbot-video-1.png");
const _imports_1 = "" + __publicAssetsURL("img/izenbot/Video/video-01.mp4");
const _imports_2 = "" + __publicAssetsURL("img/izenbot/Video/previews/izenbot-video-2.png");
const _imports_3 = "" + __publicAssetsURL("img/izenbot/Video/video-02.mp4");
const izenbot_vue_vue_type_style_index_0_scoped_085d80e6_lang = "";
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
        description: " — сочетание легендарного геймплея классических беговых игр и стилистики киберпанка. Формат игры: состязание в гонке против других реальных игроков, избегая препятствий. ",
        tags: "Приложение / 3D моделирование"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Разработать многопользовательскую онлайн-игру в стиле раннер с увлекательным геймплеем и ноткой хардкорности. Придерживаться стилистики киберпанка.",
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
            title: 'Этап 1 <span class="title__title-defis">-</span> Идея',
            fontSize: "simple"
          },
          text: "Идея создания игры появилась у нашей команды тогда, когда мы нашли популярную игру и заметили тенденцию - разработчики не слышат пользователей, игнорируют их комментарии. Было решено создать собственное приложение, уже с учетом пожеланий.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Структура',
            fontSize: "simple"
          },
          text: "На основе составленного скелета - кнопок, блоков, экранов и сцен - подготовили атласы элементов. Продумали построение уровня, которое позволило бы игроку идентифицировать дружелюбные и негативные объекты.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Проработка персонажей',
            fontSize: "simple"
          },
          text: "Создание персонажей начинали с поиска концепта. Использовали различные источники изображений, скрещивали идеи между собой. Получив креативных персонажей, придумывали им названия, исходя из внешних данных. Затем подбирали подходящую цветовую палитру. ",
          padding: "simple"
        },
        {
          title: {
            title: "Дополнительные материалы",
            fontSize: "simple"
          },
          text: "В ходе реализации команда подготавливала различные арты для фанов проекта. Для этого использовались все возможные ресурсы - Blender 3D, Photoshop, Substance Painter, Marmoset.",
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
              _push3(`Портфолио | izenbot`);
            } else {
              return [
                createTextVNode("Портфолио | izenbot")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "description",
          content: "Приложение / 3D моделирование"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("Портфолио | izenbot")
            ]),
            _: 1
          }),
          createVNode(_component_Meta, {
            name: "description",
            content: "Приложение / 3D моделирование"
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
export {
  izenbot as default
};
//# sourceMappingURL=izenbot-90c658ad.js.map
