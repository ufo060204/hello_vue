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
      school: 'tokyo university',
      address: '東京都文京區本郷7-3-1'
    }
  },
  getters: {
    // bigSum(state) {
    //   return state.sum * 10
    // },
    // 可以簡寫成
    bigSum: state => state.sum * 10,


    // 可以使用 this 來訪問 state 如果用箭頭函數則不能使用 this
    // upperSchool(state) {
    upperSchool(): string { // 不傳入 state 參數會警告，要加上型別
      console.log('@', this)
      // return state.school.toUpperCase()
      return this.school.toUpperCase()
    }
  }
})