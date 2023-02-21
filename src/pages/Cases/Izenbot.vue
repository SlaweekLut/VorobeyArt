<template>
	<div>
		<IntroTemplate :intro="intro" />
		<TaskTemplate :task="task" />
		<TitleTemplate :settings="titles[0]" />
		<TitleTemplate :settings="titles[1]" />
		<GalleryCardTemplate :settings="gallery[0]" />
		<TitleTemplate :settings="titles[2]" />
		<GalleryTemplate :settings="gallery[1]" />
		<GalleryTemplate :settings="gallery[2]" />
		<GalleryTemplate :settings="gallery[3]" />
		<div class="video">
			<div class="video__container">
				<div class="video__wrapper">
					<video class="video__player" src="/img/izenbot/Video/video-01.mp4"></video>
					<div class="video__play">
						<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="100" height="100" rx="50" fill="#0181C8" />
							<path d="M70 50L40 67.3205L40 32.6795L70 50Z" fill="white" />
						</svg>
					</div>
				</div>
			</div>
		</div>
		<TitleTemplate :settings="titles[2]" />
		<GalleryTemplate :settings="gallery[4]" />
		<GalleryTemplate :settings="gallery[5]" />
		<GalleryTemplate :settings="gallery[6]" />
		<GalleryTemplate :settings="gallery[7]" />
		<div class="video video--result">
			<div class="video__container">
				<div class="video__wrapper">
					<video class="video__player" src="/img/izenbot/Video/video-02.mp4"></video>
					<div class="video__play">
						<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="100" height="100" rx="50" fill="#0181C8" />
							<path d="M70 50L40 67.3205L40 32.6795L70 50Z" fill="white" />
						</svg>
					</div>
				</div>
			</div>
		</div>
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
	name: 'izenbotPage',
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
				icon: 'izenbot/PC/izenbot-page-icon.svg',
				logo: 'izenbot/PC/izenbot-page-logo.svg',
				img: ['izenbot', 'izenbot-page-intro'],
				title: 'IZENBOT',
				description:
					' — сочетание легендарного геймплея классических беговых игр и стилистики киберпанка. Формат игры: состязание в гонке против других реальных игроков, избегая препятствий. ',
				tags: 'Приложение / 3D моделирование',
			},
			task: {
				titles: {
					title: {
						title: 'Задача',
						fontSize: 'simple',
					},
					text: 'Разработать многопользовательскую онлайн-игру в стиле раннер с увлекательным геймплеем и ноткой хардкорности. Придерживаться стилистики киберпанка.',
					padding: 'task',
				},
				title: 'IZENBOT',
			},
			gallery: [
				{
					type: 'OneImage',
					gap: 'clamp(32px,5vw,80px) clamp(20px,8vw,120px)',
					borderRadius: '10px',
					mod: 'izenbot',
					shadow: 'false',
					images: [
						{ url: ['izenbot', '/izenbot-page-img-01'] },
						{ url: ['izenbot', '/izenbot-page-img-02'] },
						{ url: ['izenbot', '/izenbot-page-img-03'] },
						{ url: ['izenbot', '/izenbot-page-img-04'] },
						{ url: ['izenbot', '/izenbot-page-img-05'] },
						{ url: ['izenbot', '/izenbot-page-img-06'] },
					],
				},
				{
					type: 'OneImage',
					images: [{ url: ['izenbot', '/izenbot-page-img-07'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['izenbot', '/izenbot-page-img-08'] }],
				},
				{
					type: 'OneImage',
					mod: 'izenbot',
					images: [{ url: ['izenbot', '/izenbot-page-img-09'] }, { url: ['izenbot', '/izenbot-page-img-10'] }, { url: ['izenbot', '/izenbot-page-img-11'] }],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['izenbot', '/izenbot-page-img-12'] }],
				},
				{
					type: 'TwoImage',
					border: 'simple',
					images: [{ url: ['izenbot', '/izenbot-page-img-13'] }, { url: ['izenbot', '/izenbot-page-img-14'] }],
				},
				{
					type: 'OneImage',
					border: 'simple',
					images: [{ url: ['izenbot', '/izenbot-page-img-15'] }],
				},
				{
					type: 'TwoImage',
					border: 'simple',
					images: [{ url: ['izenbot', '/izenbot-page-img-16'] }, { url: ['izenbot', '/izenbot-page-img-17'] }],
				},
				{
					type: 'OneImage',
					gap: 'clamp(16px,4vw,55px)',
					borderRadius: '10px',
					mod: 'flipknife',
					images: [
						{ url: ['xplane', '/xplane-page-img-02'] },
						{ url: ['xplane', '/xplane-page-img-03'] },
						{ url: ['xplane', '/xplane-page-img-04'] },
						{ url: ['xplane', '/xplane-page-img-05'] },
					],
				},
			],
			titles: [
				{
					title: {
						title: 'Этап 1 <span class="title__title-defis">-</span> Идея',
						fontSize: 'simple',
					},
					text: 'Идея создания игры появилась у нашей команды тогда, когда мы нашли популярную игру и заметили тенденцию - разработчики не слышат пользователей, игнорируют их комментарии. Было решено создать собственное приложение, уже с учетом пожеланий.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 2 <span class="title__title-defis">-</span> Структура',
						fontSize: 'simple',
					},
					text: 'На основе составленного скелета - кнопок, блоков, экранов и сцен - подготовили атласы элементов. Продумали построение уровня, которое позволило бы игроку идентифицировать дружелюбные и негативные объекты.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 3 <span class="title__title-defis">-</span> Проработка персонажей',
						fontSize: 'simple',
					},
					text: 'Создание персонажей начинали с поиска концепта. Использовали различные источники изображений, скрещивали идеи между собой. Получив креативных персонажей, придумывали им названия, исходя из внешних данных. Затем подбирали подходящую цветовую палитру. ',
					padding: 'simple',
				},
				{
					title: {
						title: 'Дополнительные материалы',
						fontSize: 'simple',
					},
					text: 'В ходе реализации команда подготавливала различные арты для фанов проекта. Для этого использовались все возможные ресурсы - Blender 3D, Photoshop, Substance Painter, Marmoset.',
					padding: 'simple',
				},
			],
			footer: {
				title: 'Flip Knife',
				next: 'flipknife',
				background: ['flipknife', 'flipknife-page-intro'],
			},
		};
	},
	mounted() {
		document.querySelectorAll('.video__wrapper').forEach((videoWrapper) => {
			const video = videoWrapper.querySelector('video');
			videoWrapper.addEventListener('click', () => {
				if (video.paused) {
					video.play();
					video.controls = true;
					videoWrapper.classList.add('video__wrapper--active');
				}
			});
			video.addEventListener('pause', () => {
				video.controls = false;
				videoWrapper.classList.remove('video__wrapper--active');
			});
			video.addEventListener('ended', () => {
				video.pause();
				videoWrapper.classList.remove('video__wrapper--active');
			});
		});
	},
};
</script>

