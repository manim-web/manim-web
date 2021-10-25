import 'dart:math';

import 'package:collection/collection.dart';

import 'package:manim_web/src/constants.dart';
import 'package:manim_web/src/util/array.dart';
import 'package:manim_web/src/util/bezier.dart';
import 'package:manim_web/src/util/color.dart';
import 'package:manim_web/src/util/complex.dart';
import 'package:manim_web/src/util/math_functions.dart';
import 'package:manim_web/src/util/vector.dart';
import 'package:manim_web/src/mobject/functions.dart';
import 'package:manim_web/src/mobject/geometry.dart';
import 'package:manim_web/src/mobject/types/vectorized_mobject.dart';

class NumberLine extends Line {
  double xMin;
  double xMax;
  double unitSize;
  bool includeTicks;
  double tickSize;
  double tickFrequency;
  double? leftmostTick;
  List<double> numbersWithElongatedTicks;
  bool includeNumbers;
  dynamic numbersToShow;
  double longTickMultiple;
  double numberAtCenter;
  double numberScaleVal;
  Vector3 labelDirection;
  double lineToNumberBuff;
  bool includeTip;
  dynamic decimalNumberConfig;
  bool excludeZeroFromDefaultNumbers;
  double tipWidth;
  double tipHeight;

  List<Line>? tickMarks;
  List<Line>? bigTickMarks;

  NumberLine.copyFrom(NumberLine mob)
      : xMin = mob.xMin,
        xMax = mob.xMax,
        unitSize = mob.unitSize,
        includeTicks = mob.includeTicks,
        tickSize = mob.tickSize,
        tickFrequency = mob.tickFrequency,
        leftmostTick = mob.leftmostTick,
        numbersWithElongatedTicks = [...mob.numbersWithElongatedTicks],
        includeNumbers = mob.includeNumbers,
        numbersToShow = mob.numbersToShow,
        longTickMultiple = mob.longTickMultiple,
        numberAtCenter = mob.numberAtCenter,
        numberScaleVal = mob.numberScaleVal,
        labelDirection = mob.labelDirection.copy(),
        lineToNumberBuff = mob.lineToNumberBuff,
        includeTip = mob.includeTip,
        decimalNumberConfig = mob.decimalNumberConfig,
        excludeZeroFromDefaultNumbers = mob.excludeZeroFromDefaultNumbers,
        tipWidth = mob.tipWidth,
        tipHeight = mob.tipHeight,
        tickMarks = mob.tickMarks != null
            ? [...mob.tickMarks!.map((tick) => tick.copy())]
            : null,
        bigTickMarks = mob.bigTickMarks != null
            ? [...mob.bigTickMarks!.map((tick) => tick.copy())]
            : null,
        super.copyFrom(mob);

  @override
  NumberLine copy() => NumberLine.copyFrom(this);

  factory NumberLine.fromConfig(
    AxisConfig config, {
    double xMin = -FRAME_X_RADIUS,
    double xMax = FRAME_X_RADIUS,
  }) =>
      NumberLine(
        color: config.color ?? LIGHT_GRAY,
        unitSize: config.unitSize ?? 1,
        includeTicks: config.includeTicks ?? true,
        tickSize: config.tickSize ?? 0.1,
        tickFrequency: config.tickFrequency ?? 1,
        leftmostTick: config.leftmostTick,
        numbersWithElongatedTicks: config.numbersWithElongatedTicks ?? [0],
        includeNumbers: config.includeNumbers ?? false,
        numbersToShow: config.numbersToShow,
        longTickMultiple: config.longTickMultiple ?? 2,
        numberAtCenter: config.numberAtCenter ?? 0,
        numberScaleVal: config.numberScaleVal ?? 0.75,
        labelDirection: config.labelDirection ?? DOWN,
        lineToNumberBuff: config.lineToNumberBuff ?? MED_SMALL_BUFFER,
        includeTip: config.includeTip ?? true,
        tipWidth: config.tipWidth ?? 0.25,
        tipHeight: config.tipHeight ?? 0.25,
        decimalNumberConfig: config.decimalNumberConfig,
        excludeZeroFromDefaultNumbers:
            config.excludeZeroFromDefaultNumbers ?? true,
        xMax: xMax,
        xMin: xMin,
      )..setStroke(width: config.strokeWidth ?? DEFAULT_STROKE_WIDTH);

