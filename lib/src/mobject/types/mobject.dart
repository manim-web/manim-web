import 'dart:math';
import 'package:collection/collection.dart';
import 'package:tuple/tuple.dart';

import 'package:manim_web/src/constants.dart';
import 'package:manim_web/src/util/array.dart';
import 'package:manim_web/src/util/bezier.dart';
import 'package:manim_web/src/util/color.dart';
import 'package:manim_web/src/util/complex.dart';
import 'package:manim_web/src/util/paths.dart';
import 'package:manim_web/src/util/space_ops.dart';
import 'package:manim_web/src/util/vector.dart';

typedef Updater = Mobject Function(Mobject, double);

class Mobject {
  late Color color;
  late String name;
  late Mobject? target;
  late List<Mobject> submobjects;
  late List<Updater> updaters = [];
  late bool updatingSuspended;
  late List<Vector3> points;

  Mobject({this.color = WHITE, String? name, this.target}) {
    this.name = name ?? getName();
    submobjects = [];
    updatingSuspended = false;
    resetPoints();
    initColors();
    generatePoints();
  }

  @override
  String toString() => getName();

  String getName() {
    var fullName = super.toString();
    // Expected: Instance of '{classname}'

    var exp = RegExp(r"^Instance of '(.*?)'$");
    return exp.firstMatch(fullName)!.group(1)!;
  }

  void resetPoints() {
    points = [];
  }

  void initColors() {
    // To implement in subclasses
  }

  void generatePoints() {
    // To implement in subclasses
  }

  void add(List<Mobject> mobjects) {
    addToFront(mobjects);
  }

  void addToFront(List<Mobject> mobjects) {
    if (mobjects.contains(this)) {
      throw 'Mobject can\'t contain itself';
    }

    submobjects = [
      ...mobjects,
      for (var mob in submobjects)
        if (!mobjects.contains(mob)) mob,
    ];
  }

  void addToBack(List<Mobject> mobjects) {
    if (mobjects.contains(this)) {
      throw 'Mobject can\'t contain itself';
    }
    submobjects = [
      for (var mob in submobjects)
        if (!mobjects.contains(mob)) mob,
      ...mobjects
    ];
  }

  void remove(List<Mobject> mobjects) {
    submobjects = [
      for (var mob in submobjects)
        if (!mobjects.contains(mob)) mob
    ];
  }

  void applyOverPoints(
      {required Vector3 Function(Vector3) func,
      Vector3? aboutPoint,
      Vector3 aboutEdge = ORIGIN}) {
    aboutPoint ??= getCriticalPoint(aboutEdge);

    for (var mob in getFamilyWithPoints()) {
      mob.points = [
        for (var pt in mob.points) func(pt - aboutPoint) + aboutPoint
      ];
    }
  }

  void applyFunction(Vector3 Function(Vector3) func) {
    applyOverPoints(func: func, aboutEdge: ORIGIN, aboutPoint: ORIGIN);
  }

  //! For subclasses, this needs to be reinplemented
  //! Dart doesn't have a copy function
  //* To implement this in other classes,
  //* Call super.copyFrom() to use the copyFrom method from the parent class
  //* Then, copy all new properties of the child class
  Mobject.copyFrom(Mobject mob)
      : color = mob.color.copy(),
        name = mob.name,
        target = mob.target?.copy(),
        submobjects = [for (var submob in mob.submobjects) submob.copy()],
        updatingSuspended = mob.updatingSuspended,
        points = [for (var pt in mob.points) pt.copy()];

  //* The copy function also needs to be reinplemented using [class].copyFrom(this)
  Mobject copy() => Mobject.copyFrom(this);

  Mobject generateTarget() {
    // Prevent exponential explosion (copying the target into the target)
    target = null;
    var mob = copy();
    target = mob;
    return mob;
  }

  void update({double dt = 0, bool recursive = true}) {
    if (updatingSuspended) {
      return;
    }

    for (var updater in updaters) {
      updater(this, dt);
    }

    if (recursive) {
      for (var submob in submobjects) {
        submob.update(dt: dt, recursive: recursive);
      }
    }
  }

  List<Updater> getUpdaters() {
    return updaters;
  }

  List<Updater> getFamilyUpdaters() {
    return [
      for (var mob in getFamily()) ...mob.getUpdaters(),
    ];
  }

  void addUpdater(Updater updater, {int? index, bool callUpdater = true}) {
    if (index == null) {
      updaters.add(updater);
    } else {
      updaters.insert(index, updater);
    }

    if (callUpdater) {
      update(dt: 0);
    }
  }

