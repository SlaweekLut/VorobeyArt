import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from "./Task-3b8bd6fe.js";
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
  name: "ProzapchastPage",
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
        icon: "prozapchast/PC/prozapchast-page-icon.svg",
        logo: "prozapchast/PC/prozapchast-page-logo.svg",
        img: ["prozapchast", "prozapchast-page-intro"],
        title: "PROзапчасть",
        description: " — крупнейший поставщик качественных запчастей для бытовой техники. Широкий ассортимент деталей для любых брендов по доступным ценам. ",
        tags: "Презентация / Инфографика"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Заказчику было необходимо красиво и грамотно презентовать франшизу для привлечения инвесторов. <br><br>Из пожеланий: соответствие стилистике и цветовой палитре сайта, лаконичность и не перегруженность информацией.",
          padding: "task"
        },
        title: "TOMI.AI"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["prozapchast", "/prozapchast-page-img-01"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["prozapchast", "/prozapchast-page-img-02"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["prozapchast", "/prozapchast-page-img-03"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["prozapchast", "/prozapchast-page-img-04"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["prozapchast", "/prozapchast-page-img-05"] }]
        }
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Сбор данных',
            fontSize: "simple"
          },
          text: "Для создания презентации мы запросили у заказчика тезисы и тексты, которые должны присутствовать на слайдах. Обсудили детали: цвета, варианты дизайна, использование инфографики.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Проработка структуры',
            fontSize: "simple"
          },
          text: "Работа над презентацией началась с составления ее “скелета”. С учетом пожелания заказчика о лаконичности, мы разложили тексты на слайды так, чтобы информация воспринималась комфортно.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Визуальная часть',
            fontSize: "simple"
          },
          text: "На основе текстовой структуры проработали визуальную часть презентации. Придерживались принципа наглядности и использовали те образы, которые интуитивно выстраивались на основе прочитанного текста. Добавили инфографику.",
          padding: "simple"
        }
      ],
      footer: {
        title: "Own wifi",
        next: "ownwifi",
        background: ["ownwifi", "ownwifi-page-intro"]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prozapchast.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const prozapchast = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  prozapchast as default
};
//# sourceMappingURL=prozapchast-4d6c7867.js.map
