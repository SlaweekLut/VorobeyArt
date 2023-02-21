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
		<GalleryTemplate :settings="gallery[1]" />
		<TitleTemplate :settings="titles[2]" />
		<GalleryTemplate :settings="gallery[2]" />
		<div class="content" style="padding-bottom: 0">
			<div class="content__wrapper">
				<GalleryTemplate :settings="gallery[3]" />
			</div>
		</div>
		<TitleTemplate :settings="titles[3]" />
		<GalleryTemplate :settings="gallery[4]" />
		<LikeTemplate :title="intro.img[0]" />
		<FooterTemplate :settings="footer" />
	</div>
</template>

<script>
import GalleryTemplate from '@/components/Cases/Gallery.vue';
import TitleTemplate from '@/components/Cases/Title.vue';
import FooterTemplate from '@/components/Cases/Footer.vue';
import LikeTemplate from '@/components/Cases/Like.vue';
import IntroTemplate from '@/components/Cases/Intro.vue';
import TaskTemplate from '@/components/Cases/Task.vue';

export default {
	name: 'MobdebutPage',
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
				icon: 'mobdebut/PC/mobdebut-page-icon.svg',
				logo: 'mobdebut/PC/mobdebut-page-logo.svg',
				img: ['mobdebut', 'mobdebut-page-intro'],
				title: 'Mobdebut',
				description:
					' — разработчик и производитель интеллектуальных счетчиков электроэнергии. Компания предлагает комплексные решения для коммунальных служб, реализует современные технологии в собственных разработках.',
				tags: '3D моделирование / Текстурирование',
			},
			task: {
				titles: {
					title: {
						title: 'Задача',
						fontSize: 'simple',
					},
					text: 'Заказчик выходил на рынок с собственными системами контроля и управления электроэнергией. Необходимо было создать их изображения на основе 3D моделей - для размещения на сайте компании.',
					padding: 'task',
				},
				title: 'MOBDEBUT',
			},
			gallery: [
				{
					type: 'OneImage',
					images: [{ url: ['mobdebut', '/mobdebut-page-img-01'] }],
				},
				{
					type: 'FourImage',
					border: 'simple',
					mod: 'mobdebut',
					images: [
						{ url: ['mobdebut', '/mobdebut-page-img-02'] },
						{ url: ['mobdebut', '/mobdebut-page-img-03'] },
						{ url: ['mobdebut', '/mobdebut-page-img-04'] },
						{ url: ['mobdebut', '/mobdebut-page-img-05'] },
					],
				},
				{
					type: 'OneImage',
					images: [{ url: ['mobdebut', '/mobdebut-page-img-06'] }],
				},
				{
					type: 'OneImage',
					images: [{ url: ['mobdebut', '/mobdebut-page-img-07'] }],
				},
				{
					type: 'ThreeImageCol',
					border: 'simple',
					images: [{ url: ['mobdebut', '/mobdebut-page-img-08'] }, { url: ['mobdebut', '/mobdebut-page-img-09'] }, { url: ['mobdebut', '/mobdebut-page-img-10'] }],
				},
			],
			titles: [
				{
					title: {
						title: 'Этап 1 <span class="title__title-defis">-</span> Сбор данных',
						fontSize: 'simple',
					},
					text: 'Для сборки моделей мы запросили у заказчика фотографии оборудования. В данном проекте решение задачи осложнялось плохим качеством наработок - отсутствующие на фото детали и особенности технической части устройств приходилось уточнять у нашего клиента.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 2 <span class="title__title-defis">-</span> Сборка 3D моделей',
						fontSize: 'simple',
					},
					text: 'Визуализация началась с подбора ракурсов, позволяющих наиболее точно передать размеры оборудования. Затем при помощи “Blender” собрали модели в пространстве.<br><br>Так выглядели промежуточные этапы моделирования:',
					padding: 'simple',
				},
				{
					title: {
						title: 'Этап 3 <span class="title__title-defis">-</span> Проработка',
						fontSize: 'simple',
					},
					text: 'Создали текстуры и добавили на них необходимые наклейки, которые собирали в Adobe Photoshop. Далее настроили освещение, обработали рендеры - получились готовые модели.',
					padding: 'simple',
				},
				{
					title: {
						title: 'Результат',
						fontSize: 'simple',
					},
					text: 'Создали изображения устройств из 3D моделей, которые полностью соответствуют реальным объектам. Несмотря на сложности с фотографиями, удалось проработать даже мельчайшие детали.',
					padding: 'simple',
				},
			],
			footer: {
				title: 'Prime travel',
				next: 'primetravel',
				background: ['primetravel', 'primetravel-page-intro'],
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
