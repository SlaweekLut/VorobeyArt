<template>
  <div>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <TitleTemplate :settings="titles[1]" />
    <div class="examples">
      <div class="examples__wrapper">
        <div class="examples__img">
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="/img/motorika/Mobile/motorika-page-img-01.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              srcset="/img/motorika/PC/motorika-page-img-01.webp"
              type="image/webp"
            />
            <source
              srcset="/img/motorika/JPG/motorika-page-img-01.jpg"
              type="image/jpeg"
            />
            <img
              srcset="/img/motorika/PC/motorika-page-img-01.webp"
              alt="Пример"
              type="image/webp"
            />
          </picture>
        </div>
        <div class="examples__img">
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="/img/motorika/Mobile/motorika-page-img-02.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              srcset="/img/motorika/PC/motorika-page-img-02.webp"
              type="image/webp"
            />
            <source
              srcset="/img/motorika/JPG/motorika-page-img-02.jpg"
              type="image/jpeg"
            />
            <img
              srcset="/img/motorika/PC/motorika-page-img-02.webp"
              alt="Пример"
              type="image/webp"
            />
          </picture>
        </div>
        <div class="examples__img">
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="/img/motorika/Mobile/motorika-page-img-03.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              srcset="/img/motorika/PC/motorika-page-img-03.webp"
              type="image/webp"
            />
            <source
              srcset="/img/motorika/JPG/motorika-page-img-03.jpg"
              type="image/jpeg"
            />
            <img
              srcset="/img/motorika/PC/motorika-page-img-03.webp"
              alt="Пример"
              type="image/webp"
            />
          </picture>
        </div>
        <div class="examples__img">
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="/img/motorika/Mobile/motorika-page-img-04.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              srcset="/img/motorika/PC/motorika-page-img-04.webp"
              type="image/webp"
            />
            <source
              srcset="/img/motorika/JPG/motorika-page-img-04.jpg"
              type="image/jpeg"
            />
            <img
              srcset="/img/motorika/PC/motorika-page-img-04.webp"
              alt="Пример"
              type="image/webp"
            />
          </picture>
        </div>
        <div class="examples__img">
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="/img/motorika/Mobile/motorika-page-img-05.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              srcset="/img/motorika/PC/motorika-page-img-05.webp"
              type="image/webp"
            />
            <source
              srcset="/img/motorika/JPG/motorika-page-img-05.jpg"
              type="image/jpeg"
            />
            <img
              srcset="/img/motorika/PC/motorika-page-img-05.webp"
              alt="Пример"
              type="image/webp"
            />
          </picture>
        </div>
        <div class="examples__img">
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="/img/motorika/Mobile/motorika-page-img-06.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              srcset="/img/motorika/PC/motorika-page-img-06.webp"
              type="image/webp"
            />
            <source
              srcset="/img/motorika/JPG/motorika-page-img-06.jpg"
              type="image/jpeg"
            />
            <img
              srcset="/img/motorika/PC/motorika-page-img-06.webp"
              alt="Пример"
              type="image/webp"
            />
          </picture>
        </div>
        <div class="examples__img">
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="/img/motorika/Mobile/motorika-page-img-07.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              srcset="/img/motorika/PC/motorika-page-img-07.webp"
              type="image/webp"
            />
            <source
              srcset="/img/motorika/JPG/motorika-page-img-07.jpg"
              type="image/jpeg"
            />
            <img
              srcset="/img/motorika/PC/motorika-page-img-07.webp"
              alt="Пример"
              type="image/webp"
            />
          </picture>
        </div>
        <div class="examples__img">
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="/img/motorika/Mobile/motorika-page-img-08.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 769px)"
              srcset="/img/motorika/PC/motorika-page-img-08.webp"
              type="image/webp"
            />
            <source
              srcset="/img/motorika/JPG/motorika-page-img-08.jpg"
              type="image/jpeg"
            />
            <img
              srcset="/img/motorika/PC/motorika-page-img-08.webp"
              alt="Пример"
              type="image/webp"
            />
          </picture>
        </div>
      </div>
    </div>
    <TitleTemplate :settings="titles[2]" />
    <GalleryTemplate :settings="gallery[0]" />
    <GalleryTemplate :settings="gallery[1]" />
    <GalleryTemplate :settings="gallery[2]" />
    <TitleTemplate :settings="titles[3]" />
    <GalleryTemplate :settings="gallery[3]" />
    <!-- // <LikeTemplate :title="intro.img[0]" /> -->
    <FooterTemplate :settings="footer" />
  </div>
