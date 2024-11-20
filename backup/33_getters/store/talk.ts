import { defineStore } from "pinia";
import axios from 'axios'
import { nanoid } from 'nanoid'

export const useTalkStore = defineStore('talk', {
  actions: {
    async getTalk() {
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
      this.talkList.unshift(obj)
    }
  },
  // 狀態(真正存儲數據的地方)
  state() {
    return {
      talkList: [
        {
          id: '1',
          title: '一個人的快樂，是一個人的事'
        },
        {
          id: '2',
          title: '人生最大的悲劇是，青春不再，青春的回憶卻永遠不會消失'
        },
        {
          id: '3',
          title: '颱風是一種心情，是一種態度，是一種生活'
        }
      ]
    }
  }
})