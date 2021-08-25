import 'package:manim_web/src/animation/animation.dart';
import 'package:manim_web/src/constants.dart';
import 'package:manim_web/src/mobject/types/mobject.dart';
import 'package:manim_web/src/util/rate_functions.dart';

class UpdateFromFunc<Mob extends Mobject> extends Animation {
  Mob Function(Mob) updateFunc;

  UpdateFromFunc({
    required Mob mobject,
    required this.updateFunc,
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = smooth,
    double lagRatio = 0,
  }) : super(mobject, runTime: runTime, rateFunc: rateFunc, lagRatio: lagRatio);

  @override
  void interpolateMobject(double alpha) {
    updateFunc(mobject as Mob);
  }
}

class UpdateFromAlphaFunc<Mob extends Mobject> extends Animation {
  Mob Function(Mob, double) updateFunc;

  UpdateFromAlphaFunc({
    required Mob mobject,
    required this.updateFunc,
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = smooth,
    double lagRatio = 0,
  }) : super(mobject, runTime: runTime, rateFunc: rateFunc, lagRatio: lagRatio);

  @override
  void interpolateMobject(double alpha) {
    updateFunc(mobject as Mob, alpha);
  }
}
