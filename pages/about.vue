<template>
	<div>
		<Head>
			<Title>Команда</Title>
			<Meta
				name="description"
				content="Команда, креатив которой не знает границ. Наши дизайнерские решения
          покоряют сердца, а технические навыки позволяют реализовывать самые
          смелые идеи."
			/>
		</Head>
		<div class="content about-text">
			<div class="content__wrapper about-text__wrapper">
				<p class="about-text__title">Команда</p>
				<p class="about-text__text">
					Команда, креатив которой не знает границ. Наши дизайнерские решения покоряют сердца, а технические навыки позволяют реализовывать самые смелые идеи. Точный контроль, выстроенные бизнес-процессы и максимальная вовлечённость в каждый проект позволяют вовремя реализовывать задачи. Поверьте, в Ваш проект команда вложит максимум своих знаний и умений. а технические навыки позволяют 
				</p>
			</div>
		</div>
		<div class="content about">
			<div class="content__wrapper">
				<p class="about__title">CREATIVE</p>
				<div class="about__grid">
					<AboutCard v-for="(item, key) in cards" :key="key" :settings="item" :open="openAboutData" @openInfo="openInfo" />
				</div>
			</div>
		</div>
		<div class="content about-numbers">
			<div class="content__wrapper">
				<div class="about__numbers">
					<AboutNumbers :curtains="curtains" number="57" title="Завершенных проектов" />
					<AboutNumbers :curtains="curtains" number="45" title="Довольных клиентов" />
					<AboutNumbers :curtains="curtains" number="25" title="Общий опыт команды (лет)" />
					<AboutNumbers :curtains="curtains" number="5" title="лет успешной работы" />
				</div>
			</div>
		</div>
		<!-- <div class="content about-service">
			<div class="about-service__wrapper content__wrapper">
				<h2 class="about-service__title">Креативные Услуги</h2>
				<AboutService
					title="Разработка приложений"
					text="Работаем с ведущими платформами, в том числе <strong>Unity</strong>. Создаем приложения с использованием технологии <strong>AR (дополненная реальность)</strong>. Занимаемся мобильным программированием. Разрабатываем стильный <strong>дизайн приложений</strong>. Работаем как с <strong>iOS</strong>, так и с <strong>Android</strong>. Используем <strong>прототипирование</strong> для демонстрации промежуточного результата."
				/>
				<AboutService
					title="3D моделирование "
					text="Создаем <strong>3D модели</strong> для сайтов, каталогов и маркетплейсов. Занимаемся <strong>предметной визуализацией</strong> различной сложности. Выполняем высокоточную <strong>3D визуализацию</strong> объектов и <strong>интерьеров</strong>. Работаем с <strong>3D анимацией</strong>."
				/>
				<AboutService
					title="Графический дизайн"
					text="Разрабатываем <strong>логотипы</strong> и <strong>фирменный стиль</strong>. Работаем в направлении <strong>полиграфического дизайна</strong>, создаем рекламные <strong>баннеры и дизайн упаковки</strong>. Подготавливаем <strong>презентации</strong> с использованием <strong>инфографики</strong>. Прорабатываем <strong>дизайн сайтов</strong> и интуитивно понятные <strong>интерфейсы</strong> с точки зрения <strong>UI/UX</strong> дизайна."
				/>
				<AboutService
					title="Разработка сайтов"
					text="Предлагаем <strong>веб</strong> услуги <strong>под ключ</strong> с выполнением <strong>UI/UX дизайна</strong>. Разрабатываем <strong>информационные системы</strong> для организаций, <strong>веб-сервисы</strong> и <strong>промо-сайты</strong>."
				/>
				<AboutService
					title="Анимация"
					text="Создаем качественный визуальный контент с использованием <strong>3D анимации</strong>. Изготавливаем анимированные <strong>баннеры</strong>. Работаем с <strong>раскадровкой</strong>. Предлагаем услуги <strong>видеомонтажа</strong> и создания <strong>видеопрезентаций</strong> с использованием <strong>видеоинфографики</strong>."
				/>
			</div>
		</div> -->
		<div class="content about-infographic">
			<p class="background-text">Creative</p>
			<div class="content__wrapper">
				<div id="feather"></div>
				<!-- <canvas id="feather"></canvas> -->
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

import AboutNumbers from '@/components/About/Numbers.vue';
import AboutService from '@/components/About/Service.vue';
import AboutCard from '@/components/About/Card.vue';
import TitlePage from '@/components/Title.vue';

