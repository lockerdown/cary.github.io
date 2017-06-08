---
title: weekly
date: 2017-05-27 10:21:51
tags: weekly
---
### 本周已完成任务

	旅书2.8部分页面。抢单，需求单等页面

### 本周工作中遇到的问题\困难

本周主要遇到一个双击编辑的需求，但是v-model只支持绑定在表单元素上，然后我就开始找解决方案。发现Vue有个[使用自定义事件的表单输入组件](https://cn.vuejs.org/v2/guide/components.html#使用自定义事件的表单输入组件)，里面说的是：

------------


自定义事件可以用来创建自定义的表单输入组件，使用 v-model 来进行数据双向绑定。看看这个：
```
<input v-model="something">
```
这不过是以下示例的语法糖：
```
<input v-bind:value="something" v-on:input="something = $event.target.value">
```
所以在组件中使用时，它相当于下面的简写：

```
<custom-input v-bind:value="something" v-on:input="something = arguments[0]"></custom-input>
```
---------

可以看到，这个方法就是通过监听value的值的改变来触发自定义的input事件来达到效果。更多的解释可以看上面的链接，解释的很清楚了。
那么我就直接上代码了。

```javascript
var editableRow = {
    props: {
        value: String,
        id: Number,
        keyname: String,
        placeholder: {
            type: String,
            default: '双击编辑文本',
        },
        limit: {
            type: Number,
            default: 50
        }
    },
    data: function () {
        return {
            editableIndex: 0,
        }
    },
    template: `
        <div ref="content" :title="value" :class="{'active':editableIndex,'line-clamp-2':!editableIndex}"
            :contenteditable="editableIndex?true:false"
            @input="filterComment($event.target.innerText)"
            @dblclick="editCase()"
            @blur="saveCase(id,keyname)"
            @keydown="stopEnter($event.key)"
            :data-text="placeholder"
            v-text="value">
        </div>`,
    //如要实现placeholder效果需要加css
    methods: {
        focus() {
            this.$nextTick(function () {
                this.$refs.content.focus();
            })
        },
        stopEnter(key) {
            if (key == 'Enter') {
                event.preventDefault();
                return false;
            }
        },
        filterComment(comment) {
            var tempcComment = comment;
            this.$emit('input', tempcComment)
        },
        editCase(index) {
            this.editableIndex = 1;
            this.focus();
        },
        saveCase(id, keyname) {
            let name = this.value
            if (name.length > this.limit) {
                this.showTips('error', `限制${this.limit}个字符之内！`);
                event.preventDefault();
                return false;
            }
            if (!name.length) {
                this.showTips('error', '当前字段不能为空！');
                event.preventDefault();
                return false;
            }
            let data = {
                id: id
            };
            data[keyname] = name; //字段名称
            this.ajaxFn({
                url: pubUrl.saveCaseUrl,
                data: data,
                fn: re => {
                    if (re) {
                        this.editableIndex = 0;
                        this.showTips('success', re.msg);
                    }
                }
            })
        }
    },

}
```
当时我还遇到一个问题，就是focus方法一直无效，后来我才想起来，vue操作dom是有延迟的，所以需要加入$.nextTick问题顺利解决。


### 近期需求

	1. 聊天记录样式的弹框
	2. 几个优化需求
