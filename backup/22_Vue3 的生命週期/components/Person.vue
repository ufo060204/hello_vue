<template>
  <div class="person">
    <h2>當前加總為：{{ sum }}</h2>
    <button @click="add">點我 sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

  // 數據
  let sum = ref(0);

  // 方法
  const add = () => {
    sum.value += 1;
  }

  // 創建 setup 取代了 Vue2 的 beforeCreate、created
  console.log('創建')

  // 掛載前
  onBeforeMount(() => {
    console.log('掛載前')
  })

  // 掛載完畢
  onMounted(() => {
    console.log('掛載完畢')
  })

  // 更新前
  onBeforeUpdate(() => {
    console.log('更新前')
  })

  // 更新完畢
  onUpdated(() => {
    console.log('更新完畢')
  })

  // 卸載前
  onBeforeUnmount(() => {
    console.log('卸載前')
  })

  // 卸載完畢
  onBeforeMount(() => {
    console.log('卸載完畢')
  })

</script>

<style scoped>
/* scoped 代表這個樣式只會影響到這個元件 */
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