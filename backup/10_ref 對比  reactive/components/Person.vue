<template>
  <div class="person">
    <h2>汽車資訊：一輛{{car.brand}}車，價值{{car.price}}萬</h2>
    <button @click="changeBrand">修改汽車的品牌</button>
    <button @click="changePrice">修改汽車的價格</button>
    <button @click="changeCar">修改汽車</button>
    <hr>
    <h2>當前總和為：{{sum}}</h2>
    <button @click="changeSum">點我 sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from 'vue';
  // 數據
  let car = reactive({
    brand: '特斯拉',
    price: 300,
  });
  let sum = ref(0);

  // 方法
  function changePrice() {
    car.price += 10;
  }
  function changeBrand() {
    car.brand = '保時捷';
  }
  function changeCar() {
    // car = {
    //   brand: '法拉利',
    //   price: 500,
    // };
    // 這樣寫會報錯，因為 car 是一個 reactive 物件，不能直接賦值

    // car = reactive({
    //   brand: '法拉利',
    //   price: 500,
    // });
    // 這樣寫也會報錯，因為 car 是一個 reactive 物件，不能直接賦值

    Object.assign(car, {
      brand: '法拉利',
      price: 500,
    });
    // car.value = {
    //   brand: '法拉利',
    //   price: 500,
    // };
  }
  function changeSum() {
    sum.value += 1;
  }

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