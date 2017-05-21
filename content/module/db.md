+++
draft = false
title = "db"
description = "数据库访问模块"
[menu.main]
parent = "modules"
identifier = "db"
+++

数据库访问模块

基础模块。可用于创建和操作数据库资源，引用方式： 
```js
var db = require('db');
```

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
object            | `open(String connString)`<p>打开一个数据库，此方法为通用入口，根据提供的 connString 不同调用不同的引擎</p>
MySQL            | `openMySQL(String connString)`<p>打开一个 mysql 数据库</p>
MSSQL            | `openMSSQL(String connString)`<p>打开一个 mysql 数据库</p>
SQLite            | `openSQLite(String connString)`<p>打开一个 sqlite 数据库</p>
MongoDB            | `openMongoDB(String connString)`<p>打开一个 mongodb 数据库</p>
LevelDB            | `openLevelDB(String connString)`<p>打开一个 leveldb 数据库</p>
Redis            | `openRedis(String connString)`<p>打开一个 Redis 数据库</p>
String            | `format(String sql,...)`<p>格式化一个 sql 命令，并返回格式化结果</p>
String            | `formatMySQL(String sql,...)`<p>格式化一个 mysql 命令，并返回格式化结果</p>
String            | `formatMSSQL(String sql,...)`<p>格式化一个 mssql 命令，并返回格式化结果</p>
String            | `escape(String str,Boolean mysql)`<p>将字符串编码为 SQL 安全编码字符串</p>

## Method Detail

{{% panel theme="default" header="open" %}}
#### **object** `open(String connString)`

打开一个数据库，此方法为通用入口，根据提供的 connString 不同调用不同的引擎

#### Parameters
* `connString` 数据库描述，如：mysql://user:pass@host/db 

#### Returns
返回数据库连接对象
{{% /panel %}}
{{% panel theme="default" header="openMySQL" %}}
#### **MySQL** `openMySQL(String connString)`

打开一个 mysql 数据库

#### Parameters
* `connString` 数据库描述，如：mysql://user:pass@host/db 

#### Returns
返回数据库连接对象
{{% /panel %}}
{{% panel theme="default" header="openMSSQL" %}}
#### **MSSQL** `openMSSQL(String connString)`

打开一个 mysql 数据库

#### Parameters
* `connString` 数据库描述，如：mssql://user:pass@host/db 

#### Returns
返回数据库连接对象
{{% /panel %}}
{{% panel theme="default" header="openSQLite" %}}
#### **SQLite** `openSQLite(String connString)`

打开一个 sqlite 数据库

#### Parameters
* `connString` 数据库描述，如：sqlite:test.db 或者 test.db 

#### Returns
返回数据库连接对象
{{% /panel %}}
{{% panel theme="default" header="openMongoDB" %}}
#### **MongoDB** `openMongoDB(String connString)`

打开一个 mongodb 数据库

#### Parameters
* `connString` 数据库描述 

#### Returns
返回数据库连接对象
{{% /panel %}}
{{% panel theme="default" header="openLevelDB" %}}
#### **LevelDB** `openLevelDB(String connString)`

打开一个 leveldb 数据库

#### Parameters
* `connString` 数据库描述，如：level:test.db 或者 test.db 

#### Returns
返回数据库对象
{{% /panel %}}
{{% panel theme="default" header="openRedis" %}}
#### **Redis** `openRedis(String connString)`

打开一个 Redis 数据库

#### Parameters
* `connString` 数据库描述，如：redis://server:port 或者 "server" 

#### Returns
返回数据库连接对象
{{% /panel %}}
{{% panel theme="default" header="format" %}}
#### **String** `format(String sql,...)`

格式化一个 sql 命令，并返回格式化结果

#### Parameters
* `sql` 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?' 

* `...` 可选参数列表 

#### Returns
返回格式化之后的 sql 命令
{{% /panel %}}
{{% panel theme="default" header="formatMySQL" %}}
#### **String** `formatMySQL(String sql,...)`

格式化一个 mysql 命令，并返回格式化结果

#### Parameters
* `sql` 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?' 

* `...` 可选参数列表 

#### Returns
返回格式化之后的 sql 命令
{{% /panel %}}
{{% panel theme="default" header="formatMSSQL" %}}
#### **String** `formatMSSQL(String sql,...)`

格式化一个 mssql 命令，并返回格式化结果

#### Parameters
* `sql` 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?' 

* `...` 可选参数列表 

#### Returns
返回格式化之后的 sql 命令
{{% /panel %}}
{{% panel theme="default" header="escape" %}}
#### **String** `escape(String str,Boolean mysql)`

将字符串编码为 SQL 安全编码字符串

#### Parameters
* `str` 要编码的字符串 

* `mysql` 指定 mysql 编码，缺省为 false 

#### Returns
返回编码后的字符串
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>