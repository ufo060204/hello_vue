<template>
  <div class="person">
    <h2>當前加總為：{{ sum }}，放大 10 倍後：{{ bigSum }}</h2>
    <button @click="add">點我 sum+1</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再來一隻狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import useSum from '@/hooks/useSum';
  import useDog from '@/hooks/useDog';

  const { sum, add, bigSum } = useSum();
  const { dogList, getDog } = useDog();
</script>

<style scoped>
/* scoped 代表這個樣式只會影響到這個元件 */
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
li {
  font-size: 20px;
}
img {
  width: auto;
  height: 100px;
  margin-right: 10px;
}
</style>