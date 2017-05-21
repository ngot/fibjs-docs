+++
draft = false
title = "coroutine"
description = "并发控制模块"
[menu.main]
parent = "modules"
identifier = "coroutine"
+++

并发控制模块

引用方法：var coroutine = require('coroutine');

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `public static static Lock`[`Lock`](#d6/d05/namespacecoroutine_1a226a62a1d477109cbb28d436dbe23ca2)`Lock`<p>锁对象，参见 Lock</p>
void            | `public static static Semaphore`[`Semaphore`](#d6/d05/namespacecoroutine_1aaac99b6519649dc9212bbbf8edad8479)`Semaphore`<p>信号量对象，参见 Semaphore</p>
void            | `public static static Condition`[`Condition`](#d6/d05/namespacecoroutine_1ad2d4666ecf87c2101743b1b5cf60fb23)`Condition`<p>条件变量对象，参见 Condition</p>
void            | `public static static Event`[`Event`](#d6/d05/namespacecoroutine_1a3c3e442ce88f0a47155c7645ddef2c11)`Event`<p>事件对象，参见 Event</p>
void            | `public static static BlockQueue`[`BlockQueue`](#d6/d05/namespacecoroutine_1a894fd1e509c5ab593a08d0a4a251eaaf)`BlockQueue`<p>阻塞队列对象，参见 BlockQueue</p>
void            | `public static static Worker`[`Worker`](#d6/d05/namespacecoroutine_1ae0587e3c6f5886ac0be4044b0b8c0122)`Worker`<p>独立线程工作对象，参见 Worker</p>
readonly Array            | `public static readonly Array fibers`[`fibers`](#d6/d05/namespacecoroutine_1a07db40c125a0e7c929f7f01ce6479704)`fibers`<p>返回当前正在运行的全部 fiber 数组</p>
Integer            | `public static Integer spareFibers`[`spareFibers`](#d6/d05/namespacecoroutine_1ae47cf3d92af5a5f333659aa613d6d3a0)`spareFibers`<p>查询和设置空闲 Fiber 数量，服务器抖动较大时可适度增加空闲 Fiber 数量。缺省为 256</p>
readonly Integer            | `public static readonly Integer vmid`[`vmid`](#d6/d05/namespacecoroutine_1a1dc6efa83abe2a5c226dfeb39f14186a)`vmid`<p>查询当前 vm 编号</p>
Integer            | `public static Integer loglevel`[`loglevel`](#d6/d05/namespacecoroutine_1ad273c2ae236cbf873603d22e18e9ccd8)`loglevel`<p>修改和查询本 vm 的输出级别，用以过滤输出信息，缺省为 console.NOTSET，全部输出</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Fiber            | `start(Function func,...)`<p>启动一个纤程并返回纤程对象</p>
Array            | `parallel(Array funcs,Integer fibers)`<p>并行执行一组函数，并等待返回</p>
Array            | `parallel(Array datas,Function func,Integer fibers)`<p>并行执行一个函数处理一组数据，并等待返回</p>
Array            | `parallel(Function func,Integer num,Integer fibers)`<p>并行执行一个函数多次，并等待返回</p>
Array            | `parallel(...)`<p>并行执行一组函数，并等待返回</p>
Fiber            | `current()`<p>返回当前纤程</p>
void            | `sleep(Integer ms)`<p>暂停当前纤程指定的时间</p>

## Field Detail

{{% panel theme="default" header="Lock" %}}
#### **void** `public static static Lock`[`Lock`](#d6/d05/namespacecoroutine_1a226a62a1d477109cbb28d436dbe23ca2)`Lock`

锁对象，参见 Lock

{{% /panel %}}
{{% panel theme="default" header="Semaphore" %}}
#### **void** `public static static Semaphore`[`Semaphore`](#d6/d05/namespacecoroutine_1aaac99b6519649dc9212bbbf8edad8479)`Semaphore`

信号量对象，参见 Semaphore

{{% /panel %}}
{{% panel theme="default" header="Condition" %}}
#### **void** `public static static Condition`[`Condition`](#d6/d05/namespacecoroutine_1ad2d4666ecf87c2101743b1b5cf60fb23)`Condition`

条件变量对象，参见 Condition

{{% /panel %}}
{{% panel theme="default" header="Event" %}}
#### **void** `public static static Event`[`Event`](#d6/d05/namespacecoroutine_1a3c3e442ce88f0a47155c7645ddef2c11)`Event`

事件对象，参见 Event

{{% /panel %}}
{{% panel theme="default" header="BlockQueue" %}}
#### **void** `public static static BlockQueue`[`BlockQueue`](#d6/d05/namespacecoroutine_1a894fd1e509c5ab593a08d0a4a251eaaf)`BlockQueue`

阻塞队列对象，参见 BlockQueue

{{% /panel %}}
{{% panel theme="default" header="Worker" %}}
#### **void** `public static static Worker`[`Worker`](#d6/d05/namespacecoroutine_1ae0587e3c6f5886ac0be4044b0b8c0122)`Worker`

独立线程工作对象，参见 Worker

{{% /panel %}}
{{% panel theme="default" header="fibers" %}}
#### **readonly Array** `public static readonly Array fibers`[`fibers`](#d6/d05/namespacecoroutine_1a07db40c125a0e7c929f7f01ce6479704)`fibers`

返回当前正在运行的全部 fiber 数组

{{% /panel %}}
{{% panel theme="default" header="spareFibers" %}}
#### **Integer** `public static Integer spareFibers`[`spareFibers`](#d6/d05/namespacecoroutine_1ae47cf3d92af5a5f333659aa613d6d3a0)`spareFibers`

查询和设置空闲 Fiber 数量，服务器抖动较大时可适度增加空闲 Fiber 数量。缺省为 256

{{% /panel %}}
{{% panel theme="default" header="vmid" %}}
#### **readonly Integer** `public static readonly Integer vmid`[`vmid`](#d6/d05/namespacecoroutine_1a1dc6efa83abe2a5c226dfeb39f14186a)`vmid`

查询当前 vm 编号

{{% /panel %}}
{{% panel theme="default" header="loglevel" %}}
#### **Integer** `public static Integer loglevel`[`loglevel`](#d6/d05/namespacecoroutine_1ad273c2ae236cbf873603d22e18e9ccd8)`loglevel`

修改和查询本 vm 的输出级别，用以过滤输出信息，缺省为 console.NOTSET，全部输出

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="start" %}}
#### **Fiber** `start(Function func,...)`

启动一个纤程并返回纤程对象

#### Parameters
* `func` 制定纤程执行的函数 

* `...` 可变参数序列，此序列会在纤程内传递给函数 

#### Returns
返回纤程对象
{{% /panel %}}
{{% panel theme="default" header="parallel" %}}
#### **Array** `parallel(Array funcs,Integer fibers)`

并行执行一组函数，并等待返回

#### Parameters
* `funcs` 并行执行的函数数组 

* `fibers` 限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber 

#### Returns
返回函数执行结果的数组
{{% /panel %}}
{{% panel theme="default" header="parallel" %}}
#### **Array** `parallel(Array datas,Function func,Integer fibers)`

并行执行一个函数处理一组数据，并等待返回

#### Parameters
* `datas` 并行执行的数据数组 

* `func` 并行执行的函数 

* `fibers` 限制并发 fiber 数量，缺省为 -1，启用与 datas 数量相同 fiber 

#### Returns
返回函数执行结果的数组
{{% /panel %}}
{{% panel theme="default" header="parallel" %}}
#### **Array** `parallel(Function func,Integer num,Integer fibers)`

并行执行一个函数多次，并等待返回

#### Parameters
* `func` 并行执行的函数数 

* `num` 重复任务数量 

* `fibers` 限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber 

#### Returns
返回函数执行结果的数组
{{% /panel %}}
{{% panel theme="default" header="parallel" %}}
#### **Array** `parallel(...)`

并行执行一组函数，并等待返回

#### Parameters
* `...` 一组并行执行的函数 

#### Returns
返回函数执行结果的数组
{{% /panel %}}
{{% panel theme="default" header="current" %}}
#### **Fiber** `current()`

返回当前纤程

#### Returns
当前纤程对象
{{% /panel %}}
{{% panel theme="default" header="sleep" %}}
#### **void** `sleep(Integer ms)`

暂停当前纤程指定的时间

#### Parameters
* `ms` 指定要暂停的时间，以毫秒为单位，缺省为 0，即有空闲立即回恢复运行
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>