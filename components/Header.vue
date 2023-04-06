<template>
	<div class="header-placeholder header-placeholder--home"></div>
	<header
		class="header"
		:class="{
			'header--home': home,
			'header--preloader': curtains === 'Preloader',
			'header--curtains': curtains === 'Curtains' || curtains === 'Header',
			'header--scrolling': headerScrollTop,
			// 'header--nocase': pages.about || pages.works || pages.contacts || pages.policy,
		}"
	>
		<div
			class="header__wrapper"
			:class="{
				'header__wrapper--open': menu,
				'header__wrapper--line': (pages.about || pages.works || pages.contacts || pages.policy || pages.services) && !home,
			}"
		>
			<NuxtLink
				to="/"
				class="header-logo"
				:class="{ 'header-logo--scroll': headerScrollLogo }"
				@click="
					() => {
						if (menu) {
							menu = false;
							$emit('setCurtains', 'Nothing');
							$emit('setMenu', true);
						}
					}
				"
			>
				<img class="header-logo__img" src="/img/Logo-mini.svg" alt="On Main" />
				<span class="header-logo__crumbread"></span>
				<span class="header-logo__text">Vorobey Art</span>
			</NuxtLink>

			<div class="nav-row">
				<NuxtLink to="/about" class="nav-row__link"> О нас </NuxtLink>
				<NuxtLink to="/services" class="nav-row__link"> Услуги </NuxtLink>
				<NuxtLink to="/works" class="nav-row__link"> Проекты </NuxtLink>
				<NuxtLink to="/contacts" class="nav-row__link"> Контакты </NuxtLink>
			</div>

			<a href="https://t.me/Vorobey_Art" class="header-start-button" :class="{ 'header-start-button--nav': menu }" @mousemove="startPorject">
				<span>Обсудить</span>
				<div class="header-start-button__fill"></div>
			</a>
			<button
				aria-label="Menu navigation"
				class="header-menu"
				:class="{
					'header-menu--open': menu,
					'header-menu--close': menu === false,
				}"
				@click.stop.prevent="menuHandle"
			>
				<div class="header-menu__wrapper">
					<span class="header-menu__element header-menu__element--1"></span>
					<span class="header-menu__element header-menu__element--2"></span>
					<span class="header-menu__element header-menu__element--3"></span>
				</div>
			</button>
			<div class="nav" :class="{ 'nav--open': menu, 'nav--close': menu === false }">
				<div class="nav__wrapper">
					<nav class="nav__nav">
						<NuxtLink to="/about" class="nav__link" @click="clickHandle"> <sup>/01</sup> О нас </NuxtLink>
						<NuxtLink to="/services" class="nav__link" @click="clickHandle"> <sup>/02</sup> Услуги </NuxtLink>
						<NuxtLink to="/works" class="nav__link" @click="clickHandle"> <sup>/03</sup> Проекты </NuxtLink>
						<NuxtLink to="/contacts" class="nav__link" @click="clickHandle"> <sup>/04</sup> Контакты </NuxtLink>
					</nav>
					<img src="/img/Logo-big.svg" alt="Навигация" class="nav__logo" />
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'HeaderPage', // <--- add this line
	props: {
		home: Boolean,
		pages: {
			about: Boolean,
			works: Boolean,
			contacts: Boolean,
			policy: Boolean,
			services: Boolean,
		},
		curtains: String,
	},
	emits: ['setCurtains', 'setMenu'],
	data() {
		return {
			menu: false,
			headerScrollTop: true,
			headerScrollLogo: false,
		};
	},
	mounted() {
		let lastScrollTop = 0;
		window.addEventListener('scroll', () => {
			let delta = window.pageYOffset || document.documentElement.scrollTop;

			// console.log(delta);
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
			// console.log(window);
			this.$emit('setCurtains', 'Nothing');
			this.$emit('setMenu', true);
		},
		menuHandle() {
			console.log('click');
			this.menu = !this.menu;
			if (this.menu) {
				this.$emit('setCurtains', 'Menu');
			} else {
				this.$emit('setCurtains', 'Nothing');
			}
		},
		startPorject(e) {
			const target = e.target.getBoundingClientRect();
			const x = e.clientX - target.left;
			const y = e.clientY - target.top;
			const filler = e.target.children[1];
			filler.style.left = `${x}px`;
			filler.style.top = `${y}px`;
		},
	},
};
</script>

