+++
draft = false
title = "coroutine"
description = "Concurrency control module."
[menu.main]
parent = "modules"
identifier = "coroutine"
+++

Concurrency control module.

The way to use: var coroutine = require('coroutine');

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`Fiber`](#d4/d39/interfaceFiber)` `[`start`](#d6/d05/namespacecoroutine_1aab30743ccc280e7950189c50a0afabde)`(Function func,...)`            | Start a fibers and return the fiber Object.
`public static Array `[`parallel`](#d6/d05/namespacecoroutine_1a265ed258231cc730ea14ada21d80e718)`(Array funcs,Integer fibers)`            | Execute a set of functions parallel, and wait for the return.
`public static Array `[`parallel`](#d6/d05/namespacecoroutine_1a495ba9988ad78bf14dce8ba03ee963d5)`(Array datas,Function func,Integer fibers)`            | Execute a function deal with a set of data parallel, and wait for the return.
`public static Array `[`parallel`](#d6/d05/namespacecoroutine_1aff48cfd6c77937aa2f5065a139192c93)`(...)`            | Execute a set of functions parallel, and wait for the return.
`public static `[`Fiber`](#d4/d39/interfaceFiber)` `[`current`](#d6/d05/namespacecoroutine_1ae2d278991596f4170f2be18ae8d71454)`()`            | Returns the current fiber.
`public static static `[`sleep`](#d6/d05/namespacecoroutine_1ae9ce1c1d0ffbff909196806efabe7fa3)`(Integer ms)`            | Pause the current fiber specified time.

## Members

#### `public static `[`Fiber`](#d4/d39/interfaceFiber)` `[`start`](#d6/d05/namespacecoroutine_1aab30743ccc280e7950189c50a0afabde)`(Function func,...)` 

Start a fibers and return the fiber Object.

#### Parameters
* `func` Set a function to be executed by the fibers. 

* `...` Variable parameter sequence, the sequence will pass to function in fiber. 

#### Returns
Returns the fiber object.

#### `public static Array `[`parallel`](#d6/d05/namespacecoroutine_1a265ed258231cc730ea14ada21d80e718)`(Array funcs,Integer fibers)` 

Execute a set of functions parallel, and wait for the return.

#### Parameters
* `funcs` An array of function to be executed parallel 

* `fibers` Limit the number of concurrent fiber, default -1 (the number of funcs size). 

#### Returns
Returns the array of functions execute results

#### `public static Array `[`parallel`](#d6/d05/namespacecoroutine_1a495ba9988ad78bf14dce8ba03ee963d5)`(Array datas,Function func,Integer fibers)` 

Execute a function deal with a set of data parallel, and wait for the return.

#### Parameters
* `datas` An array of params to be executed by function parallel. 

* `func` The function executed parallel 

* `fibers` Limit the number of concurrent fiber, default -1 (the number of datas size). 

#### Returns
Returns the array of function execute results

#### `public static Array `[`parallel`](#d6/d05/namespacecoroutine_1aff48cfd6c77937aa2f5065a139192c93)`(...)` 

Execute a set of functions parallel, and wait for the return.

#### Parameters
* `...` A set of function to be execute parallel 

#### Returns
Returns the array of functions execute results

#### `public static `[`Fiber`](#d4/d39/interfaceFiber)` `[`current`](#d6/d05/namespacecoroutine_1ae2d278991596f4170f2be18ae8d71454)`()` 

Returns the current fiber.

#### Returns
Returns the current fiber object.

#### `public static static `[`sleep`](#d6/d05/namespacecoroutine_1ae9ce1c1d0ffbff909196806efabe7fa3)`(Integer ms)` 

Pause the current fiber specified time.

#### Parameters
* `ms` Specify the suspend time in milliseconds, the default value is 0, which back to resume immediately.

