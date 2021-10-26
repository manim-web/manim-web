import 'package:manim_web/manim.dart';
import 'package:manim_web/src/animation/animation.dart';
import 'package:manim_web/src/animation/composition.dart';
import 'package:manim_web/src/animation/transform.dart';
import 'package:manim_web/src/constants.dart';
import 'package:manim_web/src/mobject/geometry.dart';
import 'package:manim_web/src/mobject/types/mobject.dart';
import 'package:manim_web/src/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/src/util/array.dart';
import 'package:manim_web/src/util/color.dart';
import 'package:manim_web/src/util/rate_functions.dart';
import 'package:manim_web/src/util/vector.dart';

class FocusOn extends Transform {
  Color color;
  Vector3 focusPoint;

  @override
  bool remover = true;

  FocusOn(
    this.focusPoint, {
    double runTime = 2,
    RateFunc rateFunc = smooth,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
    this.color = const Color(r: 0.53333, g: 0.53333, b: 0.53333, a: 0.2),
  }) : super(
          VMobject(),
          rateFunc: rateFunc,
          runTime: runTime,
          lagRatio: lagRatio,
        );

  @override
  Mobject createTarget() {
    return Dot(ORIGIN, radius: 0)
      ..setFill(color: color)
      ..addUpdater((d, dt) => d..moveToPoint(focusPoint));
  }

  @override
  Mobject createStartingMobject() {
    return Dot(
      ORIGIN,
      radius: FRAME_X_RADIUS + FRAME_Y_RADIUS,
    )..setStyle(
        strokeWidth: 0,
        fillColor: color.withTransparency(0),
      );
  }
}

class Indicate extends Transform {
  Color color;
  double scaleFactor;

  Indicate(
    Mobject mobject, {
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = thereAndBack,
    this.color = YELLOW,
    this.scaleFactor = 1.2,
  }) : super(
          mobject,
          lagRatio: lagRatio,
          runTime: runTime,
          rateFunc: rateFunc,
        );

  @override
  Mobject createTarget() {
    return mobject.copy()
      ..scaleUniformly(scaleFactor)
      ..setColor(color: color);
  }
}

class Flash extends AnimationGroup {
  List<Line> lines;

  Flash._(
    List<Animation> animations,
    this.lines, {
    double runTime = 1, // Initialized in initRunTime
    RateFunc rateFunc = linear,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
    required Group group,
  }) : super(
          animations,
          runTime: runTime,
          rateFunc: rateFunc,
          lagRatio: lagRatio,
          group: group,
        );

  factory Flash({
    required Vector3 point,
    Color color = YELLOW,
    double lineLenght = 0.2,
    int numLines = 12,
    double flashRadius = 0.3,
    double lineStrokeWidth = 3,
    double runTime = 1, // Initialized in initRunTime
    RateFunc rateFunc = linear,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
    Group? group,
  }) {
    var lines = <Line>[];

    for (var angle in arange(start: 0, end: TAU, step: TAU / numLines).flat()) {
      lines.add(
        Line(start: ORIGIN, end: RIGHT * lineLenght)
          ..shift(RIGHT * (flashRadius - lineLenght))
          ..rotate(angle, aboutPoint: ORIGIN)
          ..setStroke(width: lineStrokeWidth, color: color),
      );
    }

    var group = Group(lines)..addUpdater((l, dt) => l..moveToPoint(point));
    var animations = [
      for (var line in lines) ShowCreationThenDestruction(line)
    ];

    return Flash._(
      animations,
      lines,
      group: group,
      lagRatio: lagRatio,
      rateFunc: rateFunc,
      runTime: runTime,
    );
  }
}

class ShowPassingFlash extends ShowPartial {
  double timeWidth;

  @override
  bool remover = true;

  ShowPassingFlash(
    Mobject mobject, {
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = smooth,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
    this.timeWidth = 0.1,
  }) : super(
          mobject,
          runTime: runTime,
          rateFunc: rateFunc,
          lagRatio: lagRatio,
        );

  @override
  List<double> getBounds(double alpha) {
    var upper = interpolate(0, 1 + timeWidth, alpha);
    var lower = upper - timeWidth;
    return [min(upper, 1), max(lower, 0)];
  }

  @override
  void finish() {
    super.finish();

    for (var mobs in getAllFamiliesZipped()) {
      mobs[0].pointwiseBecomePartial(mobs[1], 0, 1);
    }
  }
}

class ShowCreationThenDestruction extends ShowPassingFlash {
  ShowCreationThenDestruction(
    Mobject mobject, {
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = smooth,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
    double timeWidth = 2,
  }) : super(
          mobject,
          runTime: runTime,
          rateFunc: rateFunc,
          lagRatio: lagRatio,
          timeWidth: timeWidth,
        );
}
