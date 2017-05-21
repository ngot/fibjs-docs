+++
draft = false
title = "os"
description = "Operating system and file system module."
[menu.main]
parent = "modules"
identifier = "os"
+++

Operating system and file system module.

To use it: 
```cpp
var os = require('os');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static Number `[`uptime`](#da/de1/namespaceos_1a7fa90fa210d31f489f824de639820d42)`()`            | Get operating system time in seconds.
`public static Array `[`loadavg`](#da/de1/namespaceos_1af568dca7b66ce796e676741b24a4303a)`()`            | Get system load average, 1, 5 and 15 minutes.
`public static Long `[`totalmem`](#da/de1/namespaceos_1a1542770b2fd24d002d726fbbff0c0a2e)`()`            | Get system total memory in bytes.
`public static Long `[`freemem`](#da/de1/namespaceos_1a571d36775ad176acbc76f7d12fb03bf1)`()`            | Get system free memory in bytes.
`public static Array `[`CPUInfo`](#da/de1/namespaceos_1a2fe28e658af2fa4ed18aff69a99fff0c)`()`            | Get system CPU number and information.
`public static Integer `[`CPUs`](#da/de1/namespaceos_1a693209d07a04870c1d24fb8bb17605ac)`()`            | Get system CPU number.
`public static Object `[`networkInfo`](#da/de1/namespaceos_1ade138388eb17cb0d8804d3a615402a0e)`()`            | Get system network information.
`public static Date `[`time`](#da/de1/namespaceos_1a38a7252c2af6bb54a57fb80d75ab6b6c)`(String tmString)`            | Parse or get system time.
`public static Date `[`dateAdd`](#da/de1/namespaceos_1acc7b083abafccb5d71e9b83c99683635)`(Date d,Integer num,String part)`            | Time calculation function, use part to indicate time.
`public static Object `[`memoryUsage`](#da/de1/namespaceos_1a655f15d1790c184db42267a0bdef22cd)`()`            | Get current memory usage.

## Members

#### `public static Number `[`uptime`](#da/de1/namespaceos_1a7fa90fa210d31f489f824de639820d42)`()` 

Get operating system time in seconds.

#### Returns
Return time in integer

#### `public static Array `[`loadavg`](#da/de1/namespaceos_1af568dca7b66ce796e676741b24a4303a)`()` 

Get system load average, 1, 5 and 15 minutes.

#### Returns
Return results array

#### `public static Long `[`totalmem`](#da/de1/namespaceos_1a1542770b2fd24d002d726fbbff0c0a2e)`()` 

Get system total memory in bytes.

#### Returns
Return total memory

#### `public static Long `[`freemem`](#da/de1/namespaceos_1a571d36775ad176acbc76f7d12fb03bf1)`()` 

Get system free memory in bytes.

#### Returns
Return free memory

#### `public static Array `[`CPUInfo`](#da/de1/namespaceos_1a2fe28e658af2fa4ed18aff69a99fff0c)`()` 

Get system CPU number and information.

#### Returns
Return CPU information array

#### `public static Integer `[`CPUs`](#da/de1/namespaceos_1a693209d07a04870c1d24fb8bb17605ac)`()` 

Get system CPU number.

#### Returns
Return CPU number

#### `public static Object `[`networkInfo`](#da/de1/namespaceos_1ade138388eb17cb0d8804d3a615402a0e)`()` 

Get system network information.

#### Returns
Return network information

#### `public static Date `[`time`](#da/de1/namespaceos_1a38a7252c2af6bb54a57fb80d75ab6b6c)`(String tmString)` 

Parse or get system time.

#### Parameters
* `tmString` Time format, default is query current time 

#### Returns
Return javascript Date object

#### `public static Date `[`dateAdd`](#da/de1/namespaceos_1acc7b083abafccb5d71e9b83c99683635)`(Date d,Integer num,String part)` 

Time calculation function, use part to indicate time.

#### Parameters
* `d` Date object to calculate on 

* `num` Number to calculate 

* `part` Type to calculate, can be "year", "month", "day", "hour", "minute", "second" 

#### Returns
Return javascript Date object

#### `public static Object `[`memoryUsage`](#da/de1/namespaceos_1a655f15d1790c184db42267a0bdef22cd)`()` 

Get current memory usage.

#### Returns
Return memory usage

Usage includes: 
```cpp
{
  "rss": 8622080,
  "heapTotal": 4083456,
  "heapUsed": 1621800,
  "nativeObjects": 122
}
```
 Notes:

* rss Physical memory being occupied by current process

* heapTotal Return v8 engine heap memory size

* heapUsed Return v8 engine heap memory size in use

* nativeObjects Return number of memory objects