</template>

<script>
import GalleryTemplate from '@/components/Cases/Gallery.vue';
import LikeTemplate from '@/components/Cases/Like.vue';
import TitleTemplate from '@/components/Cases/TitleTemplate.vue';
import FooterTemplate from '@/components/Cases/Footer.vue';
import IntroTemplate from '@/components/Cases/Intro.vue';
import TaskTemplate from '@/components/Cases/Task.vue';

export default {
  name: 'MotorikaPage',
  components: {
    GalleryTemplate,
    LikeTemplate,
    TitleTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate,
  },
  data() {
    return {
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'ТЗ было поставлено так: <br><br>“Создайте принт, который отражает эстетику будущего, технологий, киберпанка. Если вы поймали поток и сотворили больше одного принта, обязательно дайте нам возможность увидеть ваше творчество! Вы можете предложить до 3 работ”',
          padding: 'task',
        },
        title: 'Моторика',
      },
      intro: {
        icon: 'motorika/PC/motorika-page-icon.svg',
        logo: 'motorika/PC/motorika-page-logo.svg',
        img: ['motorika', 'motorika-page-intro'],
        title: 'Моторика',
        description:
          ' — компания-разработчик современных кибер-рук. Здесь создаются технологии будущего, а люди обеспечиваются крутыми функциональными кибер-гаджетами. <br><br>Миссия компании - обеспечить 100% людей без рук на планете современными технологичными кибер-руками.',
        tags: 'Графический дизайн / Визуализация',
      },
      gallery: [
        {
          type: 'OneImage',
          images: [{ url: ['motorika', '/motorika-page-img-09'] }],
          border: 'simple',
        },
        {
          type: 'FourImage',
          images: [
            { url: ['motorika', '/motorika-page-img-10'] },
            { url: ['motorika', '/motorika-page-img-11'] },
            { url: ['motorika', '/motorika-page-img-12'] },
            { url: ['motorika', '/motorika-page-img-13'] },
          ],
          border: 'simple',
        },
        {
          type: 'OneImage',
          images: [{ url: ['motorika', '/motorika-page-img-14'] }],
          border: 'simple',
        },
        {
          type: 'ThreeImageCollage',
          border: 'simple',
          column: {
            position: 'Left',
            width: '50',
          },
          columnImages: [
            { url: ['motorika', '/motorika-page-img-15'], height: '50' },
            { url: ['motorika', '/motorika-page-img-16'], height: '50' },
          ],
          images: [{ url: ['motorika', '/motorika-page-img-17'], width: '50' }],
        },
      ],
      titles: [
        {
          title: {
            title: '1 место',
            fontSize: 'simple',
          },
          text: 'Наша команда принимала участие в конкурсе на платформе FL.RU и заняла 1-ое место среди 86 участников.',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 1 <span class="title__title-defis">-</span> Определение направления',
            fontSize: 'simple',
          },
          text: 'Для определения направления мы изучили компанию детально: какие продукты выпускаются, какой мерч уже есть. Выяснили, что нужно двигаться в сторону технологий будущего, киберпанка, кибернетики. На основе этого начали прорабатывать визуал.<br><br>Для развития направлений - кибер-рука, стиль матрицы, сотворение нового мира технологий - брали за основу разработки компании.',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 2 <span class="title__title-defis">-</span> Визуальная часть',
            fontSize: 'simple',
          },
          text: 'Разработали фирменный стиль на основе ТЗ. Нашли удачное решение, которое отразило направление деятельности компании и понравилось заказчику.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Другие варианты применения принтов',
            fontSize: 'simple',
          },
          text: 'Помимо основной работы по техническому заданию решили от себя показать применение принтов на других носителях. Проработали исполнение на рюкзаке, сумке через плечо, powerbank.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'SPICY NOTE',
        next: 'spicynote',
        background: ['spisynote', 'spisynote-page-intro'],
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.examples
	background-color: #F9F9F9
	&__wrapper
		display: flex
		flex-wrap: wrap
		justify-content: space-around
		gap: 50px
		padding: 78px 10px
		max-width: 1500px
		margin: 0px auto
	&__img
		max-width: 330px
		img
			width: 100%


@media (max-width: 768px)
	.examples
		&__wrapper
			display: grid
			grid-template-columns: repeat(2, 1fr)
			gap: 18px
</style>
