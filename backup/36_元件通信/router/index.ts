// 第一步：引入 createRouter 和 createWebHistory
import { createRouter, createWebHistory } from 'vue-router'
// 引入一個個頁面組件
import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_custom-event/Father.vue'
import Bus from '@/pages/03_mitt/Father.vue'
import Model from '@/pages/04_v-model/Father.vue'
import AttrsListeners from '@/pages/05_$attrs/Father.vue'
import RefChildrenParent from '@/pages/06_$refs-$parent/Father.vue'
import ProviderInject from '@/pages/07_provider-inject/Father.vue'
import Pinia from '@/pages/08_pinia/Father.vue'
import Slot from '@/pages/09_slot_預設插槽_具名插槽/Father.vue'
import Slot_2 from '@/pages/10_slot_作用域插槽/Father.vue'



// 第二步：創建路由器
const router = createRouter({
  history: createWebHistory(), // 路由的模式
  routes: [ // 路由規則
    {
      path: '/props',
      component: Props
    },
    {
      path: '/event',
      component: Event
    },
    {
      path: '/mitt',
      component: Bus
    },
    {
      path: '/model',
      component: Model
    },
    {
      path: '/attrs',
      component: AttrsListeners
    },
    {
      path: '/ref',
      component: RefChildrenParent
    },
    {
      path: '/provide',
      component: ProviderInject
    },
    {
      path: '/pinia',
      component: Pinia
    },
    {
      path: '/slot',
      component: Slot
    },
    {
      path: '/slot_2',
      component: Slot_2
    },
  ]
})

// 第三步：匯出路由器
export default router