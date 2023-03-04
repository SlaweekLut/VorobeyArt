<template>
	<div class="home home-loaded">
		<!-- :class="{ 'home-loaded--preloader': curtains === 'Preloader', 'home-loaded--curtains': curtains !== 'Preloader' }" -->
		<h1 style="opacity: 0; position: absolute; width: 0; height: 0">VorobeyArt - студия дизайна</h1>
		<p class="background-text">Creative</p>
		<div class="home__wrapper">
			<div class="home-slides" :class="{ 'home-slides--active': index === activeSlide, 'home-slides--scroll': isWait }" v-for="(slide, index) in slides" :key="slide.title">
				<router-link
					v-if="index === activeSlide"
					:to="slide.to"
					class="home-slides-info"
					:class="{
						'home-slides-info--active': index === activeSlide,
					}"
				>
					<h2 class="home-slides__title">
						<div
							v-for="letter in slide.title"
							:key="letter"
							class="home-slides__letters"
							:class="{
								'home-slides__letters--space': letter === ' ',
								'home-slides__letters--preloader': curtains === 'Preloader',
								'home-slides__letters--curtains': redirect,
								'home-slides__letters--scroll': isWait,
							}"
						>
							<span>{{ letter }}</span>
							<span>{{ letter }}</span>
							<span>{{ letter }}</span>
						</div>
					</h2>
					<p
						class="home-slides-info__text home-slides-info__bottom"
						:class="{
							'home-slides-info__bottom--preloader': curtains === 'Preloader',
							'home-slides-info__bottom--curtains': redirect,
							'home-slides-info__bottom--scroll': isWait,
						}"
						v-html="slide.description"
					></p>
					<div class="home-slides-info__pagination">
						<div
							v-for="(slide, index) in slides"
							class="home-slides-info__bullet"
							:class="{
								'home-slides-info__bullet--prev': index === prevSlide,
								'home-slides-info__bullet--active': index === activeSlide,
								'home-slides-info__bullet--preloader': curtains === 'Preloader',
								'home-slides-info__bullet--curtains': redirect,
								'home-slides-info__bullet--scroll': isWait,
							}"
							:key="index"
						></div>
					</div>
				</router-link>
				<router-link :to="slide.to" v-if="index === activeSlide" class="home-slides__link" :class="{ 'home-slides__link--wait': isWait || curtains === 'Preloader' }">
					<!--  rotate(${slide.rotate}deg) -->
					<picture>
						<source media="(max-width: 768px)" :srcset="`/img/${slide.img[0]}/Mobile/${slide.img[1]}.webp`" type="image/webp" />
						<source media="(min-width: 769px)" :srcset="`/img/${slide.img[0]}/PC/${slide.img[1]}.webp`" type="image/webp" />
						<source :srcset="`/img/${slide.img[0]}/JPG/${slide.img[1]}.png`" type="image/png" />
						<img
							:srcset="`/img/${slide.img[0]}/PC/${slide.img[1]}.webp`"
							:alt="slide.img[0]"
							type="image/webp"
							class="home-slides__img"
							:class="{
								'home-slides__img--preloader': curtains === 'Preloader',
								'home-slides__img--curtains': redirect,
								'home-slides__img--scroll': isWait,
								'home-slides__img--active': index === activeSlide,
								// 'home-slides__img--wait': isWait || curtains === 'Preloader' || redirect,
							}"
						/>
					</picture>
				</router-link>
				<div
					v-if="index === activeSlide"
					class="home-slides__background"
					:class="{
						'home-slides__background--preloader': curtains === 'Preloader',
						'home-slides__background--curtains': redirect,
						'home-slides__background--scroll': isWait,
						'home-slides__background--active': index === activeSlide,
						// 'home-slides__background--wait': isWait || curtains === 'Preloader' || redirect,
					}"
				></div>
			</div>
			<div
				class="home-slides-pagination"
				:class="{
					'home-slides-pagination--preloader': curtains === 'Preloader',
					'home-slides-pagination--curtains': redirect,
				}"
			>
				<div class="home-slides-pagination__wrapper">
					<p class="home-slides-pagination__current">
						0
						<span class="home-slides-pagination__wrapper-col">
							<span class="home-slides-pagination__active" :style="{ right: `${105 * activeSlide}px` }" v-for="n in slides.length" :key="n">{{ n }}</span>
						</span>
					</p>
					<div class="home-slides-pagination__line"></div>
					<p class="home-slides-pagination__count">0{{ slides.length }}</p>
				</div>
			</div>
			<router-link to="/works" class="home-link">
				<span
					class="home-link__circle home-link__circle-big"
					:class="{
						'home-link__circle-big--preloader': curtains === 'Preloader',
						'home-link__circle-big--curtains': redirect,
					}"
				></span>
				<span
					class="home-link__circle home-link__circle-small"
					:class="{
						'home-link__circle-small--preloader': curtains === 'Preloader',
						'home-link__circle-small--curtains': redirect,
					}"
				></span>
				<span class="home-link__text">
					<span
						class="home-link__wrapper"
						:class="{
							'home-link__wrapper--preloader': curtains === 'Preloader',
							'home-link__wrapper--curtains': redirect,
						}"
						>ВСЕ Проекты</span
					>
				</span>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomePage',
	props: {
		curtains: String,
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
					to: '/izenbot',
					title: 'IZENBOT',
					description: 'Разработка брендбука <br/> и презентации',
					img: ['izenbot', '/izenbot-page'],
				},
				{
					to: '/hone',
					title: 'H ONE',
					description: 'Создание логотипа и <br/> визуализация',
					img: ['hone', '/hone-page'],
				},
				{ to: '/motorika', title: 'MOTORIKA', date: '18/06/20', description: 'Эксклюзивный дизайн <br/> футболок', img: ['motorika', '/motorika-page'] },
				{
					to: '/energotekar',
					title: 'ЭНЕРГОТЭК AR',
					description: 'Разработка приложения AR <br/> Play Market / App Store',
					img: ['energotekAR', '/energotekAR-page'],
				},
				{
					to: '/ukigassen',
					title: 'UKIGASSEN',
					description: 'Дизайн печатной <br/> продукции',
					img: ['ukigassen', '/ukigassen-page'],
				},
			],
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
			autoSlider = setInterval(autoSliderFn, 5000);
			autoSlider;
		}, 1900);

		window.addEventListener('touchstart', (event) => {
			const { clientX } = event.changedTouches[0];
			posX = clientX;
		});

		window.addEventListener('touchend', (event) => {
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
			autoSlider = setInterval(autoSliderFn, 5000);
			autoSlider;
		});

		window.addEventListener('wheel', (event) => {
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
					autoSlider = setInterval(autoSliderFn, 5000);
					autoSlider;
				}, timer);

				if (event.deltaY === 0) return;

				if (event.deltaY > 0) {
					this.activeSlide = this.activeSlide + 1 === this.slides.length ? 0 : this.activeSlide + 1;
					this.prevSlide = this.activeSlide - 1 === -1 ? this.slides.length - 1 : this.activeSlide - 1;
					this.dir = 'next';
				} else {
					this.activeSlide = this.activeSlide - 1 === -1 ? this.slides.length - 1 : this.activeSlide - 1;
					this.prevSlide = this.activeSlide + 1 === this.slides.length ? 0 : this.activeSlide + 1;
					this.dir = 'prev';
				}
			}
		});
	},
};
</script>

