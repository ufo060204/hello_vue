// 引入 createApp 用於創建 Vue3 應用
import { createApp } from "vue";
// 引入 App 根元件
import App from "./App.vue";
// 引入 router 路由器
import router from "./router";

// 創建應用
const app = createApp(App)
// 使用路由器
app.use(router)
// 掛載整個應用到 app 容器中
app.mount("#app");