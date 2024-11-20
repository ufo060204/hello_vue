<template>
  <div class="child1">
    <h3>子元件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>書籍：{{ book }} 本</h4>
    <button @click="minusHouse($parent)">打掉父親的一棟房子</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
  import { ref } from 'vue';

  //數據
  let toy = ref('小汽車');
  let book = ref(3)

  // 方法
  function minusHouse(parent: any) {
    // console.log(parent)
    parent.house -= 1;
  }

  // 把數據交給外部使用
  defineExpose({ toy, book })
</script>

<style scoped>
  .child1 {
    margin-top: 20px;
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>