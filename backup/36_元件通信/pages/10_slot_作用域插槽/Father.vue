<template>
  <div class="father">
    <h2>父元件</h2>
    <div class="content">
      <Game>
        <template v-slot:aaa="params">
          <ul>
            <li v-for="y in params.yuugi" :key="y.id">
              {{ y.name }}
            </li>
          </ul>
        </template>
      </Game>

      <Game>
        <template v-slot:aaa="params">
          <ol>
            <li v-for="y in params.yuugi" :key="y.id">
              {{ y.name }}
            </li>
          </ol>
        </template>
      </Game>

      <!-- 直接解構的寫法 -->
      <Game>
        <template v-slot:aaa="{yuugi}">
          <h3 v-for="y in yuugi" :key="y.id">
            {{ y.name }}
          </h3>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Game from './Game.vue';
</script>

<style scoped>
  
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
    }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img, video {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
</style>