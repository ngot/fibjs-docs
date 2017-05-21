+++
draft = false
title = "hash"
description = "digest calculation module, can be used to calculate the message digest and summary Signature."
[menu.main]
parent = "modules"
identifier = "hash"
+++

[Message](#d6/db7/interfaceMessage) digest calculation module, can be used to calculate the message digest and summary Signature.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`digest`](#de/de9/namespacehash_1a813b296a7ed5e852a7338087bdb95239)`(Integer algo,`[`Buffer`](#d0/d11/classBuffer)` data)`            | Create a message digest object with the specified algorithm.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`digest`](#de/de9/namespacehash_1a0198e943620fd6b63bd913d6a769bcae)`(Integer algo)`            | Create a message digest object with the specified algorithm.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`md2`](#de/de9/namespacehash_1a9910a7f0744d47299013d60592b53f22)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Create a MD2 message digest object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`md4`](#de/de9/namespacehash_1ad5d8f14c8b31ae52b504d0da1450e26b)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Create a MD4 message digest object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`md5`](#de/de9/namespacehash_1a2ce50ba7996a62ae9f19f77a156b78bc)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Create a MD5 message digest object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`sha1`](#de/de9/namespacehash_1aeebd38030db2c9e6f51674759c74d050)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Create a SHA1 message digest object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`sha224`](#de/de9/namespacehash_1aebaa45bb312a46a71194c9118dca1a08)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Create a SHA224 message digest object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`sha256`](#de/de9/namespacehash_1aea552567d5fea762e5d8eedda0b0067a)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Create a SHA256 message digest object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`sha384`](#de/de9/namespacehash_1a0e3112fca405da681a0d034e6dba4016)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Create a SHA384 message digest object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`sha512`](#de/de9/namespacehash_1a93e3215efb856aa97da67966530387f7)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Create a SHA512 message digest object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`ripemd160`](#de/de9/namespacehash_1a71a420a73d5a44d8d819bf3583cf58f2)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Create a RIPEMD160 message digest object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac`](#de/de9/namespacehash_1a330e7a9e3d593264815d68aa495e7a7d)`(Integer algo,`[`Buffer`](#d0/d11/classBuffer)` key)`            | Create a message signature digest object with the specified algorithm.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_md2`](#de/de9/namespacehash_1a47a5101b6771678d571e473b687626b0)`(`[`Buffer`](#d0/d11/classBuffer)` key)`            | Create a MD2 message digest signature object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_md4`](#de/de9/namespacehash_1a6155daca64fd722c38e7324586d0993d)`(`[`Buffer`](#d0/d11/classBuffer)` key)`            | Create a MD4 message digest signature object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_md5`](#de/de9/namespacehash_1a7e754ac11d237d72b1b935cd67f4cc9f)`(`[`Buffer`](#d0/d11/classBuffer)` key)`            | Create a MD5 message digest signature object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_sha1`](#de/de9/namespacehash_1aec4c9f56f93a0df54838af47b801f23e)`(`[`Buffer`](#d0/d11/classBuffer)` key)`            | Create a SHA1 message digest signature object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_sha224`](#de/de9/namespacehash_1a2d1483e5cd139848cab5063c0889d826)`(`[`Buffer`](#d0/d11/classBuffer)` key)`            | Create a SHA224 message digest signature object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_sha256`](#de/de9/namespacehash_1ac98cb2777ead9c4883e438d575bd625d)`(`[`Buffer`](#d0/d11/classBuffer)` key)`            | Create a SHA256 message digest signature object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_sha384`](#de/de9/namespacehash_1a3bf61d946548a6c637bd07f61e9ef2e0)`(`[`Buffer`](#d0/d11/classBuffer)` key)`            | Create a SHA384 message digest signature object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_sha512`](#de/de9/namespacehash_1a4de2d277d13b54cc16d433576a78abc7)`(`[`Buffer`](#d0/d11/classBuffer)` key)`            | Create a SHA512 message digest signature object.
`public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_ripemd160`](#de/de9/namespacehash_1a4fa072e27d94ad8a84152863596869eb)`(`[`Buffer`](#d0/d11/classBuffer)` key)`            | Create a RIPEMD160 message digest signature object.

## Members

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`digest`](#de/de9/namespacehash_1a813b296a7ed5e852a7338087bdb95239)`(Integer algo,`[`Buffer`](#d0/d11/classBuffer)` data)` 

Create a message digest object with the specified algorithm.

#### Parameters
* `algo` Specifies the digest algorithm. 

* `data` Binary data needs to be updated. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`digest`](#de/de9/namespacehash_1a0198e943620fd6b63bd913d6a769bcae)`(Integer algo)` 

Create a message digest object with the specified algorithm.

#### Parameters
* `algo` Specifies the digest algorithm. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`md2`](#de/de9/namespacehash_1a9910a7f0744d47299013d60592b53f22)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Create a MD2 message digest object.

#### Parameters
* `data` Binary data needs to be updated. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`md4`](#de/de9/namespacehash_1ad5d8f14c8b31ae52b504d0da1450e26b)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Create a MD4 message digest object.

#### Parameters
* `data` Binary data needs to be updated. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`md5`](#de/de9/namespacehash_1a2ce50ba7996a62ae9f19f77a156b78bc)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Create a MD5 message digest object.

#### Parameters
* `data` Binary data needs to be updated. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`sha1`](#de/de9/namespacehash_1aeebd38030db2c9e6f51674759c74d050)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Create a SHA1 message digest object.

#### Parameters
* `data` Binary data needs to be updated. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`sha224`](#de/de9/namespacehash_1aebaa45bb312a46a71194c9118dca1a08)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Create a SHA224 message digest object.

#### Parameters
* `data` Binary data needs to be updated. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`sha256`](#de/de9/namespacehash_1aea552567d5fea762e5d8eedda0b0067a)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Create a SHA256 message digest object.

#### Parameters
* `data` Binary data needs to be updated. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`sha384`](#de/de9/namespacehash_1a0e3112fca405da681a0d034e6dba4016)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Create a SHA384 message digest object.

#### Parameters
* `data` Binary data needs to be updated. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`sha512`](#de/de9/namespacehash_1a93e3215efb856aa97da67966530387f7)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Create a SHA512 message digest object.

#### Parameters
* `data` Binary data needs to be updated. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`ripemd160`](#de/de9/namespacehash_1a71a420a73d5a44d8d819bf3583cf58f2)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Create a RIPEMD160 message digest object.

#### Parameters
* `data` Binary data needs to be updated. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac`](#de/de9/namespacehash_1a330e7a9e3d593264815d68aa495e7a7d)`(Integer algo,`[`Buffer`](#d0/d11/classBuffer)` key)` 

Create a message signature digest object with the specified algorithm.

#### Parameters
* `algo` Specifies the digest algorithm. 

* `key` Binary signature key. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_md2`](#de/de9/namespacehash_1a47a5101b6771678d571e473b687626b0)`(`[`Buffer`](#d0/d11/classBuffer)` key)` 

Create a MD2 message digest signature object.

#### Parameters
* `key` Binary signature key. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_md4`](#de/de9/namespacehash_1a6155daca64fd722c38e7324586d0993d)`(`[`Buffer`](#d0/d11/classBuffer)` key)` 

Create a MD4 message digest signature object.

#### Parameters
* `key` Binary signature key. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_md5`](#de/de9/namespacehash_1a7e754ac11d237d72b1b935cd67f4cc9f)`(`[`Buffer`](#d0/d11/classBuffer)` key)` 

Create a MD5 message digest signature object.

#### Parameters
* `key` Binary signature key. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_sha1`](#de/de9/namespacehash_1aec4c9f56f93a0df54838af47b801f23e)`(`[`Buffer`](#d0/d11/classBuffer)` key)` 

Create a SHA1 message digest signature object.

#### Parameters
* `key` Binary signature key. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_sha224`](#de/de9/namespacehash_1a2d1483e5cd139848cab5063c0889d826)`(`[`Buffer`](#d0/d11/classBuffer)` key)` 

Create a SHA224 message digest signature object.

#### Parameters
* `key` Binary signature key. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_sha256`](#de/de9/namespacehash_1ac98cb2777ead9c4883e438d575bd625d)`(`[`Buffer`](#d0/d11/classBuffer)` key)` 

Create a SHA256 message digest signature object.

#### Parameters
* `key` Binary signature key. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_sha384`](#de/de9/namespacehash_1a3bf61d946548a6c637bd07f61e9ef2e0)`(`[`Buffer`](#d0/d11/classBuffer)` key)` 

Create a SHA384 message digest signature object.

#### Parameters
* `key` Binary signature key. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_sha512`](#de/de9/namespacehash_1a4de2d277d13b54cc16d433576a78abc7)`(`[`Buffer`](#d0/d11/classBuffer)` key)` 

Create a SHA512 message digest signature object.

#### Parameters
* `key` Binary signature key. 

#### Returns
Returns the message digest object.

#### `public static `[`Digest`](#d3/d41/interfaceDigest)` `[`hmac_ripemd160`](#de/de9/namespacehash_1a4fa072e27d94ad8a84152863596869eb)`(`[`Buffer`](#d0/d11/classBuffer)` key)` 

Create a RIPEMD160 message digest signature object.

#### Parameters
* `key` Binary signature key. 

#### Returns
Returns the message digest object.

