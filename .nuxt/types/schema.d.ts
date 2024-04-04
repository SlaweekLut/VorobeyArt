import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["yandexMetrika"]?: typeof import("yandex-metrika-module-nuxt3").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["delayHydration"]?: typeof import("nuxt-delay-hydration").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["beastcss"]?: typeof import("nuxt-beastcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["site"]?: typeof import("D:/inWork/VorobeyArt/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["yandex-metrika-module-nuxt3", Exclude<NuxtConfig["yandexMetrika"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["nuxt-delay-hydration", Exclude<NuxtConfig["delayHydration"], boolean>] | ["nuxt-beastcss", Exclude<NuxtConfig["beastcss"], boolean>] | ["D:/inWork/VorobeyArt/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: {
               lastmod: string,
            },

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },
  }
  interface PublicRuntimeConfig {
   yandexMetrika: {
      id: string,

      metrikaUrl: string,

      accurateTrackBounce: boolean,

      childIframe: boolean,

      clickmap: boolean,

      defer: boolean,

      useRuntimeConfig: boolean,

      trackHash: boolean,

      trackLinks: boolean,

      type: number,

      webvisor: boolean,

      triggerEvent: boolean,

      consoleLog: boolean,

      partytown: boolean,

      ecommerce: string,

      isDev: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }