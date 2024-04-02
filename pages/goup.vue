<template>
  <div>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <GalleryTemplate :settings="gallery[0]" />
    <GalleryTemplate :settings="gallery[1]" />
    <TitleTemplate :settings="titles[1]" />
    <GalleryCardTemplate :settings="gallery[2]" />
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
  name: 'GoupPage',
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
        icon: 'goup/PC/goup-page-icon.svg',
        logo: 'goup/PC/goup-page-logo.svg',
        img: ['goup', 'goup-page-intro'],
        title: 'GO UP',
        description:
          ' — стильная и минималистичная игра, в которой главной задачей является провести главного героя через многочисленные испытания и преодолеть максимальный участок маршрута.',
        tags: 'Приложение / 2D графика',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Создать простой, красивый, минималистичный 2D платформер.  Наша команда вдохновлялась примерами уже существующих аналогичных игр: Oddesey, GRIS, Monument Valley.',
          padding: 'task',
        },
        title: 'GO UP',
      },
      gallery: [
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['goup', '/goup-page-img-01'] },
            { url: ['goup', '/goup-page-img-02'] },
          ],
        },
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['goup', '/goup-page-img-03'] },
            { url: ['goup', '/goup-page-img-04'] },
          ],
        },
        {
          type: 'OneImage',
          gap: 'clamp(16px, 4vw, 40px)',
          borderRadius: '10px',
          mod: 'goup',
          background: '#fff',
          images: [
            { url: ['goup', '/goup-page-img-05'] },
            { url: ['goup', '/goup-page-img-06'] },
            { url: ['goup', '/goup-page-img-07'] },
            { url: ['goup', '/goup-page-img-08'] },
            { url: ['goup', '/goup-page-img-09'] },
            { url: ['goup', '/goup-page-img-10'] },
            { url: ['goup', '/goup-page-img-11'] },
            { url: ['goup', '/goup-page-img-12'] },
            { url: ['goup', '/goup-page-img-13'] },
            { url: ['goup', '/goup-page-img-14'] },
            { url: ['goup', '/goup-page-img-15'] },
            { url: ['goup', '/goup-page-img-16'] },
            { url: ['goup', '/goup-page-img-17'] },
            { url: ['goup', '/goup-page-img-18'] },
            { url: ['goup', '/goup-page-img-19'] },
            { url: ['goup', '/goup-page-img-20'] },
            { url: ['goup', '/goup-page-img-21'] },
            { url: ['goup', '/goup-page-img-22'] },
          ],
        },
      ],
      titles: [
        {
          title: {
            title: 'Референсы',
            fontSize: 'simple',
          },
          text: 'На основе составленного скелета приложения - кнопок, блоков, экранов, сцен и референсов - подготовили атласы элементов. Продумали построение уровня, которое позволило бы игроку идентифицировать дружелюбные и негативные объекты.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'Проработали и собрали красивый и удобный визуал, исходя из структуры, набросков, элементов. Перевели приложение в стадию MVP. Программную часть создали Unity специалисты. Четкая организация работы команды - зона ответственности проектного менеджера.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'paw paw',
        next: 'pawpaw',
        background: ['pawpaw', 'pawpaw-page-intro'],
      },
    };
  },
};
</script>