<style lang="scss" scoped>
.nav-row {
	display: flex;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	gap: 50px;
	&__link {
		color: #222;
		font-weight: 500;
		font-size: 20px;
		text-decoration: none;
		transition: color 0.15s ease;
		pointer-events: auto;
		&:hover {
			color: #0181c8;
		}
	}
}
.header-start-button {
	height: 40px;
	background: #0181c8;
	color: #fff;
	font-size: 20px;
	font-weight: 400;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0px 27px;
	border-radius: 80px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 200px;
	cursor: pointer;
	z-index: 5;
	pointer-events: all;
	overflow: hidden;
	max-width: 145px;
	width: 100%;
	transition: color 0.6s ease, background 0s ease 0.1s;
	// animation: headerStartButton 1s ease both .5s
	border: none;
	outline: none;
	span {
		z-index: 1;
		position: relative;
		font-size: inherit;
		color: inherit;
		pointer-events: none;
	}
	&--hidden {
		display: none;
	}
	&__fill {
		position: absolute;
		width: 370px;
		height: 370px;
		border-radius: 50%;
		background-color: #f8f8f8;
		transition: transform 0.6s ease;
		transform-origin: 0% 0%;
		transform: scale(0) translate(-50%, -50%);
		pointer-events: none;
	}
	&:hover {
		color: #222222;
		background: #f8f8f8;
		transition: color 0.6s ease, background 0.3s ease 0.1s;
	}
	&:hover &__fill {
		transform: scale(1) translate(-50%, -50%);
	}
}
.nav {
	position: fixed;
	height: 100vh;
	width: 100vw;
	left: 50%;
	overflow: hidden;
	transform: translate(-50%, 0);
	z-index: 5;
	top: 0;
	background-color: #f6f6f6;
	clip-path: inset(0 0 100% 0);
	transition: clip-path 0.6s cubic-bezier(0.38, 0.005, 0.215, 1), -webkit-clip-path 0.6s cubic-bezier(0.38, 0.005, 0.215, 1);
	pointer-events: auto;

	&__wrapper {
		max-width: 1920px;
		position: relative;
		height: 100vh;
		margin: 0 auto;
	}
	&--open {
		clip-path: inset(0 0 0 0);
		.nav {
			&__link {
				opacity: 1;
				transform: translate3d(0, 0, 0);
				transition: opacity 0.6s linear, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
				&:nth-child(4) {
					transition-delay: 0.6s;
				}
				&:nth-child(3) {
					transition-delay: 0.5s;
				}
				&:nth-child(2) {
					transition-delay: 0.4s;
				}
				&:nth-child(1) {
					transition-delay: 0.3s;
				}
			}
			&__logo {
				opacity: 1;
			}
		}
	}
	&--close {
		clip-path: inset(0 0 100% 0);
		.nav {
			&__link {
				opacity: 0;
				transition: opacity 0.6s linear, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s;
			}
			&__logo {
				opacity: 0;
			}
		}
	}
	&__nav {
		display: flex;
		flex-direction: column;
		position: absolute;
		gap: clamp(34px, 6vw, 60px);
		top: 50%;
		left: 11.3%;
		transform: translate(0, -50%);
	}
	&__link {
		font-size: 60px;
		text-decoration: none;
		font-weight: 700;
		opacity: 0;
		transform: translate3d(0, -50%, 0);
		display: flex;
		align-items: flex-start;
		sup {
			font-size: 20px;
			margin-right: 43px;
			font-weight: 600;
			font-feature-settings: 'tnum' on, 'lnum' on;
		}
		&:hover {
			transition: 0s ease !important;
			color: #0181c8;
		}
		&:focus {
			transition: 0.3s ease 0.1s !important;
		}
	}
	&__logo {
		position: absolute;
		right: -40px;
		top: 50%;
		max-width: 70%;
		transform: translate(0, -50%);
		opacity: 0;
		transition: 0.5s ease 0.2s;
		z-index: -1;
	}
}
.header-menu {
	border: 0;
	background: transparent;
	padding: 0;
	z-index: 6;
	pointer-events: auto;
	outline: none;
	top: 50%;
	padding: 10px;
	right: 93px;
	display: flex;
	align-items: center;
	cursor: pointer;
	transform: translateY(-50%);
	position: absolute;
	&__wrapper {
		min-height: 20px;
		width: 32px;
		position: relative;
	}
	&--close {
		.header-menu__element {
			&--1 {
				animation: burgerTopReverse 0.6s ease forwards !important;
			}
			&--2 {
				animation: burgerMiddleReverse 0.6s ease forwards !important;
			}
			&--3 {
				animation: burgerBottomReverse 0.6s ease forwards !important;
			}
		}
	}
	&--open {
		.header-menu__element {
			&--1 {
				animation: burgerTop 0.6s ease forwards !important;
			}
			&--2 {
				animation: burgerMiddle 0.6s ease forwards !important;
			}
			&--3 {
				animation: burgerBottom 0.6s ease forwards !important;
			}
		}
	}
	&__element {
		background: #222222;
		width: 100%;
		height: 2px;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 1px;
		transform-origin: center center;
		transition: 0.3s ease;
		&--1 {
			top: 0;
		}
		&--2 {
			width: 24px;
			height: 1px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&--3 {
			top: auto;
			bottom: 0;
		}
	}
	&:not(&--open):hover {
		.header-menu__element--2 {
			animation: burgerMiddleHover 0.6s ease forwards !important;
		}
	}
}
.header {
	display: flex;
	width: 100vw;
	margin: 0 auto;
	pointer-events: none;
	z-index: 10;
	top: 0;
	justify-content: center;
	min-height: 140px;
	position: fixed;
	transform: translateY(0);
	transition: transform 0.6s cubic-bezier(0.38, 0.005, 0.215, 1);

	&--home {
		.header__wrapper {
			z-index: 10;
			position: fixed;
			top: 0;
		}
		&.header--curtains {
			.header-menu {
				&__element {
					&--1 {
						animation: headerBurgerTop 1s ease both 1s;
					}
					&--2 {
						animation: headerBurgerMiddle 1s ease both 1s;
					}
					&--3 {
						animation: headerBurgerBottom 1s ease both 1s;
					}
				}
			}
			.header-logo {
				&__crumbread {
					animation: headerLogoCrumbread 1s ease both 1s;
				}
				&__text {
					animation: headerLogoText 1s ease both 1s;
				}
				&__img {
					animation: headerLogoText 1s ease both 1s;
				}
			}
		}
	}
	&__wrapper {
		max-width: 100vw;
		width: 100%;
		padding: 49px 93px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 6;
		left: 0;
		&--line {
			position: fixed;
			background: #ffffffcc;
			backdrop-filter: blur(5px);
			border-bottom: 1px solid #ebebeb;
		}
		&--open {
			position: fixed;
			top: 0;
			// .header-logo--scroll {
			// 	animation: headerLogo 0.3s ease both 0.5s;
			// }
		}
	}
	&--preloader {
		.header-menu {
			&__element {
				&--1 {
					animation: headerBurgerTop 1s ease both 2.7s;
				}
				&--2 {
					animation: headerBurgerMiddle 1s ease both 2.7s;
				}
				&--3 {
					animation: headerBurgerBottom 1s ease both 2.7s;
				}
			}
		}
		.header-logo {
			&__crumbread {
				animation: headerLogoCrumbread 1s ease both 2.7s;
			}
			&__text {
				animation: headerLogoText 1s ease both 2.7s;
			} // .header-start-button
			// 	animation: headerStartButton 1s ease both 2.7s
		}
	}
	&:not(&--scrolling) {
		transform: translateY(-100%);
	}
}
@keyframes headerLogo {
	0% {
		transform: translateY(-100px);
	}
	100% {
		transform: translateY(0);
	}
}
@keyframes headerLogoCrumbread {
	0% {
		transform: scale(0);
	}
	25% {
		transform: scale(2);
		opacity: 1;
	}
	50% {
		transform: scale(2);
		opacity: 0.3;
	}
	62% {
		transform: scale(2);
		opacity: 0.7;
	}
	75% {
		transform: scale(2);
		opacity: 1;
	}
	100% {
		transform: scale(1);
	}
}
@keyframes headerStartButton {
	0% {
		opacity: 0;
		transform: scale(0);
	}
	100% {
		opacity: 100;
		transform: scale(1);
	}
}
@keyframes headerLogoText {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
}
@keyframes scrollHeader {
	0% {
		top: -100%;
	}
	100% {
		top: 0;
	}
}
.header-placeholder {
	&--home {
		min-height: 140px;
	}
}
.header-logo {
	text-decoration: none;
	display: flex;
	align-items: center;
	gap: 40px;
	position: relative;
	z-index: 6;
	pointer-events: auto;
	outline: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;
	&__crumbread {
		border-radius: 50%;
		width: 5px;
		height: 5px;
		transition: 0.3s ease-out;
		background-color: #0181c8;
	}
	&__text {
		transition: 0.3s ease-out;
		font-size: 20px;
	}
	&__img {
		width: 39px;
		height: 42px;
	}
	&--open {
		position: fixed;
	}
}
@media (max-width: 1440px) {
	.header__wrapper {
		padding: 49px 73px;
	}
}
@media (max-width: 1024px) {
	.nav-row {
		display: none;
	}
	.header-start-button {
		top: 50px;
		right: 112px;
	}
	.header-placeholder {
		&--home {
			min-height: 102px;
		}
	}
	.nav {
		&__link {
			font-size: 80px;
			sup {
				font-size: 18px;
			}
		}
		&__logo {
			right: -162px;
		}
	}
	.header-menu {
		right: 41px;
	}
	.header {
		min-height: 102px;
		&__wrapper {
			padding: 30px 41px;
		}
	}
}
@media (max-width: 768px) {
	.header-start-button {
		opacity: 0;
		pointer-events: none;
		top: 85vh;
		left: 50%;
		transform: translateX(-50%) translate3d(0, -50%, 0);
		z-index: 6;
		transition: opacity 0.1s linear, transform 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.header-start-button--nav {
		transition: opacity 0.6s linear, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
		transition-delay: 0.8s;
		opacity: 1;
		transform: translateX(-50%) translate3d(0, 0, 0);
		pointer-events: auto;
	}
	.header-placeholder {
		&--home {
			position: relative;
			min-height: 102px;
		}
	}
	.header {
		min-height: 102px;
		&--scroll {
			position: fixed;
		}
		&--home {
			min-height: 102px;
			position: fixed;
			&.header--curtains {
				.header-logo {
					&__text {
						animation: headerText 1s ease both 1s;
					}
				}
			}
		}
		&:not(&--home) &__wrapper {
			background-color: #ffffffcc;
			backdrop-filter: blur(5px);
			position: fixed;
			border-bottom: 1px solid #d0d0d0;
			align-items: center;
		}
		&__wrapper {
			padding: 30px 41px;
		}
		&--preloader {
			.header-logo {
				&__text {
					animation: headerText 1s ease both 2.7s;
				}
			}
		}
	}
	.header-logo {
		position: static;
		width: 100%;
		&__text {
			position: absolute;
			white-space: nowrap;
			left: 50%;
			transform-origin: top left;
			transform: scale(1) translate(-50%, 0);
		}
		&__crumbread {
			display: none;
		}
	}
	.nav {
		&__nav {
			top: 140px;
			left: 50%;
			transform: translate(-50%, 0);
			z-index: 1;
		}
		&__link {
			sup {
				font-size: 18px;
				margin-right: 20px;
			}
		}
		&__logo {
			max-width: 200%;
			width: calc(100% + 50px);
			max-height: 935px;
			left: 50%;
			top: 660px;
			bottom: 0;
			transform: translate(-50%, 0);
		}
	}
	.header-menu {
		right: 41px;
		justify-content: center;
	}
	@keyframes headerText {
		0% {
			transform: scale(0) translate(-50%, 0);
		}
		100% {
			transform: scale(1) translate(-50%, 0);
		}
	}
}
@media (max-width: 425px) {
	.nav {
		&__link {
			font-size: 40px;
			sup {
				font-size: 14px;
				margin-right: 20px;
			}
		}
		&__logo {
			width: calc(100% + 34px);
			max-height: 500px;
			top: 485px;
		}
	}
	.header-placeholder {
		&--home {
			position: relative;
			min-height: 74px;
		}
	}
	.header {
		min-height: 74px;
		&__wrapper {
			padding: 20px 32px;
		}
	}
	.header-logo {
		&__img {
			width: 31px;
			height: 34px;
		}
		&__text {
			font-size: 18px;
			line-height: 21px;
		}
	}
	.header-menu {
		right: 31px;
		height: auto;
		justify-content: center;
		&__wrapper {
			width: 22px;
			min-height: 14px;
		}
		&__element {
			&--2 {
				width: 17px;
			}
		}
	}
}
@keyframes headerBurgerTop {
	0% {
		top: 50%;
		transform: translate(0, -50%) scaleX(0);
	}
	50% {
		top: 50%;
		transform: translate(0, -50%) scaleX(1);
	}
	100% {
		top: 0;
		transform: translate(0, 0) scaleX(1);
	}
}
@keyframes headerBurgerMiddle {
	0% {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scaleX(0);
	}
	100% {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scaleX(1);
	}
}
@keyframes headerBurgerBottom {
	0% {
		top: auto;
		bottom: 50%;
		transform: translate(0, 50%) scaleX(0);
	}
	50% {
		top: auto;
		bottom: 50%;
		transform: translate(0, 50%) scaleX(1);
	}
	100% {
		top: auto;
		bottom: 0%;
		transform: translate(0, 50%) scaleX(1);
	}
}
@keyframes headerBurgerReverseTop {
	0% {
		top: 0;
		transform: translate(0, 0) scaleX(1);
	}
	50% {
		top: 50%;
		transform: translate(0, -50%) scaleX(1);
	}
	100% {
		top: 50%;
		transform: translate(0, -50%) scaleX(0);
	}
}
@keyframes headerBurgerReverseMiddle {
	0% {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scaleX(1);
	}
	100% {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scaleX(0);
	}
}
@keyframes headerBurgerReverseBottom {
	0% {
		top: auto;
		bottom: 0%;
		transform: translate(0, 50%) scaleX(1);
	}
	50% {
		top: auto;
		bottom: 50%;
		transform: translate(0, 50%) scaleX(1);
	}
	100% {
		top: auto;
		bottom: 50%;
		transform: translate(0, 50%) scaleX(0);
	}
}
@keyframes burgerTopReverse {
	0% {
		top: 50%;
		transform: translate(0, -50%) rotate(-45deg);
		height: 1px;
	}
	50% {
		top: 50%;
		transform: translate(0, -50%);
	}
	100% {
		top: 0;
	}
}
@keyframes burgerTop {
	0% {
		top: 0;
	}
	50% {
		top: 50%;
		transform: translate(0, -50%);
	}
	100% {
		top: 50%;
		height: 1px;
		transform: translate(0, -50%) rotate(-45deg);
	}
}
@keyframes burgerMiddleReverse {
	0% {
		transform: scaleX(0) translate(-50%, -50%);
	}
	100% {
		transform: scaleX(1) translate(-50%, -50%);
	}
}
@keyframes burgerMiddle {
	0% {
		transform: scaleX(1) translate(-50%, -50%);
	}
	100% {
		transform: scaleX(0) translate(-50%, -50%);
	}
}
@keyframes burgerBottomReverse {
	0% {
		top: auto;
		bottom: 50%;
		transform: translate(0, 50%) rotate(45deg);
	}
	50% {
		top: auto;
		bottom: 50%;
		transform: translate(0, 50%);
	}
	100% {
		top: auto;
		bottom: 0;
	}
}
@keyframes burgerBottom {
	0% {
		top: auto;
		bottom: 0;
	}
	50% {
		top: auto;
		bottom: 50%;
		transform: translate(0, 50%);
	}
	100% {
		top: auto;
		bottom: 50%;
		transform: translate(0, 50%) rotate(45deg);
	}
}
@keyframes burgerMiddleHover {
	0% {
		transform: scale(1) translate(-50%, -50%);
	}
	50% {
		width: 100%;
	}
	100% {
		width: 24px;
		transform: scale(1) translate(-50%, -50%);
	}
}
</style>
