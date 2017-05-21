+++
draft = false
title = "zip"
description = "zip 格式文件压缩解压模块"
[menu.main]
parent = "modules"
identifier = "zip"
+++

zip 格式文件压缩解压模块

使用方法： 
```js
var zip = require('zip');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const ZIP_STORED`[`ZIP_STORED`](#d7/def/namespacezip_1abcdf3f59541e1cb36afb83bec54cc2c1)`ZIP_STORED`<p>压缩类型常量, 不压缩, 仅存储</p>
const            | `public const ZIP_DEFLATED`[`ZIP_DEFLATED`](#d7/def/namespacezip_1a3333064a8f5e83b9ba7ddd0d63b5efbe)`ZIP_DEFLATED`<p>压缩类型常量, 需要依赖zlib库进行压缩</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Boolean            | `isZipFile(String filename)`<p>判断文件是否是zip格式</p>
ZipFile            | `open(String path,String mod,Integer compress_type)`<p>打开一个zip文件</p>
ZipFile            | `open(Buffer data,String mod,Integer compress_type)`<p>打开一个zip文件</p>
ZipFile            | `open(SeekableStream strm,String mod,Integer compress_type)`<p>打开一个zip文件</p>

## Field Detail

{{% panel theme="default" header="ZIP_STORED" %}}
#### **const** `public const ZIP_STORED`[`ZIP_STORED`](#d7/def/namespacezip_1abcdf3f59541e1cb36afb83bec54cc2c1)`ZIP_STORED`

压缩类型常量, 不压缩, 仅存储

{{% /panel %}}
{{% panel theme="default" header="ZIP_DEFLATED" %}}
#### **const** `public const ZIP_DEFLATED`[`ZIP_DEFLATED`](#d7/def/namespacezip_1a3333064a8f5e83b9ba7ddd0d63b5efbe)`ZIP_DEFLATED`

压缩类型常量, 需要依赖zlib库进行压缩

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="isZipFile" %}}
#### **Boolean** `isZipFile(String filename)`

判断文件是否是zip格式

#### Parameters
* `filename` 文件名 

#### Returns
返回true代表文件是zip文件
{{% /panel %}}
{{% panel theme="default" header="open" %}}
#### **ZipFile** `open(String path,String mod,Integer compress_type)`

打开一个zip文件

#### Parameters
* `path` 文件路径 

* `mod` 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加 

* `compress_type` 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。 

#### Returns
返回zip文件对象
{{% /panel %}}
{{% panel theme="default" header="open" %}}
#### **ZipFile** `open(Buffer data,String mod,Integer compress_type)`

打开一个zip文件

#### Parameters
* `data` zip文件数据 

* `mod` 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加 

* `compress_type` 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。 

#### Returns
返回zip文件对象
{{% /panel %}}
{{% panel theme="default" header="open" %}}
#### **ZipFile** `open(SeekableStream strm,String mod,Integer compress_type)`

打开一个zip文件

#### Parameters
* `strm` zip文件流 

* `mod` 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加 

* `compress_type` 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。 

#### Returns
返回zip文件对象
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>