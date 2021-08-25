import 'dart:math';

import 'package:manim_web/src/constants.dart';
import 'package:manim_web/src/util/array.dart';
import 'package:manim_web/src/util/color.dart';
import 'package:manim_web/src/util/math_functions.dart';
import 'package:manim_web/src/util/space_ops.dart';
import 'package:manim_web/src/util/vector.dart';
import 'package:manim_web/src/mobject/types/mobject.dart';
import 'package:manim_web/src/mobject/types/vectorized_mobject.dart';

class TipStyle extends VMobjectStyle {
  TipStyle({
    Color? fillColor,
    Color? strokeColor,
    double strokeWidth = 0,
    Color? backgroundStrokeColor,
    double backgroundStrokeWidth = 0,
  }) : super(
          fillColors: fillColor != null ? [fillColor] : [],
          strokeColors: strokeColor != null ? [strokeColor] : [],
          strokeWidth: strokeWidth,
          backgroundStrokeColors:
              backgroundStrokeColor != null ? [backgroundStrokeColor] : [],
          backgroundStrokeWidth: backgroundStrokeWidth,
        );

  TipStyle.copyFrom(TipStyle style) : super.copyFrom(style);

  @override
  TipStyle copy() => TipStyle.copyFrom(this);

  @override
  TipStyle withChange({
    Color? fillColor,
    Color? strokeColor,
    double? strokeWidth,
    Color? backgroundStrokeColor,
    double? backgroundStrokeWidth,

    // The following arguments aren't actually used
    List<Color>? fillColors,
    List<Color>? strokeColors,
    List<Color>? backgroundStrokeColors,
  }) {
    var _fillColor = fillColor ?? fillColors?.first ?? TRANSPARENT;
    var _strokeColor = strokeColor ?? strokeColors?.first ?? TRANSPARENT;
    var _strokeWidth = strokeWidth ?? this.strokeWidth;
    var _backgroundStrokeColor =
        backgroundStrokeColor ?? backgroundStrokeColors?.first ?? TRANSPARENT;
    var _backgroundStrokeWidth =
        backgroundStrokeWidth ?? this.backgroundStrokeWidth;

    return TipStyle(
      fillColor: _fillColor,
      strokeColor: _strokeColor,
      strokeWidth: _strokeWidth,
      backgroundStrokeColor: _backgroundStrokeColor,
      backgroundStrokeWidth: _backgroundStrokeWidth,
    );
  }
}

enum TipSide { Start, End }

//* NOTE:
//* TIP_AT_START and TIP_AT_END are alias for TipSide.Start and TipSide.End
//* They're are constants defined to be used with optional parameters

class TipableVMobject extends VMobject {
  double tipLength = DEFAULT_ARROW_TIP_LENGTH;
  Vector3 normalVector = OUT;
  TipStyle tipStyle = TipStyle(fillColor: WHITE);

  ArrowTip? startTip;
  ArrowTip? endTip;

  TipableVMobject({Color color = WHITE}) : super() {
    setColor(color: color);
  }

  TipableVMobject.copyFrom(TipableVMobject mob)
      : tipLength = mob.tipLength,
        normalVector = mob.normalVector.copy(),
        tipStyle = mob.tipStyle.copy(),
        startTip = mob.startTip?.copy(),
        endTip = mob.endTip?.copy(),
        super.copyFrom(mob);

  @override
  TipableVMobject copy() => TipableVMobject.copyFrom(this);

  ArrowTip addTip({
    double? tipLength,
    TipSide side = TIP_AT_END,
  }) {
    tipLength ??= getDefaultTipLength();

    var tip = createTip(tipLength: tipLength, side: side);

    resetEndpointsBasedOnTip(
      tip,
      side,
    );

    if (side == TIP_AT_START) {
      startTip = tip;
    } else {
      endTip = tip;
    }

    add([tip]);

    return tip;
  }

