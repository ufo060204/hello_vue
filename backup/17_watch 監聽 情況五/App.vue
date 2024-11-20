<template>
  <Person />
</template>

<script lang="ts">
  import Person from './components/Person.vue';
  export default {
    name: 'App', // 元件名稱
    // 匯入的元件
    components: {
      Person,
    },
  };
</script>

<style>
</style>