<template>
  <div class="child">
    <h2>我是 Child 元件{{ x }}</h2>
    <h3>當前加總為{{ sum }}</h3>
    <h4 v-beauty="sum" >好開心</h4>
    <Hello />
  </div>
</template>

<script setup lang="ts" name="Child">
  import { ref } from 'vue';
import Hello from './Hello.vue';

let sum = ref(1);


</script>

<style scoped>
  .child {
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>