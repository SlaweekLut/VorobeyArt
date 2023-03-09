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
  name: "KvanttelekomBrendPage",
  // directives: {
  // 	motion: motion(),
  // },
  components: {
    GalleryTemplate,
    GalleryTemplateCard: GalleryCardTemplate,
    TitleTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate,
    LikeTemplate
  },
  data() {
    return {
      intro: {
        icon: "kvanttelekomBrend/PC/kvanttelekomBrend-page-icon.svg",
        logo: "kvanttelekomBrend/PC/kvanttelekomBrend-page-logo.svg",
        img: ["kvanttelekomBrend", "kvanttelekomBrend-page-intro"],
        title: "СМАРТС КВАНТТЕЛЕКОМ",
        description: " — компания, которая проводит исследования, ведет прикладные разработки, создает решения в области квантовых коммуникаций и обеспечивает максимально безопасную передачу данных.",
        tags: "Фирменный стиль / Брендбук"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Заказчик обратился к нам с задачей разработать фирменный стиль и оформить брендбук, который впоследствии менеджеры смогут использовать для ведения компании.<br><br>Из пожеланий: придерживаться трендов текущего года, соблюдать стиль минимализма. Сделать упор на применение логотипа.",
          padding: "task"
        },
        title: "КВАНТТЕЛЕКОМ"
      },
      gallery: [
        {
          type: "OneImage",
          images: [
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-01"] }
          ]
        },
        {
          type: "OneImage",
          images: [
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-02"] }
          ]
        },
        {
          type: "OneImage",
          images: [
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-03"] }
          ]
        },
        {
          type: "SixTwoImage",
          images: [
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-04"] },
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-05"] },
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-06"] },
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-07"] },
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-08"] },
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-09"] }
          ]
        },
        {
          type: "OneImage",
          images: [
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-10"] }
          ]
        },
        {
          type: "ThreeImage",
          border: "simple",
          images: [
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-11"] },
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-12"] },
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-13"] }
          ]
        },
        {
          type: "ThreeImage",
          border: "simple",
          images: [
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-14"] },
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-15"] },
            { url: ["kvanttelekomBrend", "/kvanttelekomBrend-page-img-16"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Определение направления',
            fontSize: "simple"
          },
          text: "Компания специализируется на безопасной передаче данных. Брендбук был необходим для того, чтобы иметь уникальный товарный знак - запоминаться на рынке it безопасности. <br><br>От этих особенностей мы отталкивались, когда определяли направление стиля.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Разработка стиля',
            fontSize: "simple"
          },
          text: "На основе имеющегося логотипа и заданного направления проработали главные элементы стиля. Подобрали шрифты для написания текста и выделения заголовков. Определили основные цвета.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Верстка',
            fontSize: "simple"
          },
          text: "Собрали брендбук по стандартам с применением элементов фирменного стиля.<br><br>В поддержку логотипа, для решения дополнительных оформительских задач сделали пиктограммы. Выбрали плоский контурный стиль, напоминающий печатные платы. Добавили линии, символизирующие летящие фотоны света.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "Разработали фирменный стиль компании и на его основе оформили брендбук. Нашли удачное решение, которое выделило компанию на фоне конкурентов.",
          padding: "simple"
        }
      ],
      footer: {
        title: "Proзапчасть",
        next: "prozapchast",
        background: ["prozapchast", "prozapchast-page-intro"]
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IntroTemplate = resolveComponent("IntroTemplate");
  const _component_TaskTemplate = resolveComponent("TaskTemplate");
  const _component_TitleTemplate = resolveComponent("TitleTemplate");
  const _component_GalleryTemplate = resolveComponent("GalleryTemplate");
  const _component_GalleryTemplateCard = resolveComponent("GalleryTemplateCard");
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
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplateCard, {
    settings: $data.gallery[3]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[3]
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
  _push(ssrRenderComponent(_component_LikeTemplate, {
    title: $data.intro.img[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_FooterTemplate, { settings: $data.footer }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kvanttelekomBrend.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kvanttelekomBrend = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  kvanttelekomBrend as default
};
//# sourceMappingURL=kvanttelekomBrend-15dd15b5.js.map
