<template>
	<div>
		<IntroTemplate :intro="intro" />
		<TaskTemplate :task="task" />
		<TitleTemplate :settings="titles[0]" />
		<GalleryTemplate :settings="gallery[0]" />
		<TitleTemplate :settings="titles[1]" />
		<GalleryTemplate :settings="gallery[1]" />
		<GalleryTemplate :settings="gallery[2]" />
		<TitleTemplate :settings="titles[2]" />
		<GalleryTemplateCard :settings="gallery[3]" />
		<TitleTemplate :settings="titles[3]" />
		<GalleryTemplate :settings="gallery[4]" />
		<GalleryTemplate :settings="gallery[5]" />
		<GalleryTemplate :settings="gallery[6]" />
		<LikeTemplate :title="intro.img[0]" />
		<FooterTemplate :settings="footer" />
	</div>
</template>

<script>
import GalleryTemplate from '@/components/Cases/Gallery.vue';
import GalleryTemplateCard from '@/components/Cases/GalleryCard.vue';
import TitleTemplate from '@/components/Cases/Title.vue';
import FooterTemplate from '@/components/Cases/Footer.vue';
import LikeTemplate from '@/components/Cases/Like.vue';
import IntroTemplate from '@/components/Cases/Intro.vue';
import TaskTemplate from '@/components/Cases/Task.vue';

