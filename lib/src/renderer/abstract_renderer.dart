import 'package:manim_web/src/display/abstract_display.dart';
import 'package:manim_web/src/mobject/types/mobject.dart';
import 'package:manim_web/src/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/src/util/aabb.dart';
import 'package:manim_web/src/util/color.dart';
import 'package:manim_web/src/util/events/event_dispatcher.dart';
import 'package:manim_web/src/util/vector.dart';

abstract class AbstractRenderer {
  double lineWidthMultiple = 0.01;
  EventDispatcher eventDispatcher = EventDispatcher.eventDispatcher;
  bool isFocused = false;

  AbstractRenderer();

  late AbstractDisplay display;

  List<Vector3> transformPointsPreDisplay(Mobject mob, List<Vector3> points) =>
      display.camera.transformPointsPreDisplay(mob, points);

  //* The methods bellow needs to be implemented in other renderers

  void setup(AbstractDisplay _display) {
    display = _display;
  }

  void setMatrix(double a, double b, double c, double d, double e, double f);

  void renderBackground(Color backgroundColor, AABB aabb);

  void renderMobject(Mobject mob, AABB aabb);
  void renderMobjects(List<Mobject> mobs, AABB aabb);

  void renderVMobject(VMobject mob, AABB aabb);
  void renderVMobjects(List<VMobject> mobs, AABB aabb);
}
