<template>
  <Person />
</template>

<!-- vue2 寫法 -->
<!-- <script lang="ts"> -->

<!-- vue3 寫法 -->
<script lang="ts" setup name="App">
  // 匯入的元件
  import Person from './components/Person.vue';
  
  // vue3 寫法
  // 不需要再寫 export default

  // vue2 寫法
  // export default {
  //   name: 'App', // 元件名稱
  //   // 匯入的元件
  //   components: {
  //     Person,
  //   },
  // };
</script>

<style>
</style>