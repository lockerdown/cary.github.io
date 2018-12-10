---
title: webpack loader详解
date: 2018-12-10 11:43:04
tags: webpack
---

# 概念

所谓 loader 只是一个导出为函数的 JavaScript 模块。loader runner 会调用这个函数，然后把上一个 loader 产生的结果或者资源文件(resource file)传入进去。函数的 this 上下文将由 webpack 填充，并且 loader runner 具有一些有用方法，可以使 loader 改变为异步调用方式，或者获取 query 参数。

第一个 loader 的传入参数只有一个：资源文件(resource file)的内容。compiler 需要得到最后一个 loader 产生的处理结果。这个处理结果应该是 String 或者 Buffer（被转换为一个 string），代表了模块的 JavaScript 源码。另外还可以传递一个可选的 SourceMap 结果（格式为 JSON 对象）。

如果是单个处理结果，可以在同步模式中直接返回。如果有多个处理结果，则必须调用 this.callback()。在异步模式中，必须调用 this.async()，来指示 loader runner 等待异步结果，它会返回 this.callback() 回调函数，随后 loader 必须返回 undefined 并且调用该回调函数。

## 同步 loader

this.callback 方法则更灵活，因为它允许传递多个参数，而不仅仅是content。

## 异步 loader

使用 this.async 来获取 callback 函数：

## loader内部接受的参数

- `source`包含当前loader匹配到文件的`UTF-8`字符串
- `this`当前loader的配置项

## 各种实用loader

[https://webpack.docschina.org/loaders/](https://webpack.docschina.org/loaders/)