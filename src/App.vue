<template>
	<HeaderPage
		:curtains="curtains"
		v-if="this.$route.matched[0]?.name !== 'NotFound'"
		@setCurtains="setCurtains"
		:pages="{ contacts: this.$route.path === '/contacts', works: this.$route.path === '/works', about: this.$route.path === '/about', policy: this.$route.path === '/policy' }"
		:home="this.$route.path === '/'"
	/>
	<PreloaderElement v-if="this.$route.matched[0]?.name !== 'NotFound'" />
	<CurtainsElement v-if="this.$route.matched[0]?.name !== 'NotFound' && this.curtains !== 'Menu' && this.curtains !== 'Preloader'" @setCurtains="setCurtains" />
	<router-view v-slot="{ Component }">
		<Transition :name="curtains === 'Menu' ? 'menu' : 'page'">
			<component :is="Component" :key="$router.path" :class="{ menu: curtains === 'Menu' }" :curtains="curtains"> </component>
		</Transition>
	</router-view>
</template>

<script>
import HeaderPage from './components/Header.vue';
import PreloaderElement from './components/Preloader.vue';
import CurtainsElement from './components/Curtains.vue';
export default {
	name: 'App',
	components: {
		PreloaderElement,
		HeaderPage,
		CurtainsElement,
	},
	data() {
		return {
			curtains: 'Preloader',
		};
	},
	methods: {
		setCurtains(curtains) {
			// if (curtains === 'Menu') {
			// 	window.scrollTo(0, 0);
			// }
			this.curtains = curtains;
		},
	},
	mounted() {
		if (this.curtains === 'Preloader') {
			setTimeout(() => {
				this.curtains = 'Nothing';
			}, 3900);
		}
	},
	watch: {
		curtains() {
			console.log(this.curtains);
		},
	},
};
</script>

<style lang="sass">
// http://meyerweb.com/eric/tools/css/reset/
// v5.0.1 | 20191019
// License: none (public domain)
// @font-face
// 	font-family: Qanelas
// 	src: url("@/assets/fonts/Qanelas-Black.woff2") format("woff2"), url("@/assets/fonts/Qanelas-Black.woff") format("woff"), url("@/assets/fonts/Qanelas-Black.eot") format("eot"), url("@/assets/fonts/Qanelas-Black.ttf") format("ttf")
// 	font-weight: 900
// 	font-display: swap
// @font-face
// 	font-family: Qanelas
// 	src: url("@/assets/fonts/Qanelas-ExtraBold.woff2") format("woff2"), url("@/assets/fonts/Qanelas-ExtraBold.woff") format("woff"), url("@/assets/fonts/Qanelas-ExtraBold.eot") format("eot"), url("@/assets/fonts/Qanelas-ExtraBold.ttf") format("ttf")
// 	font-weight: 800
// 	font-display: swap
// @font-face
// 	font-family: Qanelas
// 	src: url("@/assets/fonts/Qanelas-Bold.woff2") format("woff2"), url("@/assets/fonts/Qanelas-Bold.woff") format("woff"), url("@/assets/fonts/Qanelas-Bold.eot") format("eot"), url("@/assets/fonts/Qanelas-Bold.ttf") format("ttf")
// 	font-weight: 700
// 	font-display: swap
// @font-face
// 	font-family: Qanelas
// 	src: url("@/assets/fonts/Qanelas-SemiBold.woff2") format("woff2"), url("@/assets/fonts/Qanelas-SemiBold.woff") format("woff"), url("@/assets/fonts/Qanelas-SemiBold.eot") format("eot"), url("@/assets/fonts/Qanelas-SemiBold.ttf") format("ttf")
// 	font-weight: 600
// 	font-display: swap
// @font-face
// 	font-family: Qanelas
// 	src: url("@/assets/fonts/Qanelas-Medium.woff2") format("woff2"), url("@/assets/fonts/Qanelas-Medium.woff") format("woff"), url("@/assets/fonts/Qanelas-Medium.eot") format("eot"), url("@/assets/fonts/Qanelas-Medium.ttf") format("ttf")
// 	font-weight: 500
// 	font-display: swap
// @font-face
// 	font-family: Qanelas
// 	src: url("@/assets/fonts/Qanelas-Regular.woff2") format("woff2"), url("@/assets/fonts/Qanelas-Regular.woff") format("woff"), url("@/assets/fonts/Qanelas-Regular.eot") format("eot"), url("@/assets/fonts/Qanelas-Regular.ttf") format("ttf")
// 	font-weight: 400
// 	font-display: swap
// @font-face
// 	font-family: Qanelas
// 	src: url("@/assets/fonts/Qanelas-Light.woff2") format("woff2"), url("@/assets/fonts/Qanelas-Light.woff") format("woff"), url("@/assets/fonts/Qanelas-Light.eot") format("eot"), url("@/assets/fonts/Qanelas-Light.ttf") format("ttf")
// 	font-weight: 300
// 	font-display: swap
// @font-face
// 	font-family: Qanelas
// 	src: url("@/assets/fonts/Qanelas-UltraLight.woff2") format("woff2"), url("@/assets/fonts/Qanelas-UltraLight.woff") format("woff"), url("@/assets/fonts/Qanelas-UltraLight.eot") format("eot"), url("@/assets/fonts/Qanelas-UltraLight.ttf") format("ttf")
// 	font-weight: 200
// 	font-display: swap
// @font-face
// 	font-family: Qanelas
// 	src: url("@/assets/fonts/Qanelas-Thin.woff2") format("woff2"), url("@/assets/fonts/Qanelas-Thin.woff") format("woff"), url("@/assets/fonts/Qanelas-Thin.eot") format("eot"), url("@/assets/fonts/Qanelas-Thin.ttf") format("ttf")
// 	font-weight: 100
// 	font-display: swap
// @font-face
// 	font-family: TTCommons
// 	src: url("@/assets/fonts/TTCommons-Bold.woff") format("woff"), url("@/assets/fonts/TTCommons-Bold.eot") format("eot"), url("@/assets/fonts/TTCommons-Bold.ttf") format("ttf")
// 	font-weight: 700
// 	font-display: swap


