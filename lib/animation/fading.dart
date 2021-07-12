import 'package:manim_web/animation/transform.dart';
import 'package:manim_web/constants.dart';
import 'package:manim_web/mobject/types/mobject.dart';
import 'package:manim_web/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/util/rate_functions.dart';
import 'package:manim_web/animation/animation.dart';

class FadeIn extends Transform {
  FadeIn(
    Mobject mobject, {
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = smooth,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
  }) : super(mobject, runTime: runTime, rateFunc: rateFunc, lagRatio: lagRatio);

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

    return start;
  }
}
