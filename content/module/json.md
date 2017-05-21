+++
draft = false
title = "json"
description = "json 编码与解码模块 引用方式："
[menu.main]
parent = "modules"
identifier = "json"
+++

json 编码与解码模块 引用方式：

```js
var encoding = require('encoding');
var json = encoding.json;
```
 或者 
```js
var json = require('json');
```

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
String            | `encode(Value data)`<p>以 json 格式编码变量</p>
Value            | `decode(String data)`<p>以 json 方式解码字符串为一个变量</p>

## Method Detail

{{% panel theme="default" header="encode" %}}
#### **String** `encode(Value data)`

以 json 格式编码变量

#### Parameters
* `data` 要编码的变量 

#### Returns
返回编码的字符串
{{% /panel %}}
{{% panel theme="default" header="decode" %}}
#### **Value** `decode(String data)`

以 json 方式解码字符串为一个变量

#### Parameters
* `data` 要解码的字符串 

#### Returns
返回解码的变量
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>