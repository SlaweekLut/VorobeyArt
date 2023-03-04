<template>
  <div class="numbers">
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
    let timeout = 1000;
    if (this.$props.curtains === 'Preloader') timeout = 2600;
    if (this.$props.curtains === 'Curtains') timeout = 700;
    setTimeout(() => {
      let addNum = setInterval(() => {
        this.num += 1;
        if (this.$props.number < this.num + 1) clearInterval(addNum);
      }, 30);
    }, timeout);
  },
};
</script>

<style scoped lang="sass">
.numbers
	display: flex
	flex-direction: column
	gap: 10px
	max-width: clamp(110px, 16vw,191px)
	&__title
		text-align: center
		font-size: clamp(70px, 6vw, 100px)
		font-weight: 600
		span
			color: #0181C8
	&__subtitle
		text-align: center
		font-size: clamp(18px, 2vw, 25px)
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