  void removeUpdater(Updater updater) {
    while (updaters.contains(updater)) {
      updaters.remove(updater);
    }
  }

  bool hasUpdaters() => updaters.isNotEmpty;

  void clearUpdaters({bool recursive = true}) {
    updaters = [];

    if (recursive) {
      for (var submob in submobjects) {
        submob.clearUpdaters(recursive: true);
      }
    }
  }

  void matchUpdaters(Mobject mob) {
    clearUpdaters();

    for (var updater in mob.getUpdaters()) {
      addUpdater(updater);
    }
  }

  void suspendUpdating({bool recursive = true}) {
    updatingSuspended = true;

    if (recursive) {
      for (var submob in submobjects) {
        submob.suspendUpdating(recursive: true);
      }
    }
  }

  void resumeUpdating({bool recursive = true}) {
    updatingSuspended = false;

    if (recursive) {
      for (var submob in submobjects) {
        submob.resumeUpdating(recursive: true);
      }
    }
  }

  void applyToFamily(Mobject Function(Mobject) func,
      {bool useFamilyWithPoints = true}) {
    for (var mob in useFamilyWithPoints ? getFamilyWithPoints() : getFamily()) {
      func(mob);
    }
  }

  void shift(Vector3 delta) {
    return applyOverPoints(func: (pt) => pt + delta);
  }

  void scale(Vector3 scaleFactor,
      {Vector3? aboutPoint, Vector3 aboutEdge = ORIGIN}) {
    return applyOverPoints(
        func: (pt) => pt * scaleFactor,
        aboutPoint: aboutPoint,
        aboutEdge: aboutEdge);
  }

  void scaleUniformly(double scaleFactor,
      {Vector3? aboutPoint, Vector3 aboutEdge = ORIGIN}) {
    return applyOverPoints(
        func: (pt) => pt * scaleFactor,
        aboutPoint: aboutPoint,
        aboutEdge: aboutEdge);
  }

  void rotate(double angle,
      {Vector3 axis = OUT, Vector3? aboutPoint, Vector3 aboutEdge = ORIGIN}) {
    var rotMatrixT = rotationMatrix(angle, axis).T;

    applyOverPoints(
        func: (pt) => pt.matMul(rotMatrixT),
        aboutEdge: aboutEdge,
        aboutPoint: aboutPoint);
  }

  void rotateAboutOrigin(double angle, {Vector3 axis = OUT}) {
    rotate(angle, axis: axis, aboutPoint: ORIGIN);
  }

  void flip(
      {Vector3 axis = UP, Vector3? aboutPoint, Vector3 aboutEdge = ORIGIN}) {
    rotate(TAU / 2, axis: axis, aboutEdge: aboutEdge, aboutPoint: aboutPoint);
  }

  void stretch(double scaleFactor, int dim,
      {Vector3? aboutPoint, Vector3 aboutEdge = ORIGIN}) {
    return applyOverPoints(
        func: (pt) => pt.withComponent(dim, pt.getComponent(dim) * scaleFactor),
        aboutPoint: aboutPoint,
        aboutEdge: aboutEdge);
  }

  void applyMatrix(Array mat) {
    var fullMatrix = Array.identity(3);

    // get a 3x3 matrix from a 2x2 matrix
    fullMatrix = fullMatrix.map((identityValue, pos) =>
        (pos.item1 >= mat.shape.item1) || (pos.item2 >= mat.shape.item2)
            ? identityValue
            : mat.getValue(pos));

    applyOverPoints(func: (pt) => pt.matMul(fullMatrix));
  }

  void applyComplexFunction(Complex Function(Complex) func) {
    Vector3 funcR3(Vector3 pt) {
      var startComplex = Complex(real: pt.x, imaginary: pt.y);
      var resultComplex = func(startComplex);
      var resultPoint =
          Vector3(resultComplex.real, resultComplex.imaginary, pt.z);
      return resultPoint;
    }

    return applyOverPoints(func: funcR3);
  }

  void wag(
      {Vector3 direction = RIGHT,
      Vector3 axis = DOWN,
      double wagFactor = 1.0}) {
    for (var mob in getFamilyWithPoints()) {
      var points = Array(values: [for (var pt in mob.points) pt.toList()]);
      var alphas = points.matMul(axis.toArray());
      var minAlpha = alphas.values[0].reduce((acc, elem) => min(acc, elem));
      var maxAlpha = alphas.values[0].reduce((acc, elem) => max(acc, elem));
      alphas -= Array.fromValue(minAlpha, shape: alphas.shape);
      alphas /= Array.fromValue(maxAlpha, shape: alphas.shape);
      alphas = alphas.map((value, pos) => pow(value, wagFactor).toDouble());
      var wagMove = alphas.matMul(direction.toArray(row: true));
      mob.points.map((pt) => pt + wagMove);
    }
  }

