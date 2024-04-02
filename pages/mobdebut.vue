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
    <TitleTemplate :settings="titles[2]" />
    <GalleryTemplate :settings="gallery[2]" />
    <div class="content" style="padding-bottom: 0">
      <div class="content__wrapper">
        <GalleryTemplate :settings="gallery[3]" />
      </div>
    </div>
    <TitleTemplate :settings="titles[3]" />
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
  name: 'MobdebutPage',
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
        icon: 'mobdebut/PC/mobdebut-page-icon.svg',
        logo: 'mobdebut/PC/mobdebut-page-logo.svg',
        img: ['mobdebut', 'mobdebut-page-intro'],
        title: 'Mobdebut',
        description:
          ' — разработчик и производитель интеллектуальных счетчиков электроэнергии. Компания предлагает комплексные решения для коммунальных служб, реализует современные технологии в собственных разработках.',
        tags: '3D моделирование / Текстурирование',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Заказчик выходил на рынок с собственными системами контроля и управления электроэнергией. Необходимо было создать их изображения на основе 3D моделей - для размещения на сайте компании.',
          padding: 'task',
        },
        title: 'MOBDEBUT',
      },
      gallery: [
        {
          type: 'OneImage',
          images: [{ url: ['mobdebut', '/mobdebut-page-img-01'] }],
        },
        {
          type: 'FourImage',
          border: 'simple',
          mod: 'mobdebut',
          images: [
            { url: ['mobdebut', '/mobdebut-page-img-02'] },
            { url: ['mobdebut', '/mobdebut-page-img-03'] },
            { url: ['mobdebut', '/mobdebut-page-img-04'] },
            { url: ['mobdebut', '/mobdebut-page-img-05'] },
          ],
        },
        {
          type: 'OneImage',
          images: [{ url: ['mobdebut', '/mobdebut-page-img-06'] }],
        },
        {
          type: 'OneImage',
          images: [{ url: ['mobdebut', '/mobdebut-page-img-07'] }],
        },
        {
          type: 'ThreeImageCol',
          border: 'simple',
          images: [
            { url: ['mobdebut', '/mobdebut-page-img-08'] },
            { url: ['mobdebut', '/mobdebut-page-img-09'] },
            { url: ['mobdebut', '/mobdebut-page-img-10'] },
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
          text: 'Для сборки моделей мы запросили у заказчика фотографии оборудования. В данном проекте решение задачи осложнялось плохим качеством наработок - отсутствующие на фото детали и особенности технической части устройств приходилось уточнять у нашего клиента.',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 2 <span class="title__title-defis">-</span> Сборка 3D моделей',
            fontSize: 'simple',
          },
          text: 'Визуализация началась с подбора ракурсов, позволяющих наиболее точно передать размеры оборудования. Затем при помощи “Blender” собрали модели в пространстве.<br><br>Так выглядели промежуточные этапы моделирования:',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 3 <span class="title__title-defis">-</span> Проработка',
            fontSize: 'simple',
          },
          text: 'Создали текстуры и добавили на них необходимые наклейки, которые собирали в Adobe Photoshop. Далее настроили освещение, обработали рендеры - получились готовые модели.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'Создали изображения устройств из 3D моделей, которые полностью соответствуют реальным объектам. Несмотря на сложности с фотографиями, удалось проработать даже мельчайшие детали.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'Prime travel',
        next: 'primetravel',
        background: ['primetravel', 'primetravel-page-intro'],
      },
    };
  },
};
</script>
