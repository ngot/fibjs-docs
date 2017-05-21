+++
draft = false
title = "mq"
description = "Message queue module."
[menu.main]
parent = "modules"
identifier = "mq"
+++

[Message](#d6/db7/interfaceMessage) queue module.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`Handler`](#da/d85/interfaceHandler)` `[`jsHandler`](#dd/dbd/namespacemq_1a5ad6cd9f9ec59edab1abd1a8c6cac229)`(Value hdlr)`            | Create a javascript message handler, return immediately when pass by value.
`public static `[`AsyncWait`](#d7/ded/classAsyncWait)` `[`await`](#dd/dbd/namespacemq_1aaa3477ed3695f5da7f9916db0becc6fb)`()`            | Create async handler.
`public static `[`Handler`](#da/d85/interfaceHandler)` `[`nullHandler`](#dd/dbd/namespacemq_1a61c7dcb771bac38c446e827460e550cc)`()`            | Create a empty handler.
`public static static `[`invoke`](#dd/dbd/namespacemq_1a208188a99c118c1a4bb1a99febcd3c32)`(`[`Handler`](#da/d85/interfaceHandler)` hdlr,`[`object`](#db/d38/interfaceobject)` v)`            | Invoke a message or object to given handler.

## Members

#### `public static `[`Handler`](#da/d85/interfaceHandler)` `[`jsHandler`](#dd/dbd/namespacemq_1a5ad6cd9f9ec59edab1abd1a8c6cac229)`(Value hdlr)` 

Create a javascript message handler, return immediately when pass by value.

#### Parameters
* `hdlr` builtin handler, function or javascript mapping object, handler will map be mapped automatically 

#### Returns
Return handler of handle function

Syntax: 
```cpp
function func(v){
}
```
 Parameter v is the message to procee, there are three possibilities:

* Object javascript object, used for mapping message

* Function javascript function, used for next stage

* [Handler](#da/d85/interfaceHandler) Builtin handler for next stage No return or other result will finish message processing.

Use message mapping handler to handle nested logic as follows: 
```cpp
hdlr = mq.jsHandler({
    // fun1
   fun1 : function(v){},
   sub : {
       // sub.fun2 or sub/fun2
       fun2 : function(v){},
       // sub.hdlr or sub/hdlr
       hdlr: myHandler
   }
});
```
 In the example, fun1 and fun2 are normal javascript handle function, sub is a sub-object, myHandler is a handler

#### `public static `[`AsyncWait`](#d7/ded/classAsyncWait)` `[`await`](#dd/dbd/namespacemq_1aaa3477ed3695f5da7f9916db0becc6fb)`()` 

Create async handler.

#### Returns
Return created handler

Wait handler async as follows: 
```cpp
function func(v){
    var await = mq.await();

    call_some_async_func(v1, v2, v3, function() {
            await.end();
        });

    return await;
}
```
 Example uses javascript message handle function, when it returns, message handle engine will wait for await until await.end being called.

#### `public static `[`Handler`](#da/d85/interfaceHandler)` `[`nullHandler`](#dd/dbd/namespacemq_1a61c7dcb771bac38c446e827460e550cc)`()` 

Create a empty handler.

#### Returns
Return empry handler

#### `public static static `[`invoke`](#dd/dbd/namespacemq_1a208188a99c118c1a4bb1a99febcd3c32)`(`[`Handler`](#da/d85/interfaceHandler)` hdlr,`[`object`](#db/d38/interfaceobject)` v)` 

Invoke a message or object to given handler.

#### Parameters
* `hdlr` [Handler](#da/d85/interfaceHandler) to operate 

* `v` [Message](#d6/db7/interfaceMessage) or object

Unlike invoke method of handler, this will loop and wait every handler until reach null

