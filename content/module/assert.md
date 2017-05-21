+++
draft = false
title = "assert"
description = "Assertion test module, if testing result is false, you will get an error. The way of handling error can be set as continue or throw exception."
[menu.main]
parent = "modules"
identifier = "assert"
+++

Assertion test module, if testing result is false, you will get an error. The way of handling error can be set as continue or throw exception.

how to use:

```cpp
var assert = require('assert');
```

or using testing unit:

```cpp
var test = require('test');
var assert = test.assert;
```

or you can use [test.setup](#df/d04/namespacetest_1a38550424e855b291100020778b09064a) to set up test:

```cpp
require("test").setup();
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static static `[`ok`](#d2/dab/namespaceassert_1a6bc7d80bbf7943df46c671087f7cfce2)`(Value actual,String msg)`            | Return true when the testing result is ture, assertion failed when return false.
`public static static `[`notOk`](#d2/dab/namespaceassert_1ac587cf8bf42a5f632c7c03e672040de8)`(Value actual,String msg)`            | Return true when the testing result is false, assertion failed when return true.
`public static static `[`equal`](#d2/dab/namespaceassert_1af37037ca6be593c635dc7a312e45f17e)`(Value actual,Value expected,String msg)`            | Test value should match the expected one, assertion failed when not match.
`public static static `[`notEqual`](#d2/dab/namespaceassert_1a2685f5cac15c1818fdd1be92cbf369c1)`(Value actual,Value expected,String msg)`            | Test value should not have to match the expected one, assertion failed when match.
`public static static `[`strictEqual`](#d2/dab/namespaceassert_1a2cb47b83fabc213b290b9b4ce7564f35)`(Value actual,Value expected,String msg)`            | Test value should strictly match the expected one, assertion failed when not match.
`public static static `[`notStrictEqual`](#d2/dab/namespaceassert_1a49a140f439d16080cdf86fbc02bf76cf)`(Value actual,Value expected,String msg)`            | Test value should not have to strictly match the expected one, assertion failed when match.
`public static static `[`deepEqual`](#d2/dab/namespaceassert_1aa4fc0c264fe253b71659fa15bd444d34)`(Value actual,Value expected,String msg)`            | Test value should deeply match the expected one, assertion failed when not match.
`public static static `[`notDeepEqual`](#d2/dab/namespaceassert_1af2e1f574fd2ccb3c2c36717d14e33f67)`(Value actual,Value expected,String msg)`            | Test value should not have to deeply match the expected one, assertion failed when match.
`public static static `[`closeTo`](#d2/dab/namespaceassert_1a57f9d7269de9767896481d6c6491b053)`(Value actual,Value expected,Value delta,String msg)`            | Test value should closely match the expected one, assertion failed when not match.
`public static static `[`notCloseTo`](#d2/dab/namespaceassert_1a785eff37919f22095e68cc20d85b0020)`(Value actual,Value expected,Value delta,String msg)`            | Test value should not have to closely match the expected one, assertion failed when match.
`public static static `[`lessThan`](#d2/dab/namespaceassert_1a4b1b450014e4539994cd105a8f9d0eb9)`(Value actual,Value expected,String msg)`            | Test value should less than the expected one, assertion failed when get a greater or equal one.
`public static static `[`notLessThan`](#d2/dab/namespaceassert_1a552b2247c9920297cad7068a1fb007f0)`(Value actual,Value expected,String msg)`            | Test value should not have to less than the expected one, assertion failed when get a less one.
`public static static `[`greaterThan`](#d2/dab/namespaceassert_1a402e1e36f03b891ad44a3281a64642a2)`(Value actual,Value expected,String msg)`            | Test value should greater than the expected one, assertion failed when get a less or equal one.
`public static static `[`notGreaterThan`](#d2/dab/namespaceassert_1ac0a045550d46df6659c6a97f2b1554b6)`(Value actual,Value expected,String msg)`            | Test value should not have to greater than the expected one, assertion failed when get a greater one.
`public static static `[`exist`](#d2/dab/namespaceassert_1ae5e2442dccceb697ae9f41bce599cc48)`(Value actual,String msg)`            | Test value should be an existed one, assertion failed when the value is not existed.
`public static static `[`notExist`](#d2/dab/namespaceassert_1a3d4e62849c9d75031ece79a91c96aa39)`(Value actual,String msg)`            | Test value should not be an existed one, assertion failed when the value is existed.
`public static static `[`isTrue`](#d2/dab/namespaceassert_1a20f89c88bfd5356e32731af24821968b)`(Value actual,String msg)`            | Test value should be the Boolean true, assertion failed when the value is false.
`public static static `[`isNotTrue`](#d2/dab/namespaceassert_1affe6ecae30a890a57dec8b1b5148831e)`(Value actual,String msg)`            | Test value should be the Boolean false, assertion failed when the value is true.
`public static static `[`isFalse`](#d2/dab/namespaceassert_1ad5c6df12d35b760fb09c4e34aa5fa2c0)`(Value actual,String msg)`            | Test value should be the Boolean false, assertion failed when the value is true.
`public static static `[`isNotFalse`](#d2/dab/namespaceassert_1a4e525c0ded5e3f6112a15ea878dbc4e2)`(Value actual,String msg)`            | Test value should be the Boolean true, assertion failed when the value is false.
`public static static `[`isNull`](#d2/dab/namespaceassert_1a86a30af0aa338b8db74bb1a805f497f7)`(Value actual,String msg)`            | Test value should be the null, assertion failed when the value is not null.
`public static static `[`isNotNull`](#d2/dab/namespaceassert_1a353d3f0a16ba816b10eca0f4f55ad3ed)`(Value actual,String msg)`            | Test value should not be the null, assertion failed when the value is null.
`public static static `[`isUndefined`](#d2/dab/namespaceassert_1ad7fedc8b1050fad9fc39df83da013809)`(Value actual,String msg)`            | Test value should be the undefined, assertion failed when the value is not undefined.
`public static static `[`isDefined`](#d2/dab/namespaceassert_1a558fc550572cebc80cf2ca4545db5ab3)`(Value actual,String msg)`            | Test value should not be the undefined, assertion failed when the value is undefined.
`public static static `[`isFunction`](#d2/dab/namespaceassert_1a71a0eef48d3394bbd2f5659990f363e9)`(Value actual,String msg)`            | The type of test value should be Function, assertion failed when the value is not a function.
`public static static `[`isNotFunction`](#d2/dab/namespaceassert_1a23848bb515a658f542169a3d4a19879b)`(Value actual,String msg)`            | The type of test value should not be Function, assertion failed when the value is a function.
`public static static `[`isObject`](#d2/dab/namespaceassert_1a817ff68d658d03fe86f8582be05dfe96)`(Value actual,String msg)`            | The type of test value should be Object, assertion failed when the value is not a object.
`public static static `[`isNotObject`](#d2/dab/namespaceassert_1a9f20f8dc42056ee6bfa98761a1b8dd1c)`(Value actual,String msg)`            | The type of test value should not be Object, assertion failed when the value is a object.
`public static static `[`isArray`](#d2/dab/namespaceassert_1a4942ac3b5ab6bc9c09d4cc807101fb13)`(Value actual,String msg)`            | The type of test value should be Array, assertion failed when the value is not an array.
`public static static `[`isNotArray`](#d2/dab/namespaceassert_1a019ae93c17fd2e99fd799028d6d3ee96)`(Value actual,String msg)`            | The type of test value should not be Array, assertion failed when the value is an array.
`public static static `[`isString`](#d2/dab/namespaceassert_1ad8d4452d1c18ac0762f27ad30d754d3e)`(Value actual,String msg)`            | The type of test value should be String, assertion failed when the value is not a string.
`public static static `[`isNotString`](#d2/dab/namespaceassert_1ae837cf0658bfa0eac5295ff9fcf0ce65)`(Value actual,String msg)`            | The type of test value should not be String, assertion failed when the value is a string.
`public static static `[`isNumber`](#d2/dab/namespaceassert_1a3185e0e120d14e566e94a451ace5d1af)`(Value actual,String msg)`            | The type of test value should be Number, assertion failed when the value is not a number.
`public static static `[`isNotNumber`](#d2/dab/namespaceassert_1af658587b29f21876f994e35ace690f1d)`(Value actual,String msg)`            | The type of test value should not be Number, assertion failed when the value is a number.
`public static static `[`isBoolean`](#d2/dab/namespaceassert_1a52d954e5c3dd124d0839f5a6e2b181fd)`(Value actual,String msg)`            | The type of test value should be Boolean, assertion failed when the value is not a boolean.
`public static static `[`isNotBoolean`](#d2/dab/namespaceassert_1a8d631ec59b0bb32668c8ac410d2a5f87)`(Value actual,String msg)`            | The type of test value should not be Boolean, assertion failed when the value is a boolean.
`public static static `[`typeOf`](#d2/dab/namespaceassert_1a6accf1f518a6bea5c608ea513742cad3)`(Value actual,String type,String msg)`            | The type of test value should be the specified one, assertion failed when the value type is not match.
`public static static `[`notTypeOf`](#d2/dab/namespaceassert_1a78f313247072ec02fc062842d25203f3)`(Value actual,String type,String msg)`            | The type of test value should not be the specified one, assertion failed when the value type is match.
`public static static `[`property`](#d2/dab/namespaceassert_1aad5f5c5d5948e086adbe453e7efa957f)`(Value object,Value prop,String msg)`            | The test value should contain the specified property, assertion failed when the property not be contained.
`public static static `[`notProperty`](#d2/dab/namespaceassert_1ae0e3e69d65ed263243ac2370a2d36c7e)`(Value object,Value prop,String msg)`            | The test value should not contain the specified property, assertion failed when the property contained.
`public static static `[`deepProperty`](#d2/dab/namespaceassert_1a5129660776f5965ef0fc8e045a9d51d4)`(Value object,Value prop,String msg)`            | The test value should deeply contain the specified property, assertion failed when the property not be contained.
`public static static `[`notDeepProperty`](#d2/dab/namespaceassert_1a202a5d1189e44f0cbab67cfcbdfb4fae)`(Value object,Value prop,String msg)`            | The test value should not deeply contain the specified property, assertion failed when the property contained.
`public static static `[`propertyVal`](#d2/dab/namespaceassert_1af1a7b26c9b66ed3ed7cd017316b56f7b)`(Value object,Value prop,Value value,String msg)`            | The specified property of test value should equal the given one, assertion failed when not match.
`public static static `[`propertyNotVal`](#d2/dab/namespaceassert_1a5c45a31ca66fedc3926f3d68544fa189)`(Value object,Value prop,Value value,String msg)`            | The specified property of test value should not equal the given one, assertion failed when match.
`public static static `[`deepPropertyVal`](#d2/dab/namespaceassert_1a3a807667d3596b22f245aec1837a1d3d)`(Value object,Value prop,Value value,String msg)`            | The specified property of test value should deeply equal the given one, assertion failed when not match.
`public static static `[`deepPropertyNotVal`](#d2/dab/namespaceassert_1a2fe6b107e4c006046154d31897370d69)`(Value object,Value prop,Value value,String msg)`            | The specified property of test value should not deeply equal the given one, assertion failed when match.
`public static static `[`throws`](#d2/dab/namespaceassert_1a8ef18037a8c8401353a6336a16373380)`(Function block,String msg)`            | The block code should throw an error, assertion failed when not throw one.
`public static static `[`doesNotThrow`](#d2/dab/namespaceassert_1aa41904a1025725f280feab1e7312fa5a)`(Function block,String msg)`            | The block code should not throw an error, assertion failed when throw one.

## Members

#### `public static static `[`ok`](#d2/dab/namespaceassert_1a6bc7d80bbf7943df46c671087f7cfce2)`(Value actual,String msg)` 

Return true when the testing result is ture, assertion failed when return false.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`notOk`](#d2/dab/namespaceassert_1ac587cf8bf42a5f632c7c03e672040de8)`(Value actual,String msg)` 

Return true when the testing result is false, assertion failed when return true.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`equal`](#d2/dab/namespaceassert_1af37037ca6be593c635dc7a312e45f17e)`(Value actual,Value expected,String msg)` 

Test value should match the expected one, assertion failed when not match.

#### Parameters
* `actual` The value need to be tested. 

* `expected` The expected value. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`notEqual`](#d2/dab/namespaceassert_1a2685f5cac15c1818fdd1be92cbf369c1)`(Value actual,Value expected,String msg)` 

Test value should not have to match the expected one, assertion failed when match.

#### Parameters
* `actual` The value need to be tested. 

* `expected` The expected value. 

* `expected` expected value from unittest 

* `msg` The message of assertion failed when return false.

#### `public static static `[`strictEqual`](#d2/dab/namespaceassert_1a2cb47b83fabc213b290b9b4ce7564f35)`(Value actual,Value expected,String msg)` 

Test value should strictly match the expected one, assertion failed when not match.

#### Parameters
* `actual` The value need to be tested. 

* `expected` The expected value. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`notStrictEqual`](#d2/dab/namespaceassert_1a49a140f439d16080cdf86fbc02bf76cf)`(Value actual,Value expected,String msg)` 

Test value should not have to strictly match the expected one, assertion failed when match.

#### Parameters
* `actual` The value need to be tested. 

* `expected` The expected value. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`deepEqual`](#d2/dab/namespaceassert_1aa4fc0c264fe253b71659fa15bd444d34)`(Value actual,Value expected,String msg)` 

Test value should deeply match the expected one, assertion failed when not match.

#### Parameters
* `actual` The value need to be tested. 

* `expected` The expected value. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`notDeepEqual`](#d2/dab/namespaceassert_1af2e1f574fd2ccb3c2c36717d14e33f67)`(Value actual,Value expected,String msg)` 

Test value should not have to deeply match the expected one, assertion failed when match.

#### Parameters
* `actual` The value need to be tested. 

* `expected` The expected value. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`closeTo`](#d2/dab/namespaceassert_1a57f9d7269de9767896481d6c6491b053)`(Value actual,Value expected,Value delta,String msg)` 

Test value should closely match the expected one, assertion failed when not match.

#### Parameters
* `actual` The value need to be tested. 

* `expected` The expected value. 

* `delta` Approximate decimal precision. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`notCloseTo`](#d2/dab/namespaceassert_1a785eff37919f22095e68cc20d85b0020)`(Value actual,Value expected,Value delta,String msg)` 

Test value should not have to closely match the expected one, assertion failed when match.

#### Parameters
* `actual` The value need to be tested. 

* `expected` The expected value. 

* `delta` Approximate decimal precision. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`lessThan`](#d2/dab/namespaceassert_1a4b1b450014e4539994cd105a8f9d0eb9)`(Value actual,Value expected,String msg)` 

Test value should less than the expected one, assertion failed when get a greater or equal one.

#### Parameters
* `actual` The value need to be tested. 

* `expected` The expected value. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`notLessThan`](#d2/dab/namespaceassert_1a552b2247c9920297cad7068a1fb007f0)`(Value actual,Value expected,String msg)` 

Test value should not have to less than the expected one, assertion failed when get a less one.

#### Parameters
* `actual` The value need to be tested. 

* `expected` The expected value. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`greaterThan`](#d2/dab/namespaceassert_1a402e1e36f03b891ad44a3281a64642a2)`(Value actual,Value expected,String msg)` 

Test value should greater than the expected one, assertion failed when get a less or equal one.

#### Parameters
* `actual` The value need to be tested. 

* `expected` The expected value. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`notGreaterThan`](#d2/dab/namespaceassert_1ac0a045550d46df6659c6a97f2b1554b6)`(Value actual,Value expected,String msg)` 

Test value should not have to greater than the expected one, assertion failed when get a greater one.

#### Parameters
* `actual` The value need to be tested. 

* `expected` The expected value. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`exist`](#d2/dab/namespaceassert_1ae5e2442dccceb697ae9f41bce599cc48)`(Value actual,String msg)` 

Test value should be an existed one, assertion failed when the value is not existed.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`notExist`](#d2/dab/namespaceassert_1a3d4e62849c9d75031ece79a91c96aa39)`(Value actual,String msg)` 

Test value should not be an existed one, assertion failed when the value is existed.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isTrue`](#d2/dab/namespaceassert_1a20f89c88bfd5356e32731af24821968b)`(Value actual,String msg)` 

Test value should be the Boolean true, assertion failed when the value is false.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isNotTrue`](#d2/dab/namespaceassert_1affe6ecae30a890a57dec8b1b5148831e)`(Value actual,String msg)` 

Test value should be the Boolean false, assertion failed when the value is true.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isFalse`](#d2/dab/namespaceassert_1ad5c6df12d35b760fb09c4e34aa5fa2c0)`(Value actual,String msg)` 

Test value should be the Boolean false, assertion failed when the value is true.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isNotFalse`](#d2/dab/namespaceassert_1a4e525c0ded5e3f6112a15ea878dbc4e2)`(Value actual,String msg)` 

Test value should be the Boolean true, assertion failed when the value is false.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isNull`](#d2/dab/namespaceassert_1a86a30af0aa338b8db74bb1a805f497f7)`(Value actual,String msg)` 

Test value should be the null, assertion failed when the value is not null.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isNotNull`](#d2/dab/namespaceassert_1a353d3f0a16ba816b10eca0f4f55ad3ed)`(Value actual,String msg)` 

Test value should not be the null, assertion failed when the value is null.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isUndefined`](#d2/dab/namespaceassert_1ad7fedc8b1050fad9fc39df83da013809)`(Value actual,String msg)` 

Test value should be the undefined, assertion failed when the value is not undefined.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isDefined`](#d2/dab/namespaceassert_1a558fc550572cebc80cf2ca4545db5ab3)`(Value actual,String msg)` 

Test value should not be the undefined, assertion failed when the value is undefined.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isFunction`](#d2/dab/namespaceassert_1a71a0eef48d3394bbd2f5659990f363e9)`(Value actual,String msg)` 

The type of test value should be Function, assertion failed when the value is not a function.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isNotFunction`](#d2/dab/namespaceassert_1a23848bb515a658f542169a3d4a19879b)`(Value actual,String msg)` 

The type of test value should not be Function, assertion failed when the value is a function.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isObject`](#d2/dab/namespaceassert_1a817ff68d658d03fe86f8582be05dfe96)`(Value actual,String msg)` 

The type of test value should be Object, assertion failed when the value is not a object.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isNotObject`](#d2/dab/namespaceassert_1a9f20f8dc42056ee6bfa98761a1b8dd1c)`(Value actual,String msg)` 

The type of test value should not be Object, assertion failed when the value is a object.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isArray`](#d2/dab/namespaceassert_1a4942ac3b5ab6bc9c09d4cc807101fb13)`(Value actual,String msg)` 

The type of test value should be Array, assertion failed when the value is not an array.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isNotArray`](#d2/dab/namespaceassert_1a019ae93c17fd2e99fd799028d6d3ee96)`(Value actual,String msg)` 

The type of test value should not be Array, assertion failed when the value is an array.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isString`](#d2/dab/namespaceassert_1ad8d4452d1c18ac0762f27ad30d754d3e)`(Value actual,String msg)` 

The type of test value should be String, assertion failed when the value is not a string.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isNotString`](#d2/dab/namespaceassert_1ae837cf0658bfa0eac5295ff9fcf0ce65)`(Value actual,String msg)` 

The type of test value should not be String, assertion failed when the value is a string.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isNumber`](#d2/dab/namespaceassert_1a3185e0e120d14e566e94a451ace5d1af)`(Value actual,String msg)` 

The type of test value should be Number, assertion failed when the value is not a number.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isNotNumber`](#d2/dab/namespaceassert_1af658587b29f21876f994e35ace690f1d)`(Value actual,String msg)` 

The type of test value should not be Number, assertion failed when the value is a number.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isBoolean`](#d2/dab/namespaceassert_1a52d954e5c3dd124d0839f5a6e2b181fd)`(Value actual,String msg)` 

The type of test value should be Boolean, assertion failed when the value is not a boolean.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`isNotBoolean`](#d2/dab/namespaceassert_1a8d631ec59b0bb32668c8ac410d2a5f87)`(Value actual,String msg)` 

The type of test value should not be Boolean, assertion failed when the value is a boolean.

#### Parameters
* `actual` The value need to be tested. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`typeOf`](#d2/dab/namespaceassert_1a6accf1f518a6bea5c608ea513742cad3)`(Value actual,String type,String msg)` 

The type of test value should be the specified one, assertion failed when the value type is not match.

#### Parameters
* `actual` The value need to be tested. 

* `type` Specified type. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`notTypeOf`](#d2/dab/namespaceassert_1a78f313247072ec02fc062842d25203f3)`(Value actual,String type,String msg)` 

The type of test value should not be the specified one, assertion failed when the value type is match.

#### Parameters
* `actual` The value need to be tested. 

* `type` Specified type. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`property`](#d2/dab/namespaceassert_1aad5f5c5d5948e086adbe453e7efa957f)`(Value object,Value prop,String msg)` 

The test value should contain the specified property, assertion failed when the property not be contained.

#### Parameters
* `object` The object to be tested. 

* `prop` Property to be tested, fields terminated by '.' 

* `msg` The message of assertion failed when return false.

#### `public static static `[`notProperty`](#d2/dab/namespaceassert_1ae0e3e69d65ed263243ac2370a2d36c7e)`(Value object,Value prop,String msg)` 

The test value should not contain the specified property, assertion failed when the property contained.

#### Parameters
* `object` The object to be tested. 

* `prop` Property to be tested, fields terminated by '.' 

* `msg` The message of assertion failed when return false.

#### `public static static `[`deepProperty`](#d2/dab/namespaceassert_1a5129660776f5965ef0fc8e045a9d51d4)`(Value object,Value prop,String msg)` 

The test value should deeply contain the specified property, assertion failed when the property not be contained.

#### Parameters
* `object` The object to be tested. 

* `prop` Property to be tested, fields terminated by '.' 

* `msg` The message of assertion failed when return false.

#### `public static static `[`notDeepProperty`](#d2/dab/namespaceassert_1a202a5d1189e44f0cbab67cfcbdfb4fae)`(Value object,Value prop,String msg)` 

The test value should not deeply contain the specified property, assertion failed when the property contained.

#### Parameters
* `object` The object to be tested. 

* `prop` Property to be tested, fields terminated by '.' 

* `msg` The message of assertion failed when return false.

#### `public static static `[`propertyVal`](#d2/dab/namespaceassert_1af1a7b26c9b66ed3ed7cd017316b56f7b)`(Value object,Value prop,Value value,String msg)` 

The specified property of test value should equal the given one, assertion failed when not match.

#### Parameters
* `object` The object to be tested. 

* `prop` Property to be tested, fields terminated by '.' 

* `value` Given value 

* `msg` The message of assertion failed when return false.

#### `public static static `[`propertyNotVal`](#d2/dab/namespaceassert_1a5c45a31ca66fedc3926f3d68544fa189)`(Value object,Value prop,Value value,String msg)` 

The specified property of test value should not equal the given one, assertion failed when match.

#### Parameters
* `object` The object to be tested. 

* `prop` Property to be tested, fields terminated by '.' 

* `value` Given value 

* `msg` The message of assertion failed when return false.

#### `public static static `[`deepPropertyVal`](#d2/dab/namespaceassert_1a3a807667d3596b22f245aec1837a1d3d)`(Value object,Value prop,Value value,String msg)` 

The specified property of test value should deeply equal the given one, assertion failed when not match.

#### Parameters
* `object` The object to be tested. 

* `prop` Property to be tested, fields terminated by '.' 

* `value` Given value 

* `msg` The message of assertion failed when return false.

#### `public static static `[`deepPropertyNotVal`](#d2/dab/namespaceassert_1a2fe6b107e4c006046154d31897370d69)`(Value object,Value prop,Value value,String msg)` 

The specified property of test value should not deeply equal the given one, assertion failed when match.

#### Parameters
* `object` The object to be tested. 

* `prop` Property to be tested, fields terminated by '.' 

* `value` Given value 

* `msg` The message of assertion failed when return false.

#### `public static static `[`throws`](#d2/dab/namespaceassert_1a8ef18037a8c8401353a6336a16373380)`(Function block,String msg)` 

The block code should throw an error, assertion failed when not throw one.

#### Parameters
* `block` The code need to be test that specified as function. 

* `msg` The message of assertion failed when return false.

#### `public static static `[`doesNotThrow`](#d2/dab/namespaceassert_1aa41904a1025725f280feab1e7312fa5a)`(Function block,String msg)` 

The block code should not throw an error, assertion failed when throw one.

#### Parameters
* `block` The code need to be test that specified as function. 

* `msg` The message of assertion failed when return false.

