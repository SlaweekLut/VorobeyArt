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
  name: "MobdebutPage",
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
        icon: "mobdebut/PC/mobdebut-page-icon.svg",
        logo: "mobdebut/PC/mobdebut-page-logo.svg",
        img: ["mobdebut", "mobdebut-page-intro"],
        title: "Mobdebut",
        description: " — разработчик и производитель интеллектуальных счетчиков электроэнергии. Компания предлагает комплексные решения для коммунальных служб, реализует современные технологии в собственных разработках.",
        tags: "3D моделирование / Текстурирование"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Заказчик выходил на рынок с собственными системами контроля и управления электроэнергией. Необходимо было создать их изображения на основе 3D моделей - для размещения на сайте компании.",
          padding: "task"
        },
        title: "MOBDEBUT"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["mobdebut", "/mobdebut-page-img-01"] }]
        },
        {
          type: "FourImage",
          border: "simple",
          mod: "mobdebut",
          images: [
            { url: ["mobdebut", "/mobdebut-page-img-02"] },
            { url: ["mobdebut", "/mobdebut-page-img-03"] },
            { url: ["mobdebut", "/mobdebut-page-img-04"] },
            { url: ["mobdebut", "/mobdebut-page-img-05"] }
          ]
        },
        {
          type: "OneImage",
          images: [{ url: ["mobdebut", "/mobdebut-page-img-06"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["mobdebut", "/mobdebut-page-img-07"] }]
        },
        {
          type: "ThreeImageCol",
          border: "simple",
          images: [
            { url: ["mobdebut", "/mobdebut-page-img-08"] },
            { url: ["mobdebut", "/mobdebut-page-img-09"] },
            { url: ["mobdebut", "/mobdebut-page-img-10"] }
          ]
        }
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Сбор данных',
            fontSize: "simple"
          },
          text: "Для сборки моделей мы запросили у заказчика фотографии оборудования. В данном проекте решение задачи осложнялось плохим качеством наработок - отсутствующие на фото детали и особенности технической части устройств приходилось уточнять у нашего клиента.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Сборка 3D моделей',
            fontSize: "simple"
          },
          text: "Визуализация началась с подбора ракурсов, позволяющих наиболее точно передать размеры оборудования. Затем при помощи “Blender” собрали модели в пространстве.<br><br>Так выглядели промежуточные этапы моделирования:",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Проработка',
            fontSize: "simple"
          },
          text: "Создали текстуры и добавили на них необходимые наклейки, которые собирали в Adobe Photoshop. Далее настроили освещение, обработали рендеры - получились готовые модели.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "Создали изображения устройств из 3D моделей, которые полностью соответствуют реальным объектам. Несмотря на сложности с фотографиями, удалось проработать даже мельчайшие детали.",
          padding: "simple"
        }
      ],
      footer: {
        title: "Prime travel",
        next: "primetravel",
        background: ["primetravel", "primetravel-page-intro"]
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
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(`<div class="content" style="${ssrRenderStyle({ "padding-bottom": "0" })}"><div class="content__wrapper">`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[3]
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[3]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mobdebut.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mobdebut = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  mobdebut as default
};
//# sourceMappingURL=mobdebut-70c1c687.js.map
