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
  name: "GenezisPage",
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
        icon: "genezisproject/PC/genezisproject-page-icon.svg",
        logo: "genezisproject/PC/genezisproject-page-logo.svg",
        img: ["genezisproject", "genezisproject-page-intro"],
        title: "ГЕНЕЗИС ПРОЕКТ",
        description: "— архитектурно-инженерная компания, проектирующая комплексы общественных зданий, промышленные и спортивные объекты, городские пространства, социально-деловую инфраструктуру. ",
        tags: "Фирменный стиль / Брендбук"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Заказчик обратился к нам с задачей разработать фирменный стиль и оформить брендбук, который впоследствии менеджеры смогут использовать для ведения компании.<br><br>Из пожеланий: разделить 3 направления деятельности предприятия, сохранив при этом определенную общность.",
          padding: "task"
        },
        title: "ПРОЕКТ ГЕНЕЗИС"
      },
      gallery: [
        {
          type: "ThreeImage",
          images: [
            { url: ["genezisproject", "/genezisproject-page-img-01"] },
            { url: ["genezisproject", "/genezisproject-page-img-02"] },
            { url: ["genezisproject", "/genezisproject-page-img-03"] }
          ]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["genezisproject", "/genezisproject-page-img-04"] },
            { url: ["genezisproject", "/genezisproject-page-img-05"] }
          ]
        },
        {
          type: "FourImage",
          images: [
            { url: ["genezisproject", "/genezisproject-page-img-06"] },
            { url: ["genezisproject", "/genezisproject-page-img-07"] },
            { url: ["genezisproject", "/genezisproject-page-img-08"] },
            { url: ["genezisproject", "/genezisproject-page-img-09"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["genezisproject", "/genezisproject-page-img-10"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["genezisproject", "/genezisproject-page-img-11"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["genezisproject", "/genezisproject-page-img-12"] },
            { url: ["genezisproject", "/genezisproject-page-img-13"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Определение направления',
            fontSize: "simple"
          },
          text: "Компания занимается проектированием, инженерными изысканиями, проведением испытаний стройматериалов. На основе этого мы выделили параметры, от которых будем отталкиваться: элементы, рисунки и цветовая палитра.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Разработка стиля',
            fontSize: "simple"
          },
          text: "На основе имеющегося логотипа и заданного направления проработали главные элементы стиля. Шрифты подобрали строгие, символизирующие точность деятельности компании.<br><br>Цвета подобрали в зависимости от особенностей направления:<br>Проектирование - большая ответственность, опасность - красный цвет.<br>Плавучие станции - размещение на воде - синий цвет.<br>Изыскательные работы - работа с грунтом - оранжевый цвет.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Верстка',
            fontSize: "simple"
          },
          text: "Собрали брендбук по стандартам с применением элементов фирменного стиля.<br><br><br>Также для каждого направления создали уникальное изображение, которое символизирует определенный вид работ и отражает его специфику.<br><br><br>В поддержку логотипа, для решения дополнительных оформительских задач сделали пиктограммы. Выбрали плоский контурный стиль, напоминающий чертежи.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "Разработали фирменный стиль компании и на его основе оформили брендбук. Нашли удачное решение, которое разделило направления деятельности, но сохранило общие черты, связывающие их между собой.",
          padding: "simple"
        }
      ],
      footer: {
        title: "Золото Алтая",
        next: "zolotoaltaya",
        background: ["zolotoaltaya", "zolotoaltaya-page-intro"]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/genezis.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const genezis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  genezis as default
};
//# sourceMappingURL=genezis-31bac82a.js.map
