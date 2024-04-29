import { effectScope, reactive, hasInjectionContext, getCurrentInstance, inject, toRef, version, unref, h, shallowRef, shallowReactive, isReadonly, isRef, isShallow, isReactive, toRaw, defineComponent, provide, ref, watch, Suspense, nextTick, Transition, computed, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, mergeProps, resolveDynamicComponent, openBlock, createBlock, defineAsyncComponent, onErrorCaptured, onServerPrefetch, createApp } from "vue";
import { joinRelativeURL, withQuery, hasProtocol, parseURL, isScriptProtocol, joinURL, withoutBase, parseQuery, withTrailingSlash, withoutTrailingSlash } from "ufo";
import { useRuntimeConfig as useRuntimeConfig$1 } from "#internal/nitro";
import { $fetch } from "ofetch";
import { createHooks } from "hookable";
import { getContext } from "unctx";
import { sanitizeStatusCode, createError as createError$1 } from "h3";
import { getActiveHead } from "unhead";
import { defineHeadPlugin } from "@unhead/shared";
import { START_LOCATION, createMemoryHistory, createRouter as createRouter$1, RouterView } from "vue-router";
import { toRouteMatcher, createRouter } from "radix3";
import defu$1, { defu } from "defu";
import "klona";
import "devalue";
import { createI18n } from "vue-i18n";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderVNode, ssrRenderSuspense } from "vue/server-renderer";
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.11.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set(),
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
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
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
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
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
// @__NO_SIDE_EFFECTS__
function tryUseNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  return nuxtAppInstance || null;
}
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  const nuxtAppInstance = /* @__PURE__ */ tryUseNuxtApp();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
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
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error2 = useError();
    if (false)
      ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && process.env.NODE_ENV !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
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
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const appPageTransition = { "name": "page" };
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const __nuxt_page_meta$w = null;
const __nuxt_page_meta$v = null;
const __nuxt_page_meta$u = null;
const __nuxt_page_meta$t = null;
const __nuxt_page_meta$s = null;
const __nuxt_page_meta$r = null;
const __nuxt_page_meta$q = null;
const __nuxt_page_meta$p = null;
const __nuxt_page_meta$o = null;
const __nuxt_page_meta$n = null;
const __nuxt_page_meta$m = null;
const __nuxt_page_meta$l = null;
const __nuxt_page_meta$k = null;
const __nuxt_page_meta$j = null;
const __nuxt_page_meta$i = null;
const __nuxt_page_meta$h = null;
const __nuxt_page_meta$g = null;
const __nuxt_page_meta$f = null;
const __nuxt_page_meta$e = null;
const __nuxt_page_meta$d = null;
const __nuxt_page_meta$c = null;
const __nuxt_page_meta$b = null;
const __nuxt_page_meta$a = null;
const __nuxt_page_meta$9 = null;
const __nuxt_page_meta$8 = null;
const __nuxt_page_meta$7 = null;
const __nuxt_page_meta$6 = null;
const __nuxt_page_meta$5 = null;
const __nuxt_page_meta$4 = null;
const __nuxt_page_meta$3 = null;
const __nuxt_page_meta$2 = null;
const __nuxt_page_meta$1 = null;
const __nuxt_page_meta = null;
const _routes = [
  {
    name: "404",
    path: "/404",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.redirect,
    component: () => import("./_nuxt/404-Do-zzj8r.js").then((m) => m.default || m)
  },
  {
    name: "about",
    path: "/about",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.redirect,
    component: () => import("./_nuxt/about-bAtgWcs0.js").then((m) => m.default || m)
  },
  {
    name: "agreements",
    path: "/agreements",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.redirect,
    component: () => import("./_nuxt/agreements-B1Rh-OaK.js").then((m) => m.default || m)
  },
  {
    name: "aladdin",
    path: "/aladdin",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.redirect,
    component: () => import("./_nuxt/aladdin-DhYmBlPZ.js").then((m) => m.default || m)
  },
  {
    name: "contacts",
    path: "/contacts",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.redirect,
    component: () => import("./_nuxt/contacts-CN9BDHre.js").then((m) => m.default || m)
  },
  {
    name: "energotek",
    path: "/energotek",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.redirect,
    component: () => import("./_nuxt/energotek-ClZg6HbN.js").then((m) => m.default || m)
  },
  {
    name: "energotekAR",
    path: "/energotekAR",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.redirect,
    component: () => import("./_nuxt/energotekAR-tZuGq9Tm.js").then((m) => m.default || m)
  },
  {
    name: "flipknife",
    path: "/flipknife",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.redirect,
    component: () => import("./_nuxt/flipknife-DRCP3LjB.js").then((m) => m.default || m)
  },
  {
    name: "genezis",
    path: "/genezis",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.redirect,
    component: () => import("./_nuxt/genezis-BNB_fgP0.js").then((m) => m.default || m)
  },
  {
    name: "goup",
    path: "/goup",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.redirect,
    component: () => import("./_nuxt/goup-CK7WdsWu.js").then((m) => m.default || m)
  },
  {
    name: "hone",
    path: "/hone",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.redirect,
    component: () => import("./_nuxt/hone-xIPKJ5y3.js").then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.redirect,
    component: () => import("./_nuxt/index-YYFTegWg.js").then((m) => m.default || m)
  },
  {
    name: "izenbot",
    path: "/izenbot",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.redirect,
    component: () => import("./_nuxt/izenbot-DVbfGDU4.js").then((m) => m.default || m)
  },
  {
    name: "kvanttelekomBrend",
    path: "/kvanttelekomBrend",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.redirect,
    component: () => import("./_nuxt/kvanttelekomBrend-e1sCCVKQ.js").then((m) => m.default || m)
  },
  {
    name: "marusya",
    path: "/marusya",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.redirect,
    component: () => import("./_nuxt/marusya-CKg0wuw5.js").then((m) => m.default || m)
  },
  {
    name: "mobdebut",
    path: "/mobdebut",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.redirect,
    component: () => import("./_nuxt/mobdebut-dHPKQBZn.js").then((m) => m.default || m)
  },
  {
    name: "motorika",
    path: "/motorika",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.redirect,
    component: () => import("./_nuxt/motorika-C2Pz82V5.js").then((m) => m.default || m)
  },
  {
    name: "oceanview",
    path: "/oceanview",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.redirect,
    component: () => import("./_nuxt/oceanview-BqMd3uUx.js").then((m) => m.default || m)
  },
  {
    name: "ownwifi",
    path: "/ownwifi",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.redirect,
    component: () => import("./_nuxt/ownwifi-CF_fcMSN.js").then((m) => m.default || m)
  },
  {
    name: "pawpaw",
    path: "/pawpaw",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.redirect,
    component: () => import("./_nuxt/pawpaw-kjdFoAcv.js").then((m) => m.default || m)
  },
  {
    name: "policy",
    path: "/policy",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.redirect,
    component: () => import("./_nuxt/policy-LK-9ID8g.js").then((m) => m.default || m)
  },
  {
    name: "primetravel",
    path: "/primetravel",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.redirect,
    component: () => import("./_nuxt/primetravel-BQmd3v8C.js").then((m) => m.default || m)
  },
  {
    name: "prozapchast",
    path: "/prozapchast",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.redirect,
    component: () => import("./_nuxt/prozapchast-CVaOwEYP.js").then((m) => m.default || m)
  },
  {
    name: "services",
    path: "/services",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.redirect,
    component: () => import("./_nuxt/services-iY7b_HxR.js").then((m) => m.default || m)
  },
  {
    name: "spicynote",
    path: "/spicynote",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.redirect,
    component: () => import("./_nuxt/spicynote-BUMCVXGW.js").then((m) => m.default || m)
  },
  {
    name: "tomiai",
    path: "/tomiai",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.redirect,
    component: () => import("./_nuxt/tomiai-DF9AssEC.js").then((m) => m.default || m)
  },
  {
    name: "ukigassen",
    path: "/ukigassen",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.redirect,
    component: () => import("./_nuxt/ukigassen-D6as6Td-.js").then((m) => m.default || m)
  },
  {
    name: "unidance",
    path: "/unidance",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect,
    component: () => import("./_nuxt/unidance-BrowNFm1.js").then((m) => m.default || m)
  },
  {
    name: "wballiance",
    path: "/wballiance",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect,
    component: () => import("./_nuxt/wballiance-BeSoxzyP.js").then((m) => m.default || m)
  },
  {
    name: "works",
    path: "/works",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect,
    component: () => import("./_nuxt/works-Cz23GtS6.js").then((m) => m.default || m)
  },
  {
    name: "ximtexp",
    path: "/ximtexp",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect,
    component: () => import("./_nuxt/ximtexp-DlBLQfq5.js").then((m) => m.default || m)
  },
  {
    name: "xplane",
    path: "/xplane",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect,
    component: () => import("./_nuxt/xplane-DBs8ZIpl.js").then((m) => m.default || m)
  },
  {
    name: "zolotoaltaya",
    path: "/zolotoaltaya",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect,
    component: () => import("./_nuxt/zolotoaltaya-DSM2cG7e.js").then((m) => m.default || m)
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const check_45route_45global = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  check_45route_45global,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter$1({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
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
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
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
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure) {
        await nuxtApp.callHook("page:loading:end");
      }
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        const to = router.resolve(initialURL);
        if ("name" in to) {
          to.name = void 0;
        }
        await router.replace({
          ...to,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function useRequestEvent(nuxtApp = /* @__PURE__ */ useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const useStateKeyPrefix = "$s";
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
  const key = useStateKeyPrefix + _key;
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const _0_siteConfig_7pzUtwM1Zj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    const state = useState("site-config");
    {
      const { context } = useRequestEvent();
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = context.siteConfig.get({
          debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    let stack = {};
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
{
  reducers.Island = (data) => data && (data == null ? void 0 : data.__nuxt_island);
}
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const mode = "init";
const nuxt_plugin_03YjkxYbK5 = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
  var _a;
  const hydrationMode = useState("nuxt-delay-hydration-mode", () => mode);
  {
    const event = useRequestEvent();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const _routeRulesMatcher = toRouteMatcher(
      createRouter({ routes: (_a = config.nitro) == null ? void 0 : _a.routeRules })
    );
    const routeRules = defu$1({}, ..._routeRulesMatcher.matchAll(
      withoutBase(event.path.split("?")[0], (/* @__PURE__ */ useRuntimeConfig()).app.baseURL)
    ).reverse());
    if (routeRules.delayHydration)
      hydrationMode.value = routeRules.delayHydration;
  }
});
const preloader$1 = "We create designs for power brands";
const header$1 = {
  about: "About us",
  services: "About us",
  works: "Projects",
  contacts: "Contacts",
  discuss: "Discuss"
};
const main$1 = {
  tagline: "We create designs<br>for power brands"
};
const about$1 = {
  title: "«As for ourselves»",
  text: "Even if you do not have a clue about the creation of design, writing sales texts or codes, we will help you to understand and to decompose tasks into steps.",
  text2: "Our goal is to listen, to fully understand the client’s desires, to grasp the essence and to give options of ready-made solutions.",
  text3: "Every detail matters",
  number1: "Satisfied customers",
  number2: "Experts in team",
  number3: "Completed projects",
  number4: "Combined experience of the team (years)"
};
const services$1 = {
  tagline: "Impossibility<br/>– is not about us",
  list: {
    title1: "Design",
    title2: "Websites",
    title3: "Copyright",
    list1: "UX/UI, Corporate identity, Websites / Applications,  Graphic design, Infographics, 3D",
    list2: "HTML / CSS / JS, iOS / Android, Backend / API, AR, CMS, ^##_//",
    list3: "Copyright, Commercial proposal, Presentations, SMM, Naming, SEO texts"
  },
  stepstext: "Work steps",
  steps: {
    title1: "Design",
    title2: "Websites",
    title3: "Copywriting",
    title4: "Brief",
    title5: "Search for ideas",
    title6: "Sketches",
    title7: "Prototype",
    title8: "Generation",
    title9: "Feedback",
    title10: "Completion",
    title11: "Cooperation",
    title12: "Testing",
    title13: "Delivery",
    title14: "Brief",
    title15: "Prototype",
    title16: "Content creation",
    title17: "Development",
    title18: "Testing",
    title19: "Deployment",
    title20: "Maintenance",
    title21: "Brief",
    title22: "Examination",
    title23: "Writing text",
    title24: "Editing",
    title25: "Project presentation",
    title26: "Edit processing",
    title27: "Completion",
    text1: "Information gathering, understanding of customer needs and project requirements.",
    text2: "Idea generation, we hold brainstorming concepts and create design sketches.",
    text3: "We create preliminary sketches and digital frameworks for visualization of the layout and design structure.",
    text4: "We develop interactive prototypes for functionality testing, user experience and gathering feedback.",
    text5: "Creating visual elements, such as graphics, typography, color schemes and layout.",
    text6: "We consider feedback of customer and interested parties. Then we make changes and refine the design.",
    text7: "Preparing the production of project materials, we ensure their final production meets the technical specifications and requirements.",
    text8: "We interact with the developers, copywriters and other team members to later ensure proper project implementation.",
    text9: "We conduct testing to make sure that the design works as intended and meet the expectations of every user.",
    text10: "Presenting the final results for clients or sending them into production, by ensuring the provision of all necessary files and documentation.",
    text11: "Understanding of the requirements, defining the project goals and research of the target audience and competitors.",
    text12: "Creating visual layout and website’s user interface, including frameworks, layouts and also the choice of the color schemes, fonts and graphics.",
    text13: "Content creation and organization: text, pictures, video and other media elements. This may include working with copywriters, designers and multimedia specialists.",
    text14: "Using the best solutions for your project when transferring the design. Writing clean and efficient code, creating responsive layouts and integrating all necessary functions.",
    text15: "Testing operation of the website on different devices, browsers, screen sizes. Identifying and correcting any errors or problems.",
    text16: "Uploading the website to the server and its accessibility settings for the public. This includes domain registration, set up hosting, and database integration if necessary.",
    text17: "Website performance monitoring, catching any issues that arise, and implementation of updates or improvements.",
    text18: "Studying the technical task, the client's business, defining the purposeof the text. Conducting CustDev when developing and advertising a new product or service.",
    text19: "Studying of the target audience, product/service, competitors. Creating a mind-map with detailed elaboration of avatars of the target audience. Creating a register of business senses for being primarily different from competitors.",
    text20: "Making the conceptual structure and writing the text depending on the customer's goals and type of the text: landing page, emails, articles, selling posts, naming, etc.",
    text21: "Proofreading and checking the text for uniqueness, style, punctuation and spelling with the help of the services “Glavred”, “Orfogrammka”, “Text.ru Antiplagiat”, “ChatGPT”.",
    text22: "Text video presentation with accompanying commentary, explaining the genesis of the idea, why it was written in this way, and not otherwise.",
    text23: "Implementing edits and final approval.",
    text24: "Sending text in a convenient format for the customer: PDF file, link to the Google Docs and so on."
  }
};
const contacts$1 = {
  tagline: "We create designs<br>for power brands",
  button: "Get <br> started",
  modal: "Let’s start",
  input1: "Your name",
  placeholder1: "Please introduce yourself",
  input2: "Company name",
  placeholder2: "Vorobey.art",
  input3: "How to contact?",
  placeholder3: "Phone number",
  input4: "E-mail",
  placeholder4: "E-mail address",
  input5: "Tell us about the project",
  placeholder5: "Need a new website? Copywriter? Please tell us",
  input6: "Please attach additional documents",
  placeholder6: "Maximum 10 files of 25MB each. Limited to Maximum 100MB",
  input7: "How did you Hear about us?",
  placeholder7: "From a friend? From Google? From the VKontakte group?",
  files: "Drag and drop your files here or click to select then on the device",
  send: "Send",
  text1: "By clicking the button “Send” you give <a href='/agreements'>consent for the processing of your personal data</a> and agree to <a href='/policy'>the Privacy Policy </a>"
};
const works$1 = {
  description1: "3D models generation for catalogues",
  description2: "Application development <br/> AR Play Market / App Store",
  description3: "Brand book and presentation development",
  description4: "T-shirt exclusive design",
  description5: "Logo and visualization design",
  description6: "Application development  <br/> AR Play Market / App Store",
  description7: "3D models generation <br/> for marketplaces",
  description8: "Printed products <br/> design",
  description9: "Printed products <br/> design",
  description10: "Application <br/> development",
  description11: "3D models generation <br/> for catalogues",
  description12: "3D models generation <br/> for website",
  description13: "Presentation <br/> development",
  description14: "Presentation <br/> development",
  description15: "Brand book and presentation development",
  description16: "Presentation <br/> development",
  description17: "Presentation <br/> development",
  description18: "Logo and visualization <br/> design",
  description19: "Logo and visualization design",
  description20: "Printed products design",
  description21: "Game design and<br>development",
  description22: "Game design and<br>development",
  description23: "Game design and<br>development",
  description24: "Game design and<brdevelopment",
  description25: "Game design and<br>development",
  description26: "3D models generation <br/> for marketplaces",
  description27: "3D models generation <br/> for website",
  description28: "Software application <br/> design",
  description29: "Website design and <br/> development",
  description30: "Logo and visualization <br/> design",
  description31: "Printed products <br/> design",
  description32: "3D models generation<br/> for website",
  tag1: "All projects",
  tag2: "Graphic design",
  tag3: "3D modeling",
  tag4: "Branding",
  tag5: "WEB development",
  tag6: "Mobile development"
};
const footer$1 = {
  tagline: "We create designs<br>for power brands",
  more: "More",
  contacts: "Contacts"
};
const second_lang$1 = "EN";
const en = {
  preloader: preloader$1,
  header: header$1,
  main: main$1,
  about: about$1,
  services: services$1,
  contacts: contacts$1,
  works: works$1,
  footer: footer$1,
  second_lang: second_lang$1
};
const preloader = "Создаём дизайн для сильных брендов";
const header = {
  about: "О нас",
  services: "Услуги",
  works: "Проекты",
  contacts: "Контакты",
  discuss: "Обсудить"
};
const main = {
  tagline: "Создаем дизайн<br>для сильных брендов"
};
const about = {
  title: "«Как для себя»",
  text: "Даже если вы не разбираетесь в создании дизайна, написании продающих текстов или коде, поможем разобраться и разложить задачу на этапы.",
  text2: "Наша цель — выслушать, максимально понять желания клиента, вникнуть в суть и дать варианты готовых решений. ",
  text3: "Каждая деталь имеет значение",
  number1: "Довольных клиентов",
  number2: "Экспертов в команде",
  number3: "Завершенных проектов",
  number4: "Общий опыт команды (лет)"
};
const services = {
  tagline: "Невозможно<br/>– не наш формат",
  list: {
    title1: "Дизайн",
    title2: "Сайты",
    title3: "Копирайт",
    list1: "UX/UI, Фирменный стиль, Сайты / Приложения,  Графический дизайн, Инфографика, 3D",
    list2: "HTML / CSS / JS, iOS / Android, Backend / API, AR, CMS, ^##_//",
    list3: "Сайты, Ком. предложения, Презентации, SMM, Нейминг, SEO тексты"
  },
  stepstext: "Этапы работы",
  steps: {
    title1: "Дизайн",
    title2: "Сайты",
    title3: "Копирайтинг",
    title4: "Бриф",
    title5: "Поиск идей",
    title6: "Наброски",
    title7: "Прототип",
    title8: "Создание",
    title9: "Обратная связь",
    title10: "Завершение",
    title11: "Сотрудничество",
    title12: "Тестирование",
    title13: "Доставка",
    title14: "Бриф",
    title15: "Прототип",
    title16: "Создание контента",
    title17: "Разработка",
    title18: "Тестирование",
    title19: "Развертывание",
    title20: "Обслуживание",
    title21: "Бриф",
    title22: "Исследование",
    title23: "Написание текста",
    title24: "Редактирование",
    title25: "Презентация работы",
    title26: "Отработка правок",
    title27: "Завершение",
    text1: "Сбор информации, понимание потребностей клиента и требований проекта.",
    text2: "Генерация идей, проводим мозговые штурмы концепций и создаем зарисовки дизайна.",
    text3: "Создаем черновые эскизы и цифровые каркасы для визуализации макета и структуры дизайна.",
    text4: "Разрабатываем интерактивные прототипы для тестирования функциональности, пользовательского опыта и сбора обратной связи.",
    text5: "Создание визуальных элементов, таких как графика, типографика, цветовые схемы и макет.",
    text6: "Учитываем обратную связь заказчика и заинтересованных сторон. Вносим изменения и уточняем дизайн.",
    text7: "Подготовка материалов проекта к производству, обеспечиваем их соответствие техническим спецификациям и требованиям.",
    text8: "Взаимодействуем с разработчиками, копирайтерами и другими членами команды, чтобы обеспечить правильную реализацию проекта далее.",
    text9: "Проводим тестирование, чтобы убедиться, что конструкция работает так, как задумано, и соответствует ожиданиям пользователей.",
    text10: "Презентация окончательных результатов клиенту или отправка его в производство, обеспечивая предоставление всех необходимых файлов и документации.",
    text11: "Понимание требований, определение целей проекта и проведение исследования целевой аудитории и конкурентов.",
    text12: "Создание визуального макета и пользовательского интерфейса веб-сайта, включая каркасы, макеты, а также выбор цветовых схем, шрифтов и графики.",
    text13: "Создание и организация контента: текст, изображения, видео и другие медиа-элементы. Это может включать в себя работу с копирайтерами, дизайнерами и специалистами по мультимедиа.",
    text14: "Использование оптимальных решений для вашего проекта при переносе дизайна. Написание чистого и эффективного кода, создание адаптивных макетов и интеграция всех необходимых функций.",
    text15: "Тестирование работы сайта на разных устройствах, браузерах, размерах экрана. Выявление и исправление любых ошибок или проблем.",
    text16: "Загрузка сайта на сервер и настройка его доступности для общественности. Сюда входит регистрация домена, настройка хостинга и интеграция базы данных, если необходимо.",
    text17: "Мониторинг производительности сайта, устранение любых возникающих проблем, а также внедрение обновлений или улучшений.",
    text18: "Изучение технического задания, бизнеса клиента, определение целей текста. Проведение CustDev при разработке и рекламе нового продукта или услуги.",
    text19: "Изучение целевой аудитории, продукта/услуги, конкурентов. Составление mind-карты с детальной проработкой аватаров целевой аудитории. Создание реестра смыслов бизнеса для преимущественной отстройки от конкурентов.",
    text20: "Составление смысловой структуры и написание текста в зависимости от целей заказчика и типа текста: лендинг, email-письма, статьи, продающие посты, нейминг и т.д.",
    text21: "Вычитка и проверка текста на уникальность, стиль, пунктуацию и орфографию с помощью сервисов «Главред», «Орфограммка», «Text.ru Antiplagiat», «ChatGPT».",
    text22: "Видеопрезентация текста с сопроводительными комментариями, объяснение своих идей, почему написали именно так, а не иначе.",
    text23: "Внесение правок и финальное согласование.",
    text24: "Отправка текста в удобном для заказчика формате: pdf-файл, ссылка на google-документ и т.д."
  }
};
const contacts = {
  tagline: "Создаём дизайн<br>для сильных брендов",
  button: "Оставить <br> заявку",
  modal: "Давайте начнем",
  input1: "Ваше имя",
  placeholder1: "Представьтесь, пожалуйста",
  input2: "Название компании",
  placeholder2: "Vorobey.art",
  input3: "Как связаться?",
  placeholder3: "Номер телефона",
  input4: "Эл. почта",
  placeholder4: "Адрес электронной почты",
  input5: "Расскажите нам о проекте",
  placeholder5: "Нужен новый сайт? Копирайтер? Расскажите нам",
  input6: "Пожалуйста, прикрепите дополнительные документы",
  placeholder6: "Максимум 10 файлов по 25МБ каждый. Всего максимум 100МБ",
  input7: "Как Вы узнали о нас?",
  placeholder7: "От друга? Из Гугла? Из группы ВКонтакте?",
  files: "Перетащите файлы сюда или щелкните, чтобы выбрать их на устройстве",
  send: "Отправить",
  text1: "Нажимая на кнопку “Отправить”, вы даете <a href='/agreements'>согласие на обработку персональных данных</a> и соглашаетесь c <a href='/policy'>политикой конфиденциальности</a>"
};
const works = {
  description1: "Создание 3D моделей для каталогов",
  description2: "Разработка приложения <br/> AR Play Market / App Store",
  description3: "Разработка брендбука и презентации",
  description4: "Эксклюзивный дизайн футболок",
  description5: "Создание логотипа и визуализация",
  description6: "Разработка приложения <br/> AR Play Market / App Store",
  description7: "Создание 3D моделей <br/> для маркетплейсов",
  description8: "Дизайн печатной <br/> продукции",
  description9: "Дизайн печатной <br/> продукции",
  description10: "Разработка <br/> презентации",
  description11: "Создание 3D моделей <br/> для каталогов",
  description12: "Создание 3D моделей <br/> для сайта",
  description13: "Разработка <br/> презентации",
  description14: "Разработка <br/> презентации",
  description15: "Разработка брендбука и презентации",
  description16: "Разработка <br/> презентации",
  description17: "Разработка <br/> презентации",
  description18: "Создание логотипа и <br/> визуализация",
  description19: "Создание логотипа и визуализация",
  description20: "Дизайн печатной продукции",
  description21: "Проектирование и<br>разработка игры",
  description22: "Проектирование и<br>разработка игры",
  description23: "Проектирование и<br>разработка игры",
  description24: "Проектирование и<br>разработка игры",
  description25: "Проектирование и<br>разработка игры",
  description26: "Создание 3D моделей <br/> для маркетплейсов",
  description27: "Создание 3D моделей <br/> для сайта",
  description28: "Разработка дизайна <br/> приложения",
  description29: "Дизайн и разработка <br/> сайта",
  description30: "Создание логотипа и <br/> визуализация",
  description31: "Дизайн печатной <br/> продукции",
  description32: "Создание 3D моделей <br/> для сайта",
  tag1: "Все проекты",
  tag2: "Графический дизайн",
  tag3: "3D моделирование",
  tag4: "Брендинг",
  tag5: "WEB разработка",
  tag6: "Моб разработка"
};
const footer = {
  tagline: "Создаем дизайн<br>для сильных брендов",
  more: "Подробнее",
  contacts: "Контакты"
};
const second_lang = "RU";
const ru = {
  preloader,
  header,
  main,
  about,
  services,
  contacts,
  works,
  footer,
  second_lang
};
const i18n_VfGcjrvSkj = /* @__PURE__ */ defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "ru",
    messages: {
      en,
      ru
    }
  });
  vueApp.use(i18n);
});
const router_19BuzgFWKZ = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0 });
      }, 500);
    });
  };
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin,
  _0_siteConfig_7pzUtwM1Zj,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  nuxt_plugin_03YjkxYbK5,
  i18n_VfGcjrvSkj,
  router_19BuzgFWKZ
];
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_0$1 = defineComponent({
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
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(to, resolve) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  return defineComponent({
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
      const config = /* @__PURE__ */ useRuntimeConfig();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isAbsoluteUrl = computed(() => typeof to.value === "string" && hasProtocol(to.value, { acceptRelative: true }));
      const hasTarget = computed(() => props.target && props.target !== "_self");
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (hasTarget.value) {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || isAbsoluteUrl.value;
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value && !props.external && !isAbsoluteUrl.value ? resolveTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), router.resolve) : to.value || null;
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          const navigate = () => navigateTo(href, { replace: props.replace, external: props.external });
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
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _imports_0 = publicAssetsURL("/img/Logo-mini.svg");
const _imports_1 = publicAssetsURL("/img/Logo-big.svg");
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$6 = {
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
  computed: {
    availableLocales: () => locales.value.filter((i) => i.code !== locale.value)
  },
  mounted() {
    let lastScrollTop = 0;
    (void 0).addEventListener("scroll", () => {
      let delta = (void 0).pageYOffset || (void 0).documentElement.scrollTop;
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
      (void 0).scrollTo(0, 0);
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
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<!--[--><div class="header-placeholder header-placeholder--home" data-v-99400ad6></div><header class="${ssrRenderClass([{
    "header--home": $props.home,
    "header--preloader": $props.curtains === "Preloader",
    "header--curtains": $props.curtains === "Curtains" || $props.curtains === "Header",
    "header--scrolling": $data.headerScrollTop,
    "header--open": $data.menu
    // 'header--nocase': pages.about || pages.works || pages.contacts || pages.policy,
  }, "header"])}" data-v-99400ad6><div class="${ssrRenderClass([{
    "header__wrapper--open": $data.menu,
    "header__wrapper--line": !$props.home
  }, "header__wrapper"])}" data-v-99400ad6>`);
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
        _push2(`<img class="header-logo__img"${ssrRenderAttr("src", _imports_0)} alt="On Main" data-v-99400ad6${_scopeId}><span class="header-logo__crumbread" data-v-99400ad6${_scopeId}></span><span class="header-logo__text" data-v-99400ad6${_scopeId}>Vorobey Art</span>`);
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
  }, "nav-row"])}" data-v-99400ad6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "about",
    class: "nav-row__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("header.about"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("header.about")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "services",
    class: "nav-row__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("header.services"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("header.services")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "works",
    class: "nav-row__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("header.works"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("header.works")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "contacts",
    class: "nav-row__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("header.contacts"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("header.contacts")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header__controllers" data-v-99400ad6><a href="https://t.me/Vorobey_Art" class="${ssrRenderClass([{ "header-start-button--nav": $data.menu }, "header-start-button header-start-button--pc"])}" data-v-99400ad6><span data-v-99400ad6>${ssrInterpolate(_ctx.$t("header.discuss"))}</span><div class="header-start-button__fill" data-v-99400ad6></div></a><button class="header__lang" data-v-99400ad6>${ssrInterpolate(_ctx.$t("second_lang"))}</button></div><button aria-label="Menu navigation" class="${ssrRenderClass([{
    "header-menu--open": $data.menu,
    "header-menu--close": $data.menu === false
  }, "header-menu"])}" data-v-99400ad6><div class="header-menu__wrapper" data-v-99400ad6><span class="header-menu__element header-menu__element--1" data-v-99400ad6></span><span class="header-menu__element header-menu__element--2" data-v-99400ad6></span><span class="header-menu__element header-menu__element--3" data-v-99400ad6></span></div></button></div></header><div class="${ssrRenderClass([{ "nav--open": $data.menu, "nav--close": $data.menu === false }, "nav"])}" data-v-99400ad6><div class="nav__wrapper" data-v-99400ad6><nav class="nav__nav" data-v-99400ad6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "about",
    class: "nav__link",
    onClick: $options.clickHandle
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<sup data-v-99400ad6${_scopeId}>/01</sup> ${ssrInterpolate(_ctx.$t("header.about"))}`);
      } else {
        return [
          createVNode("sup", null, "/01"),
          createTextVNode(" " + toDisplayString(_ctx.$t("header.about")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "services",
    class: "nav__link",
    onClick: $options.clickHandle
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<sup data-v-99400ad6${_scopeId}>/02</sup> ${ssrInterpolate(_ctx.$t("header.services"))}`);
      } else {
        return [
          createVNode("sup", null, "/02"),
          createTextVNode(" " + toDisplayString(_ctx.$t("header.services")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "works",
    class: "nav__link",
    onClick: $options.clickHandle
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<sup data-v-99400ad6${_scopeId}>/03</sup> ${ssrInterpolate(_ctx.$t("header.works"))}`);
      } else {
        return [
          createVNode("sup", null, "/03"),
          createTextVNode(" " + toDisplayString(_ctx.$t("header.works")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "contacts",
    class: "nav__link",
    onClick: $options.clickHandle
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<sup data-v-99400ad6${_scopeId}>/04</sup> ${ssrInterpolate(_ctx.$t("header.contacts"))}`);
      } else {
        return [
          createVNode("sup", null, "/04"),
          createTextVNode(" " + toDisplayString(_ctx.$t("header.contacts")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="https://t.me/Vorobey_Art" class="${ssrRenderClass([{ "header-start-button--nav": $data.menu }, "header-start-button header-start-button--mobile"])}" data-v-99400ad6><span data-v-99400ad6>${ssrInterpolate(_ctx.$t("header.discuss"))}</span><svg width="157" height="41" viewBox="0 0 157 41" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-99400ad6><path d="M0 4.51866C0 2.06406 1.98985 0.0742188 4.44444 0.0742188H137C148.046 0.0742188 157 9.02852 157 20.0742C157 31.1199 148.046 40.0742 137 40.0742H35.5556C15.9188 40.0742 0 24.1555 0 4.51866Z" fill="#0181C8" data-v-99400ad6></path></svg><div class="header-start-button__fill" data-v-99400ad6></div></a></nav><img${ssrRenderAttr("src", _imports_1)} alt="Навигация" class="nav__logo" data-v-99400ad6></div></div><!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HeaderPage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-99400ad6"]]);
const _sfc_main$5 = {
  name: "PreloaderElement"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "preloader" }, _attrs))} data-v-538b36ab><div class="preloader__motto" data-v-538b36ab>${ssrInterpolate(_ctx.$t("preloader"))}</div><svg class="preloader__logo" width="363" height="363" viewBox="0 0 363 363" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-538b36ab><path d="M150.977 263.016L0 363C47.4189 326.7 124.815 260.468 150.977 229.9C177.14 199.332 187.132 175.556 188.586 166.216C169.836 202.898 140.44 201.879 128.086 196.784C153.812 197.294 170.781 173.646 176.05 161.758C131.138 197.931 98.4715 179.802 87.7523 166.216C124.815 176.405 156.973 158.574 168.419 148.384C100.397 173.792 64.1336 143.687 54.5045 125.458C96.364 143.799 141.712 140.318 159.153 136.284C65.8414 134.756 30.8859 94.8895 25.0721 75.1474C33.3568 80.7516 49.2357 86.8228 56.1396 89.1579C17.3324 64.1937 2.54354 19.3175 0 0C59.955 75.1474 173.869 120.363 210.387 125.458C246.905 130.553 253.446 130.553 272.522 142.653C291.599 154.753 307.95 140.105 312.856 136.284C317.761 132.463 327.759 120.363 315.581 110.174C303.403 99.9842 277.428 108.263 262.167 113.995C249.958 118.58 232.734 120.151 225.649 120.363C248.541 90.4316 270.342 62.4105 299.23 62.4105C322.34 62.4105 335.021 80.2421 338.473 89.1579L363 103.168L337.383 108.263C323.212 119.726 318.851 143.926 310.676 180.226C304.135 209.266 279.608 236.056 268.162 245.821C299.557 216.781 298.321 177.679 293.779 161.758C278.954 231.556 192.401 258.346 150.977 263.016Z" fill="#0181C8" data-v-538b36ab></path><path d="M218.289 289.94C196.063 304.615 228.22 328.941 216.135 321.964C204.051 314.987 174.9 286.068 203.918 280.473C232.936 274.877 266.197 247.198 266.197 247.198C266.197 247.198 240.515 275.266 218.289 289.94Z" fill="#0181C8" data-v-538b36ab></path></svg><svg width="1598" height="245" viewBox="0 0 1598 245" fill="none" xmlns="http://www.w3.org/2000/svg" class="preloader__title" data-v-538b36ab><path d="M117.931 190.766C133.148 190.766 145.068 187.216 153.691 180.114C162.567 172.76 168.401 164.263 171.19 154.626L228.254 158.43C225.464 169.843 220.899 180.748 214.559 191.147C208.218 201.545 200.356 210.675 190.972 218.537C181.589 226.146 170.683 232.359 158.256 237.178C146.082 241.743 132.641 244.025 117.931 244.025C101.7 244.025 86.356 240.982 71.9 234.895C57.6975 228.555 45.2703 219.932 34.6185 209.027C23.9667 197.867 15.4705 184.933 9.13015 170.223C3.04339 155.514 0 139.536 0 122.29C0 105.298 3.04339 89.4469 9.13015 74.7372C15.4705 59.7739 23.9667 46.8395 34.6185 35.934C45.2703 24.775 57.6975 16.152 71.9 10.0653C86.356 3.72488 101.7 0.554688 117.931 0.554688C132.134 0.554687 145.195 2.96403 157.115 7.78272C169.288 12.3478 179.94 18.5614 189.07 26.4235C198.454 34.0319 206.316 43.0353 212.656 53.4335C218.997 63.8317 223.562 74.7372 226.352 86.1499L169.288 89.9541C167.767 85.1354 165.611 80.5703 162.821 76.2589C160.031 71.9474 156.481 68.1432 152.169 64.8462C147.858 61.5492 142.785 58.8862 136.952 56.8573C131.373 54.8284 125.032 53.8139 117.931 53.8139C109.308 53.8139 101.193 55.5892 93.5841 59.1398C85.9756 62.4368 79.2548 67.1287 73.4216 73.2155C67.8421 79.3023 63.4038 86.5303 60.1068 94.8996C56.8098 103.269 55.1613 112.399 55.1613 122.29C55.1613 132.181 56.8098 141.311 60.1068 149.681C63.4038 158.05 67.8421 165.278 73.4216 171.365C79.2548 177.451 85.9756 182.27 93.5841 185.821C101.193 189.118 109.308 190.766 117.931 190.766Z" fill="#F6F6F6" data-v-538b36ab></path><path d="M355.844 2.4568C368.271 2.4568 379.557 4.48573 389.702 8.54358C400.1 12.6014 408.977 18.0541 416.331 24.9018C423.686 31.7494 429.393 39.8651 433.45 49.2488C437.508 58.379 439.537 68.1432 439.537 78.5414C439.537 91.983 437.128 103.269 432.309 112.399C427.744 121.529 422.545 129.011 416.712 134.844C411.132 140.424 405.933 144.481 401.114 147.018C396.296 149.554 393.886 150.822 393.886 150.822L447.146 242.123H386.278L342.529 162.234H313.998V242.123H258.836V2.4568H355.844ZM355.844 108.975C365.482 108.975 372.963 106.439 378.289 101.367C383.615 96.2945 386.278 89.9541 386.278 82.3456C386.278 74.7372 383.615 68.3968 378.289 63.3245C372.963 58.2522 365.482 55.716 355.844 55.716H313.998V108.975H355.844Z" fill="#F6F6F6" data-v-538b36ab></path><path d="M475.796 2.4568H646.987V55.716H530.958V93.7583H637.476V147.018H530.958V188.864H650.791V242.123H475.796V2.4568Z" fill="#F6F6F6" data-v-538b36ab></path><path d="M804.699 148.92L778.069 69.0308L751.44 148.92H804.699ZM736.223 196.473L721.006 242.123H663.942L749.537 2.4568H806.601L892.196 242.123H835.133L819.916 196.473H736.223Z" fill="#F6F6F6" data-v-538b36ab></path><path d="M1002.44 242.123H947.283V55.716H878.807V2.4568H1070.92V55.716H1002.44V242.123Z" fill="#F6F6F6" data-v-538b36ab></path><path d="M1152.86 242.123H1097.7V2.4568H1152.86V242.123Z" fill="#F6F6F6" data-v-538b36ab></path><path d="M1398.1 2.4568L1316.31 242.123H1259.24L1177.45 2.4568H1234.52L1287.78 167.941L1341.04 2.4568H1398.1Z" fill="#F6F6F6" data-v-538b36ab></path><path d="M1422.77 2.4568H1593.96V55.716H1477.93V93.7583H1584.45V147.018H1477.93V188.864H1597.76V242.123H1422.77V2.4568Z" fill="#F6F6F6" data-v-538b36ab></path></svg><div class="preloader__date" data-v-538b36ab>2018 - ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preloader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const PreloaderElement = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-538b36ab"]]);
const _sfc_main$4 = {
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
  }, _attrs))} data-v-87e05db5><svg width="1380" height="1380" viewBox="0 0 1380 1380" fill="none" xmlns="http://www.w3.org/2000/svg" class="curtains__img" data-v-87e05db5><path d="M573.964 999.895L0 1380C180.27 1242 474.504 990.211 573.964 874C673.423 757.789 711.411 667.404 716.937 631.895C645.658 771.347 533.904 767.474 486.937 748.105C584.739 750.042 649.249 660.14 669.279 614.947C498.541 752.463 374.354 683.544 333.604 631.895C474.504 670.632 596.757 602.842 640.27 564.105C381.676 660.697 243.814 546.247 207.207 476.947C366.342 546.674 538.739 533.439 605.045 518.105C250.306 512.295 117.417 360.737 95.3153 285.684C126.811 306.989 187.177 330.07 213.423 338.947C65.8919 244.042 9.66967 73.4386 0 0C227.928 285.684 660.991 457.579 799.82 476.947C938.649 496.316 963.513 496.316 1036.04 542.316C1108.56 588.316 1170.72 532.632 1189.37 518.105C1208.02 503.579 1246.03 457.579 1199.73 418.842C1153.43 380.105 1054.68 411.579 996.667 433.368C950.252 450.8 884.775 456.772 857.838 457.579C944.865 343.789 1027.75 237.263 1137.57 237.263C1225.42 237.263 1273.63 305.053 1286.76 338.947L1380 392.211L1282.61 411.579C1228.74 455.158 1212.16 547.158 1181.08 685.158C1156.22 795.558 1062.97 897.404 1019.46 934.526C1138.81 824.126 1134.11 675.474 1116.85 614.947C1060.49 880.295 731.441 982.14 573.964 999.895Z" fill="#7ABADD" data-v-87e05db5></path><path d="M829.86 1102.25C745.365 1158.03 867.614 1250.52 821.672 1223.99C775.73 1197.47 664.909 1087.52 775.226 1066.25C885.543 1044.98 1011.99 939.753 1011.99 939.753C1011.99 939.753 914.354 1046.46 829.86 1102.25Z" fill="#7ABADD" data-v-87e05db5></path></svg></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Curtains.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CurtainsElement = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-87e05db5"]]);
