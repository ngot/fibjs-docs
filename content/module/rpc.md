+++
draft = false
title = "rpc"
description = "RPC module."
[menu.main]
parent = "modules"
identifier = "rpc"
+++

RPC module.

To use it: 
```js
var rpc = require('rpc');
```

## Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Handler            | `json(Value hdlr)`<p>Generate a json-rpc message converter.</p>

## Method Detail

{{% panel header="json" %}}
#### **Handler** `json(Value hdlr)`

Generate a json-rpc message converter.

#### Parameters
* `hdlr` Built-in handler, handle function or javascript message mapping object, see mq.jsHandler

#### Returns
Return handler
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>