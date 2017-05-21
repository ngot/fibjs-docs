+++
draft = false
title = "uuid"
description = "uuid 唯一 id 模块"
[menu.main]
parent = "modules"
identifier = "uuid"
+++

uuid 唯一 id 模块

基础模块。提供唯一 id 的创建于操作 
```js
var uuid = require('uuid');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const DNS`[`DNS`](#d1/dd6/namespaceuuid_1ab876ea9b57cb05af8f52ca4ea920ef5f)`DNS`<p>md5 与 sha1 创建 uuid 时指定 name 命名为域名</p>
const            | `public const URL`[`URL`](#d1/dd6/namespaceuuid_1a777611efce7d88f7529d948acdde8da4)`URL`<p>md5 与 sha1 创建 uuid 时指定 name 命名为 url 地址</p>
const            | `public const OID`[`OID`](#d1/dd6/namespaceuuid_1a4e2d87268f1d0042f6844b1dfb66b555)`OID`<p>md5 与 sha1 创建 uuid 时指定 name 命名为 ISO OID</p>
const            | `public const X509`[`X509`](#d1/dd6/namespaceuuid_1a53f0cdbadd055279bc7eded66eeb8af7)`X509`<p>md5 与 sha1 创建 uuid 时指定 name 命名为 X.500 DN</p>
Integer            | `public static Integer hostID`[`hostID`](#d1/dd6/namespaceuuid_1a6b4bcf3627071cbf4684d9dfa4327bf9)`hostID`<p>查询和修改 Snowflake 算法的主机 id</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Buffer            | `node()`<p>使用时间和主机名创建 uuid</p>
Buffer            | `md5(Integer ns,String name)`<p>使用特定命名的 md5 创建 uuid</p>
Buffer            | `random()`<p>使用随机数创建 uuid</p>
Buffer            | `sha1(Integer ns,String name)`<p>使用特定命名的 sha1 创建 uuid</p>
Buffer            | `snowflake()`<p>使用 Snowflake 算法创建 uuid</p>

## Field Detail

{{% panel theme="default" header="DNS" %}}
#### **const** `public const DNS`[`DNS`](#d1/dd6/namespaceuuid_1ab876ea9b57cb05af8f52ca4ea920ef5f)`DNS`

md5 与 sha1 创建 uuid 时指定 name 命名为域名

{{% /panel %}}
{{% panel theme="default" header="URL" %}}
#### **const** `public const URL`[`URL`](#d1/dd6/namespaceuuid_1a777611efce7d88f7529d948acdde8da4)`URL`

md5 与 sha1 创建 uuid 时指定 name 命名为 url 地址

{{% /panel %}}
{{% panel theme="default" header="OID" %}}
#### **const** `public const OID`[`OID`](#d1/dd6/namespaceuuid_1a4e2d87268f1d0042f6844b1dfb66b555)`OID`

md5 与 sha1 创建 uuid 时指定 name 命名为 ISO OID

{{% /panel %}}
{{% panel theme="default" header="X509" %}}
#### **const** `public const X509`[`X509`](#d1/dd6/namespaceuuid_1a53f0cdbadd055279bc7eded66eeb8af7)`X509`

md5 与 sha1 创建 uuid 时指定 name 命名为 X.500 DN

{{% /panel %}}
{{% panel theme="default" header="hostID" %}}
#### **Integer** `public static Integer hostID`[`hostID`](#d1/dd6/namespaceuuid_1a6b4bcf3627071cbf4684d9dfa4327bf9)`hostID`

查询和修改 Snowflake 算法的主机 id

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="node" %}}
#### **Buffer** `node()`

使用时间和主机名创建 uuid

#### Returns
返回一个生成的二进制 id
{{% /panel %}}
{{% panel theme="default" header="md5" %}}
#### **Buffer** `md5(Integer ns,String name)`

使用特定命名的 md5 创建 uuid

#### Parameters
* `ns` 指定命名空间，可以为 uuid.DNS, uuid.URL, uuid.OID, uuid.X509

* `name` 指定名称 

#### Returns
返回一个生成的二进制 id
{{% /panel %}}
{{% panel theme="default" header="random" %}}
#### **Buffer** `random()`

使用随机数创建 uuid

#### Returns
返回一个生成的二进制 id
{{% /panel %}}
{{% panel theme="default" header="sha1" %}}
#### **Buffer** `sha1(Integer ns,String name)`

使用特定命名的 sha1 创建 uuid

#### Parameters
* `ns` 指定命名空间，可以为 uuid.DNS, uuid.URL, uuid.OID, uuid.X509

* `name` 指定名称 

#### Returns
返回一个生成的二进制 id
{{% /panel %}}
{{% panel theme="default" header="snowflake" %}}
#### **Buffer** `snowflake()`

使用 Snowflake 算法创建 uuid

#### Returns
返回一个生成的二进制 id
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>