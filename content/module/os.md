+++
draft = false
title = "os"
description = "操作系统与文件系统处理模块"
[menu.main]
parent = "modules"
identifier = "os"
+++

操作系统与文件系统处理模块

使用方法： 
```js
var os = require('os');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `public static static Service`[`Service`](#da/de1/namespaceos_1aac1b1ba65f75d448fcdfbb065039451c)`Service`<p>Service 构造函数，参见 Service</p>
readonly String            | `public static readonly String hostname`[`hostname`](#da/de1/namespaceos_1a10d119aa110a46714071e81522b0645c)`hostname`<p>查询当前运行环境主机名</p>
readonly String            | `public static readonly String type`[`type`](#da/de1/namespaceos_1a14a15c5f48a949b3ed548d59ffcc05e2)`type`<p>查询当前运行环境操作系统名称</p>
readonly String            | `public static readonly String version`[`version`](#da/de1/namespaceos_1a2c3e53a918b2455b73d33dc896a0d831)`version`<p>查询当前运行环境操作系统版本</p>
readonly String            | `public static readonly String arch`[`arch`](#da/de1/namespaceos_1a694ff78df5a8febb2a7a69c7722f7c34)`arch`<p>查询当前 cpu 环境，可能的结果为 'amd64', 'arm', 'arm64', 'ia32'</p>
readonly Integer            | `public static readonly Integer timezone`[`timezone`](#da/de1/namespaceos_1a9628c5429b13f4979df6569d374b5815)`timezone`<p>查询运行环境当前时区</p>
readonly String            | `public static readonly String EOL`[`EOL`](#da/de1/namespaceos_1a76c7476a457aa1af25ca82a3fdb7e982)`EOL`<p>查询当前运行环境行结尾标识，posix:"\n"；windows:"\r\n"</p>
readonly String            | `public static readonly String execPath`[`execPath`](#da/de1/namespaceos_1ab093bc75a863a2f57ef93277e1b11a2a)`execPath`<p>查询当前运行执行文件完整路径</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Number            | `uptime()`<p>查询运行环境运行时间，以秒为单位</p>
Array            | `loadavg()`<p>查询运行环境 1分钟，5分钟，15分钟平均负载</p>
Long            | `totalmem()`<p>查询运行环境总内存，以字节为单位</p>
Long            | `freemem()`<p>查询运行环境可用内存，以字节为单位</p>
Array            | `CPUInfo()`<p>查询当前运行环境 cpu 个数和参数</p>
Integer            | `CPUs()`<p>查询当前运行环境 cpu 个数</p>
String            | `tmpdir()`<p>查询当前运行环境临时文件目录</p>
Object            | `networkInfo()`<p>查询当前运行环境网络信息</p>
Array            | `printerInfo()`<p>查询当前主机的打印机信息</p>
BufferedStream            | `openPrinter(String name)`<p>创建一个打印机输出对象</p>
String            | `platform()`<p>查询当前平台名称，可能的结果为 'darwin', 'freebsd', 'linux', 或 'win32'</p>
Date            | `time(String tmString)`<p>解析时间字符串或查询运行环境当前时间</p>
Date            | `dateAdd(Date d,Integer num,String part)`<p>时间计算函数，根据 part 指定计算时间</p>
Object            | `memoryUsage()`<p>查询当前进程内存使用报告</p>

## Field Detail

{{% panel theme="default" header="Service" %}}
#### **void** `public static static Service`[`Service`](#da/de1/namespaceos_1aac1b1ba65f75d448fcdfbb065039451c)`Service`

Service 构造函数，参见 Service

{{% /panel %}}
{{% panel theme="default" header="hostname" %}}
#### **readonly String** `public static readonly String hostname`[`hostname`](#da/de1/namespaceos_1a10d119aa110a46714071e81522b0645c)`hostname`

查询当前运行环境主机名

{{% /panel %}}
{{% panel theme="default" header="type" %}}
#### **readonly String** `public static readonly String type`[`type`](#da/de1/namespaceos_1a14a15c5f48a949b3ed548d59ffcc05e2)`type`

查询当前运行环境操作系统名称

{{% /panel %}}
{{% panel theme="default" header="version" %}}
#### **readonly String** `public static readonly String version`[`version`](#da/de1/namespaceos_1a2c3e53a918b2455b73d33dc896a0d831)`version`

查询当前运行环境操作系统版本

{{% /panel %}}
{{% panel theme="default" header="arch" %}}
#### **readonly String** `public static readonly String arch`[`arch`](#da/de1/namespaceos_1a694ff78df5a8febb2a7a69c7722f7c34)`arch`

查询当前 cpu 环境，可能的结果为 'amd64', 'arm', 'arm64', 'ia32'

{{% /panel %}}
{{% panel theme="default" header="timezone" %}}
#### **readonly Integer** `public static readonly Integer timezone`[`timezone`](#da/de1/namespaceos_1a9628c5429b13f4979df6569d374b5815)`timezone`

查询运行环境当前时区

{{% /panel %}}
{{% panel theme="default" header="EOL" %}}
#### **readonly String** `public static readonly String EOL`[`EOL`](#da/de1/namespaceos_1a76c7476a457aa1af25ca82a3fdb7e982)`EOL`

查询当前运行环境行结尾标识，posix:"\n"；windows:"\r\n"

{{% /panel %}}
{{% panel theme="default" header="execPath" %}}
#### **readonly String** `public static readonly String execPath`[`execPath`](#da/de1/namespaceos_1ab093bc75a863a2f57ef93277e1b11a2a)`execPath`

查询当前运行执行文件完整路径

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="uptime" %}}
#### **Number** `uptime()`

查询运行环境运行时间，以秒为单位

#### Returns
返回表示时间的数值
{{% /panel %}}
{{% panel theme="default" header="loadavg" %}}
#### **Array** `loadavg()`

查询运行环境 1分钟，5分钟，15分钟平均负载

#### Returns
返回包含三个负载数据的数组
{{% /panel %}}
{{% panel theme="default" header="totalmem" %}}
#### **Long** `totalmem()`

查询运行环境总内存，以字节为单位

#### Returns
返回内存数据
{{% /panel %}}
{{% panel theme="default" header="freemem" %}}
#### **Long** `freemem()`

查询运行环境可用内存，以字节为单位

#### Returns
返回内存数据
{{% /panel %}}
{{% panel theme="default" header="CPUInfo" %}}
#### **Array** `CPUInfo()`

查询当前运行环境 cpu 个数和参数

#### Returns
返回包含 cpu 参数的数组，每一项对应一个 cpu
{{% /panel %}}
{{% panel theme="default" header="CPUs" %}}
#### **Integer** `CPUs()`

查询当前运行环境 cpu 个数

#### Returns
返回 cpu 个数
{{% /panel %}}
{{% panel theme="default" header="tmpdir" %}}
#### **String** `tmpdir()`

查询当前运行环境临时文件目录

#### Returns
返回临时文件目录
{{% /panel %}}
{{% panel theme="default" header="networkInfo" %}}
#### **Object** `networkInfo()`

查询当前运行环境网络信息

#### Returns
返回网卡信息
{{% /panel %}}
{{% panel theme="default" header="printerInfo" %}}
#### **Array** `printerInfo()`

查询当前主机的打印机信息

#### Returns
返回打印机信息
{{% /panel %}}
{{% panel theme="default" header="openPrinter" %}}
#### **BufferedStream** `openPrinter(String name)`

创建一个打印机输出对象

#### Parameters
* `name` 打印机名称 

#### Returns
返回打印机输出对象
{{% /panel %}}
{{% panel theme="default" header="platform" %}}
#### **String** `platform()`

查询当前平台名称，可能的结果为 'darwin', 'freebsd', 'linux', 或 'win32'

{{% /panel %}}
{{% panel theme="default" header="time" %}}
#### **Date** `time(String tmString)`

解析时间字符串或查询运行环境当前时间

#### Parameters
* `tmString` 时间字符串，缺省则查询当前时间 

#### Returns
返回 javascript Date 对象
{{% /panel %}}
{{% panel theme="default" header="dateAdd" %}}
#### **Date** `dateAdd(Date d,Integer num,String part)`

时间计算函数，根据 part 指定计算时间

#### Parameters
* `d` 指定用于计算 Date 对象 

* `num` 指定运算的数值 

* `part` 指定运算的时间部位，接收值为："year", "month", "day", "hour", "minute", "second" 

#### Returns
返回 javascript Date 对象
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
  "heapUsed": 1621800,
  "nativeObjects": 122
}
```
 其中：

* rss 返回进程当前占用物理内存大小

* heapTotal 返回 v8 引擎堆内存大小

* heapUsed 返回 v8 引擎正在使用堆内存大小

* nativeObjects 返回当前有效内置对象数
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>