@font-face
	font-family: Gilroy
	src: url('@/assets/fonts/Gilroy-Regular.eot')
	src: local('Gilroy Regular'), local('Gilroy-Regular'), url('@/assets/fonts/Gilroy-Regular.eot?#iefix') format('embedded-opentype'), url('@/assets/fonts/Gilroy-Regular.woff2') format('woff2'), url('@/assets/fonts/Gilroy-Regular.woff') format('woff'), url('@/assets/fonts/Gilroy-Regular.ttf') format('truetype')
	font-weight: normal
	font-style: normal
	font-display: swap
@font-face
	font-family: Gilroy
	src: url('@/assets/fonts/Gilroy-Bold.eot')
	src: local('Gilroy Bold'), local('Gilroy-Bold'), url('@/assets/fonts/Gilroy-Bold.eot?#iefix') format('embedded-opentype'), url('@/assets/fonts/Gilroy-Bold.woff2') format('woff2'), url('@/assets/fonts/Gilroy-Bold.woff') format('woff'), url('@/assets/fonts/Gilroy-Bold.ttf') format('truetype')
	font-weight: bold
	font-style: normal
	font-display: swap
@font-face
	font-family: Gilroy
	src: url('@/assets/fonts/Gilroy-Black.eot')
	src: local('Gilroy Black'), local('Gilroy-Black'), url('@/assets/fonts/Gilroy-Black.eot?#iefix') format('embedded-opentype'), url('@/assets/fonts/Gilroy-Black.woff2') format('woff2'), url('@/assets/fonts/Gilroy-Black.woff') format('woff'), url('@/assets/fonts/Gilroy-Black.ttf') format('truetype')
	font-weight: 900
	font-style: normal
	font-display: swap
	font-family: Gilroy
@font-face
	src: url('@/assets/fonts/Gilroy-Light.eot')
	src: local('Gilroy Light'), local('Gilroy-Light'), url('@/assets/fonts/Gilroy-Light.eot?#iefix') format('embedded-opentype'), url('@/assets/fonts/Gilroy-Light.woff2') format('woff2'), url('@/assets/fonts/Gilroy-Light.woff') format('woff'), url('@/assets/fonts/Gilroy-Light.ttf') format('truetype')
	font-weight: 300
	font-style: normal
	font-display: swap
	font-family: Gilroy
