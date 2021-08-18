part of animation;

class AnimationGroup extends Animation {
  List<Animation> animations;

  late List<Tuple3<Animation, double, double>> animationsTiming;
  late double maxEndTime;

  AnimationGroup(
    this.animations, {
    double runTime = 0, // Initialized in initRunTime
    RateFunc rateFunc = linear,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
    Group? group,
  }) : super(group ?? Group(),
            rateFunc: rateFunc, runTime: runTime, lagRatio: lagRatio) {
    if (group == null) {
      mobject.add(
          withoutRedundancies([for (var anim in animations) anim.mobject]));
    }

    initRunTime();
  }

  @override
  List<Mobject> getAllMobjects() => group.submobjects;
  Group get group => mobject as Group;

  @override
  void begin() {
    for (var anim in animations) {
      anim.begin();
    }
  }

  @override
  void finish() {
    for (var anim in animations) {
      anim.finish();
    }
  }

  @override
  void cleanUpFromScene(Scene scene) {
    for (var anim in animations) {
      anim.cleanUpFromScene(scene);
    }
  }

  @override
  void updateMobjects(double dt) {
    for (var anim in animations) {
      anim.updateMobjects(dt);
    }
  }

  void initRunTime() {
    animationsTiming = getAnimationsWithTimings();

    maxEndTime =
        [for (var timing in animationsTiming) timing.item3].fold(0, max);

    if (runTime == 0) {
      runTime = maxEndTime;
    }
  }

  List<Tuple3<Animation, double, double>> getAnimationsWithTimings() {
    var animationWithTimings = <Tuple3<Animation, double, double>>[];
    var currentTime = 0.0;

    for (var anim in animations) {
      var startTime = currentTime;
      var endTime = startTime + anim.runTime;
      animationWithTimings.add(Tuple3(anim, startTime, endTime));

      currentTime = interpolateValue(startTime, endTime, lagRatio);
    }

    return animationWithTimings;
  }

  @override
  void interpolate(double alpha) {
    var time = alpha * maxEndTime;

    for (var timing in animationsTiming) {
      var anim = timing.item1;
      var startTime = timing.item2;
      var endTime = timing.item3;

      var animTime = endTime - startTime;

      var subAlpha = 0.0;

      if (animTime != 0) {
        subAlpha = clip((time - startTime) / animTime, 0, 1);
      }

      anim.interpolate(subAlpha);
    }
  }
}
