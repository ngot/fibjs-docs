+++
draft = false
title = "test"
description = "Test Suite module that defines the test suite management."
[menu.main]
parent = "modules"
identifier = "test"
+++

Test Suite module that defines the test suite management.

To use it: 
```cpp
var test = require('test');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static static `[`describe`](#df/d04/namespacetest_1a28c68bd81db526a96da4da2313a3a921)`(String name,Function block)`            | The definition of a test module and can be nested definition.
`public static static `[`xdescribe`](#df/d04/namespacetest_1a8f7ec245553178944e267569115afbe2)`(String name,Function block)`            | The definition of a test module to be stopped.
`public static static `[`it`](#df/d04/namespacetest_1ada0940ce267ec02e7a502ee402a693bd)`(String name,Function block)`            | Define a test project.
`public static static `[`xit`](#df/d04/namespacetest_1a37c8a63824fc3fa3f17b734daf2e782f)`(String name,Function block)`            | Prohibit test project definition.
`public static static `[`before`](#df/d04/namespacetest_1af0cd25d326c6fbed1eca286abb4df915)`(Function func)`            | Define the incident event for current test module.
`public static static `[`after`](#df/d04/namespacetest_1a227f44f6942de86a78a0cef531de0bd2)`(Function func)`            | Define the exit event for current test module.
`public static static `[`beforeEach`](#df/d04/namespacetest_1a934439b75ffe6517612b37f8f64a7d0e)`(Function func)`            | Define the incident event for current test project.
`public static static `[`afterEach`](#df/d04/namespacetest_1a5e2d4ee95a3dfbcc80378c677728114d)`(Function func)`            | Define the exit event for current test project.
`public static Integer `[`run`](#df/d04/namespacetest_1a8e9c3ee5b129b4f584ffc95ccae6bacb)`(Integer loglevel)`            | Module to start executing definition.
`public static `[`Expect`](#d0/df6/interfaceExpect)` `[`expect`](#df/d04/namespacetest_1a278434a7f57c827da6585fc0f23499ea)`(Value actual,String msg)`            | expect Grammar test engine
`public static static `[`setup`](#df/d04/namespacetest_1a38550424e855b291100020778b09064a)`(Integer mode)`            | The current test environment initialization script, the test module method to copy a global variable for the current script.

## Members

#### `public static static `[`describe`](#df/d04/namespacetest_1a28c68bd81db526a96da4da2313a3a921)`(String name,Function block)` 

The definition of a test module and can be nested definition.

#### Parameters
* `name` Module name 

* `block` Initial code

#### `public static static `[`xdescribe`](#df/d04/namespacetest_1a8f7ec245553178944e267569115afbe2)`(String name,Function block)` 

The definition of a test module to be stopped.

#### Parameters
* `name` Module name 

* `block` Initial code

#### `public static static `[`it`](#df/d04/namespacetest_1ada0940ce267ec02e7a502ee402a693bd)`(String name,Function block)` 

Define a test project.

#### Parameters
* `name` Project name 

* `block` Test block

#### `public static static `[`xit`](#df/d04/namespacetest_1a37c8a63824fc3fa3f17b734daf2e782f)`(String name,Function block)` 

Prohibit test project definition.

#### Parameters
* `name` Project name 

* `block` Test block

#### `public static static `[`before`](#df/d04/namespacetest_1af0cd25d326c6fbed1eca286abb4df915)`(Function func)` 

Define the incident event for current test module.

#### Parameters
* `func` [Event](#d7/ddf/interfaceEvent) handler

#### `public static static `[`after`](#df/d04/namespacetest_1a227f44f6942de86a78a0cef531de0bd2)`(Function func)` 

Define the exit event for current test module.

#### Parameters
* `func` [Event](#d7/ddf/interfaceEvent) handler

#### `public static static `[`beforeEach`](#df/d04/namespacetest_1a934439b75ffe6517612b37f8f64a7d0e)`(Function func)` 

Define the incident event for current test project.

#### Parameters
* `func` [Event](#d7/ddf/interfaceEvent) handler

#### `public static static `[`afterEach`](#df/d04/namespacetest_1a5e2d4ee95a3dfbcc80378c677728114d)`(Function func)` 

Define the exit event for current test project.

#### Parameters
* `func` [Event](#d7/ddf/interfaceEvent) handler

#### `public static Integer `[`run`](#df/d04/namespacetest_1a8e9c3ee5b129b4f584ffc95ccae6bacb)`(Integer loglevel)` 

Module to start executing definition.

#### Parameters
* `loglevel` Log output level is specified when tested, ERROR, the project focused on the report the error message is displayed, below ERROR, output information displayed at any time, while higher than ERROR, display only reports 

#### Returns
Return the statistical result of test case, return 0 when meet no error, return the error number of errors.

#### `public static `[`Expect`](#d0/df6/interfaceExpect)` `[`expect`](#df/d04/namespacetest_1a278434a7f57c827da6585fc0f23499ea)`(Value actual,String msg)` 

expect Grammar test engine

#### Parameters
* `actual` Value to test 

* `msg` [Message](#d6/db7/interfaceMessage) when error occurs 

#### Returns
Return [Expect](#d0/df6/interfaceExpect) for chain operations

#### `public static static `[`setup`](#df/d04/namespacetest_1a38550424e855b291100020778b09064a)`(Integer mode)` 

The current test environment initialization script, the test module method to copy a global variable for the current script.

#### Parameters
* `mode` Indicates initial mode, default is BDD

