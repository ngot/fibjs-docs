+++
draft = false
title = "zip"
description = "Zip file processing module."
[menu.main]
parent = "modules"
identifier = "zip"
+++

Zip file processing module.

It can be used to compress and decompress file into or from zip file. The way to use： 
```cpp
var zip = require('zip');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static Boolean `[`isZipFile`](#d7/def/namespacezip_1a78a618601555d349854b60afe4255c3c)`(String filename)`            | Judge if the file is zip file.
`public static `[`ZipFile`](#d9/d03/interfaceZipFile)` `[`open`](#d7/def/namespacezip_1a84ae51f632fd4caa5aa3a7a703479a9e)`(String path,String mod,Integer compress_type)`            | Open a zip file.
`public static `[`ZipFile`](#d9/d03/interfaceZipFile)` `[`open`](#d7/def/namespacezip_1ac95599ce45c4bdcc4ff0970db1589c67)`(`[`Buffer`](#d0/d11/classBuffer)` data,String mod,Integer compress_type)`            | Open buffer of zip file data.
`public static `[`ZipFile`](#d9/d03/interfaceZipFile)` `[`open`](#d7/def/namespacezip_1a934af06bffb9271330696b1702aad5d3)`(`[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` strm,String mod,Integer compress_type)`            | Open stream of zip file data.

## Members

#### `public static Boolean `[`isZipFile`](#d7/def/namespacezip_1a78a618601555d349854b60afe4255c3c)`(String filename)` 

Judge if the file is zip file.

#### Parameters
* `filename` to be judged. 

#### Returns
Judge result, true means yes.

#### `public static `[`ZipFile`](#d9/d03/interfaceZipFile)` `[`open`](#d7/def/namespacezip_1a84ae51f632fd4caa5aa3a7a703479a9e)`(String path,String mod,Integer compress_type)` 

Open a zip file.

#### Parameters
* `path` The path of file to be opened. 

* `mod` [File](#d3/d3a/interfaceFile) open mode, "r" means read only, "w" means create and overwrite if the file exists, "a" means append after the zip file. 

* `compress_type` Compress type, ZIP_STORED means no compress and for storage only. The default parameter is ZIP_DEFLATED, it depends on library zlib in compressing. 

#### Returns
The zip file object.

#### `public static `[`ZipFile`](#d9/d03/interfaceZipFile)` `[`open`](#d7/def/namespacezip_1ac95599ce45c4bdcc4ff0970db1589c67)`(`[`Buffer`](#d0/d11/classBuffer)` data,String mod,Integer compress_type)` 

Open buffer of zip file data.

#### Parameters
* `data` [Buffer](#d0/d11/classBuffer) of zip file data. 

* `mod` [File](#d3/d3a/interfaceFile) open mode, "r" means read only, "w" means create and overwrite if the file exists, "a" means append after the zip file. 

* `compress_type` Compress type, ZIP_STORED means no compress and for storage only. The default parameter is ZIP_DEFLATED, it depends on library zlib in compressing. 

#### Returns
The zip file object.

#### `public static `[`ZipFile`](#d9/d03/interfaceZipFile)` `[`open`](#d7/def/namespacezip_1a934af06bffb9271330696b1702aad5d3)`(`[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` strm,String mod,Integer compress_type)` 

Open stream of zip file data.

#### Parameters
* `strm` [Stream](#d4/dc7/interfaceStream) of zip file data. 

* `mod` [File](#d3/d3a/interfaceFile) open mode, "r" means read only, "w" means create and overwrite if the file exists, "a" means append after the zip file. 

* `compress_type` Compress type, ZIP_STORED means no compress and for storage only. The default parameter is ZIP_DEFLATED, it depends on library zlib in compressing. 

#### Returns
The zip file object.

