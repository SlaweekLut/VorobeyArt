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
  name: "UnidancePage",
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
        icon: "unidance/PC/unidance-page-icon.svg",
        logo: "unidance/PC/unidance-page-logo.svg",
        img: ["unidance", "unidance-page-intro"],
        title: "Unidance",
        description: " — студия, в которой преподается более 10 танцевальных направлений (среди них Vogue, Jazz-funk, Dancehall, Hip-hop, Breakdance). Опытные педагоги постоянно оттачивают свои навыки на мастер-классах и других танцевальных мероприятиях.",
        tags: "Афиши / Билеты"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Заказчик обратился к нам с задачей разработать афиши для социальных сетей на предстоящие танцевальные мастер-классы. Также было необходимо дополнительно сверстать билеты и сертификаты для участников проекта.",
          padding: "task"
        },
        title: "UNIDANCE"
      },
      gallery: [
        {
          type: "SixThreeImage",
          images: [
            { url: ["unidance", "/unidance-page-img-01"] },
            { url: ["unidance", "/unidance-page-img-02"] },
            { url: ["unidance", "/unidance-page-img-03"] },
            { url: ["unidance", "/unidance-page-img-04"] },
            { url: ["unidance", "/unidance-page-img-05"] },
            { url: ["unidance", "/unidance-page-img-06"] }
          ],
          background: "#fff"
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["unidance", "/unidance-page-img-07"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["unidance", "/unidance-page-img-08"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["unidance", "/unidance-page-img-09"] }]
        }
      ],
      titles: [
        {
          title: {
            title: "Афиши",
            fontSize: "simple"
          },
          text: "Мощный рекламный инструмент. Эффективный и оригинальный дизайн афиши может мгновенно привлечь внимание клиентов, а также компактно подать нужную информацию.<br><br>Поэтому при разработке дизайна мы отталкивались от принципов яркости и лаконичности. Для каждого танцевального направления продумали свой дизайн, отражающий его специфику и направленность.",
          padding: "simple"
        },
        {
          title: {
            title: "Билеты",
            fontSize: "simple"
          },
          text: "Билеты на мастер-классы оформили в стиле афиш. Продублировали всю важную информацию и оставили специфичное оформление для каждого танцевального направления.",
          padding: "simple"
        }
      ],
      footer: {
        title: "izenbot",
        next: "izenbot",
        background: ["izenbot", "izenbot-page-intro"]
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
  _push(ssrRenderComponent(_component_LikeTemplate, {
    title: $data.intro.img[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_FooterTemplate, { settings: $data.footer }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/unidance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unidance = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  unidance as default
};
//# sourceMappingURL=unidance-20955203.js.map
