+++
draft = false
title = "assert"
description = "断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出"
[menu.main]
parent = "modules"
identifier = "assert"
+++

断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出

引用方法： 
```js
var assert = require('assert');
```
 或者通过 test 模块引用： 
```js
var test = require('test');
var assert = test.assert;
```
 或者通过 test.setup 配置： 
```js
require("test").setup();
```

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `Function(Value actual,String msg)`<p>测试数值为真，为假则断言失败</p>
void            | `ok(Value actual,String msg)`<p>测试数值为真，为假则断言失败</p>
void            | `notOk(Value actual,String msg)`<p>测试数值为假，为真则断言失败</p>
void            | `equal(Value actual,Value expected,String msg)`<p>测试数值等于预期值，不相等则断言失败</p>
void            | `notEqual(Value actual,Value expected,String msg)`<p>测试数值不等于预期值，相等则断言失败</p>
void            | `strictEqual(Value actual,Value expected,String msg)`<p>测试数值严格等于预期值，不相等则断言失败</p>
void            | `notStrictEqual(Value actual,Value expected,String msg)`<p>测试数值不严格等于预期值，相等则断言失败</p>
void            | `deepEqual(Value actual,Value expected,String msg)`<p>测试数值深度等于预期值，不相等则断言失败</p>
void            | `notDeepEqual(Value actual,Value expected,String msg)`<p>测试数值不深度等于预期值，相等则断言失败</p>
void            | `closeTo(Value actual,Value expected,Value delta,String msg)`<p>测试数值近似等于预期值，否则断言失败</p>
void            | `notCloseTo(Value actual,Value expected,Value delta,String msg)`<p>测试数值不近似等于预期值，否则断言失败</p>
void            | `lessThan(Value actual,Value expected,String msg)`<p>测试数值小于预期值，大于或等于则断言失败</p>
void            | `notLessThan(Value actual,Value expected,String msg)`<p>测试数值不小于预期值，小于则断言失败</p>
void            | `greaterThan(Value actual,Value expected,String msg)`<p>测试数值大于预期值，小于或等于则断言失败</p>
void            | `notGreaterThan(Value actual,Value expected,String msg)`<p>测试数值不大于预期值，大于则断言失败</p>
void            | `exist(Value actual,String msg)`<p>测试变量存在，为假则断言失败</p>
void            | `notExist(Value actual,String msg)`<p>测试变量不存在，为真则断言失败</p>
void            | `isTrue(Value actual,String msg)`<p>测试数值为布尔值真，否则断言失败</p>
void            | `isNotTrue(Value actual,String msg)`<p>测试数值不为布尔值真，否则断言失败</p>
void            | `isFalse(Value actual,String msg)`<p>测试数值为布尔值假，否则断言失败</p>
void            | `isNotFalse(Value actual,String msg)`<p>测试数值不为布尔值假，否则断言失败</p>
void            | `isNull(Value actual,String msg)`<p>测试数值为 Null，否则断言失败</p>
void            | `isNotNull(Value actual,String msg)`<p>测试数值不为 Null，否则断言失败</p>
void            | `isUndefined(Value actual,String msg)`<p>测试数值为 undefined，否则断言失败</p>
void            | `isDefined(Value actual,String msg)`<p>测试数值不为 undefined，否则断言失败</p>
void            | `isFunction(Value actual,String msg)`<p>测试数值为函数，否则断言失败</p>
void            | `isNotFunction(Value actual,String msg)`<p>测试数值不为函数，否则断言失败</p>
void            | `isObject(Value actual,String msg)`<p>测试数值为对象，否则断言失败</p>
void            | `isNotObject(Value actual,String msg)`<p>测试数值不为对象，否则断言失败</p>
void            | `isArray(Value actual,String msg)`<p>测试数值为数组，否则断言失败</p>
void            | `isNotArray(Value actual,String msg)`<p>测试数值不为数组，否则断言失败</p>
void            | `isString(Value actual,String msg)`<p>测试数值为字符串，否则断言失败</p>
void            | `isNotString(Value actual,String msg)`<p>测试数值不为字符串，否则断言失败</p>
void            | `isNumber(Value actual,String msg)`<p>测试数值为数字，否则断言失败</p>
void            | `isNotNumber(Value actual,String msg)`<p>测试数值不为数字，否则断言失败</p>
void            | `isBoolean(Value actual,String msg)`<p>测试数值为布尔，否则断言失败</p>
void            | `isNotBoolean(Value actual,String msg)`<p>测试数值不为布尔，否则断言失败</p>
void            | `typeOf(Value actual,String type,String msg)`<p>测试数值为给定类型，否则断言失败</p>
void            | `notTypeOf(Value actual,String type,String msg)`<p>测试数值不为给定类型，否则断言失败</p>
void            | `property(Value object,Value prop,String msg)`<p>测试对象中包含指定属性，否则断言失败</p>
void            | `notProperty(Value object,Value prop,String msg)`<p>测试对象中不包含指定属性，否则断言失败</p>
void            | `deepProperty(Value object,Value prop,String msg)`<p>深度测试对象中包含指定属性，否则断言失败</p>
void            | `notDeepProperty(Value object,Value prop,String msg)`<p>深度测试对象中不包含指定属性，否则断言失败</p>
void            | `propertyVal(Value object,Value prop,Value value,String msg)`<p>测试对象中指定属性的值为给定值，否则断言失败</p>
void            | `propertyNotVal(Value object,Value prop,Value value,String msg)`<p>测试对象中指定属性的值不为给定值，否则断言失败</p>
void            | `deepPropertyVal(Value object,Value prop,Value value,String msg)`<p>深度测试对象中指定属性的值为给定值，否则断言失败</p>
void            | `deepPropertyNotVal(Value object,Value prop,Value value,String msg)`<p>深度测试对象中指定属性的值不为给定值，否则断言失败</p>
void            | `throws(Function block,String msg)`<p>测试给定的代码会抛出错误，未抛出则断言失败</p>
void            | `doesNotThrow(Function block,String msg)`<p>测试给定的代码不会抛出错误，抛出则断言失败</p>

