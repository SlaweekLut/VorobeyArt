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
				<!-- <button class="services-text__button" @click="featherHandler($event)">
					<span>Клик</span>
					<span>Чирик</span>
					<div class="services-text__circles">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button> -->
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
		<div class="content about-logos">
			<div class="content__wrapper">
				<div class="about-logos__logos">
					<div class="about-logos__logo"><img src="/img/about/energotek.svg" alt="energotek"></div>
					<div class="about-logos__logo"><img src="/img/about/garilla.svg" alt="garilla"></div>
					<div class="about-logos__logo"><img src="/img/about/Genezis.svg" alt="Genezis"></div>
					<div class="about-logos__logo"><img src="/img/about/H_one.svg" alt="H_one"></div>
					<div class="about-logos__logo"><img src="/img/about/HARO.svg" alt="HARO"></div>
					<div class="about-logos__logo"><img src="/img/about/marusya.svg" alt="marusya"></div>
					<div class="about-logos__logo"><img src="/img/about/Mobdebut.svg" alt="Mobdebut"></div>
					<div class="about-logos__logo"><img src="/img/about/MoltenGrass.svg" alt="MoltenGrass"></div>
					<div class="about-logos__logo"><img src="/img/about/Motorika.svg" alt="Motorika"></div>
					<div class="about-logos__logo"><img src="/img/about/Muza_Amanita.svg" alt="Muza_Amanita"></div>
					<div class="about-logos__logo"><img src="/img/about/OceanView.svg" alt="OceanView"></div>
					<div class="about-logos__logo"><img src="/img/about/OwnWifi.svg" alt="OwnWifi"></div>
					<div class="about-logos__logo"><img src="/img/about/PolarBear.svg" alt="PolarBear"></div>
					<div class="about-logos__logo"><img src="/img/about/PrimeTravel.svg" alt="PrimeTravel"></div>
					<div class="about-logos__logo"><img src="/img/about/ProZapchast.svg" alt="ProZapchast"></div>
					<div class="about-logos__logo"><img src="/img/about/SmartsKvantelekom.svg" alt="SmartsKvantelekom"></div>
					<div class="about-logos__logo"><img src="/img/about/SpisyNote.svg" alt="SpisyNote"></div>
					<div class="about-logos__logo"><img src="/img/about/Tomi_Ai.svg" alt="Tomi_Ai"></div>
					<div class="about-logos__logo"><img src="/img/about/Uni.svg" alt="Uni"></div>
					<div class="about-logos__logo"><img src="/img/about/ximtex.svg" alt="ximtex"></div>
					<div class="about-logos__logo"><img src="/img/about/Ykigassen.svg" alt="Ykigassen"></div>
					<div class="about-logos__logo"><img src="/img/about/Yrievskoe_Podvorie.svg" alt="Yrievskoe_Podvorie"></div>
					<div class="about-logos__logo"><img src="/img/about/ZolotoAltaya.svg" alt="ZolotoAltaya"></div>
					<div class="about-logos__logo"><img src="/img/about/energotek.svg" alt="energotek"></div>
					<div class="about-logos__logo"><img src="/img/about/garilla.svg" alt="garilla"></div>
					<div class="about-logos__logo"><img src="/img/about/Genezis.svg" alt="Genezis"></div>
					<div class="about-logos__logo"><img src="/img/about/H_one.svg" alt="H_one"></div>
					<div class="about-logos__logo"><img src="/img/about/HARO.svg" alt="HARO"></div>
					<div class="about-logos__logo"><img src="/img/about/marusya.svg" alt="marusya"></div>
					<div class="about-logos__logo"><img src="/img/about/Mobdebut.svg" alt="Mobdebut"></div>
				</div>
			</div>
		</div>
		<div class="content services-lists">
			<div class="content__wrapper">
				<div class="services-lists__row">
					<p class="services-lists__text">*** Этапы работы</p>
					<p class="services-lists__text">Vorobey Art <span>x</span> XX24</p>
				</div>
				<Accordion title="Дизайн">
					<div class="services-more">
						<div class="services-more__row">
							<Step title="Бриф" step="01" icon="services-design-01" text="Сбор информации, понимание потребностей клиента и требований проекта."/>
							<Step title="Поиск идей" step="02" icon="services-design-02" text="Генерация идей, проводим мозговые штурмы концепций и создаваем зарисовки дизайна."/>
						</div>
						<div class="services-more__row">
							<Step title="Наброски" step="03" icon="services-design-03" text="Создаем черновые эскизы и цифровые каркасы для визуализации макета и структуры дизайна."/>
							<Step title="Прототип" step="04" icon="services-design-04" text="Разрабатываем интерактивные прототипы для тестирования функциональности, пользовательского опыта и сбора обратной связи."/>
						</div>
						<div class="services-more__row">
							<Step title="Создание" step="05" icon="services-design-05" text="Создание визуальных элементов, таких как графика, типографика, цветовые схемы и макет."/>
							<Step title="Обратная связь" step="06" icon="services-design-06" text="Учитываем обратную связь заказчика и заинтересованных сторон. Вносим изменения и уточняем дизайн."/>
						</div>
						<div class="services-more__row">
							<Step title="Завершение" step="07" icon="services-design-07" text="Подготовка материалов проекта к производству, обеспечиваем их соответствие техническим спецификациям и требованиям."/>
							<Step title="Сотрудничество" step="08" icon="services-design-08" text="Взаимодействуем с разработчиками, копирайтерами и другими членами команды, чтобы обеспечить правильную реализацию проекта далее."/>
						</div>
						<div class="services-more__row">
							<Step title="Тестирование" step="09" icon="services-design-09" text="Проводим тестирование, чтобы убедиться, что конструкция работает так, как задумано, и соответствует ожиданиям пользователей."/>
							<Step title="Доставка" step="10" icon="services-design-10" text="Презентация окончательных результатов клиенту или отправка его в производство, обеспечивая предоставление всех необходимых файлов и документации."/>
						</div>
					</div>
				</Accordion>
				<Accordion title="Сайты">
					<div class="services-more">
						<div class="services-more__row">
							<Step title="Бриф" step="01" icon="services-web-01" text="Понимание требований, определение целей проекта и проведение исследования целевой аудитории и конкурентов."/>
							<Step title="Прототип" step="02" icon="services-web-02" text="Создание визуального макета и пользовательского интерфейса веб-сайта, включая каркасы, макеты, а также выбор цветовых схем, шрифтов и графики."/>
						</div>
						<div class="services-more__row">
							<Step title="Создание контента" step="03" icon="services-web-03" text="Создание и организация контента: текст, изображения, видео и другие медиа-элементы. Это может включать в себя работу с копирайтерами, дизайнерами и специалистами по мультимедиа."/>
							<Step title="Разработка" step="04" icon="services-web-04" text="Использование оптимальных решений для вашего проекта при переносе дизайна. Написание чистого и эффективного кода, создание адаптивных макетов и интеграция всех необходимых функций."/>
						</div>
						<div class="services-more__row">
							<Step title="Тестирование" step="05" icon="services-web-05" text="Тестирование работы сайта на разных устройствах, браузерах, размерах экрана. Выявление и исправление любых ошибок или проблем."/>
							<Step title="Развертывание" step="06" icon="services-web-06" text="Загрузка сайта на сервер и настройка его доступности для общественности. Сюда входит регистрация домена, настройка хостинга и интеграция базы данных, если необходимо."/>
						</div>
						<div class="services-more__row">
							<Step title="Обслуживание" step="07" icon="services-web-07" text="Мониторинг производительности сайта, устранение любых возникающих проблем, а также внедрение обновлений или улучшений."/>
						</div>
					</div>
				</Accordion>
				<Accordion title="Копирайтинг">
					<div class="services-more">
						<div class="services-more__row">
							<Step title="Исследование" step="01" icon="services-copyright-01" text="Сбор информации, понимание потребностей клиента и требований проекта."/>
							<Step title="Планирование" step="02" icon="services-copyright-02" text="Генерация идей, проводим мозговые штурмы концепций и создаваем зарисовки дизайна."/>
						</div>
						<div class="services-more__row">
							<Step title="Написание" step="03" icon="services-copyright-03" text="Создаем черновые эскизы и цифровые каркасы для визуализации макета и структуры дизайна."/>
							<Step title="Редактирование" step="04" icon="services-copyright-04" text="Разрабатываем интерактивные прототипы для тестирования функциональности, пользовательского опыта и сбора обратной связи."/>
						</div>
						<div class="services-more__row">
							<Step title="Обратная связь" step="05" icon="services-copyright-05" text="Создание визуальных элементов, таких как графика, типографика, цветовые схемы и макет."/>
							<Step title="Пересмотр" step="06" icon="services-copyright-06" text="Учитываем обратную связь заказчика и заинтересованных сторон. Вносим изменения и уточняем дизайн."/>
						</div>
						<div class="services-more__row">
							<Step title="Завершение" step="07" icon="services-copyright-07" text="Подготовка материалов проекта к производству, обеспечиваем их соответствие техническим спецификациям и требованиям."/>
							<Step title="Тестирование" step="08" icon="services-copyright-08" text="Взаимодействуем с разработчиками, копирайтерами и другими членами команды, чтобы обеспечить правильную реализацию проекта далее."/>
						</div>
					</div>
				</Accordion>
			</div>
		</div>
		<Footer :case="false"/>
	</div>
