<template>
  <router-link :to="`/${settings.next}`" class="footer">
    <picture>
      <source
        media="(max-width: 768px)"
        :srcset="`/img/${settings.background[0]}/Mobile/${settings.background[1]}.webp`"
        type="image/webp"
      />
      <source
        media="(min-width: 769px)"
        :srcset="`/img/${settings.background[0]}/PC/${settings.background[1]}.webp`"
        type="image/webp"
      />
      <source
        :srcset="`/img/${settings.background[0]}/JPG/${settings.background[1]}.png`"
        type="image/png"
      />
      <img
        :srcset="`/img/${settings.background[0]}/PC/${settings.background[1]}.webp`"
        :alt="settings.title"
        type="image/webp"
        class="footer__background"
      />
    </picture>
    <div class="footer__background-white"></div>
    <div class="footer__text">
      <p class="footer__suptitle">
        Следующий проект
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.12753 14.377C0.645679 14.8589 0.645679 15.6401 1.12753 16.122C1.60938 16.6038 2.39062 16.6038 2.87247 16.122L1.12753 14.377ZM16.4834 2C16.4834 1.31856 15.931 0.766142 15.2495 0.766142L4.14479 0.766142C3.46335 0.766142 2.91093 1.31856 2.91093 2C2.91093 2.68144 3.46335 3.23386 4.14479 3.23386L14.0157 3.23386L14.0157 13.1047C14.0157 13.7862 14.5681 14.3386 15.2495 14.3386C15.931 14.3386 16.4834 13.7862 16.4834 13.1047L16.4834 2ZM2.87247 16.122L16.122 2.87247L14.377 1.12753L1.12753 14.377L2.87247 16.122Z"
            fill="black"
          />
        </svg>
      </p>
      <h2 class="footer__title">{{ settings.title }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'FooterTemplate',
  props: {
    settings: {
      default: {
        background: [],
        title: '',
        next: '',
      },
    },
  },
};
</script>

<style lang="sass" scoped>
.footer
	width: 100%
	height: 545px
	position: relative
	display: block
	text-decoration: none
	overflow: hidden
	// margin-top: 36px

	&__background-white
		position: absolute
		width: 100%
		height: 100%
		background-color: rgba(#fff, 0.9)
		transition: .3s ease

	&__background
		height: 150%
		width: auto
		object-fit: cover
		object-position: center center
		position: absolute
		transition: .3s ease
		left: 50%
		top: 50%
		transform-origin: top left
		transform: translate(-50%, -50%)

	&__text
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
		z-index: 1
		position: absolute
		text-align: center

	&__suptitle
		transition: .3s ease
		font-weight: 700
		font-size: 30px
		display: flex
		align-items: flex-start
		justify-content: center
		gap: 3px
		position: relative
		width: min-content
		white-space: nowrap
		margin: 0 auto 18px
		svg
			right: -20px
			top: -10px
			position: absolute
	&__title
		font-size: 100px
		font-weight: 700
		transition: .3s ease
		white-space: nowrap
		text-transform: uppercase
	&:hover
		.footer
			&__background
				transform: scale(1.1) translate(-50%, -50%)
			&__background-white
				background-color: transparent
			&__title
				transform: scale(1.5)
				opacity: 0
			&__suptitle
				transform: scale(0.5)
				opacity: 0
@media(max-width: 1024px)
	.footer
		&__title
			font-size: 80px
			white-space: nowrap
@media (max-width: 768px)
	.footer
		height: 275px
		&__suptitle
			font-size: 20px
			white-space: nowrap
			margin-bottom: 1px
		&__title
			font-size: 48px
			white-space: nowrap
@media (max-width: 425px)
	.footer
		height: 250px
		&__suptitle
			font-size: 20px
			white-space: nowrap
			margin-bottom: 1px
		&__title
			font-size: 40px
			white-space: nowrap
</style>
