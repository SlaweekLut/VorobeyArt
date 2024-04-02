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
  name: 'XplanePage',
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
        icon: 'xplane/PC/xplane-page-icon.svg',
        logo: 'xplane/PC/xplane-page-logo.svg',
        img: ['xplane', 'xplane-page-intro'],
        title: 'X-Plane',
        description:
          ' — игра, в которой можно сесть за штурвал одной из летательных машин и отправиться в чистое небо. Вы будете летать и совершать трюки, пока за Вами гоняется несколько управляемых ракет.',
        tags: 'Приложение / 3D моделирование',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Создать казуальную игру на основе простых элементов, исходя из референсов. Отличительные особенности проекта - добавление большого количества режимов, начиная от базового и заканчивая вариациями на время или с прохождением разных задач. ',
          padding: 'task',
        },
        title: 'X-PLANE',
      },
      gallery: [
        {
          type: 'OneImage',
          images: [{ url: ['xplane', '/xplane-page-img-01'] }],
        },
        {
          type: 'OneImage',
          gap: 'clamp(16px,4vw,55px)',
          borderRadius: '10px',
          mod: 'flipknife',
          images: [
            { url: ['xplane', '/xplane-page-img-02'] },
            { url: ['xplane', '/xplane-page-img-03'] },
            { url: ['xplane', '/xplane-page-img-04'] },
            { url: ['xplane', '/xplane-page-img-05'] },
          ],
        },
      ],
      titles: [
        {
          title: {
            title: 'Элементы',
            fontSize: 'simple',
          },
          text: 'На основе составленного скелета приложения - кнопок, блоков, экранов и сцен - подготовили атласы элементов. Для их создания использовали Blender и Photoshop.',
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
        title: 'energotek',
        next: 'energotek',
        background: ['energotek', 'energotek-page-intro'],
      },
    };
  },
};
</script>