  NumberLine({
    Color color = LIGHT_GREY,
    this.xMin = -FRAME_X_RADIUS,
    this.xMax = FRAME_X_RADIUS,
    this.unitSize = 1,
    this.includeTicks = true,
    this.tickSize = 0.1,
    this.tickFrequency = 1,
    this.leftmostTick,
    this.numbersWithElongatedTicks = const [0],
    this.includeNumbers = false,
    this.numbersToShow,
    this.longTickMultiple = 2,
    this.numberAtCenter = 0,
    this.numberScaleVal = 0.75,
    this.labelDirection = DOWN,
    this.lineToNumberBuff = MED_SMALL_BUFFER,
    this.includeTip = true,
    this.tipWidth = 0.25,
    this.tipHeight = 0.25,
    this.decimalNumberConfig,
    this.excludeZeroFromDefaultNumbers = false,
  }) : super(color: color) {
    tipLength = max(tipWidth, tipHeight);

    if (includeTip) {
      xMax += tipLength / 2;
    }

    start = RIGHT * unitSize * xMin;
    end = RIGHT * unitSize * xMax;

    putStartAndEndOn(start, end);

    shift(-numberToPoint(numberAtCenter));

    initLeftmostTick();

    if (includeTip) {
      addTip(tipLength: tipLength);
    }
    if (includeTicks) {
      addTickMarks();
    }
    if (includeNumbers) {
      // TODO addNumbers();
    }
  }

  void initLeftmostTick() {
    leftmostTick ??= tickFrequency * (xMin / tickFrequency).ceil();
  }

  void addTickMarks() {
    tickMarks = [for (var x in getTickNumbers()) getTick(x, size: tickSize)];
    bigTickMarks = [
      for (var x in numbersWithElongatedTicks)
        getTick(x, size: tickSize * longTickMultiple)
    ];

    add([...tickMarks!, ...bigTickMarks!]);
  }

  Line getTick(double x, {double? size}) {
    size ??= tickSize;

    var tick = Line(start: DOWN * size, end: UP * size)
      ..rotate(getAngle())
      ..moveToPoint(numberToPoint(x))
      ..setColor(color: getColor())
      ..setFill(color: getFillColor())
      ..setStroke(color: getStrokeColor(), width: getStrokeWidth());

    return tick;
  }

  VGroup getTickMarks() => VGroup([...tickMarks ?? [], ...bigTickMarks ?? []]);

  List<double> getTickNumbers() {
    var u = includeTip ? -1 : 1;
    return arange(
            start: leftmostTick!,
            end: xMax + u * tickFrequency / 2,
            step: tickFrequency)
        .getColumn(0);
  }

  Vector3 numberToPoint(double x) {
    var alpha = mapValue(x, xMin, xMax, 0, 1);
    return interpolate(getStart(), getEnd(), alpha);
  }

  double pointToNumber(Vector3 point) {
    var start = getStart();
    var end = getEnd();
    var unitVec = (end - start).normalize();
    var prop = unitVec.dot(point - start) / unitVec.dot(end - start);

    return interpolate(xMin, xMax, prop);
  }

  Vector3 n2p(double x) => numberToPoint(x);
  double p2n(Vector3 p) => pointToNumber(p);

  double getUnitSize() => getLength() / (xMax - xMin);
  // TODO defaultNumbersToDisplay, getNumberMobjects, getNumberMobject, getLabels, addNumbers
}

abstract class CoordinateSystem extends VGroup {
  double xMin;
  double xMax;
  double yMin;
  double yMax;

