import 'dart:html';

import 'package:manim_web/display/canvas_2d_display.dart';
import 'package:manim_web/manim.dart';

void main() {
  runScene(ComplexExponentialScene());
}

class ComplexExponentialScene extends Scene {
  int arrowCount = 16;
  double rotationSpeed = 0.2;
  bool interactive = false;
  double rotatingArrowAngle = 0;
  double interactiveArrowAngle = 0;

  late NumberPlane plane;
  late List<Vector> arrows;
  late List<Vector> rotatedArrows;
  late Vector rotatingArrow;
  late Vector rotatedRotatingArrow;
  late Vector originalArrow;
  late MathTex formula;

  late EventListener positionListener;

  @override
  void setup() {
    positionListener =
        EventListener<MouseMovedEvent>(EventType.mouseMovedEvent, (event) {
      if (interactive) {
        setInteractiveAngle(event);
      }

      return false; // don't handle the event
    });

    addEventListener(positionListener);
  }

  @override
  Future construct() async {
    await createPlane();
    await createArrows();
    await shiftArrows();
    await rotateArrows();
    await fadeArrows();
    await addFormula();
    await addRotatingArrow();

    while (true) {
      var event = await waitForClick();
      setInteractiveAngle(event);

      toggleInteractivity();
    }
  }

  Future addFormula() async {
    formula = MathTex(r'e^{i\theta}')
      ..scaleUniformly(2)
      ..toEdge(edge: RIGHT)
      ..shift(UP);
    await play(ShowCreation(formula));
  }

  Future createPlane() async {
    plane = NumberPlane(axisConfig: AxisConfig(unitSize: 1.5));

    await play(AnimationGroup(
        [for (var line in plane.getFamilyWithPoints()) ShowCreation(line)],
        lagRatio: 0.02));
  }

  void setInteractiveAngle(MouseEvent event) {
    var coords = plane.pointToCoords(event.mousePos * Vector3(1, -1, 1));
    var angle = coords.angle();

    interactiveArrowAngle = angle;
  }

  Future createArrows() async {
    var colors = colorGradient([RED_C, BLUE_C, RED_C], arrowCount);

    arrows = [
      for (var i in range(end: arrowCount))
        plane.getVector(Complex.exp(angle: (i / arrowCount) * TAU).toVector3())
          ..setColor(color: colors[i])
    ];

    await play(AnimationGroup([for (var arrow in arrows) FadeIn(arrow)],
        lagRatio: 0.05));
  }

  Future shiftArrows() async {
    rotatedArrows = [
      for (var arrow in arrows) arrow.copy()..shift(arrow.getEnd())
    ];

    var copies = [for (var arrow in arrows) arrow.copy()];

    await playMany([
      for (var i in range(end: arrowCount))
        Transform(copies[i], target: rotatedArrows[i])
    ]);

    remove(copies);
    add(rotatedArrows);
  }

  Future rotateArrows() async {
    await playMany([
      for (var arrow in rotatedArrows)
        Transform(arrow,
            target: arrow.copy()
              ..rotate(90 * DEGREES, aboutPoint: arrow.getStart()))
    ]);
  }

  Future fadeArrows() async {
    var allArrows = VGroup([...arrows, ...rotatedArrows]);
    var fadedArrows = allArrows.copy()
      ..setColor(color: GRAY.withTransparency(0.5));

    await play(Transform(allArrows, target: fadedArrows));
  }

  Future addRotatingArrow() async {
    rotatingArrow = plane.getVector(RIGHT)..setColor(color: ORANGE);
    originalArrow = rotatingArrow.copy();

    await play(FadeIn(rotatingArrow));
    rotatedRotatingArrow = rotatingArrow.copy();
    add([rotatedRotatingArrow]);
    await play(Transform(rotatedRotatingArrow,
        target: rotatedRotatingArrow.copy()
          ..shift(rotatedRotatingArrow.getEnd())));
    await play(Transform(rotatedRotatingArrow,
        target: rotatedRotatingArrow.copy()
          ..rotate(90 * DEGREES, aboutPoint: rotatedRotatingArrow.getStart())));

    rotatingArrow.addUpdater(autoRotateUpdater);
    rotatedRotatingArrow.addUpdater(autoRotateRotatedUpdater);
  }

  Mobject autoRotateUpdater(Mobject vec, double dt) {
    rotatingArrowAngle = (rotatingArrowAngle + dt * rotationSpeed * TAU) % TAU;
    vec.rotateAboutOrigin(dt * rotationSpeed * TAU);
    return vec;
  }

  Mobject autoRotateRotatedUpdater(Mobject vec, double dt) {
    var newRotatedArrow = rotatingArrow.copy()..clearUpdaters();

    newRotatedArrow.shift(rotatingArrow.getEnd());
    newRotatedArrow.rotate(90 * DEGREES, aboutPoint: rotatingArrow.getEnd());

    vec.become(newRotatedArrow);
    return vec;
  }

  Mobject rotateTowardsCursor(Mobject vec, double dt) {
    vec.rotateAboutOrigin(-rotatingArrowAngle + interactiveArrowAngle);
    rotatingArrowAngle = interactiveArrowAngle;
    return vec;
  }

  void toggleInteractivity() {
    interactive = !interactive;
    if (interactive) {
      rotatingArrow.removeUpdater(autoRotateUpdater);
      rotatingArrow.addUpdater(rotateTowardsCursor);
    } else {
      rotatingArrow.addUpdater(autoRotateUpdater);
      rotatingArrow.removeUpdater(rotateTowardsCursor);
    }
  }

  @override
  AbstractDisplay createDisplay() =>
      Canvas2DDisplay(document.querySelector('.canvas-container')!);
}
