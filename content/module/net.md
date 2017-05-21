+++
draft = false
title = "net"
description = "Network module."
[menu.main]
parent = "modules"
identifier = "net"
+++

Network module.

Used for create and operate netwrok resource, to use it: 
```cpp
var net = require('net');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static String `[`resolve`](#dc/d27/namespacenet_1a733a23e8a51fdc5e2b1e3cafaf6f0010)`(String name,Integer family)`            | Resolve address of given host.
`public static String `[`ip`](#dc/d27/namespacenet_1a3150c8ad034c6a907a1531327a94b9a3)`(String name)`            | Quick query host address, same as resolve(name)
`public static String `[`ipv6`](#dc/d27/namespacenet_1a8274c0c7f3a4ee82b2e1686b7d5afb7f)`(String name)`            | Quick query host ipv6 address, same as resolve(name, [net.AF_INET6](#dc/d27/namespacenet_1a20c82f9528e1f2132ea230ef72d273cd))
`public static `[`Stream`](#d4/dc7/interfaceStream)` `[`connect`](#dc/d27/namespacenet_1a2432a0ee7fbea52ddd8b24ecee5bd5c2)`(String host,Integer port,Integer family)`            | Create a [Socket](#dd/d94/interfaceSocket) object and make connection, see [Socket](#dd/d94/interfaceSocket).
`public static `[`Stream`](#d4/dc7/interfaceStream)` `[`connect`](#dc/d27/namespacenet_1a620c034b250762fcbacd4d72fdc5f0f1)`(String url)`            | Create a [Socket](#dd/d94/interfaceSocket) or [SslSocket](#d0/d97/interfaceSslSocket) and make connection.
`public static `[`Smtp`](#da/de8/interfaceSmtp)` `[`openSmtp`](#dc/d27/namespacenet_1aa6774e649b7fb2336400fd006ab6371b)`(String host,Integer port,Integer family)`            | Create a [Smtp](#da/de8/interfaceSmtp) object and make connection, see [Smtp](#da/de8/interfaceSmtp).
`public static String `[`backend`](#dc/d27/namespacenet_1ab30af1b267baf4be6092ddd2d868970c)`()`            | Get system backend async network engine.

## Members

#### `public static String `[`resolve`](#dc/d27/namespacenet_1a733a23e8a51fdc5e2b1e3cafaf6f0010)`(String name,Integer family)` 

Resolve address of given host.

#### Parameters
* `name` Home name 

* `family` Return type, default is AF_INET 

#### Returns
Return IP result string

#### `public static String `[`ip`](#dc/d27/namespacenet_1a3150c8ad034c6a907a1531327a94b9a3)`(String name)` 

Quick query host address, same as resolve(name)

#### Parameters
* `name` Host name 

#### Returns
Return IP result string

#### `public static String `[`ipv6`](#dc/d27/namespacenet_1a8274c0c7f3a4ee82b2e1686b7d5afb7f)`(String name)` 

Quick query host ipv6 address, same as resolve(name, [net.AF_INET6](#dc/d27/namespacenet_1a20c82f9528e1f2132ea230ef72d273cd))

#### Parameters
* `name` Host name 

#### Returns
Return IPv6 result string

#### `public static `[`Stream`](#d4/dc7/interfaceStream)` `[`connect`](#dc/d27/namespacenet_1a2432a0ee7fbea52ddd8b24ecee5bd5c2)`(String host,Integer port,Integer family)` 

Create a [Socket](#dd/d94/interfaceSocket) object and make connection, see [Socket](#dd/d94/interfaceSocket).

#### Parameters
* `host` Target address or host name 

* `port` Target port number 

* `family` Addree type, default is AF_INE, ipv4 

#### Returns
Return connected [Socket](#dd/d94/interfaceSocket) object

#### `public static `[`Stream`](#d4/dc7/interfaceStream)` `[`connect`](#dc/d27/namespacenet_1a620c034b250762fcbacd4d72fdc5f0f1)`(String url)` 

Create a [Socket](#dd/d94/interfaceSocket) or [SslSocket](#d0/d97/interfaceSslSocket) and make connection.

#### Parameters
* `url` URL with protocol, can be tcp://host:port or ssl://host:port 

#### Returns
Return connected [Socket](#dd/d94/interfaceSocket) or [SslSocket](#d0/d97/interfaceSslSocket) object

#### `public static `[`Smtp`](#da/de8/interfaceSmtp)` `[`openSmtp`](#dc/d27/namespacenet_1aa6774e649b7fb2336400fd006ab6371b)`(String host,Integer port,Integer family)` 

Create a [Smtp](#da/de8/interfaceSmtp) object and make connection, see [Smtp](#da/de8/interfaceSmtp).

#### Parameters
* `host` Target address or host name 

* `port` Target port number 

* `family` Addree type, default is AF_INE, ipv4 

#### Returns
Return connected [Smtp](#da/de8/interfaceSmtp) object

#### `public static String `[`backend`](#dc/d27/namespacenet_1ab30af1b267baf4be6092ddd2d868970c)`()` 

Get system backend async network engine.

#### Returns
Return network engine name

