+++
draft = false
title = "base64"
description = "module with encode and decode operations."
[menu.main]
parent = "modules"
identifier = "base64"
+++

[base64](#d5/d37/namespacebase64) module with encode and decode operations. to use:

```cpp
var encoding = require('encoding');
var base64 = encoding.base64;
```
 or: 
```cpp
var base64 = require('base64');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static String `[`encode`](#d5/d37/namespacebase64_1a7d87dfe597e9e95be6e570ba4d4baf40)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Encode buffer data to string with [base64](#d5/d37/namespacebase64) format.
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`decode`](#d5/d37/namespacebase64_1a1b1708235f97fb7a2e36771b64abee44)`(String data)`            | Decode string to binary data with [base64](#d5/d37/namespacebase64) format.

## Members

#### `public static String `[`encode`](#d5/d37/namespacebase64_1a7d87dfe597e9e95be6e570ba4d4baf40)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Encode buffer data to string with [base64](#d5/d37/namespacebase64) format.

#### Parameters
* `data` [Buffer](#d0/d11/classBuffer) data to be encoded. 

#### Returns
The encoded result string.

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`decode`](#d5/d37/namespacebase64_1a1b1708235f97fb7a2e36771b64abee44)`(String data)` 

Decode string to binary data with [base64](#d5/d37/namespacebase64) format.

#### Parameters
* `data` String to be decoded. 

#### Returns
The decoded result binary data.

