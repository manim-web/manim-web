import 'package:manim_web/src/mobject/types/mobject.dart';
import 'package:manim_web/src/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/src/util/aabb.dart';
import 'package:manim_web/src/util/color.dart';
import 'package:manim_web/src/renderer/abstract_renderer.dart';

class EmptyRenderer extends AbstractRenderer {
  @override
  void renderBackground(Color backgroundColor, AABB aabb) {}

  @override
  void renderMobject(Mobject mob, AABB aabb) {}

  @override
  void renderMobjects(List<Mobject> mobs, AABB aabb) {}

  @override
  void renderVMobject(VMobject mob, AABB aabb) {}

  @override
  void renderVMobjects(List<VMobject> mobs, AABB aabb) {}

  @override
  void setMatrix(double a, double b, double c, double d, double e, double f) {}
}
