+++
draft = false
title = "util"
description = "Common tools module."
[menu.main]
parent = "modules"
identifier = "util"
+++

Common tools module.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static String `[`format`](#d6/d72/namespaceutil_1a0e62c6dffcb92af6c4d397f66d49aeda)`(String fmt,...)`            | Format string with variables.
`public static String `[`format`](#d6/d72/namespaceutil_1a622d3f4ba0f379119973e8c5b3d06841)`(...)`            | Format variables.
`public static Boolean `[`isEmpty`](#d6/d72/namespaceutil_1aef5ab4a130ee02216b8e0a7be55b6d0d)`(Value v)`            | Check if variable is empty(no enumerable property)
`public static Boolean `[`isArray`](#d6/d72/namespaceutil_1ad3750ee06a6344f1b775b3c7cdcfcbbc)`(Value v)`            | Check if variable is an array.
`public static Boolean `[`isBoolean`](#d6/d72/namespaceutil_1a2e8ba3944a9a4ba546ab32a82ac6ee75)`(Value v)`            | Check if variable is Boolean.
`public static Boolean `[`isNull`](#d6/d72/namespaceutil_1a398963fdc1a176c77f5c8ff432e76751)`(Value v)`            | Check if variable is Null.
`public static Boolean `[`isNullOrUndefined`](#d6/d72/namespaceutil_1a339eedde3e882a57f529205c1004816e)`(Value v)`            | Check if variable is Null or Undefined.
`public static Boolean `[`isNumber`](#d6/d72/namespaceutil_1a70aba7b6339267e79399dd1f3532393e)`(Value v)`            | Check if variable is a number.
`public static Boolean `[`isString`](#d6/d72/namespaceutil_1a53b05938f4a3601a494f3733d1015d26)`(Value v)`            | Check if variable is a string.
`public static Boolean `[`isUndefined`](#d6/d72/namespaceutil_1a714d17751c410e69c111fc0d849b1cf8)`(Value v)`            | Check if variable is Undefined.
`public static Boolean `[`isRegExp`](#d6/d72/namespaceutil_1a197f6d19eb64708964feb8aeb51bc7a3)`(Value v)`            | Check if variable is a regexp object.
`public static Boolean `[`isObject`](#d6/d72/namespaceutil_1a9e2502fcac90ea85c1b5250b12b9136f)`(Value v)`            | Check if variable is an object.
`public static Boolean `[`isDate`](#d6/d72/namespaceutil_1a021ed90060f67225f96dc44d2a5fbcb9)`(Value v)`            | Check if variable is date object.
`public static Boolean `[`isFunction`](#d6/d72/namespaceutil_1a1a6991dfe0aa363fbebb231e67f5d118)`(Value v)`            | Check if variable is a function.
`public static Boolean `[`isBuffer`](#d6/d72/namespaceutil_1a9b04005af45be1e1f72010fc527ee4ba)`(Value v)`            | Check if variable is a [Buffer](#d0/d11/classBuffer) object.
`public static Boolean `[`has`](#d6/d72/namespaceutil_1a74c60b5a6328e1154f392e634cb40328)`(Value v,String key)`            | Check if object contains given key.
`public static Array `[`keys`](#d6/d72/namespaceutil_1af18e734bb5d88ed2d8a950b55701a508)`(Value v)`            | Get an array of all keys.
`public static Array `[`values`](#d6/d72/namespaceutil_1a635d7c351eeae4580728d278ef79c8c3)`(Value v)`            | Get an array of all values.
`public static Value `[`clone`](#d6/d72/namespaceutil_1ac5b6c43b53cdaa1ee2b948766afaebd0)`(Value v)`            | Clone a variable, copy internal content if it's an object or array.
`public static Value `[`extend`](#d6/d72/namespaceutil_1a7e6ad69b1143fc3a406c8a74d9bac73e)`(Value v,...)`            | Extend one or more values of objects to given object.
`public static Object `[`pick`](#d6/d72/namespaceutil_1aa0eef00f17cd0bd5953a1613aa2f3c70)`(Value v,...)`            | Return a copy of object with filtered attributes.
`public static Object `[`omit`](#d6/d72/namespaceutil_1a819fa689debef312b6ec388e8b6fa0c4)`(Value v,...)`            | Return a copy of object, exclude given attributes.
`public static Value `[`first`](#d6/d72/namespaceutil_1a27d45a4bba7a8874fba7391dee3be9dd)`(Value v)`            | Get first element in array.
`public static Value `[`first`](#d6/d72/namespaceutil_1af9c17139c1ed0e4a7d0aa3244990768a)`(Value v,Integer n)`            | Get first number of elements in array.
`public static Value `[`last`](#d6/d72/namespaceutil_1adabb887de98cc0bd54035af02452225b)`(Value v)`            | Get last element in array.
`public static Value `[`last`](#d6/d72/namespaceutil_1a764290a833d1fbfdb3616374f54be720)`(Value v,Integer n)`            | Get number of element in the end of array.
`public static Array `[`unique`](#d6/d72/namespaceutil_1aa4e3b3c1ed02f946cd77e6b10ffe5209)`(Value v,Boolean sorted)`            | Get array without duplicates.
`public static Array `[`union`](#d6/d72/namespaceutil_1aae81b8225da8434a2513f9cea9c716a4)`(...)`            | Union one or more arrays into one unique array.
`public static Array `[`intersection`](#d6/d72/namespaceutil_1adf0b6b3970027bac03b8a52ebd580b72)`(...)`            | Return intersections of arrays.
`public static Array `[`flatten`](#d6/d72/namespaceutil_1aa9c3e271b742d44d012e3039bcdf7eb2)`(Value arr,Boolean shallow)`            | Convert multi-dimension arrays into one-dimension, only reduce one dimension if you pass shallow argument.
`public static Array `[`without`](#d6/d72/namespaceutil_1a0c5e0bae5b173e9264e980cc2e956c64)`(Value arr,...)`            | Return an array without given elements.
`public static Array `[`difference`](#d6/d72/namespaceutil_1aeee7da8e5a98a9794221cbbff0e1c43e)`(Array list,...)`            | Return differences of arrays.
`public static Value `[`each`](#d6/d72/namespaceutil_1ac2e49de0b478db47c018ee9459251fac)`(Value list,Function iterator,Value context)`            | Iterate list in order. If context is passed, then bind iterator to context. Each iteration will pass three arguments to context: element, index and list.
`public static Array `[`map`](#d6/d72/namespaceutil_1a24e6b2ce72bf4f22904c4e0761f2b7b8)`(Value list,Function iterator,Value context)`            | Use iterator to map values to new array. If context is passed, then bind iterator to context. Each iteration will pass three arguments to context: element, index and list.
`public static Value `[`reduce`](#d6/d72/namespaceutil_1a119418c6ae84d9848a7521b0d23ed6da)`(Value list,Function iterator,Value memo,Value context)`            | Reduce every element in list to a single number. If context is passed, then bind iterator to context. Each iteration will pass four arguments to context: memo, element, index and list.
`public static Object `[`buildInfo`](#d6/d72/namespaceutil_1a38b22f190ce11008314b51470042ce2b)`()`            | Get current engine and components information.

## Members

#### `public static String `[`format`](#d6/d72/namespaceutil_1a0e62c6dffcb92af6c4d397f66d49aeda)`(String fmt,...)` 

Format string with variables.

#### Parameters
* `fmt` Format string 

* `...` Aeguments 

#### Returns
Return formatted string

#### `public static String `[`format`](#d6/d72/namespaceutil_1a622d3f4ba0f379119973e8c5b3d06841)`(...)` 

Format variables.

#### Parameters
* `...` Aeguments 

#### Returns
Return formatted string

#### `public static Boolean `[`isEmpty`](#d6/d72/namespaceutil_1aef5ab4a130ee02216b8e0a7be55b6d0d)`(Value v)` 

Check if variable is empty(no enumerable property)

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's empty

#### `public static Boolean `[`isArray`](#d6/d72/namespaceutil_1ad3750ee06a6344f1b775b3c7cdcfcbbc)`(Value v)` 

Check if variable is an array.

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's an array

#### `public static Boolean `[`isBoolean`](#d6/d72/namespaceutil_1a2e8ba3944a9a4ba546ab32a82ac6ee75)`(Value v)` 

Check if variable is Boolean.

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's a Boolean

#### `public static Boolean `[`isNull`](#d6/d72/namespaceutil_1a398963fdc1a176c77f5c8ff432e76751)`(Value v)` 

Check if variable is Null.

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's Null

#### `public static Boolean `[`isNullOrUndefined`](#d6/d72/namespaceutil_1a339eedde3e882a57f529205c1004816e)`(Value v)` 

Check if variable is Null or Undefined.

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's Null or Undefined

#### `public static Boolean `[`isNumber`](#d6/d72/namespaceutil_1a70aba7b6339267e79399dd1f3532393e)`(Value v)` 

Check if variable is a number.

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's a number

#### `public static Boolean `[`isString`](#d6/d72/namespaceutil_1a53b05938f4a3601a494f3733d1015d26)`(Value v)` 

Check if variable is a string.

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's a string

#### `public static Boolean `[`isUndefined`](#d6/d72/namespaceutil_1a714d17751c410e69c111fc0d849b1cf8)`(Value v)` 

Check if variable is Undefined.

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's Undefined

#### `public static Boolean `[`isRegExp`](#d6/d72/namespaceutil_1a197f6d19eb64708964feb8aeb51bc7a3)`(Value v)` 

Check if variable is a regexp object.

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's a regexp object

#### `public static Boolean `[`isObject`](#d6/d72/namespaceutil_1a9e2502fcac90ea85c1b5250b12b9136f)`(Value v)` 

Check if variable is an object.

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's an object

#### `public static Boolean `[`isDate`](#d6/d72/namespaceutil_1a021ed90060f67225f96dc44d2a5fbcb9)`(Value v)` 

Check if variable is date object.

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's date object

#### `public static Boolean `[`isFunction`](#d6/d72/namespaceutil_1a1a6991dfe0aa363fbebb231e67f5d118)`(Value v)` 

Check if variable is a function.

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's a function

#### `public static Boolean `[`isBuffer`](#d6/d72/namespaceutil_1a9b04005af45be1e1f72010fc527ee4ba)`(Value v)` 

Check if variable is a [Buffer](#d0/d11/classBuffer) object.

#### Parameters
* `v` Variable to check 

#### Returns
Return true when it's a [Buffer](#d0/d11/classBuffer) object

#### `public static Boolean `[`has`](#d6/d72/namespaceutil_1a74c60b5a6328e1154f392e634cb40328)`(Value v,String key)` 

Check if object contains given key.

#### Parameters
* `v` Object to check 

* `key` Key to query 

#### Returns
Return true when it contains key

#### `public static Array `[`keys`](#d6/d72/namespaceutil_1af18e734bb5d88ed2d8a950b55701a508)`(Value v)` 

Get an array of all keys.

#### Parameters
* `v` Object to check 

#### Returns
Return an array of all keys

#### `public static Array `[`values`](#d6/d72/namespaceutil_1a635d7c351eeae4580728d278ef79c8c3)`(Value v)` 

Get an array of all values.

#### Parameters
* `v` Object to check 

#### Returns
Return an array of all keys

#### `public static Value `[`clone`](#d6/d72/namespaceutil_1ac5b6c43b53cdaa1ee2b948766afaebd0)`(Value v)` 

Clone a variable, copy internal content if it's an object or array.

#### Parameters
* `v` Variable to clone 

#### Returns
Return cloned result

#### `public static Value `[`extend`](#d6/d72/namespaceutil_1a7e6ad69b1143fc3a406c8a74d9bac73e)`(Value v,...)` 

Extend one or more values of objects to given object.

#### Parameters
* `v` Object to be extended 

* `...` One or more objects to extend 

#### Returns
Return extended object

#### `public static Object `[`pick`](#d6/d72/namespaceutil_1aa0eef00f17cd0bd5953a1613aa2f3c70)`(Value v,...)` 

Return a copy of object with filtered attributes.

#### Parameters
* `v` Object to filter 

* `...` One or more attributes 

#### Returns
Return copy of object

#### `public static Object `[`omit`](#d6/d72/namespaceutil_1a819fa689debef312b6ec388e8b6fa0c4)`(Value v,...)` 

Return a copy of object, exclude given attributes.

#### Parameters
* `v` Object to filter 

* `...` One or more attributes to exclude 

#### Returns
Return copy of object

#### `public static Value `[`first`](#d6/d72/namespaceutil_1a27d45a4bba7a8874fba7391dee3be9dd)`(Value v)` 

Get first element in array.

#### Parameters
* `v` Array to access 

#### Returns
Return element

#### `public static Value `[`first`](#d6/d72/namespaceutil_1af9c17139c1ed0e4a7d0aa3244990768a)`(Value v,Integer n)` 

Get first number of elements in array.

#### Parameters
* `v` Array to access 

* `n` Number of elements to get 

#### Returns
Return array of elements

#### `public static Value `[`last`](#d6/d72/namespaceutil_1adabb887de98cc0bd54035af02452225b)`(Value v)` 

Get last element in array.

#### Parameters
* `v` Array to access 

#### Returns
Return element

#### `public static Value `[`last`](#d6/d72/namespaceutil_1a764290a833d1fbfdb3616374f54be720)`(Value v,Integer n)` 

Get number of element in the end of array.

#### Parameters
* `v` Array to access 

* `n` Number of elements to get 

#### Returns
Return array of elements

#### `public static Array `[`unique`](#d6/d72/namespaceutil_1aa4e3b3c1ed02f946cd77e6b10ffe5209)`(Value v,Boolean sorted)` 

Get array without duplicates.

#### Parameters
* `v` Array to access 

* `sorted` Indicates whether to sort or not, will use quick sort 

#### Returns
Return unique array

#### `public static Array `[`union`](#d6/d72/namespaceutil_1aae81b8225da8434a2513f9cea9c716a4)`(...)` 

Union one or more arrays into one unique array.

#### Parameters
* `...` Arrays to union 

#### Returns
Return unioned array

#### `public static Array `[`intersection`](#d6/d72/namespaceutil_1adf0b6b3970027bac03b8a52ebd580b72)`(...)` 

Return intersections of arrays.

#### Parameters
* `...` Arrays to check 

#### Returns
Return intersections

#### `public static Array `[`flatten`](#d6/d72/namespaceutil_1aa9c3e271b742d44d012e3039bcdf7eb2)`(Value arr,Boolean shallow)` 

Convert multi-dimension arrays into one-dimension, only reduce one dimension if you pass shallow argument.

#### Parameters
* `arr` Array to convert 

* `shallow` Indicates whether to reduce only one dimension or not, default is false 

#### Returns
Return converted array

#### `public static Array `[`without`](#d6/d72/namespaceutil_1a0c5e0bae5b173e9264e980cc2e956c64)`(Value arr,...)` 

Return an array without given elements.

#### Parameters
* `arr` Array to access 

* `...` Elements to exclude 

#### Returns
Return result array

#### `public static Array `[`difference`](#d6/d72/namespaceutil_1aeee7da8e5a98a9794221cbbff0e1c43e)`(Array list,...)` 

Return differences of arrays.

#### Parameters
* `list` Arrays to check 

#### Returns
Return differences

#### `public static Value `[`each`](#d6/d72/namespaceutil_1ac2e49de0b478db47c018ee9459251fac)`(Value list,Function iterator,Value context)` 

Iterate list in order. If context is passed, then bind iterator to context. Each iteration will pass three arguments to context: element, index and list.

#### Parameters
* `list` [List](#de/dd8/interfaceList) or object to iterate 

* `iterator` Iterator callback 

* `context` Context object for binding 

#### Returns
Return list itself

#### `public static Array `[`map`](#d6/d72/namespaceutil_1a24e6b2ce72bf4f22904c4e0761f2b7b8)`(Value list,Function iterator,Value context)` 

Use iterator to map values to new array. If context is passed, then bind iterator to context. Each iteration will pass three arguments to context: element, index and list.

#### Parameters
* `list` [List](#de/dd8/interfaceList) or object to iterate 

* `iterator` Iterator callback 

* `context` Context object for binding 

#### Returns
Return result array

#### `public static Value `[`reduce`](#d6/d72/namespaceutil_1a119418c6ae84d9848a7521b0d23ed6da)`(Value list,Function iterator,Value memo,Value context)` 

Reduce every element in list to a single number. If context is passed, then bind iterator to context. Each iteration will pass four arguments to context: memo, element, index and list.

#### Parameters
* `list` [List](#de/dd8/interfaceList) or object to iterate 

* `iterator` Iterator callback 

* `memo` Initial value 

* `context` Context object for binding 

#### Returns
Return result array

#### `public static Object `[`buildInfo`](#d6/d72/namespaceutil_1a38b22f190ce11008314b51470042ce2b)`()` 

Get current engine and components information.

#### Returns
Struct info: 
```cpp
{
  "fibjs": "0.1.0",
  "svn": 1753,
  "build": "Dec 10 2013 21:44:17",
  "vender": {
    "ev": "4.11",
    "exif": "0.6.21",
    "gd": "2.1.0-alpha",
    "jpeg": "8.3",
    "log4cpp": "1.0",
    "mongo": "0.7",
    "pcre": "8.21",
    "png": "1.5.4",
    "sqlite": "3.8.1",
    "tiff": "3.9.5",
    "uuid": "1.6.2",
    "v8": "3.23.17 (candidate)",
    "zlib": "1.2.7",
    "zmq": "3.1"
  }
}
```