  void reversePoints() {
    for (var mob in getFamilyWithPoints()) {
      mob.points = mob.points.reversed.toList();
    }
  }

  void repeat(int count) {
    for (var mob in getFamilyWithPoints()) {
      mob.points = [for (var _ in range(end: count)) ...mob.points];
    }
  }

  void center({Vector3 mask = const Vector3(1, 1, 1)}) {
    shift(getCenter() * mask * -1);
  }

  void centerOnXAxis() => center(mask: Vector3(1, 0, 0));
  void centerOnYAxis() => center(mask: Vector3(0, 1, 0));
  void centerOnZAxis() => center(mask: Vector3(0, 0, 1));

  void alignOnBorder(Vector3 direction, {double? buffer}) {
    buffer ??= DEFAULT_MOBJECT_TO_EDGE_BUFFER;

    var targetPoint =
        direction.sign() * Vector3(FRAME_X_RADIUS, FRAME_Y_RADIUS, 0);

    var pointToAlign = getCriticalPoint(direction);

    var shiftVal = targetPoint - pointToAlign - direction * buffer;
    shiftVal *= direction.sign().abs();

    shift(shiftVal);
  }

  void toCorner(
      {Vector3 corner = DL, double buffer = DEFAULT_MOBJECT_TO_EDGE_BUFFER}) {
    alignOnBorder(corner, buffer: buffer);
  }

  void toEdge(
      {Vector3 edge = LEFT, double buffer = DEFAULT_MOBJECT_TO_EDGE_BUFFER}) {
    alignOnBorder(edge, buffer: buffer);
  }

  void nextToMobject(Mobject mobject,
          {Vector3 direction = RIGHT,
          double buffer = DEFAULT_MOBJECT_TO_MOBJECT_BUFFER,
          Vector3 alignedEdge = ORIGIN,
          // TODO: add submobjectToAlign
          // Mobject? submobjectToAlign,
          // int? indexOfSubmobjectToAlign,
          Vector3 coordinateMask = const Vector3(1, 1, 1)}) =>
      nextToPoint(
        mobject.getCriticalPoint(alignedEdge + direction),
        direction: direction,
        buffer: buffer,
        alignedEdge: alignedEdge,
      );

  void nextToPoint(Vector3 targetPoint,
      {Vector3 direction = RIGHT,
      double buffer = DEFAULT_MOBJECT_TO_MOBJECT_BUFFER,
      Vector3 alignedEdge = ORIGIN,
      // TODO: add submobjectToAlign
      // Mobject? submobjectToAlign,
      // int? indexOfSubmobjectToAlign,
      Vector3 coordinateMask = const Vector3(1, 1, 1)}) {
    var pointToAlign = getCriticalPoint(alignedEdge - direction);
    shift((targetPoint - pointToAlign + direction * buffer) * coordinateMask);
  }

  void alignToPoint(Vector3 point, {Vector3? direction}) {
    direction ??= ORIGIN;

    for (var dim in range(end: 3)) {
      if (direction.getComponent(dim) != 0) {
        setCoord(point.getComponent(dim), dim, direction: direction);
      }
    }
  }

  void alignToMobject(Mobject mob, {Vector3? direction}) {
    direction ??= ORIGIN;

    alignToPoint(mob.getCriticalPoint(direction), direction: direction);
  }

  void shiftOntoScreen({double? buffer}) {
    var spaceLengths = [FRAME_X_RADIUS, FRAME_Y_RADIUS];

    buffer ??= DEFAULT_MOBJECT_TO_EDGE_BUFFER;

    for (var vec in [UP, DOWN, LEFT, RIGHT]) {
      var dim = argmax(vec.abs().toList());
      var maxVal = spaceLengths[dim];
      var edgeCenter = getEdgeCenter(vec);
      if (edgeCenter.dot(vec) > maxVal) {
        toEdge(edge: vec, buffer: buffer);
      }
    }
  }

  bool isOffScreen() {
    var checks = [
      getLeft().x > FRAME_X_RADIUS,
      getRight().x < -FRAME_X_RADIUS,
      getBottom().y > FRAME_Y_RADIUS,
      getTop().y < -FRAME_Y_RADIUS
    ];

    return checks.any((e) => e);
  }

