+++
draft = false
title = "hex"
description = "Module with encode and decode operations between hex and string."
[menu.main]
parent = "modules"
identifier = "hex"
+++

module with encode and decode operations between hex and string. to use:

```cpp
var encoding = require('encoding');
var hex = encoding.hex;
```
 or: 
```cpp
var hex = require('hex');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static String `[`encode`](#d3/da1/namespacehex_1a581b5701a55f8498bcc5d923490ea970)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Encode data whith hex format.
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`decode`](#d3/da1/namespacehex_1a011682402d37d61858e68f191d64ba16)`(String data)`            | Decode string to binary data with hex format.

## Members

#### `public static String `[`encode`](#d3/da1/namespacehex_1a581b5701a55f8498bcc5d923490ea970)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Encode data whith hex format.

#### Parameters
* `data` Data to be encoded. 

#### Returns
Encoded result string.

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`decode`](#d3/da1/namespacehex_1a011682402d37d61858e68f191d64ba16)`(String data)` 

Decode string to binary data with hex format.

#### Parameters
* `data` String to be decode. 

#### Returns
Decoded binary data result.

