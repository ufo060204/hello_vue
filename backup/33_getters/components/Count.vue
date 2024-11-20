<template>
  <div class="count">
    <h2>當前總和為：{{ sum }}，放大 10 倍後：{{ bigSum }}</h2>
    <h3>歡迎來到：{{ school }}，大寫：{{ upperSchool }}，坐落於：{{ address }}</h3>
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
  import { storeToRefs } from 'pinia';
  // 引入 useCountStore
  import { useCountStore } from '@/store/count';
  // 使用 useCountStore，得到一個專門保存 count 相關的 store
  const countStore = useCountStore();

  // 解構 store 中的數據，會丟失響應式，但 toRefs() 包裹會將 store 中所有的項目都會轉成響應式(function 其實不用)，所以可以通過 storeToRefs 只會關注數據，不會對方法進行 ref 包裹
  const { sum, school, address, bigSum, upperSchool } = storeToRefs(countStore);
  console.log('!!!', storeToRefs(countStore))

  // 數據
  let n = ref(1); // 用戶選擇的數字

  // 方法
  function add() {
    countStore.increment(n.value);
  }
  function minus() {
    countStore.sum -= n.value;
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