  void rescaleToFit(double length, int dim,
      {bool stretch = false, Vector3 aboutEdge = ORIGIN, Vector3? aboutPoint}) {
    var oldLength = lengthOverDim(dim);

    if (oldLength == 0) {
      return;
    }

    if (stretch) {
      this.stretch(length / oldLength, dim,
          aboutEdge: aboutEdge, aboutPoint: aboutPoint);
    } else {
      scaleUniformly(length / oldLength,
          aboutEdge: aboutEdge, aboutPoint: aboutPoint);
    }
  }

  void stretchToFitWidth(double width,
      {Vector3? aboutPoint, Vector3 aboutEdge = ORIGIN}) {
    return setWidth(width,
        aboutPoint: aboutPoint, aboutEdge: aboutEdge, stretch: true);
  }

  void stretchToFitHeight(double height,
      {Vector3? aboutPoint, Vector3 aboutEdge = ORIGIN}) {
    return setHeight(height,
        aboutPoint: aboutPoint, aboutEdge: aboutEdge, stretch: true);
  }

  void stretchToFitDepth(double depth,
      {Vector3? aboutPoint, Vector3 aboutEdge = ORIGIN}) {
    return setDepth(depth,
        aboutPoint: aboutPoint, aboutEdge: aboutEdge, stretch: true);
  }

  void setWidth(double width,
      {bool stretch = false, Vector3? aboutPoint, Vector3 aboutEdge = ORIGIN}) {
    rescaleToFit(width, 0,
        stretch: stretch, aboutEdge: aboutEdge, aboutPoint: aboutPoint);
  }

  void setHeight(double height,
      {bool stretch = false, Vector3? aboutPoint, Vector3 aboutEdge = ORIGIN}) {
    rescaleToFit(height, 1,
        stretch: stretch, aboutEdge: aboutEdge, aboutPoint: aboutPoint);
  }

  void setDepth(double depth,
      {bool stretch = false, Vector3? aboutPoint, Vector3 aboutEdge = ORIGIN}) {
    rescaleToFit(depth, 2,
        stretch: stretch, aboutEdge: aboutEdge, aboutPoint: aboutPoint);
  }

  void setCoord(double value, int dim, {Vector3? direction}) {
    direction ??= ORIGIN;
    var curr = getCoord(dim, direction: direction);
    var shiftVec = ORIGIN.withComponent(dim, value - curr);
    shift(shiftVec);
  }

  void setX(double x, {Vector3? direction}) {
    setCoord(x, 0, direction: direction);
  }

  void setY(double y, {Vector3? direction}) {
    setCoord(y, 1, direction: direction);
  }

  void setZ(double z, {Vector3? direction}) {
    setCoord(z, 2, direction: direction);
  }

  void spaceOutSubmobjects(
      {double factor = 1.5, Vector3 aboutEdge = ORIGIN, Vector3? aboutPoint}) {
    scaleUniformly(factor, aboutEdge: aboutEdge, aboutPoint: aboutPoint);
    for (var submob in submobjects) {
      submob.scaleUniformly(1.0 / factor);
    }
  }

  void moveToPoint(Vector3 target,
      {Vector3? alignedEdge, Vector3? coordinateMask}) {
    alignedEdge ??= ORIGIN;
    coordinateMask ??= Vector3(1, 1, 1);
    var pointToAlign = getCriticalPoint(alignedEdge);
    shift((target - pointToAlign) * coordinateMask);
  }

  void moveToMobject(Mobject target,
      {Vector3? alignedEdge, Vector3? coordinateMask}) {
    alignedEdge ??= ORIGIN;
    moveToPoint(target.getCriticalPoint(alignedEdge));
  }

  void replace(Mobject mob, {int dimToMatch = 0, bool stretch = false}) {
    if (hasNoPoints() && submobjects.isEmpty) {
      throw 'Attempting to replace a mobject with no points';
    }

    if (stretch) {
      stretchToFitWidth(mob.getWidth());
      stretchToFitHeight(mob.getHeight());
    } else {
      rescaleToFit(
        mob.lengthOverDim(dimToMatch),
        dimToMatch,
        stretch: false,
      );
    }

    shift(mob.getCenter() - getCenter());
  }

  void surround(Mobject mob,
      {int dimToMatch = 0, bool stretch = false, double? buffer}) {
    buffer ??= MED_SMALL_BUFFER;

    replace(mob, dimToMatch: dimToMatch, stretch: stretch);
    var length = mob.lengthOverDim(dimToMatch);
    scaleUniformly((length + buffer) / length);
  }

