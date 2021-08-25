import 'package:manim_web/src/mobject/types/mobject.dart';
import 'package:manim_web/src/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/src/util/color.dart';
import 'package:manim_web/src/renderer/abstract_renderer.dart';

class EmptyRenderer extends AbstractRenderer {
  @override
  void renderBackground(Color backgroundColor) {}

  @override
  void renderMobject(Mobject mob) {}

  @override
  void renderMobjects(List<Mobject> mobs) {}

  @override
  void renderVMobject(VMobject mob) {}

  @override
  void renderVMobjects(List<VMobject> mobs) {}

  @override
  void setMatrix(double a, double b, double c, double d, double e, double f) {}
}