  ArrowTip createTip(
      {double tipLength = DEFAULT_ARROW_TIP_LENGTH,
      TipSide side = TIP_AT_END}) {
    var tip = getUnpositionedTip(length: tipLength);
    positionTip(tip: tip, side: side);
    return tip;
  }

  ArrowTip getUnpositionedTip({double? length}) {
    length ??= getDefaultTipLength();

    var color = getColor();
    var style = tipStyle.copy();

    if (style.fillColors?.isEmpty ?? true) {
      style = style.withChange(fillColor: color.copy());
    }

    if (style.strokeColors?.isEmpty ?? true) {
      style = style.withChange(strokeColor: color.copy());
    }

    var tip = ArrowTip(length: length);
    tip.matchStyle(this);
    tip.setStyleFromVMobjectStyle(style);
    return tip;
  }

  void positionTip({required ArrowTip tip, required TipSide side}) {
    var anchor = side == TIP_AT_START ? getStart() : getEnd();
    var handle = side == TIP_AT_START ? getFirstHandle() : getLastHandle();

    tip.rotate(-(handle - anchor).angle() - tip.getAngle() - PI);
    tip.shift(anchor - tip.getTipPoint());
  }

  void resetEndpointsBasedOnTip(
    ArrowTip tip,
    TipSide side,
  ) {
    if (getLength() == 0) {
      return;
    }

    if (side == TIP_AT_START) {
      putStartAndEndOn(
        tip.getBase(),
        getEnd(),
      );
    } else {
      putStartAndEndOn(
        getStart(),
        tip.getBase(),
      );
    }
  }

  //* only if family is set to true (by default it's set to true)
  //* setColor doesn't change the fill color
  //* it set the stroke color of the arc, and the stroke and fill color of the tips

  @override
  void setColor({required Color color, bool family = true}) {
    if (family) {
      setStroke(color: color, family: false);
      setFill(color: TRANSPARENT, family: false);
    }

    super.setColor(color: color, family: family);
  }

  bool hasTip() => hasStartTip() || hasEndTip();
  bool hasStartTip() => startTip != null;
  bool hasEndTip() => endTip != null;

  VGroup popTips() {
    var start = getStart();
    var end = getEnd();

    var result = VGroup();

    if (hasEndTip()) {
      result.add([endTip!]);
      remove([endTip!]);
      endTip = null;
    }

    if (hasStartTip()) {
      result.add([startTip!]);
      remove([startTip!]);
      startTip = null;
    }

    putStartAndEndOn(start, end);
    return result;
  }

  VGroup getTips() {
    var result = VGroup();

    if (hasEndTip()) {
      result.add([endTip!]);
    }

    if (hasStartTip()) {
      result.add([startTip!]);
    }

    return result;
  }

  ArrowTip getTip() {
    var tips = getTips().submobjects;
    if (tips.isEmpty) {
      throw 'Tip not found';
    } else {
      return tips.first as ArrowTip;
    }
  }

  double getDefaultTipLength() => tipLength;
  Vector3 getFirstHandle() => points[1];
  Vector3 getLastHandle() => points[points.length - 2];

  @override
  Vector3 getEnd() => hasEndTip() ? endTip!.getStart() : super.getEnd();
  @override
  Vector3 getStart() => hasStartTip() ? startTip!.getStart() : super.getStart();

  double getLength() => (getStart() - getEnd()).norm();

  void refreshTips() {
    if (hasStartTip()) {
      // get the original tip
      var originalTip = startTip!;
      // get a new tip
      addTip(side: TIP_AT_START);
      var updatedTip = startTip!;
      // replace the original tip's points with those from the updated tip
      originalTip.points = [for (var pt in updatedTip.points) pt.copy()];
      // remove the updated tip and restore the original (but still updated) tip
      remove([originalTip]);
      startTip = originalTip;
      // the original tip is still in submobjects
    }

    if (hasEndTip()) {
      // get the original tip
      var originalTip = endTip!;
      // get a new tip
      addTip(side: TIP_AT_END);
      var updatedTip = endTip!;
      // replace the original tip's points with those from the updated tip
      originalTip.points = [for (var pt in updatedTip.points) pt.copy()];
      // remove the updated tip and restore the original (but still updated) tip
      remove([originalTip]);
      endTip = originalTip;
      // the original tip is still in submobjects
    }
  }
}

