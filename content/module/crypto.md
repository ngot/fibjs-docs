+++
draft = false
title = "crypto"
description = "加密算法模块"
[menu.main]
parent = "modules"
identifier = "crypto"
+++

加密算法模块

使用方法： 
```js
var crypto = require('crypto');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const AES`[`AES`](#de/d36/namespacecrypto_1a535db2727af8d5cd58f5c7d0b57d74e4)`AES`<p>指定对称加密算法 AES，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM</p>
const            | `public const CAMELLIA`[`CAMELLIA`](#de/d36/namespacecrypto_1abd992269b51b18f79c711a228c3b9f5c)`CAMELLIA`<p>指定对称加密算法 CAMELLIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM</p>
const            | `public const DES`[`DES`](#de/d36/namespacecrypto_1a0cc0be8082427d471081ae54b823ff7d)`DES`<p>指定对称加密算法 DES，支持 64 位 key，分组密码工作模式支持 ECB, CBC</p>
const            | `public const DES_EDE`[`DES_EDE`](#de/d36/namespacecrypto_1a62053cf7100373b6e1dbe51391310f2e)`DES_EDE`<p>指定对称加密算法 DES-EDE，支持 128 位 key，分组密码工作模式支持 ECB, CBC</p>
const            | `public const DES_EDE3`[`DES_EDE3`](#de/d36/namespacecrypto_1abadbd02a77c60fda59a06c8542f363eb)`DES_EDE3`<p>指定对称加密算法 DES-EDE3，支持 192 位 key，分组密码工作模式支持 ECB, CBC</p>
const            | `public const BLOWFISH`[`BLOWFISH`](#de/d36/namespacecrypto_1aa70ce841ea022557c5a0728d3dd76a17)`BLOWFISH`<p>指定对称加密算法 BLOWFISH，支持 192 位 key，分组密码工作模式支持 ECB, CBC, CFB64, CTR</p>
const            | `public const ARC4`[`ARC4`](#de/d36/namespacecrypto_1af2c1a9331798f1d90a596329e520a996)`ARC4`<p>指定对称加密算法 ARC4，支持 40, 56, 64, 128 位 key</p>
const            | `public const ECB`[`ECB`](#de/d36/namespacecrypto_1af0ec60de4a8a5a92c6ab948bc7e0b0f8)`ECB`<p>指定分组密码工作模式支持 ECB</p>
const            | `public const CBC`[`CBC`](#de/d36/namespacecrypto_1a1b32a2e5e4329f154f421a6f4a95eb29)`CBC`<p>指定分组密码工作模式支持 CBC</p>
const            | `public const CFB64`[`CFB64`](#de/d36/namespacecrypto_1a514eb7f5c25b02b2f27f58f924aa4c75)`CFB64`<p>指定分组密码工作模式支持 CFB64</p>
const            | `public const CFB128`[`CFB128`](#de/d36/namespacecrypto_1ad6bd1d4a8aba2cd992023b5b5eded4d1)`CFB128`<p>指定分组密码工作模式支持 CFB128</p>
const            | `public const OFB`[`OFB`](#de/d36/namespacecrypto_1af520c6913193f30ad5ba6b484e97715a)`OFB`<p>指定分组密码工作模式支持 OFB</p>
const            | `public const CTR`[`CTR`](#de/d36/namespacecrypto_1af175807246df0acb157b9e272dd19c5b)`CTR`<p>指定分组密码工作模式支持 CTR</p>
const            | `public const GCM`[`GCM`](#de/d36/namespacecrypto_1ad964f73be81276aa66b06b50896a2578)`GCM`<p>指定分组密码工作模式支持 GCM</p>
const            | `public const STREAM`[`STREAM`](#de/d36/namespacecrypto_1ac35a8e1830f19f2f10d6837b800f2bb3)`STREAM`<p>指定流密码模式</p>
const            | `public const CCM`[`CCM`](#de/d36/namespacecrypto_1ad42f3576c2b1b2a2e9f68715acef05fb)`CCM`<p>指定分组密码工作模式支持 CCM</p>
const            | `public const PKCS7`[`PKCS7`](#de/d36/namespacecrypto_1a21d16d5ae914e84268b2bf96d81f6d9e)`PKCS7`<p>指定填充模式为 PKCS7</p>
const            | `public const ONE_AND_ZEROS`[`ONE_AND_ZEROS`](#de/d36/namespacecrypto_1af0c5fbfa4b88b8d395e7aad8eb6da8d6)`ONE_AND_ZEROS`<p>指定填充模式为 ONE_AND_ZEROS</p>
const            | `public const ZEROS_AND_LEN`[`ZEROS_AND_LEN`](#de/d36/namespacecrypto_1a12f114a7458e3cdb77db4f73c2b87469)`ZEROS_AND_LEN`<p>指定填充模式为 ZEROS_AND_LEN</p>
const            | `public const ZEROS`[`ZEROS`](#de/d36/namespacecrypto_1ae85f84d148044b237d35b4f6bb52e55c)`ZEROS`<p>指定填充模式为 ZEROS</p>
const            | `public const NOPADDING`[`NOPADDING`](#de/d36/namespacecrypto_1a459643ec0d0b7d7a2caca65341d6361f)`NOPADDING`<p>指定填充模式为 NOPADDING</p>
void            | `public static static Cipher`[`Cipher`](#de/d36/namespacecrypto_1a508b284453644f6759548048402fda04)`Cipher`<p>Cipher 构造函数，参见 Cipher</p>
void            | `public static static PKey`[`PKey`](#de/d36/namespacecrypto_1a9f9d7a590b15bcbf3142b4577735017d)`PKey`<p>PKey 构造函数，参见 PKey</p>
void            | `public static static X509Cert`[`X509Cert`](#de/d36/namespacecrypto_1a0d8672494a9a9f2145bd75c75e319c64)`X509Cert`<p>X509Cert 构造函数，参见 X509Cert</p>
void            | `public static static X509Crl`[`X509Crl`](#de/d36/namespacecrypto_1a167c41c43c76de9d8ab718e76555c066)`X509Crl`<p>X509Crl 构造函数，参见 X509Crl</p>
void            | `public static static X509Req`[`X509Req`](#de/d36/namespacecrypto_1a29ddc96e1cf5d43f7e41505692be7a65)`X509Req`<p>X509Req 构造函数，参见 X509Req</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
PKey            | `loadPKey(String filename,String password)`<p>加载一个 PEM/DER 格式的密钥文件</p>
X509Cert            | `loadCert(String filename)`<p>加载一个 CRT/PEM/DER/TXT 格式的证书，可多次调用</p>
X509Crl            | `loadCrl(String filename)`<p>加载一个 PEM/DER 格式的撤销证书，可多次调用</p>
X509Req            | `loadReq(String filename)`<p>加载一个 PEM/DER 格式的证书请求，可多次调用</p>
Buffer            | `randomBytes(Integer size)`<p>生成指定尺寸的随机数，使用 havege 生成器</p>
Buffer            | `simpleRandomBytes(Integer size)`<p>生成指定尺寸的低强度随机数，使用快速的算法</p>
Buffer            | `pseudoRandomBytes(Integer size)`<p>生成指定尺寸的伪随机数，使用 entropy 生成器</p>
String            | `randomArt(Buffer data,String title,Integer size)`<p>生成给定数据的可视化字符图像</p>
Buffer            | `pbkdf1(Buffer password,Buffer salt,Integer iterations,Integer size,Integer algo)`<p>依据 pbkdf1 根据明文 password 生成要求的二进制钥匙</p>
Buffer            | `pbkdf1(Buffer password,Buffer salt,Integer iterations,Integer size,String algoName)`<p>依据 pbkdf1 根据明文 password 生成要求的二进制钥匙</p>
Buffer            | `pbkdf2(Buffer password,Buffer salt,Integer iterations,Integer size,Integer algo)`<p>依据 rfc2898 根据明文 password 生成要求的二进制钥匙</p>
Buffer            | `pbkdf2(Buffer password,Buffer salt,Integer iterations,Integer size,String algoName)`<p>依据 rfc2898 根据明文 password 生成要求的二进制钥匙</p>
Buffer            | `pbkdf2Sync(Buffer password,Buffer salt,Integer iterations,Integer size,String algoName)`<p>依据 rfc2898 根据明文 password 生成要求的二进制钥匙，是 pbkdf2 的同步版兼容接口</p>

## Field Detail

{{% panel theme="default" header="AES" %}}
#### **const** `public const AES`[`AES`](#de/d36/namespacecrypto_1a535db2727af8d5cd58f5c7d0b57d74e4)`AES`

指定对称加密算法 AES，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM

{{% /panel %}}
{{% panel theme="default" header="CAMELLIA" %}}
#### **const** `public const CAMELLIA`[`CAMELLIA`](#de/d36/namespacecrypto_1abd992269b51b18f79c711a228c3b9f5c)`CAMELLIA`

指定对称加密算法 CAMELLIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM

{{% /panel %}}
{{% panel theme="default" header="DES" %}}
#### **const** `public const DES`[`DES`](#de/d36/namespacecrypto_1a0cc0be8082427d471081ae54b823ff7d)`DES`

指定对称加密算法 DES，支持 64 位 key，分组密码工作模式支持 ECB, CBC

{{% /panel %}}
{{% panel theme="default" header="DES_EDE" %}}
#### **const** `public const DES_EDE`[`DES_EDE`](#de/d36/namespacecrypto_1a62053cf7100373b6e1dbe51391310f2e)`DES_EDE`

指定对称加密算法 DES-EDE，支持 128 位 key，分组密码工作模式支持 ECB, CBC

{{% /panel %}}
{{% panel theme="default" header="DES_EDE3" %}}
#### **const** `public const DES_EDE3`[`DES_EDE3`](#de/d36/namespacecrypto_1abadbd02a77c60fda59a06c8542f363eb)`DES_EDE3`

指定对称加密算法 DES-EDE3，支持 192 位 key，分组密码工作模式支持 ECB, CBC

{{% /panel %}}
{{% panel theme="default" header="BLOWFISH" %}}
#### **const** `public const BLOWFISH`[`BLOWFISH`](#de/d36/namespacecrypto_1aa70ce841ea022557c5a0728d3dd76a17)`BLOWFISH`

指定对称加密算法 BLOWFISH，支持 192 位 key，分组密码工作模式支持 ECB, CBC, CFB64, CTR

{{% /panel %}}
{{% panel theme="default" header="ARC4" %}}
#### **const** `public const ARC4`[`ARC4`](#de/d36/namespacecrypto_1af2c1a9331798f1d90a596329e520a996)`ARC4`

指定对称加密算法 ARC4，支持 40, 56, 64, 128 位 key

{{% /panel %}}
{{% panel theme="default" header="ECB" %}}
#### **const** `public const ECB`[`ECB`](#de/d36/namespacecrypto_1af0ec60de4a8a5a92c6ab948bc7e0b0f8)`ECB`

指定分组密码工作模式支持 ECB

{{% /panel %}}
{{% panel theme="default" header="CBC" %}}
#### **const** `public const CBC`[`CBC`](#de/d36/namespacecrypto_1a1b32a2e5e4329f154f421a6f4a95eb29)`CBC`

指定分组密码工作模式支持 CBC

{{% /panel %}}
{{% panel theme="default" header="CFB64" %}}
#### **const** `public const CFB64`[`CFB64`](#de/d36/namespacecrypto_1a514eb7f5c25b02b2f27f58f924aa4c75)`CFB64`

指定分组密码工作模式支持 CFB64

{{% /panel %}}
{{% panel theme="default" header="CFB128" %}}
#### **const** `public const CFB128`[`CFB128`](#de/d36/namespacecrypto_1ad6bd1d4a8aba2cd992023b5b5eded4d1)`CFB128`

指定分组密码工作模式支持 CFB128

{{% /panel %}}
{{% panel theme="default" header="OFB" %}}
#### **const** `public const OFB`[`OFB`](#de/d36/namespacecrypto_1af520c6913193f30ad5ba6b484e97715a)`OFB`

指定分组密码工作模式支持 OFB

{{% /panel %}}
{{% panel theme="default" header="CTR" %}}
#### **const** `public const CTR`[`CTR`](#de/d36/namespacecrypto_1af175807246df0acb157b9e272dd19c5b)`CTR`

指定分组密码工作模式支持 CTR

{{% /panel %}}
{{% panel theme="default" header="GCM" %}}
#### **const** `public const GCM`[`GCM`](#de/d36/namespacecrypto_1ad964f73be81276aa66b06b50896a2578)`GCM`

指定分组密码工作模式支持 GCM

{{% /panel %}}
{{% panel theme="default" header="STREAM" %}}
#### **const** `public const STREAM`[`STREAM`](#de/d36/namespacecrypto_1ac35a8e1830f19f2f10d6837b800f2bb3)`STREAM`

指定流密码模式

{{% /panel %}}
{{% panel theme="default" header="CCM" %}}
#### **const** `public const CCM`[`CCM`](#de/d36/namespacecrypto_1ad42f3576c2b1b2a2e9f68715acef05fb)`CCM`

指定分组密码工作模式支持 CCM

{{% /panel %}}
{{% panel theme="default" header="PKCS7" %}}
#### **const** `public const PKCS7`[`PKCS7`](#de/d36/namespacecrypto_1a21d16d5ae914e84268b2bf96d81f6d9e)`PKCS7`

指定填充模式为 PKCS7

{{% /panel %}}
{{% panel theme="default" header="ONE_AND_ZEROS" %}}
#### **const** `public const ONE_AND_ZEROS`[`ONE_AND_ZEROS`](#de/d36/namespacecrypto_1af0c5fbfa4b88b8d395e7aad8eb6da8d6)`ONE_AND_ZEROS`

指定填充模式为 ONE_AND_ZEROS

{{% /panel %}}
{{% panel theme="default" header="ZEROS_AND_LEN" %}}
#### **const** `public const ZEROS_AND_LEN`[`ZEROS_AND_LEN`](#de/d36/namespacecrypto_1a12f114a7458e3cdb77db4f73c2b87469)`ZEROS_AND_LEN`

指定填充模式为 ZEROS_AND_LEN

{{% /panel %}}
{{% panel theme="default" header="ZEROS" %}}
#### **const** `public const ZEROS`[`ZEROS`](#de/d36/namespacecrypto_1ae85f84d148044b237d35b4f6bb52e55c)`ZEROS`

指定填充模式为 ZEROS

{{% /panel %}}
{{% panel theme="default" header="NOPADDING" %}}
#### **const** `public const NOPADDING`[`NOPADDING`](#de/d36/namespacecrypto_1a459643ec0d0b7d7a2caca65341d6361f)`NOPADDING`

指定填充模式为 NOPADDING

{{% /panel %}}
{{% panel theme="default" header="Cipher" %}}
#### **void** `public static static Cipher`[`Cipher`](#de/d36/namespacecrypto_1a508b284453644f6759548048402fda04)`Cipher`

Cipher 构造函数，参见 Cipher

{{% /panel %}}
{{% panel theme="default" header="PKey" %}}
#### **void** `public static static PKey`[`PKey`](#de/d36/namespacecrypto_1a9f9d7a590b15bcbf3142b4577735017d)`PKey`

PKey 构造函数，参见 PKey

{{% /panel %}}
{{% panel theme="default" header="X509Cert" %}}
#### **void** `public static static X509Cert`[`X509Cert`](#de/d36/namespacecrypto_1a0d8672494a9a9f2145bd75c75e319c64)`X509Cert`

X509Cert 构造函数，参见 X509Cert

{{% /panel %}}
{{% panel theme="default" header="X509Crl" %}}
#### **void** `public static static X509Crl`[`X509Crl`](#de/d36/namespacecrypto_1a167c41c43c76de9d8ab718e76555c066)`X509Crl`

X509Crl 构造函数，参见 X509Crl

{{% /panel %}}
{{% panel theme="default" header="X509Req" %}}
#### **void** `public static static X509Req`[`X509Req`](#de/d36/namespacecrypto_1a29ddc96e1cf5d43f7e41505692be7a65)`X509Req`

X509Req 构造函数，参见 X509Req

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="loadPKey" %}}
#### **PKey** `loadPKey(String filename,String password)`

加载一个 PEM/DER 格式的密钥文件

#### Parameters
* `filename` 密钥文件名 

* `password` 解密密码
{{% /panel %}}
{{% panel theme="default" header="loadCert" %}}
#### **X509Cert** `loadCert(String filename)`

加载一个 CRT/PEM/DER/TXT 格式的证书，可多次调用

loadFile 加载 mozilla 的 certdata,txt， 可于 [http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt](http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt) 下载使用 
#### Parameters
* `filename` 证书文件名
{{% /panel %}}
{{% panel theme="default" header="loadCrl" %}}
#### **X509Crl** `loadCrl(String filename)`

加载一个 PEM/DER 格式的撤销证书，可多次调用

#### Parameters
* `filename` 撤销证书文件名
{{% /panel %}}
{{% panel theme="default" header="loadReq" %}}
#### **X509Req** `loadReq(String filename)`

加载一个 PEM/DER 格式的证书请求，可多次调用

#### Parameters
* `filename` 证书请求文件名
{{% /panel %}}
{{% panel theme="default" header="randomBytes" %}}
#### **Buffer** `randomBytes(Integer size)`

生成指定尺寸的随机数，使用 havege 生成器

#### Parameters
* `size` 指定生成的随机数尺寸 

#### Returns
返回生成的随机数
{{% /panel %}}
{{% panel theme="default" header="simpleRandomBytes" %}}
#### **Buffer** `simpleRandomBytes(Integer size)`

生成指定尺寸的低强度随机数，使用快速的算法

#### Parameters
* `size` 指定生成的随机数尺寸 

#### Returns
返回生成的随机数
{{% /panel %}}
{{% panel theme="default" header="pseudoRandomBytes" %}}
#### **Buffer** `pseudoRandomBytes(Integer size)`

生成指定尺寸的伪随机数，使用 entropy 生成器

#### Parameters
* `size` 指定生成的随机数尺寸 

#### Returns
返回生成的随机数
{{% /panel %}}
{{% panel theme="default" header="randomArt" %}}
#### **String** `randomArt(Buffer data,String title,Integer size)`

生成给定数据的可视化字符图像

#### Parameters
* `data` 指定要展示的数据 

* `title` 指定字符图像的标题，多字节字符会导致宽度错误 

* `size` 字符图像尺寸 

#### Returns
返回生成的可视化字符串图像
{{% /panel %}}
{{% panel theme="default" header="pbkdf1" %}}
#### **Buffer** `pbkdf1(Buffer password,Buffer salt,Integer iterations,Integer size,Integer algo)`

依据 pbkdf1 根据明文 password 生成要求的二进制钥匙

#### Parameters
* `password` 指定使用的密码 

* `salt` 指定 hmac 使用的 salt 

* `iterations` 指定迭代次数 

* `size` 指定钥匙尺寸 

* `algo` 指定要使用的 hash 算法，详见 hash 模块 

#### Returns
返回生成的二进制钥匙
{{% /panel %}}
{{% panel theme="default" header="pbkdf1" %}}
#### **Buffer** `pbkdf1(Buffer password,Buffer salt,Integer iterations,Integer size,String algoName)`

依据 pbkdf1 根据明文 password 生成要求的二进制钥匙

#### Parameters
* `password` 指定使用的密码 

* `salt` 指定 hmac 使用的 salt 

* `iterations` 指定迭代次数 

* `size` 指定钥匙尺寸 

* `algoName` 指定要使用的 hash 算法，详见 hash 模块 

#### Returns
返回生成的二进制钥匙
{{% /panel %}}
{{% panel theme="default" header="pbkdf2" %}}
#### **Buffer** `pbkdf2(Buffer password,Buffer salt,Integer iterations,Integer size,Integer algo)`

依据 rfc2898 根据明文 password 生成要求的二进制钥匙

#### Parameters
* `password` 指定使用的密码 

* `salt` 指定 hmac 使用的 salt 

* `iterations` 指定迭代次数 

* `size` 指定钥匙尺寸 

* `algo` 指定要使用的 hash 算法，详见 hash 模块 

#### Returns
返回生成的二进制钥匙
{{% /panel %}}
{{% panel theme="default" header="pbkdf2" %}}
#### **Buffer** `pbkdf2(Buffer password,Buffer salt,Integer iterations,Integer size,String algoName)`

依据 rfc2898 根据明文 password 生成要求的二进制钥匙

#### Parameters
* `password` 指定使用的密码 

* `salt` 指定 hmac 使用的 salt 

* `iterations` 指定迭代次数 

* `size` 指定钥匙尺寸 

* `algoName` 指定要使用的 hash 算法，详见 hash 模块 

#### Returns
返回生成的二进制钥匙
{{% /panel %}}
{{% panel theme="default" header="pbkdf2Sync" %}}
#### **Buffer** `pbkdf2Sync(Buffer password,Buffer salt,Integer iterations,Integer size,String algoName)`

依据 rfc2898 根据明文 password 生成要求的二进制钥匙，是 pbkdf2 的同步版兼容接口

#### Parameters
* `password` 指定使用的密码 

* `salt` 指定 hmac 使用的 salt 

* `iterations` 指定迭代次数 

* `size` 指定钥匙尺寸 

* `algoName` 指定要使用的 hash 算法，详见 hash 模块 

#### Returns
返回生成的二进制钥匙
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>