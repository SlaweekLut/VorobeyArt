<template>
	<div>
		<IntroTemplate :intro="intro" />
		<TaskTemplate :task="task" />
		<TitleTemplate :settings="titles[0]" />
		<div class="logo">
			<div class="logo__wrapper">
				<picture>
					<source media="(max-width: 768px)" srcset="/img/wballiance/Mobile/WBAlliance-page-img-02.webp" type="image/webp" />
					<source media="(min-width: 769px)" srcset="/img/wballiance/PC/WBAlliance-page-img-02.webp" type="image/webp" />
					<source srcset="/img/wballiance/JPG/WBAlliance-page-img-02.jpg" type="image/jpeg" />
					<img class="logo__img" srcset="/img/wballiance/PC/WBAlliance-page-img-02.webp" alt="" type="image/webp" />
				</picture>
				<picture>
					<source media="(max-width: 768px)" srcset="/img/wballiance/Mobile/WBAlliance-page-img-01.webp" type="image/webp" />
					<source media="(min-width: 769px)" srcset="/img/wballiance/PC/WBAlliance-page-img-01.webp" type="image/webp" />
					<source srcset="/img/wballiance/JPG/WBAlliance-page-img-01.jpg" type="image/jpeg" />
					<img class="logo__img" srcset="/img/wballiance/PC/WBAlliance-page-img-01.webp" alt="" type="image/webp" />
				</picture>
				<p class="logo__text">Знак используется отдельно от текстовой части в случаях, когда наличие надписи не обязательно, а так же в качестве фирменного индикатора.</p>
			</div>
		</div>
		<TitleTemplate :settings="titles[1]" />
		<div class="color">
			<div class="color__wrapper">
				<picture>
					<source media="(max-width: 768px)" srcset="/img/wballiance/Mobile/WBAlliance-page-img-08.webp" type="image/webp" />
					<source media="(min-width: 769px)" srcset="/img/wballiance/PC/WBAlliance-page-img-08.webp" type="image/webp" />
					<source srcset="/img/wballiance/JPG/WBAlliance-page-img-08.jpg" type="image/jpeg" />
					<img srcset="/img/wballiance/PC/WBAlliance-page-img-08.webp" alt="" type="image/webp" />
				</picture>
				<div class="color__grid">
					<picture>
						<source media="(max-width: 768px)" srcset="/img/wballiance/Mobile/WBAlliance-page-img-07.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/wballiance/PC/WBAlliance-page-img-07.webp" type="image/webp" />
						<source srcset="/img/wballiance/JPG/WBAlliance-page-img-07.jpg" type="image/jpeg" />
						<img srcset="/img/wballiance/PC/WBAlliance-page-img-07.webp" alt="" type="image/webp" />
					</picture>
					<picture>
						<source media="(max-width: 768px)" srcset="/img/wballiance/Mobile/WBAlliance-page-img-06.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/wballiance/PC/WBAlliance-page-img-06.webp" type="image/webp" />
						<source srcset="/img/wballiance/JPG/WBAlliance-page-img-06.jpg" type="image/jpeg" />
						<img srcset="/img/wballiance/PC/WBAlliance-page-img-06.webp" alt="" type="image/webp" />
					</picture>
					<picture>
						<source media="(max-width: 768px)" srcset="/img/wballiance/Mobile/WBAlliance-page-img-05.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/wballiance/PC/WBAlliance-page-img-05.webp" type="image/webp" />
						<source srcset="/img/wballiance/JPG/WBAlliance-page-img-05.jpg" type="image/jpeg" />
						<img srcset="/img/wballiance/PC/WBAlliance-page-img-05.webp" alt="" type="image/webp" />
					</picture>
					<picture>
						<source media="(max-width: 768px)" srcset="/img/wballiance/Mobile/WBAlliance-page-img-04.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/wballiance/PC/WBAlliance-page-img-04.webp" type="image/webp" />
						<source srcset="/img/wballiance/JPG/WBAlliance-page-img-04.jpg" type="image/jpeg" />
						<img srcset="/img/wballiance/PC/WBAlliance-page-img-04.webp" alt="" type="image/webp" />
					</picture>
				</div>
			</div>
		</div>
		<div class="gallery-title">
			<TitleTemplate :settings="titles[2]" />
			<GalleryTemplate :settings="gallery[0]" />
		</div>
		<GalleryTemplate :settings="gallery[1]" />
		<GalleryTemplate :settings="gallery[2]" />
		<GalleryTemplate :settings="gallery[3]" />
		<TitleTemplate :settings="titles[3]" />
		<GalleryTemplate :settings="gallery[4]" />
		<GalleryTemplate :settings="gallery[5]" />
		<LikeTemplate :title="intro.img[0]" />
		<FooterTemplate :settings="footer" />
	</div>
