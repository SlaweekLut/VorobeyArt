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
    <GalleryTemplate :settings="gallery[1]" />
    <GalleryTemplate :settings="gallery[2]" />
    <TitleTemplate :settings="titles[2]" />
    <GalleryTemplate :settings="gallery[3]" />
    <GalleryTemplate :settings="gallery[4]" />
    <GalleryTemplate :settings="gallery[5]" />
    <GalleryTemplate :settings="gallery[6]" />
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
  name: 'XimtexpPage',
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
        icon: 'ximtexp/PC/ximtexp-page-icon.svg',
        logo: 'ximtexp/PC/ximtexp-page-logo.svg',
        img: ['ximtexp', 'ximtexp-page-intro'],
        title: 'ХИМТЕХ-Р',
        description:
          ' — разработчик и производитель полимерных систем для прокладки и защиты кабельных линий. Решения компании повышают надежность работы линий электропередач и безопасность обслуживающего персонала, сокращают расходы в процессе эксплуатации. ',
        tags: '3D моделирование / Текстурирование',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Заказчику было необходимо наполнить интернет-магазин и презентовать 44 позиции товаров.  Для решения данной задачи мы, совместно со штатным специалистом компании по 3D, выбрали моделирование на основе фотографий - с размерами и описанием.',
          padding: 'task',
        },
        title: 'ХИМТЕХ-Р',
      },
      gallery: [
        {
          type: 'OneImage',
          images: [{ url: ['ximtexp', '/ximtexp-page-img-01'] }],
        },
        {
          type: 'TwoImage',
          images: [
            { url: ['ximtexp', '/ximtexp-page-img-02'] },
            { url: ['ximtexp', '/ximtexp-page-img-03'] },
          ],
        },
        {
          type: 'TwoImage',
          images: [
            { url: ['ximtexp', '/ximtexp-page-img-04'] },
            { url: ['ximtexp', '/ximtexp-page-img-05'] },
          ],
        },
        {
          type: 'TwoImage',
          images: [
            { url: ['ximtexp', '/ximtexp-page-img-06'] },
            { url: ['ximtexp', '/ximtexp-page-img-07'] },
          ],
        },
        {
          type: 'TwoImage',
          images: [
            { url: ['ximtexp', '/ximtexp-page-img-08'] },
            { url: ['ximtexp', '/ximtexp-page-img-09'] },
          ],
        },
        {
          type: 'OneImage',
          images: [{ url: ['ximtexp', '/ximtexp-page-img-10'] }],
        },
        {
          type: 'TwoImage',
          images: [
            { url: ['ximtexp', '/ximtexp-page-img-11'] },
            { url: ['ximtexp', '/ximtexp-page-img-12'] },
          ],
        },
      ],
      titles: [
        {
          title: {
            title:
              'Этап 1 <span class="title__title-defis">-</span> Сбор данных',
            fontSize: 'simple',
          },
          text: 'Для сборки моделей мы запросили у заказчика фотографии товара. В данном проекте работа осложнялась наличием нестандартных деталей, из-за которых не всегда получалось дать точный размер. ',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 2 <span class="title__title-defis">-</span> Сборка 3D моделей',
            fontSize: 'simple',
          },
          text: 'Визуализация началась с подбора ракурсов, позволяющих наиболее точно передать размеры оборудования. Затем при помощи программы “3D Blender” собрали модели в пространстве.<br><br>Так выглядели промежуточные этапы моделирования:',
          padding: 'simple',
        },
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'На основе полученных от нашей команды 44 моделей, штатный специалист компании “ХИМТЕХ-Р” проработал текстуру и наклейки. Затем сделал финальный рендер с обработкой.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'Mobdebut',
        next: 'mobdebut',
        background: ['mobdebut', 'mobdebut-page-intro'],
      },
    };
  },
};
</script>
