+++
draft = false
title = "util"
description = "常用工具模块"
[menu.main]
parent = "modules"
identifier = "util"
+++

常用工具模块

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `public static static Stats`[`Stats`](#d6/d72/namespaceutil_1aa2c3668cf097906a77de04ae7243fd1e)`Stats`<p>数据统计对象，用以构建应用运行时数据收集，参见 Stats 对象。</p>
void            | `public static static LruCache`[`LruCache`](#d6/d72/namespaceutil_1a3ede61ad29d3fe58b912ef9b9e7ed326)`LruCache`<p>LRU(least recently used) 缓存对象，参见 LruCache 对象。</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
String            | `format(String fmt,...)`<p>按照指定的格式格式化变量</p>
String            | `format(...)`<p>格式格式化变量</p>
void            | `inherits(Value constructor,Value superConstructor)`<p>从一个构造函数 constructor 继承原型方法到另一个。构造函数的原型将被设置为一个新的从超类（superConstructor）创建的对象。</p>
Boolean            | `isEmpty(Value v)`<p>检测给定的变量是否不包含任何值(没有可枚举的属性)</p>
Boolean            | `isArray(Value v)`<p>检测给定的变量是否是数组</p>
Boolean            | `isBoolean(Value v)`<p>检测给定的变量是否是 Boolean</p>
Boolean            | `isNull(Value v)`<p>检测给定的变量是否是 Null</p>
Boolean            | `isNullOrUndefined(Value v)`<p>检测给定的变量是否是 Null 或者 Undefined</p>
Boolean            | `isNumber(Value v)`<p>检测给定的变量是否是数字</p>
Boolean            | `isString(Value v)`<p>检测给定的变量是否是字符串</p>
Boolean            | `isUndefined(Value v)`<p>检测给定的变量是否是 Undefined</p>
Boolean            | `isRegExp(Value v)`<p>检测给定的变量是否是正则对象</p>
Boolean            | `isObject(Value v)`<p>检测给定的变量是否是对象</p>
Boolean            | `isDate(Value v)`<p>检测给定的变量是否是日期对象</p>
Boolean            | `isFunction(Value v)`<p>检测给定的变量是否是函数对象</p>
Boolean            | `isBuffer(Value v)`<p>检测给定的变量是否是函数 Buffer 对象</p>
Boolean            | `has(Value v,String key)`<p>查询指定对象是否包含给定的键</p>
Array            | `keys(Value v)`<p>查询指定对象的全部键数组</p>
Array            | `values(Value v)`<p>查询指定对象的全部值数组</p>
Value            | `clone(Value v)`<p>克隆给定变量，如果是对象或数组，则复制内容到新对象</p>
Value            | `extend(Value v,...)`<p>将一个或者多个对象的键值扩展到指定对象</p>
Object            | `pick(Value v,...)`<p>返回一个object副本，只过滤出指定键的属性值</p>
Object            | `omit(Value v,...)`<p>返回一个object副本，只过排除指定键的属性值</p>
Value            | `first(Value v)`<p>获取数组的第一个元素</p>
Value            | `first(Value v,Integer n)`<p>获取数组的开始多个元素</p>
Value            | `last(Value v)`<p>获取数组的第后一个元素</p>
Value            | `last(Value v,Integer n)`<p>获取数组的结尾多个元素</p>
Array            | `unique(Value v,Boolean sorted)`<p>获取数组的元素去重后的副本</p>
Array            | `union(...)`<p>将一个或者多个数组的值合并成一个值唯一的数组</p>
Array            | `intersection(...)`<p>返回一个包含 arr 数组中排除一个或者多个数组元素的交集</p>
Array            | `flatten(Value arr,Boolean shallow)`<p>将一个嵌套多层的数组(嵌套可以是任何层数)转换为只有一层的数组。 如果你传递 shallow 参数，数组将只减少一维的嵌套。</p>
Array            | `without(Value arr,...)`<p>返回一个包含 arr 数组中排除一个或者多个元素后的数组</p>
Array            | `difference(Array list,...)`<p>返回一个包含 arr 数组中排除 without 数组元素之后的数组</p>
Value            | `each(Value list,Function iterator,Value context)`<p>遍历 list 中的所有元素，按顺序用遍历输出每个元素。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(element, index, list)</p>
Array            | `map(Value list,Function iterator,Value context)`<p>通过变换函数（iterator迭代器）把 list 中的每个值映射到一个新的数组中。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(element, index, list)</p>
Value            | `reduce(Value list,Function iterator,Value memo,Value context)`<p>把 list中 元素归结为一个单独的数值。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(memo, element, index, list)</p>
Buffer            | `compile(String srcname,String script,Integer mode)`<p>编译脚本为二进制代码</p>
Buffer            | `compile(String script,Integer mode)`<p>编译脚本为二进制代码</p>
Object            | `buildInfo()`<p>查询当前引擎及各组件版本信息</p>

## Field Detail

{{% panel theme="default" header="Stats" %}}
#### **void** `public static static Stats`[`Stats`](#d6/d72/namespaceutil_1aa2c3668cf097906a77de04ae7243fd1e)`Stats`

数据统计对象，用以构建应用运行时数据收集，参见 Stats 对象。

{{% /panel %}}
{{% panel theme="default" header="LruCache" %}}
#### **void** `public static static LruCache`[`LruCache`](#d6/d72/namespaceutil_1a3ede61ad29d3fe58b912ef9b9e7ed326)`LruCache`

LRU(least recently used) 缓存对象，参见 LruCache 对象。

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="format" %}}
#### **String** `format(String fmt,...)`

