---
title: webpack原理拾遗
date: 2018-12-07 11:42:51
tags: webpack
---

# 今天开始按照[webpack文档](https://webpack.docschina.org/)学习一遍,遇到一些重点难点就记录下来

## entry

单入口以及多入口

chunk以及vendor:

- 使用`CommonsChunkPlugin`从「应用程序 bundle」中提取 vendor 引用(vendor reference) 到 vendor bundle
  - [ ]什么是`bundle`?
- 引用 vendor 的部分替换为 `__webpack_require__()`
- [长效缓存](http://web.jobbole.com/95110/)

## output

值为对象且至少包含:

- filename 用于输出文件的文件名。
- 目标输出目录 path 的绝对路径。

占位符(substitutions)可以输出多个文件

- [ ]占位符原理?

```javascript
output: {
    filename: '[name].js',
    path: __dirname + '/dist'
}
```

## mode

mode 的默认值是 production。
只设置 NODE_ENV 时，不会自动设置 mode。
可以根据不同环境编译不同js 目前基本通过webpack.[不同环境].config.js来区分

## loader

`loader 用于对模块的源代码进行转换`
有三种使用 loader 的方式：

- 配置（推荐）：在 webpack.config.js 文件中指定 loader。
- 内联：在每个 import 语句中显式指定 loader。
- CLI：在 shell 命令中指定它们。
  
基本都只用第一种,其余可以不关注.可能只是在测试某个loader的时候需要用到.

loader写法:

```javascript
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
```

loader特性:

- 支持链式传递,通过callback
- 执行顺序为从右到左,从下到上
- 可以指定include以及exclude文件
- [ ]loader 接收查询参数(什么意思?)

## plugins

目前有很多插件可以使用,具体看[webpack插件](https://webpack.docschina.org/plugins/)

plugin必须是一个Class函数,并具有apply方法能被webpack注入.

```javascript
apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('webpack 构建过程开始！');
    });
  }
```

plugin可以通过`new`构建并传入参数

```javascript
plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
```

- [ ]插件原理后续补上

## 其他文档

[webpack loader详解](./2018/12/10/webpack loader详解)
<!-- [webpack plugin详解](./webpack plugin详解) -->