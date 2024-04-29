<template>
	<div class="curtains" :class="{ 'curtains--active': open }">
		<svg width="1380" height="1380" viewBox="0 0 1380 1380" fill="none" xmlns="http://www.w3.org/2000/svg" class="curtains__img">
			<path d="M573.964 999.895L0 1380C180.27 1242 474.504 990.211 573.964 874C673.423 757.789 711.411 667.404 716.937 631.895C645.658 771.347 533.904 767.474 486.937 748.105C584.739 750.042 649.249 660.14 669.279 614.947C498.541 752.463 374.354 683.544 333.604 631.895C474.504 670.632 596.757 602.842 640.27 564.105C381.676 660.697 243.814 546.247 207.207 476.947C366.342 546.674 538.739 533.439 605.045 518.105C250.306 512.295 117.417 360.737 95.3153 285.684C126.811 306.989 187.177 330.07 213.423 338.947C65.8919 244.042 9.66967 73.4386 0 0C227.928 285.684 660.991 457.579 799.82 476.947C938.649 496.316 963.513 496.316 1036.04 542.316C1108.56 588.316 1170.72 532.632 1189.37 518.105C1208.02 503.579 1246.03 457.579 1199.73 418.842C1153.43 380.105 1054.68 411.579 996.667 433.368C950.252 450.8 884.775 456.772 857.838 457.579C944.865 343.789 1027.75 237.263 1137.57 237.263C1225.42 237.263 1273.63 305.053 1286.76 338.947L1380 392.211L1282.61 411.579C1228.74 455.158 1212.16 547.158 1181.08 685.158C1156.22 795.558 1062.97 897.404 1019.46 934.526C1138.81 824.126 1134.11 675.474 1116.85 614.947C1060.49 880.295 731.441 982.14 573.964 999.895Z" fill="#7ABADD"/>
			<path d="M829.86 1102.25C745.365 1158.03 867.614 1250.52 821.672 1223.99C775.73 1197.47 664.909 1087.52 775.226 1066.25C885.543 1044.98 1011.99 939.753 1011.99 939.753C1011.99 939.753 914.354 1046.46 829.86 1102.25Z" fill="#7ABADD"/>
		</svg>

	</div>
</template>

<script>
export default {
	name: 'CurtainsElement',
	props: {
		menu: Boolean,
	},
	data() {
		return {
			open: false,
		};
	},
	watch: {
		$route() {
			console.log(this.$props);
			if (!this.$props.menu) {
				this.open = true;
				this.$emit('setCurtains', 'Curtains');
				setTimeout(() => {
					this.open = false;
					this.$emit('setCurtains', 'Nothing');
				}, 1000);
			} else {
				this.$emit('setMenu', false);
			}
		},
	},
};
</script>

<style lang="sass" scoped>
.curtains
	width: 100vw
	height: 100vh
	background-color: #F9F9F9
	position: fixed
	top: 0
	left: 0
	z-index: 10
	overflow: hidden
	// transform: translateY(-100vh) translateZ(0)
	clip-path: inset(0 0 100% 0)
	&--active
		// animation: animationCurtains 1s linear
		// animation: animationCurtains 1s cubic-bezier(0.38, 0.005, 0.215, 1) both
		animation: animationCurtains 1s cubic-bezier(0.38, 0.005, 0.215, 1) both
	&__img
		position: absolute
		max-width: 71.88%
		min-width: 406px
		left: 50%
		top: 50%
		transform: translate(-50%, -50%) translateZ(0)
@keyframes animationCurtains
	0%
		clip-path: inset(0 0 100% 0)
		// transform: translateY(-100vh) translateZ(0)
	45%, 55%
		clip-path: inset(0 0 0 0)
		clip-path: inset(0 0 0 0)
		// transform: translateY(0) translateZ(0)
	100%
		clip-path: inset(0 0 100% 0)
		// transform: translateY(-100vh) translateZ(0)

</style>
