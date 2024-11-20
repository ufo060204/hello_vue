<template>
  <div class="child2">
    <h3>子元件2</h3>
    <h4>電腦：{{ computer }}</h4>
    <h4>哥哥給的玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
  import { ref, onUnmounted } from 'vue';
  import emitter from '@/utils/emitter';

  // 數據
  let computer = ref('MacBook Pro');
  let toy = ref('');

  // 給 emitter 綁定 send-toy 事件
  emitter.on('send-toy', (value:any) => {
    // console.log('send-toy', value);
    toy.value = value;
  })

  // 組件卸載時，解綁事件，取消監聽(避免內存洩漏)
  onUnmounted(() => {
    emitter.off('send-toy');
  })

</script>

<style scoped>
  .child2 {
    margin-top: 50px;
    background-color: orange;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
  }
</style>