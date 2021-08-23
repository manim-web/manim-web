library mobjects.vectorized_mobject;

import 'dart:core';
import 'dart:math';

import 'package:collection/collection.dart';
import 'package:tuple/tuple.dart';

import 'package:manim_web/constants.dart';
import 'package:manim_web/util/array.dart';
import 'package:manim_web/util/bezier.dart';
import 'package:manim_web/util/color.dart';
import 'package:manim_web/util/space_ops.dart';
import 'package:manim_web/util/vector.dart';
import 'package:manim_web/mobject/types/mobject.dart';

typedef BezierTuple = Tuple4<Vector3, Vector3, Vector3, Vector3>;
typedef SubPath = List<Vector3>;

class VMobject extends Mobject {
  double strokeWidth = DEFAULT_STROKE_WIDTH;
  double backgroundStrokeWidth = 0;
  bool closeNewPoints = false;
  double preFunctionHandleToAnchorScaleFactor = 0.01;
  bool makeSmoothAfterApplyingFunctions = false;
  double toleranceForPointEquality = 1e-6;

  int nPointsPerCurve = 4;

  List<Color>? fillColors;
  List<Color>? strokeColors;
  List<Color>? backgroundStrokeColors;

  VMobject({Color color = WHITE}) : super(color: color);

  VMobject.copyFrom(VMobject vmob)
      : fillColors = [...vmob.fillColors?.map((c) => c.copy()) ?? []],
        strokeColors = [...vmob.strokeColors?.map((c) => c.copy()) ?? []],
        backgroundStrokeColors = [
          ...vmob.backgroundStrokeColors?.map((c) => c.copy()) ?? []
        ],
        strokeWidth = vmob.strokeWidth,
        backgroundStrokeWidth = vmob.backgroundStrokeWidth,
        closeNewPoints = vmob.closeNewPoints,
        preFunctionHandleToAnchorScaleFactor =
            vmob.preFunctionHandleToAnchorScaleFactor,
        makeSmoothAfterApplyingFunctions =
            vmob.makeSmoothAfterApplyingFunctions,
        toleranceForPointEquality = vmob.toleranceForPointEquality,
        nPointsPerCurve = vmob.nPointsPerCurve,
        super.copyFrom(vmob);

  @override
  VMobject copy() => VMobject.copyFrom(this);

  @override
  Mobject createGroup<MobjectType extends Mobject>(List<MobjectType> mobs) {
    if (mobs.every((element) => element is VMobject)) {
      return VGroup(mobs.cast<VMobject>());
    } else {
      return super.createGroup(mobs);
    }
  }

  @override
  void initColors() {
    setFill(colors: fillColors ?? [color]);

    setStroke(
      colors: strokeColors ?? [color],
      width: strokeWidth,
    );

    setBackgroundStroke(
      colors: backgroundStrokeColors,
      width: backgroundStrokeWidth,
    );
  }

  void setFill({Color? color, List<Color>? colors, bool family = true}) {
    // if both color and colors are set, append color to colors list
    colors = [if (colors != null) ...colors, if (color != null) color];

    if (family) {
      for (var mob in getVectorizedFamily()) {
        mob.setFill(colors: colors, family: false);
      }
    }

    if (colors.isNotEmpty) {
      fillColors ??= colors;

      if (fillColors!.length < colors.length) {
        fillColors = stretchListToLength(fillColors!, colors.length);
      } else if (colors.length < fillColors!.length) {
        fillColors = stretchListToLength(colors, fillColors!.length);
      }

      fillColors = [for (var i in range(end: fillColors!.length)) colors[i]];
    }
  }

  void setStroke(
      {Color? color,
      List<Color>? colors,
      double? width,
      bool background = false,
      bool family = true}) {
    // if both color and colors are set, append color to colors list
    colors = [if (colors != null) ...colors, if (color != null) color];

    if (family) {
      for (var mob in getVectorizedFamily()) {
        mob.setStroke(
            colors: colors,
            width: width,
            background: background,
            family: false);
      }
    }

    if (colors.isNotEmpty) {
      if (background) {
        backgroundStrokeColors ??= colors;

        if (backgroundStrokeColors!.length < colors.length) {
          backgroundStrokeColors =
              stretchListToLength(backgroundStrokeColors!, colors.length);
        } else if (colors.length < backgroundStrokeColors!.length) {
          backgroundStrokeColors =
              stretchListToLength(colors, backgroundStrokeColors!.length);
        }

        strokeColors = [
          for (var i in range(end: strokeColors!.length)) colors[i]
        ];
      } else {
        strokeColors ??= colors;

        if (strokeColors!.length < colors.length) {
          strokeColors = stretchListToLength(strokeColors!, colors.length);
        } else if (colors.length < strokeColors!.length) {
          strokeColors = stretchListToLength(colors, strokeColors!.length);
        }

        strokeColors = [
          for (var i in range(end: strokeColors!.length)) colors[i]
        ];
      }
    }

    if (width != null) {
      if (background) {
        backgroundStrokeWidth = width;
      } else {
        strokeWidth = width;
      }
    }
  }

