import 'dart:math';

import 'package:manim_web/src/util/vector.dart';

class AABB {
  Vector3 get middle => (pt1 + pt2) / 2;

  Vector3 pt1, pt2;

  AABB({
    required Vector3 pt1,
    required Vector3 pt2,
  })  : pt1 = Vector3(max(pt1.x, pt2.x), max(pt1.y, pt2.y), max(pt1.z, pt2.z)),
        pt2 = Vector3(min(pt1.x, pt2.x), min(pt1.y, pt2.y), min(pt1.z, pt2.z));

  List<Vector3> get corners => [
        Vector3(pt1.x, pt1.y, pt1.z),
        Vector3(pt2.x, pt1.y, pt1.z),
        Vector3(pt1.x, pt2.y, pt1.z),
        Vector3(pt2.x, pt2.y, pt1.z),
        Vector3(pt1.x, pt1.y, pt2.z),
        Vector3(pt2.x, pt1.y, pt2.z),
        Vector3(pt1.x, pt2.y, pt2.z),
        Vector3(pt2.x, pt2.y, pt2.z),
      ];

  // is fully or partially inside
  bool intersectsAABB(AABB other) {
    return other.corners
        .map((pt) => containsPoint(pt))
        .reduce((a, b) => a || b);
  }

  bool containsPoint(Vector3 pt) {
    var xCheck = pt.x <= pt1.x && pt.x >= pt2.x;
    var yCheck = pt.y <= pt1.y && pt.y >= pt2.y;
    var zCheck = pt.z <= pt1.z && pt.z >= pt2.z;

    return xCheck && yCheck && zCheck;
  }

  factory AABB.empty() {
    var nanPt = Vector3(double.nan, double.nan, double.nan);
    return AABB(pt1: nanPt, pt2: nanPt);
  }

  @override
  String toString() => 'AABB(pt1: $pt1, pt2: $pt2)';

  bool get isEmpty => pt1.isNan() || pt2.isNan();
}