export default {
	name: 'KvanttelekomBrendPage',
	// directives: {
	// 	motion: motion(),
	// },
	components: {
		GalleryTemplate,
		GalleryTemplateCard,
		TitleTemplate,
		FooterTemplate,
		IntroTemplate,
		TaskTemplate,
		LikeTemplate,
	},
	data() {
		return {
			intro: {
				icon: 'kvanttelekomBrend/PC/kvanttelekomBrend-page-icon.svg',
				logo: 'kvanttelekomBrend/PC/kvanttelekomBrend-page-logo.svg',
				img: ['kvanttelekomBrend', 'kvanttelekomBrend-page-intro'],
				title: 'СМАРТС КВАНТТЕЛЕКОМ',
				description:
					' — компания, которая проводит исследования, ведет прикладные разработки, создает решения в области квантовых коммуникаций и обеспечивает максимально безопасную передачу данных.',
				tags: 'Фирменный стиль / Брендбук',
			},
			task: {
				titles: {
					title: {
						title: 'Задача',
						fontSize: 'simple',
					},
					text: 'Заказчик обратился к нам с задачей разработать фирменный стиль и оформить брендбук, который впоследствии менеджеры смогут использовать для ведения компании.<br><br>Из пожеланий: придерживаться трендов текущего года, соблюдать стиль минимализма. Сделать упор на применение логотипа.',
					padding: 'task',
				},
				title: 'КВАНТТЕЛЕКОМ',
			},
			gallery: [
				{
					type: 'OneImage',
					images: [{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-01'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-02'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-03'] }],
				},
				{
					type: 'SixTwoImage',
					images: [
						{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-04'] },
						{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-05'] },
						{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-06'] },
						{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-07'] },
						{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-08'] },
						{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-09'] },
					],
				},
				{
					type: 'OneImage',
					images: [{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-10'] }],
				},
				{
					type: 'ThreeImage',
					border: 'simple',
					images: [
						{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-11'] },
						{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-12'] },
						{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-13'] },
					],
				},
				{
					type: 'ThreeImage',
					border: 'simple',
					images: [
						{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-14'] },
						{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-15'] },
						{ url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-16'] },
					],
				},
			],
			titles: [
				{
					title: {
						title: 'Этап 1 <span class="title__title-defis">-</span> Определение направления',
						fontSize: 'simple',
					},
					text: 'Компания специализируется на безопасной передаче данных. Брендбук был необходим для того, чтобы иметь уникальный товарный знак - запоминаться на рынке it безопасности. <br><br>От этих особенностей мы отталкивались, когда определяли направление стиля.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 2 <span class="title__title-defis">-</span> Разработка стиля',
						fontSize: 'simple',
					},
					text: 'На основе имеющегося логотипа и заданного направления проработали главные элементы стиля. Подобрали шрифты для написания текста и выделения заголовков. Определили основные цвета.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 3 <span class="title__title-defis">-</span> Верстка',
						fontSize: 'simple',
					},
					text: 'Собрали брендбук по стандартам с применением элементов фирменного стиля.<br><br>В поддержку логотипа, для решения дополнительных оформительских задач сделали пиктограммы. Выбрали плоский контурный стиль, напоминающий печатные платы. Добавили линии, символизирующие летящие фотоны света.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Результат',
						fontSize: 'simple',
					},
					text: 'Разработали фирменный стиль компании и на его основе оформили брендбук. Нашли удачное решение, которое выделило компанию на фоне конкурентов.',
					padding: 'simple',
				},
			],
			footer: {
				title: 'Proзапчасть',
				next: 'prozapchast',
				background: ['prozapchast', 'prozapchast-page-intro'],
			},
		};
	},
};
</script>

<style lang="sass" scoped>
.moodboard, .sketch, .finall
	margin: 0 auto
	max-width: 1580px
	padding: 0px 30px
	&__img
		width: 100%
		img
			width: 100%
.finall
	max-width: 1260px
	padding: 90px 30px
	@media (max-width: 425px)
		padding: 50px 30px
.models
	max-width: 1370px
	width: 100%
	margin: 24px auto 124px
	&__title
		max-width: 1370px
		padding: 0px 50px
		display: flex
		flex-direction: column
		span:last-child
			font-size: 20px
			font-weight: 500
	&__number
		font-size: 100px
		font-weight: 500
	&__underline
		margin: 18px 0
	&__subtitle
		max-width: 1370px
		padding: 0px 50px
		font-size: 30px
		strong
			font-weight: 700

.material
	&__wrapper
		max-width: 1370px
		width: 100%
		padding: 0px 50px
	&__text
		margin: 100px 0
		max-width: 800px
		font-size: 20px
		font-weight: 500
	&__row
		display: flex
		align-items: center
		justify-content: center
		width: 100%
	&__img
		img
			width: 100%
			display: block
			height: auto
			object-fit: contain
.task
	position: relative
	z-index: 3
	background: #F9F9F9
	&__img
		padding: 0px 50px
		display: block

.intro
	padding: 100px 0 270px
	height: 860px
	&__icon
		position: absolute
		top: 0
		left: 0
		max-width: 100%
	&__img
		position: absolute
		bottom: 0
		left: 0
		z-index: 1
		max-width: 55%
		margin-left: 50px
	&__column
		max-width: 440px
		display: flex
		flex-direction: column
		margin-left: auto
		padding-top: 100px

	&__logo
		margin-bottom: 45px
		max-height: 74px
		width: auto
		object-fit: contain
		object-position: left
	&__text
		font-size: 20px
		margin-bottom: 162px
		strong
			font-weight: 700
	&__title
		margin-bottom: 10px
		font-size: 30px
		font-weight: 700
	&__wrapper
		position: relative
		width: 100%

.wrapper
	max-width: 1370px
	width: 100%
	padding: 0px 50px
	margin: 0 auto

@media (max-width: 1200px)
	.intro
		height: auto
		&__column
			margin-right: auto
			margin-left: 0
			position: relative
			z-index: 1
			max-width: 100%
			padding-top: 100px

		&__text
			margin-bottom: 50px
		&__logo
			width: 100%
			margin-bottom: 30px
		&__wrapper
			display: flex
			flex-direction: column-reverse
			height: auto
		&__img
			position: relative
			top: auto
			left: -50%
			transform: translate(50%)
			margin-bottom: -10px
			margin-top: 32px
			max-width: 100%
@media (max-width: 768px)
	.models
		padding: 0px 36px
		&__title
			max-width: 1370px
			padding: 0px
			font-size: 50px
			span:last-child
				font-size: 16px
		&__number
			font-size: 50px
		&__underline
			margin: 24px auto 16px
		&__subtitle
			padding: 0px
			font-size: 16px
	.models-img
		img
			height: 454px
	.wrapper
		padding: 0px 36px
	.intro
		&__logo
			height: 54px
@media (max-width: 570px)
	.logo
		&__text
			text-align: center
		&__img
			width: 100%
			margin-left: 0
</style>

<style lang="sass">
.gallery-title
	position: relative
	.title
		max-width: 1370px
		margin: 0 auto
		padding: 0px 50px
		width: 100%
		position: absolute
		display: flex
		justify-content: flex-end
		&__wrapper
			max-width: 450px
			width: 100%
			margin: 0

@media (max-width: 768px)
	.gallery-title
		.title
			position: relative
	.title--motorika
		padding: 50px 0 !important
		.title
			&__subtitle
				margin-top: 32px !important
</style>