  void setBackgroundStroke(
      {Color? color, List<Color>? colors, double? width, bool family = true}) {
    return setStroke(
        color: color,
        colors: colors,
        width: width,
        family: family,
        background: true);
  }

  void setStyleFromVMobjectStyle(VMobjectStyle style, {bool family = true}) {
    return setStyle(
        fillColors: style.fillColors,
        strokeColors: style.strokeColors,
        strokeWidth: style.strokeWidth,
        backgroundStrokeColors: style.backgroundStrokeColors,
        backgroundStrokeWidth: style.backgroundStrokeWidth,
        family: family);
  }

  void setStyle(
      {Color? fillColor,
      List<Color>? fillColors,
      Color? strokeColor,
      List<Color>? strokeColors,
      double? strokeWidth,
      Color? backgroundStrokeColor,
      List<Color>? backgroundStrokeColors,
      double? backgroundStrokeWidth,
      bool family = true}) {
    setFill(
      color: fillColor,
      colors: fillColors,
      family: family,
    );

    setStroke(
        color: strokeColor,
        colors: strokeColors,
        width: strokeWidth,
        background: false,
        family: family);

    setBackgroundStroke(
        color: backgroundStrokeColor,
        colors: backgroundStrokeColors,
        width: backgroundStrokeWidth,
        family: family);
  }

  @override
  Color getColor({bool stroke = false, bool backgroundStroke = false}) {
    if (stroke || backgroundStroke) {
      return getStrokeColor(background: backgroundStroke);
    } else {
      return getFillColor();
    }
  }

  @override
  void setColor({required Color color, bool family = true}) {
    setFill(color: color, family: family);
    setStroke(color: color, family: family);
    super.setColor(color: color, family: family);
  }

  VMobjectStyle getStyle() {
    return VMobjectStyle(
      fillColors: getFillColors(),
      strokeColors: getStrokeColors(),
      strokeWidth: getStrokeWidth(),
      backgroundStrokeColors: getStrokeColors(background: true),
      backgroundStrokeWidth: getStrokeWidth(background: true),
    );
  }

  void matchStyle(VMobject vmob, {bool family = true}) {
    setStyleFromVMobjectStyle(vmob.getStyle(), family: false);

    if (family) {
      var submobs1 = submobjects;
      var submobs2 = vmob.submobjects;

      if (submobs1.isEmpty) {
        return;
      } else if (submobs2.isEmpty) {
        submobs2 = [vmob];
      }

      submobs1.removeWhere((element) => element is! VMobject);
      submobs2.removeWhere((element) => element is! VMobject);

      for (var sm12 in IterableZip(
          makeEven(submobs1, submobs2).toList().cast<List<VMobject>>())) {
        sm12[0].matchStyle(sm12[1], family: true);
      }
    }
  }

  @override
  void fade({double darkness = 0.5, bool family = true}) {
    var factor = 1 - darkness;

    setFill(colors: [
      for (var color in getFillColors())
        color.withTransparency(color.a * factor)
    ], family: true);
    setStroke(colors: [
      for (var color in getStrokeColors())
        color.withTransparency(color.a * factor)
    ], family: true);
    setBackgroundStroke(colors: [
      for (var color in getStrokeColors(background: true))
        color.withTransparency(color.a * factor)
    ], family: true);

    super.fade(darkness: darkness, family: family);
  }

  Color getFillColor() {
    return getFillColors()[0];
  }

  List<Color> getFillColors() => fillColors ?? [TRANSPARENT];

  Color getStrokeColor({bool background = false}) {
    return getStrokeColors(background: background).first;
  }

  double getStrokeWidth({bool background = false}) {
    return (background ? backgroundStrokeWidth : strokeWidth);
  }

