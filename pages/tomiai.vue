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
  name: 'TomiaiPage',
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
        icon: 'tomiai/PC/tomiai-page-icon.svg',
        logo: 'tomiai/PC/tomiai-page-logo.svg',
        img: ['tomiai', 'tomiai-page-intro'],
        title: 'Tomi.ai',
        description:
          ' — сервис, обеспечивающий рост отдачи от рекламных кампаний за счёт оптимизации digital-рекламы под бизнес-результаты — привлечённые клиенты, продажи, LTV (показатель эффективности рекламы).',
        tags: 'Презентация / Инфографика',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Заказчику было необходимо привлечь инвесторов в проект и представить свои услуги на рынке. Для этого требовалась разработка презентации на двух языках.<br><br>Из пожеланий: соответствие стилистике и цветовой палитре сайта, лаконичность и не перегруженность информацией.',
          padding: 'task',
        },
        title: 'TOMI.AI',
      },
      gallery: [
        {
          type: 'OneImage',
          images: [{ url: ['tomiai', '/tomiai-page-img-01'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['tomiai', '/tomiai-page-img-02'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['tomiai', '/tomiai-page-img-03'] }],
        },
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['tomiai', '/tomiai-page-img-04'] },
            { url: ['tomiai', '/tomiai-page-img-05'] },
          ],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['tomiai', '/tomiai-page-img-06'] }],
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
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'Создали изображения устройств из 3D моделей, которые полностью соответствуют реальным объектам. Несмотря на сложности с фотографиями, удалось проработать даже мельчайшие детали.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'Кванттелеком',
        next: 'kvanttelekomBrend',
        background: ['kvanttelekomBrend', 'kvanttelekomBrend-page-intro'],
      },
    };
  },
};
</script>
