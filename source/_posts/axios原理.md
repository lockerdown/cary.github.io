---
title: axios原理
date: 2020-03-24 10:38:56
tags: 技术
---

## axios是什么

axios是一个基于promise的http库,可以允许在浏览器和node环境中.
以下是主要功能

- 从浏览器发送[XMLHttpRequests](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)请求
- 从node.js发送[http](http://nodejs.org/api/http.html)请求
- 支持`Promise`API
- 拦截请求和响应
- 改写请求和返回结果
- 取消请求
- 自动转换JSON数据
- 在客户端防御XSFR

## 拦截请求 **interceptors**

拦截的意思就是在页面**发送request之前**或者**接收response之后**对数据进行处理

**request拦截**常用于Auth登录的时候做一些校验,比如带一个token在请求头上发给后端

``` javascript
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
```

**response拦截**常用于对返回的status code做处理.
比如一些异常code的提醒,以及重定向到登录页面

``` javascript
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
```

## 取消请求

为什么需要取消请求?

- 保证下一个请求不被之前的请求影响
- 重复点击

``` javascript

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');

```

## 关于发送option请求

一个非简单请求通过跨域请求资源的时候先会发送一个Preflighted Requests 预检请求来判断:

1. 获取服务器支持的http请求方法
2. 检查服务器性能

解决方案:

1. **使用jsonp**

2. 后端设置`Access-Control-Allow-Origin:*`,上线后应限制请求地址,不能为所有地址都允许

## 什么是简单请求

1. 只能是`Get,Head,Post`请求
2. 除了浏览器自带的请求头
   - Accept 可接受的内容类型
   - Accept-Language 语言
   - Accept-Encoding 可接受的压缩类型 gzip,deflate
   - Accept-Charset 可接受的内容编码 UTF-8,
   - Content-Type 内容类型
   - DPR 客户端设备的像素比
   - Save-Data 保存一个或多个token来减少用户请求的数据量
   - ViewPort-width 视口宽度
   - Width 宽度

   外不能添加别的请求头
3. Content-Type只能取这几个值： `application/x-www-form-urlencoded` `multipart/form-data` `text/plain`
4. 请求中的任意XMLHttpRequestUpload 对象均没有注册任何事件监听器；
5. 请求中未使用ReadableStream对象

[关于option请求的一些坑](https://ningyu1.github.io/site/post/92-cors-ajax/)
