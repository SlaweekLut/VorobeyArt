<template>
  <div class="home-slides" :class="[idClass]">
    <div class="home-slides-info">
      <p class="home-slides-info__text home-slides-info__top">
        01 <span></span> 05/10/22
      </p>
      <p class="home-slides-info__text">Play Market \ App Store</p>
    </div>
    <img
      :style="`transform: rotate(${imgRotate}deg) translate(-50%, -50%)`"
      :src="`/img/${src}.png`"
      :alt="title"
      class="home-slides__img"
    />
    <h1 class="home-slides__title">{{ title }}</h1>
    <div class="home-slides__background"></div>
  </div>
</template>

<script>
export default {
  name: 'SlideHome',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    idClass: {
      type: String,
      default: '',
    },
    imgRotate: {
      type: String,
      default: '0',
    },
  },
};
</script>
