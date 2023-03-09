import { G as GalleryTemplate, L as LikeTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate } from "./Task-3b8bd6fe.js";
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
const _imports_0 = "" + __publicAssetsURL("img/energotek/Mobile/energotek-page-img-02.webp");
const _imports_1 = "" + __publicAssetsURL("img/energotek/PC/energotek-page-img-02.webp");
const _imports_2 = "" + __publicAssetsURL("img/energotek/JPG/energotek-page-img-02.jpg");
const _imports_3 = "" + __publicAssetsURL("img/energotek/Mobile/energotek-page-img-03.webp");
const _imports_4 = "" + __publicAssetsURL("img/energotek/PC/energotek-page-img-03.webp");
const _imports_5 = "" + __publicAssetsURL("img/energotek/JPG/energotek-page-img-03.jpg");
const _imports_6 = "" + __publicAssetsURL("img/energotek/Mobile/energotek-page-img-11.webp");
const _imports_7 = "" + __publicAssetsURL("img/energotek/PC/energotek-page-img-11.webp");
const _imports_8 = "" + __publicAssetsURL("img/energotek/JPG/energotek-page-img-11.jpg");
const _imports_9 = "" + __publicAssetsURL("img/energotek/Mobile/energotek-page-img-10.webp");
const _imports_10 = "" + __publicAssetsURL("img/energotek/PC/energotek-page-img-10.webp");
const _imports_11 = "" + __publicAssetsURL("img/energotek/JPG/energotek-page-img-10.jpg");
const _imports_12 = "" + __publicAssetsURL("img/energotek/Mobile/energotek-page-img-08.webp");
const _imports_13 = "" + __publicAssetsURL("img/energotek/PC/energotek-page-img-08.webp");
const _imports_14 = "" + __publicAssetsURL("img/energotek/JPG/energotek-page-img-08.jpg");
const _imports_15 = "" + __publicAssetsURL("img/energotek/Mobile/energotek-page-img-09.webp");
const _imports_16 = "" + __publicAssetsURL("img/energotek/PC/energotek-page-img-09.webp");
const _imports_17 = "" + __publicAssetsURL("img/energotek/JPG/energotek-page-img-09.jpg");
const _imports_18 = "" + __publicAssetsURL("img/energotek/Mobile/energotek-page-img-07.webp");
const _imports_19 = "" + __publicAssetsURL("img/energotek/PC/energotek-page-img-07.webp");
const _imports_20 = "" + __publicAssetsURL("img/energotek/JPG/energotek-page-img-07.jpg");
const _imports_21 = "" + __publicAssetsURL("img/energotek/Mobile/energotek-page-img-06.webp");
const _imports_22 = "" + __publicAssetsURL("img/energotek/PC/energotek-page-img-06.webp");
const _imports_23 = "" + __publicAssetsURL("img/energotek/JPG/energotek-page-img-06.jpg");
const _imports_24 = "" + __publicAssetsURL("img/energotek/Mobile/energotek-page-img-05.webp");
const _imports_25 = "" + __publicAssetsURL("img/energotek/PC/energotek-page-img-05.webp");
const _imports_26 = "" + __publicAssetsURL("img/energotek/JPG/energotek-page-img-05.jpg");
const energotek_vue_vue_type_style_index_0_scoped_a632e4d0_lang = "";
const _sfc_main = {
  name: "EnergotekPage",
  components: {
    GalleryTemplate,
    LikeTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate
  },
  data() {
    return {
      intro: {
        icon: "energotek/PC/energotek-page-icon.svg",
        logo: "energotek/PC/energotek-page-logo.svg",
        img: ["energotek", "energotek-page-intro"],
        title: "Энерготек",
        description: "— разработчик и производитель полимерных систем для прокладки и защиты кабельных линий. Решения компании повышают надежность работы линий электропередачи и безопасность обслуживающего персонала, сокращают расходы в процессе эксплуатации.",
        tags: "3D моделирование / Текстурирование / Визуализация"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Заказчику было необходимо презентовать проект потенциальным инвесторам, чтобы привлечь их средства. RUS + ENG.<br/><br/>Из пожеланий: соответствие стилистике и цветовой палитре приложения, лаконичность и не перегруженность информацией.",
          padding: "task"
        },
        title: "ЭНЕРГОТЕК"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["energotek", "/energotek-page-img-01"] }]
        }
      ],
      footer: {
        title: "Энерготэк AR",
        next: "energotekAR",
        background: ["energotekAR", "energotekAR-page-intro"]
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IntroTemplate = resolveComponent("IntroTemplate");
  const _component_TaskTemplate = resolveComponent("TaskTemplate");
  const _component_GalleryTemplate = resolveComponent("GalleryTemplate");
  const _component_LikeTemplate = resolveComponent("LikeTemplate");
  const _component_FooterTemplate = resolveComponent("FooterTemplate");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-a632e4d0>`);
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, { task: $data.task }, null, _parent));
  _push(`<div class="energotek__img" data-v-a632e4d0><picture data-v-a632e4d0><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_0)} type="image/webp" data-v-a632e4d0><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_1)} type="image/webp" data-v-a632e4d0><source${ssrRenderAttr("srcset", _imports_2)} type="image/jpeg" data-v-a632e4d0><img class="gallery__img"${ssrRenderAttr("srcset", _imports_1)} alt="" type="image/webp" data-v-a632e4d0></picture></div>`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(`<div class="material" data-v-a632e4d0><div class="material__wrapper wrapper" data-v-a632e4d0><p class="material__text" data-v-a632e4d0>Для точного построения 3D моделей, компания &quot;Энерготэк&quot; предоставила нам инженерные чертежи с указанием размеров и параметров объектов.</p></div><div class="material__row" data-v-a632e4d0><div class="material__img" data-v-a632e4d0><picture data-v-a632e4d0><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_3)} type="image/webp" data-v-a632e4d0><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_4)} type="image/webp" data-v-a632e4d0><source${ssrRenderAttr("srcset", _imports_5)} type="image/jpeg" data-v-a632e4d0><img class="gallery__img"${ssrRenderAttr("srcset", _imports_4)} alt="" type="image/webp" data-v-a632e4d0></picture></div></div></div><div class="models" data-v-a632e4d0><h2 class="models__title" data-v-a632e4d0><span class="models__number" data-v-a632e4d0>60+</span><span data-v-a632e4d0>моделей было подготовлено нашими специалистами для каталога</span></h2><p class="models__subtitle" data-v-a632e4d0><span class="models__subtitle-wrapper" data-v-a632e4d0><strong data-v-a632e4d0>3D</strong> моделирование / текстурирование / обработка </span></p></div><div class="models-img" data-v-a632e4d0><picture data-v-a632e4d0><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_6)} type="image/webp" data-v-a632e4d0><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_7)} type="image/webp" data-v-a632e4d0><source${ssrRenderAttr("srcset", _imports_8)} type="image/jpeg" data-v-a632e4d0><img class="gallery__img"${ssrRenderAttr("srcset", _imports_7)} alt="" type="image/webp" data-v-a632e4d0></picture></div><div class="additional-material" data-v-a632e4d0><h2 class="additional-material__title wrapper" data-v-a632e4d0>Дополнительные материалы</h2></div><div class="additional-material__gallery" data-v-a632e4d0><div class="additional-material__gallery--column" data-v-a632e4d0><div class="additional-material__gallery--row" data-v-a632e4d0><div class="additional-material__gallery--column" data-v-a632e4d0><div class="additional-material__img" data-v-a632e4d0><picture data-v-a632e4d0><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_9)} type="image/webp" data-v-a632e4d0><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_10)} type="image/webp" data-v-a632e4d0><source${ssrRenderAttr("srcset", _imports_11)} type="image/jpeg" data-v-a632e4d0><img class="gallery__img"${ssrRenderAttr("srcset", _imports_10)} alt="" type="image/webp" data-v-a632e4d0></picture></div><div class="additional-material__img" data-v-a632e4d0><picture data-v-a632e4d0><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_12)} type="image/webp" data-v-a632e4d0><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_13)} type="image/webp" data-v-a632e4d0><source${ssrRenderAttr("srcset", _imports_14)} type="image/jpeg" data-v-a632e4d0><img class="gallery__img"${ssrRenderAttr("srcset", _imports_13)} alt="" type="image/webp" data-v-a632e4d0></picture></div></div><div class="additional-material__img" data-v-a632e4d0><picture data-v-a632e4d0><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_15)} type="image/webp" data-v-a632e4d0><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_16)} type="image/webp" data-v-a632e4d0><source${ssrRenderAttr("srcset", _imports_17)} type="image/jpeg" data-v-a632e4d0><img class="gallery__img"${ssrRenderAttr("srcset", _imports_16)} alt="" type="image/webp" data-v-a632e4d0></picture></div></div><div class="additional-material__gallery--row" data-v-a632e4d0><div class="additional-material__img" data-v-a632e4d0><picture data-v-a632e4d0><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_18)} type="image/webp" data-v-a632e4d0><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_19)} type="image/webp" data-v-a632e4d0><source${ssrRenderAttr("srcset", _imports_20)} type="image/jpeg" data-v-a632e4d0><img class="gallery__img"${ssrRenderAttr("srcset", _imports_19)} alt="" type="image/webp" data-v-a632e4d0></picture></div><div class="additional-material__img" data-v-a632e4d0><picture data-v-a632e4d0><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_21)} type="image/webp" data-v-a632e4d0><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_22)} type="image/webp" data-v-a632e4d0><source${ssrRenderAttr("srcset", _imports_23)} type="image/jpeg" data-v-a632e4d0><img class="gallery__img"${ssrRenderAttr("srcset", _imports_22)} alt="" type="image/webp" data-v-a632e4d0></picture></div><div class="additional-material__img" data-v-a632e4d0><picture data-v-a632e4d0><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_24)} type="image/webp" data-v-a632e4d0><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_25)} type="image/webp" data-v-a632e4d0><source${ssrRenderAttr("srcset", _imports_26)} type="image/jpeg" data-v-a632e4d0><img class="gallery__img"${ssrRenderAttr("srcset", _imports_25)} alt="" type="image/webp" data-v-a632e4d0></picture></div></div></div></div>`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[0]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/energotek.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const energotek = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a632e4d0"]]);
export {
  energotek as default
};
//# sourceMappingURL=energotek-bde640c9.js.map
