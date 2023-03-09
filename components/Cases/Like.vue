<template>
  <!-- <button @click="toggleLike" type="button">Set Like This Template Now Likes {{ likesCount }}</button> -->
  <div class="like">
    <p class="like__title">
      <span>CREATIVE</span>
    </p>
    <div class="like-button">
      <div class="like-button__info">
        <p class="like-button__title">Понравилась работа?</p>
        <p class="like-button__subtitle">Ставь кота!</p>
      </div>
      <button
        class="like-button__button"
        :class="{ 'like-button__button--pressed': pressed }"
        @click.stop.prevent="toggleLike"
      >
        <div class="like-button__img-wrapper">
          <picture>
            <source :srcset="`/img/like/Cat.png`" type="image/png" />
            <img
              :srcset="`/img/like/Cat.webp`"
              alt="Поставь котику лайк, если тебе понравилась работа"
              type="image/webp"
              class="like-button__img"
            />
          </picture>
          <picture>
            <source :srcset="`/img/like/Cat_Shadow.png`" type="image/png" />
            <img
              :srcset="`/img/like/Cat_Shadow.webp`"
              alt="Поставь котику лайк, если тебе понравилась работа"
              type="image/webp"
              class="like-button__img like-button__img--shadow"
            />
          </picture>
        </div>
        <!-- <img src="img/cats.png" alt="Поставь котику лайк, если тебе понравилась работа" class="like-button__img" /> -->
        <span class="like-button__decor like-button__decor--1">!</span>
        <span class="like-button__decor like-button__decor--2">*</span>
        <span class="like-button__decor like-button__decor--3">?</span>
        <span class="like-button__decor like-button__decor--4">#</span>
        <span class="like-button__decor like-button__decor--5">
          <svg
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.0784 1.33431C14.101 0.769979 12.8511 1.10488 12.2868 2.08232L3.79698 16.7871C3.23265 17.7645 3.56755 19.0144 4.54499 19.5787L10.5256 23.0316L10.4127 23.0798L11.2275 29.843L17.492 27.1671L17.4773 27.0452L23.46 30.4993C24.4375 31.0637 25.6873 30.7288 26.2517 29.7513L34.7415 15.0465C35.3058 14.0691 34.9709 12.8192 33.9934 12.2549L15.0784 1.33431Z"
              fill="#0181C8"
            />
            <path
              d="M21.2079 12.5602C22.2154 12.2282 23.4033 12.3358 24.3801 12.8997C26.1091 13.898 26.7196 15.9779 25.7676 17.6268C24.6002 19.6488 21.7432 20.1966 17.4147 21.0264L17.404 21.0284L16.1821 21.2652L15.773 20.0939L15.7619 20.0619C14.3236 15.9052 13.3748 13.1632 14.5402 11.1447C15.4922 9.49577 17.5987 8.98453 19.3278 9.98277C20.3045 10.5467 20.9916 11.5216 21.2079 12.5602Z"
              fill="white"
            />
          </svg>
        </span>
        <span class="like-button__counter">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3312 2.82915C11.3795 1.63654 12.9855 0.881836 14.6589 0.881836C17.621 0.881836 19.9484 3.13662 19.9484 6.00635C19.9484 9.52539 16.6839 12.3934 11.7379 16.7385L11.7257 16.7492L10.3312 17.9791L8.93669 16.7585L8.89876 16.7251C3.96713 12.3833 0.713989 9.51928 0.713989 6.00635C0.713989 3.13662 3.04135 0.881836 6.00345 0.881836C7.67684 0.881836 9.28291 1.63654 10.3312 2.82915Z"
              :fill="isLiked ? 'white' : '#4DA7D8'"
            />
          </svg>

          {{ likesCount }}
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { nanoid } from 'nanoid';

