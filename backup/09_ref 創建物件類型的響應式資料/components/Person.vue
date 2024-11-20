<template>
  <div class="person">
    <h2>汽車資訊：一輛{{car.brand}}車，價值{{car.price}}萬</h2>
    <button @click="changePrice">修改汽車的價格</button>
    <hr>
    <h2>遊戲列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一個遊戲的名字</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from 'vue';
  // 數據
  let car = ref({
    brand: '特斯拉',
    price: 300,
  });
  let games = ref([
    {id: 1, name: '艾爾登法環'},
    {id: 2, name: '死亡擱淺'},
    {id: 3, name: '極地戰嚎'},
  ])
  let obj = reactive({ x: 999 })
  console.log(car); // RefImpl 的物件實例
  console.log(obj); // Proxy {a: {…}}

  // 方法
  function changePrice() {
    car.value.price += 10;
  }
  function changeFirstGame() {
    games.value[0].name = '異塵餘生';
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