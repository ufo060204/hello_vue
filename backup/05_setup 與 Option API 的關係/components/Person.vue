<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年齡：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="showTel">查看聯繫方式</button>
    <hr>
    <h2>測試1：{{ a }}</h2>
    <h2>測試2：{{ c }}</h2>
    <h2>測試3：{{ d }}</h2>
    <button @click="b">測試</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person', // 元件名稱
    beforeCreate() {
      console.log('beforeCreate');
    },
    data() {
      return {
        a: 100,
        c: this.name,
        d: 900
      }
    },
    methods: {
      b() {
        console.log('b');
      }
    },
    setup() {
      // 資料原來是寫在 data 中，此時的 name、age、tel 都不是響應式的數據
      let name = '小明';
      let age = 18;
      let tel = '0912345678';

      // 定義方法
      function changeName() {
        name = '小華'; // 注意：這樣修改資料不會觸發重新渲染
        console.log(name) // name 會改變，但畫面不會重新渲染
      }
      function changeAge() {
        age += 1; // 注意：這樣修改資料不會觸發重新渲染
        console.log(age) // age 會改變，但畫面不會重新渲染
      }
      function showTel() {
        alert(`聯繫方式：${tel}`);
      }
      return {name, age, changeName, changeAge, showTel};

      // setup 的返回值也可以是一個函式
      // 箭頭函式 函式體只有一行時，可以省略 return 和 {}
      // return () => '哈哈哈';
    }
  };
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