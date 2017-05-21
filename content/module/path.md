+++
draft = false
title = "path"
description = "File path module."
[menu.main]
parent = "modules"
identifier = "path"
+++

[File](#d3/d3a/interfaceFile) path module.

To use it: 
```cpp
var path = require('path');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static String `[`normalize`](#d0/d43/namespacepath_1ab5940f0638ae1ecf73788c7c6e5da56c)`(String path)`            | Normalize path.
`public static String `[`basename`](#d0/d43/namespacepath_1a82751cb3c3cda3cbd756667343737f4d)`(String path,String ext)`            | Get file name in path, ignore extension with file has it.
`public static String `[`extname`](#d0/d43/namespacepath_1aea5f6966a2f57a23cb34dd2700f8ffe5)`(String path)`            | Get file extension.
`public static String `[`dirname`](#d0/d43/namespacepath_1aeb69e3ac13503ae13ec20bd954f8d5e7)`(String path)`            | Get directory in path.
`public static String `[`fullpath`](#d0/d43/namespacepath_1a39317bd9f009a2295d12865393d2d8d8)`(String path)`            | Get full path.
`public static String `[`join`](#d0/d43/namespacepath_1ac551d9bf9f00720470cac3fdc098a8b3)`(...)`            | Merge multiple paths to a single relative path.
`public static String `[`resolve`](#d0/d43/namespacepath_1ad7a5c3dcc290cdf508621d865e52d1d8)`(...)`            | Merge multiple paths to a single absolute path.

## Members

#### `public static String `[`normalize`](#d0/d43/namespacepath_1ab5940f0638ae1ecf73788c7c6e5da56c)`(String path)` 

Normalize path.

#### Parameters
* `path` Original path 

#### Returns
Return normalized path

#### `public static String `[`basename`](#d0/d43/namespacepath_1a82751cb3c3cda3cbd756667343737f4d)`(String path,String ext)` 

Get file name in path, ignore extension with file has it.

#### Parameters
* `path` Original path 

* `ext` Given extension 

#### Returns
Return file name

#### `public static String `[`extname`](#d0/d43/namespacepath_1aea5f6966a2f57a23cb34dd2700f8ffe5)`(String path)` 

Get file extension.

#### Parameters
* `path` Original path 

#### Returns
Return file extension

#### `public static String `[`dirname`](#d0/d43/namespacepath_1aeb69e3ac13503ae13ec20bd954f8d5e7)`(String path)` 

Get directory in path.

#### Parameters
* `path` Original path 

#### Returns
Return directory

#### `public static String `[`fullpath`](#d0/d43/namespacepath_1a39317bd9f009a2295d12865393d2d8d8)`(String path)` 

Get full path.

#### Parameters
* `path` Original path 

#### Returns
Return full path

#### `public static String `[`join`](#d0/d43/namespacepath_1ac551d9bf9f00720470cac3fdc098a8b3)`(...)` 

Merge multiple paths to a single relative path.

#### Parameters
* `...` One or more relative paths 

#### Returns
Return new relative path

#### `public static String `[`resolve`](#d0/d43/namespacepath_1ad7a5c3dcc290cdf508621d865e52d1d8)`(...)` 

Merge multiple paths to a single absolute path.

#### Parameters
* `...` One or more relative paths 

#### Returns
Return new absolute path

