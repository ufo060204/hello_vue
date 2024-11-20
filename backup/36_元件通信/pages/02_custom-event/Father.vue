<template>
  <div class="father">
    <h3>我是 Father 元件</h3>
    <h4 v-if="toy">子給的玩具：{{ toy }}</h4>
    <!-- 給子元件 Child 綁定事件 -->
    <Child @send-toy="saveToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue';
  import { ref } from 'vue';

  // 數據
  let toy = ref('');

  function saveToy(value: string) {
    console.log('觸發了自定義事件 xyz', value);
    toy.value = value;
  }
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .father button {
    margin-right: 5px;
  }
</style>