import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from "./Task-3b8bd6fe.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "" + __publicAssetsURL("img/spisynote/Mobile/spisynote-page-img-01.webp");
const _imports_1 = "" + __publicAssetsURL("img/spisynote/PC/spisynote-page-img-01.webp");
const _imports_2 = "" + __publicAssetsURL("img/spisynote/JPG/spisynote-page-img-01.jpg");
const _imports_3 = "" + __publicAssetsURL("img/spisynote/Mobile/spisynote-page-img-04.webp");
const _imports_4 = "" + __publicAssetsURL("img/spisynote/PC/spisynote-page-img-04.webp");
const _imports_5 = "" + __publicAssetsURL("img/spisynote/JPG/spisynote-page-img-04.jpg");
const _imports_6 = "" + __publicAssetsURL("img/spisynote/Mobile/spisynote-page-img-05.webp");
const _imports_7 = "" + __publicAssetsURL("img/spisynote/PC/spisynote-page-img-05.webp");
const _imports_8 = "" + __publicAssetsURL("img/spisynote/JPG/spisynote-page-img-05.jpg");
const spicynote_vue_vue_type_style_index_0_scoped_1b6f70a9_lang = "";
const _sfc_main = {
  name: "SpicynotePage",
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
        icon: "spisynote/PC/spisynote-page-icon.svg",
        logo: "spisynote/PC/spisynote-page-logo.svg",
        img: ["spisynote", "spisynote-page-intro"],
        title: "SpicyNote",
        description: "— новый производитель натуральной косметики. Бренд выпускает средства по уходу для лица, волос и тела. Натуральные составы и никаких испытаний на животных.",
        tags: "Логотип / Визуализация"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Разработка логотипа бренда. Заказчик обратился к нам, имея определенные пожелания: строгий “дорогой” стиль и минималистичность. Важно, чтобы была подчеркнута главная особенность косметики – натуральность.",
          padding: "task"
        },
        title: "SPICYNOTE"
      },
      gallery: [
        {
          type: "TwoImage",
          images: [
            { url: ["spisynote", "/spisynote-page-img-02"] },
            { url: ["spisynote", "/spisynote-page-img-03"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["spisynote", "/spisynote-page-img-06"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["spisynote", "/spisynote-page-img-07"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["spisynote", "/spisynote-page-img-08"] },
            { url: ["spisynote", "/spisynote-page-img-09"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Бриф',
            fontSize: "simple"
          },
          text: "Для определения направления работы мы выяснили, какова целевая аудитория бренда, какие конкурентные преимущества имеет компания, где будет использоваться логотип. Также уточнили предпочтительные цвета. ",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Мудборд',
            fontSize: "simple"
          },
          text: "На основе информации о бренде составили мудборд – палитру и образы, которые можем использовать. Зеленый цвет и листья ассоциируются с природой и натуральностью. Нота и специи – отсылки к названию.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Создание набросков',
            fontSize: "simple"
          },
          text: "Приступили к созданию набросков. Проработали различные образы – ноты, листья, ветки и капли. Попробовали исполнение в разных форматах.",
          padding: "simple"
        },
        {
          title: {
            title: "Отбор приоритетных вариантов",
            fontSize: "simple"
          },
          text: "После рассмотрения выбранных набросков наш клиент остановился на логотипе с интеграцией образа ноты - из-за прямой ассоциации с названием бренда.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 4 <span class="title__title-defis">-</span> Проработка',
            fontSize: "simple"
          },
          text: "Далее мы приступили к заключительному этапу – проработке конечного варианта. Создали несколько финальных зарисовок в разных направлениях.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "Нами был разработан логотип в строгом стиле минимализма, отражающий натуральность бренда и ассоциирующийся с его названием. Также мы проработали его исполнение с предпочтительными для заказчика оттенками – зеленым и оранжевым.",
          padding: "simple"
        }
      ],
      footer: {
        title: "Генезис проект",
        next: "genezis",
        background: ["genezisproject", "genezisproject-page-intro"]
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-1b6f70a9>`);
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, { task: $data.task }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(`<div class="moodboard" data-v-1b6f70a9><div class="moodboard__img" data-v-1b6f70a9><picture data-v-1b6f70a9><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_0)} type="image/webp" data-v-1b6f70a9><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_1)} type="image/webp" data-v-1b6f70a9><source${ssrRenderAttr("srcset", _imports_2)} type="image/jpeg" data-v-1b6f70a9><img${ssrRenderAttr("srcset", _imports_1)} alt="Moodboard" type="image/webp" data-v-1b6f70a9></picture></div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[3]
  }, null, _parent));
  _push(`<div class="sketch" data-v-1b6f70a9><div class="sketch__img" data-v-1b6f70a9><picture data-v-1b6f70a9><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_3)} type="image/webp" data-v-1b6f70a9><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_4)} type="image/webp" data-v-1b6f70a9><source${ssrRenderAttr("srcset", _imports_5)} type="image/jpeg" data-v-1b6f70a9><img${ssrRenderAttr("srcset", _imports_4)} alt="Sketch" type="image/webp" data-v-1b6f70a9></picture></div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[4]
  }, null, _parent));
  _push(`<div class="finall" data-v-1b6f70a9><div class="finall__img" data-v-1b6f70a9><picture data-v-1b6f70a9><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_6)} type="image/webp" data-v-1b6f70a9><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_7)} type="image/webp" data-v-1b6f70a9><source${ssrRenderAttr("srcset", _imports_8)} type="image/jpeg" data-v-1b6f70a9><img${ssrRenderAttr("srcset", _imports_7)} alt="finall" type="image/webp" data-v-1b6f70a9></picture></div></div>`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[5]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[3]
  }, null, _parent));
  _push(ssrRenderComponent(_component_LikeTemplate, { title: "spicynote" }, null, _parent));
  _push(ssrRenderComponent(_component_FooterTemplate, { settings: $data.footer }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/spicynote.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const spicynote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1b6f70a9"]]);
export {
  spicynote as default
};
//# sourceMappingURL=spicynote-185a27dc.js.map
