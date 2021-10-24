import 'dart:math';

import 'package:manim_web/src/animation/animation.dart';
import 'package:manim_web/src/constants.dart';
import 'package:manim_web/src/mobject/types/mobject.dart';
import 'package:manim_web/src/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/src/util/bezier.dart';
import 'package:manim_web/src/util/color.dart';
import 'package:manim_web/src/util/rate_functions.dart';

abstract class ShowPartial extends Animation {
  ShowPartial(
    Mobject mobject, {
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = smooth,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
  }) : super(mobject, runTime: runTime, rateFunc: rateFunc, lagRatio: lagRatio);

  @override
  void interpolateSubMobject(List<Mobject> mobs, double alpha) {
    var subMob = mobs[0];
    var startSubMob = mobs[1];
    var bounds = getBounds(alpha);
    subMob.pointwiseBecomePartial(startSubMob, bounds[0], bounds[1]);
  }

  List<double> getBounds(double alpha);
}

class ShowCreation extends ShowPartial {
  ShowCreation(
    Mobject mobject, {
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = smooth,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
  }) : super(mobject, runTime: runTime, rateFunc: rateFunc, lagRatio: lagRatio);

  @override
  List<double> getBounds(double alpha) => [0, alpha];
}

class Uncreate extends ShowCreation {
  Uncreate(
    Mobject mobject, {
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = smooth,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
  }) : super(
          mobject,
          runTime: runTime,
          rateFunc: invertRateFunc(rateFunc),
          lagRatio: lagRatio,
        );

  @override
  bool remover = true;
}

class DrawBorderThenFill extends Animation {
  double strokeWidth;
  Color? strokeColor;

  Map<int, int> submobToIndex = {};

  late VMobject outline;

  VMobject vmobject;

  DrawBorderThenFill(
    this.vmobject, {
    double runTime = DEFAULT_ANIMATION_RUN_TIME * 2,
    RateFunc rateFunc = smooth,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
    this.strokeWidth = 2,
    this.strokeColor,
  }) : super(
          vmobject,
          runTime: runTime,
          rateFunc: rateFunc,
          lagRatio: lagRatio,
        ) {
    submobToIndex = {
      for (var submob in vmobject.getVectorizedFamily()) submob.hashCode: 0
    };
  }

  @override
  void begin() {
    outline = getOutline();
    super.begin();
    vmobject.matchStyle(outline);
  }

  VMobject getOutline() {
    var outline = vmobject.copy()..setFill(color: TRANSPARENT);

    for (var sm in outline.getVectorizedFamily()) {
      sm.setStroke(
        color: getStrokeColor(sm),
        width: strokeWidth,
      );
    }

    return outline;
  }

  Color getStrokeColor(VMobject mob) {
    if (strokeColor != null) return strokeColor!;

    if (mob.getStrokeWidth() > 0) return mob.getStrokeColor();

    return mob.getColor();
  }

  @override
  List<Mobject> getAllMobjects() => [...super.getAllMobjects(), outline];

  @override
  void interpolateSubMobject(List<Mobject> mobs, double alpha) {
    var submob = mobs[0];
    var start = mobs[1];
    var outline = mobs[2];

    var _interpolationData = integerInterpolate(0, 2, alpha);
    var index = _interpolationData.item1;
    var subAlpha = _interpolationData.item2;

    if (index == 1 && submobToIndex[submob.hashCode] == 0) {
      submob.setColor(color: outline.getColor());
      submob.points = [...outline.points];

      // only to avoid typing-related problems
      if (submob is VMobject && outline is VMobject) {
        submob.setFill(colors: outline.getFillColors());
        submob.setStroke(
          colors: outline.getStrokeColors(),
          width: outline.getStrokeWidth(),
        );
        submob.setStroke(
          colors: outline.getStrokeColors(background: true),
          width: outline.getStrokeWidth(background: true),
          background: true,
        );
      }

      submobToIndex[submob.hashCode] = 1;
    }

    if (index == 0) {
      submob.pointwiseBecomePartial(outline, 0, subAlpha);
    } else {
      submob.interpolate(outline, start, subAlpha);
    }
  }
}

class Write extends DrawBorderThenFill {
  Write._(
    VMobject vmobject, {
    RateFunc rateFunc = linear,
    required double runTime,
    required double lagRatio,
    double strokeWidth = 2,
    Color? strokeColor,
  }) : super(
          vmobject,
          runTime: runTime,
          rateFunc: rateFunc,
          lagRatio: lagRatio,
          strokeWidth: strokeWidth,
          strokeColor: strokeColor,
        );

  factory Write(
    VMobject vmobject, {
    RateFunc rateFunc = linear,
    double? runTime,
    double? lagRatio,
    double strokeWidth = 2,
    Color? strokeColor,
  }) {
    var length = vmobject.getFamilyWithPoints().length;

    runTime ??= length < 15 ? 1 : 2;
    lagRatio ??= min(4.0 / length, 0.2);

    return Write._(
      vmobject,
      rateFunc: rateFunc,
      runTime: runTime,
      lagRatio: lagRatio,
      strokeWidth: strokeWidth,
      strokeColor: strokeColor,
    );
  }
}
