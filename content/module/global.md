+++
draft = false
title = "global"
description = "Global object, which can be accessed by all scripts."
[menu.main]
parent = "modules"
identifier = "global"
+++

Global object, which can be accessed by all scripts.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static static `[`run`](#d4/dfd/namespaceglobal_1a9d3c7d79f836d3d5785a6b8f9ab4581c)`(String fname,Array argv)`            | Run a script.
`public static Value `[`require`](#d4/dfd/namespaceglobal_1a9b11defd1000737a5b70b50edfcc8156)`(String id)`            | Load a module and return module object, reference [Module Management](#d0/db5/module).
`public static static `[`GC`](#d4/dfd/namespaceglobal_1a02a28758a633a7b1493471415c8949ba)`()`            | Mandatory for garbage collection.
`public static static `[`repl`](#d4/dfd/namespaceglobal_1abae4e926703798996fa53e61c30cd710)`(Array cmds)`            | Enter the interactive mode, you can interactively execute the internal commands and code which can only be referenced when js start.
`public static static `[`repl`](#d4/dfd/namespaceglobal_1ac297812b42a1bfd1d9211b8ca07686e0)`(`[`Stream`](#d4/dc7/interfaceStream)` out,Array cmds)`            | Enter the interactive mode, you can interactively execute the internal commands and code which can only be referenced when js start.

## Members

#### `public static static `[`run`](#d4/dfd/namespaceglobal_1a9d3c7d79f836d3d5785a6b8f9ab4581c)`(String fname,Array argv)` 

Run a script.

#### Parameters
* `fname` Specifies the running path for script 

* `argv` Specify the run parameters, which can be caught in script by argv.

#### `public static Value `[`require`](#d4/dfd/namespaceglobal_1a9b11defd1000737a5b70b50edfcc8156)`(String id)` 

Load a module and return module object, reference [Module Management](#d0/db5/module).

require can be used to load the base module, such as file module.

Base module is initializing when the sandbox created, only need pass the id when referencing, e.g: require("net")。

[File](#d3/d3a/interfaceFile) module is user-defined modules which required by the relative path beginning with './' or '../'. [File](#d3/d3a/interfaceFile) module supports .js and .json file.

[File](#d3/d3a/interfaceFile) module also supports the format package.json, system will first require the main in package.json when the module is a directory, then will try to load index.js or index.json in the path if failed.

If the path is not a reference beginning with ./ or ../, and the module is not non-base module, system will first require the match one in startup path, and then look for the .modules in current path, then try the parent directory.

#### Parameters
* `id` Specifies the name of module to load 

#### Returns
Returns the derivation of the load module

#### `public static static `[`GC`](#d4/dfd/namespaceglobal_1a02a28758a633a7b1493471415c8949ba)`()` 

Mandatory for garbage collection.

#### `public static static `[`repl`](#d4/dfd/namespaceglobal_1abae4e926703798996fa53e61c30cd710)`(Array cmds)` 

Enter the interactive mode, you can interactively execute the internal commands and code which can only be referenced when js start.

#### Parameters
* `cmds` Add commands in the following format: 
```cpp
[
    {
        cmd: ".test",
        help: "this is a test",
        exec: function(argv) {
            console.log(argv);
        }
    },
    {
        cmd: ".test1",
        help: "this is an other test",
        exec: function(argv) {
            console.log(argv);
        }
    }
]
```

#### `public static static `[`repl`](#d4/dfd/namespaceglobal_1ac297812b42a1bfd1d9211b8ca07686e0)`(`[`Stream`](#d4/dc7/interfaceStream)` out,Array cmds)` 

Enter the interactive mode, you can interactively execute the internal commands and code which can only be referenced when js start.

At the same time allowed only a [Stream](#d4/dc7/interfaceStream) repl, close the previous one when create a new [Stream](#d4/dc7/interfaceStream) repl. 
#### Parameters
* `out` Input/output stream object, usually for a network connection 

* `cmds` Add commands in the following format: 
```cpp
[
    {
        cmd: ".test",
        help: "this is a test",
        exec: function(argv) {
            console.log(argv);
        }
    },
    {
        cmd: ".test1",
        help: "this is an other test",
        exec: function(argv) {
            console.log(argv);
        }
    }
]
```

