<template>
  <div class="container">
    <div class="app">
      <h2>姓名：{{ person.name }}</h2>
      <h2>年齡：{{ person.age }}</h2>
      <button @click="person.age += 1">修改年齡</button>
      <hr>
      <h2>一台車：{{ car2 }}</h2>
      <button @click="car2.price += 10">點我價格加上 10</button>
    </div>
  </div>
</template>

<script setup lang="ts" name="App">
  import  { reactive, toRaw, markRaw } from 'vue';
  import mockjs from 'mockjs';

  /* toRaw */
  let person = reactive({ 
    name: 'John', 
    age: 30
  });
  // 用於獲取一個響應式數據的原始數據
  let rowPerson = toRaw(person);
  // console.log('響應式數據', person);
  // console.log('原始數據', rowPerson);

  // function showPerson(p:any) {
  //   p.name += 10;
  //   p.age += '~'
  //   console.log('p', p);
  // }

  /* markRaw */
  let car = markRaw({
    brand: '特斯拉',
    price: 100
  })
  let car2 = reactive(car);
  console.log('car', car);
  console.log('car2', car2);
  // car.price += 1;
  // car.price += 1;
  // car.price += 1;

  // 用於標記一個目標，使其永遠不會被轉換為響應式目標
  let mockJs = markRaw(mockjs)
  console.log(mockJs)

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