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
          path: 'detail/:id/:title/:content?', // 路由參數，:content? 表示可選參數(可傳可不傳)
          component: Detail
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