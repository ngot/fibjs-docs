+++
draft = false
title = "gd"
description = "图像文件处理模块"
[menu.main]
parent = "modules"
identifier = "gd"
+++

图像文件处理模块

基础模块。可用于创建和操作图像文件，引用方式： 
```js
var gd = require('gd');
```

## Field Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
const            | `public const NONE`[`NONE`](#dd/d5d/namespacegd_1a5266707a2200b1443db738619d43790d)`NONE`<p>图像格式常量，标示当前图像来源为未知</p>
const            | `public const JPEG`[`JPEG`](#dd/d5d/namespacegd_1aebce13e87ee56b160f90cc8f4418676d)`JPEG`<p>图像格式常量，标示当前图像来源为 jpeg 格式数据</p>
const            | `public const GIF`[`GIF`](#dd/d5d/namespacegd_1a733d16843306db18543358a63f1727e0)`GIF`<p>图像格式常量，标示当前图像来源为 gif 格式数据</p>
const            | `public const PNG`[`PNG`](#dd/d5d/namespacegd_1a80c80c2552f333f8bb83747cf532505b)`PNG`<p>图像格式常量，标示当前图像来源为 png 格式数据</p>
const            | `public const TIFF`[`TIFF`](#dd/d5d/namespacegd_1a535020e837c3536736618a1b59ad855a)`TIFF`<p>图像格式常量，标示当前图像来源为 tiff 格式数据</p>
const            | `public const BMP`[`BMP`](#dd/d5d/namespacegd_1ae0f75b756abeef86ec8b1128ffe5115f)`BMP`<p>图像格式常量，标示当前图像来源为 bmp 格式数据</p>
const            | `public const WEBP`[`WEBP`](#dd/d5d/namespacegd_1ab062c3c1622ec7ffb3b2f2e2033b433d)`WEBP`<p>图像格式常量，标示当前图像来源为 webp 格式数据</p>
const            | `public const TRUECOLOR`[`TRUECOLOR`](#dd/d5d/namespacegd_1a2a174492923023dd07fe9e0ce1a90202)`TRUECOLOR`<p>图像类型常量，标示当前图像为真彩色图像</p>
const            | `public const PALETTE`[`PALETTE`](#dd/d5d/namespacegd_1ac4b8fb04068de857c93e65d8a5c7d82e)`PALETTE`<p>图像类型常量，标示当前图像为调色板图像</p>
const            | `public const ARC`[`ARC`](#dd/d5d/namespacegd_1a672feeb6b8172f873cb0d28d001f7ad0)`ARC`<p>扇形绘制样式，绘制一条连接开始和结束点的圆弧</p>
const            | `public const CHORD`[`CHORD`](#dd/d5d/namespacegd_1a5a6179b00dcad09bbc24671d2df87f50)`CHORD`<p>扇形绘制样式，绘制一条连接原点，开始和结束点的直线</p>
const            | `public const NOFILL`[`NOFILL`](#dd/d5d/namespacegd_1a6fc13614f1550a02ded2073eae6ecf3b)`NOFILL`<p>扇形绘制样式，绘制不填充的扇形</p>
const            | `public const EDGED`[`EDGED`](#dd/d5d/namespacegd_1a4c5a60d3826ba1d0f55bc533e16a9c84)`EDGED`<p>扇形绘制样式，绘制一条连接起点和终点的弧和连接原点的直线</p>
const            | `public const HORIZONTAL`[`HORIZONTAL`](#dd/d5d/namespacegd_1ac6e7f1f566728c076c6cfaf4803f7e78)`HORIZONTAL`<p>镜像方向，横向做镜像处理</p>
const            | `public const VERTICAL`[`VERTICAL`](#dd/d5d/namespacegd_1adce01ecc7fc29288a3cdf7109d948d34)`VERTICAL`<p>镜像方向，纵向做镜像处理</p>
const            | `public const BOTH`[`BOTH`](#dd/d5d/namespacegd_1a811e081254d87cb7c81033637804569d)`BOTH`<p>镜像方向，横向和纵向都做镜像处理</p>
const            | `public const LEFT`[`LEFT`](#dd/d5d/namespacegd_1acf1b92e9f3e6ff4b7f2537a470e31b13)`LEFT`<p>旋转方向，向左旋转</p>
const            | `public const RIGHT`[`RIGHT`](#dd/d5d/namespacegd_1a6f4a1982db74e4656421815e55f1b876)`RIGHT`<p>旋转方向，向右旋转</p>
const            | `public const MEAN_REMOVAL`[`MEAN_REMOVAL`](#dd/d5d/namespacegd_1a126e0acc4059469b7ebf6c427df8b0c8)`MEAN_REMOVAL`<p>滤波器类型：用平均移除法来达到轮廓效果</p>
const            | `public const EDGEDETECT`[`EDGEDETECT`](#dd/d5d/namespacegd_1aad65a57f5144b41f0a7c239e8eef620b)`EDGEDETECT`<p>滤波器类型：用边缘检测来突出图像的边缘</p>
const            | `public const EMBOSS`[`EMBOSS`](#dd/d5d/namespacegd_1ab39ceafe66e419b4e408117c305d7af9)`EMBOSS`<p>滤波器类型：使图像浮雕化</p>
const            | `public const SELECTIVE_BLUR`[`SELECTIVE_BLUR`](#dd/d5d/namespacegd_1a1ecd9d3e9bc450a6fedbaa07ea226305)`SELECTIVE_BLUR`<p>滤波器类型：模糊图像</p>
const            | `public const GAUSSIAN_BLUR`[`GAUSSIAN_BLUR`](#dd/d5d/namespacegd_1a3662818bfbf8e36cd27dd8e64e1f9e87)`GAUSSIAN_BLUR`<p>滤波器类型：用高斯算法模糊图像</p>
const            | `public const NEGATE`[`NEGATE`](#dd/d5d/namespacegd_1afefe6c1e53e41da5fc8c9f44418a5eb6)`NEGATE`<p>滤波器类型：将图像中所有颜色反转</p>
const            | `public const GRAYSCALE`[`GRAYSCALE`](#dd/d5d/namespacegd_1ad4e83e34191c3fda275620016c76c2ad)`GRAYSCALE`<p>滤波器类型：将图像转换为灰度图</p>
const            | `public const SMOOTH`[`SMOOTH`](#dd/d5d/namespacegd_1a333b6cf9df4adfb00a64ed2066b717cf)`SMOOTH`<p>滤波器类型：使图像更柔滑，用arg1设定柔滑级别</p>
const            | `public const BRIGHTNESS`[`BRIGHTNESS`](#dd/d5d/namespacegd_1ad3a8bf5832998894fed85c46f63cbcd2)`BRIGHTNESS`<p>滤波器类型：改变图像的亮度，用arg1设定亮度级别，取值范围是-255~255</p>
const            | `public const CONTRAST`[`CONTRAST`](#dd/d5d/namespacegd_1afedfecd61393983ac6dc4b4138cb3a32)`CONTRAST`<p>滤波器类型：改变图像的对比度，用arg1设定对比度级别，取值范围是0~100</p>
const            | `public const COLORIZE`[`COLORIZE`](#dd/d5d/namespacegd_1ab2bcca76c2114d2f1a88e2a35a50a452)`COLORIZE`<p>滤波器类型：改变图像的色调，用arg1、arg2、arg3分别指定red、blue、green，每种颜色范围是0~255，arg4为透明度，取值返回是0~127</p>

## Method Summary

Type                           | Method and Description
-------------------------------|---------------------------------------------
Image            | `create(Integer width,Integer height,Integer color)`<p>创建一个新图像</p>
Image            | `load(Buffer data)`<p>从格式数据中解码图像</p>
Image            | `load(SeekableStream stm)`<p>从流对象中解码图像</p>
Image            | `load(String fname)`<p>从指定文件中解码图像</p>
Integer            | `rgb(Integer red,Integer green,Integer blue)`<p>通过 rgb 颜色分量生成组合颜色</p>
Integer            | `rgba(Integer red,Integer green,Integer blue,Number alpha)`<p>通过 rgba 颜色分量生成组合颜色</p>
Integer            | `hsl(Number hue,Number saturation,Number lightness)`<p>通过 hsl 颜色分量生成组合颜色</p>
Integer            | `hsla(Number hue,Number saturation,Number lightness,Number alpha)`<p>通过 hsla 颜色分量生成组合颜色</p>
Integer            | `hsb(Number hue,Number saturation,Number brightness)`<p>通过 hsb 颜色分量生成组合颜色</p>
Integer            | `hsba(Number hue,Number saturation,Number brightness,Number alpha)`<p>通过 hsba 颜色分量生成组合颜色</p>
Integer            | `color(String color)`<p>通过字符串生成组合颜色</p>

## Field Detail

{{% panel theme="default" header="NONE" %}}
#### **const** `public const NONE`[`NONE`](#dd/d5d/namespacegd_1a5266707a2200b1443db738619d43790d)`NONE`

图像格式常量，标示当前图像来源为未知

{{% /panel %}}
{{% panel theme="default" header="JPEG" %}}
#### **const** `public const JPEG`[`JPEG`](#dd/d5d/namespacegd_1aebce13e87ee56b160f90cc8f4418676d)`JPEG`

图像格式常量，标示当前图像来源为 jpeg 格式数据

{{% /panel %}}
{{% panel theme="default" header="GIF" %}}
#### **const** `public const GIF`[`GIF`](#dd/d5d/namespacegd_1a733d16843306db18543358a63f1727e0)`GIF`

图像格式常量，标示当前图像来源为 gif 格式数据

{{% /panel %}}
{{% panel theme="default" header="PNG" %}}
#### **const** `public const PNG`[`PNG`](#dd/d5d/namespacegd_1a80c80c2552f333f8bb83747cf532505b)`PNG`

图像格式常量，标示当前图像来源为 png 格式数据

{{% /panel %}}
{{% panel theme="default" header="TIFF" %}}
#### **const** `public const TIFF`[`TIFF`](#dd/d5d/namespacegd_1a535020e837c3536736618a1b59ad855a)`TIFF`

图像格式常量，标示当前图像来源为 tiff 格式数据

{{% /panel %}}
{{% panel theme="default" header="BMP" %}}
#### **const** `public const BMP`[`BMP`](#dd/d5d/namespacegd_1ae0f75b756abeef86ec8b1128ffe5115f)`BMP`

图像格式常量，标示当前图像来源为 bmp 格式数据

{{% /panel %}}
{{% panel theme="default" header="WEBP" %}}
#### **const** `public const WEBP`[`WEBP`](#dd/d5d/namespacegd_1ab062c3c1622ec7ffb3b2f2e2033b433d)`WEBP`

图像格式常量，标示当前图像来源为 webp 格式数据

{{% /panel %}}
{{% panel theme="default" header="TRUECOLOR" %}}
#### **const** `public const TRUECOLOR`[`TRUECOLOR`](#dd/d5d/namespacegd_1a2a174492923023dd07fe9e0ce1a90202)`TRUECOLOR`

图像类型常量，标示当前图像为真彩色图像

{{% /panel %}}
{{% panel theme="default" header="PALETTE" %}}
#### **const** `public const PALETTE`[`PALETTE`](#dd/d5d/namespacegd_1ac4b8fb04068de857c93e65d8a5c7d82e)`PALETTE`

图像类型常量，标示当前图像为调色板图像

{{% /panel %}}
{{% panel theme="default" header="ARC" %}}
#### **const** `public const ARC`[`ARC`](#dd/d5d/namespacegd_1a672feeb6b8172f873cb0d28d001f7ad0)`ARC`

扇形绘制样式，绘制一条连接开始和结束点的圆弧

{{% /panel %}}
{{% panel theme="default" header="CHORD" %}}
#### **const** `public const CHORD`[`CHORD`](#dd/d5d/namespacegd_1a5a6179b00dcad09bbc24671d2df87f50)`CHORD`

扇形绘制样式，绘制一条连接原点，开始和结束点的直线

{{% /panel %}}
{{% panel theme="default" header="NOFILL" %}}
#### **const** `public const NOFILL`[`NOFILL`](#dd/d5d/namespacegd_1a6fc13614f1550a02ded2073eae6ecf3b)`NOFILL`

扇形绘制样式，绘制不填充的扇形

{{% /panel %}}
{{% panel theme="default" header="EDGED" %}}
#### **const** `public const EDGED`[`EDGED`](#dd/d5d/namespacegd_1a4c5a60d3826ba1d0f55bc533e16a9c84)`EDGED`

扇形绘制样式，绘制一条连接起点和终点的弧和连接原点的直线

{{% /panel %}}
{{% panel theme="default" header="HORIZONTAL" %}}
#### **const** `public const HORIZONTAL`[`HORIZONTAL`](#dd/d5d/namespacegd_1ac6e7f1f566728c076c6cfaf4803f7e78)`HORIZONTAL`

镜像方向，横向做镜像处理

{{% /panel %}}
{{% panel theme="default" header="VERTICAL" %}}
#### **const** `public const VERTICAL`[`VERTICAL`](#dd/d5d/namespacegd_1adce01ecc7fc29288a3cdf7109d948d34)`VERTICAL`

镜像方向，纵向做镜像处理

{{% /panel %}}
{{% panel theme="default" header="BOTH" %}}
#### **const** `public const BOTH`[`BOTH`](#dd/d5d/namespacegd_1a811e081254d87cb7c81033637804569d)`BOTH`

镜像方向，横向和纵向都做镜像处理

{{% /panel %}}
{{% panel theme="default" header="LEFT" %}}
#### **const** `public const LEFT`[`LEFT`](#dd/d5d/namespacegd_1acf1b92e9f3e6ff4b7f2537a470e31b13)`LEFT`

旋转方向，向左旋转

{{% /panel %}}
{{% panel theme="default" header="RIGHT" %}}
#### **const** `public const RIGHT`[`RIGHT`](#dd/d5d/namespacegd_1a6f4a1982db74e4656421815e55f1b876)`RIGHT`

旋转方向，向右旋转

{{% /panel %}}
{{% panel theme="default" header="MEAN_REMOVAL" %}}
#### **const** `public const MEAN_REMOVAL`[`MEAN_REMOVAL`](#dd/d5d/namespacegd_1a126e0acc4059469b7ebf6c427df8b0c8)`MEAN_REMOVAL`

滤波器类型：用平均移除法来达到轮廓效果

{{% /panel %}}
{{% panel theme="default" header="EDGEDETECT" %}}
#### **const** `public const EDGEDETECT`[`EDGEDETECT`](#dd/d5d/namespacegd_1aad65a57f5144b41f0a7c239e8eef620b)`EDGEDETECT`

滤波器类型：用边缘检测来突出图像的边缘

{{% /panel %}}
{{% panel theme="default" header="EMBOSS" %}}
#### **const** `public const EMBOSS`[`EMBOSS`](#dd/d5d/namespacegd_1ab39ceafe66e419b4e408117c305d7af9)`EMBOSS`

滤波器类型：使图像浮雕化

{{% /panel %}}
{{% panel theme="default" header="SELECTIVE_BLUR" %}}
#### **const** `public const SELECTIVE_BLUR`[`SELECTIVE_BLUR`](#dd/d5d/namespacegd_1a1ecd9d3e9bc450a6fedbaa07ea226305)`SELECTIVE_BLUR`

滤波器类型：模糊图像

{{% /panel %}}
{{% panel theme="default" header="GAUSSIAN_BLUR" %}}
#### **const** `public const GAUSSIAN_BLUR`[`GAUSSIAN_BLUR`](#dd/d5d/namespacegd_1a3662818bfbf8e36cd27dd8e64e1f9e87)`GAUSSIAN_BLUR`

滤波器类型：用高斯算法模糊图像

{{% /panel %}}
{{% panel theme="default" header="NEGATE" %}}
#### **const** `public const NEGATE`[`NEGATE`](#dd/d5d/namespacegd_1afefe6c1e53e41da5fc8c9f44418a5eb6)`NEGATE`

滤波器类型：将图像中所有颜色反转

{{% /panel %}}
{{% panel theme="default" header="GRAYSCALE" %}}
#### **const** `public const GRAYSCALE`[`GRAYSCALE`](#dd/d5d/namespacegd_1ad4e83e34191c3fda275620016c76c2ad)`GRAYSCALE`

滤波器类型：将图像转换为灰度图

{{% /panel %}}
{{% panel theme="default" header="SMOOTH" %}}
#### **const** `public const SMOOTH`[`SMOOTH`](#dd/d5d/namespacegd_1a333b6cf9df4adfb00a64ed2066b717cf)`SMOOTH`

滤波器类型：使图像更柔滑，用arg1设定柔滑级别

{{% /panel %}}
{{% panel theme="default" header="BRIGHTNESS" %}}
#### **const** `public const BRIGHTNESS`[`BRIGHTNESS`](#dd/d5d/namespacegd_1ad3a8bf5832998894fed85c46f63cbcd2)`BRIGHTNESS`

滤波器类型：改变图像的亮度，用arg1设定亮度级别，取值范围是-255~255

{{% /panel %}}
{{% panel theme="default" header="CONTRAST" %}}
#### **const** `public const CONTRAST`[`CONTRAST`](#dd/d5d/namespacegd_1afedfecd61393983ac6dc4b4138cb3a32)`CONTRAST`

滤波器类型：改变图像的对比度，用arg1设定对比度级别，取值范围是0~100

{{% /panel %}}
{{% panel theme="default" header="COLORIZE" %}}
#### **const** `public const COLORIZE`[`COLORIZE`](#dd/d5d/namespacegd_1ab2bcca76c2114d2f1a88e2a35a50a452)`COLORIZE`

滤波器类型：改变图像的色调，用arg1、arg2、arg3分别指定red、blue、green，每种颜色范围是0~255，arg4为透明度，取值返回是0~127

{{% /panel %}}

## Method Detail

{{% panel theme="default" header="create" %}}
#### **Image** `create(Integer width,Integer height,Integer color)`

创建一个新图像

#### Parameters
* `width` 指定图像宽度 

* `height` 指定图像高度 

* `color` 指定图像类型，允许值为 gd.TRUECOLOR 或 gd.PALETTE

#### Returns
返回创建成功的图像对象
{{% /panel %}}
{{% panel theme="default" header="load" %}}
#### **Image** `load(Buffer data)`

从格式数据中解码图像

#### Parameters
* `data` 给定解码的图像数据 

#### Returns
返回解码成功的图像对象
{{% /panel %}}
{{% panel theme="default" header="load" %}}
#### **Image** `load(SeekableStream stm)`

从流对象中解码图像

#### Parameters
* `stm` 给定图像数据所在的流对象 

#### Returns
返回解码成功的图像对象
{{% /panel %}}
{{% panel theme="default" header="load" %}}
#### **Image** `load(String fname)`

从指定文件中解码图像

#### Parameters
* `fname` 指定文件名 

#### Returns
返回解码成功的图像对象
{{% /panel %}}
{{% panel theme="default" header="rgb" %}}
#### **Integer** `rgb(Integer red,Integer green,Integer blue)`

通过 rgb 颜色分量生成组合颜色

#### Parameters
* `red` 红色分量，范围为 0-255 

* `green` 绿色分量，范围为 0-255 

* `blue` 蓝色分量，范围为 0-255 

#### Returns
返回组合颜色
{{% /panel %}}
{{% panel theme="default" header="rgba" %}}
#### **Integer** `rgba(Integer red,Integer green,Integer blue,Number alpha)`

通过 rgba 颜色分量生成组合颜色

#### Parameters
* `red` 红色分量，范围为 0-255 

* `green` 绿色分量，范围为 0-255 

* `blue` 蓝色分量，范围为 0-255 

* `alpha` 透明分量，范围为 0.0-1.0 

#### Returns
返回组合颜色
{{% /panel %}}
{{% panel theme="default" header="hsl" %}}
#### **Integer** `hsl(Number hue,Number saturation,Number lightness)`

通过 hsl 颜色分量生成组合颜色

#### Parameters
* `hue` 色相分量，范围为 0-360 

* `saturation` 饱和度分量，范围为 0.0-1.0 

* `lightness` 亮度分量，范围为 0.0-1.0 

#### Returns
返回组合颜色
{{% /panel %}}
{{% panel theme="default" header="hsla" %}}
#### **Integer** `hsla(Number hue,Number saturation,Number lightness,Number alpha)`

通过 hsla 颜色分量生成组合颜色

#### Parameters
* `hue` 色相分量，范围为 0-360 

* `saturation` 饱和度分量，范围为 0.0-1.0 

* `lightness` 亮度分量，范围为 0.0-1.0 

* `alpha` 透明分量，范围为 0.0-1.0 

#### Returns
返回组合颜色
{{% /panel %}}
{{% panel theme="default" header="hsb" %}}
#### **Integer** `hsb(Number hue,Number saturation,Number brightness)`

通过 hsb 颜色分量生成组合颜色

#### Parameters
* `hue` 色相分量，范围为 0-360 

* `saturation` 饱和度分量，范围为 0.0-1.0 

* `brightness` 明亮程度分量，范围为 0.0-1.0 

#### Returns
返回组合颜色
{{% /panel %}}
{{% panel theme="default" header="hsba" %}}
#### **Integer** `hsba(Number hue,Number saturation,Number brightness,Number alpha)`

通过 hsba 颜色分量生成组合颜色

#### Parameters
* `hue` 色相分量，范围为 0-360 

* `saturation` 饱和度分量，范围为 0.0-1.0 

* `brightness` 明亮程度分量，范围为 0.0-1.0 

* `alpha` 透明分量，范围为 0.0-1.0 

#### Returns
返回组合颜色
{{% /panel %}}
{{% panel theme="default" header="color" %}}
#### **Integer** `color(String color)`

通过字符串生成组合颜色

#### Parameters
* `color` 指定颜色的字符串，如："#ff0000", "ff0000", "#f00", "f00" 

#### Returns
返回组合颜色
{{% /panel %}}

<style>
  td {
    vertical-align: top;
  }
</style>