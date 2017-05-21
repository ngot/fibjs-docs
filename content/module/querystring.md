+++
draft = false
title = "querystring"
description = "http query 处理模块"
[menu.main]
parent = "modules"
identifier = "querystring"
+++

http query 处理模块

引用方法： 
```js
var querystring = require('querystring');
```

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
String            | `escape(String str)`<p>url 部件字符串安全编码</p>
String            | `unescape(String str)`<p>url 安全字符串解码</p>
HttpCollection            | `parse(String str,String sep,String eq,Object opt)`<p>解析 query 字符串</p>
String            | `stringify(Object obj,String sep,String eq,Object opt)`<p>序列化一个对象为 query 字符串</p>

## Method Detail

{{% panel theme="default" header="escape" %}}
#### **String** `escape(String str)`

url 部件字符串安全编码

#### Parameters
* `url` 要编码的 url 

#### Returns
返回编码的字符串
{{% /panel %}}
{{% panel theme="default" header="unescape" %}}
#### **String** `unescape(String str)`

url 安全字符串解码

#### Parameters
* `url` 要解码的 url 

#### Returns
返回解码的字符串
{{% /panel %}}
{{% panel theme="default" header="parse" %}}
#### **HttpCollection** `parse(String str,String sep,String eq,Object opt)`

解析 query 字符串

#### Parameters
* `str` 要解析的字符串 

* `sep` 解析时使用的分割字符串，缺省为 & 

* `eq` 解析时使用的赋值字符串，缺省为 = 

#### Returns
返回解码的对象
{{% /panel %}}
{{% panel theme="default" header="stringify" %}}
#### **String** `stringify(Object obj,String sep,String eq,Object opt)`

序列化一个对象为 query 字符串

#### Parameters
* `obj` 要序列化的对象 

* `sep` 序列化时使用的分割字符串，缺省为 & 

* `eq` 序列化时使用的赋值字符串，缺省为 = 

#### Returns
返回序列化后的字符串
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>