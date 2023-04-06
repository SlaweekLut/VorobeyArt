<template>
	<div>
		<Head>
			<Title>Услуги</Title>
			<Meta
				name="description"
				content="Команда, креатив которой не знает границ. Наши дизайнерские решения
          покоряют сердца, а технические навыки позволяют реализовывать самые
          смелые идеи."
			/>
		</Head>
		<div class="content services-text">
			<div class="content__wrapper services-text__wrapper">
				<p class="services-text__title">
					Невозможно<br />
					– не наш формат
				</p>
				<button class="services-text__button" @click="featherHandler($event)">
					<span>Клик</span>
					<span>Чирик</span>
					<div class="services-text__circles">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button>
			</div>
		</div>
		<div class="content services-groups">
			<div class="content__wrapper">
				<div class="services-groups__wrapper">
					<div class="services-group" v-for="(service, index) in services">
						<div class="services-group__header">
							<div class="services-group__row">
								<p class="services-group__number">/0{{ index + 1 }}</p>
								<p class="services-group__title">
									{{ service.title }}
								</p>
							</div>
						</div>
						<a href="/works" class="services-group__link">
							Проекты
							<span
								><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M5.42426 5.42426C5.65858 5.18995 5.65858 4.81005 5.42426 4.57574L1.60589 0.757359C1.37157 0.523044 0.991674 0.523044 0.757359 0.757359C0.523045 0.991674 0.523045 1.37157 0.757359 1.60589L4.15147 5L0.757359 8.39411C0.523044 8.62843 0.523044 9.00833 0.757359 9.24264C0.991673 9.47696 1.37157 9.47696 1.60589 9.24264L5.42426 5.42426ZM4 5.6L5 5.6L5 4.4L4 4.4L4 5.6Z"
										fill="white"
									/>
								</svg>
							</span>
						</a>
						<ul class="services-group-list">
							<li class="services-group-list__item" v-for="item in service.list">{{ item }}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ServicesPage',
	props: {},
	data() {
		return {
			services: [
				{
					title: 'Design',
					list: ['Brand identity', 'UX design', 'UI design', 'Interaction design', 'Graphic design', 'Art direction'],
				},
				{
					title: '3D Model',
					list: ['Brand identity', 'UX design', 'UI design', 'Interaction design', 'Graphic design', 'Art direction'],
				},
				{
					title: 'Content',
					list: ['Messaging strategy', 'Brand copywriting', 'Website content strategy', 'Website copywriting', 'Search engine optimization', 'Visual content strategy'],
				},
				{
					title: 'Web / App',
					list: ['Interactive Development', 'Mobile Experience', 'AR & VR', 'WebGL', 'CMS', 'Native Apps'],
				},
			],
		};
	},
	watch: {
		'$route.name': {
			handler: function (name) {
				setTimeout(() => {
					document.querySelectorAll('.feather').forEach((feather) => {
						feather.remove();
					});
				}, 500);
			},
			deep: true,
			// immediate: true,
		},
	},
	methods: {
		random(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		featherHandler(event) {
			let startWindowHeight = window.innerHeight;
			if (!document.querySelector('.services-text__button').classList.contains('active')) {
				document.querySelector('.services-text__button').classList.add('active');
				setTimeout(() => {
					document.querySelector('.services-text__button').classList.remove('active');
				}, 500);
			}
			let featherSvg = `
					<svg width="100" height="36" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M20.3399 1.37061C11.7386 1.87693 10.6248 1.55401 0 5.09868C2.52972 16.2373 16.0132 25.8224 22.5907 28.8603C24.86 28.4142 25.6031 28.1249 28.156 26.835C28.7829 26.4254 30.6469 27.2478 29.6739 28.8603C29.3311 29.2763 28.5636 29.7149 26.3706 30.4824C29.7697 32.0175 34.4298 33.9235 38.7809 33.9235C43.0921 31.6885 44.682 31.0855 47.3819 28.354C47.8618 27.5219 50.7127 28.5635 48.5746 30.7565L48.513 30.8123C46.8172 32.3493 46.6736 32.4794 43.5855 34.4298C45.0374 35.9127 45.3399 35.307 48.8997 34.4298C49.7807 33.7171 56.7723 30.4535 60.6908 26.535C61.4583 25.7675 62.1711 24.7806 63.0661 26.3287C63.432 27.1929 64.2544 27.2478 62.5602 32.9109C67.489 32.9109 74.7028 31.0855 80.7742 22.2781C78.6732 21.4912 47.8618 28.354 26.6382 17.7212C28.156 17.7212 78.9474 29.7794 100 10.0328C98.5746 9.82961 97.8618 9.70389 95.1754 9.21047C89.9671 11.8969 88.8706 12.4999 82.7979 14.177C82.6053 13.8539 80.7018 11.9517 81.7982 11.8969C80.7018 10.6907 78.5088 8.27845 74.5614 5.97582C74.5614 9.65869 74.1228 10.5811 72.6425 12.9934C72.0943 13.9254 70.7785 13.3771 70.6553 13.1643C70.1206 10.91 68.483 5.97899 62.1162 2.1381C58.3405 0.715837 54.6601 -0.000134878 42.8284 0C43.4211 0.657923 47.2039 5.70175 45.8641 11.1391C45.7237 11.4035 45.5592 12.7193 43.8403 11.6454C41.2829 8.16886 39.4189 3.99534 33.8816 1.91886C33.0044 1.58991 29.7697 0.932018 25.1096 1.20614C26.0965 1.80921 29.4956 4.16667 32.0724 7.18202C32.3465 7.45614 32.2036 9.75877 30.1798 8.60746C28.5088 7.34649 24.3872 3.10904 20.3399 1.37061Z" fill="#0181C8"/>
					</svg>
				`;

			for (let i = 0; i < 10; i++) {
				let feather = document.createElement('div');
				feather.classList.add('feather');
				feather.innerHTML = featherSvg;
				feather.style.left = event.clientX + 'px';
				feather.style.top = event.clientY + this.random(-50, 0) + 'px';
				feather.style.animationName = `featherBoom-${i + 1}`;
				feather.style.setProperty(`--translateX-${i + 1}`, `calc(-50% + ${this.random(-250, 250)}px)`);
				feather.style.setProperty(`--translateY-${i + 1}`, `calc(-50% + ${this.random(-250, 250)}px)`);
				feather.style.setProperty(`--translateXTo1-${i + 1}`, `calc(-50% + ${this.random(-60, 60)}px)`);
				feather.style.setProperty(`--translateXTo2-${i + 1}`, `calc(-50% + ${this.random(-60, 60)}px)`);
				feather.style.setProperty(`--translateXTo3-${i + 1}`, `calc(-50% + ${this.random(-30, 30)}px)`);
				feather.style.setProperty(`--rotateDegTo-${i + 1}`, `${this.random(-25, 25)}deg`);
				feather.style.setProperty(`--scale-${i + 1}`, `${this.random(3, 8) / 10}`);
				document.querySelector('#app').prepend(feather);

				setTimeout(() => {
					feather.style.animationName = `featherFalling-${i + 1}`;
					feather.style.animationDuration = '10s';
					feather.style.animationFillMode = 'both';
					feather.style.animationTimingFunction = 'ease-in-out';
					feather.style.animationIterationCount = 'infinite';
					let repeat = setInterval(() => {
						if (
							Number(feather?.style.top.replace('px', '')) > window.scrollY + window.innerHeight ||
							Number(feather?.style.top.replace('px', '')) > startWindowHeight
						) {
							feather.remove();
							clearInterval(repeat);
						} else {
							feather.style.top = Number(feather.style.top.replace('px', '')) + 0.5 + 'px';
							feather.style.animationName = `featherFalling-${i + 1}`;
						}
					}, 24);
				}, 1000);
			}
		},
	},
};
</script>

