---
title: Microtask以及Macrotask
date: 2019-04-03 11:09:14
tags: 技术
---

## Microtask 以及 Macrotask

下面的代码输出什么呢?

```javascript
let items = [0, 1, 2];
console.log("start");
Promise.resolve().then(() => {
  console.log("promise");
});
items.map(item => {
  setTimeout(() => {
    console.log(item);
  }, 1000 * item);
});

console.log("end");
```

答案是`start->end->promise->0->1->2`

答案显而易见,但是为什么呢?

这就涉及到 V8 引擎里的`Microtask`和`Macrotask`了.

我们之前了解过内存中的堆栈,知道会有出栈入栈的过程,这个过程中是由一个任务队列来控制的.我们常见的`setTimeout`,`setInterval`都是 Macrotask,而`Promise`,`Object.observer`等则是 Microtask.
那么有什么区别呢?

最重要的概念就是:**Macrotask 可以有多个，Microtask 只有一个.**当代码全部出栈后,就开始运行任务队列里的代码,共分三步:

- 取一个 Macrotask 来执行,执行完后进行下一步
- 取一个 Microtask 来执行,执行完后再取一个 Microtask 来执行,直到 Microtask 队列为空,进行下一步
- 更新 UI 渲染

浏览器的 event loop 会循环上面的三步直到所有队列都被清空

所以很明显的看到,Microtask 会在第一次进入的时候就全部执行完毕.

但是为什么 setTimeout 会比 Promise 慢呢?因为 setTimeout 最少会有 4ms 的延迟,所以才会出现这个问题.
