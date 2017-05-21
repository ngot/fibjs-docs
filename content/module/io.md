+++
draft = false
title = "io"
description = "输入输出处理模块"
[menu.main]
parent = "modules"
identifier = "io"
+++

输入输出处理模块

使用方法： 
```js
var io = require('io');
```

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
MemoryStream new            | `MemoryStream()`<p>创建一个内存流对象，参见 MemoryStream</p>
BufferedStream new            | `BufferedStream()`<p>创建一个缓存流读取对象，参见 BufferedStream</p>
Long            | `copyStream(Stream from,Stream to,Long bytes)`<p>复制流数据到目标流中</p>
void            | `bridge(Stream stm1,Stream stm2)`<p>双向复制流数据，直到流中无数据，或者流被关闭</p>

## Method Detail

{{% panel theme="default" header="MemoryStream" %}}
#### **MemoryStream new** `MemoryStream()`

创建一个内存流对象，参见 MemoryStream

{{% /panel %}}
{{% panel theme="default" header="BufferedStream" %}}
#### **BufferedStream new** `BufferedStream()`

创建一个缓存流读取对象，参见 BufferedStream

{{% /panel %}}
{{% panel theme="default" header="copyStream" %}}
#### **Long** `copyStream(Stream from,Stream to,Long bytes)`

复制流数据到目标流中

#### Parameters
* `from` 源流对象 

* `to` 目标流对象 

* `bytes` 复制的字节数 

#### Returns
返回复制的字节数
{{% /panel %}}
{{% panel theme="default" header="bridge" %}}
#### **void** `bridge(Stream stm1,Stream stm2)`

双向复制流数据，直到流中无数据，或者流被关闭

#### Parameters
* `stm1` 流对象一 

* `stm2` 流对象二
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>