class Arc extends TipableVMobject {
  double startAngle;
  double angle;
  double radius;
  Vector3 arcCenter;
  int numComponents;

  Arc(
      {this.startAngle = 0,
      this.angle = TAU / 4,
      this.radius = 1,
      this.arcCenter = ORIGIN,
      this.numComponents = 9,
      Color color = WHITE})
      : super(color: color);

  Arc.copyFrom(Arc mob)
      : startAngle = mob.startAngle,
        angle = mob.angle,
        radius = mob.radius,
        arcCenter = mob.arcCenter,
        numComponents = mob.numComponents,
        super.copyFrom(mob);

  @override
  Arc copy() => Arc.copyFrom(this);

  @override
  void generatePoints() {
    setPrepositionedPoints();
    scaleUniformly(radius, aboutPoint: ORIGIN);
    shift(arcCenter);
  }

  void setPrepositionedPoints() {
    var anchors = [
      for (var a in linspace(
              start: startAngle, end: angle + startAngle, count: numComponents)
          .getColumn(0))
        RIGHT * cos(a) + UP * sin(a)
    ];

    var dTheta = angle / (numComponents - 1);
    var tangentVectors = [for (var a in anchors) Vector3(-a.y, a.x, a.z)];

    var handles1 = [
      for (var i in range(end: anchors.length - 1))
        anchors[i] + tangentVectors[i] * (dTheta / 3)
    ];

    var handles2 = [
      for (var i in range(start: 1, end: anchors.length))
        anchors[i] - tangentVectors[i] * (dTheta / 3)
    ];

    setAnchorsAndHandles(
        withoutLast(anchors), handles1, handles2, withoutFirst(anchors));
  }

  Vector3 getArcCenter() {
    var first4Points = points.take(4).toList();

    var a1 = first4Points[0];
    var h1 = first4Points[1];
    var h2 = first4Points[2];
    var a2 = first4Points[3];

    var t1 = h1 - a1;
    var t2 = h2 - a2;

    var n1 = t1.rotate(TAU / 4);
    var n2 = t2.rotate(TAU / 4);

    try {
      return lineIntersection(
        [a1, a1 + n1],
        [a2, a2 + n2],
      );
    } on Exception {
      print('Can\'t find Arc center, using ORIGIN instead');
      return ORIGIN;
    }
  }

  void moveArcCenterTo(Vector3 pt) => shift(pt - getArcCenter());
  void stopAngle() => (points.last - getArcCenter()).angle() % TAU;
}

class ArcBetweenPoints extends Arc {
  ArcBetweenPoints({
    required Vector3 start,
    required Vector3 end,
    double startAngle = 0,
    double angle = TAU / 4,
    double radius = 1,
    Vector3 arcCenter = ORIGIN,
    int numComponents = 9,
    Color color = WHITE,
  }) : super(
          color: color,
          startAngle: startAngle,
          angle: angle,
          radius: radius,
          arcCenter: arcCenter,
          numComponents: numComponents,
        ) {
    if (angle == 0) {
      setPointsAsCorners([LEFT, RIGHT]);
    }

    putStartAndEndOn(start, end);
  }

  ArcBetweenPoints.copyFrom(ArcBetweenPoints mob) : super.copyFrom(mob);

  @override
  ArcBetweenPoints copy() => ArcBetweenPoints.copyFrom(this);
}

class CurvedArrow extends ArcBetweenPoints {
  CurvedArrow({
    required Vector3 start,
    required Vector3 end,
    double startAngle = 0,
    double angle = TAU / 4,
    double radius = 1,
    Vector3 arcCenter = ORIGIN,
    bool anchorsSpanFullRange = true,
    int numComponents = 9,
    Color color = WHITE,
  }) : super(
          start: start,
          end: end,
          color: color,
          startAngle: startAngle,
          angle: angle,
          radius: radius,
          arcCenter: arcCenter,
          numComponents: numComponents,
        ) {
    addTip();
  }