  List<Color> getStrokeColors({bool background = false}) {
    var colors = background ? backgroundStrokeColors : strokeColors;

    if (colors == null || colors.isEmpty) {
      colors = [TRANSPARENT];
    }

    return colors;
  }

  Tuple2<Vector3, Vector3> getGradientStartAndEndPoints() {
    var direction = RIGHT;
    var c = getCenter();

    var bases = Array(values: [
      for (var vec in [RIGHT, UP, OUT]) (getEdgeCenter(vec) - c).toList()
    ]).T;

    var offset = direction.matMul(bases);
    return Tuple2(c - offset, c + offset);
  }

  void setPoints(List<Vector3> points) {
    this.points = points;
  }

  List<Vector3> getPoints() {
    return [...points];
  }

  void clearPoints() {
    points = [];
  }

  void appendPoints(List<Vector3> pts) {
    points.addAll(pts);
  }

  void setAnchorsAndHandles(List<Vector3> anchor1, List<Vector3> handle1,
      List<Vector3> handle2, List<Vector3> anchor2) {
    var nppc = nPointsPerCurve; // 4
    var totalLength = nppc * anchor1.length;
    points = [for (var _ in range(end: totalLength)) ORIGIN];
    var arrays = [anchor1, handle1, handle2, anchor2];

    for (var i in range(end: nppc)) {
      var vec = arrays[i];
      var indices = range(start: i, end: points.length, step: nppc);
      for (var kj in enumerate(indices)) {
        var k = kj.item1; // index in "indices" list
        var j = kj.item2; // value in "indices" list
        points[j] = vec[k % vec.length];
      }
    }
  }

  void startNewPath(Vector3 pt) {
    return appendPoints([pt]);
  }

  void addCubicBezierCurve(
      Vector3 anchor1, Vector3 handle1, Vector3 handle2, Vector3 anchor2) {
    return appendPoints([anchor1, handle1, handle2, anchor2]);
  }

  void addCubicBezierCurveTo(Vector3 handle1, Vector3 handle2, Vector3 anchor) {
    throwErrorIfNoPoints('addCubicBezierCurveTo');

    if (hasNewPathStarted()) {
      appendPoints([handle1, handle2, anchor]);
    } else {
      appendPoints([getLastPoint(), handle1, handle2, anchor]);
    }
  }

  void addLineTo(Vector3 pt) {
    var nppc = nPointsPerCurve; // 4

    var data = [
      for (var alpha in linspace(start: 0, end: 1, count: nppc).flat())
        interpolateValue(getLastPoint(), pt, alpha)
    ];

    return addCubicBezierCurveTo(
      data[1],
      data[2],
      data[3],
    );
  }

  //* if only anchorOrHandle is set, this is the new anchor
  //* if both anchorOrHandle and maybeAnchor are set, the first argument is the handle and the other is the anchor
  void addSmoothCurveTo(Vector3 anchorOrHandle, [Vector3? maybeAnchor]) {
    var handle2 = maybeAnchor == null ? null : anchorOrHandle;
    var anchor = maybeAnchor ?? anchorOrHandle;

    if (hasNewPathStarted()) {
      addLineTo(anchor);
    } else {
      throwErrorIfNoPoints('addSmoothCurveTo');
      var lastH2 = points[points.length - 2];
      var lastA2 = points[points.length - 1];
      var lastTangent = lastA2 - lastH2;
      var handle1 = lastA2 + lastTangent;

      if (handle2 == null) {
        var toAnchorVec = anchor - lastA2;
        var tangent = lastTangent.rotate(PI, axis: toAnchorVec);
        handle2 = anchor - tangent;
      }

      appendPoints([lastH2, handle1, handle2, anchor]);
    }
  }

  void addQuadraticBezierCurveTo(Vector3 handle, Vector3 anchor) {
    addCubicBezierCurveTo(
      handle * (2 / 3) + getLastPoint() * (1 / 3),
      handle * (2 / 3) + anchor * (1 / 3),
      anchor,
    );
  }

  void closePath() {
    if (!isClosed()) {
      addLineTo(getSubpaths().last[0]);
    }
  }

  bool hasNewPathStarted() => getNumPoints() % nPointsPerCurve == 1;
  Vector3 getLastPoint() => points.last;

  bool isClosed() => considerPointsEquals(points.first, points.last);

  void addPointsAsCorners(List<Vector3> points) {
    for (var pt in points) {
      addLineTo(pt);
    }
  }

