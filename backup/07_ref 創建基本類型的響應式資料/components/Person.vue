<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年齡：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="showTel">查看聯繫方式</button>
  </div>
</template>

<!-- <script lang="ts">
  export default {
    name: 'Person', // 元件名稱
  };
</script> -->

<script lang="ts" setup name="Person">
  import { ref } from 'vue';
  // 資料原來是寫在 data 中，此時的 name、age、tel 都不是響應式的數據
  let name = ref('小明');
  let age = ref(18);
  let tel = '0912345678';
  let address = '台北市信義區';

  // console.log(name); RefImpl 的物件實例
  // console.log(age); RefImpl 的物件實例
  // console.log(tel); 
  // console.log(address)

  // 定義方法
  function changeName() {
    name.value = '小華'; // 注意：這樣修改資料不會觸發重新渲染
    console.log(name.value) // name 會改變，但畫面不會重新渲染
  }
  function changeAge() {
    age.value += 1; // 注意：這樣修改資料不會觸發重新渲染
    console.log(age.value) // age 會改變，但畫面不會重新渲染
  }
  function showTel() {
    alert(`聯繫方式：${tel}`);
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
</style>