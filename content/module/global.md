+++
draft = false
title = "global"
description = "全局对象，所有脚本均可以访问的基础对象"
[menu.main]
parent = "modules"
identifier = "global"
+++

全局对象，所有脚本均可以访问的基础对象

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `public static static Buffer`[`Buffer`](#d4/dfd/namespaceglobal_1abe961e24f94e940799497f08f5704916)`Buffer`<p>二进制数据缓存对象，用于 io 读写的数据处理，参见 Buffer 对象。</p>
void            | `public static static Int64`[`Int64`](#d4/dfd/namespaceglobal_1a45adb6a5d19452e78ecd07f0036cfdf9)`Int64`<p>64位整数对象，参见 Int64 对象。</p>
void            | `public static static console`[`console`](#d4/dfd/namespaceglobal_1ac56f4cb08af5e4988ff5e4bdd8afb700)`console`<p>控制台访问对象</p>
void            | `public static static process`[`process`](#d4/dfd/namespaceglobal_1ad468089ebe56b9e9dfdba90e2eb596bb)`process`<p>控制台访问对象</p>
readonly Worker            | `public static readonly Worker Master`[`Master`](#d4/dfd/namespaceglobal_1a7cc1aadc227bcaf2498e158bfb4a0c49)`Master`<p>Worker 宿主对象，仅在 Worker 入口脚本有效</p>
readonly Object            | `public static readonly Object global`[`global`](#d4/dfd/namespaceglobal_1a5cd5ee85c6c24c7ac98735978622d50b)`global`<p>全局对象</p>
readonly Array            | `public static readonly Array argv`[`argv`](#d4/dfd/namespaceglobal_1aef70d33af0f202e79eeac3e23c02e718)`argv`<p>获取当前脚本的运行参数，启动 js 获取进程启动参数，run 执行的脚本获取传递的参数</p>
readonly String            | `public static readonly String __filename`[`__filename`](#d4/dfd/namespaceglobal_1a1049f353b94134e148620d95d135af4d)`__filename`<p>当前脚本文件名</p>
readonly String            | `public static readonly String __dirname`[`__dirname`](#d4/dfd/namespaceglobal_1aa641d007198e87ea4b18255edde8fbf1)`__dirname`<p>当前脚本所在目录</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `run(String fname,Array argv)`<p>运行一个脚本</p>
void            | `clearInterval(Timer t)`<p>清除指定的定时器</p>
void            | `clearTimeout(Timer t)`<p>清除指定的定时器</p>
void            | `clearImmediate(Timer t)`<p>清除指定的定时器</p>
Timer            | `setInterval(Function callback,Integer timeout)`<p>每间隔指定的时间后调用函数</p>
Timer            | `setTimeout(Function callback,Integer timeout)`<p>在指定的时间后调用函数</p>
Timer            | `setImmediate(Function callback)`<p>下一个空闲时间立即执行回调函数</p>
Value            | `require(String id)`<p>加载一个模块并返回模块对象，更多信息参阅 模块管理</p>
void            | `GC()`<p>强制要求进行垃圾回收</p>
Function            | `sync(Function func)`<p>包裹 callback 方法为同步调用</p>
void            | `repl(Array cmds)`<p>进入交互模式，可以交互执行内部命令和代码，仅在启动 js 可以引用</p>
void            | `repl(Stream out,Array cmds)`<p>进入交互模式，可以交互执行内部命令和代码，仅在启动 js 可以引用</p>

## Field Detail

{{% panel theme="default" header="Buffer" %}}
#### **void** `public static static Buffer`[`Buffer`](#d4/dfd/namespaceglobal_1abe961e24f94e940799497f08f5704916)`Buffer`

二进制数据缓存对象，用于 io 读写的数据处理，参见 Buffer 对象。

{{% /panel %}}
{{% panel theme="default" header="Int64" %}}
#### **void** `public static static Int64`[`Int64`](#d4/dfd/namespaceglobal_1a45adb6a5d19452e78ecd07f0036cfdf9)`Int64`

64位整数对象，参见 Int64 对象。

{{% /panel %}}
{{% panel theme="default" header="console" %}}
#### **void** `public static static console`[`console`](#d4/dfd/namespaceglobal_1ac56f4cb08af5e4988ff5e4bdd8afb700)`console`

控制台访问对象

{{% /panel %}}
{{% panel theme="default" header="process" %}}
#### **void** `public static static process`[`process`](#d4/dfd/namespaceglobal_1ad468089ebe56b9e9dfdba90e2eb596bb)`process`

控制台访问对象

{{% /panel %}}
{{% panel theme="default" header="Master" %}}
#### **readonly Worker** `public static readonly Worker Master`[`Master`](#d4/dfd/namespaceglobal_1a7cc1aadc227bcaf2498e158bfb4a0c49)`Master`

Worker 宿主对象，仅在 Worker 入口脚本有效

{{% /panel %}}
{{% panel theme="default" header="global" %}}
#### **readonly Object** `public static readonly Object global`[`global`](#d4/dfd/namespaceglobal_1a5cd5ee85c6c24c7ac98735978622d50b)`global`

全局对象

{{% /panel %}}
{{% panel theme="default" header="argv" %}}
#### **readonly Array** `public static readonly Array argv`[`argv`](#d4/dfd/namespaceglobal_1aef70d33af0f202e79eeac3e23c02e718)`argv`

获取当前脚本的运行参数，启动 js 获取进程启动参数，run 执行的脚本获取传递的参数

{{% /panel %}}
{{% panel theme="default" header="__filename" %}}
#### **readonly String** `public static readonly String __filename`[`__filename`](#d4/dfd/namespaceglobal_1a1049f353b94134e148620d95d135af4d)`__filename`

当前脚本文件名

{{% /panel %}}
{{% panel theme="default" header="__dirname" %}}
#### **readonly String** `public static readonly String __dirname`[`__dirname`](#d4/dfd/namespaceglobal_1aa641d007198e87ea4b18255edde8fbf1)`__dirname`

当前脚本所在目录

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="run" %}}
#### **void** `run(String fname,Array argv)`

运行一个脚本

#### Parameters
* `fname` 指定要运行的脚本路径 

* `argv` 指定要运行的参数，此参数可在脚本内使用 argv 获取
{{% /panel %}}
{{% panel theme="default" header="clearInterval" %}}
#### **void** `clearInterval(Timer t)`

清除指定的定时器

#### Parameters
* `t` 指定要清除的定时器
{{% /panel %}}
{{% panel theme="default" header="clearTimeout" %}}
#### **void** `clearTimeout(Timer t)`

清除指定的定时器

#### Parameters
* `t` 指定要清除的定时器
{{% /panel %}}
{{% panel theme="default" header="clearImmediate" %}}
#### **void** `clearImmediate(Timer t)`

清除指定的定时器

#### Parameters
* `t` 指定要清除的定时器
{{% /panel %}}
{{% panel theme="default" header="setInterval" %}}
#### **Timer** `setInterval(Function callback,Integer timeout)`

每间隔指定的时间后调用函数

#### Parameters
* `callback` 指定回调函数 

* `timeout` 指定间隔的时间，以毫秒为单位 

#### Returns
返回定时器对象
{{% /panel %}}
{{% panel theme="default" header="setTimeout" %}}
#### **Timer** `setTimeout(Function callback,Integer timeout)`

在指定的时间后调用函数

#### Parameters
* `callback` 指定回调函数 

* `timeout` 指定延时的时间，以毫秒为单位 

#### Returns
返回定时器对象
{{% /panel %}}
{{% panel theme="default" header="setImmediate" %}}
#### **Timer** `setImmediate(Function callback)`

下一个空闲时间立即执行回调函数

#### Parameters
* `callback` 指定回调函数 

#### Returns
返回定时器对象
{{% /panel %}}
{{% panel theme="default" header="require" %}}
#### **Value** `require(String id)`

加载一个模块并返回模块对象，更多信息参阅 模块管理

require 可用于加载基础模块，文件模块。

基础模块是沙箱创建时初始化的模块，引用时只需传递相应的 id，比如 require("net")。

文件模块是用户自定义模块，引用时需传递以 ./ 或 ../ 开头的相对路径。文件模块支持 .js 和 .json 文件。

文件模块也支持 package.json 格式，当模块为目录结构时，require 会先查询 package.json 中的 main，未发现则尝试加载路径下的 index.js 或 index.json。

若引用路径不是 ./ 或 ../ 开头，并且非基础模块，require 则先在启动路径查找，然后从当前模块所在路径下的 .modules 查找，并上级目录递归。

#### Parameters
* `id` 指定要加载的模块名称 

#### Returns
返回加载模块的引出对象
{{% /panel %}}
{{% panel theme="default" header="GC" %}}
#### **void** `GC()`

强制要求进行垃圾回收

{{% /panel %}}
{{% panel theme="default" header="sync" %}}
#### **Function** `sync(Function func)`

包裹 callback 方法为同步调用

#### Parameters
* `func` 给定需要包裹的方法 

#### Returns
返回同步运行的方法
{{% /panel %}}
{{% panel theme="default" header="repl" %}}
#### **void** `repl(Array cmds)`

进入交互模式，可以交互执行内部命令和代码，仅在启动 js 可以引用

#### Parameters
* `cmds` 补充命令，格式如下： 
```js
[
    {
        cmd: ".test",
        help: "this is a test",
        exec: function(argv) {
            console.log(argv);
        }
    },
    {
        cmd: ".test1",
        help: "this is an other test",
        exec: function(argv) {
            console.log(argv);
        }
    }
]
```
{{% /panel %}}
{{% panel theme="default" header="repl" %}}
#### **void** `repl(Stream out,Array cmds)`

进入交互模式，可以交互执行内部命令和代码，仅在启动 js 可以引用

同一时刻只允许一个 Stream repl，新建一个 Stream repl 时，前一个 repl 将被关闭。 
#### Parameters
* `out` 输入输出流对象，通常为网络连接 

* `cmds` 补充命令，格式如下： 
```js
[
    {
        cmd: ".test",
        help: "this is a test",
        exec: function(argv) {
            console.log(argv);
        }
    },
    {
        cmd: ".test1",
        help: "this is an other test",
        exec: function(argv) {
            console.log(argv);
        }
    }
]
```
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>