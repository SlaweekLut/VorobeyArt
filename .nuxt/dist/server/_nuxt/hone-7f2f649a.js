import { G as GalleryTemplate, T as TitleTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, L as LikeTemplate } from "./Task-3b8bd6fe.js";
import { G as GalleryCardTemplate } from "./GalleryCard-afd6fc45.js";
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
  name: "HonePage",
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
        icon: "hone/PC/hone-page-icon.svg",
        logo: "hone/PC/hone-page-logo.svg",
        img: ["hone", "hone-page-intro"],
        title: "H ONE",
        description: " —  коллектив творческих людей, которые с помощью средств массовой информации (коммуникационных каналов) продвигают услуги и товары клиента путём привлечения к нему дополнительного интереса.",
        tags: "Логотип / Фирменный стиль / Брендбук"
      },
      tasks: [
        {
          titles: {
            title: {
              title: "Задача",
              fontSize: "simple"
            },
            text: "Необходимо разработать логотип бренда. Заказчик обратился к нам, имея определенные пожелания: логотип должен выглядеть нестандартно и минималистично. Важно, чтобы в нем читалась буква “H”.",
            padding: "task"
          },
          title: "H one"
        },
        {
          titles: {
            title: {
              title: "Брендбук",
              fontSize: "simple"
            },
            text: "Далее заказчику было необходимо разработать фирменный стиль и оформить брендбук, который впоследствии менеджеры смогут использовать для ведения компании.<br><br>Из пожеланий: придерживаться трендов текущего года, отталкиваться от минимализма. Сделать упор на логотип и варианты его использования.",
            padding: "task"
          },
          title: ""
        }
      ],
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-01"] }]
        },
        {
          type: "TwoImage",
          images: [
            { url: ["hone", "/hone-page-img-02"] },
            { url: ["hone", "/hone-page-img-03"] }
          ]
        },
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-04"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-05"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-06"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-07"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["hone", "/hone-page-img-08"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["hone", "/hone-page-img-09"] },
            { url: ["hone", "/hone-page-img-10"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["hone", "/hone-page-img-11"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-12"] }]
        },
        {
          type: "OneImage",
          images: [{ url: ["hone", "/hone-page-img-13"] }]
        },
        {
          type: "FourImage",
          images: [
            { url: ["hone", "/hone-page-img-14"] },
            { url: ["hone", "/hone-page-img-15"] },
            { url: ["hone", "/hone-page-img-16"] },
            { url: ["hone", "/hone-page-img-17"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["hone", "/hone-page-img-18"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["hone", "/hone-page-img-19"] },
            { url: ["hone", "/hone-page-img-20"] }
          ]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["hone", "/hone-page-img-21"] }]
        }
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Бриф',
            fontSize: "simple"
          },
          text: "Мы выяснили, какова целевая аудитория бренда, где будет использоваться логотип, какие преимущества имеет бренд перед конкурентами. Данная информация необходима для того, чтобы иметь наиболее полное представление о заказчике и его продукции.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Мудборд',
            fontSize: "simple"
          },
          text: "На основе полученной информации составили мудборд – цветовую палитру и образы, которые можем использовать. Искали нестандартное решение, которое зацепит заказчика, и от которого мы будем отталкиваться. ",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Создание набросков',
            fontSize: "simple"
          },
          text: "После составления мудборда приступили к созданию набросков. Использовали разные образы, в которых читалась буква “Н”. Полученные наброски отправили заказчику и сопроводили их комментариями.",
          padding: "simple"
        },
        {
          title: {
            title: "Отбор приоритетных вариантов",
            fontSize: "simple"
          },
          text: "После рассмотрения выбранных набросков наш клиент остановился на логотипе с интеграцией буквы “Н” в слово “ONE”.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 4 <span class="title__title-defis">-</span> Проработка',
            fontSize: "simple"
          },
          text: "Мы приступили к заключительному этапу – проработке конечного варианта. Создали несколько финальных зарисовок для поиска итогового логотипа.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "В результате был создан логотип, который в полной мере соответствовал пожеланиям заказчика: выполнен в строгом стиле минимализма, использовано нестандартное решение, читается буква “H” из части названия бренда - “ONE”. Также было проработано исполнение с предпочтительными для заказчика цветами.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Определение направления',
            fontSize: "simple"
          },
          text: "Компания занимается продажей сувенирной продукции премиум класса для любой сферы деятельности. В процессе обсуждения референсов выяснили, что логотип хорошо сочетается с 3D элементами. От этого и отталкивались. ",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Разработка стиля',
            fontSize: "simple"
          },
          text: "На основе имеющегося логотипа и заданного направления проработали главные элементы стиля и 3D элементы. Подобрали шрифты для написания текста и выделения заголовков. Определили основные цвета.",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Верстка',
            fontSize: "simple"
          },
          text: "Собрали брендбук по стандартам с применением элементов фирменного стиля.<br><br>Оформили разделы об использовании логотипа, применении шрифтов, цветов, паттернов и 3D элементов.  В поддержку логотипа для решения дополнительных оформительских задач разработали 3D элементы, которые помогут выделить компанию на рынке.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "Разработали фирменный стиль компании и на его основе оформили брендбук. Нашли удачное решение, которое соответствовало всем пожеланиям заказчика.",
          padding: "simple"
        }
      ],
      footer: {
        title: "aladdin",
        next: "aladdin",
        background: ["aladdin", "aladdin-page-intro"]
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IntroTemplate = resolveComponent("IntroTemplate");
  const _component_TaskTemplate = resolveComponent("TaskTemplate");
  const _component_TitleTemplate = resolveComponent("TitleTemplate");
  const _component_GalleryTemplate = resolveComponent("GalleryTemplate");
  const _component_GalleryCardTemplate = resolveComponent("GalleryCardTemplate");
  const _component_LikeTemplate = resolveComponent("LikeTemplate");
  const _component_FooterTemplate = resolveComponent("FooterTemplate");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, {
    task: $data.tasks[0]
  }, null, _parent));
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
  _push(ssrRenderComponent(_component_TaskTemplate, {
    task: $data.tasks[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[6]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[9]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[7]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[10]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[8]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[11]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[9]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[12]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[13]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[14]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  hone as default
};
//# sourceMappingURL=hone-7f2f649a.js.map
