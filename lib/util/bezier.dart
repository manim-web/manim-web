library utils.bezier;

import 'dart:math';

import 'package:collection/collection.dart';
import 'package:manim_web/util/array.dart';
import 'package:manim_web/util/color.dart';
import 'package:manim_web/util/math_functions.dart';
import 'package:manim_web/util/space_ops.dart';
import 'package:manim_web/util/vector.dart';
import 'package:tuple/tuple.dart';

import 'package:manim_web/constants.dart';

List<Color> interpolateColorList(List<Color> a, List<Color> b, double alpha) {
  assert(a.length == b.length);
  var arrayA = Array(values: a.map((color) => color.toList()).toList());
  var arrayB = Array(values: b.map((color) => color.toList()).toList());

  var interpolatedArray = interpolate<Array>(arrayA, arrayB, alpha);

  var colorList = interpolatedArray.values
      .map((row) => Color(r: row[0], g: row[1], b: row[2], a: row[3]))
      .toList();
  return colorList;
}

T interpolate<T>(dynamic a, dynamic b, double alpha) {
  return (a * (1 - alpha) + b * alpha) as T;
}

T interpolateValue<T>(dynamic a, dynamic b, double alpha) {
  // Useful in mobject to not always use Mobject.interpolate
  return (a * (1 - alpha) + b * alpha) as T;
}

Tuple2<int, double> integerInterpolate(int start, int end, double alpha) {
  if (alpha >= 1) {
    return Tuple2(end - 1, 1.0);
  }

  if (alpha <= 0) {
    return Tuple2(start, 0);
  }

  var value = interpolate<double>(start, end, alpha).toInt();
  var residue = ((end - start) * alpha) % 1;

  return Tuple2(value, residue);
}

Vector3 Function(double) bezier(List<Vector3> points) {
  var n = points.length - 1;

  return (t) => ([
        for (var kPoint in enumerate(points))
          kPoint.item2 *
              (pow(1 - t, n - kPoint.item1) *
                  pow(t, kPoint.item1) *
                  choose(n, kPoint.item1))
      ]).reduce((a, b) => a + b);
}

List<Vector3> partialBezierPoints(List<Vector3> points, double a, double b) {
  if (a == 1) {
    return [for (var _ in range(end: points.length)) points.last];
  }

  var aTo1 = [
    for (var i in range(end: points.length)) bezier(points.skip(i).toList())(a)
  ];

  var endProp = (b - a) / (1.0 - a);

  return [
    for (var n in range(end: points.length))
      bezier(aTo1.getRange(0, n + 1).toList())(endProp)
  ];
}

