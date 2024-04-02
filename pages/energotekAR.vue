<template>
  <div>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <div class="energotekar__img">
      <GalleryTemplate :settings="gallery[0]" />
    </div>
    <TitleTemplate :settings="titles[1]" />
    <GalleryCardTemplate :settings="gallery[1]" />
    <GalleryTemplate :settings="gallery[2]" />
    <TitleTemplate :settings="titles[2]" />
    <GalleryCardTemplate :settings="gallery[3]" />
    <TitleTemplate :settings="titles[3]" />
    <div class="apps">
      <div class="apps__wrapper">
        <picture>
          <source
            media="(max-width: 768px)"
            srcset="/img/energotekAR/Mobile/energotekAR-page-img-06.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 769px)"
            srcset="/img/energotekAR/PC/energotekAR-page-img-06.webp"
            type="image/webp"
          />
          <source
            srcset="/img/energotekAR/JPG/energotekAR-page-img-06.png"
            type="image/png"
          />
          <img
            srcset="/img/energotekAR/PC/energotekAR-page-img-06.webp"
            alt=""
            type="image/webp"
          />
        </picture>
        <div class="apps__row">
          <a
            href="https://play.google.com/store/apps/details?id=com.CYBERTi.EnergotekAR&hl=ru&gl=US"
          >
            <picture>
              <source
                media="(max-width: 768px)"
                srcset="/img/energotekAR/Mobile/energotekAR-page-img-07.webp"
                type="image/webp"
              />
              <source
                media="(min-width: 769px)"
                srcset="/img/energotekAR/PC/energotekAR-page-img-07.webp"
                type="image/webp"
              />
              <source
                srcset="/img/energotekAR/JPG/energotekAR-page-img-07.png"
                type="image/png"
              />
              <img
                srcset="/img/energotekAR/PC/energotekAR-page-img-07.webp"
                alt="GooglePlay"
                type="image/webp"
              />
            </picture>
          </a>
          <a href="https://apps.apple.com/ru/app/energotear/id1614880039">
            <picture>
              <source
                media="(max-width: 768px)"
                srcset="/img/energotekAR/Mobile/energotekAR-page-img-08.webp"
                type="image/webp"
              />
              <source
                media="(min-width: 769px)"
                srcset="/img/energotekAR/PC/energotekAR-page-img-08.webp"
                type="image/webp"
              />
              <source
                srcset="/img/energotekAR/JPG/energotekAR-page-img-08.png"
                type="image/png"
              />
              <img
                srcset="/img/energotekAR/PC/energotekAR-page-img-08.webp"
                alt="GooglePlay"
                type="image/webp"
              />
            </picture>
          </a>
        </div>
      </div>
    </div>
    <GalleryTemplate :settings="gallery[4]" />
    <GalleryTemplate :settings="gallery[5]" />
    <!-- <GalleryTemplate :settings="gallery[1]" />
		<GalleryTemplate :settings="gallery[0]" /> -->
    <!-- // <LikeTemplate :title="intro.img[0]" /> -->
    <FooterTemplate :settings="footer" />
  </div>
</template>

<script>
import GalleryTemplate from '@/components/Cases/Gallery.vue';
import GalleryCardTemplate from '@/components/Cases/GalleryCard.vue';
import LikeTemplate from '@/components/Cases/Like.vue';
import FooterTemplate from '@/components/Cases/Footer.vue';
import IntroTemplate from '@/components/Cases/Intro.vue';
import TaskTemplate from '@/components/Cases/Task.vue';
import TitleTemplate from '@/components/Cases/TitleTemplate.vue';

