+++
draft = false
title = "console"
description = "控制台访问对象"
[menu.main]
parent = "modules"
identifier = "console"
+++

控制台访问对象

全局对象。可用于提示信息，警告和错误记录。通过启动配置文件，可将日志定位 到不同的设备，以便于跟踪。日志支持格式化输出，例如： 
```js
console.log("%d + %d = %d", 100, 200, 100 + 200);
```
 可以使用的格式化参数如下：

* s - 字符串

* d - 数字，包括整数和数字

* j - 以 JSON 格式输出对象

* %% - 输出字符 '' 本身

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const FATAL`[`FATAL`](#dc/daa/namespaceconsole_1a0e1ad08bac772819ed6f30bb040983a0)`FATAL`<p>loglevel 级别常量</p>
const            | `public const ALERT`[`ALERT`](#dc/daa/namespaceconsole_1a1c7fd7a7c7eec3fdabff3bc8dbf05fb2)`ALERT`<p>loglevel 级别常量</p>
const            | `public const CRIT`[`CRIT`](#dc/daa/namespaceconsole_1ad5c0ac01d68bf889d9facb1c4ec5be6c)`CRIT`<p>loglevel 级别常量</p>
const            | `public const ERROR`[`ERROR`](#dc/daa/namespaceconsole_1a6d0e3a1f6f76a58b7b7048281e366f48)`ERROR`<p>loglevel 级别常量</p>
const            | `public const WARN`[`WARN`](#dc/daa/namespaceconsole_1a0ef293e9f40df74a625c0e23284308b3)`WARN`<p>loglevel 级别常量</p>
const            | `public const NOTICE`[`NOTICE`](#dc/daa/namespaceconsole_1a1f7b3b17f2517d323521bfdf82461b80)`NOTICE`<p>loglevel 级别常量</p>
const            | `public const INFO`[`INFO`](#dc/daa/namespaceconsole_1a4dcaf74cea73612bfde5360b5df3951a)`INFO`<p>loglevel 级别常量</p>
const            | `public const DEBUG`[`DEBUG`](#dc/daa/namespaceconsole_1af9ec03444b210295ccc09883d42e515a)`DEBUG`<p>loglevel 级别常量</p>
const            | `public const PRINT`[`PRINT`](#dc/daa/namespaceconsole_1a1ac5b2039e5f4db797ca1f1845ad6ab3)`PRINT`<p>loglevel 仅用于输出，信息输出后不换行，file 和 syslog 不保存此级别信息</p>
const            | `public const NOTSET`[`NOTSET`](#dc/daa/namespaceconsole_1ad6c3eabb947de356a31132b50b634174)`NOTSET`<p>loglevel 级别常量</p>
Integer            | `public static Integer loglevel`[`loglevel`](#dc/daa/namespaceconsole_1a903b5848bef37d438c976f38338569db)`loglevel`<p>输出级别，用以过滤输出信息，缺省为 NOTSET，全部输出。信息过滤之后才会输出给 add 设定的各个设备。</p>
readonly TextColor            | `public static readonly TextColor colors`[`colors`](#dc/daa/namespaceconsole_1ac66c67c224cee71b91094d3d6d6da15d)`colors`<p>终端输出颜色配置对象，详见 TextColor</p>
readonly Integer            | `public static readonly Integer width`[`width`](#dc/daa/namespaceconsole_1a4d00b4e3b1b1b4cf9cf79515119286f4)`width`<p>查询终端每行字符数</p>
readonly Integer            | `public static readonly Integer height`[`height`](#dc/daa/namespaceconsole_1abc88f7bfa59e0f00c9016a2118f3c082)`height`<p>查询终端行数</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `add(Array cfg)`<p>批量添加 console 输出系统，支持的设备为 console, syslog 和 file，最多可以添加 10 个输出</p>
void            | `add(Value cfg)`<p>添加 console 输出系统，支持的设备为 console, syslog 和 file，最多可以添加 10 个输出</p>
void            | `reset()`<p>初始化到缺省设置，只在 console 输出信息</p>
void            | `log(String fmt,...)`<p>记录普通日志信息，与 info 等同</p>
void            | `log(...)`<p>记录普通日志信息，与 info 等同</p>
void            | `debug(String fmt,...)`<p>记录调试日志信息</p>
void            | `debug(...)`<p>记录调试日志信息</p>
void            | `info(String fmt,...)`<p>记录普通日志信息，与 log 等同</p>
void            | `info(...)`<p>记录普通日志信息，与 log 等同</p>
void            | `notice(String fmt,...)`<p>记录警告日志信息</p>
void            | `notice(...)`<p>记录警告日志信息</p>
void            | `warn(String fmt,...)`<p>记录警告日志信息</p>
void            | `warn(...)`<p>记录警告日志信息</p>
void            | `error(String fmt,...)`<p>记录错误日志信息</p>
void            | `error(...)`<p>记录错误日志信息</p>
void            | `crit(String fmt,...)`<p>记录关键错误日志信息</p>
void            | `crit(...)`<p>记录关键错误日志信息</p>
void            | `alert(String fmt,...)`<p>记录警报错误日志信息</p>
void            | `alert(...)`<p>记录警报错误日志信息</p>
void            | `dir(Value obj)`<p>用 JSON 格式输出对象</p>
void            | `time(String label)`<p>启动一个计时器</p>
void            | `timeEnd(String label)`<p>统计指定计时器的数值</p>
void            | `trace(String label)`<p>输出当前调用堆栈</p>
void            | `assert(Value value,String msg)`<p>断言测试，如果测试值为假，则报错</p>
void            | `print(String fmt,...)`<p>向控制台输出格式化文本，输出内容不会记入日志系统，输出文本后不会自动换行，可连续输出</p>
void            | `print(...)`<p>向控制台输出格式化文本，输出内容不会记入日志系统，输出文本后不会自动换行，可连续输出</p>
void            | `moveTo(Integer row,Integer column)`<p>移动控制台光标到指定位置</p>
void            | `hideCursor()`<p>隐藏控制台光标</p>
void            | `showCursor()`<p>显示控制台光标</p>
void            | `clear()`<p>清除控制台</p>
void            | `keyDown(String key,String modifier)`<p>按下一个按键</p>
void            | `keyDown(String key,Array modifier)`<p>按下一个按键</p>
void            | `keyUp(String key,String modifier)`<p>松开一个按键</p>
void            | `keyUp(String key,Array modifier)`<p>松开一个按键</p>
void            | `keyTap(String key,String modifier)`<p>点击并松开一个按键</p>
void            | `keyTap(String key,Array modifier)`<p>点击并松开一个按键</p>
void            | `typeString(String text)`<p>输入一个字符串</p>
void            | `moveMouse(Integer x,Integer y)`<p>移动鼠标到指定的位置</p>
void            | `mouseUp(String button)`<p>按下一个鼠标键</p>
void            | `mouseDown(String button)`<p>放开一个鼠标键</p>
void            | `clickMouse(String button,Boolean dbclick)`<p>点击一个鼠标键</p>
String            | `readLine(String msg)`<p>从控制台读取用户输入</p>

## Field Detail

{{% panel theme="default" header="FATAL" %}}
#### **const** `public const FATAL`[`FATAL`](#dc/daa/namespaceconsole_1a0e1ad08bac772819ed6f30bb040983a0)`FATAL`

loglevel 级别常量

{{% /panel %}}
{{% panel theme="default" header="ALERT" %}}
#### **const** `public const ALERT`[`ALERT`](#dc/daa/namespaceconsole_1a1c7fd7a7c7eec3fdabff3bc8dbf05fb2)`ALERT`

loglevel 级别常量

{{% /panel %}}
{{% panel theme="default" header="CRIT" %}}
#### **const** `public const CRIT`[`CRIT`](#dc/daa/namespaceconsole_1ad5c0ac01d68bf889d9facb1c4ec5be6c)`CRIT`

loglevel 级别常量

{{% /panel %}}
{{% panel theme="default" header="ERROR" %}}
#### **const** `public const ERROR`[`ERROR`](#dc/daa/namespaceconsole_1a6d0e3a1f6f76a58b7b7048281e366f48)`ERROR`

loglevel 级别常量

{{% /panel %}}
{{% panel theme="default" header="WARN" %}}
#### **const** `public const WARN`[`WARN`](#dc/daa/namespaceconsole_1a0ef293e9f40df74a625c0e23284308b3)`WARN`

loglevel 级别常量

{{% /panel %}}
{{% panel theme="default" header="NOTICE" %}}
#### **const** `public const NOTICE`[`NOTICE`](#dc/daa/namespaceconsole_1a1f7b3b17f2517d323521bfdf82461b80)`NOTICE`

loglevel 级别常量

{{% /panel %}}
{{% panel theme="default" header="INFO" %}}
#### **const** `public const INFO`[`INFO`](#dc/daa/namespaceconsole_1a4dcaf74cea73612bfde5360b5df3951a)`INFO`

loglevel 级别常量

{{% /panel %}}
{{% panel theme="default" header="DEBUG" %}}
#### **const** `public const DEBUG`[`DEBUG`](#dc/daa/namespaceconsole_1af9ec03444b210295ccc09883d42e515a)`DEBUG`

loglevel 级别常量

{{% /panel %}}
{{% panel theme="default" header="PRINT" %}}
#### **const** `public const PRINT`[`PRINT`](#dc/daa/namespaceconsole_1a1ac5b2039e5f4db797ca1f1845ad6ab3)`PRINT`

loglevel 仅用于输出，信息输出后不换行，file 和 syslog 不保存此级别信息

{{% /panel %}}
{{% panel theme="default" header="NOTSET" %}}
#### **const** `public const NOTSET`[`NOTSET`](#dc/daa/namespaceconsole_1ad6c3eabb947de356a31132b50b634174)`NOTSET`

loglevel 级别常量

{{% /panel %}}
{{% panel theme="default" header="loglevel" %}}
#### **Integer** `public static Integer loglevel`[`loglevel`](#dc/daa/namespaceconsole_1a903b5848bef37d438c976f38338569db)`loglevel`

输出级别，用以过滤输出信息，缺省为 NOTSET，全部输出。信息过滤之后才会输出给 add 设定的各个设备。

{{% /panel %}}
{{% panel theme="default" header="colors" %}}
#### **readonly TextColor** `public static readonly TextColor colors`[`colors`](#dc/daa/namespaceconsole_1ac66c67c224cee71b91094d3d6d6da15d)`colors`

终端输出颜色配置对象，详见 TextColor

{{% /panel %}}
{{% panel theme="default" header="width" %}}
#### **readonly Integer** `public static readonly Integer width`[`width`](#dc/daa/namespaceconsole_1a4d00b4e3b1b1b4cf9cf79515119286f4)`width`

查询终端每行字符数

{{% /panel %}}
{{% panel theme="default" header="height" %}}
#### **readonly Integer** `public static readonly Integer height`[`height`](#dc/daa/namespaceconsole_1abc88f7bfa59e0f00c9016a2118f3c082)`height`

查询终端行数

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="add" %}}
#### **void** `add(Array cfg)`

批量添加 console 输出系统，支持的设备为 console, syslog 和 file，最多可以添加 10 个输出

通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。

```js
console.add(["console", {
   type: "syslog",
   levels: [console.INFO, console.ERROR]
}]);
```

#### Parameters
* `cfg` 输出配置数组
{{% /panel %}}
{{% panel theme="default" header="add" %}}
#### **void** `add(Value cfg)`

添加 console 输出系统，支持的设备为 console, syslog 和 file，最多可以添加 10 个输出

通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。

cfg 为配置，可以为设备名称字符串：

```js
console.add("console");
```

也可以为一个设备配置对象： 
```js
console.add({
   type: "console",
   levels: [console.INFO, console.ERROR]  // 选项，省略则输出全部级别日志
});
```

syslog 仅在 posix 平台有效： 
```js
console.add({
   type: "syslog",
   levels: [console.INFO, console.ERROR]
});
```

file 日志不支持简单调用： 
```js
console.add({
   type: "file",
   levels: [console.INFO, console.ERROR],
   path: "path/to/file",  // 必选项
   split: "30m",  // 选项，可选值为 "day", "hour", "minute", "###k", "###m", "###g"
   count: 10 // 选项，可选范围为 2-128，指定此项时必须提供 split
});
```

#### Parameters
* `cfg` 输出配置
{{% /panel %}}
{{% panel theme="default" header="reset" %}}
#### **void** `reset()`

初始化到缺省设置，只在 console 输出信息

{{% /panel %}}
{{% panel theme="default" header="log" %}}
#### **void** `log(String fmt,...)`

记录普通日志信息，与 info 等同

记录一般等级的日志信息。通常用于输出非错误性提示信息。 
#### Parameters
* `fmt` 格式化字符串 

* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="log" %}}
#### **void** `log(...)`

记录普通日志信息，与 info 等同

记录一般等级的日志信息。通常用于输出非错误性提示信息。 
#### Parameters
* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="debug" %}}
#### **void** `debug(String fmt,...)`

记录调试日志信息

记录调试日志信息。通常用于输出调试信息。不重要。 
#### Parameters
* `fmt` 格式化字符串 

* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="debug" %}}
#### **void** `debug(...)`

记录调试日志信息

记录调试日志信息。通常用于输出调试信息。不重要。 
#### Parameters
* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="info" %}}
#### **void** `info(String fmt,...)`

记录普通日志信息，与 log 等同

记录一般等级的日志信息。通常用于输出非错误性提示信息。 
#### Parameters
* `fmt` 格式化字符串 

* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="info" %}}
#### **void** `info(...)`

记录普通日志信息，与 log 等同

记录一般等级的日志信息。通常用于输出非错误性提示信息。 
#### Parameters
* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="notice" %}}
#### **void** `notice(String fmt,...)`

记录警告日志信息

记录警告日志信息。通常用于输出提示性调试信息。一般重要。 
#### Parameters
* `fmt` 格式化字符串 

* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="notice" %}}
#### **void** `notice(...)`

记录警告日志信息

记录警告日志信息。通常用于输出提示性调试信息。一般重要。 
#### Parameters
* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="warn" %}}
#### **void** `warn(String fmt,...)`

记录警告日志信息

记录警告日志信息。通常用于输出警告性调试信息。重要。 
#### Parameters
* `fmt` 格式化字符串 

* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="warn" %}}
#### **void** `warn(...)`

记录警告日志信息

记录警告日志信息。通常用于输出警告性调试信息。重要。 
#### Parameters
* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="error" %}}
#### **void** `error(String fmt,...)`

记录错误日志信息

记录用于错误日志信息。通常用于输出错误信息。非常重要。系统的出错信息也会以此等级记录。 
#### Parameters
* `fmt` 格式化字符串 

* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="error" %}}
#### **void** `error(...)`

记录错误日志信息

记录用于错误日志信息。通常用于输出错误信息。非常重要。系统的出错信息也会以此等级记录。 
#### Parameters
* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="crit" %}}
#### **void** `crit(String fmt,...)`

记录关键错误日志信息

记录用于关键错误日志信息。通常用于输出关键错误信息。非常重要。 
#### Parameters
* `fmt` 格式化字符串 

* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="crit" %}}
#### **void** `crit(...)`

记录关键错误日志信息

记录用于关键错误日志信息。通常用于输出关键错误信息。非常重要。 
#### Parameters
* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="alert" %}}
#### **void** `alert(String fmt,...)`

记录警报错误日志信息

记录用于警报错误日志信息。通常用于输出警报错误信息。非常重要。为最高级别信息。 
#### Parameters
* `fmt` 格式化字符串 

* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="alert" %}}
#### **void** `alert(...)`

记录警报错误日志信息

记录用于警报错误日志信息。通常用于输出警报错误信息。非常重要。为最高级别信息。 
#### Parameters
* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="dir" %}}
#### **void** `dir(Value obj)`

用 JSON 格式输出对象

#### Parameters
* `obj` 给定要显示的对象
{{% /panel %}}
{{% panel theme="default" header="time" %}}
#### **void** `time(String label)`

启动一个计时器

#### Parameters
* `label` 标题，缺省为空字符串。
{{% /panel %}}
{{% panel theme="default" header="timeEnd" %}}
#### **void** `timeEnd(String label)`

统计指定计时器的数值

#### Parameters
* `label` 标题，缺省为空字符串。
{{% /panel %}}
{{% panel theme="default" header="trace" %}}
#### **void** `trace(String label)`

输出当前调用堆栈

通过日志输出当前调用堆栈。 
#### Parameters
* `label` 标题，缺省为空字符串。
{{% /panel %}}
{{% panel theme="default" header="assert" %}}
#### **void** `assert(Value value,String msg)`

断言测试，如果测试值为假，则报错

#### Parameters
* `value` 测试的数值 

* `msg` 报错信息
{{% /panel %}}
{{% panel theme="default" header="print" %}}
#### **void** `print(String fmt,...)`

向控制台输出格式化文本，输出内容不会记入日志系统，输出文本后不会自动换行，可连续输出

#### Parameters
* `fmt` 格式化字符串 

* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="print" %}}
#### **void** `print(...)`

向控制台输出格式化文本，输出内容不会记入日志系统，输出文本后不会自动换行，可连续输出

#### Parameters
* `...` 可选参数列表
{{% /panel %}}
{{% panel theme="default" header="moveTo" %}}
#### **void** `moveTo(Integer row,Integer column)`

移动控制台光标到指定位置

#### Parameters
* `row` 指定新光标的行坐标 

* `column` 指定新光标的列坐标
{{% /panel %}}
{{% panel theme="default" header="hideCursor" %}}
#### **void** `hideCursor()`

隐藏控制台光标

{{% /panel %}}
{{% panel theme="default" header="showCursor" %}}
#### **void** `showCursor()`

显示控制台光标

{{% /panel %}}
{{% panel theme="default" header="clear" %}}
#### **void** `clear()`

清除控制台

{{% /panel %}}
{{% panel theme="default" header="keyDown" %}}
#### **void** `keyDown(String key,String modifier)`

按下一个按键

#### Parameters
* `key` 指定按键，单字符直接传入，功能键传入名称：

* 功能键：f1 - f12

* 方向键：up, down,left, right, home, end, pageup, pagedown

* 编辑键：backspace, delete, insert, enter, tab, escape, space

* 控制键：control, alt, shift, command 

* `modifier` 指定控制键，可以为：control, alt, shift, command
{{% /panel %}}
{{% panel theme="default" header="keyDown" %}}
#### **void** `keyDown(String key,Array modifier)`

按下一个按键

#### Parameters
* `key` 指定按键，单字符直接传入，功能键传入名称：

* 功能键：f1 - f12

* 方向键：up, down,left, right, home, end, pageup, pagedown

* 编辑键：backspace, delete, insert, enter, tab, escape, space

* 控制键：control, alt, shift, command 

* `modifier` 指定控制键数组，可以为：control, alt, shift, command
{{% /panel %}}
{{% panel theme="default" header="keyUp" %}}
#### **void** `keyUp(String key,String modifier)`

松开一个按键

#### Parameters
* `key` 指定按键，单字符直接传入，功能键传入名称：

* 功能键：f1 - f12

* 方向键：up, down,left, right, home, end, pageup, pagedown

* 编辑键：backspace, delete, insert, enter, tab, escape, space

* 控制键：control, alt, shift, command 

* `modifier` 指定控制键，可以为：control, alt, shift, command
{{% /panel %}}
{{% panel theme="default" header="keyUp" %}}
#### **void** `keyUp(String key,Array modifier)`

松开一个按键

#### Parameters
* `key` 指定按键，单字符直接传入，功能键传入名称：

* 功能键：f1 - f12

* 方向键：up, down,left, right, home, end, pageup, pagedown

* 编辑键：backspace, delete, insert, enter, tab, escape, space

* 控制键：control, alt, shift, command 

* `modifier` 指定控制键数组，可以为：control, alt, shift, command
{{% /panel %}}
{{% panel theme="default" header="keyTap" %}}
#### **void** `keyTap(String key,String modifier)`

点击并松开一个按键

#### Parameters
* `key` 指定按键，单字符直接传入，功能键传入名称：

* 功能键：f1 - f12

* 方向键：up, down,left, right, home, end, pageup, pagedown

* 编辑键：backspace, delete, insert, enter, tab, escape, space

* 控制键：control, alt, shift, command 

* `modifier` 指定控制键，可以为：control, alt, shift, command
{{% /panel %}}
{{% panel theme="default" header="keyTap" %}}
#### **void** `keyTap(String key,Array modifier)`

点击并松开一个按键

#### Parameters
* `key` 指定按键，单字符直接传入，功能键传入名称：

* 功能键：f1 - f12

* 方向键：up, down,left, right, home, end, pageup, pagedown

* 编辑键：backspace, delete, insert, enter, tab, escape, space

* 控制键：control, alt, shift, command 

* `modifier` 指定控制键数组，可以为：control, alt, shift, command
{{% /panel %}}
{{% panel theme="default" header="typeString" %}}
#### **void** `typeString(String text)`

输入一个字符串

#### Parameters
* `text` 指定输入的字符串
{{% /panel %}}
{{% panel theme="default" header="moveMouse" %}}
#### **void** `moveMouse(Integer x,Integer y)`

移动鼠标到指定的位置

#### Parameters
* `x` 指定 x 坐标 

* `y` 指定 y 坐标
{{% /panel %}}
{{% panel theme="default" header="mouseUp" %}}
#### **void** `mouseUp(String button)`

按下一个鼠标键

#### Parameters
* `button` 指定鼠标键名称，允许值为: left, right, moddle
{{% /panel %}}
{{% panel theme="default" header="mouseDown" %}}
#### **void** `mouseDown(String button)`

放开一个鼠标键

#### Parameters
* `button` 指定鼠标键名称，允许值为: left, right, moddle
{{% /panel %}}
{{% panel theme="default" header="clickMouse" %}}
#### **void** `clickMouse(String button,Boolean dbclick)`

点击一个鼠标键

#### Parameters
* `button` 指定鼠标键名称，允许值为: left, right, moddle 

* `dbclick` 指定是否双击，缺省为 false
{{% /panel %}}
{{% panel theme="default" header="readLine" %}}
#### **String** `readLine(String msg)`

从控制台读取用户输入

#### Parameters
* `msg` 提示信息 

#### Returns
返回用户输入的信息
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>