import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

export default {
	name: 'AboutPage',
	components: {
		AboutNumbers,
		AboutService,
		AboutCard,
		TitlePage,
	},
	provide() {
		return { Accordion: this.Accordion };
	},
	props: {
		curtains: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			Accordion: {
				count: 0,
				active: null,
			},
			close: '00',
			openAboutData: '00',
			likesCount: 0,
			cards: [
				{
					img: '01',
					title: 'Считает лайки',
					subtitle: '2 + 2 = 0',
					skills: [
						{
							title: 'Владение калькулятором',
							progress: '100',
						},
						{
							title: 'Порядочность',
							progress: '80',
						},
						{
							title: 'Ловля мышей',
							progress: '20',
						},
					],
				},
				{
					img: '02',
					title: 'Артем',
					subtitle: 'Хранитель идей',
					skills: [
						{
							title: 'Ловкость рук',
							progress: '80',
						},
						{
							title: 'Работа в Paint',
							progress: '10',
						},
						{
							title: 'Организация команды',
							progress: '95',
						},
					],
				},
				{
					img: '03',
					title: 'Симон',
					subtitle: 'Магистр надежных стратегий',
					skills: [
						{
							title: 'Однозадачность',
							progress: '20',
						},
						{
							title: 'Управление 150 детьми',
							progress: '95',
						},
						{
							title: 'Продажа снега эскимосам',
							progress: '80',
						},
					],
				},
				{
					img: '04',
					title: 'Вячеслав',
					subtitle: 'Р@зр@бот4иk',
					skills: [
						{
							title: 'Магия вне Хогвартса',
							progress: '100',
						},
						{
							title: 'Приготовление оливье',
							progress: '30',
						},
						{
							title: 'Умение уметь',
							progress: '80',
						},
					],
				},
				{
					img: '05',
					title: 'Ирина',
					subtitle: 'Штатный суетолог',
					skills: [
						{
							title: 'Владение фотошопом',
							progress: '90',
						},
						{
							title: 'Боевой настрой',
							progress: '70',
						},
						{
							title: 'Спокойствие',
							progress: '20',
						},
					],
				},
				{
					img: '06',
					title: 'Светлана',
					subtitle: 'Менеджер счастья',
					skills: [
						{
							title: 'Ведение переговоров',
							progress: '90',
						},
						{
							title: 'Выращивание микрозелени',
							progress: '40',
						},
						{
							title: 'Управление временем',
							progress: '70',
						},
					],
				},
				{
					img: '07',
					title: 'Евгения',
					subtitle: 'Важный гусь',
					skills: [
						{
							title: 'Обращение с пером',
							progress: '90',
						},
						{
							title: 'Мастер игр',
							progress: '80',
						},
						{
							title: 'Фея математики',
							progress: '10',
						},
					],
				},
				{
					img: '08',
					title: 'Дмитрий',
					subtitle: 'Mr. Пон',
					skills: [
						{
							title: 'Понимание',
							progress: '60',
						},
						{
							title: 'Знание трендов',
							progress: '90',
						},
						{
							title: 'Вождение автомобиля',
							progress: '20',
						},
					],
				},
			],
			clientId: '',
		};
	},
	async mounted() {
		await this.updateLikes();
	},

	methods: {
		async updateLikes() {
			this.sending = true;
			try {
				const { data } = await axios.post('/like-handler.php', {
					id: '',
					toggle: false,
				});
				this.likesCount = data.likesCount;
				this.cards[0].subtitle = `2 + 2 = ${this.likesCount || '0'}`;
			} catch (error) {
				console.log('не удалось обновить количество лайков', error);
			} finally {
				this.sending = false;
			}
		},
		open(number) {
			if (number === this.$data.close) this.$data.close = '00';
			else this.$data.close = number;
		},
		openInfo(number) {
			if (number === this.$data.openAboutData || number === '00') this.$data.openAboutData = '00';
			else this.$data.openAboutData = number;
		},
	},

	mounted() {
		let renderer, scene, camera;
		init();

    // never used, consider deletion
		function isSwiftShaderRenderer() {
			const canvas = document.getElementById('feather')
			const gl = canvas.getContext("webgl");
			const debug_ext = gl.getExtension("WEBGL_debug_renderer_info");
			if (debug_ext) {
					const renderer = gl.getParameter(debug_ext.UNMASKED_RENDERER_WEBGL);
					if (renderer.indexOf("SwiftShader") >= 0) {
							return false;
					}
			}
			return true;
	}

		async function init() {

			renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
			renderer.setPixelRatio( window.devicePixelRatio ); // min(devicePixelRatio, 2) for optimizations?
			renderer.setSize( window.innerWidth, window.innerHeight );
			// renderer.toneMapping = THREE.ACESFilmicToneMapping;
			// renderer.toneMappingExposure = 0.4;
			// renderer.outputEncoding = THREE.sRGBEncoding;

			document.getElementById('feather').appendChild( renderer.domElement );

			scene = new THREE.Scene();

			camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 10 );
			camera.position.set( 0.4, 0, 1.0 );

			const rgbeLoader = new RGBELoader().setPath( 'models/' );
			const gltfLoader = new GLTFLoader().setPath( 'models/' );

			// const PMREMGenerator = new THREE.PMREMGenerator( renderer );
			// PMREMGenerator.compileEquirectangularShader();

			const [ gltf ] = await Promise.all( [
				// rgbeLoader.loadAsync( 'studio_small_08_1k.hdr' ),
				// rgbeLoader.loadAsync( 'little_paris_eiffel_tower_1k.hdr' ),
				gltfLoader.loadAsync( 'model-ok.gltf' ),
			] );

			// let envMap = PMREMGenerator.fromEquirectangular( texture ).texture;
			// environment
			const textureLoader = new THREE.CubeTextureLoader();
			const texture = textureLoader.load([
					"models/px.png",
					"models/nx.png",
					"models/py.png",
					"models/ny.png",
					"models/pz.png",
					"models/nz.png",
			]); // INFO: png is heavy, consider jpg
      //TODO: btw - convert hdr to cubemap
			//texture.encoding = THREE.sRGBEncoding;
			scene.environment = texture;
			//scene.background = null;

      let theObject
      // you didnt find the object!
			scene.traverse(function (object) {
        //console.log(object)
				if (object.isObject3D === true) {
						//object.material.envMap = texture;
						//object.material.envMapIntensity = 12.5;
						//object.material.needsUpdate = true;
            console.log('founded object')
            console.log(object)
            theObject = object
				}
			});
			
			// let model = gltf.scene;
			// let child = gltf.scene.children[0];
			// model.scale.set(20, 20, 20);
			// model.position.set(0, 0.25, 0);
			// child.rotation.set(Math.PI / 2, -Math.PI / 8, 0);

			scene.add( gltf.scene );

			window.addEventListener( 'resize', onWindowResize );

      window.addEventListener('mousemove', (e) => {
          //console.log('x:' + e.pageX)
          //console.log('y:' + e.pageY)
      })

		}
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth, window.innerHeight );
		}
		function render() {
			renderer.render( scene, camera );
		}
    function animate(){
      render();
      window.requestAnimationFrame(animate)
    }
    animate()
	}
};
</script>

