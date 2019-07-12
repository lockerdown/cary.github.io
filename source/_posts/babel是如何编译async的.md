---
title: babel是如何编译async的
date: 2019-07-08 14:37:30
tags: 技术
---

# 前言

ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会）通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的实现和扩展。

至今为止有八个ECMA-262版本发表

| 版本 |	发表日期 |	与前版本的差异|
|---|---|---|
1	| 1997年6月	|首版
2	| 1998年6月	|格式修正，以使得其形式与ISO/IEC16262国际标准一致
3	| 1999年12月	|强大的正则表达式，更好的词法作用域链处理，新的控制指令，异常处理，错误定义更加明确，数据输出的格式化及其它改变
4	| 放弃	|由于关于语言的复杂性出现分歧，第4版本被放弃，其中的部分成为了第5版本及Harmony的基础
5	| 2009年12月	|新增“严格模式（strict mode）”，一个子集用作提供更彻底的错误检查,以避免结构出错。澄清了许多第3版本的模糊规范，并适应了与规范不一致的真实世界实现的行为。增加了部分新功能，如getters及setters，支持JSON以及在对象属性上更完整的反射
5.1	| 2011年6月	|ECMAScript标5.1版形式上完全一致于国际标准ISO/IEC 16262:2011。
6	| 2015年6月	|ECMAScript 2015（ES2015），第 6 版，最早被称作是 ECMAScript 6（ES6），添加了类和模块的语法，其他特性包括迭代器，Python风格的生成器和生成器表达式，箭头函数，二进制数据，静态类型数组，集合（maps，sets 和 weak maps），promise，reflection 和 proxies。作为最早的 ECMAScript Harmony 版本，也被叫做ES6 Harmony。
7	| 2016年6月	|ECMAScript 2016（ES2016），第 7 版，多个新的概念和语言特性
8	| 2017年6月	|ECMAScript 2017（ES2017），第 8 版，多个新的概念和语言特性
9	| 2018年6月	|ECMAScript 2018 （ES2018），第 9 版，包含了异步循环，生成器，新的正则表达式特性和 rest/spread 语法。

前端技术不断的在发展,但是为了适应其发展,不得不做出一些牺牲,如抛弃老旧的浏览器.那么问题来了,我们是做服务的,不可能要求每个用户的浏览器都升级到最新的,所以不得不做一些兼容方案.于是babel为我们推出了一系列解决方案.

# babel是如何运行的

## 核心包

- babel-core：babel转译器本身，提供了babel的转译API，如babel.transform等，用于对代码进行转译。像webpack的babel-loader就是调用这些API来完成转译过程的。
- babylon：js的词法解析器
- babel-traverse：用于对AST（抽象语法树，想了解的请自行查询编译原理）的遍历，主要给plugin用
- babel-generator：根据AST生成代码

## 功能包

- babel-types：用于检验、构建和改变AST树的节点
- babel-template：辅助函数，用于从字符串形式的代码来构建AST树节点
- babel-helpers：一系列预制的babel-template函数，用于提供给一些plugins使用
- babel-code-frames：用于生成错误信息，打印出错误点源代码帧以及指出出错位置
- babel-plugin-xxx：babel转译过程中使用到的插件，其中babel-plugin-transform-xxx是transform步骤使用的
- babel-preset-xxx：transform阶段使用到的一系列的plugin
- babel-polyfill：JS标准新增的原生对象和API的shim，实现上仅仅是core-js和regenerator-runtime两个包的封装
- babel-runtime：功能类似babel-polyfill，一般用于library或plugin中，因为它不会污染全局作用域

## 工具包

- babel-cli：babel的命令行工具，通过命令行对js代码进行转译
- babel-register：通过绑定node.js的require来自动转译require引用的js代码文件