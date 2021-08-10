import 'package:manim_web/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/mobject/types/mobject.dart';
import 'package:manim_web/renderer/abstract_renderer.dart';
import 'package:manim_web/util/color.dart';

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
