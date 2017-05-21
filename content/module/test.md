+++
draft = false
title = "test"
description = "测试套件模块，用以定义管理测试套件"
[menu.main]
parent = "modules"
identifier = "test"
+++

测试套件模块，用以定义管理测试套件

引用方法： 
```js
var test = require('test');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const BDD`[`BDD`](#df/d04/namespacetest_1ae7fde33ef252f535d81d8ecef132e1d4)`BDD`<p>定义 BDD(Behavior Drive Development) 测试环境，支持 describe, xdescribe, it, xit, before, after, beforeEach 和 afterEach，同时初始化 assert 和expect</p>
const            | `public const TDD`[`TDD`](#df/d04/namespacetest_1a6ed0e472953388d47f141b5419e76174)`TDD`<p>定义 TDD(Test Drive Development) 测试环境，支持 suite, xsuite, test, xtest, setup, teardown, suiteSetup 和 suiteTeardown，同时初始化 assert 和expect</p>
void            | `public static static assert`[`assert`](#df/d04/namespacetest_1a493023a30a7d385db92bbc7b81cb8aec)`assert`<p>断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出</p>
Integer            | `public static Integer slow`[`slow`](#df/d04/namespacetest_1a09913ac8583af372187ee252951103c4)`slow`<p>设置和查询慢速测试警告阀值，以 ms 为单位，缺省为 75</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `describe(String name,Function block)`<p>定义一个测试模块，可嵌套定义</p>
void            | `xdescribe(String name,Function block)`<p>停止测试的模块定义</p>
void            | `it(String name,Function block)`<p>定义一个测试项目</p>
void            | `xit(String name,Function block)`<p>禁止测试的项目定义</p>
void            | `before(Function func)`<p>定义当前测试模块进入事件</p>
void            | `after(Function func)`<p>定义当前测试模块退出事件</p>
void            | `beforeEach(Function func)`<p>定义当前测试模块测试项目进入事件</p>
void            | `afterEach(Function func)`<p>定义当前测试模块测试项目退出事件</p>
Integer            | `run(Integer loglevel)`<p>开始执行定义的测试模块</p>
Expect            | `expect(Value actual,String msg)`<p>expect 语法测试引擎</p>
void            | `setup(Integer mode)`<p>初始化当前脚本的测试环境，将 test 模块方法复制为当前脚本全局变量</p>

## Field Detail

{{% panel theme="default" header="BDD" %}}
#### **const** `public const BDD`[`BDD`](#df/d04/namespacetest_1ae7fde33ef252f535d81d8ecef132e1d4)`BDD`

定义 BDD(Behavior Drive Development) 测试环境，支持 describe, xdescribe, it, xit, before, after, beforeEach 和 afterEach，同时初始化 assert 和expect

{{% /panel %}}
{{% panel theme="default" header="TDD" %}}
#### **const** `public const TDD`[`TDD`](#df/d04/namespacetest_1a6ed0e472953388d47f141b5419e76174)`TDD`

定义 TDD(Test Drive Development) 测试环境，支持 suite, xsuite, test, xtest, setup, teardown, suiteSetup 和 suiteTeardown，同时初始化 assert 和expect

{{% /panel %}}
{{% panel theme="default" header="assert" %}}
#### **void** `public static static assert`[`assert`](#df/d04/namespacetest_1a493023a30a7d385db92bbc7b81cb8aec)`assert`

断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出

{{% /panel %}}
{{% panel theme="default" header="slow" %}}
#### **Integer** `public static Integer slow`[`slow`](#df/d04/namespacetest_1a09913ac8583af372187ee252951103c4)`slow`

设置和查询慢速测试警告阀值，以 ms 为单位，缺省为 75

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="describe" %}}
#### **void** `describe(String name,Function block)`

定义一个测试模块，可嵌套定义

#### Parameters
* `name` 定义模块名称 

* `block` 模块初始化代码
{{% /panel %}}
{{% panel theme="default" header="xdescribe" %}}
#### **void** `xdescribe(String name,Function block)`

停止测试的模块定义

#### Parameters
* `name` 定义模块名称 

* `block` 模块初始化代码
{{% /panel %}}
{{% panel theme="default" header="it" %}}
#### **void** `it(String name,Function block)`

定义一个测试项目

#### Parameters
* `name` 定义项目名称 

* `block` 测试内容
{{% /panel %}}
{{% panel theme="default" header="xit" %}}
#### **void** `xit(String name,Function block)`

禁止测试的项目定义

#### Parameters
* `name` 定义项目名称 

* `block` 测试内容
{{% /panel %}}
{{% panel theme="default" header="before" %}}
#### **void** `before(Function func)`

定义当前测试模块进入事件

#### Parameters
* `func` 事件函数
{{% /panel %}}
{{% panel theme="default" header="after" %}}
#### **void** `after(Function func)`

定义当前测试模块退出事件

#### Parameters
* `func` 事件函数
{{% /panel %}}
{{% panel theme="default" header="beforeEach" %}}
#### **void** `beforeEach(Function func)`

定义当前测试模块测试项目进入事件

#### Parameters
* `func` 事件函数
{{% /panel %}}
{{% panel theme="default" header="afterEach" %}}
#### **void** `afterEach(Function func)`

定义当前测试模块测试项目退出事件

#### Parameters
* `func` 事件函数
{{% /panel %}}
{{% panel theme="default" header="run" %}}
#### **Integer** `run(Integer loglevel)`

开始执行定义的测试模块

#### Parameters
* `loglevel` 指定进行测试时的日志输出级别，ERROR 时，项目报错信息集中在报告后显示，低于 ERROR 时，输出信息随时显示，高于 ERROR 时，只显示报告 

#### Returns
返回测试用例统计结果，正确则返回 0，错误则返回错误个数
{{% /panel %}}
{{% panel theme="default" header="expect" %}}
#### **Expect** `expect(Value actual,String msg)`

expect 语法测试引擎

#### Parameters
* `actual` 指定要测试的数值 

* `msg` 断言失败时的提示信息 

#### Returns
返回 Expect 对象用以链式调用
{{% /panel %}}
{{% panel theme="default" header="setup" %}}
#### **void** `setup(Integer mode)`

初始化当前脚本的测试环境，将 test 模块方法复制为当前脚本全局变量

#### Parameters
* `mode` 指定初始化的模式，缺省为 BDD
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>