按照指定的格式格式化变量

#### Parameters
* `fmt` 格式化字符串 

* `...` 可选参数列表 

#### Returns
返回格式化后的字符串
{{% /panel %}}
{{% panel theme="default" header="format" %}}
#### **String** `format(...)`

格式格式化变量

#### Parameters
* `...` 可选参数列表 

#### Returns
返回格式化后的字符串
{{% /panel %}}
{{% panel theme="default" header="inherits" %}}
#### **void** `inherits(Value constructor,Value superConstructor)`

从一个构造函数 constructor 继承原型方法到另一个。构造函数的原型将被设置为一个新的从超类（superConstructor）创建的对象。

#### Parameters
* `constructor` 初始的构造函数 

* `superConstructor` 被继承的超类
{{% /panel %}}
{{% panel theme="default" header="isEmpty" %}}
#### **Boolean** `isEmpty(Value v)`

检测给定的变量是否不包含任何值(没有可枚举的属性)

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果为空则返回 True
{{% /panel %}}
{{% panel theme="default" header="isArray" %}}
#### **Boolean** `isArray(Value v)`

检测给定的变量是否是数组

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果是数组则返回 True
{{% /panel %}}
{{% panel theme="default" header="isBoolean" %}}
#### **Boolean** `isBoolean(Value v)`

检测给定的变量是否是 Boolean

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果是 Boolean 则返回 True
{{% /panel %}}
{{% panel theme="default" header="isNull" %}}
#### **Boolean** `isNull(Value v)`

检测给定的变量是否是 Null

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果是 Null 则返回 True
{{% /panel %}}
{{% panel theme="default" header="isNullOrUndefined" %}}
#### **Boolean** `isNullOrUndefined(Value v)`

检测给定的变量是否是 Null 或者 Undefined

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果是 Null 或者 Undefined 则返回 True
{{% /panel %}}
{{% panel theme="default" header="isNumber" %}}
#### **Boolean** `isNumber(Value v)`

检测给定的变量是否是数字

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果是数字则返回 True
{{% /panel %}}
{{% panel theme="default" header="isString" %}}
#### **Boolean** `isString(Value v)`

检测给定的变量是否是字符串

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果是字符串则返回 True
{{% /panel %}}
{{% panel theme="default" header="isUndefined" %}}
#### **Boolean** `isUndefined(Value v)`

检测给定的变量是否是 Undefined

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果是 Undefined 则返回 True
{{% /panel %}}
{{% panel theme="default" header="isRegExp" %}}
#### **Boolean** `isRegExp(Value v)`

检测给定的变量是否是正则对象

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果是正则对象则返回 True
{{% /panel %}}
{{% panel theme="default" header="isObject" %}}
#### **Boolean** `isObject(Value v)`

检测给定的变量是否是对象

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果是对象则返回 True
{{% /panel %}}
{{% panel theme="default" header="isDate" %}}
#### **Boolean** `isDate(Value v)`

检测给定的变量是否是日期对象

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果是日期对象则返回 True
{{% /panel %}}
{{% panel theme="default" header="isFunction" %}}
#### **Boolean** `isFunction(Value v)`