  CoordinateSystem({
    this.xMin = -FRAME_X_RADIUS,
    this.xMax = FRAME_X_RADIUS,
    this.yMin = -FRAME_Y_RADIUS,
    this.yMax = FRAME_Y_RADIUS,
  });

  Vector3 coordsToPoint(Vector3 coords);
  Vector3 pointToCoords(Vector3 point);
  Vector3 c2p(Vector3 coords) => coordsToPoint(coords);
  Vector3 p2c(Vector3 point) => pointToCoords(point);

  VGroup getAxes();
  NumberLine getAxis(int index) => getAxes()[index] as NumberLine;

  NumberLine getXAxis() => getAxis(0);
  NumberLine getYAxis() => getAxis(1);
  NumberLine getZAxis() => getAxis(2);

  CoordinateSystem.copyFrom(CoordinateSystem mob)
      : xMin = mob.xMin,
        xMax = mob.xMax,
        yMin = mob.yMin,
        yMax = mob.yMax,
        super.copyFrom(mob);

  // TODO getAxisLabel, getXAxisLabel, getYAxisLabel, getAxisLabels

  FunctionGraph getGraph(
    double Function(double) function, {
    double stepSize = 0.01, // use a step size <= 0 for automatic step size
    double? xMin,
    double? xMax,
    double dt = 1e-8,
    List<double> discontinuities = const [],
    Color color = WHITE,
  }) {
    xMin ??= this.xMin;
    xMax ??= this.xMax;

    var graph = FunctionGraph(
      function: function,
      stepSize: stepSize,
      xMin: xMin,
      xMax: xMax,
      dt: dt,
      discontinuities: discontinuities,
      color: color,
    )..applyFunction((pt) => coordsToPoint(pt));

    return graph;
  }

  ParametricFunction getParametricCurve(
    Vector3 Function(double) function, {
    double stepSize = 0.01, // use a step size <= 0 for automatic step size
    double tMin = 0,
    double tMax = 1,
    double dt = 1e-8,
    List<double> discontinuities = const [],
    Color color = WHITE,
  }) {
    var graph = ParametricFunction(
      parametricFunction: (t) => coordsToPoint(function(t)),
      stepSize: stepSize,
      tMin: tMin,
      tMax: tMax,
      dt: dt,
      discontinuities: discontinuities,
      color: color,
    );

    return graph;
  }

  // TODO inputToGraphPoint

}

class Axes extends CoordinateSystem {
  Vector3 centerPoint;
  AxisConfig axisConfig;
  AxisConfig xAxisConfig;
  AxisConfig yAxisConfig;

  late NumberLine xAxis;
  late NumberLine yAxis;
  late VGroup axes;

  static const AxisConfig DefaultAxisConfig = AxisConfig(
    color: LIGHT_GREY,
    unitSize: 1,
    includeTicks: true,
    tickSize: 0.1,
    tickFrequency: 1,
    numbersWithElongatedTicks: [0],
    includeNumbers: false,
    longTickMultiple: 2,
    numberAtCenter: 0,
    numberScaleVal: 0.75,
    labelDirection: DOWN,
    lineToNumberBuff: MED_SMALL_BUFFER,
    includeTip: true,
    tipWidth: 0.25,
    tipHeight: 0.25,
    excludeZeroFromDefaultNumbers: false,
    strokeWidth: DEFAULT_STROKE_WIDTH,
  );

  static const AxisConfig DefaultXAxisConfig = AxisConfig();
  static const AxisConfig DefaultYAxisConfig = AxisConfig(labelDirection: LEFT);

  AxisConfig defaultAxisConfig = DefaultAxisConfig;
  AxisConfig defaultXAxisConfig = DefaultXAxisConfig;
  AxisConfig defaultYAxisConfig = DefaultYAxisConfig;

