<template>
  <div class="person">
    <!-- <h2>{{ a }}</h2> -->
    <ul>
      <li v-for="p in list" :key="p.id">
        {{ p.name }} -- {{ p.age }} 歲
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { type Persons } from '@/types';
  // defineProps 屬於宏函數，可以不用引入，直接使用即可(define... 是 vue3 的內建函數)
  // import { defineProps, withDefaults } from 'vue';

  import { withDefaults } from 'vue';

  // 只接收 list
  // defineProps(['list']);

  // 接收 list + 限制型別
  // defineProps<{ list: Persons }>();

  // 接收 list + 限制型別 + 限制必要性 + 預設值
withDefaults(defineProps<{ list?: Persons }>(), {
  list:() => [{ id: 'andy8888', name: '預設小明', age: 20 }]
})

  // 接收父元件傳遞的參數 a，並同時將 a 保存起來
  // let x = defineProps(['a']);
  // console.log(x.a);
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
</style>