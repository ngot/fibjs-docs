+++
draft = false
title = "Buffer"
description = "二进制数据缓存对象，用于 io 读写的数据处理"
[menu.main]
parent = "objects"
identifier = "Buffer"
+++

```js
class Buffer : public object
```  

二进制数据缓存对象，用于 io 读写的数据处理

Buffer 对象为全局基础类，在任何时候都可以直接以 new Buffer(...) 创建： 
```js
var buf = new Buffer();
```

## Constructor Summary

| Method and Description
|---------------------------------------------
| `Buffer(Array datas)`<p>缓存对象构造函数</p>
| `Buffer(ArrayBuffer datas)`<p>缓存对象构造函数</p>
| `Buffer(TypedArray datas)`<p>缓存对象构造函数</p>
| `Buffer(Buffer buffer)`<p>缓存对象构造函数</p>
| `Buffer(String str,String codec)`<p>缓存对象构造函数</p>
| `Buffer(Integer size)`<p>缓存对象构造函数</p>

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Integer            | `public Integer operator[]`[`operator[]`](#d0/d11/classBuffer_1ab9877007db2fad366b7fb0fae861243a)`operator[]`<p>缓存对象可使用下标直接访问二进制数据</p>
readonly Integer            | `public readonly Integer length`[`length`](#d0/d11/classBuffer_1a31eae850157fbe1e15cf7e333c795793)`length`<p>获取缓存对象的尺寸</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
void            | `resize(Integer sz)`<p>修改缓存对象尺寸</p>
void            | `append(Array datas)`<p>在缓存对象尾部写入一组数据</p>
void            | `append(TypedArray datas)`<p>在缓存对象尾部写入一组数据</p>
void            | `append(ArrayBuffer datas)`<p>在缓存对象尾部写入一组数据</p>
void            | `append(Buffer data)`<p>在缓存对象尾部写入一组二进制数据</p>
void            | `append(String str,String codec)`<p>在缓存对象尾部写入字符串，字符串将以 utf-8 格式写入</p>
Integer            | `write(String str,Integer offset,Integer length,String codec)`<p>向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据</p>
Integer            | `write(String str,Integer offset,String codec)`<p>向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据</p>
Integer            | `write(String str,String codec)`<p>向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据</p>
Buffer            | `fill(Integer v,Integer offset,Integer end)`<p>为Buffer对象填充指定内容数据</p>
Buffer            | `fill(Buffer v,Integer offset,Integer end)`<p>为Buffer对象填充指定内容数据</p>
Buffer            | `fill(String v,Integer offset,Integer end)`<p>为Buffer对象填充指定内容数据</p>
Integer            | `indexOf(Integer v,Integer offset)`<p>返回某个指定数据在Buffer中首次出现的位置</p>
Integer            | `indexOf(Buffer v,Integer offset)`<p>返回某个指定数据在Buffer中首次出现的位置</p>
Integer            | `indexOf(String v,Integer offset)`<p>返回某个指定数据在Buffer中首次出现的位置</p>
Integer            | `compare(Buffer buf)`<p>比较缓存区的内容</p>
Integer            | `copy(Buffer targetBuffer,Integer targetStart,Integer sourceStart,Integer sourceEnd)`<p>从源缓存对象区域拷贝数据到目标缓存对象区域</p>
Integer            | `readUInt8(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个 8 位无符号整型数值</p>
Integer            | `readUInt16LE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个 16 位无符号整型数值，以低字节序的存储方式</p>
Integer            | `readUInt16BE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个 16 位无符号整型数值，以高字节序的存储方式</p>
Long            | `readUInt32LE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个 32 位无符号整型数值，以低字节序的存储方式</p>
Long            | `readUInt32BE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个 32 位无符号整型数值，以高字节序的存储方式</p>
Long            | `readUIntLE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个无符号整型数值，最大支持 48 位，以低字节序的存储方式</p>
Long            | `readUIntBE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个无符号整型数值，最大支持 48 位，以高字节序的存储方式</p>
Integer            | `readInt8(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个 8 位整型数值</p>
Integer            | `readInt16LE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个 16 位整型数值，以低字节序的存储方式</p>
Integer            | `readInt16BE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个 16 位整型数值，以高字节序的存储方式</p>
Integer            | `readInt32LE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个 32 位整型数值，以低字节序的存储方式</p>
Integer            | `readInt32BE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个 32 位整型数值，以高字节序的存储方式</p>
Long            | `readIntLE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个整型数值，最大支持 48 位，以低字节序的存储方式</p>
Long            | `readIntBE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个整型数值，最大支持 48 位，以高字节序的存储方式</p>
Int64            | `readInt64LE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个 64 位整型数值，以低字节序的存储方式</p>
Int64            | `readInt64BE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个 64 位整型数值，以高字节序的存储方式</p>
Number            | `readFloatLE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个浮点数，以低字节序的存储方式</p>
Number            | `readFloatBE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个浮点数，以高字节序的存储方式</p>
Number            | `readDoubleLE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个双精度浮点数，以低字节序的存储方式</p>
Number            | `readDoubleBE(Integer offset,Boolean noAssert)`<p>从缓存对象读取一个双精度浮点数，以高字节序的存储方式</p>
void            | `writeUInt8(Integer value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个 8 位无符号整型数值</p>
void            | `writeUInt16LE(Integer value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个 16 位无符号整型数值，以低字节序的存储方式</p>
void            | `writeUInt16BE(Integer value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个 16 位无符号整型数值，以高字节序的存储方式</p>
void            | `writeUInt32LE(Long value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个 32 位无符号整型数值，以低字节序的存储方式</p>
void            | `writeUInt32BE(Long value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个 32 位无符号整型数值，以高字节序的存储方式</p>
void            | `writeUIntLE(Long value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个无符号整型数值，最大支持 48 位，以低字节序的存储方式</p>
void            | `writeUIntBE(Long value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个无符号整型数值，最大支持 48 位，以高字节序的存储方式</p>
void            | `writeInt8(Integer value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个 8 位整型数值</p>
void            | `writeInt16LE(Integer value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个 16 位整型数值，以低字节序的存储方式</p>
void            | `writeInt16BE(Integer value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个 16 位整型数值，以高字节序的存储方式</p>
void            | `writeInt32LE(Integer value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个 32 位整型数值，以低字节序的存储方式</p>
void            | `writeInt32BE(Integer value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个 32 位整型数值，以高字节序的存储方式</p>
void            | `writeIntLE(Long value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个整型数值，最大支持 48 位，以低字节序的存储方式</p>
void            | `writeIntBE(Long value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个整型数值，最大支持 48 位，以高字节序的存储方式</p>
void            | `writeInt64LE(Int64 value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个 64 位整型数值，以低字节序的存储方式</p>
void            | `writeInt64BE(Int64 value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个 64 位整型数值，以高字节序的存储方式</p>
void            | `writeFloatLE(Number value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个浮点数，以低字节序的存储方式</p>
void            | `writeFloatBE(Number value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个浮点数，以高字节序的存储方式</p>
void            | `writeDoubleLE(Number value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个双精度浮点数，以低字节序的存储方式</p>
void            | `writeDoubleBE(Number value,Integer offset,Boolean noAssert)`<p>向缓存对象写入一个双精度浮点数，以高字节序的存储方式</p>
Buffer            | `slice(Integer start)`<p>返回一个新缓存对象，包含指定起始到缓存结尾的数据</p>
Buffer            | `slice(Integer start,Integer end)`<p>返回一个新缓存对象，包含指定范围的数据，若范围超出缓存，则只返回有效部分数据</p>
String            | `hex()`<p>使用 16 进制编码缓存对象内容</p>
String            | `base64()`<p>使用 base64 编码缓存对象内容</p>
Array            | `toArray()`<p>返回全部二进制数据的数组</p>
String            | `toString(String codec,Integer offset,Integer end)`<p>返回二进制数据的编码字符串</p>
String            | `toString()`<p>返回二进制数据的 utf8 编码字符串</p>
void            | `dispose()`<p>强制回收对象，调用此方法后，对象资源将立即释放</p>
Boolean            | `equals(object expected)`<p>比较当前对象与给定的对象是否相等</p>
Value            | `toJSON(String key)`<p>返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合</p>
Value            | `valueOf()`<p>返回对象本身的数值</p>
Boolean            | `isBuffer(Value v)`<p>检测给定的变量是否是 Buffer 对象</p>
Buffer            | `concat(Array buflist,Integer cutLength)`<p>拼接多个缓存区中的数据</p>

## Constructor Detail

{{% panel theme="default" header="Buffer" %}}
#### `Buffer(Array datas)`

缓存对象构造函数

#### Parameters
* `datas` 初始化数据数组
{{% /panel %}}
{{% panel theme="default" header="Buffer" %}}
#### `Buffer(ArrayBuffer datas)`

缓存对象构造函数

#### Parameters
* `datas` 初始化数据数组
{{% /panel %}}
{{% panel theme="default" header="Buffer" %}}
#### `Buffer(TypedArray datas)`

缓存对象构造函数

#### Parameters
* `datas` 初始化数据数组
{{% /panel %}}
{{% panel theme="default" header="Buffer" %}}
#### `Buffer(Buffer buffer)`

缓存对象构造函数

#### Parameters
* `buffer` 初始化Buffer对象
{{% /panel %}}
{{% panel theme="default" header="Buffer" %}}
#### `Buffer(String str,String codec)`

缓存对象构造函数

#### Parameters
* `str` 初始化字符串，字符串将以 utf-8 格式写入，缺省则创建一个空对象 

* `codec` 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
{{% /panel %}}
{{% panel theme="default" header="Buffer" %}}
#### `Buffer(Integer size)`

缓存对象构造函数

#### Parameters
* `size` 初始化缓冲区大小
{{% /panel %}}

## Field Detail

{{% panel theme="default" header="operator[]" %}}
#### **Integer** `public Integer operator[]`[`operator[]`](#d0/d11/classBuffer_1ab9877007db2fad366b7fb0fae861243a)`operator[]`

缓存对象可使用下标直接访问二进制数据

{{% /panel %}}
{{% panel theme="default" header="length" %}}
#### **readonly Integer** `public readonly Integer length`[`length`](#d0/d11/classBuffer_1a31eae850157fbe1e15cf7e333c795793)`length`

获取缓存对象的尺寸

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="resize" %}}
#### **void** `resize(Integer sz)`

修改缓存对象尺寸

#### Parameters
* `sz` 指定新尺寸
{{% /panel %}}
{{% panel theme="default" header="append" %}}
#### **void** `append(Array datas)`

在缓存对象尾部写入一组数据

#### Parameters
* `datas` 初始化数据数组
{{% /panel %}}
{{% panel theme="default" header="append" %}}
#### **void** `append(TypedArray datas)`

在缓存对象尾部写入一组数据

#### Parameters
* `datas` 初始化数据数组
{{% /panel %}}
{{% panel theme="default" header="append" %}}
#### **void** `append(ArrayBuffer datas)`

在缓存对象尾部写入一组数据

#### Parameters
* `datas` 初始化数据数组
{{% /panel %}}
{{% panel theme="default" header="append" %}}
#### **void** `append(Buffer data)`

在缓存对象尾部写入一组二进制数据

#### Parameters
* `data` 初始化二进制数据
{{% /panel %}}
{{% panel theme="default" header="append" %}}
#### **void** `append(String str,String codec)`

在缓存对象尾部写入字符串，字符串将以 utf-8 格式写入

#### Parameters
* `str` 要写入的字符串 

* `codec` 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集
{{% /panel %}}
{{% panel theme="default" header="write" %}}
#### **Integer** `write(String str,Integer offset,Integer length,String codec)`

向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据

#### Parameters
* `str` 待写入的字符串 

* `offset` 写入起始位置 

* `length` 写入长度（单位字节，默认值-1），未指定时为待写入字符串的长度 

* `codec` 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集 

#### Returns
写入的数据字节长度
{{% /panel %}}
{{% panel theme="default" header="write" %}}
#### **Integer** `write(String str,Integer offset,String codec)`

向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据

#### Parameters
* `str` 待写入的字符串 

* `offset` 写入起始位置 

* `codec` 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集 

#### Returns
写入的数据字节长度
{{% /panel %}}
{{% panel theme="default" header="write" %}}
#### **Integer** `write(String str,String codec)`

向缓存对象写入指定字符串，字符串默认为utf-8，越界时只写入部分数据

#### Parameters
* `str` 待写入的字符串 

* `codec` 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集 

#### Returns
写入的数据字节长度
{{% /panel %}}
{{% panel theme="default" header="fill" %}}
#### **Buffer** `fill(Integer v,Integer offset,Integer end)`

为Buffer对象填充指定内容数据

#### Parameters
* `v` 需要填充的数据，如果未指定offset和end，将填充满整个buffer 

* `offset` 填充起始位置 

* `end` 填充终止位置 

#### Returns
返回当前 Buffer 对象
{{% /panel %}}
{{% panel theme="default" header="fill" %}}
#### **Buffer** `fill(Buffer v,Integer offset,Integer end)`

为Buffer对象填充指定内容数据

#### Parameters
* `v` 需要填充的数据，如果未指定offset和end，将填充满整个buffer 

* `offset` 填充起始位置 

* `end` 填充终止位置 

#### Returns
返回当前 Buffer 对象
{{% /panel %}}
{{% panel theme="default" header="fill" %}}
#### **Buffer** `fill(String v,Integer offset,Integer end)`

为Buffer对象填充指定内容数据

#### Parameters
* `v` 需要填充的数据，如果未指定offset和end，将填充满整个buffer 

* `offset` 填充起始位置 

* `end` 填充终止位置 

#### Returns
返回当前 Buffer 对象
{{% /panel %}}
{{% panel theme="default" header="indexOf" %}}
#### **Integer** `indexOf(Integer v,Integer offset)`

返回某个指定数据在Buffer中首次出现的位置

#### Parameters
* `v` 待查找数据，如果未指定offset，默认从起始位开始 

* `offset` 起始查找位置
{{% /panel %}}
{{% panel theme="default" header="indexOf" %}}
#### **Integer** `indexOf(Buffer v,Integer offset)`

返回某个指定数据在Buffer中首次出现的位置

#### Parameters
* `v` 待查找数据，如果未指定offset，默认从起始位开始 

* `offset` 起始查找位置
{{% /panel %}}
{{% panel theme="default" header="indexOf" %}}
#### **Integer** `indexOf(String v,Integer offset)`

返回某个指定数据在Buffer中首次出现的位置

#### Parameters
* `v` 待查找数据，如果未指定offset，默认从起始位开始 

* `offset` 起始查找位置
{{% /panel %}}
{{% panel theme="default" header="compare" %}}
#### **Integer** `compare(Buffer buf)`

比较缓存区的内容

#### Parameters
* `buf` 待比较缓存对象 

#### Returns
内容比较结果
{{% /panel %}}
{{% panel theme="default" header="copy" %}}
#### **Integer** `copy(Buffer targetBuffer,Integer targetStart,Integer sourceStart,Integer sourceEnd)`

从源缓存对象区域拷贝数据到目标缓存对象区域

#### Parameters
* `targetBuffer` 目标缓存对象 

* `targetStart` 目标缓存对象开始拷贝字节位置，缺省为 0 

* `sourceStart` 源缓存对象开始字节位置, 缺省为 0 

* `sourceEnd` 源缓存对象结束字节位置, 缺省为 -1,表示源数据长度 

#### Returns
拷贝的数据字节长度
{{% /panel %}}
{{% panel theme="default" header="readUInt8" %}}
#### **Integer** `readUInt8(Integer offset,Boolean noAssert)`

从缓存对象读取一个 8 位无符号整型数值

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readUInt16LE" %}}
#### **Integer** `readUInt16LE(Integer offset,Boolean noAssert)`

从缓存对象读取一个 16 位无符号整型数值，以低字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readUInt16BE" %}}
#### **Integer** `readUInt16BE(Integer offset,Boolean noAssert)`

从缓存对象读取一个 16 位无符号整型数值，以高字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readUInt32LE" %}}
#### **Long** `readUInt32LE(Integer offset,Boolean noAssert)`

从缓存对象读取一个 32 位无符号整型数值，以低字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readUInt32BE" %}}
#### **Long** `readUInt32BE(Integer offset,Boolean noAssert)`

从缓存对象读取一个 32 位无符号整型数值，以高字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readUIntLE" %}}
#### **Long** `readUIntLE(Integer offset,Boolean noAssert)`

从缓存对象读取一个无符号整型数值，最大支持 48 位，以低字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readUIntBE" %}}
#### **Long** `readUIntBE(Integer offset,Boolean noAssert)`

从缓存对象读取一个无符号整型数值，最大支持 48 位，以高字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readInt8" %}}
#### **Integer** `readInt8(Integer offset,Boolean noAssert)`

从缓存对象读取一个 8 位整型数值

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readInt16LE" %}}
#### **Integer** `readInt16LE(Integer offset,Boolean noAssert)`

从缓存对象读取一个 16 位整型数值，以低字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readInt16BE" %}}
#### **Integer** `readInt16BE(Integer offset,Boolean noAssert)`

从缓存对象读取一个 16 位整型数值，以高字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readInt32LE" %}}
#### **Integer** `readInt32LE(Integer offset,Boolean noAssert)`

从缓存对象读取一个 32 位整型数值，以低字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readInt32BE" %}}
#### **Integer** `readInt32BE(Integer offset,Boolean noAssert)`

从缓存对象读取一个 32 位整型数值，以高字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readIntLE" %}}
#### **Long** `readIntLE(Integer offset,Boolean noAssert)`

从缓存对象读取一个整型数值，最大支持 48 位，以低字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readIntBE" %}}
#### **Long** `readIntBE(Integer offset,Boolean noAssert)`

从缓存对象读取一个整型数值，最大支持 48 位，以高字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readInt64LE" %}}
#### **Int64** `readInt64LE(Integer offset,Boolean noAssert)`

从缓存对象读取一个 64 位整型数值，以低字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readInt64BE" %}}
#### **Int64** `readInt64BE(Integer offset,Boolean noAssert)`

从缓存对象读取一个 64 位整型数值，以高字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的整型数值
{{% /panel %}}
{{% panel theme="default" header="readFloatLE" %}}
#### **Number** `readFloatLE(Integer offset,Boolean noAssert)`

从缓存对象读取一个浮点数，以低字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的浮点数
{{% /panel %}}
{{% panel theme="default" header="readFloatBE" %}}
#### **Number** `readFloatBE(Integer offset,Boolean noAssert)`

从缓存对象读取一个浮点数，以高字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的浮点数
{{% /panel %}}
{{% panel theme="default" header="readDoubleLE" %}}
#### **Number** `readDoubleLE(Integer offset,Boolean noAssert)`

从缓存对象读取一个双精度浮点数，以低字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的双精度浮点数
{{% /panel %}}
{{% panel theme="default" header="readDoubleBE" %}}
#### **Number** `readDoubleBE(Integer offset,Boolean noAssert)`

从缓存对象读取一个双精度浮点数，以高字节序的存储方式

#### Parameters
* `offset` 指定读取的起始位置，缺省为 0 

* `noAssert` 指定读取越界时不抛出错误，缺省为 flase，抛出 

#### Returns
返回读取的双精度浮点数
{{% /panel %}}
{{% panel theme="default" header="writeUInt8" %}}
#### **void** `writeUInt8(Integer value,Integer offset,Boolean noAssert)`

向缓存对象写入一个 8 位无符号整型数值

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeUInt16LE" %}}
#### **void** `writeUInt16LE(Integer value,Integer offset,Boolean noAssert)`

向缓存对象写入一个 16 位无符号整型数值，以低字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeUInt16BE" %}}
#### **void** `writeUInt16BE(Integer value,Integer offset,Boolean noAssert)`

向缓存对象写入一个 16 位无符号整型数值，以高字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeUInt32LE" %}}
#### **void** `writeUInt32LE(Long value,Integer offset,Boolean noAssert)`

向缓存对象写入一个 32 位无符号整型数值，以低字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeUInt32BE" %}}
#### **void** `writeUInt32BE(Long value,Integer offset,Boolean noAssert)`

向缓存对象写入一个 32 位无符号整型数值，以高字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeUIntLE" %}}
#### **void** `writeUIntLE(Long value,Integer offset,Boolean noAssert)`

向缓存对象写入一个无符号整型数值，最大支持 48 位，以低字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeUIntBE" %}}
#### **void** `writeUIntBE(Long value,Integer offset,Boolean noAssert)`

向缓存对象写入一个无符号整型数值，最大支持 48 位，以高字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeInt8" %}}
#### **void** `writeInt8(Integer value,Integer offset,Boolean noAssert)`

向缓存对象写入一个 8 位整型数值

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeInt16LE" %}}
#### **void** `writeInt16LE(Integer value,Integer offset,Boolean noAssert)`

向缓存对象写入一个 16 位整型数值，以低字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeInt16BE" %}}
#### **void** `writeInt16BE(Integer value,Integer offset,Boolean noAssert)`

向缓存对象写入一个 16 位整型数值，以高字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeInt32LE" %}}
#### **void** `writeInt32LE(Integer value,Integer offset,Boolean noAssert)`

向缓存对象写入一个 32 位整型数值，以低字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeInt32BE" %}}
#### **void** `writeInt32BE(Integer value,Integer offset,Boolean noAssert)`

向缓存对象写入一个 32 位整型数值，以高字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeIntLE" %}}
#### **void** `writeIntLE(Long value,Integer offset,Boolean noAssert)`

向缓存对象写入一个整型数值，最大支持 48 位，以低字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeIntBE" %}}
#### **void** `writeIntBE(Long value,Integer offset,Boolean noAssert)`

向缓存对象写入一个整型数值，最大支持 48 位，以高字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeInt64LE" %}}
#### **void** `writeInt64LE(Int64 value,Integer offset,Boolean noAssert)`

向缓存对象写入一个 64 位整型数值，以低字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeInt64BE" %}}
#### **void** `writeInt64BE(Int64 value,Integer offset,Boolean noAssert)`

向缓存对象写入一个 64 位整型数值，以高字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeFloatLE" %}}
#### **void** `writeFloatLE(Number value,Integer offset,Boolean noAssert)`

向缓存对象写入一个浮点数，以低字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeFloatBE" %}}
#### **void** `writeFloatBE(Number value,Integer offset,Boolean noAssert)`

向缓存对象写入一个浮点数，以高字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeDoubleLE" %}}
#### **void** `writeDoubleLE(Number value,Integer offset,Boolean noAssert)`

向缓存对象写入一个双精度浮点数，以低字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="writeDoubleBE" %}}
#### **void** `writeDoubleBE(Number value,Integer offset,Boolean noAssert)`

向缓存对象写入一个双精度浮点数，以高字节序的存储方式

#### Parameters
* `value` 指定写入的数值 

* `offset` 指定写入的起始位置 

* `noAssert` 指定写入越界时不抛出错误，缺省为 flase，抛出
{{% /panel %}}
{{% panel theme="default" header="slice" %}}
#### **Buffer** `slice(Integer start)`

返回一个新缓存对象，包含指定起始到缓存结尾的数据

#### Parameters
* `start` 指定范围的起始，缺省从头开始 

#### Returns
返回新的缓存对象
{{% /panel %}}
{{% panel theme="default" header="slice" %}}
#### **Buffer** `slice(Integer start,Integer end)`

返回一个新缓存对象，包含指定范围的数据，若范围超出缓存，则只返回有效部分数据

#### Parameters
* `start` 指定范围的起始 

* `end` 指定范围的结束 

#### Returns
返回新的缓存对象
{{% /panel %}}
{{% panel theme="default" header="hex" %}}
#### **String** `hex()`

使用 16 进制编码缓存对象内容

#### Returns
返回编码字符串
{{% /panel %}}
{{% panel theme="default" header="base64" %}}
#### **String** `base64()`

使用 base64 编码缓存对象内容

#### Returns
返回编码字符串
{{% /panel %}}
{{% panel theme="default" header="toArray" %}}
#### **Array** `toArray()`

返回全部二进制数据的数组

#### Returns
返回包含对象数据的数组
{{% /panel %}}
{{% panel theme="default" header="toString" %}}
#### **String** `toString(String codec,Integer offset,Integer end)`

返回二进制数据的编码字符串

#### Parameters
* `codec` 指定编码格式，允许值为："hex", "base64", "utf8", 或者系统支持的字符集 

* `offset` 读取起始位置 

* `end` 读取终止位置 

#### Returns
返回对象的字符串表示
{{% /panel %}}
{{% panel theme="default" header="toString" %}}
#### **String** `toString()`

返回二进制数据的 utf8 编码字符串

#### Returns
返回对象的字符串表示
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
{{% panel theme="default" header="isBuffer" %}}
#### **Boolean** `isBuffer(Value v)`

检测给定的变量是否是 Buffer 对象

#### Parameters
* `v` 给定需要检测的变量 

#### Returns
传入对象是否 Buffer 对象
{{% /panel %}}
{{% panel theme="default" header="concat" %}}
#### **Buffer** `concat(Array buflist,Integer cutLength)`

拼接多个缓存区中的数据

#### Parameters
* `buflist` 待拼接的Buffer数组 

* `cutLength` 截取多少个Buffer对象 

#### Returns
拼接后产生的新 Buffer 对象
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>