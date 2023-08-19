<template>
	<div>
		<IntroTemplate :intro="intro" />
		<TaskTemplate :task="task" />
		<div class="energotek__img">
			<picture>
				<source media="(max-width: 768px)" srcset="/img/energotek/Mobile/energotek-page-img-02.webp" type="image/webp" />
				<source media="(min-width: 769px)" srcset="/img/energotek/PC/energotek-page-img-02.webp" type="image/webp" />
				<source srcset="/img/energotek/JPG/energotek-page-img-02.jpg" type="image/jpeg" />
				<img class="gallery__img" srcset="/img/energotek/PC/energotek-page-img-02.webp" alt="" type="image/webp" />
			</picture>
		</div>
		<GalleryTemplate :settings="gallery[1]" />
		<div class="material">
			<div class="material__wrapper wrapper">
				<p class="material__text">Для точного построения 3D моделей, компания "Энерготэк" предоставила нам инженерные чертежи с указанием размеров и параметров объектов.</p>
			</div>
			<div class="material__row">
				<div class="material__img">
					<picture>
						<source media="(max-width: 768px)" srcset="/img/energotek/Mobile/energotek-page-img-03.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/energotek/PC/energotek-page-img-03.webp" type="image/webp" />
						<source srcset="/img/energotek/JPG/energotek-page-img-03.jpg" type="image/jpeg" />
						<img class="gallery__img" srcset="/img/energotek/PC/energotek-page-img-03.webp" alt="" type="image/webp" />
					</picture>
				</div>
			</div>
		</div>
		<div class="models">
			<h2 class="models__title">
				<span class="models__number">60+</span>
				<span>моделей было подготовлено нашими специалистами для каталога</span>
			</h2>
			<p class="models__subtitle">
				<span class="models__subtitle-wrapper"> <strong>3D</strong> моделирование / текстурирование / обработка </span>
			</p>
		</div>
		<div ref="el" class="models-img">
			<picture>
				<source media="(max-width: 768px)" srcset="/img/energotek/Mobile/energotek-page-img-11.webp" type="image/webp" />
				<source media="(min-width: 769px)" srcset="/img/energotek/PC/energotek-page-img-11.webp" type="image/webp" />
				<source srcset="/img/energotek/JPG/energotek-page-img-11.jpg" type="image/jpeg" />
				<img class="gallery__img" srcset="/img/energotek/PC/energotek-page-img-11.webp" alt="" type="image/webp" />
			</picture>
		</div>
		<div class="additional-material">
			<h2 class="additional-material__title wrapper">Дополнительные материалы</h2>
		</div>
		<div class="additional-material__gallery">
			<div class="additional-material__gallery--column">
				<div class="additional-material__gallery--row">
					<div class="additional-material__gallery--column">
						<div class="additional-material__img">
							<picture>
								<source media="(max-width: 768px)" srcset="/img/energotek/Mobile/energotek-page-img-10.webp" type="image/webp" />
								<source media="(min-width: 769px)" srcset="/img/energotek/PC/energotek-page-img-10.webp" type="image/webp" />
								<source srcset="/img/energotek/JPG/energotek-page-img-10.jpg" type="image/jpeg" />
								<img class="gallery__img" srcset="/img/energotek/PC/energotek-page-img-10.webp" alt="" type="image/webp" />
							</picture>
						</div>
						<div class="additional-material__img">
							<picture>
								<source media="(max-width: 768px)" srcset="/img/energotek/Mobile/energotek-page-img-08.webp" type="image/webp" />
								<source media="(min-width: 769px)" srcset="/img/energotek/PC/energotek-page-img-08.webp" type="image/webp" />
								<source srcset="/img/energotek/JPG/energotek-page-img-08.jpg" type="image/jpeg" />
								<img class="gallery__img" srcset="/img/energotek/PC/energotek-page-img-08.webp" alt="" type="image/webp" />
							</picture>
						</div>
					</div>
					<div class="additional-material__img">
						<picture>
							<source media="(max-width: 768px)" srcset="/img/energotek/Mobile/energotek-page-img-09.webp" type="image/webp" />
							<source media="(min-width: 769px)" srcset="/img/energotek/PC/energotek-page-img-09.webp" type="image/webp" />
							<source srcset="/img/energotek/JPG/energotek-page-img-09.jpg" type="image/jpeg" />
							<img class="gallery__img" srcset="/img/energotek/PC/energotek-page-img-09.webp" alt="" type="image/webp" />
						</picture>
					</div>
				</div>
				<div class="additional-material__gallery--row">
					<div class="additional-material__img">
						<picture>
							<source media="(max-width: 768px)" srcset="/img/energotek/Mobile/energotek-page-img-07.webp" type="image/webp" />
							<source media="(min-width: 769px)" srcset="/img/energotek/PC/energotek-page-img-07.webp" type="image/webp" />
							<source srcset="/img/energotek/JPG/energotek-page-img-07.jpg" type="image/jpeg" />
							<img class="gallery__img" srcset="/img/energotek/PC/energotek-page-img-07.webp" alt="" type="image/webp" />
						</picture>
					</div>
					<div class="additional-material__img">
						<picture>
							<source media="(max-width: 768px)" srcset="/img/energotek/Mobile/energotek-page-img-06.webp" type="image/webp" />
							<source media="(min-width: 769px)" srcset="/img/energotek/PC/energotek-page-img-06.webp" type="image/webp" />
							<source srcset="/img/energotek/JPG/energotek-page-img-06.jpg" type="image/jpeg" />
							<img class="gallery__img" srcset="/img/energotek/PC/energotek-page-img-06.webp" alt="" type="image/webp" />
						</picture>
					</div>
					<div class="additional-material__img">
						<picture>
							<source media="(max-width: 768px)" srcset="/img/energotek/Mobile/energotek-page-img-05.webp" type="image/webp" />
							<source media="(min-width: 769px)" srcset="/img/energotek/PC/energotek-page-img-05.webp" type="image/webp" />
							<source srcset="/img/energotek/JPG/energotek-page-img-05.jpg" type="image/jpeg" />
							<img class="gallery__img" srcset="/img/energotek/PC/energotek-page-img-05.webp" alt="" type="image/webp" />
						</picture>
					</div>
				</div>
			</div>
		</div>
		<GalleryTemplate :settings="gallery[0]" />
		<!-- // <LikeTemplate :title="intro.img[0]" /> -->
		<FooterTemplate :settings="footer" />
	</div>
