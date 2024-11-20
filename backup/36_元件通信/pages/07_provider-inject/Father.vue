<template>
  <div class="father">
    <h2>父元件</h2>
    <h3>存款：{{ money }} 萬元</h3>
    <h3>車子：一輛 {{ car.brand }} 車，價值 {{ car.price }} 萬元</h3>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue';
  import { ref, reactive, provide } from 'vue';

  let money = ref(100);
  let car = reactive({ brand: 'Toyota', price: 100 });

  function updateMoney(value: number) {
    money.value -= value;
  }

  // 向後代提供數據，這邊不能寫 money.value，因為 money 是 ref 類型，不是數值，.value 是取值的方法，等於傳了 100 過去，不是響應式
  // provide('okane', {money:money, updateMoney});
  // 可簡寫
  provide('okane', {money, updateMoney});
  provide('kuruma', car);
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
</style>