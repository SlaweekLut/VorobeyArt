<template>
  <div>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <GalleryTemplate :settings="gallery[0]" />
    <TitleTemplate :settings="titles[1]" />
    <GalleryCardTemplate :settings="gallery[1]" />
    <TitleTemplate :settings="titles[2]" />
    <GalleryTemplate :settings="gallery[2]" />
    <TitleTemplate :settings="titles[3]" />
    <GalleryCardTemplate :settings="gallery[3]" />
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
  name: 'ZolotoaltayaPage',
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
        icon: 'zolotoaltaya/PC/zolotoaltaya-page-icon.svg',
        logo: 'zolotoaltaya/PC/zolotoaltaya-page-logo.svg',
        img: ['zolotoaltaya', 'zolotoaltaya-page-intro'],
        title: 'Золото Алтая',
        description:
          '— производитель органической косметики на основе алтайского мумиё. Бренд выпускает шампуни и бальзамы для волос, уходовые средства для лица и кремы для рук.',
        tags: '3D моделирование / Текстурирование / Дизайн',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Заказчику было необходимо сделать карточки товара для размещения на маркетплейсе Wildberries. Планировалась фотосессия продукции, требующая больших временных затрат из-за поиска фотографа и необходимости доставки товара в фотостудию.<br><br>Мы предложили более быстрое и простое решение - создание 3D моделей и дизайна карточек на их основе.<br><br>Из пожеланий клиента: соответствие изображений реальным товарам и лаконичное оформление с природным мотивом.',
          padding: 'task',
        },
        title: 'ЗОЛОТО АЛТАЯ',
      },
      gallery: [
        {
          type: 'OneImage',
          padding: '0 clamp(38px,10vw,150px)',
          images: [{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-01'] }],
        },
        {
          type: 'SixImage',
          images: [
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-02'] },
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-03'] },
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-04'] },
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-05'] },
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-06'] },
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-07'] },
          ],
        },
        {
          type: 'OneImage',
          padding: '0 clamp(38px,13.1vw,250px)',
          images: [{ url: ['zolotoaltaya', '/zolotoaltaya-page-img-08'] }],
        },
        {
          type: 'EightImage',
          images: [
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-09'] },
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-10'] },
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-11'] },
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-12'] },
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-13'] },
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-14'] },
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-15'] },
            { url: ['zolotoaltaya', '/zolotoaltaya-page-img-16'] },
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
          text: 'Для создания 3D карточек мы запросили только размеры продукции и ее этикетки, а также непрофессиональные фотографии.',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 2 <span class="title__title-defis">-</span> 3D моделирование',
            fontSize: 'simple',
          },
          text: 'Следующим шагом было моделирование продукции на основе размеров и этикеток средств. Для самой сборки мы использовали 3D Blender, работу с текстурами провели при помощи Substance Painter.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Этап 3 <span class="title__title-defis">-</span> Дизайн',
            fontSize: 'simple',
          },
          text: 'На основе готовых моделей и референсов заказчика разработали дизайн карточек. Сначала создали главный слайд, затем сделали второстепенные - в аналогичном стиле.<br><br>В оформлении использовали золотой и черный цвета - палитру бренда. Добавили зелень как символ природы и натуральности.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'Нами были созданы 3D модели продуктов бренда, на основе которых мы подготовили единый дизайн карточек Wildberries. При этом для их реализации от клиента потребовалось предоставить только минимальные сведения о продукции.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'Marusya',
        next: 'marusya',
        background: ['marusya', 'marusya-page-intro'],
      },
    };
  },
};
</script>