@font-face
	src: url('@/assets/fonts/Gilroy-Semibold.eot')
	src: local('Gilroy Semibold'), local('Gilroy-Semibold'), url('@/assets/fonts/Gilroy-Semibold.eot?#iefix') format('embedded-opentype'), url('@/assets/fonts/Gilroy-Semibold.woff2') format('woff2'), url('@/assets/fonts/Gilroy-Semibold.woff') format('woff'), url('@/assets/fonts/Gilroy-Semibold.ttf') format('truetype')
	font-weight: 600
	font-style: normal
	font-display: swap
	font-family: Gilroy
@font-face
	src: url('@/assets/fonts/Gilroy-Medium.eot')
	src: local('Gilroy Medium'), local('Gilroy-Medium'), url('@/assets/fonts/Gilroy-Medium.eot?#iefix') format('embedded-opentype'), url('@/assets/fonts/Gilroy-Medium.woff2') format('woff2'), url('@/assets/fonts/Gilroy-Medium.woff') format('woff'), url('@/assets/fonts/Gilroy-Medium.ttf') format('truetype')
	font-weight: 500
	font-style: normal
	font-display: swap
	font-family: Gilroy
@font-face
	src: url('@/assets/fonts/Gilroy-UltraLight.eot')
	src: local('Gilroy UltraLight'), local('Gilroy-UltraLight'), url('@/assets/fonts/Gilroy-UltraLight.eot?#iefix') format('embedded-opentype'), url('@/assets/fonts/Gilroy-UltraLight.woff2') format('woff2'), url('@/assets/fonts/Gilroy-UltraLight.woff') format('woff'), url('@/assets/fonts/Gilroy-UltraLight.ttf') format('truetype')
	font-weight: 200
	font-style: normal
	font-display: swap
	font-family: Gilroy
@font-face
	src: url('@/assets/fonts/Gilroy-Extrabold.eot')
	src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'), url('@/assets/fonts/Gilroy-Extrabold.eot?#iefix') format('embedded-opentype'), url('@/assets/fonts/Gilroy-Extrabold.woff2') format('woff2'), url('@/assets/fonts/Gilroy-Extrabold.woff') format('woff'), url('@/assets/fonts/Gilroy-Extrabold.ttf') format('truetype')
	font-weight: 800
	font-style: normal
	font-display: swap
	font-family: Gilroy
@font-face
	src: url('@/assets/fonts/Gilroy-Thin.eot')
	src: local('Gilroy Thin'), local('Gilroy-Thin'), url('@/assets/fonts/Gilroy-Thin.eot?#iefix') format('embedded-opentype'), url('@/assets/fonts/Gilroy-Thin.woff2') format('woff2'), url('@/assets/fonts/Gilroy-Thin.woff') format('woff'), url('@/assets/fonts/Gilroy-Thin.ttf') format('truetype')
	font-weight: 100
	font-style: normal
	font-display: swap
	font-family: Gilroy

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video
	margin: 0
	padding: 0
	border: 0
	font-size: 100%
	font: inherit
	line-height: 120%
	vertical-align: baseline

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section
	display: block

/* HTML5 hidden-attribute fix for newer browsers */
*[hidden]
	display: none

menu, ol, ul
	list-style: none

blockquote, q
	quotes: none

blockquote:before, blockquote:after,
q:before, q:after
	content: ''
	content: none

table
	border-collapse: collapse
	border-spacing: 0

body
	margin: 0
	padding: 0
	line-height: 1

*
	box-sizing: border-box
	font-family: Gilroy !important
	font-weight: 400
	color: #222222
	outline: none
	-webkit-tap-highlight-color: transparent
	&:active, &:focus, &:hover, &:focus-within
		outline: none
	&::-webkit-scrollbar
		width: 0
		height: 0

#app
	max-width: 100vw
	overflow: hidden

.page-leave-active
	transition: .5s linear

.page-enter-active
	transition: 0s linear .5s

.page-enter-from
	opacity: 0
.page-enter-to
	opacity: 1

.page-leave-from
	opacity: 1
.page-leave-to
	opacity: 0

.menu-leave-active
	transition: 0s linear

.menu-enter-active
	transition: 0s linear

.menu-enter-from
	opacity: 0
.menu-enter-to
	opacity: 1

.menu-leave-from
	opacity: 1
.menu-leave-to
	opacity: 0
</style>
