import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from "./Task-3b8bd6fe.js";
import { G as GalleryCardTemplate } from "./GalleryCard-afd6fc45.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {
  name: "FlipknifePage",
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
        icon: "flipknife/PC/flipknife-page-icon.svg",
        logo: "flipknife/PC/flipknife-page-logo.svg",
        img: ["flipknife", "flipknife-page-intro"],
        title: "Flip Knife",
        description: " — игра, в которой можно все: складывать ножи, метать топоры и легендарные мечи. Чтобы стать мастером, нужно собрать собственную коллекцию ножей!",
        tags: "Приложение / 3D моделирование"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "На основе референсной игры создать собственное приложение, добавить новый функционал и фишки, которые давно просят пользователи.<br><br>В приоритете создание PvP режима в стиле гонки - где игрокам необходимо первыми прийти на финиш. ",
          padding: "task"
        },
        title: "FLIP KNIFE"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["flipknife", "/flipknife-page-img-01"] }]
        },
        {
          type: "OneImage",
          gap: "clamp(16px,4vw,55px)",
          borderRadius: "10px",
          mod: "flipknife",
          images: [
            { url: ["flipknife", "/flipknife-page-img-02"] },
            { url: ["flipknife", "/flipknife-page-img-03"] },
            { url: ["flipknife", "/flipknife-page-img-04"] },
            { url: ["flipknife", "/flipknife-page-img-05"] }
          ]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["flipknife", "/flipknife-page-img-06"] },
            { url: ["flipknife", "/flipknife-page-img-07"] }
          ]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["flipknife", "/flipknife-page-img-08"] },
            { url: ["flipknife", "/flipknife-page-img-09"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: "Элементы",
            fontSize: "simple"
          },
          text: "На основе составленного скелета приложения - кнопок, блоков, экранов и  сцен - подготовили атласы элементов. Для их создания использовали Blender и Photoshop.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "Проработали и собрали яркий и удобный визуал, исходя из структуры, набросков, элементов. Перевели приложение в стадию MVP. Программную часть создали Unity специалисты. Четкая организация работы команды - зона ответственности проектного менеджера.",
          padding: "simple"
        }
      ],
      footer: {
        title: "go up",
        next: "goup",
        background: ["goup", "goup-page-intro"]
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
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/flipknife.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const flipknife = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  flipknife as default
};
//# sourceMappingURL=flipknife-fa70fc19.js.map
