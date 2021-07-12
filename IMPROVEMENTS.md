# Improvements

## 1. WebGL Rendering

Rendering on the GPU instead of using the canvas API. The manim-gl way of handling rendering uses geometry shaders which is a problem: WebGL (even version 2) doesn't support geometry shaders.
This means that bezier points need to be computed before being sent to the GPU. This would be done on the CPU, but on the whole, using WebGL would be a lot faster.

Useful links:
- https://github.com/mattdesl/adaptive-bezier-curve
- https://github.com/mattdesl/svg-mesh-3d

## 2. Native compiled code

One of the advantages of dart is to be compilable to javascript (to run in a web browser) and to native code. This means that animations could be written 100% in dart, and both a web version and a native version could be exported. One of the current problems of Manim is that it is written in Python which isn't compiled (and it's really slow). So, rendering could be a lot faster.
So, a version of Manim that can run in a web browser and be compiled would be a great improvement.
However, if WebGL rendering is implemented, some code would need to be rewritten to use OpenGL instead of WebGL for the native version. This means that the renderer would need to be abstracted: 

For the web version:
- a WebGL version
- a Canvas version

For the native version: 
- a Cairo version
- an OpenGL version (maybe other graphics libraries later ?)

This also means that MathJax could not be used to render tex and text.

## 3. Exporting to image / video

Rendering an animation to an image or a video. This would require using native code to access files or using electron to directly use js code.

## 4. Custom fonts

Currently, the text rendering is done using MathJax using $\LaTeX$. However, converting a TTF file to a list of bezier curves is possible in javascript so it could be possible to do that.

Useful links:
- https://github.com/opentypejs/opentype.js