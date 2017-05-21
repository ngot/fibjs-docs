+++
draft = false
title = "fs"
description = "文件系统处理模块"
[menu.main]
parent = "modules"
identifier = "fs"
+++

文件系统处理模块

使用方法： 
```js
var fs = require('fs');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const SEEK_SET`[`SEEK_SET`](#d5/d8f/namespacefs_1a0686184eea338b4a609bbd9f2cb3ec18)`SEEK_SET`<p>seek 方式常量，移动到绝对位置</p>
const            | `public const SEEK_CUR`[`SEEK_CUR`](#d5/d8f/namespacefs_1a2f14f4f6475f3473f71c13cc4180f7f6)`SEEK_CUR`<p>seek 方式常量，移动到当前位置的相对位置</p>
const            | `public const SEEK_END`[`SEEK_END`](#d5/d8f/namespacefs_1a58e403e48389bab859c0f418f1ebcea3)`SEEK_END`<p>seek 方式常量，移动到文件结尾的相对位置</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Boolean            | `exists(String path)`<p>查询指定的文件或目录是否存在</p>
Boolean            | `existsSync(String path)`<p>查询指定的文件或目录是否存在，是 exists 的同步版兼容接口</p>
void            | `unlink(String path)`<p>删除指定的文件</p>
void            | `unlinkSync(String path)`<p>删除指定的文件，是 unlink 的同步版兼容接口</p>
void            | `mkdir(String path,Integer mode)`<p>创建一个目录</p>
void            | `mkdirSync(String path,Integer mode)`<p>创建一个目录，是 mkdir 的同步版兼容接口</p>
void            | `rmdir(String path)`<p>删除一个目录</p>
void            | `rmdirSync(String path)`<p>删除一个目录，是 rmdir 的同步版兼容接口</p>
void            | `rename(String from,String to)`<p>重新命名一个文件</p>
void            | `renameSync(String from,String to)`<p>重新命名一个文件，是 rename 的同步版兼容接口</p>
void            | `copy(String from,String to)`<p>复制一个文件</p>
void            | `chmod(String path,Integer mode)`<p>设置指定文件的访问权限，Windows 不支持此方法</p>
void            | `chmodSync(String path,Integer mode)`<p>设置指定文件的访问权限，是 chmod 的同步版兼容接口</p>
Stat            | `stat(String path)`<p>查询指定文件的基础信息</p>
Stat            | `statSync(String path)`<p>查询指定文件的基础信息，是 stat 的同步版兼容接口</p>
List            | `readdir(String path)`<p>读取指定目录的文件信息</p>
List            | `readdirSync(String path)`<p>读取指定目录的文件信息，是 readdir 的同步版兼容接口</p>
SeekableStream            | `open(String fname,String flags)`<p>打开文件，用于读取，写入，或者同时读写</p>
SeekableStream            | `openSync(String fname,String flags)`<p>打开文件，用于读取，写入，或者同时读写，是 open 的同步版兼容接口</p>
BufferedStream            | `openTextStream(String fname,String flags)`<p>打开文本文件，用于读取，写入，或者同时读写</p>
String            | `readTextFile(String fname)`<p>打开文本文件，并读取内容</p>
Buffer            | `readFile(String fname)`<p>打开二进制文件，并读取内容</p>
Buffer            | `readFileSync(String fname)`<p>打开二进制文件，并读取内容，是 readFile 的同步版兼容接口</p>
Array            | `readLines(String fname,Integer maxlines)`<p>打开文件，以数组方式读取一组文本行，行结尾标识基于 EOL 属性的设置，缺省时，posix:"\n"；windows:"\r\n"</p>
void            | `writeTextFile(String fname,String txt)`<p>创建文本文件，并写入内容</p>
void            | `writeFile(String fname,Buffer data)`<p>创建二进制文件，并写入内容</p>
void            | `writeFileSync(String fname,Buffer data)`<p>创建二进制文件，并写入内容，是 writeFile 的同步版兼容接口</p>

## Field Detail

{{% panel theme="default" header="SEEK_SET" %}}
#### **const** `public const SEEK_SET`[`SEEK_SET`](#d5/d8f/namespacefs_1a0686184eea338b4a609bbd9f2cb3ec18)`SEEK_SET`

seek 方式常量，移动到绝对位置

{{% /panel %}}
{{% panel theme="default" header="SEEK_CUR" %}}
#### **const** `public const SEEK_CUR`[`SEEK_CUR`](#d5/d8f/namespacefs_1a2f14f4f6475f3473f71c13cc4180f7f6)`SEEK_CUR`

seek 方式常量，移动到当前位置的相对位置

{{% /panel %}}
{{% panel theme="default" header="SEEK_END" %}}
#### **const** `public const SEEK_END`[`SEEK_END`](#d5/d8f/namespacefs_1a58e403e48389bab859c0f418f1ebcea3)`SEEK_END`

seek 方式常量，移动到文件结尾的相对位置

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="exists" %}}
#### **Boolean** `exists(String path)`

查询指定的文件或目录是否存在

#### Parameters
* `path` 指定要查询的路径 

#### Returns
返回 True 表示文件或目录存在
{{% /panel %}}
{{% panel theme="default" header="existsSync" %}}
#### **Boolean** `existsSync(String path)`

查询指定的文件或目录是否存在，是 exists 的同步版兼容接口

#### Parameters
* `path` 指定要查询的路径 

#### Returns
返回 True 表示文件或目录存在
{{% /panel %}}
{{% panel theme="default" header="unlink" %}}
#### **void** `unlink(String path)`

删除指定的文件

#### Parameters
* `path` 指定要删除的路径
{{% /panel %}}
{{% panel theme="default" header="unlinkSync" %}}
#### **void** `unlinkSync(String path)`

删除指定的文件，是 unlink 的同步版兼容接口

#### Parameters
* `path` 指定要删除的路径
{{% /panel %}}
{{% panel theme="default" header="mkdir" %}}
#### **void** `mkdir(String path,Integer mode)`

创建一个目录

#### Parameters
* `path` 指定要创建的目录名 

* `mode` 指定文件权限，Windows 忽略此参数
{{% /panel %}}
{{% panel theme="default" header="mkdirSync" %}}
#### **void** `mkdirSync(String path,Integer mode)`

创建一个目录，是 mkdir 的同步版兼容接口

#### Parameters
* `path` 指定要创建的目录名 

* `mode` 指定文件权限，Windows 忽略此参数
{{% /panel %}}
{{% panel theme="default" header="rmdir" %}}
#### **void** `rmdir(String path)`

删除一个目录

#### Parameters
* `path` 指定要删除的目录名
{{% /panel %}}
{{% panel theme="default" header="rmdirSync" %}}
#### **void** `rmdirSync(String path)`

删除一个目录，是 rmdir 的同步版兼容接口

#### Parameters
* `path` 指定要删除的目录名
{{% /panel %}}
{{% panel theme="default" header="rename" %}}
#### **void** `rename(String from,String to)`

重新命名一个文件

#### Parameters
* `from` 指定更名的文件 

* `to` 指定要修改的新文件名
{{% /panel %}}
{{% panel theme="default" header="renameSync" %}}
#### **void** `renameSync(String from,String to)`

重新命名一个文件，是 rename 的同步版兼容接口

#### Parameters
* `from` 指定更名的文件 

* `to` 指定要修改的新文件名
{{% /panel %}}
{{% panel theme="default" header="copy" %}}
#### **void** `copy(String from,String to)`

复制一个文件

#### Parameters
* `from` 指定更名的文件 

* `to` 指定要修改的新文件名
{{% /panel %}}
{{% panel theme="default" header="chmod" %}}
#### **void** `chmod(String path,Integer mode)`

设置指定文件的访问权限，Windows 不支持此方法

#### Parameters
* `path` 指定操作的文件 

* `mode` 指定设定的访问权限
{{% /panel %}}
{{% panel theme="default" header="chmodSync" %}}
#### **void** `chmodSync(String path,Integer mode)`

设置指定文件的访问权限，是 chmod 的同步版兼容接口

#### Parameters
* `path` 指定操作的文件 

* `mode` 指定设定的访问权限
{{% /panel %}}
{{% panel theme="default" header="stat" %}}
#### **Stat** `stat(String path)`

查询指定文件的基础信息

#### Parameters
* `path` 指定查询的文件 

#### Returns
返回文件的基础信息
{{% /panel %}}
{{% panel theme="default" header="statSync" %}}
#### **Stat** `statSync(String path)`

查询指定文件的基础信息，是 stat 的同步版兼容接口

#### Parameters
* `path` 指定查询的文件 

#### Returns
返回文件的基础信息
{{% /panel %}}
{{% panel theme="default" header="readdir" %}}
#### **List** `readdir(String path)`

读取指定目录的文件信息

#### Parameters
* `path` 指定查询的目录 

#### Returns
返回目录的文件信息数组
{{% /panel %}}
{{% panel theme="default" header="readdirSync" %}}
#### **List** `readdirSync(String path)`

读取指定目录的文件信息，是 readdir 的同步版兼容接口

#### Parameters
* `path` 指定查询的目录 

#### Returns
返回目录的文件信息数组
{{% /panel %}}
{{% panel theme="default" header="open" %}}
#### **SeekableStream** `open(String fname,String flags)`

打开文件，用于读取，写入，或者同时读写

#### Parameters
* `fname` 指定文件名 

* `flags` 指定文件打开方式，缺省为 "r"，只读方式。支持的方式如下：

* 'r' 只读方式，文件不存在则抛出错误。

* 'r+' 读写方式，文件不存在则抛出错误。

* 'w' 只写方式，文件不存在则自动创建，存在则将被清空。

* 'w+' 读写方式，文件不存在则自动创建。

* 'a' 只写添加方式，文件不存在则自动创建。

* 'a+' 读写添加方式，文件不存在则自动创建。 

#### Returns
返回打开的文件对象
{{% /panel %}}
{{% panel theme="default" header="openSync" %}}
#### **SeekableStream** `openSync(String fname,String flags)`

打开文件，用于读取，写入，或者同时读写，是 open 的同步版兼容接口

#### Parameters
* `fname` 指定文件名 

* `flags` 指定文件打开方式，缺省为 "r"，只读方式。支持的方式如下：

* 'r' 只读方式，文件不存在则抛出错误。

* 'r+' 读写方式，文件不存在则抛出错误。

* 'w' 只写方式，文件不存在则自动创建，存在则将被清空。

* 'w+' 读写方式，文件不存在则自动创建。

* 'a' 只写添加方式，文件不存在则自动创建。

* 'a+' 读写添加方式，文件不存在则自动创建。 

#### Returns
返回打开的文件对象
{{% /panel %}}
{{% panel theme="default" header="openTextStream" %}}
#### **BufferedStream** `openTextStream(String fname,String flags)`

打开文本文件，用于读取，写入，或者同时读写

#### Parameters
* `fname` 指定文件名 

* `flags` 指定文件打开方式，缺省为 "r"，只读方式。支持的方式如下：

* 'r' 只读方式，文件不存在则抛出错误。

* 'r+' 读写方式，文件不存在则抛出错误。

* 'w' 只写方式，文件不存在则自动创建，存在则将被清空。

* 'w+' 读写方式，文件不存在则自动创建。

* 'a' 只写添加方式，文件不存在则自动创建。

* 'a+' 读写添加方式，文件不存在则自动创建。 

#### Returns
返回打开的文件对象
{{% /panel %}}
{{% panel theme="default" header="readTextFile" %}}
#### **String** `readTextFile(String fname)`

打开文本文件，并读取内容

#### Parameters
* `fname` 指定文件名 

#### Returns
返回文件文本内容
{{% /panel %}}
{{% panel theme="default" header="readFile" %}}
#### **Buffer** `readFile(String fname)`

打开二进制文件，并读取内容

#### Parameters
* `fname` 指定文件名 

#### Returns
返回文件文本内容
{{% /panel %}}
{{% panel theme="default" header="readFileSync" %}}
#### **Buffer** `readFileSync(String fname)`

打开二进制文件，并读取内容，是 readFile 的同步版兼容接口

#### Parameters
* `fname` 指定文件名 

#### Returns
返回文件文本内容
{{% /panel %}}
{{% panel theme="default" header="readLines" %}}
#### **Array** `readLines(String fname,Integer maxlines)`

打开文件，以数组方式读取一组文本行，行结尾标识基于 EOL 属性的设置，缺省时，posix:"\n"；windows:"\r\n"

#### Parameters
* `fname` 指定文件名 

* `maxlines` 指定此次读取的最大行数，缺省读取全部文本行 

#### Returns
返回读取的文本行数组，若无数据可读，或者连接中断，空数组
{{% /panel %}}
{{% panel theme="default" header="writeTextFile" %}}
#### **void** `writeTextFile(String fname,String txt)`

创建文本文件，并写入内容

#### Parameters
* `fname` 指定文件名 

* `txt` 指定要写入的字符串
{{% /panel %}}
{{% panel theme="default" header="writeFile" %}}
#### **void** `writeFile(String fname,Buffer data)`

创建二进制文件，并写入内容

#### Parameters
* `fname` 指定文件名 

* `data` 指定要写入的二进制数据
{{% /panel %}}
{{% panel theme="default" header="writeFileSync" %}}
#### **void** `writeFileSync(String fname,Buffer data)`

创建二进制文件，并写入内容，是 writeFile 的同步版兼容接口

#### Parameters
* `fname` 指定文件名 

* `data` 指定要写入的二进制数据
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>