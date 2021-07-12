import 'package:collection/collection.dart';

import 'package:manim_web/scene/scene.dart';
import 'package:manim_web/constants.dart';
import 'package:manim_web/mobject/types/mobject.dart';
import 'package:manim_web/util/array.dart';
import 'package:manim_web/util/math_functions.dart';
import 'package:manim_web/util/rate_functions.dart';

typedef RateFunc = double Function(double,
    {double? inflection, double? pauseRatio});

class Animation {
  double runTime;
  RateFunc rateFunc;
  double lagRatio;

  bool suspendMobjectUpdating = false;
  bool remover = false;
  late String name;
  Mobject mobject;
  late Mobject startingMobject;

  Animation(
    this.mobject, {
    this.runTime = DEFAULT_ANIMATION_RUN_TIME,
    this.rateFunc = smooth,
    this.lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
  }) {
    name = getName();
  }

  Animation.fromCopy(Animation anim)
      : runTime = anim.runTime,
        rateFunc = anim.rateFunc,
        lagRatio = anim.lagRatio,
        name = anim.name,
        mobject = anim.mobject.copy(),
        startingMobject = anim.startingMobject.copy();
  Animation copy() => Animation.fromCopy(this);

  @override
  String toString() => '${getName()}(${mobject.name}, runTime: ${runTime}s)';

  String getName() {
    var fullName = super.toString();
    // Expected: Instance of '{classname}'

    var exp = RegExp(r"^Instance of '(.*?)'$");
    return exp.firstMatch(fullName)!.group(1)!;
  }

  void begin() {
    startingMobject = createStartingMobject();
    if (suspendMobjectUpdating) {
      mobject.suspendUpdating();
    }

    interpolate(0);
  }

  void finish() {
    interpolate(1);

    if (suspendMobjectUpdating) {
      mobject.resumeUpdating();
    }
  }

  void cleanUpFromScene(Scene scene) {
    if (isRemover()) {
      scene.remove([mobject]);
    }
  }

  Mobject createStartingMobject() => mobject.copy();
  List<Mobject> getAllMobjects() => [mobject, startingMobject];

  List<List<Mobject>> getAllFamiliesZipped() =>
      IterableZip([for (var mob in getAllMobjects()) mob.getFamilyWithPoints()])
          .toList();

  void updateMobjects(double dt) {
    for (var mob in getAllMobjectsToUpdate()) {
      mob.update(dt: dt);
    }
  }

  List<Mobject> getAllMobjectsToUpdate() => [
        for (var mob in getAllMobjects())
          if (mob != mobject || !suspendMobjectUpdating) mob
      ];

  void interpolate(double alpha) {
    alpha = clip(alpha, 0, 1);
    interpolateMobject(rateFunc(alpha));
  }

  void update(double alpha) => interpolate(alpha);

  void interpolateMobject(double alpha) {
    var families = getAllFamiliesZipped();
    for (var i in range(end: families.length)) {
      var mobs = families[i];
      var subAlpha = getSubAlpha(alpha, i, families.length);
      interpolateSubMobject(mobs, subAlpha);
    }
  }

  void interpolateSubMobject(List<Mobject> mobs, double subAlpha) {
    //* Typically implemented in subclasses
  }

  double getSubAlpha(double alpha, int i, int numSubmobjects) {
    var fullLength = (numSubmobjects - 1) * lagRatio + 1;
    var value = alpha * fullLength;
    var lower = i * lagRatio;
    return clip(value - lower, 0, 1);
  }

  void setRunTime(double runTime) => this.runTime = runTime;
  void setRateFunc(RateFunc rateFunc) => this.rateFunc = rateFunc;
  void setName(String name) => this.name = name;

  double getRunTime() => runTime;
  RateFunc getRateFunc() => rateFunc;
  bool isRemover() => remover;
}
