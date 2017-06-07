---
title: 第一次部署hexo＋travis-ci
date: 2017-05-27 14:47:06
tags: 第一次
---

## 为什么要做这个博客
首先作为一个理科男。。有个技术性的博客，不仅可以记录平时不懂的技术、遇到的坑，还能时不时的拿来装逼，这绝对是一件非常好的事情。
其次，也是机缘巧合的，开始研究翻墙技术，开始和一个同事挑选起国外主机，从一开始的linode（便宜）到现在的Vurtl（强烈推荐），有空再来推荐好用的VPS。如果说只是单纯的搭一个翻墙站点总感觉有点亏了，所以开始研究起个人博客。
纯新手搭建，其中也是遇到了很多坑，不过方法总比困难多，基本上都解决掉了。

## 为什么用hexo？
其实一开始的时候我google搭建博客，推荐的是wordpress，但是我看了下文档，以及主题之后觉得没什么可以吸引人的地方，只是一个普通的博客而已，有点中规中矩，感觉太严肃了，而且功能似乎有点臃肿，后来我看到有人推荐的是Hexo，一个轻量级的开源博客系统。然后我去[Hexo主页](https://hexo.io/zh-cn/index.html)看了下，几个字让我印象很深：**超快速度**。
对于像我这样追求效率的人，当然要选择一个又快又好看的咯。而且我看了下主题，发现有个还不错诶，很符合我的气质哈哈。

## Hello World
```
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server
```
然后去选择喜欢的[主题](https://hexo.io/zh-cn/docs/themes.html)。这里我选的是[anatole](https://munen.cc/tech/Anatole.html)，一款没有多余元素的主题，干净又整洁。
接下来就是配置主题了，参照作者的配置，在`_config.yml`, 找到`theme:`,并把那一行改成`theme: anatole`，并添加如下代码：
```
archive_generator:
  per_page: 0  
  yearly: false
  monthly: false
  daily: false
```
接下来就是从作者的GitHub克隆库了
```
git clone https://github.com/Ben02/hexo-theme-Anatole.git themes/anatole
```
最后就是安装和配置必要插件
```
npm install --save hexo-renderer-jade hexo-generator-archive
```

## 开始踩坑之旅
待续。。
