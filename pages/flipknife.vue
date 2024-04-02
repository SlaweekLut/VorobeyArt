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
    <GalleryCardTemplate :settings="gallery[1]" />
    <GalleryTemplate :settings="gallery[2]" />
    <GalleryTemplate :settings="gallery[3]" />
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
  name: 'FlipknifePage',
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
        icon: 'flipknife/PC/flipknife-page-icon.svg',
        logo: 'flipknife/PC/flipknife-page-logo.svg',
        img: ['flipknife', 'flipknife-page-intro'],
        title: 'Flip Knife',
        description:
          ' — игра, в которой можно все: складывать ножи, метать топоры и легендарные мечи. Чтобы стать мастером, нужно собрать собственную коллекцию ножей!',
        tags: 'Приложение / 3D моделирование',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'На основе референсной игры создать собственное приложение, добавить новый функционал и фишки, которые давно просят пользователи.<br><br>В приоритете создание PvP режима в стиле гонки - где игрокам необходимо первыми прийти на финиш. ',
          padding: 'task',
        },
        title: 'FLIP KNIFE',
      },
      gallery: [
        {
          type: 'OneImage',
          images: [{ url: ['flipknife', '/flipknife-page-img-01'] }],
        },
        {
          type: 'OneImage',
          gap: 'clamp(16px,4vw,55px)',
          borderRadius: '10px',
          mod: 'flipknife',
          images: [
            { url: ['flipknife', '/flipknife-page-img-02'] },
            { url: ['flipknife', '/flipknife-page-img-03'] },
            { url: ['flipknife', '/flipknife-page-img-04'] },
            { url: ['flipknife', '/flipknife-page-img-05'] },
          ],
        },
        {
          type: 'TwoImage',
          images: [
            { url: ['flipknife', '/flipknife-page-img-06'] },
            { url: ['flipknife', '/flipknife-page-img-07'] },
          ],
        },
        {
          type: 'TwoImage',
          images: [
            { url: ['flipknife', '/flipknife-page-img-08'] },
            { url: ['flipknife', '/flipknife-page-img-09'] },
          ],
        },
      ],
      titles: [
        {
          title: {
            title: 'Элементы',
            fontSize: 'simple',
          },
          text: 'На основе составленного скелета приложения - кнопок, блоков, экранов и  сцен - подготовили атласы элементов. Для их создания использовали Blender и Photoshop.',
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
        title: 'go up',
        next: 'goup',
        background: ['goup', 'goup-page-intro'],
      },
    };
  },
};
</script>
