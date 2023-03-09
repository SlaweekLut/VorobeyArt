<template>
  <div
    class="gallery"
    :style="`gap: ${settings.gap}px; padding: ${settings.padding}`"
    :class="{
      'gallery--one': settings.type === 'OneImage',
      'gallery--two': settings.type === 'TwoImage',
      'gallery--three': settings.type === 'ThreeImage',
      'gallery--three gallery--col': settings.type === 'ThreeImageCol',
      'gallery--four': settings.type === 'FourImage',
      'gallery--fourCollage': settings.type === 'FourImageCollage',
      'gallery--collage': settings.type === 'ThreeImageCollage',
      'gallery--izenbot': settings.mod === 'izenbot',
      'gallery--mobdebut': settings.mod === 'mobdebut',
    }"
  >
    <!-- Колонка слева -->
    <div
      v-if="
        settings.type === 'ThreeImageCollage' &&
        settings.column.position === 'Left'
      "
      class="gallery__column"
      :style="`width: ${settings.column.width}%; gap: ${settings.gap}px`"
    >
      <div
        v-for="image in settings.columnImages"
        :key="image.url"
        class="gallery__image gallery__image--column"
        :class="[`gallery__image--border-${settings.border}`]"
        :style="`height: ${image.height}%`"
      >
        <picture>
          <source
            media="(max-width: 768px)"
            :srcset="`/img/${image.url[0]}/Mobile${image.url[1]}.webp`"
            type="image/webp"
          />
          <source
            media="(min-width: 769px)"
            :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`"
            type="image/webp"
          />
          <source
            :srcset="`/img/${image.url[0]}/JPG${image.url[1]}.jpg`"
            type="image/jpeg"
          />
          <img
            class="gallery__img"
            :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`"
            :alt="image.url"
            type="image/webp"
          />
        </picture>
      </div>
    </div>

    <!-- Изображения -->
    <div
      v-for="image in settings.images"
      :key="image.url"
      class="gallery__image"
      :class="[`gallery__image--border-${settings.border}`]"
      :style="`width: ${image.width}%`"
    >
      <picture>
        <source
          media="(max-width: 768px)"
          :srcset="`/img/${image.url[0]}/Mobile${image.url[1]}.webp`"
          type="image/webp"
        />
        <source
          media="(min-width: 769px)"
          :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`"
          type="image/webp"
        />
        <source
          :srcset="`/img/${image.url[0]}/JPG${image.url[1]}.jpg`"
          type="image/jpeg"
        />
        <img
          class="gallery__img"
          :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`"
          :alt="image.url"
          type="image/webp"
        />
      </picture>
    </div>

    <!-- Колонка справа -->
    <div
      v-if="
        settings.type === 'ThreeImageCollage' &&
        settings.column.position === 'Right'
      "
      class="gallery__column"
      :style="`width: ${settings.column.width}%; gap: ${settings.gap}px`"
    >
      <div
        v-for="image in settings.columnImages"
        :key="image.url"
        class="gallery__image gallery__image--column"
        :class="[`gallery__image--border-${settings.border}`]"
        :style="`height: ${image.height}%`"
      >
        <picture>
          <source
            media="(max-width: 768px)"
            :srcset="`/img/${image.url[0]}/Mobile${image.url[1]}.webp`"
            type="image/webp"
          />
          <source
            media="(min-width: 769px)"
            :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`"
            type="image/webp"
          />
          <source
            :srcset="`/img/${image.url[0]}/JPG${image.url[1]}.jpg`"
            type="image/jpeg"
          />
          <img
            class="gallery__img"
            :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`"
            :alt="image.url"
            type="image/webp"
          />
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
	width: 100%
	height: auto
	&--mobdebut
		@media(max-width: 768px)
			display: grid
			grid-template-columns: repeat(2, 1fr)
	&--izenbot
		display: grid
		grid-template-columns: calc(66% - clamp(20px,6vw,113px)/2) calc(33% - clamp(20px,6vw,113px)/2)
		grid-template-areas: 'one second' 'one third'
		padding: 60px clamp(30px, 6vw, 130px) 0
		gap: clamp(32px, 3vw, 60px) clamp(20px,6vw,113px)
		.gallery__image
			&:nth-child(1)
				grid-area: one
				img
					object-fit: contain
					object-position: bottom
			&:nth-child(2)
				grid-area: second
				img
					border-radius: 10px
					box-shadow: 11px 9px 12px 0px #0000000D
			&:nth-child(3)
				grid-area: third
		@media(max-width: 768px)
			grid-template-columns: 1fr
			grid-template-areas: 'second' 'third' 'one'

	&--col
		@media(max-width: 425px)
			flex-direction: column
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
