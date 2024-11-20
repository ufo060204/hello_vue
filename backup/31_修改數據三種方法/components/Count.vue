<template>
  <div class="count">
    <h2>當前總和為：{{ countStore.sum }}</h2>
    <h3>歡迎來到：{{ countStore.school }}，坐落於：{{ countStore.address }}</h3>
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
  // 引入 useCountStore
  import { useCountStore } from '@/store/count';
  // 使用 useCountStore，得到一個專門保存 count 相關的 store
  const countStore = useCountStore();

  // 數據
  let n = ref(1); // 用戶選擇的數字

  // 方法
  function add() {
    // 第一種修改方式
    // countStore.sum += n.value;
    // countStore.school = '麻省理工';
    // countStore.address = '美國波士頓';

    // 第二種修改方式，使用 $patch 方法，一次修改多個值，這樣只會觸發一次更新，數據量大時，性能會更好
    // countStore.$patch({
    //   sum: 666, // 修改 sum 的值
    //   school: '麻省理工', // 修改 school 的值
    //   address: '美國波士頓' // 修改 address 的值
    // })

    // 第三種修改方式：
    countStore.increment(n.value);
    // 除了在 store 中增加邏輯判斷，也可以在這裡直接寫判斷
    // if(countStore.sum < 10) {
    //   countStore.sum += n.value;
    // }
    
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