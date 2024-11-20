<template>
  <div class="container">
    <div class="app">
      <h2>當前 sum1 總計為：{{ sum1 }}</h2>
      <h2>當前 sum2 總計為：{{ sum2 }}</h2>
      <h2>車子(2)：{{ car2 }}</h2>
      <button @click="changeSum1">sum1 + 1</button>
      <button @click="changeSum2">sum2 + 1</button>
      <button @click="changeBrand2">修改品牌(car2)</button>
      <button @click="changeColor2">修改顏色(car2)</button>
      <button @click="changePrice2">修改價格(car2)</button>
    </div>
  </div>
</template>

<script setup lang="ts" name="App">
  // readonly, shallowReadonly 用於保護數據不被修改，但 shallowReadonly 只能保護第一層，第二層及以下的數據是可以修改的，readonly 則是全部都不能修改，readonly 用的比較多
  import { ref, reactive, readonly, shallowReadonly } from 'vue';

  let sum1 = ref(0);
  let sum2 = readonly(sum1);
  let car1 = reactive({ 
    brand: '特斯拉',
    options: { color: "黑色", price: 100 },
  })
  let car2 = shallowReadonly(car1);

  const changeSum1 = () => {
    sum1.value += 1;
  };
  const changeSum2 = () => {
    sum2.value += 1; // sum2 是不能修改的
  };

  const changeBrand2 = () => {
    car2.brand = 'BMW';
  };
  const changeColor2 = () => {
    car2.options.color = '白色';
  };
  const changePrice2 = () => {
    car2.options.price += 10;
  };
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