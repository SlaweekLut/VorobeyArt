<template>
	<div>
		<IntroTemplate :intro="intro" />
		<TaskTemplate :task="task" />
		<TitleTemplate :settings="titles[0]" />
		<GalleryTemplate :settings="gallery[0]" />
		<TitleTemplate :settings="titles[1]" />
		<GalleryCardTemplate :settings="gallery[1]" />
		<TitleTemplate :settings="titles[2]" />
		<GalleryTemplate :settings="gallery[2]" />
		<TitleTemplate :settings="titles[3]" />
		<GalleryCardTemplate :settings="gallery[3]" />
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
	name: 'ZolotoaltayaPage',
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
				icon: 'zolotoaltaya/PC/zolotoaltaya-page-icon.svg',
				logo: 'zolotoaltaya/PC/zolotoaltaya-page-logo.svg',
				img: ['zolotoaltaya', 'zolotoaltaya-page-intro'],
				title: 'Золото Алтая',
				description: '— производитель органической косметики на основе алтайского мумиё. Бренд выпускает шампуни и бальзамы для волос, уходовые средства для лица и кремы для рук.',
				tags: '3D моделирование / Текстурирование / Дизайн',
			},
			task: {
				titles: {
					title: {
						title: 'Задача',
						fontSize: 'simple',
					},
					text: 'Заказчику было необходимо сделать карточки товара для размещения на маркетплейсе Wildberries. Планировалась фотосессия продукции, требующая больших временных затрат из-за поиска фотографа и необходимости доставки товара в фотостудию.<br><br>Мы предложили более быстрое и простое решение - создание 3D моделей и дизайна карточек на их основе.<br><br>Из пожеланий клиента: соответствие изображений реальным товарам и лаконичное оформление с природным мотивом.',
					padding: 'task',
				},
				title: 'ЗОЛОТО АЛТАЯ',
			},
			gallery: [
				{
					type: 'OneImage',
					padding: '0 clamp(38px,10vw,150px)',
					images: [{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-01'] }],
				},
				{
					type: 'SixImage',
					images: [
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-02'] },
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-03'] },
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-04'] },
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-05'] },
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-06'] },
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-07'] },
					],
				},
				{
					type: 'OneImage',
					padding: '0 clamp(38px,13.1vw,250px)',
					images: [{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-08'] }],
				},
				{
					type: 'EightImage',
					images: [
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-09'] },
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-10'] },
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-11'] },
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-12'] },
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-13'] },
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-14'] },
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-15'] },
						{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-16'] },
					],
				},
			],
			titles: [
				{
					title: {
						title: 'Этап 1 <span class="title__title-defis">-</span> Сбор данных',
						fontSize: 'simple',
					},
					text: 'Для создания 3D карточек мы запросили только размеры продукции и ее этикетки, а также непрофессиональные фотографии.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 2 <span class="title__title-defis">-</span> 3D моделирование',
						fontSize: 'simple',
					},
					text: 'Следующим шагом было моделирование продукции на основе размеров и этикеток средств. Для самой сборки мы использовали 3D Blender, работу с текстурами провели при помощи Substance Painter.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 3 <span class="title__title-defis">-</span> Дизайн',
						fontSize: 'simple',
					},
					text: 'На основе готовых моделей и референсов заказчика разработали дизайн карточек. Сначала создали главный слайд, затем сделали второстепенные - в аналогичном стиле.<br><br>В оформлении использовали золотой и черный цвета - палитру бренда. Добавили зелень как символ природы и натуральности.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Результат',
						fontSize: 'simple',
					},
					text: 'Нами были созданы 3D модели продуктов бренда, на основе которых мы подготовили единый дизайн карточек Wildberries. При этом для их реализации от клиента потребовалось предоставить только минимальные сведения о продукции.',
					padding: 'simple',
				},
			],
			footer: {
				title: 'Marusya',
				next: 'marusya',
				background: ['marusya', 'marusya-page-intro'],
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
