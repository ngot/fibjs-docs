+++
draft = false
title = "profiler"
description = "Memory profiler module."
[menu.main]
parent = "modules"
identifier = "profiler"
+++

Memory profiler module.

The way to use: 
```cpp
var profiler = require('profiler');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static static `[`saveSnapshot`](#dc/dfc/namespaceprofiler_1a522199cc72b9b3128d9ef505b28d23ce)`(String fname)`            | Save a [HeapSnapshot](#de/d09/interfaceHeapSnapshot) with the specified name.
`public static `[`HeapSnapshot`](#de/d09/interfaceHeapSnapshot)` `[`loadSnapshot`](#dc/dfc/namespaceprofiler_1ab8d9e12312e7b9d6f30ab6f0d207c6db)`(String fname)`            | Load a [HeapSnapshot](#de/d09/interfaceHeapSnapshot) with the specified name.
`public static `[`HeapSnapshot`](#de/d09/interfaceHeapSnapshot)` `[`takeSnapshot`](#dc/dfc/namespaceprofiler_1a8f0ddc26ac08a9e5bbf7680828216d98)`()`            | Get the current [HeapSnapshot](#de/d09/interfaceHeapSnapshot), HeapSnapshots record the state of the JS heap at some moment.
`public static static `[`DeleteAllHeapSnapshots`](#dc/dfc/namespaceprofiler_1aded7471964dc52ef231970b40aefb40c)`()`            | Delete all HeapSnapshots.

## Members

#### `public static static `[`saveSnapshot`](#dc/dfc/namespaceprofiler_1a522199cc72b9b3128d9ef505b28d23ce)`(String fname)` 

Save a [HeapSnapshot](#de/d09/interfaceHeapSnapshot) with the specified name.

#### Parameters
* `fname` [HeapSnapshot](#de/d09/interfaceHeapSnapshot) name.

#### `public static `[`HeapSnapshot`](#de/d09/interfaceHeapSnapshot)` `[`loadSnapshot`](#dc/dfc/namespaceprofiler_1ab8d9e12312e7b9d6f30ab6f0d207c6db)`(String fname)` 

Load a [HeapSnapshot](#de/d09/interfaceHeapSnapshot) with the specified name.

#### Parameters
* `fname` [HeapSnapshot](#de/d09/interfaceHeapSnapshot) name. 

#### Returns
Return the [HeapSnapshot](#de/d09/interfaceHeapSnapshot) loaded.

#### `public static `[`HeapSnapshot`](#de/d09/interfaceHeapSnapshot)` `[`takeSnapshot`](#dc/dfc/namespaceprofiler_1a8f0ddc26ac08a9e5bbf7680828216d98)`()` 

Get the current [HeapSnapshot](#de/d09/interfaceHeapSnapshot), HeapSnapshots record the state of the JS heap at some moment.

#### Returns
Returns the acquired HeapSnapshots.

#### `public static static `[`DeleteAllHeapSnapshots`](#dc/dfc/namespaceprofiler_1aded7471964dc52ef231970b40aefb40c)`()` 

Delete all HeapSnapshots.