检测给定的变量是否是函数对象

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果是函数对象则返回 True
{{% /panel %}}
{{% panel theme="default" header="isBuffer" %}}
#### **Boolean** `isBuffer(Value v)`

检测给定的变量是否是函数 Buffer 对象

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
如果是函数 Buffer 对象则返回 True
{{% /panel %}}
{{% panel theme="default" header="has" %}}
#### **Boolean** `has(Value v,String key)`

查询指定对象是否包含给定的键

#### Parameters
* `v` 给定需要查询的对象 

* `key` 指定需要查询的键 

#### Returns
返回对象的全部键数组
{{% /panel %}}
{{% panel theme="default" header="keys" %}}
#### **Array** `keys(Value v)`

查询指定对象的全部键数组

#### Parameters
* `v` 给定需要查询的对象 

#### Returns
返回对象的全部键数组
{{% /panel %}}
{{% panel theme="default" header="values" %}}
#### **Array** `values(Value v)`

查询指定对象的全部值数组

#### Parameters
* `v` 给定需要查询的对象 

#### Returns
返回对象的全部值数组
{{% /panel %}}
{{% panel theme="default" header="clone" %}}
#### **Value** `clone(Value v)`

克隆给定变量，如果是对象或数组，则复制内容到新对象

#### Parameters
* `v` 给定要克隆的变量 

#### Returns
返回克隆结果
{{% /panel %}}
{{% panel theme="default" header="extend" %}}
#### **Value** `extend(Value v,...)`

将一个或者多个对象的键值扩展到指定对象

#### Parameters
* `v` 指定要扩展的对象 

* `...` 指定一个或者多个用于扩展的对象 

#### Returns
返回扩展的结果
{{% /panel %}}
{{% panel theme="default" header="pick" %}}
#### **Object** `pick(Value v,...)`

返回一个object副本，只过滤出指定键的属性值

#### Parameters
* `v` 指定要过滤的对象 

* `...` 指定一个或者多个用于选择的键 

#### Returns
返回过滤的结果
{{% /panel %}}
{{% panel theme="default" header="omit" %}}
#### **Object** `omit(Value v,...)`

返回一个object副本，只过排除指定键的属性值

#### Parameters
* `v` 指定要过滤的对象 

* `...` 指定一个或者多个用于排除的键 

#### Returns
返回排除的结果
{{% /panel %}}
{{% panel theme="default" header="first" %}}
#### **Value** `first(Value v)`

获取数组的第一个元素

#### Parameters
* `v` 给定要获取的数组 

#### Returns
返回获取的元素
{{% /panel %}}
{{% panel theme="default" header="first" %}}
#### **Value** `first(Value v,Integer n)`

获取数组的开始多个元素

#### Parameters
* `v` 给定要获取的数组 

* `n` 指定要获取的元素个数 

#### Returns
返回获取的元素数组
{{% /panel %}}
{{% panel theme="default" header="last" %}}
#### **Value** `last(Value v)`

获取数组的第后一个元素

#### Parameters
* `v` 给定要获取的数组 

#### Returns
返回获取的元素
{{% /panel %}}
{{% panel theme="default" header="last" %}}
#### **Value** `last(Value v,Integer n)`

获取数组的结尾多个元素

#### Parameters
* `v` 给定要获取的数组 

* `n` 指定要获取的元素个数 

#### Returns
返回获取的元素数组
{{% /panel %}}
{{% panel theme="default" header="unique" %}}
#### **Array** `unique(Value v,Boolean sorted)`

获取数组的元素去重后的副本

#### Parameters
* `v` 给定要去重的数组 

* `sorted` 指定数组是否排序，如果指定数组排序，将使用快速算法 

#### Returns
返回去重元素后的数组
{{% /panel %}}
{{% panel theme="default" header="union" %}}
#### **Array** `union(...)`

将一个或者多个数组的值合并成一个值唯一的数组

#### Parameters
* `...` 指定一个或者多个用于合并的数组 

#### Returns
返回合并的结果
{{% /panel %}}
{{% panel theme="default" header="intersection" %}}
#### **Array** `intersection(...)`

返回一个包含 arr 数组中排除一个或者多个数组元素的交集

#### Parameters
* `...` 指定一个或者多个用于计算交集的数组 