  CurvedArrow.copyFrom(CurvedArrow mob) : super.copyFrom(mob);

  @override
  CurvedArrow copy() => CurvedArrow.copyFrom(this);
}

class CurvedDoubleArrow extends ArcBetweenPoints {
  CurvedDoubleArrow({
    required Vector3 start,
    required Vector3 end,
    double startAngle = 0,
    double angle = TAU / 4,
    double radius = 1,
    Vector3 arcCenter = ORIGIN,
    int numComponents = 9,
    Color color = WHITE,
  }) : super(
          start: start,
          end: end,
          color: color,
          startAngle: startAngle,
          angle: angle,
          radius: radius,
          arcCenter: arcCenter,
          numComponents: numComponents,
        ) {
    addTip(side: TIP_AT_START);
    addTip(side: TIP_AT_END);
  }

  CurvedDoubleArrow.copyFrom(CurvedDoubleArrow mob) : super.copyFrom(mob);

  @override
  CurvedDoubleArrow copy() => CurvedDoubleArrow.copyFrom(this);
}

class Circle extends Arc {
  @override
  bool closeNewPoints = true;

  Circle({
    double radius = 1,
    Vector3 arcCenter = ORIGIN,
    Color color = WHITE,
  }) : super(
          startAngle: 0,
          angle: TAU,
          radius: radius,
          arcCenter: arcCenter,
          color: color,
        );

  @override
  void surround(Mobject mob,
      {int dimToMatch = 0,
      bool stretch = false,
      double? buffer,
      double bufferFactor = 1.2}) {
    replace(mob, dimToMatch: dimToMatch, stretch: stretch);

    if (buffer != null) {
      print(
          'the argument buffer when calling ${getName()}.surround is useless');
    }

    var w = getWidth();
    var h = getHeight();
    setWidth(sqrt(w * w + h * h));
    scaleUniformly(bufferFactor);
  }

  Vector3 pointAtAngle(double angle) {
    var startAngle = (points.first - getCenter()).angle();
    return pointFromProportion((angle - startAngle) / TAU);
  }

  Circle.copyFrom(Circle mob) : super.copyFrom(mob);

  @override
  Circle copy() => Circle.copyFrom(this);
}

class Dot extends Circle {
  Dot(
    Vector3 pt, {
    double radius = DEFAULT_DOT_RADIUS,
    Color color = WHITE,
  }) : super(radius: radius, arcCenter: pt, color: color);

  Dot.copyFrom(Dot mob) : super.copyFrom(mob);

  @override
  Dot copy() => Dot.copyFrom(this);
}

class SmallDot extends Dot {
  SmallDot(
    Vector3 pt, {
    double radius = DEFAULT_SMALL_DOT_RADIUS,
    Color color = WHITE,
  }) : super(pt, radius: radius, color: color);

  SmallDot.copyFrom(SmallDot mob) : super.copyFrom(mob);

  @override
  SmallDot copy() => SmallDot.copyFrom(this);
}

class Ellipse extends Circle {
  Ellipse({
    double width = 2,
    double height = 1,
    Color color = WHITE,
  }) : super(color: color) {
    setWidth(width, stretch: true);
    setHeight(height, stretch: true);
  }

  Ellipse.copyFrom(Ellipse mob) : super.copyFrom(mob);

  @override
  Ellipse copy() => Ellipse.copyFrom(this);
}

class AnnularSector extends Arc {
  double innerRadius;
  double outerRadius;

  AnnularSector(
      {double startAngle = 0,
      double angle = TAU / 4,
      this.outerRadius = 2,
      this.innerRadius = 1,
      Vector3 arcCenter = ORIGIN,
      Color color = WHITE})
      : super(
          startAngle: startAngle,
          angle: angle,
          radius: outerRadius,
          arcCenter: arcCenter,
          color: color,
        );

