import 'dart:html';

import 'package:manim_web/display/canvas_2d_display.dart';
import 'package:manim_web/manim.dart';

import 'assets/tex.dart';

void main() {
  runScene(LogoScene());
}

class LogoScene extends Scene {
  @override
  AbstractDisplay createDisplay() =>
      Canvas2DDisplay(document.querySelector('.canvas-container')!);

  late Axes axes;
  late ParametricFunction graph;
  late Line tangentLine;

  double func(double x) => 0.1 * (x + 3 - 5) * (x - 3 - 5) * (x - 5) + 5;

  var a = 1.5;
  var b = 3.5;

  @override
  Future construct() async {
    // when rendering the logo, uncomment this:
    // camera.resetPixelShape(3840, 2160);

    createGraph();
    addTangent();
    addRectangles();
    addText();
    Group(mobjects).shift(UP);
    await continueRendering();
  }

  void createGraph() {
    axes = Axes(
        xMin: -1,
        xMax: 9,
        yMin: -1,
        yMax: 8,
        axisConfig: AxisConfig(includeTip: false),
        yAxisConfig: AxisConfig(unitSize: 0.7))
      ..scale(0.6)
      ..centerOnYAxis()
      ..toEdge(edge: LEFT);

    graph = axes.getGraph(func, xMin: 0.2, xMax: 9)
      ..setStroke(color: Color.FromHex('#68a8e1'));

    var x = Tex('x')
      ..nextToPoint(axes.c2p(RIGHT * 9), direction: UR / 2)
      ..scale(0.6);
    var y = Tex('y')
      ..nextToPoint(axes.c2p(UP * 8), direction: UR / 2)
      ..scale(0.6);

    add([x, y, graph, axes]);
  }

  void addTangent() {
    var _fA = func(a);
    var _fB = func(b);

    var ptA = axes.c2p(Vector3(a, _fA, 0));
    var ptB = axes.c2p(Vector3(b, _fB, 0));

    tangentLine = Line(start: ptA, end: ptB)
      ..scale(4)
      ..setColor(color: RED_C);

    var dotA = Dot(ptA)..scale(0.6);
    var dotB = Dot(ptB)..scale(0.6);
    var origin = axes.c2p(ORIGIN);

    var fA = Tex('f(a)')
      ..scale(0.6)
      ..nextToPoint(Vector3(origin.x, ptA.y, 0), direction: LEFT);
    var fB = Tex('f(b)')
      ..scale(0.6)
      ..nextToPoint(Vector3(origin.x, ptB.y, 0), direction: LEFT);
    var fATriangle = Triangle()
      ..scale(0.05)
      ..rotate(90 * DEGREES)
      ..nextToPoint(Vector3(origin.x, ptA.y, 0), direction: LEFT)
      ..shift(RIGHT / 2.5);
    var fBTriangle = Triangle()
      ..scale(0.05)
      ..rotate(90 * DEGREES)
      ..nextToPoint(Vector3(origin.x, ptB.y, 0), direction: LEFT)
      ..shift(RIGHT / 2.5);
    var dashedLinefA = DashedLine(start: fATriangle.getCenter(), end: ptA)
      ..setStroke(width: 2);
    var dashedLinefB = DashedLine(start: fBTriangle.getCenter(), end: ptB)
      ..setStroke(width: 2);

    var texA = Tex('a')
      ..scale(0.6)
      ..nextToPoint(Vector3(ptA.x, origin.y, 0),
          direction: DOWN, buffer: MED_SMALL_BUFFER * 1.5);
    var texB = Tex('b')
      ..scale(0.6)
      ..nextToPoint(Vector3(ptB.x, origin.y, 0),
          direction: DOWN, buffer: MED_SMALL_BUFFER * 1.5);
    var aTriangle = Triangle()
      ..scale(0.05)
      ..nextToPoint(Vector3(ptA.x, origin.y, 0), direction: DOWN)
      ..shift(UP / 2.5);
    var bTriangle = Triangle()
      ..scale(0.05)
      ..nextToPoint(Vector3(ptB.x, origin.y, 0), direction: DOWN)
      ..shift(UP / 2.5);
    var dashedLineA = DashedLine(start: aTriangle.getCenter(), end: ptA)
      ..setStroke(width: 2);
    var dashedLineB = DashedLine(start: bTriangle.getCenter(), end: ptB)
      ..setStroke(width: 2);

    var dx = Line(start: ptA, end: Vector3(ptB.x, ptA.y, 0))
      ..setColor(color: Color.FromHex('942357'));
    var df = Line(start: ptB, end: Vector3(ptB.x, ptA.y, 0))
      ..setColor(color: Color.FromHex('3f7d5c'));

    add([
      dotA,
      dotB,
      dx,
      df,
      fA,
      fB,
      fATriangle,
      fBTriangle,
      dashedLinefA,
      dashedLinefB,
      tangentLine,
      texA,
      texB,
      aTriangle,
      bTriangle,
      dashedLineA,
      dashedLineB,
    ]);
  }

  void addRectangles() {
    var xs = linspace(start: 4, end: 8, count: 10).getColumn(0);
    var dx = xs[1] - xs[0];
    var colors = colorGradient([PURPLE_C, ORANGE], 10);
    var origin = axes.c2p(ORIGIN);

    for (var i in range(end: 10)) {
      var x = xs[i];
      var color = colors[i];

      var topLeft = axes.c2p(Vector3(x, func(x), 0));
      var bottomRight = axes.c2p(Vector3(x + dx, 0, 0));
      var center = (topLeft + bottomRight) / 2;

      var height = topLeft.y - origin.y;
      var width = bottomRight.x - topLeft.x;

      var rectangle = Rectangle(
        height: height,
        width: width,
      )
        ..setFill(color: color.withTransparency(0.7))
        ..setStroke(width: 1, color: BLACK)
        ..moveToPoint(center);
      add([rectangle]);
    }
  }

  void addText() {
    var manim = Text('Manim')
      ..scale(4)
      ..shift(RIGHT * 2.5 + DOWN / 5);
    var web = Text('web')
      ..scale(2)
      ..shift(RIGHT * 6 + DOWN);
    var subtitle = Text('Mathematical Animation Engine')
      ..scale(2)
      ..toEdge(edge: DOWN, buffer: LARGE_BUFFER);
    var subtitle2 = Text('for the web')
      ..scale(1.5)
      ..toEdge(edge: DOWN, buffer: SMALL_BUFFER);

    add([manim, web, subtitle, subtitle2]);
  }
}
