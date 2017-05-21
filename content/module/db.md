+++
draft = false
title = "db"
description = "Database access module."
[menu.main]
parent = "modules"
identifier = "db"
+++

Database access module.

Basic module for create database and database operation, The way to use:: 
```cpp
var db = require('db');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`object`](#db/d38/interfaceobject)` `[`open`](#d0/d45/namespacedb_1ae6a25ce20c2a752cf20e7a577207f198)`(String connString)`            | This method offer a general entrance to open a database, call different engines according to the providing connString.
`public static `[`MySQL`](#d2/d68/interfaceMySQL)` `[`openMySQL`](#d0/d45/namespacedb_1ad989737ba63bbaeb48fc899769557f5e)`(String connString)`            | Open a mysql database.
`public static `[`SQLite`](#d7/df5/interfaceSQLite)` `[`openSQLite`](#d0/d45/namespacedb_1a1986951d5ca68ee0ba8361053a84f637)`(String connString)`            | Open a sqlite database.
`public static `[`MongoDB`](#df/d69/interfaceMongoDB)` `[`openMongoDB`](#d0/d45/namespacedb_1a29551281115a5042ad34b3d361dddc51)`(String connString)`            | Open a mongodb database.
`public static `[`LevelDB`](#d0/d9e/interfaceLevelDB)` `[`openLevelDB`](#d0/d45/namespacedb_1af39786855964f572f8d9e34a115bdaf6)`(String connString)`            | Open a leveldb database.
`public static `[`Redis`](#d7/d32/interfaceRedis)` `[`openRedis`](#d0/d45/namespacedb_1a4d7f2379592b1a85a802b8b895ba27df)`(String connString)`            | Open a [Redis](#d7/d32/interfaceRedis) database.
`public static String `[`format`](#d0/d45/namespacedb_1a34aceab3cf280744a6293fd472a6cbcc)`(String sql,...)`            | Formatting a sql command, and returns the formatted results.
`public static String `[`formatMySQL`](#d0/d45/namespacedb_1a730e29b155df6b5c9a5c1b2ce97c8386)`(String sql,...)`            | Formatting a sql command, and returns the formatted results.
`public static String `[`escape`](#d0/d45/namespacedb_1aeb2f02c2858d45aeab3cd686e99ceabd)`(String str,Boolean mysql)`            | String encoded as security coded SQL strings.

## Members

#### `public static `[`object`](#db/d38/interfaceobject)` `[`open`](#d0/d45/namespacedb_1ae6a25ce20c2a752cf20e7a577207f198)`(String connString)` 

This method offer a general entrance to open a database, call different engines according to the providing connString.

#### Parameters
* `connString` Database Description, For example: mysql://user:pass@host/db 

#### Returns
Returns the database connection object.

#### `public static `[`MySQL`](#d2/d68/interfaceMySQL)` `[`openMySQL`](#d0/d45/namespacedb_1ad989737ba63bbaeb48fc899769557f5e)`(String connString)` 

Open a mysql database.

#### Parameters
* `connString` Database Description, For example: mysql://user:pass@host/db 

#### Returns
Returns the database connection object.

#### `public static `[`SQLite`](#d7/df5/interfaceSQLite)` `[`openSQLite`](#d0/d45/namespacedb_1a1986951d5ca68ee0ba8361053a84f637)`(String connString)` 

Open a sqlite database.

#### Parameters
* `connString` Database Description, For example: sqlite:test.db or test.db 

#### Returns
Returns the database connection object.

#### `public static `[`MongoDB`](#df/d69/interfaceMongoDB)` `[`openMongoDB`](#d0/d45/namespacedb_1a29551281115a5042ad34b3d361dddc51)`(String connString)` 

Open a mongodb database.

#### Parameters
* `connString` Database Description 

#### Returns
Returns the database connection object.

#### `public static `[`LevelDB`](#d0/d9e/interfaceLevelDB)` `[`openLevelDB`](#d0/d45/namespacedb_1af39786855964f572f8d9e34a115bdaf6)`(String connString)` 

Open a leveldb database.

#### Parameters
* `connString` Database Description, For example: level:test.db or test.db 

#### Returns
Returns the database connection object.

#### `public static `[`Redis`](#d7/d32/interfaceRedis)` `[`openRedis`](#d0/d45/namespacedb_1a4d7f2379592b1a85a802b8b895ba27df)`(String connString)` 

Open a [Redis](#d7/d32/interfaceRedis) database.

#### Parameters
* `connString` Database Description, For example: redis://server:port or "server" 

#### Returns
Returns the database connection object.

#### `public static String `[`format`](#d0/d45/namespacedb_1a34aceab3cf280744a6293fd472a6cbcc)`(String sql,...)` 

Formatting a sql command, and returns the formatted results.

#### Parameters
* `sql` Format string, optional parameters can be specified as '?', for example: 'SELECT FROM TEST WHERE [id]=?' 

* `...` Optional parameter list 

#### Returns
Return the formatted sql command.

#### `public static String `[`formatMySQL`](#d0/d45/namespacedb_1a730e29b155df6b5c9a5c1b2ce97c8386)`(String sql,...)` 

Formatting a sql command, and returns the formatted results.

#### Parameters
* `sql` Format string, optional parameters can be specified as '?', for example: 'SELECT FROM TEST WHERE [id]=?' 

* `...` Optional parameter list 

#### Returns
Return the formatted sql command.

#### `public static String `[`escape`](#d0/d45/namespacedb_1aeb2f02c2858d45aeab3cd686e99ceabd)`(String str,Boolean mysql)` 

String encoded as security coded SQL strings.

#### Parameters
* `str` The string that need to be encoded 

* `mysql` Specify the Mysql encoding, the default value is false 

#### Returns
Returns the encoded string

