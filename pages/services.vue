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
			<svg class="services-groups__svg" width="1920" height="299" viewBox="0 0 1920 299" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M132.299 233.594C150.918 233.594 165.503 229.233 176.054 220.513C186.915 211.48 194.053 201.046 197.466 189.211L267.288 193.883C263.875 207.898 258.289 221.291 250.531 234.061C242.773 246.831 233.153 258.043 221.671 267.698C210.189 277.042 196.846 284.673 181.64 290.591C166.745 296.197 150.298 299 132.299 299C112.438 299 93.6641 295.263 75.9758 287.788C58.5979 280.001 43.3922 269.411 30.3587 256.019C17.3253 242.315 6.92954 226.43 -0.828466 208.366C-8.27615 190.301 -12 170.679 -12 149.5C-12 128.632 -8.27615 109.166 -0.828466 91.1016C6.92954 72.7255 17.3253 56.8412 30.3587 43.4484C43.3922 29.7443 58.5979 19.1547 75.9758 11.6797C93.6641 3.89323 112.438 0 132.299 0C149.677 0 165.658 2.95885 180.243 8.87656C195.139 14.4828 208.172 22.1135 219.344 31.7688C230.826 41.1125 240.446 52.1693 248.204 64.9391C255.962 77.7089 261.547 91.1016 264.961 105.117L195.139 109.789C193.277 103.871 190.639 98.2651 187.226 92.9703C183.812 87.6755 179.468 83.0037 174.192 78.9547C168.917 74.9057 162.71 71.6354 155.573 69.1438C148.746 66.6521 140.988 65.4063 132.299 65.4063C121.748 65.4063 111.818 67.5865 102.508 71.9469C93.1986 75.9958 84.9751 81.7578 77.8377 89.2328C71.0107 96.7078 65.5801 105.584 61.5459 115.863C57.5118 126.141 55.4947 137.353 55.4947 149.5C55.4947 161.647 57.5118 172.859 61.5459 183.138C65.5801 193.416 71.0107 202.292 77.8377 209.767C84.9751 217.242 93.1986 223.16 102.508 227.52C111.818 231.569 121.748 233.594 132.299 233.594Z" fill="#F6F6F6"/>
				<path d="M423.406 2.33594C438.612 2.33594 452.421 4.82761 464.834 9.81095C477.557 14.7943 488.418 21.4906 497.418 29.9C506.417 38.3094 513.399 48.2761 518.364 59.8C523.329 71.0125 525.812 83.0037 525.812 95.7735C525.812 112.281 522.864 126.141 516.968 137.353C511.382 148.566 505.02 157.754 497.883 164.917C491.056 171.769 484.694 176.753 478.798 179.867C472.902 182.982 469.954 184.539 469.954 184.539L535.121 296.664L460.645 296.664L407.114 198.555H372.203V296.664H304.709L304.709 2.33594L423.406 2.33594ZM423.406 133.148C435.198 133.148 444.353 130.034 450.869 123.805C457.386 117.576 460.645 109.789 460.645 100.445C460.645 91.1016 457.386 83.3151 450.869 77.0859C444.353 70.8568 435.198 67.7422 423.406 67.7422L372.203 67.7422V133.148H423.406Z" fill="#F6F6F6"/>
				<path d="M570.178 2.33594L779.644 2.33594V67.7422L637.673 67.7422V114.461L768.007 114.461V179.867H637.673V231.258L784.299 231.258V296.664H570.178V2.33594Z" fill="#F6F6F6"/>
				<path d="M972.619 182.203L940.035 84.0938L907.451 182.203L972.619 182.203ZM888.832 240.602L870.213 296.664H800.391L905.124 2.33594L974.946 2.33594L1079.68 296.664H1009.86L991.238 240.602L888.832 240.602Z" fill="#F6F6F6"/>
				<path d="M1214.58 296.664H1147.08V67.7422L1063.3 67.7422V2.33594L1298.36 2.33594V67.7422L1214.58 67.7422V296.664Z" fill="#F6F6F6"/>
				<path d="M1398.62 296.664H1331.13V2.33594L1398.62 2.33594V296.664Z" fill="#F6F6F6"/>
				<path d="M1698.7 2.33594L1598.62 296.664L1528.79 296.664L1428.72 2.33594L1498.54 2.33594L1563.71 205.563L1628.87 2.33594L1698.7 2.33594Z" fill="#F6F6F6"/>
				<path d="M1728.88 2.33594L1938.35 2.33594V67.7422L1796.37 67.7422V114.461L1926.71 114.461V179.867L1796.37 179.867V231.258L1943 231.258V296.664L1728.88 296.664V2.33594Z" fill="#F6F6F6"/>
			</svg>
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
						<!-- <NuxtLink :to="service.link" class="services-group__link">
							Проекты
							<span>
								<svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 1L5 4L1 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</span>
						</NuxtLink> -->
						<ul class="services-group-list">
							<li class="services-group-list__item" v-for="item in service.list">{{ item }}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="content services-lists">
			<div class="content__wrapper">
				<Accordion title="Дизайн"/>
				<Accordion title="Сайты"/>
				<Accordion title="Копирайтинг"/>
			</div>
		</div>
		<Footer :case="false"/>
	</div>
