// 創建一個路由器並匯出

// 第一步：引入 createRouter 和 createWebHistory
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// 引入一個個頁面組件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 第二步：創建路由器
const router = createRouter({
  history: createWebHistory(), // 路由的模式
  routes: [ // 路由規則
    {
      name: '首頁',
      path: '/home',
      component: Home
    },
    {
      name: '新聞',
      path: '/news',
      component: News,
      children: [
        {
          name: '詳情',
          // 路由參數，:content? 表示可選參數(可傳可不傳)
          path: 'detail/:id/:title/:content?', 
          // path: 'detail',
          component: Detail,

          // 第一種寫法：將路由收到的所有「params」參數作為 props 傳遞給路由(Detail)組件
          props: true

          // 第二種寫法：函數寫法，可以自己決定將甚麼作為 props 傳遞給路由(Detail)組件
          // props(route) {
          //   console.log('@', route)
          //   return route.query
          // }

          // 第三種寫法：物件寫法，可以自己決定將甚麼作為 props 傳遞給路由(Detail)組件(數據固定，用的少)
          // props: {
          //   a:100,
          //   b:200,
          //   c:300
          // }
        }
      ]
    },
    {
      name: '關於',
      path: '/about',
      component: About
    },
  ]
})

// 第三步：匯出路由器
export default router