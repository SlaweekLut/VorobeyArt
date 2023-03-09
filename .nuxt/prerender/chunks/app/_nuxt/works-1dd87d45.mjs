import { _ as _export_sfc, a as __nuxt_component_0 } from '../server.mjs';
import { T as TitlePage } from './Title-f65f35b3.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/hookable/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unctx/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/h3/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/ufo/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/destr/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/scule/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/ohash/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/pathe/dist/index.mjs';

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
          description: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 3D \u043C\u043E\u0434\u0435\u043B\u0435\u0439 \u0434\u043B\u044F \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u043E\u0432",
          title: "\u042D\u041D\u0415\u0420\u0413\u041E\u0422\u042D\u041A",
          to: "/energotek",
          img: ["energotek", "energotek-page"],
          visible: true,
          tags: ["two"]
        },
        {
          description: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F <br/> AR Play Market / App Store",
          title: "\u042D\u041D\u0415\u0420\u0413\u041E\u0422\u042D\u041A AR",
          to: "/energotekAR",
          img: ["energotekAR", "energotekAR-page"],
          visible: true,
          tags: ["two", "five"]
        },
        {
          description: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0431\u0440\u0435\u043D\u0434\u0431\u0443\u043A\u0430 \u0438 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438",
          title: "WB ALLIANCE",
          to: "/wballiance",
          img: ["wballiance", "wballiance-page"],
          visible: true,
          tags: ["one", "three"]
        },
        {
          description: "\u042D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0444\u0443\u0442\u0431\u043E\u043B\u043E\u043A",
          title: "\u041C\u041E\u0422\u041E\u0420\u0418\u041A\u0410",
          to: "/motorika",
          img: ["motorika", "motorika-page"],
          visible: true,
          tags: ["three"]
        },
        {
          description: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0438 \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",
          title: "SPICY NOTE",
          to: "/spicynote",
          img: ["spisynote", "spisynote-page"],
          visible: true,
          tags: ["three"]
        },
        {
          description: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F <br/> AR Play Market / App Store",
          title: "\u0413\u0415\u041D\u0415\u0417\u0418\u0421 \u041F\u0420\u041E\u0415\u041A\u0422",
          to: "/genezis",
          img: ["genezisproject", "genezisproject-page"],
          visible: true,
          tags: ["one", "three"]
        },
        {
          description: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 3D \u043C\u043E\u0434\u0435\u043B\u0435\u0439 <br/> \u0434\u043B\u044F \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u043E\u0432",
          title: "\u0417\u041E\u041B\u041E\u0422\u041E \u0410\u041B\u0422\u0410\u042F",
          to: "/zolotoaltaya",
          img: ["zolotoaltaya", "zolotoaltaya-page"],
          visible: true,
          tags: ["two"]
        },
        {
          description: "\u0414\u0438\u0437\u0430\u0439\u043D \u043F\u0435\u0447\u0430\u0442\u043D\u043E\u0439 <br/> \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438",
          title: "MARUSYA",
          to: "/marusya",
          img: ["marusya", "marusya-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "\u0414\u0438\u0437\u0430\u0439\u043D \u043F\u0435\u0447\u0430\u0442\u043D\u043E\u0439 <br/> \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438",
          title: "UKIGASSEN",
          to: "/ukigassen",
          img: ["ukigassen", "ukigassen-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 <br/> \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438",
          title: "OCEAN VIEW",
          to: "/oceanview",
          img: ["oceanview", "oceanview-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 3D \u043C\u043E\u0434\u0435\u043B\u0435\u0439 <br/> \u0434\u043B\u044F \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u043E\u0432",
          title: "\u0425\u0418\u041C\u0422\u0415\u0425-\u0420",
          to: "/ximtexp",
          img: ["ximtexp", "ximtexp-page"],
          visible: true,
          tags: ["two"]
        },
        {
          description: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 3D \u043C\u043E\u0434\u0435\u043B\u0435\u0439 <br/> \u0434\u043B\u044F \u0441\u0430\u0439\u0442\u0430",
          title: "MOBDEBUT",
          to: "/mobdebut",
          img: ["mobdebut", "mobdebut-page"],
          visible: true,
          tags: ["two"]
        },
        {
          description: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 <br/> \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438",
          title: "PRIME TRAVEL",
          to: "/primetravel",
          img: ["primetravel", "primetravel-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 <br/> \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438",
          title: "TOMI.AI",
          to: "/tomiai",
          img: ["tomiai", "tomiai-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0431\u0440\u0435\u043D\u0434\u0431\u0443\u043A\u0430 \u0438 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438",
          title: "\u041A\u0412\u0410\u041D\u0422\u0422\u0415\u041B\u0415\u041A\u041E\u041C",
          to: "/kvanttelekomBrend",
          img: ["kvanttelekomBrend", "kvanttelekomBrend-page"],
          visible: true,
          tags: ["one", "three"]
        },
        {
          description: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 <br/> \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438",
          title: "PRO\u0417\u0410\u041F\u0427\u0410\u0421\u0422\u042C",
          to: "/prozapchast",
          img: ["prozapchast", "prozapchast-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 <br/> \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438",
          title: "OWN WIFI",
          to: "/ownwifi",
          img: ["ownwifi", "ownwifi-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0438 <br/> \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",
          title: "H ONE",
          to: "/hone",
          img: ["hone", "hone-page"],
          visible: true,
          tags: ["three"]
        },
        {
          description: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0438 \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",
          title: "Aladdin",
          to: "/aladdin",
          img: ["aladdin", "aladdin-page"],
          visible: true,
          tags: ["three"]
        },
        {
          description: "\u0414\u0438\u0437\u0430\u0439\u043D \u043F\u0435\u0447\u0430\u0442\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438",
          title: "Unidance",
          to: "/unidance",
          img: ["unidance", "unidance-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438<br>\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u0433\u0440\u044B",
          title: "IZENBOT",
          to: "/izenbot",
          img: ["izenbot", "izenbot-page"],
          visible: true,
          tags: ["five"]
        },
        {
          description: "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438<br>\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u0433\u0440\u044B",
          title: "Flip Knife",
          to: "/flipknife",
          img: ["flipknife", "flipknife-page"],
          visible: true,
          tags: ["five"]
        },
        {
          description: "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438<br>\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u0433\u0440\u044B",
          title: "Go Up",
          to: "/goup",
          img: ["goup", "goup-page"],
          visible: true,
          tags: ["five"]
        },
        {
          description: "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438<br>\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u0433\u0440\u044B",
          title: "Paw Paw",
          to: "/pawpaw",
          img: ["pawpaw", "pawpaw-page"],
          visible: true,
          tags: ["five"]
        },
        {
          description: "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438<br>\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u0433\u0440\u044B",
          title: "X-Plane",
          to: "/xplane",
          img: ["xplane", "xplane-page"],
          visible: true,
          tags: ["five"]
        },
        {
          description: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 3D \u043C\u043E\u0434\u0435\u043B\u0435\u0439 <br/> \u0434\u043B\u044F \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u043E\u0432",
          title: "MOLTENGRASS",
          to: "/",
          img: ["moltengrass", "moltengrass-page"],
          visible: true,
          tags: ["two"]
        },
        {
          description: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 3D \u043C\u043E\u0434\u0435\u043B\u0435\u0439 <br/> \u0434\u043B\u044F \u0441\u0430\u0439\u0442\u0430",
          title: "3D \u0411\u0410\u041D\u0418 ",
          to: "/",
          img: ["3Dbani", "3Dbani-page"],
          visible: true,
          tags: ["two"]
        },
        {
          description: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 <br/> \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
          title: "GARILLA POKER ",
          to: "/",
          img: ["garillapoker", "garillapoker-page"],
          visible: true,
          tags: ["one", "three"]
        },
        {
          description: "\u0414\u0438\u0437\u0430\u0439\u043D \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 <br/> \u0441\u0430\u0439\u0442\u0430",
          title: "\u041A\u0412\u0410\u041D\u0422\u0422\u0415\u041B\u0415\u041A\u041E\u041C",
          to: "/",
          img: ["kvanttelekomCite", "kvanttelekomCite-page"],
          visible: true,
          tags: ["four"]
        },
        {
          description: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430 \u0438 <br/> \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",
          title: "POLAR BEAR",
          to: "/",
          img: ["polarbear", "polarbear-page"],
          visible: true,
          tags: ["three"]
        },
        {
          description: "\u0414\u0438\u0437\u0430\u0439\u043D \u043F\u0435\u0447\u0430\u0442\u043D\u043E\u0439 <br/> \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438",
          title: "\u0410\u0412\u0422\u041E\u041C\u041E\u0419\u041A\u0410 \u21161",
          to: "/",
          img: ["automoika1", "automoika1-page"],
          visible: true,
          tags: ["one"]
        },
        {
          description: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 3D \u043C\u043E\u0434\u0435\u043B\u0435\u0439 <br/> \u0434\u043B\u044F \u0441\u0430\u0439\u0442\u0430",
          title: "3D \u0421\u041B\u041E\u0418",
          to: "/",
          img: ["3Dsloi", "3Dsloi-page"],
          visible: true,
          tags: ["two"]
        }
      ],
      tags: [
        { title: "\u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B", tag: "all" },
        { title: "\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D", tag: "one" },
        { title: "3D \u0434\u0438\u0437\u0430\u0439\u043D", tag: "two" },
        { title: "\u0411\u0440\u0435\u043D\u0434\u0438\u043D\u0433", tag: "three" },
        { title: "WEB \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430", tag: "four" },
        { title: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430", tag: "five" }
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
  _push(ssrRenderComponent(_component_TitlePage, { title: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B" }, null, _parent));
  _push(`<div class="content__wrapper" data-v-7907ccd9><p class="works__title" data-v-7907ccd9>\u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435, \u0447\u0442\u043E \u0443\u043C\u0435\u0435\u043C</p><div class="works-nav" data-v-7907ccd9><div class="${ssrRenderClass([{ "works-nav__list--open": $data.dropdown }, "works-nav__list"])}" data-v-7907ccd9><!--[-->`);
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
    _push(`<div class="works-example__header" data-v-7907ccd9><picture data-v-7907ccd9><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${work.img[0]}/Mobile/${work.img[1]}.webp`)} type="image/webp" data-v-7907ccd9><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${work.img[0]}/PC/${work.img[1]}.webp`)} type="image/webp" data-v-7907ccd9><source${ssrRenderAttr("srcset", `/img/${work.img[0]}/JPG/${work.img[1]}.png`)} type="image/png" data-v-7907ccd9><img${ssrRenderAttr("srcset", `/img/${work.img[0]}/PC/${work.img[1]}.webp`)} alt="\u041F\u0440\u0438\u043C\u0435\u0440 \u0440\u0430\u0431\u043E\u0442\u044B" type="image/webp" class="works-example__img" data-v-7907ccd9></picture><div class="works-example__background" data-v-7907ccd9></div></div><div class="works-example__info" data-v-7907ccd9>`);
    if (work.to !== "/") {
      _push(`<h3 class="works-example__title" data-v-7907ccd9>${ssrInterpolate(work.title)}</h3>`);
    } else {
      _push(`<!---->`);
    }
    if (work.to === "/") {
      _push(`<h3 class="works-example__title works-example__title--dev" data-v-7907ccd9> \u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 </h3>`);
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

export { works as default };
//# sourceMappingURL=works-1dd87d45.mjs.map
