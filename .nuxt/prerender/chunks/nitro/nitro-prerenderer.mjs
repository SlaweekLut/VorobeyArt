globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/node-fetch-native/dist/polyfill.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, createError, setHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/scule/dist/index.mjs';
import { hash } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/ufo/dist/index.mjs';
import { createStorage } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/unstorage/drivers/fs.mjs';
import defu from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/defu/dist/defu.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/marinamalova/inWork/VorobeyArt/vorobey/node_modules/pathe/dist/index.mjs';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=2592000, immutable"}}}},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const serverAssets = [{"baseName":"server","dir":"/Users/marinamalova/inWork/VorobeyArt/vorobey/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/marinamalova/inWork/VorobeyArt/vorobey","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/marinamalova/inWork/VorobeyArt/vorobey/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/marinamalova/inWork/VorobeyArt/vorobey/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/marinamalova/inWork/VorobeyArt/vorobey/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = "if (!(\"requestIdleCallback\" in w) || !(\"requestAnimationFrame\" in w))\n  return new Promise((resolve) => resolve(\"not supported\"));\nfunction eventListeners() {\n  const c = new AbortController();\n  const p = new Promise((resolve) => {\n    const hydrateOnEvents = \"mousemove,scroll,keydown,click,touchstart,wheel\".split(\",\");\n    function handler(e) {\n      hydrateOnEvents.forEach((e2) => w.removeEventListener(e2, handler));\n      requestAnimationFrame(() => resolve(e));\n    }\n    hydrateOnEvents.forEach((e) => {\n      w.addEventListener(e, handler, {\n        capture: true,\n        once: true,\n        passive: true,\n        signal: c.signal\n      });\n    });\n  });\n  return { c: () => c.abort(), p };\n}\nfunction idleListener() {\n  let id;\n  const p = new Promise((resolve) => {\n    const isMobile = w.innerWidth < 640;\n    const timeout = isMobile ? Number.parseInt(\"5000\") : Number.parseInt(\"4000\");\n    const timeoutDelay = () => setTimeout(\n      () => requestAnimationFrame(() => resolve(\"timeout\")),\n      timeout\n    );\n    id = w.requestIdleCallback(timeoutDelay, { timeout: Number.parseInt(\"7000\") });\n  });\n  return { c: () => window.cancelIdleCallback(id), p };\n}\nconst triggers = [idleListener(), eventListeners()];\nconst hydrationPromise = Promise.race(\n  triggers.map((t) => t.p)\n).finally(() => {\n  triggers.forEach((t) => t.c());\n});\nreturn hydrationPromise;\n";
const replayScript = "(() => {\n  w._$delayHydration.then((e) => {\n    if (!(e instanceof PointerEvent) && !(e instanceof MouseEvent) && !(e instanceof TouchEvent))\n      return;\n    if (e instanceof MouseEvent && e.type !== \"click\")\n      return;\n    setTimeout(\n      () => w.requestIdleCallback(\n        () => setTimeout(() => e.target?.click(), 500)\n      ),\n      50\n    );\n  });\n})();\n";
const include = [];
const exclude = [];

function createFilter(options = {}) {
  const include2 = options.include || [];
  const exclude2 = options.exclude || [];
  return function(path) {
    for (const v of [{ rules: exclude2, result: false }, { rules: include2, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, ...options }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include2.length === 0;
  };
}
const _zph9rl36sn = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    if (include.length || exclude.length) {
      const filter = createFilter({ include, exclude });
      if (!filter(event.req.url))
        return;
    }
    let extraScripts = "";
    extraScripts += `;${replayScript}`;
    htmlContext.bodyAppend.push(`<script>
(function() {
  const w = window;
  w._$delayHydration = (() => {
    ${script}}
  )();
  ${"w._$delayHydration.then((e) => { console.log('[nuxt-delay-hydration] Hydration event', e) })" }
  ${extraScripts}
})();
<\/script>`);
  });
});

const plugins = [
  _zph9rl36sn
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/.htaccess": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"226-RoM3U+hddREbaDglHeTOH4oEPho\"",
    "mtime": "2023-03-09T16:04:34.776Z",
    "size": 550,
    "path": "../../.output/public/.htaccess"
  },
  "/like-handler.php": {
    "type": "application/x-httpd-php",
    "etag": "\"2de-HVfoMOStbBYYbG5Vn1CFYnhjATw\"",
    "mtime": "2023-03-09T16:04:33.970Z",
    "size": 734,
    "path": "../../.output/public/like-handler.php"
  },
  "/like.php": {
    "type": "application/x-httpd-php",
    "etag": "\"15a-TYXGtn19QNciZ5W4Mul/imqFL7c\"",
    "mtime": "2023-03-09T16:04:33.970Z",
    "size": 346,
    "path": "../../.output/public/like.php"
  },
  "/send.php": {
    "type": "application/x-httpd-php",
    "etag": "\"609-htGbO/UT0gExXIFDZA0Dxd3E3kU\"",
    "mtime": "2023-03-09T16:04:33.970Z",
    "size": 1545,
    "path": "../../.output/public/send.php"
  },
  "/PHPMailer/Exception.php": {
    "type": "application/x-httpd-php",
    "etag": "\"500-a5V9fx1JsK3QZ0Ma58OsyC0o8hM\"",
    "mtime": "2023-03-09T16:04:34.776Z",
    "size": 1280,
    "path": "../../.output/public/PHPMailer/Exception.php"
  },
  "/PHPMailer/OAuth.php": {
    "type": "application/x-httpd-php",
    "etag": "\"f49-hDnGP4vGjs9qcBCCn5uKkZbUrF4\"",
    "mtime": "2023-03-09T16:04:34.776Z",
    "size": 3913,
    "path": "../../.output/public/PHPMailer/OAuth.php"
  },
  "/PHPMailer/OAuthTokenProvider.php": {
    "type": "application/x-httpd-php",
    "etag": "\"61e-YztP7ilrUqyQV/F3ANDoR/LhSxQ\"",
    "mtime": "2023-03-09T16:04:34.775Z",
    "size": 1566,
    "path": "../../.output/public/PHPMailer/OAuthTokenProvider.php"
  },
  "/PHPMailer/PHPMailer.php": {
    "type": "application/x-httpd-php",
    "etag": "\"2ccfa-aoc1QP+pQO85b5po8kJ5a1lUwLE\"",
    "mtime": "2023-03-09T16:04:34.775Z",
    "size": 183546,
    "path": "../../.output/public/PHPMailer/PHPMailer.php"
  },
  "/PHPMailer/POP3.php": {
    "type": "application/x-httpd-php",
    "etag": "\"311e-qzsj0JpiPr4Iu8tSYXqudfM84gg\"",
    "mtime": "2023-03-09T16:04:34.774Z",
    "size": 12574,
    "path": "../../.output/public/PHPMailer/POP3.php"
  },
  "/PHPMailer/SMTP.php": {
    "type": "application/x-httpd-php",
    "etag": "\"bee0-oAj9bBk5MYAhInczK7OuexMxyR0\"",
    "mtime": "2023-03-09T16:04:34.774Z",
    "size": 48864,
    "path": "../../.output/public/PHPMailer/SMTP.php"
  },
  "/favicon/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"6055-ix3x9iSt2LgnT064B4pufX//pMQ\"",
    "mtime": "2023-03-09T16:04:34.773Z",
    "size": 24661,
    "path": "../../.output/public/favicon/android-chrome-192x192.png"
  },
  "/favicon/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"15270-tP8gPy8gjTAOhDOkArrU1uWB2bE\"",
    "mtime": "2023-03-09T16:04:34.772Z",
    "size": 86640,
    "path": "../../.output/public/favicon/android-chrome-512x512.png"
  },
  "/favicon/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"4924-8kK63mFU4XEa8ldpRtgqMGT5HQk\"",
    "mtime": "2023-03-09T16:04:34.772Z",
    "size": 18724,
    "path": "../../.output/public/favicon/apple-touch-icon.png"
  },
  "/favicon/browserconfig.xml": {
    "type": "application/xml",
    "etag": "\"ff-/qMmtDKA8CEEV5Fiu2xQNbxCOME\"",
    "mtime": "2023-03-09T16:04:34.771Z",
    "size": 255,
    "path": "../../.output/public/favicon/browserconfig.xml"
  },
  "/favicon/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"4d2-Ap/SsMeyXlM/vKEKLeXPXroqimI\"",
    "mtime": "2023-03-09T16:04:34.771Z",
    "size": 1234,
    "path": "../../.output/public/favicon/favicon-16x16.png"
  },
  "/favicon/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"8be-UBHuRfj6LM+oKBp75r18VE0Jjl8\"",
    "mtime": "2023-03-09T16:04:34.771Z",
    "size": 2238,
    "path": "../../.output/public/favicon/favicon-32x32.png"
  },
  "/favicon/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3aee-boaWNDstORqY0OcTixzd75FKSTY\"",
    "mtime": "2023-03-09T16:04:34.770Z",
    "size": 15086,
    "path": "../../.output/public/favicon/favicon.ico"
  },
  "/favicon/mstile-150x150.png": {
    "type": "image/png",
    "etag": "\"39bf-KP08PCJaV0I90wC7jrHJ+nVp3V8\"",
    "mtime": "2023-03-09T16:04:34.769Z",
    "size": 14783,
    "path": "../../.output/public/favicon/mstile-150x150.png"
  },
  "/favicon/safari-pinned-tab.svg": {
    "type": "image/svg+xml",
    "etag": "\"3614-sUP3NAPs4ODPTAl8HDWZIIrZzU8\"",
    "mtime": "2023-03-09T16:04:34.769Z",
    "size": 13844,
    "path": "../../.output/public/favicon/safari-pinned-tab.svg"
  },
  "/favicon/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"16c-Ct++YcyhCACEtkNp7PWppDqfz58\"",
    "mtime": "2023-03-09T16:04:34.769Z",
    "size": 364,
    "path": "../../.output/public/favicon/site.webmanifest"
  },
  "/api/likes.json": {
    "type": "application/json",
    "etag": "\"4-PJV1NTRWRdznGQuF6xCznalrJRg\"",
    "mtime": "2023-03-09T16:04:34.773Z",
    "size": 4,
    "path": "../../.output/public/api/likes.json"
  },
  "/img/Logo-404.svg": {
    "type": "image/svg+xml",
    "etag": "\"5d55-Nifld+Sz4u9q6cY2ZWp4OgUWDUc\"",
    "mtime": "2023-03-09T16:04:34.739Z",
    "size": 23893,
    "path": "../../.output/public/img/Logo-404.svg"
  },
  "/img/Logo-big copy.svg": {
    "type": "image/svg+xml",
    "etag": "\"5d89-DnFoLhjWXrTzwWjmlll/vw4OjKU\"",
    "mtime": "2023-03-09T16:04:34.739Z",
    "size": 23945,
    "path": "../../.output/public/img/Logo-big copy.svg"
  },
  "/img/Logo-big.svg": {
    "type": "image/svg+xml",
    "etag": "\"46ec-biPiDY0+sTQ1HJ4BSAyIznVFANg\"",
    "mtime": "2023-03-09T16:04:34.739Z",
    "size": 18156,
    "path": "../../.output/public/img/Logo-big.svg"
  },
  "/img/Logo-big12.svg": {
    "type": "image/svg+xml",
    "etag": "\"5d89-DnFoLhjWXrTzwWjmlll/vw4OjKU\"",
    "mtime": "2023-03-09T16:04:34.738Z",
    "size": 23945,
    "path": "../../.output/public/img/Logo-big12.svg"
  },
  "/img/Logo-mini.svg": {
    "type": "image/svg+xml",
    "etag": "\"5d7b-Po89COWthexB0dAlacg4cwwiCVY\"",
    "mtime": "2023-03-09T16:04:34.738Z",
    "size": 23931,
    "path": "../../.output/public/img/Logo-mini.svg"
  },
  "/img/Logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"5d7b-Po89COWthexB0dAlacg4cwwiCVY\"",
    "mtime": "2023-03-09T16:04:34.737Z",
    "size": 23931,
    "path": "../../.output/public/img/Logo.svg"
  },
  "/img/form-border.svg": {
    "type": "image/svg+xml",
    "etag": "\"bb3-yPHIuDU6sIhh8N4zjND8lNfme90\"",
    "mtime": "2023-03-09T16:04:34.640Z",
    "size": 2995,
    "path": "../../.output/public/img/form-border.svg"
  },
  "/img/map.png": {
    "type": "image/png",
    "etag": "\"79cf5-RZDYl+xGBxInHbM2Ymx2mXAscCs\"",
    "mtime": "2023-03-09T16:04:34.422Z",
    "size": 498933,
    "path": "../../.output/public/img/map.png"
  },
  "/img/mark.png": {
    "type": "image/png",
    "etag": "\"30de-C0y35ExZT11RNEropZyFVSpWvro\"",
    "mtime": "2023-03-09T16:04:34.419Z",
    "size": 12510,
    "path": "../../.output/public/img/mark.png"
  },
  "/_nuxt/404.9b6d6fe5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8af-SPpf1Er2KpavEU6OpK37MJY3KS8\"",
    "mtime": "2023-03-09T16:04:33.969Z",
    "size": 2223,
    "path": "../../.output/public/_nuxt/404.9b6d6fe5.css"
  },
  "/_nuxt/404.dfb58a2c.js": {
    "type": "application/javascript",
    "etag": "\"35a-vOl39ULiybOx0YZ5zSIGk2Dsino\"",
    "mtime": "2023-03-09T16:04:33.969Z",
    "size": 858,
    "path": "../../.output/public/_nuxt/404.dfb58a2c.js"
  },
  "/_nuxt/404.dfb58a2c.js.map": {
    "type": "application/json",
    "etag": "\"e7f-L/epd8EWK+9la93Wti6R8rtVSEc\"",
    "mtime": "2023-03-09T16:04:33.969Z",
    "size": 3711,
    "path": "../../.output/public/_nuxt/404.dfb58a2c.js.map"
  },
  "/_nuxt/GalleryCard.047df0eb.js": {
    "type": "application/javascript",
    "etag": "\"2f7a-5pt0UjG9mjLKpYVR4tV5nyIe9m4\"",
    "mtime": "2023-03-09T16:04:33.968Z",
    "size": 12154,
    "path": "../../.output/public/_nuxt/GalleryCard.047df0eb.js"
  },
  "/_nuxt/GalleryCard.047df0eb.js.map": {
    "type": "application/json",
    "etag": "\"81e7-R2h/xGVleuehlpnAoinndTVBz6w\"",
    "mtime": "2023-03-09T16:04:33.968Z",
    "size": 33255,
    "path": "../../.output/public/_nuxt/GalleryCard.047df0eb.js.map"
  },
  "/_nuxt/GalleryCard.81c4e41c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"14e6-a8Ms9odkmT9TnxOCOgDYeunHJhc\"",
    "mtime": "2023-03-09T16:04:33.968Z",
    "size": 5350,
    "path": "../../.output/public/_nuxt/GalleryCard.81c4e41c.css"
  },
  "/_nuxt/Gilroy-Black.6a3b4aaf.woff": {
    "type": "font/woff",
    "etag": "\"94a0-GyQ4ett4ZELAK6TLbiUPFyiKmCo\"",
    "mtime": "2023-03-09T16:04:33.968Z",
    "size": 38048,
    "path": "../../.output/public/_nuxt/Gilroy-Black.6a3b4aaf.woff"
  },
  "/_nuxt/Gilroy-Black.84ee4b00.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"144b4-qmMTjGb0JVT/ZeawvRN3AIEnIYQ\"",
    "mtime": "2023-03-09T16:04:33.968Z",
    "size": 83124,
    "path": "../../.output/public/_nuxt/Gilroy-Black.84ee4b00.eot"
  },
  "/_nuxt/Gilroy-Black.dc9aa35f.ttf": {
    "type": "font/ttf",
    "etag": "\"14408-D/qkFj6dwJdBKKK9u8tPS6IQGE0\"",
    "mtime": "2023-03-09T16:04:33.967Z",
    "size": 82952,
    "path": "../../.output/public/_nuxt/Gilroy-Black.dc9aa35f.ttf"
  },
  "/_nuxt/Gilroy-Black.e2869f4f.woff2": {
    "type": "font/woff2",
    "etag": "\"69b8-79mcsASfEv8Q0bwb4VaZ5O+FhJo\"",
    "mtime": "2023-03-09T16:04:33.967Z",
    "size": 27064,
    "path": "../../.output/public/_nuxt/Gilroy-Black.e2869f4f.woff2"
  },
  "/_nuxt/Gilroy-Bold.0f6a9b59.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"146a8-O9fbEyUUeCAJsekgGj0c9GLCI7M\"",
    "mtime": "2023-03-09T16:04:33.967Z",
    "size": 83624,
    "path": "../../.output/public/_nuxt/Gilroy-Bold.0f6a9b59.eot"
  },
  "/_nuxt/Gilroy-Bold.1b401dca.ttf": {
    "type": "font/ttf",
    "etag": "\"14600-+Rt/Q7dy8giu0rn67KxL43VDf0I\"",
    "mtime": "2023-03-09T16:04:33.967Z",
    "size": 83456,
    "path": "../../.output/public/_nuxt/Gilroy-Bold.1b401dca.ttf"
  },
  "/_nuxt/Gilroy-Bold.8da03ac3.woff2": {
    "type": "font/woff2",
    "etag": "\"6ab0-kL/itWhQoKBvAVtk1gkT7kZwhZQ\"",
    "mtime": "2023-03-09T16:04:33.966Z",
    "size": 27312,
    "path": "../../.output/public/_nuxt/Gilroy-Bold.8da03ac3.woff2"
  },
  "/_nuxt/Gilroy-Bold.d27594f8.woff": {
    "type": "font/woff",
    "etag": "\"9558-fSH57ZuaYJBjFOk4HVonUqOLVlY\"",
    "mtime": "2023-03-09T16:04:33.966Z",
    "size": 38232,
    "path": "../../.output/public/_nuxt/Gilroy-Bold.d27594f8.woff"
  },
  "/_nuxt/Gilroy-Extrabold.36378327.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14210-eVv7DNUJikZ+oj6NcvguUmx3FEs\"",
    "mtime": "2023-03-09T16:04:33.966Z",
    "size": 82448,
    "path": "../../.output/public/_nuxt/Gilroy-Extrabold.36378327.eot"
  },
  "/_nuxt/Gilroy-Extrabold.3fc637c6.woff2": {
    "type": "font/woff2",
    "etag": "\"65f4-R/CJAOlDmY4bcnJKTOKfgRbOXTM\"",
    "mtime": "2023-03-09T16:04:33.966Z",
    "size": 26100,
    "path": "../../.output/public/_nuxt/Gilroy-Extrabold.3fc637c6.woff2"
  },
  "/_nuxt/Gilroy-Extrabold.5315109f.ttf": {
    "type": "font/ttf",
    "etag": "\"14154-vDjs2jtkP/bmc9Sa9MU46yCn9uQ\"",
    "mtime": "2023-03-09T16:04:33.966Z",
    "size": 82260,
    "path": "../../.output/public/_nuxt/Gilroy-Extrabold.5315109f.ttf"
  },
  "/_nuxt/Gilroy-Extrabold.bf9d1c93.woff": {
    "type": "font/woff",
    "etag": "\"8fb0-ZiiULFTaVOdRaEJWnYFL7wB1EqU\"",
    "mtime": "2023-03-09T16:04:33.965Z",
    "size": 36784,
    "path": "../../.output/public/_nuxt/Gilroy-Extrabold.bf9d1c93.woff"
  },
  "/_nuxt/Gilroy-Light.11044a79.ttf": {
    "type": "font/ttf",
    "etag": "\"14af8-DjJvGX2IJWJF7OiZq5WFXMGvixg\"",
    "mtime": "2023-03-09T16:04:33.965Z",
    "size": 84728,
    "path": "../../.output/public/_nuxt/Gilroy-Light.11044a79.ttf"
  },
  "/_nuxt/Gilroy-Light.2521625c.woff": {
    "type": "font/woff",
    "etag": "\"9400-+nn/0I+letMr6Na7DjQrCKKTUHw\"",
    "mtime": "2023-03-09T16:04:33.965Z",
    "size": 37888,
    "path": "../../.output/public/_nuxt/Gilroy-Light.2521625c.woff"
  },
  "/_nuxt/Gilroy-Light.ad7b32d1.woff2": {
    "type": "font/woff2",
    "etag": "\"6870-oS0I0TZzatMrrjvI4KA/7ocJvR8\"",
    "mtime": "2023-03-09T16:04:33.965Z",
    "size": 26736,
    "path": "../../.output/public/_nuxt/Gilroy-Light.ad7b32d1.woff2"
  },
  "/_nuxt/Gilroy-Light.d314acae.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14ba4-JZrtbXI+6sw63/VxAfAuMfSb2hQ\"",
    "mtime": "2023-03-09T16:04:33.965Z",
    "size": 84900,
    "path": "../../.output/public/_nuxt/Gilroy-Light.d314acae.eot"
  },
  "/_nuxt/Gilroy-Medium.119e6666.woff": {
    "type": "font/woff",
    "etag": "\"9730-K7dLmKuUwArVqP1cEx4+UeZfgrk\"",
    "mtime": "2023-03-09T16:04:33.964Z",
    "size": 38704,
    "path": "../../.output/public/_nuxt/Gilroy-Medium.119e6666.woff"
  },
  "/_nuxt/Gilroy-Medium.216a2049.ttf": {
    "type": "font/ttf",
    "etag": "\"14a54-4UMGqRSR+QnG4lvYbL0+uDuTJSY\"",
    "mtime": "2023-03-09T16:04:33.964Z",
    "size": 84564,
    "path": "../../.output/public/_nuxt/Gilroy-Medium.216a2049.ttf"
  },
  "/_nuxt/Gilroy-Medium.4d976d50.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14b04-un2bSiCIHmQnsQv+usRKzSwQ9do\"",
    "mtime": "2023-03-09T16:04:33.964Z",
    "size": 84740,
    "path": "../../.output/public/_nuxt/Gilroy-Medium.4d976d50.eot"
  },
  "/_nuxt/Gilroy-Medium.ee68ee26.woff2": {
    "type": "font/woff2",
    "etag": "\"6b98-3McafuJLlPNuErFV7iFKZZmgZ70\"",
    "mtime": "2023-03-09T16:04:33.964Z",
    "size": 27544,
    "path": "../../.output/public/_nuxt/Gilroy-Medium.ee68ee26.woff2"
  },
  "/_nuxt/Gilroy-Regular.0f661f54.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14a00-9sZLSz3kh7Xs7hTQ8BbC48FUq2w\"",
    "mtime": "2023-03-09T16:04:33.964Z",
    "size": 84480,
    "path": "../../.output/public/_nuxt/Gilroy-Regular.0f661f54.eot"
  },
  "/_nuxt/Gilroy-Regular.4312cfe3.ttf": {
    "type": "font/ttf",
    "etag": "\"1494c-Q7MbMMNhAuWqiGg0+uqeJcNfveY\"",
    "mtime": "2023-03-09T16:04:33.963Z",
    "size": 84300,
    "path": "../../.output/public/_nuxt/Gilroy-Regular.4312cfe3.ttf"
  },
  "/_nuxt/Gilroy-Regular.65aaefc7.woff": {
    "type": "font/woff",
    "etag": "\"9060-zzBIHs4IpN9vMO6QHuVgaunEh+U\"",
    "mtime": "2023-03-09T16:04:33.963Z",
    "size": 36960,
    "path": "../../.output/public/_nuxt/Gilroy-Regular.65aaefc7.woff"
  },
  "/_nuxt/Gilroy-Regular.8e78c2c8.woff2": {
    "type": "font/woff2",
    "etag": "\"6620-YvgRexQI9BpbiVYmIjO7fUYoOpg\"",
    "mtime": "2023-03-09T16:04:33.963Z",
    "size": 26144,
    "path": "../../.output/public/_nuxt/Gilroy-Regular.8e78c2c8.woff2"
  },
  "/_nuxt/Gilroy-Semibold.070077f0.ttf": {
    "type": "font/ttf",
    "etag": "\"147ec-cMJRwatEQoHX5L6rf94slrlBKFw\"",
    "mtime": "2023-03-09T16:04:33.963Z",
    "size": 83948,
    "path": "../../.output/public/_nuxt/Gilroy-Semibold.070077f0.ttf"
  },
  "/_nuxt/Gilroy-Semibold.56d6a07e.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"148a4-HvTP0myt8zR/pvB7Ki+LWPOsHwA\"",
    "mtime": "2023-03-09T16:04:33.963Z",
    "size": 84132,
    "path": "../../.output/public/_nuxt/Gilroy-Semibold.56d6a07e.eot"
  },
  "/_nuxt/Gilroy-Semibold.75bd5a29.woff": {
    "type": "font/woff",
    "etag": "\"94e0-+sXNUrtA2oaMiAWSPCQR4Wowl2w\"",
    "mtime": "2023-03-09T16:04:33.962Z",
    "size": 38112,
    "path": "../../.output/public/_nuxt/Gilroy-Semibold.75bd5a29.woff"
  },
  "/_nuxt/Gilroy-Semibold.a009b007.woff2": {
    "type": "font/woff2",
    "etag": "\"6970-6kmupAz/iJ9UG4kB9PH4p/nH6O0\"",
    "mtime": "2023-03-09T16:04:33.962Z",
    "size": 26992,
    "path": "../../.output/public/_nuxt/Gilroy-Semibold.a009b007.woff2"
  },
  "/_nuxt/Gilroy-Thin.04163bf9.ttf": {
    "type": "font/ttf",
    "etag": "\"14a9c-x/WtdYp3aNLpz5K9uiHhpxIV6yo\"",
    "mtime": "2023-03-09T16:04:33.962Z",
    "size": 84636,
    "path": "../../.output/public/_nuxt/Gilroy-Thin.04163bf9.ttf"
  },
  "/_nuxt/Gilroy-Thin.6d99991a.woff": {
    "type": "font/woff",
    "etag": "\"9324-1Wkx0WILeBmV/mV74bift17OnUE\"",
    "mtime": "2023-03-09T16:04:33.962Z",
    "size": 37668,
    "path": "../../.output/public/_nuxt/Gilroy-Thin.6d99991a.woff"
  },
  "/_nuxt/Gilroy-Thin.84dbd069.woff2": {
    "type": "font/woff2",
    "etag": "\"6790-dlF361R7mS61uqay4kAhqIOQa4Y\"",
    "mtime": "2023-03-09T16:04:33.962Z",
    "size": 26512,
    "path": "../../.output/public/_nuxt/Gilroy-Thin.84dbd069.woff2"
  },
  "/_nuxt/Gilroy-Thin.fdc98222.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14b44-GafzEtMBVEPYBmlNwDfJfNLRrkE\"",
    "mtime": "2023-03-09T16:04:33.961Z",
    "size": 84804,
    "path": "../../.output/public/_nuxt/Gilroy-Thin.fdc98222.eot"
  },
  "/_nuxt/Gilroy-UltraLight.0c8dd458.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14f84-yqU1GUsH4GPGhwwyZkuEegOLguw\"",
    "mtime": "2023-03-09T16:04:33.961Z",
    "size": 85892,
    "path": "../../.output/public/_nuxt/Gilroy-UltraLight.0c8dd458.eot"
  },
  "/_nuxt/Gilroy-UltraLight.4832a904.woff": {
    "type": "font/woff",
    "etag": "\"9588-6Chkg6qjS8Cd7/XBrMuBmXSiSNA\"",
    "mtime": "2023-03-09T16:04:33.961Z",
    "size": 38280,
    "path": "../../.output/public/_nuxt/Gilroy-UltraLight.4832a904.woff"
  },
  "/_nuxt/Gilroy-UltraLight.8d32cca1.ttf": {
    "type": "font/ttf",
    "etag": "\"14ec4-0q0Glbh9SuLb3MgEtDpCFfNQVdU\"",
    "mtime": "2023-03-09T16:04:33.961Z",
    "size": 85700,
    "path": "../../.output/public/_nuxt/Gilroy-UltraLight.8d32cca1.ttf"
  },
  "/_nuxt/Gilroy-UltraLight.aa3d4c53.woff2": {
    "type": "font/woff2",
    "etag": "\"69d0-4hHoEGejqkqLy1fDDXPCZcVBvhM\"",
    "mtime": "2023-03-09T16:04:33.960Z",
    "size": 27088,
    "path": "../../.output/public/_nuxt/Gilroy-UltraLight.aa3d4c53.woff2"
  },
  "/_nuxt/Task.91290e82.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3f43-D9KWTRfZxUiODVI8BRfqtoZiVy0\"",
    "mtime": "2023-03-09T16:04:33.960Z",
    "size": 16195,
    "path": "../../.output/public/_nuxt/Task.91290e82.css"
  },
  "/_nuxt/Task.c29008ec.js": {
    "type": "application/javascript",
    "etag": "\"34bc-S2Ji05Mci0f1L5nltN05+6MxSKU\"",
    "mtime": "2023-03-09T16:04:33.960Z",
    "size": 13500,
    "path": "../../.output/public/_nuxt/Task.c29008ec.js"
  },
  "/_nuxt/Task.c29008ec.js.map": {
    "type": "application/json",
    "etag": "\"c181-vufysG/57uAOfzPYCDIVWzO+Ap0\"",
    "mtime": "2023-03-09T16:04:33.960Z",
    "size": 49537,
    "path": "../../.output/public/_nuxt/Task.c29008ec.js.map"
  },
  "/_nuxt/Title.1278366a.js": {
    "type": "application/javascript",
    "etag": "\"148-1Mnd3y9ly0UgTXyJmOw2mFTbvfk\"",
    "mtime": "2023-03-09T16:04:33.960Z",
    "size": 328,
    "path": "../../.output/public/_nuxt/Title.1278366a.js"
  },
  "/_nuxt/Title.1278366a.js.map": {
    "type": "application/json",
    "etag": "\"69e-ejJVHY0JVHU/3S75GRah/xuA9Pc\"",
    "mtime": "2023-03-09T16:04:33.959Z",
    "size": 1694,
    "path": "../../.output/public/_nuxt/Title.1278366a.js.map"
  },
  "/_nuxt/Title.467cfd13.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36a-PXH7OHPXIkKQHLVlv8dIJLpp38I\"",
    "mtime": "2023-03-09T16:04:33.959Z",
    "size": 874,
    "path": "../../.output/public/_nuxt/Title.467cfd13.css"
  },
  "/_nuxt/about.e028b2c4.js": {
    "type": "application/javascript",
    "etag": "\"a8b2-FW1YQAdDqJHo+tvZRSU0fmX9whI\"",
    "mtime": "2023-03-09T16:04:33.959Z",
    "size": 43186,
    "path": "../../.output/public/_nuxt/about.e028b2c4.js"
  },
  "/_nuxt/about.e028b2c4.js.map": {
    "type": "application/json",
    "etag": "\"105e0-r7FuzZgpqXoBCR3IdBBc97EOFbg\"",
    "mtime": "2023-03-09T16:04:33.959Z",
    "size": 67040,
    "path": "../../.output/public/_nuxt/about.e028b2c4.js.map"
  },
  "/_nuxt/about.f5cfd727.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"229d-wMHz1I6rsSAMzlFMGQQKtEeWnmE\"",
    "mtime": "2023-03-09T16:04:33.959Z",
    "size": 8861,
    "path": "../../.output/public/_nuxt/about.f5cfd727.css"
  },
  "/_nuxt/aladdin.3dfd6302.js": {
    "type": "application/javascript",
    "etag": "\"1af8-+yUnCWSW/EYHQaH/wxUT47LIdCM\"",
    "mtime": "2023-03-09T16:04:33.959Z",
    "size": 6904,
    "path": "../../.output/public/_nuxt/aladdin.3dfd6302.js"
  },
  "/_nuxt/aladdin.3dfd6302.js.map": {
    "type": "application/json",
    "etag": "\"2a65-nTftNE2a+Vbrnek077M3sDirna0\"",
    "mtime": "2023-03-09T16:04:33.958Z",
    "size": 10853,
    "path": "../../.output/public/_nuxt/aladdin.3dfd6302.js.map"
  },
  "/_nuxt/axios.aba6f0e0.js": {
    "type": "application/javascript",
    "etag": "\"706d-fyr6YrpTuAVTU6Hop9IWbmW6IS8\"",
    "mtime": "2023-03-09T16:04:33.958Z",
    "size": 28781,
    "path": "../../.output/public/_nuxt/axios.aba6f0e0.js"
  },
  "/_nuxt/axios.aba6f0e0.js.map": {
    "type": "application/json",
    "etag": "\"21c11-RYqQf7Qeyma9+EDCnDPdb1Mh6MY\"",
    "mtime": "2023-03-09T16:04:33.958Z",
    "size": 138257,
    "path": "../../.output/public/_nuxt/axios.aba6f0e0.js.map"
  },
  "/_nuxt/components.a1eaa061.js": {
    "type": "application/javascript",
    "etag": "\"5d1-QDAgIq+lCEi8de2BGqs/3fYTuG4\"",
    "mtime": "2023-03-09T16:04:33.958Z",
    "size": 1489,
    "path": "../../.output/public/_nuxt/components.a1eaa061.js"
  },
  "/_nuxt/components.a1eaa061.js.map": {
    "type": "application/json",
    "etag": "\"1cdd-ctZrI8rpEiSUJr4r/yq/Qt6GdeY\"",
    "mtime": "2023-03-09T16:04:33.958Z",
    "size": 7389,
    "path": "../../.output/public/_nuxt/components.a1eaa061.js.map"
  },
  "/_nuxt/composables.341712b0.js": {
    "type": "application/javascript",
    "etag": "\"8d-3f6whXckE3jdE0g7XYZiecWRo2c\"",
    "mtime": "2023-03-09T16:04:33.958Z",
    "size": 141,
    "path": "../../.output/public/_nuxt/composables.341712b0.js"
  },
  "/_nuxt/composables.341712b0.js.map": {
    "type": "application/json",
    "etag": "\"2b3-uCV5W8ntT+Qk3F1ADubTY3acxNA\"",
    "mtime": "2023-03-09T16:04:33.957Z",
    "size": 691,
    "path": "../../.output/public/_nuxt/composables.341712b0.js.map"
  },
  "/_nuxt/contacts.c36d1004.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"66cc-GnD94eSzK+T/AC9gchY8j9EeRVg\"",
    "mtime": "2023-03-09T16:04:33.957Z",
    "size": 26316,
    "path": "../../.output/public/_nuxt/contacts.c36d1004.css"
  },
  "/_nuxt/contacts.f135b769.js": {
    "type": "application/javascript",
    "etag": "\"2bf2-wbvZ7FsWWj7KqJKBKLiCrtusCMk\"",
    "mtime": "2023-03-09T16:04:33.957Z",
    "size": 11250,
    "path": "../../.output/public/_nuxt/contacts.f135b769.js"
  },
  "/_nuxt/contacts.f135b769.js.map": {
    "type": "application/json",
    "etag": "\"ba28-zWjxYU/W2VbiUIalfIAsHSuylAI\"",
    "mtime": "2023-03-09T16:04:33.957Z",
    "size": 47656,
    "path": "../../.output/public/_nuxt/contacts.f135b769.js.map"
  },
  "/_nuxt/energotek.228f871e.js": {
    "type": "application/javascript",
    "etag": "\"26b1-KR+lk9G74xCKtEACDdIFDYAjWmk\"",
    "mtime": "2023-03-09T16:04:33.957Z",
    "size": 9905,
    "path": "../../.output/public/_nuxt/energotek.228f871e.js"
  },
  "/_nuxt/energotek.228f871e.js.map": {
    "type": "application/json",
    "etag": "\"51f0-KwmC2EOKWA3Zh1TvecI/QlJxcWQ\"",
    "mtime": "2023-03-09T16:04:33.956Z",
    "size": 20976,
    "path": "../../.output/public/_nuxt/energotek.228f871e.js.map"
  },
  "/_nuxt/energotek.3be4b1dd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"108e-8egUeXV1YCBSZJi4L0JVzNB8b0o\"",
    "mtime": "2023-03-09T16:04:33.956Z",
    "size": 4238,
    "path": "../../.output/public/_nuxt/energotek.3be4b1dd.css"
  },
  "/_nuxt/energotekAR.1069d727.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e5b-XjYr7yn98mjLEjCAi+5TVzPoaJQ\"",
    "mtime": "2023-03-09T16:04:33.956Z",
    "size": 3675,
    "path": "../../.output/public/_nuxt/energotekAR.1069d727.css"
  },
  "/_nuxt/energotekAR.14878c73.js": {
    "type": "application/javascript",
    "etag": "\"253c-2JdIMqQU7BbnXQEPG6Fa1nGNUj4\"",
    "mtime": "2023-03-09T16:04:33.956Z",
    "size": 9532,
    "path": "../../.output/public/_nuxt/energotekAR.14878c73.js"
  },
  "/_nuxt/energotekAR.14878c73.js.map": {
    "type": "application/json",
    "etag": "\"4e50-Q6YBXf6zSvQnXYr3/0g4aOQlaPM\"",
    "mtime": "2023-03-09T16:04:33.956Z",
    "size": 20048,
    "path": "../../.output/public/_nuxt/energotekAR.14878c73.js.map"
  },
  "/_nuxt/entry.589c130c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"53d9-wLB5e3frnlNQ2R5ccUXuFiB2reo\"",
    "mtime": "2023-03-09T16:04:33.955Z",
    "size": 21465,
    "path": "../../.output/public/_nuxt/entry.589c130c.css"
  },
  "/_nuxt/entry.add97367.js": {
    "type": "application/javascript",
    "etag": "\"ed70a-fAWuQOkGYq5UkbNQsYMH+nydw8w\"",
    "mtime": "2023-03-09T16:04:33.955Z",
    "size": 972554,
    "path": "../../.output/public/_nuxt/entry.add97367.js"
  },
  "/_nuxt/entry.add97367.js.map": {
    "type": "application/json",
    "etag": "\"23c37d-WC5qwOwNukgK9lYciI/IOH3Ov28\"",
    "mtime": "2023-03-09T16:04:33.953Z",
    "size": 2343805,
    "path": "../../.output/public/_nuxt/entry.add97367.js.map"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-03-09T16:04:33.951Z",
    "size": 3630,
    "path": "../../.output/public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.f9e42591.js": {
    "type": "application/javascript",
    "etag": "\"8f9-w/2CbcAKzzfFuGEux2GmQVz3E9c\"",
    "mtime": "2023-03-09T16:04:33.951Z",
    "size": 2297,
    "path": "../../.output/public/_nuxt/error-404.f9e42591.js"
  },
  "/_nuxt/error-404.f9e42591.js.map": {
    "type": "application/json",
    "etag": "\"1664-dDmC9rEtNKYDFVoO/87qdj4+B70\"",
    "mtime": "2023-03-09T16:04:33.951Z",
    "size": 5732,
    "path": "../../.output/public/_nuxt/error-404.f9e42591.js.map"
  },
  "/_nuxt/error-500.95c7de82.js": {
    "type": "application/javascript",
    "etag": "\"7ac-rZ4WVICMhL0E2e48SiprzF67TPY\"",
    "mtime": "2023-03-09T16:04:33.951Z",
    "size": 1964,
    "path": "../../.output/public/_nuxt/error-500.95c7de82.js"
  },
  "/_nuxt/error-500.95c7de82.js.map": {
    "type": "application/json",
    "etag": "\"e81-kNeYV/D3MwvelSvVV2w2nZGokS0\"",
    "mtime": "2023-03-09T16:04:33.950Z",
    "size": 3713,
    "path": "../../.output/public/_nuxt/error-500.95c7de82.js.map"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-03-09T16:04:33.949Z",
    "size": 1950,
    "path": "../../.output/public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.8f7eb226.js": {
    "type": "application/javascript",
    "etag": "\"4cb-h1HhN1uYroEF6QbtAVjmQ5iySTI\"",
    "mtime": "2023-03-09T16:04:33.949Z",
    "size": 1227,
    "path": "../../.output/public/_nuxt/error-component.8f7eb226.js"
  },
  "/_nuxt/error-component.8f7eb226.js.map": {
    "type": "application/json",
    "etag": "\"abf-n3qzsYeYpWpM1p6yQ1A46uzlR+U\"",
    "mtime": "2023-03-09T16:04:33.948Z",
    "size": 2751,
    "path": "../../.output/public/_nuxt/error-component.8f7eb226.js.map"
  },
  "/_nuxt/flipknife.1d639723.js": {
    "type": "application/javascript",
    "etag": "\"f37-qrSnmNPsSD44NNqAZ5056SlvhpU\"",
    "mtime": "2023-03-09T16:04:33.948Z",
    "size": 3895,
    "path": "../../.output/public/_nuxt/flipknife.1d639723.js"
  },
  "/_nuxt/flipknife.1d639723.js.map": {
    "type": "application/json",
    "etag": "\"1d79-99Xdn+NiuiuGuzQk3ig+Q5ejZ1g\"",
    "mtime": "2023-03-09T16:04:33.948Z",
    "size": 7545,
    "path": "../../.output/public/_nuxt/flipknife.1d639723.js.map"
  },
  "/_nuxt/genezis.af306a34.js": {
    "type": "application/javascript",
    "etag": "\"18c0-/UxP4e6nXz4eW/X9R5pWbwRi3h4\"",
    "mtime": "2023-03-09T16:04:33.948Z",
    "size": 6336,
    "path": "../../.output/public/_nuxt/genezis.af306a34.js"
  },
  "/_nuxt/genezis.af306a34.js.map": {
    "type": "application/json",
    "etag": "\"2a43-fAKLbylNbb9iHahZ5UUaal4YLRw\"",
    "mtime": "2023-03-09T16:04:33.948Z",
    "size": 10819,
    "path": "../../.output/public/_nuxt/genezis.af306a34.js.map"
  },
  "/_nuxt/goup.5db64c5b.js": {
    "type": "application/javascript",
    "etag": "\"ff9-dOmV8HUFXDbKBvdH0oKcHhSNpL0\"",
    "mtime": "2023-03-09T16:04:33.948Z",
    "size": 4089,
    "path": "../../.output/public/_nuxt/goup.5db64c5b.js"
  },
  "/_nuxt/goup.5db64c5b.js.map": {
    "type": "application/json",
    "etag": "\"2013-eA2aS+0Jd2+sqjV42YDxPcRd5N0\"",
    "mtime": "2023-03-09T16:04:33.947Z",
    "size": 8211,
    "path": "../../.output/public/_nuxt/goup.5db64c5b.js.map"
  },
  "/_nuxt/hone.cc1414bd.js": {
    "type": "application/javascript",
    "etag": "\"2948-TjZStV0vlX6HgQJE+3XL47Lc3mc\"",
    "mtime": "2023-03-09T16:04:33.947Z",
    "size": 10568,
    "path": "../../.output/public/_nuxt/hone.cc1414bd.js"
  },
  "/_nuxt/hone.cc1414bd.js.map": {
    "type": "application/json",
    "etag": "\"4a79-Z1SLE9Z3hUNRhlu55Lu6P8auHRY\"",
    "mtime": "2023-03-09T16:04:33.947Z",
    "size": 19065,
    "path": "../../.output/public/_nuxt/hone.cc1414bd.js.map"
  },
  "/_nuxt/index.0139e917.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"33f2-V0TjJyKivNulgrclMDC6IP/d8Uw\"",
    "mtime": "2023-03-09T16:04:33.947Z",
    "size": 13298,
    "path": "../../.output/public/_nuxt/index.0139e917.css"
  },
  "/_nuxt/index.d26070f1.js": {
    "type": "application/javascript",
    "etag": "\"1c66-LAH+YwOy+ejzTzXnhsIS97G1VDw\"",
    "mtime": "2023-03-09T16:04:33.947Z",
    "size": 7270,
    "path": "../../.output/public/_nuxt/index.d26070f1.js"
  },
  "/_nuxt/index.d26070f1.js.map": {
    "type": "application/json",
    "etag": "\"811b-qAM/DElFtjhxio41zKFZ0MPkWec\"",
    "mtime": "2023-03-09T16:04:33.946Z",
    "size": 33051,
    "path": "../../.output/public/_nuxt/index.d26070f1.js.map"
  },
  "/_nuxt/izenbot.67605053.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"51f-+733m5SX3xjqMSZTcJBdlquUvdk\"",
    "mtime": "2023-03-09T16:04:33.946Z",
    "size": 1311,
    "path": "../../.output/public/_nuxt/izenbot.67605053.css"
  },
  "/_nuxt/izenbot.c2eaf4b7.js": {
    "type": "application/javascript",
    "etag": "\"1f89-ygqagFlg8iOiWz0D9IMieqzL16Y\"",
    "mtime": "2023-03-09T16:04:33.946Z",
    "size": 8073,
    "path": "../../.output/public/_nuxt/izenbot.c2eaf4b7.js"
  },
  "/_nuxt/izenbot.c2eaf4b7.js.map": {
    "type": "application/json",
    "etag": "\"3da2-1ZyZWlDwmQTyT3Ny/Ng7/qZSyFk\"",
    "mtime": "2023-03-09T16:04:33.946Z",
    "size": 15778,
    "path": "../../.output/public/_nuxt/izenbot.c2eaf4b7.js.map"
  },
  "/_nuxt/kvanttelekomBrend.0262a0fe.js": {
    "type": "application/javascript",
    "etag": "\"17f3-fbdcwvgaPnnHE9chQomGkwc6FKM\"",
    "mtime": "2023-03-09T16:04:33.946Z",
    "size": 6131,
    "path": "../../.output/public/_nuxt/kvanttelekomBrend.0262a0fe.js"
  },
  "/_nuxt/kvanttelekomBrend.0262a0fe.js.map": {
    "type": "application/json",
    "etag": "\"2ae7-Bu+C6N2X3TfvH1T6J9WLOzKVK2U\"",
    "mtime": "2023-03-09T16:04:33.945Z",
    "size": 10983,
    "path": "../../.output/public/_nuxt/kvanttelekomBrend.0262a0fe.js.map"
  },
  "/_nuxt/marusya.279ed562.js": {
    "type": "application/javascript",
    "etag": "\"f21-FHmtn/TaXA++KF0v+vdiPaD8H3U\"",
    "mtime": "2023-03-09T16:04:33.945Z",
    "size": 3873,
    "path": "../../.output/public/_nuxt/marusya.279ed562.js"
  },
  "/_nuxt/marusya.279ed562.js.map": {
    "type": "application/json",
    "etag": "\"1c4f-3pAumRxO20kEZrs7E2Exu4tRYmg\"",
    "mtime": "2023-03-09T16:04:33.945Z",
    "size": 7247,
    "path": "../../.output/public/_nuxt/marusya.279ed562.js.map"
  },
  "/_nuxt/mobdebut.9fe9ac1b.js": {
    "type": "application/javascript",
    "etag": "\"147a-1+JIHH7jDHxooXMoA2/vmfi1G+I\"",
    "mtime": "2023-03-09T16:04:33.942Z",
    "size": 5242,
    "path": "../../.output/public/_nuxt/mobdebut.9fe9ac1b.js"
  },
  "/_nuxt/mobdebut.9fe9ac1b.js.map": {
    "type": "application/json",
    "etag": "\"25bb-Lx9/Fumt4tnXUDnsf3k6WWITrvQ\"",
    "mtime": "2023-03-09T16:04:33.941Z",
    "size": 9659,
    "path": "../../.output/public/_nuxt/mobdebut.9fe9ac1b.js.map"
  },
  "/_nuxt/motorika.6335c85b.js": {
    "type": "application/javascript",
    "etag": "\"28f8-SUgG8r2V9RF2luGsC0F/sm032Gg\"",
    "mtime": "2023-03-09T16:04:33.941Z",
    "size": 10488,
    "path": "../../.output/public/_nuxt/motorika.6335c85b.js"
  },
  "/_nuxt/motorika.6335c85b.js.map": {
    "type": "application/json",
    "etag": "\"50f1-DYzWmw8gLFJH63LfXNomkeIc3bc\"",
    "mtime": "2023-03-09T16:04:33.941Z",
    "size": 20721,
    "path": "../../.output/public/_nuxt/motorika.6335c85b.js.map"
  },
  "/_nuxt/motorika.ff87ef81.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a3-7Aen3DO1RzNSWOVlAWK0Mkwc+kw\"",
    "mtime": "2023-03-09T16:04:33.941Z",
    "size": 419,
    "path": "../../.output/public/_nuxt/motorika.ff87ef81.css"
  },
  "/_nuxt/oceanview.54a919ee.js": {
    "type": "application/javascript",
    "etag": "\"1099-8pKEScAdyk98F8jHXrIpaOa88I0\"",
    "mtime": "2023-03-09T16:04:33.940Z",
    "size": 4249,
    "path": "../../.output/public/_nuxt/oceanview.54a919ee.js"
  },
  "/_nuxt/oceanview.54a919ee.js.map": {
    "type": "application/json",
    "etag": "\"1dc2-jM4ta5ulD/4V6gL7VEAdg+XD3oc\"",
    "mtime": "2023-03-09T16:04:33.940Z",
    "size": 7618,
    "path": "../../.output/public/_nuxt/oceanview.54a919ee.js.map"
  },
  "/_nuxt/ownwifi.e8f86018.js": {
    "type": "application/javascript",
    "etag": "\"1148-N8iq5x7hk7ujj1t2TbtPVS+Vsf4\"",
    "mtime": "2023-03-09T16:04:33.940Z",
    "size": 4424,
    "path": "../../.output/public/_nuxt/ownwifi.e8f86018.js"
  },
  "/_nuxt/ownwifi.e8f86018.js.map": {
    "type": "application/json",
    "etag": "\"1fae-Q3J2OsX5KEkkr+8ipp3BGgM+afY\"",
    "mtime": "2023-03-09T16:04:33.940Z",
    "size": 8110,
    "path": "../../.output/public/_nuxt/ownwifi.e8f86018.js.map"
  },
  "/_nuxt/pawpaw.4731e454.js": {
    "type": "application/javascript",
    "etag": "\"eed-Nb5VayvwH8zMqta9Ypk+WL/QRNA\"",
    "mtime": "2023-03-09T16:04:33.940Z",
    "size": 3821,
    "path": "../../.output/public/_nuxt/pawpaw.4731e454.js"
  },
  "/_nuxt/pawpaw.4731e454.js.map": {
    "type": "application/json",
    "etag": "\"1cc7-KjrYGFZPAO7h4ip1UH26Sg28V3w\"",
    "mtime": "2023-03-09T16:04:33.939Z",
    "size": 7367,
    "path": "../../.output/public/_nuxt/pawpaw.4731e454.js.map"
  },
  "/_nuxt/policy.0c725845.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ca-lR5u2CTN+9DKOkDQlU9Vv/t9jKs\"",
    "mtime": "2023-03-09T16:04:33.939Z",
    "size": 1226,
    "path": "../../.output/public/_nuxt/policy.0c725845.css"
  },
  "/_nuxt/policy.4b6c1e80.js": {
    "type": "application/javascript",
    "etag": "\"5a29-wIQd53u98FoNyeMwa9BxnOTvP5g\"",
    "mtime": "2023-03-09T16:04:33.939Z",
    "size": 23081,
    "path": "../../.output/public/_nuxt/policy.4b6c1e80.js"
  },
  "/_nuxt/policy.4b6c1e80.js.map": {
    "type": "application/json",
    "etag": "\"6b5c-AJn8FAdANHj3NVefEDfSOXkz6wY\"",
    "mtime": "2023-03-09T16:04:33.939Z",
    "size": 27484,
    "path": "../../.output/public/_nuxt/policy.4b6c1e80.js.map"
  },
  "/_nuxt/primetravel.26e17b4f.js": {
    "type": "application/javascript",
    "etag": "\"131f-01M/poRjPgVlWNX46MVl7q9ICjY\"",
    "mtime": "2023-03-09T16:04:33.938Z",
    "size": 4895,
    "path": "../../.output/public/_nuxt/primetravel.26e17b4f.js"
  },
  "/_nuxt/primetravel.26e17b4f.js.map": {
    "type": "application/json",
    "etag": "\"21cd-Y9WmXX8U5gtlK5jYtJxNdTj9uzs\"",
    "mtime": "2023-03-09T16:04:33.938Z",
    "size": 8653,
    "path": "../../.output/public/_nuxt/primetravel.26e17b4f.js.map"
  },
  "/_nuxt/prozapchast.3aa50540.js": {
    "type": "application/javascript",
    "etag": "\"1126-fRfuhvr4bnOJ5JqapcGUSupRY5g\"",
    "mtime": "2023-03-09T16:04:33.938Z",
    "size": 4390,
    "path": "../../.output/public/_nuxt/prozapchast.3aa50540.js"
  },
  "/_nuxt/prozapchast.3aa50540.js.map": {
    "type": "application/json",
    "etag": "\"1f91-30hMh6Y/vJpyW29Fy5EMip2o80U\"",
    "mtime": "2023-03-09T16:04:33.938Z",
    "size": 8081,
    "path": "../../.output/public/_nuxt/prozapchast.3aa50540.js.map"
  },
  "/_nuxt/spicynote.03a82b22.js": {
    "type": "application/javascript",
    "etag": "\"1db9-6i3n2/0fwpEjekNMCYa8EdM2XVU\"",
    "mtime": "2023-03-09T16:04:33.938Z",
    "size": 7609,
    "path": "../../.output/public/_nuxt/spicynote.03a82b22.js"
  },
  "/_nuxt/spicynote.03a82b22.js.map": {
    "type": "application/json",
    "etag": "\"3738-tzJ3vawbLYL1BDgdknU/BWCPD3k\"",
    "mtime": "2023-03-09T16:04:33.937Z",
    "size": 14136,
    "path": "../../.output/public/_nuxt/spicynote.03a82b22.js.map"
  },
  "/_nuxt/spicynote.d8e9a96b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1cf-oUKzb2a5zbA6CdIvWPZNbPrHHYI\"",
    "mtime": "2023-03-09T16:04:33.937Z",
    "size": 463,
    "path": "../../.output/public/_nuxt/spicynote.d8e9a96b.css"
  },
  "/_nuxt/tomiai.a69a633d.js": {
    "type": "application/javascript",
    "etag": "\"1370-d5zELRbGjQBNl7y4c5QZHktH64U\"",
    "mtime": "2023-03-09T16:04:33.937Z",
    "size": 4976,
    "path": "../../.output/public/_nuxt/tomiai.a69a633d.js"
  },
  "/_nuxt/tomiai.a69a633d.js.map": {
    "type": "application/json",
    "etag": "\"22ea-K6p1G4q3Uw+jq4P5BNc8MWfDOwU\"",
    "mtime": "2023-03-09T16:04:33.936Z",
    "size": 8938,
    "path": "../../.output/public/_nuxt/tomiai.a69a633d.js.map"
  },
  "/_nuxt/ukigassen.c18589e4.js": {
    "type": "application/javascript",
    "etag": "\"dde-HTKOAOw8ZY4taovZQOrD4p1TwVo\"",
    "mtime": "2023-03-09T16:04:33.936Z",
    "size": 3550,
    "path": "../../.output/public/_nuxt/ukigassen.c18589e4.js"
  },
  "/_nuxt/ukigassen.c18589e4.js.map": {
    "type": "application/json",
    "etag": "\"1a29-XKrU50GiGTQrXnGBFa5JfJSZXc8\"",
    "mtime": "2023-03-09T16:04:33.936Z",
    "size": 6697,
    "path": "../../.output/public/_nuxt/ukigassen.c18589e4.js.map"
  },
  "/_nuxt/unidance.a44cebaf.js": {
    "type": "application/javascript",
    "etag": "\"f9a-iuAiNe0vp08iihefriWaC09MgGA\"",
    "mtime": "2023-03-09T16:04:33.935Z",
    "size": 3994,
    "path": "../../.output/public/_nuxt/unidance.a44cebaf.js"
  },
  "/_nuxt/unidance.a44cebaf.js.map": {
    "type": "application/json",
    "etag": "\"1cb9-bbKsi5TrOkl4r1B5lAAW9h5KnKQ\"",
    "mtime": "2023-03-09T16:04:33.934Z",
    "size": 7353,
    "path": "../../.output/public/_nuxt/unidance.a44cebaf.js.map"
  },
  "/_nuxt/wballiance.3d83952b.js": {
    "type": "application/javascript",
    "etag": "\"15d9-xpVUN3e6UtzE3TzDAzsbNxysUCE\"",
    "mtime": "2023-03-09T16:04:33.934Z",
    "size": 5593,
    "path": "../../.output/public/_nuxt/wballiance.3d83952b.js"
  },
  "/_nuxt/wballiance.3d83952b.js.map": {
    "type": "application/json",
    "etag": "\"26b3-rK+56GPbAKxR0JNHPtuXnuh7Res\"",
    "mtime": "2023-03-09T16:04:33.934Z",
    "size": 9907,
    "path": "../../.output/public/_nuxt/wballiance.3d83952b.js.map"
  },
  "/_nuxt/works.b4d57e58.js": {
    "type": "application/javascript",
    "etag": "\"223b-eTKSV/bsAxjrl1tzKN/5PZBt1QM\"",
    "mtime": "2023-03-09T16:04:33.933Z",
    "size": 8763,
    "path": "../../.output/public/_nuxt/works.b4d57e58.js"
  },
  "/_nuxt/works.b4d57e58.js.map": {
    "type": "application/json",
    "etag": "\"6dca-FTFHN4ByA9WeDSVeO2iQ0U+IAT8\"",
    "mtime": "2023-03-09T16:04:33.932Z",
    "size": 28106,
    "path": "../../.output/public/_nuxt/works.b4d57e58.js.map"
  },
  "/_nuxt/works.e3ef600c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ea9-MZ6AzkOk2nSOYSXOc0XBuc3qe3A\"",
    "mtime": "2023-03-09T16:04:33.931Z",
    "size": 7849,
    "path": "../../.output/public/_nuxt/works.e3ef600c.css"
  },
  "/_nuxt/ximtexp.8c409bd2.js": {
    "type": "application/javascript",
    "etag": "\"12f7-m4BCoXdeYjmj4MRiFItZocwCLSo\"",
    "mtime": "2023-03-09T16:04:33.931Z",
    "size": 4855,
    "path": "../../.output/public/_nuxt/ximtexp.8c409bd2.js"
  },
  "/_nuxt/ximtexp.8c409bd2.js.map": {
    "type": "application/json",
    "etag": "\"240e-DDkQNnzSuyuIF7l5FUcSktPoJbM\"",
    "mtime": "2023-03-09T16:04:33.931Z",
    "size": 9230,
    "path": "../../.output/public/_nuxt/ximtexp.8c409bd2.js.map"
  },
  "/_nuxt/xplane.8f108a01.js": {
    "type": "application/javascript",
    "etag": "\"e1b-FSYAVCtRy2KJVxFa2NYJuDRH0hM\"",
    "mtime": "2023-03-09T16:04:33.931Z",
    "size": 3611,
    "path": "../../.output/public/_nuxt/xplane.8f108a01.js"
  },
  "/_nuxt/xplane.8f108a01.js.map": {
    "type": "application/json",
    "etag": "\"1a3a-HeSjX29tEwiBjzoK9KXYVWp7ces\"",
    "mtime": "2023-03-09T16:04:33.930Z",
    "size": 6714,
    "path": "../../.output/public/_nuxt/xplane.8f108a01.js.map"
  },
  "/_nuxt/zolotoaltaya.85860627.js": {
    "type": "application/javascript",
    "etag": "\"16d0-L4A98q5kxBOV/kLYkl6HtWzkYE0\"",
    "mtime": "2023-03-09T16:04:33.930Z",
    "size": 5840,
    "path": "../../.output/public/_nuxt/zolotoaltaya.85860627.js"
  },
  "/_nuxt/zolotoaltaya.85860627.js.map": {
    "type": "application/json",
    "etag": "\"27a3-Rzm+6OdEnJQKp3jcxcJNN6OT1W0\"",
    "mtime": "2023-03-09T16:04:33.929Z",
    "size": 10147,
    "path": "../../.output/public/_nuxt/zolotoaltaya.85860627.js.map"
  },
  "/img/Team/Team-01.png": {
    "type": "image/png",
    "etag": "\"8a00-g6QTsfF/CwyGdAhKFSgtbdfiQG8\"",
    "mtime": "2023-03-09T16:04:34.737Z",
    "size": 35328,
    "path": "../../.output/public/img/Team/Team-01.png"
  },
  "/img/Team/Team-01.webp": {
    "type": "image/webp",
    "etag": "\"1e64-YcBgYAc7jRlih7V7dtUiNT50TIM\"",
    "mtime": "2023-03-09T16:04:34.737Z",
    "size": 7780,
    "path": "../../.output/public/img/Team/Team-01.webp"
  },
  "/img/Team/Team-02.png": {
    "type": "image/png",
    "etag": "\"dba5-bHQ5XJuvKXpBYpGDYWP+/KSwwkY\"",
    "mtime": "2023-03-09T16:04:34.736Z",
    "size": 56229,
    "path": "../../.output/public/img/Team/Team-02.png"
  },
  "/img/Team/Team-02.webp": {
    "type": "image/webp",
    "etag": "\"1c10-RfQU0afFHWEk4f9WPFfYaxi1z2I\"",
    "mtime": "2023-03-09T16:04:34.736Z",
    "size": 7184,
    "path": "../../.output/public/img/Team/Team-02.webp"
  },
  "/img/Team/Team-03.png": {
    "type": "image/png",
    "etag": "\"fc51-0qg4CN/+kqr0c4uQr86mtJwp+6w\"",
    "mtime": "2023-03-09T16:04:34.736Z",
    "size": 64593,
    "path": "../../.output/public/img/Team/Team-03.png"
  },
  "/img/Team/Team-03.webp": {
    "type": "image/webp",
    "etag": "\"245e-6KkT9lkLZbKQq5hdmc2RP150zyg\"",
    "mtime": "2023-03-09T16:04:34.735Z",
    "size": 9310,
    "path": "../../.output/public/img/Team/Team-03.webp"
  },
  "/img/Team/Team-04.png": {
    "type": "image/png",
    "etag": "\"c654-Kl347FRyqAPhI7Jom+B10muM4gU\"",
    "mtime": "2023-03-09T16:04:34.735Z",
    "size": 50772,
    "path": "../../.output/public/img/Team/Team-04.png"
  },
  "/img/Team/Team-04.webp": {
    "type": "image/webp",
    "etag": "\"2c18-qSIbuWd182fo49h27EMdQlHewio\"",
    "mtime": "2023-03-09T16:04:34.734Z",
    "size": 11288,
    "path": "../../.output/public/img/Team/Team-04.webp"
  },
  "/img/Team/Team-05.png": {
    "type": "image/png",
    "etag": "\"edd3-s6fxJmEzXO4b2VORcdkkhETdQ6E\"",
    "mtime": "2023-03-09T16:04:34.733Z",
    "size": 60883,
    "path": "../../.output/public/img/Team/Team-05.png"
  },
  "/img/Team/Team-05.webp": {
    "type": "image/webp",
    "etag": "\"1d56-9EQCdpslTJdbgYEIjoz2bECW/PA\"",
    "mtime": "2023-03-09T16:04:34.733Z",
    "size": 7510,
    "path": "../../.output/public/img/Team/Team-05.webp"
  },
  "/img/Team/Team-06.png": {
    "type": "image/png",
    "etag": "\"e4c6-kfz1t90ArqcjWWPDD1ruy6mGWUg\"",
    "mtime": "2023-03-09T16:04:34.733Z",
    "size": 58566,
    "path": "../../.output/public/img/Team/Team-06.png"
  },
  "/img/Team/Team-06.webp": {
    "type": "image/webp",
    "etag": "\"1b08-zZz0T4UgZjUb68gtuk62CgoNKy8\"",
    "mtime": "2023-03-09T16:04:34.732Z",
    "size": 6920,
    "path": "../../.output/public/img/Team/Team-06.webp"
  },
  "/img/Team/Team-07.png": {
    "type": "image/png",
    "etag": "\"f911-ahM4MQ0R0E/9rBDlzhszJ1TnCa8\"",
    "mtime": "2023-03-09T16:04:34.732Z",
    "size": 63761,
    "path": "../../.output/public/img/Team/Team-07.png"
  },
  "/img/Team/Team-07.webp": {
    "type": "image/webp",
    "etag": "\"1a4c-ox9PF1jwvf/dCBzK8dt/daxgREM\"",
    "mtime": "2023-03-09T16:04:34.731Z",
    "size": 6732,
    "path": "../../.output/public/img/Team/Team-07.webp"
  },
  "/img/Team/Team-08.png": {
    "type": "image/png",
    "etag": "\"e32c-xvC6+KrwK8ArWuFiHDnpTqLdvQI\"",
    "mtime": "2023-03-09T16:04:34.731Z",
    "size": 58156,
    "path": "../../.output/public/img/Team/Team-08.png"
  },
  "/img/Team/Team-08.webp": {
    "type": "image/webp",
    "etag": "\"1dee-GpWovtsNpZpuf9vGdnU9cDcey3w\"",
    "mtime": "2023-03-09T16:04:34.730Z",
    "size": 7662,
    "path": "../../.output/public/img/Team/Team-08.webp"
  },
  "/img/like/Cat.png": {
    "type": "image/png",
    "etag": "\"4b59-M3I5UE5cP1OTkN1auGZtSinYF4o\"",
    "mtime": "2023-03-09T16:04:34.425Z",
    "size": 19289,
    "path": "../../.output/public/img/like/Cat.png"
  },
  "/img/like/Cat.webp": {
    "type": "image/webp",
    "etag": "\"da4-LdiPNr7c/FBGvPZhCV/8vvz3X8M\"",
    "mtime": "2023-03-09T16:04:34.424Z",
    "size": 3492,
    "path": "../../.output/public/img/like/Cat.webp"
  },
  "/img/like/Cat_Shadow.png": {
    "type": "image/png",
    "etag": "\"1b86-yBH3SUaQwLzxCf5xL+6fdhWu18E\"",
    "mtime": "2023-03-09T16:04:34.423Z",
    "size": 7046,
    "path": "../../.output/public/img/like/Cat_Shadow.png"
  },
  "/img/like/Cat_Shadow.webp": {
    "type": "image/webp",
    "etag": "\"fdc-tVQV+unM99fusMY0OY4Ih3Yn2C4\"",
    "mtime": "2023-03-09T16:04:34.423Z",
    "size": 4060,
    "path": "../../.output/public/img/like/Cat_Shadow.webp"
  },
  "/img/3Dsloi/JPG/3Dsloi-page-intro.png": {
    "type": "image/png",
    "etag": "\"21b76-JR0cn6EhVAIJd/vSsRK7yY5JnFY\"",
    "mtime": "2023-03-09T16:04:34.751Z",
    "size": 138102,
    "path": "../../.output/public/img/3Dsloi/JPG/3Dsloi-page-intro.png"
  },
  "/img/3Dsloi/JPG/3Dsloi-page.png": {
    "type": "image/png",
    "etag": "\"21b76-JR0cn6EhVAIJd/vSsRK7yY5JnFY\"",
    "mtime": "2023-03-09T16:04:34.750Z",
    "size": 138102,
    "path": "../../.output/public/img/3Dsloi/JPG/3Dsloi-page.png"
  },
  "/img/3Dsloi/Mobile/3Dsloi-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"2024a-swVuuc1Kn1sdv3SNvvyhPBRRGek\"",
    "mtime": "2023-03-09T16:04:34.749Z",
    "size": 131658,
    "path": "../../.output/public/img/3Dsloi/Mobile/3Dsloi-page-intro.webp"
  },
  "/img/3Dsloi/Mobile/3Dsloi-page.webp": {
    "type": "image/webp",
    "etag": "\"57e8-oG6iQAmxbeat3haBpfZUi5OYjxs\"",
    "mtime": "2023-03-09T16:04:34.748Z",
    "size": 22504,
    "path": "../../.output/public/img/3Dsloi/Mobile/3Dsloi-page.webp"
  },
  "/img/3Dsloi/PC/3Dsloi-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"5f806-4aBb6LlSlLnwlZr6YtbZymD47oY\"",
    "mtime": "2023-03-09T16:04:34.744Z",
    "size": 391174,
    "path": "../../.output/public/img/3Dsloi/PC/3Dsloi-page-intro.webp"
  },
  "/img/3Dsloi/PC/3Dsloi-page.webp": {
    "type": "image/webp",
    "etag": "\"e118-5mIELcss35qNyHM/0IJX5kpSCtk\"",
    "mtime": "2023-03-09T16:04:34.740Z",
    "size": 57624,
    "path": "../../.output/public/img/3Dsloi/PC/3Dsloi-page.webp"
  },
  "/img/aladdin/JPG/aladdin-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"21fc1-qb34PhiPMpIApiynqqAF7KK6aBg\"",
    "mtime": "2023-03-09T16:04:34.729Z",
    "size": 139201,
    "path": "../../.output/public/img/aladdin/JPG/aladdin-page-img-01.jpg"
  },
  "/img/aladdin/JPG/aladdin-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"8190-3hw3PP8STwlykqbTYVg2Xvlm8MI\"",
    "mtime": "2023-03-09T16:04:34.726Z",
    "size": 33168,
    "path": "../../.output/public/img/aladdin/JPG/aladdin-page-img-02.jpg"
  },
  "/img/aladdin/JPG/aladdin-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"7d44-BnHVyEuYgvxiyS5xdTiNSNH4Z88\"",
    "mtime": "2023-03-09T16:04:34.725Z",
    "size": 32068,
    "path": "../../.output/public/img/aladdin/JPG/aladdin-page-img-03.jpg"
  },
  "/img/aladdin/JPG/aladdin-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"11206-UzbhfdgEDzHwjLQa5gPKTxDsqK0\"",
    "mtime": "2023-03-09T16:04:34.725Z",
    "size": 70150,
    "path": "../../.output/public/img/aladdin/JPG/aladdin-page-img-04.jpg"
  },
  "/img/aladdin/JPG/aladdin-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"c1bc-kFXjmhdSXZqGbkjQ2E5ZUx0VDzw\"",
    "mtime": "2023-03-09T16:04:34.725Z",
    "size": 49596,
    "path": "../../.output/public/img/aladdin/JPG/aladdin-page-img-05.jpg"
  },
  "/img/aladdin/JPG/aladdin-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"3129-sSOlw/DWknV5SMxHnouzH4dujaU\"",
    "mtime": "2023-03-09T16:04:34.724Z",
    "size": 12585,
    "path": "../../.output/public/img/aladdin/JPG/aladdin-page-img-06.jpg"
  },
  "/img/aladdin/JPG/aladdin-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"45c9-HVTXND3Sa9ne/qacaeZp9GGhpAE\"",
    "mtime": "2023-03-09T16:04:34.724Z",
    "size": 17865,
    "path": "../../.output/public/img/aladdin/JPG/aladdin-page-img-07.jpg"
  },
  "/img/aladdin/JPG/aladdin-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"41dc-XFZe4H91r8P0vs2A/le2tmUESy4\"",
    "mtime": "2023-03-09T16:04:34.724Z",
    "size": 16860,
    "path": "../../.output/public/img/aladdin/JPG/aladdin-page-img-08.jpg"
  },
  "/img/aladdin/JPG/aladdin-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"b649-2/ZZlj9xmQGTJvhjGKNaUmNwJj8\"",
    "mtime": "2023-03-09T16:04:34.723Z",
    "size": 46665,
    "path": "../../.output/public/img/aladdin/JPG/aladdin-page-img-09.jpg"
  },
  "/img/aladdin/JPG/aladdin-page-img-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"b4d8-L+n/CbwlIQmvnXjNzsMPDj1CnZM\"",
    "mtime": "2023-03-09T16:04:34.723Z",
    "size": 46296,
    "path": "../../.output/public/img/aladdin/JPG/aladdin-page-img-10.jpg"
  },
  "/img/aladdin/JPG/aladdin-page-intro.png": {
    "type": "image/png",
    "etag": "\"133f8-bOuXzoOD7TxBfnRxcEc0IofSkCw\"",
    "mtime": "2023-03-09T16:04:34.723Z",
    "size": 78840,
    "path": "../../.output/public/img/aladdin/JPG/aladdin-page-intro.png"
  },
  "/img/aladdin/Mobile/aladdin-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"dd9a-K3khcB0STOvZYVCA0OOsA4kwcow\"",
    "mtime": "2023-03-09T16:04:34.722Z",
    "size": 56730,
    "path": "../../.output/public/img/aladdin/Mobile/aladdin-page-img-01.webp"
  },
  "/img/aladdin/Mobile/aladdin-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"41ac-TkIpCyWkNuG059rbdPCmLv55tx8\"",
    "mtime": "2023-03-09T16:04:34.722Z",
    "size": 16812,
    "path": "../../.output/public/img/aladdin/Mobile/aladdin-page-img-02.webp"
  },
  "/img/aladdin/Mobile/aladdin-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"3e0a-R5jTsg3gyKP9aqE8pFIJU1CkuOQ\"",
    "mtime": "2023-03-09T16:04:34.721Z",
    "size": 15882,
    "path": "../../.output/public/img/aladdin/Mobile/aladdin-page-img-03.webp"
  },
  "/img/aladdin/Mobile/aladdin-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"38c2-lpWCatqCdvn0vNIyiqXKv9nGo/c\"",
    "mtime": "2023-03-09T16:04:34.721Z",
    "size": 14530,
    "path": "../../.output/public/img/aladdin/Mobile/aladdin-page-img-04.webp"
  },
  "/img/aladdin/Mobile/aladdin-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"3842-c7/IyPwxK5zsdos3oLZb3uaEcFA\"",
    "mtime": "2023-03-09T16:04:34.721Z",
    "size": 14402,
    "path": "../../.output/public/img/aladdin/Mobile/aladdin-page-img-05.webp"
  },
  "/img/aladdin/Mobile/aladdin-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"1320-FuBfEdouOdih2x7gyhdHxIUy3R4\"",
    "mtime": "2023-03-09T16:04:34.721Z",
    "size": 4896,
    "path": "../../.output/public/img/aladdin/Mobile/aladdin-page-img-06.webp"
  },
  "/img/aladdin/Mobile/aladdin-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"ed6-4iy1KwNkiZc/tC8ZagJ4jLkIubk\"",
    "mtime": "2023-03-09T16:04:34.720Z",
    "size": 3798,
    "path": "../../.output/public/img/aladdin/Mobile/aladdin-page-img-07.webp"
  },
  "/img/aladdin/Mobile/aladdin-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"1d52-YHDesycJJs/JRJl2ocMeGkUHu1k\"",
    "mtime": "2023-03-09T16:04:34.720Z",
    "size": 7506,
    "path": "../../.output/public/img/aladdin/Mobile/aladdin-page-img-08.webp"
  },
  "/img/aladdin/Mobile/aladdin-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"65de-coLdQ4cwyxFVYlcI8UF/mG0eRMc\"",
    "mtime": "2023-03-09T16:04:34.720Z",
    "size": 26078,
    "path": "../../.output/public/img/aladdin/Mobile/aladdin-page-img-09.webp"
  },
  "/img/aladdin/Mobile/aladdin-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"244e-DMxqlrjtdEiQ29H8oCOPOBlsrNA\"",
    "mtime": "2023-03-09T16:04:34.719Z",
    "size": 9294,
    "path": "../../.output/public/img/aladdin/Mobile/aladdin-page-img-10.webp"
  },
  "/img/aladdin/Mobile/aladdin-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"15044-4U2DDaEf2x9AXZyGycvDDhFls8M\"",
    "mtime": "2023-03-09T16:04:34.719Z",
    "size": 86084,
    "path": "../../.output/public/img/aladdin/Mobile/aladdin-page-intro.webp"
  },
  "/img/aladdin/Mobile/aladdin-page.webp": {
    "type": "image/webp",
    "etag": "\"613c-+ke+1ivWWQCvkH3jX3kZBQQsBPo\"",
    "mtime": "2023-03-09T16:04:34.718Z",
    "size": 24892,
    "path": "../../.output/public/img/aladdin/Mobile/aladdin-page.webp"
  },
  "/img/aladdin/PC/aladdin-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"5fc-G8//hXLPuPeR+DEYz0GCjZwCXf0\"",
    "mtime": "2023-03-09T16:04:34.718Z",
    "size": 1532,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-icon.svg"
  },
  "/img/aladdin/PC/aladdin-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"1ad8c-V70v89wjOkGrHJYZNhwqjXJfbOg\"",
    "mtime": "2023-03-09T16:04:34.717Z",
    "size": 109964,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-img-01.webp"
  },
  "/img/aladdin/PC/aladdin-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"601e-zZAkDFAXxoyf9mD2NblWkBZ6Xwg\"",
    "mtime": "2023-03-09T16:04:34.716Z",
    "size": 24606,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-img-02.webp"
  },
  "/img/aladdin/PC/aladdin-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"552a-nZHd0POHWz9HRrCLJsxj5vxouOE\"",
    "mtime": "2023-03-09T16:04:34.715Z",
    "size": 21802,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-img-03.webp"
  },
  "/img/aladdin/PC/aladdin-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"a668-kWDfJ8ARVaWcR0uRbryp2tDy7+g\"",
    "mtime": "2023-03-09T16:04:34.714Z",
    "size": 42600,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-img-04.webp"
  },
  "/img/aladdin/PC/aladdin-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"6e98-DBJPplLivfNRbKHsqVnOiY46/tU\"",
    "mtime": "2023-03-09T16:04:34.714Z",
    "size": 28312,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-img-05.webp"
  },
  "/img/aladdin/PC/aladdin-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"1f76-WMtc0zcW8q32LYoBgMhlfQUOj6E\"",
    "mtime": "2023-03-09T16:04:34.713Z",
    "size": 8054,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-img-06.webp"
  },
  "/img/aladdin/PC/aladdin-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"30f0-z8VddEUNaip14u84nZt/RKfWx4s\"",
    "mtime": "2023-03-09T16:04:34.713Z",
    "size": 12528,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-img-07.webp"
  },
  "/img/aladdin/PC/aladdin-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"2a5a-LM6lRBIggqaJu9nc9PhouokYfVw\"",
    "mtime": "2023-03-09T16:04:34.712Z",
    "size": 10842,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-img-08.webp"
  },
  "/img/aladdin/PC/aladdin-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"93a0-qiLWgNI+UI6ExUC7mko5gAdEkBE\"",
    "mtime": "2023-03-09T16:04:34.712Z",
    "size": 37792,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-img-09.webp"
  },
  "/img/aladdin/PC/aladdin-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"6992-tjLjuyA9DN0CRDn4Mm64ZH+nzCA\"",
    "mtime": "2023-03-09T16:04:34.712Z",
    "size": 27026,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-img-10.webp"
  },
  "/img/aladdin/PC/aladdin-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"2fc24-NVTKQUl/2VgafRppDcMtyxaGUEI\"",
    "mtime": "2023-03-09T16:04:34.711Z",
    "size": 195620,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-intro.webp"
  },
  "/img/aladdin/PC/aladdin-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"3184-/P/hP/p3WgiMkiHRd4BeE2/72GU\"",
    "mtime": "2023-03-09T16:04:34.710Z",
    "size": 12676,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page-logo.svg"
  },
  "/img/aladdin/PC/aladdin-page.webp": {
    "type": "image/webp",
    "etag": "\"c266-gQuzO73o4U6cgJXRMjgEqsrSvtg\"",
    "mtime": "2023-03-09T16:04:34.710Z",
    "size": 49766,
    "path": "../../.output/public/img/aladdin/PC/aladdin-page.webp"
  },
  "/img/automoika1/JPG/automoika1-page-intro.png": {
    "type": "image/png",
    "etag": "\"13aff-JMvYZblmLK3JLIHIwGfRKRu0D3I\"",
    "mtime": "2023-03-09T16:04:34.709Z",
    "size": 80639,
    "path": "../../.output/public/img/automoika1/JPG/automoika1-page-intro.png"
  },
  "/img/automoika1/JPG/automoika1-page.png": {
    "type": "image/png",
    "etag": "\"13aff-JMvYZblmLK3JLIHIwGfRKRu0D3I\"",
    "mtime": "2023-03-09T16:04:34.709Z",
    "size": 80639,
    "path": "../../.output/public/img/automoika1/JPG/automoika1-page.png"
  },
  "/img/automoika1/Mobile/automoika1-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"14488-5X14jaTTXR9goNGY+8ZpAlZxPZ8\"",
    "mtime": "2023-03-09T16:04:34.708Z",
    "size": 83080,
    "path": "../../.output/public/img/automoika1/Mobile/automoika1-page-intro.webp"
  },
  "/img/automoika1/Mobile/automoika1-page.webp": {
    "type": "image/webp",
    "etag": "\"5f2c-NEd6cpF9nUvnHr5I6ChxMejjqks\"",
    "mtime": "2023-03-09T16:04:34.707Z",
    "size": 24364,
    "path": "../../.output/public/img/automoika1/Mobile/automoika1-page.webp"
  },
  "/img/automoika1/PC/automoika1-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"2c802-b3axfYmpBgCkmOK9xXxDwc7eHTE\"",
    "mtime": "2023-03-09T16:04:34.706Z",
    "size": 182274,
    "path": "../../.output/public/img/automoika1/PC/automoika1-page-intro.webp"
  },
  "/img/automoika1/PC/automoika1-page.webp": {
    "type": "image/webp",
    "etag": "\"c5c2-THHPW4g/bygfem922EjTMULQE7s\"",
    "mtime": "2023-03-09T16:04:34.705Z",
    "size": 50626,
    "path": "../../.output/public/img/automoika1/PC/automoika1-page.webp"
  },
  "/img/3Dbani/JPG/3Dbani-page-intro.png": {
    "type": "image/png",
    "etag": "\"387e3-k/lSryqSb9P8Gw6Wm/ogeEn05aw\"",
    "mtime": "2023-03-09T16:04:34.768Z",
    "size": 231395,
    "path": "../../.output/public/img/3Dbani/JPG/3Dbani-page-intro.png"
  },
  "/img/3Dbani/JPG/3Dbani-page.png": {
    "type": "image/png",
    "etag": "\"387e3-k/lSryqSb9P8Gw6Wm/ogeEn05aw\"",
    "mtime": "2023-03-09T16:04:34.767Z",
    "size": 231395,
    "path": "../../.output/public/img/3Dbani/JPG/3Dbani-page.png"
  },
  "/img/3Dbani/Mobile/3Dbani-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"3b852-hl0g+kzVUQFx1leWL7iq1Taa+8I\"",
    "mtime": "2023-03-09T16:04:34.765Z",
    "size": 243794,
    "path": "../../.output/public/img/3Dbani/Mobile/3Dbani-page-intro.webp"
  },
  "/img/3Dbani/Mobile/3Dbani-page.webp": {
    "type": "image/webp",
    "etag": "\"6bce-MVa9082lZnFZAsgdBAyMn+Mri+4\"",
    "mtime": "2023-03-09T16:04:34.760Z",
    "size": 27598,
    "path": "../../.output/public/img/3Dbani/Mobile/3Dbani-page.webp"
  },
  "/img/3Dbani/PC/3Dbani-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"b2f76-moH2wXxGfsG7wqwQWV0UiEgj5c8\"",
    "mtime": "2023-03-09T16:04:34.758Z",
    "size": 733046,
    "path": "../../.output/public/img/3Dbani/PC/3Dbani-page-intro.webp"
  },
  "/img/3Dbani/PC/3Dbani-page.webp": {
    "type": "image/webp",
    "etag": "\"1072e-ugio5bgBt4C6WxTk2ZkZ24eKBXc\"",
    "mtime": "2023-03-09T16:04:34.756Z",
    "size": 67374,
    "path": "../../.output/public/img/3Dbani/PC/3Dbani-page.webp"
  },
  "/img/energotek/JPG/energotek-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"2715a-rfi0cWtlF4uhJMbyVInwYEvi/FE\"",
    "mtime": "2023-03-09T16:04:34.703Z",
    "size": 160090,
    "path": "../../.output/public/img/energotek/JPG/energotek-page-img-01.jpg"
  },
  "/img/energotek/JPG/energotek-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a7d8-3E2Xq/0z9SG1W1CuEN/U/IjKIfE\"",
    "mtime": "2023-03-09T16:04:34.702Z",
    "size": 174040,
    "path": "../../.output/public/img/energotek/JPG/energotek-page-img-02.jpg"
  },
  "/img/energotek/JPG/energotek-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"11090-3cuZJHJV0DJLbRISE726xykUD5k\"",
    "mtime": "2023-03-09T16:04:34.701Z",
    "size": 69776,
    "path": "../../.output/public/img/energotek/JPG/energotek-page-img-03.jpg"
  },
  "/img/energotek/JPG/energotek-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"3941-adWwCGuuGt3+E2BpJujQwA4MNFY\"",
    "mtime": "2023-03-09T16:04:34.697Z",
    "size": 14657,
    "path": "../../.output/public/img/energotek/JPG/energotek-page-img-05.jpg"
  },
  "/img/energotek/JPG/energotek-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"6199-tRpnt2BSZ+tu6pYWaEjgiBZVvYk\"",
    "mtime": "2023-03-09T16:04:34.697Z",
    "size": 24985,
    "path": "../../.output/public/img/energotek/JPG/energotek-page-img-06.jpg"
  },
  "/img/energotek/JPG/energotek-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"8806-ZQDtsoL1DKs6FVE6/UBUNsZJFMY\"",
    "mtime": "2023-03-09T16:04:34.697Z",
    "size": 34822,
    "path": "../../.output/public/img/energotek/JPG/energotek-page-img-07.jpg"
  },
  "/img/energotek/JPG/energotek-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"3e24-ido5GbsBxiaMPcF8+w67D9Muhuc\"",
    "mtime": "2023-03-09T16:04:34.696Z",
    "size": 15908,
    "path": "../../.output/public/img/energotek/JPG/energotek-page-img-08.jpg"
  },
  "/img/energotek/JPG/energotek-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"add0-RUELNNwNz3AV+cZitfHvea3i6mA\"",
    "mtime": "2023-03-09T16:04:34.696Z",
    "size": 44496,
    "path": "../../.output/public/img/energotek/JPG/energotek-page-img-09.jpg"
  },
  "/img/energotek/JPG/energotek-page-img-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"3560-WvvTuT0pyADEJjVdIHQkbKlOL4U\"",
    "mtime": "2023-03-09T16:04:34.696Z",
    "size": 13664,
    "path": "../../.output/public/img/energotek/JPG/energotek-page-img-10.jpg"
  },
  "/img/energotek/JPG/energotek-page-img-11.jpg": {
    "type": "image/jpeg",
    "etag": "\"2bb56-m5/GAr8cBRgiICJxGsDAmYlW8eg\"",
    "mtime": "2023-03-09T16:04:34.695Z",
    "size": 179030,
    "path": "../../.output/public/img/energotek/JPG/energotek-page-img-11.jpg"
  },
  "/img/energotek/JPG/energotek-page-intro.png": {
    "type": "image/png",
    "etag": "\"1c126-tDuZHbiV9i7gbHYASDdiUtLKDbE\"",
    "mtime": "2023-03-09T16:04:34.695Z",
    "size": 114982,
    "path": "../../.output/public/img/energotek/JPG/energotek-page-intro.png"
  },
  "/img/energotek/JPG/energotek-page.png": {
    "type": "image/png",
    "etag": "\"1c109-Glm9iIt0Yl29bQdElzy0cs/RCjc\"",
    "mtime": "2023-03-09T16:04:34.694Z",
    "size": 114953,
    "path": "../../.output/public/img/energotek/JPG/energotek-page.png"
  },
  "/img/energotek/Mobile/energotek-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"7d8a-smXQOB41THArdPcguCQqerZOwA8\"",
    "mtime": "2023-03-09T16:04:34.693Z",
    "size": 32138,
    "path": "../../.output/public/img/energotek/Mobile/energotek-page-img-01.webp"
  },
  "/img/energotek/Mobile/energotek-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"a054-Yoi9jDrwaB8X0QjWQSKOI5mDuc4\"",
    "mtime": "2023-03-09T16:04:34.692Z",
    "size": 41044,
    "path": "../../.output/public/img/energotek/Mobile/energotek-page-img-02.webp"
  },
  "/img/energotek/Mobile/energotek-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"20ce-7TFZfL/VE7l1vz7lNoUlyw9pqb8\"",
    "mtime": "2023-03-09T16:04:34.692Z",
    "size": 8398,
    "path": "../../.output/public/img/energotek/Mobile/energotek-page-img-03.webp"
  },
  "/img/energotek/Mobile/energotek-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"2826-w0wOGddF3JNpqLKnvENqqYKD1JY\"",
    "mtime": "2023-03-09T16:04:34.692Z",
    "size": 10278,
    "path": "../../.output/public/img/energotek/Mobile/energotek-page-img-05.webp"
  },
  "/img/energotek/Mobile/energotek-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"3c1a-loAwdetx/YppG+C/c6sfDRevYH8\"",
    "mtime": "2023-03-09T16:04:34.691Z",
    "size": 15386,
    "path": "../../.output/public/img/energotek/Mobile/energotek-page-img-06.webp"
  },
  "/img/energotek/Mobile/energotek-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"5c1a-9w04BRY6bwshqKpYOJK8FHFhHOo\"",
    "mtime": "2023-03-09T16:04:34.691Z",
    "size": 23578,
    "path": "../../.output/public/img/energotek/Mobile/energotek-page-img-07.webp"
  },
  "/img/energotek/Mobile/energotek-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"1f98-lxDa7w1pUcuviN1r6n0Jhexlg2I\"",
    "mtime": "2023-03-09T16:04:34.691Z",
    "size": 8088,
    "path": "../../.output/public/img/energotek/Mobile/energotek-page-img-08.webp"
  },
  "/img/energotek/Mobile/energotek-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"4ad0-k331bDS+fo6VNpXGDT4bCDbXIxU\"",
    "mtime": "2023-03-09T16:04:34.691Z",
    "size": 19152,
    "path": "../../.output/public/img/energotek/Mobile/energotek-page-img-09.webp"
  },
  "/img/energotek/Mobile/energotek-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"168e-FV2Q07TZ7Nz8vQ0tzlG3VO6ysaM\"",
    "mtime": "2023-03-09T16:04:34.691Z",
    "size": 5774,
    "path": "../../.output/public/img/energotek/Mobile/energotek-page-img-10.webp"
  },
  "/img/energotek/Mobile/energotek-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"10446-rI+wKE/XqAfUH9x8WMS0iRVX3cY\"",
    "mtime": "2023-03-09T16:04:34.690Z",
    "size": 66630,
    "path": "../../.output/public/img/energotek/Mobile/energotek-page-img-11.webp"
  },
  "/img/energotek/Mobile/energotek-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"1d14c-Zw7FyIc9powWaOyRVPYuv+IZ2Qw\"",
    "mtime": "2023-03-09T16:04:34.690Z",
    "size": 119116,
    "path": "../../.output/public/img/energotek/Mobile/energotek-page-intro.webp"
  },
  "/img/energotek/Mobile/energotek-page.webp": {
    "type": "image/webp",
    "etag": "\"771e-8pKzjNrxJWmjOpDLPxToS7svN4k\"",
    "mtime": "2023-03-09T16:04:34.689Z",
    "size": 30494,
    "path": "../../.output/public/img/energotek/Mobile/energotek-page.webp"
  },
  "/img/energotek/PC/energotek-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"9cb-N8KNHIe1LMrzV/P2bCKp7c5z2ag\"",
    "mtime": "2023-03-09T16:04:34.688Z",
    "size": 2507,
    "path": "../../.output/public/img/energotek/PC/energotek-page-icon.svg"
  },
  "/img/energotek/PC/energotek-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"1dc90-IwJxbAM9A6rXFTi2dTVlRodgPdw\"",
    "mtime": "2023-03-09T16:04:34.688Z",
    "size": 122000,
    "path": "../../.output/public/img/energotek/PC/energotek-page-img-01.webp"
  },
  "/img/energotek/PC/energotek-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"24254-BsBR7DPPy3k0GhWD74VP4m0bymQ\"",
    "mtime": "2023-03-09T16:04:34.688Z",
    "size": 148052,
    "path": "../../.output/public/img/energotek/PC/energotek-page-img-02.webp"
  },
  "/img/energotek/PC/energotek-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"b182-y3s2r60o+qB187nF5sIN5XWuBD4\"",
    "mtime": "2023-03-09T16:04:34.687Z",
    "size": 45442,
    "path": "../../.output/public/img/energotek/PC/energotek-page-img-03.webp"
  },
  "/img/energotek/PC/energotek-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"2826-w0wOGddF3JNpqLKnvENqqYKD1JY\"",
    "mtime": "2023-03-09T16:04:34.687Z",
    "size": 10278,
    "path": "../../.output/public/img/energotek/PC/energotek-page-img-05.webp"
  },
  "/img/energotek/PC/energotek-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"3c1a-loAwdetx/YppG+C/c6sfDRevYH8\"",
    "mtime": "2023-03-09T16:04:34.686Z",
    "size": 15386,
    "path": "../../.output/public/img/energotek/PC/energotek-page-img-06.webp"
  },
  "/img/energotek/PC/energotek-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"5c1a-9w04BRY6bwshqKpYOJK8FHFhHOo\"",
    "mtime": "2023-03-09T16:04:34.686Z",
    "size": 23578,
    "path": "../../.output/public/img/energotek/PC/energotek-page-img-07.webp"
  },
  "/img/energotek/PC/energotek-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"379c-Pvqoi1cupcxioArpvDWg6xL0+vU\"",
    "mtime": "2023-03-09T16:04:34.686Z",
    "size": 14236,
    "path": "../../.output/public/img/energotek/PC/energotek-page-img-08.webp"
  },
  "/img/energotek/PC/energotek-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"96c4-BPvTvpdmCZTn1wPU2LatUpgU6Qw\"",
    "mtime": "2023-03-09T16:04:34.686Z",
    "size": 38596,
    "path": "../../.output/public/img/energotek/PC/energotek-page-img-09.webp"
  },
  "/img/energotek/PC/energotek-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"267a-UVGSwTnfIsngFNiaTjb3M7D+4H4\"",
    "mtime": "2023-03-09T16:04:34.685Z",
    "size": 9850,
    "path": "../../.output/public/img/energotek/PC/energotek-page-img-10.webp"
  },
  "/img/energotek/PC/energotek-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"1c3ce-jwm9irKSDLgQjCYNCpR1KCl07rs\"",
    "mtime": "2023-03-09T16:04:34.685Z",
    "size": 115662,
    "path": "../../.output/public/img/energotek/PC/energotek-page-img-11.webp"
  },
  "/img/energotek/PC/energotek-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"48d6c-8lwle8tKws10yRZfImEpwxH02Vw\"",
    "mtime": "2023-03-09T16:04:34.684Z",
    "size": 298348,
    "path": "../../.output/public/img/energotek/PC/energotek-page-intro.webp"
  },
  "/img/energotek/PC/energotek-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"2123-MJRhC2NvpBNg4gRrhHE8SxYJWNs\"",
    "mtime": "2023-03-09T16:04:34.682Z",
    "size": 8483,
    "path": "../../.output/public/img/energotek/PC/energotek-page-logo.svg"
  },
  "/img/energotek/PC/energotek-page.webp": {
    "type": "image/webp",
    "etag": "\"f2e0-/+JZNAbukX0VLWXXDRJeNqxOxks\"",
    "mtime": "2023-03-09T16:04:34.682Z",
    "size": 62176,
    "path": "../../.output/public/img/energotek/PC/energotek-page.webp"
  },
  "/img/energotekAR/JPG/energotekAR-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"8778-yLSQqwic+DdOb8W57FYnXFhB3cU\"",
    "mtime": "2023-03-09T16:04:34.681Z",
    "size": 34680,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page-img-01.jpg"
  },
  "/img/energotekAR/JPG/energotekAR-page-img-02.png": {
    "type": "image/png",
    "etag": "\"2599a-odUeTiRg8ctlfg1YkTA+bUczlSs\"",
    "mtime": "2023-03-09T16:04:34.681Z",
    "size": 154010,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page-img-02.png"
  },
  "/img/energotekAR/JPG/energotekAR-page-img-03.png": {
    "type": "image/png",
    "etag": "\"b89c-tes5ahoGDvjqe9sUrJ/rl8/otHU\"",
    "mtime": "2023-03-09T16:04:34.680Z",
    "size": 47260,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page-img-03.png"
  },
  "/img/energotekAR/JPG/energotekAR-page-img-04.png": {
    "type": "image/png",
    "etag": "\"b3af-pTWk8talH6ieXYH9uUQ0pcq5IBI\"",
    "mtime": "2023-03-09T16:04:34.680Z",
    "size": 45999,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page-img-04.png"
  },
  "/img/energotekAR/JPG/energotekAR-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"11594-qNSNWmLX/ZyAMLtRyMJKdC+/oHg\"",
    "mtime": "2023-03-09T16:04:34.679Z",
    "size": 71060,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page-img-05.jpg"
  },
  "/img/energotekAR/JPG/energotekAR-page-img-06.png": {
    "type": "image/png",
    "etag": "\"abd-1FJhrOrYes2mXd7Qf3hvWCA3N/c\"",
    "mtime": "2023-03-09T16:04:34.679Z",
    "size": 2749,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page-img-06.png"
  },
  "/img/energotekAR/JPG/energotekAR-page-img-07.png": {
    "type": "image/png",
    "etag": "\"6d5-MSG5I0HCSV+8iFHnchi9WeON118\"",
    "mtime": "2023-03-09T16:04:34.678Z",
    "size": 1749,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page-img-07.png"
  },
  "/img/energotekAR/JPG/energotekAR-page-img-08.png": {
    "type": "image/png",
    "etag": "\"848-Z/evyy8kEuPhUPYrZPaUeUKe5IQ\"",
    "mtime": "2023-03-09T16:04:34.678Z",
    "size": 2120,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page-img-08.png"
  },
  "/img/energotekAR/JPG/energotekAR-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"217a0-R4haJOaySnIUOAm5m7deA3H9nos\"",
    "mtime": "2023-03-09T16:04:34.678Z",
    "size": 137120,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page-img-09.jpg"
  },
  "/img/energotekAR/JPG/energotekAR-page-img-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"122bc-5+tsSMoyZTAd98ZDSJv9Cw+MQMk\"",
    "mtime": "2023-03-09T16:04:34.677Z",
    "size": 74428,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page-img-10.jpg"
  },
  "/img/energotekAR/JPG/energotekAR-page-img-11.jpg": {
    "type": "image/jpeg",
    "etag": "\"b2a8-dkTwYKmEzfS2eZDswevaWFzAZaU\"",
    "mtime": "2023-03-09T16:04:34.677Z",
    "size": 45736,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page-img-11.jpg"
  },
  "/img/energotekAR/JPG/energotekAR-page-intro.png": {
    "type": "image/png",
    "etag": "\"1d01e-mm1XW0dkEKw/OrvV4uELdy8L7l0\"",
    "mtime": "2023-03-09T16:04:34.676Z",
    "size": 118814,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page-intro.png"
  },
  "/img/energotekAR/JPG/energotekAR-page.png": {
    "type": "image/png",
    "etag": "\"1d01e-mm1XW0dkEKw/OrvV4uELdy8L7l0\"",
    "mtime": "2023-03-09T16:04:34.676Z",
    "size": 118814,
    "path": "../../.output/public/img/energotekAR/JPG/energotekAR-page.png"
  },
  "/img/energotekAR/PC/energotekAR-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"9cb-N8KNHIe1LMrzV/P2bCKp7c5z2ag\"",
    "mtime": "2023-03-09T16:04:34.667Z",
    "size": 2507,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-icon.svg"
  },
  "/img/energotekAR/PC/energotekAR-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"2bc8-KvmE+oFMIebj2yJfdbmKx4K8SeE\"",
    "mtime": "2023-03-09T16:04:34.667Z",
    "size": 11208,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-img-01.webp"
  },
  "/img/energotekAR/PC/energotekAR-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"1248e-lkppTekTFqSZZjIUVPZXm12lj4Q\"",
    "mtime": "2023-03-09T16:04:34.667Z",
    "size": 74894,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-img-02.webp"
  },
  "/img/energotekAR/PC/energotekAR-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"4cf2-Eheg2tB6t/1cf4hpY5SO4DH9q5k\"",
    "mtime": "2023-03-09T16:04:34.666Z",
    "size": 19698,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-img-03.webp"
  },
  "/img/energotekAR/PC/energotekAR-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"4d92-ffRVNlHZM7QFX00Eh01w9seOgEw\"",
    "mtime": "2023-03-09T16:04:34.666Z",
    "size": 19858,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-img-04.webp"
  },
  "/img/energotekAR/PC/energotekAR-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"ade6-+MSSoAWOU+Kw4QYldVlb62slfJo\"",
    "mtime": "2023-03-09T16:04:34.666Z",
    "size": 44518,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-img-05.webp"
  },
  "/img/energotekAR/PC/energotekAR-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"86a-kzh1bFkE9epEICWikKkd6ZzKiHQ\"",
    "mtime": "2023-03-09T16:04:34.665Z",
    "size": 2154,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-img-06.webp"
  },
  "/img/energotekAR/PC/energotekAR-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"a32-cuf/f6jTGn2KoeL53DmRMSteTLs\"",
    "mtime": "2023-03-09T16:04:34.665Z",
    "size": 2610,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-img-07.webp"
  },
  "/img/energotekAR/PC/energotekAR-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"988-6mHmRDY1f8FTRnyjRxxazidcXho\"",
    "mtime": "2023-03-09T16:04:34.665Z",
    "size": 2440,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-img-08.webp"
  },
  "/img/energotekAR/PC/energotekAR-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"15f90-IY9hHRHrkvlmD9tsSfL8qs+gbmQ\"",
    "mtime": "2023-03-09T16:04:34.664Z",
    "size": 90000,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-img-09.webp"
  },
  "/img/energotekAR/PC/energotekAR-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"752c-JPJjlNbiu5bpCkGPAs9/GSJGlLw\"",
    "mtime": "2023-03-09T16:04:34.664Z",
    "size": 29996,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-img-10.webp"
  },
  "/img/energotekAR/PC/energotekAR-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"6b18-Q8imiMEIBwcKAxKTjFvy21TGNOk\"",
    "mtime": "2023-03-09T16:04:34.663Z",
    "size": 27416,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-img-11.webp"
  },
  "/img/energotekAR/PC/energotekAR-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"50f82-XKuiCGIjTsJDwOgMOlGMobgScgA\"",
    "mtime": "2023-03-09T16:04:34.661Z",
    "size": 331650,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-intro.webp"
  },
  "/img/energotekAR/PC/energotekAR-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"2123-MJRhC2NvpBNg4gRrhHE8SxYJWNs\"",
    "mtime": "2023-03-09T16:04:34.660Z",
    "size": 8483,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page-logo.svg"
  },
  "/img/energotekAR/PC/energotekAR-page.webp": {
    "type": "image/webp",
    "etag": "\"1291c-zTvIbv4rPNP+8e0HJfYpW1iEm9E\"",
    "mtime": "2023-03-09T16:04:34.660Z",
    "size": 76060,
    "path": "../../.output/public/img/energotekAR/PC/energotekAR-page.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"1934-oRwWQ+FFBMAuzGQ6Q+6ZBscnF94\"",
    "mtime": "2023-03-09T16:04:34.674Z",
    "size": 6452,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page-img-01.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"7146-5ZRRavU9scYmitVuJ4t4//JWXS4\"",
    "mtime": "2023-03-09T16:04:34.674Z",
    "size": 28998,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page-img-02.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"318e-y7mbmlXhMHzqjKgVhWWlzftYvuA\"",
    "mtime": "2023-03-09T16:04:34.674Z",
    "size": 12686,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page-img-03.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"349a-/3j7+Nbs8gTGpX5c5hk45knErvM\"",
    "mtime": "2023-03-09T16:04:34.674Z",
    "size": 13466,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page-img-04.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"47fc-LQCwU3wS1LW1ieObitMaewKTMuQ\"",
    "mtime": "2023-03-09T16:04:34.673Z",
    "size": 18428,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page-img-05.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"2c2e-UuN5C1TP+TB8ZGMufAVEFAda9x4\"",
    "mtime": "2023-03-09T16:04:34.673Z",
    "size": 11310,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page-img-06.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"1a44-LXX22HVUe70rnYEg0VBZdV7N/go\"",
    "mtime": "2023-03-09T16:04:34.673Z",
    "size": 6724,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page-img-07.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"1b3a-pqoutsnsFyaE7rRWZisebDKaOQU\"",
    "mtime": "2023-03-09T16:04:34.673Z",
    "size": 6970,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page-img-08.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"6e6c-crQ6q4CqOcMBOR4jhaZecQq6394\"",
    "mtime": "2023-03-09T16:04:34.672Z",
    "size": 28268,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page-img-09.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"52f0-KYfsE+96TK1JebBj1JepT38jEeM\"",
    "mtime": "2023-03-09T16:04:34.672Z",
    "size": 21232,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page-img-10.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"4932-5vYwcQyrLIzXlP9+6FGxlVSS/Wk\"",
    "mtime": "2023-03-09T16:04:34.672Z",
    "size": 18738,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page-img-11.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"21f34-skzFBTl7zn6XHiuDfo8C07GsmK0\"",
    "mtime": "2023-03-09T16:04:34.671Z",
    "size": 139060,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page-intro.webp"
  },
  "/img/energotekAR/Mobile/energotekAR-page.webp": {
    "type": "image/webp",
    "etag": "\"89d0-+4SDgkJhPxdHZHUxl/H3ifpMqJk\"",
    "mtime": "2023-03-09T16:04:34.668Z",
    "size": 35280,
    "path": "../../.output/public/img/energotekAR/Mobile/energotekAR-page.webp"
  },
  "/img/flipknife/JPG/flipknife-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"d9fa-ulSYMTtOf8LnGHSHBBwZOCiMGtM\"",
    "mtime": "2023-03-09T16:04:34.658Z",
    "size": 55802,
    "path": "../../.output/public/img/flipknife/JPG/flipknife-page-img-01.jpg"
  },
  "/img/flipknife/JPG/flipknife-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"1044d-psES7cpOkmRqmP8PHUzpAAU3J4M\"",
    "mtime": "2023-03-09T16:04:34.658Z",
    "size": 66637,
    "path": "../../.output/public/img/flipknife/JPG/flipknife-page-img-02.jpg"
  },
  "/img/flipknife/JPG/flipknife-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"515d-Aps2yvBEWRmdGitDsu4T5XN7BZc\"",
    "mtime": "2023-03-09T16:04:34.657Z",
    "size": 20829,
    "path": "../../.output/public/img/flipknife/JPG/flipknife-page-img-03.jpg"
  },
  "/img/flipknife/JPG/flipknife-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"962f-vyEfnNEBuyecOYCqWZ4dwlIBMQ0\"",
    "mtime": "2023-03-09T16:04:34.657Z",
    "size": 38447,
    "path": "../../.output/public/img/flipknife/JPG/flipknife-page-img-04.jpg"
  },
  "/img/flipknife/JPG/flipknife-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"6049-/GgpxOKX4jaUSTjhTplyBFJUK2w\"",
    "mtime": "2023-03-09T16:04:34.657Z",
    "size": 24649,
    "path": "../../.output/public/img/flipknife/JPG/flipknife-page-img-05.jpg"
  },
  "/img/flipknife/JPG/flipknife-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"bda3-ZOV8n/ocAbBCpUr93ActkH4t0S8\"",
    "mtime": "2023-03-09T16:04:34.656Z",
    "size": 48547,
    "path": "../../.output/public/img/flipknife/JPG/flipknife-page-img-06.jpg"
  },
  "/img/flipknife/JPG/flipknife-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"9eb6-f5gi90kXD3JbT78xUy43QbbWzoc\"",
    "mtime": "2023-03-09T16:04:34.653Z",
    "size": 40630,
    "path": "../../.output/public/img/flipknife/JPG/flipknife-page-img-07.jpg"
  },
  "/img/flipknife/JPG/flipknife-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"9002-yozEbYf9Brf6vNb/QgKT8+uZreo\"",
    "mtime": "2023-03-09T16:04:34.653Z",
    "size": 36866,
    "path": "../../.output/public/img/flipknife/JPG/flipknife-page-img-08.jpg"
  },
  "/img/flipknife/JPG/flipknife-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"d0d2-rcHpmPtqLh2ZOPCfAzgYHXv+PcY\"",
    "mtime": "2023-03-09T16:04:34.652Z",
    "size": 53458,
    "path": "../../.output/public/img/flipknife/JPG/flipknife-page-img-09.jpg"
  },
  "/img/flipknife/JPG/flipknife-page-intro.png": {
    "type": "image/png",
    "etag": "\"120cc-l1+dCCQufYdIT9BkIkLeXRf9zkQ\"",
    "mtime": "2023-03-09T16:04:34.652Z",
    "size": 73932,
    "path": "../../.output/public/img/flipknife/JPG/flipknife-page-intro.png"
  },
  "/img/flipknife/JPG/flipknife-page.png": {
    "type": "image/png",
    "etag": "\"120cc-l1+dCCQufYdIT9BkIkLeXRf9zkQ\"",
    "mtime": "2023-03-09T16:04:34.651Z",
    "size": 73932,
    "path": "../../.output/public/img/flipknife/JPG/flipknife-page.png"
  },
  "/img/flipknife/Mobile/flipknife-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"4488-bpY9ZJO4ymyWriIHvyNyZuoAcQk\"",
    "mtime": "2023-03-09T16:04:34.650Z",
    "size": 17544,
    "path": "../../.output/public/img/flipknife/Mobile/flipknife-page-img-01.webp"
  },
  "/img/flipknife/Mobile/flipknife-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"fed6-5X4varkXiBRSRDr2PSULoX6iRic\"",
    "mtime": "2023-03-09T16:04:34.650Z",
    "size": 65238,
    "path": "../../.output/public/img/flipknife/Mobile/flipknife-page-img-02.webp"
  },
  "/img/flipknife/Mobile/flipknife-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"5d30-ng3fTBzEzMAblFykU7PlM07wvNs\"",
    "mtime": "2023-03-09T16:04:34.649Z",
    "size": 23856,
    "path": "../../.output/public/img/flipknife/Mobile/flipknife-page-img-03.webp"
  },
  "/img/flipknife/Mobile/flipknife-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"82c2-u4HqPnrJyfnWG5Bb+iDMBFkHedk\"",
    "mtime": "2023-03-09T16:04:34.649Z",
    "size": 33474,
    "path": "../../.output/public/img/flipknife/Mobile/flipknife-page-img-04.webp"
  },
  "/img/flipknife/Mobile/flipknife-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"703e-6h7qJIJsePx4i5wNNcbnXFZ40HM\"",
    "mtime": "2023-03-09T16:04:34.649Z",
    "size": 28734,
    "path": "../../.output/public/img/flipknife/Mobile/flipknife-page-img-05.webp"
  },
  "/img/flipknife/Mobile/flipknife-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"5c4e-5bmQG1/a2yP1eIKaKyOn5662jo4\"",
    "mtime": "2023-03-09T16:04:34.648Z",
    "size": 23630,
    "path": "../../.output/public/img/flipknife/Mobile/flipknife-page-img-06.webp"
  },
  "/img/flipknife/Mobile/flipknife-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"4c36-m2lSMQCaJfSi9a4ARRvVBUGJpg4\"",
    "mtime": "2023-03-09T16:04:34.648Z",
    "size": 19510,
    "path": "../../.output/public/img/flipknife/Mobile/flipknife-page-img-07.webp"
  },
  "/img/flipknife/Mobile/flipknife-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"41e8-oaDvPllrmReQYDjFQP93QqXH0FU\"",
    "mtime": "2023-03-09T16:04:34.648Z",
    "size": 16872,
    "path": "../../.output/public/img/flipknife/Mobile/flipknife-page-img-08.webp"
  },
  "/img/flipknife/Mobile/flipknife-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"6aaa-y+eVAu/f+tvCPB0yXsqGweOWV8g\"",
    "mtime": "2023-03-09T16:04:34.647Z",
    "size": 27306,
    "path": "../../.output/public/img/flipknife/Mobile/flipknife-page-img-09.webp"
  },
  "/img/flipknife/Mobile/flipknife-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"183c4-b5GgrCEy4AgsJqh9qg0wDE26j40\"",
    "mtime": "2023-03-09T16:04:34.647Z",
    "size": 99268,
    "path": "../../.output/public/img/flipknife/Mobile/flipknife-page-intro.webp"
  },
  "/img/flipknife/Mobile/flipknife-page.webp": {
    "type": "image/webp",
    "etag": "\"3a50-OnfSjX3vDi4VyABtLFkXZvtSf/I\"",
    "mtime": "2023-03-09T16:04:34.647Z",
    "size": 14928,
    "path": "../../.output/public/img/flipknife/Mobile/flipknife-page.webp"
  },
  "/img/flipknife/PC/flipknife-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"1f83-ON8qK08FD3DItgG+qWl9WVAnwrg\"",
    "mtime": "2023-03-09T16:04:34.646Z",
    "size": 8067,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page-icon.svg"
  },
  "/img/flipknife/PC/flipknife-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"8dc0-VrmEkWjuyklF0ZAntf/x1QKMZ2U\"",
    "mtime": "2023-03-09T16:04:34.646Z",
    "size": 36288,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page-img-01.webp"
  },
  "/img/flipknife/PC/flipknife-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"8216-iC7mPh6wVFTVSiSSmrevm+Zt3i8\"",
    "mtime": "2023-03-09T16:04:34.645Z",
    "size": 33302,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page-img-02.webp"
  },
  "/img/flipknife/PC/flipknife-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"3064-8A19/D+3gMksg3NvK6p2pkfsfXc\"",
    "mtime": "2023-03-09T16:04:34.645Z",
    "size": 12388,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page-img-03.webp"
  },
  "/img/flipknife/PC/flipknife-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"4416-YqT9jyHCXxMNkk0ebmdHQ93QQ34\"",
    "mtime": "2023-03-09T16:04:34.645Z",
    "size": 17430,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page-img-04.webp"
  },
  "/img/flipknife/PC/flipknife-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"3a00-m//ksmLWuKyA6ikanvnqPM24mlg\"",
    "mtime": "2023-03-09T16:04:34.644Z",
    "size": 14848,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page-img-05.webp"
  },
  "/img/flipknife/PC/flipknife-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"8eea-8W2nEm78XedhrC95LT1frOVzYpg\"",
    "mtime": "2023-03-09T16:04:34.644Z",
    "size": 36586,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page-img-06.webp"
  },
  "/img/flipknife/PC/flipknife-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"74fa-7LeHCu+057uAAB7F9jihy1je4q4\"",
    "mtime": "2023-03-09T16:04:34.644Z",
    "size": 29946,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page-img-07.webp"
  },
  "/img/flipknife/PC/flipknife-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"679e-rrUtALc9apzBBQX+6i6nMHzROEI\"",
    "mtime": "2023-03-09T16:04:34.644Z",
    "size": 26526,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page-img-08.webp"
  },
  "/img/flipknife/PC/flipknife-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"a126-gPjq2emPo2Gl4qwO5D46O1wTZsQ\"",
    "mtime": "2023-03-09T16:04:34.643Z",
    "size": 41254,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page-img-09.webp"
  },
  "/img/flipknife/PC/flipknife-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"4bfb6-Qr1VGNQg5lNi2+LzTHlsbiY6CS0\"",
    "mtime": "2023-03-09T16:04:34.643Z",
    "size": 311222,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page-intro.webp"
  },
  "/img/flipknife/PC/flipknife-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ef8-o7OBY56XiA4lxuNdntpuTM+iek4\"",
    "mtime": "2023-03-09T16:04:34.641Z",
    "size": 7928,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page-logo.svg"
  },
  "/img/flipknife/PC/flipknife-page.webp": {
    "type": "image/webp",
    "etag": "\"888a-cJmo3elH+A0WcKeph1M/2rsfj3g\"",
    "mtime": "2023-03-09T16:04:34.641Z",
    "size": 34954,
    "path": "../../.output/public/img/flipknife/PC/flipknife-page.webp"
  },
  "/img/garillapoker/JPG/garillapoker-page-intro.png": {
    "type": "image/png",
    "etag": "\"1a386-XpaHV85aptCi2pEpEJVDF+XOObI\"",
    "mtime": "2023-03-09T16:04:34.640Z",
    "size": 107398,
    "path": "../../.output/public/img/garillapoker/JPG/garillapoker-page-intro.png"
  },
  "/img/garillapoker/JPG/garillapoker-page.png": {
    "type": "image/png",
    "etag": "\"1a386-XpaHV85aptCi2pEpEJVDF+XOObI\"",
    "mtime": "2023-03-09T16:04:34.640Z",
    "size": 107398,
    "path": "../../.output/public/img/garillapoker/JPG/garillapoker-page.png"
  },
  "/img/garillapoker/Mobile/garillapoker-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"26c2a-6B7jCY9+O7c4Cg9SsNuDLXTVae8\"",
    "mtime": "2023-03-09T16:04:34.639Z",
    "size": 158762,
    "path": "../../.output/public/img/garillapoker/Mobile/garillapoker-page-intro.webp"
  },
  "/img/garillapoker/Mobile/garillapoker-page.webp": {
    "type": "image/webp",
    "etag": "\"718c-Icyc+6quKZNHuX8XxHPBlMUOyz0\"",
    "mtime": "2023-03-09T16:04:34.638Z",
    "size": 29068,
    "path": "../../.output/public/img/garillapoker/Mobile/garillapoker-page.webp"
  },
  "/img/garillapoker/PC/garillapoker-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"72dcc-V1cUMoPxr/AbjF7aDFFcZjyGAOs\"",
    "mtime": "2023-03-09T16:04:34.637Z",
    "size": 470476,
    "path": "../../.output/public/img/garillapoker/PC/garillapoker-page-intro.webp"
  },
  "/img/garillapoker/PC/garillapoker-page.webp": {
    "type": "image/webp",
    "etag": "\"1028c-+sBSX4EJFfBSBn4jJblbywDAduo\"",
    "mtime": "2023-03-09T16:04:34.636Z",
    "size": 66188,
    "path": "../../.output/public/img/garillapoker/PC/garillapoker-page.webp"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"5846-0B3fuhl0yuZ+BB8udO94yeZ6Q0I\"",
    "mtime": "2023-03-09T16:04:34.635Z",
    "size": 22598,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-01.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"4510-xX4bF6071CKLvdKmImG1ISlhMVo\"",
    "mtime": "2023-03-09T16:04:34.634Z",
    "size": 17680,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-02.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"45e4-9hjN7i+O+efEE3QRWG1WrmAyBko\"",
    "mtime": "2023-03-09T16:04:34.634Z",
    "size": 17892,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-03.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"823e-JtFMhtzDIPA9HSTThUUPDRaGwaI\"",
    "mtime": "2023-03-09T16:04:34.633Z",
    "size": 33342,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-04.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"6ae2-yZZII5LAmX57BMmLNLtK4Adued8\"",
    "mtime": "2023-03-09T16:04:34.633Z",
    "size": 27362,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-05.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"65d1-XdNO+R5VwONP5eEQd3iTyhW5qLg\"",
    "mtime": "2023-03-09T16:04:34.633Z",
    "size": 26065,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-06.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"4bb3-jIaOqO9v1d3k4hR3Z1TWPu2fWZs\"",
    "mtime": "2023-03-09T16:04:34.632Z",
    "size": 19379,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-07.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"5992-03qTPBNmQcySpHr5JNaFCOACLI8\"",
    "mtime": "2023-03-09T16:04:34.632Z",
    "size": 22930,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-08.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"6039-K99olqQkljoxaRnKRTs7bLUKjhk\"",
    "mtime": "2023-03-09T16:04:34.632Z",
    "size": 24633,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-09.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"19862-9a0QGxMfo9NvJ+Ljpgxw0WML4u4\"",
    "mtime": "2023-03-09T16:04:34.631Z",
    "size": 104546,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-10.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-11.jpg": {
    "type": "image/jpeg",
    "etag": "\"24162-xM4gy3DbA73VmQtp3NlCO1poReU\"",
    "mtime": "2023-03-09T16:04:34.631Z",
    "size": 147810,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-11.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-12.jpg": {
    "type": "image/jpeg",
    "etag": "\"11fcc-RhE0Z9s5UdmmslaGjmbgtsZq52M\"",
    "mtime": "2023-03-09T16:04:34.630Z",
    "size": 73676,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-12.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-img-13.jpg": {
    "type": "image/jpeg",
    "etag": "\"c5cd-x1svprn7vWQDKR/EcoRWx0upxSA\"",
    "mtime": "2023-03-09T16:04:34.629Z",
    "size": 50637,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-img-13.jpg"
  },
  "/img/genezisproject/JPG/genezisproject-page-intro.png": {
    "type": "image/png",
    "etag": "\"214da-fIw+GeH7FvCkD+WU4d686RrjUJY\"",
    "mtime": "2023-03-09T16:04:34.628Z",
    "size": 136410,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page-intro.png"
  },
  "/img/genezisproject/JPG/genezisproject-page.png": {
    "type": "image/png",
    "etag": "\"214da-fIw+GeH7FvCkD+WU4d686RrjUJY\"",
    "mtime": "2023-03-09T16:04:34.628Z",
    "size": 136410,
    "path": "../../.output/public/img/genezisproject/JPG/genezisproject-page.png"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"8618-dp3CiGAJz095gr/38dNJafw1ubM\"",
    "mtime": "2023-03-09T16:04:34.626Z",
    "size": 34328,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-01.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"553a-eR8V7OUwPQhtvjfp0JP8ECv1AjI\"",
    "mtime": "2023-03-09T16:04:34.626Z",
    "size": 21818,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-02.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"44fe-A11CtbxEkG+VgufuIB83BR3uNI8\"",
    "mtime": "2023-03-09T16:04:34.626Z",
    "size": 17662,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-03.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"544a-SHXPmdnboxRsdYIKOuZQnPcmHF0\"",
    "mtime": "2023-03-09T16:04:34.625Z",
    "size": 21578,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-04.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"31ac-S8z8xB70KKGQJLZpwWoQg3mdyR0\"",
    "mtime": "2023-03-09T16:04:34.625Z",
    "size": 12716,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-05.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"4d16-HPL3j9CyttwNDB0jCtzQPRtCXmE\"",
    "mtime": "2023-03-09T16:04:34.624Z",
    "size": 19734,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-06.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"357a-3lRIOd+SmLgvlrgKyuKjj1UZNeY\"",
    "mtime": "2023-03-09T16:04:34.623Z",
    "size": 13690,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-07.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"4250-maXmrTdomH1iYn25UHJb2zqXEDY\"",
    "mtime": "2023-03-09T16:04:34.623Z",
    "size": 16976,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-08.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"3cc8-kAQd2RY5MJbcW2qaahfDBlGEdow\"",
    "mtime": "2023-03-09T16:04:34.623Z",
    "size": 15560,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-09.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"4446-rgWjwBwExRjtSVpXlYgwLiDpI2M\"",
    "mtime": "2023-03-09T16:04:34.623Z",
    "size": 17478,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-10.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"7ab8-V9S3opnGLagOfqRos7vYf5a++oc\"",
    "mtime": "2023-03-09T16:04:34.622Z",
    "size": 31416,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-11.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"5eac-E8QPLSSHDuwYBFtRKsGnVuhP7ls\"",
    "mtime": "2023-03-09T16:04:34.622Z",
    "size": 24236,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-12.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"61b6-/oZhf7J7AjCAfNz5WE4ZJ7Nd0Kk\"",
    "mtime": "2023-03-09T16:04:34.622Z",
    "size": 25014,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-img-13.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"1d1a4-bn6ooZGib9bOE2fHCk7aZIr/2Xc\"",
    "mtime": "2023-03-09T16:04:34.622Z",
    "size": 119204,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page-intro.webp"
  },
  "/img/genezisproject/Mobile/genezisproject-page.webp": {
    "type": "image/webp",
    "etag": "\"5508-JbyFz4uxyfdaAVdKjcE66w87QBw\"",
    "mtime": "2023-03-09T16:04:34.621Z",
    "size": 21768,
    "path": "../../.output/public/img/genezisproject/Mobile/genezisproject-page.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"616-LAQ2YDKesMmNbXHXCR+qBI7gc+U\"",
    "mtime": "2023-03-09T16:04:34.620Z",
    "size": 1558,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-icon.svg"
  },
  "/img/genezisproject/PC/genezisproject-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"4670-AjVJr0Fgox4voEBABZDvfuorOFA\"",
    "mtime": "2023-03-09T16:04:34.620Z",
    "size": 18032,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-01.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"3158-XzUNqBXV+52CU8BBcSWTKnGugFE\"",
    "mtime": "2023-03-09T16:04:34.619Z",
    "size": 12632,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-02.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"2602-IZANgegOR1WPKspj2PkklQOgm5c\"",
    "mtime": "2023-03-09T16:04:34.619Z",
    "size": 9730,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-03.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"641c-bXxnZjla6A2uc/dlUFCwN9nB7bE\"",
    "mtime": "2023-03-09T16:04:34.619Z",
    "size": 25628,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-04.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"3a4c-OcWmZvfZo0cKK01SUV5LZBzYgTw\"",
    "mtime": "2023-03-09T16:04:34.618Z",
    "size": 14924,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-05.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"53e2-4glw8Jm04H1Pj08/WtVW8NiN7qQ\"",
    "mtime": "2023-03-09T16:04:34.618Z",
    "size": 21474,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-06.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"372a-7raBOeY6Ygp8kP76KQJDM5+vGGU\"",
    "mtime": "2023-03-09T16:04:34.618Z",
    "size": 14122,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-07.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"43da-aZacXJbyRb7WfsuBSSx82+hqnF8\"",
    "mtime": "2023-03-09T16:04:34.618Z",
    "size": 17370,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-08.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"3f38-DYo949zYkNEFc056BOllo9CNLPk\"",
    "mtime": "2023-03-09T16:04:34.617Z",
    "size": 16184,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-09.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"fc9c-zCIn+iTbaZEVHtv37RnO34OerMc\"",
    "mtime": "2023-03-09T16:04:34.617Z",
    "size": 64668,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-10.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"1c190-t8aoApBHjmwhZ/+WQlTM/WyDFWs\"",
    "mtime": "2023-03-09T16:04:34.617Z",
    "size": 115088,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-11.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"99f0-v/iNCT0f0/VWsF/SOnLHZNU99+Y\"",
    "mtime": "2023-03-09T16:04:34.616Z",
    "size": 39408,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-12.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"90b8-F8JRQBzW6ZEEbQWk3yUqU4sjKec\"",
    "mtime": "2023-03-09T16:04:34.616Z",
    "size": 37048,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-img-13.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"4f46a-818je2HjWAzmkY7YCfjvC1Um9Os\"",
    "mtime": "2023-03-09T16:04:34.615Z",
    "size": 324714,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-intro.webp"
  },
  "/img/genezisproject/PC/genezisproject-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"289b-DyUeIygbE6UjrQuD+VUXxtwsSF4\"",
    "mtime": "2023-03-09T16:04:34.614Z",
    "size": 10395,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page-logo.svg"
  },
  "/img/genezisproject/PC/genezisproject-page.webp": {
    "type": "image/webp",
    "etag": "\"b01a-U8mv+y/vNaTFR07mr/Qq3Efg/dc\"",
    "mtime": "2023-03-09T16:04:34.614Z",
    "size": 45082,
    "path": "../../.output/public/img/genezisproject/PC/genezisproject-page.webp"
  },
  "/img/goup/JPG/goup-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"5fe9-JefgxLXPsXiDmI5tsU7MIlav2ao\"",
    "mtime": "2023-03-09T16:04:34.613Z",
    "size": 24553,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-01.jpg"
  },
  "/img/goup/JPG/goup-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"1288b-CLQGvvz9jv1t+MhW/SKEcfJ79Hc\"",
    "mtime": "2023-03-09T16:04:34.613Z",
    "size": 75915,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-02.jpg"
  },
  "/img/goup/JPG/goup-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"9c9e-m9rm6sabrdWuLezYIbGjvSuITOc\"",
    "mtime": "2023-03-09T16:04:34.612Z",
    "size": 40094,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-03.jpg"
  },
  "/img/goup/JPG/goup-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"70c3-9G0ANT4rFhYBALy4bqMuqTy30Eg\"",
    "mtime": "2023-03-09T16:04:34.612Z",
    "size": 28867,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-04.jpg"
  },
  "/img/goup/JPG/goup-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"e05-uLdHI0cAuVqfEN39bPRn8w5wYio\"",
    "mtime": "2023-03-09T16:04:34.612Z",
    "size": 3589,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-05.jpg"
  },
  "/img/goup/JPG/goup-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"cc9-iHUPn39CVuOQym1BWG5O5ChjP54\"",
    "mtime": "2023-03-09T16:04:34.611Z",
    "size": 3273,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-06.jpg"
  },
  "/img/goup/JPG/goup-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"e1a-jtEKwC0ZQPu51Vj/51f44kuM9Kc\"",
    "mtime": "2023-03-09T16:04:34.611Z",
    "size": 3610,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-07.jpg"
  },
  "/img/goup/JPG/goup-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"139a-qYl8SDzDWt/nhu17ZpyY1jLoJNo\"",
    "mtime": "2023-03-09T16:04:34.611Z",
    "size": 5018,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-08.jpg"
  },
  "/img/goup/JPG/goup-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"f3e-UcPjzPaQQGRnEF75oDcWS/M3648\"",
    "mtime": "2023-03-09T16:04:34.611Z",
    "size": 3902,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-09.jpg"
  },
  "/img/goup/JPG/goup-page-img-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"126d-arAXf8ak42KnefuphPL21dQpnEs\"",
    "mtime": "2023-03-09T16:04:34.611Z",
    "size": 4717,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-10.jpg"
  },
  "/img/goup/JPG/goup-page-img-11.jpg": {
    "type": "image/jpeg",
    "etag": "\"1950-tgr2ARZI4Ut/4lsnrx/Kouu7164\"",
    "mtime": "2023-03-09T16:04:34.610Z",
    "size": 6480,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-11.jpg"
  },
  "/img/goup/JPG/goup-page-img-12.jpg": {
    "type": "image/jpeg",
    "etag": "\"292f-YRHTBKYg2eUjZrVf2YhwyGdQvQQ\"",
    "mtime": "2023-03-09T16:04:34.610Z",
    "size": 10543,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-12.jpg"
  },
  "/img/goup/JPG/goup-page-img-13.jpg": {
    "type": "image/jpeg",
    "etag": "\"28ec-4fIsjqne8+C+T3jFzvykj83TSUo\"",
    "mtime": "2023-03-09T16:04:34.610Z",
    "size": 10476,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-13.jpg"
  },
  "/img/goup/JPG/goup-page-img-14.jpg": {
    "type": "image/jpeg",
    "etag": "\"2580-V+dhDju2qGSzaKcaswqvmj4Y9h8\"",
    "mtime": "2023-03-09T16:04:34.610Z",
    "size": 9600,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-14.jpg"
  },
  "/img/goup/JPG/goup-page-img-15.jpg": {
    "type": "image/jpeg",
    "etag": "\"3828-FJB2U4ZfG0/EykUNPTpW3/FHo4k\"",
    "mtime": "2023-03-09T16:04:34.609Z",
    "size": 14376,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-15.jpg"
  },
  "/img/goup/JPG/goup-page-img-16.jpg": {
    "type": "image/jpeg",
    "etag": "\"35f6-fcxkQcWU/OMLaMNanhOZWDbsp2g\"",
    "mtime": "2023-03-09T16:04:34.609Z",
    "size": 13814,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-16.jpg"
  },
  "/img/goup/JPG/goup-page-img-17.jpg": {
    "type": "image/jpeg",
    "etag": "\"17e2-XuIC737n1RdhMYR+zbfCuSME9wA\"",
    "mtime": "2023-03-09T16:04:34.609Z",
    "size": 6114,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-17.jpg"
  },
  "/img/goup/JPG/goup-page-img-18.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c4c-JojZIeF/rwCPgPCZZ0O34kR7Wak\"",
    "mtime": "2023-03-09T16:04:34.609Z",
    "size": 7244,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-18.jpg"
  },
  "/img/goup/JPG/goup-page-img-19.jpg": {
    "type": "image/jpeg",
    "etag": "\"194a-LfeVXbtxFD8ffe561Of0wmrrF/w\"",
    "mtime": "2023-03-09T16:04:34.609Z",
    "size": 6474,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-19.jpg"
  },
  "/img/goup/JPG/goup-page-img-20.jpg": {
    "type": "image/jpeg",
    "etag": "\"1948-gqjwDuSxN4K0tdALSks4Kzu4wHQ\"",
    "mtime": "2023-03-09T16:04:34.608Z",
    "size": 6472,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-20.jpg"
  },
  "/img/goup/JPG/goup-page-img-21.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ddb-4Ap7ATtOReW5zc/DtabrkfzPb1w\"",
    "mtime": "2023-03-09T16:04:34.608Z",
    "size": 11739,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-21.jpg"
  },
  "/img/goup/JPG/goup-page-img-22.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ba1-nnhwNDML7IiepxVD4zhIIIAcW8Y\"",
    "mtime": "2023-03-09T16:04:34.608Z",
    "size": 11169,
    "path": "../../.output/public/img/goup/JPG/goup-page-img-22.jpg"
  },
  "/img/goup/JPG/goup-page-intro.png": {
    "type": "image/png",
    "etag": "\"15716-oRt1U390wKXN3paX0CEcw6Agz6Q\"",
    "mtime": "2023-03-09T16:04:34.607Z",
    "size": 87830,
    "path": "../../.output/public/img/goup/JPG/goup-page-intro.png"
  },
  "/img/goup/JPG/goup-page.png": {
    "type": "image/png",
    "etag": "\"15716-oRt1U390wKXN3paX0CEcw6Agz6Q\"",
    "mtime": "2023-03-09T16:04:34.607Z",
    "size": 87830,
    "path": "../../.output/public/img/goup/JPG/goup-page.png"
  },
  "/img/goup/Mobile/goup-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"20ea-uCFi75Nd6tBYkr75ABPKs2JsxXM\"",
    "mtime": "2023-03-09T16:04:34.606Z",
    "size": 8426,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-01.webp"
  },
  "/img/goup/Mobile/goup-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"53d2-Sf5nhlgD4v7DonQflS++kIsamuY\"",
    "mtime": "2023-03-09T16:04:34.606Z",
    "size": 21458,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-02.webp"
  },
  "/img/goup/Mobile/goup-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"46e0-5lYAGvoK8PEsWDxJQ4YOd7y9gbM\"",
    "mtime": "2023-03-09T16:04:34.605Z",
    "size": 18144,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-03.webp"
  },
  "/img/goup/Mobile/goup-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"2ed2-bnklRx9MK5bQWKSK7ly8POcMG58\"",
    "mtime": "2023-03-09T16:04:34.605Z",
    "size": 11986,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-04.webp"
  },
  "/img/goup/Mobile/goup-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"1c36-xGSKU+YYmTcVz+5j+pDarfSTCyo\"",
    "mtime": "2023-03-09T16:04:34.605Z",
    "size": 7222,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-05.webp"
  },
  "/img/goup/Mobile/goup-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"197e-9XalphFyoBODxnC3em/ug5z6j5Y\"",
    "mtime": "2023-03-09T16:04:34.605Z",
    "size": 6526,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-06.webp"
  },
  "/img/goup/Mobile/goup-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"1f36-xYZnyC4faPJAI62Lc0vkc4GyrHQ\"",
    "mtime": "2023-03-09T16:04:34.604Z",
    "size": 7990,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-07.webp"
  },
  "/img/goup/Mobile/goup-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"2566-e/zgNadlRyAKfRhZdqXgXXj1S18\"",
    "mtime": "2023-03-09T16:04:34.604Z",
    "size": 9574,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-08.webp"
  },
  "/img/goup/Mobile/goup-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"1f50-w9kXYNgPs5NNd06Wl+1L3CjJups\"",
    "mtime": "2023-03-09T16:04:34.604Z",
    "size": 8016,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-09.webp"
  },
  "/img/goup/Mobile/goup-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"22cc-uxoU2wFya3KV7bQD5rSfnMfF8OU\"",
    "mtime": "2023-03-09T16:04:34.603Z",
    "size": 8908,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-10.webp"
  },
  "/img/goup/Mobile/goup-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"3552-vlZNur7ZqtYMWgJkLQPvqw6JnQg\"",
    "mtime": "2023-03-09T16:04:34.602Z",
    "size": 13650,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-11.webp"
  },
  "/img/goup/Mobile/goup-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"35a0-OFCU+Z4piyP0HP6PUArsRstt7MY\"",
    "mtime": "2023-03-09T16:04:34.602Z",
    "size": 13728,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-12.webp"
  },
  "/img/goup/Mobile/goup-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"3ade-HzG/0qeZ+2AB11NDvVyC/HGE0v8\"",
    "mtime": "2023-03-09T16:04:34.602Z",
    "size": 15070,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-13.webp"
  },
  "/img/goup/Mobile/goup-page-img-14.webp": {
    "type": "image/webp",
    "etag": "\"34d4-dz5qqdR5Mxzrbi6s0tgJtqbwvMU\"",
    "mtime": "2023-03-09T16:04:34.602Z",
    "size": 13524,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-14.webp"
  },
  "/img/goup/Mobile/goup-page-img-15.webp": {
    "type": "image/webp",
    "etag": "\"4db2-NztmfkdE3BBq54IlZs5zq6ba1XQ\"",
    "mtime": "2023-03-09T16:04:34.601Z",
    "size": 19890,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-15.webp"
  },
  "/img/goup/Mobile/goup-page-img-16.webp": {
    "type": "image/webp",
    "etag": "\"4950-tECYW1+epK16CSR9wjuKYHZMnD8\"",
    "mtime": "2023-03-09T16:04:34.601Z",
    "size": 18768,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-16.webp"
  },
  "/img/goup/Mobile/goup-page-img-17.webp": {
    "type": "image/webp",
    "etag": "\"32f6-nuh9mIYkUO0fqwJNIYx8ok1RAqc\"",
    "mtime": "2023-03-09T16:04:34.601Z",
    "size": 13046,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-17.webp"
  },
  "/img/goup/Mobile/goup-page-img-18.webp": {
    "type": "image/webp",
    "etag": "\"41d4-zFqougvchtf/2uNaGpRykHKAqwE\"",
    "mtime": "2023-03-09T16:04:34.601Z",
    "size": 16852,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-18.webp"
  },
  "/img/goup/Mobile/goup-page-img-19.webp": {
    "type": "image/webp",
    "etag": "\"39e4-iW4FwVvA3yeWf8wi/N4xDfqikas\"",
    "mtime": "2023-03-09T16:04:34.600Z",
    "size": 14820,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-19.webp"
  },
  "/img/goup/Mobile/goup-page-img-20.webp": {
    "type": "image/webp",
    "etag": "\"3b0e-HJzhD/KqKns2NkmnrHx6LPOdPZY\"",
    "mtime": "2023-03-09T16:04:34.600Z",
    "size": 15118,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-20.webp"
  },
  "/img/goup/Mobile/goup-page-img-21.webp": {
    "type": "image/webp",
    "etag": "\"42dc-qKr6BLZv/6FeSRUVTDHpgMd8GEY\"",
    "mtime": "2023-03-09T16:04:34.600Z",
    "size": 17116,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-21.webp"
  },
  "/img/goup/Mobile/goup-page-img-22.webp": {
    "type": "image/webp",
    "etag": "\"4322-zUmjDjRQvyEbVpZ89rg4vEUVC3M\"",
    "mtime": "2023-03-09T16:04:34.599Z",
    "size": 17186,
    "path": "../../.output/public/img/goup/Mobile/goup-page-img-22.webp"
  },
  "/img/goup/Mobile/goup-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"1d440-uM0dnckj/lPmTbyHLAwjF1GttSI\"",
    "mtime": "2023-03-09T16:04:34.599Z",
    "size": 119872,
    "path": "../../.output/public/img/goup/Mobile/goup-page-intro.webp"
  },
  "/img/goup/Mobile/goup-page.webp": {
    "type": "image/webp",
    "etag": "\"438a-Tlz+v2CWG9xw6fCTmT9AV4818m8\"",
    "mtime": "2023-03-09T16:04:34.598Z",
    "size": 17290,
    "path": "../../.output/public/img/goup/Mobile/goup-page.webp"
  },
  "/img/goup/PC/goup-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"611-R1vfUJfWh9j+a/2/I79JX+CAfNs\"",
    "mtime": "2023-03-09T16:04:34.598Z",
    "size": 1553,
    "path": "../../.output/public/img/goup/PC/goup-page-icon.svg"
  },
  "/img/goup/PC/goup-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"2bb2-Cdqsv6ZEe4UTdmsfmhkiHne34hc\"",
    "mtime": "2023-03-09T16:04:34.597Z",
    "size": 11186,
    "path": "../../.output/public/img/goup/PC/goup-page-img-01.webp"
  },
  "/img/goup/PC/goup-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"72a6-5MrR8Li+AMYDpfKV6PPanS6iW9Y\"",
    "mtime": "2023-03-09T16:04:34.597Z",
    "size": 29350,
    "path": "../../.output/public/img/goup/PC/goup-page-img-02.webp"
  },
  "/img/goup/PC/goup-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"6028-oV4D8PndwqpILAzPupiacKw8HqA\"",
    "mtime": "2023-03-09T16:04:34.597Z",
    "size": 24616,
    "path": "../../.output/public/img/goup/PC/goup-page-img-03.webp"
  },
  "/img/goup/PC/goup-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"3e5c-ccHt9zMb4hr/FCoHrFBBapzP85Q\"",
    "mtime": "2023-03-09T16:04:34.597Z",
    "size": 15964,
    "path": "../../.output/public/img/goup/PC/goup-page-img-04.webp"
  },
  "/img/goup/PC/goup-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"89e-aTWfmgoKRLadNsu2CeGDTBIBSX8\"",
    "mtime": "2023-03-09T16:04:34.596Z",
    "size": 2206,
    "path": "../../.output/public/img/goup/PC/goup-page-img-05.webp"
  },
  "/img/goup/PC/goup-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"7aa-A5uGRMnotcNOUnGFIXNMssgFKd4\"",
    "mtime": "2023-03-09T16:04:34.596Z",
    "size": 1962,
    "path": "../../.output/public/img/goup/PC/goup-page-img-06.webp"
  },
  "/img/goup/PC/goup-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"936-qxjb/ZhXOjy6etbOPaeLgM9u9Vg\"",
    "mtime": "2023-03-09T16:04:34.596Z",
    "size": 2358,
    "path": "../../.output/public/img/goup/PC/goup-page-img-07.webp"
  },
  "/img/goup/PC/goup-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"c2e-kNJNUK30AX5wryionNTU2PYoJeM\"",
    "mtime": "2023-03-09T16:04:34.596Z",
    "size": 3118,
    "path": "../../.output/public/img/goup/PC/goup-page-img-08.webp"
  },
  "/img/goup/PC/goup-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"9c6-0TYnqCoYSHT4ylrD06AZ5+5fO7A\"",
    "mtime": "2023-03-09T16:04:34.596Z",
    "size": 2502,
    "path": "../../.output/public/img/goup/PC/goup-page-img-09.webp"
  },
  "/img/goup/PC/goup-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"ace-7Jh+aBqdYRJRZwPjRaY8Ufkelss\"",
    "mtime": "2023-03-09T16:04:34.596Z",
    "size": 2766,
    "path": "../../.output/public/img/goup/PC/goup-page-img-10.webp"
  },
  "/img/goup/PC/goup-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"116e-7ZPMjXU1EesFvU+GYpCEVfE3aoQ\"",
    "mtime": "2023-03-09T16:04:34.595Z",
    "size": 4462,
    "path": "../../.output/public/img/goup/PC/goup-page-img-11.webp"
  },
  "/img/goup/PC/goup-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"f9e-jMtrs7luHxAHqbnHYcO5Ug0YB5w\"",
    "mtime": "2023-03-09T16:04:34.595Z",
    "size": 3998,
    "path": "../../.output/public/img/goup/PC/goup-page-img-12.webp"
  },
  "/img/goup/PC/goup-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"127c-I/pzDdCi/WgwL4smrCs7XRdaY+Q\"",
    "mtime": "2023-03-09T16:04:34.595Z",
    "size": 4732,
    "path": "../../.output/public/img/goup/PC/goup-page-img-13.webp"
  },
  "/img/goup/PC/goup-page-img-14.webp": {
    "type": "image/webp",
    "etag": "\"f86-y7wW4yHLHrUYXCcd4ChMy2aHhL4\"",
    "mtime": "2023-03-09T16:04:34.595Z",
    "size": 3974,
    "path": "../../.output/public/img/goup/PC/goup-page-img-14.webp"
  },
  "/img/goup/PC/goup-page-img-15.webp": {
    "type": "image/webp",
    "etag": "\"17c6-To7oO63YzWe1lT5VkA54ya4CvfY\"",
    "mtime": "2023-03-09T16:04:34.595Z",
    "size": 6086,
    "path": "../../.output/public/img/goup/PC/goup-page-img-15.webp"
  },
  "/img/goup/PC/goup-page-img-16.webp": {
    "type": "image/webp",
    "etag": "\"1700-vrV9UIiD0DnnTxcOwmXpUMkNSZQ\"",
    "mtime": "2023-03-09T16:04:34.594Z",
    "size": 5888,
    "path": "../../.output/public/img/goup/PC/goup-page-img-16.webp"
  },
  "/img/goup/PC/goup-page-img-17.webp": {
    "type": "image/webp",
    "etag": "\"f22-xklpQ/J+iVdHpAB8ty0UEIJ56sA\"",
    "mtime": "2023-03-09T16:04:34.594Z",
    "size": 3874,
    "path": "../../.output/public/img/goup/PC/goup-page-img-17.webp"
  },
  "/img/goup/PC/goup-page-img-18.webp": {
    "type": "image/webp",
    "etag": "\"13c8-+KJYMrn7tVbxJ04UmYdK2JsvSQc\"",
    "mtime": "2023-03-09T16:04:34.594Z",
    "size": 5064,
    "path": "../../.output/public/img/goup/PC/goup-page-img-18.webp"
  },
  "/img/goup/PC/goup-page-img-19.webp": {
    "type": "image/webp",
    "etag": "\"1026-AUrLliD6vpk5ARpfPuE+ApWVXu0\"",
    "mtime": "2023-03-09T16:04:34.594Z",
    "size": 4134,
    "path": "../../.output/public/img/goup/PC/goup-page-img-19.webp"
  },
  "/img/goup/PC/goup-page-img-20.webp": {
    "type": "image/webp",
    "etag": "\"1172-hHzpRlns9WZ/Untl6BXvFJ87Ktc\"",
    "mtime": "2023-03-09T16:04:34.594Z",
    "size": 4466,
    "path": "../../.output/public/img/goup/PC/goup-page-img-20.webp"
  },
  "/img/goup/PC/goup-page-img-21.webp": {
    "type": "image/webp",
    "etag": "\"131a-pYC4VsBSDeASIZDpWd7Td0XVvyk\"",
    "mtime": "2023-03-09T16:04:34.593Z",
    "size": 4890,
    "path": "../../.output/public/img/goup/PC/goup-page-img-21.webp"
  },
  "/img/goup/PC/goup-page-img-22.webp": {
    "type": "image/webp",
    "etag": "\"133c-msKj2E3YrBGV2aRfxc8IjhTmhSo\"",
    "mtime": "2023-03-09T16:04:34.593Z",
    "size": 4924,
    "path": "../../.output/public/img/goup/PC/goup-page-img-22.webp"
  },
  "/img/goup/PC/goup-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"50d72-EaHlBhO8L1gVebh/mcBx2GPm52k\"",
    "mtime": "2023-03-09T16:04:34.593Z",
    "size": 331122,
    "path": "../../.output/public/img/goup/PC/goup-page-intro.webp"
  },
  "/img/goup/PC/goup-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"620-ZiYjI9imV/gypnxSSk7ZLU3EE8M\"",
    "mtime": "2023-03-09T16:04:34.592Z",
    "size": 1568,
    "path": "../../.output/public/img/goup/PC/goup-page-logo.svg"
  },
  "/img/goup/PC/goup-page.webp": {
    "type": "image/webp",
    "etag": "\"8ac2-SP4HZ6weCHrM+6BwNnUIxMw7XUs\"",
    "mtime": "2023-03-09T16:04:34.591Z",
    "size": 35522,
    "path": "../../.output/public/img/goup/PC/goup-page.webp"
  },
  "/img/hone/Mobile/hone-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"5202-y88aJQbsMFI7fJ/8qFTVsLrXV2I\"",
    "mtime": "2023-03-09T16:04:34.576Z",
    "size": 20994,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-01.webp"
  },
  "/img/hone/Mobile/hone-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"5912-ESbBkOtN+kXTsefx06G97fD7bHs\"",
    "mtime": "2023-03-09T16:04:34.576Z",
    "size": 22802,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-02.webp"
  },
  "/img/hone/Mobile/hone-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"5608-LS0v5kNM8fdRrgk3S5rliqF1n4M\"",
    "mtime": "2023-03-09T16:04:34.575Z",
    "size": 22024,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-03.webp"
  },
  "/img/hone/Mobile/hone-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"45cc-VXebVUAM5nSGemcDA8SQYjFVZKs\"",
    "mtime": "2023-03-09T16:04:34.575Z",
    "size": 17868,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-04.webp"
  },
  "/img/hone/Mobile/hone-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"29d8-dZ4BswyZIJ6FC5NjUrccJ141oJQ\"",
    "mtime": "2023-03-09T16:04:34.575Z",
    "size": 10712,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-05.webp"
  },
  "/img/hone/Mobile/hone-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"3f1e-3S/USyOZsC4gsQUsxNPM8McIdME\"",
    "mtime": "2023-03-09T16:04:34.575Z",
    "size": 16158,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-06.webp"
  },
  "/img/hone/Mobile/hone-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"ea0-XyhiocFp3yBF1aP7tcCQ8LO2PD0\"",
    "mtime": "2023-03-09T16:04:34.574Z",
    "size": 3744,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-07.webp"
  },
  "/img/hone/Mobile/hone-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"429a-n3vIuS/QM1d9OIfsrBfqE+cHDvI\"",
    "mtime": "2023-03-09T16:04:34.574Z",
    "size": 17050,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-08.webp"
  },
  "/img/hone/Mobile/hone-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"27e4-vcU/rrkbm4xsv7AvbG1jmLzK5f0\"",
    "mtime": "2023-03-09T16:04:34.574Z",
    "size": 10212,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-09.webp"
  },
  "/img/hone/Mobile/hone-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"49fc-i/QLhipILtzSYNWK1clBBbe2yUE\"",
    "mtime": "2023-03-09T16:04:34.573Z",
    "size": 18940,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-10.webp"
  },
  "/img/hone/Mobile/hone-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"452c-wWJCEFV6F/Djb8UFcvXuvaXjnDY\"",
    "mtime": "2023-03-09T16:04:34.573Z",
    "size": 17708,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-11.webp"
  },
  "/img/hone/Mobile/hone-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"2950-Kft3gihFSmBmvz4q6QrHBwWJHP0\"",
    "mtime": "2023-03-09T16:04:34.573Z",
    "size": 10576,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-12.webp"
  },
  "/img/hone/Mobile/hone-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"2826-/1I8nlH6EZytJiAJ6J+Wb+0Jem0\"",
    "mtime": "2023-03-09T16:04:34.573Z",
    "size": 10278,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-13.webp"
  },
  "/img/hone/Mobile/hone-page-img-14.webp": {
    "type": "image/webp",
    "etag": "\"75ee-cVL73O+HN2x4Kc9i3giU7qtAtNk\"",
    "mtime": "2023-03-09T16:04:34.572Z",
    "size": 30190,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-14.webp"
  },
  "/img/hone/Mobile/hone-page-img-15.webp": {
    "type": "image/webp",
    "etag": "\"130a-O4hbzX7sUnxBPZSXBq9mKkfWKqk\"",
    "mtime": "2023-03-09T16:04:34.572Z",
    "size": 4874,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-15.webp"
  },
  "/img/hone/Mobile/hone-page-img-16.webp": {
    "type": "image/webp",
    "etag": "\"4650-A79JuUrBuS/eCQIV0W8zYNN1Fi8\"",
    "mtime": "2023-03-09T16:04:34.572Z",
    "size": 18000,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-16.webp"
  },
  "/img/hone/Mobile/hone-page-img-17.webp": {
    "type": "image/webp",
    "etag": "\"393e-fpOOkv1WKtPdZlmlgfvCsdu4/34\"",
    "mtime": "2023-03-09T16:04:34.570Z",
    "size": 14654,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-17.webp"
  },
  "/img/hone/Mobile/hone-page-img-18.webp": {
    "type": "image/webp",
    "etag": "\"3b34-LtRHJoflAgRiD8Q/U6avoY29sXQ\"",
    "mtime": "2023-03-09T16:04:34.570Z",
    "size": 15156,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-18.webp"
  },
  "/img/hone/Mobile/hone-page-img-19.webp": {
    "type": "image/webp",
    "etag": "\"281a-hHs2HKb+K0MeO9mJLbPP8GfVQOs\"",
    "mtime": "2023-03-09T16:04:34.570Z",
    "size": 10266,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-19.webp"
  },
  "/img/hone/Mobile/hone-page-img-20.webp": {
    "type": "image/webp",
    "etag": "\"8f70-B1c1QeQodwd1AUKA0WL09bs+p9E\"",
    "mtime": "2023-03-09T16:04:34.569Z",
    "size": 36720,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-20.webp"
  },
  "/img/hone/Mobile/hone-page-img-21.webp": {
    "type": "image/webp",
    "etag": "\"3d92-noZIg4m72wo0dQo1mhmkP6awv+I\"",
    "mtime": "2023-03-09T16:04:34.569Z",
    "size": 15762,
    "path": "../../.output/public/img/hone/Mobile/hone-page-img-21.webp"
  },
  "/img/hone/Mobile/hone-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"1c426-oJTraQZaVgCMdoAFShUebbcBbKU\"",
    "mtime": "2023-03-09T16:04:34.569Z",
    "size": 115750,
    "path": "../../.output/public/img/hone/Mobile/hone-page-intro.webp"
  },
  "/img/hone/Mobile/hone-page.webp": {
    "type": "image/webp",
    "etag": "\"5e96-o630hgfuNCh3VweuGe2Q2cBO/M0\"",
    "mtime": "2023-03-09T16:04:34.568Z",
    "size": 24214,
    "path": "../../.output/public/img/hone/Mobile/hone-page.webp"
  },
  "/img/hone/JPG/hone-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"12500-nSaYWNVIjvGwXpCFUkFd3Qn7mYM\"",
    "mtime": "2023-03-09T16:04:34.590Z",
    "size": 75008,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-01.jpg"
  },
  "/img/hone/JPG/hone-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"b7b5-i4UTtBwKCAV6epnq/cxtBVEcWbE\"",
    "mtime": "2023-03-09T16:04:34.589Z",
    "size": 47029,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-02.jpg"
  },
  "/img/hone/JPG/hone-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"acec-Rs9+AbBsF+CVIfjaFpZSF2Cde8Y\"",
    "mtime": "2023-03-09T16:04:34.586Z",
    "size": 44268,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-03.jpg"
  },
  "/img/hone/JPG/hone-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"16c22-aumgQjxV9WZCuv+lU61/BdB9poU\"",
    "mtime": "2023-03-09T16:04:34.586Z",
    "size": 93218,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-04.jpg"
  },
  "/img/hone/JPG/hone-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"5dff-yo+G2IbVqnzhUHDUTuAV9a2ztPY\"",
    "mtime": "2023-03-09T16:04:34.585Z",
    "size": 24063,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-05.jpg"
  },
  "/img/hone/JPG/hone-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"a6bb-dthppd5rRp/uBWCo9vAN70PQk8U\"",
    "mtime": "2023-03-09T16:04:34.585Z",
    "size": 42683,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-06.jpg"
  },
  "/img/hone/JPG/hone-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"4595-JRav+J28W31hhlzQgv9vl1IWJQg\"",
    "mtime": "2023-03-09T16:04:34.585Z",
    "size": 17813,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-07.jpg"
  },
  "/img/hone/JPG/hone-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"1463a-937lkMeeTXaJDijtJYYm+6A/2SA\"",
    "mtime": "2023-03-09T16:04:34.584Z",
    "size": 83514,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-08.jpg"
  },
  "/img/hone/JPG/hone-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"5b7e-So8qpAEb/qWUWqNcLmM7fWqhu0A\"",
    "mtime": "2023-03-09T16:04:34.584Z",
    "size": 23422,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-09.jpg"
  },
  "/img/hone/JPG/hone-page-img-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"9ef1-z3VMrxXW86ZVecnq+24FjCHsm3g\"",
    "mtime": "2023-03-09T16:04:34.583Z",
    "size": 40689,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-10.jpg"
  },
  "/img/hone/JPG/hone-page-img-11.jpg": {
    "type": "image/jpeg",
    "etag": "\"185d6-y8LqmD+ZKJUhe3nItyS4CbY+MpQ\"",
    "mtime": "2023-03-09T16:04:34.583Z",
    "size": 99798,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-11.jpg"
  },
  "/img/hone/JPG/hone-page-img-12.jpg": {
    "type": "image/jpeg",
    "etag": "\"f6a7-CvDK4ZEp7vb14l3DfUzZ2fTMhJg\"",
    "mtime": "2023-03-09T16:04:34.582Z",
    "size": 63143,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-12.jpg"
  },
  "/img/hone/JPG/hone-page-img-13.jpg": {
    "type": "image/jpeg",
    "etag": "\"e48d-xqxiSzG7ldifQ7iEIS05JH9M7Ys\"",
    "mtime": "2023-03-09T16:04:34.582Z",
    "size": 58509,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-13.jpg"
  },
  "/img/hone/JPG/hone-page-img-14.jpg": {
    "type": "image/jpeg",
    "etag": "\"afe8-i4VtfhKGcSLN69wFbE6g+cAlVyg\"",
    "mtime": "2023-03-09T16:04:34.581Z",
    "size": 45032,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-14.jpg"
  },
  "/img/hone/JPG/hone-page-img-15.jpg": {
    "type": "image/jpeg",
    "etag": "\"29f3-y3kGln0otZSkR/YH4IE4SD06sLI\"",
    "mtime": "2023-03-09T16:04:34.581Z",
    "size": 10739,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-15.jpg"
  },
  "/img/hone/JPG/hone-page-img-16.jpg": {
    "type": "image/jpeg",
    "etag": "\"6e27-pFMVu85wIGZ0ToGupwEYM9HJ5gk\"",
    "mtime": "2023-03-09T16:04:34.581Z",
    "size": 28199,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-16.jpg"
  },
  "/img/hone/JPG/hone-page-img-17.jpg": {
    "type": "image/jpeg",
    "etag": "\"4cbf-udi7J9k4aXHtqHMeV1SMrjtvRPw\"",
    "mtime": "2023-03-09T16:04:34.581Z",
    "size": 19647,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-17.jpg"
  },
  "/img/hone/JPG/hone-page-img-18.jpg": {
    "type": "image/jpeg",
    "etag": "\"1092f-JwmwFeagiRLlqYj8WZtRU4nPV34\"",
    "mtime": "2023-03-09T16:04:34.580Z",
    "size": 67887,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-18.jpg"
  },
  "/img/hone/JPG/hone-page-img-19.jpg": {
    "type": "image/jpeg",
    "etag": "\"6b85-YwHVYfk7HqfYIE2NhFsrMMWIJg0\"",
    "mtime": "2023-03-09T16:04:34.580Z",
    "size": 27525,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-19.jpg"
  },
  "/img/hone/JPG/hone-page-img-20.jpg": {
    "type": "image/jpeg",
    "etag": "\"11236-To2/wGs8BsDKQxKDytxAkfR7MgA\"",
    "mtime": "2023-03-09T16:04:34.579Z",
    "size": 70198,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-20.jpg"
  },
  "/img/hone/JPG/hone-page-img-21.jpg": {
    "type": "image/jpeg",
    "etag": "\"11cc8-x1eFUagp5DMfzyielxYvKJv8p7Q\"",
    "mtime": "2023-03-09T16:04:34.578Z",
    "size": 72904,
    "path": "../../.output/public/img/hone/JPG/hone-page-img-21.jpg"
  },
  "/img/hone/JPG/hone-page-intro.png": {
    "type": "image/png",
    "etag": "\"184b6-L7BDnV95RolmYTiaf87YJxTaFyo\"",
    "mtime": "2023-03-09T16:04:34.578Z",
    "size": 99510,
    "path": "../../.output/public/img/hone/JPG/hone-page-intro.png"
  },
  "/img/hone/JPG/hone-page.png": {
    "type": "image/png",
    "etag": "\"184b6-L7BDnV95RolmYTiaf87YJxTaFyo\"",
    "mtime": "2023-03-09T16:04:34.577Z",
    "size": 99510,
    "path": "../../.output/public/img/hone/JPG/hone-page.png"
  },
  "/img/hone/PC/hone-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"4bd4-9q/HFJYfOJjC5uZYnyVWIBrIE4Y\"",
    "mtime": "2023-03-09T16:04:34.566Z",
    "size": 19412,
    "path": "../../.output/public/img/hone/PC/hone-page-icon.svg"
  },
  "/img/hone/PC/hone-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"adf4-GaKZ1hb5r5PB4obehH6aQxmhH+0\"",
    "mtime": "2023-03-09T16:04:34.566Z",
    "size": 44532,
    "path": "../../.output/public/img/hone/PC/hone-page-img-01.webp"
  },
  "/img/hone/PC/hone-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"7d66-rHttSnITt1EdNVrb9pkTj6vQv9c\"",
    "mtime": "2023-03-09T16:04:34.566Z",
    "size": 32102,
    "path": "../../.output/public/img/hone/PC/hone-page-img-02.webp"
  },
  "/img/hone/PC/hone-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"7fdc-zIvN6pQIFD8er13+mpZbDzuvP7c\"",
    "mtime": "2023-03-09T16:04:34.561Z",
    "size": 32732,
    "path": "../../.output/public/img/hone/PC/hone-page-img-03.webp"
  },
  "/img/hone/PC/hone-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"f5b4-wbwPQBSZ0rGg30KahB879HksjTQ\"",
    "mtime": "2023-03-09T16:04:34.558Z",
    "size": 62900,
    "path": "../../.output/public/img/hone/PC/hone-page-img-04.webp"
  },
  "/img/hone/PC/hone-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"433e-F4qmNOT51FKpfhnVixwwIMcajGU\"",
    "mtime": "2023-03-09T16:04:34.557Z",
    "size": 17214,
    "path": "../../.output/public/img/hone/PC/hone-page-img-05.webp"
  },
  "/img/hone/PC/hone-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"6a96-UVZN2ayyIg3ATS8b1+lxAF4P6/k\"",
    "mtime": "2023-03-09T16:04:34.557Z",
    "size": 27286,
    "path": "../../.output/public/img/hone/PC/hone-page-img-06.webp"
  },
  "/img/hone/PC/hone-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"28c4-3Wh7h/15uOSky+yrz9shfa0BGYM\"",
    "mtime": "2023-03-09T16:04:34.556Z",
    "size": 10436,
    "path": "../../.output/public/img/hone/PC/hone-page-img-07.webp"
  },
  "/img/hone/PC/hone-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"b702-CfN1g+K4XJa3Dy7Ri0DzGU9YlsQ\"",
    "mtime": "2023-03-09T16:04:34.556Z",
    "size": 46850,
    "path": "../../.output/public/img/hone/PC/hone-page-img-08.webp"
  },
  "/img/hone/PC/hone-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"3c0c-pRsPAU8H7rN0axYYkgcQHJ4ykSU\"",
    "mtime": "2023-03-09T16:04:34.556Z",
    "size": 15372,
    "path": "../../.output/public/img/hone/PC/hone-page-img-09.webp"
  },
  "/img/hone/PC/hone-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"6180-GxyElWkjdN+z6yineqnUSIAqR1c\"",
    "mtime": "2023-03-09T16:04:34.555Z",
    "size": 24960,
    "path": "../../.output/public/img/hone/PC/hone-page-img-10.webp"
  },
  "/img/hone/PC/hone-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"ec42-hKXZd1/mp5rk3BZ26R9cE/6Y87I\"",
    "mtime": "2023-03-09T16:04:34.555Z",
    "size": 60482,
    "path": "../../.output/public/img/hone/PC/hone-page-img-11.webp"
  },
  "/img/hone/PC/hone-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"a1d6-Ok8+N/W6oH5p/juMuMwGNFs7YVw\"",
    "mtime": "2023-03-09T16:04:34.555Z",
    "size": 41430,
    "path": "../../.output/public/img/hone/PC/hone-page-img-12.webp"
  },
  "/img/hone/PC/hone-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"8abc-0HoffNYkpcZQcuQj4MwrvhrQQCk\"",
    "mtime": "2023-03-09T16:04:34.554Z",
    "size": 35516,
    "path": "../../.output/public/img/hone/PC/hone-page-img-13.webp"
  },
  "/img/hone/PC/hone-page-img-14.webp": {
    "type": "image/webp",
    "etag": "\"889a-w6+pKqj7tdTMk1hA7xZlGJ9fTk4\"",
    "mtime": "2023-03-09T16:04:34.554Z",
    "size": 34970,
    "path": "../../.output/public/img/hone/PC/hone-page-img-14.webp"
  },
  "/img/hone/PC/hone-page-img-15.webp": {
    "type": "image/webp",
    "etag": "\"135c-qDKIPBBog6cQown/FSEs2kdP5gY\"",
    "mtime": "2023-03-09T16:04:34.553Z",
    "size": 4956,
    "path": "../../.output/public/img/hone/PC/hone-page-img-15.webp"
  },
  "/img/hone/PC/hone-page-img-16.webp": {
    "type": "image/webp",
    "etag": "\"4c58-UezW7pH9dcGKJzTw+P1JkBW+WqE\"",
    "mtime": "2023-03-09T16:04:34.553Z",
    "size": 19544,
    "path": "../../.output/public/img/hone/PC/hone-page-img-16.webp"
  },
  "/img/hone/PC/hone-page-img-17.webp": {
    "type": "image/webp",
    "etag": "\"3b88-ai3Zdwzvs/0LFZdd7qOpMtu6418\"",
    "mtime": "2023-03-09T16:04:34.553Z",
    "size": 15240,
    "path": "../../.output/public/img/hone/PC/hone-page-img-17.webp"
  },
  "/img/hone/PC/hone-page-img-18.webp": {
    "type": "image/webp",
    "etag": "\"9638-i+gTT8A985eZCU40jv7LBequqzU\"",
    "mtime": "2023-03-09T16:04:34.553Z",
    "size": 38456,
    "path": "../../.output/public/img/hone/PC/hone-page-img-18.webp"
  },
  "/img/hone/PC/hone-page-img-19.webp": {
    "type": "image/webp",
    "etag": "\"3c04-/8NU1avrfRK52NnJfRD6GF+EW5c\"",
    "mtime": "2023-03-09T16:04:34.552Z",
    "size": 15364,
    "path": "../../.output/public/img/hone/PC/hone-page-img-19.webp"
  },
  "/img/hone/PC/hone-page-img-20.webp": {
    "type": "image/webp",
    "etag": "\"d786-UGpHnOmA/MMdwGeC8hMqcxmyRiA\"",
    "mtime": "2023-03-09T16:04:34.552Z",
    "size": 55174,
    "path": "../../.output/public/img/hone/PC/hone-page-img-20.webp"
  },
  "/img/hone/PC/hone-page-img-21.webp": {
    "type": "image/webp",
    "etag": "\"cef2-K3LAjcVUDxCDGlvTZN+5yTlsz2o\"",
    "mtime": "2023-03-09T16:04:34.552Z",
    "size": 52978,
    "path": "../../.output/public/img/hone/PC/hone-page-img-21.webp"
  },
  "/img/hone/PC/hone-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"4757c-tLAOqlShsExP5WmAWj+JEZSVnkw\"",
    "mtime": "2023-03-09T16:04:34.550Z",
    "size": 292220,
    "path": "../../.output/public/img/hone/PC/hone-page-intro.webp"
  },
  "/img/hone/PC/hone-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"4afa-z9YxWScpl9p7lFJU2lLejFuyBiw\"",
    "mtime": "2023-03-09T16:04:34.549Z",
    "size": 19194,
    "path": "../../.output/public/img/hone/PC/hone-page-logo.svg"
  },
  "/img/hone/PC/hone-page.webp": {
    "type": "image/webp",
    "etag": "\"bbc4-3Qnf5N5sleZiMf2gCg0A966EsQM\"",
    "mtime": "2023-03-09T16:04:34.549Z",
    "size": 48068,
    "path": "../../.output/public/img/hone/PC/hone-page.webp"
  },
  "/img/izenbot/JPG/izenbot-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"e500-YHqbGCCCvkbVmkmxci7jQNnJEus\"",
    "mtime": "2023-03-09T16:04:34.548Z",
    "size": 58624,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-01.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"8848-uKuoXBhCxy6I6DMIHmZ9AGSNZIY\"",
    "mtime": "2023-03-09T16:04:34.548Z",
    "size": 34888,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-02.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"6d8f-t0DJOcK7g+ygjkxjAjmXh0sPeKo\"",
    "mtime": "2023-03-09T16:04:34.547Z",
    "size": 28047,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-03.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d66-aiOufmK6WCKG5QNlzpb4mh+ZTf8\"",
    "mtime": "2023-03-09T16:04:34.547Z",
    "size": 7526,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-04.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"7b17-J8XxP+LVmUx+eK2XpAe28aXyr5M\"",
    "mtime": "2023-03-09T16:04:34.547Z",
    "size": 31511,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-05.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"836d-Svgn6UY2/MzAElItEzxfyEEj7D0\"",
    "mtime": "2023-03-09T16:04:34.546Z",
    "size": 33645,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-06.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"275b8-nRBV/7h5EGGM4DzZXB6lVCPtbvU\"",
    "mtime": "2023-03-09T16:04:34.546Z",
    "size": 161208,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-07.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"e869-QliqGj9//GZ4ppAbyz/HENGUgko\"",
    "mtime": "2023-03-09T16:04:34.545Z",
    "size": 59497,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-08.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"fad4-0cj6KTH+k8htNgSSEzeM4a70fSY\"",
    "mtime": "2023-03-09T16:04:34.545Z",
    "size": 64212,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-09.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"7135-d4uw3biIlIJGxmypzZiAVozQycQ\"",
    "mtime": "2023-03-09T16:04:34.544Z",
    "size": 28981,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-10.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-11.jpg": {
    "type": "image/jpeg",
    "etag": "\"4411-oh2/Li9sJqKcbjJSuonoEQLDr9o\"",
    "mtime": "2023-03-09T16:04:34.544Z",
    "size": 17425,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-11.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-12.jpg": {
    "type": "image/jpeg",
    "etag": "\"20828-+8CY3BFDvHBBQMY2lXJmOlRknAo\"",
    "mtime": "2023-03-09T16:04:34.544Z",
    "size": 133160,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-12.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-13.jpg": {
    "type": "image/jpeg",
    "etag": "\"24375-jXN7miEzsvw6Ucpa1B4C8ZOBQ3s\"",
    "mtime": "2023-03-09T16:04:34.543Z",
    "size": 148341,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-13.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-14.jpg": {
    "type": "image/jpeg",
    "etag": "\"5ef2-CBI17o3PRVHka7s76XuAsKbdKf4\"",
    "mtime": "2023-03-09T16:04:34.542Z",
    "size": 24306,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-14.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-15.jpg": {
    "type": "image/jpeg",
    "etag": "\"236c8-hbz58V2eQ8u2Up5J1GFZW/1jFko\"",
    "mtime": "2023-03-09T16:04:34.542Z",
    "size": 145096,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-15.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-16.jpg": {
    "type": "image/jpeg",
    "etag": "\"caa7-uXlEyDPMB1VKSRvfig6anBHNec0\"",
    "mtime": "2023-03-09T16:04:34.541Z",
    "size": 51879,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-16.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-img-17.jpg": {
    "type": "image/jpeg",
    "etag": "\"1cba5-5Gd+XSKQ77DSM9MtgXdlQWV05h8\"",
    "mtime": "2023-03-09T16:04:34.540Z",
    "size": 117669,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-img-17.jpg"
  },
  "/img/izenbot/JPG/izenbot-page-intro.png": {
    "type": "image/png",
    "etag": "\"3fb75-fvxhg7SzoEISY23TwQ+8RlZFJO4\"",
    "mtime": "2023-03-09T16:04:34.540Z",
    "size": 260981,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page-intro.png"
  },
  "/img/izenbot/JPG/izenbot-page.png": {
    "type": "image/png",
    "etag": "\"3fb75-fvxhg7SzoEISY23TwQ+8RlZFJO4\"",
    "mtime": "2023-03-09T16:04:34.539Z",
    "size": 260981,
    "path": "../../.output/public/img/izenbot/JPG/izenbot-page.png"
  },
  "/img/izenbot/Mobile/izenbot-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"5f7c-cv6FUVfeAR6wD0/aatSe4CrvolI\"",
    "mtime": "2023-03-09T16:04:34.537Z",
    "size": 24444,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-01.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"4ba2-VrrPtZtNKVmbi6VJk52+BRJI5YI\"",
    "mtime": "2023-03-09T16:04:34.537Z",
    "size": 19362,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-02.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"3942-WGXLrRgbD/oDWmUigE4Tok3qAw8\"",
    "mtime": "2023-03-09T16:04:34.536Z",
    "size": 14658,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-03.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"6d4-xKB7UvMuxAKJPNojgvODpozZi/I\"",
    "mtime": "2023-03-09T16:04:34.536Z",
    "size": 1748,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-04.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"408c-aTXYeEszX3x8sHvg/sl3Ydjx0JI\"",
    "mtime": "2023-03-09T16:04:34.536Z",
    "size": 16524,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-05.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"4846-B3x1txqWAOItDbeHGYUMdcnZcW0\"",
    "mtime": "2023-03-09T16:04:34.536Z",
    "size": 18502,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-06.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"8e90-fFlNLbjSFFgY8KdDcJxAAWSIpHU\"",
    "mtime": "2023-03-09T16:04:34.536Z",
    "size": 36496,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-07.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"3026-qIWNKyQ9cOBoXZnVpkpUWJ2msIw\"",
    "mtime": "2023-03-09T16:04:34.535Z",
    "size": 12326,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-08.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"646e-wzUyQp3y1Wfxrb0H4wakDGh/S/4\"",
    "mtime": "2023-03-09T16:04:34.535Z",
    "size": 25710,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-09.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"532a-iG91SmKCrdA+10ulCBhcAXMIODg\"",
    "mtime": "2023-03-09T16:04:34.534Z",
    "size": 21290,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-10.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"4046-misAF9Su5GruKjnFSlIayWKURCs\"",
    "mtime": "2023-03-09T16:04:34.534Z",
    "size": 16454,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-11.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"7704-lJccxgFipADqZ+ODA+Y7rpcFG54\"",
    "mtime": "2023-03-09T16:04:34.534Z",
    "size": 30468,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-12.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"e23c-Gz1YZ0+A+MuCJ066NCB1SxUEaOU\"",
    "mtime": "2023-03-09T16:04:34.533Z",
    "size": 57916,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-13.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-14.webp": {
    "type": "image/webp",
    "etag": "\"2de6-s04fLE+jq3GmP9OnRst8OJfQPmA\"",
    "mtime": "2023-03-09T16:04:34.533Z",
    "size": 11750,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-14.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-15.webp": {
    "type": "image/webp",
    "etag": "\"69f2-Yr7T1DbfqpT4RkFycQ/JmBIHv+U\"",
    "mtime": "2023-03-09T16:04:34.533Z",
    "size": 27122,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-15.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-16.webp": {
    "type": "image/webp",
    "etag": "\"5de6-FBxTHiKIbt49hyK+SOdMusWkKr4\"",
    "mtime": "2023-03-09T16:04:34.532Z",
    "size": 24038,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-16.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-img-17.webp": {
    "type": "image/webp",
    "etag": "\"a800-89NMlrCW1w9pwJS0B2/8HRLCL0g\"",
    "mtime": "2023-03-09T16:04:34.532Z",
    "size": 43008,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-img-17.webp"
  },
  "/img/izenbot/Mobile/izenbot-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"39526-659jnX1Or8Ul/7RUKc+SB2nLhKA\"",
    "mtime": "2023-03-09T16:04:34.532Z",
    "size": 234790,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page-intro.webp"
  },
  "/img/izenbot/Mobile/izenbot-page.webp": {
    "type": "image/webp",
    "etag": "\"ae9a-+RNAHuZQCSxznzqdpHi51V0mEMQ\"",
    "mtime": "2023-03-09T16:04:34.531Z",
    "size": 44698,
    "path": "../../.output/public/img/izenbot/Mobile/izenbot-page.webp"
  },
  "/img/izenbot/PC/izenbot-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"652-aw+V12Xd5kX0kXBjJ8UejwiEn3w\"",
    "mtime": "2023-03-09T16:04:34.530Z",
    "size": 1618,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-icon.svg"
  },
  "/img/izenbot/PC/izenbot-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"696c-lG2CxE3jwU0trRaazhEQXbJKEik\"",
    "mtime": "2023-03-09T16:04:34.530Z",
    "size": 26988,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-01.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"50d8-p9IppEk5ZRs5DCSGNC8I/yP0eXQ\"",
    "mtime": "2023-03-09T16:04:34.529Z",
    "size": 20696,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-02.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"3f42-Tgn5HxgY53yQkHO+aR2MdDOhM3Q\"",
    "mtime": "2023-03-09T16:04:34.529Z",
    "size": 16194,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-03.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"7b0-biUotsv9etzxdbAiQBZkzokMPWI\"",
    "mtime": "2023-03-09T16:04:34.529Z",
    "size": 1968,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-04.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"4634-eKGwHFBa60LM4XMk2sAbmq3whbo\"",
    "mtime": "2023-03-09T16:04:34.528Z",
    "size": 17972,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-05.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"4fb6-/5kDdLWcTy+/OB8Zr0wrlZ1LeH4\"",
    "mtime": "2023-03-09T16:04:34.527Z",
    "size": 20406,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-06.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"198c2-mzo6gw3OK2lMjkCxxvpMxTLVbOs\"",
    "mtime": "2023-03-09T16:04:34.526Z",
    "size": 104642,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-07.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"82f0-EJ1rrHH9+KWbp4TOd3VPQd26LNs\"",
    "mtime": "2023-03-09T16:04:34.526Z",
    "size": 33520,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-08.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"a296-m5AVpJo8IZSJjFdKVuI5hgT7qbg\"",
    "mtime": "2023-03-09T16:04:34.525Z",
    "size": 41622,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-09.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"4470-8Cn6lLAhhxGypB2LgZk5bTQIuJw\"",
    "mtime": "2023-03-09T16:04:34.525Z",
    "size": 17520,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-10.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"31f8-fxkkIPgfrrky3HcSHl9QLNrFnHI\"",
    "mtime": "2023-03-09T16:04:34.525Z",
    "size": 12792,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-11.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"14936-qEHDQGBBbXX1t2cCjFJ5N82k+1o\"",
    "mtime": "2023-03-09T16:04:34.524Z",
    "size": 84278,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-12.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"13c3a-hQiMfXatN6e5Y4Yc9qlRGHdyPkY\"",
    "mtime": "2023-03-09T16:04:34.524Z",
    "size": 80954,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-13.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-14.webp": {
    "type": "image/webp",
    "etag": "\"4468-IdpA+L+T94cLTz+JJuziv9WkZkQ\"",
    "mtime": "2023-03-09T16:04:34.523Z",
    "size": 17512,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-14.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-15.webp": {
    "type": "image/webp",
    "etag": "\"19616-NpdIGpj/1W+dU++Qk0jW5VSAE0M\"",
    "mtime": "2023-03-09T16:04:34.522Z",
    "size": 103958,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-15.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-16.webp": {
    "type": "image/webp",
    "etag": "\"8366-hicIU/imx8E6VjakOWUOY9IcsXc\"",
    "mtime": "2023-03-09T16:04:34.522Z",
    "size": 33638,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-16.webp"
  },
  "/img/izenbot/PC/izenbot-page-img-17.webp": {
    "type": "image/webp",
    "etag": "\"ea80-X9AJbFtL2oGScL3Dzl9xRyFRhSo\"",
    "mtime": "2023-03-09T16:04:34.521Z",
    "size": 60032,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-img-17.webp"
  },
  "/img/izenbot/PC/izenbot-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"9d692-ITEGwnRIKNlcF9FI0373flRHVRQ\"",
    "mtime": "2023-03-09T16:04:34.520Z",
    "size": 644754,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-intro.webp"
  },
  "/img/izenbot/PC/izenbot-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"c17-HBwDg42ed9ZZnCJwVuJ7YsFcnUQ\"",
    "mtime": "2023-03-09T16:04:34.518Z",
    "size": 3095,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page-logo.svg"
  },
  "/img/izenbot/PC/izenbot-page.webp": {
    "type": "image/webp",
    "etag": "\"169b0-vxHkWSAJKsJ4/mCH8YQYDoXkEV0\"",
    "mtime": "2023-03-09T16:04:34.518Z",
    "size": 92592,
    "path": "../../.output/public/img/izenbot/PC/izenbot-page.webp"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"1436c-F/em1oe6sQ0h3nRikfV0edhtJCU\"",
    "mtime": "2023-03-09T16:04:34.478Z",
    "size": 82796,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-01.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"208fb-l3ENXOkLMoWYLEQ3feBf4mIjm3w\"",
    "mtime": "2023-03-09T16:04:34.477Z",
    "size": 133371,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-02.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"1012d-kRgc9R0yyXAPz8kyq1aCsGE54ns\"",
    "mtime": "2023-03-09T16:04:34.477Z",
    "size": 65837,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-03.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"1bdc-+2K80iKMuOhFI1M2ZdJ5FdYGfyU\"",
    "mtime": "2023-03-09T16:04:34.476Z",
    "size": 7132,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-04.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"c099-Ma9V7yN3muHXJ2hlsS2jBVtiN78\"",
    "mtime": "2023-03-09T16:04:34.476Z",
    "size": 49305,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-05.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b32-GjjSXSzcl+k015otxEsI290zehM\"",
    "mtime": "2023-03-09T16:04:34.475Z",
    "size": 11058,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-06.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"33ef-VC1fkwyKAjCR8rA2zM8FXLnJ2Ak\"",
    "mtime": "2023-03-09T16:04:34.475Z",
    "size": 13295,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-07.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"3516-vMWRY1yI9sqfhDU83RfD+GrzJIo\"",
    "mtime": "2023-03-09T16:04:34.475Z",
    "size": 13590,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-08.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"3a22-5CjwSHpkVv+z1yJEV4auu0eEo2Q\"",
    "mtime": "2023-03-09T16:04:34.474Z",
    "size": 14882,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-09.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"11e4d-16nOTg+LPfCmFaLmGV8EYAegVRM\"",
    "mtime": "2023-03-09T16:04:34.473Z",
    "size": 73293,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-10.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-11.jpg": {
    "type": "image/jpeg",
    "etag": "\"38e4-VJozUdojm9bN54JLDI7RfdZeFFw\"",
    "mtime": "2023-03-09T16:04:34.472Z",
    "size": 14564,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-11.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-12.jpg": {
    "type": "image/jpeg",
    "etag": "\"821a-v6AFVSrcGlg7H05fc28KiL4OAD8\"",
    "mtime": "2023-03-09T16:04:34.472Z",
    "size": 33306,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-12.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-13.jpg": {
    "type": "image/jpeg",
    "etag": "\"47e0-FgIAKgRFj4xgUnevJbz2nLxMXI4\"",
    "mtime": "2023-03-09T16:04:34.470Z",
    "size": 18400,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-13.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-14.jpg": {
    "type": "image/jpeg",
    "etag": "\"7daa-Ey2bPBzbQokK9xg/v0ht5cTbdh4\"",
    "mtime": "2023-03-09T16:04:34.470Z",
    "size": 32170,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-14.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-15.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d17-B2802jF/IPn/oLk/5nqb0+eeY8U\"",
    "mtime": "2023-03-09T16:04:34.468Z",
    "size": 15639,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-15.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-16.jpg": {
    "type": "image/jpeg",
    "etag": "\"49a5-iRRgP1qwxwWkC4AxnoNmkZG0iZw\"",
    "mtime": "2023-03-09T16:04:34.467Z",
    "size": 18853,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-img-16.jpg"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-intro.png": {
    "type": "image/png",
    "etag": "\"2cb36-63xi9L79E/3Mm5aNl+tcHO1H720\"",
    "mtime": "2023-03-09T16:04:34.467Z",
    "size": 183094,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page-intro.png"
  },
  "/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page.png": {
    "type": "image/png",
    "etag": "\"2cb36-63xi9L79E/3Mm5aNl+tcHO1H720\"",
    "mtime": "2023-03-09T16:04:34.466Z",
    "size": 183094,
    "path": "../../.output/public/img/kvanttelekomBrend/JPG/kvanttelekomBrend-page.png"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"4490-QTg8dQ8JX3vb6wu436dOsK+sY0w\"",
    "mtime": "2023-03-09T16:04:34.463Z",
    "size": 17552,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-01.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"707e-aoaPgRcXdpmkOc6lIHNLtGswO7Y\"",
    "mtime": "2023-03-09T16:04:34.463Z",
    "size": 28798,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-02.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"391a-MQ3uTv1Ywr7P58g6zDyQHcS7DcQ\"",
    "mtime": "2023-03-09T16:04:34.462Z",
    "size": 14618,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-03.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"10c6-biltZFDoD0TVeJe1vO3rbyCjXLE\"",
    "mtime": "2023-03-09T16:04:34.462Z",
    "size": 4294,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-04.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"bf14-hoamrhASxyYvtqJTWAg2OC41Rnc\"",
    "mtime": "2023-03-09T16:04:34.461Z",
    "size": 48916,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-05.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"2230-N2aIKybyDgMb48x7w6eTP2mTPxQ\"",
    "mtime": "2023-03-09T16:04:34.461Z",
    "size": 8752,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-06.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"3d82-oa159RtlzHmYedeO+8euMoY+HRE\"",
    "mtime": "2023-03-09T16:04:34.461Z",
    "size": 15746,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-07.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"3726-gSSoRWAO07umXKhuQF3V140c5I4\"",
    "mtime": "2023-03-09T16:04:34.460Z",
    "size": 14118,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-08.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"424a-Hmha4f87GuaeV1cTXX/4eEYiyJs\"",
    "mtime": "2023-03-09T16:04:34.457Z",
    "size": 16970,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-09.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"3ad0-jpnKWIxKFNXf6xRZI/uLI6r9r0Y\"",
    "mtime": "2023-03-09T16:04:34.457Z",
    "size": 15056,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-10.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"243c-ZpMGqOy6hD1so6t1/bUtUZddyW0\"",
    "mtime": "2023-03-09T16:04:34.457Z",
    "size": 9276,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-11.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"5848-OWCYlIpEdLV++fU53mSIK8GnBb8\"",
    "mtime": "2023-03-09T16:04:34.456Z",
    "size": 22600,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-12.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"3210-JejjNHsX/cn651OIXVo2PZ7Mh9Y\"",
    "mtime": "2023-03-09T16:04:34.456Z",
    "size": 12816,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-13.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-14.webp": {
    "type": "image/webp",
    "etag": "\"5cfa-sJUomwKw3sc3CAx9losPwNDrl9Y\"",
    "mtime": "2023-03-09T16:04:34.456Z",
    "size": 23802,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-14.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-15.webp": {
    "type": "image/webp",
    "etag": "\"24c6-FzYvxI6P0P2XzW+XFuIqKtLZDro\"",
    "mtime": "2023-03-09T16:04:34.455Z",
    "size": 9414,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-15.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-16.webp": {
    "type": "image/webp",
    "etag": "\"30f2-d3MZau4mZ1IGA0XXc/+YqnjGTqI\"",
    "mtime": "2023-03-09T16:04:34.455Z",
    "size": 12530,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-img-16.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"28c56-Ov8JUXdEzT0hfhv8/eyLDOVD254\"",
    "mtime": "2023-03-09T16:04:34.454Z",
    "size": 166998,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page-intro.webp"
  },
  "/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page.webp": {
    "type": "image/webp",
    "etag": "\"96a8-Kzcod3JRzGCyPclwJPt33Np4xRs\"",
    "mtime": "2023-03-09T16:04:34.452Z",
    "size": 38568,
    "path": "../../.output/public/img/kvanttelekomBrend/Mobile/kvanttelekomBrend-page.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"229-+cB7mjgRu0y+iDzaAFJ7OvVCDvs\"",
    "mtime": "2023-03-09T16:04:34.451Z",
    "size": 553,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-icon.svg"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"ebd2-AvCQHiHQwln1Ts2YRGlMhcEPiU4\"",
    "mtime": "2023-03-09T16:04:34.450Z",
    "size": 60370,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-01.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"18aea-Qt5nwvXUkvm/PCKO9fCpvUvVQ8g\"",
    "mtime": "2023-03-09T16:04:34.450Z",
    "size": 101098,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-02.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"ae22-yl4U3apAUn6sU63weDimIHqkgwk\"",
    "mtime": "2023-03-09T16:04:34.449Z",
    "size": 44578,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-03.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"904-H9GUhYOb2PtE6LyCsusEp0Z23UQ\"",
    "mtime": "2023-03-09T16:04:34.448Z",
    "size": 2308,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-04.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"6e2e-Jld8tLW0nRUhdCANdNmIEdwNUec\"",
    "mtime": "2023-03-09T16:04:34.447Z",
    "size": 28206,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-05.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"13f6-LY61lB5Z6b5rHx80qK55cxYpd4E\"",
    "mtime": "2023-03-09T16:04:34.447Z",
    "size": 5110,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-06.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"23c2-s6MsAVKaaws+/ihMJDoWuNRm39E\"",
    "mtime": "2023-03-09T16:04:34.446Z",
    "size": 9154,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-07.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"21a6-YTTr+UO68jG6UYHmaUWPUgyjqLA\"",
    "mtime": "2023-03-09T16:04:34.446Z",
    "size": 8614,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-08.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"285e-TveKrOeJBud2XxFrIbQLRrAKmLM\"",
    "mtime": "2023-03-09T16:04:34.445Z",
    "size": 10334,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-09.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"c7f2-uOrlq6As9prqD/CY7dqhRPhEFHM\"",
    "mtime": "2023-03-09T16:04:34.445Z",
    "size": 51186,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-10.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"20e4-fCc5CBGQUyYHcL7LI/HiHbHu338\"",
    "mtime": "2023-03-09T16:04:34.444Z",
    "size": 8420,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-11.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"5e9c-MXF5anqXQscKets06KrkWfBm9wI\"",
    "mtime": "2023-03-09T16:04:34.444Z",
    "size": 24220,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-12.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"2e54-uTeHSj1/+Kp4dIsOoe/5jXdIqHs\"",
    "mtime": "2023-03-09T16:04:34.443Z",
    "size": 11860,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-13.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-14.webp": {
    "type": "image/webp",
    "etag": "\"5984-Ss67D/Cx66q/A4ux3wtUVND5quc\"",
    "mtime": "2023-03-09T16:04:34.443Z",
    "size": 22916,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-14.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-15.webp": {
    "type": "image/webp",
    "etag": "\"23f6-0hdWjaa0gfMgXmOhS2CeBJSWIFM\"",
    "mtime": "2023-03-09T16:04:34.442Z",
    "size": 9206,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-15.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-16.webp": {
    "type": "image/webp",
    "etag": "\"2f2e-9DNG4YYqxsVBieZWX7XKmUd19/4\"",
    "mtime": "2023-03-09T16:04:34.442Z",
    "size": 12078,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-img-16.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"6e264-mMDFLe1cnuq5sLkPSOxuaaL7qgI\"",
    "mtime": "2023-03-09T16:04:34.441Z",
    "size": 451172,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-intro.webp"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"1374-nkfH4WwHLzWwCBfJ6aYt75XCP98\"",
    "mtime": "2023-03-09T16:04:34.440Z",
    "size": 4980,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page-logo.svg"
  },
  "/img/kvanttelekomBrend/PC/kvanttelekomBrend-page.webp": {
    "type": "image/webp",
    "etag": "\"146f6-716oE2FR4YRiteB2IASmInJybc8\"",
    "mtime": "2023-03-09T16:04:34.439Z",
    "size": 83702,
    "path": "../../.output/public/img/kvanttelekomBrend/PC/kvanttelekomBrend-page.webp"
  },
  "/img/kvanttelekomCite/JPG/kvanttelekomCite-page-intro.png": {
    "type": "image/png",
    "etag": "\"18299-NICcDW3hYcRQIRokI42KmE83uMk\"",
    "mtime": "2023-03-09T16:04:34.438Z",
    "size": 98969,
    "path": "../../.output/public/img/kvanttelekomCite/JPG/kvanttelekomCite-page-intro.png"
  },
  "/img/kvanttelekomCite/JPG/kvanttelekomCite-page.png": {
    "type": "image/png",
    "etag": "\"18299-NICcDW3hYcRQIRokI42KmE83uMk\"",
    "mtime": "2023-03-09T16:04:34.436Z",
    "size": 98969,
    "path": "../../.output/public/img/kvanttelekomCite/JPG/kvanttelekomCite-page.png"
  },
  "/img/izenbot/Video/video-01.mp4": {
    "type": "video/mp4",
    "etag": "\"412279-WK0KefH/Frwjmh+wJmgVKLYBByc\"",
    "mtime": "2023-03-09T16:04:34.505Z",
    "size": 4268665,
    "path": "../../.output/public/img/izenbot/Video/video-01.mp4"
  },
  "/img/izenbot/Video/video-02.mp4": {
    "type": "video/mp4",
    "etag": "\"8e37c4-XquFyLhlqbZ4EFsGozegOONJV/4\"",
    "mtime": "2023-03-09T16:04:34.496Z",
    "size": 9320388,
    "path": "../../.output/public/img/izenbot/Video/video-02.mp4"
  },
  "/img/kvanttelekomCite/Mobile/kvanttelekomCite-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"17cd6-cCeMIDIZONMVIrwDeAW0hCHz2Dg\"",
    "mtime": "2023-03-09T16:04:34.435Z",
    "size": 97494,
    "path": "../../.output/public/img/kvanttelekomCite/Mobile/kvanttelekomCite-page-intro.webp"
  },
  "/img/kvanttelekomCite/Mobile/kvanttelekomCite-page.webp": {
    "type": "image/webp",
    "etag": "\"614e-vhI56jtOFnuJb633S6fpHs7QrnY\"",
    "mtime": "2023-03-09T16:04:34.434Z",
    "size": 24910,
    "path": "../../.output/public/img/kvanttelekomCite/Mobile/kvanttelekomCite-page.webp"
  },
  "/img/kvanttelekomCite/PC/kvanttelekomCite-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"39c4a-gjsIFOpwGuEsK07Ijg2tV31+vt8\"",
    "mtime": "2023-03-09T16:04:34.433Z",
    "size": 236618,
    "path": "../../.output/public/img/kvanttelekomCite/PC/kvanttelekomCite-page-intro.webp"
  },
  "/img/kvanttelekomCite/PC/kvanttelekomCite-page.webp": {
    "type": "image/webp",
    "etag": "\"c770-kF8rvFLST/HedUBAA5n5XYUy63I\"",
    "mtime": "2023-03-09T16:04:34.427Z",
    "size": 51056,
    "path": "../../.output/public/img/kvanttelekomCite/PC/kvanttelekomCite-page.webp"
  },
  "/img/marusya/JPG/marusya-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"116e4-E7VbIfXp8mxsZVjz7a9XAebUMSA\"",
    "mtime": "2023-03-09T16:04:34.418Z",
    "size": 71396,
    "path": "../../.output/public/img/marusya/JPG/marusya-page-img-01.jpg"
  },
  "/img/marusya/JPG/marusya-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"41ac5-O9n3lzcW7fIZtiAEqOcMDFdCJmA\"",
    "mtime": "2023-03-09T16:04:34.417Z",
    "size": 268997,
    "path": "../../.output/public/img/marusya/JPG/marusya-page-img-02.jpg"
  },
  "/img/marusya/JPG/marusya-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"407f4-cUSQ/GV2juHmxvNDi4BzoQ+ldpI\"",
    "mtime": "2023-03-09T16:04:34.416Z",
    "size": 264180,
    "path": "../../.output/public/img/marusya/JPG/marusya-page-img-03.jpg"
  },
  "/img/marusya/JPG/marusya-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"113d0-P25nZKkMsCLERpFIzDVCHPzym+8\"",
    "mtime": "2023-03-09T16:04:34.414Z",
    "size": 70608,
    "path": "../../.output/public/img/marusya/JPG/marusya-page-img-04.jpg"
  },
  "/img/marusya/JPG/marusya-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"4243a-k6nxVcVfTp6ZMHvvq6K/GopL4SA\"",
    "mtime": "2023-03-09T16:04:34.414Z",
    "size": 271418,
    "path": "../../.output/public/img/marusya/JPG/marusya-page-img-05.jpg"
  },
  "/img/marusya/JPG/marusya-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"37a75-ILEcL6H+w58mg03He9n59pZGpzY\"",
    "mtime": "2023-03-09T16:04:34.412Z",
    "size": 227957,
    "path": "../../.output/public/img/marusya/JPG/marusya-page-img-06.jpg"
  },
  "/img/marusya/JPG/marusya-page-intro.png": {
    "type": "image/png",
    "etag": "\"2ea95-JQzPTaNhMUVTFfGSutIvlblkYjM\"",
    "mtime": "2023-03-09T16:04:34.411Z",
    "size": 191125,
    "path": "../../.output/public/img/marusya/JPG/marusya-page-intro.png"
  },
  "/img/marusya/JPG/marusya-page.png": {
    "type": "image/png",
    "etag": "\"2ea95-JQzPTaNhMUVTFfGSutIvlblkYjM\"",
    "mtime": "2023-03-09T16:04:34.410Z",
    "size": 191125,
    "path": "../../.output/public/img/marusya/JPG/marusya-page.png"
  },
  "/img/marusya/Mobile/marusya-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"4ef4-X8dKdXBz25jimOx0BN45yFctkog\"",
    "mtime": "2023-03-09T16:04:34.409Z",
    "size": 20212,
    "path": "../../.output/public/img/marusya/Mobile/marusya-page-img-01.webp"
  },
  "/img/marusya/Mobile/marusya-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"a472-id1codkEqwWjh3s/8L4YW/4yfME\"",
    "mtime": "2023-03-09T16:04:34.408Z",
    "size": 42098,
    "path": "../../.output/public/img/marusya/Mobile/marusya-page-img-02.webp"
  },
  "/img/marusya/Mobile/marusya-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"7720-szBrgAp4AOtqZn2+S8SwxjKQtmM\"",
    "mtime": "2023-03-09T16:04:34.408Z",
    "size": 30496,
    "path": "../../.output/public/img/marusya/Mobile/marusya-page-img-03.webp"
  },
  "/img/marusya/Mobile/marusya-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"3772-bG8aQXLcnoQj8cGIQFG3j+NbkkU\"",
    "mtime": "2023-03-09T16:04:34.408Z",
    "size": 14194,
    "path": "../../.output/public/img/marusya/Mobile/marusya-page-img-04.webp"
  },
  "/img/marusya/Mobile/marusya-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"93ae-FLGei4fqgIdHrLzqEtQfPaGQ3ws\"",
    "mtime": "2023-03-09T16:04:34.407Z",
    "size": 37806,
    "path": "../../.output/public/img/marusya/Mobile/marusya-page-img-05.webp"
  },
  "/img/marusya/Mobile/marusya-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"60cc-gAjvXohrvsytZDG3rS5qEbC0rAU\"",
    "mtime": "2023-03-09T16:04:34.407Z",
    "size": 24780,
    "path": "../../.output/public/img/marusya/Mobile/marusya-page-img-06.webp"
  },
  "/img/marusya/Mobile/marusya-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"24d30-hWrA2UBFf6C7nayyMvqawef899A\"",
    "mtime": "2023-03-09T16:04:34.407Z",
    "size": 150832,
    "path": "../../.output/public/img/marusya/Mobile/marusya-page-intro.webp"
  },
  "/img/marusya/Mobile/marusya-page.webp": {
    "type": "image/webp",
    "etag": "\"7d30-vsJxvmfyfsTqOwBfDzCrN2Sn+LU\"",
    "mtime": "2023-03-09T16:04:34.406Z",
    "size": 32048,
    "path": "../../.output/public/img/marusya/Mobile/marusya-page.webp"
  },
  "/img/marusya/PC/marusya-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"2e7-1yw1aAGE8jCenMQs8+W6oQRM3ok\"",
    "mtime": "2023-03-09T16:04:34.405Z",
    "size": 743,
    "path": "../../.output/public/img/marusya/PC/marusya-page-icon.svg"
  },
  "/img/marusya/PC/marusya-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"f322-st0HZKNAmkDwWwyP3MbmbBennJM\"",
    "mtime": "2023-03-09T16:04:34.405Z",
    "size": 62242,
    "path": "../../.output/public/img/marusya/PC/marusya-page-img-01.webp"
  },
  "/img/marusya/PC/marusya-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"25c20-+ZNWBgDxQzDMlM1SAAE35gG65sE\"",
    "mtime": "2023-03-09T16:04:34.404Z",
    "size": 154656,
    "path": "../../.output/public/img/marusya/PC/marusya-page-img-02.webp"
  },
  "/img/marusya/PC/marusya-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"23bd0-B6x1a2I1BmWtdd31pcBY1D/Ipgw\"",
    "mtime": "2023-03-09T16:04:34.402Z",
    "size": 146384,
    "path": "../../.output/public/img/marusya/PC/marusya-page-img-03.webp"
  },
  "/img/marusya/PC/marusya-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"da70-j1Srsew89Sh6eIYYelI9w6MYsww\"",
    "mtime": "2023-03-09T16:04:34.401Z",
    "size": 55920,
    "path": "../../.output/public/img/marusya/PC/marusya-page-img-04.webp"
  },
  "/img/marusya/PC/marusya-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"228ae-mlPLhW/sAxXZfBTY6whiqeNg2XE\"",
    "mtime": "2023-03-09T16:04:34.401Z",
    "size": 141486,
    "path": "../../.output/public/img/marusya/PC/marusya-page-img-05.webp"
  },
  "/img/marusya/PC/marusya-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"20a1c-uomeknNr+A7VjatHdF3d4wIuaNQ\"",
    "mtime": "2023-03-09T16:04:34.399Z",
    "size": 133660,
    "path": "../../.output/public/img/marusya/PC/marusya-page-img-06.webp"
  },
  "/img/marusya/PC/marusya-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"61fcc-zfrawc3c8w+pLbqZVeP/fDd/EKM\"",
    "mtime": "2023-03-09T16:04:34.398Z",
    "size": 401356,
    "path": "../../.output/public/img/marusya/PC/marusya-page-intro.webp"
  },
  "/img/marusya/PC/marusya-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"9d4-FCv4VCExmf425Ge+pX5/sIb0GPU\"",
    "mtime": "2023-03-09T16:04:34.397Z",
    "size": 2516,
    "path": "../../.output/public/img/marusya/PC/marusya-page-logo.svg"
  },
  "/img/marusya/PC/marusya-page.webp": {
    "type": "image/webp",
    "etag": "\"12158-2U9yj8xJ6vrYLZofToftzF7IVIU\"",
    "mtime": "2023-03-09T16:04:34.397Z",
    "size": 74072,
    "path": "../../.output/public/img/marusya/PC/marusya-page.webp"
  },
  "/img/mobdebut/JPG/mobdebut-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"b5ec-aHaGKNcYFnRHYgnsJhpxQDOJC98\"",
    "mtime": "2023-03-09T16:04:34.396Z",
    "size": 46572,
    "path": "../../.output/public/img/mobdebut/JPG/mobdebut-page-img-01.jpg"
  },
  "/img/mobdebut/JPG/mobdebut-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"18ff-thvfg6kU2M54M6AYJUsNSt3vU/8\"",
    "mtime": "2023-03-09T16:04:34.395Z",
    "size": 6399,
    "path": "../../.output/public/img/mobdebut/JPG/mobdebut-page-img-02.jpg"
  },
  "/img/mobdebut/JPG/mobdebut-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"16a5-hD7NySIOfASua1oH7Wh8v7kISA8\"",
    "mtime": "2023-03-09T16:04:34.395Z",
    "size": 5797,
    "path": "../../.output/public/img/mobdebut/JPG/mobdebut-page-img-03.jpg"
  },
  "/img/mobdebut/JPG/mobdebut-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"197e-M8Qk15qK6ciM9d/XZk2Lr/sEbZQ\"",
    "mtime": "2023-03-09T16:04:34.395Z",
    "size": 6526,
    "path": "../../.output/public/img/mobdebut/JPG/mobdebut-page-img-04.jpg"
  },
  "/img/mobdebut/JPG/mobdebut-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"150c-HLdBxPJZOWciuaGSEic09Pg3aGY\"",
    "mtime": "2023-03-09T16:04:34.395Z",
    "size": 5388,
    "path": "../../.output/public/img/mobdebut/JPG/mobdebut-page-img-05.jpg"
  },
  "/img/mobdebut/JPG/mobdebut-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"afa0-ERcRcbsBkrEx2jMioU5gOSWyIwE\"",
    "mtime": "2023-03-09T16:04:34.394Z",
    "size": 44960,
    "path": "../../.output/public/img/mobdebut/JPG/mobdebut-page-img-06.jpg"
  },
  "/img/mobdebut/JPG/mobdebut-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"a0d1-Ve6vq4NCPVGRyMBYsGvCvurkEK8\"",
    "mtime": "2023-03-09T16:04:34.394Z",
    "size": 41169,
    "path": "../../.output/public/img/mobdebut/JPG/mobdebut-page-img-07.jpg"
  },
  "/img/mobdebut/JPG/mobdebut-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"440f-DwqUGJuFeUVlzaSIi2+Ld/saJ3I\"",
    "mtime": "2023-03-09T16:04:34.393Z",
    "size": 17423,
    "path": "../../.output/public/img/mobdebut/JPG/mobdebut-page-img-08.jpg"
  },
  "/img/mobdebut/JPG/mobdebut-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"354e-hokDaLgv7LMQX6e4gOq8A94Yw60\"",
    "mtime": "2023-03-09T16:04:34.393Z",
    "size": 13646,
    "path": "../../.output/public/img/mobdebut/JPG/mobdebut-page-img-09.jpg"
  },
  "/img/mobdebut/JPG/mobdebut-page-img-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"2f95-zx+asyzRzVWtQmGeOn3WpnmK/Fc\"",
    "mtime": "2023-03-09T16:04:34.393Z",
    "size": 12181,
    "path": "../../.output/public/img/mobdebut/JPG/mobdebut-page-img-10.jpg"
  },
  "/img/mobdebut/JPG/mobdebut-page-intro.png": {
    "type": "image/png",
    "etag": "\"35f97-1He90ubGrbUFxkk2PZll7U/aPjM\"",
    "mtime": "2023-03-09T16:04:34.392Z",
    "size": 221079,
    "path": "../../.output/public/img/mobdebut/JPG/mobdebut-page-intro.png"
  },
  "/img/mobdebut/JPG/mobdebut-page.png": {
    "type": "image/png",
    "etag": "\"35f97-1He90ubGrbUFxkk2PZll7U/aPjM\"",
    "mtime": "2023-03-09T16:04:34.385Z",
    "size": 221079,
    "path": "../../.output/public/img/mobdebut/JPG/mobdebut-page.png"
  },
  "/img/mobdebut/Mobile/mobdebut-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"385a-/Z3PVGZy0yZC3UIRXTgSooqEGfg\"",
    "mtime": "2023-03-09T16:04:34.383Z",
    "size": 14426,
    "path": "../../.output/public/img/mobdebut/Mobile/mobdebut-page-img-01.webp"
  },
  "/img/mobdebut/Mobile/mobdebut-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"16f2-byIf4Sl8j7fXNdj1C1RdE5d0F1Q\"",
    "mtime": "2023-03-09T16:04:34.383Z",
    "size": 5874,
    "path": "../../.output/public/img/mobdebut/Mobile/mobdebut-page-img-02.webp"
  },
  "/img/mobdebut/Mobile/mobdebut-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"1674-RXG0m/J0UY9uR5Gi8hH0K34GyDE\"",
    "mtime": "2023-03-09T16:04:34.383Z",
    "size": 5748,
    "path": "../../.output/public/img/mobdebut/Mobile/mobdebut-page-img-03.webp"
  },
  "/img/mobdebut/Mobile/mobdebut-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"16e0-fLQq1aOejbAmJhGJk0aKLFwqvHk\"",
    "mtime": "2023-03-09T16:04:34.383Z",
    "size": 5856,
    "path": "../../.output/public/img/mobdebut/Mobile/mobdebut-page-img-04.webp"
  },
  "/img/mobdebut/Mobile/mobdebut-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"1410-RouPzz7ZfhxoA7D5T6Qa3FLyA/M\"",
    "mtime": "2023-03-09T16:04:34.382Z",
    "size": 5136,
    "path": "../../.output/public/img/mobdebut/Mobile/mobdebut-page-img-05.webp"
  },
  "/img/mobdebut/Mobile/mobdebut-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"1baa-NdaMyk9c4OsQwVg86YQBvJIZiVQ\"",
    "mtime": "2023-03-09T16:04:34.382Z",
    "size": 7082,
    "path": "../../.output/public/img/mobdebut/Mobile/mobdebut-page-img-06.webp"
  },
  "/img/mobdebut/Mobile/mobdebut-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"2ee4-KpdNuF/P6/6M16XyX5PVSvSfB/U\"",
    "mtime": "2023-03-09T16:04:34.382Z",
    "size": 12004,
    "path": "../../.output/public/img/mobdebut/Mobile/mobdebut-page-img-07.webp"
  },
  "/img/mobdebut/Mobile/mobdebut-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"2a6c-dGc0OMaOa5np4KXKWmsyuSxtqCA\"",
    "mtime": "2023-03-09T16:04:34.382Z",
    "size": 10860,
    "path": "../../.output/public/img/mobdebut/Mobile/mobdebut-page-img-08.webp"
  },
  "/img/mobdebut/Mobile/mobdebut-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"1fc2-SfrOl1ZUtNaAo5OLwX7lPOjoOH4\"",
    "mtime": "2023-03-09T16:04:34.382Z",
    "size": 8130,
    "path": "../../.output/public/img/mobdebut/Mobile/mobdebut-page-img-09.webp"
  },
  "/img/mobdebut/Mobile/mobdebut-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"1ad8-DmM3c28Z5z29OAhQ40ttPeOqBYc\"",
    "mtime": "2023-03-09T16:04:34.381Z",
    "size": 6872,
    "path": "../../.output/public/img/mobdebut/Mobile/mobdebut-page-img-10.webp"
  },
  "/img/mobdebut/Mobile/mobdebut-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"2f03a-4keegP4ltWozPIdcTvqOOcd2bXk\"",
    "mtime": "2023-03-09T16:04:34.381Z",
    "size": 192570,
    "path": "../../.output/public/img/mobdebut/Mobile/mobdebut-page-intro.webp"
  },
  "/img/mobdebut/Mobile/mobdebut-page.webp": {
    "type": "image/webp",
    "etag": "\"4fe8-MeBEKSNLkaD/uYHZ0XbygS7JcFI\"",
    "mtime": "2023-03-09T16:04:34.380Z",
    "size": 20456,
    "path": "../../.output/public/img/mobdebut/Mobile/mobdebut-page.webp"
  },
  "/img/mobdebut/PC/mobdebut-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"2dd-yXT+3aU1XL7qxQiQuXXJhAHyQEs\"",
    "mtime": "2023-03-09T16:04:34.380Z",
    "size": 733,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-icon.svg"
  },
  "/img/mobdebut/PC/mobdebut-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"81ae-YoKfilh2DmowKyD+s9b0FWL3bE0\"",
    "mtime": "2023-03-09T16:04:34.379Z",
    "size": 33198,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-img-01.webp"
  },
  "/img/mobdebut/PC/mobdebut-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"1026-sHOOzpUOlGHOv/PVphlXjvc/Ixk\"",
    "mtime": "2023-03-09T16:04:34.379Z",
    "size": 4134,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-img-02.webp"
  },
  "/img/mobdebut/PC/mobdebut-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"f62-zpGKxvrEw/pica01R5BY24Jh5Bk\"",
    "mtime": "2023-03-09T16:04:34.379Z",
    "size": 3938,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-img-03.webp"
  },
  "/img/mobdebut/PC/mobdebut-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"fb2-8vLLPgOMfAJlo4UCF0zuepJyYJk\"",
    "mtime": "2023-03-09T16:04:34.379Z",
    "size": 4018,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-img-04.webp"
  },
  "/img/mobdebut/PC/mobdebut-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"d6a-kCZtsS9VCua7Ty4Jla/WgYCPTe8\"",
    "mtime": "2023-03-09T16:04:34.379Z",
    "size": 3434,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-img-05.webp"
  },
  "/img/mobdebut/PC/mobdebut-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"717c-qkgfj6gfSO7puf99S+GMJlNGxxQ\"",
    "mtime": "2023-03-09T16:04:34.378Z",
    "size": 29052,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-img-06.webp"
  },
  "/img/mobdebut/PC/mobdebut-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"673a-82Vdnnj3CZ6ietMM6jntjVrghA8\"",
    "mtime": "2023-03-09T16:04:34.378Z",
    "size": 26426,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-img-07.webp"
  },
  "/img/mobdebut/PC/mobdebut-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"2a62-dPTJJKu3695dZwA7sbHb/psWnDk\"",
    "mtime": "2023-03-09T16:04:34.378Z",
    "size": 10850,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-img-08.webp"
  },
  "/img/mobdebut/PC/mobdebut-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"1f4a-ZwQnrzjFgS2OHkwQvzAxs/SW2AU\"",
    "mtime": "2023-03-09T16:04:34.377Z",
    "size": 8010,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-img-09.webp"
  },
  "/img/mobdebut/PC/mobdebut-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"19b0-39fSoj1Lw8YqZ/gm/ykWWEcq6WI\"",
    "mtime": "2023-03-09T16:04:34.376Z",
    "size": 6576,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-img-10.webp"
  },
  "/img/mobdebut/PC/mobdebut-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"947fc-AeZEWLLEThS4xWa/gU72aoWSBZk\"",
    "mtime": "2023-03-09T16:04:34.376Z",
    "size": 608252,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-intro.webp"
  },
  "/img/mobdebut/PC/mobdebut-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"db8-P/N3I3XJQ26XrpfLN7j5CbBM6hE\"",
    "mtime": "2023-03-09T16:04:34.375Z",
    "size": 3512,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page-logo.svg"
  },
  "/img/mobdebut/PC/mobdebut-page.webp": {
    "type": "image/webp",
    "etag": "\"a974-V1gq1NDPin4LmhMWZtisyrbMsvU\"",
    "mtime": "2023-03-09T16:04:34.374Z",
    "size": 43380,
    "path": "../../.output/public/img/mobdebut/PC/mobdebut-page.webp"
  },
  "/img/moltengrass/JPG/moltengrass-page-intro.png": {
    "type": "image/png",
    "etag": "\"1b377-ub9LD0Cz5iyyXXzeX4HUxRvAfyA\"",
    "mtime": "2023-03-09T16:04:34.373Z",
    "size": 111479,
    "path": "../../.output/public/img/moltengrass/JPG/moltengrass-page-intro.png"
  },
  "/img/moltengrass/JPG/moltengrass-page.png": {
    "type": "image/png",
    "etag": "\"1b507-i6J3aUE9DO5ixyvqsbwUiHXjRxo\"",
    "mtime": "2023-03-09T16:04:34.373Z",
    "size": 111879,
    "path": "../../.output/public/img/moltengrass/JPG/moltengrass-page.png"
  },
  "/img/moltengrass/Mobile/moltengrass-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"1b126-JQfdpORTYhCnt/++LNhC27XZwT4\"",
    "mtime": "2023-03-09T16:04:34.372Z",
    "size": 110886,
    "path": "../../.output/public/img/moltengrass/Mobile/moltengrass-page-intro.webp"
  },
  "/img/moltengrass/Mobile/moltengrass-page.webp": {
    "type": "image/webp",
    "etag": "\"6d28-aHa7GY9ecIwSHT6FhruGBH2aMuE\"",
    "mtime": "2023-03-09T16:04:34.372Z",
    "size": 27944,
    "path": "../../.output/public/img/moltengrass/Mobile/moltengrass-page.webp"
  },
  "/img/moltengrass/PC/moltengrass-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"508d0-bmY/91HwS5jxIi6jpTWyYIaYQsI\"",
    "mtime": "2023-03-09T16:04:34.371Z",
    "size": 329936,
    "path": "../../.output/public/img/moltengrass/PC/moltengrass-page-intro.webp"
  },
  "/img/moltengrass/PC/moltengrass-page.webp": {
    "type": "image/webp",
    "etag": "\"eeaa-hdJnxMxJtc9KlYv0Vrn1jokM9YI\"",
    "mtime": "2023-03-09T16:04:34.369Z",
    "size": 61098,
    "path": "../../.output/public/img/moltengrass/PC/moltengrass-page.webp"
  },
  "/img/motorika/JPG/motorika-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"2614-AuJtbRjHeIrdvqMuJyFZc04mgiw\"",
    "mtime": "2023-03-09T16:04:34.367Z",
    "size": 9748,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-01.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d3e-2JzgwBNdGvWvOrj+bAdzBxqXiVE\"",
    "mtime": "2023-03-09T16:04:34.367Z",
    "size": 7486,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-02.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"2294-wQZApsDLsNfrgQfQBmVzWRC8Tvc\"",
    "mtime": "2023-03-09T16:04:34.367Z",
    "size": 8852,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-03.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"216d-DBix94WmEwsuWcZjYn9uIacBiHA\"",
    "mtime": "2023-03-09T16:04:34.367Z",
    "size": 8557,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-04.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c54-5uKUzhA19zv+bidyr0a9owiAj4w\"",
    "mtime": "2023-03-09T16:04:34.366Z",
    "size": 7252,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-05.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a7e-2s8X8xxtIJpfqkzZhk+hp8vsr2E\"",
    "mtime": "2023-03-09T16:04:34.366Z",
    "size": 10878,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-06.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"21b9-/Vq/9o+od1IGxhqJGnP6raDjpCc\"",
    "mtime": "2023-03-09T16:04:34.366Z",
    "size": 8633,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-07.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"3115-uP7TcNo2HRXGmccDiZd93kNAgpg\"",
    "mtime": "2023-03-09T16:04:34.366Z",
    "size": 12565,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-08.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"542fc-mnpNUEUOBgQoqdIIKq1+U71YcHE\"",
    "mtime": "2023-03-09T16:04:34.365Z",
    "size": 344828,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-09.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"f031-bzRF8ai5s+FQQMBNUPs3dja5gEQ\"",
    "mtime": "2023-03-09T16:04:34.364Z",
    "size": 61489,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-10.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-11.jpg": {
    "type": "image/jpeg",
    "etag": "\"9a52-BTJA5qeEzoClzeqdD2nB6ONIMzo\"",
    "mtime": "2023-03-09T16:04:34.364Z",
    "size": 39506,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-11.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-12.jpg": {
    "type": "image/jpeg",
    "etag": "\"22ea-CTbmsoxdxGHbrtmaf4hOX3tSWRk\"",
    "mtime": "2023-03-09T16:04:34.363Z",
    "size": 8938,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-12.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-13.jpg": {
    "type": "image/jpeg",
    "etag": "\"3b72-gC2E8lHiyOqeBZ6dRN79rXchjOc\"",
    "mtime": "2023-03-09T16:04:34.363Z",
    "size": 15218,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-13.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-14.jpg": {
    "type": "image/jpeg",
    "etag": "\"11b65-4q4n1D9/4/vIfLufGwVygF9XVKY\"",
    "mtime": "2023-03-09T16:04:34.363Z",
    "size": 72549,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-14.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-15.jpg": {
    "type": "image/jpeg",
    "etag": "\"adb2-2H5PNlHWIRS4TJHGFYyKmQEpg+s\"",
    "mtime": "2023-03-09T16:04:34.362Z",
    "size": 44466,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-15.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-16.jpg": {
    "type": "image/jpeg",
    "etag": "\"3a0e-XV4uORrylP6UKvgJco5oNzbY/vY\"",
    "mtime": "2023-03-09T16:04:34.362Z",
    "size": 14862,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-16.jpg"
  },
  "/img/motorika/JPG/motorika-page-img-17.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a46d-TEMYC1tfBVwHrOUHWVutNqnKEoQ\"",
    "mtime": "2023-03-09T16:04:34.361Z",
    "size": 107629,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-img-17.jpg"
  },
  "/img/motorika/JPG/motorika-page-intro.png": {
    "type": "image/png",
    "etag": "\"1e42d-j3rWX7nSWwz0m2DtOPZ1Pe9qUiI\"",
    "mtime": "2023-03-09T16:04:34.361Z",
    "size": 123949,
    "path": "../../.output/public/img/motorika/JPG/motorika-page-intro.png"
  },
  "/img/motorika/JPG/motorika-page.png": {
    "type": "image/png",
    "etag": "\"1e42d-j3rWX7nSWwz0m2DtOPZ1Pe9qUiI\"",
    "mtime": "2023-03-09T16:04:34.360Z",
    "size": 123949,
    "path": "../../.output/public/img/motorika/JPG/motorika-page.png"
  },
  "/img/motorika/Mobile/motorika-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"2fe6-fTT4LiSqxGaRXa3fgVR2EFEhR+4\"",
    "mtime": "2023-03-09T16:04:34.358Z",
    "size": 12262,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-01.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"29ca-xkIKve96WotAp2HraaGUj7KXNos\"",
    "mtime": "2023-03-09T16:04:34.358Z",
    "size": 10698,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-02.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"29c8-TUSbr8Krbp7jHYoH4Yio9kCot5c\"",
    "mtime": "2023-03-09T16:04:34.358Z",
    "size": 10696,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-03.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"2848-gFRJjGGNbAz8Bwud4QU+3IqHRSs\"",
    "mtime": "2023-03-09T16:04:34.357Z",
    "size": 10312,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-04.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"2446-MHd0Fyd1Ow9Gz5JhayTHDLnqI5U\"",
    "mtime": "2023-03-09T16:04:34.357Z",
    "size": 9286,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-05.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"3c08-aV8bKem+KbuRl2CBJjWCLNHxCWk\"",
    "mtime": "2023-03-09T16:04:34.356Z",
    "size": 15368,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-06.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"3600-5CR23jxPG3FBMX0RSG/VbA7c++I\"",
    "mtime": "2023-03-09T16:04:34.356Z",
    "size": 13824,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-07.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"4bd6-z1x8tFiPUE3dq7pG0DAvBw6FqAc\"",
    "mtime": "2023-03-09T16:04:34.352Z",
    "size": 19414,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-08.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"a794-yQWK4bIVrjnwVoZQrtz4E6Klwus\"",
    "mtime": "2023-03-09T16:04:34.352Z",
    "size": 42900,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-09.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"cd86-sf5l7V2+3TgBQI/eGKnYBQdjd44\"",
    "mtime": "2023-03-09T16:04:34.351Z",
    "size": 52614,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-10.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"6286-h8E/3eqXmwjeKthg3H4qnOshifQ\"",
    "mtime": "2023-03-09T16:04:34.351Z",
    "size": 25222,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-11.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"1a08-+prUIufiZlZFsY/XbU3RlPKR35M\"",
    "mtime": "2023-03-09T16:04:34.350Z",
    "size": 6664,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-12.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"3284-MP+qtk7pznD5q4+I/T/K9Ocqlxg\"",
    "mtime": "2023-03-09T16:04:34.350Z",
    "size": 12932,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-13.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-14.webp": {
    "type": "image/webp",
    "etag": "\"317a-YlYq9/k42HsLOs/yvCeJFUNRgaw\"",
    "mtime": "2023-03-09T16:04:34.350Z",
    "size": 12666,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-14.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-15.webp": {
    "type": "image/webp",
    "etag": "\"52b4-HNv8Ynle0NQ+7jW0rh/aGfWEW+I\"",
    "mtime": "2023-03-09T16:04:34.349Z",
    "size": 21172,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-15.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-16.webp": {
    "type": "image/webp",
    "etag": "\"14aa-J13UHPxk/uxlUJd36qsYVv6OoSA\"",
    "mtime": "2023-03-09T16:04:34.349Z",
    "size": 5290,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-16.webp"
  },
  "/img/motorika/Mobile/motorika-page-img-17.webp": {
    "type": "image/webp",
    "etag": "\"8d9a-aJicnWfeozLzSdqYz/M/PiH6OjU\"",
    "mtime": "2023-03-09T16:04:34.349Z",
    "size": 36250,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-img-17.webp"
  },
  "/img/motorika/Mobile/motorika-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"144c8-N6I9/+J/seqf67yrlFjGFnQtcMM\"",
    "mtime": "2023-03-09T16:04:34.349Z",
    "size": 83144,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page-intro.webp"
  },
  "/img/motorika/Mobile/motorika-page.webp": {
    "type": "image/webp",
    "etag": "\"4e1a-fy1Dndnssm4XZW0Ar4T1Dg9UaBM\"",
    "mtime": "2023-03-09T16:04:34.348Z",
    "size": 19994,
    "path": "../../.output/public/img/motorika/Mobile/motorika-page.webp"
  },
  "/img/muzaamanita/JPG/muzaamanita-page-intro.png": {
    "type": "image/png",
    "etag": "\"1e075-+93cb3H+DnB8d7/RDem9w1r/DS4\"",
    "mtime": "2023-03-09T16:04:34.269Z",
    "size": 122997,
    "path": "../../.output/public/img/muzaamanita/JPG/muzaamanita-page-intro.png"
  },
  "/img/motorika/PC/motorika-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"4ed-QPGADpWvGYL74xlnt4uWtyPjNU0\"",
    "mtime": "2023-03-09T16:04:34.346Z",
    "size": 1261,
    "path": "../../.output/public/img/motorika/PC/motorika-page-icon.svg"
  },
  "/img/motorika/PC/motorika-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"18da-e09xcFm1Oi/3lVmHWlBxXo2yIzE\"",
    "mtime": "2023-03-09T16:04:34.346Z",
    "size": 6362,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-01.webp"
  },
  "/img/motorika/PC/motorika-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"14ac-4jyXR8oxX/zAwjgKptpgI63vN2I\"",
    "mtime": "2023-03-09T16:04:34.346Z",
    "size": 5292,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-02.webp"
  },
  "/img/motorika/PC/motorika-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"1592-mDC/5OgRBzEtchMJXui5iYzOX7c\"",
    "mtime": "2023-03-09T16:04:34.345Z",
    "size": 5522,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-03.webp"
  },
  "/img/motorika/PC/motorika-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"16f6-7ZYhIjvGr7WxlBIBd+jsbhCiHUI\"",
    "mtime": "2023-03-09T16:04:34.345Z",
    "size": 5878,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-04.webp"
  },
  "/img/motorika/PC/motorika-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"1380-/tO+PrMH9lauAkIMc2pEyn5ZpgU\"",
    "mtime": "2023-03-09T16:04:34.345Z",
    "size": 4992,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-05.webp"
  },
  "/img/motorika/PC/motorika-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"1df0-Xp5WiFe+5Q+1GplFPaXZwjA7bXM\"",
    "mtime": "2023-03-09T16:04:34.345Z",
    "size": 7664,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-06.webp"
  },
  "/img/motorika/PC/motorika-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"1b94-taJU1KId6SQ97fzH6I/dCBW7eSo\"",
    "mtime": "2023-03-09T16:04:34.344Z",
    "size": 7060,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-07.webp"
  },
  "/img/motorika/PC/motorika-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"25ca-/n+QSe+dnfwjjP3P99KzLAzP0fw\"",
    "mtime": "2023-03-09T16:04:34.343Z",
    "size": 9674,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-08.webp"
  },
  "/img/motorika/PC/motorika-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"246a8-QJ4N7s+yQMUss5orzO6ZMuHvj7w\"",
    "mtime": "2023-03-09T16:04:34.343Z",
    "size": 149160,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-09.webp"
  },
  "/img/motorika/PC/motorika-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"98e8-L5TERYKpbWdvaaiNK3QtyGNn+a0\"",
    "mtime": "2023-03-09T16:04:34.342Z",
    "size": 39144,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-10.webp"
  },
  "/img/motorika/PC/motorika-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"47b0-3Dpreid3UZrtKaaz1shP7T0r3+g\"",
    "mtime": "2023-03-09T16:04:34.341Z",
    "size": 18352,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-11.webp"
  },
  "/img/motorika/PC/motorika-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"13c6-WzJGk4cvqHWN2WqPW4+GDpzwMFo\"",
    "mtime": "2023-03-09T16:04:34.337Z",
    "size": 5062,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-12.webp"
  },
  "/img/motorika/PC/motorika-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"2484-vDuEp/pbsXPdVxIzcLB4Kktyx6k\"",
    "mtime": "2023-03-09T16:04:34.332Z",
    "size": 9348,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-13.webp"
  },
  "/img/motorika/PC/motorika-page-img-14.webp": {
    "type": "image/webp",
    "etag": "\"ad5a-Vnk04C7LsnWy7wt+sCAh0SCr37A\"",
    "mtime": "2023-03-09T16:04:34.332Z",
    "size": 44378,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-14.webp"
  },
  "/img/motorika/PC/motorika-page-img-15.webp": {
    "type": "image/webp",
    "etag": "\"9936-kPHvQInKdCmCBIBPMeFd9r7SdLI\"",
    "mtime": "2023-03-09T16:04:34.330Z",
    "size": 39222,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-15.webp"
  },
  "/img/motorika/PC/motorika-page-img-16.webp": {
    "type": "image/webp",
    "etag": "\"202e-veJIiZpRj/ACHJQOf2MJsCRzRO0\"",
    "mtime": "2023-03-09T16:04:34.326Z",
    "size": 8238,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-16.webp"
  },
  "/img/motorika/PC/motorika-page-img-17.webp": {
    "type": "image/webp",
    "etag": "\"10518-8porH1fdhGrDueJrMhMXCy+sQ30\"",
    "mtime": "2023-03-09T16:04:34.308Z",
    "size": 66840,
    "path": "../../.output/public/img/motorika/PC/motorika-page-img-17.webp"
  },
  "/img/motorika/PC/motorika-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"35f6a-dz38I0v1uGzbebpkbWfLXHXv4yA\"",
    "mtime": "2023-03-09T16:04:34.307Z",
    "size": 221034,
    "path": "../../.output/public/img/motorika/PC/motorika-page-intro.webp"
  },
  "/img/motorika/PC/motorika-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"57f-/e1bpZL8Kvwv/4AvivN7h4TCaSg\"",
    "mtime": "2023-03-09T16:04:34.288Z",
    "size": 1407,
    "path": "../../.output/public/img/motorika/PC/motorika-page-logo.svg"
  },
  "/img/motorika/PC/motorika-page.webp": {
    "type": "image/webp",
    "etag": "\"a3d8-yzrJqinffFXsRuKRCB9GMHeLIFE\"",
    "mtime": "2023-03-09T16:04:34.271Z",
    "size": 41944,
    "path": "../../.output/public/img/motorika/PC/motorika-page.webp"
  },
  "/img/muzaamanita/Mobile/muzaamanita-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"22892-nXrZuOE5Ly9XZUUstdmZTK/EeZ4\"",
    "mtime": "2023-03-09T16:04:34.264Z",
    "size": 141458,
    "path": "../../.output/public/img/muzaamanita/Mobile/muzaamanita-page-intro.webp"
  },
  "/img/muzaamanita/PC/muzaamanita-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"5bad4-fsY6OFv3pqgcOHEk+GVbGT7qFuA\"",
    "mtime": "2023-03-09T16:04:34.264Z",
    "size": 375508,
    "path": "../../.output/public/img/muzaamanita/PC/muzaamanita-page-intro.webp"
  },
  "/img/naro/JPG/naro-page-intro.png": {
    "type": "image/png",
    "etag": "\"1267c-EAJHImDfr1Mke6Pjve4wapnL3lw\"",
    "mtime": "2023-03-09T16:04:34.262Z",
    "size": 75388,
    "path": "../../.output/public/img/naro/JPG/naro-page-intro.png"
  },
  "/img/naro/Mobile/naro-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"182cc-cy4DmT22Yv5+ABso8XxrHbECHHQ\"",
    "mtime": "2023-03-09T16:04:34.261Z",
    "size": 99020,
    "path": "../../.output/public/img/naro/Mobile/naro-page-intro.webp"
  },
  "/img/naro/PC/naro-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"39350-9UBEai9Lm6iJJng2hCe0IOrt8MQ\"",
    "mtime": "2023-03-09T16:04:34.261Z",
    "size": 234320,
    "path": "../../.output/public/img/naro/PC/naro-page-intro.webp"
  },
  "/img/oceanview/Mobile/oceanview-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"ac62-AhS78fP2Sg59Wa2wV3ap5c3wQWE\"",
    "mtime": "2023-03-09T16:04:34.252Z",
    "size": 44130,
    "path": "../../.output/public/img/oceanview/Mobile/oceanview-page-img-01.webp"
  },
  "/img/oceanview/Mobile/oceanview-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"44b0-vl9UKOvroA9dc4oMwiM95DEt3EE\"",
    "mtime": "2023-03-09T16:04:34.252Z",
    "size": 17584,
    "path": "../../.output/public/img/oceanview/Mobile/oceanview-page-img-02.webp"
  },
  "/img/oceanview/Mobile/oceanview-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"94c6-sipx2rxRrJhIyPDW/sBk+2GEkqA\"",
    "mtime": "2023-03-09T16:04:34.252Z",
    "size": 38086,
    "path": "../../.output/public/img/oceanview/Mobile/oceanview-page-img-03.webp"
  },
  "/img/oceanview/Mobile/oceanview-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"6e4a-XsJKIhllHdOr3kMVJv1EgNbik0Y\"",
    "mtime": "2023-03-09T16:04:34.252Z",
    "size": 28234,
    "path": "../../.output/public/img/oceanview/Mobile/oceanview-page-img-04.webp"
  },
  "/img/oceanview/Mobile/oceanview-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"4f50-hgSEFlSSBtBWBwd6LI/jZkg/lLI\"",
    "mtime": "2023-03-09T16:04:34.251Z",
    "size": 20304,
    "path": "../../.output/public/img/oceanview/Mobile/oceanview-page-img-05.webp"
  },
  "/img/oceanview/Mobile/oceanview-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"3d3b2-2fs4bOmzQnmqUNBGjstK7dOuKjU\"",
    "mtime": "2023-03-09T16:04:34.251Z",
    "size": 250802,
    "path": "../../.output/public/img/oceanview/Mobile/oceanview-page-intro.webp"
  },
  "/img/oceanview/Mobile/oceanview-page.webp": {
    "type": "image/webp",
    "etag": "\"f122-lgOFesc5DWqaC3mw4nZhcW4ADZA\"",
    "mtime": "2023-03-09T16:04:34.249Z",
    "size": 61730,
    "path": "../../.output/public/img/oceanview/Mobile/oceanview-page.webp"
  },
  "/img/oceanview/JPG/oceanview-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"31e0c-6Z8SiBYADs1an9TvXyJZHa56LX4\"",
    "mtime": "2023-03-09T16:04:34.259Z",
    "size": 204300,
    "path": "../../.output/public/img/oceanview/JPG/oceanview-page-img-01.jpg"
  },
  "/img/oceanview/JPG/oceanview-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ffdf-Me+pfNdjS8zEnOlElvGL2aV/eL8\"",
    "mtime": "2023-03-09T16:04:34.257Z",
    "size": 196575,
    "path": "../../.output/public/img/oceanview/JPG/oceanview-page-img-02.jpg"
  },
  "/img/oceanview/JPG/oceanview-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a8e7-ymB1/uvF4XrZb7LUAAuiG4kw4QQ\"",
    "mtime": "2023-03-09T16:04:34.257Z",
    "size": 108775,
    "path": "../../.output/public/img/oceanview/JPG/oceanview-page-img-03.jpg"
  },
  "/img/oceanview/JPG/oceanview-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"14e1b-KN15V5wsDMX6u0WhPJSXvI2m7yU\"",
    "mtime": "2023-03-09T16:04:34.256Z",
    "size": 85531,
    "path": "../../.output/public/img/oceanview/JPG/oceanview-page-img-04.jpg"
  },
  "/img/oceanview/JPG/oceanview-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"253c6-4p50LnqtaW9jaz6QHFzCBWxeeaw\"",
    "mtime": "2023-03-09T16:04:34.256Z",
    "size": 152518,
    "path": "../../.output/public/img/oceanview/JPG/oceanview-page-img-05.jpg"
  },
  "/img/oceanview/JPG/oceanview-page-intro.png": {
    "type": "image/png",
    "etag": "\"3caf0-kZHU3vyt6wobyd5giTP93ZPkiSQ\"",
    "mtime": "2023-03-09T16:04:34.255Z",
    "size": 248560,
    "path": "../../.output/public/img/oceanview/JPG/oceanview-page-intro.png"
  },
  "/img/oceanview/JPG/oceanview-page.png": {
    "type": "image/png",
    "etag": "\"3caf0-kZHU3vyt6wobyd5giTP93ZPkiSQ\"",
    "mtime": "2023-03-09T16:04:34.254Z",
    "size": 248560,
    "path": "../../.output/public/img/oceanview/JPG/oceanview-page.png"
  },
  "/img/oceanview/PC/oceanview-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"329-eBHgHur1q1PfJY61IuVvydEssDI\"",
    "mtime": "2023-03-09T16:04:34.248Z",
    "size": 809,
    "path": "../../.output/public/img/oceanview/PC/oceanview-page-icon.svg"
  },
  "/img/oceanview/PC/oceanview-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"29810-Vz/YapMLQaJPBmGaC5wVwLv5Yqg\"",
    "mtime": "2023-03-09T16:04:34.248Z",
    "size": 170000,
    "path": "../../.output/public/img/oceanview/PC/oceanview-page-img-01.webp"
  },
  "/img/oceanview/PC/oceanview-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"164e4-0sWxTUqBThBp3YSJzWTt2Ff1Oz8\"",
    "mtime": "2023-03-09T16:04:34.247Z",
    "size": 91364,
    "path": "../../.output/public/img/oceanview/PC/oceanview-page-img-02.webp"
  },
  "/img/oceanview/PC/oceanview-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"e636-iD9IqIKCUaPjIWjZmKILykPVDYo\"",
    "mtime": "2023-03-09T16:04:34.247Z",
    "size": 58934,
    "path": "../../.output/public/img/oceanview/PC/oceanview-page-img-03.webp"
  },
  "/img/oceanview/PC/oceanview-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"a6c2-pYIheiaPfHIbiWCaqyhFl4PpLlk\"",
    "mtime": "2023-03-09T16:04:34.246Z",
    "size": 42690,
    "path": "../../.output/public/img/oceanview/PC/oceanview-page-img-04.webp"
  },
  "/img/oceanview/PC/oceanview-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"138d4-Ggl3t/HzqqbKxxNp76NYjlBxmd8\"",
    "mtime": "2023-03-09T16:04:34.245Z",
    "size": 80084,
    "path": "../../.output/public/img/oceanview/PC/oceanview-page-img-05.webp"
  },
  "/img/oceanview/PC/oceanview-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"a4b4e-2DuezYnt43uXyuXr0NrRU6k3Lzc\"",
    "mtime": "2023-03-09T16:04:34.242Z",
    "size": 674638,
    "path": "../../.output/public/img/oceanview/PC/oceanview-page-intro.webp"
  },
  "/img/oceanview/PC/oceanview-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"ef2-gAkUFtj0kxH94k0ZVmo2JvAjLPI\"",
    "mtime": "2023-03-09T16:04:34.241Z",
    "size": 3826,
    "path": "../../.output/public/img/oceanview/PC/oceanview-page-logo.svg"
  },
  "/img/oceanview/PC/oceanview-page.webp": {
    "type": "image/webp",
    "etag": "\"23230-WSJtkrcqtBbsjqE9IeNN/LBYP+o\"",
    "mtime": "2023-03-09T16:04:34.241Z",
    "size": 143920,
    "path": "../../.output/public/img/oceanview/PC/oceanview-page.webp"
  },
  "/img/ownwifi/JPG/ownwifi-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"10fc5-zIN7iFwvL7CwobNCo5lOBGcjvLo\"",
    "mtime": "2023-03-09T16:04:34.239Z",
    "size": 69573,
    "path": "../../.output/public/img/ownwifi/JPG/ownwifi-page-img-01.jpg"
  },
  "/img/ownwifi/JPG/ownwifi-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"2d95e-glTQBWTlp50XewEEGhqd99Fx19Y\"",
    "mtime": "2023-03-09T16:04:34.239Z",
    "size": 186718,
    "path": "../../.output/public/img/ownwifi/JPG/ownwifi-page-img-02.jpg"
  },
  "/img/ownwifi/JPG/ownwifi-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"2bb29-u+d+aHXJkv21k5OgOHGsgIzEcbA\"",
    "mtime": "2023-03-09T16:04:34.238Z",
    "size": 178985,
    "path": "../../.output/public/img/ownwifi/JPG/ownwifi-page-img-03.jpg"
  },
  "/img/ownwifi/JPG/ownwifi-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"189bd-ZjOM5c7LRPyU61lWeTInFAk55HM\"",
    "mtime": "2023-03-09T16:04:34.237Z",
    "size": 100797,
    "path": "../../.output/public/img/ownwifi/JPG/ownwifi-page-img-04.jpg"
  },
  "/img/ownwifi/JPG/ownwifi-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"32913-ERgHqIRuMsouDEtWP8MfmzAoSJ0\"",
    "mtime": "2023-03-09T16:04:34.236Z",
    "size": 207123,
    "path": "../../.output/public/img/ownwifi/JPG/ownwifi-page-img-05.jpg"
  },
  "/img/ownwifi/JPG/ownwifi-page-intro.png": {
    "type": "image/png",
    "etag": "\"14cad-9eSBHTWjqk8G5OqLgkiM+XOjpyk\"",
    "mtime": "2023-03-09T16:04:34.235Z",
    "size": 85165,
    "path": "../../.output/public/img/ownwifi/JPG/ownwifi-page-intro.png"
  },
  "/img/ownwifi/JPG/ownwifi-page.png": {
    "type": "image/png",
    "etag": "\"14cad-9eSBHTWjqk8G5OqLgkiM+XOjpyk\"",
    "mtime": "2023-03-09T16:04:34.235Z",
    "size": 85165,
    "path": "../../.output/public/img/ownwifi/JPG/ownwifi-page.png"
  },
  "/img/ownwifi/Mobile/ownwifi-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"4fca-Bv8GqiLlyhiZ68Alkn8YP78qaio\"",
    "mtime": "2023-03-09T16:04:34.234Z",
    "size": 20426,
    "path": "../../.output/public/img/ownwifi/Mobile/ownwifi-page-img-01.webp"
  },
  "/img/ownwifi/Mobile/ownwifi-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"713c-oksmMrgX0B4C1f5zSfJpoiY5spQ\"",
    "mtime": "2023-03-09T16:04:34.234Z",
    "size": 28988,
    "path": "../../.output/public/img/ownwifi/Mobile/ownwifi-page-img-02.webp"
  },
  "/img/ownwifi/Mobile/ownwifi-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"7c12-RAT6dmxhgSHQ/D9nq7PDt3PH4YY\"",
    "mtime": "2023-03-09T16:04:34.234Z",
    "size": 31762,
    "path": "../../.output/public/img/ownwifi/Mobile/ownwifi-page-img-03.webp"
  },
  "/img/ownwifi/Mobile/ownwifi-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"51ae-gTafwGV4WbE4RqjyFWY4VU4khmI\"",
    "mtime": "2023-03-09T16:04:34.233Z",
    "size": 20910,
    "path": "../../.output/public/img/ownwifi/Mobile/ownwifi-page-img-04.webp"
  },
  "/img/ownwifi/Mobile/ownwifi-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"a236-cnh485dWgcE9qy5gkX3DMg1JPjc\"",
    "mtime": "2023-03-09T16:04:34.233Z",
    "size": 41526,
    "path": "../../.output/public/img/ownwifi/Mobile/ownwifi-page-img-05.webp"
  },
  "/img/ownwifi/Mobile/ownwifi-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"1214e-K3WGxFT9Kf2m7nP6myZfQ42HNiw\"",
    "mtime": "2023-03-09T16:04:34.232Z",
    "size": 74062,
    "path": "../../.output/public/img/ownwifi/Mobile/ownwifi-page-intro.webp"
  },
  "/img/ownwifi/Mobile/ownwifi-page.webp": {
    "type": "image/webp",
    "etag": "\"6a50-W9iFrzg0koPpxgCv+obUkpUvpl8\"",
    "mtime": "2023-03-09T16:04:34.232Z",
    "size": 27216,
    "path": "../../.output/public/img/ownwifi/Mobile/ownwifi-page.webp"
  },
  "/img/ownwifi/PC/ownwifi-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"6f3-EXczJNYd5TPfvBTWY6BXbGBjMNQ\"",
    "mtime": "2023-03-09T16:04:34.231Z",
    "size": 1779,
    "path": "../../.output/public/img/ownwifi/PC/ownwifi-page-icon.svg"
  },
  "/img/ownwifi/PC/ownwifi-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"ceba-K95zwtCLV6WBk3xDkh7M4V4Sv40\"",
    "mtime": "2023-03-09T16:04:34.231Z",
    "size": 52922,
    "path": "../../.output/public/img/ownwifi/PC/ownwifi-page-img-01.webp"
  },
  "/img/ownwifi/PC/ownwifi-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"1f97a-1T1IDiAypkOOzxhL/rIDCCsNimw\"",
    "mtime": "2023-03-09T16:04:34.231Z",
    "size": 129402,
    "path": "../../.output/public/img/ownwifi/PC/ownwifi-page-img-02.webp"
  },
  "/img/ownwifi/PC/ownwifi-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"200d8-N1zOYw6jQGM1IP/p9Ofqlhfi0l0\"",
    "mtime": "2023-03-09T16:04:34.230Z",
    "size": 131288,
    "path": "../../.output/public/img/ownwifi/PC/ownwifi-page-img-03.webp"
  },
  "/img/ownwifi/PC/ownwifi-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"11aa8-wOOMIqScka/FVf680VUlVFjb3no\"",
    "mtime": "2023-03-09T16:04:34.229Z",
    "size": 72360,
    "path": "../../.output/public/img/ownwifi/PC/ownwifi-page-img-04.webp"
  },
  "/img/ownwifi/PC/ownwifi-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"2634e-kNAfYUZ760G4r1vHd/Yora3bHpY\"",
    "mtime": "2023-03-09T16:04:34.229Z",
    "size": 156494,
    "path": "../../.output/public/img/ownwifi/PC/ownwifi-page-img-05.webp"
  },
  "/img/ownwifi/PC/ownwifi-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"2e5f4-OE6zNY743YMJRvpJXkYlNjNIsFI\"",
    "mtime": "2023-03-09T16:04:34.228Z",
    "size": 189940,
    "path": "../../.output/public/img/ownwifi/PC/ownwifi-page-intro.webp"
  },
  "/img/ownwifi/PC/ownwifi-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"eb7-m/jjMdKyMXChtAyZP/hOZqg5fAM\"",
    "mtime": "2023-03-09T16:04:34.227Z",
    "size": 3767,
    "path": "../../.output/public/img/ownwifi/PC/ownwifi-page-logo.svg"
  },
  "/img/ownwifi/PC/ownwifi-page.webp": {
    "type": "image/webp",
    "etag": "\"ec7a-XB9gUdh6TxYBSaU1NlmK1r2hmm4\"",
    "mtime": "2023-03-09T16:04:34.227Z",
    "size": 60538,
    "path": "../../.output/public/img/ownwifi/PC/ownwifi-page.webp"
  },
  "/img/pawpaw/JPG/pawpaw-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"21f6b-oY9dB6pQXLL8kFLnAGB4FvOivS0\"",
    "mtime": "2023-03-09T16:04:34.226Z",
    "size": 139115,
    "path": "../../.output/public/img/pawpaw/JPG/pawpaw-page-img-01.jpg"
  },
  "/img/pawpaw/JPG/pawpaw-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b60e-Hf9InGsZe6LY4YI8742Fr/Zg8s8\"",
    "mtime": "2023-03-09T16:04:34.225Z",
    "size": 112142,
    "path": "../../.output/public/img/pawpaw/JPG/pawpaw-page-img-02.jpg"
  },
  "/img/pawpaw/JPG/pawpaw-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"14538-lQACbL3zY4aDlQPrx4s/dTg4K18\"",
    "mtime": "2023-03-09T16:04:34.225Z",
    "size": 83256,
    "path": "../../.output/public/img/pawpaw/JPG/pawpaw-page-img-03.jpg"
  },
  "/img/pawpaw/JPG/pawpaw-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"16a9e-QOQtig2qLWAKdcDu//imzIXhPDg\"",
    "mtime": "2023-03-09T16:04:34.224Z",
    "size": 92830,
    "path": "../../.output/public/img/pawpaw/JPG/pawpaw-page-img-04.jpg"
  },
  "/img/pawpaw/JPG/pawpaw-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"116ac-GuxURmM1ZsCYtwN2EhwN9oGGDUQ\"",
    "mtime": "2023-03-09T16:04:34.223Z",
    "size": 71340,
    "path": "../../.output/public/img/pawpaw/JPG/pawpaw-page-img-05.jpg"
  },
  "/img/pawpaw/JPG/pawpaw-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"d540-UlQ+tS+ePpcN5v8BuaIUaiGYoHE\"",
    "mtime": "2023-03-09T16:04:34.223Z",
    "size": 54592,
    "path": "../../.output/public/img/pawpaw/JPG/pawpaw-page-img-06.jpg"
  },
  "/img/pawpaw/JPG/pawpaw-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"8540-eD3zguKBoGlkIhTR90NfIs+h/dk\"",
    "mtime": "2023-03-09T16:04:34.222Z",
    "size": 34112,
    "path": "../../.output/public/img/pawpaw/JPG/pawpaw-page-img-07.jpg"
  },
  "/img/pawpaw/JPG/pawpaw-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"8a67-7gRFRVvbzSVlQCIpudtbulJSTfU\"",
    "mtime": "2023-03-09T16:04:34.222Z",
    "size": 35431,
    "path": "../../.output/public/img/pawpaw/JPG/pawpaw-page-img-08.jpg"
  },
  "/img/pawpaw/JPG/pawpaw-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"27b8a-X5Fe9JB7ZV12lR7m3kK3ZD/8Gf0\"",
    "mtime": "2023-03-09T16:04:34.221Z",
    "size": 162698,
    "path": "../../.output/public/img/pawpaw/JPG/pawpaw-page-img-09.jpg"
  },
  "/img/pawpaw/JPG/pawpaw-page-intro.png": {
    "type": "image/png",
    "etag": "\"29461-ZmNXSjdOdL3D0z6Gj12a5tCZ3D0\"",
    "mtime": "2023-03-09T16:04:34.221Z",
    "size": 169057,
    "path": "../../.output/public/img/pawpaw/JPG/pawpaw-page-intro.png"
  },
  "/img/pawpaw/JPG/pawpaw-page.png": {
    "type": "image/png",
    "etag": "\"29461-ZmNXSjdOdL3D0z6Gj12a5tCZ3D0\"",
    "mtime": "2023-03-09T16:04:34.220Z",
    "size": 169057,
    "path": "../../.output/public/img/pawpaw/JPG/pawpaw-page.png"
  },
  "/img/pawpaw/Mobile/pawpaw-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"a3a0-XgFwt7uIMmJnqs+hYaZ33R/IVL4\"",
    "mtime": "2023-03-09T16:04:34.219Z",
    "size": 41888,
    "path": "../../.output/public/img/pawpaw/Mobile/pawpaw-page-img-01.webp"
  },
  "/img/pawpaw/Mobile/pawpaw-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"89d6-nlt9mYtzk3TlehAGR/1GWcuz4dw\"",
    "mtime": "2023-03-09T16:04:34.218Z",
    "size": 35286,
    "path": "../../.output/public/img/pawpaw/Mobile/pawpaw-page-img-02.webp"
  },
  "/img/pawpaw/Mobile/pawpaw-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"58b2-BpvkmP4LGwdUYu31r5XKWbEE11A\"",
    "mtime": "2023-03-09T16:04:34.218Z",
    "size": 22706,
    "path": "../../.output/public/img/pawpaw/Mobile/pawpaw-page-img-03.webp"
  },
  "/img/pawpaw/Mobile/pawpaw-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"6976-kvazeZ2Lw+X20FFexFN70omJWUg\"",
    "mtime": "2023-03-09T16:04:34.218Z",
    "size": 26998,
    "path": "../../.output/public/img/pawpaw/Mobile/pawpaw-page-img-04.webp"
  },
  "/img/pawpaw/Mobile/pawpaw-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"4f90-J+JMD1DTgXJ65/0R4OdSuLn73Dg\"",
    "mtime": "2023-03-09T16:04:34.216Z",
    "size": 20368,
    "path": "../../.output/public/img/pawpaw/Mobile/pawpaw-page-img-05.webp"
  },
  "/img/pawpaw/Mobile/pawpaw-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"3824-jy3DJrr45irrzRKt7LDljPSI+NM\"",
    "mtime": "2023-03-09T16:04:34.215Z",
    "size": 14372,
    "path": "../../.output/public/img/pawpaw/Mobile/pawpaw-page-img-06.webp"
  },
  "/img/pawpaw/Mobile/pawpaw-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"3c5e-sFBUSP7JOPaZIQ3Iz9aZPvp8mlM\"",
    "mtime": "2023-03-09T16:04:34.215Z",
    "size": 15454,
    "path": "../../.output/public/img/pawpaw/Mobile/pawpaw-page-img-07.webp"
  },
  "/img/pawpaw/Mobile/pawpaw-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"44d6-kO+aG1caAQvnU/Akw9ORBkdgjFw\"",
    "mtime": "2023-03-09T16:04:34.214Z",
    "size": 17622,
    "path": "../../.output/public/img/pawpaw/Mobile/pawpaw-page-img-08.webp"
  },
  "/img/pawpaw/Mobile/pawpaw-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"96e6-XZXzDgDAs1ZrqMvM370MDuJYYnQ\"",
    "mtime": "2023-03-09T16:04:34.214Z",
    "size": 38630,
    "path": "../../.output/public/img/pawpaw/Mobile/pawpaw-page-img-09.webp"
  },
  "/img/pawpaw/Mobile/pawpaw-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"25b42-SLI3ehYw3E2Wt7Qt5FHufrEOFxg\"",
    "mtime": "2023-03-09T16:04:34.214Z",
    "size": 154434,
    "path": "../../.output/public/img/pawpaw/Mobile/pawpaw-page-intro.webp"
  },
  "/img/pawpaw/Mobile/pawpaw-page.webp": {
    "type": "image/webp",
    "etag": "\"7a88-OOUber6JoZ/4UaMPCxhH8dVf6Gs\"",
    "mtime": "2023-03-09T16:04:34.213Z",
    "size": 31368,
    "path": "../../.output/public/img/pawpaw/Mobile/pawpaw-page.webp"
  },
  "/img/polarbear/JPG/polarbear-page-intro.png": {
    "type": "image/png",
    "etag": "\"27b1a-uSgdQu/BAm6ggdlxo/+0DIsPEOg\"",
    "mtime": "2023-03-09T16:04:34.206Z",
    "size": 162586,
    "path": "../../.output/public/img/polarbear/JPG/polarbear-page-intro.png"
  },
  "/img/polarbear/JPG/polarbear-page.png": {
    "type": "image/png",
    "etag": "\"265e5-2QEzblpKAS7MQzwEj0TWkI5dEdc\"",
    "mtime": "2023-03-09T16:04:34.206Z",
    "size": 157157,
    "path": "../../.output/public/img/polarbear/JPG/polarbear-page.png"
  },
  "/img/pawpaw/PC/pawpaw-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"29f9-E41lzETL/s7QFuPl48IpJINBCHY\"",
    "mtime": "2023-03-09T16:04:34.212Z",
    "size": 10745,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page-icon.svg"
  },
  "/img/pawpaw/PC/pawpaw-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"f30a-No2SelYNUs5e879GzpWHwHMDFG0\"",
    "mtime": "2023-03-09T16:04:34.212Z",
    "size": 62218,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page-img-01.webp"
  },
  "/img/pawpaw/PC/pawpaw-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"c84c-BH6HA4X2/IZ90ysxyelXqvJtBhY\"",
    "mtime": "2023-03-09T16:04:34.212Z",
    "size": 51276,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page-img-02.webp"
  },
  "/img/pawpaw/PC/pawpaw-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"7e92-uZgm2ks/D/pVsEf5ItZ1elpc4Ro\"",
    "mtime": "2023-03-09T16:04:34.211Z",
    "size": 32402,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page-img-03.webp"
  },
  "/img/pawpaw/PC/pawpaw-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"9770-N0e1zFZTko46gURlEU5uR+JdS38\"",
    "mtime": "2023-03-09T16:04:34.211Z",
    "size": 38768,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page-img-04.webp"
  },
  "/img/pawpaw/PC/pawpaw-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"6f6e-zue4f7KTonw25PB+KHiDRoX/ie0\"",
    "mtime": "2023-03-09T16:04:34.211Z",
    "size": 28526,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page-img-05.webp"
  },
  "/img/pawpaw/PC/pawpaw-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"4f3c-qucejp2idkHIlSf9v/OtKhZePn4\"",
    "mtime": "2023-03-09T16:04:34.210Z",
    "size": 20284,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page-img-06.webp"
  },
  "/img/pawpaw/PC/pawpaw-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"5cb8-+2+CuCqwj0s1Ii6/ebv73VaUy1o\"",
    "mtime": "2023-03-09T16:04:34.210Z",
    "size": 23736,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page-img-07.webp"
  },
  "/img/pawpaw/PC/pawpaw-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"68e2-KZZmu9f6tk5qgMohW82WlNMgOUs\"",
    "mtime": "2023-03-09T16:04:34.210Z",
    "size": 26850,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page-img-08.webp"
  },
  "/img/pawpaw/PC/pawpaw-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"187e0-OBaX9wYIaFVOuREoyz8BJjjNM5E\"",
    "mtime": "2023-03-09T16:04:34.209Z",
    "size": 100320,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page-img-09.webp"
  },
  "/img/pawpaw/PC/pawpaw-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"5f902-yAD7KQoyQzzs4vg/Xps5r3OCPhk\"",
    "mtime": "2023-03-09T16:04:34.209Z",
    "size": 391426,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page-intro.webp"
  },
  "/img/pawpaw/PC/pawpaw-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"40ee-cfjc+0Gz/pyBd7vzl+m02FtL2aU\"",
    "mtime": "2023-03-09T16:04:34.207Z",
    "size": 16622,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page-logo.svg"
  },
  "/img/pawpaw/PC/pawpaw-page.webp": {
    "type": "image/webp",
    "etag": "\"f73c-to1BtXt5gfJupDOgbwas60Vf5mQ\"",
    "mtime": "2023-03-09T16:04:34.207Z",
    "size": 63292,
    "path": "../../.output/public/img/pawpaw/PC/pawpaw-page.webp"
  },
  "/img/polarbear/Mobile/polarbear-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"25b34-rWv/yGcrbdymCQNKMHDiN1L7sTo\"",
    "mtime": "2023-03-09T16:04:34.204Z",
    "size": 154420,
    "path": "../../.output/public/img/polarbear/Mobile/polarbear-page-intro.webp"
  },
  "/img/polarbear/Mobile/polarbear-page.webp": {
    "type": "image/webp",
    "etag": "\"78ea-q7vgeW9HNJX9zOEuT0lb8pJQ8b4\"",
    "mtime": "2023-03-09T16:04:34.203Z",
    "size": 30954,
    "path": "../../.output/public/img/polarbear/Mobile/polarbear-page.webp"
  },
  "/img/polarbear/PC/polarbear-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"621b2-KUWE4UkoBkLjw2UMojE68aeN5e8\"",
    "mtime": "2023-03-09T16:04:34.202Z",
    "size": 401842,
    "path": "../../.output/public/img/polarbear/PC/polarbear-page-intro.webp"
  },
  "/img/polarbear/PC/polarbear-page.webp": {
    "type": "image/webp",
    "etag": "\"11316-ihPTHmCqgEjpHiAv/uWDG+b9738\"",
    "mtime": "2023-03-09T16:04:34.201Z",
    "size": 70422,
    "path": "../../.output/public/img/polarbear/PC/polarbear-page.webp"
  },
  "/img/primetravel/JPG/primetravel-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"39cf-l6M7yT3nnkG1ldNlSG6uzlEUCTw\"",
    "mtime": "2023-03-09T16:04:34.200Z",
    "size": 14799,
    "path": "../../.output/public/img/primetravel/JPG/primetravel-page-img-01.jpg"
  },
  "/img/primetravel/JPG/primetravel-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"16a46-LUWQYxeIbQh3B3MnkQJq+sKAIAc\"",
    "mtime": "2023-03-09T16:04:34.200Z",
    "size": 92742,
    "path": "../../.output/public/img/primetravel/JPG/primetravel-page-img-02.jpg"
  },
  "/img/primetravel/JPG/primetravel-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"2f8c0-rM0QSsolwIA1NDaHXWau9vrP3XQ\"",
    "mtime": "2023-03-09T16:04:34.200Z",
    "size": 194752,
    "path": "../../.output/public/img/primetravel/JPG/primetravel-page-img-03.jpg"
  },
  "/img/primetravel/JPG/primetravel-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"db32-BEf484eWtORumgRXM0KzE2h2SzM\"",
    "mtime": "2023-03-09T16:04:34.199Z",
    "size": 56114,
    "path": "../../.output/public/img/primetravel/JPG/primetravel-page-img-04.jpg"
  },
  "/img/primetravel/JPG/primetravel-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"1620f-WL5UwTBq8sbTugKVM0Ju7iDOhCA\"",
    "mtime": "2023-03-09T16:04:34.198Z",
    "size": 90639,
    "path": "../../.output/public/img/primetravel/JPG/primetravel-page-img-05.jpg"
  },
  "/img/primetravel/JPG/primetravel-page-intro.png": {
    "type": "image/png",
    "etag": "\"2adda-1N/SixI2jaFIslbWDo+//+5wXfk\"",
    "mtime": "2023-03-09T16:04:34.197Z",
    "size": 175578,
    "path": "../../.output/public/img/primetravel/JPG/primetravel-page-intro.png"
  },
  "/img/primetravel/JPG/primetravel-page.png": {
    "type": "image/png",
    "etag": "\"2adda-1N/SixI2jaFIslbWDo+//+5wXfk\"",
    "mtime": "2023-03-09T16:04:34.196Z",
    "size": 175578,
    "path": "../../.output/public/img/primetravel/JPG/primetravel-page.png"
  },
  "/img/primetravel/Mobile/primetravel-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"187e-gm1zHeWhwGB1Mng5k0k120g2RnQ\"",
    "mtime": "2023-03-09T16:04:34.195Z",
    "size": 6270,
    "path": "../../.output/public/img/primetravel/Mobile/primetravel-page-img-01.webp"
  },
  "/img/primetravel/Mobile/primetravel-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"40ec-Zunl7lNn3mbkngpHaaY66HVv/xg\"",
    "mtime": "2023-03-09T16:04:34.195Z",
    "size": 16620,
    "path": "../../.output/public/img/primetravel/Mobile/primetravel-page-img-02.webp"
  },
  "/img/primetravel/Mobile/primetravel-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"9a84-vRqZvlzFhX/sLiHjIRqXKGk1K9c\"",
    "mtime": "2023-03-09T16:04:34.195Z",
    "size": 39556,
    "path": "../../.output/public/img/primetravel/Mobile/primetravel-page-img-03.webp"
  },
  "/img/primetravel/Mobile/primetravel-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"6d64-E+/yZfG+7JouYb4NrmQvk+F+VNg\"",
    "mtime": "2023-03-09T16:04:34.195Z",
    "size": 28004,
    "path": "../../.output/public/img/primetravel/Mobile/primetravel-page-img-04.webp"
  },
  "/img/primetravel/Mobile/primetravel-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"9256-na181f6cSp5ht4TMsbfuEJu5IrM\"",
    "mtime": "2023-03-09T16:04:34.194Z",
    "size": 37462,
    "path": "../../.output/public/img/primetravel/Mobile/primetravel-page-img-05.webp"
  },
  "/img/primetravel/Mobile/primetravel-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"1c706-/IXut48qSRkxcTOuHPZLF0Tyh8Y\"",
    "mtime": "2023-03-09T16:04:34.194Z",
    "size": 116486,
    "path": "../../.output/public/img/primetravel/Mobile/primetravel-page-intro.webp"
  },
  "/img/primetravel/Mobile/primetravel-page.webp": {
    "type": "image/webp",
    "etag": "\"f2ee-dtYtX0uTQA3iM7wf9l/VBWSRRVo\"",
    "mtime": "2023-03-09T16:04:34.193Z",
    "size": 62190,
    "path": "../../.output/public/img/primetravel/Mobile/primetravel-page.webp"
  },
  "/img/primetravel/PC/primetravel-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"fd0-Qure7sLpO0hJCK4FwmSAStG8K2g\"",
    "mtime": "2023-03-09T16:04:34.192Z",
    "size": 4048,
    "path": "../../.output/public/img/primetravel/PC/primetravel-page-icon.svg"
  },
  "/img/primetravel/PC/primetravel-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"22de-6jKHGuQDt0Y6o6d6S6MN38Cta4w\"",
    "mtime": "2023-03-09T16:04:34.192Z",
    "size": 8926,
    "path": "../../.output/public/img/primetravel/PC/primetravel-page-img-01.webp"
  },
  "/img/primetravel/PC/primetravel-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"ff78-rCAHqO/bp1HSAhDsutHx/gEc1mk\"",
    "mtime": "2023-03-09T16:04:34.192Z",
    "size": 65400,
    "path": "../../.output/public/img/primetravel/PC/primetravel-page-img-02.webp"
  },
  "/img/primetravel/PC/primetravel-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"21c08-ZK96itVuTmXcF9yDBqj9HaVpNTA\"",
    "mtime": "2023-03-09T16:04:34.192Z",
    "size": 138248,
    "path": "../../.output/public/img/primetravel/PC/primetravel-page-img-03.webp"
  },
  "/img/primetravel/PC/primetravel-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"a83e-A5vEeFAUn9sF0QFumz8xJhzqPjc\"",
    "mtime": "2023-03-09T16:04:34.191Z",
    "size": 43070,
    "path": "../../.output/public/img/primetravel/PC/primetravel-page-img-04.webp"
  },
  "/img/primetravel/PC/primetravel-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"de40-gQaNNWOjtsX0zIFY1CocglSZSfw\"",
    "mtime": "2023-03-09T16:04:34.190Z",
    "size": 56896,
    "path": "../../.output/public/img/primetravel/PC/primetravel-page-img-05.webp"
  },
  "/img/primetravel/PC/primetravel-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"400d8-vYJI3DPiRZNP2GbYf08nsPAJymQ\"",
    "mtime": "2023-03-09T16:04:34.190Z",
    "size": 262360,
    "path": "../../.output/public/img/primetravel/PC/primetravel-page-intro.webp"
  },
  "/img/primetravel/PC/primetravel-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"37d7-TFqncA+g3H8AedBOp/atHnEXmFk\"",
    "mtime": "2023-03-09T16:04:34.188Z",
    "size": 14295,
    "path": "../../.output/public/img/primetravel/PC/primetravel-page-logo.svg"
  },
  "/img/primetravel/PC/primetravel-page.webp": {
    "type": "image/webp",
    "etag": "\"20b2a-vRpvawCcXU02J789FKY1TRb+qdY\"",
    "mtime": "2023-03-09T16:04:34.188Z",
    "size": 133930,
    "path": "../../.output/public/img/primetravel/PC/primetravel-page.webp"
  },
  "/img/prozapchast/JPG/prozapchast-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"28aae-RQw0j9b/YXSVsgdqYT5MNLy9amI\"",
    "mtime": "2023-03-09T16:04:34.185Z",
    "size": 166574,
    "path": "../../.output/public/img/prozapchast/JPG/prozapchast-page-img-01.jpg"
  },
  "/img/prozapchast/JPG/prozapchast-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"10e4d-gxGYbUhvVky098ip3+43jZT9Cro\"",
    "mtime": "2023-03-09T16:04:34.185Z",
    "size": 69197,
    "path": "../../.output/public/img/prozapchast/JPG/prozapchast-page-img-02.jpg"
  },
  "/img/prozapchast/JPG/prozapchast-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"33439-KKZS1230IT3wsyzU6ux6At4hfbc\"",
    "mtime": "2023-03-09T16:04:34.184Z",
    "size": 209977,
    "path": "../../.output/public/img/prozapchast/JPG/prozapchast-page-img-03.jpg"
  },
  "/img/prozapchast/JPG/prozapchast-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"1507f-MLUaqbObmjLJFoxZieV3H0bGvkU\"",
    "mtime": "2023-03-09T16:04:34.183Z",
    "size": 86143,
    "path": "../../.output/public/img/prozapchast/JPG/prozapchast-page-img-04.jpg"
  },
  "/img/prozapchast/JPG/prozapchast-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d82f-/Qz62Bsld1daCpLF2TJvBkLJuZs\"",
    "mtime": "2023-03-09T16:04:34.183Z",
    "size": 120879,
    "path": "../../.output/public/img/prozapchast/JPG/prozapchast-page-img-05.jpg"
  },
  "/img/prozapchast/JPG/prozapchast-page-intro.png": {
    "type": "image/png",
    "etag": "\"19b27-09CXkQ0qH8DaJ/+ccA3WbRN0bAg\"",
    "mtime": "2023-03-09T16:04:34.182Z",
    "size": 105255,
    "path": "../../.output/public/img/prozapchast/JPG/prozapchast-page-intro.png"
  },
  "/img/prozapchast/JPG/prozapchast-page.png": {
    "type": "image/png",
    "etag": "\"19b27-09CXkQ0qH8DaJ/+ccA3WbRN0bAg\"",
    "mtime": "2023-03-09T16:04:34.182Z",
    "size": 105255,
    "path": "../../.output/public/img/prozapchast/JPG/prozapchast-page.png"
  },
  "/img/prozapchast/Mobile/prozapchast-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"b87a-M8vdMinxMXiA0yqIpdqgQ383brY\"",
    "mtime": "2023-03-09T16:04:34.180Z",
    "size": 47226,
    "path": "../../.output/public/img/prozapchast/Mobile/prozapchast-page-img-01.webp"
  },
  "/img/prozapchast/Mobile/prozapchast-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"33ca-bgc7Y9LjPQuh/fE2FjeG2Nyet04\"",
    "mtime": "2023-03-09T16:04:34.180Z",
    "size": 13258,
    "path": "../../.output/public/img/prozapchast/Mobile/prozapchast-page-img-02.webp"
  },
  "/img/prozapchast/Mobile/prozapchast-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"5ed6-9koL6r99EDw4vlvW8ibO1dYhloI\"",
    "mtime": "2023-03-09T16:04:34.180Z",
    "size": 24278,
    "path": "../../.output/public/img/prozapchast/Mobile/prozapchast-page-img-03.webp"
  },
  "/img/prozapchast/Mobile/prozapchast-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"3f66-L5VxtyroUN9lBCK26hk74GedooI\"",
    "mtime": "2023-03-09T16:04:34.180Z",
    "size": 16230,
    "path": "../../.output/public/img/prozapchast/Mobile/prozapchast-page-img-04.webp"
  },
  "/img/prozapchast/Mobile/prozapchast-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"38d0-SHTy6h6+zRQE98toSzN0BAUfdrE\"",
    "mtime": "2023-03-09T16:04:34.179Z",
    "size": 14544,
    "path": "../../.output/public/img/prozapchast/Mobile/prozapchast-page-img-05.webp"
  },
  "/img/prozapchast/Mobile/prozapchast-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"1dd04-YpCrT3RfxGmByS2CYOCFRtsMW/o\"",
    "mtime": "2023-03-09T16:04:34.179Z",
    "size": 122116,
    "path": "../../.output/public/img/prozapchast/Mobile/prozapchast-page-intro.webp"
  },
  "/img/prozapchast/Mobile/prozapchast-page.webp": {
    "type": "image/webp",
    "etag": "\"6194-5OQR9mH+S1av3WtdO+AFSX4yE20\"",
    "mtime": "2023-03-09T16:04:34.178Z",
    "size": 24980,
    "path": "../../.output/public/img/prozapchast/Mobile/prozapchast-page.webp"
  },
  "/img/prozapchast/PC/prozapchast-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"c5d-R9SqBFbpaVeFdGvialgu01FhFus\"",
    "mtime": "2023-03-09T16:04:34.178Z",
    "size": 3165,
    "path": "../../.output/public/img/prozapchast/PC/prozapchast-page-icon.svg"
  },
  "/img/prozapchast/PC/prozapchast-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"1b36c-ve11S/jXwmbVCGQQ0rmWIykvnf4\"",
    "mtime": "2023-03-09T16:04:34.177Z",
    "size": 111468,
    "path": "../../.output/public/img/prozapchast/PC/prozapchast-page-img-01.webp"
  },
  "/img/prozapchast/PC/prozapchast-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"bb24-OSY8h0zeBGkj1odkHXVjCMYVEeU\"",
    "mtime": "2023-03-09T16:04:34.177Z",
    "size": 47908,
    "path": "../../.output/public/img/prozapchast/PC/prozapchast-page-img-02.webp"
  },
  "/img/prozapchast/PC/prozapchast-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"182d4-85swy32GSpRpSQp6dXI9evmfoV0\"",
    "mtime": "2023-03-09T16:04:34.176Z",
    "size": 99028,
    "path": "../../.output/public/img/prozapchast/PC/prozapchast-page-img-03.webp"
  },
  "/img/prozapchast/PC/prozapchast-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"e882-OLI5J4UuDW+pH4IIIiwprn4xJn4\"",
    "mtime": "2023-03-09T16:04:34.176Z",
    "size": 59522,
    "path": "../../.output/public/img/prozapchast/PC/prozapchast-page-img-04.webp"
  },
  "/img/prozapchast/PC/prozapchast-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"e6f8-GWclblK4AGirDgQVB/1uR0HRWlo\"",
    "mtime": "2023-03-09T16:04:34.175Z",
    "size": 59128,
    "path": "../../.output/public/img/prozapchast/PC/prozapchast-page-img-05.webp"
  },
  "/img/prozapchast/PC/prozapchast-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"49fda-eiVThTCKsrBh8Xp5bw1Ndm9ih4o\"",
    "mtime": "2023-03-09T16:04:34.175Z",
    "size": 303066,
    "path": "../../.output/public/img/prozapchast/PC/prozapchast-page-intro.webp"
  },
  "/img/prozapchast/PC/prozapchast-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"404f-+Cpof+ikV78LBohy1JSg6XSITt4\"",
    "mtime": "2023-03-09T16:04:34.174Z",
    "size": 16463,
    "path": "../../.output/public/img/prozapchast/PC/prozapchast-page-logo.svg"
  },
  "/img/prozapchast/PC/prozapchast-page.webp": {
    "type": "image/webp",
    "etag": "\"cc72-hC+UXfgtrYF0G2+vU3H5RIIa8YQ\"",
    "mtime": "2023-03-09T16:04:34.174Z",
    "size": 52338,
    "path": "../../.output/public/img/prozapchast/PC/prozapchast-page.webp"
  },
  "/img/rageagainstz/JPG/rageagainstz-page-img-01.png": {
    "type": "image/png",
    "etag": "\"9af-kmsx/Xz+zqoNrnI5pKTU80uQxrc\"",
    "mtime": "2023-03-09T16:04:34.173Z",
    "size": 2479,
    "path": "../../.output/public/img/rageagainstz/JPG/rageagainstz-page-img-01.png"
  },
  "/img/rageagainstz/JPG/rageagainstz-page-img-02.png": {
    "type": "image/png",
    "etag": "\"70aa-0oYNpCVdoC+KC2ouHq8rF1CusgA\"",
    "mtime": "2023-03-09T16:04:34.172Z",
    "size": 28842,
    "path": "../../.output/public/img/rageagainstz/JPG/rageagainstz-page-img-02.png"
  },
  "/img/rageagainstz/JPG/rageagainstz-page-img-03.png": {
    "type": "image/png",
    "etag": "\"3182f-/Sr66y5lB3F+SIJpey+JSbvE/eI\"",
    "mtime": "2023-03-09T16:04:34.171Z",
    "size": 202799,
    "path": "../../.output/public/img/rageagainstz/JPG/rageagainstz-page-img-03.png"
  },
  "/img/rageagainstz/JPG/rageagainstz-page-img-04.png": {
    "type": "image/png",
    "etag": "\"1a349-pVFkvk0X2plPY5El3Jj7Z0Npkgw\"",
    "mtime": "2023-03-09T16:04:34.171Z",
    "size": 107337,
    "path": "../../.output/public/img/rageagainstz/JPG/rageagainstz-page-img-04.png"
  },
  "/img/rageagainstz/JPG/rageagainstz-page-img-05.png": {
    "type": "image/png",
    "etag": "\"844a7-z3Aw0kAYPcnvUw5N3LsccVpYKnI\"",
    "mtime": "2023-03-09T16:04:34.170Z",
    "size": 541863,
    "path": "../../.output/public/img/rageagainstz/JPG/rageagainstz-page-img-05.png"
  },
  "/img/rageagainstz/JPG/rageagainstz-page-img-06.png": {
    "type": "image/png",
    "etag": "\"4cb1c-uCXJCB9JYQDF122yu54nIcH7WFc\"",
    "mtime": "2023-03-09T16:04:34.168Z",
    "size": 314140,
    "path": "../../.output/public/img/rageagainstz/JPG/rageagainstz-page-img-06.png"
  },
  "/img/rageagainstz/JPG/rageagainstz-page-intro.png": {
    "type": "image/png",
    "etag": "\"23310-PiyV6m4uJiRJnJJrHC8ZB2+QSuU\"",
    "mtime": "2023-03-09T16:04:34.167Z",
    "size": 144144,
    "path": "../../.output/public/img/rageagainstz/JPG/rageagainstz-page-intro.png"
  },
  "/img/rageagainstz/JPG/rageagainstz-page.png": {
    "type": "image/png",
    "etag": "\"23310-PiyV6m4uJiRJnJJrHC8ZB2+QSuU\"",
    "mtime": "2023-03-09T16:04:34.166Z",
    "size": 144144,
    "path": "../../.output/public/img/rageagainstz/JPG/rageagainstz-page.png"
  },
  "/img/rageagainstz/Mobile/rageagainstz-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"42b6-EM1SNoAa5YcBdFPN9QsACwYWd80\"",
    "mtime": "2023-03-09T16:04:34.164Z",
    "size": 17078,
    "path": "../../.output/public/img/rageagainstz/Mobile/rageagainstz-page-img-01.webp"
  },
  "/img/rageagainstz/Mobile/rageagainstz-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"656a-f6Ne/BXfLP/CP6BvOKrPbb4yppA\"",
    "mtime": "2023-03-09T16:04:34.164Z",
    "size": 25962,
    "path": "../../.output/public/img/rageagainstz/Mobile/rageagainstz-page-img-02.webp"
  },
  "/img/rageagainstz/Mobile/rageagainstz-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"6412-qF+D+j2jfJTR+/YQKQT1jLtnpVE\"",
    "mtime": "2023-03-09T16:04:34.164Z",
    "size": 25618,
    "path": "../../.output/public/img/rageagainstz/Mobile/rageagainstz-page-img-03.webp"
  },
  "/img/rageagainstz/Mobile/rageagainstz-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"7b7a-B9Og+4swNPaw4P+l0kg14fRxObg\"",
    "mtime": "2023-03-09T16:04:34.163Z",
    "size": 31610,
    "path": "../../.output/public/img/rageagainstz/Mobile/rageagainstz-page-img-04.webp"
  },
  "/img/rageagainstz/Mobile/rageagainstz-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"a1aa-TabEfDnhtxFy6RJ9gMapyRQ0ONg\"",
    "mtime": "2023-03-09T16:04:34.163Z",
    "size": 41386,
    "path": "../../.output/public/img/rageagainstz/Mobile/rageagainstz-page-img-05.webp"
  },
  "/img/rageagainstz/Mobile/rageagainstz-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"426e-0DrKRef4c7lhr10fphES25AuwbA\"",
    "mtime": "2023-03-09T16:04:34.163Z",
    "size": 17006,
    "path": "../../.output/public/img/rageagainstz/Mobile/rageagainstz-page-img-06.webp"
  },
  "/img/rageagainstz/Mobile/rageagainstz-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"282ee-q3O8N+cEZJYsT7xUJSNioEes/u0\"",
    "mtime": "2023-03-09T16:04:34.162Z",
    "size": 164590,
    "path": "../../.output/public/img/rageagainstz/Mobile/rageagainstz-page-intro.webp"
  },
  "/img/rageagainstz/Mobile/rageagainstz-page.webp": {
    "type": "image/webp",
    "etag": "\"78aa-Gk3aFzoTmciRGBP6lxj48UovgRs\"",
    "mtime": "2023-03-09T16:04:34.162Z",
    "size": 30890,
    "path": "../../.output/public/img/rageagainstz/Mobile/rageagainstz-page.webp"
  },
  "/img/rageagainstz/PC/rageagainstz-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"3ed4-NQTm1GrvXiXfjRywh7Q6FsNxiCo\"",
    "mtime": "2023-03-09T16:04:34.161Z",
    "size": 16084,
    "path": "../../.output/public/img/rageagainstz/PC/rageagainstz-page-img-01.webp"
  },
  "/img/rageagainstz/PC/rageagainstz-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"be00-lGtEy2sdquGnHELaQ1JKs1AWJPg\"",
    "mtime": "2023-03-09T16:04:34.161Z",
    "size": 48640,
    "path": "../../.output/public/img/rageagainstz/PC/rageagainstz-page-img-02.webp"
  },
  "/img/rageagainstz/PC/rageagainstz-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"9e1a-V/uVI6QhM59D27euDIbfqbvpY+c\"",
    "mtime": "2023-03-09T16:04:34.160Z",
    "size": 40474,
    "path": "../../.output/public/img/rageagainstz/PC/rageagainstz-page-img-03.webp"
  },
  "/img/rageagainstz/PC/rageagainstz-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"b85a-JHiItuN0f4v1d/z/kyog2xNLibo\"",
    "mtime": "2023-03-09T16:04:34.160Z",
    "size": 47194,
    "path": "../../.output/public/img/rageagainstz/PC/rageagainstz-page-img-04.webp"
  },
  "/img/rageagainstz/PC/rageagainstz-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"228e2-KyuSrRt1hlcaExeaA58NhjKPt+U\"",
    "mtime": "2023-03-09T16:04:34.160Z",
    "size": 141538,
    "path": "../../.output/public/img/rageagainstz/PC/rageagainstz-page-img-05.webp"
  },
  "/img/rageagainstz/PC/rageagainstz-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"12186-bv2ytksw5aGRRpNWvlHYbmo2CTw\"",
    "mtime": "2023-03-09T16:04:34.159Z",
    "size": 74118,
    "path": "../../.output/public/img/rageagainstz/PC/rageagainstz-page-img-06.webp"
  },
  "/img/rageagainstz/PC/rageagainstz-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"62c42-VkDb+ys9gxLXwtKk/rCpWzEaVPI\"",
    "mtime": "2023-03-09T16:04:34.158Z",
    "size": 404546,
    "path": "../../.output/public/img/rageagainstz/PC/rageagainstz-page-intro.webp"
  },
  "/img/rageagainstz/PC/rageagainstz-page.webp": {
    "type": "image/webp",
    "etag": "\"f66a-32sMf5K0EXLN8mE4jIemmmB9FMw\"",
    "mtime": "2023-03-09T16:04:34.157Z",
    "size": 63082,
    "path": "../../.output/public/img/rageagainstz/PC/rageagainstz-page.webp"
  },
  "/img/spisynote/JPG/spisynote-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"1f317-hZxZonUlvhSOJh0r2WDAJP0RZv0\"",
    "mtime": "2023-03-09T16:04:34.156Z",
    "size": 127767,
    "path": "../../.output/public/img/spisynote/JPG/spisynote-page-img-01.jpg"
  },
  "/img/spisynote/JPG/spisynote-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"d30d-ha4U1XHhzHqBjZ35Sj5FYXAlxnQ\"",
    "mtime": "2023-03-09T16:04:34.155Z",
    "size": 54029,
    "path": "../../.output/public/img/spisynote/JPG/spisynote-page-img-02.jpg"
  },
  "/img/spisynote/JPG/spisynote-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"b388-ZUbNKS6N76k/oQrqT8snl+giz+E\"",
    "mtime": "2023-03-09T16:04:34.154Z",
    "size": 45960,
    "path": "../../.output/public/img/spisynote/JPG/spisynote-page-img-03.jpg"
  },
  "/img/spisynote/JPG/spisynote-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"803d-/6dR3lz2c/+eRuLV9ePcsFhsN7k\"",
    "mtime": "2023-03-09T16:04:34.153Z",
    "size": 32829,
    "path": "../../.output/public/img/spisynote/JPG/spisynote-page-img-04.jpg"
  },
  "/img/spisynote/JPG/spisynote-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"3cf2-WUP+AUPSrXH3YJtg/VN68CB0+Bo\"",
    "mtime": "2023-03-09T16:04:34.152Z",
    "size": 15602,
    "path": "../../.output/public/img/spisynote/JPG/spisynote-page-img-05.jpg"
  },
  "/img/spisynote/JPG/spisynote-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"383b-kTaZpjdUvfNItaQh1cffylJKOwM\"",
    "mtime": "2023-03-09T16:04:34.152Z",
    "size": 14395,
    "path": "../../.output/public/img/spisynote/JPG/spisynote-page-img-06.jpg"
  },
  "/img/spisynote/JPG/spisynote-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"11282-J443kKuxJ0a/WplmcOuH151okgg\"",
    "mtime": "2023-03-09T16:04:34.151Z",
    "size": 70274,
    "path": "../../.output/public/img/spisynote/JPG/spisynote-page-img-07.jpg"
  },
  "/img/spisynote/JPG/spisynote-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"5b97-g1i+/Rc/40woKyjMElquwtBJBlE\"",
    "mtime": "2023-03-09T16:04:34.151Z",
    "size": 23447,
    "path": "../../.output/public/img/spisynote/JPG/spisynote-page-img-08.jpg"
  },
  "/img/spisynote/JPG/spisynote-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"61a7-ivCN+xWZ8R5ri5r/sJue7XV4vTg\"",
    "mtime": "2023-03-09T16:04:34.149Z",
    "size": 24999,
    "path": "../../.output/public/img/spisynote/JPG/spisynote-page-img-09.jpg"
  },
  "/img/spisynote/JPG/spisynote-page-intro.png": {
    "type": "image/png",
    "etag": "\"2c5b6-zuEzjhqdfaop9jf+ybNGXKgZ8/g\"",
    "mtime": "2023-03-09T16:04:34.149Z",
    "size": 181686,
    "path": "../../.output/public/img/spisynote/JPG/spisynote-page-intro.png"
  },
  "/img/spisynote/JPG/spisynote-page.png": {
    "type": "image/png",
    "etag": "\"2c5b6-zuEzjhqdfaop9jf+ybNGXKgZ8/g\"",
    "mtime": "2023-03-09T16:04:34.148Z",
    "size": 181686,
    "path": "../../.output/public/img/spisynote/JPG/spisynote-page.png"
  },
  "/img/spisynote/Mobile/spisynote-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"8164-22N6qU1cDs83Tn2uVcPVtem2wDs\"",
    "mtime": "2023-03-09T16:04:34.146Z",
    "size": 33124,
    "path": "../../.output/public/img/spisynote/Mobile/spisynote-page-img-01.webp"
  },
  "/img/spisynote/Mobile/spisynote-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"7170-upv0+U+g+lJxzCNMmCP/yvwn0S8\"",
    "mtime": "2023-03-09T16:04:34.145Z",
    "size": 29040,
    "path": "../../.output/public/img/spisynote/Mobile/spisynote-page-img-02.webp"
  },
  "/img/spisynote/Mobile/spisynote-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"60ac-FLekH0cXT0a4XvJeshXsCJkajTg\"",
    "mtime": "2023-03-09T16:04:34.145Z",
    "size": 24748,
    "path": "../../.output/public/img/spisynote/Mobile/spisynote-page-img-03.webp"
  },
  "/img/spisynote/Mobile/spisynote-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"3426-dsTXmbfLS7+tDY19rwYg9mI0aMY\"",
    "mtime": "2023-03-09T16:04:34.145Z",
    "size": 13350,
    "path": "../../.output/public/img/spisynote/Mobile/spisynote-page-img-04.webp"
  },
  "/img/spisynote/Mobile/spisynote-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"17c2-dKjdaexlyKsvHCTmXgnRFe9ulQ8\"",
    "mtime": "2023-03-09T16:04:34.144Z",
    "size": 6082,
    "path": "../../.output/public/img/spisynote/Mobile/spisynote-page-img-05.webp"
  },
  "/img/spisynote/Mobile/spisynote-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"bb8-Qo0RS1Dna2u1kwDZ3+DPZC4Y+wc\"",
    "mtime": "2023-03-09T16:04:34.144Z",
    "size": 3000,
    "path": "../../.output/public/img/spisynote/Mobile/spisynote-page-img-06.webp"
  },
  "/img/spisynote/Mobile/spisynote-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"319c-0FFON4xxfjDJdkJ8Xjp3Z0ktRqI\"",
    "mtime": "2023-03-09T16:04:34.144Z",
    "size": 12700,
    "path": "../../.output/public/img/spisynote/Mobile/spisynote-page-img-07.webp"
  },
  "/img/spisynote/Mobile/spisynote-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"2808-TxjRR5OLqyrNPF7Lgu7vX/KsXPs\"",
    "mtime": "2023-03-09T16:04:34.143Z",
    "size": 10248,
    "path": "../../.output/public/img/spisynote/Mobile/spisynote-page-img-08.webp"
  },
  "/img/spisynote/Mobile/spisynote-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"252c-44onQRvtXGMy87DOWb8Sfaap0JY\"",
    "mtime": "2023-03-09T16:04:34.143Z",
    "size": 9516,
    "path": "../../.output/public/img/spisynote/Mobile/spisynote-page-img-09.webp"
  },
  "/img/spisynote/Mobile/spisynote-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"20974-tLnnakj7UNHdRBVQhN3WiI6idPk\"",
    "mtime": "2023-03-09T16:04:34.142Z",
    "size": 133492,
    "path": "../../.output/public/img/spisynote/Mobile/spisynote-page-intro.webp"
  },
  "/img/spisynote/Mobile/spisynote-page.webp": {
    "type": "image/webp",
    "etag": "\"a88e-DvZq4EUnk3zRnV+dnXJ8Nl8zhTE\"",
    "mtime": "2023-03-09T16:04:34.141Z",
    "size": 43150,
    "path": "../../.output/public/img/spisynote/Mobile/spisynote-page.webp"
  },
  "/img/spisynote/PC/spisynote-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"5494-5o6iU8fUdpu6QmRQPLV4k8UYGgA\"",
    "mtime": "2023-03-09T16:04:34.140Z",
    "size": 21652,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page-icon.svg"
  },
  "/img/spisynote/PC/spisynote-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"1a520-KXAbp0EPrEzK0dxyz4Q7KWlEo/8\"",
    "mtime": "2023-03-09T16:04:34.139Z",
    "size": 107808,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page-img-01.webp"
  },
  "/img/spisynote/PC/spisynote-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"a66c-fxANi2f6tJFRX4pgQCgOeTFrXek\"",
    "mtime": "2023-03-09T16:04:34.138Z",
    "size": 42604,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page-img-02.webp"
  },
  "/img/spisynote/PC/spisynote-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"9408-aYU+hxFNte7jHy6jVVQIe0I6q0I\"",
    "mtime": "2023-03-09T16:04:34.138Z",
    "size": 37896,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page-img-03.webp"
  },
  "/img/spisynote/PC/spisynote-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"632c-JKJ5qpyuvD8z6vebDtusNs79Jl0\"",
    "mtime": "2023-03-09T16:04:34.137Z",
    "size": 25388,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page-img-04.webp"
  },
  "/img/spisynote/PC/spisynote-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"2ce0-Jbs2Ks7I+ilxk0eLz9Xwaxwx3t0\"",
    "mtime": "2023-03-09T16:04:34.136Z",
    "size": 11488,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page-img-05.webp"
  },
  "/img/spisynote/PC/spisynote-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"209a-sgJqSLpa3LQv/ZRKDKZ1G9/BuPA\"",
    "mtime": "2023-03-09T16:04:34.136Z",
    "size": 8346,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page-img-06.webp"
  },
  "/img/spisynote/PC/spisynote-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"be7c-fa55s7/RnmB1Wnx3M9pDBWBen2I\"",
    "mtime": "2023-03-09T16:04:34.136Z",
    "size": 48764,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page-img-07.webp"
  },
  "/img/spisynote/PC/spisynote-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"3bea-UoV6SnLigGJskdBvltDWkl1ZgvU\"",
    "mtime": "2023-03-09T16:04:34.135Z",
    "size": 15338,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page-img-08.webp"
  },
  "/img/spisynote/PC/spisynote-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"38d2-NhVEaptidn5nUEllXmT0zfN8MBs\"",
    "mtime": "2023-03-09T16:04:34.135Z",
    "size": 14546,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page-img-09.webp"
  },
  "/img/spisynote/PC/spisynote-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"56b80-4vJ2WXYXXLWbhotFOQVglB+LKvs\"",
    "mtime": "2023-03-09T16:04:34.134Z",
    "size": 355200,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page-intro.webp"
  },
  "/img/spisynote/PC/spisynote-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"4e07-yPnY0EkbmqJ1upbo3kTlpj32o5I\"",
    "mtime": "2023-03-09T16:04:34.132Z",
    "size": 19975,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page-logo.svg"
  },
  "/img/spisynote/PC/spisynote-page.webp": {
    "type": "image/webp",
    "etag": "\"18a9a-Qqzhv96bfEcG7rLgcz5VpLmibd8\"",
    "mtime": "2023-03-09T16:04:34.131Z",
    "size": 101018,
    "path": "../../.output/public/img/spisynote/PC/spisynote-page.webp"
  },
  "/img/ukigassen/JPG/ukigassen-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"6970-3GUO2OIXJTRdano73u+bJ9bNAz8\"",
    "mtime": "2023-03-09T16:04:34.109Z",
    "size": 26992,
    "path": "../../.output/public/img/ukigassen/JPG/ukigassen-page-img-01.jpg"
  },
  "/img/ukigassen/JPG/ukigassen-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"bcad-C2FOKlwvjqQg/uzgcOBOlSS/0HY\"",
    "mtime": "2023-03-09T16:04:34.109Z",
    "size": 48301,
    "path": "../../.output/public/img/ukigassen/JPG/ukigassen-page-img-02.jpg"
  },
  "/img/ukigassen/JPG/ukigassen-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"b5ba-hZIGK2D34s0I+F2kuwJu7pZOQAg\"",
    "mtime": "2023-03-09T16:04:34.108Z",
    "size": 46522,
    "path": "../../.output/public/img/ukigassen/JPG/ukigassen-page-img-03.jpg"
  },
  "/img/ukigassen/JPG/ukigassen-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"d4ee-oKyHmF84+O3BDxJGNCK6SjbGmRo\"",
    "mtime": "2023-03-09T16:04:34.108Z",
    "size": 54510,
    "path": "../../.output/public/img/ukigassen/JPG/ukigassen-page-img-04.jpg"
  },
  "/img/ukigassen/JPG/ukigassen-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b6af-aACqczV2lJyIOOKLm2OArlR3hGM\"",
    "mtime": "2023-03-09T16:04:34.107Z",
    "size": 112303,
    "path": "../../.output/public/img/ukigassen/JPG/ukigassen-page-img-05.jpg"
  },
  "/img/ukigassen/JPG/ukigassen-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c08d-2gyAQM/s/mluTgtBwgK2jelvcVA\"",
    "mtime": "2023-03-09T16:04:34.105Z",
    "size": 114829,
    "path": "../../.output/public/img/ukigassen/JPG/ukigassen-page-img-06.jpg"
  },
  "/img/ukigassen/JPG/ukigassen-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"3bcb5-WRhpkSJPgWc5qZnPvQuD+YGe68s\"",
    "mtime": "2023-03-09T16:04:34.103Z",
    "size": 244917,
    "path": "../../.output/public/img/ukigassen/JPG/ukigassen-page-img-07.jpg"
  },
  "/img/ukigassen/JPG/ukigassen-page-intro.png": {
    "type": "image/png",
    "etag": "\"1d9ec-JeqFYpo0llfzajg2DZg05hcr0DM\"",
    "mtime": "2023-03-09T16:04:34.101Z",
    "size": 121324,
    "path": "../../.output/public/img/ukigassen/JPG/ukigassen-page-intro.png"
  },
  "/img/ukigassen/JPG/ukigassen-page.png": {
    "type": "image/png",
    "etag": "\"1d9ec-JeqFYpo0llfzajg2DZg05hcr0DM\"",
    "mtime": "2023-03-09T16:04:34.100Z",
    "size": 121324,
    "path": "../../.output/public/img/ukigassen/JPG/ukigassen-page.png"
  },
  "/img/ukigassen/Mobile/ukigassen-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"44f0-Ael+wCaUBKf4PwpMxpD4HUPp+AA\"",
    "mtime": "2023-03-09T16:04:34.099Z",
    "size": 17648,
    "path": "../../.output/public/img/ukigassen/Mobile/ukigassen-page-img-01.webp"
  },
  "/img/ukigassen/Mobile/ukigassen-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"8688-D0wlCjNRBC+9IlImny+x0xtaA9o\"",
    "mtime": "2023-03-09T16:04:34.098Z",
    "size": 34440,
    "path": "../../.output/public/img/ukigassen/Mobile/ukigassen-page-img-02.webp"
  },
  "/img/ukigassen/Mobile/ukigassen-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"6cb0-hKgoxnB/Xoe1289feNdR1LCMVu4\"",
    "mtime": "2023-03-09T16:04:34.097Z",
    "size": 27824,
    "path": "../../.output/public/img/ukigassen/Mobile/ukigassen-page-img-03.webp"
  },
  "/img/ukigassen/Mobile/ukigassen-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"8b40-IaOn1CUtdmkV8n1hjI6qog2EbOk\"",
    "mtime": "2023-03-09T16:04:34.097Z",
    "size": 35648,
    "path": "../../.output/public/img/ukigassen/Mobile/ukigassen-page-img-04.webp"
  },
  "/img/ukigassen/Mobile/ukigassen-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"5808-/y/WefB6Gs787dgBlLRLD2hnPeE\"",
    "mtime": "2023-03-09T16:04:34.095Z",
    "size": 22536,
    "path": "../../.output/public/img/ukigassen/Mobile/ukigassen-page-img-05.webp"
  },
  "/img/ukigassen/Mobile/ukigassen-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"5696-nsFKnapzoEyIfdBynTFa35UpsP4\"",
    "mtime": "2023-03-09T16:04:34.095Z",
    "size": 22166,
    "path": "../../.output/public/img/ukigassen/Mobile/ukigassen-page-img-06.webp"
  },
  "/img/ukigassen/Mobile/ukigassen-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"ce2a-OleIrz6DVibe/fWUIpHmo8JoGYo\"",
    "mtime": "2023-03-09T16:04:34.094Z",
    "size": 52778,
    "path": "../../.output/public/img/ukigassen/Mobile/ukigassen-page-img-07.webp"
  },
  "/img/ukigassen/Mobile/ukigassen-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"19a94-M3ZQZLPbYRCUrwlpetKzUp6UTSo\"",
    "mtime": "2023-03-09T16:04:34.094Z",
    "size": 105108,
    "path": "../../.output/public/img/ukigassen/Mobile/ukigassen-page-intro.webp"
  },
  "/img/ukigassen/Mobile/ukigassen-page.webp": {
    "type": "image/webp",
    "etag": "\"5976-iFiw9utkuzoUKSK8b9gynFNVw/Y\"",
    "mtime": "2023-03-09T16:04:34.092Z",
    "size": 22902,
    "path": "../../.output/public/img/ukigassen/Mobile/ukigassen-page.webp"
  },
  "/img/ukigassen/PC/ukigassen-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"a7a-MMSG3/1Lb3GRJ0P4n7uHoI0wC5g\"",
    "mtime": "2023-03-09T16:04:34.091Z",
    "size": 2682,
    "path": "../../.output/public/img/ukigassen/PC/ukigassen-page-icon.svg"
  },
  "/img/ukigassen/PC/ukigassen-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"5210-BP+ONxyJjfqC0bWXjE85OUt5wnM\"",
    "mtime": "2023-03-09T16:04:34.091Z",
    "size": 21008,
    "path": "../../.output/public/img/ukigassen/PC/ukigassen-page-img-01.webp"
  },
  "/img/ukigassen/PC/ukigassen-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"a186-wUuOxN64E7KdPfKDmD8dH4sqGnY\"",
    "mtime": "2023-03-09T16:04:34.090Z",
    "size": 41350,
    "path": "../../.output/public/img/ukigassen/PC/ukigassen-page-img-02.webp"
  },
  "/img/ukigassen/PC/ukigassen-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"86a4-eDyqPCY7uOKyRzPWtgfMk1eHdsw\"",
    "mtime": "2023-03-09T16:04:34.089Z",
    "size": 34468,
    "path": "../../.output/public/img/ukigassen/PC/ukigassen-page-img-03.webp"
  },
  "/img/ukigassen/PC/ukigassen-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"a8ec-A/L4e9GPSE45rs7Lf0eoq/X36kw\"",
    "mtime": "2023-03-09T16:04:34.088Z",
    "size": 43244,
    "path": "../../.output/public/img/ukigassen/PC/ukigassen-page-img-04.webp"
  },
  "/img/ukigassen/PC/ukigassen-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"13bca-5r9aT06vLqnRBEegdiLi0YsYcA8\"",
    "mtime": "2023-03-09T16:04:34.087Z",
    "size": 80842,
    "path": "../../.output/public/img/ukigassen/PC/ukigassen-page-img-05.webp"
  },
  "/img/ukigassen/PC/ukigassen-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"10d10-zzt27U5OsgkNtrVpLVBUkPqImeI\"",
    "mtime": "2023-03-09T16:04:34.085Z",
    "size": 68880,
    "path": "../../.output/public/img/ukigassen/PC/ukigassen-page-img-06.webp"
  },
  "/img/ukigassen/PC/ukigassen-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"2aece-RnH0eJZkjZ7ssMkMquB19D3kAmw\"",
    "mtime": "2023-03-09T16:04:34.084Z",
    "size": 175822,
    "path": "../../.output/public/img/ukigassen/PC/ukigassen-page-img-07.webp"
  },
  "/img/ukigassen/PC/ukigassen-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"3e894-FHOaSnXaCEEZvEblIOUClPkBOUs\"",
    "mtime": "2023-03-09T16:04:34.083Z",
    "size": 256148,
    "path": "../../.output/public/img/ukigassen/PC/ukigassen-page-intro.webp"
  },
  "/img/ukigassen/PC/ukigassen-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"eac-tcLTexJiHfgMdFToGJwaBxdlpbM\"",
    "mtime": "2023-03-09T16:04:34.081Z",
    "size": 3756,
    "path": "../../.output/public/img/ukigassen/PC/ukigassen-page-logo.svg"
  },
  "/img/ukigassen/PC/ukigassen-page.webp": {
    "type": "image/webp",
    "etag": "\"ba1c-m2eB1OX5orbXIcsos1asfSlOVic\"",
    "mtime": "2023-03-09T16:04:34.080Z",
    "size": 47644,
    "path": "../../.output/public/img/ukigassen/PC/ukigassen-page.webp"
  },
  "/img/tomiai/JPG/tomiai-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"22d4f-5L22NHj04gs5rwlvD7c6WwIE1b0\"",
    "mtime": "2023-03-09T16:04:34.130Z",
    "size": 142671,
    "path": "../../.output/public/img/tomiai/JPG/tomiai-page-img-01.jpg"
  },
  "/img/tomiai/JPG/tomiai-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"2fd56-ztLN6JGSK2z7HIcP0rPJc28dlu8\"",
    "mtime": "2023-03-09T16:04:34.129Z",
    "size": 195926,
    "path": "../../.output/public/img/tomiai/JPG/tomiai-page-img-02.jpg"
  },
  "/img/tomiai/JPG/tomiai-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"1045c-aXkVYfleBXT3MCVrYs7232HtwJs\"",
    "mtime": "2023-03-09T16:04:34.128Z",
    "size": 66652,
    "path": "../../.output/public/img/tomiai/JPG/tomiai-page-img-03.jpg"
  },
  "/img/tomiai/JPG/tomiai-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"2120f-T4dii0SNBRQYq4TxWRH4TTKPGvk\"",
    "mtime": "2023-03-09T16:04:34.127Z",
    "size": 135695,
    "path": "../../.output/public/img/tomiai/JPG/tomiai-page-img-04.jpg"
  },
  "/img/tomiai/JPG/tomiai-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"db58-jdMJyuT59aBkenJ2Mq1JStW1mYw\"",
    "mtime": "2023-03-09T16:04:34.125Z",
    "size": 56152,
    "path": "../../.output/public/img/tomiai/JPG/tomiai-page-img-05.jpg"
  },
  "/img/tomiai/JPG/tomiai-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a2ff-B6MLXi/tY3qTDwRdKcn08rK+THk\"",
    "mtime": "2023-03-09T16:04:34.124Z",
    "size": 107263,
    "path": "../../.output/public/img/tomiai/JPG/tomiai-page-img-06.jpg"
  },
  "/img/tomiai/JPG/tomiai-page-intro.png": {
    "type": "image/png",
    "etag": "\"700d-q8lHCEV5HIgZI+j/R/eszJsJCaU\"",
    "mtime": "2023-03-09T16:04:34.123Z",
    "size": 28685,
    "path": "../../.output/public/img/tomiai/JPG/tomiai-page-intro.png"
  },
  "/img/tomiai/Mobile/tomiai-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"b208-tDcOPyiI+vK5PSOEg4kX+mdYS60\"",
    "mtime": "2023-03-09T16:04:34.122Z",
    "size": 45576,
    "path": "../../.output/public/img/tomiai/Mobile/tomiai-page-img-01.webp"
  },
  "/img/tomiai/Mobile/tomiai-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"ac36-vPLhdz/EV1gZsce8r+N9qhbwRJw\"",
    "mtime": "2023-03-09T16:04:34.122Z",
    "size": 44086,
    "path": "../../.output/public/img/tomiai/Mobile/tomiai-page-img-02.webp"
  },
  "/img/tomiai/Mobile/tomiai-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"2ea8-PAa1XnpgLeHweeXSifNDmsg0ZfI\"",
    "mtime": "2023-03-09T16:04:34.121Z",
    "size": 11944,
    "path": "../../.output/public/img/tomiai/Mobile/tomiai-page-img-03.webp"
  },
  "/img/tomiai/Mobile/tomiai-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"aeae-+NqdpJojz4SJMK8sLpaebUs0Ia0\"",
    "mtime": "2023-03-09T16:04:34.121Z",
    "size": 44718,
    "path": "../../.output/public/img/tomiai/Mobile/tomiai-page-img-04.webp"
  },
  "/img/tomiai/Mobile/tomiai-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"7982-xkkUeJIY7t3pVY1QfCSiPjWuWNY\"",
    "mtime": "2023-03-09T16:04:34.120Z",
    "size": 31106,
    "path": "../../.output/public/img/tomiai/Mobile/tomiai-page-img-05.webp"
  },
  "/img/tomiai/Mobile/tomiai-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"4366-LqRRsLjvzALSkPMz2PCe16wfm2c\"",
    "mtime": "2023-03-09T16:04:34.119Z",
    "size": 17254,
    "path": "../../.output/public/img/tomiai/Mobile/tomiai-page-img-06.webp"
  },
  "/img/tomiai/Mobile/tomiai-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"a628-oScGtbD2D+rhzDSWTuHjFsfQpWk\"",
    "mtime": "2023-03-09T16:04:34.119Z",
    "size": 42536,
    "path": "../../.output/public/img/tomiai/Mobile/tomiai-page-intro.webp"
  },
  "/img/tomiai/Mobile/tomiai-page.webp": {
    "type": "image/webp",
    "etag": "\"4692-5neUR/LU9kIqGnQ7k2sOcHNK5xk\"",
    "mtime": "2023-03-09T16:04:34.118Z",
    "size": 18066,
    "path": "../../.output/public/img/tomiai/Mobile/tomiai-page.webp"
  },
  "/img/tomiai/PC/tomiai-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"53f-WzsycK3fR41FxVUrFu1J9z9YvDc\"",
    "mtime": "2023-03-09T16:04:34.117Z",
    "size": 1343,
    "path": "../../.output/public/img/tomiai/PC/tomiai-page-icon.svg"
  },
  "/img/tomiai/PC/tomiai-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"183c8-e9Gin6neBvSJmmc3+1wYnOSr+Wc\"",
    "mtime": "2023-03-09T16:04:34.117Z",
    "size": 99272,
    "path": "../../.output/public/img/tomiai/PC/tomiai-page-img-01.webp"
  },
  "/img/tomiai/PC/tomiai-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"23ec0-a+yzkhQbKndpQbcWS6k4VQw9fyA\"",
    "mtime": "2023-03-09T16:04:34.116Z",
    "size": 147136,
    "path": "../../.output/public/img/tomiai/PC/tomiai-page-img-02.webp"
  },
  "/img/tomiai/PC/tomiai-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"a124-TjdjHkdHl0BGaNKCOG3jpgHx4JY\"",
    "mtime": "2023-03-09T16:04:34.114Z",
    "size": 41252,
    "path": "../../.output/public/img/tomiai/PC/tomiai-page-img-03.webp"
  },
  "/img/tomiai/PC/tomiai-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"10ef0-urto7W81KluVeAJd+9nYf+Qba2Y\"",
    "mtime": "2023-03-09T16:04:34.114Z",
    "size": 69360,
    "path": "../../.output/public/img/tomiai/PC/tomiai-page-img-04.webp"
  },
  "/img/tomiai/PC/tomiai-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"adb8-Bsu6lpqjDgFJz20b2oMX6UFLNwk\"",
    "mtime": "2023-03-09T16:04:34.113Z",
    "size": 44472,
    "path": "../../.output/public/img/tomiai/PC/tomiai-page-img-05.webp"
  },
  "/img/tomiai/PC/tomiai-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"10382-+9uGqtJngVoaomRINE2CavBAUx4\"",
    "mtime": "2023-03-09T16:04:34.113Z",
    "size": 66434,
    "path": "../../.output/public/img/tomiai/PC/tomiai-page-img-06.webp"
  },
  "/img/tomiai/PC/tomiai-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"131ea-Af2vaVSaCMCxsQIcVWxED4aO2mQ\"",
    "mtime": "2023-03-09T16:04:34.112Z",
    "size": 78314,
    "path": "../../.output/public/img/tomiai/PC/tomiai-page-intro.webp"
  },
  "/img/tomiai/PC/tomiai-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"fd0-o5c3lTT7yk4kr4uHq+mopWAiNX8\"",
    "mtime": "2023-03-09T16:04:34.111Z",
    "size": 4048,
    "path": "../../.output/public/img/tomiai/PC/tomiai-page-logo.svg"
  },
  "/img/tomiai/PC/tomiai-page.webp": {
    "type": "image/webp",
    "etag": "\"8868-GEkhZ3pDZ1u+8gGOJOy4vzUkzT4\"",
    "mtime": "2023-03-09T16:04:34.111Z",
    "size": 34920,
    "path": "../../.output/public/img/tomiai/PC/tomiai-page.webp"
  },
  "/img/unidance/JPG/unidance-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"be9c-w2BEdAYFCkGgGL0EW93Z2RfhiJE\"",
    "mtime": "2023-03-09T16:04:34.079Z",
    "size": 48796,
    "path": "../../.output/public/img/unidance/JPG/unidance-page-img-01.jpg"
  },
  "/img/unidance/JPG/unidance-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"10454-uy/hvO770N6nj74H42oTTBQxjko\"",
    "mtime": "2023-03-09T16:04:34.079Z",
    "size": 66644,
    "path": "../../.output/public/img/unidance/JPG/unidance-page-img-02.jpg"
  },
  "/img/unidance/JPG/unidance-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"b066-/7FL3+OKnQWF4ProzWDKUutgQpE\"",
    "mtime": "2023-03-09T16:04:34.078Z",
    "size": 45158,
    "path": "../../.output/public/img/unidance/JPG/unidance-page-img-03.jpg"
  },
  "/img/unidance/JPG/unidance-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"c545-D3BZl/PL8bB+0E8vVVCpdeim/2Q\"",
    "mtime": "2023-03-09T16:04:34.077Z",
    "size": 50501,
    "path": "../../.output/public/img/unidance/JPG/unidance-page-img-04.jpg"
  },
  "/img/unidance/JPG/unidance-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"f1b8-3oh77m6jU1kJucWbZFxzxfu462Q\"",
    "mtime": "2023-03-09T16:04:34.076Z",
    "size": 61880,
    "path": "../../.output/public/img/unidance/JPG/unidance-page-img-05.jpg"
  },
  "/img/unidance/JPG/unidance-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"cc07-3MNVy0sIr+6+YA0XoSigGomoI3g\"",
    "mtime": "2023-03-09T16:04:34.075Z",
    "size": 52231,
    "path": "../../.output/public/img/unidance/JPG/unidance-page-img-06.jpg"
  },
  "/img/unidance/JPG/unidance-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"25ae8-X68/y7H7iosrTpz9OFHrFiwLhfs\"",
    "mtime": "2023-03-09T16:04:34.074Z",
    "size": 154344,
    "path": "../../.output/public/img/unidance/JPG/unidance-page-img-07.jpg"
  },
  "/img/unidance/JPG/unidance-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"6fe9d-vE7ru3xTIJKckBMvTyZE2j8rSMQ\"",
    "mtime": "2023-03-09T16:04:34.072Z",
    "size": 458397,
    "path": "../../.output/public/img/unidance/JPG/unidance-page-img-08.jpg"
  },
  "/img/unidance/JPG/unidance-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"487f8-iJ6EOJdB+pbCgVAdT34TgoMAap4\"",
    "mtime": "2023-03-09T16:04:34.070Z",
    "size": 296952,
    "path": "../../.output/public/img/unidance/JPG/unidance-page-img-09.jpg"
  },
  "/img/unidance/JPG/unidance-page-intro.png": {
    "type": "image/png",
    "etag": "\"27ce4-eDLkUoEg5cXYIuldUutx/GZJKlU\"",
    "mtime": "2023-03-09T16:04:34.067Z",
    "size": 163044,
    "path": "../../.output/public/img/unidance/JPG/unidance-page-intro.png"
  },
  "/img/unidance/JPG/unidance-page.png": {
    "type": "image/png",
    "etag": "\"27ce4-eDLkUoEg5cXYIuldUutx/GZJKlU\"",
    "mtime": "2023-03-09T16:04:34.066Z",
    "size": 163044,
    "path": "../../.output/public/img/unidance/JPG/unidance-page.png"
  },
  "/img/unidance/Mobile/unidance-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"7cfe-aGPhAan5qtGB71S3EjjwvjzQRm4\"",
    "mtime": "2023-03-09T16:04:34.064Z",
    "size": 31998,
    "path": "../../.output/public/img/unidance/Mobile/unidance-page-img-01.webp"
  },
  "/img/unidance/Mobile/unidance-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"b06e-DYwTQg4+d32QWyC41NJA1QUZ9yU\"",
    "mtime": "2023-03-09T16:04:34.063Z",
    "size": 45166,
    "path": "../../.output/public/img/unidance/Mobile/unidance-page-img-02.webp"
  },
  "/img/unidance/Mobile/unidance-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"778a-asyLZwR+lrRa+u79nTUfojE3MqQ\"",
    "mtime": "2023-03-09T16:04:34.063Z",
    "size": 30602,
    "path": "../../.output/public/img/unidance/Mobile/unidance-page-img-03.webp"
  },
  "/img/unidance/Mobile/unidance-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"791e-eprbwUb5kFoIqFPYcigPxzN0tmY\"",
    "mtime": "2023-03-09T16:04:34.062Z",
    "size": 31006,
    "path": "../../.output/public/img/unidance/Mobile/unidance-page-img-04.webp"
  },
  "/img/unidance/Mobile/unidance-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"9c92-Iyk37fzE+axHFXcQLb8I0ztg/QM\"",
    "mtime": "2023-03-09T16:04:34.061Z",
    "size": 40082,
    "path": "../../.output/public/img/unidance/Mobile/unidance-page-img-05.webp"
  },
  "/img/unidance/Mobile/unidance-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"976a-OWlHHNFzjS5V/+0pSeWfTsVlW58\"",
    "mtime": "2023-03-09T16:04:34.061Z",
    "size": 38762,
    "path": "../../.output/public/img/unidance/Mobile/unidance-page-img-06.webp"
  },
  "/img/unidance/Mobile/unidance-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"8054-3JvgkzoMtKECbW02zcjt8grGAoU\"",
    "mtime": "2023-03-09T16:04:34.060Z",
    "size": 32852,
    "path": "../../.output/public/img/unidance/Mobile/unidance-page-img-07.webp"
  },
  "/img/unidance/Mobile/unidance-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"12bac-UFsgU6LiONX9+EiCLJo87NmXHIU\"",
    "mtime": "2023-03-09T16:04:34.059Z",
    "size": 76716,
    "path": "../../.output/public/img/unidance/Mobile/unidance-page-img-08.webp"
  },
  "/img/unidance/Mobile/unidance-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"b03a-Tw6B77d+5DhIVzhm5wRob30vzJw\"",
    "mtime": "2023-03-09T16:04:34.058Z",
    "size": 45114,
    "path": "../../.output/public/img/unidance/Mobile/unidance-page-img-09.webp"
  },
  "/img/unidance/Mobile/unidance-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"22c7c-MmaWKz7TqkSUuZ0fB47bHDqAjis\"",
    "mtime": "2023-03-09T16:04:34.058Z",
    "size": 142460,
    "path": "../../.output/public/img/unidance/Mobile/unidance-page-intro.webp"
  },
  "/img/unidance/Mobile/unidance-page.webp": {
    "type": "image/webp",
    "etag": "\"7164-pyTHG8D/m24MM4GfMGn1j59E31U\"",
    "mtime": "2023-03-09T16:04:34.057Z",
    "size": 29028,
    "path": "../../.output/public/img/unidance/Mobile/unidance-page.webp"
  },
  "/img/unidance/PC/unidance-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"ef1-X5vwCMGbKenNYLs8aoTHWfGk3Wc\"",
    "mtime": "2023-03-09T16:04:34.056Z",
    "size": 3825,
    "path": "../../.output/public/img/unidance/PC/unidance-page-icon.svg"
  },
  "/img/unidance/PC/unidance-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"6526-JpuRgSVvQvYX5ETnir+OcLT3Nug\"",
    "mtime": "2023-03-09T16:04:34.056Z",
    "size": 25894,
    "path": "../../.output/public/img/unidance/PC/unidance-page-img-01.webp"
  },
  "/img/unidance/PC/unidance-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"8e0c-iS0OAXh/LSHFkuob3UCr949hJ4I\"",
    "mtime": "2023-03-09T16:04:34.056Z",
    "size": 36364,
    "path": "../../.output/public/img/unidance/PC/unidance-page-img-02.webp"
  },
  "/img/unidance/PC/unidance-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"5f0e-2IUNl1JX7RD6JsfQ6eCD2hSf/2s\"",
    "mtime": "2023-03-09T16:04:34.055Z",
    "size": 24334,
    "path": "../../.output/public/img/unidance/PC/unidance-page-img-03.webp"
  },
  "/img/unidance/PC/unidance-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"622e-se2a6MdW6Aaf+Aa4kVzLdrP85z4\"",
    "mtime": "2023-03-09T16:04:34.055Z",
    "size": 25134,
    "path": "../../.output/public/img/unidance/PC/unidance-page-img-04.webp"
  },
  "/img/unidance/PC/unidance-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"79e2-vSzMcAP6rMyxCuauUGibbgZDw6E\"",
    "mtime": "2023-03-09T16:04:34.055Z",
    "size": 31202,
    "path": "../../.output/public/img/unidance/PC/unidance-page-img-05.webp"
  },
  "/img/unidance/PC/unidance-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"7ae6-UhmWy0L69n4upx+YxDxq4zjIdXg\"",
    "mtime": "2023-03-09T16:04:34.055Z",
    "size": 31462,
    "path": "../../.output/public/img/unidance/PC/unidance-page-img-06.webp"
  },
  "/img/unidance/PC/unidance-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"1abd6-lv17m5hnJy3iEuNe712TAh4Nw1M\"",
    "mtime": "2023-03-09T16:04:34.053Z",
    "size": 109526,
    "path": "../../.output/public/img/unidance/PC/unidance-page-img-07.webp"
  },
  "/img/unidance/PC/unidance-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"4406e-ifJNV/cqjf7P5GeIrL00dU54ZeU\"",
    "mtime": "2023-03-09T16:04:34.052Z",
    "size": 278638,
    "path": "../../.output/public/img/unidance/PC/unidance-page-img-08.webp"
  },
  "/img/unidance/PC/unidance-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"27a94-+KFMvvocYzzRIm/W5A12DaeE1sY\"",
    "mtime": "2023-03-09T16:04:34.051Z",
    "size": 162452,
    "path": "../../.output/public/img/unidance/PC/unidance-page-img-09.webp"
  },
  "/img/unidance/PC/unidance-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"6ac38-a0SzpJ1tnEgqhPs4ZKJfI9lbbmM\"",
    "mtime": "2023-03-09T16:04:34.050Z",
    "size": 437304,
    "path": "../../.output/public/img/unidance/PC/unidance-page-intro.webp"
  },
  "/img/unidance/PC/unidance-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"2119-aQr5S23yrGPGWAU2y1q3IhRGuQc\"",
    "mtime": "2023-03-09T16:04:34.049Z",
    "size": 8473,
    "path": "../../.output/public/img/unidance/PC/unidance-page-logo.svg"
  },
  "/img/unidance/PC/unidance-page.webp": {
    "type": "image/webp",
    "etag": "\"1590a-bYD8hl0W5q2kt8jfJ4FReMLDB80\"",
    "mtime": "2023-03-09T16:04:34.048Z",
    "size": 88330,
    "path": "../../.output/public/img/unidance/PC/unidance-page.webp"
  },
  "/img/wballiance/JPG/wballiance-page-img-01.png": {
    "type": "image/png",
    "etag": "\"14656-FgqDaU1BGM7/j0ayXA6Kb/BEkcA\"",
    "mtime": "2023-03-09T16:04:34.047Z",
    "size": 83542,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page-img-01.png"
  },
  "/img/wballiance/JPG/wballiance-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"6c16-1M3/cGt+oGBbHigZDCWKG/NR+jM\"",
    "mtime": "2023-03-09T16:04:34.046Z",
    "size": 27670,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page-img-02.jpg"
  },
  "/img/wballiance/JPG/wballiance-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"3c4a-Us3sv9m3DXx5dpKebSzIiYXngdM\"",
    "mtime": "2023-03-09T16:04:34.046Z",
    "size": 15434,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page-img-03.jpg"
  },
  "/img/wballiance/JPG/wballiance-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"693f-tg48TUhyjlAaM1XxJGIYllWVRqU\"",
    "mtime": "2023-03-09T16:04:34.046Z",
    "size": 26943,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page-img-04.jpg"
  },
  "/img/wballiance/JPG/wballiance-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"72e8-Y03CcnlzXiPxJ6fwxHQzHC2Nqt0\"",
    "mtime": "2023-03-09T16:04:34.046Z",
    "size": 29416,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page-img-05.jpg"
  },
  "/img/wballiance/JPG/wballiance-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"7401-ek/RyNsb7SWrVOBp9VVXqQUVMws\"",
    "mtime": "2023-03-09T16:04:34.045Z",
    "size": 29697,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page-img-06.jpg"
  },
  "/img/wballiance/JPG/wballiance-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"4592-CYb5DGTlpkopx5FkQVDSySvtHBA\"",
    "mtime": "2023-03-09T16:04:34.045Z",
    "size": 17810,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page-img-07.jpg"
  },
  "/img/wballiance/JPG/wballiance-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"10bec-rKlfExNVimya15A861MCRFgZY44\"",
    "mtime": "2023-03-09T16:04:34.045Z",
    "size": 68588,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page-img-08.jpg"
  },
  "/img/wballiance/JPG/wballiance-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"10e9b-4zByuojGjir52MBBAqu4mziu8Hc\"",
    "mtime": "2023-03-09T16:04:34.044Z",
    "size": 69275,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page-img-09.jpg"
  },
  "/img/wballiance/JPG/wballiance-page-img-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"ad6d-qOnsgroLixrKiidODoxrvgaDQrs\"",
    "mtime": "2023-03-09T16:04:34.044Z",
    "size": 44397,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page-img-10.jpg"
  },
  "/img/wballiance/JPG/wballiance-page-img-11.jpg": {
    "type": "image/jpeg",
    "etag": "\"17497-sn+hX7/KgyMhGeNiIGHMYzyK++M\"",
    "mtime": "2023-03-09T16:04:34.044Z",
    "size": 95383,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page-img-11.jpg"
  },
  "/img/wballiance/JPG/wballiance-page-intro.png": {
    "type": "image/png",
    "etag": "\"31637-EGr9cJRP8DxUUT0bdhVB5tnG2PU\"",
    "mtime": "2023-03-09T16:04:34.043Z",
    "size": 202295,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page-intro.png"
  },
  "/img/wballiance/JPG/wballiance-page.png": {
    "type": "image/png",
    "etag": "\"31637-EGr9cJRP8DxUUT0bdhVB5tnG2PU\"",
    "mtime": "2023-03-09T16:04:34.042Z",
    "size": 202295,
    "path": "../../.output/public/img/wballiance/JPG/wballiance-page.png"
  },
  "/img/wballiance/Mobile/wballiance-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"68c2-osbsA3dXqV8tpnWOvclRW2d/qQ0\"",
    "mtime": "2023-03-09T16:04:34.041Z",
    "size": 26818,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page-img-01.webp"
  },
  "/img/wballiance/Mobile/wballiance-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"5418-AqHeRFwYdUDE8oYI/ntxBRUZV/M\"",
    "mtime": "2023-03-09T16:04:34.041Z",
    "size": 21528,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page-img-02.webp"
  },
  "/img/wballiance/Mobile/wballiance-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"247e-bcYLj7G7MvAYEeeUbF2wJW9kbm4\"",
    "mtime": "2023-03-09T16:04:34.040Z",
    "size": 9342,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page-img-03.webp"
  },
  "/img/wballiance/Mobile/wballiance-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"5144-hk98/14lWZOzOSGeOu3ecutcGng\"",
    "mtime": "2023-03-09T16:04:34.040Z",
    "size": 20804,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page-img-04.webp"
  },
  "/img/wballiance/Mobile/wballiance-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"6174-cE/CAfSPglo2CXsPk1BTqnpWo0A\"",
    "mtime": "2023-03-09T16:04:34.040Z",
    "size": 24948,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page-img-05.webp"
  },
  "/img/wballiance/Mobile/wballiance-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"4ebe-SfCUetp1oMamo+KBaUIoaG9/tYs\"",
    "mtime": "2023-03-09T16:04:34.039Z",
    "size": 20158,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page-img-06.webp"
  },
  "/img/wballiance/Mobile/wballiance-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"3510-wWTBjv2iDbqY4+/0gUd2CoQqTV8\"",
    "mtime": "2023-03-09T16:04:34.039Z",
    "size": 13584,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page-img-07.webp"
  },
  "/img/wballiance/Mobile/wballiance-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"3342-Mbw5qBCp/yBgHnf4QD5J92Qxnj0\"",
    "mtime": "2023-03-09T16:04:34.039Z",
    "size": 13122,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page-img-08.webp"
  },
  "/img/wballiance/Mobile/wballiance-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"38a0-avHqDQb9iiVLI61FzWxYA0Q7bAM\"",
    "mtime": "2023-03-09T16:04:34.038Z",
    "size": 14496,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page-img-09.webp"
  },
  "/img/wballiance/Mobile/wballiance-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"5e54-zEfSsoCl9KWRAPiM5qmh2uoE5tI\"",
    "mtime": "2023-03-09T16:04:34.038Z",
    "size": 24148,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page-img-10.webp"
  },
  "/img/wballiance/Mobile/wballiance-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"90ea-a6G6UnqpmlHT0UxdWBZSJMgnIdA\"",
    "mtime": "2023-03-09T16:04:34.038Z",
    "size": 37098,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page-img-11.webp"
  },
  "/img/wballiance/Mobile/wballiance-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"37264-jHILSBu+8HJ20pgz1Oem3uv+jt0\"",
    "mtime": "2023-03-09T16:04:34.038Z",
    "size": 225892,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page-intro.webp"
  },
  "/img/wballiance/Mobile/wballiance-page.webp": {
    "type": "image/webp",
    "etag": "\"8d58-xcEMh7n6K3gAa9NY7vJ57dDxVU8\"",
    "mtime": "2023-03-09T16:04:34.036Z",
    "size": 36184,
    "path": "../../.output/public/img/wballiance/Mobile/wballiance-page.webp"
  },
  "/img/wballiance/PC/wballiance-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"109e-PP4nyfD8cFtefHHLiQZHvzK/PF8\"",
    "mtime": "2023-03-09T16:04:34.036Z",
    "size": 4254,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-icon.svg"
  },
  "/img/wballiance/PC/wballiance-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"12206-UYOq6GSrSnG7XimXiyMSmACm1WY\"",
    "mtime": "2023-03-09T16:04:34.035Z",
    "size": 74246,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-img-01.webp"
  },
  "/img/wballiance/PC/wballiance-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"578c-p0HshuEfs+ntKkNxxmt+3Yfpp0A\"",
    "mtime": "2023-03-09T16:04:34.035Z",
    "size": 22412,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-img-02.webp"
  },
  "/img/wballiance/PC/wballiance-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"2512-WsHJinvykJVHpr8gEJ3pHNTc+6g\"",
    "mtime": "2023-03-09T16:04:34.035Z",
    "size": 9490,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-img-03.webp"
  },
  "/img/wballiance/PC/wballiance-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"5328-qsGM4oqe7hevi0kw3Cl51rPKIyg\"",
    "mtime": "2023-03-09T16:04:34.034Z",
    "size": 21288,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-img-04.webp"
  },
  "/img/wballiance/PC/wballiance-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"6442-95feouHGDXoen/X7s+VkrrvxEo0\"",
    "mtime": "2023-03-09T16:04:34.034Z",
    "size": 25666,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-img-05.webp"
  },
  "/img/wballiance/PC/wballiance-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"50cc-HIfBpg4dwEwLD3cDmMqyetmEkMI\"",
    "mtime": "2023-03-09T16:04:34.034Z",
    "size": 20684,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-img-06.webp"
  },
  "/img/wballiance/PC/wballiance-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"3588-9TTz5clcmQExZna5q66W7M9oFTA\"",
    "mtime": "2023-03-09T16:04:34.034Z",
    "size": 13704,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-img-07.webp"
  },
  "/img/wballiance/PC/wballiance-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"bf40-Pcx+LegpfdRuRuIAC87oO7baZFA\"",
    "mtime": "2023-03-09T16:04:34.034Z",
    "size": 48960,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-img-08.webp"
  },
  "/img/wballiance/PC/wballiance-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"b98a-veod4LhJy80r1vzV72LiAZHsjiw\"",
    "mtime": "2023-03-09T16:04:34.033Z",
    "size": 47498,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-img-09.webp"
  },
  "/img/wballiance/PC/wballiance-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"9388-Z92LMocywxC7kl1Wdzard9rSMW0\"",
    "mtime": "2023-03-09T16:04:34.033Z",
    "size": 37768,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-img-10.webp"
  },
  "/img/wballiance/PC/wballiance-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"da70-/je57iLKqb0k2GkZ620VIFscFfc\"",
    "mtime": "2023-03-09T16:04:34.032Z",
    "size": 55920,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-img-11.webp"
  },
  "/img/wballiance/PC/wballiance-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"977e0-t3ffAa4fhFXjCwUeLh+/h6shTl0\"",
    "mtime": "2023-03-09T16:04:34.030Z",
    "size": 620512,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-intro.webp"
  },
  "/img/wballiance/PC/wballiance-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b75-bU+YBV3G5AD8/odmc4zdrJ1wxRs\"",
    "mtime": "2023-03-09T16:04:34.029Z",
    "size": 7029,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page-logo.svg"
  },
  "/img/wballiance/PC/wballiance-page.webp": {
    "type": "image/webp",
    "etag": "\"12214-Q8nbXlFZZpb0/fwXNSz4I5MUT0I\"",
    "mtime": "2023-03-09T16:04:34.029Z",
    "size": 74260,
    "path": "../../.output/public/img/wballiance/PC/wballiance-page.webp"
  },
  "/img/xplane/JPG/xplane-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"9705-jgktC56JcqzFpdKhBI/FLaKUAWU\"",
    "mtime": "2023-03-09T16:04:34.007Z",
    "size": 38661,
    "path": "../../.output/public/img/xplane/JPG/xplane-page-img-01.jpg"
  },
  "/img/xplane/JPG/xplane-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"dc5d-JH9BSamjsMdpfTkMvqS0lg6nWic\"",
    "mtime": "2023-03-09T16:04:34.007Z",
    "size": 56413,
    "path": "../../.output/public/img/xplane/JPG/xplane-page-img-02.jpg"
  },
  "/img/xplane/JPG/xplane-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"10cdb-SaPh0mrjgjWGG3YzHP1hol3LmLc\"",
    "mtime": "2023-03-09T16:04:34.007Z",
    "size": 68827,
    "path": "../../.output/public/img/xplane/JPG/xplane-page-img-03.jpg"
  },
  "/img/xplane/JPG/xplane-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"a723-DxTsBqx9bivkQlZaCWpIC2u7sto\"",
    "mtime": "2023-03-09T16:04:34.006Z",
    "size": 42787,
    "path": "../../.output/public/img/xplane/JPG/xplane-page-img-04.jpg"
  },
  "/img/xplane/JPG/xplane-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"3f25-QsdGGj8GEBFwQj84CmlSZg/eBi4\"",
    "mtime": "2023-03-09T16:04:34.006Z",
    "size": 16165,
    "path": "../../.output/public/img/xplane/JPG/xplane-page-img-05.jpg"
  },
  "/img/xplane/JPG/xplane-page-intro.png": {
    "type": "image/png",
    "etag": "\"11d37-4Dlz0Unl0aUeV7JnqKlJSi8IMdA\"",
    "mtime": "2023-03-09T16:04:34.006Z",
    "size": 73015,
    "path": "../../.output/public/img/xplane/JPG/xplane-page-intro.png"
  },
  "/img/xplane/JPG/xplane-page.png": {
    "type": "image/png",
    "etag": "\"11d37-4Dlz0Unl0aUeV7JnqKlJSi8IMdA\"",
    "mtime": "2023-03-09T16:04:34.004Z",
    "size": 73015,
    "path": "../../.output/public/img/xplane/JPG/xplane-page.png"
  },
  "/img/xplane/Mobile/xplane-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"28b6-9kUS++BrhAvoVbZSvy+LCbBSm2w\"",
    "mtime": "2023-03-09T16:04:34.003Z",
    "size": 10422,
    "path": "../../.output/public/img/xplane/Mobile/xplane-page-img-01.webp"
  },
  "/img/xplane/Mobile/xplane-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"bd0a-qHwny0ukvkI/Uh8spVQ/8mwvaBQ\"",
    "mtime": "2023-03-09T16:04:34.002Z",
    "size": 48394,
    "path": "../../.output/public/img/xplane/Mobile/xplane-page-img-02.webp"
  },
  "/img/xplane/Mobile/xplane-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"e0ca-AK/ceYLByHbL1a+bI9xObAxAcxA\"",
    "mtime": "2023-03-09T16:04:34.002Z",
    "size": 57546,
    "path": "../../.output/public/img/xplane/Mobile/xplane-page-img-03.webp"
  },
  "/img/xplane/Mobile/xplane-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"8100-VBM7vcrHE6bCSKV9PHd7L3zT+co\"",
    "mtime": "2023-03-09T16:04:34.002Z",
    "size": 33024,
    "path": "../../.output/public/img/xplane/Mobile/xplane-page-img-04.webp"
  },
  "/img/xplane/Mobile/xplane-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"4f48-HIpgO6A+sEBTsRBwIaHQeV6048M\"",
    "mtime": "2023-03-09T16:04:34.002Z",
    "size": 20296,
    "path": "../../.output/public/img/xplane/Mobile/xplane-page-img-05.webp"
  },
  "/img/xplane/Mobile/xplane-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"14f1c-ClmCgsBrV+EeafxKlHxKmueB5Dg\"",
    "mtime": "2023-03-09T16:04:34.001Z",
    "size": 85788,
    "path": "../../.output/public/img/xplane/Mobile/xplane-page-intro.webp"
  },
  "/img/xplane/Mobile/xplane-page.webp": {
    "type": "image/webp",
    "etag": "\"5f94-jZV3BejOwsB1+HgX/8i4U/3j78E\"",
    "mtime": "2023-03-09T16:04:34.001Z",
    "size": 24468,
    "path": "../../.output/public/img/xplane/Mobile/xplane-page.webp"
  },
  "/img/xplane/PC/xplane-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"130-CVP0YvgFSgFZvMpKFeS7JkB2ElY\"",
    "mtime": "2023-03-09T16:04:34.000Z",
    "size": 304,
    "path": "../../.output/public/img/xplane/PC/xplane-page-icon.svg"
  },
  "/img/xplane/PC/xplane-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"69c6-wXhNtCFAy7nnd/0PlYYedtiHXNE\"",
    "mtime": "2023-03-09T16:04:34.000Z",
    "size": 27078,
    "path": "../../.output/public/img/xplane/PC/xplane-page-img-01.webp"
  },
  "/img/xplane/PC/xplane-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"6112-eV5Xp8b0c/QRObYpN4Y8uMinVU4\"",
    "mtime": "2023-03-09T16:04:34.000Z",
    "size": 24850,
    "path": "../../.output/public/img/xplane/PC/xplane-page-img-02.webp"
  },
  "/img/xplane/PC/xplane-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"7220-JHEA9BYCE1Qg1Gx2G4SsnT/Qdo8\"",
    "mtime": "2023-03-09T16:04:34.000Z",
    "size": 29216,
    "path": "../../.output/public/img/xplane/PC/xplane-page-img-03.webp"
  },
  "/img/xplane/PC/xplane-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"42ae-m1eM7NShXtl9cC5I/j/8UPb/BE8\"",
    "mtime": "2023-03-09T16:04:33.999Z",
    "size": 17070,
    "path": "../../.output/public/img/xplane/PC/xplane-page-img-04.webp"
  },
  "/img/xplane/PC/xplane-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"2898-e+lqklsVqpR1F0nr+ClQgjltZ9s\"",
    "mtime": "2023-03-09T16:04:33.999Z",
    "size": 10392,
    "path": "../../.output/public/img/xplane/PC/xplane-page-img-05.webp"
  },
  "/img/xplane/PC/xplane-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"2b974-P7yBOTV/TnD5HubdST5gJapU/4Y\"",
    "mtime": "2023-03-09T16:04:33.998Z",
    "size": 178548,
    "path": "../../.output/public/img/xplane/PC/xplane-page-intro.webp"
  },
  "/img/xplane/PC/xplane-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"10c1-ER3muk1OL0RGWU4YLABxmk7QDHQ\"",
    "mtime": "2023-03-09T16:04:33.997Z",
    "size": 4289,
    "path": "../../.output/public/img/xplane/PC/xplane-page-logo.svg"
  },
  "/img/xplane/PC/xplane-page.webp": {
    "type": "image/webp",
    "etag": "\"bc92-2SfNtgxDdHadW4K+RxAZBf0OBUg\"",
    "mtime": "2023-03-09T16:04:33.997Z",
    "size": 48274,
    "path": "../../.output/public/img/xplane/PC/xplane-page.webp"
  },
  "/img/ximtexp/JPG/ximtexp-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a649-+MbZswh6IP49nNjwMb/N58tl2hY\"",
    "mtime": "2023-03-09T16:04:34.028Z",
    "size": 108105,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-img-01.jpg"
  },
  "/img/ximtexp/JPG/ximtexp-page-img-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"5005-5mmbagPbJEpPgCEv9GrX7GkI64o\"",
    "mtime": "2023-03-09T16:04:34.027Z",
    "size": 20485,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-img-02.jpg"
  },
  "/img/ximtexp/JPG/ximtexp-page-img-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"2dd4-xJDc7760qaCohRjXdrf+tlTGt1Y\"",
    "mtime": "2023-03-09T16:04:34.027Z",
    "size": 11732,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-img-03.jpg"
  },
  "/img/ximtexp/JPG/ximtexp-page-img-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"4745-2q205M7rh1nf6W93T/p9Pq8jiAs\"",
    "mtime": "2023-03-09T16:04:34.027Z",
    "size": 18245,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-img-04.jpg"
  },
  "/img/ximtexp/JPG/ximtexp-page-img-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"2cef-n75iFRP/sSZA4AHK5Tf1mRRhuWM\"",
    "mtime": "2023-03-09T16:04:34.026Z",
    "size": 11503,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-img-05.jpg"
  },
  "/img/ximtexp/JPG/ximtexp-page-img-06.jpg": {
    "type": "image/jpeg",
    "etag": "\"2e85-g1fmE1ioQiSBFEkRJ1mQk3eqdoA\"",
    "mtime": "2023-03-09T16:04:34.026Z",
    "size": 11909,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-img-06.jpg"
  },
  "/img/ximtexp/JPG/ximtexp-page-img-07.jpg": {
    "type": "image/jpeg",
    "etag": "\"4701-o0cs89IRq397xrm5hwlFmKgJlpI\"",
    "mtime": "2023-03-09T16:04:34.025Z",
    "size": 18177,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-img-07.jpg"
  },
  "/img/ximtexp/JPG/ximtexp-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"6a48-K+XzX7HskKDnNFzfZbqohp8PJvk\"",
    "mtime": "2023-03-09T16:04:34.025Z",
    "size": 27208,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-img-08.jpg"
  },
  "/img/ximtexp/JPG/ximtexp-page-img-09.jpg": {
    "type": "image/jpeg",
    "etag": "\"75df-c35Qi9+sf6A1+mI/X723xltBSrs\"",
    "mtime": "2023-03-09T16:04:34.025Z",
    "size": 30175,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-img-09.jpg"
  },
  "/img/ximtexp/JPG/ximtexp-page-img-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"d225-yN9wXeFHyxzKehn57kK1AaEW7UI\"",
    "mtime": "2023-03-09T16:04:34.024Z",
    "size": 53797,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-img-10.jpg"
  },
  "/img/ximtexp/JPG/ximtexp-page-img-11.jpg": {
    "type": "image/jpeg",
    "etag": "\"4b86-lxjfHhhVdyeBtQbC8bB90O6vrSI\"",
    "mtime": "2023-03-09T16:04:34.024Z",
    "size": 19334,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-img-11.jpg"
  },
  "/img/ximtexp/JPG/ximtexp-page-img-12.jpg": {
    "type": "image/jpeg",
    "etag": "\"65e4-72f4pFbH3kbGn3gthzBXwlQKM9I\"",
    "mtime": "2023-03-09T16:04:34.023Z",
    "size": 26084,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-img-12.jpg"
  },
  "/img/ximtexp/JPG/ximtexp-page-intro.png": {
    "type": "image/png",
    "etag": "\"1da2a-gfEh0d2CZUwE/yVcvG7T8gQHA9U\"",
    "mtime": "2023-03-09T16:04:34.023Z",
    "size": 121386,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page-intro.png"
  },
  "/img/ximtexp/JPG/ximtexp-page.png": {
    "type": "image/png",
    "etag": "\"1d1f3-MfesGMzUcFe1MHEQBp0kvudwjYo\"",
    "mtime": "2023-03-09T16:04:34.022Z",
    "size": 119283,
    "path": "../../.output/public/img/ximtexp/JPG/ximtexp-page.png"
  },
  "/img/ximtexp/Mobile/ximtexp-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"69c4-2Fht8uv1CoyECZL7g1m6IUtmoBw\"",
    "mtime": "2023-03-09T16:04:34.019Z",
    "size": 27076,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-img-01.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"231e-HgGS53nom7Dw+TTP4kH3iUGYfLM\"",
    "mtime": "2023-03-09T16:04:34.018Z",
    "size": 8990,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-img-02.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"100a-dhFw+HwTRV6zg27+7TdYZwotQ6M\"",
    "mtime": "2023-03-09T16:04:34.018Z",
    "size": 4106,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-img-03.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"1f00-giVpOq8sxqDMgmyRr4mZ0xhhVuA\"",
    "mtime": "2023-03-09T16:04:34.018Z",
    "size": 7936,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-img-04.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"f58-MNdVm1nL/xP5I/+911CvdWvtkXg\"",
    "mtime": "2023-03-09T16:04:34.018Z",
    "size": 3928,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-img-05.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"145a-q0ZEYxpc8W7ONKILj9vOTHRBsss\"",
    "mtime": "2023-03-09T16:04:34.018Z",
    "size": 5210,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-img-06.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"1eec-ZGfhVjtyZQq+7/3T1Oizd+J6NGU\"",
    "mtime": "2023-03-09T16:04:34.017Z",
    "size": 7916,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-img-07.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"2e76-pzpp5jK/DbiRNUjItQq538NngvY\"",
    "mtime": "2023-03-09T16:04:34.017Z",
    "size": 11894,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-img-08.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"35e2-NdzygcKoUMN8PGJozQa1Bn1p5GE\"",
    "mtime": "2023-03-09T16:04:34.017Z",
    "size": 13794,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-img-09.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"27f4-gm+EoAu//H4Qv8WrdJ1ZA++7Vdo\"",
    "mtime": "2023-03-09T16:04:34.017Z",
    "size": 10228,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-img-10.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"218c-F35J32Fh7erSVnvLzZVHBo1sGC0\"",
    "mtime": "2023-03-09T16:04:34.016Z",
    "size": 8588,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-img-11.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"2bc0-QCCMLi27QneXrfxoOoW2xNYlv6g\"",
    "mtime": "2023-03-09T16:04:34.016Z",
    "size": 11200,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-img-12.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"1856e-IgrCdpfE6+3wottxDNzuJbDKLXg\"",
    "mtime": "2023-03-09T16:04:34.015Z",
    "size": 99694,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page-intro.webp"
  },
  "/img/ximtexp/Mobile/ximtexp-page.webp": {
    "type": "image/webp",
    "etag": "\"5c90-wTK8jsZZYtcr2qRgwIyGLgfl/r8\"",
    "mtime": "2023-03-09T16:04:34.015Z",
    "size": 23696,
    "path": "../../.output/public/img/ximtexp/Mobile/ximtexp-page.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"124-OUJzWfbyk53Ht2hshIs5l5Y9a9s\"",
    "mtime": "2023-03-09T16:04:34.014Z",
    "size": 292,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-icon.svg"
  },
  "/img/ximtexp/PC/ximtexp-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"ca40-DU68XRyMoKK+LMdf69PhLq3b3cI\"",
    "mtime": "2023-03-09T16:04:34.014Z",
    "size": 51776,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-img-01.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"3942-Gq0n9J9tvcoqQdQ2ugvDw9g0HIo\"",
    "mtime": "2023-03-09T16:04:34.014Z",
    "size": 14658,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-img-02.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"178e-EA+4GwBe2OxLGCCdhral5leXXTQ\"",
    "mtime": "2023-03-09T16:04:34.014Z",
    "size": 6030,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-img-03.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"3008-q0s71XTFsK9KwHwOrYtKJfXvOnY\"",
    "mtime": "2023-03-09T16:04:34.013Z",
    "size": 12296,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-img-04.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"1652-7nkeoqDqU5YJM0CqrfrDefh9yHI\"",
    "mtime": "2023-03-09T16:04:34.013Z",
    "size": 5714,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-img-05.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"1e66-OpWeNJPlpdy3IlC4L2bC/EjPLbY\"",
    "mtime": "2023-03-09T16:04:34.013Z",
    "size": 7782,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-img-06.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"2e70-SbidH1WIuwOlH8uLWd4FuQiE93s\"",
    "mtime": "2023-03-09T16:04:34.013Z",
    "size": 11888,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-img-07.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"472a-dUNzUl6gcVotakzfluXwpsHXwVg\"",
    "mtime": "2023-03-09T16:04:34.013Z",
    "size": 18218,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-img-08.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"4f4a-Z2UUA/vZcabvpWgMDfpDyxZuB0o\"",
    "mtime": "2023-03-09T16:04:34.012Z",
    "size": 20298,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-img-09.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"8bb0-zwxvnEQUe0X3VNwnwIs+e4YKJEE\"",
    "mtime": "2023-03-09T16:04:34.011Z",
    "size": 35760,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-img-10.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"30a0-fbzDvoUblmEirO8vBLTt1fALsrA\"",
    "mtime": "2023-03-09T16:04:34.011Z",
    "size": 12448,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-img-11.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"4274-fZsnUSb6tmzwuGBP1yAMNznlvI0\"",
    "mtime": "2023-03-09T16:04:34.010Z",
    "size": 17012,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-img-12.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"39cf4-m9WRAM0o7Kt8FDOMjmnj/Z5UnMQ\"",
    "mtime": "2023-03-09T16:04:34.010Z",
    "size": 236788,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-intro.webp"
  },
  "/img/ximtexp/PC/ximtexp-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"5bb-yuL7Lo3pThaMI30AHfn61sN068U\"",
    "mtime": "2023-03-09T16:04:34.009Z",
    "size": 1467,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page-logo.svg"
  },
  "/img/ximtexp/PC/ximtexp-page.webp": {
    "type": "image/webp",
    "etag": "\"bc1e-Yr+Dbj9zynfuzxFAnpM+4AXxzIQ\"",
    "mtime": "2023-03-09T16:04:34.009Z",
    "size": 48158,
    "path": "../../.output/public/img/ximtexp/PC/ximtexp-page.webp"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"18a9b-TqJIap+jyfcV5+phJAwrXdPSAfY\"",
    "mtime": "2023-03-09T16:04:33.996Z",
    "size": 101019,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-01.jpg"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-02.png": {
    "type": "image/png",
    "etag": "\"12d06-OQhE/9GWRCZSYrSx0oBN6lw3ZQs\"",
    "mtime": "2023-03-09T16:04:33.995Z",
    "size": 77062,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-02.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-03.png": {
    "type": "image/png",
    "etag": "\"188ad-JVT4DNknBTDumuoNsjd8kyjFamY\"",
    "mtime": "2023-03-09T16:04:33.995Z",
    "size": 100525,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-03.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-04.png": {
    "type": "image/png",
    "etag": "\"5fe2-V4+VxfTGsidf/YMD3odnzA/uktQ\"",
    "mtime": "2023-03-09T16:04:33.994Z",
    "size": 24546,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-04.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-05.png": {
    "type": "image/png",
    "etag": "\"6b73-NgT56p0j7wTXK+TBJAevU4m41cM\"",
    "mtime": "2023-03-09T16:04:33.994Z",
    "size": 27507,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-05.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-06.png": {
    "type": "image/png",
    "etag": "\"6644-hsYGEyrJhn/ffFEnJqMd45kezi0\"",
    "mtime": "2023-03-09T16:04:33.993Z",
    "size": 26180,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-06.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-07.png": {
    "type": "image/png",
    "etag": "\"5e73-rCdUwxlrwIp5lsxsniyMjADDN0g\"",
    "mtime": "2023-03-09T16:04:33.993Z",
    "size": 24179,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-07.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-08.jpg": {
    "type": "image/jpeg",
    "etag": "\"13968-DoqK6QoCaRmVZap7tvhFpMQ8p54\"",
    "mtime": "2023-03-09T16:04:33.993Z",
    "size": 80232,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-08.jpg"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-09.png": {
    "type": "image/png",
    "etag": "\"a3c7-QQ3qgiOhcTi0y0AEPesYNnIHg4o\"",
    "mtime": "2023-03-09T16:04:33.992Z",
    "size": 41927,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-09.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-10.png": {
    "type": "image/png",
    "etag": "\"9216-sA5GAmfbrwQjKW6kAJwEIcIqCdY\"",
    "mtime": "2023-03-09T16:04:33.992Z",
    "size": 37398,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-10.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-11.png": {
    "type": "image/png",
    "etag": "\"96a6-B0kfUUDWd7ffJcb7RGy+73gzx5Y\"",
    "mtime": "2023-03-09T16:04:33.992Z",
    "size": 38566,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-11.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-12.png": {
    "type": "image/png",
    "etag": "\"70f3-1L0Z7c7V0gaMdeCPgw92qwpHLIM\"",
    "mtime": "2023-03-09T16:04:33.991Z",
    "size": 28915,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-12.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-13.png": {
    "type": "image/png",
    "etag": "\"95aa-s9Dq6FoeMFpX6/8KbXeewovEajk\"",
    "mtime": "2023-03-09T16:04:33.991Z",
    "size": 38314,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-13.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-14.png": {
    "type": "image/png",
    "etag": "\"a6bd-k0TWsl1DWKbiNYdMBA69l7lRyRg\"",
    "mtime": "2023-03-09T16:04:33.991Z",
    "size": 42685,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-14.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-15.png": {
    "type": "image/png",
    "etag": "\"a2d8-Ucsw2uZsubsvBgCbOwA0fJKU5Xs\"",
    "mtime": "2023-03-09T16:04:33.990Z",
    "size": 41688,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-15.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-img-16.png": {
    "type": "image/png",
    "etag": "\"986e-ie1n77YAYdJ82+TdlEHG5XJj3pU\"",
    "mtime": "2023-03-09T16:04:33.990Z",
    "size": 39022,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-img-16.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page-intro.png": {
    "type": "image/png",
    "etag": "\"1955d-77QOdCwi1oIHEmhaEVwRK5tQbY4\"",
    "mtime": "2023-03-09T16:04:33.989Z",
    "size": 103773,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page-intro.png"
  },
  "/img/zolotoaltaya/JPG/zolotoaltaya-page.png": {
    "type": "image/png",
    "etag": "\"1af7a-j6a2vAF1DBLwwIlkBOl3EnAwOnU\"",
    "mtime": "2023-03-09T16:04:33.989Z",
    "size": 110458,
    "path": "../../.output/public/img/zolotoaltaya/JPG/zolotoaltaya-page.png"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"51d6-k8rUmV3S+nkKgi/u7rLgtYgLrdU\"",
    "mtime": "2023-03-09T16:04:33.988Z",
    "size": 20950,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-01.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"58c2-jqPGxgfs6Pg1kIjtvBC3shIuu4s\"",
    "mtime": "2023-03-09T16:04:33.988Z",
    "size": 22722,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-02.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"6a9e-gdjLyoEetD2cqR1XI8Yi7zvGG+c\"",
    "mtime": "2023-03-09T16:04:33.987Z",
    "size": 27294,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-03.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"2418-9pLzkK8MRLROyo6H4lJzO/0DM7M\"",
    "mtime": "2023-03-09T16:04:33.987Z",
    "size": 9240,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-04.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"35de-EPzBVXwpqmqdbDNvB1bbYHrjvjs\"",
    "mtime": "2023-03-09T16:04:33.987Z",
    "size": 13790,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-05.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"27a6-FxXMB7Vd1BqLHFFPhz+H/wC4/BU\"",
    "mtime": "2023-03-09T16:04:33.986Z",
    "size": 10150,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-06.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"1598-KJY60MH1gbpWUs4QEGiPLd2r604\"",
    "mtime": "2023-03-09T16:04:33.986Z",
    "size": 5528,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-07.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"5c3e-swmSd9q6sedR0GxpLWEwhSy5hTU\"",
    "mtime": "2023-03-09T16:04:33.986Z",
    "size": 23614,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-08.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"cde6-T+Hj/yMKvu88XGRogqFTc0kEVzI\"",
    "mtime": "2023-03-09T16:04:33.986Z",
    "size": 52710,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-09.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"b0ac-ETF52qR7cgkIggN0UsQ5H0dVQqc\"",
    "mtime": "2023-03-09T16:04:33.985Z",
    "size": 45228,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-10.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"ade8-X+a5zkXrXRRjeos1JauDsZEjF6s\"",
    "mtime": "2023-03-09T16:04:33.985Z",
    "size": 44520,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-11.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"90b6-Q52CGism7qxwwfw38CrdaA3Pz0g\"",
    "mtime": "2023-03-09T16:04:33.984Z",
    "size": 37046,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-12.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"aade-KwF5MPy6hkf0vgintSPNI0WTPfU\"",
    "mtime": "2023-03-09T16:04:33.984Z",
    "size": 43742,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-13.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-14.webp": {
    "type": "image/webp",
    "etag": "\"c002-icLzrm2MsxD97UHlZHi395R9iI4\"",
    "mtime": "2023-03-09T16:04:33.984Z",
    "size": 49154,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-14.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-15.webp": {
    "type": "image/webp",
    "etag": "\"cada-MNcRNxCEWHq9gSwiFSLUDZ24jho\"",
    "mtime": "2023-03-09T16:04:33.983Z",
    "size": 51930,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-15.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-16.webp": {
    "type": "image/webp",
    "etag": "\"b5b8-VIWz2iubz5LbAdCrk36N23+GxzY\"",
    "mtime": "2023-03-09T16:04:33.983Z",
    "size": 46520,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-img-16.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"201aa-w1z47FQLBEaBT544hQ2TiXuRTVs\"",
    "mtime": "2023-03-09T16:04:33.982Z",
    "size": 131498,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page-intro.webp"
  },
  "/img/zolotoaltaya/Mobile/zolotoaltaya-page.webp": {
    "type": "image/webp",
    "etag": "\"76de-6ePveQaMMftt99WFD/bq6OZGEsM\"",
    "mtime": "2023-03-09T16:04:33.981Z",
    "size": 30430,
    "path": "../../.output/public/img/zolotoaltaya/Mobile/zolotoaltaya-page.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"28e8-3TJtSBiJsBGnyoT8yeJzeS+ek3s\"",
    "mtime": "2023-03-09T16:04:33.979Z",
    "size": 10472,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-icon.svg"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-01.webp": {
    "type": "image/webp",
    "etag": "\"eefa-zVgKFsUP3ROgdcLRaa5F51YJLqc\"",
    "mtime": "2023-03-09T16:04:33.979Z",
    "size": 61178,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-01.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-02.webp": {
    "type": "image/webp",
    "etag": "\"79d8-1wdbx/GChG6XfJZW+iLGDf9oXak\"",
    "mtime": "2023-03-09T16:04:33.979Z",
    "size": 31192,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-02.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-03.webp": {
    "type": "image/webp",
    "etag": "\"8cf0-H62Q4VCRquFRybdxrwcLmy43IcA\"",
    "mtime": "2023-03-09T16:04:33.978Z",
    "size": 36080,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-03.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-04.webp": {
    "type": "image/webp",
    "etag": "\"13cc-ysWtzgBN68OViWgpPjErwKbtC+E\"",
    "mtime": "2023-03-09T16:04:33.978Z",
    "size": 5068,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-04.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-05.webp": {
    "type": "image/webp",
    "etag": "\"1eae-o+RhQfkgkGLIey60zV5mO1CZo5A\"",
    "mtime": "2023-03-09T16:04:33.978Z",
    "size": 7854,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-05.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-06.webp": {
    "type": "image/webp",
    "etag": "\"159a-ftQK06GXf0zNeVOo19+IF9i2qzc\"",
    "mtime": "2023-03-09T16:04:33.978Z",
    "size": 5530,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-06.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-07.webp": {
    "type": "image/webp",
    "etag": "\"bdc-qAe9lo4gJas5AsrbhgGtU4ifZoI\"",
    "mtime": "2023-03-09T16:04:33.978Z",
    "size": 3036,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-07.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-08.webp": {
    "type": "image/webp",
    "etag": "\"fc4c-c9QXYmsGzn/PiqSoMapbSLDGRI4\"",
    "mtime": "2023-03-09T16:04:33.977Z",
    "size": 64588,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-08.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-09.webp": {
    "type": "image/webp",
    "etag": "\"50b6-2WNKlVYyxemQNiMVDqFDfIaCQOc\"",
    "mtime": "2023-03-09T16:04:33.977Z",
    "size": 20662,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-09.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-10.webp": {
    "type": "image/webp",
    "etag": "\"46b2-LTaqwa80jBkiWFt8vqlgLnmjL8E\"",
    "mtime": "2023-03-09T16:04:33.976Z",
    "size": 18098,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-10.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-11.webp": {
    "type": "image/webp",
    "etag": "\"47ae-iBUj4iy22EFPQjt42ysrLvreBXI\"",
    "mtime": "2023-03-09T16:04:33.976Z",
    "size": 18350,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-11.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-12.webp": {
    "type": "image/webp",
    "etag": "\"394e-TEu82XXDsRly3beH7e99hHmdStw\"",
    "mtime": "2023-03-09T16:04:33.975Z",
    "size": 14670,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-12.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-13.webp": {
    "type": "image/webp",
    "etag": "\"45d0-5ggIIOs8wNSFbLq/J9+g3PIXVhc\"",
    "mtime": "2023-03-09T16:04:33.975Z",
    "size": 17872,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-13.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-14.webp": {
    "type": "image/webp",
    "etag": "\"4a16-NrCmURM7e+cl739byTBUem7GyhI\"",
    "mtime": "2023-03-09T16:04:33.974Z",
    "size": 18966,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-14.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-15.webp": {
    "type": "image/webp",
    "etag": "\"4f5a-/z5wU1GOyC+7LiOqXOOLqsxQgw8\"",
    "mtime": "2023-03-09T16:04:33.974Z",
    "size": 20314,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-15.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-img-16.webp": {
    "type": "image/webp",
    "etag": "\"4590-ymd7GkNKdgmbep4strUYJ8AvtSo\"",
    "mtime": "2023-03-09T16:04:33.974Z",
    "size": 17808,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-img-16.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-intro.webp": {
    "type": "image/webp",
    "etag": "\"5ea6c-ZgQ+jDQd+h1Ql51ntgKE5N/G7Kk\"",
    "mtime": "2023-03-09T16:04:33.973Z",
    "size": 387692,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-intro.webp"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"2900-gBf2Bp6s3Je6bVtuAJMdxB3pbqo\"",
    "mtime": "2023-03-09T16:04:33.972Z",
    "size": 10496,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page-logo.svg"
  },
  "/img/zolotoaltaya/PC/zolotoaltaya-page.webp": {
    "type": "image/webp",
    "etag": "\"df90-VKyUhXHuNmH0/jyMY2qaTdwn4+Y\"",
    "mtime": "2023-03-09T16:04:33.972Z",
    "size": 57232,
    "path": "../../.output/public/img/zolotoaltaya/PC/zolotoaltaya-page.webp"
  },
  "/img/izenbot/Video/previews/izenbot-video-1.png": {
    "type": "image/png",
    "etag": "\"8a169-jGxfLVouYLxaJyJcpAbknAZGIBQ\"",
    "mtime": "2023-03-09T16:04:34.516Z",
    "size": 565609,
    "path": "../../.output/public/img/izenbot/Video/previews/izenbot-video-1.png"
  },
  "/img/izenbot/Video/previews/izenbot-video-2.png": {
    "type": "image/png",
    "etag": "\"1931fa-97C7K54dKhpWlXe+5itrSHvnv7g\"",
    "mtime": "2023-03-09T16:04:34.513Z",
    "size": 1651194,
    "path": "../../.output/public/img/izenbot/Video/previews/izenbot-video-2.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":2592000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const robots = [{ UserAgent: "*" }, { Allow: "/" }, { Disallow: "/404/" }, { BlankLine: true }, { Sitemap: "https://vorobeyart.ru/sitemap.xml" }];

const _kE9jNp = defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/plain");
  return render(await getRules(robots, event.req));
});
var Correspondence = /* @__PURE__ */ ((Correspondence2) => {
  Correspondence2[Correspondence2["User-agent"] = 0] = "User-agent";
  Correspondence2[Correspondence2["Crawl-delay"] = 1] = "Crawl-delay";
  Correspondence2[Correspondence2["Disallow"] = 2] = "Disallow";
  Correspondence2[Correspondence2["Allow"] = 3] = "Allow";
  Correspondence2[Correspondence2["Host"] = 4] = "Host";
  Correspondence2[Correspondence2["Sitemap"] = 5] = "Sitemap";
  Correspondence2[Correspondence2["Clean-param"] = 6] = "Clean-param";
  Correspondence2[Correspondence2["Comment"] = 7] = "Comment";
  Correspondence2[Correspondence2["BlankLine"] = 8] = "BlankLine";
  return Correspondence2;
})(Correspondence || {});
function render(rules) {
  return rules.map((rule) => {
    const value = String(rule.value).trim();
    switch (rule.key.toString()) {
      case Correspondence[7 /* Comment */]:
        return `# ${value}`;
      case Correspondence[8 /* BlankLine */]:
        return "";
      default:
        return `${rule.key}: ${value}`;
    }
  }).join("\n");
}
async function getRules(options, req) {
  const correspondences = {
    useragent: "User-agent",
    crawldelay: "Crawl-delay",
    disallow: "Disallow",
    allow: "Allow",
    host: "Host",
    sitemap: "Sitemap",
    cleanparam: "Clean-param",
    comment: "Comment",
    blankline: "BlankLine"
  };
  const rules = [];
  const parseRule = (rule) => {
    const parsed = {};
    for (const [key, value] of Object.entries(rule)) {
      parsed[String(key).toLowerCase().replace(/[\W_]+/g, "")] = value;
    }
    return parsed;
  };
  for (const rule of Array.isArray(options) ? options : [options]) {
    const parsed = parseRule(rule);
    const keys = Object.keys(correspondences).filter((key) => typeof parsed[key] !== "undefined");
    for (const key of keys) {
      const parsedKey = parsed[key];
      let values;
      values = typeof parsedKey === "function" ? await parsedKey(req) : parsedKey;
      values = Array.isArray(values) ? values : [values];
      for (const value of values) {
        const v = typeof value === "function" ? await value(req) : value;
        if (v === false) {
          continue;
        }
        rules.push({
          key: correspondences[key],
          value: v
        });
      }
    }
  }
  return rules;
}

const _lazy_268udz = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/robots.txt', handler: _kE9jNp, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_268udz, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}

export { useRuntimeConfig as a, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
