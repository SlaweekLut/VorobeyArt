import { reactive, getCurrentInstance, version, toRef, isRef, inject, nextTick, defineComponent, computed, ref, h, resolveComponent, shallowRef, isReadonly, Suspense, Transition, provide, withCtx, createVNode, createTextVNode, useSSRContext, mergeProps, resolveDynamicComponent, openBlock, createBlock, onErrorCaptured, onServerPrefetch, unref, defineAsyncComponent, createApp } from "vue";
import { $fetch } from "ofetch";
import { useRuntimeConfig as useRuntimeConfig$1 } from "#internal/nitro";
import { createHooks } from "hookable";
import { getContext, executeAsync } from "unctx";
import { createHead as createHead$1, useHead } from "@unhead/vue";
import { renderDOMHead, debouncedRenderDOMHead } from "@unhead/dom";
import { renderSSRHead } from "@unhead/ssr";
import { createMemoryHistory, createRouter, RouterView } from "vue-router";
import { createError as createError$1, sendRedirect } from "h3";
import { hasProtocol, parseURL, joinURL, parseQuery, isEqual } from "ufo";
import "destr";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate, ssrRenderVNode, ssrRenderSuspense } from "vue/server-renderer";
import { defu } from "defu";
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hook("app:error", (...args) => {
    console.error("[nuxt] error caught during app initialization", ...args);
  });
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const components = {};
const components_plugin_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
function createHead(initHeadObject, options) {
  const unhead = createHead$1(options || {});
  const legacyHead = {
    unhead,
    install(app) {
      if (version.startsWith("3")) {
        app.config.globalProperties.$head = unhead;
        app.provide("usehead", unhead);
      }
    },
    use(plugin) {
      unhead.use(plugin);
    },
    resolveTags() {
      return unhead.resolveTags();
    },
    headEntries() {
      return unhead.headEntries();
    },
    headTags() {
      return unhead.resolveTags();
    },
    push(input, options2) {
      return unhead.push(input, options2);
    },
    addEntry(input, options2) {
      return unhead.push(input, options2);
    },
    addHeadObjs(input, options2) {
      return unhead.push(input, options2);
    },
    addReactiveEntry(input, options2) {
      const api = useHead(input, options2);
      if (typeof api !== "undefined")
        return api.dispose;
      return () => {
      };
    },
    removeHeadObjs() {
    },
    updateDOM(document2, force) {
      if (force)
        renderDOMHead(unhead, { document: document2 });
      else
        debouncedRenderDOMHead(unhead, { delayFn: (fn) => setTimeout(() => fn(), 50), document: document2 });
    },
    internalHooks: unhead.hooks,
    hooks: {
      "before:dom": [],
      "resolved:tags": [],
      "resolved:entries": []
    }
  };
  unhead.addHeadObjs = legacyHead.addHeadObjs;
  unhead.updateDOM = legacyHead.updateDOM;
  unhead.hooks.hook("dom:beforeRender", (ctx) => {
    for (const hook of legacyHead.hooks["before:dom"]) {
      if (hook() === false)
        ctx.shouldRender = false;
    }
  });
  if (initHeadObject)
    legacyHead.addHeadObjs(initHeadObject);
  return legacyHead;
}
version.startsWith("2.");
const appPageTransition = { "name": "page" };
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width,initial-scale=1" }, { "charset": "utf-8" }, { "name": "description", "content": "Vorobey Art – быстроразвивающаяся креативная студия веб-дизайна, специализирующаяся на разработке кооперативных стилей, веб-сайтов, брендинга и 3Д моделирования." }, { "property": "og:image", "content": "favicon/apple-touch-icon.png" }, { "property": "og:image:type", "content": "image/png" }, { "property": "og:image:width", "content": "180" }, { "property": "og:image:height", "content": "180" }, { "property": "og:image:alt", "content": "The Vorobey Art Logo" }, { "name": "msapplication-TileColor", "content": "#ffffff" }, { "name": "theme-color", "content": "#ffffff" }, { "name": "yandex-verification", "content": "317433ee872bb5f0" }], "link": [{ "rel": "icon", "type": "image/png", "sizes": "32x32", "href": "/favicon/favicon-32x32.png" }, { "rel": "icon", "type": "image/png", "sizes": "16x16", "href": "/favicon/favicon-16x16.png" }, { "rel": "apple-touch-icon", "type": "image/png", "sizes": "180x180", "href": "/favicon/apple-touch-icon.png" }, { "rel": "manifest", "href": "/favicon/site.webmanifest" }, { "rel": "mask-icon", "href": "/favicon/safari-pinned-tab.svg", "color": "#5bbad5" }], "style": [], "script": [{ "src": "https://mc.yandex.ru/metrika/tag.js", "async": true, "tagPosition": "head" }], "noscript": [], "htmlAttrs": { "lang": "ru" }, "charset": "utf-8", "viewport": "width=device-width,initial-scale=1", "title": "Vorobey Art" };
const appKeepalive = false;
const vueuse_head_plugin_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  head.push(appHead);
  nuxtApp.vueApp.use(head);
  nuxtApp._useHead = useHead;
  {
    nuxtApp.ssrContext.renderMeta = async () => {
      const meta = await renderSSRHead(head.unhead);
      return {
        ...meta,
        bodyScriptsPrepend: meta.bodyTagsOpen,
        // resolves naming difference with NuxtMeta and @vueuse/head
        bodyScripts: meta.bodyTags
      };
    };
  }
});
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function setResponseStatus(code, message) {
  const event = useRequestEvent();
  if (event) {
    event.node.res.statusCode = code;
    if (message) {
      event.node.res.statusMessage = message;
    }
  }
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      if (isProcessingMiddleware() && !isExternal) {
        setResponseStatus((options == null ? void 0 : options.redirectCode) || 302);
        return to;
      }
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const _routes = [
  {
    name: "404",
    path: "/404",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/404-07b8ae37.js").then((m) => m.default || m)
  },
  {
    name: "about",
    path: "/about",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/about-645bdfcb.js").then((m) => m.default || m)
  },
  {
    name: "aladdin",
    path: "/aladdin",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/aladdin-e5c8d83e.js").then((m) => m.default || m)
  },
  {
    name: "contacts",
    path: "/contacts",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/contacts-cd27613a.js").then((m) => m.default || m)
  },
  {
    name: "energotek",
    path: "/energotek",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/energotek-c4c947fb.js").then((m) => m.default || m)
  },
  {
    name: "energotekAR",
    path: "/energotekAR",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/energotekAR-24b0498d.js").then((m) => m.default || m)
  },
  {
    name: "flipknife",
    path: "/flipknife",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/flipknife-89f26288.js").then((m) => m.default || m)
  },
  {
    name: "genezis",
    path: "/genezis",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/genezis-69339ea7.js").then((m) => m.default || m)
  },
  {
    name: "goup",
    path: "/goup",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/goup-d9586f8e.js").then((m) => m.default || m)
  },
  {
    name: "hone",
    path: "/hone",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/hone-094e40bf.js").then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/index-e649eab5.js").then((m) => m.default || m)
  },
  {
    name: "izenbot",
    path: "/izenbot",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/izenbot-57569250.js").then((m) => m.default || m)
  },
  {
    name: "kvanttelekomBrend",
    path: "/kvanttelekomBrend",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/kvanttelekomBrend-5e39ecf0.js").then((m) => m.default || m)
  },
  {
    name: "marusya",
    path: "/marusya",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/marusya-1f066897.js").then((m) => m.default || m)
  },
  {
    name: "mobdebut",
    path: "/mobdebut",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/mobdebut-a5e19be9.js").then((m) => m.default || m)
  },
  {
    name: "motorika",
    path: "/motorika",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/motorika-8801b007.js").then((m) => m.default || m)
  },
  {
    name: "oceanview",
    path: "/oceanview",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/oceanview-5cbcdd08.js").then((m) => m.default || m)
  },
  {
    name: "ownwifi",
    path: "/ownwifi",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/ownwifi-92d35e71.js").then((m) => m.default || m)
  },
  {
    name: "pawpaw",
    path: "/pawpaw",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/pawpaw-85c06316.js").then((m) => m.default || m)
  },
  {
    name: "policy",
    path: "/policy",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/policy-22597c5c.js").then((m) => m.default || m)
  },
  {
    name: "primetravel",
    path: "/primetravel",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/primetravel-2964ec81.js").then((m) => m.default || m)
  },
  {
    name: "prozapchast",
    path: "/prozapchast",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/prozapchast-7e76c49e.js").then((m) => m.default || m)
  },
  {
    name: "services",
    path: "/services",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/services-f204f411.js").then((m) => m.default || m)
  },
  {
    name: "spicynote",
    path: "/spicynote",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/spicynote-619acfa4.js").then((m) => m.default || m)
  },
  {
    name: "tomiai",
    path: "/tomiai",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/tomiai-5cda9023.js").then((m) => m.default || m)
  },
  {
    name: "ukigassen",
    path: "/ukigassen",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/ukigassen-f1118e7d.js").then((m) => m.default || m)
  },
  {
    name: "unidance",
    path: "/unidance",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/unidance-d66cf278.js").then((m) => m.default || m)
  },
  {
    name: "wballiance",
    path: "/wballiance",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/wballiance-469b6953.js").then((m) => m.default || m)
  },
  {
    name: "works",
    path: "/works",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/works-8d9facff.js").then((m) => m.default || m)
  },
  {
    name: "ximtexp",
    path: "/ximtexp",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/ximtexp-56aa67c3.js").then((m) => m.default || m)
  },
  {
    name: "xplane",
    path: "/xplane",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/xplane-7ad14f13.js").then((m) => m.default || m)
  },
  {
    name: "zolotoaltaya",
    path: "/zolotoaltaya",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import("./_nuxt/zolotoaltaya-2fabe4ec.js").then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useNuxtApp();
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return /* @__PURE__ */ defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      const el = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom,
              rel: props.rel
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink({ componentName: "NuxtLink" });
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const inlineConfig = {};
defuFn(inlineConfig);
const check_45route_45global = defineNuxtRouteMiddleware((to, from) => {
});
const globalMiddleware = [
  validate,
  check_45route_45global
];
const namedMiddleware = {};
const router_Pg0DINazwm = defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b;
  let __temp, __restore;
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
  const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a2, _b2, _c, _d;
    if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    [__temp, __restore] = executeAsync(() => callWithNuxt(nuxtApp, showError, [error2])), await __temp, __restore();
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a2;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
      to.meta.layout = initialLayout.value;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a2 = namedMiddleware[entry2]) == null ? void 0 : _a2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusCode: 404,
            statusMessage: `Page Not Found: ${initialURL}`
          });
          await callWithNuxt(nuxtApp, showError, [error2]);
          return false;
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      await callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL, { trailingSlash: true })) {
        const event = await callWithNuxt(nuxtApp, useRequestEvent);
        const options = { redirectCode: event.node.res.statusCode !== 200 ? event.node.res.statusCode || 302 : 302 };
        await callWithNuxt(nuxtApp, navigateTo, [currentURL, options]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        // #4920, #$4982
        force: true
      });
    } catch (error2) {
      await callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const router_19BuzgFWKZ = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0 });
      }, 500);
    });
  };
});
const _plugins = [
  components_plugin_KR1HBZs4kY,
  vueuse_head_plugin_D7WGfuP1A0,
  router_Pg0DINazwm,
  router_19BuzgFWKZ
];
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = /* @__PURE__ */ defineComponent({
  name: "FragmentWrapper",
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const _imports_0 = "" + __publicAssetsURL("img/Logo-mini.svg");
const _imports_1 = "" + __publicAssetsURL("img/Logo-big.svg");
const Header_vue_vue_type_style_index_0_scoped_17413be9_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = {
  name: "HeaderPage",
  // <--- add this line
  props: {
    home: Boolean,
    pages: {
      about: Boolean,
      works: Boolean,
      contacts: Boolean,
      policy: Boolean,
      services: Boolean
    },
    curtains: String
  },
  emits: ["setCurtains", "setMenu"],
  data() {
    return {
      menu: false,
      headerScrollTop: true,
      headerScrollLogo: false
    };
  },
  mounted() {
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let delta = window.pageYOffset || document.documentElement.scrollTop;
      if (delta > lastScrollTop && this.$data.menu !== true) {
        this.$data.headerScrollTop = false;
        this.$data.menu = null;
        this.$data.headerScrollLogo = false;
      } else if (this.$data.menu !== true) {
        this.$data.menu = null;
        this.$data.headerScrollTop = true;
        if (delta > 100) {
          this.$data.headerScrollLogo = true;
        } else {
          this.$data.headerScrollLogo = false;
        }
      }
      lastScrollTop = delta <= 0 ? 0 : delta;
    });
  },
  methods: {
    clickHandle() {
      this.menu = false;
      window.scrollTo(0, 0);
      this.$emit("setCurtains", "Nothing");
      this.$emit("setMenu", true);
    },
    menuHandle() {
      console.log("click");
      this.menu = !this.menu;
      if (this.menu) {
        this.$emit("setCurtains", "Menu");
      } else {
        this.$emit("setCurtains", "Nothing");
      }
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[--><div class="header-placeholder header-placeholder--home" data-v-17413be9></div><header class="${ssrRenderClass([{
    "header--home": $props.home,
    "header--preloader": $props.curtains === "Preloader",
    "header--curtains": $props.curtains === "Curtains" || $props.curtains === "Header",
    "header--scrolling": $data.headerScrollTop,
    "header--open": $data.menu
    // 'header--nocase': pages.about || pages.works || pages.contacts || pages.policy,
  }, "header"])}" data-v-17413be9><div class="${ssrRenderClass([{
    "header__wrapper--open": $data.menu,
    "header__wrapper--line": !$props.home
  }, "header__wrapper"])}" data-v-17413be9>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: ["header-logo", { "header-logo--scroll": $data.headerScrollLogo }],
    onClick: () => {
      if ($data.menu) {
        $data.menu = false;
        _ctx.$emit("setCurtains", "Nothing");
        _ctx.$emit("setMenu", true);
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="header-logo__img"${ssrRenderAttr("src", _imports_0)} alt="On Main" data-v-17413be9${_scopeId}><span class="header-logo__crumbread" data-v-17413be9${_scopeId}></span><span class="header-logo__text" data-v-17413be9${_scopeId}>Vorobey Art</span>`);
      } else {
        return [
          createVNode("img", {
            class: "header-logo__img",
            src: _imports_0,
            alt: "On Main"
          }),
          createVNode("span", { class: "header-logo__crumbread" }),
          createVNode("span", { class: "header-logo__text" }, "Vorobey Art")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="${ssrRenderClass([{
    "nav-row--hide": $data.menu
  }, "nav-row"])}" data-v-17413be9>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "nav-row__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` О нас `);
      } else {
        return [
          createTextVNode(" О нас ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/services",
    class: "nav-row__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Услуги `);
      } else {
        return [
          createTextVNode(" Услуги ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/works",
    class: "nav-row__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Проекты `);
      } else {
        return [
          createTextVNode(" Проекты ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contacts",
    class: "nav-row__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Контакты `);
      } else {
        return [
          createTextVNode(" Контакты ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><a href="https://t.me/Vorobey_Art" class="${ssrRenderClass([{ "header-start-button--nav": $data.menu }, "header-start-button header-start-button--pc"])}" data-v-17413be9><span data-v-17413be9>Обсудить</span><div class="header-start-button__fill" data-v-17413be9></div></a><button aria-label="Menu navigation" class="${ssrRenderClass([{
    "header-menu--open": $data.menu,
    "header-menu--close": $data.menu === false
  }, "header-menu"])}" data-v-17413be9><div class="header-menu__wrapper" data-v-17413be9><span class="header-menu__element header-menu__element--1" data-v-17413be9></span><span class="header-menu__element header-menu__element--2" data-v-17413be9></span><span class="header-menu__element header-menu__element--3" data-v-17413be9></span></div></button></div></header><div class="${ssrRenderClass([{ "nav--open": $data.menu, "nav--close": $data.menu === false }, "nav"])}" data-v-17413be9><div class="nav__wrapper" data-v-17413be9><nav class="nav__nav" data-v-17413be9>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "nav__link",
    onClick: $options.clickHandle
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<sup data-v-17413be9${_scopeId}>/01</sup> О нас `);
      } else {
        return [
          createVNode("sup", null, "/01"),
          createTextVNode(" О нас ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/services",
    class: "nav__link",
    onClick: $options.clickHandle
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<sup data-v-17413be9${_scopeId}>/02</sup> Услуги `);
      } else {
        return [
          createVNode("sup", null, "/02"),
          createTextVNode(" Услуги ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/works",
    class: "nav__link",
    onClick: $options.clickHandle
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<sup data-v-17413be9${_scopeId}>/03</sup> Проекты `);
      } else {
        return [
          createVNode("sup", null, "/03"),
          createTextVNode(" Проекты ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contacts",
    class: "nav__link",
    onClick: $options.clickHandle
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<sup data-v-17413be9${_scopeId}>/04</sup> Контакты `);
      } else {
        return [
          createVNode("sup", null, "/04"),
          createTextVNode(" Контакты ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="https://t.me/Vorobey_Art" class="${ssrRenderClass([{ "header-start-button--nav": $data.menu }, "header-start-button header-start-button--mobile"])}" data-v-17413be9><span data-v-17413be9>Обсудить</span><div class="header-start-button__fill" data-v-17413be9></div></a></nav><img${ssrRenderAttr("src", _imports_1)} alt="Навигация" class="nav__logo" data-v-17413be9></div></div><!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HeaderPage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-17413be9"]]);
const Preloader_vue_vue_type_style_index_0_scoped_b9762ba2_lang = "";
const _sfc_main$4 = {
  name: "PreloaderElement"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "preloader" }, _attrs))} data-v-b9762ba2><svg class="preloader__logo" width="404" height="441" viewBox="0 0 404 441" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b9762ba2><defs data-v-b9762ba2><clipPath id="Letters-Vorobey-V" data-v-b9762ba2><path d="M94.066 137.887C93.6175 138.485 93.169 138.635 92.87 138.635C91.8235 138.635 91.5245 136.392 91.375 134.598C90.6275 113.369 90.6275 97.074 103.485 75.3965C104.232 73.9015 104.83 71.659 104.83 70.463C104.83 68.071 102.139 66.277 100.345 66.277C99.5975 66.277 98.7005 66.576 97.953 67.3235C94.365 70.762 76.2755 102.605 40.6945 102.605C29.482 102.605 20.0635 92.589 20.0635 80.4795C20.0635 65.5295 31.874 54.7655 45.329 56.709C45.927 56.41 46.226 55.812 46.226 55.214C46.226 54.7655 46.0765 54.317 45.4785 54.018C43.0865 52.3735 42.1895 51.626 36.957 51.626C21.409 51.626 12.2895 67.3235 12.2895 77.938C12.2895 92.589 24.2495 107.539 40.9935 107.539C52.804 107.539 71.342 102.007 81.508 93.486C82.2555 93.486 82.8535 94.084 82.8535 95.7285C82.8535 97.373 81.3585 103.203 80.91 115.761C80.4615 129.366 82.5545 147.306 82.5545 154.183C82.5545 156.126 82.106 158.07 80.91 159.864C79.5645 161.807 72.837 174.963 72.837 181.691C72.837 185.728 73.5845 190.213 78.219 190.213C91.076 190.213 92.4215 170.329 92.4215 155.827C92.4215 153.136 92.272 150.595 92.272 150.595C92.272 145.811 147.886 73.3035 177.188 66.1275C198.268 59.2505 198.118 59.2505 198.118 58.0545C198.118 57.7555 197.969 57.4565 197.67 57.1575C196.474 55.9615 195.278 55.214 192.736 55.214C163.733 55.214 128.9 97.074 115.594 110.977C101.84 125.329 99.5975 132.057 94.066 137.887ZM83.1525 169.88C83.1525 172.422 81.807 183.037 78.518 186.326C78.219 186.774 77.7705 186.774 77.4715 186.774C76.724 186.774 75.9765 186.475 75.827 185.728C75.6775 185.13 75.528 184.532 75.528 183.933C75.528 176.309 79.714 166.89 81.9565 166.89C83.302 166.89 83.1525 168.834 83.1525 169.88Z" data-v-b9762ba2></path></clipPath><clipPath id="Letters-Vorobey-o-1" data-v-b9762ba2><path d="M155.428 119.2C155.428 107.838 153.634 101.858 144.814 101.858C125.976 101.858 114.615 143.568 112.522 152.09C109.233 165.844 114.316 179.299 122.389 179.299C137.638 179.299 155.428 141.774 155.428 119.2ZM151.99 117.555C151.99 144.465 132.106 173.767 125.229 173.767C119.997 173.767 120.445 159.714 126.126 142.671C129.565 132.057 138.834 108.735 147.355 108.735C151.691 108.735 151.99 112.472 151.99 117.555Z" data-v-b9762ba2></path></clipPath><clipPath id="Letters-Vorobey-r" data-v-b9762ba2><path d="M157.837 156.425C161.874 156.425 163.817 158.817 165.163 161.957C168.452 169.88 168.003 175.561 176.226 178.85C178.02 179.598 180.561 179.15 181.309 177.056C181.757 175.561 179.814 174.664 178.319 173.917C176.824 173.02 175.777 171.674 175.478 169.88C174.133 160.761 171.89 158.07 169.947 156.575C168.601 155.528 169.498 154.482 170.395 153.884C170.993 153.435 171.741 153.286 172.339 152.837C185.345 148.053 196.259 132.954 196.259 120.097C196.259 103.203 184.448 102.007 170.246 102.007C166.658 101.708 164.565 102.755 163.07 106.044C163.07 106.044 147.522 155.229 143.037 167.638C141.542 171.674 141.392 178.551 145.877 178.551C149.914 178.551 150.661 175.412 151.857 171.824C153.502 166.741 154.249 164.498 155.894 159.266C156.193 158.219 156.94 156.425 157.837 156.425ZM187.588 115.761C187.588 129.216 178.468 149.847 160.976 149.847C159.93 149.847 159.631 149.249 159.631 148.502C159.631 146.11 167.704 124.432 171.591 111.874C173.086 106.791 173.983 106.193 177.272 106.193C184.598 106.193 187.887 110.379 187.588 115.761Z" data-v-b9762ba2></path></clipPath><clipPath id="Letters-Vorobey-o-2" data-v-b9762ba2><path d="M229.428 119.2C229.428 107.838 227.634 101.858 218.814 101.858C199.976 101.858 188.615 143.568 186.522 152.09C183.233 165.844 188.316 179.299 196.389 179.299C211.638 179.299 229.428 141.774 229.428 119.2ZM225.99 117.555C225.99 144.465 206.106 173.767 199.229 173.767C193.997 173.767 194.445 159.714 200.126 142.671C203.565 132.057 212.834 108.735 221.355 108.735C225.691 108.735 225.99 112.472 225.99 117.555Z" data-v-b9762ba2></path></clipPath><clipPath id="Letters-Vorobey-b" data-v-b9762ba2><path d="M244.694 154.93C249.03 150.744 264.877 141.326 268.016 122.638C270.259 108.137 259.046 99.466 246.189 100.961C243.947 101.11 242.601 102.007 241.854 103.801C241.854 103.951 217.485 171.973 216.289 175.262C215.093 179.748 219.877 180.196 223.316 180.346C236.322 180.944 246.488 178.402 248.581 165.545C249.329 161.06 247.385 156.724 244.694 154.93ZM237.219 151.043C235.724 150.146 236.92 148.352 237.219 147.306C242.9 129.665 250.375 108.137 250.674 107.539C251.272 106.044 252.618 105.745 253.963 106.642C259.794 110.23 259.196 121.293 256.804 127.721C254.262 134.748 248.133 146.558 239.462 150.744C238.864 151.043 237.967 151.342 237.219 151.043ZM240.06 165.545C239.611 172.123 234.678 175.711 230.492 175.711C229.296 176.01 228.249 174.963 228.548 173.767C228.847 171.674 229.146 170.628 232.884 161.209C233.482 159.415 234.528 159.116 236.322 159.565C238.714 160.462 240.359 162.256 240.06 165.545Z" data-v-b9762ba2></path></clipPath><clipPath id="Letters-Vorobey-e" data-v-b9762ba2><path d="M274.575 155.827C275.322 155.977 279.957 155.827 280.555 155.827C282.797 155.678 283.694 154.631 283.694 153.734C283.694 152.688 282.797 151.791 280.555 151.791C278.91 151.791 278.163 151.791 276.668 151.94C273.229 151.94 272.332 150.744 273.528 147.455C279.06 130.861 284.591 118.602 287.731 111.575C288.927 108.884 289.375 107.688 290.123 107.09C290.87 106.642 300.887 105.894 301.634 105.745C302.083 105.745 302.681 105.147 302.681 104.698C302.83 104.25 302.531 103.503 302.232 103.203C301.634 102.755 300.887 102.306 300.289 102.306C294.907 102.306 289.674 102.306 284.442 102.904C282.349 103.054 280.555 104.25 279.658 106.193C269.791 125.03 266.053 135.794 260.522 155.977C259.027 161.658 258.429 173.169 263.811 176.608C267.1 178.701 270.538 178.85 274.575 178.85C275.173 178.85 275.771 177.804 275.92 177.505C276.07 175.86 273.379 175.412 271.884 174.963C269.492 174.515 269.043 172.87 268.595 170.628C268.445 169.731 268.296 168.684 268.296 167.638C268.744 163.751 268.894 162.854 270.09 159.116C270.837 157.024 272.183 155.827 274.575 155.827Z" data-v-b9762ba2></path></clipPath><clipPath id="Letters-Vorobey-y" data-v-b9762ba2><path d="M 328 126 C 323 123 320.318 131.907 317.478 131.608 C 316.282 131.608 315.086 123.087 314.488 117.406 C 313.591 111.575 310.003 101.26 302.827 101.26 C 300.285 101.26 299.239 102.306 299.837 104.848 C 300.285 106.492 300.734 108.286 301.182 109.931 C 303.574 120.097 304.77 130.562 306.116 140.877 C 302.229 151.043 295.651 169.133 294.754 173.767 C 293.857 178.103 296.996 179.897 300.584 179.897 C 302.827 179.897 304.172 176.907 304.92 174.963 C 304.92 174.963 315.833 146.11 318.524 138.784 C 319.122 137.738 319.87 136.691 320.468 135.645 Z" data-v-b9762ba2></path></clipPath><clipPath id="Letters-Art-A" data-v-b9762ba2><path d="M267.408 193.488C266.544 190.32 260.928 186.144 257.04 186.144C253.584 186.144 247.392 191.184 238.32 190.896C227.088 190.608 216.72 188.16 203.184 188.16C183.024 188.16 172.512 198.816 172.512 210.624C172.512 220.704 178.848 226.176 187.92 226.176C192.384 226.176 199.008 221.712 200.88 217.536C203.04 212.64 202.032 211.488 197.712 209.328C196.272 208.608 194.832 208.608 194.4 210.192C192.96 215.088 190.08 218.688 185.904 218.688C180.864 218.688 176.544 216.384 176.544 209.04C176.544 199.68 185.184 192.48 203.472 192.48C217.584 192.48 229.968 197.232 244.368 195.216C241.488 199.248 196.704 254.256 192.384 259.296C190.512 261.456 189.936 261.6 187.344 260.016C181.872 256.56 187.2 252.096 181.872 246.912C181.008 246.048 179.568 246.192 178.848 247.344C174.96 253.248 180.72 261.024 185.76 263.328C188.928 264.768 187.488 265.92 185.04 269.376C174.24 284.784 156.24 304.656 142.704 304.656C136.224 304.656 128.304 299.184 128.304 290.4C128.304 281.472 133.776 274.56 142.848 271.536C143.28 271.392 143.568 271.248 143.856 270.96C145.296 270.096 145.296 268.8 144.144 267.792C141.264 265.056 136.08 265.92 132.48 267.36C127.584 269.376 121.68 275.856 121.68 288.096C121.68 299.472 129.312 310.704 143.28 310.704C160.704 310.704 188.352 274.704 193.536 267.936C194.4 266.784 195.408 266.352 196.848 266.352C216.72 266.928 231.12 256.128 226.944 268.656C222.768 281.472 220.896 300.192 230.976 307.68C231.84 308.4 233.136 308.832 234.432 309.264C235.44 309.552 239.328 309.696 238.896 308.688C238.608 307.68 238.032 306.816 237.6 305.808C230.688 293.568 236.448 280.176 239.184 269.52C239.76 267.36 240.912 266.064 243.36 266.352C243.504 266.352 243.792 266.064 243.936 265.92C244.08 264.48 244.08 264.48 243.072 262.752C242.496 261.744 242.208 260.736 242.784 259.44C251.28 237.696 266.256 205.008 266.256 205.008C267.696 201.264 268.416 197.52 267.408 193.488ZM257.472 193.776C257.184 195.072 256.752 196.512 256.176 197.808C244.368 224.448 238.608 237.552 231.12 255.408C230.4 256.992 229.392 258 227.52 257.856C219.312 257.424 216.144 260.016 201.888 261.744C201.024 261.888 200.16 261.888 198.864 261.888C198 261.888 199.008 260.016 199.296 259.584L251.568 195.072C253.008 193.344 254.736 191.904 257.328 191.76C257.472 192.48 257.616 193.2 257.472 193.776Z" data-v-b9762ba2></path></clipPath><clipPath id="Letters-Art-r" data-v-b9762ba2><path d="M253.144 272.256C257.032 272.256 258.904 274.56 260.2 277.584C263.368 285.216 262.936 290.688 270.856 293.856C272.584 294.576 275.032 294.144 275.752 292.128C276.184 290.688 274.312 289.824 272.872 289.104C271.432 288.24 270.424 286.944 270.136 285.216C268.84 276.432 266.68 273.84 264.808 272.4C263.512 271.392 264.376 270.384 265.24 269.808C265.816 269.376 266.536 269.232 267.112 268.8C279.64 264.192 290.152 249.648 290.152 237.264C290.152 220.992 278.776 219.84 265.096 219.84C261.64 219.552 259.624 220.56 258.184 223.728C258.184 223.728 243.208 271.104 238.888 283.056C237.448 286.944 237.304 293.568 241.624 293.568C245.512 293.568 246.232 290.544 247.384 287.088C248.968 282.192 249.688 280.032 251.272 274.992C251.56 273.984 252.28 272.256 253.144 272.256ZM281.8 233.088C281.8 246.048 273.016 265.92 256.168 265.92C255.16 265.92 254.872 265.344 254.872 264.624C254.872 262.32 262.648 241.44 266.392 229.344C267.832 224.448 268.696 223.872 271.864 223.872C278.92 223.872 282.088 227.904 281.8 233.088Z" data-v-b9762ba2></path></clipPath><clipPath id="Letters-Art-t" data-v-b9762ba2><path d="M300.648 224.448C303.384 224.592 305.976 224.016 302.088 233.232C302.088 233.232 287.256 274.992 282.072 289.104C280.92 292.272 282.936 293.712 285.528 293.712C288.12 293.712 290.136 291.696 290.856 289.968C291.576 288.24 292.296 286.656 292.872 284.928C304.392 249.072 309.144 237.84 310.872 233.088C311.736 230.928 312.6 228.768 313.608 226.464C314.328 224.88 315.624 224.016 317.352 223.872C318.936 223.728 320.376 223.728 321.96 223.728C322.68 223.584 323.4 223.728 324.12 223.44C324.552 223.296 325.128 222.72 325.128 222.288C325.272 221.712 324.984 221.136 324.552 220.848C323.976 220.56 323.4 220.272 322.68 220.272C321.096 220.272 319.368 220.272 317.64 220.416L294.168 221.28C293.736 221.28 293.16 221.424 293.016 221.712C292.728 222.144 292.584 222.72 292.872 223.152C293.016 223.584 293.592 223.872 294.168 223.872C296.328 224.16 298.488 224.304 300.648 224.448Z" data-v-b9762ba2></path></clipPath><clipPath id="Vorobey" data-v-b9762ba2><path d="M338.017 109.106C327.374 109.35 318.907 122.73 318.907 122.73C318.182 127.596 317.456 128.326 313.344 136.354C309.232 144.382 314.553 144.139 320.601 132.218C326.406 120.541 336.324 122.73 343.58 124.19C345.757 124.676 348.418 124.92 351.079 124.92C348.902 123.703 347.451 121.514 347.451 118.838C347.451 115.188 350.595 112.026 354.224 112.026C357.852 112.026 360.996 115.188 360.996 118.838C360.996 121.27 359.545 123.46 357.61 124.676C361.238 124.433 364.625 123.946 366.56 123.217C370.672 121.757 374.542 121.514 374.542 121.514C369.705 112.756 348.66 108.863 338.017 109.106ZM292.783 268.941C287.703 273.806 281.172 276.482 276.093 281.105C271.013 285.484 266.659 283.294 260.128 290.836C253.597 298.377 247.066 301.54 242.712 303C238.358 304.459 227.231 311.514 223.602 318.326C219.732 325.138 218.523 327.327 225.295 323.192C231.827 319.056 250.21 308.108 256.258 307.865H257.951C257.951 307.865 260.128 303 263.514 299.107C263.514 299.107 259.16 314.677 262.789 307.865C266.175 301.297 268.836 298.864 271.497 297.404C271.497 297.404 264.482 307.865 264.24 311.028C263.998 314.19 264.724 313.461 267.385 309.325C270.287 305.189 270.771 303.486 272.948 302.026C272.948 302.026 268.11 308.595 267.385 314.92C266.659 321.245 267.143 324.895 269.803 325.381C272.464 325.868 274.158 324.651 274.641 327.814C275.125 330.977 278.028 328.787 279.479 322.219C279.479 322.219 291.09 300.81 296.17 294.971C301.249 289.133 308.506 280.131 312.86 275.752C317.214 271.373 324.471 263.102 327.132 259.696C329.792 256.29 332.453 252.154 328.825 253.371C324.955 254.587 320.117 252.884 317.698 254.101C315.279 255.317 311.651 259.939 308.99 261.399C305.845 262.372 297.863 264.318 292.783 268.941ZM277.544 58.5045C277.544 58.5045 281.898 51.4494 282.382 45.6108C282.866 39.7721 283.591 32.9603 281.656 36.8527C279.479 40.7452 274.883 63.1268 277.544 58.5045ZM265.691 54.6121C266.901 50.9629 266.659 46.3406 266.417 41.7183C266.175 37.096 263.756 39.7721 261.579 44.8809C259.644 50.2331 259.886 60.9373 259.886 60.9373C260.128 73.8311 264.482 58.2612 265.691 54.6121ZM249.727 49.0167C249.001 44.6376 249.243 51.2062 248.033 53.1524C246.824 55.0986 245.131 67.7491 248.759 64.3432C248.759 64.0999 250.452 53.1524 249.727 49.0167ZM241.744 78.6967C242.228 75.2908 240.777 71.6416 238.6 78.6967C236.422 85.7517 241.744 102.781 241.744 102.781C243.437 105.701 241.26 81.8593 241.744 78.6967ZM355.917 120.541C356.884 120.541 357.852 119.567 357.852 118.594C357.852 117.378 356.884 116.648 355.917 116.648C354.949 116.648 353.982 117.621 353.982 118.594C353.982 119.567 354.949 120.541 355.917 120.541ZM307.055 40.7452C309.716 37.096 318.907 19.3367 321.326 12.5249C323.745 5.71305 318.907 9.84879 315.763 13.2547C312.618 16.6606 307.539 24.4455 304.636 30.0409C301.733 35.6363 299.798 43.6645 299.798 43.6645C297.621 54.1255 304.152 44.6376 307.055 40.7452ZM368.253 140.489C360.755 148.761 357.61 149.734 355.433 164.574C353.74 176.738 361.48 192.065 359.303 208.851C357.368 224.177 350.837 246.316 311.409 279.645C311.409 279.645 306.329 284.51 316.972 281.348C327.615 278.185 349.628 271.373 357.61 274.049C365.592 276.725 373.575 281.348 379.138 288.403C384.46 295.458 390.749 303.243 386.395 306.162C386.395 306.162 392.926 320.516 378.413 320.516C378.413 320.516 387.846 312.244 383.25 306.162C383.25 306.162 381.315 313.704 375.268 315.893C375.268 315.893 379.864 308.838 380.106 305.432C380.106 305.432 377.687 301.297 376.236 297.404C374.784 293.512 367.769 286.943 370.672 292.539C373.575 298.134 374.542 301.783 373.817 305.432C373.333 309.082 371.64 317.353 364.141 320.759C364.141 320.759 371.882 310.785 370.43 306.405C370.43 306.405 367.528 303.486 365.592 298.377C363.657 293.025 359.303 288.403 358.336 285.484C357.368 282.564 355.917 282.564 355.191 285.484C354.465 288.403 352.53 291.809 354.465 294.242C356.159 296.918 356.884 301.783 355.191 303C355.191 303 352.046 317.11 364.867 312.731C364.867 312.731 350.595 323.678 350.595 304.703C350.595 304.703 343.822 293.512 346.725 289.376C349.386 285.484 351.079 280.618 342.855 282.078C334.63 283.537 301.249 294.242 298.347 294.971C298.347 294.971 278.753 323.192 281.656 328.787C284.559 334.383 291.332 338.032 299.072 341.681C307.055 345.33 320.843 353.602 324.471 357.007C328.341 360.413 333.179 367.955 341.161 372.334C349.144 376.47 350.111 376.956 353.014 383.525C355.917 390.093 367.769 397.392 357.852 407.609C357.852 407.609 359.061 398.365 355.433 395.445C352.047 392.526 347.692 388.634 346.725 384.984C345.757 381.335 339.226 376.47 340.436 379.389C341.645 382.308 344.306 385.471 345.274 388.147C346.241 390.823 346.725 394.959 348.418 396.175C350.353 397.392 355.917 404.447 353.982 410.529C352.046 416.854 349.628 419.773 343.58 418.557C343.58 418.557 354.707 413.691 348.418 407.366C342.129 401.041 342.855 400.311 342.855 397.635C342.855 395.202 343.097 393.499 340.436 391.31C337.775 389.12 334.872 385.958 334.872 384.011C334.872 382.065 330.034 375.497 331.002 380.849C331.97 386.201 332.211 386.931 332.695 388.147C333.179 389.364 335.84 390.823 333.421 396.175C331.002 401.527 334.388 400.311 331.728 403.474C329.067 406.393 322.294 415.394 315.037 407.609C315.037 407.609 324.471 410.042 325.438 405.177C326.164 400.311 324.713 399.095 326.164 397.148C327.857 395.202 329.551 392.526 327.857 388.39C325.922 384.011 326.648 374.767 323.02 376.226C319.391 377.929 317.456 378.416 316.73 381.092C316.005 383.768 312.376 385.714 311.167 385.958C311.167 385.958 304.878 393.013 311.893 399.581C311.893 399.581 293.509 394.959 308.748 382.795C308.748 382.795 304.878 378.903 308.022 377.2C311.167 375.253 313.586 374.28 316.005 374.037C318.424 373.794 319.391 374.524 319.149 369.901C318.907 365.279 308.99 353.115 296.895 348.249C284.801 343.384 286.252 344.114 279.479 342.654C272.706 341.194 268.352 340.465 269.803 335.356C271.497 330.49 271.013 328.544 268.11 328.057C265.449 327.814 263.272 320.029 263.272 316.866C263.272 316.866 260.128 317.353 260.854 312.001C260.854 312.001 257.951 311.758 257.709 310.298C257.709 310.298 250.936 307.865 215.378 331.22L146.197 436.56C146.197 436.56 140.392 447.021 133.377 435.83C126.362 424.396 129.99 422.936 127.813 418.07C125.636 413.448 124.911 406.15 122.25 404.447C119.589 402.744 120.798 392.769 124.669 384.255C128.539 375.983 179.578 325.138 197.962 307.135C197.962 307.135 204.735 296.674 211.508 295.944C211.508 295.944 213.201 278.915 220.216 272.59C220.216 272.59 198.446 275.752 193.85 264.562C193.85 264.562 184.174 264.318 181.997 259.696C181.997 259.696 168.935 260.426 166.032 249.965C166.032 249.965 153.696 249.965 153.212 242.666C153.212 242.666 137.489 240.234 141.359 228.313C141.359 228.313 118.38 228.556 127.088 219.555C127.088 219.555 110.881 215.906 115.961 209.094C115.961 209.094 101.447 208.851 100.721 202.769C100.721 202.769 84.7567 203.742 93.4648 193.038C93.4648 193.038 56.6973 193.281 82.3378 180.874C82.3378 180.874 31.7825 176.738 50.4081 168.71L63.954 164.574C63.954 164.574 -11.9998 142.192 61.5351 147.788C61.5351 147.788 -1.59852 119.811 18.4785 122.973C38.5554 126.136 52.827 128.569 52.827 128.569C52.827 128.569 20.6555 109.593 10.7379 94.7531C0.820395 79.9131 5.90011 89.1576 22.5906 94.7531C39.2811 100.348 45.5703 102.051 45.5703 102.051C45.5703 102.051 10.0123 63.6134 5.17444 54.6121C0.336612 45.6108 -2.80797 43.178 9.0447 52.1793C21.1393 61.1806 50.65 82.8324 76.0486 94.7531C76.0486 94.7531 23.0744 53.3957 15.5758 20.0665C15.5758 20.0665 13.6406 12.5249 16.3014 15.9308C18.9622 19.3367 50.1662 46.0973 64.9216 56.0717C79.6769 66.0462 57.9067 43.9078 54.5203 37.5826C51.3757 31.2573 44.1189 14.9576 43.3933 5.46978C42.6676 -4.26137 43.6351 1.09076 45.8122 5.46978C47.9892 9.84879 68.55 37.096 81.6121 44.1511C94.6742 51.2062 83.3053 35.6363 80.8864 28.0947C78.4675 20.5531 64.1959 -11.0732 88.1431 20.7963C111.848 52.9091 150.793 79.913 158.775 84.2921C158.775 84.2921 156.356 79.1832 174.74 89.1576C193.124 99.1321 217.313 119.811 220.216 110.08C223.118 100.348 225.779 98.4022 228.198 92.3203C230.617 86.2383 237.632 68.479 242.47 65.0731C242.47 65.0731 244.405 45.3675 251.178 41.7183C251.178 41.7183 253.597 55.8285 251.178 63.3701C248.759 70.9117 248.275 81.3727 251.178 88.1845C254.081 95.2396 259.644 108.62 257.467 88.9144C255.29 69.2088 255.774 46.3406 261.337 37.5826C267.143 28.8245 266.417 26.3917 267.626 35.8796C268.836 45.3675 267.868 51.6927 265.208 60.694C262.547 69.6953 262.789 72.3714 263.514 76.0206C264.24 79.4265 265.208 98.1589 267.385 82.3458C269.562 66.776 273.19 31.014 287.22 22.0127C301.491 13.2547 287.703 21.7694 286.494 29.3111C285.285 36.6094 282.866 56.315 279.237 61.4239C275.851 66.5327 274.399 114.215 279.237 92.8068C284.075 71.3983 292.299 49.7465 296.653 39.7721C301.007 29.7976 311.409 10.3353 319.633 4.49666C327.857 -1.34203 324.955 0.117645 323.503 7.65928C322.052 15.4442 310.683 43.6645 300.524 50.2331C300.524 50.2331 290.848 98.8888 292.541 112.999C294.234 126.866 293.509 125.406 298.83 117.135C304.394 108.863 320.601 88.4278 344.306 95.4829C368.011 102.538 378.171 114.702 380.832 122.73L403.811 137.084C405.021 137.327 375.752 132.218 368.253 140.489Z" data-v-b9762ba2></path></clipPath></defs><g clip-path="url(#Vorobey)" data-v-b9762ba2><g clip-path="url(#Vorobey)" data-v-b9762ba2><path fill-rule="evenodd" clip-rule="evenodd" d="M337.169 109.106C326.526 109.35 318.06 122.73 318.06 122.73C317.334 127.596 316.608 128.326 312.496 136.354C308.384 144.382 313.706 144.139 319.753 132.218C325.558 120.541 335.476 122.73 342.733 124.19C344.91 124.676 347.57 124.92 350.231 124.92C348.054 123.703 346.603 121.514 346.603 118.838C346.603 115.188 349.748 112.026 353.376 112.026C357.004 112.026 360.149 115.188 360.149 118.838C360.149 121.27 358.697 123.46 356.762 124.676C360.391 124.433 363.777 123.946 365.712 123.217C369.824 121.757 373.695 121.514 373.695 121.514C368.857 112.756 347.812 108.863 337.169 109.106ZM291.935 268.941C286.856 273.806 280.325 276.482 275.245 281.105C270.165 285.484 265.811 283.294 259.28 290.836C252.749 298.377 246.218 301.54 241.864 303C237.51 304.459 226.383 311.514 222.755 318.326C218.884 325.138 217.675 327.327 224.448 323.192C230.979 319.056 249.363 308.108 255.41 307.865H257.103C257.103 307.865 259.28 303 262.667 299.107C262.667 299.107 258.313 314.677 261.941 307.865C265.327 301.297 267.988 298.864 270.649 297.404C270.649 297.404 263.634 307.865 263.392 311.028C263.15 314.19 263.876 313.461 266.537 309.325C269.44 305.189 269.923 303.486 272.1 302.026C272.1 302.026 267.263 308.595 266.537 314.92C265.811 321.245 266.295 324.895 268.956 325.381C271.617 325.868 273.31 324.651 273.794 327.814C274.277 330.977 277.18 328.787 278.631 322.219C278.631 322.219 290.242 300.81 295.322 294.971C300.402 289.133 307.658 280.131 312.012 275.752C316.366 271.373 323.623 263.102 326.284 259.696C328.945 256.29 331.606 252.154 327.977 253.371C324.107 254.587 319.269 252.884 316.85 254.101C314.431 255.317 310.803 259.939 308.142 261.399C304.998 262.372 297.015 264.318 291.935 268.941ZM276.696 58.5045C276.696 58.5045 281.05 51.4494 281.534 45.6108C282.018 39.7721 282.744 32.9603 280.808 36.8527C278.631 40.7452 274.036 63.1268 276.696 58.5045ZM264.844 54.6121C266.053 50.9629 265.811 46.3406 265.569 41.7183C265.327 37.096 262.909 39.7721 260.732 44.8809C258.796 50.2331 259.038 60.9373 259.038 60.9373C259.28 73.8311 263.634 58.2612 264.844 54.6121ZM248.879 49.0167C248.153 44.6376 248.395 51.2062 247.186 53.1524C245.976 55.0986 244.283 67.7491 247.911 64.3432C247.911 64.0999 249.605 53.1524 248.879 49.0167ZM240.896 78.6967C241.38 75.2908 239.929 71.6416 237.752 78.6967C235.575 85.7517 240.896 102.781 240.896 102.781C242.59 105.701 240.413 81.8593 240.896 78.6967ZM355.069 120.541C356.037 120.541 357.004 119.567 357.004 118.594C357.004 117.378 356.037 116.648 355.069 116.648C354.102 116.648 353.134 117.621 353.134 118.594C353.134 119.567 354.102 120.541 355.069 120.541ZM306.207 40.7452C308.868 37.096 318.06 19.3367 320.479 12.5249C322.898 5.71305 318.06 9.84879 314.915 13.2547C311.771 16.6606 306.691 24.4455 303.788 30.0409C300.885 35.6363 298.95 43.6645 298.95 43.6645C296.773 54.1255 303.304 44.6376 306.207 40.7452ZM367.406 140.489C359.907 148.761 356.762 149.734 354.585 164.574C352.892 176.738 360.633 192.065 358.456 208.851C356.52 224.177 349.989 246.316 310.561 279.645C310.561 279.645 305.481 284.51 316.125 281.348C326.768 278.185 348.78 271.373 356.762 274.049C364.745 276.725 372.727 281.348 378.291 288.403C383.612 295.458 389.901 303.243 385.547 306.162C385.547 306.162 392.078 320.516 377.565 320.516C377.565 320.516 386.999 312.244 382.403 306.162C382.403 306.162 380.468 313.704 374.42 315.893C374.42 315.893 379.016 308.838 379.258 305.432C379.258 305.432 376.839 301.297 375.388 297.404C373.937 293.512 366.922 286.943 369.824 292.539C372.727 298.134 373.695 301.783 372.969 305.432C372.485 309.082 370.792 317.353 363.293 320.759C363.293 320.759 371.034 310.785 369.583 306.405C369.583 306.405 366.68 303.486 364.745 298.377C362.81 293.025 358.456 288.403 357.488 285.484C356.52 282.564 355.069 282.564 354.343 285.484C353.618 288.403 351.683 291.809 353.618 294.242C355.311 296.918 356.037 301.783 354.343 303C354.343 303 351.199 317.11 364.019 312.731C364.019 312.731 349.748 323.678 349.748 304.703C349.748 304.703 342.975 293.512 345.877 289.376C348.538 285.484 350.231 280.618 342.007 282.078C333.783 283.537 300.402 294.242 297.499 294.971C297.499 294.971 277.906 323.192 280.808 328.787C283.711 334.383 290.484 338.032 298.225 341.681C306.207 345.33 319.995 353.602 323.623 357.007C327.494 360.413 332.331 367.955 340.314 372.334C348.296 376.47 349.264 376.956 352.166 383.525C355.069 390.093 366.922 397.392 357.004 407.609C357.004 407.609 358.214 398.365 354.585 395.445C351.199 392.526 346.845 388.634 345.877 384.984C344.91 381.335 338.379 376.47 339.588 379.389C340.798 382.308 343.458 385.471 344.426 388.147C345.393 390.823 345.877 394.959 347.57 396.175C349.506 397.392 355.069 404.447 353.134 410.529C351.199 416.854 348.78 419.773 342.733 418.557C342.733 418.557 353.86 413.691 347.57 407.366C341.281 401.041 342.007 400.311 342.007 397.635C342.007 395.202 342.249 393.499 339.588 391.31C336.927 389.12 334.025 385.958 334.025 384.011C334.025 382.065 329.187 375.497 330.154 380.849C331.122 386.201 331.364 386.931 331.848 388.147C332.331 389.364 334.992 390.823 332.573 396.175C330.154 401.527 333.541 400.311 330.88 403.474C328.219 406.393 321.446 415.394 314.189 407.609C314.189 407.609 323.623 410.042 324.591 405.177C325.316 400.311 323.865 399.095 325.316 397.148C327.01 395.202 328.703 392.526 327.01 388.39C325.075 384.011 325.8 374.767 322.172 376.226C318.544 377.929 316.608 378.416 315.883 381.092C315.157 383.768 311.529 385.714 310.319 385.958C310.319 385.958 304.03 393.013 311.045 399.581C311.045 399.581 292.661 394.959 307.9 382.795C307.9 382.795 304.03 378.903 307.175 377.2C310.319 375.253 312.738 374.28 315.157 374.037C317.576 373.794 318.544 374.524 318.302 369.901C318.06 365.279 308.142 353.115 296.048 348.249C283.953 343.384 285.404 344.114 278.631 342.654C271.859 341.194 267.504 340.465 268.956 335.356C270.649 330.49 270.165 328.544 267.263 328.057C264.602 327.814 262.425 320.029 262.425 316.866C262.425 316.866 259.28 317.353 260.006 312.001C260.006 312.001 257.103 311.758 256.861 310.298C256.861 310.298 250.088 307.865 214.53 331.22L145.349 436.56C145.349 436.56 139.544 447.021 132.529 435.83C125.514 424.396 129.143 422.936 126.966 418.07C124.789 413.448 124.063 406.15 121.402 404.447C118.741 402.744 119.951 392.769 123.821 384.255C127.691 375.983 178.73 325.138 197.114 307.135C197.114 307.135 203.887 296.674 210.66 295.944C210.66 295.944 212.353 278.915 219.368 272.59C219.368 272.59 197.598 275.752 193.002 264.562C193.002 264.562 183.326 264.318 181.149 259.696C181.149 259.696 168.087 260.426 165.184 249.965C165.184 249.965 152.848 249.965 152.364 242.666C152.364 242.666 136.641 240.234 140.512 228.313C140.512 228.313 117.532 228.556 126.24 219.555C126.24 219.555 110.033 215.906 115.113 209.094C115.113 209.094 100.6 208.851 99.8738 202.769C99.8738 202.769 83.909 203.742 92.6171 193.038C92.6171 193.038 55.8496 193.281 81.4901 180.874C81.4901 180.874 30.9348 176.738 49.5604 168.71L63.1064 164.574C63.1064 164.574 -12.8475 142.192 60.6874 147.788C60.6874 147.788 -2.44617 119.811 17.6308 122.973C37.7078 126.136 51.9794 128.569 51.9794 128.569C51.9794 128.569 19.8078 109.593 9.89028 94.7531C-0.0272613 79.9131 5.05246 89.1576 21.743 94.7531C38.4335 100.348 44.7226 102.051 44.7226 102.051C44.7226 102.051 9.16461 63.6134 4.32678 54.6121C-0.511044 45.6108 -3.65563 43.178 8.19704 52.1793C20.2916 61.1806 49.8023 82.8324 75.2009 94.7531C75.2009 94.7531 22.2267 53.3957 14.7281 20.0665C14.7281 20.0665 12.793 12.5249 15.4538 15.9308C18.1146 19.3367 49.3186 46.0973 64.0739 56.0717C78.8293 66.0462 57.0591 43.9078 53.6726 37.5826C50.528 31.2573 43.2713 14.9576 42.5456 5.46978C41.8199 -4.26137 42.7875 1.09076 44.9645 5.46978C47.1415 9.84879 67.7023 37.096 80.7644 44.1511C93.8266 51.2062 82.4577 35.6363 80.0387 28.0947C77.6198 20.5531 63.3483 -11.0732 87.2955 20.7963C111.001 52.9091 149.945 79.913 157.928 84.2921C157.928 84.2921 155.509 79.1832 173.893 89.1576C192.276 99.1321 216.465 119.811 219.368 110.08C222.271 100.348 224.932 98.4022 227.351 92.3203C229.769 86.2383 236.784 68.479 241.622 65.0731C241.622 65.0731 243.557 45.3675 250.33 41.7183C250.33 41.7183 252.749 55.8285 250.33 63.3701C247.911 70.9117 247.428 81.3727 250.33 88.1845C253.233 95.2396 258.796 108.62 256.619 88.9144C254.442 69.2088 254.926 46.3406 260.49 37.5826C266.295 28.8245 265.569 26.3917 266.779 35.8796C267.988 45.3675 267.021 51.6927 264.36 60.694C261.699 69.6953 261.941 72.3714 262.667 76.0206C263.392 79.4265 264.36 98.1589 266.537 82.3458C268.714 66.776 272.342 31.014 286.372 22.0127C300.644 13.2547 286.856 21.7694 285.646 29.3111C284.437 36.6094 282.018 56.315 278.39 61.4239C275.003 66.5327 273.552 114.215 278.39 92.8068C283.227 71.3983 291.452 49.7465 295.806 39.7721C300.16 29.7976 310.561 10.3353 318.785 4.49666C327.01 -1.34203 324.107 0.117645 322.656 7.65928C321.204 15.4442 309.835 43.6645 299.676 50.2331C299.676 50.2331 290 98.8888 291.694 112.999C293.387 126.866 292.661 125.406 297.983 117.135C303.546 108.863 319.753 88.4278 343.458 95.4829C367.164 102.538 377.323 114.702 379.984 122.73L402.964 137.084C404.173 137.327 374.904 132.218 367.406 140.489Z" fill="#0181C8" data-v-b9762ba2></path></g><g clip-path="url(#Letters-Vorobey-V)" data-v-b9762ba2><path d="M46.0148 56.3252C43.3481 55.3252 36.8148 53.9252 32.0148 56.3252C26.0148 59.3252 17.0148 67.2753 17.0148 77.3252C17.0148 89.3252 16.1811 92.5869 27.0148 100.325C37.5149 107.825 53.1815 105.325 62.5148 102.325C71.8481 99.3252 83.5148 87.3252 83.5148 87.3252L101.515 69.3252" stroke="white" stroke-width="10" stroke-linecap="round" class="path-logo V-1" data-v-b9762ba2></path><path d="M99.0147 73.8252C95.5148 82.3252 85.0148 92.8252 86.5147 115.825L85.5148 132.825L86.5147 152.325" stroke="white" stroke-width="13" stroke-linecap="round" class="path-logo V-2" data-v-b9762ba2></path><path d="M88.0148 153.825V172.825C87.8481 176.158 86.9148 183.325 84.5148 185.325C81.5148 187.825 77.5148 193.325 75.5148 189.325C73.5148 185.325 75.0148 171.825 78.0148 167.825C81.0148 163.825 100.515 134.325 102.515 132.825C104.515 131.325 138.015 82.3252 160.515 72.3252C183.015 62.3252 192.015 57.8252 198.515 57.3252" stroke="white" stroke-width="10" stroke-linecap="round" class="path-logo V-3" data-v-b9762ba2></path></g><g clip-path="url(#Letters-Vorobey-o-1)" data-v-b9762ba2><path d="M135.515 112.825C139.515 107.625 145.182 105.658 147.515 105.325C151.015 106.825 151.515 108.325 153.015 110.325C154.515 112.325 153.515 126.825 153.015 130.325C152.615 133.125 148.182 146.158 146.015 152.325C142.848 159.992 134.915 175.525 128.515 176.325C120.515 177.325 119.015 172.325 117.515 167.825C116.015 163.325 119.015 150.325 120.515 144.325C122.015 138.325 130.515 119.325 135.515 112.825Z" stroke="white" stroke-width="12" stroke-linecap="round" class="path-logo O-1" data-v-b9762ba2></path></g><g clip-path="url(#Letters-Vorobey-r)" data-v-b9762ba2><path d="M146.515 175.325L167.515 109.825C168.348 106.825 172.03 102.325 180.515 102.325C184.015 102.325 187.015 104.825 191.515 110.825C192.515 115.825 195.015 114.825 190.015 129.825C185.454 143.507 174.015 147.397 169.515 149.325C166.015 150.825 164.015 150.825 159.515 151.825C162.182 153.492 167.915 156.625 169.515 161.825C171.515 168.325 171.515 173.825 174.015 175.325C176.015 176.525 179.848 177.158 181.515 177.325" stroke="white" stroke-width="11" stroke-linecap="round" class="path-logo R-1" data-v-b9762ba2></path></g><g clip-path="url(#Letters-Vorobey-o-2)" data-v-b9762ba2><path d="M209.924 112.325C213.924 107.125 219.59 105.158 221.924 104.825C225.424 106.325 225.924 107.825 227.424 109.825C228.924 111.825 227.924 126.325 227.424 129.825C227.024 132.625 222.59 145.658 220.424 151.825C217.257 159.492 209.324 175.025 202.924 175.825C194.924 176.825 193.424 171.825 191.924 167.325C190.424 162.825 193.424 149.825 194.924 143.825C196.424 137.825 204.924 118.825 209.924 112.325Z" stroke="white" stroke-width="12" stroke-linecap="round" class="path-logo O-2" data-v-b9762ba2></path></g><g clip-path="url(#Letters-Vorobey-b)" data-v-b9762ba2><path d="M221.515 176.325C229.848 152.659 245.48 106.007 247.09 105.227C251.015 103.325 255.515 103.261 259.015 107.325C274.515 125.325 248.015 149.209 245.515 152.209C243.515 154.609 236.848 154.492 232.515 154.325C237.348 154.492 242.915 157.425 244.515 161.825C246.515 167.325 242.015 173.325 236.515 176.325C234.115 176.325 226.515 176.325 221.515 176.325Z" stroke="white" stroke-width="11" stroke-linecap="round" class="path-logo B" data-v-b9762ba2></path></g><g clip-path="url(#Letters-Vorobey-e)" data-v-b9762ba2><path d="M302.015 104.825C296.682 104.325 285.615 106.925 284.015 109.325C282.015 112.325 273.572 133.153 272.015 137.825C264.515 160.325 267.515 153.37 272.015 153.745C278.015 154.245 293.015 154.325 284.015 154.325C275.015 154.325 267.93 150.825 266.515 155.825C264.454 163.106 263.015 176.825 269.015 177.325C273.815 177.725 280.015 179.492 282.515 180.325" stroke="white" stroke-width="10" stroke-linecap="round" class="path-logo E" data-v-b9762ba2></path></g><g clip-path="url(#Letters-Vorobey-y)" data-v-b9762ba2><path d="M303.515 106.825C307.515 108.825 310.015 120.325 312.015 132.825C308.628 150.322 300.182 175.158 297.015 182.325L339.515 101.825" stroke="white" stroke-width="12" stroke-linecap="round" class="path-logo Y" data-v-b9762ba2></path></g><g clip-path="url(#Letters-Art-A)" data-v-b9762ba2><path d="M196.52 212.562C195.187 216.395 191.12 223.862 185.52 223.062C178.52 222.062 172.02 211.062 174.52 205.062C177.02 199.062 191.52 189.562 205.02 189.062C218.52 188.562 235.52 192.062 240.52 190.562C245.52 189.062 255.396 186.563 258.52 189.062C263.52 193.062 262.02 198.562 256.02 212.562C250.02 226.562 235.23 258.791 233.52 265.062C232.02 270.562 225.02 291.562 233.52 308.562" stroke="white" stroke-width="13" stroke-linecap="round" class="path-logo A-1" data-v-b9762ba2></path><path d="M241.02 264.562C234.687 262.562 222.52 259.462 218.52 261.062C213.52 263.062 201.52 266.062 193.02 263.562C184.52 261.062 179.02 254.062 180.02 248.562" stroke="white" stroke-width="7" stroke-linecap="round" class="path-logo A-2" data-v-b9762ba2></path><path d="M254.02 188.062L162.02 299.562C156.187 303.062 143.42 309.862 139.02 309.062C133.52 308.062 124.52 299.062 125.02 293.562C125.52 288.062 125.52 277.562 132.02 273.062C137.22 269.462 142.353 267.562 144.02 269.062" stroke="white" stroke-width="10" stroke-linecap="round" class="path-logo A-3" data-v-b9762ba2></path></g><g clip-path="url(#Letters-Art-r)" data-v-b9762ba2><path d="M241.52 290.062C248.02 268.728 261.42 226.662 263.02 225.062C265.02 223.062 274.02 219.562 281.02 222.562C286.62 224.962 287.02 241.062 281.02 250.562C275.02 260.062 274.52 260.562 267.52 265.062C262.817 268.085 253.52 268.562 258.02 270.562C262.52 272.562 264.02 278.062 264.52 282.562C265.052 287.349 271.02 292.062 274.02 293.062" stroke="white" stroke-width="10" stroke-linecap="round" class="path-logo R" data-v-b9762ba2></path></g><g clip-path="url(#Letters-Art-t)" data-v-b9762ba2><path d="M285.02 292.062L309.02 224.562C316.02 223.729 328.02 224.362 324.02 223.562C320.02 222.762 302.02 223.229 293.52 223.562" stroke="white" stroke-width="10" stroke-linecap="round" class="path-logo T" data-v-b9762ba2></path></g></g></svg><svg width="1598" height="245" viewBox="0 0 1598 245" fill="none" xmlns="http://www.w3.org/2000/svg" class="preloader__title" data-v-b9762ba2><path d="M117.931 190.766C133.148 190.766 145.068 187.216 153.691 180.114C162.567 172.76 168.401 164.263 171.19 154.626L228.254 158.43C225.464 169.843 220.899 180.748 214.559 191.147C208.218 201.545 200.356 210.675 190.972 218.537C181.589 226.146 170.683 232.359 158.256 237.178C146.082 241.743 132.641 244.025 117.931 244.025C101.7 244.025 86.356 240.982 71.9 234.895C57.6975 228.555 45.2703 219.932 34.6185 209.027C23.9667 197.867 15.4705 184.933 9.13015 170.223C3.04339 155.514 0 139.536 0 122.29C0 105.298 3.04339 89.4469 9.13015 74.7372C15.4705 59.7739 23.9667 46.8395 34.6185 35.934C45.2703 24.775 57.6975 16.152 71.9 10.0653C86.356 3.72488 101.7 0.554688 117.931 0.554688C132.134 0.554687 145.195 2.96403 157.115 7.78272C169.288 12.3478 179.94 18.5614 189.07 26.4235C198.454 34.0319 206.316 43.0353 212.656 53.4335C218.997 63.8317 223.562 74.7372 226.352 86.1499L169.288 89.9541C167.767 85.1354 165.611 80.5703 162.821 76.2589C160.031 71.9474 156.481 68.1432 152.169 64.8462C147.858 61.5492 142.785 58.8862 136.952 56.8573C131.373 54.8284 125.032 53.8139 117.931 53.8139C109.308 53.8139 101.193 55.5892 93.5841 59.1398C85.9756 62.4368 79.2548 67.1287 73.4216 73.2155C67.8421 79.3023 63.4038 86.5303 60.1068 94.8996C56.8098 103.269 55.1613 112.399 55.1613 122.29C55.1613 132.181 56.8098 141.311 60.1068 149.681C63.4038 158.05 67.8421 165.278 73.4216 171.365C79.2548 177.451 85.9756 182.27 93.5841 185.821C101.193 189.118 109.308 190.766 117.931 190.766Z" fill="#E6F2F9" data-v-b9762ba2></path><path d="M355.844 2.4568C368.271 2.4568 379.557 4.48573 389.702 8.54358C400.1 12.6014 408.977 18.0541 416.331 24.9018C423.686 31.7494 429.393 39.8651 433.45 49.2488C437.508 58.379 439.537 68.1432 439.537 78.5414C439.537 91.983 437.128 103.269 432.309 112.399C427.744 121.529 422.545 129.011 416.712 134.844C411.132 140.424 405.933 144.481 401.114 147.018C396.296 149.554 393.886 150.822 393.886 150.822L447.146 242.123H386.278L342.529 162.234H313.998V242.123H258.836V2.4568H355.844ZM355.844 108.975C365.482 108.975 372.963 106.439 378.289 101.367C383.615 96.2945 386.278 89.9541 386.278 82.3456C386.278 74.7372 383.615 68.3968 378.289 63.3245C372.963 58.2522 365.482 55.716 355.844 55.716H313.998V108.975H355.844Z" fill="#E6F2F9" data-v-b9762ba2></path><path d="M475.796 2.4568H646.987V55.716H530.958V93.7583H637.476V147.018H530.958V188.864H650.791V242.123H475.796V2.4568Z" fill="#E6F2F9" data-v-b9762ba2></path><path d="M804.699 148.92L778.069 69.0308L751.44 148.92H804.699ZM736.223 196.473L721.006 242.123H663.942L749.537 2.4568H806.601L892.196 242.123H835.133L819.916 196.473H736.223Z" fill="#E6F2F9" data-v-b9762ba2></path><path d="M1002.44 242.123H947.283V55.716H878.807V2.4568H1070.92V55.716H1002.44V242.123Z" fill="#E6F2F9" data-v-b9762ba2></path><path d="M1152.86 242.123H1097.7V2.4568H1152.86V242.123Z" fill="#E6F2F9" data-v-b9762ba2></path><path d="M1398.1 2.4568L1316.31 242.123H1259.24L1177.45 2.4568H1234.52L1287.78 167.941L1341.04 2.4568H1398.1Z" fill="#E6F2F9" data-v-b9762ba2></path><path d="M1422.77 2.4568H1593.96V55.716H1477.93V93.7583H1584.45V147.018H1477.93V188.864H1597.76V242.123H1422.77V2.4568Z" fill="#E6F2F9" data-v-b9762ba2></path></svg><div class="preloader__date" data-v-b9762ba2>2018 - ${ssrInterpolate(new Date().getFullYear())}</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preloader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PreloaderElement = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-b9762ba2"]]);
const Curtains_vue_vue_type_style_index_0_scoped_3415cbb5_lang = "";
const _sfc_main$3 = {
  name: "CurtainsElement",
  props: {
    menu: Boolean
  },
  data() {
    return {
      open: false
    };
  },
  watch: {
    $route() {
      console.log(this.$props);
      if (!this.$props.menu) {
        this.open = true;
        this.$emit("setCurtains", "Curtains");
        setTimeout(() => {
          this.open = false;
          this.$emit("setCurtains", "Nothing");
        }, 1e3);
      } else {
        this.$emit("setMenu", false);
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["curtains", { "curtains--active": $data.open }]
  }, _attrs))} data-v-3415cbb5><svg viewBox="0 0 1214 1329" fill="none" xmlns="http://www.w3.org/2000/svg" class="curtains__img" data-v-3415cbb5><path d="M752.643 318.364c1.468-4.401 5.137-5.868 9.539-2.934 16.876 11.003 15.408 44.013 8.804 63.82-7.337 21.273-25.68 57.217-52.094 69.688-1.467.733-4.402 1.466-6.603.733-3.462-1.73-1.933-5.728-.765-8.784.317-.831.609-1.592.765-2.219 16.875-53.55 39.621-118.837 40.354-120.304zM693.901 491.999c1.276-3.3 2.748-7.103 4.447-11.519 2.201-5.868 5.136-6.601 10.272-5.135 6.604 2.935 11.74 8.07 11.006 18.34-1.467 19.806-16.142 30.809-28.615 30.809-3.669.733-6.604-2.201-5.87-5.869.62-5.583 1.766-8.543 8.76-26.626zM376.244 424.73c10.272-32.277 38.154-102.698 63.834-102.698 13.207 0 13.941 11.004 13.941 27.142 0 80.691-60.165 169.451-80.709 169.451-15.409 0-13.942-42.546 2.934-93.895z" fill="#7ABADD" data-v-3415cbb5></path><path fill-rule="evenodd" clip-rule="evenodd" d="M958.125 369.713c2.598-4.905 25.504-40.307 57.565-41.04 32.06-.733 95.46 10.993 110.03 37.376 0 0-11.66.733-24.05 5.13-5.83 2.199-16.03 3.664-26.96 4.397 5.83-3.664 10.2-10.26 10.2-17.588 0-10.993-9.47-20.52-20.4-20.52-10.93 0-20.4 9.527-20.4 20.52 0 8.061 4.37 14.657 10.93 18.321-8.02 0-16.03-.733-22.59-2.198l-.96-.195c-21.17-4.266-55.988-9.602-66.813 21.604-1.921 5.54-6.591 17.473-6.591 17.473l-41.089 109.3c-2.201 5.868-6.603 14.671-13.207 14.671-11.006 0-20.544-5.135-17.609-18.339 2.935-13.937 22.746-68.954 34.485-99.03-1.15-8.046-2.199-16.193-3.254-24.375-2.469-19.168-4.963-38.527-8.827-57.236a219.08 219.08 0 00-10.94 14.873c-7.72 12-11.215 19.24-13.334 18.858-2.281-.412-2.967-9.659-5.611-31.316-.756-6.296-.76-14.876-.219-24.924-4.027.5-7.063.992-7.708 1.422-1.961 1.307-3.34 4.359-6.209 10.711-.352.781-.727 1.611-1.129 2.493l-1.666 3.71c-9.755 21.706-25.649 57.069-40.889 104.857-3.669 10.27-.734 13.204 9.538 13.204 4.402-.734 6.604-.734 11.739-.734 6.604 0 9.539 2.934 9.539 5.869 0 2.934-2.935 5.868-9.539 6.602-.298 0-1.109.03-2.238.072-4.433.165-13.765.512-16.105-.072-7.336 0-11.006 3.667-13.206 10.27-3.669 11.003-4.403 13.937-5.137 25.674 0 1.734.257 3.725.467 5.518.145 1.24.267 2.385.267 3.285 1.468 6.602 2.935 11.736 9.539 13.204.741.247 1.587.494 2.48.755 4.412 1.289 9.993 2.92 9.993 6.58-.194.193-.439.591-.734 1.072-.825 1.341-2.048 3.329-3.669 3.329-12.473 0-22.745-.733-32.283-6.601-16.142-10.27-14.674-45.481-9.539-62.353 16.876-60.885 27.882-93.161 57.231-150.379 2.934-5.868 8.071-9.536 14.674-10.27 8.329-.793 16.874-1.157 25.516-1.325 5.102-59.37 23.333-151.045 23.333-151.045 30.604-19.787 64.852-104.799 69.224-128.25 2.38-12.37 6.057-19.308 4.913-20.223-.956-.765-5.286 2.684-16.572 10.696-24.775 17.589-56.107 76.217-69.224 106.264-13.116 30.047-37.891 95.271-52.464 159.762-14.574 64.491-10.202-79.148 0-94.538 9.151-12.885 15.748-56.595 19.791-83.384.787-5.207 1.476-9.775 2.068-13.353 1.783-11.116 12.639-22.935 18.224-29.016 5.829-6.346 5.918-6.442-16.037 7.03-38.816 24.904-51.202 117.807-58.045 169.134-.608 4.558-1.172 8.789-1.707 12.614-5.076 36.87-7.968 11.397-10.031-6.757-.602-5.301-1.133-9.978-1.627-12.297-2.187-10.992-2.915-19.054 5.1-46.169 8.016-27.116 10.931-46.171 7.287-74.752-1.579-12.388-2.063-18.03-3.529-18.298-1.916-.35-5.509 8.48-15.416 23.428-16.76 26.383-18.217 95.271-11.659 154.632 6.558 59.362-10.202 19.055-18.945-2.198-8.745-20.52-7.287-52.033 0-74.751 7.286-22.719 0-65.224 0-65.224-20.404 10.992-26.233 70.354-26.233 70.354-14.381 10.124-35.147 62.349-42.695 81.334l-.297.746c-2.792 7.021-5.692 12.213-8.699 17.597-1.473 2.638-2.973 5.322-4.498 8.29 13.047 6.635 16.401 23.34 16.401 48.847 0 68.955-53.562 181.923-99.053 181.923-24.212 0-39.621-40.346-29.349-82.159 2.023-8.845 7.355-29.619 15.786-53.053-12.826 24.871-35.136 46.411-59.808 55.254-1.468 1.467-4.403 1.467-5.871 2.934-2.934 1.467-5.135 5.135-1.467 8.069 5.87 4.401 12.473 12.471 16.876 40.346.734 5.135 4.402 9.536 8.805 12.47 4.402 2.201 10.272 5.135 8.804 9.537-2.201 6.602-9.538 7.335-15.408 5.134-19.087-7.857-22.712-19.579-27.632-35.494-1.511-4.886-3.145-10.168-5.385-15.854-4.403-9.537-9.539-16.872-22.012-16.872-2.935 0-5.136 5.134-5.87 8.803-5.136 16.138-7.337 22.74-12.473 38.144-.252.756-.497 1.504-.739 2.243-3.28 10.025-5.987 18.297-17.604 18.297-13.207 0-13.207-20.54-8.805-33.01 13.207-37.412 60.165-186.323 60.165-186.323 4.402-10.27 11.006-13.205 21.278-12.471 42.556 0 78.509 3.668 78.509 54.283.137 7.569-.912 15.318-2.966 23.006 8.214-19.357 18.372-38.642 30.366-53.105-11.909-6.889-25.21-15.582-38.871-24.51-17.296-11.304-35.169-22.984-51.517-31.854-55.379-30.047-48.093-14.657-48.093-14.657-4.534-2.487-12.382-7.397-22.615-14.376-84.341 71.367-178.87 197.629-178.87 208.658 0 0 .734 7.335.734 16.138 0 44.014-4.403 104.165-42.556 104.165-6.163 0-10.032-2.581-12.43-6.538C205.498 581.995 279 581.508 279 581.508c-26.232 32.246 21.86 29.314 21.86 29.314 2.187 18.322 45.907 19.054 45.907 19.054-15.302 20.52 33.519 31.513 33.519 31.513-26.232 27.116 42.992 26.383 42.992 26.383-11.659 35.91 35.705 43.239 35.705 43.239 1.457 21.985 38.62 21.985 38.62 21.985 8.744 31.513 48.093 29.314 48.093 29.314 2.84 6.031 9.919 9.587 17.03 11.681.774-2.708-.532-4.706-5.252-6.884-15.409-6.602-32.284-30.076-20.545-48.415 2.201-3.667 6.604-3.667 8.805-1.467 8.071 7.702 8.071 15.038 8.071 21.732 0 6.694 0 12.745 8.07 17.88 8.072 5.135 9.539 4.401 15.409-2.2 13.207-15.405 148.212-181.189 157.016-192.926-24.783 2.94-47.644-.612-70.645-4.186-17.175-2.669-34.428-5.35-52.62-5.35-55.029 0-81.443 22.007-81.443 49.882 0 22.007 13.207 29.342 27.882 29.342 12.473 0 21.277-11.003 25.68-25.674 1.467-5.135 5.869-5.135 10.272-2.935 13.207 6.603 16.142 10.27 9.538 24.941-5.869 12.471-25.68 25.675-38.887 25.675-27.148 0-46.225-16.138-46.225-46.948 0-35.944 31.55-67.487 92.449-67.487 22.634 0 42.15 2.226 60.757 4.348 15.173 1.73 29.74 3.392 44.9 3.721 17.005.46 30.843-5.413 41.335-9.865 6.257-2.656 11.324-4.806 15.161-4.806 11.739 0 28.615 12.47 31.55 22.007 2.935 13.204.734 24.207-3.669 35.944 0 0-10.5 22.687-24.176 53.584 4.237-7.235 9.894-9.49 19.04-8.837 41.089 0 75.574 3.668 75.574 52.816 1.467 36.678-30.083 80.691-68.237 94.629-.794.794-1.803 1.158-2.911 1.558-.939.339-1.949.703-2.958 1.376-2.935 1.467-5.136 5.135-1.468 8.069 5.87 4.402 12.474 12.471 16.142 38.879.18 1.263.494 2.437.93 3.534 5.629-1.984 11.098-4.143 16.879-9.127 7.341-6.679 15.687-12.01 24.074-17.366 3.167-2.023 6.341-4.05 9.468-6.154 19.217-53.775 45.501-127.868 45.501-127.868 10.731-25.484 4.907-25.831-2.337-26.264a64.87 64.87 0 01-2.066-.144c-3.301-.367-6.603-.55-9.906-.734-3.301-.183-6.602-.367-9.905-.734-1.467 0-3.668-.733-3.668-2.2-.733-1.467-.733-2.934.734-4.402.733-.733 2.201-1.467 3.668-1.467l70.437-2.934c5.137-.734 10.273-.734 15.409-.734 1.741 0 3.024.46 4.574 1.015.409.147.836.3 1.296.453 0 1.467.734 2.934.734 5.135 0 1.467-1.468 2.934-2.936 3.667-2.201.734-4.402.734-6.603.734-5.136 0-8.804 0-13.941.733-5.135.734-8.805 2.935-11.006 8.069l-.009.02c-2.931 6.596-5.863 13.191-8.062 19.787-1.074 3.07-2.567 6.975-4.571 12.221-5.771 15.099-15.782 41.298-32.282 90.626 9.967-4.778 20.098-7.751 26.784-9.713 1.399-.411 2.648-.777 3.713-1.107 3.999-2.194 8.723-6.759 13.359-11.238 4.655-4.499 9.221-8.911 12.873-10.747 3.586-1.804 8.937-1.477 14.837-1.117 6.088.372 12.761.779 18.682-1.082 10.93-3.664 2.914 8.794-5.101 19.054-8.015 10.26-29.876 35.177-42.992 48.368-8.794 8.845-21.52 23.95-33.564 38.246-5.918 7.025-11.672 13.855-16.714 19.65-15.303 17.589-50.279 82.08-50.279 82.08-4.372 19.787-13.116 26.382-14.573 16.855-1.051-6.867-3.994-6.88-8.557-6.902-1.768-.008-3.779-.017-6.017-.426-8.016-1.466-9.473-12.459-7.287-31.513 2.187-19.054 16.76-38.841 16.76-38.841-4.445 2.98-6.547 6.298-10.163 12.006-1.719 2.713-3.78 5.966-6.597 9.98-8.015 12.458-10.201 14.657-9.472 5.13.728-9.528 21.86-41.04 21.86-41.04-8.015 4.397-16.031 11.725-26.233 31.512-10.93 20.52 2.187-26.382 2.187-26.382-10.202 11.725-16.76 26.382-16.76 26.382h-5.101c-18.217.733-73.595 33.712-93.27 46.17-20.403 12.459-16.76 5.863-5.101-14.657 6.503-12.208 21.001-24.676 34.442-33.699a4.308 4.308 0 01-.517-.213c-.559-.223-1.135-.447-1.717-.673-3.241-1.258-6.69-2.596-8.555-4.462-30.083-22.74-24.947-79.224-12.474-117.369 7.54-22.616-5.297-19.765-29.922-14.297-16.11 3.577-37.265 8.275-61.06 7.695-3.637 0-6.272 1.002-8.735 3.419 15.878 30.896 78.337 21.822 78.337 21.822-21.132 19.055-26.233 70.354-26.233 70.354-20.403 2.199-40.806 33.712-40.806 33.712-55.378 54.231-209.129 207.393-220.788 232.313-11.658 25.65-15.302 55.7-7.287 60.83 4.927 3.15 7.651 12.67 10.542 22.78 1.813 6.33 3.691 12.89 6.218 18.26 2.331 5.21 2.452 9.12 2.59 13.55.249 8.03.55 17.75 14.169 39.95 21.132 33.71 38.62 2.2 38.62 2.2l208.401-317.33c107.116-70.355 127.519-63.026 127.519-63.026.728 4.397 9.472 5.13 9.472 5.13-2.186 16.123 7.287 14.657 7.287 14.657 0 9.527 6.558 32.978 14.574 33.711 8.744 1.466 10.201 7.329 5.1 21.988-4.214 14.83 7.817 17.41 26.961 21.51l2.186.47c3.125.68 5.668 1.2 7.865 1.64 12.156 2.48 13.745 2.81 44.6 15.22 36.434 14.66 66.309 51.3 67.038 65.22.624 11.93-1.426 12.03-6.607 12.27-.867.04-1.822.09-2.866.19-7.287.73-14.573 3.67-24.046 9.53-9.473 5.13 2.186 16.85 2.186 16.85-45.907 36.65 9.473 50.57 9.473 50.57-21.132-19.79-2.186-41.04-2.186-41.04 3.643-.73 14.573-6.59 16.759-14.66 1.876-6.91 6.437-8.97 14.603-12.66 1.349-.61 2.794-1.27 4.343-1.99 6.974-2.81 8.608 7.51 10.391 18.78 1.012 6.39 2.072 13.09 4.182 17.86 5.101 12.46 0 20.52-5.101 26.38-2.38 3.19-2.169 5.73-1.835 9.75.28 3.36.645 7.76-.351 14.44-2.914 14.65-31.333 7.33-31.333 7.33 20.221 21.69 39.193.12 48.269-10.2.737-.84 1.408-1.6 2.01-2.26 3.905-4.65 3.485-6.16 2.871-8.35-.646-2.31-1.504-5.38 2.234-13.64 5.81-12.87 1.88-18.27-.69-21.79-.65-.89-1.207-1.65-1.501-2.39-1.457-3.67-2.186-5.87-5.1-21.99-2.915-16.12 11.661 3.67 11.661 9.53 0 5.86 8.74 15.39 16.76 21.98 7.38 6.08 7.34 10.92 7.29 17.37 0 .55-.01 1.11-.01 1.69 0 .79-.02 1.53-.04 2.23-.18 6.42-.28 9.9 16.8 27.08 18.95 19.06-14.57 33.71-14.57 33.71 18.22 3.67 25.5-5.13 31.33-24.18 5.83-18.32-10.93-39.57-16.76-43.24-3.54-2.55-5.33-9.34-7.06-15.95-.77-2.91-1.52-5.77-2.41-8.23-1.51-4.17-4.37-8.72-7.29-13.36-2.74-4.35-5.52-8.77-7.28-13.03-3.65-8.79 16.03 5.87 18.94 16.86 2.92 10.99 16.03 22.72 26.24 31.51 10.92 8.8 7.28 36.65 7.28 36.65 22.15-22.82 8.26-40.8-3.97-56.64-4.27-5.53-8.34-10.8-10.6-15.92-8.72-19.73-11.64-21.24-35.5-33.6l-.21-.11c-16.53-9.07-28.585-22.64-38.293-33.57-4.412-4.97-8.339-9.39-11.982-12.6-10.93-10.26-52.465-35.18-76.511-46.17-23.318-10.99-43.721-21.98-52.464-38.839-8.745-16.856 50.278-101.867 50.278-101.867 2.458-.618 12.177-3.612 25.43-7.695 33.874-10.436 90.842-27.986 108.642-31.146 24.78-4.397 19.68 10.26 11.66 21.985-8.74 12.459 11.66 46.17 11.66 46.17 0 57.163 42.99 24.184 42.99 24.184-38.62 13.192-29.14-29.314-29.14-29.314 5.1-3.664 2.91-18.321-2.19-26.382-4.5-5.658-2.05-13.062.3-20.19.7-2.106 1.39-4.188 1.89-6.193 2.18-8.794 6.55-8.794 9.47 0 1.27 3.837 4.48 8.651 8.19 14.198 4.78 7.166 10.38 15.555 13.67 24.643 5.83 15.39 14.57 24.184 14.57 24.184 4.37 13.192-18.94 43.239-18.94 43.239 22.59-10.26 27.69-35.177 29.14-46.17 2.19-10.993-.72-21.986-9.47-38.842-8.74-16.855 12.39 2.932 16.76 14.658 4.37 11.725 11.66 24.184 11.66 24.184-.73 10.26-14.57 31.512-14.57 31.512 18.21-6.595 24.04-29.314 24.04-29.314 13.85 18.322-14.57 43.239-14.57 43.239 43.72 0 24.05-43.239 24.05-43.239 12.37-8.299-3.81-29.656-19.14-49.897-.91-1.205-1.82-2.407-2.73-3.601-16.75-21.253-40.8-35.177-64.85-43.238-22.93-7.688-84.285 10.614-117.733 20.591-1.629.486-3.192.952-4.682 1.394-32.061 9.527-16.759-5.13-16.759-5.13 118.774-100.401 138.444-167.091 144.274-213.26 3.52-27.134-1.56-53.002-6.24-76.812-4.04-20.561-7.78-39.587-5.41-56.568 5.53-37.744 13.15-45.71 28.98-62.273 2.92-3.054 6.12-6.4 9.63-10.279 20.87-23.012 97.67-11.645 106.42-10.35.72.107.98.145.7.09l-69.22-43.239c-8.02-24.184-38.62-60.827-110.03-82.079-43.084-12.821-77.943 4.496-102.501 25.725 7.435 10.486 11.786 24.964 13.473 35.081 1.688 16.194 5.237 28.199 8.936 35.872 1.717-4.38.98-9.694 3.577-14.599zm-110.03-232.314c-1.457 17.588-14.573 38.841-14.573 38.841-8.015 13.924 5.829-53.499 12.388-65.224 5.343-10.75 3.951 5.6 2.56 21.949-.127 1.485-.253 2.969-.375 4.434zm-48.092-11.726c.728 13.924 1.457 27.848-2.186 38.841-.4 1.207-.914 2.846-1.514 4.758-4.86 15.499-15.326 48.874-15.974 14.296 0 0-.729-32.245 5.1-48.368 6.558-15.39 13.845-23.452 14.574-9.527zm-52.417 22.073c.627-4.72.958-7.208 2.138-.088 1.885 10.738-1.644 36.719-2.655 44.16-.162 1.193-.259 1.909-.259 2.01-10.931 10.26-5.83-27.848-2.187-33.711 1.677-2.699 2.428-8.346 2.963-12.371zm-31.381 89.321c6.558-21.253 10.93-10.26 9.473 0-.571 3.729.087 17.001.793 31.248.638 12.888 1.316 26.573 1.16 34.711 2.45-2.485 5.896-3.974 10.338-4.468 38.888-4.401 72.639 21.273 66.035 65.287-7.971 47.202-42.587 74.938-61.455 90.056-3.711 2.973-6.812 5.458-8.983 7.507 8.072 5.135 13.942 18.339 11.74 32.277-6.603 38.878-36.686 46.213-76.307 44.746l-.652-.046c-10.228-.724-24.217-1.713-20.626-15.358l77.041-215.666c.047-.108.094-.215.142-.321-3.125-10.659-14.376-51.575-8.699-69.973zm359.235 120.188c0 2.931-2.91 5.863-5.83 5.863-2.91 0-5.83-2.932-5.83-5.863 0-2.932 2.92-5.863 5.83-5.863 2.92 0 5.83 2.198 5.83 5.863zM965.412 37.73c-7.287 20.52-34.976 74.018-42.992 85.011-.663.889-1.389 1.876-2.161 2.925-9.415 12.79-25.76 34.993-19.699 5.87 0 0 5.829-24.185 14.573-41.04 8.745-16.856 24.046-40.307 33.519-50.567 9.473-10.26 24.046-22.718 16.76-2.199zM335.889 452.605c-10.272 41.813 5.136 82.159 29.349 82.159 46.225 0 99.053-112.968 99.787-181.923 0-33.743-5.87-52.082-32.284-52.082-56.497 0-90.982 126.172-96.852 151.846z" fill="#7ABADD" data-v-3415cbb5></path><path d="M716.325 918.533c4.859-2.723 9.143-4.727 12.268-5.775 13.116-4.397 32.79-13.924 52.464-36.642 4.92-5.681 9.429-9.529 13.665-12.311-3.612-5.497-5.665-11.942-8.032-19.372-1.517-4.763-3.163-9.931-5.431-15.513-3.669-8.803-9.539-16.138-21.278-16.138-2.935 0-5.136 5.135-5.87 8.069-2.307 6.919-3.873 12.062-5.365 16.959-1.83 6.005-3.545 11.638-6.375 19.719-.316.886-.621 1.766-.923 2.635-3.196 9.209-5.959 17.171-16.686 17.171-13.207 0-12.473-19.806-8.071-31.543 12.354-33.622 52.313-160.953 57.425-177.265-14.423 32.692-31.847 73.369-44.218 106.11-1.467 3.667-.734 6.602.734 10.27 1.67 2.921 2.389 4.18 2.699 5.533.235 1.026.235 2.105.235 4.003l-1.467 1.467c-7.337-.734-11.006 2.934-12.473 9.536-1.316 5.262-2.885 10.738-4.501 16.378-8.297 28.955-17.83 62.224-.635 92.922a113.1 113.1 0 011.835 3.787zM226.534 555.782c1.011.715 2.355.988 3.699.988.734 0 2.202 0 2.936-1.467 1.497-1.612 2.868-3.749 4.115-6.236-4.414 2.413-7.963 4.647-10.75 6.715zM239.37 544.314a845.73 845.73 0 01-14.745-1.538c1.824-21.487 12.775-45.424 18.816-45.424 3.668 0 3.668 5.869 3.668 8.069 0 6.053-2.476 25.31-7.739 38.893zM216.31 541.796c-41.149-5.06-106.998-16.339-67.014-33.573l40.806-12.459s-228.804-67.422-7.287-50.567c0 0-190.184-84.278-129.704-74.751 60.48 9.527 103.471 16.856 103.471 16.856S59.669 330.139 29.794 285.435c-11.109-16.621-15.971-23.213-15.113-24.069 1.157-1.154 12.71 8.113 33.372 17.285 15.043 23.737 40.769 41.18 72.122 41.18 35.219 0 90.982-16.871 121.798-42.546 2.935 0 4.402 1.467 4.402 6.602 0 1.241-.35 3.532-.885 7.037-1.365 8.926-3.931 25.725-4.985 53.115-.928 25.995 1.376 57.278 3.192 81.952 1.054 14.317 1.945 26.408 1.945 33.95 0 5.868-1.468 11.737-5.137 16.872-3.607 5.771-23.535 44.176-24.195 64.983z" fill="#7ABADD" data-v-3415cbb5></path><path d="M79.658 290.148c10.782 9.373 24.435 15.012 39.049 15.012 2.584 0 5.137-.056 7.659-.165-8.319-2.486-23.27-7.107-46.708-14.847zM132.165 304.647c-9.586-10.414-44.357-48.349-74.143-82.907 2.387-11.53 7.215-21.809 13.816-30.311 39.199 27.658 91.017 62.021 139.646 86.654-21.775 13.609-48.126 24.166-79.319 26.564z" fill="#7ABADD" data-v-3415cbb5></path><path d="M214.844 275.936c34.315-22.413 56.789-52.053 68.545-67.557 3.546-4.676 6.117-8.067 7.743-9.584 2.202-2.201 5.136-2.935 7.337-2.935 5.137 0 13.208 5.135 13.208 12.471 0 3.667-1.468 10.27-4.403 14.671-38.887 65.287-38.887 114.435-36.686 178.988.064.442.127.9.192 1.368.684 4.975 1.528 11.102 4.211 11.102.733 0 2.201-.733 3.668-2.2 6.641-6.928 11.69-14.309 17.876-23.352 9.536-13.938 21.771-31.823 46.692-58.073 5.121-5.307 11.271-11.985 18.284-19.6 20.523-22.283 48.438-52.591 79.61-80.066-46.652-33.233-125.08-96.627-178.152-168.522-60.495-80.508-40.025-26.504-27.544 6.424 2.402 6.338 4.508 11.895 5.684 15.562 1.993 6.21 5.999 14.229 9.967 22.168 10.545 21.101 20.811 41.643-7.781 26.2-39.348-21.253-101.286-103.332-107.844-116.524-1.77-3.56-3.275-7.335-4.485-10.372-3.274-8.213-4.397-11.03-2.801 10.372 2.185 28.582 24.046 77.683 33.519 96.737 3.544 6.619 13.77 18.987 23.746 31.051 18.741 22.664 36.595 44.256 7.587 24.646C148.567 138.864 54.568 58.251 46.553 47.99c-8.016-10.26-2.186 12.459-2.186 12.459 6.729 29.908 25.615 61.963 48.817 92.231a66.994 66.994 0 0114.518-1.567c15.203 0 18.263 2.143 25.389 7.133l.291.203c1.468.734 2.201 2.201 2.201 3.667 0 1.468-.733 3.668-2.934 4.402-9.372-1.363-18.507-.668-27.009 1.771 39.865 48.112 87.571 89.665 109.204 107.647zM53.355 178.23a2468.838 2468.838 0 01-28.662-21.045C-3.617 135.687-3.526 135.841 4.99 150.34c2.225 3.789 5.024 8.557 8.043 14.174 3.83 7.124 14.046 20.369 27.03 36.027 3.258-7.792 7.715-15.443 13.292-22.311zM641.041 337.667c-17.794 22.64-33.774 64.32-41.012 87.063-16.875 51.349-18.343 93.895-2.934 93.895 20.544 0 80.709-88.76 80.709-169.451 0-16.11-.731-27.104-13.872-27.142a200.284 200.284 0 00-3.106 9.573c-2.383 7.989-9.529 9.174-19.785 6.062zM801.069 682.942c3.669-14.671 6.604-16.138 16.142-16.138 21.278 0 30.817 12.47 30.083 27.141 0 38.879-26.414 99.031-77.041 99.031-2.935 0-3.668-1.468-3.668-3.668 0-4.075 7.244-25.127 15.572-49.324 6.663-19.362 14.02-40.738 18.912-57.042zM755.579 580.244c4.402-5.135 9.538-9.536 17.608-10.27.734 2.201 1.468 4.402-.733 5.135-.734 4.402-2.201 8.803-3.669 12.471-35.952 80.691-52.827 120.303-75.573 173.853-2.201 4.401-5.136 8.069-11.006 7.335-13.228-.801-22.076 1.243-34.442 4.101-10.267 2.373-22.96 5.307-42.598 7.636-2.202.734-5.137.734-8.805.734-1.968 0 .17-4.105 1.168-6.023.119-.227.221-.424.299-.579l157.751-194.393zM513.45 330.835c4.402-15.405 7.337-16.872 16.875-16.872 22.012 0 31.55 13.204 31.55 29.342 0 40.346-27.147 102.698-79.975 102.698-3.669 0-4.402-2.2-4.402-4.401 0-4.243 8.101-27.875 17.203-54.428 6.634-19.353 13.8-40.258 18.749-56.339z" fill="#7ABADD" data-v-3415cbb5></path></svg></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Curtains.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CurtainsElement = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-3415cbb5"]]);
const Plug_vue_vue_type_style_index_0_scoped_139f4ed8_lang = "";
const _sfc_main$2 = {
  __name: "Plug",
  __ssrInlineRender: true,
  setup(__props) {
    const pass = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "plug" }, _attrs))} data-v-139f4ed8><svg width="1214" height="1329" viewBox="0 0 1214 1329" fill="none" xmlns="http://www.w3.org/2000/svg" class="plug__svg" data-v-139f4ed8><g opacity="0.1" data-v-139f4ed8><path d="M752.643 318.364C754.111 313.963 757.78 312.496 762.182 315.43C779.058 326.433 777.59 359.443 770.986 379.25C763.649 400.523 745.306 436.467 718.892 448.938C717.425 449.671 714.49 450.404 712.289 449.671C708.827 447.941 710.356 443.943 711.524 440.887C711.841 440.056 712.133 439.295 712.289 438.668C729.164 385.118 751.91 319.831 752.643 318.364Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M693.901 491.999C695.177 488.699 696.649 484.896 698.348 480.48C700.549 474.612 703.484 473.879 708.62 475.345C715.224 478.28 720.36 483.415 719.626 493.685C718.159 513.491 703.484 524.494 691.011 524.494C687.342 525.227 684.407 522.293 685.141 518.625C685.761 513.042 686.907 510.082 693.901 491.999Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M376.244 424.73C386.516 392.453 414.398 322.032 440.078 322.032C453.285 322.032 454.019 333.036 454.019 349.174C454.019 429.865 393.854 518.625 373.31 518.625C357.901 518.625 359.368 476.079 376.244 424.73Z" fill="#7ABADD" data-v-139f4ed8></path><path fill-rule="evenodd" clip-rule="evenodd" d="M958.125 369.713C960.723 364.808 983.629 329.406 1015.69 328.673C1047.75 327.94 1111.15 339.666 1125.72 366.049C1125.72 366.049 1114.06 366.782 1101.67 371.179C1095.84 373.378 1085.64 374.843 1074.71 375.576C1080.54 371.912 1084.91 365.316 1084.91 357.988C1084.91 346.995 1075.44 337.468 1064.51 337.468C1053.58 337.468 1044.11 346.995 1044.11 357.988C1044.11 366.049 1048.48 372.645 1055.04 376.309C1047.02 376.309 1039.01 375.576 1032.45 374.111L1031.49 373.916C1010.32 369.65 975.502 364.314 964.677 395.52C962.756 401.06 958.086 412.993 958.086 412.993L916.997 522.293C914.796 528.161 910.394 536.964 903.79 536.964C892.784 536.964 883.246 531.829 886.181 518.625C889.116 504.688 908.927 449.671 920.666 419.595C919.516 411.549 918.467 403.402 917.412 395.22C914.943 376.052 912.449 356.693 908.585 337.984C904.085 343.586 900.424 348.726 897.645 352.857C889.925 364.857 886.43 372.097 884.311 371.715C882.03 371.303 881.344 362.056 878.7 340.399C877.944 334.103 877.94 325.523 878.481 315.475C874.454 315.975 871.418 316.467 870.773 316.897C868.812 318.204 867.433 321.256 864.564 327.608C864.212 328.389 863.837 329.219 863.435 330.101L861.769 333.811C852.014 355.517 836.12 390.88 820.88 438.668C817.211 448.938 820.146 451.872 830.418 451.872C834.82 451.138 837.022 451.138 842.157 451.138C848.761 451.138 851.696 454.072 851.696 457.007C851.696 459.941 848.761 462.875 842.157 463.609C841.859 463.609 841.048 463.639 839.919 463.681C835.486 463.846 826.154 464.193 823.814 463.609C816.478 463.609 812.808 467.276 810.608 473.879C806.939 484.882 806.205 487.816 805.471 499.553C805.471 501.287 805.728 503.278 805.938 505.071C806.083 506.311 806.205 507.456 806.205 508.356C807.673 514.958 809.14 520.092 815.744 521.56C816.485 521.807 817.331 522.054 818.224 522.315C822.636 523.604 828.217 525.235 828.217 528.895C828.023 529.088 827.778 529.486 827.483 529.967C826.658 531.308 825.435 533.296 823.814 533.296C811.341 533.296 801.069 532.563 791.531 526.695C775.389 516.425 776.857 481.214 781.992 464.342C798.868 403.457 809.874 371.181 839.223 313.963C842.157 308.095 847.294 304.427 853.897 303.693C862.226 302.9 870.771 302.536 879.413 302.368C884.515 242.998 902.746 151.323 902.746 151.323C933.35 131.536 967.598 46.5242 971.97 23.0729C974.35 10.7033 978.027 3.76508 976.883 2.85017C975.927 2.08457 971.597 5.53384 960.311 13.5458C935.536 31.1349 904.204 89.7628 891.087 119.81C877.971 149.857 853.196 215.081 838.623 279.572C824.049 344.063 828.421 200.424 838.623 185.034C847.774 172.149 854.371 128.439 858.414 101.65C859.201 96.4429 859.89 91.875 860.482 88.2971C862.265 77.1807 873.121 65.362 878.706 59.2813C884.535 52.9351 884.624 52.8388 862.669 66.3115C823.853 91.2153 811.467 184.118 804.624 235.445C804.016 240.003 803.452 244.234 802.917 248.059C797.841 284.929 794.949 259.456 792.886 241.302C792.284 236.001 791.753 231.324 791.259 229.005C789.072 218.013 788.344 209.951 796.359 182.836C804.375 155.72 807.29 136.665 803.646 108.084C802.067 95.6957 801.583 90.0541 800.117 89.7864C798.201 89.4363 794.608 98.2668 784.701 113.214C767.941 139.597 766.484 208.485 773.042 267.846C779.6 327.208 762.84 286.901 754.097 265.648C745.352 245.128 746.81 213.615 754.097 190.897C761.383 168.178 754.097 125.673 754.097 125.673C733.693 136.665 727.864 196.027 727.864 196.027C713.483 206.151 692.717 258.376 685.169 277.361L684.872 278.107C682.08 285.128 679.18 290.32 676.173 295.704C674.7 298.342 673.2 301.026 671.675 303.994C684.722 310.629 688.076 327.334 688.076 352.841C688.076 421.796 634.514 534.764 589.023 534.764C564.811 534.764 549.402 494.418 559.674 452.605C561.697 443.76 567.029 422.986 575.46 399.552C562.634 424.423 540.324 445.963 515.652 454.806C514.184 456.273 511.249 456.273 509.781 457.74C506.847 459.207 504.646 462.875 508.314 465.809C514.184 470.21 520.787 478.28 525.19 506.155C525.924 511.29 529.592 515.691 533.995 518.625C538.397 520.826 544.267 523.76 542.799 528.162C540.598 534.764 533.261 535.497 527.391 533.296C508.304 525.439 504.679 513.717 499.759 497.802C498.248 492.916 496.614 487.634 494.374 481.948C489.971 472.411 484.835 465.076 472.362 465.076C469.427 465.076 467.226 470.21 466.492 473.879C461.356 490.017 459.155 496.619 454.019 512.023C453.767 512.779 453.522 513.527 453.28 514.266C450 524.291 447.293 532.563 435.676 532.563C422.469 532.563 422.469 512.023 426.871 499.553C440.078 462.141 487.036 313.23 487.036 313.23C491.438 302.96 498.042 300.025 508.314 300.759C550.87 300.759 586.823 304.427 586.823 355.042C586.96 362.611 585.911 370.36 583.857 378.048C592.071 358.691 602.229 339.406 614.223 324.943C602.314 318.054 589.013 309.361 575.352 300.433C558.056 289.129 540.183 277.449 523.835 268.579C468.456 238.532 475.742 253.922 475.742 253.922C471.208 251.435 463.36 246.525 453.127 239.546C368.786 310.913 274.257 437.175 274.257 448.204C274.257 448.204 274.991 455.539 274.991 464.342C274.991 508.356 270.588 568.507 232.435 568.507C226.272 568.507 222.403 565.926 220.005 561.969C205.498 581.995 279 581.508 279 581.508C252.768 613.754 300.86 610.822 300.86 610.822C303.047 629.144 346.767 629.876 346.767 629.876C331.465 650.396 380.286 661.389 380.286 661.389C354.054 688.505 423.278 687.772 423.278 687.772C411.619 723.682 458.983 731.011 458.983 731.011C460.44 752.996 497.603 752.996 497.603 752.996C506.347 784.509 545.696 782.31 545.696 782.31C548.536 788.341 555.615 791.897 562.726 793.991C563.5 791.283 562.194 789.285 557.474 787.107C542.065 780.505 525.19 757.031 536.929 738.692C539.13 735.025 543.533 735.025 545.734 737.225C553.805 744.927 553.805 752.263 553.805 758.957C553.805 765.651 553.805 771.702 561.875 776.837C569.947 781.972 571.414 781.238 577.284 774.637C590.491 759.232 725.496 593.448 734.3 581.711C709.517 584.651 686.656 581.099 663.655 577.525C646.48 574.856 629.227 572.175 611.035 572.175C556.006 572.175 529.592 594.182 529.592 622.057C529.592 644.064 542.799 651.399 557.474 651.399C569.947 651.399 578.751 640.396 583.154 625.725C584.621 620.59 589.023 620.59 593.426 622.79C606.633 629.393 609.568 633.06 602.964 647.731C597.095 660.202 577.284 673.406 564.077 673.406C536.929 673.406 517.852 657.268 517.852 626.458C517.852 590.514 549.402 558.971 610.301 558.971C632.935 558.971 652.451 561.197 671.058 563.319C686.231 565.049 700.798 566.711 715.958 567.04C732.963 567.5 746.801 561.627 757.293 557.175C763.55 554.519 768.617 552.369 772.454 552.369C784.193 552.369 801.069 564.839 804.004 574.376C806.939 587.58 804.738 598.583 800.335 610.32C800.335 610.32 789.835 633.007 776.159 663.904C780.396 656.669 786.053 654.414 795.199 655.067C836.288 655.067 870.773 658.735 870.773 707.883C872.24 744.561 840.69 788.574 802.536 802.512C801.742 803.306 800.733 803.67 799.625 804.07C798.686 804.409 797.676 804.773 796.667 805.446C793.732 806.913 791.531 810.581 795.199 813.515C801.069 817.917 807.673 825.986 811.341 852.394C811.521 853.657 811.835 854.831 812.271 855.928C817.9 853.944 823.369 851.785 829.15 846.801C836.491 840.122 844.837 834.791 853.224 829.435C856.391 827.412 859.565 825.385 862.692 823.281C881.909 769.506 908.193 695.413 908.193 695.413C918.924 669.929 913.1 669.582 905.856 669.149C905.176 669.109 904.483 669.068 903.79 669.005C900.489 668.638 897.187 668.455 893.884 668.271C890.583 668.088 887.282 667.904 883.979 667.537C882.512 667.537 880.311 666.804 880.311 665.337C879.578 663.87 879.578 662.403 881.045 660.935C881.778 660.202 883.246 659.468 884.713 659.468L955.15 656.534C960.287 655.8 965.423 655.8 970.559 655.8C972.3 655.8 973.583 656.26 975.133 656.815C975.542 656.962 975.969 657.115 976.429 657.268C976.429 658.735 977.163 660.202 977.163 662.403C977.163 663.87 975.695 665.337 974.227 666.07C972.026 666.804 969.825 666.804 967.624 666.804C962.488 666.804 958.82 666.804 953.683 667.537C948.548 668.271 944.878 670.472 942.677 675.606L942.668 675.626C939.737 682.222 936.805 688.817 934.606 695.413C933.532 698.483 932.039 702.388 930.035 707.634C924.264 722.733 914.253 748.932 897.753 798.26C907.72 793.482 917.851 790.509 924.537 788.547C925.936 788.136 927.185 787.77 928.25 787.44C932.249 785.246 936.973 780.681 941.609 776.202C946.264 771.703 950.83 767.291 954.482 765.455C958.068 763.651 963.419 763.978 969.319 764.338C975.407 764.71 982.08 765.117 988.001 763.256C998.931 759.592 990.915 772.05 982.9 782.31C974.885 792.57 953.024 817.487 939.908 830.678C931.114 839.523 918.388 854.628 906.344 868.924C900.426 875.949 894.672 882.779 889.63 888.574C874.327 906.163 839.351 970.654 839.351 970.654C834.979 990.441 826.235 997.036 824.778 987.509C823.727 980.642 820.784 980.629 816.221 980.607C814.453 980.599 812.442 980.59 810.204 980.181C802.188 978.715 800.731 967.722 802.917 948.668C805.104 929.614 819.677 909.827 819.677 909.827C815.232 912.807 813.13 916.125 809.514 921.833C807.795 924.546 805.734 927.799 802.917 931.813C794.902 944.271 792.716 946.47 793.445 936.943C794.173 927.415 815.305 895.903 815.305 895.903C807.29 900.3 799.274 907.628 789.072 927.415C778.142 947.935 791.259 901.033 791.259 901.033C781.057 912.758 774.499 927.415 774.499 927.415H769.398C751.181 928.148 695.803 961.127 676.128 973.585C655.725 986.044 659.368 979.448 671.027 958.928C677.53 946.72 692.028 934.252 705.469 925.229C705.275 925.162 705.102 925.091 704.952 925.016C704.393 924.793 703.817 924.569 703.235 924.343C699.994 923.085 696.545 921.747 694.68 919.881C664.597 897.141 669.733 840.657 682.206 802.512C689.746 779.896 676.909 782.747 652.284 788.215C636.174 791.792 615.019 796.49 591.224 795.91C587.587 795.91 584.952 796.912 582.489 799.329C598.367 830.225 660.826 821.151 660.826 821.151C639.694 840.206 634.593 891.505 634.593 891.505C614.19 893.704 593.787 925.217 593.787 925.217C538.409 979.448 384.658 1132.61 372.999 1157.53C361.341 1183.18 357.697 1213.23 365.712 1218.36C370.639 1221.51 373.363 1231.03 376.254 1241.14C378.067 1247.47 379.945 1254.03 382.472 1259.4C384.803 1264.61 384.924 1268.52 385.062 1272.95C385.311 1280.98 385.612 1290.7 399.231 1312.9C420.363 1346.61 437.851 1315.1 437.851 1315.1L646.252 997.77C753.368 927.415 773.771 934.744 773.771 934.744C774.499 939.141 783.243 939.874 783.243 939.874C781.057 955.997 790.53 954.531 790.53 954.531C790.53 964.058 797.088 987.509 805.104 988.242C813.848 989.708 815.305 995.571 810.204 1010.23C805.99 1025.06 818.021 1027.64 837.165 1031.74L839.351 1032.21C842.476 1032.89 845.019 1033.41 847.216 1033.85C859.372 1036.33 860.961 1036.66 891.816 1049.07C928.25 1063.73 958.125 1100.37 958.854 1114.29C959.478 1126.22 957.428 1126.32 952.247 1126.56C951.38 1126.6 950.425 1126.65 949.381 1126.75C942.094 1127.48 934.808 1130.42 925.335 1136.28C915.862 1141.41 927.521 1153.13 927.521 1153.13C881.614 1189.78 936.994 1203.7 936.994 1203.7C915.862 1183.91 934.808 1162.66 934.808 1162.66C938.451 1161.93 949.381 1156.07 951.567 1148C953.443 1141.09 958.004 1139.03 966.17 1135.34C967.519 1134.73 968.964 1134.07 970.513 1133.35C977.487 1130.54 979.121 1140.86 980.904 1152.13C981.916 1158.52 982.976 1165.22 985.086 1169.99C990.187 1182.45 985.086 1190.51 979.985 1196.37C977.605 1199.56 977.816 1202.1 978.15 1206.12C978.43 1209.48 978.795 1213.88 977.799 1220.56C974.885 1235.21 946.466 1227.89 946.466 1227.89C966.687 1249.58 985.659 1228.01 994.735 1217.69C995.472 1216.85 996.143 1216.09 996.745 1215.43C1000.65 1210.78 1000.23 1209.27 999.616 1207.08C998.97 1204.77 998.112 1201.7 1001.85 1193.44C1007.66 1180.57 1003.73 1175.17 1001.16 1171.65C1000.51 1170.76 999.953 1170 999.659 1169.26C998.202 1165.59 997.473 1163.39 994.559 1147.27C991.644 1131.15 1006.22 1150.94 1006.22 1156.8C1006.22 1162.66 1014.96 1172.19 1022.98 1178.78C1030.36 1184.86 1030.32 1189.7 1030.27 1196.15C1030.27 1196.7 1030.26 1197.26 1030.26 1197.84C1030.26 1198.63 1030.24 1199.37 1030.22 1200.07C1030.04 1206.49 1029.94 1209.97 1047.02 1227.15C1065.97 1246.21 1032.45 1260.86 1032.45 1260.86C1050.67 1264.53 1057.95 1255.73 1063.78 1236.68C1069.61 1218.36 1052.85 1197.11 1047.02 1193.44C1043.48 1190.89 1041.69 1184.1 1039.96 1177.49C1039.19 1174.58 1038.44 1171.72 1037.55 1169.26C1036.04 1165.09 1033.18 1160.54 1030.26 1155.9C1027.52 1151.55 1024.74 1147.13 1022.98 1142.87C1019.33 1134.08 1039.01 1148.74 1041.92 1159.73C1044.84 1170.72 1057.95 1182.45 1068.16 1191.24C1079.08 1200.04 1075.44 1227.89 1075.44 1227.89C1097.59 1205.07 1083.7 1187.09 1071.47 1171.25C1067.2 1165.72 1063.13 1160.45 1060.87 1155.33C1052.15 1135.6 1049.23 1134.09 1025.37 1121.73L1025.16 1121.62C1008.63 1112.55 996.575 1098.98 986.867 1088.05C982.455 1083.08 978.528 1078.66 974.885 1075.45C963.955 1065.19 922.42 1040.27 898.374 1029.28C875.056 1018.29 854.653 1007.3 845.91 990.441C837.165 973.585 896.188 888.574 896.188 888.574C898.646 887.956 908.365 884.962 921.618 880.879C955.492 870.443 1012.46 852.893 1030.26 849.733C1055.04 845.336 1049.94 859.993 1041.92 871.718C1033.18 884.177 1053.58 917.888 1053.58 917.888C1053.58 975.051 1096.57 942.072 1096.57 942.072C1057.95 955.264 1067.43 912.758 1067.43 912.758C1072.53 909.094 1070.34 894.437 1065.24 886.376C1060.74 880.718 1063.19 873.314 1065.54 866.186C1066.24 864.08 1066.93 861.998 1067.43 859.993C1069.61 851.199 1073.98 851.199 1076.9 859.993C1078.17 863.83 1081.38 868.644 1085.09 874.191C1089.87 881.357 1095.47 889.746 1098.76 898.834C1104.59 914.224 1113.33 923.018 1113.33 923.018C1117.7 936.21 1094.39 966.257 1094.39 966.257C1116.98 955.997 1122.08 931.08 1123.53 920.087C1125.72 909.094 1122.81 898.101 1114.06 881.245C1105.32 864.39 1126.45 884.177 1130.82 895.903C1135.19 907.628 1142.48 920.087 1142.48 920.087C1141.75 930.347 1127.91 951.599 1127.91 951.599C1146.12 945.004 1151.95 922.285 1151.95 922.285C1165.8 940.607 1137.38 965.524 1137.38 965.524C1181.1 965.524 1161.43 922.285 1161.43 922.285C1173.8 913.986 1157.62 892.629 1142.29 872.388C1141.38 871.183 1140.47 869.981 1139.56 868.787C1122.81 847.534 1098.76 833.61 1074.71 825.549C1051.78 817.861 990.425 836.163 956.977 846.14C955.348 846.626 953.785 847.092 952.295 847.534C920.234 857.061 935.536 842.404 935.536 842.404C1054.31 742.003 1073.98 675.313 1079.81 629.144C1083.33 602.01 1078.25 576.142 1073.57 552.332C1069.53 531.771 1065.79 512.745 1068.16 495.764C1073.69 458.02 1081.31 450.054 1097.14 433.491C1100.06 430.437 1103.26 427.091 1106.77 423.212C1127.64 400.2 1204.44 411.567 1213.19 412.862C1213.91 412.969 1214.17 413.007 1213.89 412.952L1144.67 369.713C1136.65 345.529 1106.05 308.886 1034.64 287.634C991.556 274.813 956.697 292.13 932.139 313.359C939.574 323.845 943.925 338.323 945.612 348.44C947.3 364.634 950.849 376.639 954.548 384.312C956.265 379.932 955.528 374.618 958.125 369.713ZM848.095 137.399C846.638 154.987 833.522 176.24 833.522 176.24C825.507 190.164 839.351 122.741 845.91 111.016C851.253 100.266 849.861 116.616 848.47 132.965C848.343 134.45 848.217 135.934 848.095 137.399ZM800.003 125.673C800.731 139.597 801.46 153.521 797.817 164.514C797.417 165.721 796.903 167.36 796.303 169.272C791.443 184.771 780.977 218.146 780.329 183.568C780.329 183.568 779.6 151.323 785.429 135.2C791.987 119.81 799.274 111.748 800.003 125.673ZM747.586 147.746C748.213 143.026 748.544 140.538 749.724 147.658C751.609 158.396 748.08 184.377 747.069 191.818C746.907 193.011 746.81 193.727 746.81 193.828C735.879 204.088 740.98 165.98 744.623 160.117C746.3 157.418 747.051 151.771 747.586 147.746ZM716.205 237.067C722.763 215.814 727.135 226.807 725.678 237.067C725.107 240.796 725.765 254.068 726.471 268.315C727.109 281.203 727.787 294.888 727.631 303.026C730.081 300.541 733.527 299.052 737.969 298.558C776.857 294.157 810.608 319.831 804.004 363.845C796.033 411.047 761.417 438.783 742.549 453.901C738.838 456.874 735.737 459.359 733.566 461.408C741.638 466.543 747.508 479.747 745.306 493.685C738.703 532.563 708.62 539.898 668.999 538.431L668.347 538.385C658.119 537.661 644.13 536.672 647.721 523.027L724.762 307.361C724.809 307.253 724.856 307.146 724.904 307.04C721.779 296.381 710.528 255.465 716.205 237.067ZM1075.44 357.255C1075.44 360.186 1072.53 363.118 1069.61 363.118C1066.7 363.118 1063.78 360.186 1063.78 357.255C1063.78 354.323 1066.7 351.392 1069.61 351.392C1072.53 351.392 1075.44 353.59 1075.44 357.255ZM965.412 37.7304C958.125 58.2502 930.436 111.748 922.42 122.741C921.757 123.63 921.031 124.617 920.259 125.666C910.844 138.456 894.499 160.659 900.56 131.536C900.56 131.536 906.389 107.351 915.133 90.4961C923.878 73.6403 939.179 50.1889 948.652 39.9287C958.125 29.6691 972.698 17.2106 965.412 37.7304ZM335.889 452.605C325.617 494.418 341.025 534.764 365.238 534.764C411.463 534.764 464.291 421.796 465.025 352.841C465.025 319.098 459.155 300.759 432.741 300.759C376.244 300.759 341.759 426.931 335.889 452.605Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M716.325 918.533C721.184 915.81 725.468 913.806 728.593 912.758C741.709 908.361 761.383 898.834 781.057 876.116C785.977 870.435 790.486 866.587 794.722 863.805C791.11 858.308 789.057 851.863 786.69 844.433C785.173 839.67 783.527 834.502 781.259 828.92C777.59 820.117 771.72 812.782 759.981 812.782C757.046 812.782 754.845 817.917 754.111 820.851C751.804 827.77 750.238 832.913 748.746 837.81C746.916 843.815 745.201 849.448 742.371 857.529C742.055 858.415 741.75 859.295 741.448 860.164C738.252 869.373 735.489 877.335 724.762 877.335C711.555 877.335 712.289 857.529 716.691 845.792C729.045 812.17 769.004 684.839 774.116 668.527C759.693 701.219 742.269 741.896 729.898 774.637C728.431 778.304 729.164 781.239 730.632 784.907C732.302 787.828 733.021 789.087 733.331 790.44C733.566 791.466 733.566 792.545 733.566 794.443L732.099 795.91C724.762 795.176 721.093 798.844 719.626 805.446C718.31 810.708 716.741 816.184 715.125 821.824C706.828 850.779 697.295 884.048 714.49 914.746C715.121 916.008 715.752 917.271 716.325 918.533Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M226.534 555.782C227.545 556.497 228.889 556.77 230.233 556.77C230.967 556.77 232.435 556.77 233.169 555.303C234.666 553.691 236.037 551.554 237.284 549.067C232.87 551.48 229.321 553.714 226.534 555.782Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M239.37 544.314C235.713 543.966 230.613 543.453 224.625 542.776C226.449 521.289 237.4 497.352 243.441 497.352C247.109 497.352 247.109 503.221 247.109 505.421C247.109 511.474 244.633 530.731 239.37 544.314Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M216.31 541.796C175.161 536.736 109.312 525.457 149.296 508.223L190.102 495.764C190.102 495.764 -38.7019 428.342 182.815 445.197C182.815 445.197 -7.36946 360.919 53.1111 370.446C113.591 379.973 156.582 387.302 156.582 387.302C156.582 387.302 59.6691 330.139 29.7936 285.435C18.6854 268.814 13.8226 262.222 14.6808 261.366C15.8377 260.212 27.3902 269.479 48.0527 278.651C63.0956 302.388 88.8216 319.831 120.175 319.831C155.394 319.831 211.157 302.96 241.973 277.285C244.908 277.285 246.375 278.752 246.375 283.887C246.375 285.128 246.025 287.419 245.49 290.924C244.125 299.85 241.559 316.649 240.505 344.039C239.577 370.034 241.881 401.317 243.697 425.991C244.751 440.308 245.642 452.399 245.642 459.941C245.642 465.809 244.174 471.678 240.505 476.813C236.898 482.584 216.97 520.989 216.31 541.796Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M79.6579 290.148C90.4404 299.521 104.093 305.16 118.707 305.16C121.291 305.16 123.844 305.104 126.366 304.995C118.047 302.509 103.096 297.888 79.6579 290.148Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M132.165 304.647C122.579 294.233 87.8075 256.298 58.0217 221.74C60.409 210.21 65.2372 199.931 71.8379 191.429C111.037 219.087 162.855 253.45 211.484 278.083C189.709 291.692 163.358 302.249 132.165 304.647Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M214.844 275.936C249.159 253.523 271.633 223.883 283.389 208.379C286.935 203.703 289.506 200.312 291.132 198.795C293.334 196.594 296.268 195.86 298.469 195.86C303.606 195.86 311.677 200.995 311.677 208.331C311.677 211.998 310.209 218.601 307.274 223.002C268.387 288.289 268.387 337.437 270.588 401.99C270.652 402.432 270.715 402.89 270.78 403.358C271.464 408.333 272.308 414.46 274.991 414.46C275.724 414.46 277.192 413.727 278.659 412.26C285.3 405.332 290.349 397.951 296.535 388.908C306.071 374.97 318.306 357.085 343.227 330.835C348.348 325.528 354.498 318.85 361.511 311.235C382.034 288.952 409.949 258.644 441.121 231.169C394.469 197.936 316.041 134.542 262.969 62.6475C202.474 -17.8609 222.944 36.1426 235.425 69.0709C237.827 75.409 239.933 80.9661 241.109 84.6331C243.102 90.8439 247.108 98.8618 251.076 106.801C261.621 127.902 271.887 148.444 243.295 133.001C203.947 111.748 142.009 29.6691 135.451 16.4773C133.681 12.9163 132.176 9.14196 130.966 6.10528C127.692 -2.1075 126.569 -4.92428 128.165 16.4773C130.35 45.0592 152.211 94.1601 161.684 113.214C165.228 119.833 175.454 132.201 185.43 144.265C204.171 166.929 222.025 188.521 193.017 168.911C148.567 138.864 54.568 58.2502 46.5531 47.9899C38.5374 37.7304 44.3666 60.4485 44.3666 60.4485C51.096 90.3571 69.9816 122.412 93.1836 152.68C97.7853 151.661 102.628 151.113 107.702 151.113C122.905 151.113 125.965 153.256 133.091 158.246L133.382 158.449C134.85 159.183 135.583 160.65 135.583 162.116C135.583 163.584 134.85 165.784 132.649 166.518C123.277 165.155 114.142 165.85 105.64 168.289C145.505 216.401 193.211 257.954 214.844 275.936Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M53.3553 178.23C41.9491 169.989 32.2052 162.777 24.6925 157.185C-3.61572 135.687 -3.52526 135.841 4.9898 150.34C7.21453 154.129 10.0144 158.897 13.0334 164.514C16.8622 171.638 27.0791 184.883 40.0627 200.541C43.3215 192.749 47.7776 185.098 53.3553 178.23Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M641.041 337.667C623.247 360.307 607.267 401.987 600.029 424.73C583.154 476.079 581.686 518.625 597.095 518.625C617.639 518.625 677.804 429.865 677.804 349.174C677.804 333.064 677.073 322.07 663.932 322.032C662.907 324.928 661.872 328.099 660.826 331.605C658.443 339.594 651.297 340.779 641.041 337.667Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M801.069 682.942C804.738 668.271 807.673 666.804 817.211 666.804C838.489 666.804 848.028 679.274 847.294 693.945C847.294 732.824 820.88 792.976 770.253 792.976C767.318 792.976 766.585 791.508 766.585 789.308C766.585 785.233 773.829 764.181 782.157 739.984C788.82 720.622 796.177 699.246 801.069 682.942Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M755.579 580.244C759.981 575.109 765.117 570.708 773.187 569.974C773.921 572.175 774.655 574.376 772.454 575.109C771.72 579.511 770.253 583.912 768.785 587.58C732.833 668.271 715.958 707.883 693.212 761.433C691.011 765.834 688.076 769.502 682.206 768.768C668.978 767.967 660.13 770.011 647.764 772.869C637.497 775.242 624.804 778.176 605.166 780.505C602.964 781.239 600.029 781.239 596.361 781.239C594.393 781.239 596.531 777.134 597.529 775.216C597.648 774.989 597.75 774.792 597.828 774.637L755.579 580.244Z" fill="#7ABADD" data-v-139f4ed8></path><path d="M513.45 330.835C517.852 315.43 520.787 313.963 530.325 313.963C552.337 313.963 561.875 327.167 561.875 343.305C561.875 383.651 534.728 446.003 481.9 446.003C478.231 446.003 477.498 443.803 477.498 441.602C477.498 437.359 485.599 413.727 494.701 387.174C501.335 367.821 508.501 346.916 513.45 330.835Z" fill="#7ABADD" data-v-139f4ed8></path></g></svg><div class="plug__col" data-v-139f4ed8><p class="plug__subtitle" data-v-139f4ed8>Создаём дизайн для сильных брендов</p><h1 class="plug__title" data-v-139f4ed8>САЙТ В РАЗРАБОТКЕ</h1><a href="https://disk.yandex.ru/i/ffr_32LgvsLmYg" target="_blank" rel="noopener noreferrer" class="${ssrRenderClass([{ "plug-link--nav": _ctx.menu }, "plug-link plug-link--pc"])}" data-v-139f4ed8><span data-v-139f4ed8>Презентация</span><div class="plug-link__fill" data-v-139f4ed8></div></a><div class="plug__date" data-v-139f4ed8>2018 - ${ssrInterpolate(new Date().getFullYear())}</div></div><input class="plug__input" type="text"${ssrRenderAttr("value", pass.value)} data-v-139f4ed8></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Plug.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Plug = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-139f4ed8"]]);
