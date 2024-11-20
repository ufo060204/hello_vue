<template>
  <div class="container">
    <h1 class="p-4 m-0">元件間通信</h1>
    <hr>
    <div class="row">
      <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3 list-group">
        <!-- 導航區 -->
          <RouterLink active-class="active" class="list-group-item" to="/props">1.props</RouterLink>
          <RouterLink active-class="active" class="list-group-item" to="/event">2.自定義事件</RouterLink>
          <RouterLink active-class="active" class="list-group-item" to="/mitt">3.mitt</RouterLink>
          <RouterLink active-class="active" class="list-group-item" to="/model">4.v-model</RouterLink>
          <RouterLink active-class="active" class="list-group-item" to="/attrs">5.$attrs</RouterLink>
          <RouterLink active-class="active" class="list-group-item" to="/ref">6.$refs、$parent</RouterLink>
          <RouterLink active-class="active" class="list-group-item" to="/provide">7.provide、inject</RouterLink>
          <RouterLink active-class="active" class="list-group-item" to="/pinia">8.pinia</RouterLink>
          <RouterLink active-class="active" class="list-group-item" to="/slot">9.slot_預設插槽&具名插槽</RouterLink>
          <RouterLink active-class="active" class="list-group-item" to="/slot_2">10.slot_作用域插槽</RouterLink>
      </div>
      <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
        <div class="panel-body">
          <!-- 顯示區 -->
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- name 是為了定義元件的名稱，不寫的話會找檔案名稱當作元件名稱。但最好還是寫上 -->
<script setup lang="ts" name="App">
  import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>

</style>