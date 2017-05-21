+++
draft = false
title = "ssl"
description = "ssl/tls 模块"
[menu.main]
parent = "modules"
identifier = "ssl"
+++

ssl/tls 模块

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const VERIFY_NONE`[`VERIFY_NONE`](#df/dd2/namespacessl_1a564b817c09bd7d5dbd69f37b5611faac)`VERIFY_NONE`<p>证书验证模式，不验证</p>
const            | `public const VERIFY_OPTIONAL`[`VERIFY_OPTIONAL`](#df/dd2/namespacessl_1a6ac0e9a89953bc84150bee5e6197532b)`VERIFY_OPTIONAL`<p>证书验证模式，可选验证，允许验证不通过</p>
const            | `public const VERIFY_REQUIRED`[`VERIFY_REQUIRED`](#df/dd2/namespacessl_1aef7f0df6e4f88a9ba748108d80017c76)`VERIFY_REQUIRED`<p>证书验证模式，要求验证，验证不通过则中断</p>
const            | `public const BADCERT_EXPIRED`[`BADCERT_EXPIRED`](#df/dd2/namespacessl_1a8e9dab2f3d7672384ade4d42a067c2fc)`BADCERT_EXPIRED`<p>证书验证结果，证书超时</p>
const            | `public const BADCERT_REVOKED`[`BADCERT_REVOKED`](#df/dd2/namespacessl_1a10616f2202a0e9b73129606474b6b227)`BADCERT_REVOKED`<p>证书验证结果，证书被撤销</p>
const            | `public const BADCERT_CN_MISMATCH`[`BADCERT_CN_MISMATCH`](#df/dd2/namespacessl_1aa3c8c7c538657acc04866c78ba320888)`BADCERT_CN_MISMATCH`<p>证书验证结果，证书名错误</p>
const            | `public const BADCERT_NOT_TRUSTED`[`BADCERT_NOT_TRUSTED`](#df/dd2/namespacessl_1a0ba105b51c3916ea8c26d6cfc3fc4747)`BADCERT_NOT_TRUSTED`<p>证书验证结果，证书不可信</p>
const            | `public const ssl3`[`ssl3`](#df/dd2/namespacessl_1a13425b19fd17f299f6baa64f881a5d34)`ssl3`<p>ssl 协议版本 ssl 3.0</p>
const            | `public const tls1`[`tls1`](#df/dd2/namespacessl_1a23186a5881a9c76fed1d1ac0e37b4128)`tls1`<p>ssl 协议版本 tls 1.0</p>
const            | `public const tls1_1`[`tls1_1`](#df/dd2/namespacessl_1afc55932878313c5ad8b969bd7a97d60d)`tls1_1`<p>ssl 协议版本 tls 1.1</p>
const            | `public const tls1_2`[`tls1_2`](#df/dd2/namespacessl_1a89b158032048500c315f754d8f6c6211)`tls1_2`<p>ssl 协议版本 tls 1.2</p>
readonly X509Cert            | `public static readonly X509Cert ca`[`ca`](#df/dd2/namespacessl_1ada04b21a5fc2a69908ee67293b066484)`ca`<p>全局证书，用于 ssl 客户端模式验证服务器证书</p>
Integer            | `public static Integer verification`[`verification`](#df/dd2/namespacessl_1a6c0ed13233d572829abc2c2043e6c8a7)`verification`<p>设定证书验证模式，缺省为 VERIFY_REQUIRED</p>
Integer            | `public static Integer min_version`[`min_version`](#df/dd2/namespacessl_1a1d8846b94ac9932b67090fd405890ccd)`min_version`<p>设定最低版本支持，缺省 ssl3</p>
Integer            | `public static Integer max_version`[`max_version`](#df/dd2/namespacessl_1abbf0d10acbe83afd31677cb8857044ea)`max_version`<p>设定最高版本支持，缺省 tls1_1</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
SslSocket new            | `Socket()`<p>创建一个 SslSocket 对象，参见 SslSocket</p>
SslHandler new            | `Handler()`<p>创建一个 SslHandler 对象，参见 SslHandler</p>
SslServer new            | `Server()`<p>创建一个 SslServer 对象，参见 SslServer</p>
Stream            | `connect(String url,Integer timeout)`<p>创建一个 SslSocket 对象并建立连接</p>
void            | `setClientCert(X509Cert crt,PKey key)`<p>设定缺省客户端证书</p>
void            | `loadClientCertFile(String crtFile,String keyFile,String password)`<p>从文件中加载缺省客户端证书</p>

## Field Detail

{{% panel theme="default" header="VERIFY_NONE" %}}
#### **const** `public const VERIFY_NONE`[`VERIFY_NONE`](#df/dd2/namespacessl_1a564b817c09bd7d5dbd69f37b5611faac)`VERIFY_NONE`

证书验证模式，不验证

{{% /panel %}}
{{% panel theme="default" header="VERIFY_OPTIONAL" %}}
#### **const** `public const VERIFY_OPTIONAL`[`VERIFY_OPTIONAL`](#df/dd2/namespacessl_1a6ac0e9a89953bc84150bee5e6197532b)`VERIFY_OPTIONAL`

证书验证模式，可选验证，允许验证不通过

{{% /panel %}}
{{% panel theme="default" header="VERIFY_REQUIRED" %}}
#### **const** `public const VERIFY_REQUIRED`[`VERIFY_REQUIRED`](#df/dd2/namespacessl_1aef7f0df6e4f88a9ba748108d80017c76)`VERIFY_REQUIRED`

证书验证模式，要求验证，验证不通过则中断

{{% /panel %}}
{{% panel theme="default" header="BADCERT_EXPIRED" %}}
#### **const** `public const BADCERT_EXPIRED`[`BADCERT_EXPIRED`](#df/dd2/namespacessl_1a8e9dab2f3d7672384ade4d42a067c2fc)`BADCERT_EXPIRED`

证书验证结果，证书超时

{{% /panel %}}
{{% panel theme="default" header="BADCERT_REVOKED" %}}
#### **const** `public const BADCERT_REVOKED`[`BADCERT_REVOKED`](#df/dd2/namespacessl_1a10616f2202a0e9b73129606474b6b227)`BADCERT_REVOKED`

证书验证结果，证书被撤销

{{% /panel %}}
{{% panel theme="default" header="BADCERT_CN_MISMATCH" %}}
#### **const** `public const BADCERT_CN_MISMATCH`[`BADCERT_CN_MISMATCH`](#df/dd2/namespacessl_1aa3c8c7c538657acc04866c78ba320888)`BADCERT_CN_MISMATCH`

证书验证结果，证书名错误

{{% /panel %}}
{{% panel theme="default" header="BADCERT_NOT_TRUSTED" %}}
#### **const** `public const BADCERT_NOT_TRUSTED`[`BADCERT_NOT_TRUSTED`](#df/dd2/namespacessl_1a0ba105b51c3916ea8c26d6cfc3fc4747)`BADCERT_NOT_TRUSTED`

证书验证结果，证书不可信

{{% /panel %}}
{{% panel theme="default" header="ssl3" %}}
#### **const** `public const ssl3`[`ssl3`](#df/dd2/namespacessl_1a13425b19fd17f299f6baa64f881a5d34)`ssl3`

ssl 协议版本 ssl 3.0

{{% /panel %}}
{{% panel theme="default" header="tls1" %}}
#### **const** `public const tls1`[`tls1`](#df/dd2/namespacessl_1a23186a5881a9c76fed1d1ac0e37b4128)`tls1`

ssl 协议版本 tls 1.0

{{% /panel %}}
{{% panel theme="default" header="tls1_1" %}}
#### **const** `public const tls1_1`[`tls1_1`](#df/dd2/namespacessl_1afc55932878313c5ad8b969bd7a97d60d)`tls1_1`

ssl 协议版本 tls 1.1

{{% /panel %}}
{{% panel theme="default" header="tls1_2" %}}
#### **const** `public const tls1_2`[`tls1_2`](#df/dd2/namespacessl_1a89b158032048500c315f754d8f6c6211)`tls1_2`

ssl 协议版本 tls 1.2

{{% /panel %}}
{{% panel theme="default" header="ca" %}}
#### **readonly X509Cert** `public static readonly X509Cert ca`[`ca`](#df/dd2/namespacessl_1ada04b21a5fc2a69908ee67293b066484)`ca`

全局证书，用于 ssl 客户端模式验证服务器证书

{{% /panel %}}
{{% panel theme="default" header="verification" %}}
#### **Integer** `public static Integer verification`[`verification`](#df/dd2/namespacessl_1a6c0ed13233d572829abc2c2043e6c8a7)`verification`

设定证书验证模式，缺省为 VERIFY_REQUIRED

{{% /panel %}}
{{% panel theme="default" header="min_version" %}}
#### **Integer** `public static Integer min_version`[`min_version`](#df/dd2/namespacessl_1a1d8846b94ac9932b67090fd405890ccd)`min_version`

设定最低版本支持，缺省 ssl3

{{% /panel %}}
{{% panel theme="default" header="max_version" %}}
#### **Integer** `public static Integer max_version`[`max_version`](#df/dd2/namespacessl_1abbf0d10acbe83afd31677cb8857044ea)`max_version`

设定最高版本支持，缺省 tls1_1

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="Socket" %}}
#### **SslSocket new** `Socket()`

创建一个 SslSocket 对象，参见 SslSocket

{{% /panel %}}
{{% panel theme="default" header="Handler" %}}
#### **SslHandler new** `Handler()`

创建一个 SslHandler 对象，参见 SslHandler

{{% /panel %}}
{{% panel theme="default" header="Server" %}}
#### **SslServer new** `Server()`

创建一个 SslServer 对象，参见 SslServer

{{% /panel %}}
{{% panel theme="default" header="connect" %}}
#### **Stream** `connect(String url,Integer timeout)`

创建一个 SslSocket 对象并建立连接

#### Parameters
* `url` 指定连接的协议，可以是：ssl://host:port 

* `timeout` 指定超时时间，单位是毫秒，默认为0 

#### Returns
返回连接成功的 SslSocket 对象
{{% /panel %}}
{{% panel theme="default" header="setClientCert" %}}
#### **void** `setClientCert(X509Cert crt,PKey key)`

设定缺省客户端证书

#### Parameters
* `crt` X509Cert 证书，用于客户端验证服务器 

* `key` PKey 私钥，用于与客户端会话
{{% /panel %}}
{{% panel theme="default" header="loadClientCertFile" %}}
#### **void** `loadClientCertFile(String crtFile,String keyFile,String password)`

从文件中加载缺省客户端证书

#### Parameters
* `crtFile` X509Cert 证书文件，用于客户端验证服务器 

* `keyFile` PKey 私钥文件，用于与客户端会话 

* `password` 解密密码
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>