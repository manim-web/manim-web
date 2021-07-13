import 'dart:html';

import 'package:manim_web/display/canvas_2d_display.dart';
import 'package:manim_web/manim.dart';

import 'assets/tex.dart';

void main() {
  runScene(MatrixTransformationScene());
}

class MatrixTransformationScene extends Scene {
  late Array transformationMatrix;
  late NumberPlane plane;
  late NumberPlane fadedPlane;
  late NumberPlane originalPlane;
  late Dot i;
  late Dot j;
  late Dot originalI;
  late Dot originalJ;
  late Arrow arrowI;
  late Arrow arrowJ;
  late Group texI;
  late Group texJ;
  late Tex texII;
  late Tex texJJ;
  late Tex texIHat;
  late Tex texJHat;
  // TODO late Tex texMatrix;

  double planeScale = 1.5;

  @override
  Future construct() async {
    transformationMatrix = Array.identity(2);

    await createPlane();
    await createControls();
    // TODO await addTexMatrix();
    await transformPlane([
      [0, -1],
      [1, 0]
    ]); // rotation on 90 degrees
    await transformPlane([
      [1, 0.5],
      [0, 1]
    ]); // sheer along x
    makeInteractive();
    await continueRendering();
  }

  Future createPlane() async {
    var planeRadius = max(FRAME_X_RADIUS, FRAME_Y_RADIUS);

    originalPlane = NumberPlane(
        xMin: -planeRadius * planeScale,
        xMax: planeRadius * planeScale,
        yMin: -planeRadius * planeScale,
        yMax: planeRadius * planeScale,
        makeSmoothAfterApplyingFunctions: false);
    plane = originalPlane.copy();

    await play(AnimationGroup([
      for (var submob in plane.getFamily())
        if (submob.hasPoints()) ShowCreation(submob),
    ], lagRatio: 0.01));
  }

  Future createControls() async {
    originalI = Dot(originalPlane.c2p(RIGHT))..setFill(color: RED_C);
    originalJ = Dot(originalPlane.c2p(UP))..setFill(color: GREEN_C);

    var originPoint = originalPlane.c2p(ORIGIN);

    i = originalI.copy();
    j = originalJ.copy();

    arrowI = Arrow(start: originPoint, end: i.getPos(), buff: 0)
      ..setColor(color: RED_C);
    arrowJ = Arrow(start: originPoint, end: j.getPos(), buff: 0)
      ..setColor(color: GREEN_C);

    addTex();

    addToFront([i, j, arrowI, arrowJ, texI, texJ]);
    await play(AnimationGroup([
      for (var mob in [i, j, arrowI, arrowJ]) ShowCreation(mob),
      for (var tex in [texI, texJ]) FadeIn(tex)
    ], lagRatio: 0.1));
  }

  // TODO Use latex svg instead of this
  void addTex() {
    texII = Tex(imath)..setColor(color: RED_C);
    texJJ = Tex(jmath)..setColor(color: GREEN_C);
    texIHat = Tex('^')
      ..setColor(color: RED_C)
      ..scale(0.8)
      ..nextToMobject(texII, direction: UP, buffer: SMALL_BUFFER * 1.2);
    texJHat = Tex('^')
      ..setColor(color: GREEN_C)
      ..scale(0.8)
      ..nextToMobject(texJJ, direction: UP, buffer: SMALL_BUFFER * 1.2)
      ..shift(RIGHT * 0.05);

    texI = Group([texII, texIHat])
      ..addUpdater(
          (m, dt) => m..nextToMobject(i, direction: UL, buffer: SMALL_BUFFER));
    texJ = Group([texJJ, texJHat])
      ..addUpdater(
          (m, dt) => m..nextToMobject(j, direction: UL, buffer: SMALL_BUFFER));
  }

  // TODO Add tex matrix
  // Future addTexMatrix() async {
  //   texMatrix = Tex('''
  //     \\begin{bmatrix}
  //       ${transformationMatrix[Tuple2(0, 0)]} & ${transformationMatrix[Tuple2(0, 1)]}    \\\\
  //       ${transformationMatrix[Tuple2(1, 0)]} & ${transformationMatrix[Tuple2(1, 1)]}
  //     \\end{bmatrix}
  //   ''');

  //   texMatrix.addUpdater((_, dt) => texMatrix
  //     ..content = '''
  //     \\begin{bmatrix}
  //       ${transformationMatrix[Tuple2(0, 0)]} & ${transformationMatrix[Tuple2(0, 1)]}    \\\\
  //       ${transformationMatrix[Tuple2(1, 0)]} & ${transformationMatrix[Tuple2(1, 1)]}
  //     \\end{bmatrix}
  //   ''');

  //   await play(FadeIn(texMatrix));
  // }

  Future transformPlane(List<List<double>> values) async {
    var matrix = Array(values: values);

    // assert values is a 2x2 matrix
    assert(listEqual(matrix.shape.toList(), [2, 2]));

    var p2 = plane.copy()..applyMatrix(matrix);

    transformationMatrix = matrix.matMul(transformationMatrix);

    var iPos = originalPlane.c2p(RIGHT).matMul(transformationMatrix);
    var jPos = originalPlane.c2p(UP).matMul(transformationMatrix);

    // update the position of i and j
    var i2 = i.copy()..moveToPoint(iPos);
    var j2 = j.copy()..moveToPoint(jPos);

    var originPoint = originalPlane.c2p(ORIGIN);
    var newArrowI = Arrow(start: originPoint, end: iPos, buff: 0)
      ..setColor(color: RED_C);
    var newArrowJ = Arrow(start: originPoint, end: jPos, buff: 0)
      ..setColor(color: GREEN_C);

    await playMany([
      Transform(i, target: i2),
      Transform(j, target: j2),
      Transform(arrowI, target: newArrowI),
      Transform(arrowJ, target: newArrowJ),
      Transform(plane, target: p2),
    ]);
  }

  void makeInteractive() {
    add([DraggableMobject(mob: i), DraggableMobject(mob: j)]);

    var planeUpdater = (Mobject mob, double dt) {
      var iPos = originalPlane.p2c(i.getCenter());
      var jPos = originalPlane.p2c(j.getCenter());

      var newPlane = originalPlane.copy()
        ..applyMatrix(Array(values: [
          [iPos.x, jPos.x],
          [iPos.y, jPos.y]
        ]));

      var originPoint = originalPlane.c2p(ORIGIN);
      var newArrowI = Arrow(start: originPoint, end: iPos, buff: 0)
        ..setColor(color: RED_C);
      var newArrowJ = Arrow(start: originPoint, end: jPos, buff: 0)
        ..setColor(color: GREEN_C);

      plane.become(newPlane);
      arrowI.become(newArrowI);
      arrowJ.become(newArrowJ);
      return mob;
    };

    i.addUpdater(planeUpdater);
    j.addUpdater(planeUpdater);
  }

  @override
  AbstractDisplay createDisplay() =>
      Canvas2DDisplay(document.querySelector('.canvas-container')!);
}

Vector3 listToVector(List<double> l) =>
    l.length == 2 ? Vector3(l[0], l[1], 0) : Vector3(l[0], l[1], l[2]);

const imath = '';
const jmath = '';
