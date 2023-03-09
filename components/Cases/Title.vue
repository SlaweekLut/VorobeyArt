<template>
  <div
    class="title"
    :class="[
      `title--${settings.type}`,
      `title--${settings.modifer}`,
      `title--${settings.padding}`,
    ]"
  >
    <div class="title__wrapper">
      <div class="title__row">
        <h2
          v-if="!settings.title.separator"
          class="title__title"
          :class="`title__title--${settings.title.fontSize}`"
        >
          <span
            v-if="settings.number"
            class="title__number"
            :style="`font-size: ${settings.number.fontSize}`"
            >{{ settings.number.number }}</span
          >
          <span v-html="settings.title.title"></span>
        </h2>
        <p v-if="settings.text" class="title__text" v-html="settings.text"></p>
      </div>
      <hr v-if="settings.underTitleLine" class="title__underline" />
      <p class="title__subtitle">
        <span class="title__subtitle-wrapper">
          {{ settings.subtitle }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleTemplate',
  props: {
    settings: {
      type: Object,
      default: () => {
        return {
          modifer: '',
          type: '',
          title: {
            title: '',
            fontSize: '',
          },
          text: '',
          underTitleLine: false,
          subtitle: '',
          number: {
            number: '',
            fontSize: '',
          },
          padding: '0',
        };
      },
    },
  },
};
</script>

<style lang="sass" scoped>
.title
	padding: 0px 30px
	&--task
		padding: 90px 30px
	&--simple
		padding: 130px 30px
	&__row
		max-width: 1272px
		margin: 0 auto
		width: 100%
		display: flex
		align-items: flex-start
		justify-content: space-between
		gap: 30px
	&__title-defis
		font-weight: 300
	&__text
		max-width: 750px
		font-size: 20px
	&--first
		.title
			&__subtitle
				margin-top: 60px
			&__subtitle-wrapper
				max-width: 450px
				width: 100%
				display: block

	&__title, &__subtitle
		max-width: 1370px
		span
			font-size: inherit
			display: inline
	&__subtitle
		padding: 0px 50px
		font-size: clamp(16px, 2vw, 20px)
		line-height: 20px
		span
			font-size: inherit
	&__wrapper
		max-width: 1442px
		width: 100%
		margin: 0 auto
	&__number
		margin-right: 20px
	&__title
		font-size: 50px
		font-weight: 700
		max-width: 362px
		&--separator
			display: flex
			gap: 20px
			align-items: center
			justify-content: flex-start
			hr
				width: 73px
				margin: 0
		&--simple
			font-size: 30px
	&__underline
		margin: 15px 0
		width: 100%
		background-color: #000

@media (max-width: 1440px)
	.title
		&__text
			max-width: 730px
		&__row
			max-width: 1147px

@media (max-width: 1024px)
	.title
		&--task
			padding: 60px 30px
		&--simple
			padding: 90px 30px
		&__row
			max-width: 868px
		&__title
			&--simple
				font-size: 20px
		&__text
			max-width: 588px
			font-size: 16px

@media (max-width: 768px)
	.title
		&__row
			max-width: 610px
		&__row
			flex-direction: column
		&__text
			max-width: 100%

@media (max-width: 425px)
	.title
		&--task
			padding: 60px 44px
		&--simple
			padding: 50px 44px
@media (max-width: 360px)
	.title
		&--task
			padding: 60px 38px
		&--simple
			padding: 50px 38px
</style>

<style lang="sass">
.title
	&__title-defis
		font-weight: 300
.title + .title
	padding-top: 0
.task + .title
	padding-top: 100px
@media (max-width: 1024px)
	.title + .title
		padding-top: 0
	.task + .title
		padding-top: 70px
@media (max-width: 425px)
	.title + .title
		padding-top: 0
	.task + .title
		padding-top: 50px
</style>
