<template>
  <input 
    type="text" 
    :value="ming"
    @input="emit('update:ming', (<HTMLInputElement>$event.target).value)"
  >
  <br>
  <input 
    type="text" 
    :value="mima"
    @input="emit('update:mima', (<HTMLInputElement>$event.target).value)"
  >
</template>

<script setup lang="ts" name="CustomInput">
  // defineProps(['modelValue'])
  defineProps(['ming', 'mima'])
  const emit = defineEmits(['update:ming', 'update:mima'])
</script>

<style scoped>
  input {
    border: 2px solid #000;
    background-image: linear-gradient(45deg, red, yellow, green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>