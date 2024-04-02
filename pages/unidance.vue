<template>
  <div>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <GalleryCardTemplate :settings="gallery[0]" />
    <GalleryTemplate :settings="gallery[1]" />
    <GalleryTemplate :settings="gallery[2]" />
    <TitleTemplate :settings="titles[1]" />
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
  name: 'UnidancePage',
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
        icon: 'unidance/PC/unidance-page-icon.svg',
        logo: 'unidance/PC/unidance-page-logo.svg',
        img: ['unidance', 'unidance-page-intro'],
        title: 'Unidance',
        description:
          ' — студия, в которой преподается более 10 танцевальных направлений (среди них Vogue, Jazz-funk, Dancehall, Hip-hop, Breakdance). Опытные педагоги постоянно оттачивают свои навыки на мастер-классах и других танцевальных мероприятиях.',
        tags: 'Афиши / Билеты',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Заказчик обратился к нам с задачей разработать афиши для социальных сетей на предстоящие танцевальные мастер-классы. Также было необходимо дополнительно сверстать билеты и сертификаты для участников проекта.',
          padding: 'task',
        },
        title: 'UNIDANCE',
      },
      gallery: [
        {
          type: 'SixThreeImage',
          images: [
            { url: ['unidance', '/unidance-page-img-01'] },
            { url: ['unidance', '/unidance-page-img-02'] },
            { url: ['unidance', '/unidance-page-img-03'] },
            { url: ['unidance', '/unidance-page-img-04'] },
            { url: ['unidance', '/unidance-page-img-05'] },
            { url: ['unidance', '/unidance-page-img-06'] },
          ],
          background: '#fff',
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['unidance', '/unidance-page-img-07'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['unidance', '/unidance-page-img-08'] }],
        },
        {
          type: 'OneImage',
          images: [{ url: ['unidance', '/unidance-page-img-09'] }],
        },
      ],
      titles: [
        {
          title: {
            title: 'Афиши',
            fontSize: 'simple',
          },
          text: 'Мощный рекламный инструмент. Эффективный и оригинальный дизайн афиши может мгновенно привлечь внимание клиентов, а также компактно подать нужную информацию.<br><br>Поэтому при разработке дизайна мы отталкивались от принципов яркости и лаконичности. Для каждого танцевального направления продумали свой дизайн, отражающий его специфику и направленность.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Билеты',
            fontSize: 'simple',
          },
          text: 'Билеты на мастер-классы оформили в стиле афиш. Продублировали всю важную информацию и оставили специфичное оформление для каждого танцевального направления.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'izenbot',
        next: 'izenbot',
        background: ['izenbot', 'izenbot-page-intro'],
      },
    };
  },
};
</script>
