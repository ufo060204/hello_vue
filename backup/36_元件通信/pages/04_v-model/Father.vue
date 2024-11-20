<template>
  <div class="father">
    <h2>父元件</h2>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <!-- v-model 用在 html 標籤上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model 用在自定義元件標籤上 -->
    <!-- <CustomInput v-model="username"/> -->
    <!-- <CustomInput 
      :modelValue="username" 
      @update:modelValue="username = $event"
    /> -->
    
    <!-- 修改 modelValue -->
    <CustomInput v-model:ming="username" v-model:mima="password"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import { ref } from 'vue'
  import CustomInput from './CustomInput.vue'

  // 數據
  let username = ref('小明')
  let password = ref('123456')

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