import { defineStore } from "pinia";

export const useTalkStore = defineStore('talk', {
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