  Axes({
    double xMin = -FRAME_X_RADIUS,
    double xMax = FRAME_X_RADIUS,
    double yMin = -FRAME_Y_RADIUS,
    double yMax = FRAME_Y_RADIUS,
    this.centerPoint = ORIGIN,
    this.axisConfig = DefaultAxisConfig,
    this.xAxisConfig = DefaultXAxisConfig,
    this.yAxisConfig = DefaultYAxisConfig,
  }) : super(
          xMin: xMin,
          xMax: xMax,
          yMin: yMin,
          yMax: yMax,
        ) {
    xAxis = createAxis(xMin, xMax, xAxisConfig.merge(defaultXAxisConfig));
    yAxis = createAxis(yMin, yMax, yAxisConfig.merge(defaultYAxisConfig));
    yAxis.rotateAboutOrigin(-90 * DEGREES);

    axes = VGroup([xAxis, yAxis]);
    add([xAxis, yAxis]);
    shift(centerPoint);
  }

  NumberLine createAxis(double min, double max, AxisConfig config) {
    var configs = [config, axisConfig, defaultAxisConfig];
    var merged = configs.reduce((a, b) => a.merge(b));
    return NumberLine.fromConfig(merged, xMin: min, xMax: max);
  }

  @override
  Vector3 coordsToPoint(Vector3 coords) {
    var origin = xAxis.n2p(0);
    var result = origin.copy();
    for (var d in IterableZip([coords.toList(), getAxes().submobjects])) {
      var axis = d[1] as NumberLine;
      var coord = d[0] as double;

      result += (axis.n2p(coord) - origin);
    }

    return result;
  }

  @override
  VGroup getAxes() => axes;

  @override
  Vector3 pointToCoords(Vector3 point) {
    var x = xAxis.pointToNumber(point);
    var y = yAxis.pointToNumber(point);
    return Vector3(x, y, 0);
  }

  Axes.copyFrom(Axes mob)
      : centerPoint = mob.centerPoint.copy(),
        axisConfig = mob.axisConfig.copy(),
        xAxisConfig = mob.xAxisConfig.copy(),
        yAxisConfig = mob.yAxisConfig.copy(),
        super.copyFrom(mob) {
    xAxis = mob.xAxis.copy();
    yAxis = mob.yAxis.copy();
    axes = VGroup([xAxis, yAxis]);
  }

  @override
  Axes copy() => Axes.copyFrom(this);
}

// TODO ThreeDAxes

class NumberPlane extends Axes {
  static const AxisConfig DefaultAxisConfig = AxisConfig(
      color: WHITE,
      strokeWidth: 2,
      includeTicks: false,
      includeTip: false,
      lineToNumberBuff: SMALL_BUFFER,
      labelDirection: DR,
      numberScaleVal: 0.5);
  static const AxisConfig DefaultXAxisConfig = AxisConfig();
  static const AxisConfig DefaultYAxisConfig = AxisConfig(labelDirection: DR);

  @override
  AxisConfig defaultAxisConfig =
      DefaultAxisConfig.merge(Axes.DefaultAxisConfig);
  @override
  AxisConfig defaultXAxisConfig =
      DefaultXAxisConfig.merge(Axes.DefaultXAxisConfig);
  @override
  AxisConfig defaultYAxisConfig =
      DefaultYAxisConfig.merge(Axes.DefaultYAxisConfig);

  static const VMobjectStyle DefaultBackgroundLineStyle = VMobjectStyle(
      strokeWidth: 1,
      strokeColors: [BLUE_D],
      fillColors: [],
      backgroundStrokeColors: [],
      backgroundStrokeWidth: 0);

  VMobjectStyle backgroundLineStyle;
  VMobjectStyle? fadedLineStyle;

  double xLineFrequency;
  double yLineFrequency;
  double fadedLineRatio;

  NumberPlane.copyFrom(NumberPlane mob)
      : backgroundLines = [for (var mob in mob.backgroundLines) mob.copy()],
        fadedLines = [for (var mob in mob.fadedLines) mob.copy()],
        xLineFrequency = mob.xLineFrequency,
        yLineFrequency = mob.yLineFrequency,
        fadedLineRatio = mob.fadedLineRatio,
        fadedLineStyle = mob.fadedLineStyle?.copy(),
        backgroundLineStyle = mob.backgroundLineStyle.copy(),
        super.copyFrom(mob);