  @override
  void generatePoints() {
    var innerArc = Arc(
      startAngle: startAngle,
      angle: angle,
      radius: innerRadius,
      arcCenter: arcCenter,
    );
    var outerArc = Arc(
      startAngle: startAngle,
      angle: angle,
      radius: outerRadius,
      arcCenter: arcCenter,
    );

    outerArc.reversePoints();
    appendPoints(innerArc.points);
    addLineTo(outerArc.points.first);
    appendPoints(outerArc.points);
    addLineTo(innerArc.points.first);
  }

  AnnularSector.copyFrom(AnnularSector mob)
      : innerRadius = mob.innerRadius,
        outerRadius = mob.outerRadius,
        super.copyFrom(mob);

  @override
  AnnularSector copy() => AnnularSector.copyFrom(this);
}

class Sector extends AnnularSector {
  Sector({
    double startAngle = 0,
    double angle = TAU / 4,
    double outerRadius = 1,
    double innerRadius = 0,
    Vector3 arcCenter = ORIGIN,
    Color color = WHITE,
  }) : super(
          startAngle: startAngle,
          angle: angle,
          arcCenter: arcCenter,
          color: color,
          outerRadius: outerRadius,
          innerRadius: innerRadius,
        );

  Sector.copyFrom(Sector mob) : super.copyFrom(mob);

  @override
  Sector copy() => Sector.copyFrom(this);
}

class Annulus extends Circle {
  double innerRadius;
  double outerRadius;

  Annulus({
    this.innerRadius = 1,
    this.outerRadius = 2,
    Color color = WHITE,
  }) : super(color: color);

  @override
  void generatePoints() {
    radius = outerRadius;
    var outerCircle = Circle(radius: outerRadius);
    var innerCircle = Circle(radius: innerRadius)..reversePoints();

    appendPoints(outerCircle.points);
    appendPoints(innerCircle.points);
    shift(arcCenter);
  }

  Annulus.copyFrom(Annulus mob)
      : innerRadius = mob.innerRadius,
        outerRadius = mob.outerRadius,
        super.copyFrom(mob);

  @override
  Annulus copy() => Annulus.copyFrom(this);
}

class Line extends TipableVMobject {
  double buff;
  double? pathArc;

  Vector3 start;
  Vector3 end;

  Line(
      {this.buff = 0,
      this.pathArc,
      this.start = RIGHT,
      this.end = LEFT,
      Color color = WHITE})
      : super(color: color);

  Line.copyFrom(Line mob)
      : buff = mob.buff,
        pathArc = mob.pathArc,
        start = mob.start,
        end = mob.end,
        super.copyFrom(mob);

  @override
  Line copy() => Line.copyFrom(this);

  @override
  void generatePoints() {
    if (pathArc != null) {
      var arc = ArcBetweenPoints(start: start, end: end, angle: pathArc!);

      setPoints(arc.points);
    } else {
      setPointsAsCorners([start, end]);
    }
    accountForBuff();
  }

  void setPathArc(double? newValue) {
    pathArc = newValue;
    generatePoints();
  }

  void accountForBuff() {
    if (buff == 0) {
      return;
    }

    var length =
        (pathArc == 0 || pathArc == null) ? getLength() : getArcLength();

    if (length < 2 * buff) {
      return;
    }

    var buffProportion = buff / length;

    pointwiseBecomePartial(this, buffProportion, 1 - buffProportion);
  }

  @override
  void putStartAndEndOn(
    Vector3 start,
    Vector3 end,
  ) {
    var currentStart = getStart();
    var currentEnd = getEnd();

    if (currentStart == currentEnd) {
      this.start = start;
      this.end = end;
      generatePoints();
    }

    return super.putStartAndEndOn(
      start,
      end,
    );
  }

