+++
draft = false
title = "AsyncWait"
description = "MessageHandler object for asynchronous waiting."
[menu.main]
parent = "objects"
identifier = "AsyncWait"
+++

```js
class AsyncWait : public Handler
```  

MessageHandler object for asynchronous waiting.

## Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `end()`<p>Finish waiting, moving on to handle the message.</p>
Handler            | `invoke(object v)`<p>handle a message or an object</p>
void            | `dispose()`<p>Force dispose object immediately.</p>
String            | `toString()`<p>Return string representation of object, normally is "[Native Object]" and can be implemented by object itself.</p>
Value            | `toJSON(String key)`<p>Return JSON representation of object, normally is readable attributes collection.</p>
Value            | `valueOf()`<p>Return JSON representation of object.</p>

## Method Detail

{{% panel header="end" %}}
#### **void** `end()`

Finish waiting, moving on to handle the message.

{{% /panel %}}
{{% panel header="invoke" %}}
#### **Handler** `invoke(object v)`

handle a message or an object

#### Parameters
* `v` specify the message or object to be handled 

#### Returns
return the handler of the next step
{{% /panel %}}
{{% panel header="dispose" %}}
#### **void** `dispose()`

Force dispose object immediately.

{{% /panel %}}
{{% panel header="toString" %}}
#### **String** `toString()`

Return string representation of object, normally is "[Native Object]" and can be implemented by object itself.

#### Returns
Return string representation
{{% /panel %}}
{{% panel header="toJSON" %}}
#### **Value** `toJSON(String key)`

Return JSON representation of object, normally is readable attributes collection.

#### Parameters
* `key` Not used 

#### Returns
Return JSON representation
{{% /panel %}}
{{% panel header="valueOf" %}}
#### **Value** `valueOf()`

Return JSON representation of object.

#### Returns
Return JSON representation of object
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>