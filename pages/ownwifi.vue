<template>
  <div>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <div
      class="content"
      style="margin-top: 0; padding-top: 0; padding-bottom: 0"
    >
      <div class="content__wrapper">
        <GalleryTemplate :settings="gallery[0]" />
      </div>
    </div>
    <TitleTemplate :settings="titles[1]" />
    <TitleTemplate :settings="titles[2]" />
    <GalleryTemplate :settings="gallery[1]" />
    <GalleryTemplate :settings="gallery[2]" />
    <GalleryTemplate :settings="gallery[3]" />
    <GalleryTemplate :settings="gallery[4]" />
    <!-- // <LikeTemplate :title="intro.img[0]" /> -->
    <FooterTemplate :settings="footer" />
  </div>
</template>

<script>
import GalleryTemplate from '@/components/Cases/Gallery.vue';
import TitleTemplate from '@/components/Cases/TitleTemplate.vue';
import FooterTemplate from '@/components/Cases/Footer.vue';
import LikeTemplate from '@/components/Cases/Like.vue';
import IntroTemplate from '@/components/Cases/Intro.vue';
import TaskTemplate from '@/components/Cases/Task.vue';

export default {
  name: 'OwnwifiPage',
  // directives: {
  // 	motion: motion(),
  // },
  components: {
    GalleryTemplate,
    TitleTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate,
    LikeTemplate,
  },
  data() {
    return {
      intro: {
        icon: 'ownwifi/PC/ownwifi-page-icon.svg',
        logo: 'ownwifi/PC/ownwifi-page-logo.svg',
        img: ['ownwifi', 'ownwifi-page-intro'],
        title: 'OWN WIFI',
        description:
          ' —  интернет-магазин с широким ассортиментом профессионального оборудования для организации бесшовной сети Wi-Fi на любой территории. В услуги компании входит монтаж, настройка и последующее сопровождение.',
        tags: 'Презентация / Инфографика',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Заказчику было необходимо красиво и грамотно презентовать франшизу для привлечения инвесторов. <br><br>Из пожеланий: соответствие стилистике и цветовой палитре сайта, лаконичность и не перегруженность информацией.',
          padding: 'task',
        },
        title: 'OWN WIFI',
      },
      gallery: [
        {
          type: 'OneImage',
          images: [{ url: ['ownwifi', '/ownwifi-page-img-01'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['ownwifi', '/ownwifi-page-img-02'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['ownwifi', '/ownwifi-page-img-03'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['ownwifi', '/ownwifi-page-img-04'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['ownwifi', '/ownwifi-page-img-05'] }],
        },
      ],
      titles: [
        {
          title: {
            title:
              'Этап 1 <span class="title__title-defis">-</span> Сбор данных',
            fontSize: 'simple',
          },
          text: 'Для создания презентации мы запросили у заказчика тезисы и тексты, которые должны присутствовать на слайдах. Обсудили детали: цвета, варианты дизайна, использование инфографики.',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 2 <span class="title__title-defis">-</span> Проработка структуры',
            fontSize: 'simple',
          },
          text: 'Работа над презентацией началась с составления ее “скелета”. С учетом пожелания заказчика о лаконичности, мы разложили тексты на слайды так, чтобы информация воспринималась комфортно.',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 3 <span class="title__title-defis">-</span> Визуальная часть',
            fontSize: 'simple',
          },
          text: 'На основе текстовой структуры проработали визуальную часть презентации. Придерживались принципа наглядности и использовали те образы, которые интуитивно выстраивались на основе прочитанного текста. Добавили инфографику.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'h one',
        next: 'hone',
        background: ['hone', 'hone-page-intro'],
      },
    };
  },
};
</script>
