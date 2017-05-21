+++
draft = false
title = "encoding"
description = "编码与解码模块，用于处理不同的数据编码格式与二进制之间的转换 引用方式："
[menu.main]
parent = "modules"
identifier = "encoding"
+++

编码与解码模块，用于处理不同的数据编码格式与二进制之间的转换 引用方式：

```js
var encoding = require('encoding');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `public static static base32`[`base32`](#db/da8/namespaceencoding_1a86bde7f64f9870f2de7c7cdaa3da6ad3)`base32`<p>base32 编码与解码模块</p>
void            | `public static static base64`[`base64`](#db/da8/namespaceencoding_1a8081785db1dfad236b086d4e2a9c79ba)`base64`<p>base64 编码与解码模块</p>
void            | `public static static base64vlq`[`base64vlq`](#db/da8/namespaceencoding_1a7b9b39387963aca4019374e72257d87d)`base64vlq`<p>base64vlq 编码与解码模块</p>
void            | `public static static hex`[`hex`](#db/da8/namespaceencoding_1a7b35b7c093e622b0fdfe8177856e7b78)`hex`<p>hex 编码与解码模块</p>
void            | `public static static iconv`[`iconv`](#db/da8/namespaceencoding_1a0dbaa330ad92c375b861260259da14b4)`iconv`<p>iconv 编码与解码模块</p>
void            | `public static static json`[`json`](#db/da8/namespaceencoding_1af09feffc504a9e4b16500bbf842d389a)`json`<p>json 编码与解码模块</p>
void            | `public static static bson`[`bson`](#db/da8/namespaceencoding_1a4ad734b31015e44f43735c15e54f5c5e)`bson`<p>bson 编码与解码模块</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
String            | `jsstr(String str,Boolean json)`<p>将字符串编码为 javascript 转义字符串，用以在 javascript 代码中包含文本</p>
String            | `encodeURI(String url)`<p>url 字符串安全编码</p>
String            | `encodeURIComponent(String url)`<p>url 部件字符串安全编码</p>
String            | `decodeURI(String url)`<p>url 安全字符串解码</p>

## Field Detail

{{% panel theme="default" header="base32" %}}
#### **void** `public static static base32`[`base32`](#db/da8/namespaceencoding_1a86bde7f64f9870f2de7c7cdaa3da6ad3)`base32`

base32 编码与解码模块

{{% /panel %}}
{{% panel theme="default" header="base64" %}}
#### **void** `public static static base64`[`base64`](#db/da8/namespaceencoding_1a8081785db1dfad236b086d4e2a9c79ba)`base64`

base64 编码与解码模块

{{% /panel %}}
{{% panel theme="default" header="base64vlq" %}}
#### **void** `public static static base64vlq`[`base64vlq`](#db/da8/namespaceencoding_1a7b9b39387963aca4019374e72257d87d)`base64vlq`

base64vlq 编码与解码模块

{{% /panel %}}
{{% panel theme="default" header="hex" %}}
#### **void** `public static static hex`[`hex`](#db/da8/namespaceencoding_1a7b35b7c093e622b0fdfe8177856e7b78)`hex`

hex 编码与解码模块

{{% /panel %}}
{{% panel theme="default" header="iconv" %}}
#### **void** `public static static iconv`[`iconv`](#db/da8/namespaceencoding_1a0dbaa330ad92c375b861260259da14b4)`iconv`

iconv 编码与解码模块

{{% /panel %}}
{{% panel theme="default" header="json" %}}
#### **void** `public static static json`[`json`](#db/da8/namespaceencoding_1af09feffc504a9e4b16500bbf842d389a)`json`

json 编码与解码模块

{{% /panel %}}
{{% panel theme="default" header="bson" %}}
#### **void** `public static static bson`[`bson`](#db/da8/namespaceencoding_1a4ad734b31015e44f43735c15e54f5c5e)`bson`

bson 编码与解码模块

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="jsstr" %}}
#### **String** `jsstr(String str,Boolean json)`

将字符串编码为 javascript 转义字符串，用以在 javascript 代码中包含文本

#### Parameters
* `str` 要编码的字符串 

* `json` 是否生成json兼容字符串 

#### Returns
返回编码的字符串
{{% /panel %}}
{{% panel theme="default" header="encodeURI" %}}
#### **String** `encodeURI(String url)`

url 字符串安全编码

#### Parameters
* `url` 要编码的 url 

#### Returns
返回编码的字符串
{{% /panel %}}
{{% panel theme="default" header="encodeURIComponent" %}}
#### **String** `encodeURIComponent(String url)`

url 部件字符串安全编码

#### Parameters
* `url` 要编码的 url 

#### Returns
返回编码的字符串
{{% /panel %}}
{{% panel theme="default" header="decodeURI" %}}
#### **String** `decodeURI(String url)`

url 安全字符串解码

#### Parameters
* `url` 要解码的 url 

#### Returns
返回解码的字符串
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>