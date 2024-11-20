<template>
  <div class="about">
    <h2>大家好</h2>
  </div>
</template>

<script lang="ts" setup name="About">  
  import { onMounted, onUnmounted } from 'vue';

  onMounted(() => {
    console.log('About 元件被掛載');
  });

  onUnmounted(() => {
    console.log('About 元件被卸載');
  });
</script>

<style scoped>
  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
  }
</style>