</template>

<script>
import Accordion from '../components/Accordion.vue';
import Footer from '../components/Cases/Footer.vue';


export default {
	name: 'ServicesPage',
	props: {},
	components: {
		Footer,
		Accordion
	},
	data() {
		return {
			services: [
				{
					title: 'Дизайн',
					list: ['UX/UI', 'Фирменный стиль', 'Сайты / Приложения',  'Графический дизайн', 'Инфографика', '3D'],
					link: 'works#design',
				},
				{
					title: 'Сайты / Приложения',
					list: ['HTML / CSS / JS', 'iOS / Android', 'Backend / API', 'AR', 'CMS', '@^##_//'],
					link: 'works#web',
				},
				{
					title: 'Копирайт',
					list: ['Сайты', 'Ком. предложения', 'Презентации', 'SMM', 'Нейминг', 'SEO тексты',],
					link: 'works',
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
				let featherContainer = document.createElement('div');
				featherContainer.classList.add('feather-container');
				let feather = document.createElement('div');
				feather.classList.add('feather');
				feather.innerHTML = featherSvg;
				featherContainer.append(feather);

				let x = this.random(-200, 200),
					x1 = this.random(-60, 60),
					x2 = this.random(-60, 60),
					x3 = this.random(-30, 30),
					y = this.random(-150, 150),
					// ty = y < 0 ? y * 2 : y * 0.5,
					rotate = this.random(-25, 25),
					scale = this.random(3, 8);

				featherContainer.style.setProperty(`--axisX-${i + 1}`, `${x}px`);
				featherContainer.style.setProperty(`--axisY-${i + 1}`, `${y}px`);

				// featherContainer.style.setProperty(`--axisTopY-${i + 1}`, `${ty}px`);
				featherContainer.style.setProperty(`--axisX-1-${i + 1}`, `${x1}px`);
				featherContainer.style.setProperty(`--axisX-2-${i + 1}`, `${x2}px`);
				featherContainer.style.setProperty(`--axisX-3-${i + 1}`, `${x3}px`);
				featherContainer.style.setProperty(`--rotate-${i + 1}`, `${rotate}deg`);
				featherContainer.style.setProperty(`--scale-${i + 1}`, `${scale / 10}`);

				featherContainer.style.left = event.clientX + window.scrollX - 50 + 'px';
				featherContainer.style.top = event.clientY + window.scrollY - 18 + 'px';
				featherContainer.style.animationName = `featherAxisX-${i + 1}`;
				feather.style.animationName = `featherAxisY-${i + 1}`;

				document.querySelector('#app').prepend(featherContainer);
				let repeat = null;

				setTimeout(() => {
					feather.style.animationName = `featherFalling-${i + 1}`;
					feather.style.animationDuration = '10s';
					feather.style.animationFillMode = 'both';
					feather.style.animationTimingFunction = 'ease-in-out';
					repeat = setInterval(() => {
						featherContainer.style.top = Number(featherContainer.style.top.replace('px', '')) + 0.5 + 'px';
					}, 24);
					setTimeout(() => {
						featherContainer.remove();
						clearInterval(repeat);
					}, 10000);
				}, 500);
			}
		},
	},
};
</script>

<style lang="scss">
.feather-container {
	position: absolute;
	pointer-events: none;
	z-index: 4;
	animation-duration: 0.5s;
	animation-fill-mode: both;
}
.feather {
	pointer-events: none;
	animation-duration: 0.5s;
	animation-fill-mode: both;
}
@for $i from 1 through 10 {
	@keyframes featherAxisX-#{$i} {
		0% {
			opacity: 1;
			transform: translateX(0) scale(0);
			animation-timing-function: ease-in;
		}
		85% {
			opacity: 1;
		}
		100% {
			transform: translateX(var(--axisX-#{$i})) scale(1);
		}
	}

	@keyframes featherAxisY-#{$i} {
		0% {
			animation-timing-function: ease-out;
			transform: translateY(0) rotate(var(--rotate-#{$i})) scale(var(--scale-#{$i}));
		}
		100% {
			transform: translate(0, var(--axisY-#{$i})) rotate(var(--rotate-#{$i})) scale(var(--scale-#{$i}));
		}
	}

	@keyframes featherFalling-#{$i} {
		0% {
			transform: translate(0px, var(--axisY-#{$i})) rotate(var(--rotate-#{$i})) scale(var(--scale-#{$i}));
		}
		25% {
			transform: translate(var(--axisX-1-#{$i}), var(--axisY-#{$i})) rotate(calc(var(--rotate-#{$i}) + 25deg)) scale(var(--scale-#{$i}));
		}
		50% {
			transform: translate(var(--axisX-2-#{$i}), var(--axisY-#{$i})) rotate(calc(var(--rotate-#{$i}) - 30deg)) scale(var(--scale-#{$i}));
			opacity: 1;
		}
		75% {
			transform: translate(var(--axisX-3-#{$i}), var(--axisY-#{$i})) rotate(calc(var(--rotate-#{$i}) + 15deg)) scale(var(--scale-#{$i}));
		}
		100% {
			opacity: 0;
			transform: translate(0px, var(--axisY-#{$i})) rotate(var(--rotate-#{$i})) scale(var(--scale-#{$i}));
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

.services-lists {
	padding-top: 106px;
	padding-bottom: 189px;
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
	padding-bottom: 53px;
	position: relative;
	&__svg {
		position: absolute;
		left: 0;
		bottom: 0;
	}
	&__wrapper {
		display: flex;
		padding: 32px;
		justify-content: space-between;
		gap: 32px;
	}
}
.services-group {
	padding: 65px 0;
	// border-top: 1px solid #222;
	display: flex;
	flex-direction: column;
	&__row {
		display: flex;
		align-items: center;
		position: relative;
		padding-left: 32px;
	}
	&__title {
		font-size: 25px;
		font-weight: 700;
	}
	&__number {
		font-size: 15px;
		font-weight: 400;
		position: absolute;
		left: 0;
		top: 0;
		color: #A4A4A4;
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
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	gap: 2px;
	&__item {
		display: flex;
		flex-direction: row;
		gap: 46px;
		align-items: center;
		padding: 7px 0;
		font-size: 18px;
		font-weight: 500;
		position: relative;
		&::before {
			content: '';
			display: block;
			width: 7px;
			height: 7px;
			border-radius: 50%;
			background-color: #0181C8;
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
		max-width: 100%;
	}
	.services-group {
		&__title {
			font-size: 20px;
		}
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
