+++
draft = false
title = "vm"
description = "Safe SandBox module, to isolate runtime based on safety level."
[menu.main]
parent = "modules"
identifier = "vm"
+++

Safe [SandBox](#d5/dd4/interfaceSandBox) module, to isolate runtime based on safety level.

By establishing a safe [SandBox](#d5/dd4/interfaceSandBox), you can limit the accessible resources when the script runs, and isolate different script execution environment, also can be customized for different environments base module to ensure the safety of the overall operating environment.

Following example demonstrates a sandbox which is only allowed for accessing assert module, and add a and b as customized modules. 
```cpp
var vm = require('vm');
var sbox = new vm.SandBox({
  a: 100,
  b: 200,
  assert: require('assert')
});

var mod_in_sbox = sbox.require('./path/to/mod');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`SandBox`](#d5/dd4/interfaceSandBox)` new `[`SandBox`](#d8/d89/namespacevm_1a8e842bfbf905fcd1ef830b1074f59a34)`()`            | Create a [SandBox](#d5/dd4/interfaceSandBox) object, see [SandBox](#d5/dd4/interfaceSandBox).

## Members

#### `public static `[`SandBox`](#d5/dd4/interfaceSandBox)` new `[`SandBox`](#d8/d89/namespacevm_1a8e842bfbf905fcd1ef830b1074f59a34)`()` 

Create a [SandBox](#d5/dd4/interfaceSandBox) object, see [SandBox](#d5/dd4/interfaceSandBox).

