<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年齡：{{ person.age }}, {{ nl }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, toRefs, toRef } from 'vue'

  // 數據
  let person = reactive({
    name: '小明',
    age: 30,
  })

  let { name, age } = toRefs(person)
  let nl = toRef(person, 'age')
  console.log('nl', nl.value)

  // 方法
  function changeName() {
    person.name += '~'
    console.log(name.value, person.name)
  }
  function changeAge() {
    person.age += 1
    console.log('age', age)
    console.log('person.age', person.age)
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