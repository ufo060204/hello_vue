<template>
  <button @click="isShow = true">展示彈窗</button>
  <teleport to='body' >
    <div class="customModal" v-show="isShow">
      <h3>我是彈窗的標題</h3>
      <p>我是彈窗的內容</p>
      <button @click="isShow = false">關閉彈窗</button>
    </div>
  </teleport>
</template>

<script setup lang="ts" name="Modal">
  import { ref } from 'vue'

  let isShow = ref(false)
</script>

<style scoped>
  .customModal {
    width: 200px;
    height: 200px;
    background-color: skyblue;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 5px;
    text-align: center;
    position: fixed;
    left: 50%;
    top: 20px;
    margin-left: -100px;
  }
</style>