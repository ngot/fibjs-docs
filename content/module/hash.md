+++
draft = false
title = "hash"
description = "信息摘要计算模块，可用于计算信息摘要和摘要签名"
[menu.main]
parent = "modules"
identifier = "hash"
+++

信息摘要计算模块，可用于计算信息摘要和摘要签名

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const MD2`[`MD2`](#de/de9/namespacehash_1a689dd28b282304925e55c0db219344ac)`MD2`<p>MD2 信息摘要算法标识常量</p>
const            | `public const MD4`[`MD4`](#de/de9/namespacehash_1aa1980ad091918ba71f499de363f62373)`MD4`<p>MD4 信息摘要算法标识常量</p>
const            | `public const MD5`[`MD5`](#de/de9/namespacehash_1ab0e5d6a3bc753ca837d5e987c9cb32d5)`MD5`<p>MD5 信息摘要算法标识常量</p>
const            | `public const SHA1`[`SHA1`](#de/de9/namespacehash_1ae6d6e5a2a8d662ca993fba1e1ea29b44)`SHA1`<p>SHA1 信息摘要算法标识常量</p>
const            | `public const SHA224`[`SHA224`](#de/de9/namespacehash_1a34fdd3e887eceac4cb2abd916b409caa)`SHA224`<p>SHA224 信息摘要算法标识常量</p>
const            | `public const SHA256`[`SHA256`](#de/de9/namespacehash_1af6eaa5c40117ecd45c53c2988cc1eff0)`SHA256`<p>SHA256 信息摘要算法标识常量</p>
const            | `public const SHA384`[`SHA384`](#de/de9/namespacehash_1a2dff891b6426a50f09cd2d13fadf28e8)`SHA384`<p>SHA384 信息摘要算法标识常量</p>
const            | `public const SHA512`[`SHA512`](#de/de9/namespacehash_1a362a5b2450a352638057768e66d6474c)`SHA512`<p>SHA512 信息摘要算法标识常量</p>
const            | `public const RIPEMD160`[`RIPEMD160`](#de/de9/namespacehash_1ad0dca017211b72aebc3c7e28fc832051)`RIPEMD160`<p>RIPEMD160 信息摘要算法标识常量</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Digest            | `digest(Integer algo,Buffer data)`<p>根据指定的算法标识创建一个信息摘要运算对象</p>
Digest            | `digest(Integer algo)`<p>根据指定的算法标识创建一个信息摘要运算对象</p>
Digest            | `md2(Buffer data)`<p>创建一个 MD2 信息摘要运算对象</p>
Digest            | `md4(Buffer data)`<p>创建一个 MD4 信息摘要运算对象</p>
Digest            | `md5(Buffer data)`<p>创建一个 MD5 信息摘要运算对象</p>
Digest            | `sha1(Buffer data)`<p>创建一个 SHA1 信息摘要运算对象</p>
Digest            | `sha224(Buffer data)`<p>创建一个 SHA224 信息摘要运算对象</p>
Digest            | `sha256(Buffer data)`<p>创建一个 SHA256 信息摘要运算对象</p>
Digest            | `sha384(Buffer data)`<p>创建一个 SHA384 信息摘要运算对象</p>
Digest            | `sha512(Buffer data)`<p>创建一个 SHA512 信息摘要运算对象</p>
Digest            | `ripemd160(Buffer data)`<p>创建一个 RIPEMD160 信息摘要运算对象</p>
Digest            | `hmac(Integer algo,Buffer key)`<p>根据指定的算法标识创建一个信息摘要签名运算对象</p>
Digest            | `hmac_md2(Buffer key)`<p>创建一个 MD2 信息摘要签名运算对象</p>
Digest            | `hmac_md4(Buffer key)`<p>创建一个 MD4 信息摘要签名运算对象</p>
Digest            | `hmac_md5(Buffer key)`<p>创建一个 MD5 信息摘要签名运算对象</p>
Digest            | `hmac_sha1(Buffer key)`<p>创建一个 SHA1 信息摘要签名运算对象</p>
Digest            | `hmac_sha224(Buffer key)`<p>创建一个 SHA224 信息摘要签名运算对象</p>
Digest            | `hmac_sha256(Buffer key)`<p>创建一个 SHA256 信息摘要签名运算对象</p>
Digest            | `hmac_sha384(Buffer key)`<p>创建一个 SHA384 信息摘要签名运算对象</p>
Digest            | `hmac_sha512(Buffer key)`<p>创建一个 SHA512 信息摘要签名运算对象</p>
Digest            | `hmac_ripemd160(Buffer key)`<p>创建一个 RIPEMD160 信息摘要签名运算对象</p>

## Field Detail

{{% panel theme="default" header="MD2" %}}
#### **const** `public const MD2`[`MD2`](#de/de9/namespacehash_1a689dd28b282304925e55c0db219344ac)`MD2`

MD2 信息摘要算法标识常量

{{% /panel %}}
{{% panel theme="default" header="MD4" %}}
#### **const** `public const MD4`[`MD4`](#de/de9/namespacehash_1aa1980ad091918ba71f499de363f62373)`MD4`

MD4 信息摘要算法标识常量

{{% /panel %}}
{{% panel theme="default" header="MD5" %}}
#### **const** `public const MD5`[`MD5`](#de/de9/namespacehash_1ab0e5d6a3bc753ca837d5e987c9cb32d5)`MD5`

MD5 信息摘要算法标识常量

{{% /panel %}}
{{% panel theme="default" header="SHA1" %}}
#### **const** `public const SHA1`[`SHA1`](#de/de9/namespacehash_1ae6d6e5a2a8d662ca993fba1e1ea29b44)`SHA1`

SHA1 信息摘要算法标识常量

{{% /panel %}}
{{% panel theme="default" header="SHA224" %}}
#### **const** `public const SHA224`[`SHA224`](#de/de9/namespacehash_1a34fdd3e887eceac4cb2abd916b409caa)`SHA224`

SHA224 信息摘要算法标识常量

{{% /panel %}}
{{% panel theme="default" header="SHA256" %}}
#### **const** `public const SHA256`[`SHA256`](#de/de9/namespacehash_1af6eaa5c40117ecd45c53c2988cc1eff0)`SHA256`

SHA256 信息摘要算法标识常量

{{% /panel %}}
{{% panel theme="default" header="SHA384" %}}
#### **const** `public const SHA384`[`SHA384`](#de/de9/namespacehash_1a2dff891b6426a50f09cd2d13fadf28e8)`SHA384`

SHA384 信息摘要算法标识常量

{{% /panel %}}
{{% panel theme="default" header="SHA512" %}}
#### **const** `public const SHA512`[`SHA512`](#de/de9/namespacehash_1a362a5b2450a352638057768e66d6474c)`SHA512`

SHA512 信息摘要算法标识常量

{{% /panel %}}
{{% panel theme="default" header="RIPEMD160" %}}
#### **const** `public const RIPEMD160`[`RIPEMD160`](#de/de9/namespacehash_1ad0dca017211b72aebc3c7e28fc832051)`RIPEMD160`

RIPEMD160 信息摘要算法标识常量

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="digest" %}}
#### **Digest** `digest(Integer algo,Buffer data)`

根据指定的算法标识创建一个信息摘要运算对象

#### Parameters
* `algo` 指定摘要运算算法 

* `data` 创建同时更新的二进制数据 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="digest" %}}
#### **Digest** `digest(Integer algo)`

根据指定的算法标识创建一个信息摘要运算对象

#### Parameters
* `algo` 指定摘要运算算法 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="md2" %}}
#### **Digest** `md2(Buffer data)`

创建一个 MD2 信息摘要运算对象

#### Parameters
* `data` 创建同时更新的二进制数据 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="md4" %}}
#### **Digest** `md4(Buffer data)`

创建一个 MD4 信息摘要运算对象

#### Parameters
* `data` 创建同时更新的二进制数据 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="md5" %}}
#### **Digest** `md5(Buffer data)`

创建一个 MD5 信息摘要运算对象

#### Parameters
* `data` 创建同时更新的二进制数据 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="sha1" %}}
#### **Digest** `sha1(Buffer data)`

创建一个 SHA1 信息摘要运算对象

#### Parameters
* `data` 创建同时更新的二进制数据 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="sha224" %}}
#### **Digest** `sha224(Buffer data)`

创建一个 SHA224 信息摘要运算对象

#### Parameters
* `data` 创建同时更新的二进制数据 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="sha256" %}}
#### **Digest** `sha256(Buffer data)`

创建一个 SHA256 信息摘要运算对象

#### Parameters
* `data` 创建同时更新的二进制数据 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="sha384" %}}
#### **Digest** `sha384(Buffer data)`

创建一个 SHA384 信息摘要运算对象

#### Parameters
* `data` 创建同时更新的二进制数据 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="sha512" %}}
#### **Digest** `sha512(Buffer data)`

创建一个 SHA512 信息摘要运算对象

#### Parameters
* `data` 创建同时更新的二进制数据 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="ripemd160" %}}
#### **Digest** `ripemd160(Buffer data)`

创建一个 RIPEMD160 信息摘要运算对象

#### Parameters
* `data` 创建同时更新的二进制数据 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="hmac" %}}
#### **Digest** `hmac(Integer algo,Buffer key)`

根据指定的算法标识创建一个信息摘要签名运算对象

#### Parameters
* `algo` 指定摘要运算算法 

* `key` 二进制签名密钥 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="hmac_md2" %}}
#### **Digest** `hmac_md2(Buffer key)`

创建一个 MD2 信息摘要签名运算对象

#### Parameters
* `key` 二进制签名密钥 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="hmac_md4" %}}
#### **Digest** `hmac_md4(Buffer key)`

创建一个 MD4 信息摘要签名运算对象

#### Parameters
* `key` 二进制签名密钥 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="hmac_md5" %}}
#### **Digest** `hmac_md5(Buffer key)`

创建一个 MD5 信息摘要签名运算对象

#### Parameters
* `key` 二进制签名密钥 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="hmac_sha1" %}}
#### **Digest** `hmac_sha1(Buffer key)`

创建一个 SHA1 信息摘要签名运算对象

#### Parameters
* `key` 二进制签名密钥 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="hmac_sha224" %}}
#### **Digest** `hmac_sha224(Buffer key)`

创建一个 SHA224 信息摘要签名运算对象

#### Parameters
* `key` 二进制签名密钥 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="hmac_sha256" %}}
#### **Digest** `hmac_sha256(Buffer key)`

创建一个 SHA256 信息摘要签名运算对象

#### Parameters
* `key` 二进制签名密钥 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="hmac_sha384" %}}
#### **Digest** `hmac_sha384(Buffer key)`

创建一个 SHA384 信息摘要签名运算对象

#### Parameters
* `key` 二进制签名密钥 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="hmac_sha512" %}}
#### **Digest** `hmac_sha512(Buffer key)`

创建一个 SHA512 信息摘要签名运算对象

#### Parameters
* `key` 二进制签名密钥 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}
{{% panel theme="default" header="hmac_ripemd160" %}}
#### **Digest** `hmac_ripemd160(Buffer key)`

创建一个 RIPEMD160 信息摘要签名运算对象

#### Parameters
* `key` 二进制签名密钥 

#### Returns
返回构造的信息摘要对象
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>