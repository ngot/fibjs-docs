+++
draft = false
title = "encoding"
description = "module with encode and decode operations between hex and other format data."
[menu.main]
parent = "modules"
identifier = "encoding"
+++

module with encode and decode operations between hex and other format data. to use:

```cpp
var encoding = require('encoding');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static String `[`jsstr`](#db/da8/namespaceencoding_1a52dcd9025eabd9af6a9f5e318f7566fa)`(String str,Boolean json)`            | Encode the string to Javascript escaped string that can be contained in the javascript code.
`public static String `[`encodeURI`](#db/da8/namespaceencoding_1adb05f8f3455536f38d2ee61484f3f2b5)`(String url)`            | [Url](#dd/d23/interfaceUrl) encoding.
`public static String `[`encodeURIComponent`](#db/da8/namespaceencoding_1a80b109e00081be72ca81ac4f9f033fb6)`(String url)`            | [Url](#dd/d23/interfaceUrl) component encoding.
`public static String `[`decodeURI`](#db/da8/namespaceencoding_1aeb50ecb378e2b4da3d3a5b0ba24c6907)`(String url)`            | [Url](#dd/d23/interfaceUrl) decoding.

## Members

#### `public static String `[`jsstr`](#db/da8/namespaceencoding_1a52dcd9025eabd9af6a9f5e318f7566fa)`(String str,Boolean json)` 

Encode the string to Javascript escaped string that can be contained in the javascript code.

#### Parameters
* `str` The string to encode 

* `json` Specifies generate the string json compatible. 

#### Returns
Returns the encoded string.

#### `public static String `[`encodeURI`](#db/da8/namespaceencoding_1adb05f8f3455536f38d2ee61484f3f2b5)`(String url)` 

[Url](#dd/d23/interfaceUrl) encoding.

#### Parameters
* `url` [Url](#dd/d23/interfaceUrl) to be encoded. 

#### Returns
The encoded result string.

#### `public static String `[`encodeURIComponent`](#db/da8/namespaceencoding_1a80b109e00081be72ca81ac4f9f033fb6)`(String url)` 

[Url](#dd/d23/interfaceUrl) component encoding.

#### Parameters
* `url` [Url](#dd/d23/interfaceUrl) to be encoded. 

#### Returns
The encoded result string.

#### `public static String `[`decodeURI`](#db/da8/namespaceencoding_1aeb50ecb378e2b4da3d3a5b0ba24c6907)`(String url)` 

[Url](#dd/d23/interfaceUrl) decoding.

#### Parameters
* `url` [Url](#dd/d23/interfaceUrl) to be decoded. 

#### Returns
The decoded result string.

