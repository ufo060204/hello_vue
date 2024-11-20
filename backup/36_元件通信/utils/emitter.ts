// 引入 mitt
import mitt from "mitt";

// 調用 mitt 得到 emitter，emitter 能：綁定事件、觸發事件、解綁事件
const emitter = mitt();

// emitter.on('test1', () => {
//   console.log('test1被調用了');
// })
// emitter.on('test2', () => {
//   console.log('test2被調用了');
// })

// // 觸發事件
// setInterval(() => {
//   emitter.emit('test1');
//   emitter.emit('test2');
// }, 1000);

// // 解綁事件
// setTimeout(() => {
//   // emitter.off('test1');
//   // emitter.off('test2');
//   emitter.all.clear();
// }, 3000);

// 匯出 emitter
export default emitter;