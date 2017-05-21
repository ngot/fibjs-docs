+++
draft = false
title = "websocket"
description = "websocket support module."
[menu.main]
parent = "modules"
identifier = "websocket"
+++

websocket support module

To use it: 
```cpp
var websocket = require('websocket');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`WebSocketMessage`](#db/d5d/interfaceWebSocketMessage)` new `[`Message`](#d0/d42/namespacewebsocket_1acbea8ddfa08a7bcd756f775342a33a92)`()`            | Create one websocket message object, refer [WebSocketMessage](#db/d5d/interfaceWebSocketMessage).
`public static `[`WebSocketHandler`](#da/d20/interfaceWebSocketHandler)` new `[`Handler`](#d0/d42/namespacewebsocket_1ab412dcfeaa386b7a371c52c58ce6f06e)`()`            | Create one websocket packet protocol conversion processor, refer [WebSocketHandler](#da/d20/interfaceWebSocketHandler).
`public static `[`Stream`](#d4/dc7/interfaceStream)` `[`connect`](#d0/d42/namespacewebsocket_1a632bf0ecf9fb541eff8b22d328311886)`(String url)`            | Create one websocket connection, and return a completed connection [Stream](#d4/dc7/interfaceStream) object.

## Members

#### `public static `[`WebSocketMessage`](#db/d5d/interfaceWebSocketMessage)` new `[`Message`](#d0/d42/namespacewebsocket_1acbea8ddfa08a7bcd756f775342a33a92)`()` 

Create one websocket message object, refer [WebSocketMessage](#db/d5d/interfaceWebSocketMessage).

#### `public static `[`WebSocketHandler`](#da/d20/interfaceWebSocketHandler)` new `[`Handler`](#d0/d42/namespacewebsocket_1ab412dcfeaa386b7a371c52c58ce6f06e)`()` 

Create one websocket packet protocol conversion processor, refer [WebSocketHandler](#da/d20/interfaceWebSocketHandler).

#### `public static `[`Stream`](#d4/dc7/interfaceStream)` `[`connect`](#d0/d42/namespacewebsocket_1a632bf0ecf9fb541eff8b22d328311886)`(String url)` 

Create one websocket connection, and return a completed connection [Stream](#d4/dc7/interfaceStream) object.

#### Parameters
* `url` Specifies the connection url，support ws:// and wss:// protocol 

#### Returns
Return a completed connection [Stream](#d4/dc7/interfaceStream) object, which can be [Socket](#dd/d94/interfaceSocket) or [SslSocket](#d0/d97/interfaceSslSocket)

