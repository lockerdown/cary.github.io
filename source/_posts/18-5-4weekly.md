---
title: web和api站点流程图
date: 2018-05-04 18:30:02
tags: weekly
---

#### 本周任务

本周主要把我们的站点一些文件之间的关系理了一下,并接入了国内游的轮播图测试了一下.大概的流程如下:

```seq
Note left of Web站点: web站初始化Controller
Note left of Web站点: 按照路由表创建路由
Web站点->api站点: 根据请求url找到对应Controlle
Note right of api站点: 连接dsf获取数据
api站点->Web站点: 返回result到页面
Note left of Web站点: 重新渲染页面(renderAsync)
gulp->Web站点: 编译静态资源
```

其中大部分都是用的同步方法,服务器直接渲染出页面,第一提高了页面加载速度,第二就是增加爬虫爬数据的难度.
下星期再好好研究一下api里面连接dsf的具体实现的方法

#### 近期需求

万科首页开发