## Method Detail

{{% panel theme="default" header="Function" %}}
#### **void** `Function(Value actual,String msg)`

测试数值为真，为假则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="ok" %}}
#### **void** `ok(Value actual,String msg)`

测试数值为真，为假则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="notOk" %}}
#### **void** `notOk(Value actual,String msg)`

测试数值为假，为真则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="equal" %}}
#### **void** `equal(Value actual,Value expected,String msg)`

测试数值等于预期值，不相等则断言失败

#### Parameters
* `actual` 要测试的数值 

* `expected` 预期的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="notEqual" %}}
#### **void** `notEqual(Value actual,Value expected,String msg)`

测试数值不等于预期值，相等则断言失败

#### Parameters
* `actual` 要测试的数值 

* `expected` 预期的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="strictEqual" %}}
#### **void** `strictEqual(Value actual,Value expected,String msg)`

测试数值严格等于预期值，不相等则断言失败

#### Parameters
* `actual` 要测试的数值 

* `expected` 预期的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="notStrictEqual" %}}
#### **void** `notStrictEqual(Value actual,Value expected,String msg)`

测试数值不严格等于预期值，相等则断言失败

#### Parameters
* `actual` 要测试的数值 

* `expected` 预期的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="deepEqual" %}}
#### **void** `deepEqual(Value actual,Value expected,String msg)`

测试数值深度等于预期值，不相等则断言失败

#### Parameters
* `actual` 要测试的数值 

* `expected` 预期的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="notDeepEqual" %}}
#### **void** `notDeepEqual(Value actual,Value expected,String msg)`

测试数值不深度等于预期值，相等则断言失败

#### Parameters
* `actual` 要测试的数值 

* `expected` 预期的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="closeTo" %}}
#### **void** `closeTo(Value actual,Value expected,Value delta,String msg)`

测试数值近似等于预期值，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `expected` 预期的数值 

* `delta` 近似的小数精度 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="notCloseTo" %}}
#### **void** `notCloseTo(Value actual,Value expected,Value delta,String msg)`

测试数值不近似等于预期值，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `expected` 预期的数值 

* `delta` 近似的小数精度 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="lessThan" %}}
#### **void** `lessThan(Value actual,Value expected,String msg)`

测试数值小于预期值，大于或等于则断言失败

#### Parameters
* `actual` 要测试的数值 

* `expected` 预期的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="notLessThan" %}}
#### **void** `notLessThan(Value actual,Value expected,String msg)`

测试数值不小于预期值，小于则断言失败

#### Parameters
* `actual` 要测试的数值 

* `expected` 预期的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="greaterThan" %}}
#### **void** `greaterThan(Value actual,Value expected,String msg)`

测试数值大于预期值，小于或等于则断言失败

#### Parameters
* `actual` 要测试的数值 

* `expected` 预期的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="notGreaterThan" %}}
#### **void** `notGreaterThan(Value actual,Value expected,String msg)`

测试数值不大于预期值，大于则断言失败

#### Parameters
* `actual` 要测试的数值 

* `expected` 预期的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="exist" %}}
#### **void** `exist(Value actual,String msg)`

测试变量存在，为假则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="notExist" %}}
#### **void** `notExist(Value actual,String msg)`

测试变量不存在，为真则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isTrue" %}}
#### **void** `isTrue(Value actual,String msg)`

测试数值为布尔值真，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isNotTrue" %}}
#### **void** `isNotTrue(Value actual,String msg)`

测试数值不为布尔值真，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isFalse" %}}
#### **void** `isFalse(Value actual,String msg)`

测试数值为布尔值假，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isNotFalse" %}}
#### **void** `isNotFalse(Value actual,String msg)`

