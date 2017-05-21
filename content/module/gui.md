+++
draft = false
title = "gui"
description = "输入输出处理模块"
[menu.main]
parent = "modules"
identifier = "gui"
+++

输入输出处理模块

使用方法： 
```js
var gui = require('gui');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const IE7`[`IE7`](#d7/dc4/namespacegui_1ad8c37755f921d0c57b7bfd73521ade41)`IE7`<p>WebView ie 模拟版本，指定 ie7</p>
const            | `public const IE8`[`IE8`](#d7/dc4/namespacegui_1ada6fcde41966fdeaf23c67c147e73681)`IE8`<p>WebView ie 模拟版本，指定 ie8</p>
const            | `public const IE9`[`IE9`](#d7/dc4/namespacegui_1aef8ecb99a23cd6a17fa91508afec4b4a)`IE9`<p>WebView ie 模拟版本，指定 ie9</p>
const            | `public const IE10`[`IE10`](#d7/dc4/namespacegui_1aa66c9989a9b5860cc0a027338dd7b332)`IE10`<p>WebView ie 模拟版本，指定 ie10</p>
const            | `public const IE11`[`IE11`](#d7/dc4/namespacegui_1add067efa6bf55af35c693496ef760639)`IE11`<p>WebView ie 模拟版本，指定 ie11</p>
const            | `public const EDGE`[`EDGE`](#d7/dc4/namespacegui_1a77b51fbb35d819a319afcb6a02a0c23d)`EDGE`<p>WebView ie 模拟版本，指定 edge</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `setVersion(Integer ver)`<p></p>
WebView            | `open(String url)`<p>打开一个窗口并访问指定网址</p>
WebView            | `open(String url,Map opt)`<p>打开一个窗口并访问指定网址</p>

## Field Detail

{{% panel theme="default" header="IE7" %}}
#### **const** `public const IE7`[`IE7`](#d7/dc4/namespacegui_1ad8c37755f921d0c57b7bfd73521ade41)`IE7`

WebView ie 模拟版本，指定 ie7

{{% /panel %}}
{{% panel theme="default" header="IE8" %}}
#### **const** `public const IE8`[`IE8`](#d7/dc4/namespacegui_1ada6fcde41966fdeaf23c67c147e73681)`IE8`

WebView ie 模拟版本，指定 ie8

{{% /panel %}}
{{% panel theme="default" header="IE9" %}}
#### **const** `public const IE9`[`IE9`](#d7/dc4/namespacegui_1aef8ecb99a23cd6a17fa91508afec4b4a)`IE9`

WebView ie 模拟版本，指定 ie9

{{% /panel %}}
{{% panel theme="default" header="IE10" %}}
#### **const** `public const IE10`[`IE10`](#d7/dc4/namespacegui_1aa66c9989a9b5860cc0a027338dd7b332)`IE10`

WebView ie 模拟版本，指定 ie10

{{% /panel %}}
{{% panel theme="default" header="IE11" %}}
#### **const** `public const IE11`[`IE11`](#d7/dc4/namespacegui_1add067efa6bf55af35c693496ef760639)`IE11`

WebView ie 模拟版本，指定 ie11

{{% /panel %}}
{{% panel theme="default" header="EDGE" %}}
#### **const** `public const EDGE`[`EDGE`](#d7/dc4/namespacegui_1a77b51fbb35d819a319afcb6a02a0c23d)`EDGE`

WebView ie 模拟版本，指定 edge

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="setVersion" %}}
#### **void** `setVersion(Integer ver)`

{{% /panel %}}
{{% panel theme="default" header="open" %}}
#### **WebView** `open(String url)`

打开一个窗口并访问指定网址

#### Parameters
* `url` 指定的网址，，可以使用 fs:path 访问本地文件系统 

#### Returns
返回打开的窗口对象
{{% /panel %}}
{{% panel theme="default" header="open" %}}
#### **WebView** `open(String url,Map opt)`

打开一个窗口并访问指定网址

#### Parameters
* `url` 指定的网址，，可以使用 fs:path 访问本地文件系统 

* `opt` 打开窗口参数，支持以下参数: 
```js
{
    "left": 100, // 窗口左上角 x，缺省系统自动设定
    "right": 100, // 窗口左上角 y，缺省系统自动设定
    "width": 100, // 窗口宽度，缺省系统自动设定
    "height": 100, // 窗口高度，缺省系统自动设定
    "border": true, // 是否有边框，缺省有边框
    "caption": true, // 是否有标题栏，缺省有标题栏
    "resizable": true, // 是否可改变尺寸，缺省可以改变
    "maximize": false, // 是否最大化显示，缺省不最大化
    "visible": true, // 是否显示，缺省显示
    "debug": false // 是否提示页面错误，缺省不提示
}
```
 当设定 width 和 height，而未设定 left 或 right 时，窗口将自动居中 

#### Returns
返回打开的窗口对象
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>