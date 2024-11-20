<template>
  <div class="count">
    <h2>當前總和為：{{ countStore.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">減</button>
  </div>
</template>

<!-- name 是為了定義元件的名稱，不寫的話會找檔案名稱當作元件名稱。但最好還是寫上 -->
<script setup lang="ts" name="Count">
  import { reactive, ref } from 'vue';
  import { useCountStore } from '@/store/count';

  const countStore = useCountStore();

  //以下兩種方式都可以取到 state 中的數據
  // 由於 sum 是包在 countStore 中的 ref 物件，所以不用再加 .value 取值，直接取即可
  console.log('@', countStore.sum);
  // 使用下面的方式也可以取到值，但一般使用上面的方式
  console.log('@', countStore.$state.sum);


  // let obj = reactive({
  //   a: 1,
  //   b: 2,
  //   c: ref(3)
  // })
  // let x = ref(9)
  // console.log(obj.a)
  // console.log(obj.b)
  // console.log(obj.c)

  // 數據
  let n = ref(1); // 用戶選擇的數字

  // 方法
  function add() {
  }
  function minus() {
  }
</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>