const app_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  name: "App",
  // transition: {
  // 	afterLeave(el) {
  // 		console.log('afterLeave', el);
  // 	},
  // },
  components: {
    PreloaderElement,
    HeaderPage,
    CurtainsElement,
    Plug
  },
  data() {
    return {
      curtains: "Preloader",
      menu: false,
      currentPageName: "",
      isDeveloper: false,
      pass: "Ff267S_Zs555"
    };
  },
  watch: {
    curtains() {
      console.log("%c%s", "background: lightgreen; color: #222; padding: 2px 6px; border-radius: 20px;", "Curtains:", this.curtains);
    },
    "$route.name": {
      handler: function(name) {
        this.currentPageName = name;
        console.log("%c%s", "background: lightblue; color: #222; padding: 2px 6px; border-radius: 20px;", "Current Page:", name);
        if (name === "works" || name === "about" || name === "policy" || name === "services") {
          document.body.classList.add("lines");
        } else {
          document.body.classList.remove("lines");
        }
      },
      deep: true
      // immediate: true,
    }
  },
  mounted() {
    var _a;
    let password = localStorage.getItem("VorobeyArtPassword");
    if (password === this.pass)
      this.isDeveloper = true;
    console.log(this.isDeveloper, password);
    this.currentPageName = (_a = this.$route) == null ? void 0 : _a.name;
    if (this.currentPageName === "works" || this.currentPageName === "about" || this.currentPageName === "policy" || this.currentPageName === "services") {
      document.body.classList.add("lines");
    } else {
      document.body.classList.remove("lines");
    }
    if (this.curtains === "Preloader") {
      setTimeout(() => {
        this.curtains = "Nothing";
      }, 3500);
    }
  },
  methods: {
    setCurtains(curtains) {
      this.curtains = curtains;
    },
    setMenu(menu) {
      this.menu = menu;
      if (menu) {
        this.curtains = "Menu";
        setTimeout(() => {
          this.menu = false;
          this.curtains = "Nothing";
        }, 500);
      }
    },
    checkPass(e) {
      localStorage.setItem("VorobeyArtPassword", e);
      if (e === this.pass)
        this.isDeveloper = true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_HeaderPage = resolveComponent("HeaderPage");
  const _component_PreloaderElement = resolveComponent("PreloaderElement");
  const _component_CurtainsElement = resolveComponent("CurtainsElement");
  const _component_NuxtPage = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  if (((_a = _ctx.$route.matched[0]) == null ? void 0 : _a.name) !== "NotFound") {
    _push(ssrRenderComponent(_component_HeaderPage, {
      curtains: $data.curtains,
      pages: {
        contacts: $data.currentPageName === "contacts",
        works: $data.currentPageName === "works",
        about: $data.currentPageName === "about",
        policy: $data.currentPageName === "policy",
        services: $data.currentPageName === "services"
      },
      home: $data.currentPageName === "index",
      onSetCurtains: $options.setCurtains,
      onSetMenu: $options.setMenu
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (((_b = _ctx.$route.matched[0]) == null ? void 0 : _b.name) !== "NotFound") {
    _push(ssrRenderComponent(_component_PreloaderElement, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (((_c = _ctx.$route.matched[0]) == null ? void 0 : _c.name) !== "NotFound" && $data.curtains !== "Menu" && $data.curtains !== "Preloader") {
    _push(ssrRenderComponent(_component_CurtainsElement, {
      menu: this.menu,
      onSetCurtains: $options.setCurtains,
      onSetMenu: $options.setMenu
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_NuxtPage, {
    class: { menu: $data.curtains === "Menu" },
    curtains: $data.curtains
  }, {
    default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), {
          key: _ctx.$route.path
        }, null), _parent2, _scopeId);
      } else {
        return [
          (openBlock(), createBlock(resolveDynamicComponent(Component), {
            key: _ctx.$route.path
          }))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = /* @__PURE__ */ defineAsyncComponent(() => import("./_nuxt/error-component-476f9c00.js").then((r) => r.default || r));
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import("./_nuxt/island-renderer-a66ba870.js").then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = callWithNuxt(nuxtApp, showError, [err]);
        onServerPrefetch(() => p);
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
export {
  _export_sfc as _,
  __nuxt_component_0$1 as a,
  createError as c,
  entry$1 as default,
  useNuxtApp as u
};
//# sourceMappingURL=server.mjs.map
