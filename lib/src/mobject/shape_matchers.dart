import 'package:manim_web/src/constants.dart';
import 'package:manim_web/src/util/color.dart';
import 'package:manim_web/src/util/vector.dart';
import 'package:manim_web/src/mobject/geometry.dart';
import 'package:manim_web/src/mobject/types/mobject.dart';
import 'package:manim_web/src/mobject/types/vectorized_mobject.dart';

class SurroundingRectangle extends Rectangle {
  double buff;
  Mobject mobject;

  SurroundingRectangle(
      {this.buff = SMALL_BUFFER, required this.mobject, Color color = WHITE})
      : super(
          width: mobject.getWidth() + 2 * buff,
          height: mobject.getHeight() + 2 * buff,
          color: color,
        ) {
    moveToMobject(mobject);
    setStroke(color: color);
    setFill(color: TRANSPARENT);
  }

  @override
  SurroundingRectangle copy() => SurroundingRectangle.copyFrom(this);

  SurroundingRectangle.copyFrom(SurroundingRectangle mob)
      : buff = mob.buff,
        mobject = mob.mobject.copy(),
        super.copyFrom(mob);
}

class BackgroundRectangle extends SurroundingRectangle {
  late double originalFillOpacity;

  BackgroundRectangle({
    double buff = 0,
    required Mobject mobject,
    Color color = BLACK,
  }) : super(buff: buff, mobject: mobject, color: color) {
    originalFillOpacity = getFillColor().a;
  }

  @override
  void pointwiseBecomePartial(Mobject mob, double a, double b) {
    var color = getFillColor();
    setFill(color: color.withTransparency(color.a * originalFillOpacity));
  }

  @override
  void setStyle(
      {Color? fillColor,
      List<Color>? fillColors,
      Color? strokeColor,
      List<Color>? strokeColors,
      double? strokeWidth,
      Color? backgroundStrokeColor,
      List<Color>? backgroundStrokeColors,
      double? backgroundStrokeWidth,
      bool family = true}) {
    super.setStyle(
        strokeColor: TRANSPARENT,
        strokeWidth: 0,
        fillColor: BLACK.withTransparency(fillColor?.a ?? getFillColor().a));
  }

  @override
  Color getFillColor() => color;

  @override
  BackgroundRectangle copy() => BackgroundRectangle.copyFrom(this);

  BackgroundRectangle.copyFrom(BackgroundRectangle mob)
      : originalFillOpacity = mob.originalFillOpacity,
        super.copyFrom(mob);
}

class Cross extends VGroup {
  Cross({required Mobject mobject, Color color = RED_C})
      : super([
          Line(start: UL, end: DR),
          Line(start: UR, end: DL),
        ]) {
    replace(mobject, stretch: true);
    setStroke(color: color, width: 6);
  }

  @override
  Cross copy() => Cross.copyFrom(this);

  Cross.copyFrom(Cross mob) : super.copyFrom(mob);
}

class Underline extends Line {
  Underline({
    required Mobject mobject,
    double buff = SMALL_BUFFER,
    double? pathArc,
    Vector3 start = RIGHT,
    Vector3 end = LEFT,
    Color color = WHITE,
  }) : super(
          start: start,
          end: end,
          buff: buff,
          pathArc: pathArc,
          color: color,
        ) {
    matchWidth(mobject);
    nextToMobject(mobject, direction: DOWN, buffer: buff);
  }

  @override
  Underline copy() => Underline.copyFrom(this);

  Underline.copyFrom(Underline mob) : super.copyFrom(mob);
}
