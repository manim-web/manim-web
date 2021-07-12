import 'dart:math';
import 'package:manim_web/util/array.dart';
import 'package:manim_web/util/space_ops.dart';
import 'package:tuple/tuple.dart';

import 'package:manim_web/constants.dart';

class Vector3 {
  final double x;
  final double y;
  final double z;

  const Vector3(this.x, this.y, this.z);
  const Vector3.fromValue(double k)
      : x = k,
        y = k,
        z = k;

  // create a vector from a 3x1 matrix
  factory Vector3.fromArray(Array v) {
    assert(v.shape.item1 == 3 && v.shape.item2 == 1);
    var x = v.getValue(Tuple2(0, 0));
    var y = v.getValue(Tuple2(1, 0));
    var z = v.getValue(Tuple2(2, 0));
    return Vector3(x, y, z);
  }

  @override
  bool operator ==(Object other) =>
      other is Vector3 && x == other.x && y == other.y && z == other.z;

  //* Expected : num or Vector3
  Vector3 operator +(dynamic v) {
    if (v is num) {
      return Vector3(x + v, y + v, z + v);
    } else if (v is Vector3) {
      return Vector3(x + v.x, y + v.y, z + v.z);
    } else {
      throw 'Vector3 only support addition by num or Vector3';
    }
  }

  //* Expected : num or Vector3 or null
  Vector3 operator -(dynamic v) {
    if (v is num) {
      return Vector3(x - v, y - v, z - v);
    } else if (v is Vector3) {
      return Vector3(x - v.x, y - v.y, z - v.z);
    } else if (v == null) {
      return this * -1;
    } else {
      throw 'Vector3 only support subtraction by num or Vector3';
    }
  }

  //* Expected : num or Vector3
  Vector3 operator *(dynamic v) {
    if (v is num) {
      return Vector3(x * v, y * v, z * v);
    } else if (v is Vector3) {
      return Vector3(x * v.x, y * v.y, z * v.z);
    } else {
      throw 'Vector3 only support multiplication by num or Vector3';
    }
  }

  //* Expected : num or Vector3
  Vector3 operator /(dynamic v) {
    if (v is num) {
      return Vector3(x / v, y / v, z / v);
    } else if (v is Vector3) {
      return Vector3(x / v.x, y / v.y, z / v.z);
    } else {
      throw 'Vector3 only support division by num or Vector3';
    }
  }

  Vector3 scale(num k) => this * k;

  double normSquared() => x * x + y * y + z * z;
  double norm() => sqrt(normSquared());

  Vector3 normalize() => this / norm();

  Vector3 copy() => Vector3(x, y, z);

  double getComponent(int i) {
    switch (i) {
      case 0:
        return x;
      case 1:
        return y;
      case 2:
        return z;
      default:
        throw 'No component at index $i on a vector3';
    }
  }

  List<double> toList() {
    return [x, y, z];
  }

  Array toArray({bool row = false}) {
    if (row) {
      return Array(values: [
        [x, y, z]
      ]);
    } else {
      return Array(values: [
        [x],
        [y],
        [z]
      ]);
    }
  }

  double operator [](int i) => getComponent(i);

  Vector3 withCoords({double? x, double? y, double? z}) {
    return Vector3(
      x ?? this.x,
      y ?? this.y,
      z ?? this.z,
    );
  }

  Vector3 withComponent(int index, double value) {
    if (index == 0) {
      return withCoords(x: value);
    } else if (index == 1) {
      return withCoords(y: value);
    } else if (index == 2) {
      return withCoords(z: value);
    } else {
      throw 'Cannot index a vector3 with index=$index';
    }
  }

  // multiply a 3x1 column vector by a 3x3 matrix
  Vector3 matMul(Array matrix) {
    var fullMatrix = Array.identity(3);

    // get a 3x3 matrix from a 2x2 matrix
    fullMatrix = fullMatrix.map((identityValue, pos) =>
        (pos.item1 >= matrix.shape.item1) || (pos.item2 >= matrix.shape.item2)
            ? identityValue
            : matrix.getValue(pos));

    var columnVector = toArray();
    var result = fullMatrix.matMul(columnVector);
    return Vector3.fromArray(result);
  }

  double dot(Vector3 b) {
    return x * b.x + y * b.y + z * b.z;
  }

  Vector3 cross(Vector3 b) {
    return Vector3(
      y * b.z - z * b.y,
      z * b.x - x * b.z,
      x * b.y - y * b.x,
    );
  }

  Vector3 applyFunction(double Function(double) func) {
    return Vector3(func(x), func(y), func(z));
  }

  Vector3 sign() {
    return applyFunction((n) => n.sign);
  }

  Vector3 abs() {
    return applyFunction((n) => n.abs());
  }

  double angle() {
    if (x == 0 && y == 0) {
      return 0;
    }

    return atan2(y, x);
  }

  double angleBetween(Vector3 vec) {
    var dotProduct = dot(vec);
    var cosAngle = dotProduct / (vec.norm() * norm());
    return acos(cosAngle);
  }

  Vector3 rotate(double angle, {Vector3 axis = OUT}) {
    //Use quaternions...because why not

    var quat = quaternionFromAngleAxis(angle, axis);
    return applyQuaternion(quat);
  }

  Vector3 applyQuaternion(Array quat) {
    assert(listEqual(quat.shape.toList(), [4, 1]));

    var quatValues = quat.getColumn(0);

    var qx = quatValues[0];
    var qy = quatValues[1];
    var qz = quatValues[2];
    var qw = quatValues[3];

    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z;

    return Vector3(
        ix * qw + iw * -qx + iy * -qz - iz * -qy,
        iy * qw + iw * -qy + iz * -qx - ix * -qz,
        iz * qw + iw * -qz + ix * -qy - iy * -qx);
  }

  @override
  String toString() => 'vec3($x, $y, $z)';

  bool isFinite() => x.isFinite && y.isFinite && z.isFinite;
  bool isInfinite() => x.isInfinite || y.isInfinite || z.isInfinite;
  bool isNan() => x.isNaN || y.isNaN || z.isNaN;
}
