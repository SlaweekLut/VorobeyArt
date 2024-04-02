<template>
  <div>
    <IntroTemplate :intro="intro" />
    <TaskTemplate :task="task" />
    <TitleTemplate :settings="titles[0]" />
    <TitleTemplate :settings="titles[1]" />
    <div class="moodboard">
      <div class="moodboard__img">
        <picture>
          <source
            media="(max-width: 768px)"
            srcset="/img/spisynote/Mobile/spisynote-page-img-01.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 769px)"
            srcset="/img/spisynote/PC/spisynote-page-img-01.webp"
            type="image/webp"
          />
          <source
            srcset="/img/spisynote/JPG/spisynote-page-img-01.jpg"
            type="image/jpeg"
          />
          <img
            srcset="/img/spisynote/PC/spisynote-page-img-01.webp"
            alt="Moodboard"
            type="image/webp"
          />
        </picture>
      </div>
    </div>
    <TitleTemplate :settings="titles[2]" />
    <GalleryTemplate :settings="gallery[0]" />
    <TitleTemplate :settings="titles[3]" />
    <div class="sketch">
      <div class="sketch__img">
        <picture>
          <source
            media="(max-width: 768px)"
            srcset="/img/spisynote/Mobile/spisynote-page-img-04.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 769px)"
            srcset="/img/spisynote/PC/spisynote-page-img-04.webp"
            type="image/webp"
          />
          <source
            srcset="/img/spisynote/JPG/spisynote-page-img-04.jpg"
            type="image/jpeg"
          />
          <img
            srcset="/img/spisynote/PC/spisynote-page-img-04.webp"
            alt="Sketch"
            type="image/webp"
          />
        </picture>
      </div>
    </div>
    <TitleTemplate :settings="titles[4]" />
    <div class="finall">
      <div class="finall__img">
        <picture>
          <source
            media="(max-width: 768px)"
            srcset="/img/spisynote/Mobile/spisynote-page-img-05.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 769px)"
            srcset="/img/spisynote/PC/spisynote-page-img-05.webp"
            type="image/webp"
          />
          <source
            srcset="/img/spisynote/JPG/spisynote-page-img-05.jpg"
            type="image/jpeg"
          />
          <img
            srcset="/img/spisynote/PC/spisynote-page-img-05.webp"
            alt="finall"
            type="image/webp"
          />
        </picture>
      </div>
    </div>
    <GalleryTemplate :settings="gallery[1]" />
    <TitleTemplate :settings="titles[5]" />
    <GalleryTemplate :settings="gallery[2]" />
    <GalleryTemplate :settings="gallery[3]" />
    <!-- // <LikeTemplate title="spicynote" /> -->
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
  name: 'SpicynotePage',
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
        icon: 'spisynote/PC/spisynote-page-icon.svg',
        logo: 'spisynote/PC/spisynote-page-logo.svg',
        img: ['spisynote', 'spisynote-page-intro'],
        title: 'SpicyNote',
        description:
          '— новый производитель натуральной косметики. Бренд выпускает средства по уходу для лица, волос и тела. Натуральные составы и никаких испытаний на животных.',
        tags: 'Логотип / Визуализация',
      },
      task: {
        titles: {
          title: {
            title: 'Задача',
            fontSize: 'simple',
          },
          text: 'Разработка логотипа бренда. Заказчик обратился к нам, имея определенные пожелания: строгий “дорогой” стиль и минималистичность. Важно, чтобы была подчеркнута главная особенность косметики – натуральность.',
          padding: 'task',
        },
        title: 'SPICYNOTE',
      },
      gallery: [
        {
          type: 'TwoImage',
          images: [
            { url: ['spisynote', '/spisynote-page-img-02'] },
            { url: ['spisynote', '/spisynote-page-img-03'] },
          ],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['spisynote', '/spisynote-page-img-06'] }],
        },
        {
          type: 'OneImage',
          border: 'simple',
          images: [{ url: ['spisynote', '/spisynote-page-img-07'] }],
        },
        {
          type: 'TwoImage',
          border: 'simple',
          images: [
            { url: ['spisynote', '/spisynote-page-img-08'] },
            { url: ['spisynote', '/spisynote-page-img-09'] },
          ],
        },
      ],
      titles: [
        {
          title: {
            title: 'Этап 1 <span class="title__title-defis">-</span> Бриф',
            fontSize: 'simple',
          },
          text: 'Для определения направления работы мы выяснили, какова целевая аудитория бренда, какие конкурентные преимущества имеет компания, где будет использоваться логотип. Также уточнили предпочтительные цвета. ',
          padding: 'simple',
        },
        {
          title: {
            title: 'Этап 2 <span class="title__title-defis">-</span> Мудборд',
            fontSize: 'simple',
          },
          text: 'На основе информации о бренде составили мудборд – палитру и образы, которые можем использовать. Зеленый цвет и листья ассоциируются с природой и натуральностью. Нота и специи – отсылки к названию.',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 3 <span class="title__title-defis">-</span> Создание набросков',
            fontSize: 'simple',
          },
          text: 'Приступили к созданию набросков. Проработали различные образы – ноты, листья, ветки и капли. Попробовали исполнение в разных форматах.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Отбор приоритетных вариантов',
            fontSize: 'simple',
          },
          text: 'После рассмотрения выбранных набросков наш клиент остановился на логотипе с интеграцией образа ноты - из-за прямой ассоциации с названием бренда.',
          padding: 'simple',
        },
        {
          title: {
            title:
              'Этап 4 <span class="title__title-defis">-</span> Проработка',
            fontSize: 'simple',
          },
          text: 'Далее мы приступили к заключительному этапу – проработке конечного варианта. Создали несколько финальных зарисовок в разных направлениях.',
          padding: 'simple',
        },
        {
          title: {
            title: 'Результат',
            fontSize: 'simple',
          },
          text: 'Нами был разработан логотип в строгом стиле минимализма, отражающий натуральность бренда и ассоциирующийся с его названием. Также мы проработали его исполнение с предпочтительными для заказчика оттенками – зеленым и оранжевым.',
          padding: 'simple',
        },
      ],
      footer: {
        title: 'Генезис проект',
        next: 'genezis',
        background: ['genezisproject', 'genezisproject-page-intro'],
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.moodboard, .sketch, .finall
	margin: 0 auto
	max-width: 1580px
	padding: 0px 30px
	&__img
		width: 100%
		img
			width: 100%
.finall
	max-width: 1260px
	padding: 90px 30px
	@media (max-width: 425px)
		padding: 50px 30px
</style>
