<template>
	<div>
		<IntroTemplate :intro="intro" />
		<TaskTemplate :task="task" />
		<TitleTemplate :settings="titles[0]" />
		<TitleTemplate :settings="titles[1]" />
		<div class="moodboard">
			<div class="moodboard__img">
				<picture>
					<source media="(max-width: 768px)" srcset="/img/spisynote/Mobile/spisynote-page-img-11.webp" type="image/webp" />
					<source media="(min-width: 769px)" srcset="/img/spisynote/PC/spisynote-page-img-11.webp" type="image/webp" />
					<source srcset="/img/spisynote/JPG/spisynote-page-img-11.jpg" type="image/jpeg" />
					<img srcset="/img/spisynote/PC/spisynote-page-img-11.webp" alt="Moodboard" type="image/webp" />
				</picture>
			</div>
		</div>
		<TitleTemplate :settings="titles[2]" />
		<GalleryTemplate :settings="gallery[0]" />
		<TitleTemplate :settings="titles[3]" />
		<div class="sketch">
			<div class="sketch__img">
				<picture>
					<source media="(max-width: 768px)" srcset="/img/spisynote/Mobile/spisynote-page-img-03.webp" type="image/webp" />
					<source media="(min-width: 769px)" srcset="/img/spisynote/PC/spisynote-page-img-03.webp" type="image/webp" />
					<source srcset="/img/spisynote/JPG/spisynote-page-img-03.jpg" type="image/jpeg" />
					<img srcset="/img/spisynote/PC/spisynote-page-img-03.webp" alt="Sketch" type="image/webp" />
				</picture>
			</div>
		</div>
		<TitleTemplate :settings="titles[4]" />
		<div class="finall">
			<div class="finall__img">
				<picture>
					<source media="(max-width: 768px)" srcset="/img/spisynote/Mobile/spisynote-page-img-10.webp" type="image/webp" />
					<source media="(min-width: 769px)" srcset="/img/spisynote/PC/spisynote-page-img-10.webp" type="image/webp" />
					<source srcset="/img/spisynote/JPG/spisynote-page-img-10.jpg" type="image/jpeg" />
					<img srcset="/img/spisynote/PC/spisynote-page-img-10.webp" alt="finall" type="image/webp" />
				</picture>
			</div>
		</div>
		<GalleryTemplate :settings="gallery[1]" />
		<TitleTemplate :settings="titles[5]" />
		<GalleryTemplate :settings="gallery[2]" />
		<GalleryTemplate :settings="gallery[3]" />
		<LikeTemplate title="spicynote" />
		<FooterTemplate :settings="footer" />
	</div>
</template>

<script>
import GalleryTemplate from './components/Cases/Gallery.vue';
import TitleTemplate from './components/Cases/Title.vue';
import FooterTemplate from './components/Cases/Footer.vue';
import LikeTemplate from './components/Cases/Like.vue';
import IntroTemplate from './components/Cases/Intro.vue';
import TaskTemplate from './components/Cases/Task.vue';

export default {
	name: 'SpicynotePage',
	// directives: {
	// 	motion: motion(),
	// },
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
				icon: 'spisynote/PC/spisynote-page-icon.svg',
				logo: 'spisynote/PC/spisynote-page-logo.svg',
				img: ['spisynote', 'spisynote-page'],
				title: 'SpicyNote',
				description: '— новый производитель натуральной косметики. Бренд выпускает средства по уходу для лица, волос и тела. Натуральные составы и никаких испытаний на животных.',
				tags: 'Логотип / Визуализация',
			},
			task: {
				titles: {
					title: {
						title: 'Задача',
						fontSize: 'simple',
					},
					text: 'Разработка логотипа бренда. Заказчик обратился к нам, имея определенные пожелания: строгий “дорогой” стиль и минималистичность. Важно, чтобы была подчеркнута главная особенность косметики – натуральность.',
					padding: 'task',
				},
				title: 'SPICYNOTE',
			},
			gallery: [
				{
					type: 'TwoImage',
					images: [{ url: ['spisynote', '/spisynote-page-img-01'] }, { url: ['spisynote', '/spisynote-page-img-02'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['spisynote', '/spisynote-page-img-07'] }],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['spisynote', '/spisynote-page-img-06'] }],
				},
				{
					type: 'TwoImage',
					border: 'simple',
					images: [{ url: ['spisynote', '/spisynote-page-img-05'] }, { url: ['spisynote', '/spisynote-page-img-04'] }],
				},
			],
			titles: [
				{
					title: {
						title: 'Этап 1 <span class="title__title-defis">-</span> Бриф',
						fontSize: 'simple',
					},
					text: 'Для определения направления работы мы выяснили, какова целевая аудитория бренда, какие конкурентные преимущества имеет компания, где будет использоваться логотип. Также уточнили предпочтительные цвета. ',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 2 <span class="title__title-defis">-</span> Мудборд',
						fontSize: 'simple',
					},
					text: 'На основе информации о бренде составили мудборд – палитру и образы, которые можем использовать. Зеленый цвет и листья ассоциируются с природой и натуральностью. Нота и специи – отсылки к названию.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 3 <span class="title__title-defis">-</span> Создание набросков',
						fontSize: 'simple',
					},
					text: 'Приступили к созданию набросков. Проработали различные образы – ноты, листья, ветки и капли. Попробовали исполнение в разных форматах.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Отбор приоритетных вариантов',
						fontSize: 'simple',
					},
					text: 'После рассмотрения выбранных набросков наш клиент остановился на логотипе с интеграцией образа ноты - из-за прямой ассоциации с названием бренда.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 4 <span class="title__title-defis">-</span> Проработка',
						fontSize: 'simple',
					},
					text: 'Далее мы приступили к заключительному этапу – проработке конечного варианта. Создали несколько финальных зарисовок в разных направлениях.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Результат',
						fontSize: 'simple',
					},
					text: 'Нами был разработан логотип в строгом стиле минимализма, отражающий натуральность бренда и ассоциирующийся с его названием. Также мы проработали его исполнение с предпочтительными для заказчика оттенками – зеленым и оранжевым.',
					padding: 'simple',
				},
			],
			footer: {
				title: 'ENERGOTEK',
				next: 'energotek',
				background: ['energotek', 'energotek-page'],
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
	z-index: 1
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
