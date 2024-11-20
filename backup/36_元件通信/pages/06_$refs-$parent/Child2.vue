<template>
  <div class="child2">
    <h3>子元件2</h3>
    <h4>電腦：{{ computer }}</h4>
    <h4>書籍：{{ book }} 本</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
  import { ref } from 'vue';

  //數據
  let computer = ref('MacBook Pro');
  let book = ref(6)
  // 把數據交給外部使用
  defineExpose({ computer, book })

</script>

<style scoped>
  .child2 {
    margin-top: 20px;
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>