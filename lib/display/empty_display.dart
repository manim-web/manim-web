import 'package:manim_web/display/abstract_display.dart';
import 'package:manim_web/renderer/abstract_renderer.dart';
import 'package:manim_web/renderer/empty_renderer.dart';

class EmptyDisplay extends AbstractDisplay {
  @override
  void bindEventListeners() {}

  @override
  AbstractRenderer createRenderer() => EmptyRenderer();

  @override
  Future<double> nextFrame() async => 0;

  @override
  void setDisplaySize(int width, int height) {}

  @override
  void unbindEventListeners() {}
}