  void setPointsAsCorners(List<Vector3> points) {
    var alphas =
        linspace(start: 0, end: 1, count: nPointsPerCurve).getColumn(0);

    var ptsWithoutFirst = Array.fromVectorList(withoutFirst(points));

    var ptsWithoutLast = Array.fromVectorList(withoutLast(points));

    var anchorsAndHandlesArrays = [
      for (var alpha in alphas)
        interpolateValue<Array>(ptsWithoutLast, ptsWithoutFirst, alpha)
    ];

    var anchorsAndHandlesVectorLists = [
      for (var arr in anchorsAndHandlesArrays)
        [for (var vec in arr.values) Vector3(vec[0], vec[1], vec[2])]
    ];

    setAnchorsAndHandles(
      anchorsAndHandlesVectorLists[0],
      anchorsAndHandlesVectorLists[1],
      anchorsAndHandlesVectorLists[2],
      anchorsAndHandlesVectorLists[3],
    );
  }

  void setPointsSmoothly(List<Vector3> points) {
    setPointsAsCorners(points);
    makeSmooth();
  }

  void changeAnchorMode(String mode) {
    assert(mode == 'jagged' || mode == 'smooth');
    var nppc = nPointsPerCurve;

    for (var submob in getVectorizedFamily()) {
      var subpaths = submob.getSubpaths();
      submob.clearPoints();

      for (var subpath in subpaths) {
        var anchors = [
          ...subpath.whereIndexed((index, element) => index % nppc == 0),
          subpath.last
        ];

        List<Vector3> h1, h2;

        if (mode == 'smooth') {
          var handles = getSmoothHandlePoints(anchors);
          h1 = handles.item1;
          h2 = handles.item2;
        } else {
          // mode == 'jagged'

          var a1 = withoutLast(anchors);
          var a2 = withoutFirst(anchors);

          h1 = [
            for (var v in IterableZip([a1, a2]))
              interpolateValue(v[0], v[1], 1.0 / 3.0)
          ];

          h2 = [
            for (var v in IterableZip([a1, a2]))
              interpolateValue(v[0], v[1], 2.0 / 3.0)
          ];
        }

        var newSubpath = [
          for (var iPt in enumerate(subpath))
            if (iPt.item1 % nppc == 1)
              h1[iPt.item1]
            else if (iPt.item1 % nppc == 2)
              h2[iPt.item1]
            else
              iPt.item2
        ];

        appendPoints(newSubpath);
      }
    }
  }

  void makeSmooth() => changeAnchorMode('smooth');
  void makeJagged() => changeAnchorMode('jagged');

  void addSubpath(List<Vector3> points) => appendPoints(points);
  void appendVectorizedMobject(VMobject mob) {
    if (hasNewPathStarted()) {
      points.removeLast();
    }

    appendPoints(mob.getPoints());
  }

  @override
  void applyFunction(Vector3 Function(Vector3) func) {
    var factor = preFunctionHandleToAnchorScaleFactor;

    scaleHandleToAnchorDistances(factor);

    super.applyOverPoints(func: func, aboutPoint: ORIGIN, aboutEdge: ORIGIN);

    scaleHandleToAnchorDistances(1.0 / factor);

    if (makeSmoothAfterApplyingFunctions) {
      makeSmooth();
    }
  }

  void scaleHandleToAnchorDistances(double factor) {
    for (var submob in getVectorizedFamily()) {
      if (submob.getNumPoints() < nPointsPerCurve) {
        continue;
      }

      var anchorsAndHandles = submob.getAnchorsAndHandles();
      var a1 =
          Array(values: [for (var vec in anchorsAndHandles[0]) vec.toList()]);
      var h1 =
          Array(values: [for (var vec in anchorsAndHandles[1]) vec.toList()]);
      var h2 =
          Array(values: [for (var vec in anchorsAndHandles[2]) vec.toList()]);
      var a2 =
          Array(values: [for (var vec in anchorsAndHandles[3]) vec.toList()]);

      var a1ToH1 = h1 - a1;
      var a2ToH2 = h2 - a2;

      var newH1 = [
        for (var row
            in (a1 + Array.fromValue(factor, shape: a1ToH1.shape) * a1ToH1)
                .values)
          Vector3(row[0], row[1], row[2])
      ];
      var newH2 = [
        for (var row
            in (a2 + Array.fromValue(factor, shape: a2ToH2.shape) * a2ToH2)
                .values)
          Vector3(row[0], row[1], row[2])
      ];

      submob.setAnchorsAndHandles(
          anchorsAndHandles[0], newH1, newH2, anchorsAndHandles[3]);
    }
  }

