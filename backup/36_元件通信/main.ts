// 引入 createApp 用於創建 Vue3 應用
import { createApp } from "vue";
// 引入 App 根元件
import App from "./App.vue";
// 第一步：引入 pinia 狀態管理庫
import { createPinia } from "pinia";
// 引入路由器
import router from "./router";

// 創建應用
const app = createApp(App)
// 第二步：創建 pinia 實例
const pinia = createPinia();
// 第三部：安裝 pinia 插件

// 安裝路由器
app.use(router);

app.use(pinia);
// 掛載整個應用到 app 容器中
app.mount("#app");