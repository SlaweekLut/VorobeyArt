<template>
	<div class="content works">
		<TitlePage title="Проекты" />
		<div class="content__wrapper">
			<p class="works__title">Смотрите, что умеем</p>
			<div class="works-nav" @click="() => (dropdown = !dropdown)">
				<div class="works-nav__list" :class="{ 'works-nav__list--open': dropdown }">
					<button
						:onmousemove="startPorject"
						v-for="(tag, i) in tags"
						:key="i"
						class="works-nav__links"
						:class="{ 'works-nav__links--active': i === activeTab, 'works-nav__links--open': dropdown }"
						:onclick="() => handleNav(tag.tag)"
					>
						<span>{{ tag.title }}</span>
						<div class="works-nav__links-fill"></div>
					</button>
				</div>
			</div>
			<div class="works-examples">
				<div :class="{ 'works-example--hide': !work.visible }" v-for="(work, i) in works" :key="i" class="works-example">
					<router-link class="works-example__link" v-if="work.to !== '/'" :to="{ path: work.to }"></router-link>
					<div class="works-example__header">
						<picture>
							<source media="(max-width: 768px)" :srcset="`/img/${work.img[0]}/Mobile/${work.img[1]}.webp`" type="image/webp" />
							<source media="(min-width: 769px)" :srcset="`/img/${work.img[0]}/PC/${work.img[1]}.webp`" type="image/webp" />
							<source :srcset="`/img/${work.img[0]}/JPG/${work.img[1]}.png`" type="image/png" />
							<img :srcset="`/img/${work.img[0]}/PC/${work.img[1]}.webp`" alt="Пример работы" type="image/webp" class="works-example__img" />
						</picture>
						<div class="works-example__background"></div>
					</div>
					<div class="works-example__info">
						<h3 class="works-example__title" v-if="work.to !== '/'">{{ work.title }}</h3>
						<h3 class="works-example__title works-example__title--dev" v-if="work.to === '/'">В разработке</h3>
						<p class="works-example__text" v-html="work.description"></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TitlePage from '@/components/Title.vue';
