+++
draft = false
title = "registry"
description = "Windows 注册表访问模块 引用方式："
[menu.main]
parent = "modules"
identifier = "registry"
+++

Windows 注册表访问模块 引用方式：

```js
var registry = require('registry');
var value = registry.get(registry.CLASSES_ROOT, "\node1\node2\value");
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const CLASSES_ROOT`[`CLASSES_ROOT`](#de/d1f/namespaceregistry_1a169064db623c1c7d0204b197f98a0486)`CLASSES_ROOT`<p>注册表根，存储Windows可识别的文件类型的详细列表，以及相关联的程序</p>
const            | `public const CURRENT_USER`[`CURRENT_USER`](#de/d1f/namespaceregistry_1a643771ab43dd2c5d8928cdcda2591187)`CURRENT_USER`<p>注册表根，存储当前用户设置的信息</p>
const            | `public const LOCAL_MACHINE`[`LOCAL_MACHINE`](#de/d1f/namespaceregistry_1a4151273437253276232b77ac49add3a2)`LOCAL_MACHINE`<p>注册表根，包括安装在计算机上的硬件和软件的信息</p>
const            | `public const USERS`[`USERS`](#de/d1f/namespaceregistry_1a4962469ceb053f31ad137610e83863bf)`USERS`<p>注册表根，包含使用计算机的用户的信息</p>
const            | `public const CURRENT_CONFIG`[`CURRENT_CONFIG`](#de/d1f/namespaceregistry_1a3a98fe918f95011c757278e1a7ea6aaf)`CURRENT_CONFIG`<p>注册表根，这个分支包含计算机当前的硬件配置信息</p>
const            | `public const SZ`[`SZ`](#de/d1f/namespaceregistry_1a4f43a31a288aa96864578dc1dede5fe9)`SZ`<p>注册表数据类型，字符串</p>
const            | `public const EXPAND_SZ`[`EXPAND_SZ`](#de/d1f/namespaceregistry_1ab23e2e3ac7b22931578e1aff3ab037fe)`EXPAND_SZ`<p>注册表数据类型，扩展字符串</p>
const            | `public const DWORD`[`DWORD`](#de/d1f/namespaceregistry_1ac52af98904b43315db870da1f75f03c4)`DWORD`<p>注册表数据类型，32 位数值</p>
const            | `public const QWORD`[`QWORD`](#de/d1f/namespaceregistry_1a290213ccdd98f1a63aadef76c5d49a85)`QWORD`<p>注册表数据类型，64 位数值</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
List            | `listSubKey(Integer root,String key)`<p>返回指定键值下的所有子健</p>
List            | `listValue(Integer root,String key)`<p>返回指定键值下的所有数据的健</p>
Value            | `get(Integer root,String key)`<p>查询指定键值的数值</p>
void            | `set(Integer root,String key,Number value,Integer type)`<p>设置指定键值为数字</p>
void            | `set(Integer root,String key,String value,Integer type)`<p>设置指定键值为字符串</p>
void            | `set(Integer root,String key,Array value)`<p>设置指定键值为多字符串</p>
void            | `set(Integer root,String key,Buffer value)`<p>设置指定键值为二进制</p>
void            | `del(Integer root,String key)`<p>删除指定键值的数值</p>

## Field Detail

{{% panel theme="default" header="CLASSES_ROOT" %}}
#### **const** `public const CLASSES_ROOT`[`CLASSES_ROOT`](#de/d1f/namespaceregistry_1a169064db623c1c7d0204b197f98a0486)`CLASSES_ROOT`

注册表根，存储Windows可识别的文件类型的详细列表，以及相关联的程序

{{% /panel %}}
{{% panel theme="default" header="CURRENT_USER" %}}
#### **const** `public const CURRENT_USER`[`CURRENT_USER`](#de/d1f/namespaceregistry_1a643771ab43dd2c5d8928cdcda2591187)`CURRENT_USER`

注册表根，存储当前用户设置的信息

{{% /panel %}}
{{% panel theme="default" header="LOCAL_MACHINE" %}}
#### **const** `public const LOCAL_MACHINE`[`LOCAL_MACHINE`](#de/d1f/namespaceregistry_1a4151273437253276232b77ac49add3a2)`LOCAL_MACHINE`

注册表根，包括安装在计算机上的硬件和软件的信息

{{% /panel %}}
{{% panel theme="default" header="USERS" %}}
#### **const** `public const USERS`[`USERS`](#de/d1f/namespaceregistry_1a4962469ceb053f31ad137610e83863bf)`USERS`

注册表根，包含使用计算机的用户的信息

{{% /panel %}}
{{% panel theme="default" header="CURRENT_CONFIG" %}}
#### **const** `public const CURRENT_CONFIG`[`CURRENT_CONFIG`](#de/d1f/namespaceregistry_1a3a98fe918f95011c757278e1a7ea6aaf)`CURRENT_CONFIG`

注册表根，这个分支包含计算机当前的硬件配置信息

{{% /panel %}}
{{% panel theme="default" header="SZ" %}}
#### **const** `public const SZ`[`SZ`](#de/d1f/namespaceregistry_1a4f43a31a288aa96864578dc1dede5fe9)`SZ`

注册表数据类型，字符串

{{% /panel %}}
{{% panel theme="default" header="EXPAND_SZ" %}}
#### **const** `public const EXPAND_SZ`[`EXPAND_SZ`](#de/d1f/namespaceregistry_1ab23e2e3ac7b22931578e1aff3ab037fe)`EXPAND_SZ`

注册表数据类型，扩展字符串

{{% /panel %}}
{{% panel theme="default" header="DWORD" %}}
#### **const** `public const DWORD`[`DWORD`](#de/d1f/namespaceregistry_1ac52af98904b43315db870da1f75f03c4)`DWORD`

注册表数据类型，32 位数值

{{% /panel %}}
{{% panel theme="default" header="QWORD" %}}
#### **const** `public const QWORD`[`QWORD`](#de/d1f/namespaceregistry_1a290213ccdd98f1a63aadef76c5d49a85)`QWORD`

注册表数据类型，64 位数值

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="listSubKey" %}}
#### **List** `listSubKey(Integer root,String key)`

返回指定键值下的所有子健

#### Parameters
* `root` 指定注册表根 

* `key` 指定键值 

#### Returns
返回该键值下所有子健
{{% /panel %}}
{{% panel theme="default" header="listValue" %}}
#### **List** `listValue(Integer root,String key)`

返回指定键值下的所有数据的健

#### Parameters
* `root` 指定注册表根 

* `key` 指定键值 

#### Returns
返回该键值下所有数据的健
{{% /panel %}}
{{% panel theme="default" header="get" %}}
#### **Value** `get(Integer root,String key)`

查询指定键值的数值

#### Parameters
* `root` 指定注册表根 

* `key` 指定键值 

#### Returns
返回指定键值的数值
{{% /panel %}}
{{% panel theme="default" header="set" %}}
#### **void** `set(Integer root,String key,Number value,Integer type)`

设置指定键值为数字

#### Parameters
* `root` 指定注册表根 

* `key` 指定键值 

* `value` 指定数字 

* `type` 指定类型，允许的类型为 DWORD 和 QWORD，缺省为 DWORD
{{% /panel %}}
{{% panel theme="default" header="set" %}}
#### **void** `set(Integer root,String key,String value,Integer type)`

设置指定键值为字符串

#### Parameters
* `root` 指定注册表根 

* `key` 指定键值 

* `value` 指定字符串 

* `type` 指定类型，允许的类型为 SZ 和 EXPAND_SZ，缺省为 SZ
{{% /panel %}}
{{% panel theme="default" header="set" %}}
#### **void** `set(Integer root,String key,Array value)`

设置指定键值为多字符串

#### Parameters
* `root` 指定注册表根 

* `key` 指定键值 

* `value` 指定多字符串数组
{{% /panel %}}
{{% panel theme="default" header="set" %}}
#### **void** `set(Integer root,String key,Buffer value)`

设置指定键值为二进制

#### Parameters
* `root` 指定注册表根 

* `key` 指定键值 

* `value` 指定二进制数据
{{% /panel %}}
{{% panel theme="default" header="del" %}}
#### **void** `del(Integer root,String key)`

删除指定键值的数值

#### Parameters
* `root` 指定注册表根 

* `key` 指定键值
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>