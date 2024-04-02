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
  name: 'UkigassenPage',
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
        icon: 'ukigassen/PC/ukigassen-page-icon.svg',
        logo: 'ukigassen/PC/ukigassen-page-logo.svg',
        img: ['ukigassen', 'ukigassen-page-intro'],
        title: 'UKIGASSEN',
        description:
          ' — командная игра в снежки, появившаяся в конце 1980-х в Японии. В настоящее время ежегодные соревнования проводятся в Японии, Швеции, Финляндии, Армении, России и Норвегии.',
        tags: 'Иллюстрация / Раскраска',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Разработать картинки для онлаин игры (по типу морской бой), которые помогли бы лучше описать правила, а также для размещения постов. В дальнейшем изображения будут использоваться в раскрасках, для детей из детских садов и младше.',
          padding: 'task',
        },
        title: 'UKIGASSEN',
      },
      gallery: [
        {
          type: 'FourImageCollage',
          padding: '0 clamp(38px,8vw,130px) clamp(38px,8vw,130px)',
          gap: '30px',
          images: [
            { url: ['ukigassen', '/ukigassen-page-img-01'] },
            { url: ['ukigassen', '/ukigassen-page-img-02'] },
            { url: ['ukigassen', '/ukigassen-page-img-03'] },
            { url: ['ukigassen', '/ukigassen-page-img-04'] },
          ],
        },
        {
          type: 'OneImage',
          images: [{ url: ['ukigassen', '/ukigassen-page-img-05'] }],
        },
        {
          type: 'OneImage',
          images: [{ url: ['ukigassen', '/ukigassen-page-img-06'] }],
        },
        {
          type: 'OneImage',
          images: [{ url: ['ukigassen', '/ukigassen-page-img-07'] }],
        },
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Наброски',
            fontSize: 'simple',
          },
          text: 'Мы полностью изучили правила онлаин игры и ход действий на поле для правильной передачи информации через рисунок. Для согласования с заказчиком на первом этапе, мы подготовили наброски.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'Нами было разработано игровое поле, а также 14 иллюстраций, которые помогут лучше разобраться с правилами онлаин игры при их изучении.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'Ocean view',
        next: 'oceanview',
        background: ['oceanview', 'oceanview-page-intro'],
      },
    };
  },
};
</script>
