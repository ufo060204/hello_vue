<template>
  <div class="container">
    <div class="app">
      <h2>總計為：{{ sum }}</h2>
      <h2>名字為：{{ person.name }}</h2>
      <h2>年齡為：{{ person.age }}</h2>
      <h2>車子：{{ car }}</h2>
      <button @click="changeSum">sum + 1</button>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年齡</button>
      <button @click="changePerson">修改整個人</button>
      <br>
      <button @click="changeBrand">修改品牌</button>
      <button @click="changeColor">修改顏色</button>
      <button @click="changeEngin">修改發動機</button>
    </div>
  </div>
</template>

<script setup lang="ts" name="App">
  import { ref, reactive, shallowRef, shallowReactive } from 'vue';

  let sum = shallowRef(0);
  let person = shallowRef({ name: 'John', age: 30 });
  let car = shallowReactive({ brand: 'Toyota', options: { color: "紅色", engin: "V8"}, price: 300000 });

  const changeSum = () => {
    sum.value += 1;
  };
  const changeName = () => {
    person.value.name = 'Tom';
  };
  const changeAge = () => {
    person.value.age += 1;
  };
  const changePerson = () => {
    person.value = { name: 'Mary', age: 25 };
  };

  const changeBrand = () => {
    car.brand = 'Ford';
  };
  const changeColor = () => {
    car.options.color = '藍色';
  };
  const changeEngin = () => {
    car.options.engin = 'V6';
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