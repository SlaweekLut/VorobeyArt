import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { T as TitlePage } from "./Title-f65f35b3.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
const works_vue_vue_type_style_index_0_scoped_7907ccd9_lang = "";
const works_vue_vue_type_style_index_1_lang = "";
const _sfc_main = {
  name: "WorksPage",
  components: {
    TitlePage
  },
  data() {
    return {
      activeTab: 0,
      tab: "",
      dropdown: false,
      works: [
        {
          description: "Создание 3D моделей для каталогов",
          title: "ЭНЕРГОТЭК",
          to: "/energotek",
          img: ["energotek", "energotek-page"],
          visible: true,
          tags: ["two"]
        },
        {
          description: "Разработка приложения <br/> AR Play Market / App Store",
          title: "ЭНЕРГОТЭК AR",
          to: "/energotekAR",
          img: ["energotekAR", "energotekAR-page"],
          visible: true,
          tags: ["two", "five"]
        },
        {
          description: "Разработка брендбука и презентации",
          title: "WB ALLIANCE",
          to: "/wballiance",
          img: ["wballiance", "wballiance-page"],
          visible: true,
          tags: ["one", "three"]
        },
        {
          description: "Эксклюзивный дизайн футболок",
          title: "МОТОРИКА",
          to: "/motorika",
          img: ["motorika", "motorika-page"],
          visible: true,
          tags: ["three"]
        },
        {
          description: "Создание логотипа и визуализация",
          title: "SPICY NOTE",
          to: "/spicynote",
          img: ["spisynote", "spisynote-page"],
          visible: true,
          tags: ["three"]
        },
        {
          description: "Разработка приложения <br/> AR Play Market / App Store",
          title: "ГЕНЕЗИС ПРОЕКТ",
          to: "/genezis",
          img: ["genezisproject", "genezisproject-page"],
          visible: true,
          tags: ["one", "three"]
        },
        {
          description: "Создание 3D моделей <br/> для маркетплейсов",
          title: "ЗОЛОТО АЛТАЯ",
          to: "/zolotoaltaya",
          img: ["zolotoaltaya", "zolotoaltaya-page"],
          visible: true,
          tags: ["two"]
        },
        {
          description: "Дизайн печатной <br/> продукции",
          title: "MARUSYA",
          to: "/marusya",
          img: ["marusya", "marusya-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "Дизайн печатной <br/> продукции",
          title: "UKIGASSEN",
          to: "/ukigassen",
          img: ["ukigassen", "ukigassen-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "Разработка <br/> презентации",
          title: "OCEAN VIEW",
          to: "/oceanview",
          img: ["oceanview", "oceanview-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "Создание 3D моделей <br/> для каталогов",
          title: "ХИМТЕХ-Р",
          to: "/ximtexp",
          img: ["ximtexp", "ximtexp-page"],
          visible: true,
          tags: ["two"]
        },
        {
          description: "Создание 3D моделей <br/> для сайта",
          title: "MOBDEBUT",
          to: "/mobdebut",
          img: ["mobdebut", "mobdebut-page"],
          visible: true,
          tags: ["two"]
        },
        {
          description: "Разработка <br/> презентации",
          title: "PRIME TRAVEL",
          to: "/primetravel",
          img: ["primetravel", "primetravel-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "Разработка <br/> презентации",
          title: "TOMI.AI",
          to: "/tomiai",
          img: ["tomiai", "tomiai-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "Разработка брендбука и презентации",
          title: "КВАНТТЕЛЕКОМ",
          to: "/kvanttelekomBrend",
          img: ["kvanttelekomBrend", "kvanttelekomBrend-page"],
          visible: true,
          tags: ["one", "three"]
        },
        {
          description: "Разработка <br/> презентации",
          title: "PROЗАПЧАСТЬ",
          to: "/prozapchast",
          img: ["prozapchast", "prozapchast-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "Разработка <br/> презентации",
          title: "OWN WIFI",
          to: "/ownwifi",
          img: ["ownwifi", "ownwifi-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "Создание логотипа и <br/> визуализация",
          title: "H ONE",
          to: "/hone",
          img: ["hone", "hone-page"],
          visible: true,
          tags: ["three"]
        },
        {
          description: "Создание логотипа и визуализация",
          title: "Aladdin",
          to: "/aladdin",
          img: ["aladdin", "aladdin-page"],
          visible: true,
          tags: ["three"]
        },
        {
          description: "Дизайн печатной продукции",
          title: "Unidance",
          to: "/unidance",
          img: ["unidance", "unidance-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "Проектирование и<br>разработка игры",
          title: "IZENBOT",
          to: "/izenbot",
          img: ["izenbot", "izenbot-page"],
          visible: true,
          tags: ["five"]
        },
        {
          description: "Проектирование и<br>разработка игры",
          title: "Flip Knife",
          to: "/flipknife",
          img: ["flipknife", "flipknife-page"],
          visible: true,
          tags: ["five"]
        },
        {
          description: "Проектирование и<br>разработка игры",
          title: "Go Up",
          to: "/goup",
          img: ["goup", "goup-page"],
          visible: true,
          tags: ["five"]
        },
        {
          description: "Проектирование и<br>разработка игры",
          title: "Paw Paw",
          to: "/pawpaw",
          img: ["pawpaw", "pawpaw-page"],
          visible: true,
          tags: ["five"]
        },
        {
          description: "Проектирование и<br>разработка игры",
          title: "X-Plane",
          to: "/xplane",
          img: ["xplane", "xplane-page"],
          visible: true,
          tags: ["five"]
        },
        {
          description: "Создание 3D моделей <br/> для маркетплейсов",
          title: "MOLTENGRASS",
          to: "/",
          img: ["moltengrass", "moltengrass-page"],
          visible: true,
          tags: ["two"]
        },
        {
          description: "Создание 3D моделей <br/> для сайта",
          title: "3D БАНИ ",
          to: "/",
          img: ["3Dbani", "3Dbani-page"],
          visible: true,
          tags: ["two"]
        },
        {
          description: "Разработка дизайна <br/> приложения",
          title: "GARILLA POKER ",
          to: "/",
          img: ["garillapoker", "garillapoker-page"],
          visible: true,
          tags: ["one", "three"]
        },
        {
          description: "Дизайн и разработка <br/> сайта",
          title: "КВАНТТЕЛЕКОМ",
          to: "/",
          img: ["kvanttelekomCite", "kvanttelekomCite-page"],
          visible: true,
          tags: ["four"]
        },
        {
          description: "Создание логотипа и <br/> визуализация",
          title: "POLAR BEAR",
          to: "/",
          img: ["polarbear", "polarbear-page"],
          visible: true,
          tags: ["three"]
        },
        {
          description: "Дизайн печатной <br/> продукции",
          title: "АВТОМОЙКА №1",
          to: "/",
          img: ["automoika1", "automoika1-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "Создание 3D моделей <br/> для сайта",
          title: "3D СЛОИ",
          to: "/",
          img: ["3Dsloi", "3Dsloi-page"],
          visible: true,
          tags: ["two"]
        }
      ],
      tags: [
        { title: "Все проекты", tag: "all" },
        { title: "Графический дизайн", tag: "one" },
        { title: "3D дизайн", tag: "two" },
        { title: "Брендинг", tag: "three" },
        { title: "WEB разработка", tag: "four" },
        { title: "Мобильная разработка", tag: "five" }
      ]
    };
  },
  methods: {
    handleNav(activeTab) {
      if (activeTab === "all") {
        this.activeTab = 0;
      } else if (activeTab === "one") {
        this.activeTab = 1;
      } else if (activeTab === "two") {
        this.activeTab = 2;
      } else if (activeTab === "three") {
        this.activeTab = 3;
      } else if (activeTab === "four") {
        this.activeTab = 4;
      } else if (activeTab === "five") {
        this.activeTab = 5;
      }
      this.$data.works.forEach((work) => {
        if (activeTab === "all" || work.tags.includes(activeTab)) {
          work.visible = true;
        } else {
          work.visible = false;
        }
      });
      this.$data.active = activeTab;
    },
    startPorject(e) {
      const target = e.target.getBoundingClientRect();
      const x = e.clientX - target.left;
      const y = e.clientY - target.top;
      const filler = e.target.children[1];
      filler.style.left = `${x}px`;
      filler.style.top = `${y}px`;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TitlePage = resolveComponent("TitlePage");
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content works" }, _attrs))} data-v-7907ccd9>`);
  _push(ssrRenderComponent(_component_TitlePage, { title: "Проекты" }, null, _parent));
  _push(`<div class="content__wrapper" data-v-7907ccd9><p class="works__title" data-v-7907ccd9>Смотрите, что умеем</p><div class="works-nav" data-v-7907ccd9><div class="${ssrRenderClass([{ "works-nav__list--open": $data.dropdown }, "works-nav__list"])}" data-v-7907ccd9><!--[-->`);
  ssrRenderList($data.tags, (tag, i) => {
    _push(`<button${ssrRenderAttr("onmousemove", $options.startPorject)} class="${ssrRenderClass([{
      "works-nav__links--active": i === $data.activeTab,
      "works-nav__links--open": $data.dropdown
    }, "works-nav__links"])}" data-v-7907ccd9><span data-v-7907ccd9>${ssrInterpolate(tag.title)}</span><div class="works-nav__links-fill" data-v-7907ccd9></div></button>`);
  });
  _push(`<!--]--></div></div><div class="works-examples" data-v-7907ccd9><!--[-->`);
  ssrRenderList($data.works, (work, i) => {
    _push(`<div class="${ssrRenderClass([{ "works-example--hide": !work.visible }, "works-example"])}" data-v-7907ccd9>`);
    if (work.to !== "/") {
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "works-example__link",
        to: { path: work.to }
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="works-example__header" data-v-7907ccd9><picture data-v-7907ccd9><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${work.img[0]}/Mobile/${work.img[1]}.webp`)} type="image/webp" data-v-7907ccd9><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${work.img[0]}/PC/${work.img[1]}.webp`)} type="image/webp" data-v-7907ccd9><source${ssrRenderAttr("srcset", `/img/${work.img[0]}/JPG/${work.img[1]}.png`)} type="image/png" data-v-7907ccd9><img${ssrRenderAttr("srcset", `/img/${work.img[0]}/PC/${work.img[1]}.webp`)} alt="Пример работы" type="image/webp" class="works-example__img" data-v-7907ccd9></picture><div class="works-example__background" data-v-7907ccd9></div></div><div class="works-example__info" data-v-7907ccd9>`);
    if (work.to !== "/") {
      _push(`<h3 class="works-example__title" data-v-7907ccd9>${ssrInterpolate(work.title)}</h3>`);
    } else {
      _push(`<!---->`);
    }
    if (work.to === "/") {
      _push(`<h3 class="works-example__title works-example__title--dev" data-v-7907ccd9> В разработке </h3>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<p class="works-example__text" data-v-7907ccd9>${work.description}</p></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const works = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7907ccd9"]]);
export {
  works as default
};
//# sourceMappingURL=works-1dd87d45.js.map
