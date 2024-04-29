<template>
	<div class="preloader">
		<div class="preloader__motto">{{ $t("preloader") }}</div>

		<svg class="preloader__logo"width="363" height="363" viewBox="0 0 363 363" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M150.977 263.016L0 363C47.4189 326.7 124.815 260.468 150.977 229.9C177.14 199.332 187.132 175.556 188.586 166.216C169.836 202.898 140.44 201.879 128.086 196.784C153.812 197.294 170.781 173.646 176.05 161.758C131.138 197.931 98.4715 179.802 87.7523 166.216C124.815 176.405 156.973 158.574 168.419 148.384C100.397 173.792 64.1336 143.687 54.5045 125.458C96.364 143.799 141.712 140.318 159.153 136.284C65.8414 134.756 30.8859 94.8895 25.0721 75.1474C33.3568 80.7516 49.2357 86.8228 56.1396 89.1579C17.3324 64.1937 2.54354 19.3175 0 0C59.955 75.1474 173.869 120.363 210.387 125.458C246.905 130.553 253.446 130.553 272.522 142.653C291.599 154.753 307.95 140.105 312.856 136.284C317.761 132.463 327.759 120.363 315.581 110.174C303.403 99.9842 277.428 108.263 262.167 113.995C249.958 118.58 232.734 120.151 225.649 120.363C248.541 90.4316 270.342 62.4105 299.23 62.4105C322.34 62.4105 335.021 80.2421 338.473 89.1579L363 103.168L337.383 108.263C323.212 119.726 318.851 143.926 310.676 180.226C304.135 209.266 279.608 236.056 268.162 245.821C299.557 216.781 298.321 177.679 293.779 161.758C278.954 231.556 192.401 258.346 150.977 263.016Z" fill="#0181C8"/>
			<path d="M218.289 289.94C196.063 304.615 228.22 328.941 216.135 321.964C204.051 314.987 174.9 286.068 203.918 280.473C232.936 274.877 266.197 247.198 266.197 247.198C266.197 247.198 240.515 275.266 218.289 289.94Z" fill="#0181C8"/>
		</svg>
		<svg width="1598" height="245" viewBox="0 0 1598 245" fill="none" xmlns="http://www.w3.org/2000/svg" class="preloader__title">
			<path
				d="M117.931 190.766C133.148 190.766 145.068 187.216 153.691 180.114C162.567 172.76 168.401 164.263 171.19 154.626L228.254 158.43C225.464 169.843 220.899 180.748 214.559 191.147C208.218 201.545 200.356 210.675 190.972 218.537C181.589 226.146 170.683 232.359 158.256 237.178C146.082 241.743 132.641 244.025 117.931 244.025C101.7 244.025 86.356 240.982 71.9 234.895C57.6975 228.555 45.2703 219.932 34.6185 209.027C23.9667 197.867 15.4705 184.933 9.13015 170.223C3.04339 155.514 0 139.536 0 122.29C0 105.298 3.04339 89.4469 9.13015 74.7372C15.4705 59.7739 23.9667 46.8395 34.6185 35.934C45.2703 24.775 57.6975 16.152 71.9 10.0653C86.356 3.72488 101.7 0.554688 117.931 0.554688C132.134 0.554687 145.195 2.96403 157.115 7.78272C169.288 12.3478 179.94 18.5614 189.07 26.4235C198.454 34.0319 206.316 43.0353 212.656 53.4335C218.997 63.8317 223.562 74.7372 226.352 86.1499L169.288 89.9541C167.767 85.1354 165.611 80.5703 162.821 76.2589C160.031 71.9474 156.481 68.1432 152.169 64.8462C147.858 61.5492 142.785 58.8862 136.952 56.8573C131.373 54.8284 125.032 53.8139 117.931 53.8139C109.308 53.8139 101.193 55.5892 93.5841 59.1398C85.9756 62.4368 79.2548 67.1287 73.4216 73.2155C67.8421 79.3023 63.4038 86.5303 60.1068 94.8996C56.8098 103.269 55.1613 112.399 55.1613 122.29C55.1613 132.181 56.8098 141.311 60.1068 149.681C63.4038 158.05 67.8421 165.278 73.4216 171.365C79.2548 177.451 85.9756 182.27 93.5841 185.821C101.193 189.118 109.308 190.766 117.931 190.766Z"
				fill="#F6F6F6"
			/>
			<path
				d="M355.844 2.4568C368.271 2.4568 379.557 4.48573 389.702 8.54358C400.1 12.6014 408.977 18.0541 416.331 24.9018C423.686 31.7494 429.393 39.8651 433.45 49.2488C437.508 58.379 439.537 68.1432 439.537 78.5414C439.537 91.983 437.128 103.269 432.309 112.399C427.744 121.529 422.545 129.011 416.712 134.844C411.132 140.424 405.933 144.481 401.114 147.018C396.296 149.554 393.886 150.822 393.886 150.822L447.146 242.123H386.278L342.529 162.234H313.998V242.123H258.836V2.4568H355.844ZM355.844 108.975C365.482 108.975 372.963 106.439 378.289 101.367C383.615 96.2945 386.278 89.9541 386.278 82.3456C386.278 74.7372 383.615 68.3968 378.289 63.3245C372.963 58.2522 365.482 55.716 355.844 55.716H313.998V108.975H355.844Z"
				fill="#F6F6F6"
			/>
			<path d="M475.796 2.4568H646.987V55.716H530.958V93.7583H637.476V147.018H530.958V188.864H650.791V242.123H475.796V2.4568Z" fill="#F6F6F6" />
			<path
				d="M804.699 148.92L778.069 69.0308L751.44 148.92H804.699ZM736.223 196.473L721.006 242.123H663.942L749.537 2.4568H806.601L892.196 242.123H835.133L819.916 196.473H736.223Z"
				fill="#F6F6F6"
			/>
			<path d="M1002.44 242.123H947.283V55.716H878.807V2.4568H1070.92V55.716H1002.44V242.123Z" fill="#F6F6F6" />
			<path d="M1152.86 242.123H1097.7V2.4568H1152.86V242.123Z" fill="#F6F6F6" />
			<path d="M1398.1 2.4568L1316.31 242.123H1259.24L1177.45 2.4568H1234.52L1287.78 167.941L1341.04 2.4568H1398.1Z" fill="#F6F6F6" />
			<path d="M1422.77 2.4568H1593.96V55.716H1477.93V93.7583H1584.45V147.018H1477.93V188.864H1597.76V242.123H1422.77V2.4568Z" fill="#F6F6F6" />
		</svg>
		<div class="preloader__date">2018 - {{ new Date().getFullYear() }}</div>
		<!-- <div class="preloader__title">Creative</div> -->
	</div>
