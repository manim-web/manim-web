library utils.space_ops;

import 'dart:math';
import 'package:manim_web/util/array.dart';
import 'package:manim_web/util/complex.dart';
import 'package:manim_web/util/vector.dart';
import 'package:manim_web/constants.dart';
import 'package:tuple/tuple.dart';

class Array {
  late List<List<double>> values;
  late Tuple2<int, int> shape;

  Array({required this.values, Tuple2<int, int>? shape}) {
    shape ??=
        Tuple2(values.length, values.isNotEmpty ? values.first.length : 0);

    // assert the values list has the correct shape
    assert(values.every((line) => line.length == shape!.item2));

    this.shape = shape;
  }

  factory Array.fromValue(double val, {required Tuple2<int, int> shape}) {
    var m = shape.item1;
    var n = shape.item2;

    var values = [
      for (var _ in range(end: m)) [for (var _ in range(end: n)) val]
    ];

    return Array(values: values, shape: shape);
  }

  //* Expected type for other: Array or num
  Array operator +(dynamic other) {
    assert(other is Array || other is num);

    var otherArray = (other is num)
        ? Array.fromValue(other.toDouble(), shape: shape)
        : other as Array;

    assert(listEqual(shape.toList(), otherArray.shape.toList()));
    return map((value, pos) => value + otherArray.getValue(pos));
  }

  //* Expected type for other: Array or num
  Array operator -(dynamic other) {
    assert(other is Array || other is num);

    var otherArray = (other is num)
        ? Array.fromValue(other.toDouble(), shape: shape)
        : other as Array;

    assert(listEqual(shape.toList(), otherArray.shape.toList()));
    return map((value, pos) => value - otherArray.getValue(pos));
  }

  //* Expected type for other: Array or num
  Array operator *(dynamic other) {
    assert(other is Array || other is num);

    var otherArray = (other is num)
        ? Array.fromValue(other.toDouble(), shape: shape)
        : other as Array;

    assert(listEqual(shape.toList(), otherArray.shape.toList()));
    return map((value, pos) => value * otherArray.getValue(pos));
  }

  //* Expected type for other: Array or num
  Array operator /(dynamic other) {
    assert(other is Array || other is num);

    var otherArray = (other is num)
        ? Array.fromValue(other.toDouble(), shape: shape)
        : other as Array;

    assert(listEqual(shape.toList(), otherArray.shape.toList()));
    return map((value, pos) => value / otherArray.getValue(pos));
  }

  double operator [](Tuple2<int, int> ij) => getValue(ij);
  void operator []=(Tuple2<int, int> ij, double val) => setValue(ij, val);

  Array map(double Function(double, Tuple2<int, int>) mappingFunc) {
    return Array(
        values: enumerate(values)
            .map((iLine) => enumerate(iLine.item2)
                .map((jValue) => mappingFunc(
                    jValue.item2, Tuple2(iLine.item1, jValue.item1)))
                .toList())
            .toList(),
        shape: shape);
  }

  double getValue(Tuple2<int, int> ij) {
    var i = ij.item1;
    var j = ij.item2;

    return values[i][j];
  }

  void setValue(Tuple2<int, int> ij, double value) {
    var i = ij.item1 % shape.item1;
    var j = ij.item2 % shape.item2;

    values[i][j] = value;
  }

  Array _subMatrix(int i, int j) {
    var shape = Tuple2(this.shape.item1 - 1, this.shape.item2 - 1);
    var values = [
      for (var _i in range(end: this.shape.item1))
        if (_i != i)
          [
            for (var _j in range(end: this.shape.item1))
              if (_j != j) this.values[_i][_j]
          ]
    ];

    return Array(shape: shape, values: values);
  }

  double getDeterminent() {
    assert(shape.item1 == shape.item2);

    if (shape.item1 == 2) {
      var a = values[0][0];
      var b = values[0][1];
      var c = values[1][0];
      var d = values[1][1];

      return a * d - b * c;
    }

    var subshape = Tuple2(shape.item1 - 1, shape.item2 - 1);

    return sum([
      for (var i in range(end: shape.item1))
        (i % 2 == 0 ? 1 : -1) *
            (Array.fromValue(values[0][i], shape: subshape) * _subMatrix(0, i))
                .getDeterminent()
    ]);
  }

