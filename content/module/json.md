+++
draft = false
title = "json"
description = "Json module with encode and decode operations."
[menu.main]
parent = "modules"
identifier = "json"
+++

json module with encode and decode operations. to use:

```cpp
var encoding = require('encoding');
var json = encoding.json;
```
 or: 
```cpp
var json = require('json');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static String `[`encode`](#d1/db2/namespacejson_1a332abe5ce26d71b3d8d6c62fd7639181)`(Value data)`            | Encode a json variable to string with json format.
`public static Value `[`decode`](#d1/db2/namespacejson_1aeedd41dd1edaec86d654a1e1f7176952)`(String data)`            | Decode a string variable to json with json format.

## Members

#### `public static String `[`encode`](#d1/db2/namespacejson_1a332abe5ce26d71b3d8d6c62fd7639181)`(Value data)` 

Encode a json variable to string with json format.

#### Parameters
* `data` Value to be encoded. 

#### Returns
The encoded string result.

#### `public static Value `[`decode`](#d1/db2/namespacejson_1aeedd41dd1edaec86d654a1e1f7176952)`(String data)` 

Decode a string variable to json with json format.

#### Parameters
* `data` String to be decoded. 

#### Returns
Json value decoded result.

