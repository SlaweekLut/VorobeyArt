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
  name: "ZolotoaltayaPage",
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
        icon: "zolotoaltaya/PC/zolotoaltaya-page-icon.svg",
        logo: "zolotoaltaya/PC/zolotoaltaya-page-logo.svg",
        img: ["zolotoaltaya", "zolotoaltaya-page-intro"],
        title: "Золото Алтая",
        description: "— производитель органической косметики на основе алтайского мумиё. Бренд выпускает шампуни и бальзамы для волос, уходовые средства для лица и кремы для рук.",
        tags: "3D моделирование / Текстурирование / Дизайн"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Заказчику было необходимо сделать карточки товара для размещения на маркетплейсе Wildberries. Планировалась фотосессия продукции, требующая больших временных затрат из-за поиска фотографа и необходимости доставки товара в фотостудию.<br><br>Мы предложили более быстрое и простое решение - создание 3D моделей и дизайна карточек на их основе.<br><br>Из пожеланий клиента: соответствие изображений реальным товарам и лаконичное оформление с природным мотивом.",
          padding: "task"
        },
        title: "ЗОЛОТО АЛТАЯ"
      },
      gallery: [
        {
          type: "OneImage",
          padding: "0 clamp(38px,10vw,150px)",
          images: [{ url: ["zolotoaltaya", "/zolotoaltaya-page-img-01"] }]
        },
        {
          type: "SixImage",
          images: [
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-02"] },
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-03"] },
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-04"] },
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-05"] },
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-06"] },
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-07"] }
          ]
        },
        {
          type: "OneImage",
          padding: "0 clamp(38px,13.1vw,250px)",
          images: [{ url: ["zolotoaltaya", "/zolotoaltaya-page-img-08"] }]
        },
        {
          type: "EightImage",
          images: [
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-09"] },
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-10"] },
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-11"] },
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-12"] },
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-13"] },
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-14"] },
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-15"] },
            { url: ["zolotoaltaya", "/zolotoaltaya-page-img-16"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Сбор данных',
            fontSize: "simple"
          },
          text: "Для создания 3D карточек мы запросили только размеры продукции и ее этикетки, а также непрофессиональные фотографии.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> 3D моделирование',
            fontSize: "simple"
          },
          text: "Следующим шагом было моделирование продукции на основе размеров и этикеток средств. Для самой сборки мы использовали 3D Blender, работу с текстурами провели при помощи Substance Painter.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Дизайн',
            fontSize: "simple"
          },
          text: "На основе готовых моделей и референсов заказчика разработали дизайн карточек. Сначала создали главный слайд, затем сделали второстепенные - в аналогичном стиле.<br><br>В оформлении использовали золотой и черный цвета - палитру бренда. Добавили зелень как символ природы и натуральности.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "Нами были созданы 3D модели продуктов бренда, на основе которых мы подготовили единый дизайн карточек Wildberries. При этом для их реализации от клиента потребовалось предоставить только минимальные сведения о продукции.",
          padding: "simple"
        }
      ],
      footer: {
        title: "Marusya",
        next: "marusya",
        background: ["marusya", "marusya-page-intro"]
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
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[3]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/zolotoaltaya.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zolotoaltaya = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  zolotoaltaya as default
};
//# sourceMappingURL=zolotoaltaya-6b1664c1.js.map
