<template>
  <div class="person">
    <h1>情況三：監聽【reactive】定義的【物件類型】數據</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年齡：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="changePerson">修改整個人</button>
    <hr>
    <h2>測試：{{ obj.a.b.c }}</h2>
    <button @click="changeObj">修改 obj.a.b.c</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, watch } from 'vue'
  // 數據
  const person = reactive({
    name: '小明',
    age: 18
  })
  let obj = reactive({
    a: {
      b: {
        c: 666
      }
    }
  })
  // 方法
  const changeName = () => {
    person.name += '~'
  }
  const changeAge = () => {
    person.age += 1
  }
  const changePerson = () => {
    Object.assign(person, {
      name: '小紅',
      age: 20
    })
  }
  const changeObj = () => {
    obj.a.b.c = 999
  }
  // 監聽，情況三：監聽【reactive】定義的【物件類型】數據，且默認開啟【deep】監聽
  watch(person,(newValue, oldValue) => {
    console.log('person 改變了', newValue, oldValue)
  })
  watch(obj, (newValue, oldValue) => {
    console.log('obj 改變了', newValue, oldValue)
  })
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