  void putStartAndEndOn(
    Vector3 start,
    Vector3 end,
  ) {
    var currentStart = getStart();
    var currentEnd = getEnd();
    var currentVec = currentEnd - currentStart;

    if (currentStart == currentEnd) {
      throw 'Cannot position endpoints of a closed loop';
    }

    var targetVec = end - start;

    scaleUniformly(targetVec.norm() / currentVec.norm(),
        aboutPoint: currentStart);
    rotate(targetVec.angle() - currentVec.angle(), aboutPoint: currentStart);
    shift(start - currentStart);
  }

  // TODO add_background_rectangle
  // TODO add_background_rectangle_to_submobjects
  // TODO add_background_rectangle_to_family_members_with_points
  // TODO ...

  void setColor({required Color color, bool family = true}) {
    if (family) {
      for (var submob in submobjects) {
        submob.setColor(color: color, family: true);
      }
    }

    this.color = color;
  }

  void setSubmobjectColorsByGradient(List<Color> colors) {
    if (colors.isEmpty) {
      throw 'Need at least one color';
    } else if (colors.length == 1) {
      setColor(color: colors[0]);
    }

    var mobs = getFamilyWithPoints();
    var newColors = colorGradient(colors, mobs.length);

    for (var k in IterableZip([mobs, newColors])) {
      var mob = k.first as Mobject;
      var color = k.last as Color;
      mob.setColor(color: color);
    }
  }

  void setSubmobjectColorsByRadialGradient(
      {Vector3? center,
      double? radius,
      required Color innerColor,
      required Color outerColor}) {
    center ??= getCenter();
    radius ??= 1;

    for (var mob in getFamilyWithPoints()) {
      var t = (mob.getCenter() - center).norm() / radius;
      t = min(t, 1);
      var color = interpolateValue(innerColor, outerColor, t);
      mob.setColor(color: color, family: false);
    }
  }

  void setColorByGradient(List<Color> colors) {
    setSubmobjectColorsByGradient(colors);
  }

  void setColorByRadialGradient(
      {Vector3? center,
      double? radius,
      required Color innerColor,
      required Color outerColor}) {
    setSubmobjectColorsByRadialGradient(
        innerColor: innerColor,
        outerColor: outerColor,
        radius: radius,
        center: center);
  }

  void toOriginalColor() {
    setColor(color: color);
  }

  void fadeTo(Color color, double alpha, {bool family = true}) {
    if (hasPoints()) {
      var newColor = interpolateValue(getColor(), color, alpha);
      setColor(color: newColor, family: false);
    }

    if (family) {
      for (var submob in submobjects) {
        submob.fadeTo(color, alpha, family: true);
      }
    }
  }

  void fade({double darkness = 0.5, bool family = true}) {
    if (family) {
      for (var submob in submobjects) {
        submob.fade(darkness: darkness, family: true);
      }
    }
  }

  Color getColor() {
    return color;
  }

  List<Mobject> getFamily() {
    return unique([this, for (var mob in submobjects) ...mob.getFamily()]);
  }

  List<Mobject> getFamilyWithPoints() {
    return getFamily().where((mob) => mob.getNumPoints() > 0).toList();
  }

  List<Mobject> nonEmptySubmobjects() {
    return [
      for (var submob in submobjects)
        if (submob.submobjects.isNotEmpty || submob.points.isNotEmpty) submob
    ];
  }

  int getNumPoints() {
    return points.length;
  }

  List<Vector3> getAllPoints() {
    return [
      for (var mob in getFamilyWithPoints()) ...mob.points,
    ];
  }

  List<Vector3> getPointsDefiningBoundary() => getAllPoints();

  double getExtremumAlongDim(
      {List<Vector3>? points, int dim = 0, int key = 0}) {
    points ??= getPointsDefiningBoundary();

    var values = [for (var point in points) point.getComponent(dim)];

    if (key < 0) {
      return values.reduce(min);
    } else if (key == 0) {
      var minVal = values.reduce(min);
      var maxVal = values.reduce(max);
      return (minVal + maxVal) / 2;
    } else {
      return values.reduce(max);
    }
  }

  Vector3 getCriticalPoint(Vector3 direction) {
    var allPoints = getPointsDefiningBoundary();

    if (allPoints.isEmpty) {
      return ORIGIN;
    }

    var x = getExtremumAlongDim(
        points: allPoints, dim: 0, key: direction.x.toInt());
    var y = getExtremumAlongDim(
        points: allPoints, dim: 1, key: direction.y.toInt());
    var z = getExtremumAlongDim(
        points: allPoints, dim: 2, key: direction.z.toInt());

    return Vector3(x, y, z);
  }

