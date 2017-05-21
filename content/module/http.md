+++
draft = false
title = "http"
description = "HTTP transfer protocol module, handels http protocol."
[menu.main]
parent = "modules"
identifier = "http"
+++

HTTP transfer protocol module, handels http protocol.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`HttpRequest`](#d4/dfa/interfaceHttpRequest)` new `[`Request`](#d3/d69/namespacehttp_1af42dded35bbc45313730fc90e9eb8f83)`()`            | create a http request object，reference [HttpRequest](#d4/dfa/interfaceHttpRequest)
`public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` new `[`Response`](#d3/d69/namespacehttp_1a70902187780a1f3b2927b2a2f50213b5)`()`            | create a http response object，reference [HttpResponse](#d9/d71/interfaceHttpResponse)
`public static `[`HttpCookie`](#d3/dea/interfaceHttpCookie)` new `[`Cookie`](#d3/d69/namespacehttp_1a8f3b344e2e2e196a92de9602d2203d61)`()`            | create a http cookie object，reference [HttpCookie](#d3/dea/interfaceHttpCookie)
`public static `[`HttpServer`](#d4/d79/interfaceHttpServer)` new `[`Server`](#d3/d69/namespacehttp_1ad4fe0324266eb7ca3209352741b33f84)`()`            | create a http server，reference [HttpServer](#d4/d79/interfaceHttpServer)
`public static `[`HttpsServer`](#d7/d42/interfaceHttpsServer)` new `[`HttpsServer`](#d3/d69/namespacehttp_1a5b21533b4e601a05f64dc3c814ba7b87)`()`            | create a https server, reference [HttpsServer](#d7/d42/interfaceHttpsServer)
`public static `[`HttpHandler`](#d6/d18/interfaceHttpHandler)` new `[`Handler`](#d3/d69/namespacehttp_1aeb7ec4214a199d4df745d067aaf71a3d)`()`            | create a http protocol handler，reference [HttpHandler](#d6/d18/interfaceHttpHandler)
`public static `[`Handler`](#da/d85/interfaceHandler)` `[`fileHandler`](#d3/d69/namespacehttp_1a134a01399b1794974c1c969c07af8e5f)`(String root,Object mimes)`            | create a http static file processor, in case of using static file to respond http request
`public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`request`](#d3/d69/namespacehttp_1a43fb75f3d1ff80ac16e4929245b13d1a)`(`[`Stream`](#d4/dc7/interfaceStream)` conn,`[`HttpRequest`](#d4/dfa/interfaceHttpRequest)` req)`            | send http request to connection object，return response
`public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`request`](#d3/d69/namespacehttp_1a8633e20a8ce55d009060a4849a91c6b7)`(String method,String url,Object headers)`            | assign requested url, and return
`public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`request`](#d3/d69/namespacehttp_1a18e9a81f160921e0788994d503a101d1)`(String method,String url,`[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` body,Object headers)`            | Request the specified url, and get the response.
`public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`request`](#d3/d69/namespacehttp_1ad8e25f0f0cdf12b4e3b8f43ceb6676e8)`(String method,String url,`[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` body,`[`Map`](#d2/dc1/interfaceMap)` headers)`            | Request the specified url, and get the response.
`public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`request`](#d3/d69/namespacehttp_1a6f93d3122d804f48b97c1506246fc0f3)`(String method,String url,`[`Buffer`](#d0/d11/classBuffer)` body,Object headers)`            | Request the specified url, and get the response.
`public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`get`](#d3/d69/namespacehttp_1af455f3026af00e563cdeddae18a7beea)`(String url,Object headers)`            | reuqest url with GET method，and return response，same as request("GET", ...)
`public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`post`](#d3/d69/namespacehttp_1aa08e3830d32a214ccc4f586f117b1da2)`(String url,`[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` body,Object headers)`            | reuqest url with POST method，and return response，same as request("POST", ...)
`public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`post`](#d3/d69/namespacehttp_1a10ad303eed6fdb7a0a37d5ef8b735919)`(String url,`[`Buffer`](#d0/d11/classBuffer)` body,Object headers)`            | reuqest url with POST method，and return response，same as request("POST", ...)

## Members

#### `public static `[`HttpRequest`](#d4/dfa/interfaceHttpRequest)` new `[`Request`](#d3/d69/namespacehttp_1af42dded35bbc45313730fc90e9eb8f83)`()` 

create a http request object，reference [HttpRequest](#d4/dfa/interfaceHttpRequest)

#### `public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` new `[`Response`](#d3/d69/namespacehttp_1a70902187780a1f3b2927b2a2f50213b5)`()` 

create a http response object，reference [HttpResponse](#d9/d71/interfaceHttpResponse)

#### `public static `[`HttpCookie`](#d3/dea/interfaceHttpCookie)` new `[`Cookie`](#d3/d69/namespacehttp_1a8f3b344e2e2e196a92de9602d2203d61)`()` 

create a http cookie object，reference [HttpCookie](#d3/dea/interfaceHttpCookie)

#### `public static `[`HttpServer`](#d4/d79/interfaceHttpServer)` new `[`Server`](#d3/d69/namespacehttp_1ad4fe0324266eb7ca3209352741b33f84)`()` 

create a http server，reference [HttpServer](#d4/d79/interfaceHttpServer)

#### `public static `[`HttpsServer`](#d7/d42/interfaceHttpsServer)` new `[`HttpsServer`](#d3/d69/namespacehttp_1a5b21533b4e601a05f64dc3c814ba7b87)`()` 

create a https server, reference [HttpsServer](#d7/d42/interfaceHttpsServer)

#### `public static `[`HttpHandler`](#d6/d18/interfaceHttpHandler)` new `[`Handler`](#d3/d69/namespacehttp_1aeb7ec4214a199d4df745d067aaf71a3d)`()` 

create a http protocol handler，reference [HttpHandler](#d6/d18/interfaceHttpHandler)

#### `public static `[`Handler`](#da/d85/interfaceHandler)` `[`fileHandler`](#d3/d69/namespacehttp_1a134a01399b1794974c1c969c07af8e5f)`(String root,Object mimes)` 

create a http static file processor, in case of using static file to respond http request

#### Parameters
* `root` file root folder 

* `mimes` extends mime settings 

* `mimes` extedns mime settings 

#### Returns
return a static file processor to handle http request

fileHandler support gzip pre-compression，when accept gzip in content-typeand filename.ext.gz exists under same root，then return the file directly， to avoid extra load on server.

#### `public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`request`](#d3/d69/namespacehttp_1a43fb75f3d1ff80ac16e4929245b13d1a)`(`[`Stream`](#d4/dc7/interfaceStream)` conn,`[`HttpRequest`](#d4/dfa/interfaceHttpRequest)` req)` 

send http request to connection object，return response

#### Parameters
* `conn` assign requested connection object 

* `req` the [HttpRequest](#d4/dfa/interfaceHttpRequest) obejct need to be sent 

#### Returns
return server response

#### `public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`request`](#d3/d69/namespacehttp_1a8633e20a8ce55d009060a4849a91c6b7)`(String method,String url,Object headers)` 

assign requested url, and return

#### Parameters
* `method` define http request method, such as: GET, POST 

* `url` assigned url，has to be full url with root path 

* `headers` define http request header，default is None 

#### Returns
reutrn server response

#### `public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`request`](#d3/d69/namespacehttp_1a18e9a81f160921e0788994d503a101d1)`(String method,String url,`[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` body,Object headers)` 

Request the specified url, and get the response.

#### Parameters
* `method` define http method, such as: GET, POST 

* `url` assigned url，has to be full url with root path 

* `body` define http body content 

* `headers` define http request header，default is None 

#### Returns
reutrn server response

#### `public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`request`](#d3/d69/namespacehttp_1ad8e25f0f0cdf12b4e3b8f43ceb6676e8)`(String method,String url,`[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` body,`[`Map`](#d2/dc1/interfaceMap)` headers)` 

Request the specified url, and get the response.

#### Parameters
* `method` define http method, such as: GET, POST 

* `url` assigned url，has to be full url with root path 

* `body` define http body content 

* `headers` define http request header, default is None 

#### Returns
reutrn server response

#### `public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`request`](#d3/d69/namespacehttp_1a6f93d3122d804f48b97c1506246fc0f3)`(String method,String url,`[`Buffer`](#d0/d11/classBuffer)` body,Object headers)` 

Request the specified url, and get the response.

#### Parameters
* `method` define http method, such as: GET, POST 

* `url` assigned url，has to be full url with root path 

* `body` define http body content 

* `headers` define http request header, default is None 

#### Returns
reutrn server response

#### `public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`get`](#d3/d69/namespacehttp_1af455f3026af00e563cdeddae18a7beea)`(String url,Object headers)` 

reuqest url with GET method，and return response，same as request("GET", ...)

#### Parameters
* `url` assigned url，has to be full url with root path 

* `headers` define http request header，default is None 

#### Returns
reutrn server response

#### `public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`post`](#d3/d69/namespacehttp_1aa08e3830d32a214ccc4f586f117b1da2)`(String url,`[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` body,Object headers)` 

reuqest url with POST method，and return response，same as request("POST", ...)

#### Parameters
* `url` assigned url，has to be full url with root path 

* `body` define http body content 

* `headers` define http request header，default is None 

#### Returns
reutrn server response

#### `public static `[`HttpResponse`](#d9/d71/interfaceHttpResponse)` `[`post`](#d3/d69/namespacehttp_1a10ad303eed6fdb7a0a37d5ef8b735919)`(String url,`[`Buffer`](#d0/d11/classBuffer)` body,Object headers)` 

reuqest url with POST method，and return response，same as request("POST", ...)

#### Parameters
* `url` assigned url，has to be full url with root path 

* `body` define http body content 

* `headers` define http request header，default is None 

#### Returns
reutrn server response

