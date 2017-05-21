+++
draft = false
title = "url"
description = "url 处理模块"
[menu.main]
parent = "modules"
identifier = "url"
+++

url 处理模块

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
String            | `format(Object args)`<p>参数构造 UrlObject 对象</p>
UrlObject            | `parse(String url,Boolean parseQueryString)`<p>解析一个 url 字符串</p>

## Method Detail

{{% panel theme="default" header="format" %}}
#### **String** `format(Object args)`

参数构造 UrlObject 对象

#### Parameters
* `args` 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, hash
{{% /panel %}}
{{% panel theme="default" header="parse" %}}
#### **UrlObject** `parse(String url,Boolean parseQueryString)`

解析一个 url 字符串

#### Parameters
* `url` 指定需要解析的 url 字符串 

* `parseQueryString` 指定是否解析 query
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>