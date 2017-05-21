+++
draft = false
title = "websocket"
description = "websocket support module"
[menu.main]
parent = "modules"
identifier = "websocket"
+++

websocket support module

To use it: 
```js
var websocket = require('websocket');
```

## Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const Integer            | `public const Integer CONTINUE`[`CONTINUE`](#d0/d42/namespacewebsocket_1a42b0763a6a31aee82b45c0d9cf305bd3)`CONTINUE`<p>Specifies the message type 0 of websocket, which is a continue frame.</p>
const Integer            | `public const Integer TEXT`[`TEXT`](#d0/d42/namespacewebsocket_1a6f7c73324ee8aefed39ea03d3e64458b)`TEXT`<p>Specifies the message type 1 of websocket, which is a text frame.</p>
const Integer            | `public const Integer BINARY`[`BINARY`](#d0/d42/namespacewebsocket_1ac2a5602c1ce5a962340711c820484685)`BINARY`<p>Specifies the message type 2 of websocket, which is a binary frame.</p>
const Integer            | `public const Integer CLOSE`[`CLOSE`](#d0/d42/namespacewebsocket_1a3afc2cc727905e9fbd7726147ccab9ba)`CLOSE`<p>Specifies the message type 8 of websocket, which means connection closed.</p>
const Integer            | `public const Integer PING`[`PING`](#d0/d42/namespacewebsocket_1a8e9cf43e3c40b9b6c5945e7c9d6913ec)`PING`<p>Specifies the message type 9 of websocket, which is a ping frame.</p>
const Integer            | `public const Integer PONG`[`PONG`](#d0/d42/namespacewebsocket_1a5d81c92474471a7a6dd86c287f0fb402)`PONG`<p>Specifies the message type 10 of websocket, which is a pong frame.</p>
WebSocketMessage new            | `Message()`<p>Create one websocket message object, refer WebSocketMessage.</p>
WebSocketHandler new            | `Handler()`<p>Create one websocket packet protocol conversion processor, refer WebSocketHandler.</p>
Stream            | `connect(String url)`<p>Create one websocket connection, and return a completed connection Stream object.</p>

## Method Detail

{{% panel header="CONTINUE" %}}
#### **const Integer** `public const Integer CONTINUE`[`CONTINUE`](#d0/d42/namespacewebsocket_1a42b0763a6a31aee82b45c0d9cf305bd3)`CONTINUE`

Specifies the message type 0 of websocket, which is a continue frame.

{{% /panel %}}
{{% panel header="TEXT" %}}
#### **const Integer** `public const Integer TEXT`[`TEXT`](#d0/d42/namespacewebsocket_1a6f7c73324ee8aefed39ea03d3e64458b)`TEXT`

Specifies the message type 1 of websocket, which is a text frame.

{{% /panel %}}
{{% panel header="BINARY" %}}
#### **const Integer** `public const Integer BINARY`[`BINARY`](#d0/d42/namespacewebsocket_1ac2a5602c1ce5a962340711c820484685)`BINARY`

Specifies the message type 2 of websocket, which is a binary frame.

{{% /panel %}}
{{% panel header="CLOSE" %}}
#### **const Integer** `public const Integer CLOSE`[`CLOSE`](#d0/d42/namespacewebsocket_1a3afc2cc727905e9fbd7726147ccab9ba)`CLOSE`

Specifies the message type 8 of websocket, which means connection closed.

{{% /panel %}}
{{% panel header="PING" %}}
#### **const Integer** `public const Integer PING`[`PING`](#d0/d42/namespacewebsocket_1a8e9cf43e3c40b9b6c5945e7c9d6913ec)`PING`

Specifies the message type 9 of websocket, which is a ping frame.

{{% /panel %}}
{{% panel header="PONG" %}}
#### **const Integer** `public const Integer PONG`[`PONG`](#d0/d42/namespacewebsocket_1a5d81c92474471a7a6dd86c287f0fb402)`PONG`

Specifies the message type 10 of websocket, which is a pong frame.

{{% /panel %}}
{{% panel header="Message" %}}
#### **WebSocketMessage new** `Message()`

Create one websocket message object, refer WebSocketMessage.

{{% /panel %}}
{{% panel header="Handler" %}}
#### **WebSocketHandler new** `Handler()`

Create one websocket packet protocol conversion processor, refer WebSocketHandler.

{{% /panel %}}
{{% panel header="connect" %}}
#### **Stream** `connect(String url)`

Create one websocket connection, and return a completed connection Stream object.

#### Parameters
* `url` Specifies the connection url，support ws:// and wss:// protocol 

#### Returns
Return a completed connection Stream object, which can be Socket or SslSocket
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>