// TODO this implementation needs to be changed, it doesn't work properly
Tuple2<List<Vector3>, List<Vector3>> getSmoothHandlePoints(
    List<Vector3> points) {
  var numHandles = points.length - 1;

  if (numHandles < 1) {
    return Tuple2([ORIGIN], [ORIGIN]);
  }

  var l = 2;
  var u = 1;

  var diag = Array.zeros(shape: Tuple2(l + u + 1, 2 * numHandles));

  void setVal(double value, int col, {int start = 0, int? end, int step = 1}) {
    end ??= 2 * numHandles;

    for (var i in range(start: start, end: end, step: step)) {
      diag.setValue(Tuple2(col, i), value);
    }
  }

  setVal(-1, 0, start: 1, step: 2);
  setVal(1, 0, start: 2, step: 2);
  setVal(2, 1, start: 0, step: 2);
  setVal(1, 1, start: 1, step: 2);
  setVal(-2, 2, start: 1, end: 2 * numHandles - 2, step: 2);
  setVal(1, 3, start: 0, end: 2 * numHandles - 3, step: 2);
  diag.setValue(Tuple2(2, -2), -1);
  diag.setValue(Tuple2(1, -1), 2);

  var b = Array.zeros(shape: Tuple2(2 * numHandles, 3));
  var pointsWithoutFirst = withoutFirst(points);

  //* equivalent to b[1::2] = 2 * points[1:]
  for (var ij in enumerate((range(start: 1, end: 2 * numHandles, step: 2)))) {
    for (var k in range(end: 3)) {
      b.setValue(Tuple2(ij.item2, k),
          2 * pointsWithoutFirst[ij.item1].getComponent(k));
    }
  }

  //* equivalent to  b[0] = points[0]
  for (var k in range(end: 3)) {
    b.setValue(Tuple2(0, k), points.first.getComponent(k));
  }

  //* equivalent to  b[-1] = points[-1]

  for (var k in range(end: 3)) {
    b.setValue(Tuple2(2 * numHandles - 1, k), points.last.getComponent(k));
  }

  // TODO solve banded matrix instead of using getInverse
  var useClosedSolveFunction = isClosed(points);
  var handlePairs = Array.zeros(shape: Tuple2(2 * numHandles, 3));

  if (useClosedSolveFunction) {
    var matrix = diagToMatrix(Tuple2(l, u), diag);
    for (var i in IterableZip([
      [0, 1, -2, -1],
      [2, -1, 1, -2]
    ])) {
      var k = -1 % matrix.shape.item1;
      var j = i[0] % matrix.shape.item2;
      matrix.setValue(Tuple2(k, j), i[1].toDouble());
    }

    matrix.values = [
      [
        for (var i in range(end: matrix.shape.item2))
          if (i == 0 || i == matrix.shape.item2 - 1) 1 else 0
      ],
      ...withoutFirst(matrix.values)
    ];

    b.values.first = (points[0] * 2.0).toList();
    b.values.last = ORIGIN.toList();

    for (var i in range(end: 3)) {
      handlePairs.setColumn(i, matrix.getInverse().matMul(b).flat());
    }
  } else {
    for (var i in range(end: 3)) {
      handlePairs.setColumn(i, diag.getInverse().matMul(b).flat());
    }
  }

  var handlePairsVectors = [
    for (var line in handlePairs.getValues()) Vector3(line[0], line[1], line[2])
  ];

  var even = handlePairsVectors.whereIndexed((i, e) => i % 2 == 0).toList();
  var odd = handlePairsVectors.whereIndexed((i, e) => i % 2 == 1).toList();

  return Tuple2(even, odd);
}

bool isClosed(List<Vector3> points, {double tolerance = 1e-6}) =>
    (points.first - points.last).normSquared() <= tolerance * tolerance;

// TODO The implementation here could maybe be simpler
Array diagToMatrix(Tuple2<int, int> lAndU, Array diag) {
  var l = lAndU.item1;
  var u = lAndU.item2;
  var dim = 3;
  var matrix = Array.zeros(shape: Tuple2(dim, dim));
  for (var i in range(end: l + u + 1)) {
    var partialMatrixValues = matrix
        .getValues()
        .skip(max(0, i - u))
        .map((line) => line.skip(max(u - i, 0)).toList())
        .toList();
    var partialMatrix = Array(values: partialMatrixValues);
    var partialDiagValues = diag.getRow(i).skip(max(0, u - i)).toList();
    var partialDiagMatrix =
        fillDiagonalWithValues(partialMatrix, partialDiagValues);
    matrix.values = [
      for (var k in range(end: matrix.shape.item1))
        [
          for (var j in range(end: matrix.shape.item2))
            if (k >= max(0, i - u))
              if (j >= max(0, u - i))
                partialDiagMatrix
                    .getValue(Tuple2(k - max(0, i - u), j - max(0, u - i)))
              else
                matrix.getValue(Tuple2(k, j))
            else
              matrix.getValue(Tuple2(k, j))
        ]
    ];
  }

  return matrix;
}

Array fillDiagonal(Array mat, double val) {
  return mat.map((v, pos) => pos.item1 == pos.item2 ? val : v);
}

Array fillDiagonalWithValues(Array mat, List<double> values) {
  return mat.map((v, pos) => pos.item1 == pos.item2 ? values[pos.item1] : v);
}
