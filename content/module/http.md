+++
draft = false
title = "http"
description = "超文本传输协议模块，用以支持 http 协议处理"
[menu.main]
parent = "modules"
identifier = "http"
+++

超文本传输协议模块，用以支持 http 协议处理

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
readonly List            | `public static readonly List cookies`[`cookies`](#d3/d69/namespacehttp_1af4f4d8ac3708d3d8d3b3ddcf8b2f65be)`cookies`<p>返回http客户端的 HttpCookie 对象列表</p>
Integer            | `public static Integer timeout`[`timeout`](#d3/d69/namespacehttp_1ae1a1f798ae94ad2c33f690458cf3bae1)`timeout`<p>查询和设置超时时间</p>
Boolean            | `public static Boolean enableCookie`[`enableCookie`](#d3/d69/namespacehttp_1ad63225275dd098971f669a6ebf034330)`enableCookie`<p>cookie功能开关，默认开启</p>
Boolean            | `public static Boolean autoRedirect`[`autoRedirect`](#d3/d69/namespacehttp_1ac0f150a1864b7eec388501ed97228f6e)`autoRedirect`<p>自动redirect功能开关，默认开启</p>
String            | `public static String userAgent`[`userAgent`](#d3/d69/namespacehttp_1ab2c77b1e9c3d364e79138357ca41530d)`userAgent`<p>查询和设置 http 请求中的浏览器标识</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
HttpRequest new            | `Request()`<p>创建一个 http 请求对象，参见 HttpRequest</p>
HttpResponse new            | `Response()`<p>创建一个 http 响应对象，参见 HttpResponse</p>
HttpCookie new            | `Cookie()`<p>创建一个 http cookie 对象，参见 HttpCookie</p>
HttpServer new            | `Server()`<p>创建一个 http 服务器，参见 HttpServer</p>
HttpClient new            | `Client()`<p>创建一个 http 客户端，参见 HttpClient</p>
HttpsServer new            | `HttpsServer()`<p>创建一个 https 服务器，参见 HttpsServer</p>
HttpHandler new            | `Handler()`<p>创建一个 http 协议处理器对象，参见 HttpHandler</p>
Handler            | `fileHandler(String root,Object mimes)`<p>创建一个 http 静态文件处理器，用以用静态文件响应 http 消息</p>
HttpResponse            | `request(Stream conn,HttpRequest req)`<p>发送 http 请求到指定的流对象，并返回结果</p>
HttpResponse            | `request(String method,String url,Object headers)`<p>请求指定的 url，并返回结果</p>
HttpResponse            | `request(String method,String url,SeekableStream body,Map headers)`<p>请求指定的 url，并返回结果</p>
HttpResponse            | `request(String method,String url,SeekableStream body,Object headers)`<p>请求指定的 url，并返回结果</p>
HttpResponse            | `request(String method,String url,Buffer body,Object headers)`<p>请求指定的 url，并返回结果</p>
HttpResponse            | `get(String url,Object headers)`<p>用 GET 方法请求指定的 url，并返回结果，等同于 request("GET", ...)</p>
HttpResponse            | `post(String url,SeekableStream body,Object headers)`<p>用 POST 方法请求指定的 url，并返回结果，等同于 request("POST", ...)</p>
HttpResponse            | `post(String url,Buffer body,Object headers)`<p>用 POST 方法请求指定的 url，并返回结果，等同于 request("POST", ...)</p>
HttpResponse            | `post(String url,Object headers)`<p>用 POST 方法请求指定的 url，并返回结果，等同于 request("POST", ...)</p>
HttpResponse            | `del(String url,Object headers)`<p>用 DELETE 方法请求指定的 url，并返回结果，等同于 request("DELETE", ...)</p>
HttpResponse            | `put(String url,SeekableStream body,Object headers)`<p>用 PUT 方法请求指定的 url，并返回结果，等同于 request("PUT", ...)</p>
HttpResponse            | `put(String url,Buffer body,Object headers)`<p>用 PUT 方法请求指定的 url，并返回结果，等同于 request("PUT", ...)</p>
HttpResponse            | `put(String url,Object headers)`<p>用 PUT 方法请求指定的 url，并返回结果，等同于 request("PUT", ...)</p>
HttpResponse            | `patch(String url,SeekableStream body,Object headers)`<p>用 PATCH 方法请求指定的 url，并返回结果，等同于 request("PATCH", ...)</p>
HttpResponse            | `patch(String url,Buffer body,Object headers)`<p>用 PATCH 方法请求指定的 url，并返回结果，等同于 request("PATCH", ...)</p>
HttpResponse            | `patch(String url,Object headers)`<p>用 PATCH 方法请求指定的 url，并返回结果，等同于 request("PATCH", ...)</p>

## Field Detail

{{% panel theme="default" header="cookies" %}}
#### **readonly List** `public static readonly List cookies`[`cookies`](#d3/d69/namespacehttp_1af4f4d8ac3708d3d8d3b3ddcf8b2f65be)`cookies`

返回http客户端的 HttpCookie 对象列表

{{% /panel %}}
{{% panel theme="default" header="timeout" %}}
#### **Integer** `public static Integer timeout`[`timeout`](#d3/d69/namespacehttp_1ae1a1f798ae94ad2c33f690458cf3bae1)`timeout`

查询和设置超时时间

{{% /panel %}}
{{% panel theme="default" header="enableCookie" %}}
#### **Boolean** `public static Boolean enableCookie`[`enableCookie`](#d3/d69/namespacehttp_1ad63225275dd098971f669a6ebf034330)`enableCookie`

cookie功能开关，默认开启

{{% /panel %}}
{{% panel theme="default" header="autoRedirect" %}}
#### **Boolean** `public static Boolean autoRedirect`[`autoRedirect`](#d3/d69/namespacehttp_1ac0f150a1864b7eec388501ed97228f6e)`autoRedirect`

自动redirect功能开关，默认开启

{{% /panel %}}
{{% panel theme="default" header="userAgent" %}}
#### **String** `public static String userAgent`[`userAgent`](#d3/d69/namespacehttp_1ab2c77b1e9c3d364e79138357ca41530d)`userAgent`

查询和设置 http 请求中的浏览器标识

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="Request" %}}
#### **HttpRequest new** `Request()`

创建一个 http 请求对象，参见 HttpRequest

{{% /panel %}}
{{% panel theme="default" header="Response" %}}
#### **HttpResponse new** `Response()`

创建一个 http 响应对象，参见 HttpResponse

{{% /panel %}}
{{% panel theme="default" header="Cookie" %}}
#### **HttpCookie new** `Cookie()`

创建一个 http cookie 对象，参见 HttpCookie

{{% /panel %}}
{{% panel theme="default" header="Server" %}}
#### **HttpServer new** `Server()`

创建一个 http 服务器，参见 HttpServer

{{% /panel %}}
{{% panel theme="default" header="Client" %}}
#### **HttpClient new** `Client()`

创建一个 http 客户端，参见 HttpClient

{{% /panel %}}
{{% panel theme="default" header="HttpsServer" %}}
#### **HttpsServer new** `HttpsServer()`

创建一个 https 服务器，参见 HttpsServer

{{% /panel %}}
{{% panel theme="default" header="Handler" %}}
#### **HttpHandler new** `Handler()`

创建一个 http 协议处理器对象，参见 HttpHandler

{{% /panel %}}
{{% panel theme="default" header="fileHandler" %}}
#### **Handler** `fileHandler(String root,Object mimes)`

创建一个 http 静态文件处理器，用以用静态文件响应 http 消息

#### Parameters
* `root` 文件根路径 

* `mimes` 扩展 mime 设置 

#### Returns
返回一个静态文件处理器用于处理 http 消息

fileHandler 支持 gzip 预压缩，当请求接受 gzip 编码，且相同路径下 filename.ext.gz 文件存在时，将直接返回此文件， 从而避免重复压缩带来服务器负载。
{{% /panel %}}
{{% panel theme="default" header="request" %}}
#### **HttpResponse** `request(Stream conn,HttpRequest req)`

发送 http 请求到指定的流对象，并返回结果

#### Parameters
* `conn` 指定处理请求的流对象 

* `req` 要发送的 HttpRequest 对象 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="request" %}}
#### **HttpResponse** `request(String method,String url,Object headers)`

请求指定的 url，并返回结果

#### Parameters
* `method` 指定 http 请求方法：GET, POST 等 

* `url` 指定 url，必须是包含主机的完整 url 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="request" %}}
#### **HttpResponse** `request(String method,String url,SeekableStream body,Map headers)`

