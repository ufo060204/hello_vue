<template>
  <div class="game">
    <h2>遊戲列表</h2>
    <!-- 這邊的插槽是默認插槽，但也可以加上名稱，如下： -->
    <!-- <slot :yuugi="games" x="哈哈" y="你好"></slot> -->
    <slot name="aaa" :yuugi="games" x="哈哈" y="你好"></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
  import { ref, reactive } from 'vue';
  let games = reactive([
    { id: '001', name: '魔物獵人' },
    { id: '002', name: '世紀帝國' },
    { id: '003', name: '奇妙人生' },
    { id: '003', name: '紅色警戒' },
  ]);
</script>

<style scoped>
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
  .game {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
</style>