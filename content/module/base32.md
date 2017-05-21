+++
draft = false
title = "base32"
description = "module with encode and decode operations."
[menu.main]
parent = "modules"
identifier = "base32"
+++

[base32](#d4/dba/namespacebase32) module with encode and decode operations. to use:

```cpp
var encoding = require('encoding');
var base32 = encoding.base32;
```
 or: 
```cpp
var base32 = require('base32');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static String `[`encode`](#d4/dba/namespacebase32_1abcb8ee9ecac2cf5cc508cbe896cede6b)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Encode buffer data to string with [base32](#d4/dba/namespacebase32) format.
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`decode`](#d4/dba/namespacebase32_1afe529218e5132fc597aac4427ff969eb)`(String data)`            | Decode string to binary data with [base32](#d4/dba/namespacebase32) format.

## Members

#### `public static String `[`encode`](#d4/dba/namespacebase32_1abcb8ee9ecac2cf5cc508cbe896cede6b)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Encode buffer data to string with [base32](#d4/dba/namespacebase32) format.

#### Parameters
* `data` [Buffer](#d0/d11/classBuffer) data to be encoded. 

#### Returns
The encoded result string.

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`decode`](#d4/dba/namespacebase32_1afe529218e5132fc597aac4427ff969eb)`(String data)` 

Decode string to binary data with [base32](#d4/dba/namespacebase32) format.

#### Parameters
* `data` String to be decoded. 

#### Returns
The decoded result binary data.

