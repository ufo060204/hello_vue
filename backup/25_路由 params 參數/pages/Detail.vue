<template>
  <ul class="news-list">
    <li>編號：{{ route.params.id }}</li>
    <li>標題：{{ route.params.title }}</li>
    <li>內容：{{ route.params.content }}</li>
  </ul>
</template>

<script lang="ts" setup name="Detail">
  import { useRoute } from 'vue-router';
  const route = useRoute();
  console.log(route);
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
    /* width: 30%; */
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    /* text-align: center; */
    border: 1px solid;
    border-radius: 10px;
  }
</style>