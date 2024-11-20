<template>
  <ul class="news-list">
    <li>編號：{{ query.id }}</li>
    <li>標題：{{ query.title }}</li>
    <li>內容：{{ query.content }}</li>
  </ul>
</template>

<script lang="ts" setup name="Detail">
  import { toRefs } from 'vue';
  import { useRoute } from 'vue-router';
  let route = useRoute();
  let { query } = toRefs(route); 
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