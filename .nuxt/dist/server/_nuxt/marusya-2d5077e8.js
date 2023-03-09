import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from "./Task-3b8bd6fe.js";
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
  name: "MarusyaPage",
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
        icon: "marusya/PC/marusya-page-icon.svg",
        logo: "marusya/PC/marusya-page-logo.svg",
        img: ["marusya", "marusya-page-intro"],
        title: "Marusya",
        description: " — это оазис высочайшего сервиса и хорошего вкуса в Великом Новгороде. Уникальные техники приготовления блюд и интересные сочетания ингредиентов, обширная барная карта, разнообразное меню и лëгкая атмосфера праздника не оставят равнодушными самых взыскательных гостей!",
        tags: "Афиши"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Разработать афиши для мероприятий премиум-класса. Который запецит внимание, необычные образы и решения.<br><br>Пожелания: постараться выдержать минимализм",
          padding: "task"
        },
        title: "MARUSYA"
      },
      gallery: [
        {
          type: "OneImage",
          padding: "0 clamp(38px,10vw,200px) clamp(38px,8vw,130px)",
          images: [{ url: ["marusya", "/marusya-page-img-01"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["marusya", "/marusya-page-img-02"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["marusya", "/marusya-page-img-03"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["marusya", "/marusya-page-img-04"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["marusya", "/marusya-page-img-05"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["marusya", "/marusya-page-img-06"] }]
        }
      ],
      titles: [
        {
          title: {
            title: "ЛитМеню",
            fontSize: "simple"
          },
          text: "Уникальный цикл программ, посвященный искусству и кулинарии разных времен, а также кулинарным пристрастиям выдающихся исторических личностей. Вас ждет вечер, наполненный искрометными диалогами, изысканными блюдами, красивой музыкой и приятным общением!",
          padding: "simple"
        },
        {
          title: {
            title: "Открытие ресторана",
            fontSize: "simple"
          },
          text: "Грандиозное открытие<br><br>Смелый и яркий гастроужин от бренд-шефа ресторана изменит Ваше восприятие еды, от эстетики подачи внешнего вида, до галантности и фантастических вкусовых сочетаний!",
          padding: "simple"
        }
      ],
      footer: {
        title: "Ukigassen",
        next: "ukigassen",
        background: ["ukigassen", "ukigassen-page-intro"]
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
    settings: $data.titles[1]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/marusya.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const marusya = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  marusya as default
};
//# sourceMappingURL=marusya-2d5077e8.js.map
