<template>
  <div class="grand-child">
    <h3>孫元件</h3>
    <h4>存款：{{ money }} 萬元</h4>
    <h4>車子：一輛 {{ car.brand }} 車，價值 {{ car.price }} 萬元</h4>
    <button @click="updateMoney(6)"> 花爺爺的 money</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
  import { inject } from 'vue';

  // 加入預設值讓編譯器知道數據類型
  let {money, updateMoney} = inject('okane', {money: 0, updateMoney:(value: number) => {}});
  let car = inject('kuruma', { brand: '未知', price: 0 });
</script>

<style scoped>
  .grand-child {
    margin-top: 20px;
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>