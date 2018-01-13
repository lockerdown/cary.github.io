---
title: promise函数
date: 2017-06-02 17:21:10
tags:
---


本周工作时间就只有短短的三天，基本上没遇到什么大的问题，我就深入学习了一下ES6的Promise。现在和大家分享一下Promise其中的秘密。
首先，我们先看下Promise方法包含的几个方法：
在浏览器里直接console.dir(Promise):
![](http://pic5.40017.cn/01/000/55/3d/rBLkBVkxMxuAZwZFAAEAAC3QnEY710.png)
可以看到，Promise是一个构造函数，在原型上挂载了catch和then的方法，这也就是Promise的基本使用方法。那么我就拿setTimeout作为例子模拟ajax：
``` javascript
		function foo(){
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					console.log('done');
					resolve('test');
				},1000);
			})
		}
		function bar(){
			return new Promise(()=>{
				setTimeout(()=>{
					console.log('second callback');
				},1000);
			})
		}
		foo().then(data=>{
			console.log(`then data is:${data}`);
		})
		.then(()=>{
			bar()
		})
```
#### 近期需求

	暂无
