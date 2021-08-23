part of animation;

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
