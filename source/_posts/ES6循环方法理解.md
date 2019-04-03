---
title: 为什么map等遍历方法不能用await?
date: 2019-04-02 18:18:57
tags: 技术
---

# 为什么 map 等遍历方法不能用 await?

最近遇到一个问题,在循环中调用异步方法,需要用到 async 和 await,但是当我在循环里使用 await 方法时却出现了问题,没等循环完成,代码就直接跳出了.下面我们就来分析一下其中的原因以及解决方案.

下面是模拟的代码

```javascript
[0, 1, 2].map(async item => {
  await setTimeout(() => {
    console.log(item);
  }, 1000);
});
```

运行后输出的是`0,1,2`虽然看上去是对的,但是他们却同时输出了,显然没有达到我想要的同步执行的效果,那么这究竟是为什么呢?

首先来看一下 js 运行的原则

## 同步,异步,阻塞,非阻塞

首先想要了解 js,必须知道 js 运行的原理.先说一下阻塞和非阻塞,这两个和我们的 EventLoop 没有太大关系

阻塞:

- 由于 JS 的语言特性,整个是由单线程运行的,所以当有事件挂起时,就会发生阻塞.

非阻塞:

- 线程不挂起,可以继续运行下去

值得注意的是,阻塞一般只会在 IO 上存在,对 js 线程不会有太多影响.在 JS 中常见的阻塞就是 alert.

再讲一下同步异步,这 2 个比较好理解

同步:

- 发出一个请求,在未得到结果前,不返回

异步:

- 发出一个请求,在未得到结果前先返回,等有结果之后通知之前的程序,并返回结果

在我们这个例子中,其实我们是想执行 3 个同步方法,依次输出结果,但事实上并不是如此,为什么呢?

首先看看 map 的 polyfill 代码

```javascript

if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
   ...
    // 7. 当 k < len 时,执行循环.
    while(k < len) {
      var kValue, mappedValue;
      //遍历O,k为原数组索引
      if (k in O) {
        //kValue为索引k对应的值.
        kValue = O[ k ];
        // 执行callback,this指向T,参数有三个.分别是kValue:值,k:索引,O:原数组.
        mappedValue = callback.call(T, kValue, k, O);
        // 返回值添加到新数组A中.
        A[ k ] = mappedValue;
      }
      // k自增1
      k++;
    }
    // 8. 返回新数组A
    return A;
  };
}

```

可以看出,ES6 中的 map 方法其实是一个循环回调方法,把 map 里面的方法包起来当做一个回调,所以 map 方法返回的不是一个 Promise,所以对应的 async 方法只是放到了 macroTask,所以一次性全部执行完了.

那么如何才能实现呢?

## for...of

那么今天的主角来了,就是`for of`了,为什么说 for of 这么神奇呢,下面就看看在[MDN 上对它的描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of):

```
for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
```

直接看描述可能会有点懵,那么看一下下面的代码示例,里面展示了各种循环,包括了描述中的可迭代对象,那么什么是可迭代对象呢?这个又要讲到下面要说的迭代协议.

## 迭代协议

迭代协议包括了可迭代协议和迭代器协议,具体的内容可以[参考 MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols).在这里不多延伸出来

这里要说明的是能用 for 循环的都是可迭代类型.

可迭代类型返回了一个很重要的东西,就是 next,通过对 next 的不断调用来拿到最后一个对象,所以我们上文提到的 for...of 就是通过迭代器来模拟 Promise,所以要等到我们方法内的 await 执行完,next 才会被调用,实现了循环同步调用.

## 总结

map 等遍历函数只是一个同步方法,真正要实现异步返回需要用到`for of`,如果需要有多个参数,比如 index 和 item 就需要 Object.entries.

```javascript
for (let [index, item] of arr) {
}
```

现在的方案其实是一个串行遍历,如果要做到最大优化,可以改善一下代码变成并行遍历

```javascript
async function promiseArray(array) {
  const promises = array.map(delayedLog);
  await Promise.all(promises);
  console.log("Done!");
}
```