<style lang="scss" scoped>
.background-text {
	font-size: 23vw;
	color: transparent;
	stroke: #000;
	-webkit-text-stroke: 0.5px #dcdcdc;
	font-weight: 800;
	transform-origin: bottom left;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 0;
	text-transform: uppercase;
	white-space: nowrap;
}
.home-slides__link {
	&:not(.home-slides__link--wait) {
		&:hover {
			& + .home-slides__background {
				&:not(.home-slides__background--wait) {
					scale: 0.9;
				}
			}
			.home-slides__img {
				&:not(.home-slides__img--wait) {
					transition: 0.3s ease;
					transform: translate(-50%, -50%) scale(1.1);
				}
			}
		}
	}
}
// SLIDE
.home-slides {
	width: 100%;
	max-width: 100%;
	height: 100vh;
	height: -webkit-fill-available;
	position: absolute;

	&__title {
		font-weight: 800;
		font-size: 45px;
		line-height: 43px;
		height: 36px;
		z-index: 2;
		display: flex;
		overflow: hidden;
		transition: 0.3s ease;
		transform-origin: top left;
		position: relative;
		left: 50%;
		// top: -40px;
		justify-content: center;
		transform: translate(-50%, 0);
		span {
			color: inherit;
			font-size: 45px;
			line-height: 43px;
			height: 38px;
		}
	}

	&__letters {
		display: flex;
		flex-direction: column-reverse;
		position: relative;
		color: #0181c8;
		opacity: 1;
		&--curtains {
			opacity: 0;
			&:nth-child(n + 1) {
				animation: animationLetters 0.6s ease forwards 0.9s;
			}
			&:nth-child(n + 2) {
				animation: animationLetters 0.8s ease forwards 0.9s;
			}
			&:nth-child(n + 3) {
				animation: animationLetters 1.2s ease forwards 0.9s;
			}
		}
		&--preloader {
			opacity: 0;
			&:nth-child(n + 1) {
				animation: animationLetters 0.6s ease forwards 2.7s;
			}
			&:nth-child(n + 2) {
				animation: animationLetters 0.8s ease forwards 2.7s;
			}
			&:nth-child(n + 3) {
				animation: animationLetters 1.2s ease forwards 2.7s;
			}
		}
		&--scroll {
			&:nth-child(n + 1) {
				animation: animationLetters 0.6s ease forwards;
			}
			&:nth-child(n + 2) {
				animation: animationLetters 0.8s ease forwards;
			}
			&:nth-child(n + 3) {
				animation: animationLetters 1.2s ease forwards;
			}
		}
		&--space {
			min-width: 10px;
		}
	}

	&__img {
		width: clamp(200px, 50%, 743px);
		height: 769px;
		max-height: 100vh;
		object-fit: contain;
		position: absolute;
		top: 50%;
		left: 58%;
		z-index: 1;
		display: none;
		transform: translate(-50%, -50%) scale(1);
		transition: 0.3s ease;
		transform-origin: center center;
		&--active {
			display: block;
		}
		&--curtains {
			animation: animationImages 1s ease backwards 0.9s;
		}
		&--preloader {
			animation: animationImages 1s ease backwards 2.7s;
		}
		&--scroll {
			animation: animationImages 1s ease backwards;
		}
	}

	&__background {
		height: clamp(250px, 35vw, 663px);
		width: clamp(190px, 26vw, 498px);
		position: absolute;
		border-radius: 35px;
		top: 50%;
		left: 58%;
		transform-origin: top left;
		border: 1px solid #0181c8;
		transform: rotate(15deg) translate(-50%, -50%);
		display: none;
		transition: 0.3s ease;
		&--active {
			display: block;
		}
		&--curtains {
			animation: animationBackground 1s ease both 0.9s;
		}
		&--preloader {
			animation: animationBackground 1s ease both 2.7s;
		}
		&--scroll {
			animation: animationBackground 1s ease both;
		}
	}

	// &--scroll {
	// 	pointer-events: none;
	// }
}
// Информация слайда
.home-slides-info {
	flex-direction: column;
	gap: 8px;
	position: absolute;
	top: 50%;
	left: 108px;
	transform: translate(0, -50%);
	display: none;
	z-index: 2;
	max-width: 350px;
	width: 100%;
	text-decoration: none;
	&--active {
		display: flex;
	}
	&__text {
		font-size: clamp(14px, 1vw, 16px);
		color: #6d6d6d;
		font-weight: 600;
		text-align: center;
	}
	&__bottom {
		position: relative;
		margin-top: 18px;
		&--curtains {
			animation: animationInfoFour 1s ease both 0.9s;
		}
		&--preloader {
			animation: animationInfoFour 1s ease both 2.7s;
		}
		&--scroll {
			animation: animationInfoFour 1s ease both;
		}
	}
	&__pagination {
		display: flex;
		gap: 12px;
		align-items: center;
		margin-top: 38px;
		justify-content: center;
	}
	&__bullet {
		width: 8px;
		height: 8px;
		position: relative;
		background: #ebebeb;
		border-radius: 50%;
		&::after {
			transition: 0.5s ease;
			border-radius: 50%;
			content: '';
			position: absolute;
			width: 10px;
			height: 10px;
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) scale(0);
			background: #0181c8;
		}
		&--active::after {
			animation: animationBulletActive 0.5s ease both 0.5s;
		}
		&--prev::after {
			animation: animationBulletPrev 0.5s ease both;
		}
	}
}
@keyframes animationBullet {
	0% {
		transform: translate(-50%, -50%) scale(0);
	}
	100% {
		transform: translate(-50%, -50%) scale(1);
	}
}
@keyframes animationBulletActive {
	0% {
		transform: translate(-50%, -50%) scale(0);
	}
	100% {
		transform: translate(-50%, -50%) scale(1);
	}
}
@keyframes animationBulletPrev {
	0% {
		transform: translate(-50%, -50%) scale(1);
	}
	100% {
		transform: translate(-50%, -50%) scale(0);
	}
}
.home-link {
	text-decoration: none;
	position: fixed;
	bottom: 95px;
	left: 93px;
	height: 90px;
	z-index: 1;
	&__text {
		font-size: 20px;
		font-weight: 700;
		text-transform: uppercase;
		top: 50%;
		left: 64px;
		position: absolute;
		white-space: nowrap;
		transform: translate(0, -50%);
		transition: 0.3s ease;
		&::after {
			content: '';
			position: absolute;
			z-index: -1;
			width: 60px;
			height: 60px;
			display: block;
			background-color: #fff;
			transform: rotate(45deg);
			left: -5px;
			top: -20px;
		}
	}
	&__wrapper {
		overflow: hidden;
		display: block;
		&--curtains {
			animation: homeLinkAnimation 1s ease both 0.9s;
		}
		&--preloader {
			animation: homeLinkAnimation 1s ease both 2.7s;
		}
	}

	&__circle {
		position: absolute;
		border-radius: 50%;
	}
	&__circle-big {
		width: 90px;
		height: 90px;
		border: 1px solid #0181c8;
		transition: 0.3s ease;
		&::after {
			content: '';
			position: absolute;
			left: 50%;
			top: 50%;
			width: 90px;
			height: 120px;
			background-color: white;
			transform: translate(45px, -5px) rotate(-180deg);
		}
		&--preloader::after {
			animation: linkCircleFirstAnimation 1s linear both 2.7s;
		}
		&--curtains::after {
			animation: linkCircleFirstAnimation 1s linear both 0.9s;
		}
	}
	&__circle-small {
		width: 11px;
		height: 11px;
		background-color: #0181c8;
		top: 50%;
		left: 39px;
		transform: translate(0, -50%);
		z-index: 2;
		animation: none;
		&--preloader {
			animation: linkCircleTwoAnimation 1s ease both 2.7s;
		}
		&--curtains {
			animation: linkCircleTwoAnimation 1s ease both 0.9s;
		}
	}
	&:hover {
		.home-link {
			&__text {
				left: 72px;
			}
			&__circle-big {
				transform: scale(1.2);
			}
			&__circle-small {
				animation: homeLinkCircle 0.3s ease !important;
			}
		}
	}
}
@keyframes linkCircleFirstAnimation {
	0% {
		transform: translate(-45px, -45px);
	}
	25% {
		transform: translate(-45px, -45px) rotate(-90deg);
	}
	50% {
		transform: translate(-45px, -5px) rotate(-90deg);
	}
	75% {
		transform: translate(45px, -5px) rotate(-180deg);
	}
	100% {
		transform: translate(45px, -5px) rotate(-180deg);
	}
}
.home-slides-pagination {
	right: 80px;
	top: 50%;
	transform: translate(0, -50%) rotate(180deg);
	position: absolute;
	overflow: hidden;
	&--curtains {
		animation: paginationPreloaderAnimation 1s ease both 0.9s;
	}
	&--preloader {
		animation: paginationPreloaderAnimation 1s ease both 2.7s;
	}
	&__active {
		display: flex;
		flex-direction: column;
		transition: 1s ease;
		// &--scroll.home-slides-pagination__active--next {
		// 	animation: animationPaginationNext 1s ease both;
		// }
		// &--scroll.home-slides-pagination__active--prev {
		// 	animation: animationPaginationPrev 1s ease both;
		// }
	}
	&__wrapper {
		flex-direction: column;
		align-items: center;
		display: flex;
		min-height: 420px;
	}
	&__wrapper-col {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 105px;
		overflow: hidden;
		&--hidden {
			display: none;
		}
		&--prev {
			flex-direction: column-reverse;
		}
		// justify-content: center;
	}
	&__current {
		writing-mode: vertical-lr;
		font-size: 105px;
		line-height: 105px;
		font-weight: 600;
		color: #0181c8;
		font-feature-settings: 'tnum' on, 'lnum' on;
		overflow: hidden;
		position: relative;
		display: flex;
		span {
			line-height: 105px;
			position: relative;
			color: inherit;
		}

		// span:nth-child(1)
		// 	right: 0px
		// span:nth-child(2)
		// 	right: 105px
	}
	&__count {
		font-size: 70px;
		font-weight: 600;
		color: #868686;
		font-feature-settings: 'tnum' on, 'lnum' on;
		writing-mode: vertical-lr;
	}
	&__line {
		width: 1px;
		height: 122px;
		border-radius: 1px;
		background-color: #868686;
		margin: 40px 0px 50px;
	}
}
.home {
	min-height: 100vh;
	height: 100vh;
	min-height: -webkit-fill-available;
	height: -webkit-fill-available;
	max-height: 100vh;
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
	padding: 0px 93px;
	position: fixed;
	left: 50%;
	top: 0;
	transform: translate(-50%, 0);
	overflow: hidden;
	&__wrapper {
		position: relative;
		width: 100%;
		min-height: 100vh;
		height: 100vh;
		min-height: -webkit-fill-available;
		height: -webkit-fill-available;
		max-height: 100vh;
	}
}
// ANIMATIONS
@keyframes linkCircleTwoAnimation {
	0% {
		transform: translate(0, -50%) scale(1.5);
		opacity: 0;
	}
	45% {
		opacity: 1;
	}
	47% {
		opacity: 0;
	}
	50% {
		transform: translate(0, -50%) scale(0.8);
		opacity: 1;
	}
	55% {
		opacity: 0;
	}
	60% {
		opacity: 1;
	}
	100% {
		transform: translate(0, -50%) scale(1);
		opacity: 1;
	}
}