const _sfc_main$3 = {
  __name: "Plug",
  __ssrInlineRender: true,
  setup(__props) {
    const pass = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "plug" }, _attrs))} data-v-c24d742c><svg width="1207" height="1080" viewBox="0 0 1207 1080" fill="none" xmlns="http://www.w3.org/2000/svg" class="plug__svg" data-v-c24d742c><path d="M502.01 811.546L0 1144C157.671 1023.3 415.02 803.075 502.01 701.433C589.001 599.791 622.227 520.736 627.06 489.679C564.716 611.649 466.972 608.261 425.893 591.321C511.435 593.015 567.858 514.384 585.377 474.856C436.042 595.133 327.424 534.853 291.782 489.679C415.02 523.56 521.946 464.268 560.005 430.388C333.828 514.871 213.249 414.768 181.231 354.156C320.417 415.141 471.201 403.565 529.195 390.154C218.927 385.072 102.698 252.514 83.3664 186.87C110.914 205.505 163.712 225.692 186.668 233.456C57.6315 150.448 8.45746 1.23216 0 -63C199.354 186.87 578.128 337.216 699.552 354.156C820.977 371.096 842.725 371.096 906.156 411.33C969.587 451.563 1023.96 402.86 1040.27 390.154C1056.58 377.449 1089.82 337.216 1049.33 303.335C1008.84 269.454 922.467 296.982 871.722 316.04C831.126 331.287 773.857 336.51 750.297 337.216C826.414 237.691 898.907 144.519 994.959 144.519C1071.8 144.519 1113.97 203.811 1125.45 233.456L1207 280.042L1121.82 296.982C1074.7 335.098 1060.2 415.565 1033.02 536.265C1011.27 632.825 929.716 721.903 891.658 754.372C996.047 657.812 991.939 527.795 976.836 474.856C927.541 706.939 639.746 796.017 502.01 811.546Z" fill="#EDF3F6" data-v-c24d742c></path><path d="M725.826 901.073C651.924 949.867 758.847 1030.75 718.665 1007.55C678.482 984.355 581.553 888.197 678.041 869.592C774.529 850.988 885.123 758.951 885.123 758.951C885.123 758.951 799.728 852.28 725.826 901.073Z" fill="#EDF3F6" data-v-c24d742c></path></svg><div class="plug__col" data-v-c24d742c><p class="plug__subtitle" data-v-c24d742c>Создаём дизайн для сильных брендов</p><h1 class="plug__title" data-v-c24d742c>САЙТ В РАЗРАБОТКЕ</h1><a href="https://disk.yandex.ru/i/ffr_32LgvsLmYg" target="_blank" rel="noopener noreferrer" class="${ssrRenderClass([{ "plug-link--nav": _ctx.menu }, "plug-link plug-link--pc"])}" data-v-c24d742c><span data-v-c24d742c>Презентация</span><div class="plug-link__fill" data-v-c24d742c></div></a><div class="plug__date" data-v-c24d742c>2018 - ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</div></div><input class="plug__input" type="text"${ssrRenderAttr("value", pass.value)} data-v-c24d742c></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Plug.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Plug = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c24d742c"]]);
