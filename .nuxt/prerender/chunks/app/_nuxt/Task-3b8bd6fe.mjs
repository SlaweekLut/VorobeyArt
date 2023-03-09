import { mergeProps, useSSRContext, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, resolveComponent } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, a as __nuxt_component_0 } from '../server.mjs';
import axios from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/axios/index.js';
import { nanoid } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/nanoid/index.js';
import { T as TitlePage } from './Title-f65f35b3.mjs';

const _sfc_main$5 = {
  name: "GalleryTemplate",
  props: {
    settings: {
      default: {
        type: "",
        images: [],
        border: "",
        column: {
          position: "Left",
          width: "50"
        },
        // column: {
        // 	position: 'Left',
        // },
        columnImages: [{ url: "", height: "" }],
        gap: "",
        padding: ""
      }
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["gallery", {
      "gallery--one": $props.settings.type === "OneImage",
      "gallery--two": $props.settings.type === "TwoImage",
      "gallery--three": $props.settings.type === "ThreeImage",
      "gallery--three gallery--col": $props.settings.type === "ThreeImageCol",
      "gallery--four": $props.settings.type === "FourImage",
      "gallery--fourCollage": $props.settings.type === "FourImageCollage",
      "gallery--collage": $props.settings.type === "ThreeImageCollage",
      "gallery--izenbot": $props.settings.mod === "izenbot",
      "gallery--mobdebut": $props.settings.mod === "mobdebut"
    }],
    style: `gap: ${$props.settings.gap}px; padding: ${$props.settings.padding}`
  }, _attrs))} data-v-b5a6470f>`);
  if ($props.settings.type === "ThreeImageCollage" && $props.settings.column.position === "Left") {
    _push(`<div class="gallery__column" style="${ssrRenderStyle(`width: ${$props.settings.column.width}%; gap: ${$props.settings.gap}px`)}" data-v-b5a6470f><!--[-->`);
    ssrRenderList($props.settings.columnImages, (image) => {
      _push(`<div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image gallery__image--column"])}" style="${ssrRenderStyle(`height: ${image.height}%`)}" data-v-b5a6470f><picture data-v-b5a6470f><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${image.url[0]}/Mobile${image.url[1]}.webp`)} type="image/webp" data-v-b5a6470f><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${image.url[0]}/PC${image.url[1]}.webp`)} type="image/webp" data-v-b5a6470f><source${ssrRenderAttr("srcset", `/img/${image.url[0]}/JPG${image.url[1]}.jpg`)} type="image/jpeg" data-v-b5a6470f><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${image.url[0]}/PC${image.url[1]}.webp`)}${ssrRenderAttr("alt", image.url)} type="image/webp" data-v-b5a6470f></picture></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($props.settings.images, (image) => {
    _push(`<div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" style="${ssrRenderStyle(`width: ${image.width}%`)}" data-v-b5a6470f><picture data-v-b5a6470f><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${image.url[0]}/Mobile${image.url[1]}.webp`)} type="image/webp" data-v-b5a6470f><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${image.url[0]}/PC${image.url[1]}.webp`)} type="image/webp" data-v-b5a6470f><source${ssrRenderAttr("srcset", `/img/${image.url[0]}/JPG${image.url[1]}.jpg`)} type="image/jpeg" data-v-b5a6470f><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${image.url[0]}/PC${image.url[1]}.webp`)}${ssrRenderAttr("alt", image.url)} type="image/webp" data-v-b5a6470f></picture></div>`);
  });
  _push(`<!--]-->`);
  if ($props.settings.type === "ThreeImageCollage" && $props.settings.column.position === "Right") {
    _push(`<div class="gallery__column" style="${ssrRenderStyle(`width: ${$props.settings.column.width}%; gap: ${$props.settings.gap}px`)}" data-v-b5a6470f><!--[-->`);
    ssrRenderList($props.settings.columnImages, (image) => {
      _push(`<div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image gallery__image--column"])}" style="${ssrRenderStyle(`height: ${image.height}%`)}" data-v-b5a6470f><picture data-v-b5a6470f><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${image.url[0]}/Mobile${image.url[1]}.webp`)} type="image/webp" data-v-b5a6470f><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${image.url[0]}/PC${image.url[1]}.webp`)} type="image/webp" data-v-b5a6470f><source${ssrRenderAttr("srcset", `/img/${image.url[0]}/JPG${image.url[1]}.jpg`)} type="image/jpeg" data-v-b5a6470f><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${image.url[0]}/PC${image.url[1]}.webp`)}${ssrRenderAttr("alt", image.url)} type="image/webp" data-v-b5a6470f></picture></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cases/Gallery.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const GalleryTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-b5a6470f"]]);
