+++
draft = false
title = "bson"
description = "bson module with encode and decode operations."
[menu.main]
parent = "modules"
identifier = "bson"
+++

bson module with encode and decode operations. to use:

```cpp
var encoding = require('encoding');
var bson = encoding.bson;
```
 or: 
```cpp
var bson = require('bson');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`encode`](#d7/d28/namespacebson_1a595936db3cfd3c57b2711f8eb1812672)`(Object data)`            | Encode object to binary data with bson format.
`public static Object `[`decode`](#d7/d28/namespacebson_1ab8c2313bc8936afd251368a04029b2a6)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Decode binary data to object with bson format.

## Members

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`encode`](#d7/d28/namespacebson_1a595936db3cfd3c57b2711f8eb1812672)`(Object data)` 

Encode object to binary data with bson format.

#### Parameters
* `data` Object to be encoded. 

#### Returns
The encoded result binary data.

#### `public static Object `[`decode`](#d7/d28/namespacebson_1ab8c2313bc8936afd251368a04029b2a6)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Decode binary data to object with bson format.

#### Parameters
* `data` Binary data to be decoded. 

#### Returns
The decoded result object.

