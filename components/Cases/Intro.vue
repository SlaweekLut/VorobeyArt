<template>
  <img :src="`/img/${intro.icon}`" :alt="intro.title" class="intro__icon" />
  <div class="intro__wrapper">
    <picture>
      <source
        media="(max-width: 768px)"
        :srcset="`/img/${intro.img[0]}/Mobile/${intro.img[1]}.webp`"
        type="image/webp"
      />
      <source
        media="(min-width: 769px)"
        :srcset="`/img/${intro.img[0]}/PC/${intro.img[1]}.webp`"
        type="image/webp"
      />
      <source
        :srcset="`/img/${intro.img[0]}/JPG/${intro.img[1]}.png`"
        type="image/png"
      />
      <img
        :srcset="`/img/${intro.img[0]}/PC/${intro.img[1]}.webp`"
        :alt="intro.title"
        type="image/webp"
        class="intro__img"
      />
    </picture>
    <div class="intro">
      <div class="intro__column">
        <img
          :src="`/img/${intro.logo}`"
          :alt="intro.title"
          class="intro__logo"
        />
        <p class="intro__text">
          <strong>{{ intro.title }}&nbsp;</strong>
          <span v-html="intro.description"></span>
        </p>
        <h4 class="intro__title">Проект</h4>
        <p class="intro__list">{{ intro.tags }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { VueScrollmagic, TweenMax } from 'vue-scrollmagic';

export default {
  name: 'IntroTemplate',
  props: {
    intro: {
      icon: '',
      img: [],
      logo: '',
      title: '',
      description: '',
      tags: '',
    },
  },
  mounted() {
    // let controller = new VueScrollmagic.Controller();
    // build tween
    // let tween = TweenMax.to('#animate', 0.5, { scale: 1.3, repeat: 5, yoyo: true });
    // build scene and set duration to window height
    // eslint-disable-next-line
		// let scene = new VueScrollmagic.Scene({ triggerElement: '#trigger', duration: '100%' })
    // 	.setTween(tween)
    // 	.addIndicators() // add indicators (requires plugin)
    // 	.addTo(controller);
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to('.intro__img', {
    // 	scrollTrigger: {
    // 		trigger: '.intro__img',
    // 		start: '-200 top',
    // 		end: '+=1000',
    // 		scrub: 1,
    // 	},
    // 	scale: 1.2,
    // 	ease: 'none',
    // 	duration: 3,
    // });
    let images = document.querySelectorAll('.intro__img');
    window.addEventListener('scroll', () => {
      let h = document.documentElement,
        b = document.body,
        st = 'scrollTop';
      let percent = (h[st] || b[st]) / (8000 - h.clientHeight);
      let scale = 1 + percent;
      // console.log(scale, b[sh]);
      images.forEach((image) => {
        image.style.scale = scale;
      });
    });
  },
};
</script>

<style lang="sass" scoped>

.intro
	max-width: 1370px
	width: 100%
	margin: 0 auto
	padding: 100px 36px 270px
	height: 860px
	&__icon
		position: absolute
		top: 0
		left: 0
		max-width: 100%
		z-index: -1
	&__img
		position: absolute
		top: -70px
		left: -270px
		z-index: 0
		max-width: 1300px
		width: 80%
		max-height: 930px
		object-fit: cover
		object-position: top
		transform: translateZ(0)
		scale: 1
		transition: .3s linear
		z-index: -1
	&__column
		padding-top: 25px
		max-width: 440px
		display: flex
		flex-direction: column
		margin-left: auto
		align-items: flex-start
	&__logo
		margin-bottom: 45px
		max-height: 74px
		width: auto
		object-fit: contain
		object-position: left
	&__text
		font-size: 20px
		margin-bottom: 162px
		strong
			font-weight: 700
	&__title
		margin-bottom: 10px
		font-size: 30px
		font-weight: 700
	&__wrapper
		position: relative
		width: 100%
		// overflow: hidden
		max-width: 1920px
		margin: 0 auto

@media (max-width: 1024px)
	.intro
		padding: 83px 108px 94px
		height: 584px
		&__logo
			max-height: 52px
		&__column
			max-width: 337px
			padding-top: 0
		&__text
			margin-bottom: 45px
			font-size: 18px
			line-height: 22px
		&__title
			font-size: 25px
		&__img
			max-width: 743px
			left: -233px

@media (max-width: 768px)
	.intro
		padding: 75px 44px 0
		height: auto
		&__title
			font-size: 22px
		&__wrapper
			display: flex
			flex-direction: column-reverse
		&__img
			width: calc(100% + 100px)
			position: relative
			left: -50px
			margin-bottom: -77px
			top: 0
			margin-top: 50px

		&__logo
			height: 52px
			max-width: 80%
		&__column
			max-width: 500px
			margin: 0 auto
@media (max-width: 425px)
	.intro
		padding: 60px 44px 0
		&__text
			margin-bottom: 51px
			font-size: 16px
		&__title
			font-size: 30px
			margin-bottom: 16px
		&__logo
			height: 46px
			margin-bottom: 33px
</style>