export default {
  name: 'EnergotekARPage',
  components: {
    GalleryCardTemplate,
    GalleryTemplate,
    LikeTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate,
    TitleTemplate,
  },
  data() {
    return {
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Наш клиент преследовал две главные цели:<br/><br/><span class="title__text--defis">- систематизировать каталог продукции в мобильном приложении</span><br/><span class="title__text--defis">- внести элемент «функционального развлечения» в этот самый каталог</span><br/><br/>С первой целью все понятно – вместо того, чтобы 100500 раз посещать сайт компании, заказчики один раз скачают приложение и будут смотреть все там. А у потенциальных покупателей, которые посетят выставку и уйдут оттуда с приложением, будет возможность в любой момент посмотреть продукцию нашего клиента. Информация не потеряется и не отправится в макулатуру – в отличие от каталогов конкурентов.<br/><br/>А что касается второй цели – это как раз про то, как отличиться от конкурентов. Про собственную фишку, которая вызовет интерес и привлечет внимание. Ну и заодно будет полезна для покупателей.',
          padding: 'task',
        },
        title: 'Энерготэк',
      },
      intro: {
        icon: 'energotekAR/PC/energotekAR-page-icon.svg',
        logo: 'energotekAR/PC/energotekAR-page-logo.svg',
        img: ['energotekAR', 'energotekAR-page-intro'],
        title: 'Энерготек',
        description:
          '— разработчик и производитель полимерных систем для прокладки и защиты кабельных линий. Наши решения повышают надежность работы линий электропередачи и безопасность обслуживающего персонала, сокращают расходы в процессе эксплуатации. ',
        tags: 'Приложение/ 3D моделирование / Публикация',
      },
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Скелет',
            fontSize: 'simple',
          },
          text: 'Первым этапом наша команда составила слекет приложения, который в дальнейшем будет реализовываться и обсуждаться.<br><br>Необходимо было продумать, как открывать модели с камеры (трекинг) и отдельно в приложении для стандартного просмотра. ',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 2 <span class="title__title-defis">-</span> Создание 3D моделей',
            fontSize: 'simple',
          },
          text: 'Для приложения было подготовлено 44 модели, поработали с сеткой моделей и текстурами. Для максимальной производительности все модели выдерживали в значениях до 100.000 трисов. Покажем некоторые из них:',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 3 <span class="title__title-defis">-</span> Визуальная часть',
            fontSize: 'simple',
          },
          text: 'Трекинг по картинке переводит цветное изображение в черно-белое. А некоторые наши объекты отличались друг от друга только цветом или полосками. Как итог, на выходе мы получали одинаковые муфты или уплотнители, которые на самом деле не одинаковые.<br><br>Так мы поняли, что трекинг по картинке нам не подойдет.<br>Поэтому решили – будем использовать марки.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'Все поставленные цели достигнуты, и вместе с крутым приложением наш клиент получил:<br><br>· Возможность добавить в свою маркетинговую стратегию продвижения и популяризации своей продукции игровые механики дополненной реальности<br>· Возможность выделяться на фоне конкурентов на выставках<br>· Возможность презентовать заказчикам свою продукцию в наиболее удобной форме.<br><br>В перспективе все эти возможности превращаются в повышение лояльности покупателей и увеличение продаж.',
          padding: 'simple',
        },
      ],
      gallery: [
        {
          type: 'OneImage',
          images: [{ url: ['energotekAR', '/energotekAR-page-img-01'] }],
        },
        {
          type: 'OneImage',
          shadow: false,
          images: [{ url: ['energotekAR', '/energotekAR-page-img-02'] }],
        },
        {
          type: 'TwoImage',
          padding: '24px 36px',
          gap: '24px 73',
          images: [
            { url: ['energotekAR', '/energotekAR-page-img-03'] },
            { url: ['energotekAR', '/energotekAR-page-img-04'] },
          ],
        },
        {
          type: 'OneImage',
          shadow: false,
          images: [{ url: ['energotekAR', '/energotekAR-page-img-05'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['energotekAR', '/energotekAR-page-img-09'] }],
        },
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['energotekAR', '/energotekAR-page-img-10'] },
            { url: ['energotekAR', '/energotekAR-page-img-11'] },
          ],
        },
      ],
      footer: {
        title: 'WB Alliance',
        next: 'wballiance',
        background: ['wballiance', 'wballiance-page-intro'],
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.energotekar
	&__img
		max-width: 1175px
		width: 100%
		margin: 0 auto
		padding: 46px 30px
		.gallery
			width: 100%
.apps
	background: #F9F9F9
	padding: 66px 38px
	img
		max-width: 100%
		max-height: 90px
		object-fit: contain
	&__wrapper
		max-width: 800px
		display: flex
		gap: 32px 64px
		width: 100%
		margin: 0 auto
		justify-content: center
		flex-wrap: wrap

	&__row
		display: flex
		gap: 16px
		justify-content: center
		flex-wrap: wrap
		img
			max-width: 100%
			height: 100%


.models-img
	max-width: 1920px
	padding: 0px 50px 137px
	margin: 0 auto
	overflow: auto
	img
		position: relative
		transition: 10s linear
	&::-webkit-scrollbar
		height: 0
		width: 0

.models
	max-width: 1370px
	width: 100%
	margin: 60px auto 124px
	&__title
		max-width: 1370px
		padding: 0px 50px
		display: flex
		flex-direction: column
		span:last-child
			font-size: 20px
			font-weight: 500
	&__number
		font-size: 100px
		font-weight: 500
	&__subtitle
		max-width: 1370px
		padding: 0px 50px
		margin-top: 24px
		font-size: 20px
		strong
			font-weight: 700



.wrapper
	max-width: 1370px
	width: 100%
	padding: 0px 50px
	margin: 0 auto

@media (max-width: 1024px)
	.models
		max-width: 828px
		width: 100%
		margin: 24px auto 120px
		&__title
			padding: 0px 20px
			font-size: 80px
			span:last-child
				font-size: 18px
				line-height: 22px
		&__subtitle
			padding: 0px 20px
			margin-top: 22px
			line-height: 22px
			font-size: 18px
	.material
		&__text
			max-width: 788px
			width: 100%
			margin: 100px auto 28px
			font-size: 18px
			line-height: 22px
	.additional-material
		margin: 75px auto
		max-width: 788px
		width: 100%
		&__title
			padding: 0px 20px
			font-size:38px
		&__gallery
			padding: 40px 20px
			&--column
				max-width: 788px
				width: 100%

@media (max-width: 768px)

	.additional-material
		margin: 20px auto 40px
		&__title
			margin: 0 auto
			padding: 0 16px
			max-width: 642px
			font-size: 35px
		&__img
			max-width: 540px
			margin: 0 auto
		&__gallery
			padding: 32px
			img
				border-radius: 10px
			&--column
				gap: 10px
			&--row
				flex-direction: column
				gap: 10px
	.material
		&__text
			font-size: 18px
			margin: 60px auto 17px
			max-width: 642px
			padding: 0px 16px
	.models
		padding: 0px 36px
		margin: 24px auto
		max-width: 642px
		padding: 0px 16px
		&__title
			max-width: 1370px
			padding: 0px
			span:last-child
				font-size: 18px
		&__subtitle
			padding: 0px
			font-size: 18px
	.models-img
		overflow: auto
		img
			height: 454px
	.wrapper
		padding: 0px 16px
@media (max-width: 425px)
	.wrapper
		width: 100%
		padding: 0
	.additional-material
		&__title
			padding: 0px 44px
			font-size: 30px
		&__gallery
			padding: 32px 44px
	.material
		&__text
			padding: 0px 44px
			font-size: 16px
	.models
		padding: 0px 44px
		&__number
			font-size: 50px
		&__subtitle
			font-size: 16px
		&__title
			span:last-child
				font-size: 16px
</style>
