import { H as Head, T as Title, M as Meta } from "./components-5e031e0a.js";
import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from "./Task-3b8bd6fe.js";
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./composables-c7a1e9e8.js";
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
  name: "AladdinPage",
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
        icon: "aladdin/PC/aladdin-page-icon.svg",
        logo: "aladdin/PC/aladdin-page-logo.svg",
        img: ["aladdin", "aladdin-page-intro"],
        title: "Алладин",
        description: " — ведущий российский разработчик и поставщик средств аутентификации, продуктов и решений<br>для обеспечения информационной безопасности и защиты конфиденциальных данных.",
        tags: "Логотип"
      },
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: "Заказчику было необходимо создать логотип со смыслом, отражающий сферу деятельности компании.  На момент обращения к нам у клиента был логотип, который не учитывал особенности предприятия.<br><br>Из пожеланий: оставить оранжевый цвет, придерживаться минимализма.",
          padding: "task"
        },
        title: "АЛЛАДИН"
      },
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["aladdin", "/aladdin-page-img-01"] }]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["aladdin", "/aladdin-page-img-02"] },
            { url: ["aladdin", "/aladdin-page-img-03"] }
          ]
        },
        {
          type: "OneImage",
          images: [{ url: ["aladdin", "/aladdin-page-img-04"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["aladdin", "/aladdin-page-img-05"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["aladdin", "/aladdin-page-img-06"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["aladdin", "/aladdin-page-img-07"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["aladdin", "/aladdin-page-img-08"] },
            { url: ["aladdin", "/aladdin-page-img-10"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["aladdin", "/aladdin-page-img-09"] }]
        }
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Бриф',
            fontSize: "simple"
          },
          text: "Мы выяснили, какова специфика деятельности компании и где будет использоваться логотип. Данная информация необходима для того, чтобы иметь наиболее полное представление о заказчике и его продукции.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Мудборд',
            fontSize: "simple"
          },
          text: "На основе полученной информации составили мудборд – цветовую палитру и образы, ассоциирующиеся с компанией. Искали нестандартное решение, которое зацепит заказчика, и от которого можно будет отталкиваться. ",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Создание набросков',
            fontSize: "simple"
          },
          text: "После составления мудборда приступили к созданию набросков. Использовали разные образы с упором на букву “А”, элементы безопасности и еще пробовали объединять их в одно целое.",
          padding: "simple"
        },
        {
          title: {
            title: "Отбор приоритетных вариантов",
            fontSize: "simple"
          },
          text: "После рассмотрения выбранных набросков заказчик выбрал 7 разных концептов, по которым мы дали комментарии. ",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 4 <span class="title__title-defis">-</span> Проработка',
            fontSize: "simple"
          },
          text: "Из отобранных вариантов сформировали логотип, согласованный впоследствии клиентом. Это буква А, в которую вписан лабиринт как символ безопасности и защиты.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "В результате получился логотип, который в полной мере соответствовал пожеланиям заказчика: выполнен в стиле минимализма, включает оранжевый цвет. Таким образом, мы сделали логотип со смыслом, который отражает основную сферу деятельности компании - обеспечение безопасности. ",
          padding: "simple"
        }
      ],
      footer: {
        title: "unidance",
        next: "unidance",
        background: ["unidance", "unidance-page-intro"]
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_Meta = Meta;
  const _component_IntroTemplate = resolveComponent("IntroTemplate");
  const _component_TaskTemplate = resolveComponent("TaskTemplate");
  const _component_TitleTemplate = resolveComponent("TitleTemplate");
  const _component_GalleryTemplate = resolveComponent("GalleryTemplate");
  const _component_LikeTemplate = resolveComponent("LikeTemplate");
  const _component_FooterTemplate = resolveComponent("FooterTemplate");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Портфолио | Aladdin`);
            } else {
              return [
                createTextVNode("Портфолио | Aladdin")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "description",
          content: "создание логотипа для компании Аладдин"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("Портфолио | Aladdin")
            ]),
            _: 1
          }),
          createVNode(_component_Meta, {
            name: "description",
            content: "создание логотипа для компании Аладдин"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, { task: $data.task }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(`<div class="content" style="${ssrRenderStyle({ "margin-top": "0", "padding-top": "0", "padding-bottom": "0" })}"><div class="content__wrapper">`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[0]
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
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
  _push(`<div class="content" style="${ssrRenderStyle({ "margin-top": "0", "padding-top": "0", "padding-bottom": "0" })}"><div class="content__wrapper">`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[3]
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[4]
  }, null, _parent));
  _push(`<div class="content" style="${ssrRenderStyle({ "margin-top": "0", "padding-top": "0" })}"><div class="content__wrapper">`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[4]
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[5]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[5]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[6]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[7]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[8]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/aladdin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aladdin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  aladdin as default
};
//# sourceMappingURL=aladdin-694ace1d.js.map
