<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    <button @click="changeFullName">將全名改為：王小明</button><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, computed } from 'vue'
  let firstName = ref('nathan')
  let lastName = ref('james')

  // 這麼定義的 fullName 是一個計算屬性，而且是只讀的
  // let fullName = computed(() => {
  //   console.log('computed 被调用')
  //   return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  // })

    // 這麼定義的 fullName 是一個計算屬性，可讀可寫
  let fullName = computed({
    get() {
      return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    },
    set(val) {
      console.log('set 被调用', val)
      const [str1, str2] = val.split('-')
      firstName.value = str1
      lastName.value = str2
    }
  })

  function changeFullName() {
    fullName.value = '王-小明'
  }
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