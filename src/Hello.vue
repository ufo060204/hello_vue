<template>
  <h2 class="hello">你好{{ x }}</h2>
</template>

<script setup lang="ts" name="Hello">
  import { ref } from 'vue';


</script>

<style scoped>
  .hello {
    color: red;
  }
</style>