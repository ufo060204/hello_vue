<template>
  <Count />
  <br>
  <Talk />
</template>

<!-- name 是為了定義元件的名稱，不寫的話會找檔案名稱當作元件名稱。但最好還是寫上 -->
<script setup lang="ts" name="App">
  import Count from './components/Count.vue';
  import Talk from './components/Talk.vue';

</script>

<style scoped>

</style>