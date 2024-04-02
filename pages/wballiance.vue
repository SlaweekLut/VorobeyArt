<template>
  <div>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <GalleryCardTemplate :settings="gallery[0]" />
    <TitleTemplate :settings="titles[1]" />
    <GalleryCardTemplate :settings="gallery[1]" />
    <TitleTemplate :settings="titles[2]" />
    <GalleryCardTemplate :settings="gallery[2]" />
    <TitleTemplate :settings="titles[3]" />
    <GalleryTemplate :settings="gallery[3]" />
    <GalleryTemplate :settings="gallery[4]" />
    <GalleryTemplate :settings="gallery[5]" />
    <!-- // <LikeTemplate :title="intro.img[0]" /> -->
    <FooterTemplate :settings="footer" />
  </div>
</template>

<script>
import GalleryTemplate from '@/components/Cases/Gallery.vue';
import GalleryCardTemplate from '@/components/Cases/GalleryCard.vue';
import TitleTemplate from '@/components/Cases/TitleTemplate.vue';
import FooterTemplate from '@/components/Cases/Footer.vue';
import IntroTemplate from '@/components/Cases/Intro.vue';
import TaskTemplate from '@/components/Cases/Task.vue';
import LikeTemplate from '@/components/Cases/Like.vue';

export default {
  name: 'WBAlliancePage',
  components: {
    GalleryTemplate,
    GalleryCardTemplate,
    TitleTemplate,
    FooterTemplate,
    IntroTemplate,
    TaskTemplate,
    LikeTemplate,
  },
  data() {
    return {
      intro: {
        icon: 'wballiance/PC/wballiance-page-icon.svg',
        logo: 'wballiance/PC/wballiance-page-logo.svg',
        img: ['wballiance', 'wballiance-page-intro'],
        title: 'WBAlliance',
        description:
          '— компания, помогающая партнерам открывать свой бизнес и успешно зарабатывать на маркетплейсах. WB Alliance на рынке более 7 лет и знает все о торговле на площадках WB или Ozon.',
        tags: 'Фирменный стиль / Брендбук',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Заказчик обратился к нам с задачей разработать фирменный стиль и оформить брендбук, который впоследствии менеджеры смогут использовать для ведения компании.<br><br>Из пожеланий: использовать в оформлении брендбука несколько корпоративных цветов.',
          padding: 'task',
        },
        title: 'WB Alliance',
      },
      gallery: [
        {
          type: 'OneImage',
          images: [{ url: ['wballiance', '/wballiance-page-img-01'] }],
          shadow: 'false',
        },
        {
          type: 'TwoImage',
          background:
            'linear-gradient(130.46deg, #0066B1 10.72%, #003D78 83.52%)',
          images: [
            { url: ['wballiance', '/wballiance-page-img-02'] },
            { url: ['wballiance', '/wballiance-page-img-03'] },
          ],
        },
        {
          type: 'FourImage',
          images: [
            { url: ['wballiance', '/wballiance-page-img-04'] },
            { url: ['wballiance', '/wballiance-page-img-06'] },
            { url: ['wballiance', '/wballiance-page-img-05'] },
            { url: ['wballiance', '/wballiance-page-img-07'] },
          ],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['wballiance', '/wballiance-page-img-08'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['wballiance', '/wballiance-page-img-09'] }],
        },
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['wballiance', '/wballiance-page-img-10'] },
            { url: ['wballiance', '/wballiance-page-img-11'] },
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
          text: 'Компания занимается продажами товаров на маркетплейсах, инвестициями и имеет быстрорастущие результаты - это символизирует движение вверх. На основе данной ассоциации мы решили отразить в фирменном стиле WB Alliance нестандартные, динамичные элементы.',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 2 <span class="title__title-defis">-</span> Разработка стиля',
            fontSize: 'simple',
          },
          text: 'На основе имеющегося логотипа и заданного направления проработали главные элементы стиля. Подобрали шрифты для написания текста и выделения заголовков. Определили цвета, которые будут основными.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Верстка',
            fontSize: 'simple',
          },
          text: 'Собрали брендбук по стандартам с применением элементов фирменного стиля.<br><br>Оформили разделы об использовании логотипа, применении шрифтов, цветов, паттернов.<br><br>В поддержку логотипа для решения дополнительных оформительских задач сделали пиктограммы. Выбрали плоский контурный стиль.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'Разработали фирменный стиль, на его основе оформили брендбук. Нашли удачное решение, которое соответствовало всем пожеланиям заказчика и отразило специфику деятельности компании.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'Motorika',
        next: 'motorika',
        background: ['motorika', 'motorika-page-intro'],
      },
    };
  },
};
</script>
