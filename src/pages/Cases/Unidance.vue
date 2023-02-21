<template>
	<div>
		<IntroTemplate :intro="intro" />
		<TaskTemplate :task="task" />
		<TitleTemplate :settings="titles[0]" />
		<GalleryCardTemplate :settings="gallery[0]" />
		<GalleryTemplate :settings="gallery[1]" />
		<GalleryTemplate :settings="gallery[2]" />
		<TitleTemplate :settings="titles[1]" />
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
	name: 'UnidancePage',
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
				icon: 'unidance/PC/unidance-page-icon.svg',
				logo: 'unidance/PC/unidance-page-logo.svg',
				img: ['unidance', 'unidance-page-intro'],
				title: 'Unidance',
				description:
					' — студия, в которой преподается более 10 танцевальных направлений (среди них Vogue, Jazz-funk, Dancehall, Hip-hop, Breakdance). Опытные педагоги постоянно оттачивают свои навыки на мастер-классах и других танцевальных мероприятиях.',
				tags: 'Афиши / Билеты',
			},
			task: {
				titles: {
					title: {
						title: 'Задача',
						fontSize: 'simple',
					},
					text: 'Заказчик обратился к нам с задачей разработать афиши для социальных сетей на предстоящие танцевальные мастер-классы. Также было необходимо дополнительно сверстать билеты и сертификаты для участников проекта.',
					padding: 'task',
				},
				title: 'UNIDANCE',
			},
			gallery: [
				{
					type: 'SixThreeImage',
					images: [
						{ url: ['unidance', '/unidance-page-img-01'] },
						{ url: ['unidance', '/unidance-page-img-02'] },
						{ url: ['unidance', '/unidance-page-img-03'] },
						{ url: ['unidance', '/unidance-page-img-04'] },
						{ url: ['unidance', '/unidance-page-img-05'] },
						{ url: ['unidance', '/unidance-page-img-06'] },
					],
					background: '#fff',
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['unidance', '/unidance-page-img-07'] }],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['unidance', '/unidance-page-img-08'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['unidance', '/unidance-page-img-09'] }],
				},
			],
			titles: [
				{
					title: {
						title: 'Афиши',
						fontSize: 'simple',
					},
					text: 'Мощный рекламный инструмент. Эффективный и оригинальный дизайн афиши может мгновенно привлечь внимание клиентов, а также компактно подать нужную информацию.<br><br>Поэтому при разработке дизайна мы отталкивались от принципов яркости и лаконичности. Для каждого танцевального направления продумали свой дизайн, отражающий его специфику и направленность.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Билеты',
						fontSize: 'simple',
					},
					text: 'Билеты на мастер-классы оформили в стиле афиш. Продублировали всю важную информацию и оставили специфичное оформление для каждого танцевального направления.',
					padding: 'simple',
				},
			],
			footer: {
				title: 'izenbot',
				next: 'izenbot',
				background: ['izenbot', 'izenbot-page-intro'],
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
