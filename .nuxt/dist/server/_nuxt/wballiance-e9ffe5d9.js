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
  name: "WBAlliancePage",
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
        icon: "wballiance/PC/wballiance-page-icon.svg",
        logo: "wballiance/PC/wballiance-page-logo.svg",
        img: ["wballiance", "wballiance-page-intro"],
        title: "WBAlliance",
        description: "— компания, помогающая партнерам открывать свой бизнес и успешно зарабатывать на маркетплейсах. WB Alliance на рынке более 7 лет и знает все о торговле на площадках WB или Ozon.",
        tags: "Фирменный стиль / Брендбук"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Заказчик обратился к нам с задачей разработать фирменный стиль и оформить брендбук, который впоследствии менеджеры смогут использовать для ведения компании.<br><br>Из пожеланий: использовать в оформлении брендбука несколько корпоративных цветов.",
          padding: "task"
        },
        title: "WB Alliance"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["wballiance", "/wballiance-page-img-01"] }],
          shadow: "false"
        },
        {
          type: "TwoImage",
          background: "linear-gradient(130.46deg, #0066B1 10.72%, #003D78 83.52%)",
          images: [
            { url: ["wballiance", "/wballiance-page-img-02"] },
            { url: ["wballiance", "/wballiance-page-img-03"] }
          ]
        },
        {
          type: "FourImage",
          images: [
            { url: ["wballiance", "/wballiance-page-img-04"] },
            { url: ["wballiance", "/wballiance-page-img-06"] },
            { url: ["wballiance", "/wballiance-page-img-05"] },
            { url: ["wballiance", "/wballiance-page-img-07"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["wballiance", "/wballiance-page-img-08"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["wballiance", "/wballiance-page-img-09"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["wballiance", "/wballiance-page-img-10"] },
            { url: ["wballiance", "/wballiance-page-img-11"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Определение направления',
            fontSize: "simple"
          },
          text: "Компания занимается продажами товаров на маркетплейсах, инвестициями и имеет быстрорастущие результаты - это символизирует движение вверх. На основе данной ассоциации мы решили отразить в фирменном стиле WB Alliance нестандартные, динамичные элементы.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Разработка стиля',
            fontSize: "simple"
          },
          text: "На основе имеющегося логотипа и заданного направления проработали главные элементы стиля. Подобрали шрифты для написания текста и выделения заголовков. Определили цвета, которые будут основными.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Верстка',
            fontSize: "simple"
          },
          text: "Собрали брендбук по стандартам с применением элементов фирменного стиля.<br><br>Оформили разделы об использовании логотипа, применении шрифтов, цветов, паттернов.<br><br>В поддержку логотипа для решения дополнительных оформительских задач сделали пиктограммы. Выбрали плоский контурный стиль.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "Разработали фирменный стиль, на его основе оформили брендбук. Нашли удачное решение, которое соответствовало всем пожеланиям заказчика и отразило специфику деятельности компании.",
          padding: "simple"
        }
      ],
      footer: {
        title: "Motorika",
        next: "motorika",
        background: ["motorika", "motorika-page-intro"]
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
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[3]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[3]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[4]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[5]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wballiance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wballiance = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  wballiance as default
};
//# sourceMappingURL=wballiance-e9ffe5d9.js.map
