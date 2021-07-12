import 'dart:html';

import 'package:manim_web/display/abstract_html_display.dart';
import 'package:manim_web/renderer/abstract_renderer.dart';
import 'package:manim_web/renderer/canvas_2d_renderer.dart';

class Canvas2DDisplay extends AbstractHTMLDisplay {
  Canvas2DDisplay(Element container) : super(container: container);

  @override
  AbstractRenderer createRenderer() => Canvas2DRenderer();
}
