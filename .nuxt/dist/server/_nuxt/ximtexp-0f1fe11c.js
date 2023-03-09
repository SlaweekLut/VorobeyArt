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
  name: "XimtexpPage",
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
        icon: "ximtexp/PC/ximtexp-page-icon.svg",
        logo: "ximtexp/PC/ximtexp-page-logo.svg",
        img: ["ximtexp", "ximtexp-page-intro"],
        title: "ХИМТЕХ-Р",
        description: " — разработчик и производитель полимерных систем для прокладки и защиты кабельных линий. Решения компании повышают надежность работы линий электропередач и безопасность обслуживающего персонала, сокращают расходы в процессе эксплуатации. ",
        tags: "3D моделирование / Текстурирование"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Заказчику было необходимо наполнить интернет-магазин и презентовать 44 позиции товаров.  Для решения данной задачи мы, совместно со штатным специалистом компании по 3D, выбрали моделирование на основе фотографий - с размерами и описанием.",
          padding: "task"
        },
        title: "ХИМТЕХ-Р"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["ximtexp", "/ximtexp-page-img-01"] }]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["ximtexp", "/ximtexp-page-img-02"] },
            { url: ["ximtexp", "/ximtexp-page-img-03"] }
          ]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["ximtexp", "/ximtexp-page-img-04"] },
            { url: ["ximtexp", "/ximtexp-page-img-05"] }
          ]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["ximtexp", "/ximtexp-page-img-06"] },
            { url: ["ximtexp", "/ximtexp-page-img-07"] }
          ]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["ximtexp", "/ximtexp-page-img-08"] },
            { url: ["ximtexp", "/ximtexp-page-img-09"] }
          ]
        },
        {
          type: "OneImage",
          images: [{ url: ["ximtexp", "/ximtexp-page-img-10"] }]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["ximtexp", "/ximtexp-page-img-11"] },
            { url: ["ximtexp", "/ximtexp-page-img-12"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Сбор данных',
            fontSize: "simple"
          },
          text: "Для сборки моделей мы запросили у заказчика фотографии товара. В данном проекте работа осложнялась наличием нестандартных деталей, из-за которых не всегда получалось дать точный размер. ",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Сборка 3D моделей',
            fontSize: "simple"
          },
          text: "Визуализация началась с подбора ракурсов, позволяющих наиболее точно передать размеры оборудования. Затем при помощи программы “3D Blender” собрали модели в пространстве.<br><br>Так выглядели промежуточные этапы моделирования:",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "На основе полученных от нашей команды 44 моделей, штатный специалист компании “ХИМТЕХ-Р” проработал текстуру и наклейки. Затем сделал финальный рендер с обработкой.",
          padding: "simple"
        }
      ],
      footer: {
        title: "Mobdebut",
        next: "mobdebut",
        background: ["mobdebut", "mobdebut-page-intro"]
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
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ximtexp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ximtexp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ximtexp as default
};
//# sourceMappingURL=ximtexp-0f1fe11c.js.map