export default {
	name: 'WorksPage',
	data() {
		return {
			activeTab: 0,
			tab: '',
			dropdown: false,
			works: [
				{ description: 'Создание 3D моделей для каталогов', title: 'ЭНЕРГОТЭК', to: '/energotek', img: ['energotek', 'energotek-page'], visible: true, tags: ['two'] },
				{
					description: 'Разработка приложения <br/> AR Play Market / App Store',
					title: 'ЭНЕРГОТЭК AR',
					to: '/energotekAR',
					img: ['energotekAR', 'energotekAR-page'],
					visible: true,
					tags: ['two', 'five'],
				},
				{
					description: 'Разработка брендбука и презентации',
					title: 'WB ALLIANCE',
					to: '/wballiance',
					img: ['wballiance', 'wballiance-page'],
					visible: true,
					tags: ['one', 'three'],
				},
				{ description: 'Эксклюзивный дизайн футболок', title: 'МОТОРИКА', to: '/motorika', img: ['motorika', 'motorika-page'], visible: true, tags: ['three'] },
				{ description: 'Создание логотипа и визуализация', title: 'SPICY NOTE', to: '/spicynote', img: ['spisynote', 'spisynote-page'], visible: true, tags: ['three'] },
				{
					description: 'Разработка приложения <br/> AR Play Market / App Store',
					title: 'ГЕНЕЗИС ПРОЕКТ',
					to: '/genezis',
					img: ['genezisproject', 'genezisproject-page'],
					visible: true,
					tags: ['one', 'three'],
				},
				{
					description: 'Создание 3D моделей <br/> для маркетплейсов',
					title: 'ЗОЛОТО АЛТАЯ',
					to: '/zolotoaltaya',
					img: ['zolotoaltaya', 'zolotoaltaya-page'],
					visible: true,
					tags: ['two'],
				},
				{
					description: 'Дизайн печатной <br/> продукции',
					title: 'MARUSYA',
					to: '/marusya',
					img: ['marusya', 'marusya-page'],
					visible: true,
					tags: ['one'],
				},
				{
					description: 'Дизайн печатной <br/> продукции',
					title: 'UKIGASSEN',
					to: '/ukigassen',
					img: ['ukigassen', 'ukigassen-page'],
					visible: true,
					tags: ['one'],
				},
				{
					description: 'Разработка <br/> презентации',
					title: 'OCEAN VIEW',
					to: '/oceanview',
					img: ['oceanview', 'oceanview-page'],
					visible: true,
					tags: ['one'],
				},
				{
					description: 'Разработка брендбука и презентации',
					title: 'КВАНТТЕЛЕКОМ',
					to: '/',
					img: ['kvanttelekomBrend', 'kvanttelekomBrend-page'],
					visible: true,
					tags: ['one', 'three'],
				},
				{
					description: 'Разработка <br/> презентации',
					title: 'PRIME TRAVEL',
					to: '/',
					img: ['primetravel', 'primetravel-page'],
					visible: true,
					tags: ['one'],
				},
				{
					description: 'Разработка <br/> презентации',
					title: 'RAGE AGAINST Z',
					to: '/',
					img: ['rageagainstz', 'rageagainstz-page'],
					visible: true,
					tags: ['one'],
				},
				{
					description: 'Создание 3D моделей <br/> для каталогов',
					title: 'ХИМТЕХ-Р',
					to: '/',
					img: ['ximtexp', 'ximtexp-page'],
					visible: true,
					tags: ['two'],
				},
				{
					description: 'Разработка игры <br/> Race',
					title: 'IZENBOT',
					to: '/',
					img: ['izenbot', 'izenbot-page'],
					visible: true,
					tags: ['five'],
				},
				{
					description: 'Создание 3D моделей <br/> для маркетплейсов',
					title: 'MOLTENGRASS',
					to: '/',
					img: ['moltengrass', 'moltengrass-page'],
					visible: true,
					tags: ['two'],
				},
				{
					description: 'Разработка брендбука <br/> и презентации',
					title: 'ДОМСПБ',
					to: '/',
					img: ['domspb', 'domspb-page'],
					visible: true,
					tags: ['one', 'three'],
				},
				{
					description: 'Создание 3D моделей <br/> для сайта',
					title: 'MOBDEBUT',
					to: '/',
					img: ['mobdebut', 'mobdebut-page'],
					visible: true,
					tags: ['two'],
				},
				{
					description: 'Создание логотипа и <br/> визуализация',
					title: 'ЭЖЕНИ',
					to: '/',
					img: ['ejeni', 'ejeni-page'],
					visible: true,
					tags: ['three'],
				},
				{
					description: 'Создание 3D моделей <br/> для сайта',
					title: '3D БАНИ ',
					to: '/',
					img: ['3Dbani', '3Dbani-page'],
					visible: true,
					tags: ['two'],
				},
				{
					description: 'Создание логотипа и <br/> визуализация',
					title: 'CATCHFIVE ',
					to: '/',
					img: ['catchfive', 'catchfive-page'],
					visible: true,
					tags: ['three'],
				},
				{
					description: 'Разработка дизайна <br/> приложения',
					title: 'GARILLA POKER ',
					to: '/',
					img: ['garillapoker', 'garillapoker-page'],
					visible: true,
					tags: ['one', 'three'],
				},
				{
					description: 'Разработка игр <br/> Наработки',
					title: 'GAME #1 ',
					to: '/',
					img: ['game1', 'game1-page'],
					visible: true,
					tags: ['five'],
				},
				{
					description: 'Дизайн и разработка <br/> сайта',
					title: 'КВАНТТЕЛЕКОМ',
					to: '/',
					img: ['kvanttelekomCite', 'kvanttelekomCite-page'],
					visible: true,
					tags: ['four'],
				},
				{
					description: 'Создание логотипа и <br/> визуализация',
					title: 'POLAR BEAR',
					to: '/',
					img: ['polarbear', 'polarbear-page'],
					visible: true,
					tags: ['three'],
				},

				{
					description: 'Дизайн печатной <br/> продукции',
					title: 'ПАБ “ПИНТА”',
					to: '/',
					img: ['pinta', 'pinta-page'],
					visible: true,
					tags: ['one'],
				},
				{
					description: 'Дизайн печатной <br/> продукции',
					title: 'АВТОМОЙКА №1”',
					to: '/',
					img: ['automoika1', 'automoika1-page'],
					visible: true,
					tags: ['one'],
				},
				{
					description: 'Создание 3D моделей <br/> для сайта',
					title: '3D СЛОИ”',
					to: '/',
					img: ['3Dsloi', '3Dsloi-page'],
					visible: true,
					tags: ['two'],
				},
				{
					description: 'Создание логотипа и <br/> визуализация',
					title: 'H ONE”',
					to: '/',
					img: ['hone', 'hone-page'],
					visible: true,
					tags: ['three'],
				},

				{
					description: 'Создание логотипа и <br/> визуализация',
					title: 'ДВЕ БОЧКИ”',
					to: '/',
					img: ['dvebochki', 'dvebochki-page'],
					visible: true,
					tags: ['three'],
				},
				{
					description: 'Разработка <br/> презентации',
					title: 'PROЗАПЧАСТЬ”',
					to: '/',
					img: ['prozapchast', 'prozapchast-page'],
					visible: true,
					tags: ['one'],
				},
				{
					description: 'Разработка <br/> презентации',
					title: 'OWN WIFI”',
					to: '/',
					img: ['ownwifi', 'ownwifi-page'],
					visible: true,
					tags: ['one'],
				},
			],
			tags: [
				{ title: 'Все проекты', tag: 'all' },
				{ title: 'Графический дизайн', tag: 'one' },
				{ title: '3D дизайн', tag: 'two' },
				{ title: 'Брендинг', tag: 'three' },
				{ title: 'WEB разработка', tag: 'four' },
				{ title: 'Мобильная разработка', tag: 'five' },
			],
		};
	},
	components: {
		TitlePage,
	},
	methods: {
		handleNav(activeTab) {
			if (activeTab === 'all') {
				this.activeTab = 0;
			} else if (activeTab === 'one') {
				this.activeTab = 1;
			} else if (activeTab === 'two') {
				this.activeTab = 2;
			} else if (activeTab === 'three') {
				this.activeTab = 3;
			} else if (activeTab === 'four') {
				this.activeTab = 4;
			} else if (activeTab === 'five') {
				this.activeTab = 5;
			}
			this.$data.works.forEach((work) => {
				if (activeTab === 'all' || work.tags.includes(activeTab)) {
					work.visible = true;
				} else {
					work.visible = false;
				}
			});
			this.$data.active = activeTab;
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
body {
	overflow-x: hidden;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
}
.works {
	&__title {
		font-size: 60px;
		font-weight: 700;
		margin-bottom: 20px;
	}
}
.works-nav {
	position: relative;
	margin-bottom: 105px;

	&__list {
		display: flex;
		gap: 10px 20px;
		position: relative;
		overflow: auto;
		flex-wrap: wrap;
		&::-webkit-scrollbar {
			-webkit-appearance: none;
			-webkit-overflow-scrolling: touch;
			display: none;
			height: 0;
			width: 0;
		}
	}
	&__links-fill {
		position: absolute;
		width: 512px;
		height: 512px;
		border-radius: 50%;
		background-color: #0181c8;
		transition: transform 0.6s ease;
		transform-origin: 0% 0%;
		transform: scale(0) translate(-50%, -50%);
		pointer-events: none;
	}
	&__links {
		font-weight: 500;
		border: 0;
		outline: none;
		position: relative;
		padding: 0;
		white-space: nowrap;
		margin: 0;
		transition: 0.3s ease;
		padding: 7px 20px;
		background-color: #f8f8f8;
		border-radius: 44px;
		cursor: pointer;
		overflow: hidden;
		transition: color 0.6s ease, background 0s ease 0s;
		span {
			z-index: 1;
			position: relative;
			font-size: inherit;
			color: inherit;
			pointer-events: none;
			font-size: 16px;
		}
		&--active {
			transition: background-color 0.3s ease;
			background-color: #0181c8;
			color: #fff;
		}
		&:hover {
			color: #fff;
			background-color: #0181c8;
			transition: color 0.6s ease, background 0.3s ease 0.3s;
			& > .works-nav__links-fill {
				transform: scale(1) translate(-50%, -50%);
			}
		}
	}
}
.works-examples {
	display: grid;
	gap: 73px 35px;
	height: auto;
	grid-template-columns: repeat(4, 1fr);
	&::-webkit-scrollbar {
		width: 0;
	}
}
.works-example {
	position: relative;
	text-decoration: none;
	&__link {
		position: absolute;
		z-index: 2;
		width: 100%;
		height: 100%;
	}
	&--hide {
		display: none;
	}
	&__header {
		position: relative;
		height: 336px;
		margin-bottom: 25px;
	}
	&__title {
		font-weight: 800;
		color: #0181c8;
		text-align: center;
		font-size: 25px;
		margin-bottom: 10px;
		text-transform: uppercase;
		&--dev {
			font-size: 22px;
			background: #0181c8;
			font-weight: 700;
			max-width: max-content;
			margin-left: auto;
			margin-right: auto;
			color: white;
			padding: 3px 15px;
			line-height: 27px;
		}
	}
	&__text {
		max-width: 203px;
		width: 100%;
		margin: 0 auto;
		text-align: center;
		font-size: 16px;
		line-height: 20px;
		color: #6d6d6d;
		font-weight: 600;
	}
	&__background {
		width: clamp(100px, 15vw, 217px);
		height: clamp(180px, 21vw, 290px);
		border-radius: 15px;
		border: 1px solid #0181c8;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(15deg);
		transition: 0.3s ease;
		max-width: 100%;
	}
	&__img {
		max-width: 100%;
		position: relative;
		transition: 0.3s ease;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		width: clamp(260px, 20vw, 290px);
		height: clamp(250px, 20vw, 266px);
		object-fit: contain;
		object-position: center center;
	}
	&:hover {
		.works-example {
			&__background {
				transform: translate(-50%, -50%) rotate(15deg) scale(0.9);
			}
			&__img {
				transform: translate(-50%, -50%) scale(1.1);
			}
		}
	}
}
@media (max-width: 1200px) {
	.works-examples {
		grid-template-columns: repeat(3, 1fr);
	}
}
@media (max-width: 1024px) {
	.works {
		&__title {
			font-size: 50px;
			margin-bottom: 18px;
		}
	}
	.works-example {
		&__img {
			max-width: 243px;
		}
		&__header {
			height: 276px;
			margin-bottom: 27px;
		}
		&__background {
			max-width: 182px;
			width: 100%;
			height: 243px;
		}
	}
	.works-nav {
		&__links {
			font-size: 18px;
		}
	}
}
@media (max-width: 960px) {
	.works-examples {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 768px) {
	.works-examples {
		gap: 30px 23px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		justify-items: center;
	}
	.works-example {
		width: 235px;
		&__background {
			// min-width: 212px
			// min-height: 284px
			border-radius: 15px;
		}
		&__header {
			height: 300px;
			margin-bottom: 30px;
		}
		&__title {
			font-size: 25px;
			line-height: 31px;
			margin-bottom: 4px;
			&--dev {
				font-size: 22px;
			}
		}
		&__text {
			font-size: 16px;
			line-height: 20px;
		}
		&__img {
			// min-width: 282px
			// min-height: 260px
			object-fit: contain;
			object-position: center center;
		}
	}
	.works-nav {
		&__links {
			min-width: fit-content;
			width: fit-content;
		}
	}
}
@media (max-width: 660px) {
	.works-example {
		width: 130px;
		&__header {
			height: 200px;
			margin-bottom: 15px;
		}
		&__title {
			font-size: 16px;
			line-height: 20px;
			&--dev {
				font-size: 14px;
			}
		}
		&__text {
			font-size: 10px;
			line-height: 12px;
		}
		&__background {
			// min-width: 132px
			// min-height: 177px
			width: 132px;
			height: 177px;
		}
		&__img {
			// min-width: 177px
			// min-height: 162px
			width: 120%;
			height: 162px;
		}
	}
	.works-nav {
		margin-bottom: 50px;
		&__links {
			font-size: 16px;
		}
	}
}
@media (max-width: 590px) {
	.works-nav {
		width: 100%;
		height: 33px;
		z-index: 3;
		&__list {
			position: absolute;
			flex-direction: column;
			width: 100%;
			gap: 0;
			background-color: #f8f8f8;
			border-radius: 16px;
			height: 100%;
			transition: 0.3s ease;
			overflow: hidden;
			&--open {
				height: 600%;
			}
		}
		&__links {
			height: 33px;
			width: 100%;
			text-align: left;
			z-index: 5;
			transition: unset !important;
			&--active {
				transition: unset !important;
				order: -1;
				&::after {
					content: '';
					width: 11px;
					height: 8px;
					display: block;
					position: absolute;
					right: 20px;
					top: 50%;
					transition: 0.3s ease;
					transform: translateY(-50%);
					background-image: url("data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6.5 7L12 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
					background-size: contain;
					background-repeat: no-repeat;
				}
			}
			&--open {
				&::after {
					transform: translateY(-50%) rotate(180deg);
				}
			}
		}
		&__links-fill {
			display: none;
		}
	}
}
@media (max-width: 425px) {
	.works {
		.content__wrapper {
			max-width: 363px;
		}
		&__title {
			font-size: 30px;
			margin-bottom: 15px;
		}
	}
}
@media (max-width: 394px) {
	.works {
		&__title {
			white-space: nowrap;
		}
		.content__wrapper {
			max-width: 298px;
		}
	}
	.works-nav {
		margin-bottom: 55px;
	}
	.works-examples {
		grid-template-columns: repeat(2, 1fr);
		justify-content: center;
		gap: 20px 18px;
	}
	.works-example {
		width: 130px;
		&__header {
			height: 160px;
		}
		&__text {
			font-size: 10px;
			line-height: 12px;
		}
		&__title {
			font-size: 16px;
			line-height: 20px;
			&--dev {
				font-size: 14px;
			}
		}
		&__background {
			width: 100px;
			height: 140px;
		}
		&__img {
			width: 140px;
			height: 140px;
		}
	}
} ;
</style>
<style lang="scss">
// CONTENT
.content {
	max-width: 1920px;
	width: 100%;
	margin: 76px auto 0;
	padding: 0 93px 100px;
	&__wrapper {
		max-width: 1274px;
		width: 100%;
		margin: 0 auto;
		position: relative;
		z-index: 3;
	}
}
@media (max-width: 1440px) {
	.content {
		&__wrapper {
			max-width: 1146px;
		}
	}
}
@media (max-width: 1024px) {
	.content {
		margin: 46px auto 0;
		padding: 0 41px 100px;
		&__wrapper {
			max-width: 798px;
		}
	}
}
@media (max-width: 768px) {
	.content {
		padding: 0px 41px 50px;
		&__wrapper {
			max-width: 612px;
		}
	}
}
@media (max-width: 425px) {
	.content {
		margin: 43px auto 0;
		padding: 0 32px 50px;
		&__wrapper {
			max-width: 337px;
		}
	}
}
@media (max-width: 366px) {
	.content {
		&__wrapper {
			max-width: 284px;
		}
	}
} ;
</style>