  Array getInverse() {
    assert(shape.item1 == shape.item2);

    var det = getDeterminent();
    if (det == 0) {
      throw 'This matrix is not inversible';
    }

    var m = shape.item1;
    var n = shape.item2; // mxn matrix

    var A = copy();
    var I = Array.identity(m);

    for (var j in range(end: n)) {
      var i0 = -1;
      var v0 = -1.0;

      for (var i = j; i != m; i++) {
        var k = A.getValue(Tuple2(i, j));
        if (k > v0) {
          i0 = i;
          v0 = k;
        }
      }

      var Aj = A.getRow(i0);
      A.values[i0] = A.values[j];
      A.values[j] = Aj;
      var Ij = I.getRow(i0);
      I.values[i0] = I.values[j];
      I.values[j] = Ij;

      var x = Aj[j];

      for (var k = j; k < n; ++k) {
        Aj[k] /= x;
      }
      for (var k = n - 1; k >= 0; k--) {
        Ij[k] /= x;
      }
      for (var i = m - 1; i >= 0; i--) {
        if (i != j) {
          var Ai = A.values[i];
          var Ii = I.values[i];
          var x = Ai[j];
          var k;

          for (k = j + 1; k != n; k++) {
            Ai[k] -= Aj[k] * x;
          }
          for (k = n - 1; k > 0; k--) {
            Ii[k] -= Ij[k] * x;
            --k;
            Ii[k] -= Ij[k] * x;
          }
          if (k == 0) Ii[0] -= Ij[0] * x;
        }
      }
    }

    return I;
  }

  List<double> getRow(int i) {
    return values[i];
  }

  List<double> getColumn(int j) {
    return values.map((row) => row[j]).toList();
  }

  void setRow(int i, List<double> row) {
    values[i] = [...row];
  }

  void setColumn(int i, List<double> col) {
    for (var j in range(end: shape.item1)) {
      values[j][i] = col[j];
    }
  }

  Array get T => transposed;

  Array get transposed =>
      map((val, pos) => getValue(Tuple2(pos.item2, pos.item1)));

  List<List<double>> getValues() {
    return [for (var row in values) List.from(row)];
  }

  factory Array.fromVectorList(List<Vector3> list) {
    return Array(
        values: [for (var vec in list) vec.toList()],
        shape: Tuple2(list.length, 3));
  }

  Array matMul(Array other) {
    assert(this.shape.item2 == other.shape.item1);

    // "this" is a m x n matrix
    // "other" is a n x p matrix

    var m = this.shape.item1;
    var n = this.shape.item2;
    var p = other.shape.item2;

    var shape = Tuple2(this.shape.item1, other.shape.item2);

    var mat = Array.zeros(shape: shape);

    for (var i in range(end: m)) {
      for (var j in range(end: p)) {
        for (var k in range(end: n)) {
          mat.values[i][j] += values[i][k] * other.values[k][j];
        }
      }
    }

    return mat;
  }

  factory Array.zeros({required Tuple2<int, int> shape}) {
    return Array.fromValue(0.0, shape: shape);
  }

  factory Array.ones({required Tuple2<int, int> shape}) {
    return Array.fromValue(1.0, shape: shape);
  }

  factory Array.identity(int size) {
    var values = [
      for (var i in range(end: size))
        [
          for (var j in range(end: size))
            if (i == j) 1.0 else 0.0
        ]
    ];
    var shape = Tuple2(size, size);
    return Array(values: values, shape: shape);
  }

  factory Array.nonSquareIdentity({required Tuple2<int, int> shape}) {
    var m = shape.item1;
    var n = shape.item2;

    var values = [
      for (var i in range(end: m))
        [
          for (var j in range(end: n))
            if (i == j) 1.0 else 0.0
        ]
    ];
    return Array(values: values);
  }

  factory Array.empty() {
    return Array.zeros(shape: Tuple2(0, 0));
  }

  Array copy() {
    return applyFunction((a) => a);
  }

  Array applyFunction(double Function(double) func) {
    return map((val, pos) => func(val));
  }

  Array sign() {
    return applyFunction((v) => v.sign);
  }

  Array abs() {
    return applyFunction((v) => v.abs());
  }

  List<double> flat() {
    return [
      for (var line in values)
        for (var value in line) value
    ];
  }

  //* limit precision to 6 decimal place by default
  @override
  String toString({int precision = 6}) {
    var header = '${shape.item1}x${shape.item2} matrix';
    var maxPrecision = [
      for (var line in values)
        for (var entry in line) entry.toStringAsFixed(precision).length
    ].fold(precision, max);

    var minPadding = 4;
    var indent = '      ';
    var content = '';
    for (var line in values) {
      content += '$indent';
      for (var value in line) {
        var negPrev = value < 0 ? '-' : ' ';
        var spaceCount = maxPrecision +
            minPadding -
            value.abs().toStringAsFixed(precision).length;
        var spaces = [for (var _ in range(end: spaceCount)) ' '].join();
        content += negPrev;
        content += value.abs().toStringAsFixed(precision);
        content += spaces;
      }
      content += '\n';
    }

    return '$header\n$content';
  }

