<template>
  <div class="app">
    <Header />
    <!-- 導航區 -->
    <div class="navigate">
      <!-- 加上 replace 屬性，無法形成歷史紀錄，所以無法回到上一頁 -->
      <RouterLink replace to="/home" active-class="active">首頁</RouterLink>
      <RouterLink replace :to="{name:'新聞'}" active-class="active">新聞</RouterLink>
      <RouterLink replace :to="{path:'/about'}" active-class="active">關於</RouterLink>
    </div>
    <!-- 展示區 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
  import { RouterView, RouterLink } from 'vue-router';
  import Header from './components/Header.vue';
</script>

<style scoped>
/* App */
  
  .navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px; 
  }
  .navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
  }
  .navigate a.active {
    background-color: #64967E;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微軟正黑體;
  }
  .main-content {
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
  }
</style>