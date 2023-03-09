import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from "./Task-3b8bd6fe.js";
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
  name: "PawpawPage",
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
        icon: "pawpaw/PC/pawpaw-page-icon.svg",
        logo: "pawpaw/PC/pawpaw-page-logo.svg",
        img: ["pawpaw", "pawpaw-page-intro"],
        title: "Paw Paw",
        description: " — онлайн-игра в жанре FPS с мультяшной графикой и персонажами. Несколько режимов: публичная многопользовательская игра или частный сервер с друзьями.",
        tags: "Приложение / 3D моделирование"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Создать мобильную игру в мультяшной стилистике. Игровой процесс здесь основывается на сражениях с использованием огнестрельного или любого другого оружия, с видом от первого лица - и все это под музыку кантри.",
          padding: "task"
        },
        title: "PAW PAW"
      },
      gallery: [
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["pawpaw", "/pawpaw-page-img-01"] },
            { url: ["pawpaw", "/pawpaw-page-img-02"] }
          ]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["pawpaw", "/pawpaw-page-img-03"] },
            { url: ["pawpaw", "/pawpaw-page-img-04"] }
          ]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["pawpaw", "/pawpaw-page-img-05"] },
            { url: ["pawpaw", "/pawpaw-page-img-06"] }
          ]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["pawpaw", "/pawpaw-page-img-07"] },
            { url: ["pawpaw", "/pawpaw-page-img-08"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["pawpaw", "/pawpaw-page-img-09"] }]
        }
      ],
      titles: [
        {
          title: {
            title: "Референсы",
            fontSize: "simple"
          },
          text: "На основе составленного скелета приложения - кнопок, блоков, экранов, сцен и референсной игры Bullet Bonanza - подготовили атласы элементов. Продумали построение уровня, которое позволило бы игроку идентифицировать дружелюбные и негативные объекты.",
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
        title: "x-plane",
        next: "xplane",
        background: ["xplane", "xplane-page-intro"]
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
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pawpaw.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pawpaw = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  pawpaw as default
};
//# sourceMappingURL=pawpaw-73242568.js.map
