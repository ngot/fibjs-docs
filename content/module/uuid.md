+++
draft = false
title = "uuid"
description = "uuid unique id module."
[menu.main]
parent = "modules"
identifier = "uuid"
+++

uuid unique id module

Fundamental module, used for create uuid 
```cpp
var uuid = require('uuid');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`uuidValue`](#d6/de7/interfaceuuidValue)` `[`uuid`](#d1/dd6/namespaceuuid_1a5fdc6d7f478a448083de3d30305d9d79)`(String s)`            | Generate uuid by given string.
`public static `[`uuidValue`](#d6/de7/interfaceuuidValue)` `[`uuid`](#d1/dd6/namespaceuuid_1a61e618bfdc2d1146b05c0a73b7dbfe25)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Generate uuid by given binary data.
`public static `[`uuidValue`](#d6/de7/interfaceuuidValue)` `[`node`](#d1/dd6/namespaceuuid_1a3be72ef23f930db13335c4ea41b4a8b1)`()`            | Generate uuid by time and host name.
`public static `[`uuidValue`](#d6/de7/interfaceuuidValue)` `[`md5`](#d1/dd6/namespaceuuid_1a9e4a2d86e856c10c436302a7a3983a83)`(Integer ns,String name)`            | Generate uuid by given md5.
`public static `[`uuidValue`](#d6/de7/interfaceuuidValue)` `[`random`](#d1/dd6/namespaceuuid_1a98decc8402d7cdb847a5b8905826b4de)`()`            | Generate uuid randomly.
`public static `[`uuidValue`](#d6/de7/interfaceuuidValue)` `[`sha1`](#d1/dd6/namespaceuuid_1ac63af48b29552ad4d0b1ad5d59a21a52)`(Integer ns,String name)`            | Generate uuid by given sha1.

## Members

#### `public static `[`uuidValue`](#d6/de7/interfaceuuidValue)` `[`uuid`](#d1/dd6/namespaceuuid_1a5fdc6d7f478a448083de3d30305d9d79)`(String s)` 

Generate uuid by given string.

#### Parameters
* `s` String to describe uuid 

#### Returns
Return [uuidValue](#d6/de7/interfaceuuidValue) object

#### `public static `[`uuidValue`](#d6/de7/interfaceuuidValue)` `[`uuid`](#d1/dd6/namespaceuuid_1a61e618bfdc2d1146b05c0a73b7dbfe25)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Generate uuid by given binary data.

#### Parameters
* `data` Data to describe uuid 

#### Returns
Return [uuidValue](#d6/de7/interfaceuuidValue) object

#### `public static `[`uuidValue`](#d6/de7/interfaceuuidValue)` `[`node`](#d1/dd6/namespaceuuid_1a3be72ef23f930db13335c4ea41b4a8b1)`()` 

Generate uuid by time and host name.

#### Returns
Return [uuidValue](#d6/de7/interfaceuuidValue) object

#### `public static `[`uuidValue`](#d6/de7/interfaceuuidValue)` `[`md5`](#d1/dd6/namespaceuuid_1a9e4a2d86e856c10c436302a7a3983a83)`(Integer ns,String name)` 

Generate uuid by given md5.

#### Parameters
* `ns` Namespace, can be [uuid.DNS](#d1/dd6/namespaceuuid_1a8a295ea729b6143bc51745b719c43599), [uuid.URL](#d1/dd6/namespaceuuid_1a83e49a96e6da072f08266ca23df3c62e), [uuid.OID](#d1/dd6/namespaceuuid_1acfba0d7f48a40567b37d923ac1ef6322), and [uuid.X509](#d1/dd6/namespaceuuid_1ab46bea7da7ac94230845ac6ab3909cd0)

* `name` Name of uuid 

#### Returns
Return [uuidValue](#d6/de7/interfaceuuidValue) object

#### `public static `[`uuidValue`](#d6/de7/interfaceuuidValue)` `[`random`](#d1/dd6/namespaceuuid_1a98decc8402d7cdb847a5b8905826b4de)`()` 

Generate uuid randomly.

#### Returns
Return [uuidValue](#d6/de7/interfaceuuidValue) object

#### `public static `[`uuidValue`](#d6/de7/interfaceuuidValue)` `[`sha1`](#d1/dd6/namespaceuuid_1ac63af48b29552ad4d0b1ad5d59a21a52)`(Integer ns,String name)` 

Generate uuid by given sha1.

#### Parameters
* `ns` Namespace, can be [uuid.DNS](#d1/dd6/namespaceuuid_1a8a295ea729b6143bc51745b719c43599), [uuid.URL](#d1/dd6/namespaceuuid_1a83e49a96e6da072f08266ca23df3c62e), [uuid.OID](#d1/dd6/namespaceuuid_1acfba0d7f48a40567b37d923ac1ef6322), and [uuid.X509](#d1/dd6/namespaceuuid_1ab46bea7da7ac94230845ac6ab3909cd0)

* `name` Name of uuid 

#### Returns
Return [uuidValue](#d6/de7/interfaceuuidValue) object

