import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const Title_vue_vue_type_style_index_0_scoped_48b04053_lang = "";
const _sfc_main = {
  name: "TitlePage",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${ssrRenderAttrs(mergeProps({ class: "title-aside" }, _attrs))} data-v-48b04053>${ssrInterpolate($props.title)}</h1>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Title.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TitlePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-48b04053"]]);
export {
  TitlePage as T
};
//# sourceMappingURL=Title-f65f35b3.js.map
