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
		<div class="content about">
			<div class="content__wrapper">
				<!-- <p class="about__title">CREATIVE</p> -->
				<div class="about__grid">
					<AboutCard v-for="(item, key) in cards" :key="key" :settings="item" :open="openAboutData" @openInfo="openInfo" />
					<p class="about__back-title">К</p>
					<p class="about__back-title">О</p>
					<p class="about__back-title">М</p>
					<p class="about__back-title">А</p>
					<p class="about__back-title">Н</p>
					<p class="about__back-title">ДА</p>
					<p class="about__decor-text">
						// DESIGN
						<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x CREATIVE
					</p>
				</div>
			</div>
			<img src="/img/about/feather.png" alt="" class="about__decor about__decor--1">
			<img src="/img/about/feather.png" alt="" class="about__decor about__decor--2">
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
		<div class="about-text__wrapper">
			<div class="about-text__decor">
				<svg width="1016" height="267" viewBox="0 0 1016 267" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M137.882 267H76.3653V59.3333H0V0H214.247V59.3333H137.882V267Z" fill="#FBFBFB"/>
					<path d="M244.11 0H435.024V59.3333H305.627V101.714H424.417V161.048H305.627V207.667H439.266V267H244.11V0Z" fill="#FBFBFB"/>
					<path d="M610.906 163.167L581.208 74.1667L551.511 163.167H610.906ZM534.541 216.143L517.571 267H453.933L549.389 0H613.027L708.484 267H644.846L627.876 216.143H534.541Z" fill="#FBFBFB"/>
					<path d="M960.847 0H1016V267H954.484V133.5L892.967 267H854.784L793.268 133.5V267H731.751V0H786.904L873.876 188.595L960.847 0Z" fill="#FBFBFB"/>
				</svg>
			</div>
			<div class="content about-text">
				<div class="content__wrapper">
					<div class="about-text__col">
						<p class="about-text__title">«Как для себя»</p>
						<p class="about-text__text">
							Даже если вы не разбираетесь в создании дизайна, написании продающих текстов или коде, поможем разобраться и разложить задачу на этапы.
							<br>
							<br>
							Наша цель — выслушать, максимально понять желания клиента, вникнуть в суть и дать варианты готовых решений. 
							<br>
							<br>
							<br>
							<span>//</span> Каждая деталь имеет значение
						</p>
					</div>
					<div class="about-text__grid">
						<AboutNumbers :curtains="curtains" number="120" title="Довольных клиентов" class="about-text__number" />
						<AboutNumbers :curtains="curtains" number="8" title="Экспертов в команде" class="about-text__number" />
						<AboutNumbers :curtains="curtains" number="257" title="Завершенных проектов" class="about-text__number" />
						<AboutNumbers :curtains="curtains" number="25" title="Общий опыт команды (лет)" class="about-text__number" />
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="content about-infographic">
			<p class="background-text">Creative</p>
			<div class="content__wrapper">
				<AboutNumbers :curtains="curtains" number="45" title="Довольных клиентов" class="about-infographic__number" />
				<AboutNumbers :curtains="curtains" number="257" title="Завершенных проектов" class="about-infographic__number" />
				<AboutNumbers :curtains="curtains" number="5" title="лет успешной работы" class="about-infographic__number" />
				<AboutNumbers :curtains="curtains" number="25" title="Общий опыт команды (лет)" class="about-infographic__number" />
				<div id="feather"></div>
			</div>
		</div> -->
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
		model: {
			type: Object,
		}
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
					img: '02',
					title: 'Артем',
					subtitle: 'Хранитель идей',
				},
				{
					img: '05',
					title: 'Ирина',
					subtitle: 'Штатный суетолог',
				},
				{
					img: '07',
					title: 'Евгения',
					subtitle: 'Важный гусь',
				},
				{
					img: '03',
					title: 'Симон',
					subtitle: 'Магистр надежных стратегий',
				},
				{
					img: '04',
					title: 'Вячеслав',
					subtitle: 'Р@зр@бот4иk',
				},
				{
					img: '06',
					title: 'Светлана',
					subtitle: 'Менеджер счастья',
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
		let renderer, scene, camera, gltf, texture;
		console.log('asd',this.$props.model)
		setTimeout(() => {
			console.log('asd',this.$props.model)
			gltf = this.$props.model.gltf
			texture = this.$props.model.texture
			// init();
		}, 1000)
		
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
		setTimeout(() => {
			// animate()
		}, 1000)
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
.about-text {
	padding: 120px 80px;
	margin: 0 auto;
	.content__wrapper {
		max-width: 1328px;
		display: flex;
		justify-content: space-between;
		gap: 70px 32px;
		flex-wrap: wrap;
	}
	&__grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		max-width: 485px;
		width: 100%;
		gap: 44px 0;
	}
	&__number {
		:deep(.numbers__subtitle) {
			text-align: left;
		}
	}
	&__decor {
		position: absolute;
		bottom: 0;
		width: 110vw;
		left: 50%;
		bottom: -40%;
		height: auto;
		transform: translate(-50%, 0) rotate(-15deg);
		svg {
			height: auto;
			width: inherit;
		}
	}
	&__wrapper {
		position: relative;
		overflow: hidden;
	}
	&__col {
		max-width: 500px;
		width: 100%;
	}
	&__title {
		font-size: 50px;
		font-weight: 700;
	}
	&__text {
		font-size: 20px;
		font-weight: 500;
		margin-top: 30px;
		span {
			color: #0181C8;
		}
	}
}
.about {
	padding: 0 93px 38px;
	margin: 0 auto !important;
	position: relative;
	z-index: 2;
	margin-top: 53px !important;
	&__numbers {
		display: flex;
		justify-content: space-evenly;
		gap: 20px;
		flex-wrap: wrap;
	}
	&__decor {
		position: absolute;
		&--1 {
			width: 404px;
			height: 133px;
			transform: scaleY(-1) rotate(42deg);
			left: -142px;
			bottom: -60px;
		}
		&--2 {
			top: -50px;
			right: -347px;
			transform: scale(-1) rotate(45deg);
		}
	}
	&__decor-text {
		position: absolute;
		right: 50px;
		top: 50%;
		font-size: 20px;
		font-weight: 700;
		color: #c1c1c1;
		transform: translate(0, -50%);
	}
	&__grid {
		position: relative;
		height: 531px;
		max-width: 1168px;
		width: 100%;
		margin: 0 auto;
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
	&__back-title {
		position: absolute;
		font-size: 200px;
		font-weight: 700;
		top: 118px;
		color: #000;
		z-index: -1;
		&:nth-of-type(1) {
			left: 10.70%;
			z-index: 1;
		}
		&:nth-of-type(2) {
			left: 29.53%;
		}
		&:nth-of-type(3) {
			left: 42.97%;
		}
		&:nth-of-type(4) {
			left: 56.84%;
		}
		&:nth-of-type(5) {
			top: 289px;
			left: 37.58%;
		}
		&:nth-of-type(6) {
			top: 289px;
			left: 78.93%;
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

@media (max-width: 1200px) {
	.about-text {
		padding-top: 70px;
		padding-bottom: 70px;
		.content__wrapper {
			justify-content: center;
		}
		&__col {
			max-width: 100%;
		}
		&__title {
			font-size: 35px;
		}
		&__text {
			font-size: 18px;
		}
		&__decor {
			bottom: -10%;
		}
	}
	.about {
		&__grid {
			height: 403px;
		}
		&__title {
			font-size: clamp(150px, 20vw, 190px);
			line-height: clamp(150px, 20vw, 190px);
		}
		&__back-title {
			font-size: 152px;
			top: 90px;
			z-index: -1;
			&:nth-of-type(1) {
				left: 9.25%;
			}
			&:nth-of-type(2) {
				left: 28.93%;
			}
			&:nth-of-type(3) {
				left: 42.82%;
			}
			&:nth-of-type(4) {
				left: 57.17%;
			}
			&:nth-of-type(5) {
				top: 222px;
				left: 37.26%;
			}
			&:nth-of-type(6) {
				top: 222px;
				left: 80.09%;
			}
		}
		&__decor-text {
			font-size: 18px;
			right: 8px;
		}
		&__decor {
			&--1 {
				width: 448px;
				height: 147px;
				left: -176px;
				bottom: -150px;
				transform: scaleY(-1) rotate(52deg);
			}
			&--2 {
				width: 654px;
				height: 215px;
				right: -244px;
				top: -157px;
				transform: scale(-1) rotate(42deg);
			}
		}
	}
}
@media (max-width: 1024px) {
	.about {
		padding: 0 41px 90px;
	}
	.about-logos {
		&__logo {
			padding: 47px 37px;
		}
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
	.about-text {
		&__grid {
			max-width: 466px;
		}
		&__decor {
			bottom: 0%;
		}
	}
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
			max-width: 571px;
			height: 700px;
		}
		&__back-title {
			font-size: 154px;
			top: 90px;
			&:nth-of-type(1) {
				left: 23.82%;
			}
			&:nth-of-type(2) {
				left: 53.59%;
			}
			&:nth-of-type(3) {
				left: 38.53%;
				top: 220px;
			}
			&:nth-of-type(4) {
				left: 60.42%;
				top: 220px;
			}
			&:nth-of-type(5) {
				top: 346px;
				left: 30.47%;
			}
			&:nth-of-type(6) {
				top: 506px;
				left: 48.34%;
			}
		}
		&__decor-text {
			display: none;
		}
		&__decor {
			&--1 {
				width: 962px;
				height: 317px;
				right: unset;
				left: -437px;
				top: -32px;
				transform: scale(-1) rotate(84deg);
			}
			&--2 {
				width: 404px;
				height: 133px;
				transform: scaleX(-1) rotate(-112deg);
				top: 468px;
				right: -148px;
			}
		}
	}
	.about-logos {
		&__logo {
			padding: 43px 40px;
		}
	}
}
@media (max-width: 570px) {
	.about-text {
		padding: 60px 31px;
		&__title {
			font-size: 25px;
		}
		&__text {
			font-size: 16px;
			margin-top: 40px;
		}
		&__grid {
			max-width: 262px;
		}
	}
	.about {
		&__grid {
			max-width: 300px;
			height: 545px;
		}
		&__title {
			writing-mode: vertical-lr;
			font-size: 170px;
			line-height: 170px;
		}
		&__back-title {
			font-size: 112px;
			top: 90px;
			&:nth-of-type(1) {
				left: 30.33%;
			}
			&:nth-of-type(2) {
				left: 69.33%;
			}
			&:nth-of-type(3) {
				left: 4.33%;
				top: 183px;
			}
			&:nth-of-type(4) {
				left: 34.67%;
				top: 183px;
				z-index: 1;
			}
			&:nth-of-type(5) {
				top: 290px;
				left: 36.33%;
			}
			&:nth-of-type(6) {
				top: 406px;
				left: 45.33%;
			}
		}
		&__decor {
			display: none;
		}
	}
}
@media (max-width: 425px) {
	.about {
		padding: 0 31px 51px;
		&__grid {
			grid-template-columns: repeat(2, 145px);
		}
	}
}
@media (max-width: 394px) {
	.about {
		&__numbers {
			gap: 38px 0px;
		}
	}
}
</style>
