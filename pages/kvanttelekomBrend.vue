<template>
  <div>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <GalleryTemplate :settings="gallery[0]" />
    <TitleTemplate :settings="titles[1]" />
    <GalleryTemplate :settings="gallery[1]" />
    <GalleryTemplate :settings="gallery[2]" />
    <TitleTemplate :settings="titles[2]" />
    <GalleryTemplateCard :settings="gallery[3]" />
    <TitleTemplate :settings="titles[3]" />
    <GalleryTemplate :settings="gallery[4]" />
    <GalleryTemplate :settings="gallery[5]" />
    <GalleryTemplate :settings="gallery[6]" />
    <!-- // <LikeTemplate :title="intro.img[0]" /> -->
    <FooterTemplate :settings="footer" />
  </div>
</template>

<script>
import GalleryTemplate from '@/components/Cases/Gallery.vue';
import GalleryTemplateCard from '@/components/Cases/GalleryCard.vue';
import TitleTemplate from '@/components/Cases/TitleTemplate.vue';
import FooterTemplate from '@/components/Cases/Footer.vue';
import LikeTemplate from '@/components/Cases/Like.vue';
import IntroTemplate from '@/components/Cases/Intro.vue';
import TaskTemplate from '@/components/Cases/Task.vue';

export default {
  name: 'KvanttelekomBrendPage',
  // directives: {
  // 	motion: motion(),
  // },
  components: {
    GalleryTemplate,
    GalleryTemplateCard,
    TitleTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate,
    LikeTemplate,
  },
  data() {
    return {
      intro: {
        icon: 'kvanttelekomBrend/PC/kvanttelekomBrend-page-icon.svg',
        logo: 'kvanttelekomBrend/PC/kvanttelekomBrend-page-logo.svg',
        img: ['kvanttelekomBrend', 'kvanttelekomBrend-page-intro'],
        title: 'СМАРТС КВАНТТЕЛЕКОМ',
        description:
          ' — компания, которая проводит исследования, ведет прикладные разработки, создает решения в области квантовых коммуникаций и обеспечивает максимально безопасную передачу данных.',
        tags: 'Фирменный стиль / Брендбук',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Заказчик обратился к нам с задачей разработать фирменный стиль и оформить брендбук, который впоследствии менеджеры смогут использовать для ведения компании.<br><br>Из пожеланий: придерживаться трендов текущего года, соблюдать стиль минимализма. Сделать упор на применение логотипа.',
          padding: 'task',
        },
        title: 'КВАНТТЕЛЕКОМ',
      },
      gallery: [
        {
          type: 'OneImage',
          images: [
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-01'] },
          ],
        },
        {
          type: 'OneImage',
          images: [
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-02'] },
          ],
        },
        {
          type: 'OneImage',
          images: [
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-03'] },
          ],
        },
        {
          type: 'SixTwoImage',
          images: [
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-04'] },
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-05'] },
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-06'] },
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-07'] },
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-08'] },
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-09'] },
          ],
        },
        {
          type: 'OneImage',
          images: [
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-10'] },
          ],
        },
        {
          type: 'ThreeImage',
          border: 'simple',
          images: [
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-11'] },
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-12'] },
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-13'] },
          ],
        },
        {
          type: 'ThreeImage',
          border: 'simple',
          images: [
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-14'] },
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-15'] },
            { url: ['kvanttelekomBrend', '/kvanttelekomBrend-page-img-16'] },
          ],
        },
      ],
      titles: [
        {
          title: {
            title:
              'Этап 1 <span class="title__title-defis">-</span> Определение направления',
            fontSize: 'simple',
          },
          text: 'Компания специализируется на безопасной передаче данных. Брендбук был необходим для того, чтобы иметь уникальный товарный знак - запоминаться на рынке it безопасности. <br><br>От этих особенностей мы отталкивались, когда определяли направление стиля.',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 2 <span class="title__title-defis">-</span> Разработка стиля',
            fontSize: 'simple',
          },
          text: 'На основе имеющегося логотипа и заданного направления проработали главные элементы стиля. Подобрали шрифты для написания текста и выделения заголовков. Определили основные цвета.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Верстка',
            fontSize: 'simple',
          },
          text: 'Собрали брендбук по стандартам с применением элементов фирменного стиля.<br><br>В поддержку логотипа, для решения дополнительных оформительских задач сделали пиктограммы. Выбрали плоский контурный стиль, напоминающий печатные платы. Добавили линии, символизирующие летящие фотоны света.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'Разработали фирменный стиль компании и на его основе оформили брендбук. Нашли удачное решение, которое выделило компанию на фоне конкурентов.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'Proзапчасть',
        next: 'prozapchast',
        background: ['prozapchast', 'prozapchast-page-intro'],
      },
    };
  },
};
</script>
