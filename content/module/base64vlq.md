+++
draft = false
title = "base64vlq"
description = "base64vlq 编码与解码模块 引用方式："
[menu.main]
parent = "modules"
identifier = "base64vlq"
+++

base64vlq 编码与解码模块 引用方式：

```js
var encoding = require('encoding');
var base64vlq = encoding.base64vlq;
```
 或者 
```js
var base64vlq = require('base64vlq');
```

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
String            | `encode(Integer data)`<p>以 base64vlq 方式编码数据</p>
String            | `encode(Array data)`<p>以 base64vlq 方式编码数据</p>
Array            | `decode(String data)`<p>以 base64vlq 方式解码字符串为二进制数据</p>

## Method Detail

{{% panel theme="default" header="encode" %}}
#### **String** `encode(Integer data)`

以 base64vlq 方式编码数据

#### Parameters
* `data` 要编码的数据 

#### Returns
返回编码的字符串
{{% /panel %}}
{{% panel theme="default" header="encode" %}}
#### **String** `encode(Array data)`

以 base64vlq 方式编码数据

#### Parameters
* `data` 要编码的数据 

#### Returns
返回编码的字符串
{{% /panel %}}
{{% panel theme="default" header="decode" %}}
#### **Array** `decode(String data)`

以 base64vlq 方式解码字符串为二进制数据

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