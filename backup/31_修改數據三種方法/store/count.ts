import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
  // actions 裡面放置的是一個個的方法，用於響應元件中的操作
  actions: {
    increment(value: number) {
      console.log('increment被調用了',value)
      // console.log(this.sum)
      if( this.sum < 10) {
        this.sum += value
      }
  },
    decrement() {
      console.log('decrement被調用了')
    }
  },
  // 狀態(真正存儲數據的地方)
  state() {
    return {
      sum: 6,
      school: '東京帝大',
      address: '東京都文京區本郷7-3-1'
    }
  }
})