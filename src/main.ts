// 引入 createApp 用於創建 Vue3 應用
import { createApp } from "vue";
// 引入 App 根元件
import App from "./App.vue";
// 引入全局樣式
import Hello from "./Hello.vue";

// 創建應用
const app = createApp(App)

app.component("Hello", Hello);
app.config.globalProperties.x = 99;

declare module 'vue' {
  interface ComponentCustomProperties {
    x: number;
  }
}

app.directive('beauty', (element, {value}) => {
  element.innerHTML += value;
  element.style.color = 'green';
  element.style.backgroundColor = 'yellow';
})

// 掛載應用
app.mount("#app");
setTimeout(() => {
  app.unmount();
}, 3000);