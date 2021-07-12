import 'dart:math';

import 'package:manim_web/constants.dart';
import 'package:manim_web/util/array.dart';
import 'package:manim_web/util/color.dart';
import 'package:manim_web/util/math_functions.dart';
import 'package:manim_web/util/vector.dart';
import 'package:manim_web/mobject/types/vectorized_mobject.dart';

class ParametricFunction extends VMobject {
  double stepSize; // use a step size <= 0 for automatic step size
  double tMin;
  double tMax;
  double dt;
  List<double> discontinuities;
  Vector3 Function(double) parametricFunction;

  ParametricFunction({
    required this.parametricFunction,
    this.stepSize = 0.01, // use a step size <= 0 for automatic step size
    this.tMin = 0,
    this.tMax = 1,
    this.dt = 1e-8,
    this.discontinuities = const [],
    Color? strokeColor,
    double strokeWidth = DEFAULT_STROKE_WIDTH,
    Color? backgroundStrokeColor,
    double backgroundStrokeWidth = 0.0,
    bool closeNewPoints = false,
    double preFunctionHandleToAnchorScaleFactor = 0.01,
    bool makeSmoothAfterApplyingFunctions = false,
    double toleranceForPointEquality = 1e-6,
  }) : super(
          strokeColor: strokeColor,
          strokeWidth: strokeWidth,
          backgroundStrokeColor: backgroundStrokeColor,
          backgroundStrokeWidth: backgroundStrokeWidth,
          closeNewPoints: closeNewPoints,
          preFunctionHandleToAnchorScaleFactor:
              preFunctionHandleToAnchorScaleFactor,
          makeSmoothAfterApplyingFunctions: makeSmoothAfterApplyingFunctions,
          toleranceForPointEquality: toleranceForPointEquality,
        ) {
    setFill(color: TRANSPARENT);
  }

  Vector3 Function(double t) getParametricFunction() => parametricFunction;
  Vector3 getPointFromParametricFunction(double t) => parametricFunction(t);

  double getStepSize(double t) {
    if (stepSize > 0) {
      return stepSize;
    }

    var scale = t == 0 ? 0 : min(0, log10(t.abs())).floor();

    return pow(10, scale - 2).toDouble();
  }

  @override
  void generatePoints() {
    var discontinuities = [
      ...this.discontinuities.where((t) => t >= tMin && t <= tMax)
    ];

    var boundaryTimes = [
      tMin,
      tMax,
      for (var t in discontinuities) ...[t - dt, t + dt],
    ]..sort();

    for (var i in range(end: boundaryTimes.length ~/ 2)) {
      var t1 = boundaryTimes[i + 0];
      var t2 = boundaryTimes[i + 1];

      var tRange =
          arange(start: t1, end: t2, step: getStepSize(t1)).getColumn(0);

      if (tRange.last != t2) {
        tRange.add(t2);
      }

      var points = [for (var t in tRange) getPointFromParametricFunction(t)];
      points = [
        for (var pt in points)
          if (!pt.isNan() && pt.isFinite()) pt
      ];

      if (points.isNotEmpty) {
        startNewPath(points.first);
        addPointsAsCorners(withoutFirst(points));
      }
    }

    // TODO make "makeSmooth" work properly
    // makeSmooth();
  }

  ParametricFunction.copyFrom(ParametricFunction mob)
      : stepSize = mob.stepSize,
        tMin = mob.tMin,
        tMax = mob.tMax,
        dt = mob.dt,
        discontinuities = [...mob.discontinuities],
        parametricFunction = mob.parametricFunction,
        super.copyFrom(mob);

  @override
  ParametricFunction copy() => ParametricFunction.copyFrom(this);
}

class FunctionGraph extends ParametricFunction {
  double Function(double) function;

  FunctionGraph({
    required this.function,
    double stepSize = 0.01, // use a step size <= 0 for automatic step size
    double xMin = -FRAME_X_RADIUS,
    double xMax = FRAME_X_RADIUS,
    double dt = 1e-8,
    List<double> discontinuities = const [],
    Color? strokeColor,
    double strokeWidth = DEFAULT_STROKE_WIDTH,
    Color? backgroundStrokeColor,
    double backgroundStrokeWidth = 0.0,
    bool closeNewPoints = false,
    double preFunctionHandleToAnchorScaleFactor = 0.01,
    bool makeSmoothAfterApplyingFunctions = false,
    double toleranceForPointEquality = 1e-6,
  }) : super(
            stepSize: stepSize,
            tMin: xMin,
            tMax: xMax,
            dt: dt,
            discontinuities: discontinuities,
            strokeColor: strokeColor,
            strokeWidth: strokeWidth,
            backgroundStrokeColor: backgroundStrokeColor,
            backgroundStrokeWidth: backgroundStrokeWidth,
            closeNewPoints: closeNewPoints,
            preFunctionHandleToAnchorScaleFactor:
                preFunctionHandleToAnchorScaleFactor,
            makeSmoothAfterApplyingFunctions: makeSmoothAfterApplyingFunctions,
            toleranceForPointEquality: toleranceForPointEquality,
            parametricFunction: (double t) => Vector3(t, function(t), 0));

  double Function(double x) getFunction() => function;
  double getValueFromFunction(double x) => function(x);

  FunctionGraph.copyFrom(FunctionGraph mob)
      : function = mob.function,
        super.copyFrom(mob);

  @override
  FunctionGraph copy() => FunctionGraph.copyFrom(this);
}
