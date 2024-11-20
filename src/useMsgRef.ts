import { customRef } from 'vue';

export default function(initValue:string, delay:number) {
  // 使用 Vue 提供的 customRef 定義響應式數據
  // let initValue = '你好';
  let timer:number;
  // track(跟蹤)、trigger(觸發)
  let msg = customRef((track, trigger) => {
    return {
      // get 何時調用？ msg 被讀取的時候
      get() {
        track(); // 告訴 Vue 數據 msg 很重要，你要對 msg 進行持續關注，一但 msg 變化就去更新
        // console.log('get');
        return initValue;
      },
      // set 何時調用？ msg 被修改的時候
      set(value) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          // console.log('set', value);
          initValue = value;
          trigger(); // 通知 Vue 一下數據 msg 發生了變化，重新渲染視圖
        }, delay);
      }
    }
  });
  return {msg};
}