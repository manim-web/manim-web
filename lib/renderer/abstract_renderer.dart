library renderer;

import 'package:manim_web/display/abstract_display.dart';
import 'package:manim_web/mobject/types/mobject.dart';
import 'package:manim_web/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/util/color.dart';
import 'package:manim_web/util/events/event.dart';
import 'package:manim_web/util/vector.dart';

part 'empty_renderer.dart';

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

  void renderBackground(Color backgroundColor);

  void renderMobject(Mobject mob);
  void renderMobjects(List<Mobject> mobs);

  void renderVMobject(VMobject mob);
  void renderVMobjects(List<VMobject> mobs);
}