  bool considerPointsEquals2D(Vector3 a, Vector3 b) {
    var atol = toleranceForPointEquality;
    var rtol = 1.0e-5;

    if ((a.x - b.x).abs() > atol + rtol * b.x.abs()) {
      return false;
    }

    if ((a.y - b.y).abs() > atol + rtol * b.y.abs()) {
      return false;
    }

    return true;
  }

  bool considerPointsEquals(Vector3 a, Vector3 b) {
    var atol = toleranceForPointEquality;
    var rtol = 1.0e-5;

    if (!considerPointsEquals2D(a, b)) {
      return false;
    }

    if ((a.z - b.z).abs() > atol + rtol * b.z.abs()) {
      return false;
    }

    return true;
  }

  List<BezierTuple> getCubicBezierTuplesFromPoints(List<Vector3> points) =>
      genCubicBezierTuplesFromPoints(points);

  List<BezierTuple> genCubicBezierTuplesFromPoints(List<Vector3> points) {
    var nppc = nPointsPerCurve;
    var remainder = points.length % nppc;
    points = points
        .whereIndexed((index, element) => index < points.length - remainder)
        .toList();
    return [
      for (var i in range(end: points.length, step: 4))
        Tuple4(points[i + 0], points[i + 1], points[i + 2], points[i + 3])
    ];
  }

  List<BezierTuple> getCubicBezierTuples() =>
      getCubicBezierTuplesFromPoints(getPoints());

  List<SubPath> _getSubpathsFromPoints(
      List<Vector3> points, bool Function(int) filterFunc) {
    var nppc = nPointsPerCurve;

    var splitIndicesWithoutFirst = [
      ...range(start: nppc, end: points.length, step: nppc).where(filterFunc),
      points.length
    ];

    var splitIndices = [0, ...splitIndicesWithoutFirst];

    return [
      for (var i in IterableZip([splitIndices, splitIndicesWithoutFirst]))
        if (i[1] - i[0] >= nppc) points.getRange(i[0], i[1]).toList()
    ];
  }

  List<SubPath> getSubpathsFromPoints(List<Vector3> points) =>
      _getSubpathsFromPoints(
          points, (n) => !considerPointsEquals(points[n - 1], points[n]));

  List<SubPath> getSubpathsFromPoints2D(List<Vector3> points) =>
      _getSubpathsFromPoints(
          points, (n) => !considerPointsEquals2D(points[n - 1], points[n]));

  List<SubPath> getSubpaths() => getSubpathsFromPoints(getPoints());

  int getNumCurves() => getNumPoints() ~/ nPointsPerCurve;

  List<Vector3> getNthCurvePoints(int n) {
    assert(n < getNumCurves());
    var nppc = nPointsPerCurve;
    return points.getRange(nppc * n, nppc * (n + 1)).toList();
  }

  Vector3 Function(double) getNthCurveFunction(int n) =>
      bezier(getNthCurvePoints(n));

  @override
  Vector3 pointFromProportion(double alpha) {
    var numCurves = getNumCurves();
    var nRes = integerInterpolate(0, numCurves, alpha);
    var n = nRes.item1;
    var residue = nRes.item2;
    var curve = getNthCurveFunction(n);
    return curve(residue);
  }

  List<List<Vector3>> getAnchorsAndHandles() {
    var nppc = nPointsPerCurve;
    return [
      for (var i in range(end: nppc)) _getEveryNthVectorInAnchorsAndHandles(i)
    ];
  }

  List<Vector3> _getEveryNthVectorInAnchorsAndHandles(int n) =>
      points.whereIndexed((index, e) => index % nPointsPerCurve == n).toList();

  List<Vector3> getStartAnchors() => _getEveryNthVectorInAnchorsAndHandles(0);
  List<Vector3> getEndAnchors() =>
      _getEveryNthVectorInAnchorsAndHandles(nPointsPerCurve - 1);

  List<Vector3> getAnchors() {
    if (points.length == 1) {
      return points;
    }

    return IterableZip([getStartAnchors(), getEndAnchors()])
        .toList()
        .flattened
        .toList();
  }

  @override
  List<Vector3> getPointsDefiningBoundary() {
    return [for (var mob in getVectorizedFamily()) ...mob.getAnchors()];
  }

