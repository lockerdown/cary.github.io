---
title: 编写你的第一个chrome插件
date: 2019-08-08 15:39:58
tags: 技术
---

# 编写你的第一个chrome插件

## 前言

### 什么是chrome插件

当我们在用vue开发时,数据是存在data里面的,此时我们无法查看某些ajax请求发送出去后数据到底变成什么样了,只能把vue实例放在全局,用window.xx.data来看.
显然作者不会让我们这么低效的去开发前端应用,所以作者做了一个chrome插件叫做[vue-devtool](https://chrome.google.com/webstore/detail/nhdogjmejiglipccpnnnanhbledajbpd)
怎么用就不介绍了,大家应该都会,也比较傻瓜式,在不断的迭代下功能也是越来越丰富.

## 如何开发chrome插件

chrome插件由几部分组成,下面我就分别讲一下

### mainfest.json

这是Chrome插件中必须要有的文件,就像一个配置项,里面存放着当前chrome插件的各种信息,就拿幻视来举例,manifest中放了一些图标,描述,版本的等.
其中manifest_version、name、version是必填项,其余的大家看情况选择.
更完整的[文档](https://developer.chrome.com/extensions/manifest)可以点这里查看.(需要翻墙)

``` json
{
  "manifest_version": 2,
  "name": "Vision幻视系统",
  "version": "1.0.0",
  "description": "帮助你在各个环境中一键打开Vision幻视系统",
  "icons": {
    "16": "img/icon.png",
    "48": "img/icon.png",
    "128": "img/icon.png"
  },
  "background": {
    "scripts": ["js/background.js"]
  },
  "browser_action": {
    "default_icon": "img/icon.png",
    "default_title": "点我打开Vision幻视系统"
  },
  "content_scripts": [
    {
      "matches": ["*://*.ly.com/*"],
      "js": ["js/content-script.js"],
      "run_at": "document_start"
    }
  ],
  "permissions": ["declarativeContent", "tabs"],
  "homepage_url": "https://www.ly.com"
}

```

### content-scripts

content_scripts的作用就是在页面打开的时候注入你需要的js,css等内容,达到你想要的效果.
在vision里,我在页面中监听了一个来自后台的请求(关于请求是怎么发送的,在background中会讲到),这个监听事件会拿到当前页面的url,dom等并进行一些操作,然后作为回调传到sendResponse中.

``` javascript

// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener("DOMContentLoaded", function() {});

// 接收来自后台的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "vision") {
    ...
    sendResponse({ url: url });
  }
});

```

### background

background就类似于在chrome环境中执行某些代码,因为是chrome环境,所以无法拿到页面中的dom(老版本chrome是可以用个tabid拿到dom的,但是现在已经被禁用),此时则需要向所有页面发送一个事件来告诉目标tab要做什么事情.
在vision中,我在chrome的运行环境下创建了一条规则,当页面的url满足条件时才会让事件能够执行.
然后绑定一个点击事件发送到content-scripts,然后拿到回调后打开页面

``` javascript

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [new chrome.declarativeContent.PageStateMatcher({ pageUrl: { urlContains: "ly.com" } })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  var tabId = tab.id;
  chrome.tabs.sendMessage(
    tabId,
    {
      type: "vision"
    },
    function(response) {
      chrome.tabs.create({ url: response.url });
    }
  );
});


```

## 发布

如果只是本地使用的话,只需要在[chrome://extensions/](chrome://extensions/)中点击打包扩展程序就可以打爆了,但是要发布到商店让所有人都能看到的话就需要google账户了
并且要5刀注册一个开发者.

## 后记

至此vison的功能全部讲完了,但是用到的只是插件的一小部分内容而已,具体还有哪些内容,大家有兴趣可以看一下下面这篇文章或者到google官方文档查询.

参考: [【干货】Chrome插件(扩展)开发全攻略](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)