请求指定的 url，并返回结果

#### Parameters
* `method` 指定 http 请求方法：GET, POST 等 

* `url` 指定 url，必须是包含主机的完整 url 

* `body` 指定发送的 body 内容 

* `headers` 指定附加的 http 头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="request" %}}
#### **HttpResponse** `request(String method,String url,SeekableStream body,Object headers)`

请求指定的 url，并返回结果

#### Parameters
* `method` 指定 http 请求方法：GET, POST 等 

* `url` 指定 url，必须是包含主机的完整 url 

* `body` 指定发送的 body 内容 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="request" %}}
#### **HttpResponse** `request(String method,String url,Buffer body,Object headers)`

请求指定的 url，并返回结果

#### Parameters
* `method` 指定 http 请求方法：GET, POST 等 

* `url` 指定 url，必须是包含主机的完整 url 

* `body` 指定发送的 body 内容 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="get" %}}
#### **HttpResponse** `get(String url,Object headers)`

用 GET 方法请求指定的 url，并返回结果，等同于 request("GET", ...)

#### Parameters
* `url` 指定 url，必须是包含主机的完整 url 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="post" %}}
#### **HttpResponse** `post(String url,SeekableStream body,Object headers)`

用 POST 方法请求指定的 url，并返回结果，等同于 request("POST", ...)

