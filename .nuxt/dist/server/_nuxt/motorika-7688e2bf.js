import { G as GalleryTemplate, L as LikeTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate } from "./Task-3b8bd6fe.js";
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
const _imports_0 = "" + __publicAssetsURL("img/motorika/Mobile/motorika-page-img-01.webp");
const _imports_1 = "" + __publicAssetsURL("img/motorika/PC/motorika-page-img-01.webp");
const _imports_2 = "" + __publicAssetsURL("img/motorika/JPG/motorika-page-img-01.jpg");
const _imports_3 = "" + __publicAssetsURL("img/motorika/Mobile/motorika-page-img-02.webp");
const _imports_4 = "" + __publicAssetsURL("img/motorika/PC/motorika-page-img-02.webp");
const _imports_5 = "" + __publicAssetsURL("img/motorika/JPG/motorika-page-img-02.jpg");
const _imports_6 = "" + __publicAssetsURL("img/motorika/Mobile/motorika-page-img-03.webp");
const _imports_7 = "" + __publicAssetsURL("img/motorika/PC/motorika-page-img-03.webp");
const _imports_8 = "" + __publicAssetsURL("img/motorika/JPG/motorika-page-img-03.jpg");
const _imports_9 = "" + __publicAssetsURL("img/motorika/Mobile/motorika-page-img-04.webp");
const _imports_10 = "" + __publicAssetsURL("img/motorika/PC/motorika-page-img-04.webp");
const _imports_11 = "" + __publicAssetsURL("img/motorika/JPG/motorika-page-img-04.jpg");
const _imports_12 = "" + __publicAssetsURL("img/motorika/Mobile/motorika-page-img-05.webp");
const _imports_13 = "" + __publicAssetsURL("img/motorika/PC/motorika-page-img-05.webp");
const _imports_14 = "" + __publicAssetsURL("img/motorika/JPG/motorika-page-img-05.jpg");
const _imports_15 = "" + __publicAssetsURL("img/motorika/Mobile/motorika-page-img-06.webp");
const _imports_16 = "" + __publicAssetsURL("img/motorika/PC/motorika-page-img-06.webp");
const _imports_17 = "" + __publicAssetsURL("img/motorika/JPG/motorika-page-img-06.jpg");
const _imports_18 = "" + __publicAssetsURL("img/motorika/Mobile/motorika-page-img-07.webp");
const _imports_19 = "" + __publicAssetsURL("img/motorika/PC/motorika-page-img-07.webp");
const _imports_20 = "" + __publicAssetsURL("img/motorika/JPG/motorika-page-img-07.jpg");
const _imports_21 = "" + __publicAssetsURL("img/motorika/Mobile/motorika-page-img-08.webp");
const _imports_22 = "" + __publicAssetsURL("img/motorika/PC/motorika-page-img-08.webp");
const _imports_23 = "" + __publicAssetsURL("img/motorika/JPG/motorika-page-img-08.jpg");
const motorika_vue_vue_type_style_index_0_scoped_948687cc_lang = "";
const _sfc_main = {
  name: "MotorikaPage",
  components: {
    GalleryTemplate,
    LikeTemplate,
    TitleTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate
  },
  data() {
    return {
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "ТЗ было поставлено так: <br><br>“Создайте принт, который отражает эстетику будущего, технологий, киберпанка. Если вы поймали поток и сотворили больше одного принта, обязательно дайте нам возможность увидеть ваше творчество! Вы можете предложить до 3 работ”",
          padding: "task"
        },
        title: "Моторика"
      },
      intro: {
        icon: "motorika/PC/motorika-page-icon.svg",
        logo: "motorika/PC/motorika-page-logo.svg",
        img: ["motorika", "motorika-page-intro"],
        title: "Моторика",
        description: " — компания-разработчик современных кибер-рук. Здесь создаются технологии будущего, а люди обеспечиваются крутыми функциональными кибер-гаджетами. <br><br>Миссия компании - обеспечить 100% людей без рук на планете современными технологичными кибер-руками.",
        tags: "Графический дизайн / Визуализация"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["motorika", "/motorika-page-img-09"] }],
          border: "simple"
        },
        {
          type: "FourImage",
          images: [
            { url: ["motorika", "/motorika-page-img-10"] },
            { url: ["motorika", "/motorika-page-img-11"] },
            { url: ["motorika", "/motorika-page-img-12"] },
            { url: ["motorika", "/motorika-page-img-13"] }
          ],
          border: "simple"
        },
        {
          type: "OneImage",
          images: [{ url: ["motorika", "/motorika-page-img-14"] }],
          border: "simple"
        },
        {
          type: "ThreeImageCollage",
          border: "simple",
          column: {
            position: "Left",
            width: "50"
          },
          columnImages: [
            { url: ["motorika", "/motorika-page-img-15"], height: "50" },
            { url: ["motorika", "/motorika-page-img-16"], height: "50" }
          ],
          images: [{ url: ["motorika", "/motorika-page-img-17"], width: "50" }]
        }
      ],
      titles: [
        {
          title: {
            title: "1 место",
            fontSize: "simple"
          },
          text: "Наша команда принимала участие в конкурсе на платформе FL.RU и заняла 1-ое место среди 86 участников.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Определение направления',
            fontSize: "simple"
          },
          text: "Для определения направления мы изучили компанию детально: какие продукты выпускаются, какой мерч уже есть. Выяснили, что нужно двигаться в сторону технологий будущего, киберпанка, кибернетики. На основе этого начали прорабатывать визуал.<br><br>Для развития направлений - кибер-рука, стиль матрицы, сотворение нового мира технологий - брали за основу разработки компании.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Визуальная часть',
            fontSize: "simple"
          },
          text: "Разработали фирменный стиль на основе ТЗ. Нашли удачное решение, которое отразило направление деятельности компании и понравилось заказчику.",
          padding: "simple"
        },
        {
          title: {
            title: "Другие варианты применения принтов",
            fontSize: "simple"
          },
          text: "Помимо основной работы по техническому заданию решили от себя показать применение принтов на других носителях. Проработали исполнение на рюкзаке, сумке через плечо, powerbank.",
          padding: "simple"
        }
      ],
      footer: {
        title: "SPICY NOTE",
        next: "spicynote",
        background: ["spisynote", "spisynote-page-intro"]
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-948687cc>`);
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, { task: $data.task }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(`<div class="examples" data-v-948687cc><div class="examples__wrapper" data-v-948687cc><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_0)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_1)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_2)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_1)} alt="Пример" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_3)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_4)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_5)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_4)} alt="Пример" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_6)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_7)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_8)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_7)} alt="Пример" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_9)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_10)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_11)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_10)} alt="Пример" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_12)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_13)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_14)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_13)} alt="Пример" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_15)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_16)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_17)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_16)} alt="Пример" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_18)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_19)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_20)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_19)} alt="Пример" type="image/webp" data-v-948687cc></picture></div><div class="examples__img" data-v-948687cc><picture data-v-948687cc><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_21)} type="image/webp" data-v-948687cc><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_22)} type="image/webp" data-v-948687cc><source${ssrRenderAttr("srcset", _imports_23)} type="image/jpeg" data-v-948687cc><img${ssrRenderAttr("srcset", _imports_22)} alt="Пример" type="image/webp" data-v-948687cc></picture></div></div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[3]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/motorika.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const motorika = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-948687cc"]]);
export {
  motorika as default
};
//# sourceMappingURL=motorika-7688e2bf.js.map
