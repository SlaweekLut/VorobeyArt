<template>
	<div>
		<IntroTemplate :intro="intro" />
		<TaskTemplate :task="task" />
		<div class="competition">
			<picture>
				<source media="(max-width: 768px)" srcset="/img/motorika/Mobile/motorika-page-img-18.webp" type="image/webp" />
				<source media="(min-width: 769px)" srcset="/img/motorika/PC/motorika-page-img-18.webp" type="image/webp" />
				<source srcset="/img/motorika/JPG/motorika-page-img-18.jpg" type="image/jpeg" />
				<img srcset="/img/motorika/PC/motorika-page-img-18.webp" class="competition__img" alt="Конкурс на fl.ru" type="image/webp" />
			</picture>
			<div class="competition__column">
				<h2 class="competition__title">1 место</h2>
				<p class="competition__text">Наша команда принимала участие в конкурсе на платформе FL.RU и заняла 1-ое место</p>
				<h3 class="competition__subtitle">Техническое задание:</h3>
				<p class="competition__text">
					Создайте принт, который отражает эстетику будущего, технологий, киберпанка.
					<br /><br />
					Визуализировать принт на 2 любых цвета футболок.
					<br /><br />
					Принт коммерческий, но можно добавить «степень моторики», если это будет уместно.
				</p>
			</div>
		</div>
		<div class="examples">
			<div class="examples__wrapper">
				<div class="examples__img">
					<picture>
						<source media="(max-width: 768px)" srcset="/img/motorika/Mobile/motorika-page-img-17.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/motorika/PC/motorika-page-img-17.webp" type="image/webp" />
						<source srcset="/img/motorika/JPG/motorika-page-img-17.jpg" type="image/jpeg" />
						<img srcset="/img/motorika/PC/motorika-page-img-17.webp" alt="Пример" type="image/webp" />
					</picture>
				</div>
				<div class="examples__img">
					<picture>
						<source media="(max-width: 768px)" srcset="/img/motorika/Mobile/motorika-page-img-12.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/motorika/PC/motorika-page-img-12.webp" type="image/webp" />
						<source srcset="/img/motorika/JPG/motorika-page-img-12.jpg" type="image/jpeg" />
						<img srcset="/img/motorika/PC/motorika-page-img-12.webp" alt="Пример" type="image/webp" />
					</picture>
				</div>
				<div class="examples__img">
					<picture>
						<source media="(max-width: 768px)" srcset="/img/motorika/Mobile/motorika-page-img-11.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/motorika/PC/motorika-page-img-11.webp" type="image/webp" />
						<source srcset="/img/motorika/JPG/motorika-page-img-11.jpg" type="image/jpeg" />
						<img srcset="/img/motorika/PC/motorika-page-img-11.webp" alt="Пример" type="image/webp" />
					</picture>
				</div>
				<div class="examples__img">
					<picture>
						<source media="(max-width: 768px)" srcset="/img/motorika/Mobile/motorika-page-img-16.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/motorika/PC/motorika-page-img-16.webp" type="image/webp" />
						<source srcset="/img/motorika/JPG/motorika-page-img-16.jpg" type="image/jpeg" />
						<img srcset="/img/motorika/PC/motorika-page-img-16.webp" alt="Пример" type="image/webp" />
					</picture>
				</div>
				<div class="examples__img">
					<picture>
						<source media="(max-width: 768px)" srcset="/img/motorika/Mobile/motorika-page-img-10.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/motorika/PC/motorika-page-img-10.webp" type="image/webp" />
						<source srcset="/img/motorika/JPG/motorika-page-img-10.jpg" type="image/jpeg" />
						<img srcset="/img/motorika/PC/motorika-page-img-10.webp" alt="Пример" type="image/webp" />
					</picture>
				</div>
				<div class="examples__img">
					<picture>
						<source media="(max-width: 768px)" srcset="/img/motorika/Mobile/motorika-page-img-14.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/motorika/PC/motorika-page-img-14.webp" type="image/webp" />
						<source srcset="/img/motorika/JPG/motorika-page-img-14.jpg" type="image/jpeg" />
						<img srcset="/img/motorika/PC/motorika-page-img-14.webp" alt="Пример" type="image/webp" />
					</picture>
				</div>
				<div class="examples__img">
					<picture>
						<source media="(max-width: 768px)" srcset="/img/motorika/Mobile/motorika-page-img-15.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/motorika/PC/motorika-page-img-15.webp" type="image/webp" />
						<source srcset="/img/motorika/JPG/motorika-page-img-15.jpg" type="image/jpeg" />
						<img srcset="/img/motorika/PC/motorika-page-img-15.webp" alt="Пример" type="image/webp" />
					</picture>
				</div>
				<div class="examples__img">
					<picture>
						<source media="(max-width: 768px)" srcset="/img/motorika/Mobile/motorika-page-img-13.webp" type="image/webp" />
						<source media="(min-width: 769px)" srcset="/img/motorika/PC/motorika-page-img-13.webp" type="image/webp" />
						<source srcset="/img/motorika/JPG/motorika-page-img-13.jpg" type="image/jpeg" />
						<img srcset="/img/motorika/PC/motorika-page-img-13.webp" alt="Пример" type="image/webp" />
					</picture>
				</div>
			</div>
		</div>
		<TitleTemplate :settings="titles[0]" />
		<GalleryTemplate :settings="gallery[0]" />
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
import LikeTemplate from '@/components/Cases/Like.vue';
import TitleTemplate from '@/components/Cases/Title.vue';
import FooterTemplate from '@/components/Cases/Footer.vue';
import IntroTemplate from '@/components/Cases/Intro.vue';
import TaskTemplate from '@/components/Cases/Task.vue';

