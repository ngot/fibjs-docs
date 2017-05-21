+++
draft = false
title = "fs"
description = "file system module."
[menu.main]
parent = "modules"
identifier = "fs"
+++

file system module

how to use 
```cpp
var fs = require('fs');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static Boolean `[`exists`](#d5/d8f/namespacefs_1a4abe84709aae93e90cf3028c6c13db96)`(String path)`            | search if the file or directory exists
`public static Boolean `[`existsSync`](#d5/d8f/namespacefs_1a828508b6b6a7baa69929e54f11bd0121)`(String path)`            | search if the file or directory exists. Sync version of [fs.exists()](#d5/d8f/namespacefs_1a4abe84709aae93e90cf3028c6c13db96).
`public static static `[`unlink`](#d5/d8f/namespacefs_1ad9728d670aa8f486d76c4052f6c8acd5)`(String path)`            | the file you want to delete
`public static static `[`unlinkSync`](#d5/d8f/namespacefs_1a4b15f3243d3c3c277b71522e49a60e16)`(String path)`            | the file you want to delete. Sync version of [fs.unlink()](#d5/d8f/namespacefs_1ad9728d670aa8f486d76c4052f6c8acd5).
`public static static `[`mkdir`](#d5/d8f/namespacefs_1ad11bbef581ff87c5fc33e8b3d4b98dfb)`(String path,Integer mode)`            | create a directory
`public static static `[`mkdirSync`](#d5/d8f/namespacefs_1a82c90f7692b9fbea8577fc99628320d9)`(String path,Integer mode)`            | create a directory. Sync version of [fs.mkdir()](#d5/d8f/namespacefs_1ad11bbef581ff87c5fc33e8b3d4b98dfb).
`public static static `[`rmdir`](#d5/d8f/namespacefs_1ae63300a92680e28c3b2bd55046120049)`(String path)`            | delete a directory
`public static static `[`rmdirSync`](#d5/d8f/namespacefs_1a20b380c23534d145eecead87d9b2cab8)`(String path)`            | delete a directory. Sync version of [fs.rmdir()](#d5/d8f/namespacefs_1ae63300a92680e28c3b2bd55046120049).
`public static static `[`rename`](#d5/d8f/namespacefs_1a6cfec17da170f79ad860f37515990603)`(String from,String to)`            | rename a file
`public static static `[`renameSync`](#d5/d8f/namespacefs_1a439bc947232694de63ae6b927d79e938)`(String from,String to)`            | rename a file
`public static static `[`copy`](#d5/d8f/namespacefs_1aeff5066a3493122a9cecd8977cbd83d9)`(String from,String to)`            | copy file
`public static static `[`chmod`](#d5/d8f/namespacefs_1a5b69648f9d4875d97bd01b007c095f94)`(String path,Integer mode)`            | check the permission of targeting file, Windows does not support this
`public static static `[`chmodSync`](#d5/d8f/namespacefs_1a471a11730f2ab34cbe85287548ec6675)`(String path,Integer mode)`            | check the permission of targeting file, Windows does not support this. Sync version of [fs.chmod()](#d5/d8f/namespacefs_1a5b69648f9d4875d97bd01b007c095f94).
`public static `[`Stat`](#dc/da9/interfaceStat)` `[`stat`](#d5/d8f/namespacefs_1a51eb9e7e0bebba7af47eeff6ddcb6425)`(String path)`            | check file basic infomation/stat
`public static `[`Stat`](#dc/da9/interfaceStat)` `[`statSync`](#d5/d8f/namespacefs_1a73fcecc3120d7be9f3e9628e4354107f)`(String path)`            | check file basic infomation/stat. Sync version of [fs.stat()](#d5/d8f/namespacefs_1a51eb9e7e0bebba7af47eeff6ddcb6425).
`public static `[`List`](#de/dd8/interfaceList)` `[`readdir`](#d5/d8f/namespacefs_1a598ef237aea287f4328743429f81ede1)`(String path)`            | read fileinfo inside target directory
`public static `[`List`](#de/dd8/interfaceList)` `[`readdirSync`](#d5/d8f/namespacefs_1a8b687854a662b716a575b6c8b80963b4)`(String path)`            | read fileinfo inside target directory. Sync version of [fs.readdir()](#d5/d8f/namespacefs_1a598ef237aea287f4328743429f81ede1).
`public static `[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` `[`open`](#d5/d8f/namespacefs_1a9e774ee83e01eb9115e65c0c2c38e8b4)`(String fname,String flags)`            | open text file to read, write, or read and write
`public static `[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` `[`openSync`](#d5/d8f/namespacefs_1a405870e84dfb1e371e37dbfc84b91bb9)`(String fname,String flags)`            | open text file to read, write, or read and write. Sync version of [fs.open()](#d5/d8f/namespacefs_1a9e774ee83e01eb9115e65c0c2c38e8b4).
`public static `[`BufferedStream`](#d0/d37/interfaceBufferedStream)` `[`openTextStream`](#d5/d8f/namespacefs_1aaf625a15d9268621cb10eacc4154db5e)`(String fname,String flags)`            | open text file to read, write, or read and write
`public static String `[`readTextFile`](#d5/d8f/namespacefs_1a3c55a9cb42fc1d40decfd30bd2e739e1)`(String fname)`            | open file and read the conent.
`public static String `[`readFile`](#d5/d8f/namespacefs_1a7e1ad1be495a3c5e986908fa56861acd)`(String fname)`            | open a file, read the content
`public static `[`Buffer`](#d0/d11/classBuffer)` `[`readFileSync`](#d5/d8f/namespacefs_1af669e44c86fb17d611438696a9af0f18)`(String fname)`            | open a file, read the content. Sync version of [fs.readFile()](#d5/d8f/namespacefs_1a7e1ad1be495a3c5e986908fa56861acd).
`public static Array `[`readLines`](#d5/d8f/namespacefs_1acb42968e4acb281d4633997321392ab1)`(String fname,Integer maxlines)`            | open file, ready each line of text content intot an array, end of line is recognized based on EOL definition, by default, posix system: "\n"; windows system: "\r\n"
`public static static `[`writeTextFile`](#d5/d8f/namespacefs_1a7f608ea611628c8dc7aadc79f7056085)`(String fname,String txt)`            | create text file and write to file 创建文本文件，并写入内容
`public static static `[`writeFile`](#d5/d8f/namespacefs_1a2b9fe79326ffd7bca6e432f1a667f306)`(String fname,String txt)`            | create file, and write new content
`public static static `[`writeFileSync`](#d5/d8f/namespacefs_1a8a885a62f0e269f303cd59b00511eca0)`(String fname,`[`Buffer`](#d0/d11/classBuffer)` data)`            | create file, and write new content. Sync version of [fs.writeFile()](#d5/d8f/namespacefs_1a2b9fe79326ffd7bca6e432f1a667f306).

## Members

#### `public static Boolean `[`exists`](#d5/d8f/namespacefs_1a4abe84709aae93e90cf3028c6c13db96)`(String path)` 

search if the file or directory exists

#### Parameters
* `path` assign the search path 

#### Returns
return True indicates the file or directory exists

#### `public static Boolean `[`existsSync`](#d5/d8f/namespacefs_1a828508b6b6a7baa69929e54f11bd0121)`(String path)` 

search if the file or directory exists. Sync version of [fs.exists()](#d5/d8f/namespacefs_1a4abe84709aae93e90cf3028c6c13db96).

#### Parameters
* `path` assign the search path 

#### Returns
return True indicates the file or directory exists

#### `public static static `[`unlink`](#d5/d8f/namespacefs_1ad9728d670aa8f486d76c4052f6c8acd5)`(String path)` 

the file you want to delete

#### Parameters
* `path` the path you want to delete

#### `public static static `[`unlinkSync`](#d5/d8f/namespacefs_1a4b15f3243d3c3c277b71522e49a60e16)`(String path)` 

the file you want to delete. Sync version of [fs.unlink()](#d5/d8f/namespacefs_1ad9728d670aa8f486d76c4052f6c8acd5).

#### Parameters
* `path` the path you want to delete

#### `public static static `[`mkdir`](#d5/d8f/namespacefs_1ad11bbef581ff87c5fc33e8b3d4b98dfb)`(String path,Integer mode)` 

create a directory

#### Parameters
* `path` assign the name of directory 

* `mode` assign file ownership, Windows user ignore this

#### `public static static `[`mkdirSync`](#d5/d8f/namespacefs_1a82c90f7692b9fbea8577fc99628320d9)`(String path,Integer mode)` 

create a directory. Sync version of [fs.mkdir()](#d5/d8f/namespacefs_1ad11bbef581ff87c5fc33e8b3d4b98dfb).

#### Parameters
* `path` assign the name of directory 

* `mode` assign file ownership, Windows user ignore this

#### `public static static `[`rmdir`](#d5/d8f/namespacefs_1ae63300a92680e28c3b2bd55046120049)`(String path)` 

delete a directory

#### Parameters
* `path` the name of targeting directory

#### `public static static `[`rmdirSync`](#d5/d8f/namespacefs_1a20b380c23534d145eecead87d9b2cab8)`(String path)` 

delete a directory. Sync version of [fs.rmdir()](#d5/d8f/namespacefs_1ae63300a92680e28c3b2bd55046120049).

#### Parameters
* `path` the name of targeting directory

#### `public static static `[`rename`](#d5/d8f/namespacefs_1a6cfec17da170f79ad860f37515990603)`(String from,String to)` 

rename a file

#### Parameters
* `from` the targeting file name 

* `to` the name you want to change to

#### `public static static `[`renameSync`](#d5/d8f/namespacefs_1a439bc947232694de63ae6b927d79e938)`(String from,String to)` 

rename a file

#### Parameters
* `from` the targeting file name. Sync version of [fs.rename()](#d5/d8f/namespacefs_1a6cfec17da170f79ad860f37515990603). 

* `to` the name you want to change to

#### `public static static `[`copy`](#d5/d8f/namespacefs_1aeff5066a3493122a9cecd8977cbd83d9)`(String from,String to)` 

copy file

#### Parameters
* `from` file path 

* `to` new file path

#### `public static static `[`chmod`](#d5/d8f/namespacefs_1a5b69648f9d4875d97bd01b007c095f94)`(String path,Integer mode)` 

check the permission of targeting file, Windows does not support this

#### Parameters
* `path` the path to the targeting file 

* `mode` targeting file permission

#### `public static static `[`chmodSync`](#d5/d8f/namespacefs_1a471a11730f2ab34cbe85287548ec6675)`(String path,Integer mode)` 

check the permission of targeting file, Windows does not support this. Sync version of [fs.chmod()](#d5/d8f/namespacefs_1a5b69648f9d4875d97bd01b007c095f94).

#### Parameters
* `path` the path to the targeting file 

* `mode` targeting file permission

#### `public static `[`Stat`](#dc/da9/interfaceStat)` `[`stat`](#d5/d8f/namespacefs_1a51eb9e7e0bebba7af47eeff6ddcb6425)`(String path)` 

check file basic infomation/stat

#### Parameters
* `path` the path to the targeting file 

#### Returns
return file basic infomation/stat

#### `public static `[`Stat`](#dc/da9/interfaceStat)` `[`statSync`](#d5/d8f/namespacefs_1a73fcecc3120d7be9f3e9628e4354107f)`(String path)` 

check file basic infomation/stat. Sync version of [fs.stat()](#d5/d8f/namespacefs_1a51eb9e7e0bebba7af47eeff6ddcb6425).

#### Parameters
* `path` the path to the targeting file 

#### Returns
return file basic infomation/stat

#### `public static `[`List`](#de/dd8/interfaceList)` `[`readdir`](#d5/d8f/namespacefs_1a598ef237aea287f4328743429f81ede1)`(String path)` 

read fileinfo inside target directory

#### Parameters
* `path` the path to the directory 

#### Returns
return a array of files' info in target directory

#### `public static `[`List`](#de/dd8/interfaceList)` `[`readdirSync`](#d5/d8f/namespacefs_1a8b687854a662b716a575b6c8b80963b4)`(String path)` 

read fileinfo inside target directory. Sync version of [fs.readdir()](#d5/d8f/namespacefs_1a598ef237aea287f4328743429f81ede1).

#### Parameters
* `path` the path to the directory 

#### Returns
return a array of files' info in target directory

#### `public static `[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` `[`open`](#d5/d8f/namespacefs_1a9e774ee83e01eb9115e65c0c2c38e8b4)`(String fname,String flags)` 

open text file to read, write, or read and write

#### Parameters
* `fname` the name of file 

* `flags` define the method for opening file, default is 'r', read only, other supported methods see below:

* 'r' ready only, throw excption if file dose not exists

* 'r+' read and write, throw excption if file dose not exists

* 'w' write only, create new if file dose not exist, othewise overwrite

* 'w+' ready and write, create new if file dose not exist, othewise overwrite

* 'a' write only add file, create new if file dose not exist, othewise overwrite

* 'a+' read and write to add file, create new if file dose not exist, othewise overwrite 

#### Returns
return opened file object

#### `public static `[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` `[`openSync`](#d5/d8f/namespacefs_1a405870e84dfb1e371e37dbfc84b91bb9)`(String fname,String flags)` 

open text file to read, write, or read and write. Sync version of [fs.open()](#d5/d8f/namespacefs_1a9e774ee83e01eb9115e65c0c2c38e8b4).

#### Parameters
* `fname` the name of file 

* `flags` define the method for opening file, default is 'r', read only, other supported methods see below:

* 'r' ready only, throw excption if file dose not exists

* 'r+' read and write, throw excption if file dose not exists

* 'w' write only, create new if file dose not exist, othewise overwrite

* 'w+' ready and write, create new if file dose not exist, othewise overwrite

* 'a' write only add file, create new if file dose not exist, othewise overwrite

* 'a+' read and write to add file, create new if file dose not exist, othewise overwrite 

#### Returns
return opened file object

#### `public static `[`BufferedStream`](#d0/d37/interfaceBufferedStream)` `[`openTextStream`](#d5/d8f/namespacefs_1aaf625a15d9268621cb10eacc4154db5e)`(String fname,String flags)` 

open text file to read, write, or read and write

#### Parameters
* `fname` the name of file 

* `flags` define the method for opening file, default is 'r', read only, other supported methods see below:

* 'r' ready only, throw excption if file dose not exists

* 'r+' read and write, throw excption if file dose not exists

* 'w' write only, create new if file dose not exist, othewise overwrite

* 'w+' ready and write, create new if file dose not exist, othewise overwrite

* 'a' write only add file, create new if file dose not exist, othewise overwrite

* 'a+' read and write to add file, create new if file dose not exist, othewise overwrite 

#### Returns
return opened file object

#### `public static String `[`readTextFile`](#d5/d8f/namespacefs_1a3c55a9cb42fc1d40decfd30bd2e739e1)`(String fname)` 

open file and read the conent.

#### Parameters
* `fname` the name of file 

#### Returns
file content

#### `public static String `[`readFile`](#d5/d8f/namespacefs_1a7e1ad1be495a3c5e986908fa56861acd)`(String fname)` 

open a file, read the content

#### Parameters
* `fname` assign file name 

#### Returns
return content of opened file

#### `public static `[`Buffer`](#d0/d11/classBuffer)` `[`readFileSync`](#d5/d8f/namespacefs_1af669e44c86fb17d611438696a9af0f18)`(String fname)` 

open a file, read the content. Sync version of [fs.readFile()](#d5/d8f/namespacefs_1a7e1ad1be495a3c5e986908fa56861acd).

#### Parameters
* `fname` assign file name 

#### Returns
return content of opened file

#### `public static Array `[`readLines`](#d5/d8f/namespacefs_1acb42968e4acb281d4633997321392ab1)`(String fname,Integer maxlines)` 

open file, ready each line of text content intot an array, end of line is recognized based on EOL definition, by default, posix system: "\n"; windows system: "\r\n"

#### Parameters
* `fname` assign file name 

* `maxlines` define the maximum number of line to read, read all lines by default 

#### Returns
return the array containing every line of file content, if no content or connection is lost, then return an empty array

#### `public static static `[`writeTextFile`](#d5/d8f/namespacefs_1a7f608ea611628c8dc7aadc79f7056085)`(String fname,String txt)` 

create text file and write to file 创建文本文件，并写入内容

#### Parameters
* `fname` assign file name 

* `txt` sting to be written

#### `public static static `[`writeFile`](#d5/d8f/namespacefs_1a2b9fe79326ffd7bca6e432f1a667f306)`(String fname,String txt)` 

create file, and write new content

#### Parameters
* `fname` assign file name 

* `txt` the content you are going to write into file

#### `public static static `[`writeFileSync`](#d5/d8f/namespacefs_1a8a885a62f0e269f303cd59b00511eca0)`(String fname,`[`Buffer`](#d0/d11/classBuffer)` data)` 

create file, and write new content. Sync version of [fs.writeFile()](#d5/d8f/namespacefs_1a2b9fe79326ffd7bca6e432f1a667f306).

#### Parameters
* `fname` assign file name 

* `txt` the content you are going to write into file

