---
title: Oauth2.0 流程
date: 2018-04-28 15:44:59
tags: weekly
---

#### 本周任务

主要做了下Oauth2.0的权限管理
OAuth是一个关于授权（authorization）的开放网络标准，在全世界得到广泛应用，目前的版本是2.0版。
OAuth主要解决了不需要得到用户的账号密码就可以给第三方应用访问权限.
其次,涉及到的知识点有以下几个

- token
- refresh token
- cookies的验证

一个个讲一下
首先是`token`,`token`是一个类似于cookies的被用于验证是否是有效用户的字段,由服务器生成并传输到客户端,客户端通过接口再把token传给服务器已达到验证的目的.一般token的有效期大概是几分钟.
并且纯移动端对cookie的兼容不是很好的话,token传输就带来了很大的便利性.

因为`token`的有效期很短,所以可能会造成频繁登陆的情况,为了解决这个问题,所以加入了`refresh token`这一机制.如果请求了目标接口,接口返回401(未授权状态)的时候再通过`refresh token`重新请求并获取新的token以及新的refresh token,相当于给token +1s

出于安全原因,cookie可能会被人为的修改,所以就涉及到cookie的`httponly`属性,这个属性只能通过服务器端来生成并返回给客户端,并且客户端无法操作.一般我们通过document.cookie方法获取的cookies都是未带httponly属性的.

#### 近期需求

万科住这儿app对接