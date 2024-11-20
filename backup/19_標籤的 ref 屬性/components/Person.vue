<template>
  <div class="person">
    <h1>日本</h1>
    <h2 ref="title2">大阪</h2>
    <h3>此花區</h3>
    <button @click="showLog">點我輸出 h2 這個元素</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  // defineExpose 是 vue3 的內建函數，可以不用引入，直接使用即可(define... 是 vue3 的內建函數)
  // import { ref, defineExpose } from 'vue';
  import { ref } from 'vue';
  let a = ref(0)
  let b = ref(1)
  let c = ref(2)

  // 創建一個 title2 用於存儲 ref 標記的內容
  let title2 = ref();

  function showLog() {
    console.log(title2.value);
  }

  defineExpose({
    a, b, c
  });
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