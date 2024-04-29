<template>
<div class="plug">
	<svg width="1207" height="1080" viewBox="0 0 1207 1080" fill="none" xmlns="http://www.w3.org/2000/svg" class="plug__svg">
		<path d="M502.01 811.546L0 1144C157.671 1023.3 415.02 803.075 502.01 701.433C589.001 599.791 622.227 520.736 627.06 489.679C564.716 611.649 466.972 608.261 425.893 591.321C511.435 593.015 567.858 514.384 585.377 474.856C436.042 595.133 327.424 534.853 291.782 489.679C415.02 523.56 521.946 464.268 560.005 430.388C333.828 514.871 213.249 414.768 181.231 354.156C320.417 415.141 471.201 403.565 529.195 390.154C218.927 385.072 102.698 252.514 83.3664 186.87C110.914 205.505 163.712 225.692 186.668 233.456C57.6315 150.448 8.45746 1.23216 0 -63C199.354 186.87 578.128 337.216 699.552 354.156C820.977 371.096 842.725 371.096 906.156 411.33C969.587 451.563 1023.96 402.86 1040.27 390.154C1056.58 377.449 1089.82 337.216 1049.33 303.335C1008.84 269.454 922.467 296.982 871.722 316.04C831.126 331.287 773.857 336.51 750.297 337.216C826.414 237.691 898.907 144.519 994.959 144.519C1071.8 144.519 1113.97 203.811 1125.45 233.456L1207 280.042L1121.82 296.982C1074.7 335.098 1060.2 415.565 1033.02 536.265C1011.27 632.825 929.716 721.903 891.658 754.372C996.047 657.812 991.939 527.795 976.836 474.856C927.541 706.939 639.746 796.017 502.01 811.546Z" fill="#EDF3F6"/>
		<path d="M725.826 901.073C651.924 949.867 758.847 1030.75 718.665 1007.55C678.482 984.355 581.553 888.197 678.041 869.592C774.529 850.988 885.123 758.951 885.123 758.951C885.123 758.951 799.728 852.28 725.826 901.073Z" fill="#EDF3F6"/>
	</svg>

	<div class="plug__col">
		<p class="plug__subtitle">Создаём дизайн для сильных брендов</p>
		<h1 class="plug__title">САЙТ В РАЗРАБОТКЕ</h1>
		<a href="https://disk.yandex.ru/i/ffr_32LgvsLmYg" target="_blank" rel="noopener noreferrer" class="plug-link plug-link--pc" :class="{ 'plug-link--nav': menu }" @mousemove="startPorject">
				<span>Презентация</span>
				<div class="plug-link__fill"></div>
			</a>
		<div class="plug__date">2018 - {{ new Date().getFullYear() }}</div>
	</div>
	<input class="plug__input" type="text" v-model="pass" @input="$emit('pass', pass)">
</div>
</template>

<script setup>
import { ref } from 'vue';

const pass = ref('');

function startPorject(e) {
	const target = e.target.getBoundingClientRect();
	const x = e.clientX - target.left;
	const y = e.clientY - target.top;
	const filler = e.target.children[1];
	filler.style.left = `${x}px`;
	filler.style.top = `${y}px`;
}
</script>

<style scoped lang="scss">
	.plug-link {
			height: 40px;
			width: 220px;
			margin-top: 32px;
			margin-bottom: auto;
			background: #0181c8;
			color: #fff;
			font-size: 20px;
			font-weight: 400;
			text-decoration: none;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0px 27px;
			border-radius: 80px;
			position: relative;
			cursor: pointer;
			z-index: 5;
			pointer-events: all;
			overflow: hidden;
			max-width: 220px;
			width: 100%;
			transition: color 0.6s ease, background 0s ease 0.1s;
			border: none;
			outline: none;
			span {
				z-index: 1;
				position: relative;
				font-size: inherit;
				color: inherit;
				pointer-events: none;
			}
			&--hidden {
				display: none;
			}
			&--mobile {
				display: none;
			}
			&__fill {
				position: absolute;
				width: 370px;
				height: 370px;
				border-radius: 50%;
				background-color: #f8f8f8;
				transition: transform 0.6s ease;
				transform-origin: 0% 0%;
				transform: scale(0) translate(-50%, -50%);
				pointer-events: none;
			}
			@media (hover: hover) and (pointer: fine) {
				&:hover {
					color: #222222;
					background: #f8f8f8;
					transition: color 0.6s ease, background 0.3s ease 0.1s;
				}
				&:hover &__fill {
					transform: scale(1) translate(-50%, -50%);
				}
			}
		}
	.plug	{
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: white;
		display: flex;
		align-items: center;
		justify-content: center;
		&__input {
			position: absolute;
			top: 0;
			left: 0;
			border: 0;
			outline: 0;
		}
		&__svg {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 100vh;
			max-height: 1328px;
			min-height: 456px;
			width: 100vw;
			max-width: 1214px;
			min-width: 417px;
		}
		&__col {
			display: flex;
			flex-direction: column;
			margin: auto;
			max-height: calc(100vh - 240px);
			height: 100%;
			align-items: center;
			// justify-content: space-between;
		}
		&__title {
			color: #000;
			text-align: center;
			font-variant-numeric: lining-nums tabular-nums;
			font-size: 70px;
			font-weight: 700;
			margin-top: auto;
		}
		&__subtitle, &__date {
			color: #868686;
			font-variant-numeric: lining-nums tabular-nums;
			font-size: 20px;
			font-weight: 500;
			text-align: center;
		}
	}
	@media screen and (max-width: 768px) {
		.plug-link {
			order: 2;
			margin-top: 38px;
			margin-bottom: 0;
		}
		.plug {
			&__col {
				max-height: 378px;
				justify-content: center;
				max-width: 240px;
			}
			&__title {
				margin-bottom: 20px;
				font-size: 35px;
				order: 0;
				margin-top: 0;
			}
			&__date, &__subtitle {
				font-size: 16px;
				order: 1;
				max-width: 190px;
			}
			&__date {
				margin-top: auto;
			}
		}
	}
</style>