@keyframes homeLinkAnimation {
	0% {
		width: 0px;
	}
	100% {
		width: 133px;
	}
}

@keyframes animationPaginationNext {
	0% {
		right: 105px;
	}
	100% {
		right: 0px;
	}
}
@keyframes animationPaginationPrev {
	0% {
		left: 105px;
	}
	100% {
		left: 0px;
	}
}

@keyframes homeLinkCircle {
	0% {
		transform: translate(0, -50%) scale(1);
	}
	25% {
		transform: translate(0, -50%) scale(1.2);
	}
	50% {
		transform: translate(0, -50%) scale(1);
	}
	75% {
		transform: translate(0, -50%) scale(1.3);
	}
	100% {
		transform: translate(0, -50%) scale(1);
	}
}

@keyframes paginationPreloaderAnimation {
	0% {
		height: 0px;
	}
	100% {
		height: 420px;
	}
}

// Анимация Бэкграунда
@keyframes animationBackground {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes animationInfoOne {
	0% {
		left: -10px;
		opacity: 0;
	}
	100% {
		left: 0;
		opacity: 1;
	}
}

@keyframes animationInfoTwo {
	0% {
		opacity: 0;
		transform: scale(1);
	}
	25% {
		opacity: 1;
		transform: scale(1.2);
	}
	50% {
		transform: scale(1);
	}
	75% {
		transform: scale(1.4);
	}
	100% {
		transform: scale(1);
	}
}

@keyframes animationInfoThree {
	0% {
		right: -10px;
		opacity: 0;
	}
	100% {
		right: 0;
		opacity: 1;
	}
}

@keyframes animationInfoFour {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@media (max-width: 1440px) {
	.home-link {
		bottom: 72px;
		left: 80px;
	}
	.home-slides-info {
		left: 40px;
	}
	.home-slides-pagination {
		right: 40px;
	}
}

@media (max-width: 1024px) {
	.home-slides {
		&__img {
			left: 70%;
		}
		&__background {
			left: 73%;
		}
	}
	.home-link {
		bottom: 36px;
		left: 42px;
	}
	.home-slides-info {
		left: 40px;
	}
	.home {
		padding: 0px 61px;
	}
	.home-slides-pagination {
		display: none;
		right: 0px;
	}
}

@media (max-width: 768px) {
	.home {
		padding: 0px 20px;
		min-height: 100%;
		height: 100%;
		max-height: 100%;
	}
	.background-text {
		top: 44%;
	}
	.home-slides {
		&__title {
			font-size: 48px;
			line-height: 38px;
			height: 40px;
			position: relative;
			bottom: 0;
			top: 0;
			span {
				font-size: 48px;
				line-height: 44px;
				height: 38px;
			}
		}
		&__background {
			width: 342px;
			height: 455px;
			top: 44%;
			border-radius: 15px;
			left: 52%;
		}
		&__img {
			width: 496px;
			height: 457px;
			top: 44%;
			left: 50%;
		}
		// &--scroll {
		// 	pointer-events: none;
		// }
	}
	.home-slides-pagination {
		display: none !important;
	}
	.home-slides-info {
		left: 50%;
		transform: translate(-50%, 0);
		bottom: 0;
		top: calc(100% - 160px);
		width: 100%;
		position: relative;
		&__pagination {
			margin-top: 16px;
		}
		&__bottom {
			font-size: 16px;
			margin-top: 10px;
		}
	}
	.home-link {
		display: none !important;
	}
}

@media (max-width: 425px) {
	.home-slides-info {
		max-width: 320px;
		&__date,
		&__number,
		&__bottom {
			font-size: 14px;
		}
	}
	.home-slides {
		&__title {
			font-size: 35px;
			line-height: 28px;
			height: 27px;
			top: auto;
			bottom: calc(100% + 8px);
			span {
				font-size: 33px;
				line-height: 33px;
				height: 27px;
			}
		}
		&__background {
			width: 186px;
			height: 250px;
			top: 44%;
			border-radius: 15px;
			left: 52%;
		}
		&__img {
			width: 270px;
			height: 250px;
			top: 44%;
			left: 50%;
		}
	}
}

// Анимация букв
@keyframes animationLetters {
	0% {
		top: 300px;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 1;
		top: 0;
	}
}

// Анимация Изображения
@keyframes animationImages {
	0% {
		transform: translate(-50%, -50%) scale(0);
	}
	50% {
		transform: translate(-50%, -50%) scale(1.1);
	}
	100% {
		transform: translate(-50%, -50%) scale(1);
	}
}
</style>
