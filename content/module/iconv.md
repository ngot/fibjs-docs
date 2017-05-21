+++
draft = false
title = "iconv"
description = "iconv 编码与解码模块 引用方式："
[menu.main]
parent = "modules"
identifier = "iconv"
+++

iconv 编码与解码模块 引用方式：

```js
var encoding = require('encoding');
var iconv = encoding.iconv;
```
 或者 
```js
var iconv = require('iconv');
```

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Buffer            | `encode(String charset,String data)`<p>用 iconv 将文本转换为二进制数据</p>
String            | `decode(String charset,Buffer data)`<p>用 iconv 将 Buffer 内容转换为文本</p>

## Method Detail

{{% panel theme="default" header="encode" %}}
#### **Buffer** `encode(String charset,String data)`

用 iconv 将文本转换为二进制数据

#### Parameters
* `charset` 指定字符集 

* `data` 要转换的文本 

#### Returns
返回解码的二进制数据
{{% /panel %}}
{{% panel theme="default" header="decode" %}}
#### **String** `decode(String charset,Buffer data)`

用 iconv 将 Buffer 内容转换为文本

#### Parameters
* `charset` 指定字符集 

* `data` 要转换的二进制数据 

#### Returns
返回编码的字符串
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>