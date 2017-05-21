+++
draft = false
title = "base32"
description = "base32 编码与解码模块 引用方式："
[menu.main]
parent = "modules"
identifier = "base32"
+++

base32 编码与解码模块 引用方式：

```js
var encoding = require('encoding');
var base32 = encoding.base32;
```
 或者 
```js
var base32 = require('base32');
```

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
String            | `encode(Buffer data)`<p>以 base32 方式编码数据</p>
Buffer            | `decode(String data)`<p>以 base32 方式解码字符串为二进制数据</p>

## Method Detail

{{% panel theme="default" header="encode" %}}
#### **String** `encode(Buffer data)`

以 base32 方式编码数据

#### Parameters
* `data` 要编码的数据 

#### Returns
返回编码的字符串
{{% /panel %}}
{{% panel theme="default" header="decode" %}}
#### **Buffer** `decode(String data)`

以 base32 方式解码字符串为二进制数据

#### Parameters
* `data` 要解码的字符串 

#### Returns
返回解码的二进制数据
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>