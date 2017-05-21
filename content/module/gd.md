+++
draft = false
title = "gd"
description = "Image processing module."
[menu.main]
parent = "modules"
identifier = "gd"
+++

[Image](#d2/d41/interfaceImage) processing module.

Base module. It can be used to create and manipulate image files. The way to use： 
```cpp
var gd = require('gd');
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static `[`Image`](#d2/d41/interfaceImage)` `[`create`](#dd/d5d/namespacegd_1a3349d9352130d7050247113235a3e1a9)`(Integer width,Integer height,Integer color)`            | Create a new image.
`public static `[`Image`](#d2/d41/interfaceImage)` `[`load`](#dd/d5d/namespacegd_1ac601317eb0159524d6d59dda9caff9f3)`(`[`Buffer`](#d0/d11/classBuffer)` data)`            | Decoded image from the format data.
`public static `[`Image`](#d2/d41/interfaceImage)` `[`load`](#dd/d5d/namespacegd_1a4fb9233ae412463c0b316f88e3dcea70)`(`[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` stm)`            | Decoded image from the stream object.
`public static `[`Image`](#d2/d41/interfaceImage)` `[`load`](#dd/d5d/namespacegd_1a0bf17e71d89ac583e7fd9cf323e822be)`(String fname)`            | Decoded image from the specified file.
`public static Integer `[`rgb`](#dd/d5d/namespacegd_1a0706099b78bbf292b7d7898acc0b7aa2)`(Integer red,Integer green,Integer blue)`            | Generating a combined color through rgb color components.
`public static Integer `[`rgba`](#dd/d5d/namespacegd_1ad330769672a80a55bbca412dd909358a)`(Integer red,Integer green,Integer blue,Number alpha)`            | Generating a combined color through rgba color components.
`public static Integer `[`hsl`](#dd/d5d/namespacegd_1a019d7f7f15237b710462208f3ab9b74e)`(Number hue,Number saturation,Number lightness)`            | Generating a combined color through hsl color components.
`public static Integer `[`hsla`](#dd/d5d/namespacegd_1a14fb8efd2fd9e7c1bbb0d7169a5eecca)`(Number hue,Number saturation,Number lightness,Number alpha)`            | Generating a combined color through hsla color components.
`public static Integer `[`hsb`](#dd/d5d/namespacegd_1a49abf5b15cc916fbdef973206c9f6b6f)`(Number hue,Number saturation,Number brightness)`            | Generating a combined color through hsb color components.
`public static Integer `[`hsba`](#dd/d5d/namespacegd_1aa617175f56169bac97ea0a4fbc37ab70)`(Number hue,Number saturation,Number brightness,Number alpha)`            | Generating a combined color through hsba color components.
`public static Integer `[`color`](#dd/d5d/namespacegd_1aa810ccf3c53765e07860a6e4bc4e86a0)`(String color)`            | Generating a combined color by string.

## Members

#### `public static `[`Image`](#d2/d41/interfaceImage)` `[`create`](#dd/d5d/namespacegd_1a3349d9352130d7050247113235a3e1a9)`(Integer width,Integer height,Integer color)` 

Create a new image.

#### Parameters
* `width` Specifies the width of the image. 

* `height` Specifies the height of the image. 

* `color` Specify the image type, the allowable value is [gd.TRUECOLOR](#dd/d5d/namespacegd_1abb19e274d6ddf2f7ff7703956498af30) or [gd.PALETTE](#dd/d5d/namespacegd_1aa2a13a4b909b87aeae041a916e71c7c2)

#### Returns
Returns the created image object of success.

#### `public static `[`Image`](#d2/d41/interfaceImage)` `[`load`](#dd/d5d/namespacegd_1ac601317eb0159524d6d59dda9caff9f3)`(`[`Buffer`](#d0/d11/classBuffer)` data)` 

Decoded image from the format data.

#### Parameters
* `data` The image data need decoded. 

#### Returns
Return successfully decoded image object.

#### `public static `[`Image`](#d2/d41/interfaceImage)` `[`load`](#dd/d5d/namespacegd_1a4fb9233ae412463c0b316f88e3dcea70)`(`[`SeekableStream`](#d6/d9c/interfaceSeekableStream)` stm)` 

Decoded image from the stream object.

#### Parameters
* `stm` The stream object of the specified image data. 

#### Returns
Return successfully decoded image object.

#### `public static `[`Image`](#d2/d41/interfaceImage)` `[`load`](#dd/d5d/namespacegd_1a0bf17e71d89ac583e7fd9cf323e822be)`(String fname)` 

Decoded image from the specified file.

#### Parameters
* `fname` Specify the file name. 

#### Returns
Return successfully decoded image object.

#### `public static Integer `[`rgb`](#dd/d5d/namespacegd_1a0706099b78bbf292b7d7898acc0b7aa2)`(Integer red,Integer green,Integer blue)` 

Generating a combined color through rgb color components.

#### Parameters
* `red` Red component in the range of 0-255 

* `green` Green component in the range of 0-255 

* `blue` Blue component in the range of 0-255 

#### Returns
Returns the combined color.

#### `public static Integer `[`rgba`](#dd/d5d/namespacegd_1ad330769672a80a55bbca412dd909358a)`(Integer red,Integer green,Integer blue,Number alpha)` 

Generating a combined color through rgba color components.

#### Parameters
* `red` Red component in the range of 0-255 

* `green` Green component in the range of 0-255 

* `blue` Blue component in the range of 0-255 

* `alpha` Transparent component in the range of 0.0-1.0 

#### Returns
Returns the combined color.

#### `public static Integer `[`hsl`](#dd/d5d/namespacegd_1a019d7f7f15237b710462208f3ab9b74e)`(Number hue,Number saturation,Number lightness)` 

Generating a combined color through hsl color components.

#### Parameters
* `hue` Hue component in the range of 0-360. 

* `saturation` Saturation components in the range of 0.0-1.0 

* `lightness` Lightness component in the range of 0.0-1.0 

#### Returns
Returns the combined color.

#### `public static Integer `[`hsla`](#dd/d5d/namespacegd_1a14fb8efd2fd9e7c1bbb0d7169a5eecca)`(Number hue,Number saturation,Number lightness,Number alpha)` 

Generating a combined color through hsla color components.

#### Parameters
* `hue` Hue component in the range of 0-360. 

* `saturation` Saturation components in the range of 0.0-1.0 

* `lightness` Lightness component in the range of 0.0-1.0 

* `alpha` Transparent component in the range of 0.0-1.0 

#### Returns
Returns the combined color.

#### `public static Integer `[`hsb`](#dd/d5d/namespacegd_1a49abf5b15cc916fbdef973206c9f6b6f)`(Number hue,Number saturation,Number brightness)` 

Generating a combined color through hsb color components.

#### Parameters
* `hue` Hue component in the range of 0-360. 

* `saturation` Saturation components in the range of 0.0-1.0 

* `brightness` Brightness component in the range of 0.0-1.0 

#### Returns
Returns the combined color.

#### `public static Integer `[`hsba`](#dd/d5d/namespacegd_1aa617175f56169bac97ea0a4fbc37ab70)`(Number hue,Number saturation,Number brightness,Number alpha)` 

Generating a combined color through hsba color components.

#### Parameters
* `hue` Hue component in the range of 0-360. 

* `saturation` Saturation components in the range of 0.0-1.0 

* `brightness` Brightness component in the range of 0.0-1.0 

* `alpha` Transparent component in the range of 0.0-1.0 

#### Returns
Returns the combined color.

#### `public static Integer `[`color`](#dd/d5d/namespacegd_1aa810ccf3c53765e07860a6e4bc4e86a0)`(String color)` 

Generating a combined color by string.

#### Parameters
* `color` The specified color string, e.g: "#ff0000", "ff0000", "#f00", "f00" 

#### Returns
Returns the combined color.

