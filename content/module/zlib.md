+++
draft = false
title = "zlib"
description = "zlib compression and decompression module"
[menu.main]
parent = "modules"
identifier = "zlib"
+++

zlib compression and decompression module

To use it: 
```cpp
var zlib = require('zlib');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`deflate`](#d9/d3e/namespacezlib_1a4bbb2133b9a39ea72db80e845a6ad0aa)`(`[`Buffer`](#d0/d11/classBuffer)` data,Integer level)`            | Use deflate to compress data (zlib format)
`public static static `[`deflateTo`](#d9/d3e/namespacezlib_1aa6b8b6d518e950dbaca2b18ab4330fbe)`(`[`Buffer`](#d0/d11/classBuffer)` data,`[`Stream`](#d4/dc7/interfaceStream)` stm,Integer level)`            | Use deflate to compress data to stream (zlib format)
`public static static `[`deflateTo`](#d9/d3e/namespacezlib_1a26b0d322158d30cfb60c774ee212f8d1)`(`[`Stream`](#d4/dc7/interfaceStream)` src,`[`Stream`](#d4/dc7/interfaceStream)` stm,Integer level)`            | Use deflate to compress a stream data to another (zlib format)
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`inflate`](#d9/d3e/namespacezlib_1aafe7acf37cd4edfe4355ddca34cdd123)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Use deflate to decompress data (zlib format)
`public static static `[`inflateTo`](#d9/d3e/namespacezlib_1a1a585f4bb4ce9146953c29af284ba62f)`(`[`Buffer`](#d0/d11/classBuffer)` data,`[`Stream`](#d4/dc7/interfaceStream)` stm)`            | Use deflate to decompress data to stream (zlib format)
`public static static `[`inflateTo`](#d9/d3e/namespacezlib_1a2f4fbd12a75605838e9aafdcc2813c10)`(`[`Stream`](#d4/dc7/interfaceStream)` src,`[`Stream`](#d4/dc7/interfaceStream)` stm)`            | Use deflate to decompress a stream data to another (zlib format)
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`gzip`](#d9/d3e/namespacezlib_1a3a522ddbc8cde00ea8d9021c330c0ad5)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Use gzip to compress data.
`public static static `[`gzipTo`](#d9/d3e/namespacezlib_1aaa9064c2afae1452123bbf6759e0d01a)`(`[`Buffer`](#d0/d11/classBuffer)` data,`[`Stream`](#d4/dc7/interfaceStream)` stm)`            | Use gzip to compress data to stream.
`public static static `[`gzipTo`](#d9/d3e/namespacezlib_1ac5f35bb15047380a3f30da60474557c0)`(`[`Stream`](#d4/dc7/interfaceStream)` src,`[`Stream`](#d4/dc7/interfaceStream)` stm)`            | Use gzip to compress a stream data to another.
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`gunzip`](#d9/d3e/namespacezlib_1a165562467d193e958c2349445dc3f90c)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Use gzip to decompress data.
`public static static `[`gunzipTo`](#d9/d3e/namespacezlib_1ad2fdcb8ce8aac7124267a9e621766638)`(`[`Buffer`](#d0/d11/classBuffer)` data,`[`Stream`](#d4/dc7/interfaceStream)` stm)`            | Use gzip to decompress data to stream.
`public static static `[`gunzipTo`](#d9/d3e/namespacezlib_1ad754fb667c7bffa4aa237ddad1109dab)`(`[`Stream`](#d4/dc7/interfaceStream)` src,`[`Stream`](#d4/dc7/interfaceStream)` stm)`            | Use gzip to decompress a stream data to another.
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`deflateRaw`](#d9/d3e/namespacezlib_1a7a09dd4d3921bf70f09f2dc29672ccaa)`(`[`Buffer`](#d0/d11/classBuffer)` data,Integer level)`            | Use deflate to compress data (deflateRaw)
`public static static `[`deflateRawTo`](#d9/d3e/namespacezlib_1a8b171e4ac0cedfdcfe0b042bd8f2f07d)`(`[`Buffer`](#d0/d11/classBuffer)` data,`[`Stream`](#d4/dc7/interfaceStream)` stm,Integer level)`            | Use deflate to compress data to stream (deflateRaw)
`public static static `[`deflateRawTo`](#d9/d3e/namespacezlib_1a82dedb02bcde6653fc8f94c3d95b2f28)`(`[`Stream`](#d4/dc7/interfaceStream)` src,`[`Stream`](#d4/dc7/interfaceStream)` stm,Integer level)`            | Use deflate to compress a stream data to another (deflateRaw)
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`inflateRaw`](#d9/d3e/namespacezlib_1ae1d8e31d0220c80eda00e50a1b466932)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Use deflate to decompress data (deflateRaw)
`public static static `[`inflateRawTo`](#d9/d3e/namespacezlib_1af15999662fec5f069ee6f25e3821bf43)`(`[`Buffer`](#d0/d11/classBuffer)` data,`[`Stream`](#d4/dc7/interfaceStream)` stm)`            | Use deflate to decompress data to stream (deflateRaw)
`public static static `[`inflateRawTo`](#d9/d3e/namespacezlib_1aa3e4997d8d6449b0a43fba7660c20298)`(`[`Stream`](#d4/dc7/interfaceStream)` src,`[`Stream`](#d4/dc7/interfaceStream)` stm)`            | Use deflate to decompress a stream data to another (deflateRaw)

## Members

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`deflate`](#d9/d3e/namespacezlib_1a4bbb2133b9a39ea72db80e845a6ad0aa)`(`[`Buffer`](#d0/d11/classBuffer)` data,Integer level)` 

Use deflate to compress data (zlib format)

#### Parameters
* `data` Raw data 

* `level` Indicate compression level, default is DEFAULT_COMPRESSION 

#### Returns
Return compressed binary

#### `public static static `[`deflateTo`](#d9/d3e/namespacezlib_1aa6b8b6d518e950dbaca2b18ab4330fbe)`(`[`Buffer`](#d0/d11/classBuffer)` data,`[`Stream`](#d4/dc7/interfaceStream)` stm,Integer level)` 

Use deflate to compress data to stream (zlib format)

#### Parameters
* `data` Raw data 

* `stm` [Stream](#d4/dc7/interfaceStream) to write compressed data 

* `level` Indicate compression level, default is DEFAULT_COMPRESSION

#### `public static static `[`deflateTo`](#d9/d3e/namespacezlib_1a26b0d322158d30cfb60c774ee212f8d1)`(`[`Stream`](#d4/dc7/interfaceStream)` src,`[`Stream`](#d4/dc7/interfaceStream)` stm,Integer level)` 

Use deflate to compress a stream data to another (zlib format)

#### Parameters
* `src` Original stream 

* `stm` Target stream to write compressed data 

* `level` Indicate compression level, default is DEFAULT_COMPRESSION

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`inflate`](#d9/d3e/namespacezlib_1aafe7acf37cd4edfe4355ddca34cdd123)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Use deflate to decompress data (zlib format)

#### Parameters
* `data` Compressed data 

#### Returns
Return decompressed binary

#### `public static static `[`inflateTo`](#d9/d3e/namespacezlib_1a1a585f4bb4ce9146953c29af284ba62f)`(`[`Buffer`](#d0/d11/classBuffer)` data,`[`Stream`](#d4/dc7/interfaceStream)` stm)` 

Use deflate to decompress data to stream (zlib format)

#### Parameters
* `data` Compressed data 

* `stm` [Stream](#d4/dc7/interfaceStream) to write decompressed data

#### `public static static `[`inflateTo`](#d9/d3e/namespacezlib_1a2f4fbd12a75605838e9aafdcc2813c10)`(`[`Stream`](#d4/dc7/interfaceStream)` src,`[`Stream`](#d4/dc7/interfaceStream)` stm)` 

Use deflate to decompress a stream data to another (zlib format)

#### Parameters
* `src` Original stream 

* `stm` Target stream to write decompressed data

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`gzip`](#d9/d3e/namespacezlib_1a3a522ddbc8cde00ea8d9021c330c0ad5)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Use gzip to compress data.

#### Parameters
* `data` Raw data 

#### Returns
Return compressed binary

#### `public static static `[`gzipTo`](#d9/d3e/namespacezlib_1aaa9064c2afae1452123bbf6759e0d01a)`(`[`Buffer`](#d0/d11/classBuffer)` data,`[`Stream`](#d4/dc7/interfaceStream)` stm)` 

Use gzip to compress data to stream.

#### Parameters
* `data` Raw data 

* `stm` [Stream](#d4/dc7/interfaceStream) to write compressed data

#### `public static static `[`gzipTo`](#d9/d3e/namespacezlib_1ac5f35bb15047380a3f30da60474557c0)`(`[`Stream`](#d4/dc7/interfaceStream)` src,`[`Stream`](#d4/dc7/interfaceStream)` stm)` 

Use gzip to compress a stream data to another.

#### Parameters
* `src` Original stream 

* `stm` Target stream to write compressed data

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`gunzip`](#d9/d3e/namespacezlib_1a165562467d193e958c2349445dc3f90c)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Use gzip to decompress data.

#### Parameters
* `data` Compressed data 

#### Returns
Return decompressed binary

#### `public static static `[`gunzipTo`](#d9/d3e/namespacezlib_1ad2fdcb8ce8aac7124267a9e621766638)`(`[`Buffer`](#d0/d11/classBuffer)` data,`[`Stream`](#d4/dc7/interfaceStream)` stm)` 

Use gzip to decompress data to stream.

#### Parameters
* `data` Compressed data 

* `stm` [Stream](#d4/dc7/interfaceStream) to write decompressed data

#### `public static static `[`gunzipTo`](#d9/d3e/namespacezlib_1ad754fb667c7bffa4aa237ddad1109dab)`(`[`Stream`](#d4/dc7/interfaceStream)` src,`[`Stream`](#d4/dc7/interfaceStream)` stm)` 

Use gzip to decompress a stream data to another.

#### Parameters
* `src` Original stream 

* `stm` Target stream to write decompressed data

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`deflateRaw`](#d9/d3e/namespacezlib_1a7a09dd4d3921bf70f09f2dc29672ccaa)`(`[`Buffer`](#d0/d11/classBuffer)` data,Integer level)` 

Use deflate to compress data (deflateRaw)

#### Parameters
* `data` Raw data 

* `level` Indicate compression level, default is DEFAULT_COMPRESSION 

#### Returns
Return compressed binary

#### `public static static `[`deflateRawTo`](#d9/d3e/namespacezlib_1a8b171e4ac0cedfdcfe0b042bd8f2f07d)`(`[`Buffer`](#d0/d11/classBuffer)` data,`[`Stream`](#d4/dc7/interfaceStream)` stm,Integer level)` 

Use deflate to compress data to stream (deflateRaw)

#### Parameters
* `data` Raw data 

* `stm` [Stream](#d4/dc7/interfaceStream) to write compressed data 

* `level` Indicate compression level, default is DEFAULT_COMPRESSION

#### `public static static `[`deflateRawTo`](#d9/d3e/namespacezlib_1a82dedb02bcde6653fc8f94c3d95b2f28)`(`[`Stream`](#d4/dc7/interfaceStream)` src,`[`Stream`](#d4/dc7/interfaceStream)` stm,Integer level)` 

Use deflate to compress a stream data to another (deflateRaw)

#### Parameters
* `src` Original stream 

* `stm` Target stream to write compressed data 

* `level` Indicate compression level, default is DEFAULT_COMPRESSION

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`inflateRaw`](#d9/d3e/namespacezlib_1ae1d8e31d0220c80eda00e50a1b466932)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Use deflate to decompress data (deflateRaw)

#### Parameters
* `data` Compressed data 

#### Returns
Return decompressed binary

#### `public static static `[`inflateRawTo`](#d9/d3e/namespacezlib_1af15999662fec5f069ee6f25e3821bf43)`(`[`Buffer`](#d0/d11/classBuffer)` data,`[`Stream`](#d4/dc7/interfaceStream)` stm)` 

Use deflate to decompress data to stream (deflateRaw)

#### Parameters
* `data` Compressed data 

* `stm` [Stream](#d4/dc7/interfaceStream) to write decompressed data

#### `public static static `[`inflateRawTo`](#d9/d3e/namespacezlib_1aa3e4997d8d6449b0a43fba7660c20298)`(`[`Stream`](#d4/dc7/interfaceStream)` src,`[`Stream`](#d4/dc7/interfaceStream)` stm)` 

Use deflate to decompress a stream data to another (deflateRaw)

#### Parameters
* `src` Original stream 

* `stm` Target stream to write decompressed data

