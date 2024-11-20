<template>
  <div class="father">
    <h2>父元件</h2>
    <h4>房子：{{ house }}</h4>
    <button @click="changeToy">修改 Child1 的玩具</button>
    <button @click="changeComputer">修改 Child2 的電腦</button>
    <button @click="getAllChild($refs)">所有孩子的書變多</button>
    <Child1 ref="c1"/>
    <Child2 ref="c2"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child1 from './Child1.vue';
  import Child2 from './Child2.vue';
  import { ref } from 'vue';

  // 數據
  let house = ref(4)
  let c1 = ref(null)
  let c2 = ref(null)

  // 注意點：當訪問 obj.c 時候，底層會自動讀取 value 屬性，因為 c 是在 obj 的 響應式對象
  // let obj = {
  //   a: 1,
  //   b: 2,
  //   c: ref(3)
  // }
  // let x = ref(4)
  // console.log(obj.a)
  // console.log(obj.b)
  // console.log(obj.c)
  // console.log(x)

  // 方法
  function changeToy() {
    // console.log(c1.value)
    c1.value.toy = '佩佩豬';
  }
  function changeComputer() {
    c2.value.computer = 'Dell';
  }
  function getAllChild(refs: { [key: string]: any }) {
    for(let key in refs) {
      refs[key].book += 3;
    }
  }

  // 把數據交給外部使用
  defineExpose({ house })
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
</style>