</template>

<script>
export default {
	name: 'PreloaderElement',
};
</script>

<style lang="sass" scoped>
.preloader
	width: 100vw
	height: 100%
	background: white
	animation: animationBackground 0.5s ease 2.4s both
	pointer-events: none
	user-select: none
	position: fixed
	top: 0
	left: 0
	z-index: 10

	&__date
		font-size: 20px
		color: #868686
		position: absolute
		bottom: 120px
		left: 50%
		font-weight: 500
		font-feature-settings: 'tnum' on, 'lnum' on
		transform: translateX(-50%)
		animation: animationTitle 2.2s linear forwards
	
	&__motto
		font-size: 20px
		color: #868686
		position: absolute
		top: 120px
		left: 50%
		font-weight: 500
		font-feature-settings: 'tnum' on, 'lnum' on
		transform: translateX(-50%)
		animation: animationTitle 2.2s linear forwards

	&__logo
		z-index: 1
		position: absolute
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
		max-width: 305px
		width: 15.88vw
		animation: animationLogo 3s ease both

	&__title
		font-family: TTCommons
		font-weight: 700
		position: absolute
		text-transform: uppercase
		top: 50%
		left: 50%
		max-width: 1212px
		width: 63.125vw
		transform: translate(-50%, -50%)
		color: #F6F6F6
		animation: animationTitle 2.2s linear forwards

	&::after
		content: ''
		position: absolute
		top: 0
		left: 0
		width: 100vw
		height: 100vh
		z-index: -1
		animation: animationBackground 0.5s ease 0.2s both reverse

@media screen and (max-width: 1440px)
	.preloader
		&__title
			max-width: 1002px
			width: 69.58vw
		&__logo
			max-width: 252px
			width: 17.5vw
		&__date
			bottom: 80px
		&__motto
			top: 80px

@media screen and (max-width: 1024px)
	.preloader
		&__title
			max-width: 702px
			width: 68.55vw
		&__logo
			max-width: 177px
			width: 17.28vw
		&__date
			bottom: 70px
		&__motto
			top: 70px

@media screen and (max-width: 768px)
	.preloader
		&__title
			max-width: 548px
			width: 71.35vw
		&__logo
			max-width: 246px
			width: 32vw
		&::after
			background-size: 960px
		&__date
			bottom: 100px
		&__motto
			top: 100px
@media screen and (max-width: 507px)
	.preloader
		&__title
			max-width: 322px
			width: 75.764vw
		&__logo
			max-width: 160px
			width: 37.64vw
		&__date
			font-size: 16px
			bottom: 80px
		&__motto
			text-align: center
			max-width: 170px
			font-size: 16px
			top: 80px

@media screen and (max-width: 360px)
	.preloader
		&__title
			max-width: 266px
			width: 73.888vw
		&__logo
			max-width: 105px
			width: 29vw
		&__date
			bottom: 80px
		&__motto
			top: 80px

@keyframes animationBackground
	0%
		opacity: 1
	100%
		opacity: 0
		display: none

@keyframes animationTitle
	0%
		opacity: 0
	25%
		opacity: 1
	85%
		opacity: 1
	100%
		opacity: 0

@keyframes animationLogo
	0%
		transform: translate(-50%, -50%) scale(0.5) translateZ(0px)
		opacity: 0
	33.3%
		transform: translate(-50%, -50%) scale(1) translateZ(0px)
		opacity: 1
	50%
		transform: translate(-50%, -50%) scale(1) translateZ(0px)
		opacity: 1
	66.6%
		transform: translate(-50%, -50%) scale(0.8) translateZ(0px)
		opacity: 1
		blur: 0px
	100%
		blur: 6px
		opacity: 0
		transform: translate(-50%, -50%) scale(1.2) translateZ(0px)

@keyframes anim
	0%
		stroke-dashoffset: 2600

	100%
		stroke-dashoffset: 0
</style>
