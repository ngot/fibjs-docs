+++
draft = false
title = "Buffer"
description = "Buffer ObjectBuffer ObjectBuffer ObjectBuffer ObjectBuffer ObjectBuffer ObjectBuffer Object"
[menu.main]
parent = "objects"
identifier = "Buffer"
+++

## class `Buffer` 

```
class Buffer
  : public object
```  

Binary buffer used in dealing with I/O reading and writing.

[Buffer](#d0/d11/classBuffer) object is a global basic class which can be created by "new Buffer(...)" at anytime: 
```cpp
var buf = new Buffer();
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public Integer `[`operator[]`](#d0/d11/classBuffer_1ab9877007db2fad366b7fb0fae861243a) | The binary data in the buffer can be accessed by using subscript.
`public readonly Integer `[`length`](#d0/d11/classBuffer_1a31eae850157fbe1e15cf7e333c795793) | The buffer size.
`public  `[`Buffer`](#d0/d11/classBuffer_1af19634a31b59ee8f2f4031715bf89952)`(Array datas)` | [Buffer](#d0/d11/classBuffer) constructor.
`public  `[`Buffer`](#d0/d11/classBuffer_1ac16e65f2c0d120d046cb02cc1841c17d)`(`[`Buffer`](#d0/d11/classBuffer)` buffer)` | [Buffer](#d0/d11/classBuffer) constructor.
`public  `[`Buffer`](#d0/d11/classBuffer_1ab9e33ff0da7a8dd5c812330c1ed08c17)`(String str,String codec)` | [Buffer](#d0/d11/classBuffer) constructor.
`public  `[`Buffer`](#d0/d11/classBuffer_1a09fe57b4916e313b00c53a215445e469)`(Integer size)` | [Buffer](#d0/d11/classBuffer) constructor.
`public  `[`resize`](#d0/d11/classBuffer_1a551023131e4c63b198902143e5e5b274)`(Integer sz)` | Resize the buffer.
`public  `[`append`](#d0/d11/classBuffer_1a64a2c7fc815862b7c1d7858873bb33b0)`(Array datas)` | Write an array into the buffer.
`public  `[`append`](#d0/d11/classBuffer_1af5518d7092942ab80c07ab4829788ede)`(`[`Buffer`](#d0/d11/classBuffer)` data)` | Write a set of binary data into the buffer.
`public  `[`append`](#d0/d11/classBuffer_1add739e82ae1d7a72104a6cf9030e0f8d)`(String str,String codec)` | Write a string encoded in utf-8 into buffer.
`public Integer `[`write`](#d0/d11/classBuffer_1a366815494060d39ea7ba8d8e581dd233)`(String str,Integer offset,Integer length,String codec)` | Writes string to the buffer at offset using the given encoding.
`public  `[`fill`](#d0/d11/classBuffer_1a73dff65a83fcdd9b45b04409159092e4)`(Integer v,Integer offset,Integer end)` | Fill the buffer with the specified objects.
`public  `[`fill`](#d0/d11/classBuffer_1a944242c8ef0838da5ad88824e4f2216c)`(`[`Buffer`](#d0/d11/classBuffer)` v,Integer offset,Integer end)` | Fill the buffer with the specified objects.
`public  `[`fill`](#d0/d11/classBuffer_1ab6d72a8f9ba86a750b753c0875937f51)`(String v,Integer offset,Integer end)` | Fill the buffer with the specified objects.
`public Boolean `[`equals`](#d0/d11/classBuffer_1ab9dcbdb139e1fb0d2a4d5c7fa595edaa)`(`[`Buffer`](#d0/d11/classBuffer)` buf)` | Whether this and otherBuffer have the same bytes.
`public Integer `[`compare`](#d0/d11/classBuffer_1a75f1e644fc46657e3f6b6383da864e78)`(`[`Buffer`](#d0/d11/classBuffer)` buf)` | Compare the contents of the buffer.
`public Integer `[`copy`](#d0/d11/classBuffer_1a20c0b25cc08d40d7d988689808cd3553)`(`[`Buffer`](#d0/d11/classBuffer)` targetBuffer,Integer targetStart,Integer sourceStart,Integer sourceEnd)` | Copies data from a region of this buffer to a region in the target buffer even if the target memory region overlaps with the source. If undefined the targetStart and sourceStart parameters default to 0 while sourceEnd defaults to buffer.length.
`public Integer `[`readUInt8`](#d0/d11/classBuffer_1a31773d42f004ef4effdee037a2471038)`(Integer offset,Boolean noAssert)` | Read an unsigned 8-bit integer from the buffer.
`public Integer `[`readUInt16LE`](#d0/d11/classBuffer_1a67d1ffd55c172fa1e7fe7dd681408027)`(Integer offset,Boolean noAssert)` | Read an unsigned 16-bit integer from the buffer and use the little-endian format for storage.
`public Integer `[`readUInt16BE`](#d0/d11/classBuffer_1a2ed9c44da8519639a1d84ee50ddb5755)`(Integer offset,Boolean noAssert)` | Read an unsigned 16-bit integer from the buffer and use the big-endian format for storage.
`public Long `[`readUInt32LE`](#d0/d11/classBuffer_1a5f255361274039c12fbd58cea3a8972a)`(Integer offset,Boolean noAssert)` | Read an unsigned 32-bit integer from the buffer and use the little-endian format for storage.
`public Long `[`readUInt32BE`](#d0/d11/classBuffer_1a93a3f8f65710bc2ffdebd3d48338d521)`(Integer offset,Boolean noAssert)` | Read an unsigned 32-bit integer from the buffer and use the big-endian format for storage.
`public Integer `[`readInt8`](#d0/d11/classBuffer_1a01c6953280f5ed7df68813f93b4d31a5)`(Integer offset,Boolean noAssert)` | Read an 8-bit integer from the buffer.
`public Integer `[`readInt16LE`](#d0/d11/classBuffer_1a83839ad4bc296d7fbdfeb91e6c1bcbf2)`(Integer offset,Boolean noAssert)` | Read an 16-bit integer from the buffer and use the little-endian format for storage.
`public Integer `[`readInt16BE`](#d0/d11/classBuffer_1ac2aaf87f746c6e86dff94fb8f144192a)`(Integer offset,Boolean noAssert)` | Read an 16-bit integer from the buffer and use the big-endian format for storage.
`public Integer `[`readInt32LE`](#d0/d11/classBuffer_1a237125974fd43b21ceb407882d6f36a7)`(Integer offset,Boolean noAssert)` | Read an 32-bit integer from the buffer and use the little-endian format for storage.
`public Integer `[`readInt32BE`](#d0/d11/classBuffer_1a07c4b7a5e0af4402ad257d0dfdd1904d)`(Integer offset,Boolean noAssert)` | Read an 32-bit integer from the buffer and use the big-endian format for storage.
`public `[`Int64`](#df/dc1/interfaceInt64)` `[`readInt64LE`](#d0/d11/classBuffer_1a815bd9ece8bd366e812befaeabe837ef)`(Integer offset,Boolean noAssert)` | Read an 64-bit integer from the buffer and use the little-endian format for storage.
`public `[`Int64`](#df/dc1/interfaceInt64)` `[`readInt64BE`](#d0/d11/classBuffer_1ad42f80b9e720054bac2e9269e92afb1d)`(Integer offset,Boolean noAssert)` | Read an 64-bit integer from the buffer and use the big-endian format for storage.
`public Number `[`readFloatLE`](#d0/d11/classBuffer_1a522729af2a77d8235a4d39eed45fcdbd)`(Integer offset,Boolean noAssert)` | Read a float from the buffer and use the little-endian format for storage.
`public Number `[`readFloatBE`](#d0/d11/classBuffer_1ac264d4c959f984dd261e60402f12a49c)`(Integer offset,Boolean noAssert)` | Read a float from the buffer and use the big-endian format for storage.
`public Number `[`readDoubleLE`](#d0/d11/classBuffer_1a2ec44f49809c3b79b67f1d1ab2e76ec1)`(Integer offset,Boolean noAssert)` | Read a double from the buffer and use the little-endian format for storage.
`public Number `[`readDoubleBE`](#d0/d11/classBuffer_1a79c9e6fbbf0db3acc7fc1768af10b7b2)`(Integer offset,Boolean noAssert)` | Read a double from the buffer and use the big-endian format for storage.
`public  `[`writeUInt8`](#d0/d11/classBuffer_1a514f40b16e5df5477378ea5bcc6d330b)`(Integer value,Integer offset,Boolean noAssert)` | Write an unsigned 8-bit integer into the buffer.
`public  `[`writeUInt16LE`](#d0/d11/classBuffer_1ad3440f99e0ee40eb4020f6009258c913)`(Integer value,Integer offset,Boolean noAssert)` | Write an unsigned 16-bit integer into the buffer and use the little-endian format for storage.
`public  `[`writeUInt16BE`](#d0/d11/classBuffer_1ab853658a8ccf049770a020d6ab3a0f40)`(Integer value,Integer offset,Boolean noAssert)` | Write an unsigned 16-bit integer into the buffer and use the big-endian format for storage.
`public  `[`writeUInt32LE`](#d0/d11/classBuffer_1a48da952960d8282fed63a3ffdee0f4bc)`(Long value,Integer offset,Boolean noAssert)` | Write an unsigned 32-bit integer into the buffer and use the little-endian format for storage.
`public  `[`writeUInt32BE`](#d0/d11/classBuffer_1af93834e211723ddd6caf1edc9ddb22cc)`(Long value,Integer offset,Boolean noAssert)` | Write an unsigned 32-bit integer into the buffer and use the big-endian format for storage.
`public  `[`writeInt8`](#d0/d11/classBuffer_1afad216b40b5a7f0c9980cadf63a9288d)`(Integer value,Integer offset,Boolean noAssert)` | Write an 8-bit integer into the buffer.
`public  `[`writeInt16LE`](#d0/d11/classBuffer_1af8a10eb6889789a38a8949c4526ad981)`(Integer value,Integer offset,Boolean noAssert)` | Write a 16-bit integer into the buffer and use the little-endian format for storage.
`public  `[`writeInt16BE`](#d0/d11/classBuffer_1a0500f514967f73ae1c58b40757da1a26)`(Integer value,Integer offset,Boolean noAssert)` | Write a 16-bit integer into the buffer and use the big-endian format for storage.
`public  `[`writeInt32LE`](#d0/d11/classBuffer_1a86121684507df1c289b08eadcc9bf573)`(Integer value,Integer offset,Boolean noAssert)` | Write a 32-bit integer into the buffer and use the little-endian format for storage.
`public  `[`writeInt32BE`](#d0/d11/classBuffer_1a2b4ed494d86af3b7b2b46b12c3ef5cd7)`(Integer value,Integer offset,Boolean noAssert)` | Write a 32-bit integer into the buffer and use the big-endian format for storage.
`public  `[`writeInt64LE`](#d0/d11/classBuffer_1a1476421a3d84a0d27b02a44a7f38d680)`(`[`Int64`](#df/dc1/interfaceInt64)` value,Integer offset,Boolean noAssert)` | Write a 64-bit integer into the buffer and use the little-endian format for storage.
`public  `[`writeInt64BE`](#d0/d11/classBuffer_1a81e7bbb73392e704ca83b6fe9d48bf5a)`(`[`Int64`](#df/dc1/interfaceInt64)` value,Integer offset,Boolean noAssert)` | Write a 64-bit integer into the buffer and use the big-endian format for storage.
`public  `[`writeFloatLE`](#d0/d11/classBuffer_1af0da2db736bab85c79464a57ab05df54)`(Number value,Integer offset,Boolean noAssert)` | Write a float into the buffer and use the little-endian format for storage.
`public  `[`writeFloatBE`](#d0/d11/classBuffer_1ab81698ec4b2b292809b43bbba9a12c98)`(Number value,Integer offset,Boolean noAssert)` | Write a float into the buffer and use the big-endian format for storage.
`public  `[`writeDoubleLE`](#d0/d11/classBuffer_1adf45fe19c68fd9a58f8138a2ef509e77)`(Number value,Integer offset,Boolean noAssert)` | Write a double into the buffer and use the little-endian format for storage.
`public  `[`writeDoubleBE`](#d0/d11/classBuffer_1aa0699049d7c5631acd3f5f0213a7b9d2)`(Number value,Integer offset,Boolean noAssert)` | Write a double into the buffer and use the big-endian format for storage.
`public `[`Buffer`](#d0/d11/classBuffer)` `[`slice`](#d0/d11/classBuffer_1aaf00c6b9382f73a2c1c23b0444775252)`(Integer start,Integer end)` | return a new buffer that contains data in the specified range. If the data is out of range of the buffer, return the available part of the data.
`public String `[`hex`](#d0/d11/classBuffer_1ae792f93a92ad21c0c28e4953e91032cb)`()` | Store the data in the buffer with hexadecimal encoding?
`public String `[`base64`](#d0/d11/classBuffer_1a36df68fd3011d583c237346289fe22d3)`()` | Store the data in the buffer with [base64](#d5/d37/namespacebase64) encoding?
`public String `[`toString`](#d0/d11/classBuffer_1ac53cf114c773e7246fc35933cf393d62)`(String codec,Integer offset,Integer end)` | return the encoded string of the binary data
`public String `[`toString`](#d0/d11/classBuffer_1a704ee70a5949e3ce5e3ed9efffbfd054)`()` | return the utf8-encoded string of the binary data
`public  `[`dispose`](#db/d38/interfaceobject_1a6b88dbc459449d2280338e5b702a68b4)`()` | Force dispose object immediately.
`public Value `[`toJSON`](#db/d38/interfaceobject_1ad66be13eb5b7c5f560fd8511565138c4)`(String key)` | Return JSON representation of object, normally is readable attributes collection.
`public Value `[`valueOf`](#db/d38/interfaceobject_1ab9261a7662bc8bb4a898bc15dc16f206)`()` | Return JSON representation of object.

## Members

#### `public Integer `[`operator[]`](#d0/d11/classBuffer_1ab9877007db2fad366b7fb0fae861243a) 

The binary data in the buffer can be accessed by using subscript.

#### `public readonly Integer `[`length`](#d0/d11/classBuffer_1a31eae850157fbe1e15cf7e333c795793) 

The buffer size.

#### `public  `[`Buffer`](#d0/d11/classBuffer_1af19634a31b59ee8f2f4031715bf89952)`(Array datas)` 

[Buffer](#d0/d11/classBuffer) constructor.

#### Parameters
* `datas` Initial data array

#### `public  `[`Buffer`](#d0/d11/classBuffer_1ac16e65f2c0d120d046cb02cc1841c17d)`(`[`Buffer`](#d0/d11/classBuffer)` buffer)` 

[Buffer](#d0/d11/classBuffer) constructor.

#### Parameters
* `buffer` otherBuffer

#### `public  `[`Buffer`](#d0/d11/classBuffer_1ab9e33ff0da7a8dd5c812330c1ed08c17)`(String str,String codec)` 

[Buffer](#d0/d11/classBuffer) constructor.

#### Parameters
* `str` Initial string encoded in UTF-8, by default it will create an empty object. 

* `codec` The encode format, can be "hex", “base64”, "utf8" or any other character sets supported by the system.

#### `public  `[`Buffer`](#d0/d11/classBuffer_1a09fe57b4916e313b00c53a215445e469)`(Integer size)` 

[Buffer](#d0/d11/classBuffer) constructor.

#### Parameters
* `size` Initial cache size

#### `public  `[`resize`](#d0/d11/classBuffer_1a551023131e4c63b198902143e5e5b274)`(Integer sz)` 

Resize the buffer.

#### Parameters
* `sz` New size

#### `public  `[`append`](#d0/d11/classBuffer_1a64a2c7fc815862b7c1d7858873bb33b0)`(Array datas)` 

Write an array into the buffer.

#### Parameters
* `datas` Initial data array

#### `public  `[`append`](#d0/d11/classBuffer_1af5518d7092942ab80c07ab4829788ede)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Write a set of binary data into the buffer.

#### Parameters
* `data` Initial binary data

#### `public  `[`append`](#d0/d11/classBuffer_1add739e82ae1d7a72104a6cf9030e0f8d)`(String str,String codec)` 

Write a string encoded in utf-8 into buffer.

#### Parameters
* `str` String to write 

* `codec` Coded format, can be "hex", “base64”, "utf8" or any other character sets supported by the system.

#### `public Integer `[`write`](#d0/d11/classBuffer_1a366815494060d39ea7ba8d8e581dd233)`(String str,Integer offset,Integer length,String codec)` 

Writes string to the buffer at offset using the given encoding.

#### Parameters
* `str` String - data to be written to buffer 

* `offset` Number, Optional, Default 0 

* `length` Number, Optional, Default -1 

* `codec` Coded format, can be "hex", “base64”, "utf8" or any other character sets supported 

#### Returns
Returns number of octets written.

#### `public  `[`fill`](#d0/d11/classBuffer_1a73dff65a83fcdd9b45b04409159092e4)`(Integer v,Integer offset,Integer end)` 

Fill the buffer with the specified objects.

#### Parameters
* `v` Data intend to be filled, and will fill the entire buffer when the offset and end is not specified. 

* `offset` Number, Optional, Default 0 

* `end` Number, Optional, Default -1

#### `public  `[`fill`](#d0/d11/classBuffer_1a944242c8ef0838da5ad88824e4f2216c)`(`[`Buffer`](#d0/d11/classBuffer)` v,Integer offset,Integer end)` 

Fill the buffer with the specified objects.

#### Parameters
* `v` Data intend to be filled, and will fill the entire buffer when the offset and end is not specified. 

* `offset` Number, Optional, Default 0 

* `end` Number, Optional, Default -1

#### `public  `[`fill`](#d0/d11/classBuffer_1ab6d72a8f9ba86a750b753c0875937f51)`(String v,Integer offset,Integer end)` 

Fill the buffer with the specified objects.

#### Parameters
* `v` Data intend to be filled, and will fill the entire buffer when the offset and end is not specified. 

* `offset` Number, Optional, Default 0 

* `end` Number, Optional, Default -1

#### `public Boolean `[`equals`](#d0/d11/classBuffer_1ab9dcbdb139e1fb0d2a4d5c7fa595edaa)`(`[`Buffer`](#d0/d11/classBuffer)` buf)` 

Whether this and otherBuffer have the same bytes.

#### Parameters
* `buf` otherBuffer 

#### Returns
Returns a boolean of whether this and otherBuffer have the same bytes.

#### `public Integer `[`compare`](#d0/d11/classBuffer_1a75f1e644fc46657e3f6b6383da864e78)`(`[`Buffer`](#d0/d11/classBuffer)` buf)` 

Compare the contents of the buffer.

#### Parameters
* `buf` otherBuffer 

#### Returns
Returns a number indicating whether this comes before or after or is the same as the otherBuffer in sort order.

#### `public Integer `[`copy`](#d0/d11/classBuffer_1a20c0b25cc08d40d7d988689808cd3553)`(`[`Buffer`](#d0/d11/classBuffer)` targetBuffer,Integer targetStart,Integer sourceStart,Integer sourceEnd)` 

Copies data from a region of this buffer to a region in the target buffer even if the target memory region overlaps with the source. If undefined the targetStart and sourceStart parameters default to 0 while sourceEnd defaults to buffer.length.

#### Parameters
* `targetBuffer` [Buffer](#d0/d11/classBuffer) object - [Buffer](#d0/d11/classBuffer) to copy into 

* `targetStart` Number, Optional, Default: 0 

* `sourceStart` Number, Optional, Default: 0 

* `sourceEnd` Number, Optional, Default: -1, represent buffer.length 

#### Returns
Copied data byte length

#### `public Integer `[`readUInt8`](#d0/d11/classBuffer_1a31773d42f004ef4effdee037a2471038)`(Integer offset,Boolean noAssert)` 

Read an unsigned 8-bit integer from the buffer.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted integer

#### `public Integer `[`readUInt16LE`](#d0/d11/classBuffer_1a67d1ffd55c172fa1e7fe7dd681408027)`(Integer offset,Boolean noAssert)` 

Read an unsigned 16-bit integer from the buffer and use the little-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted integer

#### `public Integer `[`readUInt16BE`](#d0/d11/classBuffer_1a2ed9c44da8519639a1d84ee50ddb5755)`(Integer offset,Boolean noAssert)` 

Read an unsigned 16-bit integer from the buffer and use the big-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted integer

#### `public Long `[`readUInt32LE`](#d0/d11/classBuffer_1a5f255361274039c12fbd58cea3a8972a)`(Integer offset,Boolean noAssert)` 

Read an unsigned 32-bit integer from the buffer and use the little-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted integer

#### `public Long `[`readUInt32BE`](#d0/d11/classBuffer_1a93a3f8f65710bc2ffdebd3d48338d521)`(Integer offset,Boolean noAssert)` 

Read an unsigned 32-bit integer from the buffer and use the big-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted integer

#### `public Integer `[`readInt8`](#d0/d11/classBuffer_1a01c6953280f5ed7df68813f93b4d31a5)`(Integer offset,Boolean noAssert)` 

Read an 8-bit integer from the buffer.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted integer

#### `public Integer `[`readInt16LE`](#d0/d11/classBuffer_1a83839ad4bc296d7fbdfeb91e6c1bcbf2)`(Integer offset,Boolean noAssert)` 

Read an 16-bit integer from the buffer and use the little-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted integer

#### `public Integer `[`readInt16BE`](#d0/d11/classBuffer_1ac2aaf87f746c6e86dff94fb8f144192a)`(Integer offset,Boolean noAssert)` 

Read an 16-bit integer from the buffer and use the big-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted integer

#### `public Integer `[`readInt32LE`](#d0/d11/classBuffer_1a237125974fd43b21ceb407882d6f36a7)`(Integer offset,Boolean noAssert)` 

Read an 32-bit integer from the buffer and use the little-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted integer

#### `public Integer `[`readInt32BE`](#d0/d11/classBuffer_1a07c4b7a5e0af4402ad257d0dfdd1904d)`(Integer offset,Boolean noAssert)` 

Read an 32-bit integer from the buffer and use the big-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted integer

#### `public `[`Int64`](#df/dc1/interfaceInt64)` `[`readInt64LE`](#d0/d11/classBuffer_1a815bd9ece8bd366e812befaeabe837ef)`(Integer offset,Boolean noAssert)` 

Read an 64-bit integer from the buffer and use the little-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted integer

#### `public `[`Int64`](#df/dc1/interfaceInt64)` `[`readInt64BE`](#d0/d11/classBuffer_1ad42f80b9e720054bac2e9269e92afb1d)`(Integer offset,Boolean noAssert)` 

Read an 64-bit integer from the buffer and use the big-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted integer

#### `public Number `[`readFloatLE`](#d0/d11/classBuffer_1a522729af2a77d8235a4d39eed45fcdbd)`(Integer offset,Boolean noAssert)` 

Read a float from the buffer and use the little-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted float

#### `public Number `[`readFloatBE`](#d0/d11/classBuffer_1ac264d4c959f984dd261e60402f12a49c)`(Integer offset,Boolean noAssert)` 

Read a float from the buffer and use the big-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted float

#### `public Number `[`readDoubleLE`](#d0/d11/classBuffer_1a2ec44f49809c3b79b67f1d1ab2e76ec1)`(Integer offset,Boolean noAssert)` 

Read a double from the buffer and use the little-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted double

#### `public Number `[`readDoubleBE`](#d0/d11/classBuffer_1a79c9e6fbbf0db3acc7fc1768af10b7b2)`(Integer offset,Boolean noAssert)` 

Read a double from the buffer and use the big-endian format for storage.

#### Parameters
* `offset` The beginning of the address to read 

* `noAssert` If true, then do not throw an error when overread. By default it's false. 

#### Returns
The targeted double

#### `public  `[`writeUInt8`](#d0/d11/classBuffer_1a514f40b16e5df5477378ea5bcc6d330b)`(Integer value,Integer offset,Boolean noAssert)` 

Write an unsigned 8-bit integer into the buffer.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeUInt16LE`](#d0/d11/classBuffer_1ad3440f99e0ee40eb4020f6009258c913)`(Integer value,Integer offset,Boolean noAssert)` 

Write an unsigned 16-bit integer into the buffer and use the little-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeUInt16BE`](#d0/d11/classBuffer_1ab853658a8ccf049770a020d6ab3a0f40)`(Integer value,Integer offset,Boolean noAssert)` 

Write an unsigned 16-bit integer into the buffer and use the big-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeUInt32LE`](#d0/d11/classBuffer_1a48da952960d8282fed63a3ffdee0f4bc)`(Long value,Integer offset,Boolean noAssert)` 

Write an unsigned 32-bit integer into the buffer and use the little-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeUInt32BE`](#d0/d11/classBuffer_1af93834e211723ddd6caf1edc9ddb22cc)`(Long value,Integer offset,Boolean noAssert)` 

Write an unsigned 32-bit integer into the buffer and use the big-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeInt8`](#d0/d11/classBuffer_1afad216b40b5a7f0c9980cadf63a9288d)`(Integer value,Integer offset,Boolean noAssert)` 

Write an 8-bit integer into the buffer.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeInt16LE`](#d0/d11/classBuffer_1af8a10eb6889789a38a8949c4526ad981)`(Integer value,Integer offset,Boolean noAssert)` 

Write a 16-bit integer into the buffer and use the little-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeInt16BE`](#d0/d11/classBuffer_1a0500f514967f73ae1c58b40757da1a26)`(Integer value,Integer offset,Boolean noAssert)` 

Write a 16-bit integer into the buffer and use the big-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeInt32LE`](#d0/d11/classBuffer_1a86121684507df1c289b08eadcc9bf573)`(Integer value,Integer offset,Boolean noAssert)` 

Write a 32-bit integer into the buffer and use the little-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeInt32BE`](#d0/d11/classBuffer_1a2b4ed494d86af3b7b2b46b12c3ef5cd7)`(Integer value,Integer offset,Boolean noAssert)` 

Write a 32-bit integer into the buffer and use the big-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeInt64LE`](#d0/d11/classBuffer_1a1476421a3d84a0d27b02a44a7f38d680)`(`[`Int64`](#df/dc1/interfaceInt64)` value,Integer offset,Boolean noAssert)` 

Write a 64-bit integer into the buffer and use the little-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeInt64BE`](#d0/d11/classBuffer_1a81e7bbb73392e704ca83b6fe9d48bf5a)`(`[`Int64`](#df/dc1/interfaceInt64)` value,Integer offset,Boolean noAssert)` 

Write a 64-bit integer into the buffer and use the big-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeFloatLE`](#d0/d11/classBuffer_1af0da2db736bab85c79464a57ab05df54)`(Number value,Integer offset,Boolean noAssert)` 

Write a float into the buffer and use the little-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeFloatBE`](#d0/d11/classBuffer_1ab81698ec4b2b292809b43bbba9a12c98)`(Number value,Integer offset,Boolean noAssert)` 

Write a float into the buffer and use the big-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeDoubleLE`](#d0/d11/classBuffer_1adf45fe19c68fd9a58f8138a2ef509e77)`(Number value,Integer offset,Boolean noAssert)` 

Write a double into the buffer and use the little-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public  `[`writeDoubleBE`](#d0/d11/classBuffer_1aa0699049d7c5631acd3f5f0213a7b9d2)`(Number value,Integer offset,Boolean noAssert)` 

Write a double into the buffer and use the big-endian format for storage.

#### Parameters
* `value` The value to write 

* `offset` The beginning of the address to write 

* `noAssert` If true, then do not throw an error when overwrite. By default it's false.

#### `public `[`Buffer`](#d0/d11/classBuffer)` `[`slice`](#d0/d11/classBuffer_1aaf00c6b9382f73a2c1c23b0444775252)`(Integer start,Integer end)` 

return a new buffer that contains data in the specified range. If the data is out of range of the buffer, return the available part of the data.

#### Parameters
* `start` The start of the specified range, by default it's the beginning of the buffer 

* `end` The end of the specified range, by default it's the end of the buffer

#### `public String `[`hex`](#d0/d11/classBuffer_1ae792f93a92ad21c0c28e4953e91032cb)`()` 

Store the data in the buffer with hexadecimal encoding?

#### Returns
The encoded string

#### `public String `[`base64`](#d0/d11/classBuffer_1a36df68fd3011d583c237346289fe22d3)`()` 

Store the data in the buffer with [base64](#d5/d37/namespacebase64) encoding?

#### Returns
The encoded string

#### `public String `[`toString`](#d0/d11/classBuffer_1ac53cf114c773e7246fc35933cf393d62)`(String codec,Integer offset,Integer end)` 

return the encoded string of the binary data

#### Parameters
* `codec` The encode format, can be "hex", “base64”, "utf8" or any other character sets supported by the system. 

* `offset` The start position of string, Default: 0 

* `end` The end position of string, Default: -1 

#### Returns
The string representing the value of the buffer.

#### `public String `[`toString`](#d0/d11/classBuffer_1a704ee70a5949e3ce5e3ed9efffbfd054)`()` 

return the utf8-encoded string of the binary data

#### Returns
The string representing the value of the buffer.

#### `public  `[`dispose`](#db/d38/interfaceobject_1a6b88dbc459449d2280338e5b702a68b4)`()` 

Force dispose object immediately.

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

