import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _imports_0 = "" + __publicAssetsURL("img/Logo-404.svg");
const _404_vue_vue_type_style_index_0_scoped_c79d9988_lang = "";
const _sfc_main = {
  name: "ErrorPage"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "error" }, _attrs))} data-v-c79d9988><img${ssrRenderAttr("src", _imports_0)} alt="ERROR" class="error__img" data-v-c79d9988><div class="error__column" data-v-c79d9988><h1 class="error__title" data-v-c79d9988>404</h1><h2 class="error__subtitle" data-v-c79d9988>Упс! Страница не найдена!</h2><hr data-v-c79d9988><p class="error__text" data-v-c79d9988> Страница, которую вы запрашиваете, не существует или она была перемещена. Начните с главной страницы </p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c79d9988"]]);
export {
  _404 as default
};
//# sourceMappingURL=404-07b8ae37.js.map
