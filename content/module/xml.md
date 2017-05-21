+++
draft = false
title = "xml"
description = "xml 处理模块"
[menu.main]
parent = "modules"
identifier = "xml"
+++

xml 处理模块

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const ELEMENT_NODE`[`ELEMENT_NODE`](#d8/dd3/namespacexml_1ab311752b8246c43e16053423d479c73a)`ELEMENT_NODE`<p>XmlNode 的 nodeType 属性常量，表示节点为 XmlElement 对象</p>
const            | `public const ATTRIBUTE_NODE`[`ATTRIBUTE_NODE`](#d8/dd3/namespacexml_1afe14a5a6967d6768efe217f373647bf1)`ATTRIBUTE_NODE`<p>XmlNode 的 nodeType 属性常量，表示节点为 XmlAttr 对象</p>
const            | `public const TEXT_NODE`[`TEXT_NODE`](#d8/dd3/namespacexml_1a4d199c62d6eebe73d90a5d1248935edb)`TEXT_NODE`<p>XmlNode 的 nodeType 属性常量，表示节点为 XmlText 对象</p>
const            | `public const CDATA_SECTION_NODE`[`CDATA_SECTION_NODE`](#d8/dd3/namespacexml_1a51744426f0a0093feb84fa76ef0e0f99)`CDATA_SECTION_NODE`<p>XmlNode 的 nodeType 属性常量，表示节点为 XmlCDATASection 对象</p>
const            | `public const PROCESSING_INSTRUCTION_NODE`[`PROCESSING_INSTRUCTION_NODE`](#d8/dd3/namespacexml_1aa4834e4a22fdda71e99ac1e3a1cec09a)`PROCESSING_INSTRUCTION_NODE`<p>XmlNode 的 nodeType 属性常量，表示节点为 XmlProcessingInstruction 对象</p>
const            | `public const COMMENT_NODE`[`COMMENT_NODE`](#d8/dd3/namespacexml_1afa6d78573a0ea1615b5e60a03bd217e4)`COMMENT_NODE`<p>XmlNode 的 nodeType 属性常量，表示节点为 XmlComment 对象</p>
const            | `public const DOCUMENT_NODE`[`DOCUMENT_NODE`](#d8/dd3/namespacexml_1ac6530153d760a4819a51f0328797622a)`DOCUMENT_NODE`<p>XmlNode 的 nodeType 属性常量，表示节点为 XmlDocument 对象</p>
const            | `public const DOCUMENT_TYPE_NODE`[`DOCUMENT_TYPE_NODE`](#d8/dd3/namespacexml_1ade5a1368668d8f3f61c0c335c9b03509)`DOCUMENT_TYPE_NODE`<p>XmlNode 的 nodeType 属性常量，表示节点为 XmlDocumentType 对象</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
XmlDocument new            | `Document()`<p>xml 文档对象，参见 XmlDocument 对象</p>
XmlDocument            | `parse(String source,String type)`<p>解析 xml/html 文本，并创建 XmlDocument 对象，不支持多语种</p>
XmlDocument            | `parse(Buffer source,String type)`<p>解析 xml/html，并创建 XmlDocument 对象，解析时会根据指定的语种转换</p>
String            | `serialize(XmlNode node)`<p>序列化 XmlNode 为字符串</p>

## Field Detail

{{% panel theme="default" header="ELEMENT_NODE" %}}
#### **const** `public const ELEMENT_NODE`[`ELEMENT_NODE`](#d8/dd3/namespacexml_1ab311752b8246c43e16053423d479c73a)`ELEMENT_NODE`

XmlNode 的 nodeType 属性常量，表示节点为 XmlElement 对象

{{% /panel %}}
{{% panel theme="default" header="ATTRIBUTE_NODE" %}}
#### **const** `public const ATTRIBUTE_NODE`[`ATTRIBUTE_NODE`](#d8/dd3/namespacexml_1afe14a5a6967d6768efe217f373647bf1)`ATTRIBUTE_NODE`

XmlNode 的 nodeType 属性常量，表示节点为 XmlAttr 对象

{{% /panel %}}
{{% panel theme="default" header="TEXT_NODE" %}}
#### **const** `public const TEXT_NODE`[`TEXT_NODE`](#d8/dd3/namespacexml_1a4d199c62d6eebe73d90a5d1248935edb)`TEXT_NODE`

XmlNode 的 nodeType 属性常量，表示节点为 XmlText 对象

{{% /panel %}}
{{% panel theme="default" header="CDATA_SECTION_NODE" %}}
#### **const** `public const CDATA_SECTION_NODE`[`CDATA_SECTION_NODE`](#d8/dd3/namespacexml_1a51744426f0a0093feb84fa76ef0e0f99)`CDATA_SECTION_NODE`

XmlNode 的 nodeType 属性常量，表示节点为 XmlCDATASection 对象

{{% /panel %}}
{{% panel theme="default" header="PROCESSING_INSTRUCTION_NODE" %}}
#### **const** `public const PROCESSING_INSTRUCTION_NODE`[`PROCESSING_INSTRUCTION_NODE`](#d8/dd3/namespacexml_1aa4834e4a22fdda71e99ac1e3a1cec09a)`PROCESSING_INSTRUCTION_NODE`

XmlNode 的 nodeType 属性常量，表示节点为 XmlProcessingInstruction 对象

{{% /panel %}}
{{% panel theme="default" header="COMMENT_NODE" %}}
#### **const** `public const COMMENT_NODE`[`COMMENT_NODE`](#d8/dd3/namespacexml_1afa6d78573a0ea1615b5e60a03bd217e4)`COMMENT_NODE`

XmlNode 的 nodeType 属性常量，表示节点为 XmlComment 对象

{{% /panel %}}
{{% panel theme="default" header="DOCUMENT_NODE" %}}
#### **const** `public const DOCUMENT_NODE`[`DOCUMENT_NODE`](#d8/dd3/namespacexml_1ac6530153d760a4819a51f0328797622a)`DOCUMENT_NODE`

XmlNode 的 nodeType 属性常量，表示节点为 XmlDocument 对象

{{% /panel %}}
{{% panel theme="default" header="DOCUMENT_TYPE_NODE" %}}
#### **const** `public const DOCUMENT_TYPE_NODE`[`DOCUMENT_TYPE_NODE`](#d8/dd3/namespacexml_1ade5a1368668d8f3f61c0c335c9b03509)`DOCUMENT_TYPE_NODE`

XmlNode 的 nodeType 属性常量，表示节点为 XmlDocumentType 对象

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="Document" %}}
#### **XmlDocument new** `Document()`

xml 文档对象，参见 XmlDocument 对象

{{% /panel %}}
{{% panel theme="default" header="parse" %}}
#### **XmlDocument** `parse(String source,String type)`

解析 xml/html 文本，并创建 XmlDocument 对象，不支持多语种

#### Parameters
* `source` 指定需要解析的 xml/html 文本 

* `type` 指定文本类型，缺省为 text/xml，也可指定为 text/html 

#### Returns
返回创建的 XmlDocument 对象
{{% /panel %}}
{{% panel theme="default" header="parse" %}}
#### **XmlDocument** `parse(Buffer source,String type)`

解析 xml/html，并创建 XmlDocument 对象，解析时会根据指定的语种转换

#### Parameters
* `source` 指定需要解析的 xml/html 二进制数据 

* `type` 指定文本类型，缺省为 text/xml，也可指定为 text/html 

#### Returns
返回创建的 XmlDocument 对象
{{% /panel %}}
{{% panel theme="default" header="serialize" %}}
#### **String** `serialize(XmlNode node)`

序列化 XmlNode 为字符串

#### Parameters
* `node` 指定需要序列化的 XmlNode

#### Returns
返回序列化的字符串
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>