<template>
  <div class="category">
    <!-- <h2>{{ title }}</h2> -->
    <slot name="s1">預設內容1</slot>
    <slot name="s2">預設內容2</slot>
  </div>
</template>

<script setup lang="ts" name="Category">
  // defineProps(['title']);
</script>

<style scoped>
.category {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 200px;
  height: 300px;
}
</style>

<!-- 默認插槽的 name 是 default => name:"default"，但一般不寫出來 -->