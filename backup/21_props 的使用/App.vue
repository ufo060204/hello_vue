<template>
  <!-- 務必看懂下面的程式碼 -->
  <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe">測試</h2> -->
  <Person a="哈哈" :list="personList"/>
</template>

<!-- vue2 寫法 -->
<!-- <script lang="ts"> -->

<!-- vue3 寫法 -->
<script lang="ts" setup name="App">
  // 匯入的元件
  import Person from './components/Person.vue';
  import { type Persons } from '@/types'
  import { reactive } from 'vue'

  let x = 9

  let personList = reactive<Persons>([
    { id: 'andy8256', name: '小明', age: 30 },
    { id: 'andy8257', name: '小華', age: 25 },
    // { id: 'andy8258', name: '小菁', age: 28, x: 666 }
    { id: 'andy8258', name: '小菁', age: 28}
  ])

  console.log(personList)
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