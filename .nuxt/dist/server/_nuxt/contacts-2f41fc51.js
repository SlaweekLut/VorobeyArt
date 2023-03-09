import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import "destr";
import { T as TitlePage } from "./Title-f65f35b3.js";
import axios from "axios";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
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
import "defu";
const _imports_0 = "" + __publicAssetsURL("img/mark.png");
const contacts_vue_vue_type_style_index_0_scoped_3a12603b_lang = "";
const _sfc_main = {
  name: "ContactsPage",
  components: {
    TitlePage
    // yandexMap,
    // ymapMarker,
  },
  props: {
    curtains: String
  },
  data() {
    return {
      inputs: {
        name: "",
        email: "",
        about: "",
        phone: "",
        checked: false
      },
      disabled: false,
      client: false,
      address: 0,
      map: null,
      offices: [
        [59.933541, 30.295602],
        [69.014884, 33.089309]
      ]
    };
  },
  mounted() {
  },
  methods: {
    onSubmit() {
      const button = document.querySelector(".contacts-form__submit");
      const params = new URLSearchParams();
      params.append("name", this.inputs.name);
      params.append("email", this.inputs.email);
      params.append("about", this.inputs.about);
      params.append("phone", this.inputs.phone);
      let data = this;
      axios.post("/send.php", params, {
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
      }).then(function() {
        button.innerText = "Отправляется...";
        button.classList.add("is-sending");
        setTimeout(() => {
          button.innerText = "Отправлено";
          button.classList.remove("is-sending");
          data.disabled = true;
          data.inputs = {
            name: "",
            email: "",
            about: "",
            phone: "",
            checked: false
          };
        }, 2e3);
      }).catch(function() {
        data.inputs = {
          name: "",
          email: "",
          about: "",
          phone: "",
          checked: false
        };
        data.disabled = true;
        button.classList.add("is-error");
        button.innerText = "Попробуйте позже";
      });
    },
    goTo(address) {
      this.address = address;
      this.map.panTo(this.offices[address]);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TitlePage = resolveComponent("TitlePage");
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-3a12603b><div class="content contacts" data-v-3a12603b>`);
  _push(ssrRenderComponent(_component_TitlePage, { title: "Контакты" }, null, _parent));
  _push(`<div class="content__wrapper" data-v-3a12603b><div class="contacts__wrapper" data-v-3a12603b><div class="contacts__col" data-v-3a12603b><div class="contacts__row" data-v-3a12603b><a href="https://wa.me/79113119113" class="contacts__link" data-v-3a12603b><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3a12603b><path d="M0.985352 22.2182L2.49622 16.7031C1.32736 14.6735 0.860691 12.3149 1.16857 9.99313C1.47646 7.67132 2.54168 5.51593 4.19912 3.86109C5.85656 2.20625 8.01363 1.14441 10.3359 0.840177C12.6582 0.535945 15.016 1.00632 17.0438 2.17837C19.0716 3.35043 20.6561 5.1587 21.5516 7.32285C22.4472 9.487 22.6038 11.8862 21.9972 14.1484C21.3906 16.4106 20.0546 18.4095 18.1964 19.8352C16.3382 21.261 14.0616 22.0339 11.7195 22.0341C9.94283 22.0331 8.19473 21.5873 6.63458 20.7374L0.985352 22.2182ZM6.88871 18.8163L7.21291 19.0164C8.57613 19.8237 10.1311 20.2501 11.7155 20.2511C13.6774 20.2515 15.5839 19.5999 17.1351 18.3986C18.6863 17.1974 19.7944 15.5148 20.285 13.6151C20.7757 11.7155 20.6212 9.70674 19.8457 7.90454C19.0703 6.10233 17.7179 4.60894 16.0012 3.65913C14.2844 2.70932 12.3008 2.35696 10.362 2.65744C8.42315 2.95792 6.63918 3.8942 5.2905 5.31909C3.94182 6.74398 3.10491 8.57668 2.91135 10.5291C2.71779 12.4814 3.17856 14.4428 4.2212 16.1048L4.42132 16.4389L3.5268 19.7028L6.88871 18.8163Z" fill="#A3A3A3" data-v-3a12603b></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0819 13.9233C17.0158 13.8113 16.8377 13.7452 16.5716 13.6132C16.3054 13.4811 14.9987 12.8367 14.7545 12.7467C14.5104 12.6566 14.3343 12.6146 14.1542 12.8807C13.9741 13.1469 13.4678 13.7452 13.3137 13.9233C13.1596 14.1014 13.0015 14.1235 12.7374 13.9894C11.9574 13.6761 11.2376 13.2299 10.6102 12.6706C10.0288 12.1328 9.53039 11.5117 9.13134 10.8276C8.97525 10.5614 9.11333 10.4274 9.24741 10.2853C9.38149 10.1432 9.51356 9.97309 9.64764 9.81901C9.75767 9.68478 9.84735 9.53509 9.91379 9.37475C9.94882 9.30123 9.96513 9.2202 9.96129 9.13886C9.95745 9.05751 9.93357 8.97838 9.89177 8.90849C9.82573 8.77641 9.29143 7.46767 9.07131 6.93536C8.85118 6.40306 8.63706 6.48711 8.47097 6.4771C8.30487 6.4671 8.13878 6.4771 7.96268 6.4771C7.82591 6.47936 7.69113 6.51027 7.56705 6.56783C7.44296 6.62539 7.33232 6.70833 7.24226 6.81129C6.94383 7.09426 6.70712 7.43588 6.54698 7.81468C6.38685 8.19349 6.30676 8.60131 6.31174 9.01255C6.31174 10.3213 7.26428 11.586 7.39836 11.7641C7.53244 11.9422 9.27343 14.6277 11.9409 15.7784C12.4362 15.9921 12.9425 16.1791 13.4578 16.3387C14.0003 16.5035 14.5738 16.5398 15.1328 16.4448C15.643 16.3687 16.7057 15.8004 16.9338 15.1801C17.1619 14.5597 17.1479 14.0334 17.0819 13.9233Z" fill="#A3A3A3" data-v-3a12603b></path></svg></a><a href="https://t.me/Vorobey_Art" class="contacts__link" data-v-3a12603b><svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3a12603b><path fill-rule="evenodd" clip-rule="evenodd" d="M1.86721 9.14313C8.12277 6.41758 12.2938 4.62055 14.3803 3.75206C20.3397 1.27465 21.5844 0.844402 22.3849 0.828393C22.6817 0.822623 22.9729 0.910111 23.2174 1.07854C23.3889 1.22647 23.4983 1.43374 23.5235 1.65887C23.5666 1.93884 23.5787 2.22272 23.5596 2.50535C23.2374 5.90729 21.8386 14.13 21.1282 17.9301C20.828 19.531 20.2357 20.0774 19.6613 20.1314C18.4166 20.2454 17.4601 19.3069 16.2594 18.5165C14.3703 17.2778 13.3037 16.5153 11.4707 15.2986C9.35147 13.8978 10.7263 13.1354 11.9329 11.8827C12.2491 11.5545 17.7362 6.55966 17.8443 6.1074C17.8586 6.04062 17.8569 5.97142 17.8395 5.90538C17.8222 5.83934 17.7895 5.77831 17.7443 5.72718C17.6786 5.68613 17.6042 5.66096 17.5271 5.65366C17.45 5.64637 17.3722 5.65715 17.3 5.68516C17.1119 5.72652 14.0955 7.72032 8.25085 11.6666C7.39436 12.2549 6.61859 12.5417 5.92352 12.5271C5.15709 12.509 3.68424 12.0928 2.58762 11.7266C1.24485 11.2903 0.186257 11.0602 0.270305 10.3258C0.319667 9.94158 0.851966 9.54736 1.86721 9.14313Z" fill="#A3A3A3" data-v-3a12603b></path></svg></a><a href="#" class="contacts__link" data-v-3a12603b><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3a12603b><path d="M22.0971 3.04676C21.9702 2.5742 21.7213 2.14331 21.3754 1.79734C21.0294 1.45136 20.5985 1.20247 20.126 1.07564C18.389 0.609372 11.415 0.609375 11.415 0.609375C11.415 0.609375 4.44101 0.609372 2.70202 1.07564C2.23001 1.20357 1.79971 1.45284 1.4539 1.79864C1.10809 2.14445 0.858841 2.57475 0.730905 3.04676C0.26464 4.78575 0.264648 8.41382 0.264648 8.41382C0.264648 8.41382 0.26464 12.0419 0.730905 13.7809C0.858841 14.2529 1.10809 14.6832 1.4539 15.029C1.79971 15.3748 2.23001 15.6241 2.70202 15.752C4.44101 16.2183 11.415 16.2183 11.415 16.2183C11.415 16.2183 18.387 16.2183 20.126 15.752C20.5985 15.6252 21.0294 15.3763 21.3754 15.0303C21.7213 14.6843 21.9702 14.2534 22.0971 13.7809C22.5633 12.0419 22.5633 8.41382 22.5633 8.41382C22.5633 8.41382 22.5633 4.78575 22.0971 3.04676ZM9.18371 11.7577V5.06992L14.987 8.41382L9.18371 11.7577Z" fill="#A3A3A3" data-v-3a12603b></path></svg></a></div><a href="tel:+79113119113" class="contacts__link-text" data-v-3a12603b>+7 911 311 911 3</a><a href="mailto:team@vorobeyart.ru" class="contacts__link-text contacts__link-text--mail" data-v-3a12603b>team@vorobeyart.ru</a></div><div class="contacts__col" data-v-3a12603b><h2 class="contacts__description" data-v-3a12603b> Давайте вместе создадим крутой проект! Просто заполните форму ниже </h2></div></div><form id="contacts" action="POST" class="contacts-form" style="${ssrRenderStyle({ "--border": "url('../img/form-border.svg')" })}" data-v-3a12603b><div class="contacts-form__header" data-v-3a12603b><h2 class="contacts-form__title" data-v-3a12603b>Связаться с нами</h2><img${ssrRenderAttr("src", _imports_0)} alt="Марка" class="contacts-form__mark" data-v-3a12603b></div><div class="contacts-form__wrapper" data-v-3a12603b><div class="contacts-form__column" data-v-3a12603b><label class="${ssrRenderClass([{
    "contacts-form__label--full": $data.inputs.name.length > 0
  }, "contacts-form__label"])}" data-v-3a12603b><p class="contacts-form__text" data-v-3a12603b> Представьтесь, пожалуйста<span data-v-3a12603b>*</span></p><input${ssrRenderAttr("value", $data.inputs.name)} type="text" class="contacts-form__input" required data-v-3a12603b></label><label class="${ssrRenderClass([{
    "contacts-form__label--full": $data.inputs.email.length > 0
  }, "contacts-form__label"])}" data-v-3a12603b><p class="contacts-form__text" data-v-3a12603b> Эл. почта для ответа<span data-v-3a12603b>*</span></p><input${ssrRenderAttr("value", $data.inputs.email)} type="email" class="contacts-form__input" required data-v-3a12603b></label></div><div class="contacts-form__column" data-v-3a12603b><label class="${ssrRenderClass([{
    "contacts-form__label--full": $data.inputs.about.length > 0
  }, "contacts-form__label"])}" data-v-3a12603b><p class="contacts-form__text" data-v-3a12603b>О Вашем проекте</p><input${ssrRenderAttr("value", $data.inputs.about)} type="text" class="contacts-form__input" data-v-3a12603b></label><label class="${ssrRenderClass([{
    "contacts-form__label--full": $data.inputs.phone.length > 0
  }, "contacts-form__label"])}" data-v-3a12603b><p class="contacts-form__text" data-v-3a12603b>Телефон<span data-v-3a12603b>*</span></p><input${ssrRenderAttr("value", $data.inputs.phone)} type="tel" class="contacts-form__input" required data-v-3a12603b></label></div><div class="contacts-form__row" data-v-3a12603b><label class="checkbox" data-v-3a12603b><input${ssrIncludeBooleanAttr(Array.isArray($data.inputs.checked) ? ssrLooseContain($data.inputs.checked, null) : $data.inputs.checked) ? " checked" : ""} type="checkbox" class="checkbox__input" required data-v-3a12603b><div class="checkbox__box" data-v-3a12603b><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3a12603b><path d="M1.74609 8.19613L6.29316 12.9807L12.1392 1.01929" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-3a12603b></path></svg></div><p class="checkbox__text" data-v-3a12603b> Я ознакомлен с `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/policy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`политикой обработки персональных данных`);
      } else {
        return [
          createTextVNode("политикой обработки персональных данных")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` и согласен на их обработку </p></label><button class="contacts-form__submit" type="submit"${ssrIncludeBooleanAttr(
    !$data.inputs.checked || $data.inputs.name === "" || $data.inputs.email === "" || $data.inputs.phone === "" || $data.disabled
  ) ? " disabled" : ""} data-v-3a12603b> Отправить </button></div></div></form></div></div><div class="content contacts-maps" data-v-3a12603b><div class="content__wrapper" data-v-3a12603b><div class="contacts-maps__wrapper" data-v-3a12603b><div class="${ssrRenderClass([{ "contacts-address--active": $data.address === 0 }, "contacts-address"])}" data-v-3a12603b><p class="contacts-address__title" data-v-3a12603b>Санкт-Петербург</p><p class="contacts-address__text" data-v-3a12603b>ул. Галерная 22-А офис № 38</p></div><div class="${ssrRenderClass([{ "contacts-address--active": $data.address === 1 }, "contacts-address"])}" data-v-3a12603b><p class="contacts-address__title" data-v-3a12603b>Мурманск</p><p class="contacts-address__text" data-v-3a12603b>ул. П. Осипенко 37-А (2 этаж)</p></div></div></div></div><div id="contacts-map" class="contacts-map" data-v-3a12603b></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3a12603b"]]);
export {
  contacts as default
};
//# sourceMappingURL=contacts-2f41fc51.js.map
