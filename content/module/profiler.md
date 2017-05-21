+++
draft = false
title = "profiler"
description = "内存 profiler 模块"
[menu.main]
parent = "modules"
identifier = "profiler"
+++

内存 profiler 模块

使用方法： 
```js
var profiler = require('profiler');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const Node_Hidden`[`Node_Hidden`](#dc/dfc/namespaceprofiler_1a155cb22a7e2fc43b5b96f4db9b70f2fa)`Node_Hidden`<p>隐藏节点，当显示给用户时可以被过滤掉</p>
const            | `public const Node_Array`[`Node_Array`](#dc/dfc/namespaceprofiler_1a627a80eb87daefae18002a2a08ebc62a)`Node_Array`<p>数组</p>
const            | `public const Node_String`[`Node_String`](#dc/dfc/namespaceprofiler_1a66168a0bab8bbceee4a29d9804c70754)`Node_String`<p>字符串</p>
const            | `public const Node_Object`[`Node_Object`](#dc/dfc/namespaceprofiler_1acffc971eae161adefab6d8d277c8e0cc)`Node_Object`<p>JS对象（字符串和数组除外）</p>
const            | `public const Node_Code`[`Node_Code`](#dc/dfc/namespaceprofiler_1ab5ed1b984b043de4565abd843ed26a3f)`Node_Code`<p>编译后的代码</p>
const            | `public const Node_Closure`[`Node_Closure`](#dc/dfc/namespaceprofiler_1a89c4103853caa9d36d38f88ca17251bc)`Node_Closure`<p>函数闭包</p>
const            | `public const Node_RegExp`[`Node_RegExp`](#dc/dfc/namespaceprofiler_1a601971138be4580fd9cdf7234fbb22e2)`Node_RegExp`<p>正则表达式</p>
const            | `public const Node_HeapNumber`[`Node_HeapNumber`](#dc/dfc/namespaceprofiler_1aa244965b9a4e1a7778232d7e2a342200)`Node_HeapNumber`<p>堆中排好序的数字</p>
const            | `public const Node_Native`[`Node_Native`](#dc/dfc/namespaceprofiler_1aefad392f4126b9bf6a502694a8df02ff)`Node_Native`<p>Native对象（非v8堆上的）</p>
const            | `public const Node_Synthetic`[`Node_Synthetic`](#dc/dfc/namespaceprofiler_1ab75c555f52bf968f20fc87dbb8ebe519)`Node_Synthetic`<p>Synthetic对象</p>
const            | `public const Node_ConsString`[`Node_ConsString`](#dc/dfc/namespaceprofiler_1ad64a18ab2b74a9a23e0fbca5c9f5baff)`Node_ConsString`<p>拼接的字符串</p>
const            | `public const Node_SlicedString`[`Node_SlicedString`](#dc/dfc/namespaceprofiler_1acd20da148e25c1a6bdb8e3c6b74bf3bd)`Node_SlicedString`<p>分割的字符串</p>
const            | `public const Node_Symbol`[`Node_Symbol`](#dc/dfc/namespaceprofiler_1a4bf3df2608eb761b09faf401c45ac19f)`Node_Symbol`<p>符号（ES6）</p>
const            | `public const Node_SimdValue`[`Node_SimdValue`](#dc/dfc/namespaceprofiler_1af2c9c14a92e0da7f20ce111c7aef0121)`Node_SimdValue`<p>堆中排好序的SIMD值(ES7)</p>
const            | `public const Edge_ContextVariable`[`Edge_ContextVariable`](#dc/dfc/namespaceprofiler_1ab65aa1c0e7175ad001a3b37397b90648)`Edge_ContextVariable`<p>函数中的变量</p>
const            | `public const Edge_Element`[`Edge_Element`](#dc/dfc/namespaceprofiler_1ad3ac4e0af7649bc5c61217e3a9f5a44a)`Edge_Element`<p>数组中的元素</p>
const            | `public const Edge_Property`[`Edge_Property`](#dc/dfc/namespaceprofiler_1a7b43a67f3d146a7bdc835dec7793e9b1)`Edge_Property`<p>有名对象的属性</p>
const            | `public const Edge_Internal`[`Edge_Internal`](#dc/dfc/namespaceprofiler_1addd9f2684fcabbd6a52ce6a0dbb2c997)`Edge_Internal`<p>JS无法进入的链接</p>
const            | `public const Edge_Hidden`[`Edge_Hidden`](#dc/dfc/namespaceprofiler_1a7e86385bb02a8af4b5ee9dcff1b3d283)`Edge_Hidden`<p>指向需要事先计算出空间大小的节点</p>
const            | `public const Edge_Shortcut`[`Edge_Shortcut`](#dc/dfc/namespaceprofiler_1a042e3b3800f208a56926d627ab214f3f)`Edge_Shortcut`<p>指向无法事先计算出空间大小的节点</p>
const            | `public const Edge_Weak`[`Edge_Weak`](#dc/dfc/namespaceprofiler_1a3df8440bd9995ed6e229d8d1bcefb90a)`Edge_Weak`<p>一个弱引用（被GC忽视）</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `saveSnapshot(String fname)`<p>根据指定名称保存一个堆快照</p>
HeapSnapshot            | `loadSnapshot(String fname)`<p>根据指定名称读取一个堆快照</p>
HeapSnapshot            | `takeSnapshot()`<p>获取当前时间节点的堆快照，堆快照记录了当前时刻JS堆的状态</p>
Object            | `diff(Function test)`<p>执行给定的函数，并对比执行前后 v8 堆的变化</p>

## Field Detail

{{% panel theme="default" header="Node_Hidden" %}}
#### **const** `public const Node_Hidden`[`Node_Hidden`](#dc/dfc/namespaceprofiler_1a155cb22a7e2fc43b5b96f4db9b70f2fa)`Node_Hidden`

隐藏节点，当显示给用户时可以被过滤掉

{{% /panel %}}
{{% panel theme="default" header="Node_Array" %}}
#### **const** `public const Node_Array`[`Node_Array`](#dc/dfc/namespaceprofiler_1a627a80eb87daefae18002a2a08ebc62a)`Node_Array`

数组

{{% /panel %}}
{{% panel theme="default" header="Node_String" %}}
#### **const** `public const Node_String`[`Node_String`](#dc/dfc/namespaceprofiler_1a66168a0bab8bbceee4a29d9804c70754)`Node_String`

字符串

{{% /panel %}}
{{% panel theme="default" header="Node_Object" %}}
#### **const** `public const Node_Object`[`Node_Object`](#dc/dfc/namespaceprofiler_1acffc971eae161adefab6d8d277c8e0cc)`Node_Object`

JS对象（字符串和数组除外）

{{% /panel %}}
{{% panel theme="default" header="Node_Code" %}}
#### **const** `public const Node_Code`[`Node_Code`](#dc/dfc/namespaceprofiler_1ab5ed1b984b043de4565abd843ed26a3f)`Node_Code`

编译后的代码

{{% /panel %}}
{{% panel theme="default" header="Node_Closure" %}}
#### **const** `public const Node_Closure`[`Node_Closure`](#dc/dfc/namespaceprofiler_1a89c4103853caa9d36d38f88ca17251bc)`Node_Closure`

函数闭包

{{% /panel %}}
{{% panel theme="default" header="Node_RegExp" %}}
#### **const** `public const Node_RegExp`[`Node_RegExp`](#dc/dfc/namespaceprofiler_1a601971138be4580fd9cdf7234fbb22e2)`Node_RegExp`

正则表达式

{{% /panel %}}
{{% panel theme="default" header="Node_HeapNumber" %}}
#### **const** `public const Node_HeapNumber`[`Node_HeapNumber`](#dc/dfc/namespaceprofiler_1aa244965b9a4e1a7778232d7e2a342200)`Node_HeapNumber`

堆中排好序的数字

{{% /panel %}}
{{% panel theme="default" header="Node_Native" %}}
#### **const** `public const Node_Native`[`Node_Native`](#dc/dfc/namespaceprofiler_1aefad392f4126b9bf6a502694a8df02ff)`Node_Native`

Native对象（非v8堆上的）

{{% /panel %}}
{{% panel theme="default" header="Node_Synthetic" %}}
#### **const** `public const Node_Synthetic`[`Node_Synthetic`](#dc/dfc/namespaceprofiler_1ab75c555f52bf968f20fc87dbb8ebe519)`Node_Synthetic`

Synthetic对象

{{% /panel %}}
{{% panel theme="default" header="Node_ConsString" %}}
#### **const** `public const Node_ConsString`[`Node_ConsString`](#dc/dfc/namespaceprofiler_1ad64a18ab2b74a9a23e0fbca5c9f5baff)`Node_ConsString`

拼接的字符串

{{% /panel %}}
{{% panel theme="default" header="Node_SlicedString" %}}
#### **const** `public const Node_SlicedString`[`Node_SlicedString`](#dc/dfc/namespaceprofiler_1acd20da148e25c1a6bdb8e3c6b74bf3bd)`Node_SlicedString`

分割的字符串

{{% /panel %}}
{{% panel theme="default" header="Node_Symbol" %}}
#### **const** `public const Node_Symbol`[`Node_Symbol`](#dc/dfc/namespaceprofiler_1a4bf3df2608eb761b09faf401c45ac19f)`Node_Symbol`

符号（ES6）

{{% /panel %}}
{{% panel theme="default" header="Node_SimdValue" %}}
#### **const** `public const Node_SimdValue`[`Node_SimdValue`](#dc/dfc/namespaceprofiler_1af2c9c14a92e0da7f20ce111c7aef0121)`Node_SimdValue`

堆中排好序的SIMD值(ES7)

{{% /panel %}}
{{% panel theme="default" header="Edge_ContextVariable" %}}
#### **const** `public const Edge_ContextVariable`[`Edge_ContextVariable`](#dc/dfc/namespaceprofiler_1ab65aa1c0e7175ad001a3b37397b90648)`Edge_ContextVariable`

函数中的变量

{{% /panel %}}
{{% panel theme="default" header="Edge_Element" %}}
#### **const** `public const Edge_Element`[`Edge_Element`](#dc/dfc/namespaceprofiler_1ad3ac4e0af7649bc5c61217e3a9f5a44a)`Edge_Element`

数组中的元素

{{% /panel %}}
{{% panel theme="default" header="Edge_Property" %}}
#### **const** `public const Edge_Property`[`Edge_Property`](#dc/dfc/namespaceprofiler_1a7b43a67f3d146a7bdc835dec7793e9b1)`Edge_Property`

有名对象的属性

{{% /panel %}}
{{% panel theme="default" header="Edge_Internal" %}}
#### **const** `public const Edge_Internal`[`Edge_Internal`](#dc/dfc/namespaceprofiler_1addd9f2684fcabbd6a52ce6a0dbb2c997)`Edge_Internal`

JS无法进入的链接

{{% /panel %}}
{{% panel theme="default" header="Edge_Hidden" %}}
#### **const** `public const Edge_Hidden`[`Edge_Hidden`](#dc/dfc/namespaceprofiler_1a7e86385bb02a8af4b5ee9dcff1b3d283)`Edge_Hidden`

指向需要事先计算出空间大小的节点

{{% /panel %}}
{{% panel theme="default" header="Edge_Shortcut" %}}
#### **const** `public const Edge_Shortcut`[`Edge_Shortcut`](#dc/dfc/namespaceprofiler_1a042e3b3800f208a56926d627ab214f3f)`Edge_Shortcut`

指向无法事先计算出空间大小的节点

{{% /panel %}}
{{% panel theme="default" header="Edge_Weak" %}}
#### **const** `public const Edge_Weak`[`Edge_Weak`](#dc/dfc/namespaceprofiler_1a3df8440bd9995ed6e229d8d1bcefb90a)`Edge_Weak`

一个弱引用（被GC忽视）

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="saveSnapshot" %}}
#### **void** `saveSnapshot(String fname)`

根据指定名称保存一个堆快照

#### Parameters
* `fname` 堆快照名称
{{% /panel %}}
{{% panel theme="default" header="loadSnapshot" %}}
#### **HeapSnapshot** `loadSnapshot(String fname)`

根据指定名称读取一个堆快照

#### Parameters
* `fname` 堆快照名称 

#### Returns
返回读取到的堆快照
{{% /panel %}}
{{% panel theme="default" header="takeSnapshot" %}}
#### **HeapSnapshot** `takeSnapshot()`

获取当前时间节点的堆快照，堆快照记录了当前时刻JS堆的状态

#### Returns
返回获取到的堆信息快照
{{% /panel %}}
{{% panel theme="default" header="diff" %}}
#### **Object** `diff(Function test)`

执行给定的函数，并对比执行前后 v8 堆的变化

#### Parameters
* `test` 给定要测试的函数 

#### Returns
返回对比的结果
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>