  Vector3 getEdgeCenter(Vector3 edge) {
    return getCriticalPoint(edge);
  }

  Vector3 getCorner(Vector3 corner) {
    return getCriticalPoint(corner);
  }

  Vector3 getCenter() {
    return getCriticalPoint(ORIGIN);
  }

  Vector3 getCenterOfMass() {
    var sum = getAllPoints().reduce((a, b) => a + b);
    return sum / getNumPoints();
  }

  Vector3 getBoundaryPoint(Vector3 direction) {
    var allPoints = Array(
        values: getPointsDefiningBoundary().map((pt) => pt.toList()).toList());

    var values = allPoints
        .matMul(direction.toArray(row: true))
        .values
        .map((line) => line.first)
        .toList();

    var index = argmax(values);

    return getAllPoints()[index];
  }

  Vector3 getTop() {
    return getEdgeCenter(UP);
  }

  Vector3 getBottom() {
    return getEdgeCenter(DOWN);
  }

  Vector3 getRight() {
    return getEdgeCenter(RIGHT);
  }

  Vector3 getLeft() {
    return getEdgeCenter(LEFT);
  }

  Vector3 getZenith() {
    return getEdgeCenter(OUT);
  }

  Vector3 getNadir() {
    return getEdgeCenter(IN);
  }

  double lengthOverDim(int dim) {
    var pts = getAllPoints();

    if (pts.isEmpty) {
      return 1;
    }

    var components = pts.map((pt) => pt.getComponent(dim));
    var minPos = components.reduce(min);
    var maxPos = components.reduce(max);
    return maxPos - minPos;
  }

  double getWidth() {
    return lengthOverDim(0);
  }

  double getHeight() {
    return lengthOverDim(1);
  }

  double getDepth() {
    return lengthOverDim(2);
  }

  double getCoord(int dim, {Vector3? direction}) {
    direction ??= ORIGIN;

    return getExtremumAlongDim(
      dim: dim,
      key: direction.getComponent(dim).toInt(),
    );
  }

  double getX({Vector3? direction}) {
    return getCoord(0, direction: direction);
  }

  double getY({Vector3? direction}) {
    return getCoord(1, direction: direction);
  }

  double getZ({Vector3? direction}) {
    return getCoord(2, direction: direction);
  }

  Vector3 getPos({Vector3? direction}) {
    return Vector3(
      getX(direction: direction),
      getY(direction: direction),
      getZ(direction: direction),
    );
  }

  Vector3 getStart() {
    throwErrorIfNoPoints('getStart');
    return points.first;
  }

  Vector3 getEnd() {
    throwErrorIfNoPoints('getEnd');
    return points.last;
  }

  Tuple2<Vector3, Vector3> getStartAndEnd() {
    throwErrorIfNoPoints('getStartAndEnd');
    return Tuple2(getStart(), getEnd());
  }

  Vector3 pointFromProportion(double alpha) {
    throw 'Not implemented';
  }

  Group getPieces(int numPieces) {
    var template = copy();
    template.submobjects = [];
    var alphas = linspace(start: 0, end: 1, count: numPieces + 1).flat();

    // alphas1 = alphas[:-1]
    var alphas1 =
        alphas.whereIndexed((index, element) => index != alphas.length - 1);
    // alphas2 = alphas[1:]
    var alphas2 = alphas.whereIndexed((index, element) => index != 0);

    return Group([
      for (var a in IterableZip([alphas1, alphas2]))
        template.copy()..pointwiseBecomePartial(this, a[0], a[1])
    ]);
  }

  Vector3 getZIndexReferencePoint() {
    return getCenter();
  }

  bool hasPoints() {
    return points.isNotEmpty;
  }

  bool hasNoPoints() {
    return points.isEmpty;
  }

  void matchColor(Mobject mob) {
    setColor(color: mob.getColor());
  }

  void matchDimSize(Mobject mob, int dim,
      {Vector3 aboutEdge = ORIGIN, Vector3? aboutPoint, bool stretch = false}) {
    rescaleToFit(
      mob.lengthOverDim(dim),
      dim,
      aboutEdge: aboutEdge,
      aboutPoint: aboutPoint,
      stretch: stretch,
    );
  }

  void matchWidth(Mobject mob,
      {Vector3 aboutEdge = ORIGIN, Vector3? aboutPoint, bool stretch = false}) {
    matchDimSize(mob, 0,
        aboutEdge: aboutEdge, aboutPoint: aboutPoint, stretch: stretch);
  }

