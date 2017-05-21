+++
draft = false
title = "Expect"
description = "断言期望对象"
[menu.main]
parent = "objects"
identifier = "Expect"
+++

```js
class Expect : public object
```  

断言期望对象

Expect 对象为 assert 模块内部对象，用于实现 expect 风格断言，创建： 
```js
var test = require("test");
var obj = test.expect(exp);
```
 或者直接引用： 
```js
var expect = require("expect");
var obj = expect(exp);
```
 或者通过 test.setup 配置： 
```js
require("test").setup();
var obj = expect(exp);
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
readonly Expect            | `public readonly Expect to`[`to`](#dd/d7a/classExpect_1a4e211fec62704ffb2e78c235732157e6)`to`<p>无任何修改，仅用于构建语义</p>
readonly Expect            | `public readonly Expect be`[`be`](#dd/d7a/classExpect_1aa2896b5ae99886b5fce68ba05058e18f)`be`<p>无任何修改，仅用于构建语义</p>
readonly Expect            | `public readonly Expect been`[`been`](#dd/d7a/classExpect_1a14299251d029a0cfc8bcef53c98c47f9)`been`<p>无任何修改，仅用于构建语义</p>
readonly Expect            | `public readonly Expect is`[`is`](#dd/d7a/classExpect_1a5c4eaa8bc0a75b697baacf1a761881ba)`is`<p>无任何修改，仅用于构建语义</p>
readonly Expect            | `public readonly Expect that`[`that`](#dd/d7a/classExpect_1a35480010d927aa457b70359fa41d4b33)`that`<p>无任何修改，仅用于构建语义</p>
readonly Expect            | `public readonly Expect and`[`and`](#dd/d7a/classExpect_1a477561addec2b0d9feb3ed003a622aa4)`and`<p>无任何修改，仅用于构建语义</p>
readonly Expect            | `public readonly Expect have`[`have`](#dd/d7a/classExpect_1abf30a5901c5cd7fb1a9f7d35420c07a2)`have`<p>无任何修改，仅用于构建语义</p>
readonly Expect            | `public readonly Expect with`[`with`](#dd/d7a/classExpect_1a8f99dbedc53310d436ff867240460b6d)`with`<p>无任何修改，仅用于构建语义</p>
readonly Expect            | `public readonly Expect at`[`at`](#dd/d7a/classExpect_1af1a9af111c7d75aea76bae7a8127c55e)`at`<p>无任何修改，仅用于构建语义</p>
readonly Expect            | `public readonly Expect of`[`of`](#dd/d7a/classExpect_1a87b9425fa84dadc6b008cbff4988ec63)`of`<p>无任何修改，仅用于构建语义</p>
readonly Expect            | `public readonly Expect same`[`same`](#dd/d7a/classExpect_1a26edc025931583875ab49d56077d59bd)`same`<p>无任何修改，仅用于构建语义</p>
readonly Expect            | `public readonly Expect not`[`not`](#dd/d7a/classExpect_1aa18a68b7a171f5e222cb7da0f7978414)`not`<p>取反当前比对</p>
readonly Expect            | `public readonly Expect deep`[`deep`](#dd/d7a/classExpect_1a3035232cdf5cd2c9c9773219aed627b1)`deep`<p>标记当前比对为深度比较</p>
readonly Boolean            | `public readonly Boolean ok`[`ok`](#dd/d7a/classExpect_1a883134539d614088308b32e8ec3e4782)`ok`<p>断言给定数值为真，断言失败则抛出错误</p>
readonly Boolean            | `public readonly Boolean true`[`true`](#dd/d7a/classExpect_1aaad4e98d0e6f706cf8c331e89f4a1542)`true`<p>断言给定数值为 Boolean 类型 true，断言失败则抛出错误</p>
readonly Boolean            | `public readonly Boolean false`[`false`](#dd/d7a/classExpect_1ae56ec0fe55dba24bb29e995412f23aa9)`false`<p>断言给定数值为 Boolean 类型 false，断言失败则抛出错误</p>
readonly Boolean            | `public readonly Boolean null`[`null`](#dd/d7a/classExpect_1a748b25298cfcd7b14ae225fd293e078d)`null`<p>断言给定数值为 null，断言失败则抛出错误</p>
readonly Boolean            | `public readonly Boolean undefined`[`undefined`](#dd/d7a/classExpect_1a09c2d66511679a6a0db4fde9c990b417)`undefined`<p>断言给定数值为 undefined，断言失败则抛出错误</p>
readonly Boolean            | `public readonly Boolean function`[`function`](#dd/d7a/classExpect_1a56fee8d1a1afca7efde4840df6502913)`function`<p>断言给定数值为函数，断言失败则抛出错误</p>
readonly Boolean            | `public readonly Boolean object`[`object`](#dd/d7a/classExpect_1a6adad9cf5d338a5b75b1e4d1b665cdc8)`object`<p>断言给定数值为对象，断言失败则抛出错误</p>
readonly Boolean            | `public readonly Boolean array`[`array`](#dd/d7a/classExpect_1acde4d7cd6ad6d48edd984bf1c6849d1d)`array`<p>断言给定数值为数组，断言失败则抛出错误</p>
readonly Boolean            | `public readonly Boolean string`[`string`](#dd/d7a/classExpect_1a82d5903aca490a3a6c416b138cadc2f0)`string`<p>断言给定数值为字符串，断言失败则抛出错误</p>
readonly Boolean            | `public readonly Boolean number`[`number`](#dd/d7a/classExpect_1a72b6c7f69edf1e014f932f44cc2c44d0)`number`<p>断言给定数值为数字，断言失败则抛出错误</p>
readonly Boolean            | `public readonly Boolean boolean`[`boolean`](#dd/d7a/classExpect_1ad9fea5eb5bacb3840bedd40451df047d)`boolean`<p>断言给定数值为 Boolean 类型，断言失败则抛出错误</p>
readonly Boolean            | `public readonly Boolean exist`[`exist`](#dd/d7a/classExpect_1ac4f92d399ab7f74970d0bbc709fded48)`exist`<p>断言给定数值存在，断言失败则抛出错误</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `a(String type)`<p>断言给定数值为制定类型，断言失败则抛出错误</p>
void            | `an(String type)`<p>断言给定数值为制定类型，断言失败则抛出错误</p>
void            | `equal(Value expected)`<p>断言给定数值严格等于预期的数值，若标记 deep 则深度比较，断言失败则抛出错误</p>
void            | `eql(Value expected)`<p>断言给定数值严格等于预期的数值，若标记 deep 则深度比较，断言失败则抛出错误</p>
void            | `above(Value expected)`<p>断言给定数值大于预期的数值，断言失败则抛出错误</p>
void            | `greaterThan(Value expected)`<p>断言给定数值大于预期的数值，断言失败则抛出错误</p>
void            | `least(Value expected)`<p>断言给定数值最小为预期的数值，断言失败则抛出错误</p>
void            | `below(Value expected)`<p>断言给定数值小于预期的数值，断言失败则抛出错误</p>
void            | `lessThan(Value expected)`<p>断言给定数值小于预期的数值，断言失败则抛出错误</p>
void            | `most(Value expected)`<p>断言给定数值最大为预期的数值，断言失败则抛出错误</p>
void            | `property(Value prop)`<p>断言给定数值包含指定属性，标记 deep 则深度比较，断言失败则抛出错误</p>
void            | `property(Value prop,Value value)`<p>断言给定数值指定属性的值为给定值，标记 deep 则深度比较，断言失败则抛出错误</p>
void            | `closeTo(Value expected,Value delta)`<p>测试数值近似等于预期值，断言失败则抛出错误</p>
void            | `dispose()`<p>强制回收对象，调用此方法后，对象资源将立即释放</p>
Boolean            | `equals(object expected)`<p>比较当前对象与给定的对象是否相等</p>
String            | `toString()`<p>返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现</p>
Value            | `toJSON(String key)`<p>返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合</p>
Value            | `valueOf()`<p>返回对象本身的数值</p>

## Field Detail

{{% panel theme="default" header="to" %}}
#### **readonly Expect** `public readonly Expect to`[`to`](#dd/d7a/classExpect_1a4e211fec62704ffb2e78c235732157e6)`to`

无任何修改，仅用于构建语义

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="be" %}}
#### **readonly Expect** `public readonly Expect be`[`be`](#dd/d7a/classExpect_1aa2896b5ae99886b5fce68ba05058e18f)`be`

无任何修改，仅用于构建语义

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="been" %}}
#### **readonly Expect** `public readonly Expect been`[`been`](#dd/d7a/classExpect_1a14299251d029a0cfc8bcef53c98c47f9)`been`

无任何修改，仅用于构建语义

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="is" %}}
#### **readonly Expect** `public readonly Expect is`[`is`](#dd/d7a/classExpect_1a5c4eaa8bc0a75b697baacf1a761881ba)`is`

无任何修改，仅用于构建语义

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="that" %}}
#### **readonly Expect** `public readonly Expect that`[`that`](#dd/d7a/classExpect_1a35480010d927aa457b70359fa41d4b33)`that`

无任何修改，仅用于构建语义

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="and" %}}
#### **readonly Expect** `public readonly Expect and`[`and`](#dd/d7a/classExpect_1a477561addec2b0d9feb3ed003a622aa4)`and`

无任何修改，仅用于构建语义

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="have" %}}
#### **readonly Expect** `public readonly Expect have`[`have`](#dd/d7a/classExpect_1abf30a5901c5cd7fb1a9f7d35420c07a2)`have`

无任何修改，仅用于构建语义

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="with" %}}
#### **readonly Expect** `public readonly Expect with`[`with`](#dd/d7a/classExpect_1a8f99dbedc53310d436ff867240460b6d)`with`

无任何修改，仅用于构建语义

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="at" %}}
#### **readonly Expect** `public readonly Expect at`[`at`](#dd/d7a/classExpect_1af1a9af111c7d75aea76bae7a8127c55e)`at`

无任何修改，仅用于构建语义

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="of" %}}
#### **readonly Expect** `public readonly Expect of`[`of`](#dd/d7a/classExpect_1a87b9425fa84dadc6b008cbff4988ec63)`of`

无任何修改，仅用于构建语义

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="same" %}}
#### **readonly Expect** `public readonly Expect same`[`same`](#dd/d7a/classExpect_1a26edc025931583875ab49d56077d59bd)`same`

无任何修改，仅用于构建语义

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="not" %}}
#### **readonly Expect** `public readonly Expect not`[`not`](#dd/d7a/classExpect_1aa18a68b7a171f5e222cb7da0f7978414)`not`

取反当前比对

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="deep" %}}
#### **readonly Expect** `public readonly Expect deep`[`deep`](#dd/d7a/classExpect_1a3035232cdf5cd2c9c9773219aed627b1)`deep`

标记当前比对为深度比较

#### Returns
返回对象本身
{{% /panel %}}
{{% panel theme="default" header="ok" %}}
#### **readonly Boolean** `public readonly Boolean ok`[`ok`](#dd/d7a/classExpect_1a883134539d614088308b32e8ec3e4782)`ok`

断言给定数值为真，断言失败则抛出错误

{{% /panel %}}
{{% panel theme="default" header="true" %}}
#### **readonly Boolean** `public readonly Boolean true`[`true`](#dd/d7a/classExpect_1aaad4e98d0e6f706cf8c331e89f4a1542)`true`

断言给定数值为 Boolean 类型 true，断言失败则抛出错误

{{% /panel %}}
{{% panel theme="default" header="false" %}}
#### **readonly Boolean** `public readonly Boolean false`[`false`](#dd/d7a/classExpect_1ae56ec0fe55dba24bb29e995412f23aa9)`false`

断言给定数值为 Boolean 类型 false，断言失败则抛出错误

{{% /panel %}}
{{% panel theme="default" header="null" %}}
#### **readonly Boolean** `public readonly Boolean null`[`null`](#dd/d7a/classExpect_1a748b25298cfcd7b14ae225fd293e078d)`null`

断言给定数值为 null，断言失败则抛出错误

{{% /panel %}}
{{% panel theme="default" header="undefined" %}}
#### **readonly Boolean** `public readonly Boolean undefined`[`undefined`](#dd/d7a/classExpect_1a09c2d66511679a6a0db4fde9c990b417)`undefined`

断言给定数值为 undefined，断言失败则抛出错误

{{% /panel %}}
{{% panel theme="default" header="function" %}}
#### **readonly Boolean** `public readonly Boolean function`[`function`](#dd/d7a/classExpect_1a56fee8d1a1afca7efde4840df6502913)`function`

断言给定数值为函数，断言失败则抛出错误

{{% /panel %}}
{{% panel theme="default" header="object" %}}
#### **readonly Boolean** `public readonly Boolean object`[`object`](#dd/d7a/classExpect_1a6adad9cf5d338a5b75b1e4d1b665cdc8)`object`

断言给定数值为对象，断言失败则抛出错误

{{% /panel %}}
{{% panel theme="default" header="array" %}}
#### **readonly Boolean** `public readonly Boolean array`[`array`](#dd/d7a/classExpect_1acde4d7cd6ad6d48edd984bf1c6849d1d)`array`

断言给定数值为数组，断言失败则抛出错误

{{% /panel %}}
{{% panel theme="default" header="string" %}}
#### **readonly Boolean** `public readonly Boolean string`[`string`](#dd/d7a/classExpect_1a82d5903aca490a3a6c416b138cadc2f0)`string`

断言给定数值为字符串，断言失败则抛出错误

{{% /panel %}}
{{% panel theme="default" header="number" %}}
#### **readonly Boolean** `public readonly Boolean number`[`number`](#dd/d7a/classExpect_1a72b6c7f69edf1e014f932f44cc2c44d0)`number`

断言给定数值为数字，断言失败则抛出错误

{{% /panel %}}
{{% panel theme="default" header="boolean" %}}
#### **readonly Boolean** `public readonly Boolean boolean`[`boolean`](#dd/d7a/classExpect_1ad9fea5eb5bacb3840bedd40451df047d)`boolean`

断言给定数值为 Boolean 类型，断言失败则抛出错误

{{% /panel %}}
{{% panel theme="default" header="exist" %}}
#### **readonly Boolean** `public readonly Boolean exist`[`exist`](#dd/d7a/classExpect_1ac4f92d399ab7f74970d0bbc709fded48)`exist`

断言给定数值存在，断言失败则抛出错误

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="a" %}}
#### **void** `a(String type)`

断言给定数值为制定类型，断言失败则抛出错误

#### Parameters
* `type` 指定断言的数据类型字符串
{{% /panel %}}
{{% panel theme="default" header="an" %}}
#### **void** `an(String type)`

断言给定数值为制定类型，断言失败则抛出错误

#### Parameters
* `type` 指定断言的数据类型字符串
{{% /panel %}}
{{% panel theme="default" header="equal" %}}
#### **void** `equal(Value expected)`

断言给定数值严格等于预期的数值，若标记 deep 则深度比较，断言失败则抛出错误

#### Parameters
* `expected` 预期的数值
{{% /panel %}}
{{% panel theme="default" header="eql" %}}
#### **void** `eql(Value expected)`

断言给定数值严格等于预期的数值，若标记 deep 则深度比较，断言失败则抛出错误

#### Parameters
* `expected` 预期的数值
{{% /panel %}}
{{% panel theme="default" header="above" %}}
#### **void** `above(Value expected)`

断言给定数值大于预期的数值，断言失败则抛出错误

#### Parameters
* `expected` 预期的数值
{{% /panel %}}
{{% panel theme="default" header="greaterThan" %}}
#### **void** `greaterThan(Value expected)`

断言给定数值大于预期的数值，断言失败则抛出错误

#### Parameters
* `expected` 预期的数值
{{% /panel %}}
{{% panel theme="default" header="least" %}}
#### **void** `least(Value expected)`

断言给定数值最小为预期的数值，断言失败则抛出错误

#### Parameters
* `expected` 预期的数值
{{% /panel %}}
{{% panel theme="default" header="below" %}}
#### **void** `below(Value expected)`

断言给定数值小于预期的数值，断言失败则抛出错误

#### Parameters
* `expected` 预期的数值
{{% /panel %}}
{{% panel theme="default" header="lessThan" %}}
#### **void** `lessThan(Value expected)`

断言给定数值小于预期的数值，断言失败则抛出错误

#### Parameters
* `expected` 预期的数值
{{% /panel %}}
{{% panel theme="default" header="most" %}}
#### **void** `most(Value expected)`

断言给定数值最大为预期的数值，断言失败则抛出错误

#### Parameters
* `expected` 预期的数值
{{% /panel %}}
{{% panel theme="default" header="property" %}}
#### **void** `property(Value prop)`

断言给定数值包含指定属性，标记 deep 则深度比较，断言失败则抛出错误

#### Parameters
* `prop` 要测试的属性
{{% /panel %}}
{{% panel theme="default" header="property" %}}
#### **void** `property(Value prop,Value value)`

断言给定数值指定属性的值为给定值，标记 deep 则深度比较，断言失败则抛出错误

#### Parameters
* `prop` 要测试的属性 

* `value` 给定的值
{{% /panel %}}
{{% panel theme="default" header="closeTo" %}}
#### **void** `closeTo(Value expected,Value delta)`

测试数值近似等于预期值，断言失败则抛出错误

#### Parameters
* `expected` 预期的数值 

* `delta` 近似的小数精度
{{% /panel %}}
{{% panel theme="default" header="dispose" %}}
#### **void** `dispose()`

强制回收对象，调用此方法后，对象资源将立即释放

{{% /panel %}}
{{% panel theme="default" header="equals" %}}
#### **Boolean** `equals(object expected)`

比较当前对象与给定的对象是否相等

#### Parameters
* `expected` 制定比较的目标对象 

#### Returns
返回对象比较的结果
{{% /panel %}}
{{% panel theme="default" header="toString" %}}
#### **String** `toString()`

返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现

#### Returns
返回对象的字符串表示
{{% /panel %}}
{{% panel theme="default" header="toJSON" %}}
#### **Value** `toJSON(String key)`

返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合

#### Parameters
* `key` 未使用 

#### Returns
返回包含可 JSON 序列化的值
{{% /panel %}}
{{% panel theme="default" header="valueOf" %}}
#### **Value** `valueOf()`

返回对象本身的数值

#### Returns
返回对象本身的数值
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>