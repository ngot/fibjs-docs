+++
draft = false
title = "xml"
description = "xml module."
[menu.main]
parent = "modules"
identifier = "xml"
+++

xml module

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`XmlDocument`](#d6/d47/interfaceXmlDocument)` new `[`Document`](#d8/dd3/namespacexml_1aee20b8a00005a17396dca652208f21b3)`()`            | xml document object, see [XmlDocument](#d6/d47/interfaceXmlDocument) object
`public static `[`XmlDocument`](#d6/d47/interfaceXmlDocument)` `[`parse`](#d8/dd3/namespacexml_1a283d3fec6ec1c59b0930cfedc484c5e4)`(String source,String type)`            | Parse xml/html text and create [XmlDocument](#d6/d47/interfaceXmlDocument) object, does not support multiple languages.
`public static `[`XmlDocument`](#d6/d47/interfaceXmlDocument)` `[`parse`](#d8/dd3/namespacexml_1aa6ba0c4dec9a5316effece696873e15a)`(`[`Buffer`](#d0/d11/classBuffer)` source,String type)`            | Parse xml/html and create [XmlDocument](#d6/d47/interfaceXmlDocument) object, convert by given language.
`public static String `[`serialize`](#d8/dd3/namespacexml_1a655b1893ddaa6b87c1dc83473c0bc2fc)`(`[`XmlNode`](#dc/d8f/interfaceXmlNode)` node)`            | Serialize [XmlNode](#dc/d8f/interfaceXmlNode) to string.

## Members

#### `public static `[`XmlDocument`](#d6/d47/interfaceXmlDocument)` new `[`Document`](#d8/dd3/namespacexml_1aee20b8a00005a17396dca652208f21b3)`()` 

xml document object, see [XmlDocument](#d6/d47/interfaceXmlDocument) object

#### `public static `[`XmlDocument`](#d6/d47/interfaceXmlDocument)` `[`parse`](#d8/dd3/namespacexml_1a283d3fec6ec1c59b0930cfedc484c5e4)`(String source,String type)` 

Parse xml/html text and create [XmlDocument](#d6/d47/interfaceXmlDocument) object, does not support multiple languages.

#### Parameters
* `source` xml/html text to parse 

* `type` Indicates text type, default is text/xml, and can be text/html as well 

#### Returns
Return created [XmlDocument](#d6/d47/interfaceXmlDocument) object

#### `public static `[`XmlDocument`](#d6/d47/interfaceXmlDocument)` `[`parse`](#d8/dd3/namespacexml_1aa6ba0c4dec9a5316effece696873e15a)`(`[`Buffer`](#d0/d11/classBuffer)` source,String type)` 

Parse xml/html and create [XmlDocument](#d6/d47/interfaceXmlDocument) object, convert by given language.

#### Parameters
* `source` xml/html text to parse 

* `type` Indicates text type, default is text/xml, and can be text/html as well 

#### Returns
Return created [XmlDocument](#d6/d47/interfaceXmlDocument) object

#### `public static String `[`serialize`](#d8/dd3/namespacexml_1a655b1893ddaa6b87c1dc83473c0bc2fc)`(`[`XmlNode`](#dc/d8f/interfaceXmlNode)` node)` 

Serialize [XmlNode](#dc/d8f/interfaceXmlNode) to string.

#### Parameters
* `node` [XmlNode](#dc/d8f/interfaceXmlNode) to serialize 

#### Returns
Return serialized string