  Vector3 getVector() => getEnd() - getStart();
  Vector3 getUnitVector() => getVector().normalize();
  double getAngle() => getVector().angle();
  double getSlope() => tan(getAngle());

  void setAngle(double angle) =>
      rotate(angle - getAngle(), aboutPoint: getStart());
  void setLength(double length) => scaleUniformly(length / getLength());
}

class DashedLine extends Line {
  double dashLength;
  double? dashSpacing;
  double positiveSpaceRatio;

  DashedLine(
      {this.dashLength = DEFAULT_DASH_LENGTH,
      this.dashSpacing,
      this.positiveSpaceRatio = 0.5,
      double buff = 0,
      double? pathArc,
      Vector3 start = RIGHT,
      Vector3 end = LEFT,
      Color color = WHITE})
      : super(
          start: start,
          end: end,
          buff: buff,
          pathArc: pathArc,
          color: color,
        ) {
    var numDashes = getDashCount();
    var dashes = DashedVMobject(this,
        numDashes: numDashes, positiveSpaceRatio: positiveSpaceRatio);
    clearPoints();
    add(dashes.submobjects);
  }

  int getDashCount() {
    var fullLength = dashLength / positiveSpaceRatio;
    var dashCount = getLength() / fullLength;

    if (fullLength.isInfinite || dashCount.isInfinite) {
      // Dart doesn't throw an exception when dividing by zero
      // (only when using the ~/ integer division operator)
      return 1;
    }

    return dashCount.ceil();
  }

  double getPositiveSpaceRatio() {
    return dashLength / (dashLength + (dashSpacing ?? 0));
  }

  @override
  Vector3 getStart() {
    if (submobjects.isNotEmpty) {
      return submobjects.first.getStart();
    } else {
      return super.getStart();
    }
  }

  @override
  Vector3 getEnd() {
    if (submobjects.isNotEmpty) {
      return submobjects.last.getEnd();
    } else {
      return super.getEnd();
    }
  }

  @override
  Vector3 getFirstHandle() => submobjects.first.points[1];

  @override
  Vector3 getLastHandle() =>
      submobjects.last.points[submobjects.last.getNumPoints() - 2];

  DashedLine.copyFrom(DashedLine mob)
      : dashLength = mob.dashLength,
        dashSpacing = mob.dashSpacing,
        positiveSpaceRatio = mob.positiveSpaceRatio,
        super.copyFrom(mob);

  @override
  DashedLine copy() => DashedLine.copyFrom(this);
}

class TangentLine extends Line {
  TangentLine(
    VMobject vmob,
    double alpha, {
    double dAlpha = 1e-6,
    double length = 1,
    double buff = 0,
    double? pathArc,
    Color color = WHITE,
  }) : super(
            start: vmob.pointFromProportion(clip(alpha - dAlpha, 0, 1)),
            end: vmob.pointFromProportion(clip(alpha + dAlpha, 0, 1)),
            buff: buff,
            pathArc: pathArc,
            color: color) {
    scaleUniformly(length / getLength());
  }

  TangentLine.copyFrom(TangentLine mob) : super.copyFrom(mob);

  @override
  TangentLine copy() => TangentLine.copyFrom(this);
}

class Elbow extends VMobject {
  Elbow({
    double width = 0.2,
    double angle = 0,
    Color color = WHITE,
  }) : super(color: color) {
    setPointsAsCorners([UP, UP + RIGHT, RIGHT]);
    setWidth(width, aboutPoint: ORIGIN);
    rotateAboutOrigin(angle);
  }

  Elbow.copyFrom(Elbow mob) : super.copyFrom(mob);

  @override
  Elbow copy() => Elbow.copyFrom(this);
}

class Arrow extends Line {
  double maxTipLengthToLengthRatio = 0.25;
  double maxStrokeWidthToLengthRatio = 5;
  bool preserveTipSizeWhenScaling = true;

  @override
  double strokeWidth = 6;