<style lang="sass" scoped>
.video
	padding: 90px 30px 0
	background: white
	position: relative
	z-index: 2
	&__container
		display: flex
		align-items: center
		justify-content: center
		width: 100%
		margin: 0 auto
		max-width: 1200px
	&__player
		height: 100%
		width: 100%
		max-height: calc(100vh - 230px)
		&::-internal-media-controls-overflow-menu-list-item
			display: none !important
	&__wrapper
		position: relative
		height: 100%
		&::after
			content: ''
			position: absolute
			left: 0
			top: 0
			width: 100%
			height: 100%
			background: rgba(0, 0, 0, 0.5)
			z-index: 1
			transition: .3s ease
			cursor: pointer

		&--active
			&::after
				opacity: 0
				pointer-events: none
			.video__play
				transform: translate(-50%, -50%) scale(1.1)
				opacity: 0
				pointer-events: none
	&__play
		position: absolute
		top: 50%
		left: 50%
		width: clamp(50px ,7vw ,100px)
		height: clamp(50px ,7vw ,100px)
		transition: .3s ease
		transform: translate(-50%, -50%)
		z-index: 2
		svg
			width: 100%
			height: 100%
		&::active
			transform: translate(-50%, -50%) scale(0.9)


	&--result
		padding-bottom: 130px
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
