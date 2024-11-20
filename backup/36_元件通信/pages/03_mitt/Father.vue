<template>
  <div class="father">
    <h2>父元件</h2>
    <child1 />
    <child2 />
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child1 from './Child1.vue';
  import Child2 from './Child2.vue';

</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .father button {
    margin-right: 5px;
  }
</style>