<template>
  <div class="child">
    <h2>我是 Child 元件</h2>
    <p>當前總和：{{ sum }}</p>
  </div>
</template>

<script setup lang="ts" name="Child">
  import { ref } from 'vue';
  import axios from 'axios';

  let sum = ref(0);
  let { data:content } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')

  console.log(content)
</script>

<style scoped>
  .child {
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>