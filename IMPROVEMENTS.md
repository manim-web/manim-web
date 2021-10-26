# Improvements

## 1. WebGL Rendering

Rendering on the GPU instead of using the canvas API. The manim-gl way of handling rendering uses geometry shaders which is a problem: WebGL (even version 2) doesn't support geometry shaders.
This means that bezier points need to be computed before being sent to the GPU. This would be done on the CPU, but on the whole, using WebGL would be a lot faster. Or, the ManimCE developpers created shaders that could render mobject without using geometry shaders.

Useful links:

- https://github.com/mattdesl/adaptive-bezier-curve
- https://github.com/mattdesl/svg-mesh-3d

## 2. Native compiled code

One of the advantages of dart is to be compilable to javascript (to run in a web browser) and to native code. This means that animations could be written 100% in dart, and both a web version and a native version could be exported. One of the current problems of Manim is that it is written in Python which isn't compiled (and it's really slow). So, rendering could be a lot faster.
So, a version of Manim that can run in a web browser and be compiled would be a great improvement.

## 3. Exporting to image / video

Rendering an animation to an image or a video. This could be done in two ways:

- using another graphics library (cairo, skia, opengl) to render scenes (more stable)
- using the existing browser-based rendering engine and then save the files (simpler to implement)

## 4. Custom fonts

Currently, the text rendering is done using $\LaTeX$. In Manim and ManimCE, they used Pango, I don't know if it could be possible using it in the browser or it could be added as a preloading step.

Useful links:

- https://github.com/opentypejs/opentype.js

## 5. Precompiled videos

_Suggested by JCosmos on Discord_

Precompiling a video could mean 2 things:

- Precomputing points (could be done now)
- Prerendering a video (could be done once we can export to a video)
