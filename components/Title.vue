<template>
  <h1 class="title-aside">{{ title }}</h1>
</template>

<script>
export default {
  name: 'TitlePage',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="sass">
.title-aside
	font-size: clamp(230px, 16vw,250px)
	line-height: clamp(230px, 16vw, 250px)
	color: transparent
	stroke: #000
	-webkit-text-stroke: 1px #D0D0D0
	font-weight: 600
	transform-origin: bottom left
	position: absolute
	writing-mode: vertical-lr
	top: 216px
	left: -40px
	z-index: 2
	white-space: nowrap

@media (max-width: 1440px)
	.title-aside
		top: 230px
		font-size: clamp(190px, 19vw,230px)
		line-height: clamp(190px, 19vw, 230px)

@media (max-width: 1024px)
	.title-aside
		top: 154px
		font-size: clamp(150px, 20vw,190px)
		line-height: clamp(150px, 20vw, 190px)

@media (max-width: 768px)
	.title-aside
		font-size: clamp(100px, 20vw,150px)
		line-height: clamp(100px, 20vw, 150px)
		top: 154px
		left: -25px

@media (max-width: 425px)
	.title-aside
		top: 117px
		left: -25px

@media (max-width: 570px)
	.title-aside--case
		display: none
</style>
