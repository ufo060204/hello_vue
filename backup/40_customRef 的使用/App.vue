<template>
  <div class="container">
    <div class="app">
      <h2>{{ msg }}</h2>
      <input type="text" v-model="msg">
    </div>
  </div>
</template>

<script setup lang="ts" name="App">
// import { ref, customRef } from 'vue';

// 引入封裝後的 customRef 函數 hook
import useMsgRef from './useMsgRef';

  // 使用 Vue 提供的默認 ref 定義響應式數據，數據一變化，視圖就會重新渲染
  // let msg = ref('你好');

  // 使用 useMsgRef hook 定義響應式數據且有延遲的效果
  let { msg } = useMsgRef('你好', 2000);
  
</script>

<style scoped>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  button {
    margin: 10px;
  }
</style>