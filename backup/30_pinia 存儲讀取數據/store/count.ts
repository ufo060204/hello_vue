import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
  // 狀態(真正存儲數據的地方)
  state() {
    return {
      sum: 6
    }
  }
})