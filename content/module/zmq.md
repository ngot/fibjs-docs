+++
draft = false
title = "zmq"
description = "zeroMQ 消息队列模块"
[menu.main]
parent = "modules"
identifier = "zmq"
+++

zeroMQ 消息队列模块

基础模块。提供 zeroMQ 消息队列支撑。 
```js
var zmq = require('zmq');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const PAIR`[`PAIR`](#d0/db9/namespacezmq_1a0cf582143f8ad1d5060ca44f84a196d6)`PAIR`<p></p>
const            | `public const PUB`[`PUB`](#d0/db9/namespacezmq_1a8938ece6c580ed6aeae2179368d599e5)`PUB`<p>发布类型，所发送的消息将会分发给所有订阅者。</p>
const            | `public const SUB`[`SUB`](#d0/db9/namespacezmq_1aabb3b82c6fd99038391fb98dfa76d9e3)`SUB`<p>订阅类型，用于接收 PUB 分发的消息。</p>
const            | `public const REQ`[`REQ`](#d0/db9/namespacezmq_1aa9dd85405c58c45a4238b730436c3240)`REQ`<p>请求类型，此类型的接口只允许交替进行 send 和 recv 消息，每一个接受的消息都是最后一次发送请求的响应。</p>
const            | `public const REP`[`REP`](#d0/db9/namespacezmq_1a145c41f4807ee98b45ec6442c4dc59e5)`REP`<p>响应类型，此类型的接口只允许交替进行 recv 和 send 消息，每一个发送的消息都会作为最后一次接受的请求的回应。</p>
const            | `public const DEALER`[`DEALER`](#d0/db9/namespacezmq_1addc34f8f986bc92870a796ecdb0b9f5e)`DEALER`<p></p>
const            | `public const ROUTER`[`ROUTER`](#d0/db9/namespacezmq_1add22d4fc7c01a63cd774d956e7844a76)`ROUTER`<p></p>
const            | `public const PULL`[`PULL`](#d0/db9/namespacezmq_1a33a170a80fc29d2a1df0e9f1f720dd0a)`PULL`<p>获取消息类型，上游推送的消息将被公平的分发到此类接口。</p>
const            | `public const PUSH`[`PUSH`](#d0/db9/namespacezmq_1a4ca198f5ea2eb66461b17ae36fe3462f)`PUSH`<p>推送类型，推送的消息将均衡发送到下游接口。</p>
const            | `public const XPUB`[`XPUB`](#d0/db9/namespacezmq_1aed994884371c1d20ee306ca462fa611c)`XPUB`<p></p>
const            | `public const XSUB`[`XSUB`](#d0/db9/namespacezmq_1a6094372845cbc9870023139aef124d77)`XSUB`<p></p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
ZmqSocket new            | `Socket()`<p></p>

## Field Detail

{{% panel theme="default" header="PAIR" %}}
#### **const** `public const PAIR`[`PAIR`](#d0/db9/namespacezmq_1a0cf582143f8ad1d5060ca44f84a196d6)`PAIR`

{{% /panel %}}
{{% panel theme="default" header="PUB" %}}
#### **const** `public const PUB`[`PUB`](#d0/db9/namespacezmq_1a8938ece6c580ed6aeae2179368d599e5)`PUB`

发布类型，所发送的消息将会分发给所有订阅者。

{{% /panel %}}
{{% panel theme="default" header="SUB" %}}
#### **const** `public const SUB`[`SUB`](#d0/db9/namespacezmq_1aabb3b82c6fd99038391fb98dfa76d9e3)`SUB`

订阅类型，用于接收 PUB 分发的消息。

{{% /panel %}}
{{% panel theme="default" header="REQ" %}}
#### **const** `public const REQ`[`REQ`](#d0/db9/namespacezmq_1aa9dd85405c58c45a4238b730436c3240)`REQ`

请求类型，此类型的接口只允许交替进行 send 和 recv 消息，每一个接受的消息都是最后一次发送请求的响应。

{{% /panel %}}
{{% panel theme="default" header="REP" %}}
#### **const** `public const REP`[`REP`](#d0/db9/namespacezmq_1a145c41f4807ee98b45ec6442c4dc59e5)`REP`

响应类型，此类型的接口只允许交替进行 recv 和 send 消息，每一个发送的消息都会作为最后一次接受的请求的回应。

{{% /panel %}}
{{% panel theme="default" header="DEALER" %}}
#### **const** `public const DEALER`[`DEALER`](#d0/db9/namespacezmq_1addc34f8f986bc92870a796ecdb0b9f5e)`DEALER`

{{% /panel %}}
{{% panel theme="default" header="ROUTER" %}}
#### **const** `public const ROUTER`[`ROUTER`](#d0/db9/namespacezmq_1add22d4fc7c01a63cd774d956e7844a76)`ROUTER`

{{% /panel %}}
{{% panel theme="default" header="PULL" %}}
#### **const** `public const PULL`[`PULL`](#d0/db9/namespacezmq_1a33a170a80fc29d2a1df0e9f1f720dd0a)`PULL`

获取消息类型，上游推送的消息将被公平的分发到此类接口。

{{% /panel %}}
{{% panel theme="default" header="PUSH" %}}
#### **const** `public const PUSH`[`PUSH`](#d0/db9/namespacezmq_1a4ca198f5ea2eb66461b17ae36fe3462f)`PUSH`

推送类型，推送的消息将均衡发送到下游接口。

{{% /panel %}}
{{% panel theme="default" header="XPUB" %}}
#### **const** `public const XPUB`[`XPUB`](#d0/db9/namespacezmq_1aed994884371c1d20ee306ca462fa611c)`XPUB`

{{% /panel %}}
{{% panel theme="default" header="XSUB" %}}
#### **const** `public const XSUB`[`XSUB`](#d0/db9/namespacezmq_1a6094372845cbc9870023139aef124d77)`XSUB`

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="Socket" %}}
#### **ZmqSocket new** `Socket()`

{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>