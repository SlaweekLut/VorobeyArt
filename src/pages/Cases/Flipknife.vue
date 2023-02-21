<template>
	<div>
		<IntroTemplate :intro="intro" />
		<TaskTemplate :task="task" />
		<TitleTemplate :settings="titles[0]" />
		<div class="content" style="margin-top: 0; padding-top: 0; padding-bottom: 0">
			<div class="content__wrapper">
				<GalleryTemplate :settings="gallery[0]" />
			</div>
		</div>
		<TitleTemplate :settings="titles[1]" />
		<GalleryCardTemplate :settings="gallery[1]" />
		<GalleryTemplate :settings="gallery[2]" />
		<GalleryTemplate :settings="gallery[3]" />
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
	name: 'flipknifePage',
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
				icon: 'flipknife/PC/flipknife-page-icon.svg',
				logo: 'flipknife/PC/flipknife-page-logo.svg',
				img: ['flipknife', 'flipknife-page-intro'],
				title: 'Flip Knife',
				description: ' — игра, в которой можно все: складывать ножи, метать топоры и легендарные мечи. Чтобы стать мастером, нужно собрать собственную коллекцию ножей!',
				tags: 'Приложение / 3D моделирование',
			},
			task: {
				titles: {
					title: {
						title: 'Задача',
						fontSize: 'simple',
					},
					text: 'На основе референсной игры создать собственное приложение, добавить новый функционал и фишки, которые давно просят пользователи.<br><br>В приоритете создание PvP режима в стиле гонки - где игрокам необходимо первыми прийти на финиш. ',
					padding: 'task',
				},
				title: 'FLIP KNIFE',
			},
			gallery: [
				{
					type: 'OneImage',
					images: [{ url: ['flipknife', '/flipknife-page-img-01'] }],
				},
				{
					type: 'OneImage',
					gap: 'clamp(16px,4vw,55px)',
					borderRadius: '10px',
					mod: 'flipknife',
					images: [
						{ url: ['flipknife', '/flipknife-page-img-02'] },
						{ url: ['flipknife', '/flipknife-page-img-03'] },
						{ url: ['flipknife', '/flipknife-page-img-04'] },
						{ url: ['flipknife', '/flipknife-page-img-05'] },
					],
				},
				{
					type: 'TwoImage',
					images: [{ url: ['flipknife', '/flipknife-page-img-06'] }, { url: ['flipknife', '/flipknife-page-img-07'] }],
				},
				{
					type: 'TwoImage',
					images: [{ url: ['flipknife', '/flipknife-page-img-08'] }, { url: ['flipknife', '/flipknife-page-img-09'] }],
				},
			],
			titles: [
				{
					title: {
						title: 'Элементы',
						fontSize: 'simple',
					},
					text: 'На основе составленного скелета приложения - кнопок, блоков, экранов и  сцен - подготовили атласы элементов. Для их создания использовали Blender и Photoshop.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Результат',
						fontSize: 'simple',
					},
					text: 'Проработали и собрали яркий и удобный визуал, исходя из структуры, набросков, элементов. Перевели приложение в стадию MVP. Программную часть создали Unity специалисты. Четкая организация работы команды - зона ответственности проектного менеджера.',
					padding: 'simple',
				},
			],
			footer: {
				title: 'go up',
				next: 'goup',
				background: ['goup', 'goup-page-intro'],
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
