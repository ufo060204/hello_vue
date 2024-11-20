<template>
  <div class="count">
    <h2>當前總和為：{{ sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">減</button>
  </div>
</template>

<!-- name 是為了定義元件的名稱，不寫的話會找檔案名稱當作元件名稱。但最好還是寫上 -->
<script setup lang="ts" name="Count">
  import { ref } from 'vue';

  // 數據
  let sum = ref(1); // 當前總和
  let n = ref(1); // 用戶選擇的數字

  // 方法
  function add() {
    sum.value += n.value;
  }
  function minus() {
    sum.value -= n.value;
  }
</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>