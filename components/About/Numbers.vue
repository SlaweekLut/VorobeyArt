<template>
	<div class="numbers" ref="numberElem">
		<h1 class="numbers__title">{{ num }}<span>+</span></h1>
		<p class="numbers__subtitle">{{ title }}</p>
	</div>
</template>

<script>

export default {
	name: 'AboutNumbers',
	props: {
		number: String,
		title: String,
		curtains: String,
	},
	data() {
		return {
			num: 0,
		};
	},
	mounted() {
		let stop = false
		window.addEventListener('scroll', (event) => {
			if(!stop && this.$refs.numberElem.getBoundingClientRect().top - window.innerHeight < 0 ) {
				stop = true
				let addNum = setInterval(() => {
					this.num += 1;
					if (this.$props.number < this.num + 1) clearInterval(addNum);
				}, 30);
				// setTimeout(() => {
				// }, timeout);
			}
		})
	},
};
</script>

<style scoped lang="sass">
.numbers
	display: flex
	flex-direction: column
	gap: 12px
	max-width: clamp(110px, 16vw,191px)
	&__title
		text-align: center
		font-size: 100px
		font-weight: 600
		span
			font: inherit
			color: #0181C8
	&__subtitle
		text-align: center
		font-size: 20px
		font-weight: 500

@media (max-width: 1024px)
	.numbers
		&__title
			font-size: 90px
		&__subtitle
			font-size: 20px

@media (max-width: 768px)
	.numbers
		max-width: 50%
		width: 100%
		align-items: center
		&__title
			font-size: 80px
		&__subtitle
			font-size: 18px
			max-width: 170px
			width: 100%

@media (max-width: 590px)
	.numbers
		&__title
			font-size: 70px
		&__subtitle
			font-size: 18px
			max-width: 170px
</style>
