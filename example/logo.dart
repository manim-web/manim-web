import 'dart:html';

import 'package:manim_web/display/canvas_2d_display.dart';
import 'package:manim_web/manim.dart';
import 'package:manim_web/mobject/svg/web_tex_mobject.dart';

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
    createGraph();
    addTangent();
    addRectangles();
    addText();
    Group(mobjects).shift(UP);

    // when rendering the logo, uncomment this:
    // camera.resetPixelShape(3840, 2160);

    // when rendering the github repository logo, uncomment these lines:
    // camera.resetPixelShape(1280, 640);
    // Group(mobjects).scaleUniformly(0.8); // scale everything
    // mobjects.whereType<VMobject>().forEach(
    //     (vmob) => vmob.strokeWidth *= 0.8); // scale vmobjects (strokeWidth)

    await continueRendering();
  }

  void createGraph() {
    axes = Axes(
        xMin: -1,
        xMax: 10,
        yMin: -1,
        yMax: 8,
        axisConfig: AxisConfig(includeTip: false),
        yAxisConfig: AxisConfig(unitSize: 0.7))
      ..scaleUniformly(0.58)
      ..centerOnYAxis()
      ..toEdge(edge: LEFT, buffer: MED_SMALL_BUFFER);

    graph = axes.getGraph(func, xMin: 0.2, xMax: 9)
      ..setStroke(color: Color.FromHex('#68a8e1'));

    var x = MathTex('x')
      ..nextToPoint(axes.c2p(RIGHT * 10),
          direction: DOWN, buffer: MED_SMALL_BUFFER)
      ..scaleUniformly(0.9);
    var y = MathTex('y')
      ..nextToPoint(axes.c2p(UP * 8), direction: LEFT, buffer: MED_SMALL_BUFFER)
      ..scaleUniformly(0.9);

    add([x, y, graph, axes]);
  }

  void addTangent() {
    var _fA = func(a);
    var _fB = func(b);

    var ptA = axes.c2p(Vector3(a, _fA, 0));
    var ptB = axes.c2p(Vector3(b, _fB, 0));

    tangentLine = Line(start: ptA, end: ptB)
      ..scaleUniformly(4)
      ..setColor(color: RED_C);

    var dotA = Dot(ptA)..scaleUniformly(0.6);
    var dotB = Dot(ptB)..scaleUniformly(0.6);
    var origin = axes.c2p(ORIGIN);

    var fA = MathTex('f(a)')
      ..scaleUniformly(0.6)
      ..nextToPoint(Vector3(origin.x, ptA.y, 0),
          direction: LEFT, buffer: MED_SMALL_BUFFER);
    var fB = MathTex('f(b)')
      ..scaleUniformly(0.6)
      ..nextToPoint(Vector3(origin.x, ptB.y, 0),
          direction: LEFT, buffer: MED_SMALL_BUFFER);
    var fATriangle = Triangle()
      ..scaleUniformly(0.05)
      ..rotate(90 * DEGREES)
      ..nextToPoint(Vector3(origin.x, ptA.y, 0), direction: LEFT)
      ..shift(RIGHT / 2.5);
    var fBTriangle = Triangle()
      ..scaleUniformly(0.05)
      ..rotate(90 * DEGREES)
      ..nextToPoint(Vector3(origin.x, ptB.y, 0), direction: LEFT)
      ..shift(RIGHT / 2.5);
    var dashedLinefA = DashedLine(start: fATriangle.getCenter(), end: ptA)
      ..setStroke(width: 2);
    var dashedLinefB = DashedLine(start: fBTriangle.getCenter(), end: ptB)
      ..setStroke(width: 2);

    var texA = MathTex('a')
      ..scaleUniformly(0.6)
      ..nextToPoint(Vector3(ptA.x, origin.y, 0),
          direction: DOWN, buffer: MED_SMALL_BUFFER);
    var texB = MathTex('b')
      ..scaleUniformly(0.6)
      ..nextToPoint(Vector3(ptB.x, origin.y, 0),
          direction: DOWN, buffer: MED_SMALL_BUFFER);
    var aTriangle = Triangle()
      ..scaleUniformly(0.05)
      ..nextToPoint(Vector3(ptA.x, origin.y, 0), direction: DOWN)
      ..shift(UP / 2.5);
    var bTriangle = Triangle()
      ..scaleUniformly(0.05)
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
    var count = 10;
    var xs = linspace(start: 4, end: 8.5, count: count).getColumn(0);
    var dx = xs[1] - xs[0];
    var colors = colorGradient([PURPLE_C, ORANGE], count);
    var origin = axes.c2p(ORIGIN);

    for (var i in range(end: count)) {
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
    var manim = MathTex(r'\text{Manim}')
      ..scaleUniformly(4)
      ..shift(RIGHT * 2.8 + DOWN / 2);
    var web = MathTex(r'\text{web}')
      ..scaleUniformly(2)
      ..shift(RIGHT * 6.2 + DOWN * 1.3);
    var subtitle = MathTex(r'\text{Mathematical Animation Engine}')
      ..scaleUniformly(2)
      ..toEdge(edge: DOWN, buffer: MED_LARGE_BUFFER);
    var subtitle2 = MathTex(r'\text{for the web}')
      ..scaleUniformly(1.5)
      ..toEdge(edge: DOWN, buffer: SMALL_BUFFER);

    add([manim, web, subtitle, subtitle2]);
  }
}