<style lang="scss" scoped>
:deep(.lil-gui .controller>.name) {
	color: white;
}
body {
	overflow-x: hidden;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
}
// .about-service {
// 	margin-top: 0;
// 	padding: 90px 93px 130px;
// 	display: flex;
// 	flex-direction: column;
// 	position: relative;
// 	z-index: 0;

// 	&__title {
// 		font-size: 60px;
// 		font-weight: 700;
// 		margin-bottom: 74px;
// 	}
// }
.background-text {
	font-size: 23vw;
	color: #f6f6f6;
	font-weight: 800;
	transform-origin: bottom left;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 32%);
	z-index: 0;
	text-transform: uppercase;
	pointer-events: none;
	white-space: nowrap;
}
.about-infographic {
	height: 740px;
	position: relative;
	#feather {
		position: absolute;
		top: -120px;
		left: 0;
		width: 100vw;
		height: 740px;
		// pointer-events: none;
	}
	.content__wrapper {
		position: static;
	}
}
// .about-video {
// 	position: relative;
// 	margin-top: 130px;
// 	padding-bottom: 200px;
// 	overflow: hidden;
// 	&__preview {
// 		width: 100%;
// 		height: auto;
// 	}
// }
.about-text {
	padding: 120px 93px 130px;
	margin: 0 auto;
	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	&__title {
		font-size: 60px;
		font-weight: 700;
	}
	&__text {
		font-size: 20px;
		font-weight: 500;
		line-height: 120%;
		text-align: justify;
	}
}
.about {
	padding: 0 93px 130px;
	margin: 0 auto !important;
	position: relative;
	z-index: 2;
	&__numbers {
		display: flex;
		justify-content: space-evenly;
		gap: 20px;
		flex-wrap: wrap;
	}
	&__grid {
		display: grid;
		gap: 60px 50px;
		justify-content: center;
		grid-template-columns: repeat(4, 215px);
	}
	&__title {
		font-size: clamp(230px, 16vw, 250px);
		line-height: clamp(230px, 16vw, 250px);
		color: #f6f6f6;
		font-weight: 900;
		position: absolute;
		top: 50%;
		left: 50%;
		white-space: nowrap;
		transform: translate(-50%, -50%);
	}
}
.about-numbers {
	padding: 52px 32px 70px;
	margin: 0 auto;
	background-color: #f9f9f9;
	position: relative;
	z-index: 0;
}
@media (max-width: 1200px) {
	.about-text {
		margin: 0 auto;
		flex-direction: column-reverse;
		&__column {
			max-width: 100%;
		}
		&__images {
			max-width: 100%;
			min-width: 0;
			width: 100%;
			justify-content: center;
		}
	}
	.about {
		&__grid {
			grid-template-columns: repeat(4, 162px);
			gap: 45px 37px;
		}
		&__title {
			font-size: clamp(150px, 20vw, 190px);
			line-height: clamp(150px, 20vw, 190px);
		}
	}
}
@media (max-width: 1024px) {
	.about {
		padding: 0 41px 90px;
	}
	// .about-service {
	// 	padding: 90px 41px 130px;
	// 	&__title {
	// 		font-size: 48px;
	// 		margin-bottom: 60px;
	// 	}
	// }
	.about-numbers {
		margin: 0 auto;
		padding: 43px 41px 60px;
	}
	.about-text {
		margin: 0 auto;
		padding: 90px 41px 60px;
		&__wrapper {
			gap: 20px;
		}
		&__title {
			font-size: 48px;
		}
		&__text {
			font-size: 18px;
		}
	}
	.about-video {
		margin-top: 100px;
		padding-bottom: 70px;
	}
}
@media (max-width: 960px) {
	.about {
		margin: 0 auto;
		&__grid {
			grid-template-columns: repeat(4, min(162px, calc(25% - 30px / 4)));
			gap: 40px 30px;
		}
	}
}
@media (max-width: 768px) {
	.about-numbers {
		margin: 0 auto;
		padding: 60px 41px;
	}
	.about-text {
		margin: 0 auto;
		padding: 46px 41px 60px;
		&__wrapper {
			gap: 25px;
		}
	}
	// .about-service {
	// 	padding: 60px 41px 130px;
	// }
	.about {
		padding: 0 41px 91px;
		&__title {
			writing-mode: vertical-lr;
			font-size: 280px;
			line-height: 280px;
		}
		&__numbers {
			gap: 50px 0px;
		}
		&__grid {
			gap: 50px 60px;
			grid-template-columns: repeat(2, 215px);
		}
	}
	.about-video {
		margin-top: 50px;
		padding-bottom: 50px;
	}
}
@media (max-width: 570px) {
	.about {
		&__grid {
			gap: 15px 13px;
		}
		&__title {
			writing-mode: vertical-lr;
			font-size: 170px;
			line-height: 170px;
		}
	}
}
@media (max-width: 425px) {
	.about-text {
		margin: 0 auto;
		padding: 43px 31px 50px;
		&__wrapper {
			gap: 20px;
		}
		&__text {
			font-size: 16px;
		}
	}
	.about-numbers {
		margin: 0 auto;
		padding: 37px 31px 50px;
	}
	.about {
		padding: 0 31px 51px;
		&__grid {
			grid-template-columns: repeat(2, 145px);
		}
	}
	// .about-service {
	// 	padding: 50px 31px;
	// 	&__title {
	// 		font-size: 32px;
	// 		margin-bottom: 30px;
	// 		white-space: nowrap;
	// 	}
	// 	&__wrapper {
	// 		max-width: 100%;
	// 		width: 100%;
	// 	}
	// }
	.about-video {
		margin-top: 40px;
		padding-bottom: 40px;
	}
}
@media (max-width: 394px) {
	.about {
		&__numbers {
			gap: 38px 0px;
		}
	}
	.about-numbers {
		margin: 0 auto;
		padding: 36px 31px 56px;
	}
}
</style>
