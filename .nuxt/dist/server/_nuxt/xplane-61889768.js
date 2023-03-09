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
  name: "XplanePage",
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
        icon: "xplane/PC/xplane-page-icon.svg",
        logo: "xplane/PC/xplane-page-logo.svg",
        img: ["xplane", "xplane-page-intro"],
        title: "X-Plane",
        description: " — игра, в которой можно сесть за штурвал одной из летательных машин и отправиться в чистое небо. Вы будете летать и совершать трюки, пока за Вами гоняется несколько управляемых ракет.",
        tags: "Приложение / 3D моделирование"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Создать казуальную игру на основе простых элементов, исходя из референсов. Отличительные особенности проекта - добавление большого количества режимов, начиная от базового и заканчивая вариациями на время или с прохождением разных задач. ",
          padding: "task"
        },
        title: "X-PLANE"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["xplane", "/xplane-page-img-01"] }]
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
            title: "Элементы",
            fontSize: "simple"
          },
          text: "На основе составленного скелета приложения - кнопок, блоков, экранов и сцен - подготовили атласы элементов. Для их создания использовали Blender и Photoshop.",
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
        title: "energotek",
        next: "energotek",
        background: ["energotek", "energotek-page-intro"]
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
  _push(ssrRenderComponent(_component_LikeTemplate, {
    title: $data.intro.img[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_FooterTemplate, { settings: $data.footer }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/xplane.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const xplane = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  xplane as default
};
//# sourceMappingURL=xplane-61889768.js.map
