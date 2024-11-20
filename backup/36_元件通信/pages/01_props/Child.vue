<template>
  <div>
    <h3 class="child">子元件</h3>
    <h4>玩具：{{ toy }}</h4>
    <h5>父給的車：{{ car }}</h5>
    <button @click="sendToy('遙控汽車')">送玩具給父親</button>
  </div>
</template>

<script setup lang="ts" name="Child">
  import { ref } from 'vue';

  // 數據
  let toy = ref('遙控飛機');
  // 聲明接收 props 接收父元件傳遞的數據
  defineProps(['car', 'sendToy']);
</script>

<style scoped>
  .child {
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
  }
</style>