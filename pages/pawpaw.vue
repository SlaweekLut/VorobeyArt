<template>
  <div>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <GalleryTemplate :settings="gallery[0]" />
    <GalleryTemplate :settings="gallery[1]" />
    <TitleTemplate :settings="titles[1]" />
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
  name: 'PawpawPage',
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
        icon: 'pawpaw/PC/pawpaw-page-icon.svg',
        logo: 'pawpaw/PC/pawpaw-page-logo.svg',
        img: ['pawpaw', 'pawpaw-page-intro'],
        title: 'Paw Paw',
        description:
          ' — онлайн-игра в жанре FPS с мультяшной графикой и персонажами. Несколько режимов: публичная многопользовательская игра или частный сервер с друзьями.',
        tags: 'Приложение / 3D моделирование',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Создать мобильную игру в мультяшной стилистике. Игровой процесс здесь основывается на сражениях с использованием огнестрельного или любого другого оружия, с видом от первого лица - и все это под музыку кантри.',
          padding: 'task',
        },
        title: 'PAW PAW',
      },
      gallery: [
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['pawpaw', '/pawpaw-page-img-01'] },
            { url: ['pawpaw', '/pawpaw-page-img-02'] },
          ],
        },
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['pawpaw', '/pawpaw-page-img-03'] },
            { url: ['pawpaw', '/pawpaw-page-img-04'] },
          ],
        },
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['pawpaw', '/pawpaw-page-img-05'] },
            { url: ['pawpaw', '/pawpaw-page-img-06'] },
          ],
        },
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['pawpaw', '/pawpaw-page-img-07'] },
            { url: ['pawpaw', '/pawpaw-page-img-08'] },
          ],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['pawpaw', '/pawpaw-page-img-09'] }],
        },
      ],
      titles: [
        {
          title: {
            title: 'Референсы',
            fontSize: 'simple',
          },
          text: 'На основе составленного скелета приложения - кнопок, блоков, экранов, сцен и референсной игры Bullet Bonanza - подготовили атласы элементов. Продумали построение уровня, которое позволило бы игроку идентифицировать дружелюбные и негативные объекты.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'Проработали и собрали яркий и удобный визуал, исходя из структуры, набросков, элементов. Перевели приложение в стадию MVP. Программную часть создали Unity специалисты. Четкая организация работы команды - зона ответственности проектного менеджера.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'x-plane',
        next: 'xplane',
        background: ['xplane', 'xplane-page-intro'],
      },
    };
  },
};
</script>
