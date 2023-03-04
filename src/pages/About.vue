<template>
  <div>
    <div class="content about-text">
      <TitlePage title="О нас" />
      <div class="content__wrapper about-text__wrapper">
        <p class="about-text__title">Команда</p>
        <p class="about-text__text">
          Команда, креатив которой не знает границ. Наши дизайнерские решения
          покоряют сердца, а технические навыки позволяют реализовывать самые
          смелые идеи.
          <br /><br />
          Точный контроль, выстроенные бизнес-процессы и максимальная
          вовлечённость в каждый проект позволяют вовремя реализовывать задачи.
          Поверьте, в Ваш проект команда вложит максимум своих знаний и умений.
        </p>
      </div>
    </div>
    <div class="content about-numbers">
      <div class="content__wrapper">
        <div class="about__numbers">
          <AboutNumbers
            :curtains="curtains"
            number="57"
            title="Завершенных проектов"
          />
          <AboutNumbers
            :curtains="curtains"
            number="45"
            title="Довольных клиентов"
          />
          <AboutNumbers
            :curtains="curtains"
            number="25"
            title="Общий опыт команды (лет)"
          />
          <AboutNumbers
            :curtains="curtains"
            number="7"
            title="лет успешной работы"
          />
        </div>
      </div>
    </div>
    <div class="content about">
      <div class="content__wrapper">
        <p class="about__title">CREATIVE</p>
        <div class="about__grid">
          <AboutCard
            v-for="(item, key) in cards"
            :key="key"
            :settings="item"
            :open="openAboutData"
            @openInfo="openInfo"
          />
        </div>
      </div>
    </div>
    <div class="content about-service">
      <div class="about-service__wrapper content__wrapper">
        <h2 class="about-service__title">Креативные Услуги</h2>
        <AboutService
          title="Разработка приложений"
          text="Работаем с ведущими платформами, в том числе <strong>Unity</strong>. Создаем приложения с использованием технологии <strong>AR (дополненная реальность)</strong>. Занимаемся мобильным программированием. Разрабатываем стильный <strong>дизайн приложений</strong>. Работаем как с <strong>iOS</strong>, так и с <strong>Android</strong>. Используем <strong>прототипирование</strong> для демонстрации промежуточного результата."
        />
        <AboutService
          title="3D моделирование "
          text="Создаем <strong>3D модели</strong> для сайтов, каталогов и маркетплейсов. Занимаемся <strong>предметной визуализацией</strong> различной сложности. Выполняем высокоточную <strong>3D визуализацию</strong> объектов и <strong>интерьеров</strong>. Работаем с <strong>3D анимацией</strong>."
        />
        <AboutService
          title="Графический дизайн"
          text="Разрабатываем <strong>логотипы</strong> и <strong>фирменный стиль</strong>. Работаем в направлении <strong>полиграфического дизайна</strong>, создаем рекламные <strong>баннеры и дизайн упаковки</strong>. Подготавливаем <strong>презентации</strong> с использованием <strong>инфографики</strong>. Прорабатываем <strong>дизайн сайтов</strong> и интуитивно понятные <strong>интерфейсы</strong> с точки зрения <strong>UI/UX</strong> дизайна."
        />
        <AboutService
          title="Разработка сайтов"
          text="Предлагаем <strong>веб</strong> услуги <strong>под ключ</strong> с выполнением <strong>UI/UX дизайна</strong>. Разрабатываем <strong>информационные системы</strong> для организаций, <strong>веб-сервисы</strong> и <strong>промо-сайты</strong>."
        />
        <AboutService
          title="Анимация"
          text="Создаем качественный визуальный контент с использованием <strong>3D анимации</strong>. Изготавливаем анимированные <strong>баннеры</strong>. Работаем с <strong>раскадровкой</strong>. Предлагаем услуги <strong>видеомонтажа</strong> и создания <strong>видеопрезентаций</strong> с использованием <strong>видеоинфографики</strong>."
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import AboutNumbers from '@/components/About/Numbers.vue';
import AboutService from '@/components/About/Service.vue';
import AboutCard from '@/components/About/Card.vue';
import TitlePage from '@/components/Title.vue';
export default {
  name: 'AboutPage',
  components: {
    AboutNumbers,
    AboutService,
    AboutCard,
    TitlePage,
  },
  provide() {
    return { Accordion: this.Accordion };
  },
  props: {
    curtains: String,
  },
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
      close: '00',
      openAboutData: '00',
      cards: [
        {
          img: '01',
          title: 'Считает лайки',
          subtitle: '',
          skills: [
            {
              title: 'Владение калькулятором',
              progress: '100',
            },
            {
              title: 'Порядочность',
              progress: '80',
            },
            {
              title: 'Ловля мышей',
              progress: '20',
            },
          ],
        },
        {
          img: '02',
          title: 'Артем',
          subtitle: 'Хранитель идей',
          skills: [
            {
              title: 'Ловкость рук',
              progress: '80',
            },
            {
              title: 'Работа в Paint',
              progress: '10',
            },
            {
              title: 'Организация команды',
              progress: '95',
            },
          ],
        },
        {
          img: '03',
          title: 'Симон',
          subtitle: 'Магистр надежных стратегий',
          skills: [
            {
              title: 'Однозадачность',
              progress: '20',
            },
            {
              title: 'Управление 150 детьми',
              progress: '95',
            },
            {
              title: 'Продажа снега эскимосам',
              progress: '80',
            },
          ],
        },
        {
          img: '04',
          title: 'Вячеслав',
          subtitle: 'Р@зр@бот4иk',
          skills: [
            {
              title: 'Магия вне Хогвартса',
              progress: '100',
            },
            {
              title: 'Приготовление оливье',
              progress: '30',
            },
            {
              title: 'Умение уметь',
              progress: '80',
            },
          ],
        },
        {
          img: '05',
          title: 'Светлана',
          subtitle: 'Менеджер счастья',
          skills: [
            {
              title: 'Ведение переговоров',
              progress: '90',
            },
            {
              title: 'Выращивание микрозелени',
              progress: '40',
            },
            {
              title: 'Управление временем',
              progress: '70',
            },
          ],
        },
        {
          img: '06',
          title: 'Ирина',
          subtitle: 'Штатный суетолог',
          skills: [
            {
              title: 'Владение фотошопом',
              progress: '90',
            },
            {
              title: 'Боевой настрой',
              progress: '70',
            },
            {
              title: 'Спокойствие',
              progress: '20',
            },
          ],
        },
        {
          img: '07',
          title: 'Анастасия',
          subtitle: 'Мастер планирования',
          skills: [
            {
              title: 'Обращение с пером',
              progress: '90',
            },
            {
              title: 'Вождение автомобиля',
              progress: '40',
            },
            {
              title: 'Критическое мышление',
              progress: '60',
            },
          ],
        },
        {
          img: '08',
          title: 'Катерина',
          subtitle: 'SMM Джедай',
          skills: [
            {
              title: 'Знание трендов',
              progress: '60',
            },
            {
              title: 'Расклады по звездам',
              progress: '90',
            },
            {
              title: 'Креативность',
              progress: '20',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    let countLikes = 0;
    axios.get('api/likes.json').then((response) => {
      let data = response.data;
      for (const i in data) {
        if (Object.hasOwnProperty.call(data, i)) {
          const count = Number(data[i]);
          countLikes += count;
        }
      }
      this.$data.cards[0].subtitle = `2 + 2 = ${countLikes}`;
    });
  },
  methods: {
    open(number) {
      if (number === this.$data.close) this.$data.close = '00';
      else this.$data.close = number;
    },
    openInfo(number) {
      if (number === this.$data.openAboutData) this.$data.openAboutData = '00';
      else this.$data.openAboutData = number;
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
.about-service {
  margin-top: 0;
  padding: 90px 93px 130px;
  border-top: 1px solid #d0d0d0;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;

  &__title {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 74px;
  }
}
.about-text {
  padding: 76px 93px 90px;
  margin: 0 auto;
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__title {
    font-size: 60px;
    font-weight: 700;
  }
  &__text {
    font-size: 20px;
    font-weight: 500;
    line-height: 120%;
  }
}
.about {
  padding: 90px 93px;
  margin: 0 auto !important;
  position: relative;
  z-index: 1;
  &__numbers {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    flex-wrap: wrap;
  }
  &__grid {
    display: grid;
    gap: 60px 50px;
    justify-content: center;
    grid-template-columns: repeat(4, 215px);
  }
  &__title {
    font-size: clamp(230px, 16vw, 250px);
    line-height: clamp(230px, 16vw, 250px);
    color: transparent;
    stroke: #000;
    -webkit-text-stroke: 2px #ededed;
    font-weight: 900;
    position: absolute;
    top: 50%;
    left: 50%;
    white-space: nowrap;
    transform: translate(-50%, -50%);
  }
}
.about-numbers {
  padding: 52px 32px 70px;
  margin: 0 auto;
  background-color: #f9f9f9;
}
@media (max-width: 1200px) {
  .about-text {
    margin: 0 auto;
    flex-direction: column-reverse;
    &__column {
      max-width: 100%;
    }
    &__images {
      max-width: 100%;
      min-width: 0;
      width: 100%;
      justify-content: center;
    }
  }
  .about {
    &__grid {
      grid-template-columns: repeat(4, 162px);
      gap: 45px 37px;
    }
    &__title {
      font-size: clamp(150px, 20vw, 190px);
      line-height: clamp(150px, 20vw, 190px);
    }
  }
}
@media (max-width: 1024px) {
  .about {
    padding: 90px 41px;
  }
  .about-service {
    padding: 90px 41px 130px;
    &__title {
      font-size: 48px;
      margin-bottom: 60px;
    }
  }
  .about-numbers {
    margin: 0 auto;
    padding: 43px 41px 60px;
  }
  .about-text {
    margin: 0 auto;
    padding: 52px 41px 60px;
    &__wrapper {
      gap: 20px;
    }
    &__title {
      font-size: 48px;
    }
    &__text {
      font-size: 18px;
    }
  }
}
@media (max-width: 960px) {
  .about {
    margin: 0 auto;
    &__grid {
      grid-template-columns: repeat(4, min(162px, calc(25% - 30px / 4)));
      gap: 40px 30px;
    }
  }
}
@media (max-width: 768px) {
  .about-numbers {
    margin: 0 auto;
    padding: 60px 41px;
  }
  .about-text {
    margin: 0 auto;
    padding: 46px 41px 60px;
    &__wrapper {
      gap: 25px;
    }
  }
  .about-service {
    padding: 60px 41px 130px;
  }
  .about {
    padding: 91px 41px;
    &__title {
      writing-mode: vertical-lr;
      font-size: 280px;
      line-height: 280px;
    }
    &__numbers {
      gap: 50px 0px;
    }
    &__grid {
      gap: 50px 60px;
      grid-template-columns: repeat(2, 215px);
    }
  }
}
@media (max-width: 570px) {
  .about {
    &__grid {
      gap: 15px 13px;
    }
    &__title {
      writing-mode: vertical-lr;
      font-size: 170px;
      line-height: 170px;
    }
  }
}
@media (max-width: 425px) {
  .about-text {
    margin: 0 auto;
    padding: 43px 31px 50px;
    &__wrapper {
      gap: 20px;
    }
    &__text {
      font-size: 16px;
    }
  }
  .about-numbers {
    margin: 0 auto;
    padding: 37px 31px 50px;
  }
  .about {
    padding: 53px 31px 51px;
    &__grid {
      grid-template-columns: repeat(2, 145px);
    }
  }
  .about-service {
    padding: 50px 31px;
    &__title {
      font-size: 32px;
      margin-bottom: 30px;
      white-space: nowrap;
    }
    &__wrapper {
      max-width: 100%;
      width: 100%;
    }
  }
}
@media (max-width: 394px) {
  .about {
    &__numbers {
      gap: 38px 0px;
    }
  }
  .about-numbers {
    margin: 0 auto;
    padding: 36px 31px 56px;
  }
}
</style>
