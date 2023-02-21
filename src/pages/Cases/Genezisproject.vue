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
import LikeTemplate from '@/components/Cases/Like.vue';
import IntroTemplate from '@/components/Cases/Intro.vue';
import TaskTemplate from '@/components/Cases/Task.vue';

export default {
	name: 'GenezisPage',
	// directives: {
	// 	motion: motion(),
	// },
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
				icon: 'genezisproject/PC/genezisproject-page-icon.svg',
				logo: 'genezisproject/PC/genezisproject-page-logo.svg',
				img: ['genezisproject', 'genezisproject-page-intro'],
				title: 'ГЕНЕЗИС ПРОЕКТ',
				description:
					'— архитектурно-инженерная компания, проектирующая комплексы общественных зданий, промышленные и спортивные объекты, городские пространства, социально-деловую инфраструктуру. ',
				tags: 'Фирменный стиль / Брендбук',
			},
			task: {
				titles: {
					title: {
						title: 'Задача',
						fontSize: 'simple',
					},
					text: 'Заказчик обратился к нам с задачей разработать фирменный стиль и оформить брендбук, который впоследствии менеджеры смогут использовать для ведения компании.<br><br>Из пожеланий: разделить 3 направления деятельности предприятия, сохранив при этом определенную общность.',
					padding: 'task',
				},
				title: 'ПРОЕКТ ГЕНЕЗИС',
			},
			gallery: [
				{
					type: 'ThreeImage',
					images: [
						{ url: ['genezisproject', '/genezisproject-page-img-01'] },
						{ url: ['genezisproject', '/genezisproject-page-img-02'] },
						{ url: ['genezisproject', '/genezisproject-page-img-03'] },
					],
				},
				{
					type: 'TwoImage',
					images: [{ url: ['genezisproject', '/genezisproject-page-img-04'] }, { url: ['genezisproject', '/genezisproject-page-img-05'] }],
				},
				{
					type: 'FourImage',
					images: [
						{ url: ['genezisproject', '/genezisproject-page-img-06'] },
						{ url: ['genezisproject', '/genezisproject-page-img-07'] },
						{ url: ['genezisproject', '/genezisproject-page-img-08'] },
						{ url: ['genezisproject', '/genezisproject-page-img-09'] },
					],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['genezisproject', '/genezisproject-page-img-10'] }],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['genezisproject', '/genezisproject-page-img-11'] }],
				},
				{
					type: 'TwoImage',
					border: 'simple',
					images: [{ url: ['genezisproject', '/genezisproject-page-img-12'] }, { url: ['genezisproject', '/genezisproject-page-img-13'] }],
				},
			],
			titles: [
				{
					title: {
						title: 'Этап 1 <span class="title__title-defis">-</span> Определение направления',
						fontSize: 'simple',
					},
					text: 'Компания занимается проектированием, инженерными изысканиями, проведением испытаний стройматериалов. На основе этого мы выделили параметры, от которых будем отталкиваться: элементы, рисунки и цветовая палитра.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 2 <span class="title__title-defis">-</span> Разработка стиля',
						fontSize: 'simple',
					},
					text: 'На основе имеющегося логотипа и заданного направления проработали главные элементы стиля. Шрифты подобрали строгие, символизирующие точность деятельности компании.<br><br>Цвета подобрали в зависимости от особенностей направления:<br>Проектирование - большая ответственность, опасность - красный цвет.<br>Плавучие станции - размещение на воде - синий цвет.<br>Изыскательные работы - работа с грунтом - оранжевый цвет.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 3 <span class="title__title-defis">-</span> Верстка',
						fontSize: 'simple',
					},
					text: 'Собрали брендбук по стандартам с применением элементов фирменного стиля.<br><br><br>Также для каждого направления создали уникальное изображение, которое символизирует определенный вид работ и отражает его специфику.<br><br><br>В поддержку логотипа, для решения дополнительных оформительских задач сделали пиктограммы. Выбрали плоский контурный стиль, напоминающий чертежи.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Результат',
						fontSize: 'simple',
					},
					text: 'Разработали фирменный стиль компании и на его основе оформили брендбук. Нашли удачное решение, которое разделило направления деятельности, но сохранило общие черты, связывающие их между собой.',
					padding: 'simple',
				},
			],
			footer: {
				title: 'Золото Алтая',
				next: 'zolotoaltaya',
				background: ['zolotoaltaya', 'zolotoaltaya-page-intro'],
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
