<template>
  <div
    class="gallery"
    :class="{
      'gallery--one': settings.type === 'OneImage',
      'gallery--two': settings.type === 'TwoImage',
      'gallery--three': settings.type === 'ThreeImage',
      'gallery--four': settings.type === 'FourImage',
    }"
    :style="{ background: settings.background }"
  >
    <!-- Изображения -->
    <div
      v-if="
        settings.type === 'OneImage' ||
        settings.type === 'TwoImage' ||
        settings.type === 'ThreeImage'
      "
      class="gallery__wrapper"
      :class="[
        `gallery__wrapper--${settings.type}`,
        `gallery__wrapper--${settings.mod}`,
      ]"
      :style="{ gap: settings.gap }"
    >
      <div
        v-for="image in settings.images"
        :key="image.url"
        class="gallery__image"
        :class="[
          `gallery__image--border-${settings.border}`,
          `gallery__shadow--${settings.shadow}`,
        ]"
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
            :style="{ 'border-radius': settings.borderRadius }"
            :srcset="`/img/${image.url[0]}/PC${image.url[1]}.webp`"
            :alt="image.url"
            type="image/webp"
          />
        </picture>
      </div>
    </div>

    <div
      v-if="settings.type === 'SixThreeImage'"
      class="gallery__wrapper gallery__wrapper--SixThreeImage"
    >
      <div class="gallery__column">
        <div
          v-for="n in 2"
          :key="n"
          class="gallery__image"
          :class="[`gallery__image--border-${settings.border}`]"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              :srcset="`/img/${settings.images[n - 1].url[0]}/Mobile${
                settings.images[n - 1].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              :srcset="`/img/${settings.images[n - 1].url[0]}/PC${
                settings.images[n - 1].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              :srcset="`/img/${settings.images[n - 1].url[0]}/JPG${
                settings.images[n - 1].url[1]
              }.jpg`"
              type="image/jpeg"
            />
            <img
              class="gallery__img"
              :srcset="`/img/${settings.images[n - 1].url[0]}/PC${
                settings.images[n - 1].url[1]
              }.webp`"
              :alt="settings.images[n - 1].url"
              type="image/webp"
            />
          </picture>
        </div>
      </div>
      <div class="gallery__column">
        <div
          v-for="n in 2"
          :key="n"
          class="gallery__image"
          :class="[`gallery__image--border-${settings.border}`]"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              :srcset="`/img/${settings.images[n + 1].url[0]}/Mobile${
                settings.images[n + 1].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              :srcset="`/img/${settings.images[n + 1].url[0]}/PC${
                settings.images[n + 1].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              :srcset="`/img/${settings.images[n + 1].url[0]}/JPG${
                settings.images[n + 1].url[1]
              }.jpg`"
              type="image/jpeg"
            />
            <img
              class="gallery__img"
              :srcset="`/img/${settings.images[n + 1].url[0]}/PC${
                settings.images[n + 1].url[1]
              }.webp`"
              :alt="settings.images[n + 1].url"
              type="image/webp"
            />
          </picture>
        </div>
      </div>
      <div class="gallery__column">
        <div
          v-for="n in 2"
          :key="n"
          class="gallery__image"
          :class="[`gallery__image--border-${settings.border}`]"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              :srcset="`/img/${settings.images[n + 3].url[0]}/Mobile${
                settings.images[n + 3].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              :srcset="`/img/${settings.images[n + 3].url[0]}/PC${
                settings.images[n + 3].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              :srcset="`/img/${settings.images[n + 3].url[0]}/JPG${
                settings.images[n + 3].url[1]
              }.jpg`"
              type="image/jpeg"
            />
            <img
              class="gallery__img"
              :srcset="`/img/${settings.images[n + 3].url[0]}/PC${
                settings.images[n + 3].url[1]
              }.webp`"
              :alt="settings.images[n + 3].url"
              type="image/webp"
            />
          </picture>
        </div>
      </div>
    </div>

    <div
      v-if="settings.type === 'SixTwoImage'"
      class="gallery__wrapper gallery__wrapper--SixTwoImage"
    >
      <div class="gallery__row">
        <div
          v-for="n in 3"
          :key="n"
          class="gallery__image"
          :class="[`gallery__image--border-${settings.border}`]"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              :srcset="`/img/${settings.images[n - 1].url[0]}/Mobile${
                settings.images[n - 1].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              :srcset="`/img/${settings.images[n - 1].url[0]}/PC${
                settings.images[n - 1].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              :srcset="`/img/${settings.images[n - 1].url[0]}/JPG${
                settings.images[n - 1].url[1]
              }.jpg`"
              type="image/jpeg"
            />
            <img
              class="gallery__img"
              :srcset="`/img/${settings.images[n - 1].url[0]}/PC${
                settings.images[n - 1].url[1]
              }.webp`"
              :alt="settings.images[n - 1].url"
              type="image/webp"
            />
          </picture>
        </div>
      </div>
      <div class="gallery__row">
        <div
          v-for="n in 3"
          :key="n"
          class="gallery__image"
          :class="[`gallery__image--border-${settings.border}`]"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              :srcset="`/img/${settings.images[n + 2].url[0]}/Mobile${
                settings.images[n + 2].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              :srcset="`/img/${settings.images[n + 2].url[0]}/PC${
                settings.images[n + 2].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              :srcset="`/img/${settings.images[n + 2].url[0]}/JPG${
                settings.images[n + 2].url[1]
              }.jpg`"
              type="image/jpeg"
            />
            <img
              class="gallery__img"
              :srcset="`/img/${settings.images[n + 2].url[0]}/PC${
                settings.images[n + 2].url[1]
              }.webp`"
              :alt="settings.images[n + 2].url"
              type="image/webp"
            />
          </picture>
        </div>
      </div>
    </div>

    <div
      v-if="settings.type === 'SixImage'"
      class="gallery__wrapper gallery__wrapper--SixImage"
    >
      <div
        v-for="image in settings.images"
        :key="image.url"
        class="gallery__image"
        :class="[`gallery__image--border-${settings.border}`]"
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

    <div
      v-if="settings.type === 'FourImage'"
      class="gallery__wrapper gallery__wrapper--FourImage"
    >
      <div class="gallery__col">
        <div
          class="gallery__image"
          :class="[`gallery__image--border-${settings.border}`]"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              :srcset="`/img/${settings.images[0].url[0]}/Mobile${settings.images[0].url[1]}.webp`"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              :srcset="`/img/${settings.images[0].url[0]}/PC${settings.images[0].url[1]}.webp`"
              type="image/webp"
            />
            <source
              :srcset="`/img/${settings.images[0].url[0]}/JPG${settings.images[0].url[1]}.jpg`"
              type="image/jpeg"
            />
            <img
              class="gallery__img"
              :srcset="`/img/${settings.images[0].url[0]}/PC${settings.images[0].url[1]}.webp`"
              :alt="settings.images[0].url"
              type="image/webp"
            />
          </picture>
        </div>
        <div
          class="gallery__image"
          :class="[`gallery__image--border-${settings.border}`]"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              :srcset="`/img/${settings.images[1].url[0]}/Mobile${settings.images[1].url[1]}.webp`"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              :srcset="`/img/${settings.images[1].url[0]}/PC${settings.images[1].url[1]}.webp`"
              type="image/webp"
            />
            <source
              :srcset="`/img/${settings.images[1].url[0]}/JPG${settings.images[1].url[1]}.jpg`"
              type="image/jpeg"
            />
            <img
              class="gallery__img"
              :srcset="`/img/${settings.images[1].url[0]}/PC${settings.images[1].url[1]}.webp`"
              :alt="settings.images[1].url"
              type="image/webp"
            />
          </picture>
        </div>
      </div>
      <div class="gallery__col">
        <div
          class="gallery__image"
          :class="[`gallery__image--border-${settings.border}`]"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              :srcset="`/img/${settings.images[2].url[0]}/Mobile${settings.images[2].url[1]}.webp`"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              :srcset="`/img/${settings.images[2].url[0]}/PC${settings.images[2].url[1]}.webp`"
              type="image/webp"
            />
            <source
              :srcset="`/img/${settings.images[2].url[0]}/JPG${settings.images[2].url[1]}.jpg`"
              type="image/jpeg"
            />
            <img
              class="gallery__img"
              :srcset="`/img/${settings.images[2].url[0]}/PC${settings.images[2].url[1]}.webp`"
              :alt="settings.images[2].url"
              type="image/webp"
            />
          </picture>
        </div>
        <div
          class="gallery__image"
          :class="[`gallery__image--border-${settings.border}`]"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              :srcset="`/img/${settings.images[3].url[0]}/Mobile${settings.images[3].url[1]}.webp`"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              :srcset="`/img/${settings.images[3].url[0]}/PC${settings.images[3].url[1]}.webp`"
              type="image/webp"
            />
            <source
              :srcset="`/img/${settings.images[3].url[0]}/JPG${settings.images[3].url[1]}.jpg`"
              type="image/jpeg"
            />
            <img
              class="gallery__img"
              :srcset="`/img/${settings.images[3].url[0]}/PC${settings.images[3].url[1]}.webp`"
              :alt="settings.images[3].url"
              type="image/webp"
            />
          </picture>
        </div>
      </div>
    </div>

    <div
      v-if="settings.type === 'EightImage'"
      class="gallery__wrapper gallery__wrapper--EightImage"
    >
      <div class="gallery__grid">
        <div
          v-for="n in 4"
          :key="n"
          class="gallery__image"
          :class="[`gallery__image--border-${settings.border}`]"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              :srcset="`/img/${settings.images[n - 1].url[0]}/Mobile${
                settings.images[n - 1].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              :srcset="`/img/${settings.images[n - 1].url[0]}/PC${
                settings.images[n - 1].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              :srcset="`/img/${settings.images[n - 1].url[0]}/JPG${
                settings.images[n - 1].url[1]
              }.jpg`"
              type="image/jpeg"
            />
            <img
              class="gallery__img"
              :srcset="`/img/${settings.images[n - 1].url[0]}/PC${
                settings.images[n - 1].url[1]
              }.webp`"
              :alt="settings.images[n - 1].url"
              type="image/webp"
            />
          </picture>
        </div>
      </div>
      <div class="gallery__grid">
        <div
          v-for="n in 4"
          :key="n"
          class="gallery__image"
          :class="[`gallery__image--border-${settings.border}`]"
        >
          <picture>
            <source
              media="(max-width: 768px)"
              :srcset="`/img/${settings.images[n + 3].url[0]}/Mobile${
                settings.images[n + 3].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              :srcset="`/img/${settings.images[n + 3].url[0]}/PC${
                settings.images[n + 3].url[1]
              }.webp`"
              type="image/webp"
            />
            <source
              :srcset="`/img/${settings.images[n + 3].url[0]}/JPG${
                settings.images[n + 3].url[1]
              }.jpg`"
              type="image/jpeg"
            />
            <img
              class="gallery__img"
              :srcset="`/img/${settings.images[n + 3].url[0]}/PC${
                settings.images[n + 3].url[1]
              }.webp`"
              :alt="settings.images[n + 3].url"
              type="image/webp"
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryCardTemplate',
  props: {
    settings: {
      default: {
        type: '',
        images: [],
        background: '#F9F9F9',
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
	padding: 70px 0
	position: relative
	z-index: 2
	background: #f9f9f9
	&:has(.gallery__wrapper--flipknife)
		padding: 70px 30px
	&__wrapper
		max-width: 1442px
		width: 100%
		display: flex
		margin: 0 auto
		&--goup
			display: grid
			grid-template-columns: repeat(6, 1fr)
			@media(max-width: 768px)
				grid-template-columns: repeat(3, 1fr)
		&--flipknife
			@media(max-width: 768px)
				display: grid
				grid-template-columns: repeat(2, 1fr)
		&--izenbot
			display: grid
			grid-template-columns: repeat(2, 1fr)
			@media(max-width: 768px)
				grid-template-columns: repeat(1, 1fr)

		&--ThreeImage
			gap: clamp(32px, 8vw, 78px)
			@media(max-width: 768px)
				flex-direction: column
		&--TwoImage
			gap: clamp(32px, 8vw, 78px)
			@media(max-width: 768px)
				flex-direction: column
		&--FourImage
			gap: clamp(32px, 8vw, 144px)
			@media(max-width: 768px)
				flex-direction: column
		&--SixImage
			display: grid
			padding: 0px clamp(38px, 8vw, 108px)
			grid-template-columns: repeat(4, 1fr)
			grid-template-areas: 'one one two two' 'three four five six'
			gap: 32px
			.gallery__image
				&:first-child
					grid-area: one
				&:nth-child(2)
					grid-area: two

			@media(max-width: 768px)
				padding: 0
				grid-template-columns: repeat(2, 1fr)
				grid-template-areas: 'one one' 'two two' 'three four' 'five six'

		&--SixThreeImage
			display: flex
			max-width: 1674px
			padding: 0px 32px
			gap: clamp(32px, 5vw, 53px)
			@media(max-width: 768px)
				flex-direction: column
				padding: 0
				gap: clamp(10px, 2vw, 53px)
			.gallery__column
				display: flex
				flex-direction: column
				gap: clamp(32px, 5vw, 53px)
				@media(max-width: 768px)
					flex-direction: row
					gap: clamp(10px, 2vw, 53px)
				&:first-child, &:last-child
					margin-top: clamp(32px, 5vw, 100px)
					@media(max-width: 768px)
						margin-top: 0
		&--SixTwoImage
			display: flex
			max-width: 1674px
			padding: 0px 32px
			flex-direction: column
			gap: clamp(32px, 5vw, 100px)
			.gallery
				&__image
					max-width: 414px
					width: 100%
				&__row
					display: flex
					gap: clamp(32px, 5vw, 100px)
					&:last-child
						margin-left: auto
					@media(max-width: 768px)
						flex-direction: column

			@media(max-width: 768px)
				padding: 0

		&--EightImage
			display: flex
			padding: 0px clamp(38px, 8vw, 108px)
			gap: clamp(32px, 5vw, 100px)
			align-items: flex-start
			.gallery__grid
				display: grid
				grid-template-columns: repeat(2, 1fr)
				gap: clamp(32px, 5vw, 100px)
				&:last-child
					margin-top: clamp(100px, 10vw, 200px)
			@media(max-width: 768px)
				flex-direction: column
				padding: 0
				.gallery__grid
					&:last-child
						margin-top: 0
	&__col
		display: flex
		flex-direction: column
		gap: clamp(32px, 8vw, 108px)
		&:first-child
			padding-top: clamp(32px, 8vw, 108px)
			@media(max-width: 768px)
				padding-top: 0
	&__img
		width: 100%
		height: auto
		object-fit: contain
		object-position: center center
		display: block
		border-radius: 5px
	&__shadow
		&--false
			box-shadow: none !important
	&__image
		max-width: 100%
		width: 100%
		z-index: 2
		box-shadow: 11px 9px 12px 0px #0000000D
		border-radius: 15px
		&--border-simple
			border: 10px solid #fff
			@media(max-width: 1024px)
				border-width: 6px
			@media(max-width: 425px)
				border-width: 5px
		&--column
			height: 50%
			width: 100%
	&--three > &__wrapper
		justify-content: space-evenly
		gap: 32px


@media(max-width: 1024px)
	.gallery
		padding: 40px 30px
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
@media(max-width: 425px)
	.gallery
		padding: 32px 38px
</style>
