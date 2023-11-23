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
		<div class="content about-logos">
			<div class="content__wrapper">
				<div class="about__logos">
					<img src="/img/about/energotek.svg" alt="energotek">
					<img src="/img/about/garilla.svg" alt="garilla">
					<img src="/img/about/Genezis.svg" alt="Genezis">
					<img src="/img/about/H_one.svg" alt="H_one">
					<img src="/img/about/HARO.svg" alt="HARO">
					<img src="/img/about/marusya.svg" alt="marusya">
					<img src="/img/about/Mobdebut.svg" alt="Mobdebut">
					<img src="/img/about/MoltenGrass.svg" alt="MoltenGrass">
					<img src="/img/about/Motorika.svg" alt="Motorika">
					<img src="/img/about/Muza_Amanita.svg" alt="Muza_Amanita">
					<img src="/img/about/OceanView.svg" alt="OceanView">
					<img src="/img/about/OwnWifi.svg" alt="OwnWifi">
					<img src="/img/about/PolarBear.svg" alt="PolarBear">
					<img src="/img/about/PrimeTravel.svg" alt="PrimeTravel">
					<img src="/img/about/ProZapchast.svg" alt="ProZapchast">
					<img src="/img/about/SmartsKvantelekom.svg" alt="SmartsKvantelekom">
					<img src="/img/about/SpisyNote.svg" alt="SpisyNote">
					<img src="/img/about/Tomi_Ai.svg" alt="Tomi_Ai">
					<img src="/img/about/Uni.svg" alt="Uni">
					<img src="/img/about/ximtex.svg" alt="ximtex">
					<img src="/img/about/Ykigassen.svg" alt="Ykigassen">
					<img src="/img/about/Yrievskoe_Podvorie.svg" alt="Yrievskoe_Podvorie">
					<img src="/img/about/ZolotoAltaya.svg" alt="ZolotoAltaya">
					<img src="/img/about/energotek.svg" alt="energotek">
					<img src="/img/about/garilla.svg" alt="garilla">
					<img src="/img/about/Genezis.svg" alt="Genezis">
					<img src="/img/about/H_one.svg" alt="H_one">
					<img src="/img/about/HARO.svg" alt="HARO">
					<img src="/img/about/marusya.svg" alt="marusya">
					<img src="/img/about/Mobdebut.svg" alt="Mobdebut">
				</div>
				<!-- <div class="about__numbers">
					
				</div> -->
			</div>
		</div>
		<div class="content about-infographic">
			<p class="background-text">Creative</p>
			<div class="content__wrapper">
				<AboutNumbers :curtains="curtains" number="45" title="Довольных клиентов" class="about-infographic__number" />
				<AboutNumbers :curtains="curtains" number="257" title="Завершенных проектов" class="about-infographic__number" />
				<AboutNumbers :curtains="curtains" number="5" title="лет успешной работы" class="about-infographic__number" />
				<AboutNumbers :curtains="curtains" number="25" title="Общий опыт команды (лет)" class="about-infographic__number" />
				<div id="feather"></div>
				<!-- <canvas id="feather"></canvas> -->
			</div>
		</div>
		<Footer :case="false"/>
	</div>
</template>

<script>
import axios from 'axios';
import gsap from 'gsap'

import Footer from '../components/Cases/Footer.vue';
import AboutNumbers from '@/components/About/Numbers.vue';
import AboutService from '@/components/About/Service.vue';
import AboutCard from '@/components/About/Card.vue';
import TitlePage from '@/components/Title.vue';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default {
	name: 'AboutPage',
	components: {
    AboutNumbers,
    AboutService,
    AboutCard,
    TitlePage,
    Footer,
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
			camera.position.set( 0, 0, 1.0 );

			// const rgbeLoader = new RGBELoader().setPath( 'models/' );
			const gltfLoader = new GLTFLoader().setPath( '/models/' );

			// const pmremGenerator = new THREE.PMREMGenerator( renderer );
			// PMREMGenerator.compileEquirectangularShader();

			const gltf = await gltfLoader.loadAsync( 'pero_by_agamurian.glb' )

      // // another method of getting envMap 
      //const envMap = await rgbeLoader.loadAsync( 'studio_small_08_1k.hdr' )
      //const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 1024 ).fromEquirectangularTexture( renderer, envMap );
      //scene.environment = cubeRenderTarget.texture;

			const textureLoader = new THREE.CubeTextureLoader();
			const texture = textureLoader.load([
					"/models/cubemap/0001.jpg",
					"/models/cubemap/0002.jpg",
					"/models/cubemap/0003.jpg",
					"/models/cubemap/0004.jpg",
					"/models/cubemap/0005.jpg",
					"/models/cubemap/0006.jpg",
			]);
			texture.encoding = THREE.sRGBEncoding;
			scene.environment = texture;
      
      //light
      const light = new THREE.DirectionalLight('#88aaff', 100)
      light.position.set(5.25, 3, 2.25)
			scene.add( light );

      const light2 = new THREE.DirectionalLight('#ff88aa', 20)
      light2.position.set(3.25, 5, 3.25)
			scene.add( light );

			scene.add( gltf.scene );
      // so basicly traverse was before adding gltf
      // omg how long i searched for that
      let theObject
			scene.traverse(function (object) {
				if (object instanceof THREE.Mesh) {
            console.log(object)
						object.material.envMapIntensity = 2.0;
						object.material.needsUpdate = true;
            object.material
            theObject = object
				}
			});

			window.addEventListener( 'resize', onWindowResize );

      let prevX = 0
      let prevY = 0
			theObject.rotationZ = Math.PI * -0.13
      const deBounceDelta = 5
      window.addEventListener('mousemove', (e) => {
        if ( Math.abs(e.x - prevX) > deBounceDelta || Math.abs(e.y - prevY) > deBounceDelta ) {
          prevX = e.x
          prevY = e.y
          gsap.to(
              theObject.rotation,
             {           
                  duration: 0.1,
                  ease: 'linear',
                  x: (e.y - window.innerHeight/2)/1000,
                  y: (e.x - window.innerWidth/2)/1000,
                  z: Math.PI * -0.13
              }
          )
        }
          
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
		max-height: calc(100% + 120px) !important;
		height: calc(100% + 120px) !important;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: -120px;
	// 	position: absolute;
	// 	top: 50%;
	// 	left: 50%;
	// 	transform: translate(-50%, -50%);
	// 	width: 100vw;
	// 	height: 740px;
	// 	// pointer-events: none;
		:deep(canvas) {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	.content__wrapper {
		height: 100%;
	}
	&__number {
		position: absolute;
		&:nth-child(1) {
			left: 230px;
			top: 50px;
		}
		&:nth-child(2) {
			left: 75px;
			bottom: 60px;
		}
		&:nth-child(3) {
			right: 95px;
			top: 50px;
		}
		&:nth-child(4) {
			right: 200px;
			bottom: 60px;
		}
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
	padding: 0 93px 38px;
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
	&__logos {
		display: flex;
		gap: 40px;
		filter: grayscale(1);
		animation: logos 120s infinite linear;
		img {
			user-select: none;
			pointer-events: none;
		}
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

@keyframes logos {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-361.3%);
	}
}
.about-numbers {
	padding: 52px 32px 70px;
	margin: 0 auto;
	background-color: #f9f9f9;
	position: relative;
	z-index: 0;
}
.about-logos {
	width: 100vw;
	background-color: #F9F9F9;
	max-width: 100vw;
	overflow: auto;
	padding: 37px;
	.content__wrapper {
		max-width: 100%;
	}
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
