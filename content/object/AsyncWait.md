+++
draft = false
title = "AsyncWait"
description = "AsyncWait Object"
[menu.main]
parent = "objects"
identifier = "AsyncWait"
+++

## class `AsyncWait` 

```
class AsyncWait
  : public Handler
```  

[Message](#d6/db7/interfaceMessage)[Handler](#da/d85/interfaceHandler) object for asynchronous waiting.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`end`](#d7/ded/classAsyncWait_1adf311589dec033121d3b99e126481798)`()` | Finish waiting, moving on to handle the message.
`public `[`Handler`](#da/d85/interfaceHandler)` `[`invoke`](#da/d85/interfaceHandler_1af901258552a23961893c5bd6f18ce681)`(`[`object`](#db/d38/interfaceobject)` v)` | handle a message or an object
`public  `[`dispose`](#db/d38/interfaceobject_1a6b88dbc459449d2280338e5b702a68b4)`()` | Force dispose object immediately.
`public String `[`toString`](#db/d38/interfaceobject_1ac61f07a7d6c5471293371086af3186bd)`()` | Return string representation of object, normally is "[Native Object]" and can be implemented by object itself.
`public Value `[`toJSON`](#db/d38/interfaceobject_1ad66be13eb5b7c5f560fd8511565138c4)`(String key)` | Return JSON representation of object, normally is readable attributes collection.
`public Value `[`valueOf`](#db/d38/interfaceobject_1ab9261a7662bc8bb4a898bc15dc16f206)`()` | Return JSON representation of object.

## Members

#### `public  `[`end`](#d7/ded/classAsyncWait_1adf311589dec033121d3b99e126481798)`()` 

Finish waiting, moving on to handle the message.

#### `public `[`Handler`](#da/d85/interfaceHandler)` `[`invoke`](#da/d85/interfaceHandler_1af901258552a23961893c5bd6f18ce681)`(`[`object`](#db/d38/interfaceobject)` v)` 

handle a message or an object

#### Parameters
* `v` specify the message or object to be handled 

#### Returns
return the handler of the next step

#### `public  `[`dispose`](#db/d38/interfaceobject_1a6b88dbc459449d2280338e5b702a68b4)`()` 

Force dispose object immediately.

#### `public String `[`toString`](#db/d38/interfaceobject_1ac61f07a7d6c5471293371086af3186bd)`()` 

Return string representation of object, normally is "[Native Object]" and can be implemented by object itself.

#### Returns
Return string representation

#### `public Value `[`toJSON`](#db/d38/interfaceobject_1ad66be13eb5b7c5f560fd8511565138c4)`(String key)` 

Return JSON representation of object, normally is readable attributes collection.

#### Parameters
* `key` Not used 

#### Returns
Return JSON representation

#### `public Value `[`valueOf`](#db/d38/interfaceobject_1ab9261a7662bc8bb4a898bc15dc16f206)`()` 

Return JSON representation of object.

#### Returns
Return JSON representation of object