</template>

<script>
import GalleryTemplate from '@/components/Cases/Gallery.vue';
import LikeTemplate from '@/components/Cases/Like.vue';
import FooterTemplate from '@/components/Cases/Footer.vue';
import IntroTemplate from '@/components/Cases/Intro.vue';
import TaskTemplate from '@/components/Cases/Task.vue';

export default {
	name: 'EnergotekPage',
	components: {
		GalleryTemplate,
		LikeTemplate,
		FooterTemplate,
		IntroTemplate,
		TaskTemplate,
	},
	data() {
		return {
			intro: {
				icon: 'energotek/PC/energotek-page-icon.svg',
				logo: 'energotek/PC/energotek-page-logo.svg',
				img: ['energotek', 'energotek-page-intro'],
				title: 'Энерготек',
				description:
					'— разработчик и производитель полимерных систем для прокладки и защиты кабельных линий. Решения компании повышают надежность работы линий электропередачи и безопасность обслуживающего персонала, сокращают расходы в процессе эксплуатации.',
				tags: '3D моделирование / Текстурирование / Визуализация',
			},
			task: {
				titles: {
					title: {
						title: 'Задача',
						fontSize: 'simple',
					},
					text: 'Заказчику было необходимо презентовать проект потенциальным инвесторам, чтобы привлечь их средства. RUS + ENG.<br/><br/>Из пожеланий: соответствие стилистике и цветовой палитре приложения, лаконичность и не перегруженность информацией.',
					padding: 'task',
				},
				title: 'ЭНЕРГОТЕК',
			},
			gallery: [
				{
					type: 'OneImage',
					images: [{ url: ['energotek', '/energotek-page-img-01'] }],
				},
			],
			footer: {
				title: 'Энерготэк AR',
				next: 'energotekAR',
				background: ['energotekAR', 'energotekAR-page-intro'],
			},
		};
	},
};
</script>

