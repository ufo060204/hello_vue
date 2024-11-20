<template>
  <ul class="news-list">
    <li>編號：{{ id }}</li>
    <li>標題：{{ title }}</li>
    <li>內容：{{ content }}</li>
  </ul>
</template>

<script lang="ts" setup name="Detail">
  defineProps(['id', 'title', 'content']);
</script>

<style scoped>
  .news-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-around;
    list-style: none;
    padding-left: 0;
  }
  .news-list li {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    border: 1px solid;
    border-radius: 10px;
  }
</style>