</template>

<script>
import Accordion from '../components/Accordion.vue';
import Footer from '../components/Cases/Footer.vue';
import Step from '../components/Services/Step.vue';

export default {
	name: 'ServicesPage',
	props: {},
	components: {
		Footer,
		Accordion,
		Step
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
	padding: 0px 93px 150px;
	margin-top: 132px;
	&__row {
		display: flex;
		padding: 0px 72px 34px;
		justify-content: space-between;
	}
	&__text {
		font-size: 18px;
		color: #aaa;
		span {
			color: #222;
		}
	}
}
.services-more {
	display: flex;
	flex-direction: column;
	gap: 92px;
	&__row {
		display: flex;
		:deep(.services-item:first-child .services-item__row) {
			border-right: 1px solid #E0E0E0;
		}
		:deep(.services-item) {
			max-width: 50%;
			width: 100%;
		}
	}
}

.services-text {
	padding: 80px 93px;
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
	position: relative;
	padding-bottom: 0;
	&__svg {
		position: absolute;
		left: 0;
		bottom: 0;
	}
	&__wrapper {
		display: flex;
		padding: 30px;
		justify-content: space-between;
		gap: 32px;
	}
}
.services-group {
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
		gap: 16px;
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

@keyframes logos {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-361.3%);
	}
}
.about-logos {
	width: 100vw;
	max-width: 100vw;
	overflow: auto;
	padding: 37px;
	margin-top: 63px;
	.content__wrapper {
		max-width: 100%;
	}
	&__logos {
		display: flex;
		animation: logos 120s infinite linear;
		img {
			user-select: none;
		}
	}
	&__logo {
		padding: 55px 50px 55px 55px;
		border-right: 1px solid #E0E0E0;
		border-bottom: 1px solid #E0E0E0;
		filter: grayscale(1);
		transition: 0.3s ease-out;
		&:hover {
			filter: grayscale(0);
		}
	}
}


@media (max-width: 1440px) {
	.services-lists {
		padding: 0px 65px 150px;
		&__row {
			padding-left: 72px;
			padding-right: 72px;
		}
	}
}
@media (max-width: 1200px) {
	.services-groups__wrapper {
		gap: 50px 32px;
		flex-wrap: wrap;
	}
	.services-more {
		gap: 50px;
		&__row {
			flex-direction: column;
			gap: 50px;
			:deep(.services-item:first-child .services-item__row) {
				border-right: none;
			}
			:deep(.services-item) {
				max-width: 100%;
			}
		}
	}
	.services-lists {
		&__row {
			padding-left: 40px;
			padding-right: 50px;
		}
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
		max-width: 100%;
	}
	.services-group {
		&__title {
			font-size: 20px;
		}
	}
	.about-logos {
		&__logo {
			padding: 47px 37px;
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
	.about-logos {
		&__logo {
			padding: 43px 40px;
		}
	}
	.services-lists {
		padding: 0px 38px;
		margin-top: 60px;
	}
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
	.services-lists {
		padding-left: 13px;
		padding-right: 13px;
		&__row {
			padding-left: 13px;
			padding-right: 13px;
		}
		&__text {
			font-size: 14px;
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
