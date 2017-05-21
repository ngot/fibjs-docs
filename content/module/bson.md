+++
draft = false
title = "bson"
description = "bson 编码与解码模块 引用方式："
[menu.main]
parent = "modules"
identifier = "bson"
+++

bson 编码与解码模块 引用方式：

```js
var encoding = require('encoding');
var bson = encoding.bson;
```
 或者 
```js
var bson = require('bson');
```

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Buffer            | `encode(Object data)`<p>以 bson 格式编码变量</p>
Object            | `decode(Buffer data)`<p>以 bson 方式解码字符串为一个变量</p>

## Method Detail

{{% panel theme="default" header="encode" %}}
#### **Buffer** `encode(Object data)`

以 bson 格式编码变量

#### Parameters
* `data` 要编码的变量 

#### Returns
返回编码的二进制数据
{{% /panel %}}
{{% panel theme="default" header="decode" %}}
#### **Object** `decode(Buffer data)`

以 bson 方式解码字符串为一个变量

#### Parameters
* `data` 要解码的二进制数据 

#### Returns
返回解码的变量
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>