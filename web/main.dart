import 'dart:html';

import 'package:manim_web/display/canvas_2d_display.dart';
import 'package:manim_web/manim.dart';

void main() {
  runScene(TestScene());
}

class TestScene extends Scene {
  @override
  AbstractDisplay createDisplay() =>
      Canvas2DDisplay(document.querySelector('.canvas-container')!);

  @override
  Future construct() async {
    // Your animations here
  }
}