  void matchHeight(Mobject mob,
      {Vector3 aboutEdge = ORIGIN, Vector3? aboutPoint, bool stretch = false}) {
    matchDimSize(mob, 1,
        aboutEdge: aboutEdge, aboutPoint: aboutPoint, stretch: stretch);
  }

  void matchDepth(Mobject mob,
      {Vector3 aboutEdge = ORIGIN, Vector3? aboutPoint, bool stretch = false}) {
    matchDimSize(mob, 2,
        aboutEdge: aboutEdge, aboutPoint: aboutPoint, stretch: stretch);
  }

  void matchCoord(Mobject mob, int dim, {Vector3? direction}) {
    direction ??= ORIGIN;

    setCoord(mob.getCoord(dim, direction: direction), dim,
        direction: direction);
  }

  void matchX(Mobject mob, {Vector3? direction}) {
    direction ??= ORIGIN;
    matchCoord(mob, 0, direction: direction);
  }

  void matchY(Mobject mob, {Vector3? direction}) {
    direction ??= ORIGIN;
    matchCoord(mob, 1, direction: direction);
  }

  void matchZ(Mobject mob, {Vector3? direction}) {
    direction ??= ORIGIN;
    matchCoord(mob, 2, direction: direction);
  }

  //* "Get item" operator ->  mob[i]
  Mobject operator [](int i) => split()[i];

  int get length => split().length;

  Mobject createGroup<MobjectType extends Mobject>(List<MobjectType> mobs) {
    return Group(mobs);
  }

  List<Mobject> split() {
    return [
      if (hasPoints()) this,
      ...submobjects,
    ];
  }

  void arrange(
      {Vector3 direction = RIGHT,
      bool center = true,
      double buffer = DEFAULT_MOBJECT_TO_MOBJECT_BUFFER,
      Vector3 alignedEdge = ORIGIN,
      // TODO: add submobjectToAlign
      // Mobject? submobjectToAlign,
      // int? indexOfSubmobjectToAlign,
      Vector3 coordinateMask = const Vector3(1, 1, 1)}) {
    var withoutFirst = submobjects.whereIndexed((index, element) => index > 0);

    for (var m in IterableZip([submobjects, withoutFirst])) {
      m[1].nextToMobject(m[0],
          direction: direction,
          buffer: buffer,
          alignedEdge: alignedEdge,
          coordinateMask: coordinateMask);
    }

    if (center) {
      this.center();
    }
  }

  void arrangeInGrid(
      {int? numRows,
      int? numCols,
      bool center = true,
      double buffer = DEFAULT_MOBJECT_TO_MOBJECT_BUFFER,
      Vector3 alignedEdge = ORIGIN,
      // TODO: add submobjectToAlign
      // Mobject? submobjectToAlign,
      // int? indexOfSubmobjectToAlign,
      Vector3 coordinateMask = const Vector3(1, 1, 1)}) {
    // Only to make the code more readable
    var length = this.length;

    if (numRows == null && numCols == null) {
      numCols = sqrt(length).toInt();
    }

    late Vector3 v1, v2;
    late int n;

    if (numRows != null) {
      v1 = RIGHT;
      v2 = DOWN;
      //* "~/" is equivalent to "//" in python
      n = length ~/ numRows;
    } else if (numCols != null) {
      v1 = DOWN;
      v2 = RIGHT;
      //* "~/" is equivalent to "//" in python
      n = length ~/ numCols;
    }

    var arrangedGroup = (List<Mobject> mobs, Vector3 direction) {
      var group = Group(mobs);
      group.arrange(
          direction: direction,
          center: center,
          buffer: buffer,
          alignedEdge: alignedEdge,
          // TODO: add submobjectToAlign
          // submobjectToAlign: submobjectToAlign,
          // indexOfSubmobjectToAlign: indexOfSubmobjectToAlign
          coordinateMask: coordinateMask);
      return group;
    };

    arrangedGroup([
      for (var i in range(start: 0, end: length, step: n))
        arrangedGroup(
            submobjects
                .whereIndexed((index, element) => index >= i && index < i + n)
                .toList(),
            v1)
    ], v2);
  }

  void sort(
      {double Function(Vector3)? pointToNumFunc,
      double Function(Mobject)? keyFunc}) {
    var _pointToNumFunc = pointToNumFunc ?? (p) => p.x;
    var _keyFunc = keyFunc ?? (mob) => _pointToNumFunc(mob.getCenter());

    submobjects.sort((a, b) {
      return (_keyFunc(a) - _keyFunc(b)).sign.toInt();
    });
  }

