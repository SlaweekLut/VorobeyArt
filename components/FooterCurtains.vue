<template>
<div class="footer-curtains-wrapper">
	<div class="footer-curtains-hidden" :class="{'footer-curtains-hidden--active': hidden}"></div>
	<div class="footer-curtains footer-curtains--global">
		<svg width="1380" height="1380" viewBox="0 0 1380 1380" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer-curtains__logo">
			<path d="M573.964 999.895L0 1380C180.27 1242 474.504 990.211 573.964 874C673.423 757.789 711.411 667.404 716.937 631.895C645.658 771.347 533.904 767.474 486.937 748.105C584.739 750.042 649.249 660.14 669.279 614.947C498.541 752.463 374.354 683.544 333.604 631.895C474.504 670.632 596.757 602.842 640.27 564.105C381.676 660.697 243.814 546.247 207.207 476.947C366.342 546.674 538.739 533.439 605.045 518.105C250.306 512.295 117.417 360.737 95.3153 285.684C126.811 306.989 187.177 330.07 213.423 338.947C65.8919 244.042 9.66967 73.4386 0 0C227.928 285.684 660.991 457.579 799.82 476.947C938.649 496.316 963.513 496.316 1036.04 542.316C1108.56 588.316 1170.72 532.632 1189.37 518.105C1208.02 503.579 1246.03 457.579 1199.73 418.842C1153.43 380.105 1054.68 411.579 996.667 433.368C950.252 450.8 884.775 456.772 857.838 457.579C944.865 343.789 1027.75 237.263 1137.57 237.263C1225.42 237.263 1273.63 305.053 1286.76 338.947L1380 392.211L1282.61 411.579C1228.74 455.158 1212.16 547.158 1181.08 685.158C1156.22 795.558 1062.97 897.404 1019.46 934.526C1138.81 824.126 1134.11 675.474 1116.85 614.947C1060.49 880.295 731.441 982.14 573.964 999.895Z" fill="#1D8FCE"/>
			<path d="M829.86 1102.25C745.365 1158.03 867.614 1250.52 821.672 1223.99C775.73 1197.47 664.909 1087.52 775.226 1066.25C885.543 1044.98 1011.99 939.753 1011.99 939.753C1011.99 939.753 914.354 1046.46 829.86 1102.25Z" fill="#1D8FCE"/>
		</svg>
		<div class="footer-curtains__background-white"></div>
		<!-- <div class="footer-curtains__date">2018 - {{ new Date().getFullYear() }}</div> -->
	</div>
</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const hidden = ref(true)
const interval = ref(null)
const maxHeight = ref(0)
onMounted(() => {
	maxHeight.value = Math.max(
		document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight,
		document.body.scrollHeight, document.body.offsetHeight
	)
	interval.value = setInterval(() => {
		maxHeight.value = Math.max(
			document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight,
			document.body.scrollHeight, document.body.offsetHeight
		)
		hidden.value = maxHeight.value - window.scrollY - window.innerHeight - 100 <= window.innerHeight
	}, 10)
})

onUnmounted(() => {
	clearInterval(interval.value)
	hidden.value = true
	maxHeight.value = 0
	interval.value = null
})
</script>

<style scoped lang="scss">
.footer-curtains {
	position: fixed;
	bottom: 0;
	width: 100vw;
	height: 100vh;
	z-index: -2;
	background-color: hsla(201, 99%, 39%, 1);
	&-wrapper {
		width: 100vw;
		height: 100vh;
		position: relative;
	}
	&-hidden {
		position: fixed;
		background: white;
		width: 100vw;
		height: 200vh;
		left: 0;
		bottom: 0;
		z-index: -1;
		&--active {
			position: absolute;
			bottom: 100%;
		}
		&::after {
			content: '';
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			width: 100vw;
			height: 200vh;
		}
	}
	&--global {
		height: 100vh;
	}
	&__logo {
		position: absolute;
		width: max(448px,100%);
		height: max(calc(100% + 140px), 491px);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}
	&__date {
		position: absolute;
		color: #FFF;
		font-size: 20px;
		font-weight: 500;
		left: 50%;
		bottom: 100px;
		z-index: 1;
		transform: translateX(-50%);
	}
}
</style>