<template>
  <div class="app">
    <h2>我是 APP 元件</h2>
    <Suspense>
      <template #default>
        <Child />
      </template>
      <template #fallback>
        <h2>載入中...</h2>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts" name="App">
  import Child from './Child.vue';
  import { Suspense } from 'vue';
</script>

<style scoped>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>