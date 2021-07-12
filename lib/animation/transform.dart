import 'package:collection/collection.dart';

import 'package:manim_web/constants.dart';
import 'package:manim_web/mobject/types/mobject.dart';
import 'package:manim_web/scene/scene.dart';
import 'package:manim_web/util/paths.dart';
import 'package:manim_web/util/rate_functions.dart';
import 'package:manim_web/util/vector.dart';
import 'package:manim_web/animation/animation.dart';

class Transform extends Animation {
  late Mobject targetMobject;
  late Mobject targetCopy;
  double pathArc = 0;
  Vector3 pathArcAxis = OUT;
  PathFunc? pathFunc;
  bool replaceMobjectWithTarget = false;

  Transform(
    Mobject mobject, {
    Mobject? target,
    double runTime = DEFAULT_ANIMATION_RUN_TIME,
    RateFunc rateFunc = smooth,
    double lagRatio = DEFAULT_ANIMATION_LAG_RATIO,
  }) : super(mobject,
            runTime: runTime, rateFunc: rateFunc, lagRatio: lagRatio) {
    if (target != null) {
      targetMobject = target;
    }
    initPathFunc();
  }

  void initPathFunc() {
    if (pathFunc != null) {
      return;
    }

    if (pathArc == 0) {
      pathFunc = straightPath;
    } else {
      pathFunc = pathAlongArc(pathArc, axis: pathArcAxis);
    }
  }

  @override
  void begin() {
    targetMobject = createTarget();
    targetCopy = targetMobject.copy();
    mobject.alignData(targetCopy);
    super.begin();
  }

  Mobject createTarget() => targetMobject;

  @override
  void cleanUpFromScene(Scene scene) {
    super.cleanUpFromScene(scene);
    if (replaceMobjectWithTarget) {
      scene
        ..remove([mobject])
        ..add([targetMobject]);
    }
  }

  @override
  List<Mobject> getAllMobjects() =>
      [mobject, startingMobject, targetMobject, targetCopy];

  @override
  List<List<Mobject>> getAllFamiliesZipped() => IterableZip([
        for (var mob in [mobject, startingMobject, targetCopy])
          mob.getFamilyWithPoints()
      ]).toList();

  @override
  void interpolateSubMobject(List<Mobject> mobs, double alpha) {
    mobs[0].interpolate(mobs[1], mobs[2], alpha, pathFunc: pathFunc);
  }
}