#### Parameters
* `url` 指定 url，必须是包含主机的完整 url 

* `body` 指定发送的 body 内容 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="post" %}}
#### **HttpResponse** `post(String url,Buffer body,Object headers)`

用 POST 方法请求指定的 url，并返回结果，等同于 request("POST", ...)

#### Parameters
* `url` 指定 url，必须是包含主机的完整 url 

* `body` 指定发送的 body 内容 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="post" %}}
#### **HttpResponse** `post(String url,Object headers)`

用 POST 方法请求指定的 url，并返回结果，等同于 request("POST", ...)

#### Parameters
* `url` 指定 url，必须是包含主机的完整 url 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="del" %}}
#### **HttpResponse** `del(String url,Object headers)`

用 DELETE 方法请求指定的 url，并返回结果，等同于 request("DELETE", ...)

#### Parameters
* `url` 指定 url，必须是包含主机的完整 url 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="put" %}}
#### **HttpResponse** `put(String url,SeekableStream body,Object headers)`

用 PUT 方法请求指定的 url，并返回结果，等同于 request("PUT", ...)

#### Parameters
* `url` 指定 url，必须是包含主机的完整 url 

* `body` 指定发送的 body 内容 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="put" %}}
#### **HttpResponse** `put(String url,Buffer body,Object headers)`

用 PUT 方法请求指定的 url，并返回结果，等同于 request("PUT", ...)

#### Parameters
* `url` 指定 url，必须是包含主机的完整 url 

* `body` 指定发送的 body 内容 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="put" %}}
#### **HttpResponse** `put(String url,Object headers)`

用 PUT 方法请求指定的 url，并返回结果，等同于 request("PUT", ...)

#### Parameters
* `url` 指定 url，必须是包含主机的完整 url 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="patch" %}}
#### **HttpResponse** `patch(String url,SeekableStream body,Object headers)`

用 PATCH 方法请求指定的 url，并返回结果，等同于 request("PATCH", ...)

#### Parameters
* `url` 指定 url，必须是包含主机的完整 url 

* `body` 指定发送的 body 内容 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="patch" %}}
#### **HttpResponse** `patch(String url,Buffer body,Object headers)`

用 PATCH 方法请求指定的 url，并返回结果，等同于 request("PATCH", ...)

#### Parameters
* `url` 指定 url，必须是包含主机的完整 url 

* `body` 指定发送的 body 内容 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}
{{% panel theme="default" header="patch" %}}
#### **HttpResponse** `patch(String url,Object headers)`

用 PATCH 方法请求指定的 url，并返回结果，等同于 request("PATCH", ...)

#### Parameters
* `url` 指定 url，必须是包含主机的完整 url 

* `headers` 指定附加的 http 头，缺省无附加头 

#### Returns
返回服务器响应
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>