  double getArcLength({int? numSamplePoints}) {
    numSamplePoints ??= 4 * getNumCurves() + 1;

    var points = [
      for (var alpha
          in linspace(start: 0, end: 1, count: numSamplePoints).getColumn(0))
        pointFromProportion(alpha)
    ];

    var diffs = [
      for (var i in range(end: numSamplePoints - 1)) points[i + 1] - points[i]
    ];

    var norms = diffs.map((v) => v.norm()).toList();
    return sum(norms);
  }

  @override
  void alignPoints(Mobject mob) {
    assert(mob is VMobject);
    var vmob = mob as VMobject;

    alignColors(vmob);

    if (getNumPoints() == vmob.getNumPoints()) {
      return;
    }

    for (var mob in [this, vmob]) {
      if (mob.hasNoPoints()) {
        mob.startNewPath(mob.getCenter());
      }

      if (mob.hasNewPathStarted()) {
        mob.addLineTo(mob.getLastPoint());
      }
    }

    var subpaths1 = getSubpaths();
    var subpaths2 = vmob.getSubpaths();
    var numSubpaths = max(subpaths1.length, subpaths2.length);

    var newPath1 = <Vector3>[];
    var newPath2 = <Vector3>[];
    var nppc = nPointsPerCurve;

    SubPath getNthSubpath(List<SubPath> pathlist, n) {
      if (n >= pathlist.length) {
        return [for (var _ in range(end: nppc)) pathlist.last.last];
      }

      return pathlist[n];
    }

    for (var n in range(end: numSubpaths)) {
      var sp1 = getNthSubpath(subpaths1, n);
      var sp2 = getNthSubpath(subpaths2, n);

      var diff1 = max(0, (sp2.length - sp1.length) ~/ nppc);
      var diff2 = max(0, (sp1.length - sp2.length) ~/ nppc);

      sp1 = insertNCurvesToPointList(diff1, sp1);
      sp2 = insertNCurvesToPointList(diff2, sp2);

      newPath1.addAll(sp1);
      newPath2.addAll(sp2);
    }

    setPoints(newPath1);
    vmob.setPoints(newPath2);
  }

  void insertNCurves(int n) {
    Vector3? newPathPoint;

    if (hasNewPathStarted()) {
      newPathPoint = getLastPoint();
    }

    var newPoints = insertNCurvesToPointList(n, getPoints());

    setPoints(newPoints);

    if (newPathPoint != null) {
      appendPoints([newPathPoint]);
    }
  }

  List<Vector3> insertNCurvesToPointList(int n, List<Vector3> points) {
    if (points.length == 1) {
      return [for (var _ in range(end: nPointsPerCurve * n)) ...points];
    }

    var bezierQuads = getCubicBezierTuplesFromPoints(points);
    var currentNum = bezierQuads.length;
    var targetNum = currentNum + n;

    var repeatIndices = [
      for (var i in range(end: targetNum)) i * currentNum ~/ targetNum
    ];

    var splitFactors = [
      for (var i in range(end: currentNum))
        sum([for (var j in repeatIndices) i == j ? 1 : 0])
    ];

    var newPoints = <Vector3>[];

    for (var zipData in IterableZip([bezierQuads, splitFactors])) {
      var quad = zipData[0] as BezierTuple;
      var sf = zipData[1] as int;

      var alphas = linspace(start: 0, end: 1, count: sf + 1).getColumn(0);
      for (var a in IterableZip([alphas, withoutFirst(alphas)])) {
        newPoints.addAll(
            partialBezierPoints(quad.toList().cast<Vector3>(), a[0], a[1]));
      }
    }

    return newPoints;
  }

  void alignColors(VMobject vmob) {
    List<Color> getAttr(String attr, VMobject vmob) {
      switch (attr) {
        case 'fillColors':
          return vmob.getFillColors();
        case 'strokeColors':
          return vmob.getStrokeColors();
        case 'backgroundStrokeColors':
          return vmob.getStrokeColors(background: false);
        default:
          throw 'No color list in VMobject with attribute name $attr';
      }
    }

    void setAttr(String attr, VMobject vmob, List<Color> value) {
      switch (attr) {
        case 'fillColors':
          vmob.fillColors = value;
          break;
        case 'strokeColors':
          vmob.strokeColors = value;
          break;
        case 'backgroundStrokeColors':
          vmob.backgroundStrokeColors = value;
          break;
        default:
          throw 'No color list in VMobject with attribute name $attr';
      }
    }

    for (var attr in ['fillColors', 'strokeColors', 'backgroundStrokeColors']) {
      var a1 = getAttr(attr, this);
      var a2 = getAttr(attr, vmob);

      if (a1.length > a2.length) {
        var newA2 = stretchListToLength(a2, a1.length);
        setAttr(attr, vmob, newA2);
      } else if (a2.length > a1.length) {
        var newA1 = stretchListToLength(a1, a2.length);
        setAttr(attr, this, newA1);
      }
    }
  }