const _sfc_main$2 = {
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
      pass: "Ff267S_Zs555",
      model: {
        loaded: false
      }
    };
  },
  // watch: {
  // 	curtains() {
  // 		console.log('%c%s', 'background: lightgreen; color: #222; padding: 2px 6px; border-radius: 20px;', 'Curtains:', this.curtains);
  // 	},
  // 	// '$route.name': {
  // 	// 	handler: function (name) {
  // 	// 		this.currentPageName = name;
  // 	// 		console.log('%c%s', 'background: lightblue; color: #222; padding: 2px 6px; border-radius: 20px;', 'Current Page:', name);
  // 	// 		if ( name === 'works' || name === 'about' || name === 'policy' || name === 'services') {
  // 	// 			document.body.classList.add('lines');
  // 	// 		} else {
  // 	// 			document.body.classList.remove('lines');
  // 	// 		}
  // 	// 	},
  // 	// 	deep: true,
  // 	// 	// immediate: true,
  // 	// },
  // },
  async mounted() {
    var _a;
    let password = localStorage.getItem("VorobeyArtPassword");
    if (password === this.pass)
      this.isDeveloper = true;
    console.log(this.isDeveloper, password);
    this.currentPageName = (_a = this.$route) == null ? void 0 : _a.name;
    if (this.currentPageName === "works" || this.currentPageName === "about" || this.currentPageName === "policy" || this.currentPageName === "services") {
      (void 0).body.classList.add("lines");
    } else {
      (void 0).body.classList.remove("lines");
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
  const _component_NuxtPage = __nuxt_component_0$1;
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
    model: $data.model,
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import("./_nuxt/error-404-KOzV55m4.js").then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import("./_nuxt/error-500-o6zAviCU.js").then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = defineAsyncComponent(() => import("./_nuxt/island-renderer-B_limQ4Q.js").then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
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
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);
export {
  _export_sfc as _,
  __nuxt_component_0 as a,
  createError as c,
  entry$1 as default,
  injectHead as i,
  publicAssetsURL as p,
  resolveUnrefHeadInput as r
};
//# sourceMappingURL=server.mjs.map
