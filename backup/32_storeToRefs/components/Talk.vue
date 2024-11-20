<template>
  <div class="talk">
    <button @click="getTalk">獲取一句話</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Talk">
  import { useTalkStore } from '@/store/talk';
  import { storeToRefs } from 'pinia';

  // 數據
  const talkStore = useTalkStore();
  const { talkList } = storeToRefs(talkStore)

  // 方法
  function getTalk() {
    talkStore.getTalk()
  }
</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>