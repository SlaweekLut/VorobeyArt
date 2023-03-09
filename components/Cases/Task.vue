<template>
  <div class="task">
    <TitlePage :title="task.title" class="title-aside--case" />
    <TitleTemplate :settings="task.titles" />
  </div>
</template>

<script>
import TitleTemplate from '@/components/Cases/Title.vue';
import TitlePage from '@/components/Title.vue';

export default {
  name: 'TaskTemplate',
  components: {
    TitleTemplate,
    TitlePage,
  },
  props: {
    task: {
      default: {
        titles: {
          modifer: '',
          type: '',
          title: {
            title: '',
            fontSize: '',
            separator: '',
            titleFirst: '',
            titleSecond: '',
          },
          underTitleLine: false,
          subtitle: '',
          number: {
            number: '',
            fontSize: '',
          },
          padding: '0',
        },
        title: '',
      },
    },
  },
};
</script>

<style lang="sass" scoped>
.task
	position: relative
	z-index: 3
	background: #F9F9F9
</style>

<style lang="sass">
.task > .title-aside
	top: 76px
</style>
