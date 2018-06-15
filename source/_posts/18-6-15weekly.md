---
title: 周报
date: 2018-06-15 14:32:11
tags: weekly
---

#### 本周主要任务

目前万科项目基本调通,但是还是存在几个问题
1. 界面头部去掉关闭按钮，以及侧滑操作关闭H5页面的功能
2. 界面头部增加分享按钮，实现分享到微信好友和朋友圈的功能
3. 未登录住这儿状态下，进入同程页面点击下单 -> 住这儿H5登陆页面登录 -> 授权登录同程 -> 登录同程成功 -> 返回到住这儿个人中心查看登录状态，仍然显示未登录的游客状态
4. 登录住这儿状态下，再授权登陆同程，之后回到住这儿个人中心推出登陆，再次进入同程下单，不提示授权登陆

本周主要是在各个环境里面切来切去,一会是万科那边上https了,一会是环境挂了.所以部署线上环境已经提上进程了,估计下周就能全面接线上OAuth,这样一来就会比较稳定,不那么容易挂掉.

#### 主要遇到问题

在做乐高计划的时候,我暴露了2个class出去,后来陈鑫发现后和我说了,我改完后发现整个项目都只有require的写法,没有import的写法,然后我去网上搜了一下关于require和import的区别以及模块暴露的方法,发现还是有很多东西可以写的.下面就整理一下区别和关联
首先最大的区别就是node遵循的是CommonJs规范,但是ES6规范并未使用CommonJs规范,虽然都是export,但是module.exports确是node的私有方法.

### Node
```
//以下是几种常见的导出方式
exports.a = function(){}
module.exports = {
    a:{},
    b:''
}
```
值得注意的是:
node执行文件时，会给这个文件内生成一个 exports和module对象，module有一个exports属性。
所以exports == module.export == {}
```
//以下是几种常见的引入方式
const a = require('./a.js');
a.a();
a.b();
```
### ES6
```
//以下是几种常见的导出方式
export default function a(){}
export function a(){}
export {a,b,c}
```

```
//以下是几种常见的引入方式
import {a} from './a.js'
import a from './a.js'
import {a,b,c} from './a.js'
import * as aa from './a.js'
```
值得注意的是:
当导出的时候写的是export default的时候不需要使用大括号,反之亦反


目前在Node对ES6的兼容性日趋完善,在9+版本已经可以可以实现import和export,不需要借助babel等工具,具体的点连接看[Node 9下import/export的丝般顺滑使用](https://cnodejs.org/topic/5a0f2da5f9de6bb0542f090b)
#### 下周任务

万科测试
