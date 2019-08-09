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

首先我们来看一下babel内部依赖了哪些库:

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

其实babel的作用和浏览器解析js,解析css的模式相同,都是用解析器来拆分各个单词,数字,符号等,然后应用语法规则.接下来词法分析器则把一些无关的空格字符去除,构建成抽象语法树.最后则用babel-generator生成代码.

至于其他一些包感兴趣的可以自己了解一下.

那么回到这次的主题:为什么我们项目中不能解析async呢?

其实原因很简单,就是因为babel-core的版本选择的有问题,所以对一些高版本的语法并不支持.

那么我们先来看一下如果在官方的[转换工具中](https://babeljs.io/repl),一个纯正的async await方法会变成什么样子的.

``` javascript

async function test(){
  const sleep = m => new Promise(r => setTimeout(r, m))
  await sleep(1000)
  console.log('await');
}
test();

```

转换后(部分代码已经精简)

``` javascript
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      _next(undefined);
    });
}

function test() {
  return _test.apply(this, arguments);
}

function _test() {
  _test = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var sleep;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              sleep = function sleep(m) {
                return new Promise(function(r) {
                  return setTimeout(r, m);
                });
              };

              _context.next = 3;
              return sleep(1000);

            case 3:
              console.log("await");

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _test.apply(this, arguments);
}

test();

```

其实这段转换后的代码也兼容了es2015,如果不勾选的话会出现Generator函数以及yield,我就一步到位全都勾上了.可以看到整个函数是被_asyncToGenerator方法封装后抛出一个switch case函数,初步可以判断是根据不同的条件进行不同的操作.

但是实际运行发现报错了,提示`regeneratorruntime is not defined`,看了下代码,发现这个方法babel并没有帮我生成,看来是要自己引入了.话不多说直接`yarn add regenerator-runtime`就可以了.

那我们再看一下`regenerator-runtime`这个包吧.



```javascript
function Generator() {}
function GeneratorFunction() {}
function GeneratorFunctionPrototype() {}

...

var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);

GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;

GeneratorFunctionPrototype.constructor = GeneratorFunction;

GeneratorFunctionPrototype[toStringTagSymbol] =
GeneratorFunction.displayName = "GeneratorFunction";

```

这段代码构建了一堆看起来很复杂的关系链，其实这是参照着`ES6规范`(https://www.ecma-international.org/ecma-262/6.0/#sec-generatorfunction-constructor)构建的关系链:

![](/imgs/generator.jpg)


这个包抛出了8个方法,我们选其中用到的方法

- mark
- wrap

来分析一下各自的作用.

#### mark

```javascript
  exports.mark = function(genFun) {
    genFun.__proto__ = GeneratorFunctionPrototype;
    genFun.prototype = Object.create(Gp);
    return genFun;
  };
```

可以看出,mark的主要作用就是保证传入的方法的作用域以及原型指向是和Gp这个变量一致的.

而Gp则是一个生成器函数,生成器挂载了3个方法,分别是next,return和throw.

next返回一个由yield表达式生成的值.
return返回给定的值并结束生成器.
throw向生成器抛出一个错误.

#### wrap

```javascript

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

```

通过代码可以看出,我们传进去的_callee$就是innerFn,这个innerFn通过makeInvokeMethod方法创造了和刚刚make相同的3个方法.

而context相当于一个全局变量,存放着当前方法的运行环境,比如next表示下一步运行哪行代码,done表示promise是否结束,finish则表示当前函数是否全部走完.

根据asyncGeneratorStep方法来看,通过info.done是否为true来判断当前的方法是否结束,从而可以重新开一个promise来阻断进程.


# 总结

其实不管是async还是generator,其实返回的都是promise,由此可见,promise对我们日常的开发有多么重要.