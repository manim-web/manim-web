import 'package:manim_web/src/animation/transform.dart';
import 'package:manim_web/src/constants.dart';
import 'package:manim_web/src/mobject/types/mobject.dart';
import 'package:manim_web/src/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/src/scene/scene.dart';
import 'package:manim_web/src/util/rate_functions.dart';
import 'package:manim_web/src/util/vector.dart';

class FadeIn extends Transform {
  double scaleFactor;
  Vector3 shiftVec;

  FadeIn(
    Mobject mobject, {
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = smooth,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
    double scale = 1,
    Vector3 shift = ORIGIN,
  })  : scaleFactor = scale,
        shiftVec = shift,
        super(
          mobject,
          runTime: runTime,
          rateFunc: rateFunc,
          lagRatio: lagRatio,
        );

  @override
  Mobject createTarget() => mobject;

  @override
  Mobject createStartingMobject() {
    var start = super.createStartingMobject();
    start.fade(darkness: 1);

    if (start is VMobject) {
      start.setFill(color: TRANSPARENT);
      start.setStroke(width: 0, color: TRANSPARENT);
    }

    start
      ..scaleUniformly(1 / scaleFactor)
      ..shift(-shiftVec);

    return start;
  }
}

class FadeOut extends Transform {
  @override
  bool remover = true;
  double scaleFactor;
  Vector3 shiftVec;

  FadeOut(
    Mobject mobject, {
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = smooth,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
    double scale = 1,
    Vector3 shift = ORIGIN,
  })  : scaleFactor = scale,
        shiftVec = shift,
        super(mobject,
            runTime: runTime, rateFunc: rateFunc, lagRatio: lagRatio);

  @override
  Mobject createTarget() => mobject.copy()
    ..fade(darkness: 1)
    ..shift(shiftVec)
    ..scaleUniformly(scaleFactor);

  @override
  void cleanUpFromScene(Scene scene) {
    super.cleanUpFromScene(scene);
    interpolate(0);
  }
}

class FadeInFrom extends Transform {
  @override
  bool remover = true;
  Vector3 direction;

  FadeInFrom(
    Mobject mobject, {
    required this.direction,
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = smooth,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
  }) : super(mobject, runTime: runTime, rateFunc: rateFunc, lagRatio: lagRatio);

  @override
  Mobject createTarget() => mobject.copy();

  @override
  void begin() {
    super.begin();
    startingMobject.shift(direction);
    startingMobject.fade(darkness: 1);
  }
}