  @override
  VectorizedPoint getPointMobject({Vector3? center}) {
    center ??= getCenter();

    var point = VectorizedPoint(location: center);
    point.matchStyle(this);
    return point;
  }

  @override
  void interpolateColor(Mobject _mob1, Mobject _mob2, double alpha) {
    assert(_mob1 is VMobject && _mob2 is Mobject);
    var mob1 = _mob1 as VMobject;
    var mob2 = _mob2 as VMobject;

    fillColors =
        interpolateColorList(mob1.getFillColors(), mob2.getFillColors(), alpha);
    strokeColors = interpolateColorList(
        mob1.getStrokeColors(), mob2.getStrokeColors(), alpha);
    backgroundStrokeColors = interpolateColorList(
        mob1.getStrokeColors(background: true),
        mob2.getStrokeColors(background: true),
        alpha);
    strokeWidth = interpolateValue(mob1.strokeWidth, mob2.strokeWidth, alpha);
    backgroundStrokeWidth = interpolateValue(
        mob1.backgroundStrokeWidth, mob2.backgroundStrokeWidth, alpha);

    var copyColors = (List<Color> colors) => [...colors.map((c) => c.copy())];

    if (alpha == 1.0) {
      fillColors =
          mob2.fillColors != null ? copyColors(mob2.fillColors!) : null;
      strokeColors =
          mob2.strokeColors != null ? copyColors(mob2.strokeColors!) : null;
      backgroundStrokeColors = mob2.backgroundStrokeColors != null
          ? copyColors(mob2.backgroundStrokeColors!)
          : null;
      strokeWidth = mob2.strokeWidth;
      backgroundStrokeWidth = mob2.backgroundStrokeWidth;
    }
  }

  @override
  void pointwiseBecomePartial(Mobject mob, double a, double b) {
    assert(mob is VMobject);
    var vmob = mob as VMobject;

    if (a <= 0 && b >= 1) {
      setPoints(vmob.getPoints());
      return;
    }

    var bezierQuads = mob.getCubicBezierTuples();
    var numCubics = bezierQuads.length;

    var lower = integerInterpolate(0, numCubics, a);
    var upper = integerInterpolate(0, numCubics, b);

    var lowerIndex = lower.item1;
    var lowerResidue = lower.item2;
    var upperIndex = upper.item1;
    var upperResidue = upper.item2;

    clearPoints();

    if (numCubics == 0) {
      return;
    }

    if (lowerIndex == upperIndex) {
      appendPoints(partialBezierPoints(
          bezierQuads[lowerIndex].toList().cast<Vector3>(),
          lowerResidue,
          upperResidue));
    } else {
      appendPoints(partialBezierPoints(
          bezierQuads[lowerIndex].toList().cast<Vector3>(), lowerResidue, 1));

      for (var quad in bezierQuads.getRange(lowerIndex + 1, upperIndex)) {
        appendPoints(quad.toList().cast<Vector3>());
      }

      appendPoints(partialBezierPoints(
          bezierQuads[upperIndex].toList().cast<Vector3>(), 0, upperResidue));
    }
  }

  VMobject getSubcurve(double a, double b) {
    var vmob = copy();
    vmob.pointwiseBecomePartial(this, a, b);
    return vmob;
  }

  List<VMobject> getVectorizedFamily() {
    return [
      for (var mob in getFamily())
        if (mob is VMobject) mob
    ];
  }

  DashedVMobject getDashed(
      {int numDashes = 15, double positiveSpaceRatio = 0.5, Color? color}) {
    // return a dashed version of the vmobject

    return DashedVMobject(this,
        numDashes: numDashes,
        positiveSpaceRatio: positiveSpaceRatio,
        color: color ?? getColor());
  }
}

class VMobjectStyle {
  final List<Color>? fillColors;
  final List<Color>? strokeColors;
  final double strokeWidth;
  final List<Color>? backgroundStrokeColors;
  final double backgroundStrokeWidth;

  const VMobjectStyle({
    required this.fillColors,
    required this.strokeColors,
    required this.strokeWidth,
    required this.backgroundStrokeColors,
    required this.backgroundStrokeWidth,
  });

