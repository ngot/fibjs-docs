+++
draft = false
title = "console"
description = "Global reference. Console can be used to log info, warnings and errors. Log can be trace on different device when initialized from config files for tracking."
[menu.main]
parent = "modules"
identifier = "console"
+++

console module

Global reference. Console can be used to log info, warnings and errors. Log can be trace on different device when initialized from config files for tracking. Console logs support formatted output, e.g. 
```cpp
console.log("%d + %d = %d", 100, 200, 100 + 200);
```

* s - string

* d - number, including initeger and numbers

* j - output in JSON

* %% - output '' character

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static static `[`add`](#dc/daa/namespaceconsole_1aed5a7fd6fee0b6c8360ef8bb1009ba9d)`(Array cfg)`            | Batch add console output, supportted devices are console, syslog and file, maximum output number is 10.
`public static static `[`add`](#dc/daa/namespaceconsole_1a0b8dfb79a4fdde0c10b7e7d66d69694a)`(Value cfg)`            | Add console output, supportted devices are console, syslog and file, maximum output number is 10.
`public static static `[`reset`](#dc/daa/namespaceconsole_1ac5c17a9ecdac8ec7966bff0754f3122b)`()`            | initialize with default configuration, only output in console
`public static static `[`log`](#dc/daa/namespaceconsole_1a93b42645d56e3b4da5d2dc28ba6593cf)`(String fmt,...)`            | Record INFO log, Equivalent to the info function.
`public static static `[`log`](#dc/daa/namespaceconsole_1ac3cab060d14c380024c402df70f73877)`(...)`            | Record INFO log, Equivalent to the info function.
`public static static `[`debug`](#dc/daa/namespaceconsole_1adff204aa3e37763481680087157754a1)`(String fmt,...)`            | Record DEBUG log.
`public static static `[`debug`](#dc/daa/namespaceconsole_1aec6d50753570141dda375e85594b5b6d)`(...)`            | Record DEBUG log.
`public static static `[`info`](#dc/daa/namespaceconsole_1a195000bab966ff5ccbf1ea69cf1cc12e)`(String fmt,...)`            | Record INFO log, Equivalent to the log function.
`public static static `[`info`](#dc/daa/namespaceconsole_1a88b9f04ef243106f58cbd0866072b7b5)`(...)`            | Record INFO log, Equivalent to the log function.
`public static static `[`notice`](#dc/daa/namespaceconsole_1a7bd9f400a69ccc58045bea58edc43614)`(String fmt,...)`            | Record NOTICE log.
`public static static `[`notice`](#dc/daa/namespaceconsole_1a9772882f183a2f91d26f8973ca95df3c)`(...)`            | Record NOTICE log.
`public static static `[`warn`](#dc/daa/namespaceconsole_1a85513e51e93e8d827ebedba45359161c)`(String fmt,...)`            | Record WARN log.
`public static static `[`warn`](#dc/daa/namespaceconsole_1a4731e95e6360c7bdf0513236bc0ea032)`(...)`            | Record WARN log.
`public static static `[`error`](#dc/daa/namespaceconsole_1a3525bdec50b085e03d6ca5625a057914)`(String fmt,...)`            | Record ERROR log.
`public static static `[`error`](#dc/daa/namespaceconsole_1abc33daf6e70210aa03b78832c2d6eea3)`(...)`            | Record ERROR log.
`public static static `[`crit`](#dc/daa/namespaceconsole_1aafeccfedf3222b47114d8ec262f10294)`(String fmt,...)`            | Record CRIT log.
`public static static `[`crit`](#dc/daa/namespaceconsole_1adf1c772e176fe40eb4ffae758cf22c64)`(...)`            | Record CRIT log.
`public static static `[`alert`](#dc/daa/namespaceconsole_1a9ed78376361d4d5bf88eb622bd03e7dc)`(String fmt,...)`            | Record ALERT log.
`public static static `[`alert`](#dc/daa/namespaceconsole_1af984caa1459a336e9420496f0b7d9f6c)`(...)`            | Record ALERT log.
`public static static `[`dir`](#dc/daa/namespaceconsole_1ae3da6ad36822e14bae83c0af3d5d7e46)`(Value obj)`            | Output object in JSON format.
`public static static `[`time`](#dc/daa/namespaceconsole_1aafdd7ca53b206fdeb5ca882510374475)`(String label)`            | Start a timer.
`public static static `[`timeEnd`](#dc/daa/namespaceconsole_1ab53e089924e192a2fa616e362f0bb71c)`(String label)`            | Value of specified timer.
`public static static `[`trace`](#dc/daa/namespaceconsole_1aa60d1f56ec155161db3f3d0e48c2c2d3)`(String label)`            | Output the current used stack.
`public static static `[`assert`](#dc/daa/namespaceconsole_1abb065e74e5380ca19bfd6e9a6b2a4117)`(Value value,String msg)`            | Assertion test, which will throw error when testing result is false.
`public static static `[`print`](#dc/daa/namespaceconsole_1aa6fdaace53b2b761e09d73e3a1092442)`(String fmt,...)`            | Formatted text output to the console, the content will not be written to log system, and the output text does not wrap automatically, the output can output continuously.
`public static static `[`print`](#dc/daa/namespaceconsole_1a1448b275c7cc42856cf5ff8a0bd795ae)`(...)`            | Formatted text output to the console, the content will not be written to log system, and the output text does not wrap automatically, the output can output continuously.
`public static String `[`readLine`](#dc/daa/namespaceconsole_1a99e8e4d13c991dad4750cbd6a7a9e6c8)`(String msg)`            | Read the user input from the console.

## Members

#### `public static static `[`add`](#dc/daa/namespaceconsole_1aed5a7fd6fee0b6c8360ef8bb1009ba9d)`(Array cfg)` 

Batch add console output, supportted devices are console, syslog and file, maximum output number is 10.

Console can be configured to send program outputs and system errors to different devices, for collecting runtime information.

```cpp
console.add(["console", {
   type: "syslog",
   levels: [console.INFO, console.ERROR]
}]);
```

#### Parameters
* `cfg` An array of console log config

#### `public static static `[`add`](#dc/daa/namespaceconsole_1a0b8dfb79a4fdde0c10b7e7d66d69694a)`(Value cfg)` 

Add console output, supportted devices are console, syslog and file, maximum output number is 10.

Console can be configured to send program outputs and system errors to different devices, for collecting runtime information.

Cfg is config which can be set as the string of devices name.

```cpp
console.add("console");
```

You can also configure console levels for one device

```cpp
console.add({
   type: "console",
   levels: [console.INFO, console.ERROR]  // options, output all level of log if skip this option.
});
```

Syslog only works on posix platform:

```cpp
console.add({
   type: "syslog",
   levels: [console.INFO, console.ERROR]
});
```

file log dose not support simple calls

```cpp
console.add({
   type: "file",
   levels: [console.INFO, console.ERROR],
   path: "path/to/file",  // required
   split: "30m",  //optional, options can be "day", "hour", "minute", "###k", "###m", "###g"
   count: 10 //optional, options can be any integer between 2-128, this option requires the split option
});
```

#### Parameters
* `cfg` Output configuration

#### `public static static `[`reset`](#dc/daa/namespaceconsole_1ac5c17a9ecdac8ec7966bff0754f3122b)`()` 

initialize with default configuration, only output in console

#### `public static static `[`log`](#dc/daa/namespaceconsole_1a93b42645d56e3b4da5d2dc28ba6593cf)`(String fmt,...)` 

Record INFO log, Equivalent to the info function.

Record the INFO level of log information. Typically used to output the non-erroneous message. 
#### Parameters
* `fmt` The format string 

* `...` Optional parameter list

#### `public static static `[`log`](#dc/daa/namespaceconsole_1ac3cab060d14c380024c402df70f73877)`(...)` 

Record INFO log, Equivalent to the info function.

Record the INFO level of log information. Typically used to output the non-erroneous message. 
#### Parameters
* `...` Optional parameter list

#### `public static static `[`debug`](#dc/daa/namespaceconsole_1adff204aa3e37763481680087157754a1)`(String fmt,...)` 

Record DEBUG log.

Record the DEBUG level of log information. Typically used to output the debug message. 
#### Parameters
* `fmt` The format string 

* `...` Optional parameter list

#### `public static static `[`debug`](#dc/daa/namespaceconsole_1aec6d50753570141dda375e85594b5b6d)`(...)` 

Record DEBUG log.

Record the DEBUG level of log information. Typically used to output the debug message. 
#### Parameters
* `...` Optional parameter list

#### `public static static `[`info`](#dc/daa/namespaceconsole_1a195000bab966ff5ccbf1ea69cf1cc12e)`(String fmt,...)` 

Record INFO log, Equivalent to the log function.

Record the INFO level of log information. Typically used to output the non-erroneous message. 
#### Parameters
* `fmt` The format string 

* `...` Optional parameter list

#### `public static static `[`info`](#dc/daa/namespaceconsole_1a88b9f04ef243106f58cbd0866072b7b5)`(...)` 

Record INFO log, Equivalent to the log function.

Record the INFO level of log information. Typically used to output the non-erroneous message. 
#### Parameters
* `...` Optional parameter list

#### `public static static `[`notice`](#dc/daa/namespaceconsole_1a7bd9f400a69ccc58045bea58edc43614)`(String fmt,...)` 

Record NOTICE log.

Record the NOTICE level of log information. Typically used to output the suggestive debug message. 
#### Parameters
* `fmt` The format string 

* `...` Optional parameter list

#### `public static static `[`notice`](#dc/daa/namespaceconsole_1a9772882f183a2f91d26f8973ca95df3c)`(...)` 

Record NOTICE log.

Record the NOTICE level of log information. Typically used to output the suggestive debug message. 
#### Parameters
* `...` Optional parameter list

#### `public static static `[`warn`](#dc/daa/namespaceconsole_1a85513e51e93e8d827ebedba45359161c)`(String fmt,...)` 

Record WARN log.

Record the WARN level of log information. Typically used to output the warning debug message. Important. 
#### Parameters
* `fmt` The format string 

* `...` Optional parameter list

#### `public static static `[`warn`](#dc/daa/namespaceconsole_1a4731e95e6360c7bdf0513236bc0ea032)`(...)` 

Record WARN log.

Record the WARN level of log information. Typically used to output the warning debug message. Important. 
#### Parameters
* `...` Optional parameter list

#### `public static static `[`error`](#dc/daa/namespaceconsole_1a3525bdec50b085e03d6ca5625a057914)`(String fmt,...)` 

Record ERROR log.

Record the ERROR level of log information. Typically used to output the error message. Very important. System error message is also record in this level. 
#### Parameters
* `fmt` The format string 

* `...` Optional parameter list

#### `public static static `[`error`](#dc/daa/namespaceconsole_1abc33daf6e70210aa03b78832c2d6eea3)`(...)` 

Record ERROR log.

Record the ERROR level of log information. Typically used to output the error message. Very important. System error message is also record in this level. 
#### Parameters
* `...` Optional parameter list

#### `public static static `[`crit`](#dc/daa/namespaceconsole_1aafeccfedf3222b47114d8ec262f10294)`(String fmt,...)` 

Record CRIT log.

Record the CRIT level of log information. Typically used to output the critical error message. Very important. 
#### Parameters
* `fmt` The format string 

* `...` Optional parameter list

#### `public static static `[`crit`](#dc/daa/namespaceconsole_1adf1c772e176fe40eb4ffae758cf22c64)`(...)` 

Record CRIT log.

Record the CRIT level of log information. Typically used to output the critical error message. Very important. 
#### Parameters
* `...` Optional parameter list

#### `public static static `[`alert`](#dc/daa/namespaceconsole_1a9ed78376361d4d5bf88eb622bd03e7dc)`(String fmt,...)` 

Record ALERT log.

Record the ALERT level of log information. Typically used to output the alert error message. Very important. This level is the highest one. 
#### Parameters
* `fmt` The format string 

* `...` Optional parameter list

#### `public static static `[`alert`](#dc/daa/namespaceconsole_1af984caa1459a336e9420496f0b7d9f6c)`(...)` 

Record ALERT log.

Record the ALERT level of log information. Typically used to output the alert error message. Very important. This level is the highest one. 
#### Parameters
* `...` Optional parameter list

#### `public static static `[`dir`](#dc/daa/namespaceconsole_1ae3da6ad36822e14bae83c0af3d5d7e46)`(Value obj)` 

Output object in JSON format.

#### Parameters
* `obj` The object given to display

#### `public static static `[`time`](#dc/daa/namespaceconsole_1aafdd7ca53b206fdeb5ca882510374475)`(String label)` 

Start a timer.

#### Parameters
* `label` Title, default is an empty string.

#### `public static static `[`timeEnd`](#dc/daa/namespaceconsole_1ab53e089924e192a2fa616e362f0bb71c)`(String label)` 

Value of specified timer.

#### Parameters
* `label` Title, default is an empty string.

#### `public static static `[`trace`](#dc/daa/namespaceconsole_1aa60d1f56ec155161db3f3d0e48c2c2d3)`(String label)` 

Output the current used stack.

Output the current used stack by log. 
#### Parameters
* `label` Title, default is an empty string.

#### `public static static `[`assert`](#dc/daa/namespaceconsole_1abb065e74e5380ca19bfd6e9a6b2a4117)`(Value value,String msg)` 

Assertion test, which will throw error when testing result is false.

#### Parameters
* `value` The value for test 

* `msg` Error message

#### `public static static `[`print`](#dc/daa/namespaceconsole_1aa6fdaace53b2b761e09d73e3a1092442)`(String fmt,...)` 

Formatted text output to the console, the content will not be written to log system, and the output text does not wrap automatically, the output can output continuously.

#### Parameters
* `fmt` The format string 

* `...` Optional parameter list

#### `public static static `[`print`](#dc/daa/namespaceconsole_1a1448b275c7cc42856cf5ff8a0bd795ae)`(...)` 

Formatted text output to the console, the content will not be written to log system, and the output text does not wrap automatically, the output can output continuously.

#### Parameters
* `...` Optional parameter list

#### `public static String `[`readLine`](#dc/daa/namespaceconsole_1a99e8e4d13c991dad4750cbd6a7a9e6c8)`(String msg)` 

Read the user input from the console.

#### Parameters
* `msg` Prompt information 

#### Returns
Returns the user input information.

