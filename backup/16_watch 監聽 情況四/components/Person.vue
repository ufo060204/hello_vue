<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年齡：{{ person.age }}</h2>
    <h2>汽車：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="changeC1">修改第一台車</button>
    <button @click="changeC2">修改第二台車</button>
    <button @click="changeCar">修改整個車</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, watch } from 'vue';
  
  // 數據
  let person = reactive({
    name: '小明',
    age: 30,
    car: {
      c1: '保時捷',
      c2: '特斯拉'
    },
  });

  function changeName() {
    person.name += '~';
  }
  function changeAge() {
    person.age += 1;
  }
  function changeC1() {
    person.car.c1 = '阿斯拉';
  }
  function changeC2() {
    person.car.c2 = '凰牙';
  }
  function changeCar() {
    person.car = {
      c1: '旋風衝鋒',
      c2: '颶風音速'
    };
  }

  // 監聽，情況四：監聽響應式物件中的某個屬性，且該屬性是基本類型的，要寫成函數式
  // watch(() => person.name, (newVal, oldVal) => {
  //   console.log('person.name 變化了', newVal, oldVal);
  // });

  // 監聽，情況四：監聽響應式物件中的某個屬性，且該屬性是物件類型的，可以直接寫，也能寫成函數式，但更推薦寫成函數式
  watch(() => person.car, (newVal, oldVal) => {
    console.log('person.car 變化了', newVal, oldVal);
  }, { deep: true });

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