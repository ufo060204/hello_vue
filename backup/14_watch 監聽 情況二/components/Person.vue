<template>
  <div class="person">
    <h1>情況二：監聽【ref】定義的【物件類型】數據</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年齡：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="changePerson">修改整個人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, watch } from 'vue'
  // 數據
  const person = ref({
    name: '小明',
    age: 18
  })
  // 方法
  const changeName = () => {
    person.value.name += '~'
  }
  const changeAge = () => {
    person.value.age += 1
  }
  const changePerson = () => {
    person.value = {
      name: '小紅',
      age: 20
    }
  }
  /* 
  監聽，情況二：監聽【ref】定義的【物件類型】數據，監聽的是【引用】，若想監聽物件內部屬性的變化，需要手動開啟【deep】監聽
  watch 的第一個參數是：要監聽的數據
  watch 的第二個參數是：數據改變時的回調函數
  watch 的第三個參數是：配置對象，(deep: true) 表示開啟【深度】監聽、immediate: true 表示立即執行一次回調函數，還有其他配置，請參考文檔 
  */
  watch(person, (newValue, oldValue) => {
    console.log('person 改變了', newValue, oldValue)
  }, { deep: true })
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