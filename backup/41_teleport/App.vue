<template>
  <div class="outer">
    <h2>我是 App 元件</h2>
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="">
    <br>
    <Modal />
  </div>
</template>

<script setup lang="ts" name="App">
  import Modal from './Modal.vue'
</script>

<style scoped>
  .outer {
    background-color: #ddd;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    height: 400px;
    filter: saturate(200%);
  }
  img {
    width: 270px;
  }
</style>