<template>
  <div class="person">
    ???
  </div>
</template>

<script lang="ts" setup name="Person">
  // '@' 代表路徑是從 src 開始
  import { type PersonInter, type Persons } from '@/types'
  // let person:PersonInter = {
  //   id: 'andy8256',
  //   name: '小明',
  //   age: 30
  // }

  let personList: Persons = [
    { id: 'andy8256', name: '小明', age: 30 },
    { id: 'andy8257', name: '小華', age: 25 },
    { id: 'andy8258', name: '小菁', age: 28 }
  ] 

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