</template>

<script>
import GalleryTemplate from './components/Cases/Gallery.vue';
import TitleTemplate from './components/Cases/Title.vue';
import FooterTemplate from './components/Cases/Footer.vue';
import IntroTemplate from './components/Cases/Intro.vue';
import TaskTemplate from './components/Cases/Task.vue';
import LikeTemplate from './components/Cases/Like.vue';

export default {
	name: 'WBAlliancePage',
	components: {
		GalleryTemplate,
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
				img: ['wballiance', 'wballiance-page'],
				title: 'WBAlliance',
				description:
					'— помогла множеству партнеров открыть свой бизнес и успешно зарабатывать на маркетплейсах! Компания существует на рынке более 7 лет и знает все о том, как устроен бизнес торговли на площадках WB или Ozon.',
				tags: 'Логотип / Логобук / Презентация / Брендинг',
			},
			task: {
				titles: {
					title: {
						title: 'Задача',
						fontSize: 'simple',
					},
					text: 'Заказчик обратился к нам с задачей разработать фирменный стиль и оформить брендбук, который впоследствии менеджеры смогут использовать для ведения компании.<br/><br/>Из пожеланий: придерживаться трендов текущего года, минимализм. Сделать упор на применение логотипа, как можно делать и как нельзя.',
					padding: 'task',
				},
				title: 'WB Alliance',
			},
			gallery: [
				{
					type: 'OneImage',
					images: [{ url: ['wballiance', '/WBAlliance-page-img-11'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['wballiance', '/WBAlliance-page-img-12'] }],
				},
				{
					type: 'TwoImage',
					images: [{ url: ['wballiance', '/WBAlliance-page-img-09'] }, { url: ['wballiance', '/WBAlliance-page-img-10'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['wballiance', '/WBAlliance-page-img-16'] }],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['wballiance', '/WBAlliance-page-img-13'] }],
				},
				{
					type: 'TwoImage',
					border: 'simple',
					images: [{ url: ['wballiance', '/WBAlliance-page-img-14'] }, { url: ['wballiance', '/WBAlliance-page-img-15'] }],
				},
			],
			titles: [
				{
					title: {
						title: 'Этап 1 <span class="title__title-defis">-</span> Определение направления',
						fontSize: 'simple',
					},
					text: 'Компания занимается продажами товаров на маркетплейсах и имеет быстрорастущие результаты. Логотип напомнил нам марку “BMW”. Все это сформировало динамические и не стандартные элементы, движение вверх, на скорости.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 2 <span class="title__title-defis">-</span> Разработка стиля',
						fontSize: 'simple',
					},
					text: 'На основе имеющегося логотипа и заданного направления проработали главные элементы стиля. Подобрали пару шрифтов, для написания текста и заголовков. Цвета, которые являются основными.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 3 <span class="title__title-defis">-</span> Верстка',
						fontSize: 'simple',
					},
					text: 'Собрали брендбук по стандартам с применением элементов фирменного стиля.<br/><br/>Также для каждого направления создали уникальное изображение, которое символизирует определенный вид работ и отражает его специфику.<br/><br/>В поддержку логотипа, для решения дополнительных оформительских задач сделали пиктограммы. Выбрали плоский контурный стиль, напоминающий чертежи.',
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
				title: 'Motorika',
				next: 'motorika',
				background: ['motorika', 'motorika-page'],
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
