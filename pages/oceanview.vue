<template>
  <div>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <GalleryTemplate :settings="gallery[0]" />
    <TitleTemplate :settings="titles[1]" />
    <TitleTemplate :settings="titles[2]" />
    <GalleryTemplate :settings="gallery[1]" />
    <GalleryTemplate :settings="gallery[2]" />
    <GalleryTemplate :settings="gallery[3]" />
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
  name: 'MarusyaPage',
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
        icon: 'oceanview/PC/oceanview-page-icon.svg',
        logo: 'oceanview/PC/oceanview-page-logo.svg',
        img: ['oceanview', 'oceanview-page-intro'],
        title: 'OCEANVIEW',
        description:
          ' — первое российское приложение для путешественников. Глобальная туристическая экосистема с удобной средой для общения, обмена актуальной информацией и планирования путешествий.',
        tags: 'Презентация / Инфографика',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Заказчику было необходимо презентовать проект потенциальным инвесторам, чтобы привлечь их средства.<br><br>Из пожеланий: соответствие стилистике и цветовой палитре приложения, лаконичность и не перегруженность информацией.',
          padding: 'task',
        },
        title: 'OCEANVIEW',
      },
      gallery: [
        {
          type: 'OneImage',
          padding: '0 clamp(38px,10vw,200px)',
          images: [{ url: ['oceanview', '/oceanview-page-img-01'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['oceanview', '/oceanview-page-img-02'] }],
        },
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['oceanview', '/oceanview-page-img-03'] },
            { url: ['oceanview', '/oceanview-page-img-04'] },
          ],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['oceanview', '/oceanview-page-img-05'] }],
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
        title: 'Химтех-Р',
        next: 'ximtexp',
        background: ['ximtexp', 'ximtexp-page-intro'],
      },
    };
  },
};
</script>
