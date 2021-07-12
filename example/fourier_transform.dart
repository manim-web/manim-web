import 'dart:html';

import 'package:manim_web/display/canvas_2d_display.dart';
import 'package:manim_web/manim.dart';

const resolution = 1;

void main() {
  runScene(FourierScene());
}

class FourierScene extends Scene {
  @override
  AbstractDisplay createDisplay() =>
      Canvas2DDisplay(document.querySelector('.canvas-container')!);

  late Axes timeAxes;
  late Axes frequencyAxes;
  late NumberPlane circlePlane;
  late DashedVMobject dashedCircle;
  late SurroundingRectangle frequencyBox;
  late Dot centerOfMass;
  late Dot fourierDot;
  late ParametricFunction fourierGraph;
  late ParametricFunction wave;
  late ParametricFunction polarized;
  late VMobject partialFourierGraph;

  double windingFrequency = 0;

  @override
  Future construct() async {
    await addWaveWithAxes();
    windingFrequency = 5;
    await addPolarizedWaveWithAxes();

    addFrequencyAxes();
    await playMany([FadeIn(frequencyAxes), FadeIn(frequencyBox)]);
    fourierGraph = getFourierGraph(wave);

    await addDots();
    await addText();
    await showFourierGraphCreation();

    makeInteractive();

    await continueRendering();
  }

  Future addAllAxes() async {
    addCirclePlane();
    addFrequencyAxes();
    await play(FadeIn(circlePlane));
    await play(FadeIn(frequencyAxes));
  }

  Future addDots() async {
    partialFourierGraph = VMobject()
      ..setFill(color: TRANSPARENT)
      ..setPoints([fourierGraph.getEnd()]);
    centerOfMass = Dot(ORIGIN)..setColor(color: RED_C);
    fourierDot = Dot(fourierGraph.getEnd())..setColor(color: RED_C);

    centerOfMass
        .addUpdater((dot, dt) => dot..moveToPoint(polarized.getCenterOfMass()));

    await play(FadeIn(centerOfMass));
    await play(FadeIn(fourierDot));

    fourierDot.addUpdater(fourierDotCreationUpdater);
  }

  Mobject fourierDotCreationUpdater(Mobject dot, double dt) =>
      dot..moveToPoint(partialFourierGraph.getStart());

  Future addText() async {
    var windingText = Text('')
      ..nextToMobject(circlePlane, direction: UP)
      ..shift(DOWN / 2)
      ..setColor(color: LIGHT_GRAY);
    await play(FadeIn(windingText));
    windingText.addUpdater((_, dt) => windingText
      ..content = '${windingFrequency.toStringAsFixed(2)} cycles / second');
  }

  Future showFourierGraphCreation() async {
    addToFront([fourierDot, partialFourierGraph]);

    partialFourierGraph.addUpdater((graph, dt) =>
        graph..pointwiseBecomePartial(fourierGraph, windingFrequency / 5, 1));

    await play(getFrequencyChangeAnimation(wave, polarized, 5, 2, runTime: 12));
    await play(getFrequencyChangeAnimation(wave, polarized, 2, 0, runTime: 10));

    remove([partialFourierGraph]);
    add([fourierGraph]);
  }

  Future addWaveWithAxes() async {
    addTimeAxes();
    // wave = getCosineWave(shiftVal: 0, scaleVal: 1.8); // positive and negative
    wave = getCosineWave(); // positive only
    await play(FadeIn(timeAxes));
    await play(ShowCreation(wave));
  }

  Future addPolarizedWaveWithAxes() async {
    addCirclePlane();
    var polarizedTarget = getPolarizedMobject(wave, windingFrequency);
    polarized = wave.copy();
    await play(FadeIn(circlePlane));
    await play(Transform(polarized, target: polarizedTarget));
  }

  void makeInteractive() {
    fourierDot.removeUpdater(fourierDotCreationUpdater);

    var draggableDot = DraggableMobject(mob: fourierDot);
    draggableDot.addUpdater(draggableDotOnFunctionUpdater);

    add([draggableDot]);
  }

  Mobject draggableDotOnFunctionUpdater(Mobject dot, double dt) {
    var coords = frequencyAxes.pointToCoords(fourierDot.getPos());
    var x = clip(coords.x, 0, 5).toDouble();
    var pt = fourierGraph.getPointFromParametricFunction(x);
    fourierDot.moveToPoint(pt);

    windingFrequency = x;
    polarized.become(getPolarizedMobject(wave, x));

    return dot;
  }

  ParametricFunction getFourierGraph(ParametricFunction wave) {
    return frequencyAxes.getGraph((x) => getFourierTransform(x, wave).real,
        stepSize: 0.05 / resolution);
  }

  Complex getFourierTransform(double x, ParametricFunction wave,
      {bool useAlmostFourierTransform = true}) {
    var anchors = wave.getAnchors();

    var _polarizePoint = (Vector3 pt, double freq) {
      var coords = timeAxes.pointToCoords(pt);

      var t = coords.x;
      var y = coords.y;

      var z = Complex.exp(angle: -TAU * freq * t) * Complex.fromDouble(y);

      return z;
    };

    var polarizedPoints = [for (var pt in anchors) _polarizePoint(pt, x)];

    // TODO When the fft function will be working properly, use the code bellow
    // var coords = [for (var pt in anchors) timeAxes.p2c(pt)];
    // var values = [for (var c in coords) c.y];

    // var polarizedPoints = fft(values);

    var scalar = Complex.fromDouble(
        useAlmostFourierTransform ? 1 / polarizedPoints.length : 1);

    return polarizedPoints.reduce((a, b) => a + b) * scalar;
  }

