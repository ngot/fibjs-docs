+++
draft = false
title = "zlib"
description = "zlib 压缩解压模块"
[menu.main]
parent = "modules"
identifier = "zlib"
+++

zlib 压缩解压模块

使用方法： 
```js
var zlib = require('zlib');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const NO_COMPRESSION`[`NO_COMPRESSION`](#d9/d3e/namespacezlib_1aa97dca5a1b2574d9b2c5a675a585c15c)`NO_COMPRESSION`<p>deflate 压缩级别，设定不压缩</p>
const            | `public const BEST_SPEED`[`BEST_SPEED`](#d9/d3e/namespacezlib_1acef162e62929d79fc28c29dd19e233f3)`BEST_SPEED`<p>deflate 压缩级别，设定最快压缩</p>
const            | `public const BEST_COMPRESSION`[`BEST_COMPRESSION`](#d9/d3e/namespacezlib_1a090b26bf155fd859256b03d502276296)`BEST_COMPRESSION`<p>deflate 压缩级别，设定最高压缩</p>
const            | `public const DEFAULT_COMPRESSION`[`DEFAULT_COMPRESSION`](#d9/d3e/namespacezlib_1a8fe9b1e484d3157ecd98578416e24d72)`DEFAULT_COMPRESSION`<p>deflate 压缩级别，设定缺省设置</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Buffer            | `deflate(Buffer data,Integer level)`<p>使用 deflate 算法压缩数据(zlib格式)</p>
void            | `deflateTo(Buffer data,Stream stm,Integer level)`<p>使用 deflate 算法压缩数据到流对象中(zlib格式)</p>
void            | `deflateTo(Stream src,Stream stm,Integer level)`<p>使用 deflate 算法压缩源流中的数据到流对象中(zlib格式)</p>
Buffer            | `inflate(Buffer data)`<p>解压缩 deflate 算法压缩的数据(zlib格式)</p>
void            | `inflateTo(Buffer data,Stream stm)`<p>解压缩 deflate 算法压缩的数据到流对象中(zlib格式)</p>
void            | `inflateTo(Stream src,Stream stm)`<p>解压缩源流中 deflate 算法压缩的数据到流对象中(zlib格式)</p>
Buffer            | `gzip(Buffer data)`<p>使用 gzip 算法压缩数据</p>
void            | `gzipTo(Buffer data,Stream stm)`<p>使用 gzip 算法压缩数据到流对象中</p>
void            | `gzipTo(Stream src,Stream stm)`<p>使用 gzip 算法压缩源流中的数据到流对象中</p>
Buffer            | `gunzip(Buffer data)`<p>解压缩 gzip 算法压缩的数据</p>
void            | `gunzipTo(Buffer data,Stream stm)`<p>解压缩 gzip 算法压缩的数据到流对象中</p>
void            | `gunzipTo(Stream src,Stream stm)`<p>解压缩源流中 gzip 算法压缩的数据到流对象中</p>
Buffer            | `deflateRaw(Buffer data,Integer level)`<p>使用 deflate 算法压缩数据(deflateRaw)</p>
void            | `deflateRawTo(Buffer data,Stream stm,Integer level)`<p>使用 deflate 算法压缩数据到流对象中(deflateRaw)</p>
void            | `deflateRawTo(Stream src,Stream stm,Integer level)`<p>使用 deflate 算法压缩源流中的数据到流对象中(deflateRaw)</p>
Buffer            | `inflateRaw(Buffer data)`<p>解压缩 deflate 算法压缩的数据(inflateRaw)</p>
void            | `inflateRawTo(Buffer data,Stream stm)`<p>解压缩 deflate 算法压缩的数据到流对象中(inflateRaw)</p>
void            | `inflateRawTo(Stream src,Stream stm)`<p>解压缩源流中 deflate 算法压缩的数据到流对象中(inflateRaw)</p>

## Field Detail

{{% panel theme="default" header="NO_COMPRESSION" %}}
#### **const** `public const NO_COMPRESSION`[`NO_COMPRESSION`](#d9/d3e/namespacezlib_1aa97dca5a1b2574d9b2c5a675a585c15c)`NO_COMPRESSION`

deflate 压缩级别，设定不压缩

{{% /panel %}}
{{% panel theme="default" header="BEST_SPEED" %}}
#### **const** `public const BEST_SPEED`[`BEST_SPEED`](#d9/d3e/namespacezlib_1acef162e62929d79fc28c29dd19e233f3)`BEST_SPEED`

deflate 压缩级别，设定最快压缩

{{% /panel %}}
{{% panel theme="default" header="BEST_COMPRESSION" %}}
#### **const** `public const BEST_COMPRESSION`[`BEST_COMPRESSION`](#d9/d3e/namespacezlib_1a090b26bf155fd859256b03d502276296)`BEST_COMPRESSION`

deflate 压缩级别，设定最高压缩

{{% /panel %}}
{{% panel theme="default" header="DEFAULT_COMPRESSION" %}}
#### **const** `public const DEFAULT_COMPRESSION`[`DEFAULT_COMPRESSION`](#d9/d3e/namespacezlib_1a8fe9b1e484d3157ecd98578416e24d72)`DEFAULT_COMPRESSION`

deflate 压缩级别，设定缺省设置

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="deflate" %}}
#### **Buffer** `deflate(Buffer data,Integer level)`

使用 deflate 算法压缩数据(zlib格式)

#### Parameters
* `data` 给定要压缩的数据 

* `level` 指定压缩级别，缺省为 DEFAULT_COMPRESSION 

#### Returns
返回压缩后的二进制数据
{{% /panel %}}
{{% panel theme="default" header="deflateTo" %}}
#### **void** `deflateTo(Buffer data,Stream stm,Integer level)`

使用 deflate 算法压缩数据到流对象中(zlib格式)

#### Parameters
* `data` 给定要压缩的数据 

* `stm` 指定存储压缩数据的流 

* `level` 指定压缩级别，缺省为 DEFAULT_COMPRESSION
{{% /panel %}}
{{% panel theme="default" header="deflateTo" %}}
#### **void** `deflateTo(Stream src,Stream stm,Integer level)`

使用 deflate 算法压缩源流中的数据到流对象中(zlib格式)

#### Parameters
* `src` 给定要压缩的数据所在的流 

* `stm` 指定存储压缩数据的流 

* `level` 指定压缩级别，缺省为 DEFAULT_COMPRESSION
{{% /panel %}}
{{% panel theme="default" header="inflate" %}}
#### **Buffer** `inflate(Buffer data)`

解压缩 deflate 算法压缩的数据(zlib格式)

#### Parameters
* `data` 给定压缩后的数据 

#### Returns
返回解压缩后的二进制数据
{{% /panel %}}
{{% panel theme="default" header="inflateTo" %}}
#### **void** `inflateTo(Buffer data,Stream stm)`

解压缩 deflate 算法压缩的数据到流对象中(zlib格式)

#### Parameters
* `data` 给定要解压缩的数据 

* `stm` 指定存储解压缩数据的流
{{% /panel %}}
{{% panel theme="default" header="inflateTo" %}}
#### **void** `inflateTo(Stream src,Stream stm)`

解压缩源流中 deflate 算法压缩的数据到流对象中(zlib格式)

#### Parameters
* `src` 给定要解压缩的数据所在的流 

* `stm` 指定存储解压缩数据的流
{{% /panel %}}
{{% panel theme="default" header="gzip" %}}
#### **Buffer** `gzip(Buffer data)`

使用 gzip 算法压缩数据

#### Parameters
* `data` 给定要压缩的数据 

#### Returns
返回压缩后的二进制数据
{{% /panel %}}
{{% panel theme="default" header="gzipTo" %}}
#### **void** `gzipTo(Buffer data,Stream stm)`

使用 gzip 算法压缩数据到流对象中

#### Parameters
* `data` 给定要压缩的数据 

* `stm` 指定存储压缩数据的流
{{% /panel %}}
{{% panel theme="default" header="gzipTo" %}}
#### **void** `gzipTo(Stream src,Stream stm)`

使用 gzip 算法压缩源流中的数据到流对象中

#### Parameters
* `src` 给定要压缩的数据所在的流 

* `stm` 指定存储压缩数据的流
{{% /panel %}}
{{% panel theme="default" header="gunzip" %}}
#### **Buffer** `gunzip(Buffer data)`

解压缩 gzip 算法压缩的数据

#### Parameters
* `data` 给定压缩后的数据 

#### Returns
返回解压缩后的二进制数据
{{% /panel %}}
{{% panel theme="default" header="gunzipTo" %}}
#### **void** `gunzipTo(Buffer data,Stream stm)`

解压缩 gzip 算法压缩的数据到流对象中

#### Parameters
* `data` 给定要解压缩的数据 

* `stm` 指定存储解压缩数据的流
{{% /panel %}}
{{% panel theme="default" header="gunzipTo" %}}
#### **void** `gunzipTo(Stream src,Stream stm)`

解压缩源流中 gzip 算法压缩的数据到流对象中

#### Parameters
* `src` 给定要解压缩的数据所在的流 

* `stm` 指定存储解压缩数据的流
{{% /panel %}}
{{% panel theme="default" header="deflateRaw" %}}
#### **Buffer** `deflateRaw(Buffer data,Integer level)`

使用 deflate 算法压缩数据(deflateRaw)

#### Parameters
* `data` 给定要压缩的数据 

* `level` 指定压缩级别，缺省为 DEFAULT_COMPRESSION 

#### Returns
返回压缩后的二进制数据
{{% /panel %}}
{{% panel theme="default" header="deflateRawTo" %}}
#### **void** `deflateRawTo(Buffer data,Stream stm,Integer level)`

使用 deflate 算法压缩数据到流对象中(deflateRaw)

#### Parameters
* `data` 给定要压缩的数据 

* `stm` 指定存储压缩数据的流 

* `level` 指定压缩级别，缺省为 DEFAULT_COMPRESSION
{{% /panel %}}
{{% panel theme="default" header="deflateRawTo" %}}
#### **void** `deflateRawTo(Stream src,Stream stm,Integer level)`

使用 deflate 算法压缩源流中的数据到流对象中(deflateRaw)

#### Parameters
* `src` 给定要压缩的数据所在的流 

* `stm` 指定存储压缩数据的流 

* `level` 指定压缩级别，缺省为 DEFAULT_COMPRESSION
{{% /panel %}}
{{% panel theme="default" header="inflateRaw" %}}
#### **Buffer** `inflateRaw(Buffer data)`

解压缩 deflate 算法压缩的数据(inflateRaw)

#### Parameters
* `data` 给定压缩后的数据 

#### Returns
返回解压缩后的二进制数据
{{% /panel %}}
{{% panel theme="default" header="inflateRawTo" %}}
#### **void** `inflateRawTo(Buffer data,Stream stm)`

解压缩 deflate 算法压缩的数据到流对象中(inflateRaw)

#### Parameters
* `data` 给定要解压缩的数据 

* `stm` 指定存储解压缩数据的流
{{% /panel %}}
{{% panel theme="default" header="inflateRawTo" %}}
#### **void** `inflateRawTo(Stream src,Stream stm)`

解压缩源流中 deflate 算法压缩的数据到流对象中(inflateRaw)

#### Parameters
* `src` 给定要解压缩的数据所在的流 

* `stm` 指定存储解压缩数据的流
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>