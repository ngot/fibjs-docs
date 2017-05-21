+++
draft = false
title = "net"
description = "网络访问模块"
[menu.main]
parent = "modules"
identifier = "net"
+++

网络访问模块

基础模块。可用于创建和操作网络资源，引用方式： 
```js
var net = require('net');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const AF_INET`[`AF_INET`](#dc/d27/namespacenet_1a4350ad8d5828bd2849e765849fdd2733)`AF_INET`<p>地址集常量，指定 ipv4</p>
const            | `public const AF_INET6`[`AF_INET6`](#dc/d27/namespacenet_1a4aab1a26e793f4ee5313dafdab8b7d9e)`AF_INET6`<p>地址集常量，指定 ipv6</p>
const            | `public const SOCK_STREAM`[`SOCK_STREAM`](#dc/d27/namespacenet_1a3c7c6380412753c24e26b2ad859dbdcf)`SOCK_STREAM`<p>协议族常量，指定 tcp</p>
const            | `public const SOCK_DGRAM`[`SOCK_DGRAM`](#dc/d27/namespacenet_1a5460f449422b58d47194867275f17ca6)`SOCK_DGRAM`<p>协议族常量，指定 udp</p>
void            | `public static static Socket`[`Socket`](#dc/d27/namespacenet_1a061614c759869e144b8fa364dd5fa962)`Socket`<p>创建一个 Socket 对象，参见 Socket</p>
void            | `public static static Smtp`[`Smtp`](#dc/d27/namespacenet_1abfe21b74c13164de4fc3d68a3953d0dd)`Smtp`<p>创建一个 Smtp 对象，参见 Smtp</p>
void            | `public static static TcpServer`[`TcpServer`](#dc/d27/namespacenet_1a604049c078bee2cef17fa2e3ba9a9471)`TcpServer`<p>创建一个 TcpServer 对象，参见 TcpServer</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Object            | `info()`<p>查询当前运行环境网络信息</p>
String            | `resolve(String name,Integer family)`<p>查询给定的主机名的地址</p>
String            | `ip(String name)`<p>快速查询的主机地址，等效与 resolve(name)</p>
String            | `ipv6(String name)`<p>快速查询的主机 ipv6 地址，等效与 resolve(name, net.AF_INET6)</p>
Stream            | `connect(String host,Integer port,Integer timeout,Integer family)`<p>创建一个 Socket 对象并建立连接，参见 Socket</p>
Stream            | `connect(String url,Integer timeout)`<p>创建一个 Socket 或 SslSocket 对象并建立连接</p>
Smtp            | `openSmtp(String url,Integer timeout)`<p>创建一个 Smtp 对象并建立连接，参见 Smtp</p>
UrlObject new            | `Url()`<p>创建一个 UrlObject 对象，参见 UrlObject</p>
String            | `backend()`<p>查询当前系统异步网络引擎</p>

## Field Detail

{{% panel theme="default" header="AF_INET" %}}
#### **const** `public const AF_INET`[`AF_INET`](#dc/d27/namespacenet_1a4350ad8d5828bd2849e765849fdd2733)`AF_INET`

地址集常量，指定 ipv4

{{% /panel %}}
{{% panel theme="default" header="AF_INET6" %}}
#### **const** `public const AF_INET6`[`AF_INET6`](#dc/d27/namespacenet_1a4aab1a26e793f4ee5313dafdab8b7d9e)`AF_INET6`

地址集常量，指定 ipv6

{{% /panel %}}
{{% panel theme="default" header="SOCK_STREAM" %}}
#### **const** `public const SOCK_STREAM`[`SOCK_STREAM`](#dc/d27/namespacenet_1a3c7c6380412753c24e26b2ad859dbdcf)`SOCK_STREAM`

协议族常量，指定 tcp

{{% /panel %}}
{{% panel theme="default" header="SOCK_DGRAM" %}}
#### **const** `public const SOCK_DGRAM`[`SOCK_DGRAM`](#dc/d27/namespacenet_1a5460f449422b58d47194867275f17ca6)`SOCK_DGRAM`

协议族常量，指定 udp

{{% /panel %}}
{{% panel theme="default" header="Socket" %}}
#### **void** `public static static Socket`[`Socket`](#dc/d27/namespacenet_1a061614c759869e144b8fa364dd5fa962)`Socket`

创建一个 Socket 对象，参见 Socket

{{% /panel %}}
{{% panel theme="default" header="Smtp" %}}
#### **void** `public static static Smtp`[`Smtp`](#dc/d27/namespacenet_1abfe21b74c13164de4fc3d68a3953d0dd)`Smtp`

创建一个 Smtp 对象，参见 Smtp

{{% /panel %}}
{{% panel theme="default" header="TcpServer" %}}
#### **void** `public static static TcpServer`[`TcpServer`](#dc/d27/namespacenet_1a604049c078bee2cef17fa2e3ba9a9471)`TcpServer`

创建一个 TcpServer 对象，参见 TcpServer

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="info" %}}
#### **Object** `info()`

查询当前运行环境网络信息

#### Returns
返回网卡信息
{{% /panel %}}
{{% panel theme="default" header="resolve" %}}
#### **String** `resolve(String name,Integer family)`

查询给定的主机名的地址

#### Parameters
* `name` 指定主机名 

* `family` 指定查询返回类型，缺省为 AF_INET 

#### Returns
返回查询的 ip 字符串
{{% /panel %}}
{{% panel theme="default" header="ip" %}}
#### **String** `ip(String name)`

快速查询的主机地址，等效与 resolve(name)

#### Parameters
* `name` 指定主机名 

#### Returns
返回查询的 ip 字符串
{{% /panel %}}
{{% panel theme="default" header="ipv6" %}}
#### **String** `ipv6(String name)`

快速查询的主机 ipv6 地址，等效与 resolve(name, net.AF_INET6)

#### Parameters
* `name` 指定主机名 

#### Returns
返回查询的 ipv6 字符串
{{% /panel %}}
{{% panel theme="default" header="connect" %}}
#### **Stream** `connect(String host,Integer port,Integer timeout,Integer family)`

创建一个 Socket 对象并建立连接，参见 Socket

#### Parameters
* `host` 指定对方地址或主机名 

* `port` 指定对方端口 

* `timeout` 指定超时时间，单位是毫秒，默认为0 

* `family` 指定地址集，缺省为 AF_INET，ipv4 

#### Returns
返回连接成功的 Socket 对象
{{% /panel %}}
{{% panel theme="default" header="connect" %}}
#### **Stream** `connect(String url,Integer timeout)`

创建一个 Socket 或 SslSocket 对象并建立连接

#### Parameters
* `url` 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port 

* `timeout` 指定超时时间，单位是毫秒，默认为0 

#### Returns
返回连接成功的 Socket 或者 SslSocket 对象
{{% /panel %}}
{{% panel theme="default" header="openSmtp" %}}
#### **Smtp** `openSmtp(String url,Integer timeout)`

创建一个 Smtp 对象并建立连接，参见 Smtp

#### Parameters
* `url` 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port 

* `timeout` 指定超时时间，单位是毫秒，默认为0 

#### Returns
返回连接成功的 Smtp 对象
{{% /panel %}}
{{% panel theme="default" header="Url" %}}
#### **UrlObject new** `Url()`

创建一个 UrlObject 对象，参见 UrlObject

{{% /panel %}}
{{% panel theme="default" header="backend" %}}
#### **String** `backend()`

查询当前系统异步网络引擎

#### Returns
返回网络引擎名称
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>