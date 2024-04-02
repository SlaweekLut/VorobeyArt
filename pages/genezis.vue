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
import LikeTemplate from '@/components/Cases/Like.vue';
import IntroTemplate from '@/components/Cases/Intro.vue';
import TaskTemplate from '@/components/Cases/Task.vue';

export default {
  name: 'GenezisPage',
  // directives: {
  // 	motion: motion(),
  // },
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
        icon: 'genezisproject/PC/genezisproject-page-icon.svg',
        logo: 'genezisproject/PC/genezisproject-page-logo.svg',
        img: ['genezisproject', 'genezisproject-page-intro'],
        title: 'ГЕНЕЗИС ПРОЕКТ',
        description:
          '— архитектурно-инженерная компания, проектирующая комплексы общественных зданий, промышленные и спортивные объекты, городские пространства, социально-деловую инфраструктуру. ',
        tags: 'Фирменный стиль / Брендбук',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Заказчик обратился к нам с задачей разработать фирменный стиль и оформить брендбук, который впоследствии менеджеры смогут использовать для ведения компании.<br><br>Из пожеланий: разделить 3 направления деятельности предприятия, сохранив при этом определенную общность.',
          padding: 'task',
        },
        title: 'ПРОЕКТ ГЕНЕЗИС',
      },
      gallery: [
        {
          type: 'ThreeImage',
          images: [
            { url: ['genezisproject', '/genezisproject-page-img-01'] },
            { url: ['genezisproject', '/genezisproject-page-img-02'] },
            { url: ['genezisproject', '/genezisproject-page-img-03'] },
          ],
        },
        {
          type: 'TwoImage',
          images: [
            { url: ['genezisproject', '/genezisproject-page-img-04'] },
            { url: ['genezisproject', '/genezisproject-page-img-05'] },
          ],
        },
        {
          type: 'FourImage',
          images: [
            { url: ['genezisproject', '/genezisproject-page-img-06'] },
            { url: ['genezisproject', '/genezisproject-page-img-07'] },
            { url: ['genezisproject', '/genezisproject-page-img-08'] },
            { url: ['genezisproject', '/genezisproject-page-img-09'] },
          ],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['genezisproject', '/genezisproject-page-img-10'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['genezisproject', '/genezisproject-page-img-11'] }],
        },
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['genezisproject', '/genezisproject-page-img-12'] },
            { url: ['genezisproject', '/genezisproject-page-img-13'] },
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
          text: 'Компания занимается проектированием, инженерными изысканиями, проведением испытаний стройматериалов. На основе этого мы выделили параметры, от которых будем отталкиваться: элементы, рисунки и цветовая палитра.',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 2 <span class="title__title-defis">-</span> Разработка стиля',
            fontSize: 'simple',
          },
          text: 'На основе имеющегося логотипа и заданного направления проработали главные элементы стиля. Шрифты подобрали строгие, символизирующие точность деятельности компании.<br><br>Цвета подобрали в зависимости от особенностей направления:<br>Проектирование - большая ответственность, опасность - красный цвет.<br>Плавучие станции - размещение на воде - синий цвет.<br>Изыскательные работы - работа с грунтом - оранжевый цвет.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Верстка',
            fontSize: 'simple',
          },
          text: 'Собрали брендбук по стандартам с применением элементов фирменного стиля.<br><br><br>Также для каждого направления создали уникальное изображение, которое символизирует определенный вид работ и отражает его специфику.<br><br><br>В поддержку логотипа, для решения дополнительных оформительских задач сделали пиктограммы. Выбрали плоский контурный стиль, напоминающий чертежи.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'Разработали фирменный стиль компании и на его основе оформили брендбук. Нашли удачное решение, которое разделило направления деятельности, но сохранило общие черты, связывающие их между собой.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'Золото Алтая',
        next: 'zolotoaltaya',
        background: ['zolotoaltaya', 'zolotoaltaya-page-intro'],
      },
    };
  },
};
</script>
