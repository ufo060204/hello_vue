<template>
  <div class="news">
    <!-- 導航區 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">觀看新聞</button>
        <RouterLink :to="{
            name: '詳情',
            query: {
              id: news.id,
              title: news.title,
              content: news.content
            }
            // params: {
            //   id: news.id,
            //   title: news.title,
            //   content: news.content
            // }
          }"
        >
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示區 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script lang="ts" setup name="News">
  import { reactive } from 'vue';
  import { RouterLink, RouterView, useRouter } from 'vue-router';
  import Header from '../components/Header.vue';
  const newsList = reactive([
    { id: '1', title: '戶外踏青好去處', content: '陽明山' },
    { id: '2', title: '最新火箭推進器', content: '特斯拉 MkII' },
    { id: '3', title: '流行音樂集錦', content: 'NEO-Soul' },
    { id: '4', title: '美食趴趴走', content: '甜甜圈' }
  ]);

  const router = useRouter();

  interface NewsInter {
    id: string;
    title: string;
    content: string;
  }

  function showNewsDetail(news: NewsInter) {
    router.push(
      {
      name: '詳情',
      query: {
        id: news.id,
        title: news.title,
        content: news.content
      }
    }
    )
  }
</script>
<style scoped>
  .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
  }
  .news li::marker {
    /* content: '📰'; */
    color: #64967E;
  }
  .news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
  }
  .news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
</style>