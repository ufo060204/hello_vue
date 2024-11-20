<template>
  <div class="person">
    <h2>需求：當水溫達到 60 度，或水位達到 80 cm，給伺服器發送請求</h2>
    <h2>當前水溫為：{{ temp }} ℃</h2>
    <h2>當前水位為：{{ height }} cm</h2>
    <button @click="changeTemp">點我 水溫 + 10</button>
    <button @click="changeHeight">點我 水位 + 10</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch, watchEffect } from 'vue';

// 數據
let temp = ref(10);
let height = ref(0);

// 方法
function changeTemp() {
  temp.value += 10;
}
function changeHeight() {
  height.value += 10;
}

// 監聽 -- watch 實現
// watch([temp, height], (value) => {
//   // 從 value 中解構出新的水溫(newTemp)和水位(newHeight)
//   let [newTemp, newHeight] = value;
//   if (newTemp >= 60 || newHeight >= 80) {
//     console.log('水溫或水位達到了要求，發送請求');
//   }
// });

// 監聽 -- watchEffect 實現
watchEffect(() => {
  if (temp.value >= 60 || height.value >= 80) {
    console.log('水溫或水位達到了要求，發送請求');
  }
});

</script>

<style>
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
</style>