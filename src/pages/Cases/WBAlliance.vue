<template>
	<div>
		<IntroTemplate :intro="intro" />
		<TaskTemplate :task="task" />
		<TitleTemplate :settings="titles[0]" />
		<GalleryCardTemplate :settings="gallery[0]" />
		<TitleTemplate :settings="titles[1]" />
		<GalleryCardTemplate :settings="gallery[1]" />
		<TitleTemplate :settings="titles[2]" />
		<GalleryCardTemplate :settings="gallery[2]" />
		<TitleTemplate :settings="titles[3]" />
		<GalleryTemplate :settings="gallery[3]" />
		<GalleryTemplate :settings="gallery[4]" />
		<GalleryTemplate :settings="gallery[5]" />
		<LikeTemplate :title="intro.img[0]" />
		<FooterTemplate :settings="footer" />
	</div>
</template>

<script>
import GalleryTemplate from '@/components/Cases/Gallery.vue';
import GalleryCardTemplate from '@/components/Cases/GalleryCard.vue';
import TitleTemplate from '@/components/Cases/Title.vue';
import FooterTemplate from '@/components/Cases/Footer.vue';
import IntroTemplate from '@/components/Cases/Intro.vue';
import TaskTemplate from '@/components/Cases/Task.vue';
import LikeTemplate from '@/components/Cases/Like.vue';

export default {
	name: 'WBAlliancePage',
	components: {
		GalleryTemplate,
		GalleryCardTemplate,
		TitleTemplate,
		FooterTemplate,
		IntroTemplate,
		TaskTemplate,
		LikeTemplate,
	},
	data() {
		return {
			intro: {
				icon: 'wballiance/PC/wballiance-page-icon.svg',
				logo: 'wballiance/PC/wballiance-page-logo.svg',
				img: ['wballiance', 'wballiance-page-intro'],
				title: 'WBAlliance',
				description:
					'— компания, помогающая партнерам открывать свой бизнес и успешно зарабатывать на маркетплейсах. WB Alliance на рынке более 7 лет и знает все о торговле на площадках WB или Ozon.',
				tags: 'Фирменный стиль / Брендбук',
			},
			task: {
				titles: {
					title: {
						title: 'Задача',
						fontSize: 'simple',
					},
					text: 'Заказчик обратился к нам с задачей разработать фирменный стиль и оформить брендбук, который впоследствии менеджеры смогут использовать для ведения компании.<br><br>Из пожеланий: использовать в оформлении брендбука несколько корпоративных цветов.',
					padding: 'task',
				},
				title: 'WB Alliance',
			},
			gallery: [
				{
					type: 'OneImage',
					images: [{ url: ['wballiance', '/wballiance-page-img-01'] }],
					shadow: 'false',
				},
				{
					type: 'TwoImage',
					background: 'linear-gradient(130.46deg, #0066B1 10.72%, #003D78 83.52%)',
					images: [{ url: ['wballiance', '/wballiance-page-img-02'] }, { url: ['wballiance', '/wballiance-page-img-03'] }],
				},
				{
					type: 'FourImage',
					images: [
						{ url: ['wballiance', '/wballiance-page-img-04'] },
						{ url: ['wballiance', '/wballiance-page-img-06'] },
						{ url: ['wballiance', '/wballiance-page-img-05'] },
						{ url: ['wballiance', '/wballiance-page-img-07'] },
					],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['wballiance', '/wballiance-page-img-08'] }],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['wballiance', '/wballiance-page-img-09'] }],
				},
				{
					type: 'TwoImage',
					border: 'simple',
					images: [{ url: ['wballiance', '/wballiance-page-img-10'] }, { url: ['wballiance', '/wballiance-page-img-11'] }],
				},
			],
			titles: [
				{
					title: {
						title: 'Этап 1 <span class="title__title-defis">-</span> Определение направления',
						fontSize: 'simple',
					},
					text: 'Компания занимается продажами товаров на маркетплейсах, инвестициями и имеет быстрорастущие результаты - это символизирует движение вверх. На основе данной ассоциации мы решили отразить в фирменном стиле WB Alliance нестандартные, динамичные элементы.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 2 <span class="title__title-defis">-</span> Разработка стиля',
						fontSize: 'simple',
					},
					text: 'На основе имеющегося логотипа и заданного направления проработали главные элементы стиля. Подобрали шрифты для написания текста и выделения заголовков. Определили цвета, которые будут основными.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 3 <span class="title__title-defis">-</span> Верстка',
						fontSize: 'simple',
					},
					text: 'Собрали брендбук по стандартам с применением элементов фирменного стиля.<br><br>Оформили разделы об использовании логотипа, применении шрифтов, цветов, паттернов.<br><br>В поддержку логотипа для решения дополнительных оформительских задач сделали пиктограммы. Выбрали плоский контурный стиль.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Результат',
						fontSize: 'simple',
					},
					text: 'Разработали фирменный стиль, на его основе оформили брендбук. Нашли удачное решение, которое соответствовало всем пожеланиям заказчика и отразило специфику деятельности компании.',
					padding: 'simple',
				},
			],
			footer: {
				title: 'Motorika',
				next: 'motorika',
				background: ['motorika', 'motorika-page-intro'],
			},
		};
	},
};
</script>

<style lang="sass" scoped>
.logo
	width: 100%
	&__wrapper
		max-width: 1340px
		display: flex
		align-items: center
		padding: 0px 50px
		margin: 0 auto
		flex-wrap: wrap
		gap: 32px
		justify-content: space-evenly
	&__text
		font-size: 20px
		font-weight: 500
		max-width: 304px

.color
	width: 100%
	margin-bottom: 180px
	&__wrapper
		max-width: 1260px
		display: flex
		align-items: center
		padding: 0px 50px
		margin: 0 auto
		justify-content: space-around
		gap: 50px 30px
		flex-wrap: wrap
	&__grid
		display: grid
		grid-template-columns: repeat(2, 1fr)
		gap: 50px
		img
			width: 100%

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

.wrapper
	max-width: 1370px
	width: 100%
	padding: 0px 50px
	margin: 0 auto

@media (max-width: 768px)
	.color
		&__wrapper
			gap: 25px
			width: 100%
			img
				width: 100%
		&__grid
			gap: 25px
	.material
		&__text
			font-size: 16px
			margin: 60px 0
	.wrapper
		padding: 0px 36px
@media (max-width: 570px)
	.color
		margin-bottom: 50px
	.logo
		&__img
			width: 100%
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
.title--wballiance
	left: 50%
	transform: translate(-50%)


@media (max-width: 768px)
	.gallery-title
		.title
			position: relative
	.title
		&--wballiance-presentation
			padding: 50px 0 !important
			.title
				&__subtitle
					margin-top: 32px !important
		&--wballiance
			padding: 50px 0 !important
			justify-content: flex-start !important
			left: 0
			transform: translate(0)
			.title
				&__subtitle
					margin-top: 32px !important
</style>