export default {
	name: 'MotorikaPage',
	components: {
		GalleryTemplate,
		LikeTemplate,
		TitleTemplate,
		FooterTemplate,
		IntroTemplate,
		TaskTemplate,
	},
	data() {
		return {
			task: {
				titles: {
					title: {
						title: 'Задача',
						fontSize: 'simple',
					},
					text: 'Разработать эксклюзивный дизайн футболок',
					padding: 'task',
				},
				title: 'Моторика',
			},
			intro: {
				icon: 'motorika/PC/motorika-page-icon.svg',
				logo: 'motorika/PC/motorika-page-logo.svg',
				img: ['motorika', 'motorika-page'],
				title: 'Motorika',
				description:
					'— разработчик современных кибер-рук. Компания создает технологии будущего и обеспечивает людей крутыми функциональными кибер-гаджетами. <br/><br/> Миссия Моторики – обеспечить 100% людей без рук на планете современными технологичными кибер-руками.',
				tags: 'Графический дизайн / Визуализация',
			},
			gallery: [
				{
					type: 'OneImage',
					images: [{ url: ['motorika', '/motorika-page-img-08'] }],
				},
				{
					type: 'TwoImage',
					images: [{ url: ['motorika', '/motorika-page-img-04'] }, { url: ['motorika', '/motorika-page-img-03'] }],
					padding: '12px 0px',
					gap: '12',
				},
				{
					type: 'OneImage',
					images: [{ url: ['motorika', '/motorika-page-img-01'] }],
				},
				{
					type: 'ThreeImageCollage',
					column: {
						position: 'Left',
						width: '50',
					},
					columnImages: [
						{ url: ['motorika', '/motorika-page-img-06'], height: '50' },
						{ url: ['motorika', '/motorika-page-img-09'], height: '50' },
					],
					images: [{ url: ['motorika', '/motorika-page-img-07'], width: '50' }],
				},
			],
			titles: [
				{
					title: {
						title: 'Визуализация',
						fontSize: 'clamp(30px, 8vw, 50px)',
					},
					underTitleLine: true,
					padding: 'simple',
				},
				{
					title: {
						title: 'Другие варианты применения принтов',
						fontSize: 'simple',
					},
					padding: 'simple',
				},
			],
			footer: {
				title: 'SPICYNOTE',
				next: 'spicynote',
				background: ['spisynote', 'spisynote-page'],
			},
		};
	},
};
</script>

<style lang="sass" scoped>
.examples
	background-color: #F9F9F9
	&__wrapper
		display: flex
		flex-wrap: wrap
		justify-content: space-around
		gap: 50px
		padding: 78px 10px
		max-width: 1500px
		margin: 0px auto
	&__img
		max-width: 330px
		img
			width: 100%
.competition
	display: flex
	gap: 30px
	justify-content: space-around
	padding: 90px 50px
	max-width: 1370px
	margin: 0 auto
	flex-wrap: wrap
	&__title
		font-size: 50px
		font-weight: 700
		margin-bottom: 30px
	&__subtitle
		font-size: 30px
		font-weight: 700
		margin: 75px 0px 30px
	&__img
		max-width: 620px
		width: 100%
	&__column
		max-width: 620px
		width: 100%
	&__text
		font-size: 20px
		font-weight: 500


@media (max-width: 768px)
	.examples
		&__wrapper
			display: grid
			grid-template-columns: repeat(2, 1fr)
			gap: 18px
	.competition
		padding: 50px
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
@media (max-width: 570px)
	.color
		margin-bottom: 50px
	.logo
		&__text
			text-align: center
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
