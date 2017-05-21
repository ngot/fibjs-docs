+++
draft = false
title = "ssl"
description = "ssl/tls module"
[menu.main]
parent = "modules"
identifier = "ssl"
+++

ssl/tls module

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`SslSocket`](#d0/d97/interfaceSslSocket)` new `[`Socket`](#df/dd2/namespacessl_1a3e693a484518479be1381ed0251b7c82)`()`            | Create a [SslSocket](#d0/d97/interfaceSslSocket) object, see [SslSocket](#d0/d97/interfaceSslSocket).
`public static `[`SslHandler`](#df/dd8/interfaceSslHandler)` new `[`Handler`](#df/dd2/namespacessl_1a6abf182f9613d8f45513eac4e2fa20aa)`()`            | Create a [SslHandler](#df/dd8/interfaceSslHandler) object, see [SslHandler](#df/dd8/interfaceSslHandler).
`public static `[`SslServer`](#d1/d5c/interfaceSslServer)` new `[`Server`](#df/dd2/namespacessl_1a1b74602d4f15362fe1a6aab2a8bdb79e)`()`            | Create a [SslServer](#d1/d5c/interfaceSslServer) object, see [SslServer](#d1/d5c/interfaceSslServer).
`public static `[`Stream`](#d4/dc7/interfaceStream)` `[`connect`](#df/dd2/namespacessl_1a2134de9d938a13f27312e166ba57932e)`(String url)`            | Create a [SslSocket](#d0/d97/interfaceSslSocket) and make connection.
`public static static `[`setClientCert`](#df/dd2/namespacessl_1abfcba27187ce773724229ec641b2104c)`(`[`X509Cert`](#dc/d22/interfaceX509Cert)` crt,`[`PKey`](#d5/dac/interfacePKey)` key)`            | Set the default client certificate.
`public static static `[`loadClientCertFile`](#df/dd2/namespacessl_1aaa64572ad78e4ab41e7ab0ebb12c2541)`(String crtFile,String keyFile,String password)`            | Load the default client certificate from a file.

## Members

#### `public static `[`SslSocket`](#d0/d97/interfaceSslSocket)` new `[`Socket`](#df/dd2/namespacessl_1a3e693a484518479be1381ed0251b7c82)`()` 

Create a [SslSocket](#d0/d97/interfaceSslSocket) object, see [SslSocket](#d0/d97/interfaceSslSocket).

#### `public static `[`SslHandler`](#df/dd8/interfaceSslHandler)` new `[`Handler`](#df/dd2/namespacessl_1a6abf182f9613d8f45513eac4e2fa20aa)`()` 

Create a [SslHandler](#df/dd8/interfaceSslHandler) object, see [SslHandler](#df/dd8/interfaceSslHandler).

#### `public static `[`SslServer`](#d1/d5c/interfaceSslServer)` new `[`Server`](#df/dd2/namespacessl_1a1b74602d4f15362fe1a6aab2a8bdb79e)`()` 

Create a [SslServer](#d1/d5c/interfaceSslServer) object, see [SslServer](#d1/d5c/interfaceSslServer).

#### `public static `[`Stream`](#d4/dc7/interfaceStream)` `[`connect`](#df/dd2/namespacessl_1a2134de9d938a13f27312e166ba57932e)`(String url)` 

Create a [SslSocket](#d0/d97/interfaceSslSocket) and make connection.

#### Parameters
* `url` Specify URL and protocol, e.g.: ssl://host:port 

#### Returns
Return [SslSocket](#d0/d97/interfaceSslSocket) when succeed

#### `public static static `[`setClientCert`](#df/dd2/namespacessl_1abfcba27187ce773724229ec641b2104c)`(`[`X509Cert`](#dc/d22/interfaceX509Cert)` crt,`[`PKey`](#d5/dac/interfacePKey)` key)` 

Set the default client certificate.

#### Parameters
* `crt` 509Cert certificate for client authentication server. 

* `key` [PKey](#d5/dac/interfacePKey) The private key for the client session.

#### `public static static `[`loadClientCertFile`](#df/dd2/namespacessl_1aaa64572ad78e4ab41e7ab0ebb12c2541)`(String crtFile,String keyFile,String password)` 

Load the default client certificate from a file.

#### Parameters
* `crtFile` [X509Cert](#dc/d22/interfaceX509Cert) certificate file for client authentication server. 

* `keyFile` [PKey](#d5/dac/interfacePKey) private key file for the client session. 

* `password` Decryption password

