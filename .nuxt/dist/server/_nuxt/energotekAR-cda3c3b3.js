import { G as GalleryTemplate, L as LikeTemplate, F as FooterTemplate, I as IntroTemplate, a as TaskTemplate, T as TitleTemplate } from "./Task-3b8bd6fe.js";
import { G as GalleryCardTemplate } from "./GalleryCard-afd6fc45.js";
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
const _imports_0 = "" + __publicAssetsURL("img/energotekAR/Mobile/energotekAR-page-img-06.webp");
const _imports_1 = "" + __publicAssetsURL("img/energotekAR/PC/energotekAR-page-img-06.webp");
const _imports_2 = "" + __publicAssetsURL("img/energotekAR/JPG/energotekAR-page-img-06.png");
const _imports_3 = "" + __publicAssetsURL("img/energotekAR/Mobile/energotekAR-page-img-07.webp");
const _imports_4 = "" + __publicAssetsURL("img/energotekAR/PC/energotekAR-page-img-07.webp");
const _imports_5 = "" + __publicAssetsURL("img/energotekAR/JPG/energotekAR-page-img-07.png");
const _imports_6 = "" + __publicAssetsURL("img/energotekAR/Mobile/energotekAR-page-img-08.webp");
const _imports_7 = "" + __publicAssetsURL("img/energotekAR/PC/energotekAR-page-img-08.webp");
const _imports_8 = "" + __publicAssetsURL("img/energotekAR/JPG/energotekAR-page-img-08.png");
const energotekAR_vue_vue_type_style_index_0_scoped_defd560e_lang = "";
const _sfc_main = {
  name: "EnergotekARPage",
  components: {
    GalleryCardTemplate,
    GalleryTemplate,
    LikeTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate,
    TitleTemplate
  },
  data() {
    return {
      task: {
        titles: {
          title: {
            title: "Задача",
            fontSize: "simple"
          },
          text: 'Наш клиент преследовал две главные цели:<br/><br/><span class="title__text--defis">- систематизировать каталог продукции в мобильном приложении</span><br/><span class="title__text--defis">- внести элемент «функционального развлечения» в этот самый каталог</span><br/><br/>С первой целью все понятно – вместо того, чтобы 100500 раз посещать сайт компании, заказчики один раз скачают приложение и будут смотреть все там. А у потенциальных покупателей, которые посетят выставку и уйдут оттуда с приложением, будет возможность в любой момент посмотреть продукцию нашего клиента. Информация не потеряется и не отправится в макулатуру – в отличие от каталогов конкурентов.<br/><br/>А что касается второй цели – это как раз про то, как отличиться от конкурентов. Про собственную фишку, которая вызовет интерес и привлечет внимание. Ну и заодно будет полезна для покупателей.',
          padding: "task"
        },
        title: "Энерготэк"
      },
      intro: {
        icon: "energotekAR/PC/energotekAR-page-icon.svg",
        logo: "energotekAR/PC/energotekAR-page-logo.svg",
        img: ["energotekAR", "energotekAR-page-intro"],
        title: "Энерготек",
        description: "— разработчик и производитель полимерных систем для прокладки и защиты кабельных линий. Наши решения повышают надежность работы линий электропередачи и безопасность обслуживающего персонала, сокращают расходы в процессе эксплуатации. ",
        tags: "Приложение/ 3D моделирование / Публикация"
      },
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Скелет',
            fontSize: "simple"
          },
          text: "Первым этапом наша команда составила слекет приложения, который в дальнейшем будет реализовываться и обсуждаться.<br><br>Необходимо было продумать, как открывать модели с камеры (трекинг) и отдельно в приложении для стандартного просмотра. ",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Создание 3D моделей',
            fontSize: "simple"
          },
          text: "Для приложения было подготовлено 44 модели, поработали с сеткой моделей и текстурами. Для максимальной производительности все модели выдерживали в значениях до 100.000 трисов. Покажем некоторые из них:",
          padding: "simple"
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Визуальная часть',
            fontSize: "simple"
          },
          text: "Трекинг по картинке переводит цветное изображение в черно-белое. А некоторые наши объекты отличались друг от друга только цветом или полосками. Как итог, на выходе мы получали одинаковые муфты или уплотнители, которые на самом деле не одинаковые.<br><br>Так мы поняли, что трекинг по картинке нам не подойдет.<br>Поэтому решили – будем использовать марки.",
          padding: "simple"
        },
        {
          title: {
            title: "Результат",
            fontSize: "simple"
          },
          text: "Все поставленные цели достигнуты, и вместе с крутым приложением наш клиент получил:<br><br>· Возможность добавить в свою маркетинговую стратегию продвижения и популяризации своей продукции игровые механики дополненной реальности<br>· Возможность выделяться на фоне конкурентов на выставках<br>· Возможность презентовать заказчикам свою продукцию в наиболее удобной форме.<br><br>В перспективе все эти возможности превращаются в повышение лояльности покупателей и увеличение продаж.",
          padding: "simple"
        }
      ],
      gallery: [
        {
          type: "OneImage",
          images: [{ url: ["energotekAR", "/energotekAR-page-img-01"] }]
        },
        {
          type: "OneImage",
          shadow: false,
          images: [{ url: ["energotekAR", "/energotekAR-page-img-02"] }]
        },
        {
          type: "TwoImage",
          padding: "24px 36px",
          gap: "24px 73",
          images: [
            { url: ["energotekAR", "/energotekAR-page-img-03"] },
            { url: ["energotekAR", "/energotekAR-page-img-04"] }
          ]
        },
        {
          type: "OneImage",
          shadow: false,
          images: [{ url: ["energotekAR", "/energotekAR-page-img-05"] }]
        },
        {
          type: "OneImage",
          border: "simple",
          images: [{ url: ["energotekAR", "/energotekAR-page-img-09"] }]
        },
        {
          type: "TwoImage",
          border: "simple",
          images: [
            { url: ["energotekAR", "/energotekAR-page-img-10"] },
            { url: ["energotekAR", "/energotekAR-page-img-11"] }
          ]
        }
      ],
      footer: {
        title: "WB Alliance",
        next: "wballiance",
        background: ["wballiance", "wballiance-page-intro"]
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-defd560e>`);
  _push(ssrRenderComponent(_component_IntroTemplate, { intro: $data.intro }, null, _parent));
  _push(ssrRenderComponent(_component_TaskTemplate, { task: $data.task }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[0]
  }, null, _parent));
  _push(`<div class="energotekar__img" data-v-defd560e>`);
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[0]
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[1]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryTemplate, {
    settings: $data.gallery[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCardTemplate, {
    settings: $data.gallery[3]
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $data.titles[3]
  }, null, _parent));
  _push(`<div class="apps" data-v-defd560e><div class="apps__wrapper" data-v-defd560e><picture data-v-defd560e><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_0)} type="image/webp" data-v-defd560e><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_1)} type="image/webp" data-v-defd560e><source${ssrRenderAttr("srcset", _imports_2)} type="image/png" data-v-defd560e><img${ssrRenderAttr("srcset", _imports_1)} alt="" type="image/webp" data-v-defd560e></picture><div class="apps__row" data-v-defd560e><a href="https://play.google.com/store/apps/details?id=com.CYBERTi.EnergotekAR&amp;hl=ru&amp;gl=US" data-v-defd560e><picture data-v-defd560e><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_3)} type="image/webp" data-v-defd560e><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_4)} type="image/webp" data-v-defd560e><source${ssrRenderAttr("srcset", _imports_5)} type="image/png" data-v-defd560e><img${ssrRenderAttr("srcset", _imports_4)} alt="GooglePlay" type="image/webp" data-v-defd560e></picture></a><a href="https://apps.apple.com/ru/app/energotear/id1614880039" data-v-defd560e><picture data-v-defd560e><source media="(max-width: 768px)"${ssrRenderAttr("srcset", _imports_6)} type="image/webp" data-v-defd560e><source media="(min-width: 769px)"${ssrRenderAttr("srcset", _imports_7)} type="image/webp" data-v-defd560e><source${ssrRenderAttr("srcset", _imports_8)} type="image/png" data-v-defd560e><img${ssrRenderAttr("srcset", _imports_7)} alt="GooglePlay" type="image/webp" data-v-defd560e></picture></a></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/energotekAR.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const energotekAR = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-defd560e"]]);
export {
  energotekAR as default
};
//# sourceMappingURL=energotekAR-cda3c3b3.js.map