  Axes addTimeAxes() {
    timeAxes = Axes(
      xMin: 0,
      xMax: 4.4,
      yMin: -1,
      yMax: 2.5,
      xAxisConfig: AxisConfig(
        tickFrequency: 0.25,
        numbersWithElongatedTicks: [0, 1, 2, 3, 4],
        unitSize: 2,
      ),
      yAxisConfig: AxisConfig(
        unitSize: 0.5,
        numbersWithElongatedTicks: [],
      ),
      axisConfig: AxisConfig(
        includeTip: true,
      ),
    )
      ..setColor(color: LIGHT_GREY)
      ..toCorner(corner: UL);

    // TODO Add labels

    return timeAxes;
  }

  NumberPlane addCirclePlane() {
    circlePlane = NumberPlane(xMin: -2.1, yMin: -2.1, yMax: 2.1, xMax: 2.1)
      ..scale(0.8)
      ..toCorner(corner: DL);

    dashedCircle = Circle().getDashed(numDashes: 50)
      ..setStroke(width: DEFAULT_STROKE_WIDTH / 2)
      ..scale(0.8)
      ..shift(circlePlane.coordsToPoint(ORIGIN));

    circlePlane.addToFront([dashedCircle]);

    return circlePlane;
  }

  Axes addFrequencyAxes() {
    frequencyAxes = Axes(
      axisConfig: AxisConfig(color: TEAL_C),
      xMin: 0,
      xMax: 5,
      xAxisConfig:
          AxisConfig(unitSize: 1, numbersToShow: range(start: 1, end: 6)),
      yMin: -1,
      yMax: 1,
      yAxisConfig:
          AxisConfig(unitSize: 1.4, tickFrequency: 0.5, labelDirection: LEFT),
    )..setColor(color: TEAL_C);

    frequencyAxes.nextToMobject(circlePlane, direction: RIGHT);
    frequencyBox =
        SurroundingRectangle(mobject: frequencyAxes, buff: MED_SMALL_BUFFER)
          ..setStroke(color: TEAL_C);

    // TODO add labels

    return frequencyAxes;
  }

  ParametricFunction getTimeGraph(double Function(double) func,
      [double stepSize = 0.05 / resolution]) {
    return timeAxes.getGraph(func, stepSize: stepSize)
      ..setStroke(color: YELLOW_C)
      ..setFill(color: TRANSPARENT);
  }

  ParametricFunction getCosineWave(
          {List<double> frequencies = const [2],
          double shiftVal = 1,
          double scaleVal = 0.9,
          double stepSize = 0.05 / resolution}) =>
      getTimeGraph(
          (t) =>
              shiftVal +
              scaleVal *
                  sum([for (var freq in frequencies) cos(TAU * t * freq)]),
          stepSize);

  Mobject getPolarizedMobject(Mobject mob, double windingFrequency) {
    var polarizedMobject = mob.copy();
    polarizedMobject.applyFunction((pt) => polarizePoint(pt, windingFrequency));
    return polarizedMobject;
  }

  Vector3 polarizePoint(Vector3 pt, double windingFrequency) {
    var coords = timeAxes.pointToCoords(pt);

    var t = coords.x;
    var y = coords.y;

    var z =
        Complex.exp(angle: -TAU * windingFrequency * t) * Complex.fromDouble(y);

    return circlePlane.coordsToPoint(z.toVector3());
  }

  UpdateFromFunc getPolarizedAnimation(
      Mobject mobject, double windingFrequency) {
    var polarized = getPolarizedMobject(mobject, windingFrequency);

    return UpdateFromFunc(
        mobject: polarized,
        updateFunc: (mob) {
          Transform(mob, target: getPolarizedMobject(mobject, windingFrequency))
              .update(1);
          return mob;
        });
  }

  Future animateFrequencyChange(List<Tuple2<Mobject, Mobject>> mobjects,
      double startWindingFrequency, double newWindingFrequency,
      {double runTime = 3, List<Animation> addedAnimations = const []}) async {
    await playMany([
      for (var mob in mobjects)
        getFrequencyChangeAnimation(
            mob.item1, mob.item2, startWindingFrequency, newWindingFrequency),
      ...addedAnimations
    ]);
  }

  UpdateFromAlphaFunc getFrequencyChangeAnimation(
      Mobject mobject,
      Mobject polarized,
      double startWindingFrequency,
      double newWindingFrequency,
      {double runTime = 3}) {
    return UpdateFromAlphaFunc(
        mobject: polarized,
        updateFunc: (pm, alpha) {
          var freq =
              interpolate(startWindingFrequency, newWindingFrequency, alpha);
          windingFrequency = freq;

          var newPm = getPolarizedMobject(mobject, freq);

          pm.become(newPm);

          return pm;
        },
        runTime: runTime);
  }
}
