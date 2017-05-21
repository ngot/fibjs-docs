+++
draft = false
title = "process"
description = "Process handle module, to manage current process resources."
[menu.main]
parent = "modules"
identifier = "process"
+++

Process handle module, to manage current process resources.

To use it: 
```cpp
var process = require('process');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static Integer `[`umask`](#d8/d25/namespaceprocess_1a51e18d137c98fd88756d714f2022aa71)`(Integer mask)`            | change the current umask，Windows does't support this.
`public static Integer `[`umask`](#d8/d25/namespaceprocess_1aaf9d2a4e35aed285f9826e28419e930f)`(String mask)`            | change the current umask，Windows does't support this.
`public static Integer `[`umask`](#d8/d25/namespaceprocess_1a7d39fd6d6085358f1fd9dd9e44777555)`()`            | return the current umask，Windows does't support this.
`public static static `[`exit`](#d8/d25/namespaceprocess_1a219dc13763dff453b237901c89bc6add)`(Integer code)`            | Exit current process, and return result.
`public static String `[`cwd`](#d8/d25/namespaceprocess_1a59492653e6cf45081a9c8a348c57af16)`()`            | Return current work path of the operating system.
`public static static `[`chdir`](#d8/d25/namespaceprocess_1a8561579fcdf7f34e795e6937829a39ff)`(String directory)`            | Change the current work path of operating system.
`public static Number `[`uptime`](#d8/d25/namespaceprocess_1a37ac67356e04ce3c54b6a707f0e2783e)`()`            | returns the system uptime in number of seconds.
`public static Object `[`memoryUsage`](#d8/d25/namespaceprocess_1a30bf3a01655c4e12298c063786156d2b)`()`            | Get report of memory the current process consumpt.
`public static static `[`nextTick`](#d8/d25/namespaceprocess_1a5f1a7165f38798666a6fe0ed55b4404b)`(Function func,...)`            | start a fiber
`public static `[`SubProcess`](#d8/d10/interfaceSubProcess)` `[`open`](#d8/d25/namespaceprocess_1aae5284cd12d7829a4892eb43450b6e0b)`(String command,Array args,Object opts)`            | Create chlid process taking charge of stdin and stdout and run bash command.
`public static `[`SubProcess`](#d8/d10/interfaceSubProcess)` `[`open`](#d8/d25/namespaceprocess_1a8705d424d2621e41adc98d6755c176ab)`(String command,Object opts)`            | Create chlid process taking charge of stdin and stdout and run bash command.
`public static `[`SubProcess`](#d8/d10/interfaceSubProcess)` `[`start`](#d8/d25/namespaceprocess_1aa2569c7583e8dd1c3b92086002c6e741)`(String command,Array args,Object opts)`            | Create chlid process and run bash command.
`public static `[`SubProcess`](#d8/d10/interfaceSubProcess)` `[`start`](#d8/d25/namespaceprocess_1a930139c20bcdedef5d5fbd9ec22ed7ef)`(String command,Object opts)`            | Create chlid process and run bash command.
`public static Integer `[`run`](#d8/d25/namespaceprocess_1add057f3b20e86373a9b1ba9e1757504c)`(String command,Array args,Object opts)`            | Run bash command and return result code.
`public static Integer `[`run`](#d8/d25/namespaceprocess_1ada594bfe0c7da5d9346cb074292bb13d)`(String command,Object opts)`            | Run bash command and return result code.

## Members

#### `public static Integer `[`umask`](#d8/d25/namespaceprocess_1a51e18d137c98fd88756d714f2022aa71)`(Integer mask)` 

change the current umask，Windows does't support this.

#### Parameters
* `mask` the mask to set 

#### Returns
the previous mask

#### `public static Integer `[`umask`](#d8/d25/namespaceprocess_1aaf9d2a4e35aed285f9826e28419e930f)`(String mask)` 

change the current umask，Windows does't support this.

#### Parameters
* `mask` octonary string(e.g: "0664") 

#### Returns
the previous mask

#### `public static Integer `[`umask`](#d8/d25/namespaceprocess_1a7d39fd6d6085358f1fd9dd9e44777555)`()` 

return the current umask，Windows does't support this.

#### Returns
the current mask

#### `public static static `[`exit`](#d8/d25/namespaceprocess_1a219dc13763dff453b237901c89bc6add)`(Integer code)` 

Exit current process, and return result.

#### Parameters
* `code` result of process.

#### `public static String `[`cwd`](#d8/d25/namespaceprocess_1a59492653e6cf45081a9c8a348c57af16)`()` 

Return current work path of the operating system.

#### Returns
Work path.

#### `public static static `[`chdir`](#d8/d25/namespaceprocess_1a8561579fcdf7f34e795e6937829a39ff)`(String directory)` 

Change the current work path of operating system.

#### Parameters
* `directory` The new work path.

#### `public static Number `[`uptime`](#d8/d25/namespaceprocess_1a37ac67356e04ce3c54b6a707f0e2783e)`()` 

returns the system uptime in number of seconds.

#### Returns
seconds

#### `public static Object `[`memoryUsage`](#d8/d25/namespaceprocess_1a30bf3a01655c4e12298c063786156d2b)`()` 

Get report of memory the current process consumpt.

#### Returns
Memory report object.

Memory report like this: 
```cpp
{
  "rss": 8622080,
  "heapTotal": 4083456,
  "heapUsed": 1621800
}
```
 among the report：

* rss Occupation of physical memory.

* heapTotal Total heap memory of v8.

* heapUsed Heap memory occupied by v8.

#### `public static static `[`nextTick`](#d8/d25/namespaceprocess_1a5f1a7165f38798666a6fe0ed55b4404b)`(Function func,...)` 

start a fiber

#### Parameters
* `func` function to be executed in the new fiber. 

* `...` params which will be passed to the func.

#### `public static `[`SubProcess`](#d8/d10/interfaceSubProcess)` `[`open`](#d8/d25/namespaceprocess_1aae5284cd12d7829a4892eb43450b6e0b)`(String command,Array args,Object opts)` 

Create chlid process taking charge of stdin and stdout and run bash command.

#### Parameters
* `command` Bash command to be executed. 

* `args` Arguments for bash command. 

* `opts` Option of child process, such as: 
```cpp
{
    "timeout": 100, // unit ms
    "envs": [] // Enviroment variable of child process.
}
```

#### Returns
Child process object containing result of command.

#### `public static `[`SubProcess`](#d8/d10/interfaceSubProcess)` `[`open`](#d8/d25/namespaceprocess_1a8705d424d2621e41adc98d6755c176ab)`(String command,Object opts)` 

Create chlid process taking charge of stdin and stdout and run bash command.

#### Parameters
* `command` Bash command. 

* `opts` Option of child process, such as: 
```cpp
{
    "timeout": 100, // unit ms
    "envs": [] // Environment variable of child process.
}
```

#### Returns
Child process object containing result of command.

#### `public static `[`SubProcess`](#d8/d10/interfaceSubProcess)` `[`start`](#d8/d25/namespaceprocess_1aa2569c7583e8dd1c3b92086002c6e741)`(String command,Array args,Object opts)` 

Create chlid process and run bash command.

#### Parameters
* `command` Bash command. 

* `args` Arguments of bash command. 

* `opts` Option of child process, such as: 
```cpp
{
    "timeout": 100, // unit ms
    "envs": [] // Environment variable of child process.
}
```

#### Returns
Child process object containing result of the command.

#### `public static `[`SubProcess`](#d8/d10/interfaceSubProcess)` `[`start`](#d8/d25/namespaceprocess_1a930139c20bcdedef5d5fbd9ec22ed7ef)`(String command,Object opts)` 

Create chlid process and run bash command.

#### Parameters
* `command` Bash command. 

* `opts` Option of child process, such as: 
```cpp
{
    "timeout": 100, // unit ms
    "envs": [] // Environment variable of child process.
}
```

#### Returns
Child process object containing result of the command.

#### `public static Integer `[`run`](#d8/d25/namespaceprocess_1add057f3b20e86373a9b1ba9e1757504c)`(String command,Array args,Object opts)` 

Run bash command and return result code.

#### Parameters
* `command` Bash command. 

* `args` Arguments of bash command. 

* `opts` Option of child process, such as: 
```cpp
{
    "timeout": 100, // unit ms
    "envs": [] // Environment variable of child process.
}
```

#### Returns
Result code of bash command.

#### `public static Integer `[`run`](#d8/d25/namespaceprocess_1ada594bfe0c7da5d9346cb074292bb13d)`(String command,Object opts)` 

Run bash command and return result code.

#### Parameters
* `command` Bash command. 

* `opts` Option of child process, such as: 
```cpp
{
    "timeout": 100, // unit ms
    "envs": [] // Environment variable of child process.
}
```

#### Returns
Result code of bash command.