<style lang="scss">
.feather {
	position: absolute;
	pointer-events: none;
	top: 0;
	left: 0;
	z-index: 4;
	animation: featherBoom-1 1s ease both;
}
@function randomNum($min, $max) {
	$rand: random();
	$randomNum: $min + floor($rand * (($max - $min) + 1));

	@return $randomNum;
}
@for $i from 1 through 10 {
	:root {
		--translateXThin-#{$i}: calc(-50% + #{randomNum(-100, 100) + px});
		--translateX-#{$i}: calc(-50% + #{randomNum(-250, 250) + px});
		--translateY-#{$i}: calc(-50% + #{randomNum(-250, 250) + px});
		--translateXTo1-#{$i}: calc(-50% + #{randomNum(60, -60) + px});
		--translateXTo2-#{$i}: calc(-50% + #{randomNum(60, -60) + px});
		--translateXTo3-#{$i}: calc(-50% + #{randomNum(30, -30) + px});
		--rotateDegTo-#{$i}: #{randomNum(-25, 25) + deg};
		--scale-#{$i}: #{randomNum(0.5, 0.5)};
	}
	@keyframes featherBoom-#{$i} {
		0% {
			opacity: 0;
			transform: translate(0, 0) rotate(0) scale(0);
		}
		100% {
			opacity: 1;
			transform: translate(var(--translateX-#{$i}), var(--translateY-#{$i})) rotate(var(--rotateDegTo-#{$i})) scale(var(--scale-#{$i}));
		}
	}
	@keyframes featherFalling-#{$i} {
		0% {
			transform: translate(var(--translateX-#{$i}), var(--translateY-#{$i})) rotate(var(--rotateDegTo-#{$i})) scale(var(--scale-#{$i}));
		}
		25% {
			transform: translate(calc(var(--translateX-#{$i}) + var(--translateXTo1-#{$i})), var(--translateY-#{$i})) rotate(calc(var(--rotateDegTo-#{$i}) + 25deg))
				scale(var(--scale-#{$i}));
		}
		50% {
			transform: translate(calc(var(--translateX-#{$i}) - var(--translateXTo2-#{$i})), var(--translateY-#{$i})) rotate(calc(var(--rotateDegTo-#{$i}) - 30deg))
				scale(var(--scale-#{$i}));
		}
		75% {
			transform: translate(calc(var(--translateX-#{$i}) + var(--translateXTo3-#{$i})), var(--translateY-#{$i})) rotate(calc(var(--rotateDegTo-#{$i}) + 15deg))
				scale(var(--scale-#{$i}));
		}
		100% {
			transform: translate(calc(var(--translateX-#{$i}) + 0px), var(--translateY-#{$i})) rotate(var(--rotateDegTo-#{$i})) scale(var(--scale-#{$i}));
		}
	}
}
</style>

<style lang="scss" scoped>
body {
	overflow-x: hidden;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
}

.services-text {
	padding: 120px 93px 80px;
	margin: 0 auto;
	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__title {
		font-size: 60px;
		font-weight: 700;
	}
	&__button {
		width: 103px;
		height: 103px;
		background: transparent;
		text-transform: uppercase;
		position: relative;
		border: 0;
		z-index: 1;
		& > span {
			position: absolute;
			font-size: 16px;
			&:first-child {
				color: #222;
				font-weight: 700;
				transform: translate(-150%, -90%) rotate(5deg);
			}
			&:nth-child(2) {
				color: #868686;
				font-weight: 500;
				transform: translate(-142%, -10%) rotate(-1deg);
			}
			&::after {
				content: '';
				position: absolute;
				display: block;
				height: 100%;
				width: 10px;
				background: white;
				right: 0;
				top: 0;
				z-index: -1;
			}
		}
		@media (hover: hover) and (pointer: fine) {
			&:hover {
				.services-text__circles {
					span {
						transform: translate(-50%, -50%) scale(1.1);
					}
				}
			}
		}
		&.active {
			.services-text__circles {
				span {
					animation: circleActive 0.3s linear;
					&:nth-child(2) {
						animation-delay: 0.1s;
					}
					&:nth-child(3) {
						animation-delay: 0.2s;
					}
				}
			}
			& > span {
				&:first-child {
					animation: textActive1 0.3s linear;
					@keyframes textActive1 {
						0% {
							transform: translate(-150%, -90%) rotate(5deg);
						}
						50% {
							transform: translate(-130%, -80%) rotate(5deg) scale(0.9);
						}
						100% {
							transform: translate(-150%, -90%) rotate(5deg);
						}
					}
				}
				&:nth-child(2) {
					animation: textActive2 0.3s linear;
					@keyframes textActive2 {
						0% {
							transform: translate(-142%, -10%) rotate(-1deg);
						}
						50% {
							transform: translate(-125%, -5%) rotate(-1deg) scale(0.9);
						}
						100% {
							transform: translate(-142%, -10%) rotate(-1deg);
						}
					}
				}
			}
		}
	}
	&__circles {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: -1;
		transform: translate(-50%, -50%);
		span {
			border-radius: 50%;
			position: absolute;
			top: 50%;
			display: block;
			left: 50%;
			transform: translate(-50%, -50%);
			&:nth-child(1) {
				width: 103px;
				height: 103px;
				border: 1px solid rgba(#0181c8, 0.1);
				transition: 0.3s linear;
			}
			&:nth-child(2) {
				width: 53px;
				height: 53px;
				border: 1px solid rgba(#0181c8, 0.5);
				transition: 0.3s linear 0.1s;
			}
			&:nth-child(3) {
				width: 20px;
				height: 20px;
				border: 1px solid #0181c8;
				transition: 0.3s linear 0.2s;
			}
		}
	}
}
@keyframes circleActive {
	0% {
		transform: translate(-50%, -50%) scale(1);
	}
	50% {
		transform: translate(-50%, -50%) scale(0.5);
	}
	100% {
		transform: translate(-50%, -50%) scale(1);
	}
}
.services-groups {
	margin-top: 0;
	&__wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0 170px;
	}
}
.services-group {
	padding: 64px 0;
	border-top: 1px solid #222;
	display: flex;
	flex-direction: column;
	&__row {
		display: flex;
		gap: 16px;
	}
	&__title {
		font-size: 20px;
		font-weight: 700;
	}
	&__number {
		font-size: 16px;
		font-weight: 400;
	}
	&__link {
		text-decoration: none;
		margin-top: 1px;
		font-size: 20px;
		font-weight: 500;
		line-height: 40px;
		display: flex;
		gap: 12px;
		align-items: center;
		span {
			border-radius: 50%;
			background-color: #0181c8;
			width: 20px;
			height: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}
.services-group-list {
	margin-top: 40px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	&__item {
		display: flex;
		flex-direction: column;
		line-height: 36px;
		font-size: 18px;
		font-weight: 500;
		padding-left: 25px;
		position: relative;
		&::before {
			content: '';
			display: block;
			width: 4px;
			height: 4px;
			border-radius: 50%;
			background-color: #222;
			position: absolute;
			top: 16px;
			left: 10px;
		}
	}
}
@media (max-width: 1200px) {
	.services-groups__wrapper {
		gap: 0 100px;
	}
}
@media (max-width: 1024px) {
	.services-text {
		margin: 0 auto;
		padding: 90px 41px 60px;
		&__title {
			font-size: 30px;
		}
	}
	.services-groups__wrapper {
		display: flex;
		flex-direction: column;
		max-width: 560px;
	}
}
@media (max-width: 768px) {
	.services-text {
		margin: 0 auto;
		padding: 46px 41px 60px;
		&__wrapper {
			gap: 25px;
		}
	}
	// .about-service {
	// 	padding: 60px 41px 130px;
	// }
}
@media (max-width: 570px) {
	.services-group-list {
		display: flex;
		flex-direction: column;
	}
	.services-text {
		&__button {
			display: none;
		}
	}
}
@media (max-width: 425px) {
	.services-text {
		margin: 0 auto;
		padding: 43px 31px 60px;
		&__title {
			font-size: 25px;
		}
	}
}
</style>
