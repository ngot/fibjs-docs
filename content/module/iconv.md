+++
draft = false
title = "iconv"
description = "iconv Module with encode and decode operations between text and binary."
[menu.main]
parent = "modules"
identifier = "iconv"
+++

iconv Module with encode and decode operations between text and binary. to use:

```cpp
var encoding = require('encoding');
var iconv = encoding.iconv;
```
 or: 
```cpp
var iconv = require('iconv');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`encode`](#df/d0d/namespaceiconv_1a2b847d0399bc812657931cefcc7fb0bd)`(String charset,String data)`            | Convert text to binary with iconv.
`public static String `[`decode`](#df/d0d/namespaceiconv_1acaccba51ff251325271bf58e4a90040b)`(String charset,`[`Buffer`](#d0/d11/classBuffer)` data)`            | Convert binary to text with iconv.

## Members

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`encode`](#df/d0d/namespaceiconv_1a2b847d0399bc812657931cefcc7fb0bd)`(String charset,String data)` 

Convert text to binary with iconv.

#### Parameters
* `charset` The charset to be use. 

* `data` The text to be converted. 

#### Returns
The binary encoded result.

#### `public static String `[`decode`](#df/d0d/namespaceiconv_1acaccba51ff251325271bf58e4a90040b)`(String charset,`[`Buffer`](#d0/d11/classBuffer)` data)` 

Convert binary to text with iconv.

#### Parameters
* `charset` The charset to be use. 

* `data` Binary to be converted. 

#### Returns
The text decoded result.