  late double initialStrokeWidth;
  Arrow({
    required Vector3 start,
    required Vector3 end,
    double buff = MED_SMALL_BUFFER,
    double? pathArc,
    Color color = WHITE,
  }) : super(
          start: start,
          end: end,
          buff: buff,
          pathArc: pathArc,
          color: color,
        ) {
    initialStrokeWidth = strokeWidth;
    addTip(side: TIP_AT_END);
    setStrokeWidthFromLength();
  }

  @override
  void scaleUniformly(double factor,
      {Vector3 aboutEdge = ORIGIN, Vector3? aboutPoint}) {
    if (getLength() == 0) {
      return;
    }

    super.scaleUniformly(factor, aboutEdge: aboutEdge, aboutPoint: aboutPoint);
    setStrokeWidthFromLength();

    refreshTips();
  }

  Vector3 getNormalVector() {
    var anchors = getTip().getStartAnchors().take(3).toList();
    var p0 = anchors[0];
    var p1 = anchors[1];
    var p2 = anchors[2];
    return (p2 - p1).cross(p1 - p0).normalize();
  }

  void resetNormalVector() => normalVector = getNormalVector();

  @override
  double getDefaultTipLength() =>
      min(tipLength, maxTipLengthToLengthRatio * getLength());

  void setStrokeWidthFromLength() => setStroke(
      width: min(initialStrokeWidth, maxStrokeWidthToLengthRatio * getLength()),
      family: false);

  Arrow.copyFrom(Arrow mob)
      : maxTipLengthToLengthRatio = mob.maxTipLengthToLengthRatio,
        maxStrokeWidthToLengthRatio = mob.maxStrokeWidthToLengthRatio,
        preserveTipSizeWhenScaling = mob.preserveTipSizeWhenScaling,
        initialStrokeWidth = mob.initialStrokeWidth,
        super.copyFrom(mob);

  @override
  Arrow copy() => Arrow.copyFrom(this);
}

class Vector extends Arrow {
  Vector({
    Vector3 start = ORIGIN,
    Vector3 end = RIGHT,
    double buff = 0,
    double? pathArc,
    Color color = WHITE,
  }) : super(
          start: start,
          end: end,
          buff: buff,
          pathArc: pathArc,
          color: color,
        );

  Vector.copyFrom(Vector mob) : super.copyFrom(mob);

  @override
  Vector copy() => Vector.copyFrom(this);
}

class DoubleArrow extends Arrow {
  DoubleArrow(
      {Vector3 start = ORIGIN,
      Vector3 end = RIGHT,
      double buff = MED_SMALL_BUFFER,
      double? pathArc,
      Color color = WHITE})
      : super(
          start: start,
          end: end,
          buff: buff,
          pathArc: pathArc,
          color: color,
        ) {
    addTip(side: TIP_AT_START);
  }

  DoubleArrow.copyFrom(DoubleArrow mob) : super.copyFrom(mob);

  @override
  DoubleArrow copy() => DoubleArrow.copyFrom(this);
}

class CubicBezier extends VMobject {
  CubicBezier(List<Vector3> points, {Color color = WHITE})
      : super(color: color) {
    setPoints(points);
  }

  CubicBezier.copyFrom(CubicBezier mob) : super.copyFrom(mob);

  @override
  CubicBezier copy() => CubicBezier.copyFrom(this);
}

class Polygon extends VMobject {
  Polygon(List<Vector3> vertices, {Color color = WHITE}) : super(color: color) {
    setPointsAsCorners([...vertices, vertices.first]);
  }

  List<Vector3> getVertices() => getStartAnchors();

  Polygon.copyFrom(Polygon mob) : super.copyFrom(mob);

  @override
  Polygon copy() => Polygon.copyFrom(this);