  @override
  NumberPlane copy() => NumberPlane.copyFrom(this);

  late List<Line> backgroundLines;
  late List<Line> fadedLines;

  //* Faded lines are darker lines
  //* Background lines are regular lines

  NumberPlane({
    double xMin = -FRAME_X_RADIUS,
    double xMax = FRAME_X_RADIUS,
    double yMin = -FRAME_Y_RADIUS,
    double yMax = FRAME_Y_RADIUS,
    Vector3 centerPoint = ORIGIN,
    AxisConfig axisConfig = DefaultAxisConfig,
    AxisConfig xAxisConfig = const AxisConfig(),
    AxisConfig yAxisConfig = const AxisConfig(),
    this.backgroundLineStyle = DefaultBackgroundLineStyle,
    this.fadedLineStyle,
    this.xLineFrequency = 1,
    this.yLineFrequency = 1,
    this.fadedLineRatio = 1,
    // TODO currently make smooth doesn't work
    bool makeSmoothAfterApplyingFunctions = true,
  }) : super(
          xMin: xMin,
          xMax: xMax,
          yMin: yMin,
          yMax: yMax,
          centerPoint: centerPoint,
          axisConfig: axisConfig,
          xAxisConfig: xAxisConfig,
          yAxisConfig: yAxisConfig,
        ) {
    this.makeSmoothAfterApplyingFunctions = makeSmoothAfterApplyingFunctions;
    initBackgroundLines();
    setStroke(width: backgroundLineStyle.strokeWidth);
  }

  void initBackgroundLines() {
    fadedLineStyle ??= VMobjectStyle(
      backgroundStrokeColors: backgroundLineStyle.backgroundStrokeColors,
      backgroundStrokeWidth: backgroundLineStyle.backgroundStrokeWidth * 0.5,
      fillColors: [],
      strokeColors: [
        for (var color in backgroundLineStyle.strokeColors ?? <Color>[])
          color.withTransparency(color.a * 0.5)
      ],
      strokeWidth: backgroundLineStyle.strokeWidth * 0.5,
    );

    var allLines = getLines();
    backgroundLines = allLines[0];
    fadedLines = allLines[1];

    var backgroundGroup = VGroup(backgroundLines)
      ..setStyleFromVMobjectStyle(backgroundLineStyle);
    var fadedGroup = VGroup(fadedLines)
      ..setStyleFromVMobjectStyle(fadedLineStyle!);

    addToBack([
      backgroundGroup,
      fadedGroup,
    ]);
  }

  List<List<Line>> getLines() {
    var xlines =
        getLinesParallelToAxis(xAxis, yAxis, xLineFrequency, fadedLineRatio);
    var ylines =
        getLinesParallelToAxis(yAxis, xAxis, yLineFrequency, fadedLineRatio);

    var lines1 = [...xlines[0], ...ylines[0]];
    var lines2 = [...xlines[1], ...ylines[1]];
    return [lines1, lines2];
  }

  List<List<Line>> getLinesParallelToAxis(
      NumberLine axis1, NumberLine axis2, double freq, double ratio) {
    var line = Line(start: axis1.getStart(), end: axis1.getEnd());
    var denseFreq = 1 + ratio;
    var step = (1 / denseFreq) * freq;

    var lines1 = <Line>[];
    var lines2 = <Line>[];

    var ranges = [
      arange(start: 0, end: axis2.xMax, step: step).getColumn(0),
      arange(start: 0, end: axis2.xMin, step: -step).getColumn(0),
    ];

    for (var inputs in ranges) {
      for (var kx in enumerate(inputs)) {
        var k = kx.item1;
        var x = kx.item2;

        var newLine = line.copy()..shift(axis2.n2p(x));

        if (k % (1 + ratio) == 0) {
          lines1.add(newLine);
        } else {
          lines2.add(newLine);
        }
      }
    }

    return [lines1, lines2];
  }

