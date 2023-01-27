<template>
	<div
		class="gallery"
		:style="`gap: ${settings.gap}px; padding: ${settings.padding}`"
		:class="{
			'gallery--one': settings.type === 'OneImage',
			'gallery--two': settings.type === 'TwoImage',
			'gallery--three': settings.type === 'ThreeImage',
			'gallery--four': settings.type === 'FourImage',
			'gallery--fourCollage': settings.type === 'FourImageCollage',
			'gallery--collage': settings.type === 'ThreeImageCollage',
		}"
	>
		<!-- Колонка слева -->
		<div
			class="gallery__column"
			:style="`width: ${settings.column.width}%; gap: ${settings.gap}px`"
			v-if="settings.type === 'ThreeImageCollage' && settings.column.position === 'Left'"
		>
			<div
				class="gallery__image gallery__image--column"
				:class="[`gallery__image--border-${settings.border}`]"
				:style="`height: ${image.height}%`"
				v-for="image in settings.columnImages"
				:key="image.url"
			>
				<picture>
					<source media="(max-width: 768px)" :srcset="`/img/${image.url[0]}/Mobile${image.url[1]}.webp`" type="image/webp" />
					<source media="(min-width: 769px)" :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`" type="image/webp" />
					<source :srcset="`/img/${image.url[0]}/JPG${image.url[1]}.jpg`" type="image/jpeg" />
					<img class="gallery__img" :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`" :alt="image.url" type="image/webp" />
				</picture>
			</div>
		</div>

		<!-- Изображения -->
		<div class="gallery__image" :class="[`gallery__image--border-${settings.border}`]" v-for="image in settings.images" :key="image.url" :style="`width: ${image.width}%`">
			<picture>
				<source media="(max-width: 768px)" :srcset="`/img/${image.url[0]}/Mobile${image.url[1]}.webp`" type="image/webp" />
				<source media="(min-width: 769px)" :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`" type="image/webp" />
				<source :srcset="`/img/${image.url[0]}/JPG${image.url[1]}.jpg`" type="image/jpeg" />
				<img class="gallery__img" :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`" :alt="image.url" type="image/webp" />
			</picture>
		</div>

		<!-- Колонка справа -->
		<div
			class="gallery__column"
			:style="`width: ${settings.column.width}%; gap: ${settings.gap}px`"
			v-if="settings.type === 'ThreeImageCollage' && settings.column.position === 'Right'"
		>
			<div
				class="gallery__image gallery__image--column"
				:class="[`gallery__image--border-${settings.border}`]"
				:style="`height: ${image.height}%`"
				v-for="image in settings.columnImages"
				:key="image.url"
			>
				<picture>
					<source media="(max-width: 768px)" :srcset="`/img/${image.url[0]}/Mobile${image.url[1]}.webp`" type="image/webp" />
					<source media="(min-width: 769px)" :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`" type="image/webp" />
					<source :srcset="`/img/${image.url[0]}/JPG${image.url[1]}.jpg`" type="image/jpeg" />
					<img class="gallery__img" :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`" :alt="image.url" type="image/webp" />
				</picture>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GalleryTemplate',
	props: {
		settings: {
			default: {
				type: '',
				images: [],
				border: '',
				column: {
					position: 'Left',
					width: '50',
				},
				// column: {
				// 	position: 'Left',
				// },
				columnImages: [{ url: '', height: '' }],
				gap: '',
				padding: '',
			},
		},
	},
};
</script>

<style lang="sass" scoped>
.gallery
	display: flex
	width: 100vw
	height: auto
	&__img
		width: 100%
		height: 100%
		object-fit: cover
		object-position: center center
		display: block
	&__column
		display: flex
		flex-direction: column
	&__image
		width: 100%
		z-index: 2
		&--border-simple
			border: 10px solid #fff
			@media(max-width: 1024px)
				border-width: 6px
			@media(max-width: 425px)
				border-width: 5px
		&--column
			height: 50%
			width: 100%
	&--fourCollage
		display: grid
		grid-template-columns: repeat(2,1fr)

@media(max-width: 768px)
	.gallery
		&--collage
			flex-direction: column
			gap: 0px
			.gallery
				&__column, &__image
					width: 100% !important
		&--two
			gap: 0px
			flex-direction: column
</style>