  void roundCorners({double radius = 0.5}) {
    var vertices = getVertices();
    var arcs = <ArcBetweenPoints>[];

    for (var tuple in adjacentNTuples(vertices, 3)) {
      var v1 = tuple[0];
      var v2 = tuple[1];
      var v3 = tuple[2];
      var vec1 = v2 - v1;
      var vec2 = v3 - v2;

      var unitVec1 = vec1.normalize();
      var unitVec2 = vec2.normalize();

      var angle = vec1.angleBetween(vec2) * radius.sign;
      var cutOffLength = radius * tan(angle / 2) / 2;
      var sign = vec1.cross(vec2).z.sign;
      var arc = ArcBetweenPoints(
          start: v2 - unitVec1 * cutOffLength,
          end: v2 + unitVec2 * cutOffLength,
          angle: sign * angle);
      arcs.add(arc);
    }

    clearPoints();

    arcs = [arcs.last, ...withoutLast(arcs)];
    for (var arc12 in adjacentPairs(arcs)) {
      var arc1 = arc12[0];
      var arc2 = arc12[1];
      appendPoints(arc1.getPoints());
      var line = Line(start: arc1.getEnd(), end: arc2.getStart());
      var lengthRatio = line.getLength() / arc1.getArcLength();
      line.insertNCurves((lengthRatio * arc1.getNumCurves()).toInt());
      appendPoints(line.getPoints());
    }
  }
}

class RegularPolygon extends Polygon {
  RegularPolygon({int numSides = 6, double? startAngle, Color color = WHITE})
      : super(
          compassDirections(
            numSides: numSides,
            startVec: RIGHT.rotate(
              startAngle ?? (numSides % 2 == 0 ? 0 : 90 * DEGREES),
            ),
          ),
          color: color,
        );

  RegularPolygon.copyFrom(RegularPolygon mob) : super.copyFrom(mob);

  @override
  RegularPolygon copy() => RegularPolygon.copyFrom(this);
}

class Triangle extends RegularPolygon {
  Triangle({double? startAngle, Color color = WHITE})
      : super(numSides: 3, startAngle: startAngle, color: color);

  Triangle.copyFrom(Triangle mob) : super.copyFrom(mob);

  @override
  Triangle copy() => Triangle.copyFrom(this);
}

class ArrowTip extends Triangle {
  @override
  double strokeWidth = 0;

  ArrowTip({
    double length = DEFAULT_ARROW_TIP_LENGTH,
    double startAngle = PI,
    Color color = WHITE,
  }) : super(startAngle: startAngle, color: color) {
    rotate(startAngle);
    setWidth(length, stretch: true);
    setHeight(length, stretch: true);
  }

  Vector3 getBase() => pointFromProportion(0.5);
  Vector3 getTipPoint() => points.first;
  Vector3 getVector() => getTipPoint() - getBase();
  double getAngle() => getVector().angle();
  double getLength() => getVector().norm();

  ArrowTip.copyFrom(ArrowTip mob) : super.copyFrom(mob);

  @override
  ArrowTip copy() => ArrowTip.copyFrom(this);
}

class Rectangle extends Polygon {
  Rectangle({double width = 4.0, double height = 2.0, Color color = WHITE})
      : super([UL, UR, DR, DL], color: color) {
    setWidth(width, stretch: true);
    setHeight(height, stretch: true);
  }

  Rectangle.copyFrom(Rectangle mob) : super.copyFrom(mob);

  @override
  Rectangle copy() => Rectangle.copyFrom(this);
}

class Square extends Rectangle {
  Square({double sideLength = 2.0, Color color = WHITE})
      : super(color: color, width: sideLength, height: sideLength);

  Square.copyFrom(Square mob) : super.copyFrom(mob);

  @override
  Square copy() => Square.copyFrom(this);
}

class RoundedRectangle extends Rectangle {
  RoundedRectangle({
    double width = 4.0,
    double height = 2.0,
    double cornerRadius = 0.5,
    Color color = WHITE,
  }) : super(color: color, width: width, height: height) {
    roundCorners(radius: cornerRadius);
  }

  RoundedRectangle.copyFrom(RoundedRectangle mob) : super.copyFrom(mob);

  @override
  RoundedRectangle copy() => RoundedRectangle.copyFrom(this);
}
