import { defineStore } from "pinia";
import axios from 'axios'
import { nanoid } from 'nanoid'

// export const useTalkStore = defineStore('talk', {
//   actions: {
//     async getTalk() {
//       // 發送請求
//       // 連續解構賦值並將 content 取出重新命名為 title
//       let { data:{content:title} } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//       // console.log(result.data.content)
//       // 把請求回來的字串包裝成一個物件
//       let obj = {
//         id: nanoid(),
//         // title: title
//         // key 和 value 一樣時可以簡寫
//         title
//       }
//       console.log(obj)
//       // 把物件添加到數據中
//       this.talkList.unshift(obj)
//     }
//   },
//   // 狀態(真正存儲數據的地方)
//   state() {
//     return {
//       talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
//     }
//   }
// })

import { reactive } from "vue";
export const useTalkStore = defineStore('talk', () => {
  // talkList 就是 state
  const talkList = reactive(
    JSON.parse(localStorage.getItem('talkList') as string) || []
  )

  // getTalk 函數相當於 actions
  async function getTalk() {
    // 發送請求
    // 連續解構賦值並將 content 取出重新命名為 title
    let { data:{content:title} } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // console.log(result.data.content)

    // 把請求回來的字串包裝成一個物件
    let obj = {
      id: nanoid(),
      // title: title
      // key 和 value 一樣時可以簡寫
      title
    }
    console.log(obj)

    // 把物件添加到數據中
    talkList.unshift(obj)
  }
  return {talkList, getTalk}
})
