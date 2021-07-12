# Frequently Asked Questions

<details>
  <summary>Why using Manim web instead of ManimGL or Manim Community ?</summary>

  This version can run in the web browser. 
  - For simple animations which don't require lots of computing power, it may be easier to make the end-user render the animation instead of loading a video file
  - Interactive animations can be done with it without having to install anything
</details>

<details>
  <summary>Why does it use the 2d canvas API instead of WebGL ?</summary>

  ManimWeb is a reimplementation of the Cairo version of Manim because the OpenGL version (ManimGL) uses geometry shaders which aren't implemented yet with WebGL (even WebGL2). Using WebGL may be possible, there is more detail on how it may be implemented in the [improvements/suggestions page](IMPROVEMENTS.md). It could be a lot faster but currently, the 2d canvas API is the only rendering API used.
</details>

<details>
  <summary>Why using Dart and not JavaScript ?</summary>

  Dart is very similar to JS. However, Dart can be compiled to Native code (as discussed in the [improvements/suggestions page](IMPROVEMENTS.md)) and also compiles to JavaScript. Dart supports operator overloading, has a strong type system with runtime checks, has named arguments for functions, class instances are similar to function calls (`new` keyword is optional), and some useful features like chaining using `..`.
</details>