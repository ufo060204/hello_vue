<template>
  <div class="father">
    <h2>父元件</h2>
    <div class="content">
      <!-- <Category v-slot="s2" title="熱門遊戲列表"> -->
      <Category>
        <template v-slot:s2>
          <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>熱門遊戲列表</h2>
        </template>
      </Category>

      <Category>
        <template v-slot:s2>
          <img :src="imgUrl" alt="今日美食網羅">
        </template>
        <template v-slot:s1>
          <h2>今日美食網羅</h2>
        </template>
      </Category>

      <!-- 可以使用 v-slot 的簡寫方式，如下： -->
      <Category>
        <template #s2>
          <video :src="videoUrl" controls></video>
        </template>
        <template #s1>
          <h2>最新電影推薦</h2>
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Category from './Category.vue';
  import { ref, reactive } from 'vue';

  let games = reactive([
    { id: '001', name: '魔物獵人' },
    { id: '002', name: '世紀帝國' },
    { id: '003', name: '奇妙人生' },
  ]);
  let imgUrl = ref('https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg');
  let videoUrl = ref('https://videos.pexels.com/video-files/17310930/17310930-uhd_2560_1440_30fps.mp4');

</script>

<style scoped>
  h2 {
      background-color: orange;
      text-align: center;
      font-size: 20px;
      font-weight: 700;
    }
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
    }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img, video {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
</style>