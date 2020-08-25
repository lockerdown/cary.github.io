---
title: chrome cookie限制
date: 2020-08-10 15:25:48
tags: 技术
---

# chrome cookie 限制

## Strict

```javascript

Set-Cookie: CookieName=CookieValue; SameSite=Strict;

```

## Lax

```javascript

Set-Cookie: CookieName=CookieValue; SameSite=Lax;

```

| 请求类型 |                  示例                  |  正常情况   |     Lax     |
| :------: | :------------------------------------: | :---------: | :---------: |
|   链接   |           <a href="..."></a>           | 发送 Cookie | 发送 Cookie |
|  预加载  |   <link rel="prerender" href="..."/>   | 发送 Cookie | 发送 Cookie |
|   GET    | 表单 <form method="GET" action="...">  | 发送 Cookie | 发送 Cookie |
|   POST   | 表单 <form method="POST" action="..."> | 发送 Cookie |   不发送    |
|  iframe  |      <iframe src="..."></iframe>       | 发送 Cookie |   不发送    |
|   AJAX   |             \$.get("...")              | 发送 Cookie |   不发送    |
|  Image   |            <img src="...">             | 发送 Cookie |   不发送    |

## None

```javascript

Set-Cookie: widget_session=abc123; SameSite=None; Secure

```