#### Returns
返回计算交集的结果
{{% /panel %}}
{{% panel theme="default" header="flatten" %}}
#### **Array** `flatten(Value arr,Boolean shallow)`

将一个嵌套多层的数组(嵌套可以是任何层数)转换为只有一层的数组。 如果你传递 shallow 参数，数组将只减少一维的嵌套。

#### Parameters
* `arr` 指定需要转换的数组 

* `shallow` 指定是否只减少一维的嵌套，缺省为 false 

#### Returns
返回转换的结果
{{% /panel %}}
{{% panel theme="default" header="without" %}}
#### **Array** `without(Value arr,...)`

返回一个包含 arr 数组中排除一个或者多个元素后的数组

#### Parameters
* `arr` 指定需要排除的数组 

* `...` 指定一个或者多个用于排除的元素 

#### Returns
返回排除的结果
{{% /panel %}}
{{% panel theme="default" header="difference" %}}
#### **Array** `difference(Array list,...)`

返回一个包含 arr 数组中排除 without 数组元素之后的数组

#### Parameters
* `list` 指定需要排除的数组 

* `...` 指定用于排除的一个或者多个数组 

#### Returns
返回排除的结果
{{% /panel %}}
{{% panel theme="default" header="each" %}}
#### **Value** `each(Value list,Function iterator,Value context)`

遍历 list 中的所有元素，按顺序用遍历输出每个元素。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(element, index, list)

#### Parameters
* `list` 指定需要遍历的列表或对象 

* `iterator` 指定用于遍历的回调函数 

* `context` 指定调用 iterator 时绑定的 context 对象 

#### Returns
返回 list 本身
{{% /panel %}}
{{% panel theme="default" header="map" %}}
#### **Array** `map(Value list,Function iterator,Value context)`

通过变换函数（iterator迭代器）把 list 中的每个值映射到一个新的数组中。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(element, index, list)

#### Parameters
* `list` 指定需要变换的列表或对象 

* `iterator` 指定用于变换的回调函数 

* `context` 指定调用 iterator 时绑定的 context 对象 

#### Returns
返回变换的结果
{{% /panel %}}
{{% panel theme="default" header="reduce" %}}
#### **Value** `reduce(Value list,Function iterator,Value memo,Value context)`

把 list中 元素归结为一个单独的数值。如果传递了 context 参数，则把 iterator 绑定到 context 对象上。每次调用 iterator 都会传递三个参数：(memo, element, index, list)

#### Parameters
* `list` 指定需要归结的列表或对象 

* `iterator` 指定用于归结的回调函数 

* `memo` 指定归结的初始值 

* `context` 指定调用 iterator 时绑定的 context 对象 

#### Returns
返回归结的结果
{{% /panel %}}
{{% panel theme="default" header="compile" %}}
#### **Buffer** `compile(String srcname,String script,Integer mode)`

编译脚本为二进制代码

#### Parameters
* `srcname` 指定要添加的脚本名称 

* `script` 指定要编译的脚本代码 

* `mode` 编译模式，0: module, 1: main, 2: script, 3: worker，缺省为 0 

#### Returns
返回编译出的二进制代码
{{% /panel %}}
{{% panel theme="default" header="compile" %}}
#### **Buffer** `compile(String script,Integer mode)`

编译脚本为二进制代码

#### Parameters
* `script` 指定要编译的脚本代码 

* `mode` 编译模式，0: module, 1: main, 2: script, 3: worker，缺省为 0 

#### Returns
返回编译出的二进制代码
{{% /panel %}}
{{% panel theme="default" header="buildInfo" %}}
#### **Object** `buildInfo()`

查询当前引擎及各组件版本信息

#### Returns
返回结构如下： 
```js
{
  "fibjs": "0.1.0",
  "svn": 1753,
  "build": "Dec 10 2013 21:44:17",
  "vender": {
    "ev": "4.11",
    "exif": "0.6.21",
    "gd": "2.1.0-alpha",
    "jpeg": "8.3",
    "log4cpp": "1.0",
    "mongo": "0.7",
    "pcre": "8.21",
    "png": "1.5.4",
    "sqlite": "3.8.1",
    "tiff": "3.9.5",
    "uuid": "1.6.2",
    "v8": "3.23.17 (candidate)",
    "zlib": "1.2.7",
    "zmq": "3.1"
  }
}
```
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>