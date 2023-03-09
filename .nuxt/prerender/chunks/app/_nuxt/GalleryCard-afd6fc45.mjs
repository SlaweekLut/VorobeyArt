import { mergeProps, useSSRContext } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  name: "GalleryCardTemplate",
  props: {
    settings: {
      default: {
        type: "",
        images: [],
        background: "#F9F9F9"
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["gallery", {
      "gallery--one": $props.settings.type === "OneImage",
      "gallery--two": $props.settings.type === "TwoImage",
      "gallery--three": $props.settings.type === "ThreeImage",
      "gallery--four": $props.settings.type === "FourImage"
    }],
    style: { background: $props.settings.background }
  }, _attrs))} data-v-79186a47>`);
  if ($props.settings.type === "OneImage" || $props.settings.type === "TwoImage" || $props.settings.type === "ThreeImage") {
    _push(`<div class="${ssrRenderClass([[
      `gallery__wrapper--${$props.settings.type}`,
      `gallery__wrapper--${$props.settings.mod}`
    ], "gallery__wrapper"])}" style="${ssrRenderStyle({ gap: $props.settings.gap })}" data-v-79186a47><!--[-->`);
    ssrRenderList($props.settings.images, (image) => {
      _push(`<div class="${ssrRenderClass([[
        `gallery__image--border-${$props.settings.border}`,
        `gallery__shadow--${$props.settings.shadow}`
      ], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${image.url[0]}/Mobile${image.url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${image.url[0]}/PC${image.url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${image.url[0]}/JPG${image.url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img" style="${ssrRenderStyle({ "border-radius": $props.settings.borderRadius })}"${ssrRenderAttr("srcset", `/img/${image.url[0]}/PC${image.url[1]}.webp`)}${ssrRenderAttr("alt", image.url)} type="image/webp" data-v-79186a47></picture></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.settings.type === "SixThreeImage") {
    _push(`<div class="gallery__wrapper gallery__wrapper--SixThreeImage" data-v-79186a47><div class="gallery__column" data-v-79186a47><!--[-->`);
    ssrRenderList(2, (n) => {
      _push(`<div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n - 1].url[0]}/Mobile${$props.settings.images[n - 1].url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n - 1].url[0]}/PC${$props.settings.images[n - 1].url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${$props.settings.images[n - 1].url[0]}/JPG${$props.settings.images[n - 1].url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n - 1].url[0]}/PC${$props.settings.images[n - 1].url[1]}.webp`)}${ssrRenderAttr("alt", $props.settings.images[n - 1].url)} type="image/webp" data-v-79186a47></picture></div>`);
    });
    _push(`<!--]--></div><div class="gallery__column" data-v-79186a47><!--[-->`);
    ssrRenderList(2, (n) => {
      _push(`<div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 1].url[0]}/Mobile${$props.settings.images[n + 1].url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 1].url[0]}/PC${$props.settings.images[n + 1].url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 1].url[0]}/JPG${$props.settings.images[n + 1].url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 1].url[0]}/PC${$props.settings.images[n + 1].url[1]}.webp`)}${ssrRenderAttr("alt", $props.settings.images[n + 1].url)} type="image/webp" data-v-79186a47></picture></div>`);
    });
    _push(`<!--]--></div><div class="gallery__column" data-v-79186a47><!--[-->`);
    ssrRenderList(2, (n) => {
      _push(`<div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 3].url[0]}/Mobile${$props.settings.images[n + 3].url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 3].url[0]}/PC${$props.settings.images[n + 3].url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 3].url[0]}/JPG${$props.settings.images[n + 3].url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 3].url[0]}/PC${$props.settings.images[n + 3].url[1]}.webp`)}${ssrRenderAttr("alt", $props.settings.images[n + 3].url)} type="image/webp" data-v-79186a47></picture></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.settings.type === "SixTwoImage") {
    _push(`<div class="gallery__wrapper gallery__wrapper--SixTwoImage" data-v-79186a47><div class="gallery__row" data-v-79186a47><!--[-->`);
    ssrRenderList(3, (n) => {
      _push(`<div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n - 1].url[0]}/Mobile${$props.settings.images[n - 1].url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n - 1].url[0]}/PC${$props.settings.images[n - 1].url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${$props.settings.images[n - 1].url[0]}/JPG${$props.settings.images[n - 1].url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n - 1].url[0]}/PC${$props.settings.images[n - 1].url[1]}.webp`)}${ssrRenderAttr("alt", $props.settings.images[n - 1].url)} type="image/webp" data-v-79186a47></picture></div>`);
    });
    _push(`<!--]--></div><div class="gallery__row" data-v-79186a47><!--[-->`);
    ssrRenderList(3, (n) => {
      _push(`<div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 2].url[0]}/Mobile${$props.settings.images[n + 2].url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 2].url[0]}/PC${$props.settings.images[n + 2].url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 2].url[0]}/JPG${$props.settings.images[n + 2].url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 2].url[0]}/PC${$props.settings.images[n + 2].url[1]}.webp`)}${ssrRenderAttr("alt", $props.settings.images[n + 2].url)} type="image/webp" data-v-79186a47></picture></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.settings.type === "SixImage") {
    _push(`<div class="gallery__wrapper gallery__wrapper--SixImage" data-v-79186a47><!--[-->`);
    ssrRenderList($props.settings.images, (image) => {
      _push(`<div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${image.url[0]}/Mobile${image.url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${image.url[0]}/PC${image.url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${image.url[0]}/JPG${image.url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${image.url[0]}/PC${image.url[1]}.webp`)}${ssrRenderAttr("alt", image.url)} type="image/webp" data-v-79186a47></picture></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.settings.type === "FourImage") {
    _push(`<div class="gallery__wrapper gallery__wrapper--FourImage" data-v-79186a47><div class="gallery__col" data-v-79186a47><div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[0].url[0]}/Mobile${$props.settings.images[0].url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[0].url[0]}/PC${$props.settings.images[0].url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${$props.settings.images[0].url[0]}/JPG${$props.settings.images[0].url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${$props.settings.images[0].url[0]}/PC${$props.settings.images[0].url[1]}.webp`)}${ssrRenderAttr("alt", $props.settings.images[0].url)} type="image/webp" data-v-79186a47></picture></div><div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[1].url[0]}/Mobile${$props.settings.images[1].url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[1].url[0]}/PC${$props.settings.images[1].url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${$props.settings.images[1].url[0]}/JPG${$props.settings.images[1].url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${$props.settings.images[1].url[0]}/PC${$props.settings.images[1].url[1]}.webp`)}${ssrRenderAttr("alt", $props.settings.images[1].url)} type="image/webp" data-v-79186a47></picture></div></div><div class="gallery__col" data-v-79186a47><div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[2].url[0]}/Mobile${$props.settings.images[2].url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[2].url[0]}/PC${$props.settings.images[2].url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${$props.settings.images[2].url[0]}/JPG${$props.settings.images[2].url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${$props.settings.images[2].url[0]}/PC${$props.settings.images[2].url[1]}.webp`)}${ssrRenderAttr("alt", $props.settings.images[2].url)} type="image/webp" data-v-79186a47></picture></div><div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[3].url[0]}/Mobile${$props.settings.images[3].url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[3].url[0]}/PC${$props.settings.images[3].url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${$props.settings.images[3].url[0]}/JPG${$props.settings.images[3].url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${$props.settings.images[3].url[0]}/PC${$props.settings.images[3].url[1]}.webp`)}${ssrRenderAttr("alt", $props.settings.images[3].url)} type="image/webp" data-v-79186a47></picture></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.settings.type === "EightImage") {
    _push(`<div class="gallery__wrapper gallery__wrapper--EightImage" data-v-79186a47><div class="gallery__grid" data-v-79186a47><!--[-->`);
    ssrRenderList(4, (n) => {
      _push(`<div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n - 1].url[0]}/Mobile${$props.settings.images[n - 1].url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n - 1].url[0]}/PC${$props.settings.images[n - 1].url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${$props.settings.images[n - 1].url[0]}/JPG${$props.settings.images[n - 1].url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n - 1].url[0]}/PC${$props.settings.images[n - 1].url[1]}.webp`)}${ssrRenderAttr("alt", $props.settings.images[n - 1].url)} type="image/webp" data-v-79186a47></picture></div>`);
    });
    _push(`<!--]--></div><div class="gallery__grid" data-v-79186a47><!--[-->`);
    ssrRenderList(4, (n) => {
      _push(`<div class="${ssrRenderClass([[`gallery__image--border-${$props.settings.border}`], "gallery__image"])}" data-v-79186a47><picture data-v-79186a47><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 3].url[0]}/Mobile${$props.settings.images[n + 3].url[1]}.webp`)} type="image/webp" data-v-79186a47><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 3].url[0]}/PC${$props.settings.images[n + 3].url[1]}.webp`)} type="image/webp" data-v-79186a47><source${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 3].url[0]}/JPG${$props.settings.images[n + 3].url[1]}.jpg`)} type="image/jpeg" data-v-79186a47><img class="gallery__img"${ssrRenderAttr("srcset", `/img/${$props.settings.images[n + 3].url[0]}/PC${$props.settings.images[n + 3].url[1]}.webp`)}${ssrRenderAttr("alt", $props.settings.images[n + 3].url)} type="image/webp" data-v-79186a47></picture></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cases/GalleryCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GalleryCardTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-79186a47"]]);

export { GalleryCardTemplate as G };
//# sourceMappingURL=GalleryCard-afd6fc45.mjs.map
