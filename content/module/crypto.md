+++
draft = false
title = "crypto"
description = "Encryption algorithm module."
[menu.main]
parent = "modules"
identifier = "crypto"
+++

Encryption algorithm module.

The way to use: 
```cpp
var crypto = require('crypto');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`PKey`](#d5/dac/interfacePKey)` `[`loadPKey`](#de/d36/namespacecrypto_1ae51475ebaa758d98cb568f8e3812547c)`(String filename,String password)`            | Load a PEM/DER format key file.
`public static `[`X509Cert`](#dc/d22/interfaceX509Cert)` `[`loadCert`](#de/d36/namespacecrypto_1a1984e2aa88f3ee8ed421c04d05a09702)`(String filename)`            | Load a CRT/PEM/DER/TXT format certificate can be called multiple times.
`public static `[`X509Crl`](#d9/d86/interfaceX509Crl)` `[`loadCrl`](#de/d36/namespacecrypto_1a479e2df008e8f31dbfa50421d7ae2d24)`(String filename)`            | Load a PEM/DER format revoked certificate can be called multiple times.
`public static `[`X509Req`](#d7/d8b/interfaceX509Req)` `[`loadReq`](#de/d36/namespacecrypto_1a442a7d7681621420caa0482a197b8be1)`(String filename)`            | Load a PEM/DER format requested certificate can be called multiple times.
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`randomBytes`](#de/d36/namespacecrypto_1ac01afb4972228d94aa03d53f7cd85785)`(Integer size)`            | Generate the specified size of the random number, which use the havege generator.
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`pseudoRandomBytes`](#de/d36/namespacecrypto_1af3ccf0095d4f7beb02aaf14da40671ec)`(Integer size)`            | Generate the specified size of the pseudo-random number, which use the entropy generator.
`public static String `[`randomArt`](#de/d36/namespacecrypto_1a10da8095614d2a11fd35cd13f346f8c8)`(`[`Buffer`](#d0/d11/classBuffer)` data,String title,Integer size)`            | Generate a visual character image by use given data.

## Members

#### `public static `[`PKey`](#d5/dac/interfacePKey)` `[`loadPKey`](#de/d36/namespacecrypto_1ae51475ebaa758d98cb568f8e3812547c)`(String filename,String password)` 

Load a PEM/DER format key file.

#### Parameters
* `filename` Key file name. 

* `password` Decryption password.

#### `public static `[`X509Cert`](#dc/d22/interfaceX509Cert)` `[`loadCert`](#de/d36/namespacecrypto_1a1984e2aa88f3ee8ed421c04d05a09702)`(String filename)` 

Load a CRT/PEM/DER/TXT format certificate can be called multiple times.

LoadFile load mozilla certdata.txt, which can be download from [http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt](http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt)

#### Parameters
* `filename` Certificate file name.

#### `public static `[`X509Crl`](#d9/d86/interfaceX509Crl)` `[`loadCrl`](#de/d36/namespacecrypto_1a479e2df008e8f31dbfa50421d7ae2d24)`(String filename)` 

Load a PEM/DER format revoked certificate can be called multiple times.

#### Parameters
* `filename` The cancellation certificate file name.

#### `public static `[`X509Req`](#d7/d8b/interfaceX509Req)` `[`loadReq`](#de/d36/namespacecrypto_1a442a7d7681621420caa0482a197b8be1)`(String filename)` 

Load a PEM/DER format requested certificate can be called multiple times.

#### Parameters
* `filename` The requested certificate file name.

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`randomBytes`](#de/d36/namespacecrypto_1ac01afb4972228d94aa03d53f7cd85785)`(Integer size)` 

Generate the specified size of the random number, which use the havege generator.

#### Parameters
* `size` Specify the size of the generated random number. 

#### Returns
Return the generated random number.

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`pseudoRandomBytes`](#de/d36/namespacecrypto_1af3ccf0095d4f7beb02aaf14da40671ec)`(Integer size)` 

Generate the specified size of the pseudo-random number, which use the entropy generator.

#### Parameters
* `size` Specify the size of the generated random number. 

#### Returns
Return the generated random number.

#### `public static String `[`randomArt`](#de/d36/namespacecrypto_1a10da8095614d2a11fd35cd13f346f8c8)`(`[`Buffer`](#d0/d11/classBuffer)` data,String title,Integer size)` 

Generate a visual character image by use given data.

#### Parameters
* `data` Specifies the data to display. 

* `title` The title of the specified character image, multibyte characters can cause width error. 

* `size` The character image size. 

#### Returns
Return the generated visual string image.

