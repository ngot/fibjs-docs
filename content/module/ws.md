+++
draft = false
title = "ws"
description = "websocket 支持模块"
[menu.main]
parent = "modules"
identifier = "ws"
+++

websocket 支持模块

使用方法： 
```js
var ws = require('ws');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const CONTINUE`[`CONTINUE`](#d6/d5b/namespacews_1a508f1a2f00bc868e36dc5e1de2111bca)`CONTINUE`<p>指定 websocket 消息类型 0，代表一个继续帧</p>
const            | `public const TEXT`[`TEXT`](#d6/d5b/namespacews_1a4d96d672e1a66d81b22160a35d64b2cd)`TEXT`<p>指定 websocket 消息类型 1，代表一个文本帧</p>
const            | `public const BINARY`[`BINARY`](#d6/d5b/namespacews_1afa728c423531bf6240c2533bd62c9eed)`BINARY`<p>指定 websocket 消息类型 2，代表一个二进制帧</p>
const            | `public const CLOSE`[`CLOSE`](#d6/d5b/namespacews_1a8759852a22ada79b26a07268ec5dad66)`CLOSE`<p>指定 websocket 消息类型 8，连接关闭</p>
const            | `public const PING`[`PING`](#d6/d5b/namespacews_1a6597dcb094e5c99f38eb6e431af1d189)`PING`<p>指定 websocket 消息类型 9，代表一个 ping 帧</p>
const            | `public const PONG`[`PONG`](#d6/d5b/namespacews_1a973cddb539e8d34e5c0ce3c2ec0601d2)`PONG`<p>指定 websocket 消息类型 10，代表一个 pong 帧</p>
const            | `public const CONNECTING`[`CONNECTING`](#d6/d5b/namespacews_1a100a1933795c1aed7ad3233250c71281)`CONNECTING`<p></p>
const            | `public const OPEN`[`OPEN`](#d6/d5b/namespacews_1a6db6dcbbdb71ec2f1ef875e3871f9c38)`OPEN`<p></p>
const            | `public const CLOSING`[`CLOSING`](#d6/d5b/namespacews_1a7a860dc765bbe73ec65e1db33337930f)`CLOSING`<p></p>
const            | `public const CLOSED`[`CLOSED`](#d6/d5b/namespacews_1a40bf77fb875ad8453691ef6ed0ef3b3e)`CLOSED`<p></p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
WebSocketMessage new            | `Message()`<p>创建一个 websocket 消息对象，参见 WebSocketMessage</p>
WebSocketHandler new            | `Handler()`<p>创建一个 websocket 包协议转换处理器，参见 WebSocketHandler</p>
WebSocket new            | `Socket()`<p></p>
Stream            | `connect(String url,String origin)`<p>创建一个 websocket 连接，并返回握手成功的 Stream 对象</p>
Handler            | `upgrade(Function accept)`<p>创建一个 websocket 协议处理器，从 http 接收 upgrade 请求并握手，生成 WebSocket 对象</p>

## Field Detail

{{% panel theme="default" header="CONTINUE" %}}
#### **const** `public const CONTINUE`[`CONTINUE`](#d6/d5b/namespacews_1a508f1a2f00bc868e36dc5e1de2111bca)`CONTINUE`

指定 websocket 消息类型 0，代表一个继续帧

{{% /panel %}}
{{% panel theme="default" header="TEXT" %}}
#### **const** `public const TEXT`[`TEXT`](#d6/d5b/namespacews_1a4d96d672e1a66d81b22160a35d64b2cd)`TEXT`

指定 websocket 消息类型 1，代表一个文本帧

{{% /panel %}}
{{% panel theme="default" header="BINARY" %}}
#### **const** `public const BINARY`[`BINARY`](#d6/d5b/namespacews_1afa728c423531bf6240c2533bd62c9eed)`BINARY`

指定 websocket 消息类型 2，代表一个二进制帧

{{% /panel %}}
{{% panel theme="default" header="CLOSE" %}}
#### **const** `public const CLOSE`[`CLOSE`](#d6/d5b/namespacews_1a8759852a22ada79b26a07268ec5dad66)`CLOSE`

指定 websocket 消息类型 8，连接关闭

{{% /panel %}}
{{% panel theme="default" header="PING" %}}
#### **const** `public const PING`[`PING`](#d6/d5b/namespacews_1a6597dcb094e5c99f38eb6e431af1d189)`PING`

指定 websocket 消息类型 9，代表一个 ping 帧

{{% /panel %}}
{{% panel theme="default" header="PONG" %}}
#### **const** `public const PONG`[`PONG`](#d6/d5b/namespacews_1a973cddb539e8d34e5c0ce3c2ec0601d2)`PONG`

指定 websocket 消息类型 10，代表一个 pong 帧

{{% /panel %}}
{{% panel theme="default" header="CONNECTING" %}}
#### **const** `public const CONNECTING`[`CONNECTING`](#d6/d5b/namespacews_1a100a1933795c1aed7ad3233250c71281)`CONNECTING`

{{% /panel %}}
{{% panel theme="default" header="OPEN" %}}
#### **const** `public const OPEN`[`OPEN`](#d6/d5b/namespacews_1a6db6dcbbdb71ec2f1ef875e3871f9c38)`OPEN`

{{% /panel %}}
{{% panel theme="default" header="CLOSING" %}}
#### **const** `public const CLOSING`[`CLOSING`](#d6/d5b/namespacews_1a7a860dc765bbe73ec65e1db33337930f)`CLOSING`

{{% /panel %}}
{{% panel theme="default" header="CLOSED" %}}
#### **const** `public const CLOSED`[`CLOSED`](#d6/d5b/namespacews_1a40bf77fb875ad8453691ef6ed0ef3b3e)`CLOSED`

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="Message" %}}
#### **WebSocketMessage new** `Message()`

创建一个 websocket 消息对象，参见 WebSocketMessage

{{% /panel %}}
{{% panel theme="default" header="Handler" %}}
#### **WebSocketHandler new** `Handler()`

创建一个 websocket 包协议转换处理器，参见 WebSocketHandler

{{% /panel %}}
{{% panel theme="default" header="Socket" %}}
#### **WebSocket new** `Socket()`

{{% /panel %}}
{{% panel theme="default" header="connect" %}}
#### **Stream** `connect(String url,String origin)`

创建一个 websocket 连接，并返回握手成功的 Stream 对象

#### Parameters
* `url` 指定连接的 url，支持 ws:// 和 wss:// 协议 

* `origin` 指定连接的授权域名 

#### Returns
返回连接成功的 Stream 对象，可能为 Socket 或者 SslSocket
{{% /panel %}}
{{% panel theme="default" header="upgrade" %}}
#### **Handler** `upgrade(Function accept)`

创建一个 websocket 协议处理器，从 http 接收 upgrade 请求并握手，生成 WebSocket 对象

#### Parameters
* `accept` 连接成功处理函数，参数为 WebSocket 对象 

#### Returns
返回协议处理器，可与 HttpServer, Chain, Routing 等对接
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>