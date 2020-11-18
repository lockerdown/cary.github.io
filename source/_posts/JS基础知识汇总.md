---
title: JS基础知识汇总
date: 2020-10-22 14:40:57
tags: 技术
---

## 堆栈

基本类型(7种: string, number, bigInt, boolean, null, undefined, Symbol)存在于栈中,引用类型(3种: Object, Array, Function)同时存在于堆栈中

栈比较小,适合灵活存取

栈用完就会被gc,堆是没有指向后才会被gc.

参考资料:
[JS 变量存储？栈 & 堆？NONONO!](https://juejin.im/post/6844903997615128583)