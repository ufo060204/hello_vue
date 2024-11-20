<template>
  <div class="person">
    <h1>情況一：監聽【ref】定義的【基本類型】數據</h1>
    <h2>當前加總為：{{ sum }}</h2>
    <button @click="changeSum">點我 sum +1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, watch } from 'vue'
  // 數據
  const sum = ref(0)
  // 方法
  const changeSum = () => {
    sum.value += 1
  }
  // 監聽，情況一：監聽【ref】定義的【基本類型】數據
  const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log('sum 改變了', newValue, oldValue)
    if(newValue > 10) {
      stopWatch()
    }
  })
</script>

<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
li {
  font-size: 20px;
}
</style>