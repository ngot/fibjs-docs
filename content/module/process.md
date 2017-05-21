+++
draft = false
title = "process"
description = "进程处理模块，用以管理当前进程的资源"
[menu.main]
parent = "modules"
identifier = "process"
+++

进程处理模块，用以管理当前进程的资源

引用方法： 
```js
var process = require('process');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
readonly Array            | `public static readonly Array argv`[`argv`](#d8/d25/namespaceprocess_1a2c1a6c800a4d1b0fdd5f9f405c5475d5)`argv`<p>返回当前进程的命令行参数</p>
readonly Array            | `public static readonly Array execArgv`[`execArgv`](#d8/d25/namespaceprocess_1a12522010d9ba6e2d19f1aae35d09cc03)`execArgv`<p>返回当前进程的特殊命令行参数，这些参数被 fibjs 用于设置运行环境</p>
readonly String            | `public static readonly String version`[`version`](#d8/d25/namespaceprocess_1aff2687419abe092406c7db42dbbf9ed3)`version`<p>返回fibjs版本字符串</p>
readonly String            | `public static readonly String execPath`[`execPath`](#d8/d25/namespaceprocess_1ade6cd663e8d8b831023dcfe0b34a9bed)`execPath`<p>查询当前运行执行文件完整路径</p>
readonly Object            | `public static readonly Object env`[`env`](#d8/d25/namespaceprocess_1a5452c47f4dfe56944cb47893c53d1476)`env`<p>查询当前进程的环境变量</p>
readonly String            | `public static readonly String arch`[`arch`](#d8/d25/namespaceprocess_1af8e7dc24026c4ba4676707979dbe308f)`arch`<p>查询当前 cpu 环境，可能的结果为 'amd64', 'arm', 'arm64', 'ia32'</p>
readonly String            | `public static readonly String platform`[`platform`](#d8/d25/namespaceprocess_1af6d11f7f0f3d0ad46e9a7e701a6f78b8)`platform`<p>查询当前平台名称，可能的结果为 'darwin', 'freebsd', 'linux', 或 'win32'</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Integer            | `umask(Integer mask)`<p>改变当前的 umask，Windows 不支持此方法</p>
Integer            | `umask(String mask)`<p>改变当前的 umask，Windows 不支持此方法</p>
Integer            | `umask()`<p>返回当前的 umask，Windows 不支持此方法</p>
void            | `exit(Integer code)`<p>退出当前进程，并返回结果</p>
String            | `cwd()`<p>返回操作系统当前工作路径</p>
void            | `chdir(String directory)`<p>修改操作系统当前工作路径</p>
Number            | `uptime()`<p>查询运行环境运行时间，以秒为单位</p>
Object            | `memoryUsage()`<p>查询当前进程内存使用报告</p>
void            | `nextTick(Function func,...)`<p>启动一个纤程</p>
SubProcess            | `open(String command,Array args,Object opts)`<p>运行指定的命令行，接管进程输入输出流，并返回进程对象</p>
SubProcess            | `open(String command,Object opts)`<p>运行指定的命令行，接管进程输入输出流，并返回进程对象</p>
SubProcess            | `start(String command,Array args,Object opts)`<p>运行指定的命令行，并返回进程对象</p>
SubProcess            | `start(String command,Object opts)`<p>运行指定的命令行，并返回进程对象</p>
Integer            | `run(String command,Array args,Object opts)`<p>运行指定的命令行，并返回进程的结束代码</p>
Integer            | `run(String command,Object opts)`<p>运行指定的命令行，并返回进程的结束代码</p>

## Field Detail

{{% panel theme="default" header="argv" %}}
#### **readonly Array** `public static readonly Array argv`[`argv`](#d8/d25/namespaceprocess_1a2c1a6c800a4d1b0fdd5f9f405c5475d5)`argv`

返回当前进程的命令行参数

{{% /panel %}}
{{% panel theme="default" header="execArgv" %}}
#### **readonly Array** `public static readonly Array execArgv`[`execArgv`](#d8/d25/namespaceprocess_1a12522010d9ba6e2d19f1aae35d09cc03)`execArgv`

返回当前进程的特殊命令行参数，这些参数被 fibjs 用于设置运行环境

{{% /panel %}}
{{% panel theme="default" header="version" %}}
#### **readonly String** `public static readonly String version`[`version`](#d8/d25/namespaceprocess_1aff2687419abe092406c7db42dbbf9ed3)`version`

返回fibjs版本字符串

{{% /panel %}}
{{% panel theme="default" header="execPath" %}}
#### **readonly String** `public static readonly String execPath`[`execPath`](#d8/d25/namespaceprocess_1ade6cd663e8d8b831023dcfe0b34a9bed)`execPath`

查询当前运行执行文件完整路径

{{% /panel %}}
{{% panel theme="default" header="env" %}}
#### **readonly Object** `public static readonly Object env`[`env`](#d8/d25/namespaceprocess_1a5452c47f4dfe56944cb47893c53d1476)`env`

查询当前进程的环境变量

{{% /panel %}}
{{% panel theme="default" header="arch" %}}
#### **readonly String** `public static readonly String arch`[`arch`](#d8/d25/namespaceprocess_1af8e7dc24026c4ba4676707979dbe308f)`arch`

查询当前 cpu 环境，可能的结果为 'amd64', 'arm', 'arm64', 'ia32'

{{% /panel %}}
{{% panel theme="default" header="platform" %}}
#### **readonly String** `public static readonly String platform`[`platform`](#d8/d25/namespaceprocess_1af6d11f7f0f3d0ad46e9a7e701a6f78b8)`platform`

查询当前平台名称，可能的结果为 'darwin', 'freebsd', 'linux', 或 'win32'

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="umask" %}}
#### **Integer** `umask(Integer mask)`

改变当前的 umask，Windows 不支持此方法

#### Parameters
* `mask` 指定新的掩码 

#### Returns
返回之前的 mask
{{% /panel %}}
{{% panel theme="default" header="umask" %}}
#### **Integer** `umask(String mask)`

改变当前的 umask，Windows 不支持此方法

#### Parameters
* `mask` 指定新的掩码， 字符串类型八进制(e.g: "0664") 

#### Returns
返回之前的 mask
{{% /panel %}}
{{% panel theme="default" header="umask" %}}
#### **Integer** `umask()`

返回当前的 umask，Windows 不支持此方法

#### Returns
返回当前的 mask 值
{{% /panel %}}
{{% panel theme="default" header="exit" %}}
#### **void** `exit(Integer code)`

退出当前进程，并返回结果

#### Parameters
* `code` 返回进程结果
{{% /panel %}}
{{% panel theme="default" header="cwd" %}}
#### **String** `cwd()`

返回操作系统当前工作路径

#### Returns
返回当前系统路径
{{% /panel %}}
{{% panel theme="default" header="chdir" %}}
#### **void** `chdir(String directory)`

修改操作系统当前工作路径

#### Parameters
* `directory` 指定设定的新路径
{{% /panel %}}
{{% panel theme="default" header="uptime" %}}
#### **Number** `uptime()`

查询运行环境运行时间，以秒为单位

#### Returns
返回表示时间的数值
{{% /panel %}}
{{% panel theme="default" header="memoryUsage" %}}
#### **Object** `memoryUsage()`

查询当前进程内存使用报告

#### Returns
返回包含内存报告

内存报告生成类似以下结果： 
```js
{
  "rss": 8622080,
  "heapTotal": 4083456,
  "heapUsed": 1621800
}
```
 其中：

* rss 返回进程当前占用物理内存大小

* heapTotal 返回 v8 引擎堆内存大小

* heapUsed 返回 v8 引擎正在使用堆内存大小
{{% /panel %}}
{{% panel theme="default" header="nextTick" %}}
#### **void** `nextTick(Function func,...)`

启动一个纤程

#### Parameters
* `func` 制定纤程执行的函数 

* `...` 可变参数序列，此序列会在纤程内传递给函数
{{% /panel %}}
{{% panel theme="default" header="open" %}}
#### **SubProcess** `open(String command,Array args,Object opts)`

运行指定的命令行，接管进程输入输出流，并返回进程对象

#### Parameters
* `command` 指定运行的命令行 

* `args` 指定运行的参数列表 

* `opts` 指定运行的选项，支持的选项如下： 
```js
{
    "timeout": 100, // 单位为 ms
    "envs": [] // 进程环境变量
}
```

#### Returns
返回包含运行结果的进程对象
{{% /panel %}}
{{% panel theme="default" header="open" %}}
#### **SubProcess** `open(String command,Object opts)`

运行指定的命令行，接管进程输入输出流，并返回进程对象

#### Parameters
* `command` 指定运行的命令行 

* `opts` 指定运行的选项，支持的选项如下： 
```js
{
    "timeout": 100, // 单位为 ms
    "envs": [] // 进程环境变量
}
```

#### Returns
返回包含运行结果的进程对象
{{% /panel %}}
{{% panel theme="default" header="start" %}}
#### **SubProcess** `start(String command,Array args,Object opts)`

运行指定的命令行，并返回进程对象

#### Parameters
* `command` 指定运行的命令行 

* `args` 指定运行的参数列表 

* `opts` 指定运行的选项，支持的选项如下： 
```js
{
    "timeout": 100, // 单位为 ms
    "envs": [] // 进程环境变量
}
```

#### Returns
返回包含运行结果的进程对象
{{% /panel %}}
{{% panel theme="default" header="start" %}}
#### **SubProcess** `start(String command,Object opts)`

运行指定的命令行，并返回进程对象

#### Parameters
* `command` 指定运行的命令行 

* `opts` 指定运行的选项，支持的选项如下： 
```js
{
    "timeout": 100, // 单位为 ms
    "envs": [] // 进程环境变量
}
```

#### Returns
返回包含运行结果的进程对象
{{% /panel %}}
{{% panel theme="default" header="run" %}}
#### **Integer** `run(String command,Array args,Object opts)`

运行指定的命令行，并返回进程的结束代码

#### Parameters
* `command` 指定运行的命令行 

* `args` 指定运行的参数列表 

* `opts` 指定运行的选项，支持的选项如下： 
```js
{
    "timeout": 100, // 单位为 ms
    "envs": [] // 进程环境变量
}
```

#### Returns
返回命令的运行结果
{{% /panel %}}
{{% panel theme="default" header="run" %}}
#### **Integer** `run(String command,Object opts)`

运行指定的命令行，并返回进程的结束代码

#### Parameters
* `command` 指定运行的命令行 

* `opts` 指定运行的选项，支持的选项如下： 
```js
{
    "timeout": 100, // 单位为 ms
    "envs": [] // 进程环境变量
}
```

#### Returns
返回命令的运行结果
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>