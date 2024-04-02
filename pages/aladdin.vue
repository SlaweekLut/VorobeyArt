<template>
  <div>
    <Head>
      <Title>Портфолио | Aladdin</Title>
      <Meta
        name="description"
        content="создание логотипа для компании Аладдин"
      />
    </Head>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <TitleTemplate :settings="titles[1]" />
    <div
      class="content"
      style="margin-top: 0; padding-top: 0; padding-bottom: 0"
    >
      <div class="content__wrapper">
        <GalleryTemplate :settings="gallery[0]" />
      </div>
    </div>
    <TitleTemplate :settings="titles[2]" />
    <GalleryTemplate :settings="gallery[1]" />
    <GalleryTemplate :settings="gallery[2]" />
    <TitleTemplate :settings="titles[3]" />
    <div
      class="content"
      style="margin-top: 0; padding-top: 0; padding-bottom: 0"
    >
      <div class="content__wrapper">
        <GalleryTemplate :settings="gallery[3]" />
      </div>
    </div>
    <TitleTemplate :settings="titles[4]" />
    <div class="content" style="margin-top: 0; padding-top: 0">
      <div class="content__wrapper">
        <GalleryTemplate :settings="gallery[4]" />
      </div>
    </div>
    <GalleryTemplate :settings="gallery[5]" />
    <TitleTemplate :settings="titles[5]" />
    <GalleryTemplate :settings="gallery[6]" />
    <GalleryTemplate :settings="gallery[7]" />
    <GalleryTemplate :settings="gallery[8]" />
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
  name: 'AladdinPage',
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
        icon: 'aladdin/PC/aladdin-page-icon.svg',
        logo: 'aladdin/PC/aladdin-page-logo.svg',
        img: ['aladdin', 'aladdin-page-intro'],
        title: 'Алладин',
        description:
          ' — ведущий российский разработчик и поставщик средств аутентификации, продуктов и решений<br>для обеспечения информационной безопасности и защиты конфиденциальных данных.',
        tags: 'Логотип',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Заказчику было необходимо создать логотип со смыслом, отражающий сферу деятельности компании.  На момент обращения к нам у клиента был логотип, который не учитывал особенности предприятия.<br><br>Из пожеланий: оставить оранжевый цвет, придерживаться минимализма.',
          padding: 'task',
        },
        title: 'АЛЛАДИН',
      },
      gallery: [
        {
          type: 'OneImage',
          images: [{ url: ['aladdin', '/aladdin-page-img-01'] }],
        },
        {
          type: 'TwoImage',
          images: [
            { url: ['aladdin', '/aladdin-page-img-02'] },
            { url: ['aladdin', '/aladdin-page-img-03'] },
          ],
        },
        {
          type: 'OneImage',
          images: [{ url: ['aladdin', '/aladdin-page-img-04'] }],
        },
        {
          type: 'OneImage',
          images: [{ url: ['aladdin', '/aladdin-page-img-05'] }],
        },
        {
          type: 'OneImage',
          images: [{ url: ['aladdin', '/aladdin-page-img-06'] }],
        },
        {
          type: 'OneImage',
          images: [{ url: ['aladdin', '/aladdin-page-img-07'] }],
        },
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['aladdin', '/aladdin-page-img-08'] },
            { url: ['aladdin', '/aladdin-page-img-10'] },
          ],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['aladdin', '/aladdin-page-img-09'] }],
        },
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Бриф',
            fontSize: 'simple',
          },
          text: 'Мы выяснили, какова специфика деятельности компании и где будет использоваться логотип. Данная информация необходима для того, чтобы иметь наиболее полное представление о заказчике и его продукции.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Мудборд',
            fontSize: 'simple',
          },
          text: 'На основе полученной информации составили мудборд – цветовую палитру и образы, ассоциирующиеся с компанией. Искали нестандартное решение, которое зацепит заказчика, и от которого можно будет отталкиваться. ',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 3 <span class="title__title-defis">-</span> Создание набросков',
            fontSize: 'simple',
          },
          text: 'После составления мудборда приступили к созданию набросков. Использовали разные образы с упором на букву “А”, элементы безопасности и еще пробовали объединять их в одно целое.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Отбор приоритетных вариантов',
            fontSize: 'simple',
          },
          text: 'После рассмотрения выбранных набросков заказчик выбрал 7 разных концептов, по которым мы дали комментарии. ',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 4 <span class="title__title-defis">-</span> Проработка',
            fontSize: 'simple',
          },
          text: 'Из отобранных вариантов сформировали логотип, согласованный впоследствии клиентом. Это буква А, в которую вписан лабиринт как символ безопасности и защиты.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'В результате получился логотип, который в полной мере соответствовал пожеланиям заказчика: выполнен в стиле минимализма, включает оранжевый цвет. Таким образом, мы сделали логотип со смыслом, который отражает основную сферу деятельности компании - обеспечение безопасности. ',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'unidance',
        next: 'unidance',
        background: ['unidance', 'unidance-page-intro'],
      },
    };
  },
};
</script>
