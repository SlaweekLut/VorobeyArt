import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from "./Task-3b8bd6fe.js";
import { G as GalleryCardTemplate } from "./GalleryCard-afd6fc45.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  name: "GoupPage",
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
        icon: "goup/PC/goup-page-icon.svg",
        logo: "goup/PC/goup-page-logo.svg",
        img: ["goup", "goup-page-intro"],
        title: "GO UP",
        description: " — стильная и минималистичная игра, в которой главной задачей является провести главного героя через многочисленные испытания и преодолеть максимальный участок маршрута.",
        tags: "Приложение / 2D графика"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Создать простой, красивый, минималистичный 2D платформер.  Наша команда вдохновлялась примерами уже существующих аналогичных игр: Oddesey, GRIS, Monument Valley.",
          padding: "task"
        },
        title: "GO UP"
      },
      gallery: [
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["goup", "/goup-page-img-01"] },
            { url: ["goup", "/goup-page-img-02"] }
          ]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["goup", "/goup-page-img-03"] },
            { url: ["goup", "/goup-page-img-04"] }
          ]
        },
        {
          type: "OneImage",
          gap: "clamp(16px, 4vw, 40px)",
          borderRadius: "10px",
          mod: "goup",
          background: "#fff",
          images: [
            { url: ["goup", "/goup-page-img-05"] },
            { url: ["goup", "/goup-page-img-06"] },
            { url: ["goup", "/goup-page-img-07"] },
            { url: ["goup", "/goup-page-img-08"] },
            { url: ["goup", "/goup-page-img-09"] },
            { url: ["goup", "/goup-page-img-10"] },
            { url: ["goup", "/goup-page-img-11"] },
            { url: ["goup", "/goup-page-img-12"] },
            { url: ["goup", "/goup-page-img-13"] },
            { url: ["goup", "/goup-page-img-14"] },
            { url: ["goup", "/goup-page-img-15"] },
            { url: ["goup", "/goup-page-img-16"] },
            { url: ["goup", "/goup-page-img-17"] },
            { url: ["goup", "/goup-page-img-18"] },
            { url: ["goup", "/goup-page-img-19"] },
            { url: ["goup", "/goup-page-img-20"] },
            { url: ["goup", "/goup-page-img-21"] },
            { url: ["goup", "/goup-page-img-22"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: "Референсы",
            fontSize: "simple"
          },
          text: "На основе составленного скелета приложения - кнопок, блоков, экранов, сцен и референсов - подготовили атласы элементов. Продумали построение уровня, которое позволило бы игроку идентифицировать дружелюбные и негативные объекты.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "Проработали и собрали красивый и удобный визуал, исходя из структуры, набросков, элементов. Перевели приложение в стадию MVP. Программную часть создали Unity специалисты. Четкая организация работы команды - зона ответственности проектного менеджера.",
          padding: "simple"
        }
      ],
      footer: {
        title: "paw paw",
        next: "pawpaw",
        background: ["pawpaw", "pawpaw-page-intro"]
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
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[2]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/goup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const goup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  goup as default
};
//# sourceMappingURL=goup-a81feb76.js.map