测试数值不为布尔值假，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isNull" %}}
#### **void** `isNull(Value actual,String msg)`

测试数值为 Null，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isNotNull" %}}
#### **void** `isNotNull(Value actual,String msg)`

测试数值不为 Null，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isUndefined" %}}
#### **void** `isUndefined(Value actual,String msg)`

测试数值为 undefined，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isDefined" %}}
#### **void** `isDefined(Value actual,String msg)`

测试数值不为 undefined，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isFunction" %}}
#### **void** `isFunction(Value actual,String msg)`

测试数值为函数，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isNotFunction" %}}
#### **void** `isNotFunction(Value actual,String msg)`

测试数值不为函数，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isObject" %}}
#### **void** `isObject(Value actual,String msg)`

测试数值为对象，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isNotObject" %}}
#### **void** `isNotObject(Value actual,String msg)`

测试数值不为对象，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isArray" %}}
#### **void** `isArray(Value actual,String msg)`

测试数值为数组，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isNotArray" %}}
#### **void** `isNotArray(Value actual,String msg)`

测试数值不为数组，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isString" %}}
#### **void** `isString(Value actual,String msg)`

测试数值为字符串，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isNotString" %}}
#### **void** `isNotString(Value actual,String msg)`

测试数值不为字符串，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isNumber" %}}
#### **void** `isNumber(Value actual,String msg)`

测试数值为数字，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isNotNumber" %}}
#### **void** `isNotNumber(Value actual,String msg)`

测试数值不为数字，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isBoolean" %}}
#### **void** `isBoolean(Value actual,String msg)`

测试数值为布尔，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="isNotBoolean" %}}
#### **void** `isNotBoolean(Value actual,String msg)`

测试数值不为布尔，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="typeOf" %}}
#### **void** `typeOf(Value actual,String type,String msg)`

测试数值为给定类型，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `type` 指定的类型 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="notTypeOf" %}}
#### **void** `notTypeOf(Value actual,String type,String msg)`

测试数值不为给定类型，否则断言失败

#### Parameters
* `actual` 要测试的数值 

* `type` 指定的类型 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="property" %}}
#### **void** `property(Value object,Value prop,String msg)`

测试对象中包含指定属性，否则断言失败

#### Parameters
* `object` 要测试的对象 

* `prop` 要测试的属性 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="notProperty" %}}
#### **void** `notProperty(Value object,Value prop,String msg)`

测试对象中不包含指定属性，否则断言失败

#### Parameters
* `object` 要测试的对象 

* `prop` 要测试的属性 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="deepProperty" %}}
#### **void** `deepProperty(Value object,Value prop,String msg)`

深度测试对象中包含指定属性，否则断言失败

#### Parameters
* `object` 要测试的对象 

* `prop` 要测试的属性，以“.”分割 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="notDeepProperty" %}}
#### **void** `notDeepProperty(Value object,Value prop,String msg)`

深度测试对象中不包含指定属性，否则断言失败

#### Parameters
* `object` 要测试的对象 

* `prop` 要测试的属性，以“.”分割 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="propertyVal" %}}
#### **void** `propertyVal(Value object,Value prop,Value value,String msg)`

测试对象中指定属性的值为给定值，否则断言失败

#### Parameters
* `object` 要测试的对象 

* `prop` 要测试的属性 

* `value` 给定的值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="propertyNotVal" %}}
#### **void** `propertyNotVal(Value object,Value prop,Value value,String msg)`

测试对象中指定属性的值不为给定值，否则断言失败

#### Parameters
* `object` 要测试的对象 

* `prop` 要测试的属性 

* `value` 给定的值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="deepPropertyVal" %}}
#### **void** `deepPropertyVal(Value object,Value prop,Value value,String msg)`

深度测试对象中指定属性的值为给定值，否则断言失败

#### Parameters
* `object` 要测试的对象 

* `prop` 要测试的属性，以“.”分割 

* `value` 给定的值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="deepPropertyNotVal" %}}
#### **void** `deepPropertyNotVal(Value object,Value prop,Value value,String msg)`

深度测试对象中指定属性的值不为给定值，否则断言失败

#### Parameters
* `object` 要测试的对象 

* `prop` 要测试的属性，以“.”分割 

* `value` 给定的值 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="throws" %}}
#### **void** `throws(Function block,String msg)`

测试给定的代码会抛出错误，未抛出则断言失败

#### Parameters
* `block` 指定测试的代码，以函数形式给出 

* `msg` 断言失败时的提示信息
{{% /panel %}}
{{% panel theme="default" header="doesNotThrow" %}}
#### **void** `doesNotThrow(Function block,String msg)`

测试给定的代码不会抛出错误，抛出则断言失败

#### Parameters
* `block` 指定测试的代码，以函数形式给出 

* `msg` 断言失败时的提示信息
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>