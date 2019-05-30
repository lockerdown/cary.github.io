---
title: package.json文件解析
date: 2019-05-30 21:06:10
tags: 技术
---

## package.json文件解析
最近在做关于webpack的任务,其中包含了很多package.json的知识点,这次我就把所有可以配置的点全都放上来,以供大家参考.

``` json
{
  "name": "test", // 包名
  "version": "1.1.1", // 版本号,可以通过npm version major | minor | patch 对应{x.y.z}版本
  "main": "lib/tcgl-ui.common.js", // 入口文件
  "description": "这是描述",  // 项目的描述
  "author": "Cary", // 作者
  "miniprogram": "dist/mpsrc", // 小程序编译出来后制定的目录
  "private": false, // 是否为私人库 如果是私人库的话 npm publish 不能发布
  "publishConfig": {
    "registry": "http://nexus.17usoft.com/repository/npm-tcgl/" // 指定publish发布的路径
  },
  "files": [ // 需要打包的目录
    "dist",
    "lib"
  ],
  "scripts": { // npm指定运行的脚本
    "clean": "rimraf lib && rimraf static && rimraf dist",
    "demo": "cross-env NODE_ENV=production webpack --config build/webpack.demo.js",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js",
    "entry": "node build/bin/build-entry.js",
    "mp": "cross-env NODE_ENV=production webpack --config build/webpack.mp.js",
    "mpdev": "cross-env NODE_ENV=production webpack-dev-server --config build/webpack.mp.js",
    "package": "cross-env NODE_ENV=production webpack --config build/webpack.package.js",
    "commonjs": "cross-env NODE_ENV=production webpack --config build/webpack.common.js",
    "build": "yarn run clean && yarn run mp && yarn run entry &&  yarn run package && yarn run commonjs",
    "pub": "sh build/release.sh",
    "lint": "vue-cli-service lint"
  },
    // 当前包所依赖的其他包，版本格式可以是下面任一种:
    // version 完全匹配
    // >version 大于这个版本
    // >=version大于或等于这个版本
    // <version
    // <=version
    // ~version 非常接近这个版本
    // ^version 与当前版本兼容
  "dependencies": {}, 
  "devDependencies": { // 仅在开发阶段使用的包而不打包打正式文件中
    "@tinajs/mina-entry-webpack-plugin": "^1.1.1",
    "@tinajs/mina-loader": "^1.5.1",
    "@tinajs/mina-runtime-webpack-plugin": "^1.2.1",
    "@tinajs/wxs-loader": "^1.2.1",
    "@vue/cli-plugin-babel": "^3.7.0",
    "@vue/cli-plugin-eslint": "^3.7.0",
    "@vue/cli-service": "^3.7.0",
    "babel-eslint": "^10.0.1",
    "babel-loader": "^8.0.5",
    "chalk": "^2.4.2",
    "clean-webpack-plugin": "^2.0.2",
    "core-js": "^2.6.5",
    "cross-env": "^5.2.0",
    "css-loader": "^2.1.1",
    "es6-promise": "^4.2.6",
    "eslint": "^5.16.0",
    "eslint-loader": "^2.1.2",
    "eslint-plugin-vue": "^5.2.2",
    "extract-css-chunks-webpack-plugin": "^4.4.0",
    "extract-loader": "^3.1.0",
    "file-loader": "^3.0.1",
    "html-webpack-plugin": "^3.2.0",
    "json-templater": "^1.2.0",
    "less": "^3.9.0",
    "less-loader": "^5.0.0",
    "mini-css-extract-plugin": "^0.6.0",
    "progress-bar-webpack-plugin": "^1.12.1",
    "raw-loader": "^2.0.0",
    "style-loader": "^0.23.1",
    "terser-webpack-plugin": "^1.2.4",
    "uppercamelcase": "^3.0.0",
    "vue": "^2.6.10",
    "vue-cli": "^2.9.6",
    "vue-highlightjs": "^1.3.3",
    "vue-loader": "^15.7.0",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.5.21",
    "webpack": "^4.30.0",
    "webpack-cli": "^3.3.2",
    "webpack-dev-server": "^3.3.1",
    "webpack-node-externals": "^1.7.2"
  },
  "eslintConfig": { // 配置eslint规则
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": { // es6语法的lint
      "parser": "babel-eslint"
    }
  },
  "postcss": { // postcss规则
    "plugins": {
      "autoprefixer": {}
    }
  },
  "license": "MIT", // 开源许可证 有GPL、BSD、MIT、Mozilla、Apache和LGPL
  "browserslist": [ // 基于caniuse的统计,bable能够根据这项来加入或减少新的语法 以下均为查询参数,可以通过https://browserl.ist查询覆盖的浏览器百分百
    "> 1%", // 全球超过1%人使用的浏览器
    "last 2 versions" // 所有浏览器兼容到最后两个版本根据caniuse.com追踪的版本
  ]
}

```