<template>
  <div class="father">
    <h3>父元件</h3>
    <h4>汽車：{{ car }}</h4>
    <h5 v-show="toy">子給的玩具：{{ toy }}</h5>
    <Child :car="car" :sendToy="getToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue';
  import { ref } from 'vue';

  // 數據
  let car = ref('特斯拉');
  let toy = ref('');
  // 方法
  function getToy(value: string) {
    toy.value = value;

  }

</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
</style>