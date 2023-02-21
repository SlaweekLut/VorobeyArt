<template>
	<div>
		<IntroTemplate :intro="intro" />
		<TaskTemplate :task="tasks[0]" />
		<TitleTemplate :settings="titles[0]" />
		<TitleTemplate :settings="titles[1]" />
		<div class="content" style="margin-top: 0; padding-top: 0; padding-bottom: 0">
			<div class="content__wrapper">
				<GalleryTemplate :settings="gallery[0]" />
			</div>
		</div>
		<TitleTemplate :settings="titles[2]" />
		<GalleryTemplate :settings="gallery[1]" />
		<GalleryTemplate :settings="gallery[2]" />
		<TitleTemplate :settings="titles[3]" />
		<div class="content" style="margin-top: 0; padding-top: 0; padding-bottom: 0">
			<div class="content__wrapper">
				<GalleryTemplate :settings="gallery[3]" />
			</div>
		</div>
		<TitleTemplate :settings="titles[4]" />
		<div class="content" style="margin-top: 0; padding-top: 0">
			<div class="content__wrapper">
				<GalleryTemplate :settings="gallery[4]" />
			</div>
		</div>
		<GalleryTemplate :settings="gallery[5]" />
		<TitleTemplate :settings="titles[5]" />
		<GalleryTemplate :settings="gallery[6]" />
		<GalleryTemplate :settings="gallery[7]" />
		<GalleryTemplate :settings="gallery[8]" />
		<TaskTemplate :task="tasks[1]" />
		<TitleTemplate :settings="titles[6]" />
		<GalleryTemplate :settings="gallery[9]" />
		<TitleTemplate :settings="titles[7]" />
		<GalleryTemplate :settings="gallery[10]" />
		<TitleTemplate :settings="titles[8]" />
		<GalleryCardTemplate :settings="gallery[11]" />
		<TitleTemplate :settings="titles[9]" />
		<GalleryTemplate :settings="gallery[12]" />
		<GalleryTemplate :settings="gallery[13]" />
		<GalleryTemplate :settings="gallery[14]" />
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
	name: 'HonePage',
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
				icon: 'hone/PC/hone-page-icon.svg',
				logo: 'hone/PC/hone-page-logo.svg',
				img: ['hone', 'hone-page-intro'],
				title: 'H ONE',
				description:
					' —  коллектив творческих людей, которые с помощью средств массовой информации (коммуникационных каналов) продвигают услуги и товары клиента путём привлечения к нему дополнительного интереса.',
				tags: 'Логотип / Фирменный стиль / Брендбук',
			},
			tasks: [
				{
					titles: {
						title: {
							title: 'Задача',
							fontSize: 'simple',
						},
						text: 'Необходимо разработать логотип бренда. Заказчик обратился к нам, имея определенные пожелания: логотип должен выглядеть нестандартно и минималистично. Важно, чтобы в нем читалась буква “H”.',
						padding: 'task',
					},
					title: 'H one',
				},
				{
					titles: {
						title: {
							title: 'Брендбук',
							fontSize: 'simple',
						},
						text: 'Далее заказчику было необходимо разработать фирменный стиль и оформить брендбук, который впоследствии менеджеры смогут использовать для ведения компании.<br><br>Из пожеланий: придерживаться трендов текущего года, отталкиваться от минимализма. Сделать упор на логотип и варианты его использования.',
						padding: 'task',
					},
					title: '',
				},
			],
			gallery: [
				{
					type: 'OneImage',
					images: [{ url: ['hone', '/hone-page-img-01'] }],
				},
				{
					type: 'TwoImage',
					images: [{ url: ['hone', '/hone-page-img-02'] }, { url: ['hone', '/hone-page-img-03'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['hone', '/hone-page-img-04'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['hone', '/hone-page-img-05'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['hone', '/hone-page-img-06'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['hone', '/hone-page-img-07'] }],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['hone', '/hone-page-img-08'] }],
				},
				{
					type: 'TwoImage',
					border: 'simple',
					images: [{ url: ['hone', '/hone-page-img-09'] }, { url: ['hone', '/hone-page-img-10'] }],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['hone', '/hone-page-img-11'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['hone', '/hone-page-img-12'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['hone', '/hone-page-img-13'] }],
				},
				{
					type: 'FourImage',
					images: [{ url: ['hone', '/hone-page-img-14'] }, { url: ['hone', '/hone-page-img-15'] }, { url: ['hone', '/hone-page-img-16'] }, { url: ['hone', '/hone-page-img-17'] }],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['hone', '/hone-page-img-18'] }],
				},
				{
					type: 'TwoImage',
					border: 'simple',
					images: [{ url: ['hone', '/hone-page-img-19'] }, { url: ['hone', '/hone-page-img-20'] }],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['hone', '/hone-page-img-21'] }],
				},
			],
			titles: [
				{
					title: {
						title: 'Этап 1 <span class="title__title-defis">-</span> Бриф',
						fontSize: 'simple',
					},
					text: 'Мы выяснили, какова целевая аудитория бренда, где будет использоваться логотип, какие преимущества имеет бренд перед конкурентами. Данная информация необходима для того, чтобы иметь наиболее полное представление о заказчике и его продукции.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 2 <span class="title__title-defis">-</span> Мудборд',
						fontSize: 'simple',
					},
					text: 'На основе полученной информации составили мудборд – цветовую палитру и образы, которые можем использовать. Искали нестандартное решение, которое зацепит заказчика, и от которого мы будем отталкиваться. ',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 3 <span class="title__title-defis">-</span> Создание набросков',
						fontSize: 'simple',
					},
					text: 'После составления мудборда приступили к созданию набросков. Использовали разные образы, в которых читалась буква “Н”. Полученные наброски отправили заказчику и сопроводили их комментариями.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Отбор приоритетных вариантов',
						fontSize: 'simple',
					},
					text: 'После рассмотрения выбранных набросков наш клиент остановился на логотипе с интеграцией буквы “Н” в слово “ONE”.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 4 <span class="title__title-defis">-</span> Проработка',
						fontSize: 'simple',
					},
					text: 'Мы приступили к заключительному этапу – проработке конечного варианта. Создали несколько финальных зарисовок для поиска итогового логотипа.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Результат',
						fontSize: 'simple',
					},
					text: 'В результате был создан логотип, который в полной мере соответствовал пожеланиям заказчика: выполнен в строгом стиле минимализма, использовано нестандартное решение, читается буква “H” из части названия бренда - “ONE”. Также было проработано исполнение с предпочтительными для заказчика цветами.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 1 <span class="title__title-defis">-</span> Определение направления',
						fontSize: 'simple',
					},
					text: 'Компания занимается продажей сувенирной продукции премиум класса для любой сферы деятельности. В процессе обсуждения референсов выяснили, что логотип хорошо сочетается с 3D элементами. От этого и отталкивались. ',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 2 <span class="title__title-defis">-</span> Разработка стиля',
						fontSize: 'simple',
					},
					text: 'На основе имеющегося логотипа и заданного направления проработали главные элементы стиля и 3D элементы. Подобрали шрифты для написания текста и выделения заголовков. Определили основные цвета.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 3 <span class="title__title-defis">-</span> Верстка',
						fontSize: 'simple',
					},
					text: 'Собрали брендбук по стандартам с применением элементов фирменного стиля.<br><br>Оформили разделы об использовании логотипа, применении шрифтов, цветов, паттернов и 3D элементов.  В поддержку логотипа для решения дополнительных оформительских задач разработали 3D элементы, которые помогут выделить компанию на рынке.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Результат',
						fontSize: 'simple',
					},
					text: 'Разработали фирменный стиль компании и на его основе оформили брендбук. Нашли удачное решение, которое соответствовало всем пожеланиям заказчика.',
					padding: 'simple',
				},
			],
			footer: {
				title: 'aladdin',
				next: 'aladdin',
				background: ['aladdin', 'aladdin-page-intro'],
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
