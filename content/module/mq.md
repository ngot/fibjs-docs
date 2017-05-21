+++
draft = false
title = "mq"
description = "消息队列模块"
[menu.main]
parent = "modules"
identifier = "mq"
+++

消息队列模块

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `public static static Message`[`Message`](#dd/dbd/namespacemq_1af3cabb4531068ab1778c4018dadc8b8c)`Message`<p>创建一个消息对象，参见 Message</p>
void            | `public static static HttpHandler`[`HttpHandler`](#dd/dbd/namespacemq_1a654273b519c5b5f53b2b9f00cd6dd0ee)`HttpHandler`<p>创建一个 http 协议处理器对象，参见 HttpHandler</p>
void            | `public static static Handler`[`Handler`](#dd/dbd/namespacemq_1a167237eac82c8242341503f840e154ad)`Handler`<p>创建一个消息处理器对象，传递值内置处理器则直接返回</p>
void            | `public static static Chain`[`Chain`](#dd/dbd/namespacemq_1aeebeb7b614fb3135cc9db79afe09c6fb)`Chain`<p>创建一个消息处理器链处理对象，参见 Chain</p>
void            | `public static static Routing`[`Routing`](#dd/dbd/namespacemq_1a700eeaa284e5a94485b92331137e36b9)`Routing`<p>创建一个消息处理器路由对象，参见 Routing</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Handler            | `await()`<p>创建一个异步等待处理器</p>
Handler            | `nullHandler()`<p>创建一个空处理器对象，次处理对象不做任何处理直接返回</p>
void            | `invoke(Handler hdlr,object v)`<p>使用给定的处理器处理一个消息或对象</p>

## Field Detail

{{% panel theme="default" header="Message" %}}
#### **void** `public static static Message`[`Message`](#dd/dbd/namespacemq_1af3cabb4531068ab1778c4018dadc8b8c)`Message`

创建一个消息对象，参见 Message

{{% /panel %}}
{{% panel theme="default" header="HttpHandler" %}}
#### **void** `public static static HttpHandler`[`HttpHandler`](#dd/dbd/namespacemq_1a654273b519c5b5f53b2b9f00cd6dd0ee)`HttpHandler`

创建一个 http 协议处理器对象，参见 HttpHandler

{{% /panel %}}
{{% panel theme="default" header="Handler" %}}
#### **void** `public static static Handler`[`Handler`](#dd/dbd/namespacemq_1a167237eac82c8242341503f840e154ad)`Handler`

创建一个消息处理器对象，传递值内置处理器则直接返回

#### Parameters
* `hdlr` 内置消息处理器，处理函数，链式处理数组，路由对象:

* Function javascript 函数，将使用此函数进行处理

* Handler 内置处理器，将使用此处理器进行处理

* 链式处理数组，等同于返回 new mq.Chain(hdlr)，参见 Chain

* 路由对象，等同于返回 new mq.Routing(hdlr)，参见 Routing

#### Returns
返回封装了处理函数的处理器

消息处理函数语法如下： 
```js
function func(v){
}
```
 参数 v 为正在处理的消息，返回结果允许有四种:

* Function javascript 函数，将使用此函数进行下一阶段处理

* Handler 内置处理器，将使用此处理器进行下一阶段处理

* 链式处理数组，等同于 new mq.Chain(v)，参见 Chain

* 路由对象，等同于 new mq.Routing(v)，参见 Routing

无返回或者其他的返回结果将结束消息处理。
{{% /panel %}}
{{% panel theme="default" header="Chain" %}}
#### **void** `public static static Chain`[`Chain`](#dd/dbd/namespacemq_1aeebeb7b614fb3135cc9db79afe09c6fb)`Chain`

创建一个消息处理器链处理对象，参见 Chain

{{% /panel %}}
{{% panel theme="default" header="Routing" %}}
#### **void** `public static static Routing`[`Routing`](#dd/dbd/namespacemq_1a700eeaa284e5a94485b92331137e36b9)`Routing`

创建一个消息处理器路由对象，参见 Routing

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="await" %}}
#### **Handler** `await()`

创建一个异步等待处理器

#### Returns
返回创建的处理器

异步等待处理器用于需要异步处理的消息处理模式，示例如下： 
```js
function func(v){
    var await = mq.await();

    call_some_async_func(v1, v2, v3, function() {
            await.end();
        });

    return await;
}
```
 示例是一个 javascript 消息处理函数，当函数返回时，消息处理引擎将等待 await，直到 await.end 被调用，才继续下一阶段的处理。
{{% /panel %}}
{{% panel theme="default" header="nullHandler" %}}
#### **Handler** `nullHandler()`

创建一个空处理器对象，次处理对象不做任何处理直接返回

#### Returns
返回空处理函数
{{% /panel %}}
{{% panel theme="default" header="invoke" %}}
#### **void** `invoke(Handler hdlr,object v)`

使用给定的处理器处理一个消息或对象

#### Parameters
* `hdlr` 指定使用的处理器 

* `v` 指定要处理的消息或对象

不同于处理器的 invoke 方法，此方法将循环调用每个处理器的返回处理器，直到处理器返回 null 为止。
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>