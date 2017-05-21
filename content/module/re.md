+++
draft = false
title = "re"
description = "正则表达式处理模块"
[menu.main]
parent = "modules"
identifier = "re"
+++

正则表达式处理模块

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Regex            | `compile(String pattern,String opt)`<p>编译一个正则表达式模版，并返回正则表达式处理对象</p>

## Method Detail

{{% panel theme="default" header="compile" %}}
#### **Regex** `compile(String pattern,String opt)`

编译一个正则表达式模版，并返回正则表达式处理对象

#### Parameters
* `pattern` 正则表达式 

* `opt` 规定匹配的类型。"g" 用于全局匹配，"i" 用于区分大小写，"gi" 用于全局区分大小写的匹配 

#### Returns
返回正则表达式对象
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>