  void shuffle({bool recursive = false}) {
    if (recursive) {
      for (var submob in submobjects) {
        submob.shuffle(recursive: true);
      }
    }

    submobjects.shuffle();
  }

  void alignData(Mobject mob) {
    nullPointAlign(mob);
    alignSubmobjects(mob);
    alignPoints(mob);

    for (var mobs in IterableZip([submobjects, mob.submobjects])) {
      mobs[0].alignData(mobs[1]);
    }
  }

  void reverseSubmobjects({bool recursive = false}) {
    submobjects = [for (var submob in submobjects.reversed) submob];

    if (recursive) {
      for (var submob in submobjects) {
        submob.reverseSubmobjects(recursive: true);
      }
    }
  }

  Mobject getPointMobject({Vector3? center}) {
    throw 'getPointMobject not implemented for $getName()';
  }

  void alignPoints(Mobject mob) {
    var count1 = getNumPoints();
    var count2 = mob.getNumPoints();

    if (count1 < count2) {
      alignPointsWithLarger(mob);
    } else if (count1 > count2) {
      mob.alignPointsWithLarger(this);
    }
  }

  void alignPointsWithLarger(Mobject largerMob) {
    throw 'Not implemented';
  }

  void alignSubmobjects(Mobject mob2) {
    var mob1 = this;

    var n1 = mob1.length;
    var n2 = mob2.length;

    mob1.addNMoreSubmobjects(max(0, n2 - n1));
    mob2.addNMoreSubmobjects(max(0, n1 - n2));
  }

  void nullPointAlign(Mobject m2) {
    var m1 = this;

    if (m1.hasNoPoints() && m2.hasPoints()) {
      m2.pushSelfIntoSubmobjects();
    }

    if (m2.hasNoPoints() && m1.hasPoints()) {
      m1.pushSelfIntoSubmobjects();
    }
  }

  void pushSelfIntoSubmobjects() {
    var m = copy();
    m.submobjects = [];
    resetPoints();
    add([m]);
  }

  void addNMoreSubmobjects(int n) {
    if (n == 0) {
      return;
    }

    var current = length;
    if (current == 0) {
      submobjects = [for (var _ in range(end: n)) getPointMobject()];
    }

    var target = current + n;
    var repeatIndices = [
      for (var elem in range(end: target)) elem * current ~/ target
    ];
    var splitFactors = [
      for (var i in range(end: current))
        sum([
          for (var j in repeatIndices)
            if (i == j) 1 else 0
        ])
    ];

    var newSubmobs = <Mobject>[];

    for (var data in IterableZip([submobjects, splitFactors])) {
      var submob = data[0] as Mobject;
      var sf = data[1] as int;

      newSubmobs.add(submob);

      for (var _ in range(start: 1, end: sf)) {
        var copy = submob.copy();
        copy.fade(darkness: 1);
        newSubmobs.add(copy);
      }
    }

    submobjects = newSubmobs;
  }

  void interpolate(Mobject a, Mobject b, double alpha, {PathFunc? pathFunc}) {
    var _pathFunc = pathFunc ?? straightPath;
    points = _pathFunc(a.points, b.points, alpha);

    interpolateColor(a, b, alpha);
  }

  void interpolateColor(Mobject a, Mobject b, double alpha) {
    //* To implement in subclasses
  }

  void pointwiseBecomePartial(Mobject mob, double a, double b) {
    //* To implement in subclasses
  }

  void becomePartial(Mobject mob, double a, double b) {
    //* To implement in subclasses
  }

  void become(Mobject mob, {bool copySubmobjects = true}) {
    alignData(mob);

    for (var sm in IterableZip([getFamily(), mob.getFamily()])) {
      var sm1 = sm[0];
      var sm2 = sm[1];

      sm1.points = [...sm2.points];
      sm1.interpolateColor(sm1, sm2, 1);
    }
  }

  void throwErrorIfNoPoints(String? method) {
    if (hasPoints()) {
      return;
    }

    if (method == null) {
      throw "The mobject doesn't have any points";
    } else {
      throw "Cannot call Mobject.$method , the mobject doesn't have any points";
    }
  }

  bool isInside(Vector3 pt, {double buff = SMALL_BUFFER}) {
    return pt.x >= getLeft().x - buff &&
        pt.x <= getRight().x + buff &&
        pt.y >= getBottom().y - buff &&
        pt.y <= getTop().y + buff;
  }
}

class Group extends Mobject {
  Group([List<Mobject> mobjects = const []]) : super() {
    add(mobjects);
  }

  @override
  Group copy() => Group.copyFrom(this);

  Group.copyFrom(Group mob) : super.copyFrom(mob);
}
