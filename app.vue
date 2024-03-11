<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<!-- <Plug @pass="checkPass" v-if="!isDeveloper"/> -->
	<div class="main-container">
		<HeaderPage
			v-if="$route.matched[0]?.name !== 'NotFound'"
			:curtains="curtains"
			:pages="{
				contacts: currentPageName === 'contacts',
				works: currentPageName === 'works',
				about: currentPageName === 'about',
				policy: currentPageName === 'policy',
				services: currentPageName === 'services',
			}"
			:home="currentPageName === 'index'"
			@setCurtains="setCurtains"
			@setMenu="setMenu"
		/>
		<PreloaderElement v-if="$route.matched[0]?.name !== 'NotFound'" />
		<CurtainsElement
			v-if="$route.matched[0]?.name !== 'NotFound' && curtains !== 'Menu' && curtains !== 'Preloader'"
			:menu="this.menu"
			@setCurtains="setCurtains"
			@setMenu="setMenu"
		/>
		<!-- <DelayHydration> -->
		<!-- <Transition :name="curtains === 'Menu' ? 'menu' : 'page'"> -->
		<NuxtPage :model="model" v-slot="{ Component }" :class="{ menu: curtains === 'Menu' }" :curtains="curtains">
			<component :is="Component" :key="$route.path"> </component>
		</NuxtPage>
		<!-- </Transition> -->
		<!-- </DelayHydration> -->
	</div>
</template>

<script>
import HeaderPage from '~/components/Header.vue';
import PreloaderElement from '~/components/Preloader.vue';
import CurtainsElement from '~/components/Curtains.vue';
import Plug from './components/Plug.vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default {
	name: 'App',
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
			curtains: 'Preloader',
			menu: false,
			currentPageName: '',
			isDeveloper: false,
			pass: "Ff267S_Zs555",
			model: {
				loaded: false,
			}
		};
	},
	watch: {
		curtains() {
			console.log('%c%s', 'background: lightgreen; color: #222; padding: 2px 6px; border-radius: 20px;', 'Curtains:', this.curtains);
		},
		'$route.name': {
			handler: function (name) {
				this.currentPageName = name;
				console.log('%c%s', 'background: lightblue; color: #222; padding: 2px 6px; border-radius: 20px;', 'Current Page:', name);

				if ( name === 'works' || name === 'about' || name === 'policy' || name === 'services') {
					document.body.classList.add('lines');
				} else {
					document.body.classList.remove('lines');
				}
			},
			deep: true,
			// immediate: true,
		},
	},
	async mounted() {
		let password = localStorage.getItem('VorobeyArtPassword')
		if(password === this.pass) this.isDeveloper = true
		console.log(this.isDeveloper, password)
		this.currentPageName = this.$route?.name;
		if (
			this.currentPageName === 'works' ||
			this.currentPageName === 'about' ||
			this.currentPageName === 'policy' ||
			this.currentPageName === 'services'
		) {
			document.body.classList.add('lines');
		} else {
			document.body.classList.remove('lines');
		}

		if (this.curtains === 'Preloader') {
			setTimeout(() => {
				this.curtains = 'Nothing';
			}, 3500);
		}

		this.model.gltfLoader = new GLTFLoader().setPath( '/models/' );
		this.model.gltf = await this.model.gltfLoader.loadAsync( 'pero_by_agamurian.glb' )
		this.model.textureLoader = new THREE.CubeTextureLoader();
		this.model.texture = this.model.textureLoader.load([
			"/models/cubemap/0001.jpg",
			"/models/cubemap/0002.jpg",
			"/models/cubemap/0003.jpg",
			"/models/cubemap/0004.jpg",
			"/models/cubemap/0005.jpg",
			"/models/cubemap/0006.jpg",
		]);
		this.model.texture.encoding = THREE.sRGBEncoding;
	},
	methods: {
		setCurtains(curtains) {
			this.curtains = curtains;
		},
		setMenu(menu) {
			this.menu = menu;
			if (menu) {
				this.curtains = 'Menu';
				setTimeout(() => {
					this.menu = false;
					this.curtains = 'Nothing';
				}, 500);
			}
		},
		checkPass(e) {
			localStorage.setItem('VorobeyArtPassword', e);
			if(e === this.pass) this.isDeveloper = true
		}
	},
};
</script>

<style lang="sass">
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
	min-height: 100vh
	overflow-x: hidden
	overflow-y: auto
	background-size: 500vw 1281px

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
	min-height: 100vh
	width: 100vw
	overflow: hidden
	position: relative

.main-container 
	height: 100%
	min-height: 100vh

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

.menu.page-leave-active
	transition: 0s linear

.menu.page-enter-active
	transition: 0s linear

.menu.page-enter-from
	opacity: 0
.menu.page-enter-to
	opacity: 1

.menu.page-leave-from
	opacity: 1
.menu.page-leave-to
	opacity: 0

.content
	max-width: 1920px
	width: 100%
	margin: 120px auto 0
	padding: 0 93px 100px
	&__wrapper
		max-width: 1274px
		width: 100%
		margin: 0 auto
		position: relative
		z-index: 3

@media (max-width: 1440px)
	.content
		&__wrapper
			max-width: 1146px

@media (max-width: 1024px)
	.content
		margin: 46px auto 0
		padding: 0 41px 100px
		&__wrapper
			max-width: 798px

@media (max-width: 768px)
	.content
		padding: 0px 41px 50px
		&__wrapper
			max-width: 612px

@media (max-width: 425px)
	.content
		margin: 43px auto 0
		padding: 0 32px 50px
		&__wrapper
			max-width: 337px

@media (max-width: 366px)
	.content
		&__wrapper
			max-width: 284px
</style>
