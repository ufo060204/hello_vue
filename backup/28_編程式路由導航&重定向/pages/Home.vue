<template>
  <div class="home">
    <img src="https://images.unsplash.com/photo-1730058304300-fa684086e87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="">
  </div>
</template>
<script lang="ts" setup name="Home">
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()

  // onMounted(() => {
  //   setTimeout(() => {
  //     // 在此處編寫程式碼，讓路由實現跳轉
  //     router.push('/news')
  //   }, 3000)
  // })
</script>
<style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>