+++
draft = false
title = "base64vlq"
description = "module with encode and decode operations."
[menu.main]
parent = "modules"
identifier = "base64vlq"
+++

[base64vlq](#de/d5c/namespacebase64vlq) module with encode and decode operations. to use:

```cpp
var encoding = require('encoding');
var base64vlq = encoding.base64vlq;
```
 or: 
```cpp
var base64vlq = require('base64vlq');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static String `[`encode`](#de/d5c/namespacebase64vlq_1a82d92173f328ec3c9dd3ad0ec6fbcce6)`(Integer data)`            | Encode int data to string with [base64vlq](#de/d5c/namespacebase64vlq) format.
`public static String `[`encode`](#de/d5c/namespacebase64vlq_1aa51fc819ce5fedc0775934c4cad7a46d)`(Array data)`            | Encode array data to string with [base64vlq](#de/d5c/namespacebase64vlq) format.
`public static Array `[`decode`](#de/d5c/namespacebase64vlq_1a7806e9baeb01ce2567581fe5f7062663)`(String data)`            | Decode string to binary data with [base64vlq](#de/d5c/namespacebase64vlq) format.

## Members

#### `public static String `[`encode`](#de/d5c/namespacebase64vlq_1a82d92173f328ec3c9dd3ad0ec6fbcce6)`(Integer data)` 

Encode int data to string with [base64vlq](#de/d5c/namespacebase64vlq) format.

#### Parameters
* `data` Int data to be encoded. 

#### Returns
The encoded result string.

#### `public static String `[`encode`](#de/d5c/namespacebase64vlq_1aa51fc819ce5fedc0775934c4cad7a46d)`(Array data)` 

Encode array data to string with [base64vlq](#de/d5c/namespacebase64vlq) format.

#### Parameters
* `data` Array data to be encoded. 

#### Returns
The encoded result string.

#### `public static Array `[`decode`](#de/d5c/namespacebase64vlq_1a7806e9baeb01ce2567581fe5f7062663)`(String data)` 

Decode string to binary data with [base64vlq](#de/d5c/namespacebase64vlq) format.

#### Parameters
* `data` String data to be decoded. 

#### Returns
The decoded result binary data.

