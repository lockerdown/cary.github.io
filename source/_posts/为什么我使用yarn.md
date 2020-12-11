---
title: 为什么我使用yarn
date: 2020-10-14 16:44:28
tags: 随笔
---

## node与node_modules

![node_modules](/imgs/node_modules_hell.webp)

我们都知道node modules是node中用来解决依赖引用的一个文件夹,近年来随着前端工程化的推进,其表现出的水平似乎越来越差.

不光占用空间巨大,文件碎片化,在早期版本的npm中还会出现层次嵌套过深导致在windows上无法删除node_modules文件夹的问题.

虽然在v3版本的npm中,公共依赖被提取出来在node_modules的根目录下,但是依旧会出现重复引用的问题

比如: A包引用了foo@1.0.0,B包引用了foo@2.0.0,C包引用了foo@2.0.0,根目录下会是foo@1.0.0版本,而BC下面就出现了重复的foo2.0.0

虽然现代版本你可以通过npm dedupe来解决这一问题,并将foo这个库升级到推荐版本(取决于[SemVer](semver.org/),具体参考**package.json文件解析**一文)

那么npm有这么多问题,为什么我们还要去忍受呢?

## yarn介绍

yarn的主页上写了他们的三个优点:

- fast
- reliable
- secure

但是真正让我感受到的是他的快速,之前新建项目可能需要几分钟去下载依赖,现在可能只要半分钟就能全部搞定.(在同一网络环境下)

我从npm切换到yarn的时候是在17年左右,那时候的npm还是处于上面提到的能用,但是不优雅的状态.虽然进过不断的迭代后,现在已经到v6,甚至v7的beta版本.

但是一旦用了yarn,我就再也没有关注过npm的新内容了,以下内容可能存在偏颇,请酌情阅读.

目前yarn的稳定版本是1.22.x,可以通过`yarn set version berry`来体验2.0版本

2.x在20年1月已经进入rc阶段(不添加新功能,只修改bug),在不久之后就将进入release了.

## PnP是什么

PnP是`Plug'n'Play`(即插即用)的缩写.

目前node中依赖存在的最大问题是每个项目都需要建立一个node_modules目录,这对硬盘I/O来说是一个比较大的压力,而且上面说到会比较占空间

在yarn v2中默认开始了pnp模式,只需要执行`yarn`就可以开启

因为我使用的是webstorm,目前是2020.2版本,项目开启了eslint,升级到PnP模式后提示`cannot find eslint/lib/options`,经过搜索发现需要把nodejs版本升级到12.10以上就可以了.

但是实际使用中有些依赖并没有严格遵循pnp的规则,比如require一个不存在的包.这就导致了yarn在解析的时候无法识别引用.但是在yarn v2版本中,可以在`.yarnrc.yml`配置文件中设置

``` yml

pnpMode: "loose"

```

来输出错误消息而不是直接报错后跳出

## yarn常见问题

### node-sass类安装失败

**指定registry**

通过在命令行后面增加--regisrty xxx

或者安装yrm来切换 或者用**cgr**来同时切换npm以及yarn

### 执行upgrade后package.json没有变化

这是因为upgrade会将指定的版本范围将依赖更新到其最新版本,并且重新生成**yarn.lock**文件.

当版本是a^1.0.0时,yarn就会拉取所有1.0.x的版本,然后找到一个最新的版本来替换到lock文件中,但是package.json本身不会发生变化.

如果需要强行升级,可以在执行**yarn upgrade --latest**这条命令会忽略版本范围的描述.

但是请谨慎执行upgrade,一些不遵循语义化的包可能会带来意想不到的问题.

### webpack alias指定

通过单独建一个js文件来resolve路径

``` JavaScript

module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src')
    }
  }
}

```