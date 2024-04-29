<template>
  <div class="error">
    <img src="/img/Logo-404.svg" alt="ERROR" class="error__img" />
    <div class="error__column">
      <h1 class="error__title">404</h1>
      <h2 class="error__subtitle">Упс! Страница не найдена!</h2>
      <hr />
      <p class="error__text">
        Страница, которую вы запрашиваете, не существует или она была
        перемещена. Начните с главной страницы
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
};
</script>

<style lang="sass" scoped>
body
	overflow-x: hidden
	overflow-y: auto
	&::-webkit-scrollbar
		width: 0
		height: 0

.error
	width: 100vw
	height: 100vh
	position: relative
	overflow: hidden
	&__img
		position: absolute
		top: 50%
		left: -189px
		transform: translate(0, -50%)
	&__column
		position: absolute
		top: 50%
		transform: translate(0, -50%)
		right: 270px
		display: flex
		flex-direction: column
		justify-content: center
		height: 315px
		max-width: 482px
		width: 100%
	&__title
		font-size: 100px
		font-weight: 500
		margin-bottom: 13px
	&__subtitle
		font-size: 39px
		font-weight: 700
	hr
		width: 100%
		border-color: #000
		margin: 21px 0px
	&__text
		font-size: 25px
		font-weight: 500
		line-height: 29px
@media (max-width: 1600px)
	.error
		&__column
			right: 100px
@media (max-width: 1380px)
	.error
		&__img
			width: 60vw
@media (max-width: 1024px)
	.error
		&__title
			font-size: 80px
		&__subtitle
			font-size: 35px
		&__text
			font-size: 22px
		&__column
			left: auto
			right: 116px
			top: 50%
			transform: translate(0, -50%)
		&__img
			left: -465px
			width: 100vw
			height: 858px
			top: -19px
			transform: translate(0)
@media (max-width: 768px)
	.error
		&__img
			left: 40%
			top: 500px
			width: calc(100% + 85px)
			transform: translate(-50%, 0)
			object-position: top
			object-fit: contain
		&__column
			height: 233px
			max-width: 464px
			left: 50%
			top: 155px
			padding: 0px 16px
			transform: translate(-50%, 0)
		&__title
			font-size: 80px
		&__text
			font-size: 22px
			line-height: 26px
		&__subtitle
			font-size: 35px
@media (max-width: 425px)
	.error
		&__img
			left: 40%
			top: 330px
			width: calc(100% + 85px)
			transform: translate(-50%, 0)
		&__column
			height: 233px
			max-width: 296px
			left: 50%
			top: 102px
			padding: 0px 16px
			transform: translate(-50%, 0)
		&__title
			font-size: 60px
		&__text
			font-size: 16px
			line-height: 19px
		&__subtitle
			font-size: 20px
</style>
