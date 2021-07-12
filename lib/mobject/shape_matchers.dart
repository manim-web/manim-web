import 'package:manim_web/constants.dart';
import 'package:manim_web/util/color.dart';
import 'package:manim_web/util/vector.dart';
import 'package:manim_web/mobject/geometry.dart';
import 'package:manim_web/mobject/types/mobject.dart';
import 'package:manim_web/mobject/types/vectorized_mobject.dart';

class SurroundingRectangle extends Rectangle {
  double buff;
  Mobject mobject;

  SurroundingRectangle({
    this.buff = SMALL_BUFFER,
    required this.mobject,
    Color fillColor = TRANSPARENT,
    Color strokeColor = WHITE,
    double strokeWidth = DEFAULT_STROKE_WIDTH,
    Color backgroundStrokeColor = TRANSPARENT,
    double backgroundStrokeWidth = 0.0,
    double sheenFactor = 0.0,
    Vector3 sheenDirection = UR,
    bool makeSmoothAfterApplyingFunctions = false,
  }) : super(
            width: mobject.getWidth() + 2 * buff,
            height: mobject.getHeight() + 2 * buff,
            fillColor: fillColor,
            strokeColor: strokeColor,
            strokeWidth: strokeWidth,
            backgroundStrokeColor: backgroundStrokeColor,
            backgroundStrokeWidth: backgroundStrokeWidth,
            sheenFactor: sheenFactor,
            sheenDirection: sheenDirection,
            makeSmoothAfterApplyingFunctions:
                makeSmoothAfterApplyingFunctions) {
    moveToMobject(mobject);
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
    Color fillColor = BLACK,
    Color strokeColor = TRANSPARENT,
    double strokeWidth = 0.0,
    Color backgroundStrokeColor = TRANSPARENT,
    double backgroundStrokeWidth = 0.0,
    double sheenFactor = 0.0,
    Vector3 sheenDirection = UR,
    bool makeSmoothAfterApplyingFunctions = false,
  }) : super(
            buff: buff,
            mobject: mobject,
            fillColor: fillColor,
            strokeColor: strokeColor,
            strokeWidth: strokeWidth,
            backgroundStrokeColor: backgroundStrokeColor,
            backgroundStrokeWidth: backgroundStrokeWidth,
            sheenFactor: sheenFactor,
            sheenDirection: sheenDirection,
            makeSmoothAfterApplyingFunctions:
                makeSmoothAfterApplyingFunctions) {
    originalFillOpacity = fillColor.a;
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
      double? sheenFactor,
      Vector3? sheenDirection,
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
  Cross(
      {required Mobject mobject,
      double strokeWidth = 6,
      Color strokeColor = RED_C})
      : super([
          Line(start: UL, end: DR),
          Line(start: UR, end: DL),
        ]) {
    replace(mobject, stretch: true);
    setStroke(color: strokeColor, width: strokeWidth);
  }

  @override
  Cross copy() => Cross.copyFrom(this);

  Cross.copyFrom(Cross mob) : super.copyFrom(mob);
}

class Underline extends Line {
  Underline(
      {required Mobject mobject,
      double buff = SMALL_BUFFER,
      double? pathArc,
      Vector3 start = RIGHT,
      Vector3 end = LEFT,
      Color? fillColor,
      Color? strokeColor,
      double strokeWidth = DEFAULT_STROKE_WIDTH,
      Color? backgroundStrokeColor,
      double backgroundStrokeWidth = 0.0,
      double sheenFactor = 0.0,
      Vector3 sheenDirection = UR,
      bool makeSmoothAfterApplyingFunctions = false,
      bool closeNewPoints = false})
      : super(
          start: start,
          end: end,
          buff: buff,
          pathArc: pathArc,
          fillColor: fillColor,
          strokeColor: strokeColor,
          strokeWidth: strokeWidth,
          backgroundStrokeColor: backgroundStrokeColor,
          backgroundStrokeWidth: backgroundStrokeWidth,
          sheenFactor: sheenFactor,
          sheenDirection: sheenDirection,
          makeSmoothAfterApplyingFunctions: makeSmoothAfterApplyingFunctions,
          closeNewPoints: closeNewPoints,
        ) {
    matchWidth(mobject);
    nextToMobject(mobject, direction: DOWN, buffer: buff);
  }

  @override
  Underline copy() => Underline.copyFrom(this);

  Underline.copyFrom(Underline mob) : super.copyFrom(mob);
}
