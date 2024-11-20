// 引入 createApp 用於創建 Vue3 應用
import { createApp } from "vue";
// 引入 App 根元件
import App from "./App.vue";

// 創建應用
const app = createApp(App)
// 挂載應用
app.mount("#app");