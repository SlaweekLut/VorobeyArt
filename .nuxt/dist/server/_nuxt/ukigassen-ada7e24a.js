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
  name: "UkigassenPage",
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
        icon: "ukigassen/PC/ukigassen-page-icon.svg",
        logo: "ukigassen/PC/ukigassen-page-logo.svg",
        img: ["ukigassen", "ukigassen-page-intro"],
        title: "UKIGASSEN",
        description: " — командная игра в снежки, появившаяся в конце 1980-х в Японии. В настоящее время ежегодные соревнования проводятся в Японии, Швеции, Финляндии, Армении, России и Норвегии.",
        tags: "Иллюстрация / Раскраска"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Разработать картинки для онлаин игры (по типу морской бой), которые помогли бы лучше описать правила, а также для размещения постов. В дальнейшем изображения будут использоваться в раскрасках, для детей из детских садов и младше.",
          padding: "task"
        },
        title: "UKIGASSEN"
      },
      gallery: [
        {
          type: "FourImageCollage",
          padding: "0 clamp(38px,8vw,130px) clamp(38px,8vw,130px)",
          gap: "30px",
          images: [
            { url: ["ukigassen", "/ukigassen-page-img-01"] },
            { url: ["ukigassen", "/ukigassen-page-img-02"] },
            { url: ["ukigassen", "/ukigassen-page-img-03"] },
            { url: ["ukigassen", "/ukigassen-page-img-04"] }
          ]
        },
        {
          type: "OneImage",
          images: [{ url: ["ukigassen", "/ukigassen-page-img-05"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["ukigassen", "/ukigassen-page-img-06"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["ukigassen", "/ukigassen-page-img-07"] }]
        }
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Наброски',
            fontSize: "simple"
          },
          text: "Мы полностью изучили правила онлаин игры и ход действий на поле для правильной передачи информации через рисунок. Для согласования с заказчиком на первом этапе, мы подготовили наброски.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "Нами было разработано игровое поле, а также 14 иллюстраций, которые помогут лучше разобраться с правилами онлаин игры при их изучении.",
          padding: "simple"
        }
      ],
      footer: {
        title: "Ocean view",
        next: "oceanview",
        background: ["oceanview", "oceanview-page-intro"]
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
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ukigassen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ukigassen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ukigassen as default
};
//# sourceMappingURL=ukigassen-ada7e24a.js.map