const _sfc_main$4 = {
  name: "TitleTemplate",
  props: {
    settings: {
      type: Object,
      default: () => {
        return {
          modifer: "",
          type: "",
          title: {
            title: "",
            fontSize: ""
          },
          text: "",
          underTitleLine: false,
          subtitle: "",
          number: {
            number: "",
            fontSize: ""
          },
          padding: "0"
        };
      }
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["title", [
      `title--${$props.settings.type}`,
      `title--${$props.settings.modifer}`,
      `title--${$props.settings.padding}`
    ]]
  }, _attrs))} data-v-d62ba864><div class="title__wrapper" data-v-d62ba864><div class="title__row" data-v-d62ba864>`);
  if (!$props.settings.title.separator) {
    _push(`<h2 class="${ssrRenderClass([`title__title--${$props.settings.title.fontSize}`, "title__title"])}" data-v-d62ba864>`);
    if ($props.settings.number) {
      _push(`<span class="title__number" style="${ssrRenderStyle(`font-size: ${$props.settings.number.fontSize}`)}" data-v-d62ba864>${ssrInterpolate($props.settings.number.number)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<span data-v-d62ba864>${$props.settings.title.title}</span></h2>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.settings.text) {
    _push(`<p class="title__text" data-v-d62ba864>${$props.settings.text}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.settings.underTitleLine) {
    _push(`<hr class="title__underline" data-v-d62ba864>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p class="title__subtitle" data-v-d62ba864><span class="title__subtitle-wrapper" data-v-d62ba864>${ssrInterpolate($props.settings.subtitle)}</span></p></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cases/Title.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TitleTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-d62ba864"]]);
const _sfc_main$3 = {
  name: "FooterTemplate",
  props: {
    settings: {
      default: {
        background: [],
        title: "",
        next: ""
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: `/${$props.settings.next}`,
    class: "footer"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<picture data-v-6d9bb1f3${_scopeId}><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.settings.background[0]}/Mobile/${$props.settings.background[1]}.webp`)} type="image/webp" data-v-6d9bb1f3${_scopeId}><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.settings.background[0]}/PC/${$props.settings.background[1]}.webp`)} type="image/webp" data-v-6d9bb1f3${_scopeId}><source${ssrRenderAttr("srcset", `/img/${$props.settings.background[0]}/JPG/${$props.settings.background[1]}.png`)} type="image/png" data-v-6d9bb1f3${_scopeId}><img${ssrRenderAttr("srcset", `/img/${$props.settings.background[0]}/PC/${$props.settings.background[1]}.webp`)}${ssrRenderAttr("alt", $props.settings.title)} type="image/webp" class="footer__background" data-v-6d9bb1f3${_scopeId}></picture><div class="footer__background-white" data-v-6d9bb1f3${_scopeId}></div><div class="footer__text" data-v-6d9bb1f3${_scopeId}><p class="footer__suptitle" data-v-6d9bb1f3${_scopeId}> \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6d9bb1f3${_scopeId}><path d="M1.12753 14.377C0.645679 14.8589 0.645679 15.6401 1.12753 16.122C1.60938 16.6038 2.39062 16.6038 2.87247 16.122L1.12753 14.377ZM16.4834 2C16.4834 1.31856 15.931 0.766142 15.2495 0.766142L4.14479 0.766142C3.46335 0.766142 2.91093 1.31856 2.91093 2C2.91093 2.68144 3.46335 3.23386 4.14479 3.23386L14.0157 3.23386L14.0157 13.1047C14.0157 13.7862 14.5681 14.3386 15.2495 14.3386C15.931 14.3386 16.4834 13.7862 16.4834 13.1047L16.4834 2ZM2.87247 16.122L16.122 2.87247L14.377 1.12753L1.12753 14.377L2.87247 16.122Z" fill="black" data-v-6d9bb1f3${_scopeId}></path></svg></p><h2 class="footer__title" data-v-6d9bb1f3${_scopeId}>${ssrInterpolate($props.settings.title)}</h2></div>`);
      } else {
        return [
          createVNode("picture", null, [
            createVNode("source", {
              media: "(max-width: 768px)",
              srcset: `/img/${$props.settings.background[0]}/Mobile/${$props.settings.background[1]}.webp`,
              type: "image/webp"
            }, null, 8, ["srcset"]),
            createVNode("source", {
              media: "(min-width: 769px)",
              srcset: `/img/${$props.settings.background[0]}/PC/${$props.settings.background[1]}.webp`,
              type: "image/webp"
            }, null, 8, ["srcset"]),
            createVNode("source", {
              srcset: `/img/${$props.settings.background[0]}/JPG/${$props.settings.background[1]}.png`,
              type: "image/png"
            }, null, 8, ["srcset"]),
            createVNode("img", {
              srcset: `/img/${$props.settings.background[0]}/PC/${$props.settings.background[1]}.webp`,
              alt: $props.settings.title,
              type: "image/webp",
              class: "footer__background"
            }, null, 8, ["srcset", "alt"])
          ]),
          createVNode("div", { class: "footer__background-white" }),
          createVNode("div", { class: "footer__text" }, [
            createVNode("p", { class: "footer__suptitle" }, [
              createTextVNode(" \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 "),
              (openBlock(), createBlock("svg", {
                width: "17",
                height: "17",
                viewBox: "0 0 17 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M1.12753 14.377C0.645679 14.8589 0.645679 15.6401 1.12753 16.122C1.60938 16.6038 2.39062 16.6038 2.87247 16.122L1.12753 14.377ZM16.4834 2C16.4834 1.31856 15.931 0.766142 15.2495 0.766142L4.14479 0.766142C3.46335 0.766142 2.91093 1.31856 2.91093 2C2.91093 2.68144 3.46335 3.23386 4.14479 3.23386L14.0157 3.23386L14.0157 13.1047C14.0157 13.7862 14.5681 14.3386 15.2495 14.3386C15.931 14.3386 16.4834 13.7862 16.4834 13.1047L16.4834 2ZM2.87247 16.122L16.122 2.87247L14.377 1.12753L1.12753 14.377L2.87247 16.122Z",
                  fill: "black"
                })
              ]))
            ]),
            createVNode("h2", { class: "footer__title" }, toDisplayString($props.settings.title), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cases/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FooterTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-6d9bb1f3"]]);
const _sfc_main$2 = {
  name: "LikeTemplate",
  props: {
    title: {
      type: String,
      default: "like"
    }
  },
  data() {
    return {
      likesCount: 0,
      isLiked: false,
      sending: false,
      pressed: false,
      clientId: ""
    };
  },
  async mounted() {
    if (!localStorage.getItem(`vorobeyArtClientId-${this.$props.title}`)) {
      this.clientId = nanoid();
      localStorage.setItem(
        `vorobeyArtClientId-${this.$props.title}`,
        this.clientId
      );
    } else {
      this.clientId = localStorage.getItem(
        `vorobeyArtClientId-${this.$props.title}`
      );
    }
    await this.getLikes();
  },
  methods: {
    async update(toggle = false) {
      this.sending = true;
      try {
        const { data } = await axios.post("/like-handler.php", {
          id: this.clientId,
          toggle
        });
        this.likesCount = data.likesCount;
        this.isLiked = data.isLiked;
      } catch (error) {
        console.log("\u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043B\u0430\u0439\u043A\u043E\u0432", error);
      } finally {
        this.sending = false;
      }
    },
    async getLikes() {
      await this.update();
    },
    async toggleLike() {
      this.markButtonAsPressed();
      if (!this.sending) {
        await this.update(true);
      }
    },
    markButtonAsPressed() {
      if (!this.pressed) {
        this.pressed = true;
        setTimeout(() => {
          this.pressed = false;
        }, 300);
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "like" }, _attrs))} data-v-c153fa7d><p class="like__title" data-v-c153fa7d><span data-v-c153fa7d>CREATIVE</span></p><div class="like-button" data-v-c153fa7d><div class="like-button__info" data-v-c153fa7d><p class="like-button__title" data-v-c153fa7d>\u041F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u0430\u0441\u044C \u0440\u0430\u0431\u043E\u0442\u0430?</p><p class="like-button__subtitle" data-v-c153fa7d>\u0421\u0442\u0430\u0432\u044C \u043A\u043E\u0442\u0430!</p></div><button class="${ssrRenderClass([{ "like-button__button--pressed": $data.pressed }, "like-button__button"])}" data-v-c153fa7d><div class="like-button__img-wrapper" data-v-c153fa7d><picture data-v-c153fa7d><source${ssrRenderAttr("srcset", `/img/like/Cat.png`)} type="image/png" data-v-c153fa7d><img${ssrRenderAttr("srcset", `/img/like/Cat.webp`)} alt="\u041F\u043E\u0441\u0442\u0430\u0432\u044C \u043A\u043E\u0442\u0438\u043A\u0443 \u043B\u0430\u0439\u043A, \u0435\u0441\u043B\u0438 \u0442\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u0430\u0441\u044C \u0440\u0430\u0431\u043E\u0442\u0430" type="image/webp" class="like-button__img" data-v-c153fa7d></picture><picture data-v-c153fa7d><source${ssrRenderAttr("srcset", `/img/like/Cat_Shadow.png`)} type="image/png" data-v-c153fa7d><img${ssrRenderAttr("srcset", `/img/like/Cat_Shadow.webp`)} alt="\u041F\u043E\u0441\u0442\u0430\u0432\u044C \u043A\u043E\u0442\u0438\u043A\u0443 \u043B\u0430\u0439\u043A, \u0435\u0441\u043B\u0438 \u0442\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u0430\u0441\u044C \u0440\u0430\u0431\u043E\u0442\u0430" type="image/webp" class="like-button__img like-button__img--shadow" data-v-c153fa7d></picture></div><span class="like-button__decor like-button__decor--1" data-v-c153fa7d>!</span><span class="like-button__decor like-button__decor--2" data-v-c153fa7d>*</span><span class="like-button__decor like-button__decor--3" data-v-c153fa7d>?</span><span class="like-button__decor like-button__decor--4" data-v-c153fa7d>#</span><span class="like-button__decor like-button__decor--5" data-v-c153fa7d><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c153fa7d><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0784 1.33431C14.101 0.769979 12.8511 1.10488 12.2868 2.08232L3.79698 16.7871C3.23265 17.7645 3.56755 19.0144 4.54499 19.5787L10.5256 23.0316L10.4127 23.0798L11.2275 29.843L17.492 27.1671L17.4773 27.0452L23.46 30.4993C24.4375 31.0637 25.6873 30.7288 26.2517 29.7513L34.7415 15.0465C35.3058 14.0691 34.9709 12.8192 33.9934 12.2549L15.0784 1.33431Z" fill="#0181C8" data-v-c153fa7d></path><path d="M21.2079 12.5602C22.2154 12.2282 23.4033 12.3358 24.3801 12.8997C26.1091 13.898 26.7196 15.9779 25.7676 17.6268C24.6002 19.6488 21.7432 20.1966 17.4147 21.0264L17.404 21.0284L16.1821 21.2652L15.773 20.0939L15.7619 20.0619C14.3236 15.9052 13.3748 13.1632 14.5402 11.1447C15.4922 9.49577 17.5987 8.98453 19.3278 9.98277C20.3045 10.5467 20.9916 11.5216 21.2079 12.5602Z" fill="white" data-v-c153fa7d></path></svg></span><span class="like-button__counter" data-v-c153fa7d><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c153fa7d><path d="M10.3312 2.82915C11.3795 1.63654 12.9855 0.881836 14.6589 0.881836C17.621 0.881836 19.9484 3.13662 19.9484 6.00635C19.9484 9.52539 16.6839 12.3934 11.7379 16.7385L11.7257 16.7492L10.3312 17.9791L8.93669 16.7585L8.89876 16.7251C3.96713 12.3833 0.713989 9.51928 0.713989 6.00635C0.713989 3.13662 3.04135 0.881836 6.00345 0.881836C7.67684 0.881836 9.28291 1.63654 10.3312 2.82915Z"${ssrRenderAttr("fill", $data.isLiked ? "white" : "#4DA7D8")} data-v-c153fa7d></path></svg> ${ssrInterpolate($data.likesCount)}</span></button></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cases/Like.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LikeTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c153fa7d"]]);
const _sfc_main$1 = {
  name: "IntroTemplate",
  props: {
    intro: {
      icon: "",
      img: [],
      logo: "",
      title: "",
      description: "",
      tags: ""
    }
  },
  mounted() {
    let images = document.querySelectorAll(".intro__img");
    window.addEventListener("scroll", () => {
      let h = document.documentElement, b = document.body, st = "scrollTop";
      let percent = (h[st] || b[st]) / (8e3 - h.clientHeight);
      let scale = 1 + percent;
      images.forEach((image) => {
        image.style.scale = scale;
      });
    });
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><img${ssrRenderAttr("src", `/img/${$props.intro.icon}`)}${ssrRenderAttr("alt", $props.intro.title)} class="intro__icon" data-v-43229c4c><div class="intro__wrapper" data-v-43229c4c><picture data-v-43229c4c><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.intro.img[0]}/Mobile/${$props.intro.img[1]}.webp`)} type="image/webp" data-v-43229c4c><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.intro.img[0]}/PC/${$props.intro.img[1]}.webp`)} type="image/webp" data-v-43229c4c><source${ssrRenderAttr("srcset", `/img/${$props.intro.img[0]}/JPG/${$props.intro.img[1]}.png`)} type="image/png" data-v-43229c4c><img${ssrRenderAttr("srcset", `/img/${$props.intro.img[0]}/PC/${$props.intro.img[1]}.webp`)}${ssrRenderAttr("alt", $props.intro.title)} type="image/webp" class="intro__img" data-v-43229c4c></picture><div class="intro" data-v-43229c4c><div class="intro__column" data-v-43229c4c><img${ssrRenderAttr("src", `/img/${$props.intro.logo}`)}${ssrRenderAttr("alt", $props.intro.title)} class="intro__logo" data-v-43229c4c><p class="intro__text" data-v-43229c4c><strong data-v-43229c4c>${ssrInterpolate($props.intro.title)}\xA0</strong><span data-v-43229c4c>${$props.intro.description}</span></p><h4 class="intro__title" data-v-43229c4c>\u041F\u0440\u043E\u0435\u043A\u0442</h4><p class="intro__list" data-v-43229c4c>${ssrInterpolate($props.intro.tags)}</p></div></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cases/Intro.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IntroTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-43229c4c"]]);
const _sfc_main = {
  name: "TaskTemplate",
  components: {
    TitleTemplate,
    TitlePage
  },
  props: {
    task: {
      default: {
        titles: {
          modifer: "",
          type: "",
          title: {
            title: "",
            fontSize: "",
            separator: "",
            titleFirst: "",
            titleSecond: ""
          },
          underTitleLine: false,
          subtitle: "",
          number: {
            number: "",
            fontSize: ""
          },
          padding: "0"
        },
        title: ""
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TitlePage = resolveComponent("TitlePage");
  const _component_TitleTemplate = resolveComponent("TitleTemplate");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "task" }, _attrs))} data-v-68026717>`);
  _push(ssrRenderComponent(_component_TitlePage, {
    title: $props.task.title,
    class: "title-aside--case"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TitleTemplate, {
    settings: $props.task.titles
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cases/Task.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TaskTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-68026717"]]);

export { FooterTemplate as F, GalleryTemplate as G, IntroTemplate as I, LikeTemplate as L, TitleTemplate as T, TaskTemplate as a };
//# sourceMappingURL=Task-3b8bd6fe.mjs.map
