---
title: flex布局解析
date: 2019-04-04 11:58:02
tags: 技术
---

![flex-align](/imgs/flex-align.png)

## 常见问题

因为大多数人都知道flex而且熟练使用,所以我把常见问题放到了第一部分,先讲我遇到的一些疑惑和问题

1. **align-content**和**align-items**的区别是什么?
2. 如何让某几个元素居右,其余的按照原来的排列顺序?

### 区别
关于**align-content**和**align-items**,这2个都是有align居中效果的,其中contenet字面意思是容器,所以align-contenet适用于**多条主轴**的元素在交叉轴对其,而align-items则是单行元素在交叉轴对其.
**最重要的区别就是行数**

### 排序

可以在子元素上使用align-self属性来控制,增加row-reverse来达到效果
还可以通过在需要有变化的元素上增加**margin-left:auto**来让元素填充空白来达到效果

## can i use flex?

首先来看一下关于 flex 的兼容程度

![flex-caniuse](/imgs/flex-caniuse.png)

从图中可以看到,基本上所有的主流浏览器都兼容了这个属性,只有 IE6-9 不兼容.考虑到现在已经是 9102 年了所以可以暂时不管这部分用户.强行要考虑的话就不用看接下来的内容了..

## flex 的定义

首先看一下什么是**flex**,flex 全称为**CSS 弹性盒子布局**,[定义了一种针对用户界面设计而优化的 CSS 盒子模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)

```

在弹性布局模型中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。

子元素的水平对齐和垂直对齐都能很方便的进行操控。

通过嵌套这些框（水平框在垂直框内，或垂直框在水平框内）可以在两个维度上构建布局。

```

## flex容器的属性

flex 主要的属性有:

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

### flex-direction

flex-direction属性决定主轴的方向（即项目的排列方向）。

```

.box {
  flex-direction: row | row-reverse | column | column-reverse;
}

```

### flex-wrap

默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

```

.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}

```

### flex-flow

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```

.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}

```

### justify-content

justify-content属性定义了项目在主轴上的对齐方式。

```

.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}

```

### align-items

align-items属性定义项目在交叉轴上如何对齐。

```

.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}

```

### align-content

align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```

.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}

```

## flex项目的属性

flex应用在其子元素上的属性有以下6个

- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self

### order

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```

.item {
  order: <integer>;
}

```

### flex-grow

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

```

.item {
  flex-grow: <number>; /* default 0 */
}

```

### flex-shrink

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

```

.item {
  flex-shrink: <number>; /* default 1 */
}

```

### flex-basis

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```

.item {
  flex-basis: <length> | auto; /* default auto */
}

```

### flex

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

```

.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}

```

### align-self

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```

.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}

```