  VMobjectStyle.copyFrom(VMobjectStyle style)
      : fillColors = style.fillColors != null
            ? [for (var c in style.fillColors!) c.copy()]
            : null,
        strokeColors = style.strokeColors != null
            ? [for (var c in style.strokeColors!) c.copy()]
            : null,
        strokeWidth = style.strokeWidth,
        backgroundStrokeColors = style.backgroundStrokeColors != null
            ? [for (var c in style.backgroundStrokeColors!) c.copy()]
            : null,
        backgroundStrokeWidth = style.backgroundStrokeWidth;

  VMobjectStyle copy() => VMobjectStyle.copyFrom(this);

  VMobjectStyle withChange({
    List<Color>? fillColors,
    List<Color>? strokeColors,
    double? strokeWidth,
    List<Color>? backgroundStrokeColors,
    double? backgroundStrokeWidth,
  }) {
    var _fillColors = fillColors ?? this.fillColors;
    var _strokeColors = strokeColors ?? this.strokeColors;
    var _strokeWidth = strokeWidth ?? this.strokeWidth;
    var _backgroundStrokeColors =
        backgroundStrokeColors ?? this.backgroundStrokeColors;
    var _backgroundStrokeWidth =
        backgroundStrokeWidth ?? this.backgroundStrokeWidth;

    return VMobjectStyle(
      fillColors: _fillColors,
      strokeColors: _strokeColors,
      strokeWidth: _strokeWidth,
      backgroundStrokeColors: _backgroundStrokeColors,
      backgroundStrokeWidth: _backgroundStrokeWidth,
    );
  }
}

class VGroup extends VMobject {
  VGroup([List<VMobject>? mobs]) {
    add(mobs ?? []);
  }

  VGroup.copyFrom(VGroup mob) : super.copyFrom(mob);

  @override
  VGroup copy() => VGroup.copyFrom(this);
}

class VectorizedPoint extends VMobject {
  double artificialWidth;
  double artificialHeight;

  VectorizedPoint({
    Color color = WHITE,
    Vector3 location = ORIGIN,
    double strokeWidth = DEFAULT_STROKE_WIDTH,
    this.artificialWidth = 0.01,
    this.artificialHeight = 0.01,
  }) : super(color: color) {
    setPoints([location]);
  }

  @override
  double getWidth() {
    return artificialWidth;
  }

  @override
  double getHeight() {
    return artificialHeight;
  }

  Vector3 getLocation() {
    return points.first;
  }

  void setLocation(Vector3 pt) {
    setPoints([pt.copy()]);
  }

  VectorizedPoint.copyFrom(VectorizedPoint vpt)
      : artificialHeight = vpt.artificialHeight,
        artificialWidth = vpt.artificialWidth,
        super.copyFrom(vpt);

  @override
  VectorizedPoint copy() => VectorizedPoint.copyFrom(this);
}

class CurvesAsSubmobjects extends VGroup {
  CurvesAsSubmobjects(VMobject vmob) {
    var tuples = vmob.getCubicBezierTuples();

    for (var tuple in tuples) {
      var part = VMobject()
        ..setPoints(tuple.toList().cast<Vector3>())
        ..matchStyle(vmob);
      add([part]);
    }
  }

  CurvesAsSubmobjects.copyFrom(CurvesAsSubmobjects mob) : super.copyFrom(mob);

  @override
  CurvesAsSubmobjects copy() => CurvesAsSubmobjects.copyFrom(this);
}

class DashedVMobject extends VMobject {
  DashedVMobject(
    VMobject vmob, {
    int numDashes = 15,
    double positiveSpaceRatio = 0.5,
    Color color = WHITE,
  }) : super(color: color) {
    if (numDashes > 0) {
      var fullDAlpha = 1 / numDashes;
      var partialDAlpha = fullDAlpha * positiveSpaceRatio;

      var alphas = (linspace(start: 0, end: 1, count: numDashes + 1) / 1 -
              fullDAlpha +
              partialDAlpha)
          .getColumn(0);

      add([
        for (var alpha in alphas) vmob.getSubcurve(alpha, alpha + partialDAlpha)
      ]);
    }

    matchStyle(vmob, family: false);
  }

  DashedVMobject.copyFrom(DashedVMobject mob) : super.copyFrom(mob);

  @override
  DashedVMobject copy() => DashedVMobject.copyFrom(this);
}
