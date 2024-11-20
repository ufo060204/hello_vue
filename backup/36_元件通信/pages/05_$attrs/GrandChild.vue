<template>
  <div class="grand-child">
    <h3>孫元件</h3>
    <h4>a：{{a}}</h4><br>
    <h4>b：{{b}}</h4><br>
    <h4>c：{{c}}</h4><br>
    <h4>d：{{d}}</h4><br>
    <h4>x：{{x}}</h4><br>
    <h4>y：{{y}}</h4><br>
    <button @click="updateA(6)">點我將爺爺那的 a 更新</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
  import { ref } from 'vue';
  defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'updateA']);

</script>

<style scoped>
  .grand-child {
    margin-top: 20px;
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>