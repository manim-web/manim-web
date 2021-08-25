import 'dart:math';

import 'package:manim_web/src/constants.dart';
import 'package:manim_web/src/util/bezier.dart';
import 'package:manim_web/src/util/space_ops.dart';
import 'package:manim_web/src/util/vector.dart';

typedef PathFunc = List<Vector3> Function(List<Vector3>, List<Vector3>, double);

List<Vector3> straightPath(List<Vector3> a, List<Vector3> b, double alpha) {
  var array = interpolate<Array>(
      Array.fromVectorList(a), Array.fromVectorList(b), alpha);
  return [for (var row in array.values) Vector3(row[0], row[1], row[2])];
}

const STRAIGHT_PATH_THRESHOLD = 0.01;

PathFunc pathAlongArc(double angle, {Vector3 axis = OUT}) {
  if (angle.abs() <= STRAIGHT_PATH_THRESHOLD) {
    return straightPath;
  }

  if (axis.normSquared() == 0) {
    axis = OUT;
  }

  axis = axis.normalize();

  return (startPoints, endPoints, alpha) {
    var start = Array.fromVectorList(startPoints);
    var end = Array.fromVectorList(endPoints);
    var vects = start - end;
    var centers = start + vects / 2;
    if (angle != PI) {
      var vectsList = [for (var v in vects.values) Vector3(v[0], v[1], v[2])];
      var crossProducts = [for (var vec in vectsList) axis.cross(vec / 1)];
      var crossArray = Array.fromVectorList(crossProducts);
      centers += crossArray / tan(angle / 2);
    }
    var rotationMat = rotationMatrix(angle * alpha, axis);
    var outMat = centers + (start - centers).matMul(rotationMat.T);

    return [for (var row in outMat.values) Vector3(row[0], row[1], row[2])];
  };
}

PathFunc clockwisePath() => pathAlongArc(-PI);
PathFunc counterclockwisePath() => pathAlongArc(PI);
