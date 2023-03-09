import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
const index_vue_vue_type_style_index_0_scoped_4149cd4e_lang = "";
const _sfc_main = {
  name: "HomePage",
  props: {
    curtains: String
  },
  data() {
    return {
      prevSlide: null,
      activeSlide: 0,
      scroll: false,
      isChanged: false,
      isWait: false,
      redirect: false,
      slides: [
        {
          to: "/izenbot",
          title: "IZENBOT",
          description: "Разработка брендбука|и презентации",
          img: ["izenbot", "/izenbot-page"]
        },
        {
          to: "/hone",
          title: "H ONE",
          description: "Создание логотипа и|визуализация",
          img: ["hone", "/hone-page"]
        },
        {
          to: "/motorika",
          title: "MOTORIKA",
          date: "18/06/20",
          description: "Эксклюзивный дизайн|футболок",
          img: ["motorika", "/motorika-page"]
        },
        {
          to: "/energotekar",
          title: "ЭНЕРГОТЭК AR",
          description: "Разработка приложения AR|Play Market / App Store",
          img: ["energotekAR", "/energotekAR-page"]
        },
        {
          to: "/ukigassen",
          title: "UKIGASSEN",
          description: "Дизайн печатной|продукции",
          img: ["ukigassen", "/ukigassen-page"]
        }
      ]
    };
  },
  mounted() {
    let posX = 0;
    let wait;
    this.isWait = true;
    this.redirect = true;
    let autoSlider;
    const autoSliderFn = () => {
      this.scroll = true;
      this.isWait = true;
      wait = setTimeout(() => {
        this.isWait = false;
      }, 1200);
      this.activeSlide = this.activeSlide + 1 === this.slides.length ? 0 : this.activeSlide + 1;
      this.prevSlide = this.activeSlide - 1 === -1 ? this.slides.length - 1 : this.activeSlide - 1;
    };
    setTimeout(() => {
      this.isWait = false;
      this.redirect = false;
      autoSlider = setInterval(autoSliderFn, 5e3);
    }, 1900);
    window.addEventListener("touchstart", (event) => {
      const { clientX } = event.changedTouches[0];
      posX = clientX;
    });
    window.addEventListener("touchend", (event) => {
      const { clientX } = event.changedTouches[0];
      if (posX - clientX > 10) {
        this.scroll = true;
        this.isWait = true;
        this.activeSlide = this.activeSlide + 1 === this.slides.length ? 0 : this.activeSlide + 1;
        this.prevSlide = this.activeSlide - 1 === -1 ? this.slides.length - 1 : this.activeSlide - 1;
      }
      if (posX - clientX < -10) {
        this.scroll = true;
        this.isWait = true;
        this.activeSlide = this.activeSlide - 1 === -1 ? this.slides.length - 1 : this.activeSlide - 1;
        this.prevSlide = this.activeSlide + 1 === this.slides.length ? 0 : this.activeSlide + 1;
      }
      clearTimeout(wait);
      clearInterval(autoSlider);
      wait = setTimeout(() => {
        this.isWait = false;
      }, 1200);
      clearInterval(autoSlider);
      autoSlider = setInterval(autoSliderFn, 5e3);
    });
    window.addEventListener("wheel", (event) => {
      let isTouchPad = event.wheelDeltaY ? event.wheelDeltaY === -3 * event.deltaY : event.deltaMode === 0;
      let timer = isTouchPad ? 1200 : 100;
      this.scroll = true;
      if (!this.isChanged) {
        this.isChanged = true;
        this.isWait = true;
        clearTimeout(wait);
        clearInterval(autoSlider);
        wait = setTimeout(() => {
          this.isWait = false;
        }, 1200);
        setTimeout(() => {
          this.isChanged = false;
          autoSlider = setInterval(autoSliderFn, 5e3);
        }, timer);
        if (event.deltaY === 0)
          return;
        if (event.deltaY > 0) {
          this.activeSlide = this.activeSlide + 1 === this.slides.length ? 0 : this.activeSlide + 1;
          this.prevSlide = this.activeSlide - 1 === -1 ? this.slides.length - 1 : this.activeSlide - 1;
          this.dir = "next";
        } else {
          this.activeSlide = this.activeSlide - 1 === -1 ? this.slides.length - 1 : this.activeSlide - 1;
          this.prevSlide = this.activeSlide + 1 === this.slides.length ? 0 : this.activeSlide + 1;
          this.dir = "prev";
        }
      }
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home home-loaded" }, _attrs))} data-v-4149cd4e><h1 style="${ssrRenderStyle({ "opacity": "0", "position": "absolute", "width": "0", "height": "0" })}" data-v-4149cd4e>VorobeyArt - студия дизайна</h1><p class="background-text" data-v-4149cd4e>Creative</p><div class="home__wrapper" data-v-4149cd4e><!--[-->`);
  ssrRenderList($data.slides, (slide, index2) => {
    _push(`<div class="${ssrRenderClass([{
      "home-slides--active": index2 === $data.activeSlide,
      "home-slides--scroll": $data.isWait
    }, "home-slides"])}" data-v-4149cd4e>`);
    if (index2 === $data.activeSlide) {
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: slide.to,
        class: ["home-slides-info", {
          "home-slides-info--active": index2 === $data.activeSlide
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="home-slides__title" data-v-4149cd4e${_scopeId}><!--[-->`);
            ssrRenderList(slide.title, (letter) => {
              _push2(`<div class="${ssrRenderClass([{
                "home-slides__letters--space": letter === " ",
                "home-slides__letters--preloader": $props.curtains === "Preloader",
                "home-slides__letters--curtains": $data.redirect,
                "home-slides__letters--scroll": $data.isWait
              }, "home-slides__letters"])}" data-v-4149cd4e${_scopeId}><span data-v-4149cd4e${_scopeId}>${ssrInterpolate(letter)}</span><span data-v-4149cd4e${_scopeId}>${ssrInterpolate(letter)}</span><span data-v-4149cd4e${_scopeId}>${ssrInterpolate(letter)}</span></div>`);
            });
            _push2(`<!--]--></h2><p class="${ssrRenderClass([{
              "home-slides-info__bottom--preloader": $props.curtains === "Preloader",
              "home-slides-info__bottom--curtains": $data.redirect,
              "home-slides-info__bottom--scroll": $data.isWait
            }, "home-slides-info__text home-slides-info__bottom"])}" data-v-4149cd4e${_scopeId}>${ssrInterpolate(slide.description.slice(0, slide.description.indexOf("|")))} <br data-v-4149cd4e${_scopeId}> ${ssrInterpolate(slide.description.slice(slide.description.indexOf("|") + 1))}</p><div class="home-slides-info__pagination" data-v-4149cd4e${_scopeId}><!--[-->`);
            ssrRenderList($data.slides, (slide2, index3) => {
              _push2(`<div class="${ssrRenderClass([{
                "home-slides-info__bullet--prev": index3 === $data.prevSlide,
                "home-slides-info__bullet--active": index3 === $data.activeSlide,
                "home-slides-info__bullet--preloader": $props.curtains === "Preloader",
                "home-slides-info__bullet--curtains": $data.redirect,
                "home-slides-info__bullet--scroll": $data.isWait
              }, "home-slides-info__bullet"])}" data-v-4149cd4e${_scopeId}></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("h2", { class: "home-slides__title" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(slide.title, (letter) => {
                  return openBlock(), createBlock("div", {
                    key: letter,
                    class: ["home-slides__letters", {
                      "home-slides__letters--space": letter === " ",
                      "home-slides__letters--preloader": $props.curtains === "Preloader",
                      "home-slides__letters--curtains": $data.redirect,
                      "home-slides__letters--scroll": $data.isWait
                    }]
                  }, [
                    createVNode("span", null, toDisplayString(letter), 1),
                    createVNode("span", null, toDisplayString(letter), 1),
                    createVNode("span", null, toDisplayString(letter), 1)
                  ], 2);
                }), 128))
              ]),
              createVNode("p", {
                class: ["home-slides-info__text home-slides-info__bottom", {
                  "home-slides-info__bottom--preloader": $props.curtains === "Preloader",
                  "home-slides-info__bottom--curtains": $data.redirect,
                  "home-slides-info__bottom--scroll": $data.isWait
                }]
              }, [
                createTextVNode(toDisplayString(slide.description.slice(0, slide.description.indexOf("|"))) + " ", 1),
                createVNode("br"),
                createTextVNode(" " + toDisplayString(slide.description.slice(slide.description.indexOf("|") + 1)), 1)
              ], 2),
              createVNode("div", { class: "home-slides-info__pagination" }, [
                (openBlock(true), createBlock(Fragment, null, renderList($data.slides, (slide2, index3) => {
                  return openBlock(), createBlock("div", {
                    key: index3,
                    class: ["home-slides-info__bullet", {
                      "home-slides-info__bullet--prev": index3 === $data.prevSlide,
                      "home-slides-info__bullet--active": index3 === $data.activeSlide,
                      "home-slides-info__bullet--preloader": $props.curtains === "Preloader",
                      "home-slides-info__bullet--curtains": $data.redirect,
                      "home-slides-info__bullet--scroll": $data.isWait
                    }]
                  }, null, 2);
                }), 128))
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    if (index2 === $data.activeSlide) {
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: slide.to,
        class: ["home-slides__link", {
          "home-slides__link--wait": $data.isWait || $props.curtains === "Preloader"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<picture data-v-4149cd4e${_scopeId}><source media="(max-width: 768px)"${ssrRenderAttr("srcset", `/img/${slide.img[0]}/Mobile/${slide.img[1]}.webp`)} type="image/webp" data-v-4149cd4e${_scopeId}><source media="(min-width: 769px)"${ssrRenderAttr("srcset", `/img/${slide.img[0]}/PC/${slide.img[1]}.webp`)} type="image/webp" data-v-4149cd4e${_scopeId}><source${ssrRenderAttr("srcset", `/img/${slide.img[0]}/JPG/${slide.img[1]}.png`)} type="image/png" data-v-4149cd4e${_scopeId}><img${ssrRenderAttr("srcset", `/img/${slide.img[0]}/PC/${slide.img[1]}.webp`)}${ssrRenderAttr("alt", slide.img[0])} type="image/webp" class="${ssrRenderClass([{
              "home-slides__img--preloader": $props.curtains === "Preloader",
              "home-slides__img--curtains": $data.redirect,
              "home-slides__img--scroll": $data.isWait,
              "home-slides__img--active": index2 === $data.activeSlide
              // 'home-slides__img--wait': isWait || curtains === 'Preloader' || redirect,
            }, "home-slides__img"])}" data-v-4149cd4e${_scopeId}></picture>`);
          } else {
            return [
              createVNode("picture", null, [
                createVNode("source", {
                  media: "(max-width: 768px)",
                  srcset: `/img/${slide.img[0]}/Mobile/${slide.img[1]}.webp`,
                  type: "image/webp"
                }, null, 8, ["srcset"]),
                createVNode("source", {
                  media: "(min-width: 769px)",
                  srcset: `/img/${slide.img[0]}/PC/${slide.img[1]}.webp`,
                  type: "image/webp"
                }, null, 8, ["srcset"]),
                createVNode("source", {
                  srcset: `/img/${slide.img[0]}/JPG/${slide.img[1]}.png`,
                  type: "image/png"
                }, null, 8, ["srcset"]),
                createVNode("img", {
                  srcset: `/img/${slide.img[0]}/PC/${slide.img[1]}.webp`,
                  alt: slide.img[0],
                  type: "image/webp",
                  class: ["home-slides__img", {
                    "home-slides__img--preloader": $props.curtains === "Preloader",
                    "home-slides__img--curtains": $data.redirect,
                    "home-slides__img--scroll": $data.isWait,
                    "home-slides__img--active": index2 === $data.activeSlide
                    // 'home-slides__img--wait': isWait || curtains === 'Preloader' || redirect,
                  }]
                }, null, 10, ["srcset", "alt"])
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    if (index2 === $data.activeSlide) {
      _push(`<div class="${ssrRenderClass([{
        "home-slides__background--preloader": $props.curtains === "Preloader",
        "home-slides__background--curtains": $data.redirect,
        "home-slides__background--scroll": $data.isWait,
        "home-slides__background--active": index2 === $data.activeSlide
        // 'home-slides__background--wait': isWait || curtains === 'Preloader' || redirect,
      }, "home-slides__background"])}" data-v-4149cd4e></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--><div class="${ssrRenderClass([{
    "home-slides-pagination--preloader": $props.curtains === "Preloader",
    "home-slides-pagination--curtains": $data.redirect
  }, "home-slides-pagination"])}" data-v-4149cd4e><div class="home-slides-pagination__wrapper" data-v-4149cd4e><p class="home-slides-pagination__current" data-v-4149cd4e> 0 <span class="home-slides-pagination__wrapper-col" data-v-4149cd4e><!--[-->`);
  ssrRenderList($data.slides.length, (n) => {
    _push(`<span class="home-slides-pagination__active" style="${ssrRenderStyle({ right: `${105 * $data.activeSlide}px` })}" data-v-4149cd4e>${ssrInterpolate(n)}</span>`);
  });
  _push(`<!--]--></span></p><div class="home-slides-pagination__line" data-v-4149cd4e></div><p class="home-slides-pagination__count" data-v-4149cd4e>0${ssrInterpolate($data.slides.length)}</p></div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/works",
    class: "home-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="${ssrRenderClass([{
          "home-link__circle-big--preloader": $props.curtains === "Preloader",
          "home-link__circle-big--curtains": $data.redirect
        }, "home-link__circle home-link__circle-big"])}" data-v-4149cd4e${_scopeId}></span><span class="${ssrRenderClass([{
          "home-link__circle-small--preloader": $props.curtains === "Preloader",
          "home-link__circle-small--curtains": $data.redirect
        }, "home-link__circle home-link__circle-small"])}" data-v-4149cd4e${_scopeId}></span><span class="home-link__text" data-v-4149cd4e${_scopeId}><span class="${ssrRenderClass([{
          "home-link__wrapper--preloader": $props.curtains === "Preloader",
          "home-link__wrapper--curtains": $data.redirect
        }, "home-link__wrapper"])}" data-v-4149cd4e${_scopeId}>ВСЕ Проекты</span></span>`);
      } else {
        return [
          createVNode("span", {
            class: ["home-link__circle home-link__circle-big", {
              "home-link__circle-big--preloader": $props.curtains === "Preloader",
              "home-link__circle-big--curtains": $data.redirect
            }]
          }, null, 2),
          createVNode("span", {
            class: ["home-link__circle home-link__circle-small", {
              "home-link__circle-small--preloader": $props.curtains === "Preloader",
              "home-link__circle-small--curtains": $data.redirect
            }]
          }, null, 2),
          createVNode("span", { class: "home-link__text" }, [
            createVNode("span", {
              class: ["home-link__wrapper", {
                "home-link__wrapper--preloader": $props.curtains === "Preloader",
                "home-link__wrapper--curtains": $data.redirect
              }]
            }, "ВСЕ Проекты", 2)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4149cd4e"]]);
export {
  index as default
};
//# sourceMappingURL=index-3a3d5856.js.map