  Array reshape(int m, int n) {
    var flatten = flat();
    assert(flatten.length == m * n);
    var array = Array.fromValue(0, shape: Tuple2(m, n));

    for (var kVal in enumerate(flatten)) {
      var k = kVal.item1;
      var val = kVal.item2;

      var i = k % m;
      var j = k ~/ m;

      array.values[i][j] = val;
    }

    return array;
  }
}

Array rotationMatrix(double angle, Vector3 axis) {
  var aboutZ = rotationAboutZ(angle);
  var zToAxis = zToVector(axis);
  var axisToZ = zToAxis.getInverse();
  return [zToAxis, aboutZ, axisToZ].reduce((acc, elem) => acc.matMul(elem));
}

Array rotationAboutZ(double angle) {
  return Array(values: [
    [cos(angle), -sin(angle), 0.0],
    [sin(angle), cos(angle), 0.0],
    [0.0, 0.0, 1.0]
  ]);
}

Array zToVector(Vector3 vector) {
  if (vector.normSquared() == 0.0) {
    return Array.identity(3);
  }

  var v = vector.normalize();
  var phi = acos(v.z);
  var theta = 0.0;

  if (v.x != 0.0 || v.y != 0) {
    // projection of vector to unit circle
    var axisProj = v.withCoords(z: 0).normalize();
    theta = acos(axisProj.x);

    if (axisProj.y < 0) {
      theta *= -1;
    }
  }

  var phiDown = Array(values: [
    [cos(phi), 0, sin(phi)],
    [0, 1, 0],
    [-sin(phi), 0, cos(phi)],
  ]);

  return rotationAboutZ(theta).matMul(phiDown);
}

Array quaternionMultiplication(Array q1, Array q2) {
  // Both q1 and q2 are represented as 4x1 column vectors
  assert(listEqual(q1.shape.toList(), [4, 1]));
  assert(listEqual(q2.shape.toList(), [4, 1]));

  var q1Values = q1.flat();
  var q2Values = q2.flat();
  var x1 = q1Values[0];
  var y1 = q1Values[1];
  var z1 = q1Values[2];
  var w1 = q1Values[3];

  var x2 = q2Values[0];
  var y2 = q2Values[1];
  var z2 = q2Values[2];
  var w2 = q2Values[3];

  return Array(values: [
    [w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2],
    [w1 * y2 + y1 * w2 + z1 * x2 - x1 * z2],
    [w1 * z2 + z1 * w2 + x1 * y2 - y1 * x2],
    [w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2],
  ]);
}

Array quaternionFromAngleAxis(double angle, Vector3 axis) {
  var v = axis.normalize() * sin(angle / 2);

  return Array(values: [
    for (var component in v.toList()) [component],
    [cos(angle / 2)],
  ]);
}

Array quaternionConjugate(Array quat) {
  assert(listEqual(quat.shape.toList(), [4, 1]));

  return quat *
      Array(values: [
        [-1],
        [-1],
        [-1],
        [1],
      ]);
}

List<Vector3> compassDirections({int numSides = 4, Vector3 startVec = RIGHT}) {
  var angle = TAU / numSides;

  var rootsOfUnity = [
    for (var k in range(end: numSides)) Complex.exp(angle: angle * k)
  ];

  var complexResults = [
    for (var u in rootsOfUnity)
      u * Complex(real: startVec.x, imaginary: startVec.y)
  ];

  return [for (var c in complexResults) Vector3(c.real, c.imaginary, 0)];
}

Vector3 lineIntersection(List<Vector3> line1, List<Vector3> line2) {
  var xDiff = [line1[0].x - line1[1].x, line2[0].x - line2[1].x];
  var yDiff = [line1[0].y - line1[1].y, line2[0].y - line2[1].y];

  var det = (List<double> a, List<double> b) => a[0] * b[1] - a[1] * b[0];

  var div = det(xDiff, yDiff);

  if (div == 0) {
    throw 'Lines do not intersect';
  }

  var d = [
    det(line1[0].toList(), line1[1].toList()),
    det(line2[0].toList(), line2[1].toList()),
  ];

  var x = det(d, xDiff) / div;
  var y = det(d, yDiff) / div;

  return Vector3(x, y, 0);
}
