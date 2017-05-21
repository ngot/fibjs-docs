+++
draft = false
title = "path"
description = "文件路径处理模块"
[menu.main]
parent = "modules"
identifier = "path"
+++

文件路径处理模块

引用方法： 
```js
var path = require('path');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
readonly String            | `public static readonly String sep`[`sep`](#d0/d43/namespacepath_1afa7870c20e6c51ddda12e9d84873e616)`sep`<p>查询当前操作系统的路径分割字符，posix 返回 '/', windows 返回 '\'</p>
readonly String            | `public static readonly String delimiter`[`delimiter`](#d0/d43/namespacepath_1a3036db6751ec95465b014989251b2946)`delimiter`<p>查询当前操作系统的多路径组合字符，posix 返回 ':', windows 返回 ';'</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
String            | `normalize(String path)`<p>标准化路径，处理路径中父目录等信息</p>
String            | `basename(String path,String ext)`<p>查询路径中的文件名称，若指定扩展名，则自动取消匹配的扩展名</p>
String            | `extname(String path)`<p>查询路径中的文件扩展名</p>
String            | `dirname(String path)`<p>查询路径中的目录路径</p>
String            | `fullpath(String path)`<p>转换给定路径为全路径</p>
String            | `join(...)`<p>合并一系列路径成为一个单一路径</p>
String            | `resolve(...)`<p>合并一系列路径成为一个绝对路径</p>

## Field Detail

{{% panel theme="default" header="sep" %}}
#### **readonly String** `public static readonly String sep`[`sep`](#d0/d43/namespacepath_1afa7870c20e6c51ddda12e9d84873e616)`sep`

查询当前操作系统的路径分割字符，posix 返回 '/', windows 返回 '\'

{{% /panel %}}
{{% panel theme="default" header="delimiter" %}}
#### **readonly String** `public static readonly String delimiter`[`delimiter`](#d0/d43/namespacepath_1a3036db6751ec95465b014989251b2946)`delimiter`

查询当前操作系统的多路径组合字符，posix 返回 ':', windows 返回 ';'

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="normalize" %}}
#### **String** `normalize(String path)`

标准化路径，处理路径中父目录等信息

#### Parameters
* `path` 给定的未处理的路径 

#### Returns
返回经过处理的路径
{{% /panel %}}
{{% panel theme="default" header="basename" %}}
#### **String** `basename(String path,String ext)`

查询路径中的文件名称，若指定扩展名，则自动取消匹配的扩展名

#### Parameters
* `path` 给定查询的路径 

* `ext` 指定扩展名，若文件名中有符合条件的扩展名，将自动取消 

#### Returns
返回文件名称
{{% /panel %}}
{{% panel theme="default" header="extname" %}}
#### **String** `extname(String path)`

查询路径中的文件扩展名

#### Parameters
* `path` 给定查询的路径 

#### Returns
返回得到的扩展名
{{% /panel %}}
{{% panel theme="default" header="dirname" %}}
#### **String** `dirname(String path)`

查询路径中的目录路径

#### Parameters
* `path` 给定查询的路径 

#### Returns
返回得到的目录的路径
{{% /panel %}}
{{% panel theme="default" header="fullpath" %}}
#### **String** `fullpath(String path)`

转换给定路径为全路径

#### Parameters
* `path` 给定转换的路径 

#### Returns
返回转换的全路径
{{% /panel %}}
{{% panel theme="default" header="join" %}}
#### **String** `join(...)`

合并一系列路径成为一个单一路径

#### Parameters
* `...` 一个或多个相关的路径 

#### Returns
返回得到的新路径
{{% /panel %}}
{{% panel theme="default" header="resolve" %}}
#### **String** `resolve(...)`

合并一系列路径成为一个绝对路径

#### Parameters
* `...` 一个或多个相关的路径 

#### Returns
返回得到的新路径
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>