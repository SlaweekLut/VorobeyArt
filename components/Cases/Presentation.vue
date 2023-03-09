<template>
  <div class="presentation">
    <div class="presentation__row">
      <div class="presentation__column">
        <h2 class="presentation__title">
          <span>{{ settings.number }}</span> {{ settings.title }}
        </h2>
        <p class="presentation__subtitle">{{ settings.subtitle }}</p>
      </div>
      <div class="presentation__column presentation__column--color">
        <h3 class="presentation__color-title">Цвета презентации</h3>
        <div class="presentation__color-row">
          <div
            v-for="color in settings.colors"
            :key="color"
            class="presentation__color"
            :style="`background: ${color}`"
          ></div>
        </div>
      </div>
    </div>
    <h3 class="presentation__icon-title">
      Иконки разработанные для презентации
    </h3>
    <div
      class="presentation__icons-wrapper"
      :style="`max-width: ${settings.widthIconsWrapper}`"
    >
      <div class="presentation__icons" :style="`gap: ${settings.gapIcons}`">
        <div
          v-for="icon in settings.icons"
          :key="icon"
          class="presentation__icon"
        >
          <img :src="`/img/${icon}`" alt="Иконка" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PresentationTemplate',
  props: {
    settings: {
      default: {
        number: '',
        title: '',
        subtitle: '',
        colors: [],
        icons: [],
        widthIconsWrapper: '',
        gapIcons: '',
      },
    },
  },
};
</script>

<style scoped lang="sass">
.presentation
	max-width: 1370px
	margin: 0 auto
	padding: 50px
	&__row
		display: flex
		gap: 30px
		justify-content: space-between
		flex-wrap: wrap
	&__column
		&--color
			max-width: 600px
			width: 100%
			margin-top: 30px
	&__color-row
		display: flex
		gap: 38px
	&__icon-title
		font-size: 20px
		font-weight: 700
		margin: 155px auto 50px
		text-align: center
	&__color-title
		font-size: 20px
		font-weight: 700
		margin-bottom: 44px
	&__color
		max-width: 174px
		width: 100%
		box-shadow: 0px 4px 10px 0px #00000040
		border-radius: 15px
		&::after
			content: ''
			padding-top: 100%
			display: block
	&__title
		margin-bottom: 56px
		font-weight: 700
		font-size: 32px
		span
			margin-right: 27px
			font-weight: inherit
			font-size: 50px
	&__subtitle
		font-size: 20px
		font-weight: 500
		max-width: 450px
	&__icons-wrapper
		display: flex
		align-items: center
		justify-content: center
		// max-width: 1075px
		margin: 0 auto
		padding: 45px
		width: 100%
		border-radius: 15px
		box-shadow: 0px 4px 10px 0px #00000040
	&__icons
		display: flex
		flex-wrap: wrap
		gap: 32px clamp(32px, 6vw, 46px)
		justify-content: center
	&__icon
		height: 90px
		width: 90px
		display: flex
		align-items: center
		justify-content: center


@media (max-width: 768px)
	.presentation
		padding: 50px 30px
		&__title
			margin-bottom: 24px
		&__icon-title
			margin-top: 55px
		&__color-title
			margin-bottom: 18px
		&__color-row
			gap: 18px
</style>
