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
    <LikeTemplate title="spicynote" />
    <FooterTemplate :settings="footer" />
  </div>
</template>

<script>
import GalleryTemplate from '@/components/Cases/Gallery.vue';
import TitleTemplate from '@/components/Cases/Title.vue';
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
          '??? ?????????? ?????????????????????????? ?????????????????????? ??????????????????. ?????????? ?????????????????? ???????????????? ???? ?????????? ?????? ????????, ?????????? ?? ????????. ?????????????????????? ?????????????? ?? ?????????????? ?????????????????? ???? ????????????????.',
        tags: '?????????????? / ????????????????????????',
      },
      task: {
        titles: {
          title: {
            title: '????????????',
            fontSize: 'simple',
          },
          text: '???????????????????? ???????????????? ????????????. ???????????????? ?????????????????? ?? ??????, ???????? ???????????????????????? ??????????????????: ?????????????? ???????????????????? ?????????? ?? ??????????????????????????????????. ??????????, ?????????? ???????? ?????????????????????? ?????????????? ?????????????????????? ?????????????????? ??? ??????????????????????????.',
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
            title: '???????? 1 <span class="title__title-defis">-</span> ????????',
            fontSize: 'simple',
          },
          text: '?????? ?????????????????????? ?????????????????????? ???????????? ???? ????????????????, ???????????? ?????????????? ?????????????????? ????????????, ?????????? ???????????????????????? ???????????????????????? ?????????? ????????????????, ?????? ?????????? ???????????????????????????? ??????????????. ?????????? ???????????????? ???????????????????????????????? ??????????. ',
          padding: 'simple',
        },
        {
          title: {
            title: '???????? 2 <span class="title__title-defis">-</span> ??????????????',
            fontSize: 'simple',
          },
          text: '???? ???????????? ???????????????????? ?? ???????????? ?????????????????? ?????????????? ??? ?????????????? ?? ????????????, ?????????????? ?????????? ????????????????????????. ?????????????? ???????? ?? ???????????? ?????????????????????????? ?? ???????????????? ?? ????????????????????????????. ???????? ?? ???????????? ??? ?????????????? ?? ????????????????.',
          padding: 'simple',
        },
        {
          title: {
            title:
              '???????? 3 <span class="title__title-defis">-</span> ???????????????? ??????????????????',
            fontSize: 'simple',
          },
          text: '???????????????????? ?? ???????????????? ??????????????????. ?????????????????????? ?????????????????? ???????????? ??? ????????, ????????????, ?????????? ?? ??????????. ?????????????????????? ???????????????????? ?? ???????????? ????????????????.',
          padding: 'simple',
        },
        {
          title: {
            title: '?????????? ???????????????????????? ??????????????????',
            fontSize: 'simple',
          },
          text: '?????????? ???????????????????????? ?????????????????? ?????????????????? ?????? ???????????? ?????????????????????? ???? ???????????????? ?? ?????????????????????? ???????????? ???????? - ????-???? ???????????? ???????????????????? ?? ?????????????????? ????????????.',
          padding: 'simple',
        },
        {
          title: {
            title:
              '???????? 4 <span class="title__title-defis">-</span> ????????????????????',
            fontSize: 'simple',
          },
          text: '?????????? ???? ???????????????????? ?? ?????????????????????????????? ?????????? ??? ???????????????????? ?????????????????? ????????????????. ?????????????? ?????????????????? ?????????????????? ?????????????????? ?? ???????????? ????????????????????????.',
          padding: 'simple',
        },
        {
          title: {
            title: '??????????????????',
            fontSize: 'simple',
          },
          text: '???????? ?????? ???????????????????? ?????????????? ?? ?????????????? ?????????? ??????????????????????, ???????????????????? ?????????????????????????? ???????????? ?? ?????????????????????????????? ?? ?????? ??????????????????. ?????????? ???? ?????????????????????? ?????? ???????????????????? ?? ?????????????????????????????????? ?????? ?????????????????? ?????????????????? ??? ?????????????? ?? ??????????????????.',
          padding: 'simple',
        },
      ],
      footer: {
        title: '?????????????? ????????????',
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
