<template>
  <Person v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { ref, onMounted } from 'vue'

let isShow = ref(true)

// 掛載完畢
  onMounted(() => {
    console.log('父 -- 掛載完畢')
  })
</script>

<style>
</style>