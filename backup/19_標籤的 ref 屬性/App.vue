<template>
  <h2 ref="title2">你好</h2>
  <button @click="showLog">測試</button>
  <Person ref="people"/>
</template>

<!-- vue2 寫法 -->
<!-- <script lang="ts"> -->

<!-- vue3 寫法 -->
<script lang="ts" setup name="App">
  // 匯入的元件
  import Person from './components/Person.vue';
  import { ref } from 'vue';

  // 創建一個 title2 用於存儲 ref 標記的內容
  let title2 = ref();
  let people = ref();
  
  function showLog() {
    // console.log(title2.value);
    console.log(people.value);
  }
  
  
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