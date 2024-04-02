<template>
  <div>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <GalleryTemplate :settings="gallery[0]" />
    <GalleryTemplate :settings="gallery[1]" />
    <GalleryTemplate :settings="gallery[2]" />
    <TitleTemplate :settings="titles[1]" />
    <GalleryTemplate :settings="gallery[3]" />
    <GalleryTemplate :settings="gallery[4]" />
    <GalleryTemplate :settings="gallery[5]" />
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
  name: 'MarusyaPage',
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
        icon: 'marusya/PC/marusya-page-icon.svg',
        logo: 'marusya/PC/marusya-page-logo.svg',
        img: ['marusya', 'marusya-page-intro'],
        title: 'Marusya',
        description:
          ' — это оазис высочайшего сервиса и хорошего вкуса в Великом Новгороде. Уникальные техники приготовления блюд и интересные сочетания ингредиентов, обширная барная карта, разнообразное меню и лëгкая атмосфера праздника не оставят равнодушными самых взыскательных гостей!',
        tags: 'Афиши',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Разработать афиши для мероприятий премиум-класса. Который запецит внимание, необычные образы и решения.<br><br>Пожелания: постараться выдержать минимализм',
          padding: 'task',
        },
        title: 'MARUSYA',
      },
      gallery: [
        {
          type: 'OneImage',
          padding: '0 clamp(38px,10vw,200px) clamp(38px,8vw,130px)',
          images: [{ url: ['marusya', '/marusya-page-img-01'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['marusya', '/marusya-page-img-02'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['marusya', '/marusya-page-img-03'] }],
        },
        {
          type: 'OneImage',
          images: [{ url: ['marusya', '/marusya-page-img-04'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['marusya', '/marusya-page-img-05'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['marusya', '/marusya-page-img-06'] }],
        },
      ],
      titles: [
        {
          title: {
            title: 'ЛитМеню',
            fontSize: 'simple',
          },
          text: 'Уникальный цикл программ, посвященный искусству и кулинарии разных времен, а также кулинарным пристрастиям выдающихся исторических личностей. Вас ждет вечер, наполненный искрометными диалогами, изысканными блюдами, красивой музыкой и приятным общением!',
          padding: 'simple',
        },
        {
          title: {
            title: 'Открытие ресторана',
            fontSize: 'simple',
          },
          text: 'Грандиозное открытие<br><br>Смелый и яркий гастроужин от бренд-шефа ресторана изменит Ваше восприятие еды, от эстетики подачи внешнего вида, до галантности и фантастических вкусовых сочетаний!',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'Ukigassen',
        next: 'ukigassen',
        background: ['ukigassen', 'ukigassen-page-intro'],
      },
    };
  },
};
</script>