export default {
  name: 'LikeTemplate',
  props: {
    title: {
      type: String,
      default: 'like',
    },
  },
  data() {
    return {
      likesCount: 0,
      isLiked: false,
      sending: false,
      pressed: false,
      clientId: '',
    };
  },
  async mounted() {
    if (!localStorage.getItem(`vorobeyArtClientId-${this.$props.title}`)) {
      this.clientId = nanoid();
      localStorage.setItem(
        `vorobeyArtClientId-${this.$props.title}`,
        this.clientId
      );
    } else {
      this.clientId = localStorage.getItem(
        `vorobeyArtClientId-${this.$props.title}`
      );
    }

    await this.getLikes();
  },
  methods: {
    async update(toggle = false) {
      this.sending = true;
      try {
        const { data } = await axios.post('/like-handler.php', {
          id: this.clientId,
          toggle: toggle,
        });
        this.likesCount = data.likesCount;
        this.isLiked = data.isLiked;
      } catch (error) {
        console.log('не удалось обновить количество лайков', error);
      } finally {
        this.sending = false;
      }
    },
    async getLikes() {
      await this.update();
    },
    async toggleLike() {
      this.markButtonAsPressed();
      if (!this.sending) {
        await this.update(true);
      }
    },

    markButtonAsPressed() {
      if (!this.pressed) {
        this.pressed = true;
        setTimeout(() => {
          this.pressed = false;
        }, 300);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.like {
  padding: 53px 40px 52px;
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.15);
  z-index: 1;
  &__title {
    height: 100%;
    font-size: clamp(80px, 23vw, 430px);
    line-height: 0;
    color: transparent;
    stroke: #000;
    -webkit-text-stroke: 2px #ededed;
    font-weight: 900;
    position: absolute;
    top: 50%;
    left: 50%;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    user-select: none;
    align-items: center;
    display: flex;
    align-items: center;
    pointer-events: none;
    span {
      font-size: clamp(80px, 23vw, 430px);
      line-height: 0;
      color: transparent;
      stroke: #000;
      -webkit-text-stroke: 2px #ededed;
    }
  }
}

.like-button {
  max-width: 936px;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  &__title {
    font-weight: 700;
    font-size: 60px;
  }
  &__subtitle {
    font-weight: 500;
    font-size: 30px;
  }
  &__info {
    display: flex;
    flex-direction: column;
  }
  &__button {
    position: relative;
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;

    &:hover {
      .like-button {
        &__img-wrapper {
          animation: imgWrapper 0.3s ease-out;
        }
      }
    }
    &--pressed {
      .like-button {
        &__img:not(&__img--shadow) {
          animation: img 0.3s linear;
        }
        &__decor {
          &--1 {
            animation: decor1p 0.3s ease-out both !important;
          }
          &--2 {
            animation: decor2p 0.3s ease-out both !important;
          }
          &--3 {
            animation: decor3p 0.3s ease-out both !important;
          }
          &--4 {
            animation: decor4p 0.3s ease-out both !important;
          }
          &--5 {
            animation: decor5p 0.3s ease-out both !important;
          }
        }
      }
    }
    @keyframes imgWrapper {
      0% {
        transform: rotate(5deg);
      }
      50% {
        transform: rotate(-5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    @keyframes decor1 {
      0% {
        transform: translate(0, 0) rotate(302deg);
      }
      33% {
        transform: translate(3px, 0) rotate(302deg);
      }
      66% {
        transform: translate(3px, 6px) rotate(302deg);
      }
      100% {
        transform: translate(0, 0) rotate(302deg);
      }
    }
    @keyframes decor2 {
      0% {
        transform: translate(0, 0);
      }
      33% {
        transform: translate(0, -3px);
      }
      66% {
        transform: translate(-3px, 2px);
      }
      100% {
        transform: translate(0, 0);
      }
    }
    @keyframes decor3 {
      0% {
        transform: translate(0, 0) rotate(32deg);
      }
      33% {
        transform: translate(0, -3px) rotate(32deg);
      }
      66% {
        transform: translate(-3px, 2px) rotate(32deg);
      }
      100% {
        transform: translate(0, 0) rotate(32deg);
      }
    }
    @keyframes decor4 {
      0% {
        transform: translate(0, 0) rotate(-48deg);
      }
      33% {
        transform: translate(0, 3px) rotate(-48deg);
      }
      66% {
        transform: translate(3px, 2px) rotate(-48deg);
      }
      100% {
        transform: translate(0, 0) rotate(-48deg);
      }
    }
    @keyframes decor5 {
      0% {
        transform: translate(0, 0);
      }
      33% {
        transform: translate(3px, 3px);
      }
      66% {
        transform: translate(0px, 2px);
      }
      100% {
        transform: translate(0, 0);
      }
    }
    @keyframes img {
      0% {
        transform: translate(-50%, -50%);
      }
      50% {
        transform: translate(-50%, calc(-50% + 10px));
      }
      100% {
        transform: translate(-50%, -50%);
      }
    }
    @keyframes decor1p {
      0% {
        left: 50%;
        top: 50%;
        scale: 0;
        opacity: 0;
        transform: transition(-50%, -50%) rotate(302deg);
      }
      100% {
        left: 28px;
        top: 43px;
        scale: 1;
        opacity: 1;
        transform: transition(0, 0) rotate(302deg);
      }
    }
    @keyframes decor2p {
      0% {
        left: 50%;
        top: 50%;
        scale: 0;
        opacity: 0;
        transform: transition(-50%, -50%);
      }
      100% {
        top: 37px;
        scale: 1;
        opacity: 1;
        left: 35px;
        transform: transition(0, 0);
      }
    }
    @keyframes decor3p {
      0% {
        right: 50%;
        top: 50%;
        scale: 0;
        opacity: 0;
        transform: transition(-50%, -50%) rotate(32deg);
      }
      100% {
        scale: 1;
        opacity: 1;
        right: 26px;
        top: 20px;
        transform: transition(0, 0) rotate(32deg);
      }
    }
    @keyframes decor4p {
      0% {
        right: 50%;
        top: 50%;
        scale: 0;
        opacity: 0;
        transform: transition(-50%, -50%) rotate(-48deg);
      }
      100% {
        scale: 1;
        opacity: 1;
        right: 26px;
        top: 100px;
        transform: transition(0, 0) rotate(-48deg);
      }
    }
    @keyframes decor5p {
      0% {
        right: 50%;
        top: 50%;
        scale: 0;
        opacity: 0;
        transform: transition(-50%, -50%);
      }
      100% {
        scale: 1;
        opacity: 1;
        right: 13px;
        top: 53px;
        transform: transition(0, 0);
      }
    }
  }
  &__img-wrapper {
    height: 175px;
    width: 204px;
    position: relative;
  }
  &__img {
    height: 100%;
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 130px;
    height: 160px;
    transform: translate(-50%, -50%);
    &--shadow {
      z-index: 0;
      width: 145px;
      height: 194px;
    }
  }
  &__counter {
    position: absolute;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    padding: 10px 16px 8px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    gap: 8px;
    color: #fff;
    right: calc(100% - 80px);
    bottom: 36px;
    transform: rotate(-15deg);
    background-color: #0181c8;
    border-radius: 4px;
    z-index: 1;
    &::after {
      content: '';
      position: absolute;
      background-image: url("data:image/svg+xml,%3Csvg width='14' height='18' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.34159 0.35791L13.7047 8.84201L7.34159 17.3261L0.978516 8.84201L7.34159 0.35791Z' fill='%230181C8'/%3E%3C/svg%3E%0A");
      background-size: contain;
      top: 100%;
      left: 50%;
      height: 21px;
      width: 16px;
      transform: translate(-50%, -50%);
    }
  }
  &__decor {
    display: block;
    z-index: 1;
    position: absolute;
    &--1 {
      font-size: 43px;
      left: 28px;
      transform: rotate(302deg);
      top: 43px;
      animation: decor1 2s linear infinite;
      font-weight: 700;
    }
    &--2 {
      font-size: 16px;
      top: 37px;
      animation: decor2 2s linear infinite;
      left: 35px;
      font-weight: 700;
    }
    &--3 {
      right: 26px;
      top: 20px;
      animation: decor3 2s linear infinite;
      font-size: 25px;
      transform: rotate(32deg);
      font-weight: 600;
    }
    &--4 {
      right: 26px;
      top: 100px;
      animation: decor4 2s linear infinite;
      font-size: 49px;
      transform: rotate(-48deg);
      font-weight: 500;
    }
    &--5 {
      right: 13px;
      top: 53px;
      animation: decor5 2s linear infinite;
    }
  }
}

@media (max-width: 1024px) {
  .like {
    height: 334px;
    &__title {
      span {
        -webkit-text-stroke: 1px #ededed;
      }
    }
  }
  .like-button {
    max-width: 671px;
    &__title {
      font-size: 40px;
    }
    &__subtitle {
      font-size: 20px;
      margin-top: 7px;
    }
    &__counter {
      font-size: 16px;
      gap: 6px;
      padding: 7px 13px 6px;
      bottom: 16px;
    }
    &:hover {
      .like-button {
        &__img-wrapper {
          animation: unset;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .like {
    height: 308px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
    &__title {
      top: 38%;
    }
  }
  .like-button {
    flex-direction: column-reverse;
    text-align: center;
    gap: 22px;
    &__counter {
      right: calc(100% - 60px);
    }
    &__button {
      height: 130px;
      width: 164px;
    }
    &__img-wrapper {
      height: 130px;
      width: 154px;
      position: relative;
    }
    &__img {
      width: 100px;
      height: 123px;
      &--shadow {
        width: 103px;
        height: 145px;
      }
    }
    &__decor {
      &--1 {
        font-size: 35px;
      }
      &--2 {
        font-size: 12px;
      }
      &--3 {
        font-size: 22px;
      }
      &--4 {
        right: 26px;
        top: 90px;
        font-size: 40px;
      }
      &--5 {
        right: 13px;
        top: 53px;
      }
    }
  }
}

@media (max-width: 507px) {
  .like {
    height: 404px;
  }
}
@media (max-width: 425px) {
  .like {
    &__title {
      transform: translate(-50%, -57%);
    }
  }
}
</style>