  Vector3 getCenterPoint() => c2p(ORIGIN);

  double getXUnitSize() => xAxis.getUnitSize();
  double getYUnitSize() => yAxis.getUnitSize();

  Vector getVector(
    Vector3 coords, {
    double buff = 0,
    double? pathArc,
    Color? fillColor,
    Color color = WHITE,
  }) =>
      Vector(
        start: getCenterPoint(),
        end: c2p(coords),
        buff: buff,
        pathArc: pathArc,
        color: color,
      );

  void prepareForNonLinearTransform({int targetNumberOfCurves = 50}) {
    for (var mob in getVectorizedFamily()) {
      var numCurves = mob.getNumCurves();
      if (targetNumberOfCurves > numCurves) {
        insertNCurves(targetNumberOfCurves - numCurves);
      }
    }
  }
}

class ComplexPlane extends NumberPlane {
  ComplexPlane({
    double xMin = -FRAME_X_RADIUS,
    double xMax = FRAME_X_RADIUS,
    double yMin = -FRAME_Y_RADIUS,
    double yMax = FRAME_Y_RADIUS,
    Vector3 centerPoint = ORIGIN,
    AxisConfig axisConfig = NumberPlane.DefaultAxisConfig,
    AxisConfig xAxisConfig = const AxisConfig(),
    AxisConfig yAxisConfig = const AxisConfig(),
    VMobjectStyle backgroundLineStyle = NumberPlane.DefaultBackgroundLineStyle,
    VMobjectStyle? fadedLineStyle,
    double xLineFrequency = 1,
    double yLineFrequency = 1,
    double fadedLineRatio = 1,
    // TODO currently make smooth doesn't work
    bool makeSmoothAfterApplyingFunctions = true,
  }) : super(
          xMin: xMin,
          xMax: xMax,
          yMin: yMin,
          yMax: yMax,
          centerPoint: centerPoint,
          axisConfig: axisConfig,
          xAxisConfig: xAxisConfig,
          yAxisConfig: yAxisConfig,
          backgroundLineStyle: backgroundLineStyle,
          fadedLineStyle: fadedLineStyle,
          xLineFrequency: xLineFrequency,
          yLineFrequency: yLineFrequency,
          fadedLineRatio: fadedLineRatio,
          makeSmoothAfterApplyingFunctions: makeSmoothAfterApplyingFunctions,
        );

  Vector3 numberToPoint(Complex z) => coordsToPoint(z.toVector3());
  Vector3 n2p(Complex z) => numberToPoint(z);

  Complex pointToNumber(Vector3 pt) {
    var coords = pointToCoords(pt);
    return Complex(real: coords.x, imaginary: coords.y);
  }

  Complex p2n(Vector3 pt) => pointToNumber(pt);

  // TODO getDefaultCoordinateValues, getCoordinateLabels, addCoordinates

  ComplexPlane.copyFrom(ComplexPlane mob) : super.copyFrom(mob);

  @override
  ComplexPlane copy() => ComplexPlane.copyFrom(this);
}

class AxisConfig {
  final Color? color;
  final bool? includeTip;
  final bool? excludeZeroFromDefaultNumbers;
  final Vector3? labelDirection;
  final double? unitSize;
  final bool? includeTicks;
  final double? tickSize;
  final double? tickFrequency;
  final double? leftmostTick;
  final List<double>? numbersWithElongatedTicks;
  final bool? includeNumbers;
  final dynamic numbersToShow;
  final double? longTickMultiple;
  final double? numberAtCenter;
  final double? numberScaleVal;
  final double? lineToNumberBuff;
  final double? tipWidth;
  final double? tipHeight;
  final dynamic decimalNumberConfig;
  final double? strokeWidth;