<style lang="sass" scoped>
.energotek__img
	img
		padding: 0px 50px
		display: block
		margin: 0 auto
		position: relative
		z-index: 2
		max-width: 1412px
		width: 100%
.additional-material
	margin: 75px 0
	&__title
		font-size: clamp(30px, 8vw, 50px)
		font-weight: 700
	&__gallery
		background-color: #F9F9F9
		padding: 50px
		width: 100%
		&--column
			display: flex
			flex-direction: column
			gap: 25px
			max-width: 1710px
			margin: 0 auto
		&--row
			gap: 34px
			display: flex
		img
			border-radius: 25px
			width: 100%
			display: block
			height: auto
			object-fit: contain

.models-img
	max-width: 1920px
	padding: 0px 50px
	margin: 0 auto
	overflow: auto
	img
		position: relative
		transition: 10s linear
	&::-webkit-scrollbar
		height: 0
		width: 0

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
	&__subtitle
		max-width: 1370px
		padding: 0px 50px
		margin-top: 24px
		font-size: 20px
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
		max-width: 100%
		width: 100%
		img
			width: 100%
			height: 100%
			display: block
			object-fit: contain

.wrapper
	max-width: 1370px
	width: 100%
	padding: 0px 50px
	margin: 0 auto

@media (max-width: 1024px)
	.models
		max-width: 828px
		width: 100%
		margin: 24px auto 120px
		&__title
			padding: 0px 20px
			font-size: 80px
			span:last-child
				font-size: 18px
				line-height: 22px
		&__subtitle
			padding: 0px 20px
			margin-top: 22px
			line-height: 22px
			font-size: 18px
	.material
		&__text
			max-width: 788px
			width: 100%
			margin: 100px auto 28px
			font-size: 18px
			line-height: 22px
	.additional-material
		margin: 75px auto
		max-width: 788px
		width: 100%
		&__title
			padding: 0px 20px
			font-size:38px
		&__gallery
			padding: 40px 20px
			&--column
				max-width: 788px
				width: 100%

@media (max-width: 768px)
	.additional-material
		margin: 20px auto 40px
		&__title
			margin: 0 auto
			padding: 0 16px
			max-width: 642px
			font-size: 35px
		&__img
			max-width: 540px
			margin: 0 auto
		&__gallery
			padding: 32px
			img
				border-radius: 10px
			&--column
				gap: 10px
			&--row
				flex-direction: column
				gap: 10px
	.material
		&__text
			font-size: 18px
			margin: 60px auto 17px
			max-width: 642px
			padding: 0px 16px
	.models
		padding: 0px 36px
		margin: 24px auto
		max-width: 642px
		padding: 0px 16px
		&__title
			max-width: 1370px
			padding: 0px
			span:last-child
				font-size: 18px
		&__subtitle
			padding: 0px
			font-size: 18px
	.models-img
		overflow: auto
		img
			height: 454px
	.wrapper
		padding: 0px 16px
@media (max-width: 425px)
	.wrapper
		width: 100%
		padding: 0
	.additional-material
		&__title
			padding: 0px 44px
			font-size: 30px
		&__gallery
			padding: 32px 44px
	.material
		&__text
			padding: 0px 44px
			font-size: 16px
	.models
		padding: 0px 44px
		&__number
			font-size: 50px
		&__subtitle
			font-size: 16px
		&__title
			span:last-child
				font-size: 16px
</style>
