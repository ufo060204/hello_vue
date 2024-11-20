<template>
  <div class="father">
    <h2>父元件</h2>
    a：{{ a }}<br>
    b：{{ b }}<br>
    c：{{ c }}<br>
    d：{{ d }}<br>
    <Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100, y:200}" :updateA="updateA"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue';
  import { ref } from 'vue';

  let a = ref(1);
  let b = ref(2);
  let c = ref(3);
  let d = ref(4);

  function updateA(value:number) {
    a.value += value;
  }
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
</style>