  const AxisConfig({
    this.color,
    this.unitSize,
    this.includeTicks,
    this.tickSize,
    this.tickFrequency,
    this.leftmostTick,
    this.numbersWithElongatedTicks,
    this.includeNumbers,
    this.numbersToShow,
    this.longTickMultiple,
    this.numberAtCenter,
    this.numberScaleVal,
    this.labelDirection,
    this.lineToNumberBuff,
    this.includeTip,
    this.tipWidth,
    this.tipHeight,
    this.decimalNumberConfig,
    this.excludeZeroFromDefaultNumbers,
    this.strokeWidth,
  });

  AxisConfig.copyFrom(AxisConfig config)
      : color = config.color,
        unitSize = config.unitSize,
        includeTicks = config.includeTicks,
        tickSize = config.tickSize,
        tickFrequency = config.tickFrequency,
        leftmostTick = config.leftmostTick,
        numbersWithElongatedTicks = config.numbersWithElongatedTicks,
        includeNumbers = config.includeNumbers,
        numbersToShow = config.numbersToShow,
        longTickMultiple = config.longTickMultiple,
        numberAtCenter = config.numberAtCenter,
        numberScaleVal = config.numberScaleVal,
        labelDirection = config.labelDirection,
        lineToNumberBuff = config.lineToNumberBuff,
        includeTip = config.includeTip,
        tipWidth = config.tipWidth,
        tipHeight = config.tipHeight,
        decimalNumberConfig = config.decimalNumberConfig,
        excludeZeroFromDefaultNumbers = config.excludeZeroFromDefaultNumbers,
        strokeWidth = config.strokeWidth;

  AxisConfig copy() => AxisConfig.copyFrom(this);

  AxisConfig merge(AxisConfig other) {
    var color = this.color ?? other.color;
    var unitSize = this.unitSize ?? other.unitSize;
    var includeTicks = this.includeTicks ?? other.includeTicks;
    var tickSize = this.tickSize ?? other.tickSize;
    var tickFrequency = this.tickFrequency ?? other.tickFrequency;
    var leftmostTick = this.leftmostTick ?? other.leftmostTick;
    var numbersWithElongatedTicks =
        this.numbersWithElongatedTicks ?? other.numbersWithElongatedTicks;
    var includeNumbers = this.includeNumbers ?? other.includeNumbers;
    var numbersToShow = this.numbersToShow ?? other.numbersToShow;
    var longTickMultiple = this.longTickMultiple ?? other.longTickMultiple;
    var numberAtCenter = this.numberAtCenter ?? other.numberAtCenter;
    var numberScaleVal = this.numberScaleVal ?? other.numberScaleVal;
    var labelDirection = this.labelDirection ?? other.labelDirection;
    var lineToNumberBuff = this.lineToNumberBuff ?? other.lineToNumberBuff;
    var includeTip = this.includeTip ?? other.includeTip;
    var tipWidth = this.tipWidth ?? other.tipWidth;
    var tipHeight = this.tipHeight ?? other.tipHeight;
    var decimalNumberConfig =
        this.decimalNumberConfig ?? other.decimalNumberConfig;
    var excludeZeroFromDefaultNumbers = this.excludeZeroFromDefaultNumbers ??
        other.excludeZeroFromDefaultNumbers;
    var strokeWidth = this.strokeWidth ?? other.strokeWidth;

    return AxisConfig(
      color: color,
      unitSize: unitSize,
      includeTicks: includeTicks,
      tickSize: tickSize,
      tickFrequency: tickFrequency,
      leftmostTick: leftmostTick,
      numbersWithElongatedTicks: numbersWithElongatedTicks,
      includeNumbers: includeNumbers,
      numbersToShow: numbersToShow,
      longTickMultiple: longTickMultiple,
      numberAtCenter: numberAtCenter,
      numberScaleVal: numberScaleVal,
      labelDirection: labelDirection,
      lineToNumberBuff: lineToNumberBuff,
      includeTip: includeTip,
      tipWidth: tipWidth,
      tipHeight: tipHeight,
      decimalNumberConfig: decimalNumberConfig,
      excludeZeroFromDefaultNumbers: excludeZeroFromDefaultNumbers,
      strokeWidth: strokeWidth,
    );
  }
}
